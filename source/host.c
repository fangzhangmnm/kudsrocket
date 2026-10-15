// KudsRocket 核宿主：libretro 前端（wasm）—— created 20261014 by Claude Opus 5.5
//
// 跑在 Emscripten 的 pthread 里（链接时 -sPROXY_TO_PTHREAD）：浏览器主线程只管读盘、画面、输入，从不被核卡住。
//
// 读盘（架构稿 §2）：核经 libretro VFS 读 /disc/ 下的文件。这里不把盘放进任何文件系统，而是：
//   核所在线程 → emscripten_proxy_sync_with_ctx 把请求交给主线程并阻塞 →
//   主线程 JS 调 Module.krMedia.read(offset, length)（异步：本地 File / 以后的 store FileStream）→
//   字节写进共享内存 → emscripten_proxy_finish 叫醒核线程。
//   整盘永远不进内存：只有一个按块的缓存，总大小有上限（KR_CACHE_BLOCKS × KR_BLOCK_BYTES）。
// 其他路径（/system 下 PPSSPP 的资源、/saves 下存档）交给 libretro-common 自带的默认 VFS 实现（Emscripten 内存文件系统）。
// 画面两条路：
//   · GPU（默认）：页面的 #gl 画布以 OffscreenCanvas 交给本线程（链接参数 -sOFFSCREENCANVASES_TO_PTHREAD=#gl），
//     在这里建 WebGL2 上下文 + 一块离屏帧缓冲给核画（libretro HW render）；每帧画完 blit 到画布，线程让出时浏览器自己提交上屏，不经主线程。
//     核（GLES 构建）在 retro_run 里统一执行 GL 命令，游戏逻辑另在它自己的模拟线程里跑——GL 调用只发生在本线程。
//   · 软件（兜底）：建不出 WebGL2 就拒绝核的 GPU 请求，核自动退回软件渲染；每帧像素放进共享内存，主线程画到 #screen（2D）。
// 声音 + 限速（M2.5）：核每帧的 PCM 写进共享内存的环形缓冲，浏览器 AudioWorklet 线程直接从共享内存取（不经主线程）。
//   两种限速（user 10-14「音频视频输入尽量对齐，宁愿爆音（以后可以有两个模式，低性能手机看galge不怕对不齐怕爆音，
//   然后普通性能电脑玩游戏就不怕爆音怕对不齐」）：
//   · 对齐（默认）：模拟只跟墙钟走；声音是随从——缓冲超过上限就丢新来的（爆音），不够就补静音（爆音），延迟始终有上限。
//   · 顺滑：跟声音时钟走（不爆音，允许对不齐）；声音时钟卡住超过 50 ms 就退回墙钟，绝不让模拟跟着停。
//   起因：10-14 无头浏览器里 AudioContext 的时钟停了，「跟声音时钟走」的版本整个模拟跟着停在剧情里。

#include <emscripten.h>
#include <emscripten/proxying.h>
#include <emscripten/threading.h>
#include <emscripten/html5.h>
#include <GLES3/gl3.h>
#include <libretro.h>
#include <pthread.h>
#include <stdarg.h>
#include <stdatomic.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <malloc.h>
#include <sys/stat.h>

// ───────────── libretro-common 自带的默认 VFS 实现（在核的静态库里）─────────────
// 参数里的句柄类型在那边叫 libretro_vfs_implementation_file；这里只当不透明指针传。
void *retro_vfs_file_open_impl(const char *path, unsigned mode, unsigned hints);
int retro_vfs_file_close_impl(void *stream);
int retro_vfs_file_error_impl(void *stream);
int64_t retro_vfs_file_size_impl(void *stream);
int64_t retro_vfs_file_truncate_impl(void *stream, int64_t length);
int64_t retro_vfs_file_tell_impl(void *stream);
int64_t retro_vfs_file_seek_impl(void *stream, int64_t offset, int seek_position);
int64_t retro_vfs_file_read_impl(void *stream, void *s, uint64_t len);
int64_t retro_vfs_file_write_impl(void *stream, const void *s, uint64_t len);
int retro_vfs_file_flush_impl(void *stream);
int retro_vfs_file_remove_impl(const char *path);
int retro_vfs_file_rename_impl(const char *old_path, const char *new_path);
const char *retro_vfs_file_get_path_impl(void *stream);
int retro_vfs_stat_impl(const char *path, int32_t *size);
int retro_vfs_mkdir_impl(const char *dir);
void *retro_vfs_opendir_impl(const char *dir, bool include_hidden);
bool retro_vfs_readdir_impl(void *dirstream);
const char *retro_vfs_dirent_get_name_impl(void *dirstream);
bool retro_vfs_dirent_is_dir_impl(void *dirstream);
int retro_vfs_closedir_impl(void *dirstream);

// ───────────── 盘：按块缓存 + 跨线程读 ─────────────
#define DISC_PREFIX "/disc/"
#define KR_BLOCK_BYTES (256 * 1024)
#define KR_CACHE_BLOCKS 128 // 32 MiB 上限

static char g_disc_path[512];
static int64_t g_disc_size = -1;

typedef struct {
  int64_t block; // -1 = 空
  uint64_t last_used;
  uint8_t *data;
  int32_t len;
} cache_slot;

static cache_slot g_cache[KR_CACHE_BLOCKS];
static uint64_t g_cache_clock = 0;
static pthread_mutex_t g_cache_lock = PTHREAD_MUTEX_INITIALIZER;
static atomic_uint_least64_t g_bytes_fetched = 0;
static atomic_uint_least32_t g_reads_waiting = 0;

typedef struct {
  uint8_t *dst;
  double offset;
  int32_t len;
  int32_t got; // JS 写回：实际读到的字节数；-1 = 出错
} read_req;

// 主线程上执行：发起异步读，读完把字节写进 dst、把实际字节数写进 *got（出错 -1），再 _kr_read_finish 叫醒等待的线程。
EM_JS(void, kr_js_start_read, (em_proxying_ctx *ctx, uint8_t *dst, double offset, int len, int32_t *got), {
  const media = Module["krMedia"];
  const done = (n) => {
    HEAP32[got >> 2] = n;
    _kr_read_finish(ctx);
  };
  if (!media) { done(-1); return; }
  Promise.resolve(media.read(offset, len)).then((bytes) => {
    const n = Math.min(len, bytes.length);
    HEAPU8.set(bytes.subarray(0, n), dst);
    done(n);
  }, (e) => {
    err("[kr] media read failed at " + offset + ": " + e);
    done(-1);
  });
});

EMSCRIPTEN_KEEPALIVE void kr_read_finish(em_proxying_ctx *ctx) {
  emscripten_proxy_finish(ctx);
}

static void read_on_main(em_proxying_ctx *ctx, void *arg) {
  read_req *req = (read_req *)arg;
  kr_js_start_read(ctx, req->dst, req->offset, req->len, &req->got);
}

// 从数据源取一个块（阻塞）。返回实际字节数，出错返回 -1。
static int32_t fetch_block(int64_t block, uint8_t *dst) {
  int64_t off = block * (int64_t)KR_BLOCK_BYTES;
  int64_t len = g_disc_size - off;
  if (len > KR_BLOCK_BYTES) len = KR_BLOCK_BYTES;
  if (len <= 0) return 0;
  read_req req = {dst, (double)off, (int32_t)len, -1};
  atomic_fetch_add(&g_reads_waiting, 1);
  int ok = emscripten_proxy_sync_with_ctx(emscripten_proxy_get_system_queue(), emscripten_main_runtime_thread_id(),
                                          read_on_main, &req);
  atomic_fetch_sub(&g_reads_waiting, 1);
  if (!ok || req.got < 0) return -1;
  atomic_fetch_add(&g_bytes_fetched, (uint64_t)req.got);
  return req.got;
}

// 读 [offset, offset+len) 到 dst。返回实际读到的字节数，出错返回 -1。
static int64_t disc_read(int64_t offset, uint8_t *dst, int64_t len) {
  if (offset >= g_disc_size || len <= 0) return 0;
  if (offset + len > g_disc_size) len = g_disc_size - offset;
  int64_t done = 0;
  pthread_mutex_lock(&g_cache_lock);
  while (done < len) {
    int64_t pos = offset + done;
    int64_t block = pos / KR_BLOCK_BYTES;
    int32_t within = (int32_t)(pos % KR_BLOCK_BYTES);
    cache_slot *hit = NULL, *victim = &g_cache[0];
    for (int i = 0; i < KR_CACHE_BLOCKS; i++) {
      if (g_cache[i].block == block) { hit = &g_cache[i]; break; }
      if (g_cache[i].last_used < victim->last_used) victim = &g_cache[i];
    }
    if (!hit) {
      if (!victim->data) victim->data = (uint8_t *)malloc(KR_BLOCK_BYTES);
      victim->block = -1;
      int32_t n = fetch_block(block, victim->data);
      if (n < 0) { pthread_mutex_unlock(&g_cache_lock); return -1; }
      victim->block = block;
      victim->len = n;
      hit = victim;
    }
    hit->last_used = ++g_cache_clock;
    int64_t take = hit->len - within;
    if (take > len - done) take = len - done;
    if (take <= 0) break;
    memcpy(dst + done, hit->data + within, (size_t)take);
    done += take;
  }
  pthread_mutex_unlock(&g_cache_lock);
  return done;
}

// ───────────── VFS：/disc/ 走上面，其他走默认实现 ─────────────
struct retro_vfs_file_handle {
  bool is_disc;
  void *impl;
  int64_t pos;
  char path[512];
};

static bool is_disc_path(const char *path) {
  return path && strncmp(path, DISC_PREFIX, strlen(DISC_PREFIX)) == 0;
}

static const char *vfs_get_path(struct retro_vfs_file_handle *h) {
  return h->is_disc ? h->path : retro_vfs_file_get_path_impl(h->impl);
}

static struct retro_vfs_file_handle *vfs_open(const char *path, unsigned mode, unsigned hints) {
  if (is_disc_path(path)) {
    if (strcmp(path, g_disc_path) != 0 || mode != RETRO_VFS_FILE_ACCESS_READ) return NULL;
    struct retro_vfs_file_handle *h = calloc(1, sizeof(*h));
    h->is_disc = true;
    snprintf(h->path, sizeof(h->path), "%s", path);
    return h;
  }
  void *impl = retro_vfs_file_open_impl(path, mode, hints);
  if (!impl) return NULL;
  struct retro_vfs_file_handle *h = calloc(1, sizeof(*h));
  h->impl = impl;
  return h;
}

static int vfs_close(struct retro_vfs_file_handle *h) {
  int r = h->is_disc ? 0 : retro_vfs_file_close_impl(h->impl);
  free(h);
  return r;
}

static int64_t vfs_size(struct retro_vfs_file_handle *h) {
  return h->is_disc ? g_disc_size : retro_vfs_file_size_impl(h->impl);
}

static int64_t vfs_truncate(struct retro_vfs_file_handle *h, int64_t length) {
  return h->is_disc ? -1 : retro_vfs_file_truncate_impl(h->impl, length);
}

static int64_t vfs_tell(struct retro_vfs_file_handle *h) {
  return h->is_disc ? h->pos : retro_vfs_file_tell_impl(h->impl);
}

static int64_t vfs_seek(struct retro_vfs_file_handle *h, int64_t offset, int whence) {
  if (!h->is_disc) return retro_vfs_file_seek_impl(h->impl, offset, whence);
  int64_t base = whence == RETRO_VFS_SEEK_POSITION_START ? 0 : whence == RETRO_VFS_SEEK_POSITION_CURRENT ? h->pos : g_disc_size;
  int64_t next = base + offset;
  if (next < 0) return -1;
  h->pos = next;
  // 照 libretro-common 默认实现（retro_vfs_file_seek_impl = fseek 的返回值）：成功返回 0，不是新位置。
  // libretro.h 的注释说「返回新位置」，但核（PPSSPP 的 GetFileSize）按「成功 = 0」用；跟实现走，不跟注释走。
  return 0;
}

// 「游戏这一局读过的盘上字节」并集的大小（挂机判定的进展信号；user 10-14「盘区取决于chunk的大小…换一个数学上稳健的」）。
//   量在游戏自己的读请求上（我们的块缓存的上游），用一张扇区位图：ISO 的逻辑块 = 2048 字节是盘格式定的，PPSSPP 读 ISO 也按整块读，
//   所以「位图里置位的扇区 × 2048」就是并集的字节数（末扇区按盘尾截断）。循环的 BGM / 反复播的动画读的是读过的字节，并集不长。
//   added 20261014 by Claude Opus 5.5
#define KR_SECTOR 2048
static _Atomic uint8_t *g_seen = NULL;
static _Atomic uint64_t g_seen_bytes = 0;
EMSCRIPTEN_KEEPALIVE double kr_disc_seen_bytes(void) { return (double)g_seen_bytes; }
// 核堆用了多少（状态栏的「内存」；user 10-14「显示帧率，网络和内存」）：wasm 版没有 mmap，PPSSPP 的分配全走 malloc，mallinfo 就是全部。added 20261014 by Claude Opus 5.5
EMSCRIPTEN_KEEPALIVE double kr_heap_used(void) { struct mallinfo mi = mallinfo(); return (double)(unsigned)mi.uordblks; }
static void mark_seen(int64_t offset, int64_t len) {
  if (!g_seen || len <= 0) return;
  for (int64_t sec = offset / KR_SECTOR, last = (offset + len - 1) / KR_SECTOR; sec <= last; sec++) {
    uint8_t mask = (uint8_t)(1u << (sec & 7));
    if (atomic_fetch_or_explicit(&g_seen[sec >> 3], mask, memory_order_relaxed) & mask) continue;
    int64_t span = g_disc_size - sec * KR_SECTOR;
    atomic_fetch_add_explicit(&g_seen_bytes, (uint64_t)(span < KR_SECTOR ? span : KR_SECTOR), memory_order_relaxed);
  }
}

static int64_t vfs_read(struct retro_vfs_file_handle *h, void *s, uint64_t len) {
  if (!h->is_disc) return retro_vfs_file_read_impl(h->impl, s, len);
  int64_t n = disc_read(h->pos, (uint8_t *)s, (int64_t)len);
  if (n > 0) { mark_seen(h->pos, n); h->pos += n; }
  return n;
}

static int64_t vfs_write(struct retro_vfs_file_handle *h, const void *s, uint64_t len) {
  return h->is_disc ? -1 : retro_vfs_file_write_impl(h->impl, s, len);
}

static int vfs_flush(struct retro_vfs_file_handle *h) {
  return h->is_disc ? 0 : retro_vfs_file_flush_impl(h->impl);
}

static int vfs_remove(const char *path) {
  return is_disc_path(path) ? -1 : retro_vfs_file_remove_impl(path);
}

static int vfs_rename(const char *a, const char *b) {
  return (is_disc_path(a) || is_disc_path(b)) ? -1 : retro_vfs_file_rename_impl(a, b);
}

static int vfs_stat(const char *path, int32_t *size) {
  if (is_disc_path(path)) {
    if (strcmp(path, g_disc_path) == 0) {
      if (size) *size = g_disc_size > INT32_MAX ? INT32_MAX : (int32_t)g_disc_size;
      return RETRO_VFS_STAT_IS_VALID;
    }
    if (strcmp(path, DISC_PREFIX) == 0 || strcmp(path, "/disc") == 0) return RETRO_VFS_STAT_IS_VALID | RETRO_VFS_STAT_IS_DIRECTORY;
    return 0;
  }
  return retro_vfs_stat_impl(path, size);
}

static int vfs_mkdir(const char *dir) {
  return is_disc_path(dir) ? -1 : retro_vfs_mkdir_impl(dir);
}

static struct retro_vfs_dir_handle *vfs_opendir(const char *dir, bool include_hidden) {
  return (struct retro_vfs_dir_handle *)retro_vfs_opendir_impl(dir, include_hidden);
}
static bool vfs_readdir(struct retro_vfs_dir_handle *d) { return retro_vfs_readdir_impl(d); }
static const char *vfs_dirent_get_name(struct retro_vfs_dir_handle *d) { return retro_vfs_dirent_get_name_impl(d); }
static bool vfs_dirent_is_dir(struct retro_vfs_dir_handle *d) { return retro_vfs_dirent_is_dir_impl(d); }
static int vfs_closedir(struct retro_vfs_dir_handle *d) { return retro_vfs_closedir_impl(d); }

static struct retro_vfs_interface g_vfs = {
  vfs_get_path, vfs_open, vfs_close, vfs_size, vfs_tell, vfs_seek, vfs_read, vfs_write, vfs_flush, vfs_remove, vfs_rename,
  vfs_truncate,
  vfs_stat, vfs_mkdir, vfs_opendir, vfs_readdir, vfs_dirent_get_name, vfs_dirent_is_dir, vfs_closedir,
};

// ───────────── GPU：WebGL2 上下文 + 离屏帧缓冲（libretro HW render）─────────────
// PPSSPP 的 GLES 构建把 GLES3 才有的函数（glBlitFramebuffer、glTexStorage2D…）声明成同名的函数指针变量（gl3stub，运行时经
// get_proc_address 填），和标准函数撞名、链接报「symbol type mismatch」。这里直接调 Emscripten 自带的带前缀实现——
// 也正是 emscripten_webgl_get_proc_address 交给 PPSSPP 的那两个函数。
void emscripten_glBlitFramebuffer(GLint, GLint, GLint, GLint, GLint, GLint, GLint, GLint, GLbitfield, GLenum);
void emscripten_glTexStorage2D(GLenum, GLsizei, GLenum, GLsizei, GLsizei);

static EMSCRIPTEN_WEBGL_CONTEXT_HANDLE g_gl = 0;
static struct retro_hw_render_callback g_hw;
static bool g_hw_accepted = false;  // 核要了 GPU 且我们答应了
static GLuint g_fbo = 0, g_fbo_color = 0, g_fbo_depth = 0;
static int g_fbo_w = 0, g_fbo_h = 0;
static atomic_int g_hw_active = 0;  // 主线程据此决定显示哪块画布

EMSCRIPTEN_KEEPALIVE int kr_hw_active(void) { return g_hw_active; }

// 低延迟画布（user 10-14：PPSSPP 里一般不开 vsync）：浏览器默认不允许撕裂，核按自己节拍出帧时，和显示器刷新的相位一错开就会
// 「一次刷新两张新帧（一张没显示）/ 一次一张都没有（重复）」——看着一顿一顿。desynchronized 画布绕过合成器直接上屏（允许撕裂），
// 最接近原生 PPSSPP 关 vsync 的手感。Emscripten 的 C 属性结构里没有这个字段，但 GL.createContext 会把整个属性对象原样交给 getContext。
// 返回上下文句柄（失败 0）；*honored = 浏览器是否真的采纳了 desynchronized。
EM_JS(int, kr_gl_create_desync, (int *honored), {
  var t = findCanvasEventTarget('#gl');
  var canvas = t && (t.canvas || t.offscreenCanvas || t);
  if (!canvas || !canvas.getContext) return 0;
  var attrs = { majorVersion: 2, minorVersion: 0, alpha: false, depth: true, stencil: true, antialias: false,
                premultipliedAlpha: false, preserveDrawingBuffer: false, powerPreference: 'high-performance', desynchronized: true };
  var h = GL.createContext(canvas, attrs);
  if (!h) return 0;
  var ctx = GL.getContext(h).GLctx;
  HEAP32[honored >> 2] = (ctx.getContextAttributes && ctx.getContextAttributes().desynchronized) ? 1 : 0;
  return h;
});
static bool g_want_desync = false;
static atomic_int g_desync_state = 0; // 0 = 没要；1 = 要了且浏览器采纳；2 = 要了但浏览器没采纳
EMSCRIPTEN_KEEPALIVE int kr_desync_state(void) { return g_desync_state; }

static bool gl_create(void) {
  if (g_want_desync) {
    int honored = 0;
    g_gl = kr_gl_create_desync(&honored);
    if (g_gl > 0) {
      emscripten_webgl_make_context_current(g_gl);
      g_desync_state = honored ? 1 : 2;
      return true;
    }
    fprintf(stderr, "[kr] desynchronized WebGL2 context failed; trying a normal one\n");
  }
  EmscriptenWebGLContextAttributes a;
  emscripten_webgl_init_context_attributes(&a);
  a.majorVersion = 2;
  a.minorVersion = 0;
  a.alpha = false;
  a.depth = true;
  a.stencil = true;
  a.antialias = false;
  a.premultipliedAlpha = false;
  a.preserveDrawingBuffer = false;
  a.powerPreference = EM_WEBGL_POWER_PREFERENCE_HIGH_PERFORMANCE;
  a.proxyContextToMainThread = EMSCRIPTEN_WEBGL_CONTEXT_PROXY_DISALLOW;
  a.renderViaOffscreenBackBuffer = false;
  g_gl = emscripten_webgl_create_context("#gl", &a);
  if (g_gl <= 0) { fprintf(stderr, "[kr] WebGL2 unavailable (%d); software rendering\n", (int)g_gl); g_gl = 0; return false; }
  emscripten_webgl_make_context_current(g_gl);
  return true;
}

static void gl_make_fbo(int w, int h) {
  if (g_fbo && w == g_fbo_w && h == g_fbo_h) return;
  if (g_fbo) { glDeleteFramebuffers(1, &g_fbo); glDeleteTextures(1, &g_fbo_color); glDeleteRenderbuffers(1, &g_fbo_depth); }
  glGenTextures(1, &g_fbo_color);
  glBindTexture(GL_TEXTURE_2D, g_fbo_color);
  emscripten_glTexStorage2D(GL_TEXTURE_2D, 1, GL_RGBA8, w, h);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
  glGenRenderbuffers(1, &g_fbo_depth);
  glBindRenderbuffer(GL_RENDERBUFFER, g_fbo_depth);
  glRenderbufferStorage(GL_RENDERBUFFER, GL_DEPTH24_STENCIL8, w, h);
  glGenFramebuffers(1, &g_fbo);
  glBindFramebuffer(GL_FRAMEBUFFER, g_fbo);
  glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, g_fbo_color, 0);
  glFramebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_STENCIL_ATTACHMENT, GL_RENDERBUFFER, g_fbo_depth);
  GLenum st = glCheckFramebufferStatus(GL_FRAMEBUFFER);
  if (st != GL_FRAMEBUFFER_COMPLETE) fprintf(stderr, "[kr] FBO incomplete: 0x%x\n", st);
  glBindFramebuffer(GL_FRAMEBUFFER, 0);
  g_fbo_w = w;
  g_fbo_h = h;
}

static uintptr_t hw_get_current_framebuffer(void) { return g_fbo; }
static retro_proc_address_t hw_get_proc_address(const char *sym) {
  return (retro_proc_address_t)emscripten_webgl_get_proc_address(sym);
}

// ── 出帧节奏统计（10-14 user：「显示的60fps但是卡顿明显」——平均 60 帧也可能是忽快忽慢，要量间隔）──
// 每次上屏记一下距上一帧多少 ms；主线程每秒取一次汇总并清零。
static double g_pres_last = 0, g_pres_n = 0, g_pres_sum = 0, g_pres_sumsq = 0, g_pres_max = 0;
static double g_pres_win[256];
static int g_pres_count = 0;
static void record_present(void) {
  double now = emscripten_get_now();
  if (g_pres_last > 0) {
    double d = now - g_pres_last;
    g_pres_n += 1; g_pres_sum += d; g_pres_sumsq += d * d;
    if (d > g_pres_max) g_pres_max = d;
    if (g_pres_count < 256) g_pres_win[g_pres_count++] = d;
  }
  g_pres_last = now;
}
// out[0..5] = 帧数、平均 ms、标准差 ms、最长 ms、「拖了」（> 平均 × 1.5）次数、「挤了」（< 平均 × 0.5）次数；
// out[6..7] = 每帧模拟时长（按声音产出量算）的平均 / 标准差 ms
void kr_frame_ms_stats(double *out);
EMSCRIPTEN_KEEPALIVE void kr_pace_stats(double *out) {
  kr_frame_ms_stats(out + 6);
  double n = g_pres_n, mean = n ? g_pres_sum / n : 0, var = n ? g_pres_sumsq / n - mean * mean : 0;
  int late = 0, bunched = 0;
  for (int i = 0; i < g_pres_count; i++) { if (g_pres_win[i] > mean * 1.5) late++; if (g_pres_win[i] < mean * 0.5) bunched++; }
  out[0] = n; out[1] = mean; out[2] = var > 0 ? sqrt(var) : 0; out[3] = g_pres_max; out[4] = late; out[5] = bunched;
  g_pres_n = g_pres_sum = g_pres_sumsq = g_pres_max = 0;
  g_pres_count = 0;
}

// 核画完一帧：把离屏帧缓冲 blit 到画布（左下角原点，和默认帧缓冲一致，不用翻转）
// 画布按页面告诉的显示像素建（含高分屏倍率），放大自己在 GPU 里做（见 gl_present）——不靠 CSS 的 image-rendering
// （低延迟画布绕过合成器，CSS 那条不起作用；user 10-14「2的时候你忘了interpolation=nearest」）。
static atomic_int g_disp_w = 0, g_disp_h = 0;
EMSCRIPTEN_KEEPALIVE void kr_set_display_size(int w, int h) { g_disp_w = w; g_disp_h = h; }

// 放大：填满画布、保持比例。正好整数倍 → 直接最近邻；否则「清晰双线性」——先最近邻放到刚好超过目标的整数倍，
// 再线性缩到目标：看着和最近邻一样锐利，又没有非整数最近邻那种像素一列宽一列窄。
// （10-14 user 截图：只做整数倍时，窗口不到 2 倍宽就只能 1 倍、四周大黑边。）
static GLuint g_up_fbo = 0, g_up_tex = 0;
static int g_up_w = 0, g_up_h = 0;
static void ensure_up(int w, int h) {
  if (g_up_fbo && w == g_up_w && h == g_up_h) return;
  if (g_up_fbo) { glDeleteFramebuffers(1, &g_up_fbo); glDeleteTextures(1, &g_up_tex); }
  glGenTextures(1, &g_up_tex);
  glBindTexture(GL_TEXTURE_2D, g_up_tex);
  emscripten_glTexStorage2D(GL_TEXTURE_2D, 1, GL_RGBA8, w, h);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
  glGenFramebuffers(1, &g_up_fbo);
  glBindFramebuffer(GL_FRAMEBUFFER, g_up_fbo);
  glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, g_up_tex, 0);
  g_up_w = w;
  g_up_h = h;
}

static void gl_present(unsigned w, unsigned h) {
  record_present();
  int tw = g_disp_w > 0 ? g_disp_w : (int)w, th = g_disp_h > 0 ? g_disp_h : (int)h;
  int cw = 0, ch = 0;
  emscripten_get_canvas_element_size("#gl", &cw, &ch);
  if (cw != tw || ch != th) { emscripten_set_canvas_element_size("#gl", tw, th); cw = tw; ch = th; }
  double f = fmin((double)cw / w, (double)ch / h);
  int dw = (int)lround(w * f), dh = (int)lround(h * f);
  int dx = (cw - dw) / 2, dy = (ch - dh) / 2;
  glBindFramebuffer(GL_DRAW_FRAMEBUFFER, 0);
  glViewport(0, 0, cw, ch);
  if (dw != cw || dh != ch) { glClearColor(0, 0, 0, 1); glClear(GL_COLOR_BUFFER_BIT); }
  if (f < 1.0 || fabs(f - round(f)) < 1e-3) {
    glBindFramebuffer(GL_READ_FRAMEBUFFER, g_fbo);
    emscripten_glBlitFramebuffer(0, 0, (GLint)w, (GLint)h, dx, dy, dx + dw, dy + dh, GL_COLOR_BUFFER_BIT, f < 1.0 ? GL_LINEAR : GL_NEAREST);
  } else {
    int k = (int)ceil(f);
    ensure_up((int)w * k, (int)h * k);
    glBindFramebuffer(GL_READ_FRAMEBUFFER, g_fbo);
    glBindFramebuffer(GL_DRAW_FRAMEBUFFER, g_up_fbo);
    emscripten_glBlitFramebuffer(0, 0, (GLint)w, (GLint)h, 0, 0, (GLint)w * k, (GLint)h * k, GL_COLOR_BUFFER_BIT, GL_NEAREST);
    glBindFramebuffer(GL_READ_FRAMEBUFFER, g_up_fbo);
    glBindFramebuffer(GL_DRAW_FRAMEBUFFER, 0);
    emscripten_glBlitFramebuffer(0, 0, (GLint)w * k, (GLint)h * k, dx, dy, dx + dw, dy + dh, GL_COLOR_BUFFER_BIT, GL_LINEAR);
  }
  glBindFramebuffer(GL_FRAMEBUFFER, g_fbo);
}

// ───────────── 画面 / 声音 / 输入 ─────────────
#define FRAME_MAX_W 1024
#define FRAME_MAX_H 1024
static uint32_t g_frame[FRAME_MAX_W * FRAME_MAX_H]; // XRGB8888（内存里按字节是 B,G,R,X）
static atomic_int g_frame_w = 0, g_frame_h = 0;
static atomic_uint g_frame_seq = 0;
static atomic_uint g_input = 0; // libretro joypad 位图（bit = RETRO_DEVICE_ID_JOYPAD_*）
static atomic_int g_analog_x = 0, g_analog_y = 0; // 左摇杆，-32768..32767（主线程从手柄写）
static atomic_uint_least64_t g_frames_run = 0;

EMSCRIPTEN_KEEPALIVE uint32_t *kr_frame_ptr(void) { return g_frame; }
EMSCRIPTEN_KEEPALIVE int kr_frame_w(void) { return g_frame_w; }
EMSCRIPTEN_KEEPALIVE int kr_frame_h(void) { return g_frame_h; }
EMSCRIPTEN_KEEPALIVE unsigned kr_frame_seq(void) { return g_frame_seq; }
EMSCRIPTEN_KEEPALIVE void kr_set_input(unsigned mask) { g_input = mask; }
EMSCRIPTEN_KEEPALIVE void kr_set_analog(int x, int y) { g_analog_x = x; g_analog_y = y; }
EMSCRIPTEN_KEEPALIVE unsigned kr_get_input(void) { return g_input; }
EMSCRIPTEN_KEEPALIVE double kr_stat_frames(void) { return (double)g_frames_run; }
EMSCRIPTEN_KEEPALIVE double kr_stat_bytes_fetched(void) { return (double)g_bytes_fetched; }
EMSCRIPTEN_KEEPALIVE int kr_stat_reads_waiting(void) { return (int)g_reads_waiting; }

static void video_refresh(const void *data, unsigned width, unsigned height, size_t pitch) {
  if (data == RETRO_HW_FRAME_BUFFER_VALID) {
    gl_present(width, height);
    g_frame_w = (int)width;
    g_frame_h = (int)height;
    atomic_fetch_add(&g_frame_seq, 1);
    return;
  }
  if (!data) return;
  record_present();
  if (width > FRAME_MAX_W) width = FRAME_MAX_W;
  if (height > FRAME_MAX_H) height = FRAME_MAX_H;
  for (unsigned y = 0; y < height; y++)
    memcpy(g_frame + (size_t)y * width, (const uint8_t *)data + y * pitch, width * 4);
  g_frame_w = (int)width;
  g_frame_h = (int)height;
  atomic_fetch_add(&g_frame_seq, 1);
}

// ── 声音环形缓冲：w = 已写帧数、r = 已读帧数，都单调递增（uint32 回绕无妨）；r 由 AudioWorklet 推进并 notify ──
#define AUDIO_RING_FRAMES 16384 // 2 的幂，44.1 kHz 下约 370 ms，够兜底
static int16_t g_audio_ring[AUDIO_RING_FRAMES * 2];
static _Atomic uint32_t g_audio_w = 0;
static _Atomic uint32_t g_audio_r = 0;
static _Atomic uint32_t g_audio_underruns = 0; // AudioWorklet 写
static _Atomic uint32_t g_audio_dropped = 0;   // 缓冲满了丢掉的帧
static uint64_t g_audio_produced = 0;           // 核产出的声音帧总数（含丢掉的）——拿来量「模拟走过了多少时间」
static double g_emu_ms_total = 0;               // 累计模拟时间（ms），给「速度 %」用
static _Atomic int g_audio_live = 0;           // 1 = 声音时钟在走（主线程按 AudioContext 状态设置）
static _Atomic uint32_t g_audio_target = 2048; // 顺滑模式的目标水位（≈ 46 ms）
static _Atomic uint32_t g_audio_max = 3584;    // 对齐模式的水位上限（≈ 81 ms）：超过就丢新来的
static _Atomic int g_pacing = 2;               // 0 = 墙钟；1 = 顺滑（跟声音时钟）；2 = 跟屏幕（默认，Worker 里的 rAF；没有就退回墙钟）
static double g_fps = 59.94, g_rate = 44100.0;

EMSCRIPTEN_KEEPALIVE int16_t *kr_audio_ring(void) { return g_audio_ring; }
EMSCRIPTEN_KEEPALIVE int kr_audio_ring_frames(void) { return AUDIO_RING_FRAMES; }
EMSCRIPTEN_KEEPALIVE _Atomic uint32_t *kr_audio_w_ptr(void) { return &g_audio_w; }
EMSCRIPTEN_KEEPALIVE _Atomic uint32_t *kr_audio_r_ptr(void) { return &g_audio_r; }
EMSCRIPTEN_KEEPALIVE _Atomic uint32_t *kr_audio_underrun_ptr(void) { return &g_audio_underruns; }
EMSCRIPTEN_KEEPALIVE double kr_audio_rate(void) { return g_rate; }
EMSCRIPTEN_KEEPALIVE int kr_audio_fill(void) { return (int)(atomic_load(&g_audio_w) - atomic_load(&g_audio_r)); }
EMSCRIPTEN_KEEPALIVE unsigned kr_audio_dropped(void) { return g_audio_dropped; }
EMSCRIPTEN_KEEPALIVE double kr_stat_emu_ms(void) { return g_emu_ms_total; }
EMSCRIPTEN_KEEPALIVE void kr_audio_set_target(unsigned frames) { g_audio_target = frames; }
EMSCRIPTEN_KEEPALIVE void kr_audio_set_max(unsigned frames) { g_audio_max = frames; }
EMSCRIPTEN_KEEPALIVE void kr_set_pacing(int mode) { g_pacing = mode; }
EMSCRIPTEN_KEEPALIVE int kr_get_pacing(void) { return g_pacing; }
// 声音时钟开 / 停。开的时候丢掉积压（r = w），否则会把攒了几百毫秒的旧声音补播出来。
EMSCRIPTEN_KEEPALIVE void kr_audio_set_live(int live) {
  if (live) atomic_store(&g_audio_r, atomic_load(&g_audio_w));
  g_audio_live = live;
}

static void audio_sample(int16_t left, int16_t right) {
  int16_t frame[2] = {left, right};
  extern size_t audio_sample_batch_impl(const int16_t *data, size_t frames);
  audio_sample_batch_impl(frame, 1);
}
size_t audio_sample_batch_impl(const int16_t *data, size_t frames) {
  g_audio_produced += frames;
  uint32_t w = atomic_load(&g_audio_w);
  uint32_t r = atomic_load(&g_audio_r);
  size_t cap = (g_pacing != 1 && g_audio_live) ? g_audio_max : AUDIO_RING_FRAMES; // 只有顺滑模式不设上限
  size_t fill = (size_t)(w - r);
  size_t room = fill >= cap ? 0 : cap - fill;
  size_t n = frames < room ? frames : room;
  for (size_t i = 0; i < n; i++) {
    uint32_t j = ((w + (uint32_t)i) & (AUDIO_RING_FRAMES - 1)) * 2;
    g_audio_ring[j] = data[i * 2];
    g_audio_ring[j + 1] = data[i * 2 + 1];
  }
  atomic_store(&g_audio_w, w + (uint32_t)n);
  if (n < frames) atomic_fetch_add(&g_audio_dropped, (uint32_t)(frames - n));
  return frames;
}
static size_t audio_sample_batch(const int16_t *data, size_t frames) { return audio_sample_batch_impl(data, frames); }
static void input_poll(void) {}
static int16_t input_state(unsigned port, unsigned device, unsigned index, unsigned id) {
  if (port != 0) return 0;
  if ((device & RETRO_DEVICE_MASK) == RETRO_DEVICE_ANALOG) {
    if (index != RETRO_DEVICE_INDEX_ANALOG_LEFT) return 0;
    return (int16_t)(id == RETRO_DEVICE_ID_ANALOG_X ? g_analog_x : id == RETRO_DEVICE_ID_ANALOG_Y ? g_analog_y : 0);
  }
  if ((device & RETRO_DEVICE_MASK) != RETRO_DEVICE_JOYPAD) return 0;
  unsigned mask = g_input;
  if (id == RETRO_DEVICE_ID_JOYPAD_MASK) return (int16_t)mask;
  return id < 16 ? (int16_t)((mask >> id) & 1) : 0;
}

// 动态跳帧：0 = 每帧都画；1 = 每两帧画一帧；2 = 每三帧画一帧（最低 20 帧）。
// 直接改 PPSSPP 的跳帧数（补丁里的 kr_ppsspp_set_frameskip）——经 GET_VARIABLE_UPDATE 改会让核整套重读选项，
// 在 GL 多线程模式下卡死（10-14 实测；对照：一开始就固定跳帧、中途不改，不卡）。
void kr_ppsspp_set_frameskip(int n);
static int g_frameskip_want = 0, g_frameskip_told = 0;
static atomic_uint g_frameskip_now = 0;
EMSCRIPTEN_KEEPALIVE unsigned kr_frameskip(void) { return g_frameskip_now; }

// ───────────── 核选项 / 环境 ─────────────
static const struct { const char *key, *value; } g_options[] = {
  {"ppsspp_cpu_core", "IR JIT"}, // = IR 解释器（wasm 里没有原生 JIT）
  {"ppsspp_software_rendering", "enabled"}, // 有 GPU 时在 environment() 里改答 "disabled"
  {"ppsspp_internal_resolution", "480x272"},
  {"ppsspp_auto_frameskip", "disabled"}, // 不用 PPSSPP 的自动跳帧：它在不限速时最多连跳 8 帧，太狠（10-14 实测画面掉到 10 帧）；
                                         // 跳帧数由主循环按「落后真实时间多少」动态给（ppsspp_frameskip，见 environment()）
};

static void log_cb(enum retro_log_level level, const char *fmt, ...) {
  if (level < RETRO_LOG_WARN && !getenv("KR_LOG_ALL")) return;
  va_list ap;
  va_start(ap, fmt);
  vfprintf(stderr, fmt, ap);
  va_end(ap);
}

static bool environment(unsigned cmd, void *data) {
  switch (cmd) {
    case RETRO_ENVIRONMENT_GET_VFS_INTERFACE: {
      struct retro_vfs_interface_info *info = data;
      if (info->required_interface_version > 3) return false;
      info->required_interface_version = 3;
      info->iface = &g_vfs;
      return true;
    }
    case RETRO_ENVIRONMENT_GET_VARIABLE: {
      struct retro_variable *var = data;
      if (!strcmp(var->key, "ppsspp_software_rendering")) { var->value = g_gl ? "disabled" : "enabled"; return true; }
      if (!strcmp(var->key, "ppsspp_frameskip")) { var->value = "disabled"; return true; } // 运行中由 kr_ppsspp_set_frameskip 改
      for (size_t i = 0; i < sizeof(g_options) / sizeof(g_options[0]); i++)
        if (!strcmp(var->key, g_options[i].key)) { var->value = g_options[i].value; return true; }
      return false;
    }
    case RETRO_ENVIRONMENT_GET_VARIABLE_UPDATE: *(bool *)data = false; return true;
    case RETRO_ENVIRONMENT_GET_CORE_OPTIONS_VERSION: return false; // 走旧式 SET_VARIABLES
    case RETRO_ENVIRONMENT_SET_VARIABLES: return true;
    case RETRO_ENVIRONMENT_SET_PIXEL_FORMAT: return *(enum retro_pixel_format *)data == RETRO_PIXEL_FORMAT_XRGB8888;
    case RETRO_ENVIRONMENT_SET_HW_RENDER: {
      struct retro_hw_render_callback *cb = data;
      bool gles = cb->context_type == RETRO_HW_CONTEXT_OPENGLES2 || cb->context_type == RETRO_HW_CONTEXT_OPENGLES3 ||
                  cb->context_type == RETRO_HW_CONTEXT_OPENGLES_VERSION;
      if (!g_gl || !gles) return false; // 没有 WebGL2 / 不是 GLES：拒绝，核会退回软件渲染
      cb->get_current_framebuffer = hw_get_current_framebuffer;
      cb->get_proc_address = hw_get_proc_address;
      g_hw = *cb;
      g_hw_accepted = true;
      return true;
    }
    case RETRO_ENVIRONMENT_GET_PREFERRED_HW_RENDER: return false;
    case RETRO_ENVIRONMENT_GET_SYSTEM_DIRECTORY: *(const char **)data = "/system"; return true;
    case RETRO_ENVIRONMENT_GET_SAVE_DIRECTORY: *(const char **)data = "/saves"; return true;
    case RETRO_ENVIRONMENT_GET_LOG_INTERFACE: ((struct retro_log_callback *)data)->log = log_cb; return true;
    case RETRO_ENVIRONMENT_GET_CAN_DUPE: *(bool *)data = true; return true;
    case RETRO_ENVIRONMENT_GET_INPUT_BITMASKS: return true;
    case RETRO_ENVIRONMENT_SET_INPUT_DESCRIPTORS:
    case RETRO_ENVIRONMENT_SET_CONTROLLER_INFO:
    case RETRO_ENVIRONMENT_SET_MEMORY_MAPS:
    case RETRO_ENVIRONMENT_SET_SUBSYSTEM_INFO:
    case RETRO_ENVIRONMENT_SET_GEOMETRY:
    case RETRO_ENVIRONMENT_SET_SYSTEM_AV_INFO:
    case RETRO_ENVIRONMENT_SET_SUPPORT_ACHIEVEMENTS:
    case RETRO_ENVIRONMENT_SET_SERIALIZATION_QUIRKS:
      return true;
    default:
      return false;
  }
}

// ───────────── 快照（存 / 读整机状态）─────────────
// 主线程只提请求；真正的 retro_serialize / retro_unserialize 在核线程的帧边界做，不和 retro_run 并发。
// 存：完成后 g_snap_seq + 1，主线程看到后从 kr_snap_ptr() 拷走字节，再调 kr_snap_free()。
// 读：主线程先 malloc 一块、把字节拷进去，再 kr_request_restore(ptr, size)；核线程读完后释放并 g_restore_seq + 1（结果在 g_restore_ok）。
static _Atomic int g_req_snapshot = 0;
static uint8_t *g_snap_ptr = NULL;
static _Atomic size_t g_snap_size = 0;
static _Atomic unsigned g_snap_seq = 0;
static uint8_t *_Atomic g_restore_ptr = NULL;
static _Atomic size_t g_restore_size = 0;
static _Atomic unsigned g_restore_seq = 0;
static _Atomic int g_restore_ok = 0;

EMSCRIPTEN_KEEPALIVE void kr_request_snapshot(void) { g_req_snapshot = 1; }
EMSCRIPTEN_KEEPALIVE unsigned kr_snap_seq(void) { return g_snap_seq; }
EMSCRIPTEN_KEEPALIVE uint8_t *kr_snap_ptr(void) { return g_snap_ptr; }
EMSCRIPTEN_KEEPALIVE double kr_snap_size(void) { return (double)g_snap_size; }
EMSCRIPTEN_KEEPALIVE void kr_snap_free(void) { free(g_snap_ptr); g_snap_ptr = NULL; g_snap_size = 0; }
EMSCRIPTEN_KEEPALIVE void kr_request_restore(uint8_t *ptr, double size) { g_restore_size = (size_t)size; g_restore_ptr = ptr; }
EMSCRIPTEN_KEEPALIVE unsigned kr_restore_seq(void) { return g_restore_seq; }
EMSCRIPTEN_KEEPALIVE int kr_restore_ok(void) { return g_restore_ok; }

// 快照顺手取一张当前画面（给快照格的缩略图）：RGBA、左上角原点，最大 FRAME_MAX。主线程在 g_snap_seq 变了以后从 kr_thumb_* 拷走。
static uint8_t g_thumb[FRAME_MAX_W * FRAME_MAX_H * 4];
static int g_thumb_w = 0, g_thumb_h = 0;
EMSCRIPTEN_KEEPALIVE uint8_t *kr_thumb_ptr(void) { return g_thumb; }
EMSCRIPTEN_KEEPALIVE int kr_thumb_w(void) { return g_thumb_w; }
EMSCRIPTEN_KEEPALIVE int kr_thumb_h(void) { return g_thumb_h; }

static void capture_thumb(void) {
  int w = g_frame_w, h = g_frame_h;
  g_thumb_w = g_thumb_h = 0;
  if (w <= 0 || h <= 0 || w > FRAME_MAX_W || h > FRAME_MAX_H) return;
  if (g_hw_active) {
    // 从核的离屏帧缓冲读回（帧边界上，核没在画）。动到的 GL 状态读完原样放回：PPSSPP 自己记着这些状态。
    GLint pack_buf = 0, row_len = 0, align = 4;
    glGetIntegerv(GL_PIXEL_PACK_BUFFER_BINDING, &pack_buf);
    glGetIntegerv(GL_PACK_ROW_LENGTH, &row_len);
    glGetIntegerv(GL_PACK_ALIGNMENT, &align);
    glBindBuffer(GL_PIXEL_PACK_BUFFER, 0);
    glPixelStorei(GL_PACK_ROW_LENGTH, 0);
    glPixelStorei(GL_PACK_ALIGNMENT, 4);
    glBindFramebuffer(GL_READ_FRAMEBUFFER, g_fbo);
    static uint8_t tmp[FRAME_MAX_W * FRAME_MAX_H * 4];
    glReadPixels(0, 0, w, h, GL_RGBA, GL_UNSIGNED_BYTE, tmp);
    glBindFramebuffer(GL_FRAMEBUFFER, g_fbo);
    glBindBuffer(GL_PIXEL_PACK_BUFFER, (GLuint)pack_buf);
    glPixelStorei(GL_PACK_ROW_LENGTH, row_len);
    glPixelStorei(GL_PACK_ALIGNMENT, align);
    for (int y = 0; y < h; y++) memcpy(g_thumb + (size_t)y * w * 4, tmp + (size_t)(h - 1 - y) * w * 4, (size_t)w * 4); // GL 左下角原点 → 翻过来
    // PSP 帧缓冲的 alpha 常是 0（游戏拿它当模板位用）：缩略图一律不透明，否则编出来是黑的
    for (size_t i = 3, n = (size_t)w * h * 4; i < n; i += 4) g_thumb[i] = 255;
  } else {
    const uint8_t *src = (const uint8_t *)g_frame; // XRGB8888，内存里是 B,G,R,X
    for (size_t i = 0, n = (size_t)w * h; i < n; i++) {
      g_thumb[i * 4] = src[i * 4 + 2]; g_thumb[i * 4 + 1] = src[i * 4 + 1]; g_thumb[i * 4 + 2] = src[i * 4]; g_thumb[i * 4 + 3] = 255;
    }
  }
  g_thumb_w = w;
  g_thumb_h = h;
}

// 只抓一帧（截图分享，user 10-14「截图分享功能，走分享按钮，原生大小」）：和快照同一个抓帧函数，不序列化整机状态。added 20261014 by Claude Opus 5.5
static _Atomic int g_req_frame = 0;
static _Atomic unsigned g_frame_shot_seq = 0;
EMSCRIPTEN_KEEPALIVE void kr_request_frame(void) { g_req_frame = 1; }
EMSCRIPTEN_KEEPALIVE unsigned kr_frame_shot_seq(void) { return g_frame_shot_seq; }

static void service_snapshots(void) {
  if (g_req_frame) {
    g_req_frame = 0;
    capture_thumb();
    atomic_fetch_add(&g_frame_shot_seq, 1);
  }
  if (g_req_snapshot) {
    g_req_snapshot = 0;
    capture_thumb();
    size_t size = retro_serialize_size();
    uint8_t *buf = size ? malloc(size) : NULL;
    if (buf && retro_serialize(buf, size)) {
      free(g_snap_ptr);
      g_snap_ptr = buf;
      g_snap_size = size;
    } else {
      free(buf);
      g_snap_size = 0;
      fprintf(stderr, "[kr] snapshot failed (size %zu)\n", size);
    }
    atomic_fetch_add(&g_snap_seq, 1);
  }
  uint8_t *rp = g_restore_ptr;
  if (rp) {
    g_restore_ptr = NULL;
    g_restore_ok = retro_unserialize(rp, g_restore_size) ? 1 : 0;
    if (!g_restore_ok) fprintf(stderr, "[kr] restore failed (size %zu)\n", (size_t)g_restore_size);
    free(rp);
    if (g_audio_live) atomic_store(&g_audio_r, atomic_load(&g_audio_w)); // 丢掉读档前的积压
    atomic_fetch_add(&g_restore_seq, 1);
  }
}

// ───────────── 主循环：时间对齐 + 丢帧 ─────────────
// 原则（user 10-14：「车是匀速的啊，ppsspp是会选择丢帧的」「反正丢帧做一下，时间还是对齐一下」）：
//   游戏时间始终对齐真实时间——超前就等，落后就连着跑帧追上；落后时动态打开 PPSSPP 的固定跳帧（跳过绘制、不等待），
//   跳几帧由这里按落后量定（最多每三帧画一帧）。不用 PPSSPP 的自动跳帧：它在不限速时最多连跳 8 帧，太狠。
//   结果 = 车匀速、画面少几帧，和 PPSSPP 桌面版一样；不会「先慢一阵再快放」。
//   落后超过 5.5 帧（切后台回来等）就认了、重新锚定，不快放补回（5.5 也是 PPSSPP 自己的阈值）。
// 「游戏走了多少时间」= 每趟 retro_run 实际产出的声音量（一趟跑到下一次换画面：60 帧游戏 1 个 vblank，30 帧游戏 2 个）；
//   做判断时用平滑后的每帧时长（防声音分块让单帧忽长忽短），累计对齐用精确值。
// 三种排程：跟屏幕（默认，Worker 里的 rAF）/ 墙钟（没有 Worker rAF 时退回，或 ?pace=wall）/ 声音（?pace=audio，顺滑模式）。
EM_JS(int, kr_worker_has_raf, (void), { return typeof requestAnimationFrame === "function" ? 1 : 0; });
static int g_timing_mode = -1;                   // 主循环当前的排程（EM_TIMING_SETIMMEDIATE / EM_TIMING_RAF）

// ── 切后台回来停死（10-15 user「切到claude再切回来之后游戏停死了」；日志：回来 2 s 只走 3 帧然后不动，声音 running）──
//   两个嫌疑分开治：A) worker 的 rAF 被系统停了不再来 → frame() 没人调 → 看门狗（setInterval，还活着）切成 setImmediate 并重新排程；
//   B) WebGL 上下文被回收 → 接浏览器的 webglcontextlost / restored 事件 → 告诉核 context_destroy / context_reset（PPSSPP 自己的 DeviceLost / DeviceRestore，
//   Android 切后台走的同一条路：GL 对象只是缓存，真相在模拟内存里）。主线程读 kr_loop_last_ms / kr_gl_state 分辨是哪一种。edited 20261015 by Claude Fable 5.1
static atomic_int g_gl_lost = 0;          // JS 事件写：上下文丢了（待 destroy）
static atomic_int g_gl_restored = 0;      // JS 事件写：浏览器恢复了（待 reset）
static int g_gl_destroyed = 0;            // 核线程：已经告诉过核 context_destroy
static atomic_uint g_gl_restores = 0;
static atomic_int g_debug_lose_gl = 0;    // 无头测试：假装丢一次（WEBGL_lose_context）
static _Atomic double g_loop_last = 0;    // frame() 最后一次被调用的时刻（主线程判「循环死了」vs「循环在跑但没出帧」）
static atomic_uint g_loop_rescues = 0;
static double g_raf_hold_until = 0;       // 看门狗救过之后这段时间不回 rAF
EM_JS(void, kr_gl_hook_events, (int handle, int *lostFlag, int *restoredFlag), {
  var c = GL.contexts[handle]; if (!c || !c.GLctx || !c.GLctx.canvas) return;
  var canvas = c.GLctx.canvas;
  canvas.addEventListener("webglcontextlost", function (e) { e.preventDefault(); Atomics.store(HEAP32, lostFlag >> 2, 1); });
  canvas.addEventListener("webglcontextrestored", function () { Atomics.store(HEAP32, restoredFlag >> 2, 1); });
});
EM_JS(void, kr_gl_debug_lose, (int handle), {
  var c = GL.contexts[handle]; if (!c || !c.GLctx) return;
  var ext = c.GLctx.getExtension("WEBGL_lose_context"); if (!ext) return;
  ext.loseContext(); setTimeout(function () { ext.restoreContext(); }, 1500);
});
EMSCRIPTEN_KEEPALIVE double kr_loop_last_ms(void) { return atomic_load(&g_loop_last); }
EMSCRIPTEN_KEEPALIVE unsigned kr_loop_rescues(void) { return atomic_load(&g_loop_rescues); }
EMSCRIPTEN_KEEPALIVE int kr_gl_state(void) { return (atomic_load(&g_gl_lost) ? 1 : 0) | ((int)atomic_load(&g_gl_restores) << 1); }
EMSCRIPTEN_KEEPALIVE void kr_debug_lose_gl(void) { atomic_store(&g_debug_lose_gl, 1); }
static double g_anchor_real = 0, g_anchor_emu = 0;
static double g_frame_ms_avg = 1000.0 / 59.94;   // 平滑后的每帧模拟时长
static double g_frame_ms_last = 1000.0 / 59.94;
static double g_vs_last = 0, g_vs_dt = 0;
static atomic_int g_vs_lock = 0;                 // 0 = 按时间累计；1 = 每次刷新一帧（刷新率 ≈ 帧率，给主线程显示用）
static atomic_uint g_catchup_runs = 0;           // 为追进度多跑的帧（累计）
static atomic_uint g_reanchors = 0;              // 落后太多认了的次数（累计）
EMSCRIPTEN_KEEPALIVE int kr_vsync_lock(void) { return g_vs_lock; }
EMSCRIPTEN_KEEPALIVE double kr_vsync_dt(void) { return g_vs_dt; }
EMSCRIPTEN_KEEPALIVE unsigned kr_catchup_runs(void) { return g_catchup_runs; }
EMSCRIPTEN_KEEPALIVE unsigned kr_reanchors(void) { return g_reanchors; }
EMSCRIPTEN_KEEPALIVE double kr_frame_ms_avg(void) { return g_frame_ms_avg; }

// 暂停 / 快进（主线程设）：暂停时不跑 retro_run，但快照请求照样处理（暂停着也能存 / 读）；
// 快进 = 真实时间按倍数折算（g_speed 倍），对齐和跳帧照旧——跑不动时 PPSSPP 跳过绘制，声音超出上限的部分丢掉。
static _Atomic int g_paused = 0;
static double g_speed = 1.0;
EMSCRIPTEN_KEEPALIVE void kr_set_paused(int p) { g_paused = p; }
EMSCRIPTEN_KEEPALIVE int kr_get_paused(void) { return g_paused; }
EMSCRIPTEN_KEEPALIVE void kr_set_speed(double x) { g_speed = x >= 0.25 && x <= 8 ? x : 1.0; }
EMSCRIPTEN_KEEPALIVE double kr_get_speed(void) { return g_speed; }

static double g_anchor_speed = 1.0;
static void reanchor(void) {
  g_anchor_real = emscripten_get_now();
  g_anchor_emu = g_emu_ms_total;
  g_anchor_speed = g_speed;
}
// 游戏时间落后真实时间多少 ms（负 = 超前）；快进时真实时间按倍数折算
static double debt_ms(void) { return (emscripten_get_now() - g_anchor_real) * g_anchor_speed - (g_emu_ms_total - g_anchor_emu); }

// 每帧时长统计（验证「声音分块让单帧时长忽长忽短」）：和出帧间隔一起由 kr_pace_stats 每秒取走
static double g_fm_n = 0, g_fm_sum = 0, g_fm_sumsq = 0;
EMSCRIPTEN_KEEPALIVE void kr_frame_ms_stats(double *out) {
  double n = g_fm_n, mean = n ? g_fm_sum / n : 0, var = n ? g_fm_sumsq / n - mean * mean : 0;
  out[0] = mean; out[1] = var > 0 ? sqrt(var) : 0;
  g_fm_n = g_fm_sum = g_fm_sumsq = 0;
}

static void run_one(void) {
  service_snapshots();
  uint64_t produced_before = g_audio_produced;
  retro_run();
  atomic_fetch_add(&g_frames_run, 1);
  uint64_t produced = g_audio_produced - produced_before;
  double emu_ms = produced ? (double)produced * 1000.0 / g_rate : g_frame_ms_avg;
  if (emu_ms > 200.0) emu_ms = 200.0; // 读档等一次性大块，不让它把对齐推得太远
  g_emu_ms_total += emu_ms;
  g_frame_ms_last = emu_ms;
  g_frame_ms_avg += (emu_ms - g_frame_ms_avg) * 0.1;
  g_fm_n += 1; g_fm_sum += emu_ms; g_fm_sumsq += emu_ms * emu_ms;
}

// 看门狗：主循环挂在 rAF 上，页面一到后台 rAF 就停、frame() 不再被调，快照 / 读档请求就没人处理
//   （10-14 user 真机：切后台那一刻的自动快照报「core did not answer in time」）。Worker 的定时器在后台照跑，
//   所以这里每 250 ms 看一眼：rAF 停了超过 300 ms 就替它处理请求。和 frame() 在同一个线程的事件循环上，永远不并发。
//   added 20261014 by Claude Fable 5.1
static double g_last_frame_at = 0;
static void watchdog(void *arg) {
  (void)arg;
  double now = emscripten_get_now();
  if (now - g_last_frame_at > 300.0) service_snapshots();
  // A) rAF 饿死：没暂停、排程是 rAF、1.5 s 没进过 frame() → 切 setImmediate 并立刻重新排程（pause + resume 让 emscripten 马上调度一次），15 s 内不回 rAF
  if (!g_paused && g_timing_mode == EM_TIMING_RAF && g_last_frame_at > 0 && now - g_last_frame_at > 1500.0) {
    emscripten_set_main_loop_timing(EM_TIMING_SETIMMEDIATE, 0);
    g_timing_mode = EM_TIMING_SETIMMEDIATE;
    g_raf_hold_until = now + 15000.0;
    g_anchor_real = 0;
    atomic_fetch_add(&g_loop_rescues, 1);
    fprintf(stderr, "[kr] frame loop starved for %.0f ms (rAF?) — switched to setImmediate\n", now - g_last_frame_at);
    emscripten_pause_main_loop();
    emscripten_resume_main_loop();
  }
  if (atomic_exchange(&g_debug_lose_gl, 0) && g_gl) kr_gl_debug_lose((int)g_gl);
}

static void frame(void) {
  g_last_frame_at = emscripten_get_now();
  atomic_store(&g_loop_last, g_last_frame_at);
  int want = (g_pacing == 2 && kr_worker_has_raf() && g_last_frame_at >= g_raf_hold_until) ? EM_TIMING_RAF : EM_TIMING_SETIMMEDIATE;
  if (want != g_timing_mode) {
    emscripten_set_main_loop_timing(want, want == EM_TIMING_RAF ? 1 : 0);
    g_timing_mode = want;
    g_anchor_real = 0;
  }
  // B) WebGL 上下文丢了：告诉核一次 context_destroy（停掉模拟线程、放掉 GL 对象），之后不跑帧；浏览器恢复了 → 重建我们的 FBO、context_reset（DeviceRestore）接着跑
  if (g_hw_accepted && atomic_load(&g_gl_lost)) {
    if (!g_gl_destroyed) { fprintf(stderr, "[kr] WebGL context lost: context_destroy\n"); if (g_hw.context_destroy) g_hw.context_destroy(); g_gl_destroyed = 1; }
    if (!atomic_load(&g_gl_restored)) { service_snapshots(); g_anchor_real = 0; return; }
    atomic_store(&g_gl_restored, 0);
    atomic_store(&g_gl_lost, 0);
    emscripten_webgl_make_context_current(g_gl);
    int w = g_fbo_w, h = g_fbo_h;
    g_fbo = 0; g_fbo_color = 0; g_fbo_depth = 0; g_fbo_w = 0; g_fbo_h = 0;   // 旧名字随上下文一起没了，别去删
    gl_make_fbo(w, h);
    glBindFramebuffer(GL_FRAMEBUFFER, g_fbo);
    if (g_hw.context_reset) g_hw.context_reset();
    g_gl_destroyed = 0;
    atomic_fetch_add(&g_gl_restores, 1);
    g_anchor_real = 0;
    fprintf(stderr, "[kr] WebGL context restored: context_reset\n");
  }
  if (g_paused) { service_snapshots(); g_anchor_real = 0; return; } // 继续时重新锚定，不补回暂停的时间
  if (g_anchor_real == 0 || g_anchor_speed != g_speed) reanchor();
  const double e = g_frame_ms_avg;

  // 顺滑（?pace=audio）：等 AudioWorklet 播掉一些再跑；声音时钟卡住超过 50 ms 就退回时间对齐
  if (g_pacing == 1 && g_audio_live && g_speed == 1.0) {
    double t0 = emscripten_get_now();
    for (;;) {
      uint32_t r = atomic_load(&g_audio_r);
      if (atomic_load(&g_audio_w) - r <= g_audio_target) { run_one(); reanchor(); return; }
      if (!g_audio_live || emscripten_get_now() - t0 > 50.0) break;
      emscripten_futex_wait((void *)&g_audio_r, r, 8.0);
    }
  }

  double d = debt_ms();
  if (d > e * 5.5) { reanchor(); d = 0; atomic_fetch_add(&g_reanchors, 1); }
  // 跳帧：落后半帧以上每两帧画一帧，两帧以上每三帧画一帧；追到落后不足 1/4 帧才恢复（滞后，免得来回切）
  {
    int want = g_frameskip_want;
    if (d > e * 2.0) want = 2;
    else if (d > e * 0.5) want = want > 1 ? want : 1;
    else if (d < e * 0.25) want = 0;
    g_frameskip_want = want;
    g_frameskip_now = want;
    if (g_frameskip_want != g_frameskip_told) { kr_ppsspp_set_frameskip(g_frameskip_want); g_frameskip_told = g_frameskip_want; }
  }

  if (g_timing_mode == EM_TIMING_RAF) {
    // 跟屏幕：这次刷新跑几帧。
    double now = emscripten_get_now();
    double dt = g_vs_last ? now - g_vs_last : 0;
    g_vs_last = now;
    if (dt > 0 && dt < 100) g_vs_dt = g_vs_dt ? g_vs_dt * 0.95 + dt * 0.05 : dt;
    int n;
    if (g_speed == 1.0 && g_vs_dt > 0 && fabs(g_vs_dt - e) < e * 0.01) {
      // 刷新率 ≈ 帧率：每次刷新一帧；错过一次刷新（落后超过 3/4 帧）就补一帧（PPSSPP 跳过它的绘制）。
      // 60 Hz 对 59.94 帧的 0.1% 漂移持续吸收（重新锚定），不攒成每隔几十秒一顿；声音那边按水位微调吸收速度差。
      g_vs_lock = 1;
      n = d > e * 0.75 ? 2 : (d < -e * 0.75 ? 0 : 1);
      if (n == 1) { run_one(); reanchor(); return; }
    } else {
      // 对不上（如 120 / 144 Hz，或快进）：按时间对齐四舍五入，最多补 3 帧（快进时按倍数放宽）
      g_vs_lock = 0;
      n = (int)floor((d + e * 0.5) / e);
      int cap = 3 * (int)ceil(g_speed);
      if (n < 0) n = 0;
      if (n > cap) n = cap;
    }
    for (int i = 0; i < n; i++) { run_one(); if (i > 0) atomic_fetch_add(&g_catchup_runs, 1); }
    return;
  }

  // 墙钟：超前就睡到点；落后就直接跑（下一趟再看还欠多少，欠就接着跑——PPSSPP 跳过这些帧的绘制）
  if (d < 0) {
    static _Atomic uint32_t sleeper = 0;
    emscripten_futex_wait((void *)&sleeper, 0, -d);
  } else if (d > e) {
    atomic_fetch_add(&g_catchup_runs, 1);
  }
  run_one();
}

int main(int argc, char **argv) {
  if (argc < 3) {
    fprintf(stderr, "[kr] usage: <disc path under /disc/> <disc size>\n");
    return 1;
  }
  snprintf(g_disc_path, sizeof(g_disc_path), "%s", argv[1]);
  g_disc_size = strtoll(argv[2], NULL, 10);
  for (int i = 3; i < argc; i++)
    if (!strcmp(argv[i], "lowlatency")) g_want_desync = true;
  for (int i = 0; i < KR_CACHE_BLOCKS; i++) g_cache[i].block = -1;
  if (g_disc_size > 0) g_seen = (_Atomic uint8_t *)calloc((size_t)((g_disc_size / KR_SECTOR + 8) / 8), 1);
  mkdir("/saves", 0777);

  retro_set_environment(environment);
  retro_set_video_refresh(video_refresh);
  retro_set_audio_sample(audio_sample);
  retro_set_audio_sample_batch(audio_sample_batch);
  retro_set_input_poll(input_poll);
  retro_set_input_state(input_state);
  gl_create(); // 先试 WebGL2：建得出来才答应核的 GPU 请求
  retro_init();

  struct retro_game_info info = {g_disc_path, NULL, 0, NULL};
  if (!retro_load_game(&info)) {
    fprintf(stderr, "[kr] retro_load_game failed for %s\n", g_disc_path);
    return 1;
  }
  struct retro_system_av_info av;
  retro_get_system_av_info(&av);
  if (av.timing.fps > 1.0) g_fps = av.timing.fps;
  if (av.timing.sample_rate > 1000.0) g_rate = av.timing.sample_rate;
  if (g_hw_accepted) {
    int w = av.geometry.max_width ? (int)av.geometry.max_width : 480, h = av.geometry.max_height ? (int)av.geometry.max_height : 272;
    gl_make_fbo(w, h);
    glBindFramebuffer(GL_FRAMEBUFFER, g_fbo);
    if (g_hw.context_reset) g_hw.context_reset();
    g_hw_active = 1;
    kr_gl_hook_events((int)g_gl, (int *)&g_gl_lost, (int *)&g_gl_restored);
    fprintf(stderr, "[kr] GPU rendering: WebGL2, framebuffer %dx%d\n", w, h);
  } else {
    fprintf(stderr, "[kr] software rendering\n");
  }
  fprintf(stderr, "[kr] game loaded: %s (%lld bytes), %.3f fps, %.0f Hz\n", g_disc_path, (long long)g_disc_size, g_fps, g_rate);
  emscripten_set_interval(watchdog, 250.0, NULL);
  emscripten_set_main_loop(frame, 0, 1);
  return 0;
}
