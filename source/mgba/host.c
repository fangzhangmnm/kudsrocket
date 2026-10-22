// KudsRocket 第二个核的宿主：mGBA（libretro，GBA / GB / GBC）—— created 20261021 by Claude Fable 5.1
//
// 和 PPSSPP 的宿主（../ppsspp/host.c）对页面暴露**同一套** kr_* C 接口（契约 = ai-docs/20261021-second-core-prereqs.md §1），页面的 core-session.ts 一行不改就能开它。
// 不同的地方全是「这个核简单」：单线程（mGBA 的 libretro 构建 DISABLE_THREADING）、软件帧缓冲（RGB565 → 页面要的 XRGB8888，共享内存里一块 g_frame）、
// 整条卡带一次读进内存（契约里 media: "whole"——卡带本来就是整条塞进机器的，≤ 32 MiB；上限 64 MiB，不是「整张光盘不进内存」那条硬规矩的例外）、
// 电池存档 = 一块内存（retro_get_memory_data(SAVE_RAM)），变了页面就收走装罐。
// 声音环 / 输入位图 + 按下锁存 / 快照 / 暂停 / 快进 / 对齐 的做法照 PPSSPP 宿主抄（10-14 起那套在真机上验过）；没有 GL、没有读盘缓存、没有上屏节拍。
// 跑在 Emscripten 的 pthread 里（链接 -sPROXY_TO_PTHREAD）：主线程只管读卡带、画画面、输入。

#include <emscripten.h>
#include <emscripten/proxying.h>
#include <emscripten/threading.h>
#include <emscripten/html5.h>
#include <libretro.h>
#include "../ppsspp/taplatch.h"
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

// ───────────── 卡带：整条读进内存（跨线程读，和 PPSSPP 宿主同一个机制）─────────────
#define ROM_MAX_BYTES (64 * 1024 * 1024)
#define READ_CHUNK (1024 * 1024)
static char g_rom_path[512];
static int64_t g_rom_size = -1;
static uint8_t *g_rom = NULL;
static atomic_uint_least64_t g_bytes_fetched = 0;
static atomic_uint_least32_t g_reads_waiting = 0;

typedef struct { uint8_t *dst; double offset; int32_t len; int32_t got; } read_req;
EM_JS(void, kr_js_start_read, (em_proxying_ctx *ctx, uint8_t *dst, double offset, int len, int32_t *got), {
  const media = Module["krMedia"];
  const done = (n) => { HEAP32[got >> 2] = n; _kr_read_finish(ctx); };
  if (!media) { done(-1); return; }
  Promise.resolve(media.read(offset, len)).then((bytes) => {
    const n = Math.min(len, bytes.length);
    HEAPU8.set(bytes.subarray(0, n), dst);
    done(n);
  }, (e) => { err("[kr] media read failed at " + offset + ": " + e); done(-1); });
});
EMSCRIPTEN_KEEPALIVE void kr_read_finish(em_proxying_ctx *ctx) { emscripten_proxy_finish(ctx); }
static void read_on_main(em_proxying_ctx *ctx, void *arg) { read_req *req = (read_req *)arg; kr_js_start_read(ctx, req->dst, req->offset, req->len, &req->got); }
static int32_t fetch_range(int64_t off, int32_t len, uint8_t *dst) {
  read_req req = {dst, (double)off, len, -1};
  atomic_fetch_add(&g_reads_waiting, 1);
  int ok = emscripten_proxy_sync_with_ctx(emscripten_proxy_get_system_queue(), emscripten_main_runtime_thread_id(), read_on_main, &req);
  atomic_fetch_sub(&g_reads_waiting, 1);
  if (!ok || req.got < 0) return -1;
  atomic_fetch_add(&g_bytes_fetched, (uint64_t)req.got);
  return req.got;
}
static bool load_rom(void) {
  if (g_rom_size <= 0 || g_rom_size > ROM_MAX_BYTES) { fprintf(stderr, "[kr] cartridge size %lld out of range (max %d)\n", (long long)g_rom_size, ROM_MAX_BYTES); return false; }
  g_rom = (uint8_t *)malloc((size_t)g_rom_size);
  if (!g_rom) return false;
  for (int64_t off = 0; off < g_rom_size;) {
    int32_t len = (int32_t)((g_rom_size - off) < READ_CHUNK ? (g_rom_size - off) : READ_CHUNK);
    int32_t n = fetch_range(off, len, g_rom + off);
    if (n <= 0) { fprintf(stderr, "[kr] cartridge read failed at %lld\n", (long long)off); return false; }
    off += n;
  }
  return true;
}
EMSCRIPTEN_KEEPALIVE double kr_stat_bytes_fetched(void) { return (double)g_bytes_fetched; }
EMSCRIPTEN_KEEPALIVE int kr_stat_reads_waiting(void) { return (int)g_reads_waiting; }
EMSCRIPTEN_KEEPALIVE double kr_disc_seen_bytes(void) { return (double)(g_rom ? g_rom_size : 0); }   // 卡带整条在内存里：挂机判定用不上它，给个常量
EMSCRIPTEN_KEEPALIVE double kr_heap_used(void) { struct mallinfo mi = mallinfo(); return (double)(unsigned)mi.uordblks; }

// ───────────── 画面：软件帧缓冲（核给 RGB565 / XRGB8888，这里一步转成画布要的 RGBA8888）─────────────
// v0.2.2 起字节序就是 ImageData 的 R,G,B,A：页面 putImageData 前只 memcpy（以前页面每帧还要在主线程逐像素换 R / B；kr_frame_format 报 1 让页面认出来。
//   PPSSPP 宿主没有这个导出 = 老的 XRGB8888，页面照旧自己换）。
#define FRAME_MAX_W 256
#define FRAME_MAX_H 224
static uint32_t g_frame[FRAME_MAX_W * FRAME_MAX_H];   // RGBA8888（内存里按字节是 R,G,B,A；小端 uint32 = A<<24 | B<<16 | G<<8 | R）
static atomic_int g_frame_w = 0, g_frame_h = 0;
static atomic_uint g_frame_seq = 0;
static enum retro_pixel_format g_pixfmt = RETRO_PIXEL_FORMAT_0RGB1555;
static const void *g_last_data = NULL; static unsigned g_last_w = 0, g_last_h = 0; static size_t g_last_pitch = 0;   // 这一趟最后画好的那帧（结束时才转成 32 位：快进时一趟跑好几帧，只转最后一帧）
static atomic_int g_hw_active = 0;   // 永远 0：没有 GPU 路
EMSCRIPTEN_KEEPALIVE int kr_hw_active(void) { return g_hw_active; }
EMSCRIPTEN_KEEPALIVE int kr_desync_state(void) { return 0; }
EMSCRIPTEN_KEEPALIVE uint32_t *kr_frame_ptr(void) { return g_frame; }
EMSCRIPTEN_KEEPALIVE int kr_frame_format(void) { return 1; }   // 1 = RGBA8888（页面 memcpy 即可）；没有这个导出 = 0 = XRGB8888
EMSCRIPTEN_KEEPALIVE int kr_frame_w(void) { return g_frame_w; }
EMSCRIPTEN_KEEPALIVE int kr_frame_h(void) { return g_frame_h; }
EMSCRIPTEN_KEEPALIVE unsigned kr_frame_seq(void) { return g_frame_seq; }
static atomic_int g_disp_w = 0, g_disp_h = 0;
EMSCRIPTEN_KEEPALIVE void kr_set_display_size(int w, int h) { g_disp_w = w; g_disp_h = h; }   // 软件路由页面自己放大，这里只收下

// 出帧节奏统计（和 PPSSPP 宿主同一张表：kr_pace_stats out[0..7]）
static double g_pres_last = 0, g_pres_n = 0, g_pres_sum = 0, g_pres_sumsq = 0, g_pres_max = 0;
static double g_pres_win[256]; static int g_pres_count = 0;
static void record_present(void) {
  double now = emscripten_get_now();
  if (g_pres_last > 0) { double d = now - g_pres_last; g_pres_n += 1; g_pres_sum += d; g_pres_sumsq += d * d; if (d > g_pres_max) g_pres_max = d; if (g_pres_count < 256) g_pres_win[g_pres_count++] = d; }
  g_pres_last = now;
}
static void present_last(void) {
  if (!g_last_data) return;
  unsigned w = g_last_w > FRAME_MAX_W ? FRAME_MAX_W : g_last_w, h = g_last_h > FRAME_MAX_H ? FRAME_MAX_H : g_last_h;
  if (g_pixfmt == RETRO_PIXEL_FORMAT_XRGB8888) {
    for (unsigned y = 0; y < h; y++) {
      const uint32_t *src = (const uint32_t *)((const uint8_t *)g_last_data + y * g_last_pitch);
      uint32_t *dst = g_frame + (size_t)y * w;
      for (unsigned x = 0; x < w; x++) { uint32_t p = src[x]; dst[x] = 0xFF000000u | ((p & 0xFF) << 16) | (p & 0xFF00) | ((p >> 16) & 0xFF); }   // X,R,G,B → R,G,B,A
    }
  } else {
    for (unsigned y = 0; y < h; y++) {
      const uint16_t *src = (const uint16_t *)((const uint8_t *)g_last_data + y * g_last_pitch);
      uint32_t *dst = g_frame + (size_t)y * w;
      if (g_pixfmt == RETRO_PIXEL_FORMAT_RGB565) {
        for (unsigned x = 0; x < w; x++) { uint16_t p = src[x]; uint32_t r = (p >> 11) & 31, g = (p >> 5) & 63, b = p & 31; dst[x] = 0xFF000000u | ((b << 3) | (b >> 2)) << 16 | ((g << 2) | (g >> 4)) << 8 | ((r << 3) | (r >> 2)); }
      } else {   // 0RGB1555
        for (unsigned x = 0; x < w; x++) { uint16_t p = src[x]; uint32_t r = (p >> 10) & 31, g = (p >> 5) & 31, b = p & 31; dst[x] = 0xFF000000u | ((b << 3) | (b >> 2)) << 16 | ((g << 3) | (g >> 2)) << 8 | ((r << 3) | (r >> 2)); }
      }
    }
  }
  g_frame_w = (int)w; g_frame_h = (int)h;
  atomic_fetch_add(&g_frame_seq, 1);
  record_present();
  g_last_data = NULL;
}
static void video_refresh(const void *data, unsigned width, unsigned height, size_t pitch) {
  if (!data) return;   // 核说「这帧和上一帧一样」（GET_CAN_DUPE）：不动
  g_last_data = data; g_last_w = width; g_last_h = height; g_last_pitch = pitch;
}

// ───────────── 声音环形缓冲（照 PPSSPP 宿主：w / r 单调递增，AudioWorklet 直接读共享内存）─────────────
#define AUDIO_RING_FRAMES 16384   // 32768 Hz 下 500 ms
static int16_t g_audio_ring[AUDIO_RING_FRAMES * 2];
static _Atomic uint32_t g_audio_w = 0, g_audio_r = 0, g_audio_underruns = 0, g_audio_dropped = 0;
static _Atomic int g_audio_live = 0;
static _Atomic uint32_t g_audio_target = 1536, g_audio_max = 2662;   // ≈ 46 / 81 ms @ 32768 的出厂值；页面 setAudioBuffer 按 kr_audio_rate() 换算成帧数再给（core-session.ts）
static _Atomic int g_pacing = 2;   // 0 墙钟 / 1 顺滑 / 2 跟屏幕
static double g_fps = 59.7275, g_rate = 32768.0;
EMSCRIPTEN_KEEPALIVE int16_t *kr_audio_ring(void) { return g_audio_ring; }
EMSCRIPTEN_KEEPALIVE int kr_audio_ring_frames(void) { return AUDIO_RING_FRAMES; }
EMSCRIPTEN_KEEPALIVE _Atomic uint32_t *kr_audio_w_ptr(void) { return &g_audio_w; }
EMSCRIPTEN_KEEPALIVE _Atomic uint32_t *kr_audio_r_ptr(void) { return &g_audio_r; }
EMSCRIPTEN_KEEPALIVE _Atomic uint32_t *kr_audio_underrun_ptr(void) { return &g_audio_underruns; }
EMSCRIPTEN_KEEPALIVE double kr_audio_rate(void) { return g_rate; }
EMSCRIPTEN_KEEPALIVE int kr_audio_fill(void) { return (int)(atomic_load(&g_audio_w) - atomic_load(&g_audio_r)); }
EMSCRIPTEN_KEEPALIVE unsigned kr_audio_dropped(void) { return g_audio_dropped; }
EMSCRIPTEN_KEEPALIVE void kr_audio_set_target(unsigned frames) { g_audio_target = frames; }
EMSCRIPTEN_KEEPALIVE void kr_audio_set_max(unsigned frames) { g_audio_max = frames; }
EMSCRIPTEN_KEEPALIVE void kr_audio_set_live(int live) { if (live) atomic_store(&g_audio_r, atomic_load(&g_audio_w)); g_audio_live = live; }
static atomic_int g_pacing_auto_wall = 0;
EMSCRIPTEN_KEEPALIVE void kr_set_pacing(int mode) { g_pacing = mode; }
EMSCRIPTEN_KEEPALIVE int kr_get_pacing(void) { return g_pacing; }
EMSCRIPTEN_KEEPALIVE int kr_pacing_auto_wall(void) { return atomic_load(&g_pacing_auto_wall); }
static size_t audio_sample_batch(const int16_t *data, size_t frames) {
  uint32_t w = atomic_load(&g_audio_w), r = atomic_load(&g_audio_r);
  size_t cap = (g_pacing != 1 && g_audio_live) ? g_audio_max : AUDIO_RING_FRAMES;
  size_t fill = (size_t)(w - r), room = fill >= cap ? 0 : cap - fill, n = frames < room ? frames : room;
  for (size_t i = 0; i < n; i++) { uint32_t j = ((w + (uint32_t)i) & (AUDIO_RING_FRAMES - 1)) * 2; g_audio_ring[j] = data[i * 2]; g_audio_ring[j + 1] = data[i * 2 + 1]; }
  atomic_store(&g_audio_w, w + (uint32_t)n);
  if (n < frames) atomic_fetch_add(&g_audio_dropped, (uint32_t)(frames - n));
  return frames;
}
static void audio_sample(int16_t l, int16_t r) { int16_t f[2] = {l, r}; audio_sample_batch(f, 1); }

// ───────────── 输入：位图 + 按下锁存（taplatch.h，W-38）─────────────
static atomic_uint g_input = 0;
static atomic_int g_analog_x = 0, g_analog_y = 0;   // GBA 没摇杆：收下不用
static unsigned g_eff_input = 0;
static KrTapLatch g_tap;
static _Atomic unsigned g_tap_in[16];
static atomic_int g_tap_off = 0;
EMSCRIPTEN_KEEPALIVE void kr_set_input(unsigned mask) { g_input = mask; }
EMSCRIPTEN_KEEPALIVE unsigned kr_get_input(void) { return g_input; }
EMSCRIPTEN_KEEPALIVE void kr_set_analog(int x, int y) { g_analog_x = x; g_analog_y = y; }
EMSCRIPTEN_KEEPALIVE void kr_input_tap(int bit) { if (bit >= 0 && bit < 16) atomic_fetch_add(&g_tap_in[bit], 1); }
EMSCRIPTEN_KEEPALIVE void kr_set_tap_off(int off) { g_tap_off = off ? 1 : 0; }
EMSCRIPTEN_KEEPALIVE int kr_tap_off(void) { return g_tap_off; }
EMSCRIPTEN_KEEPALIVE void kr_input_stats(double *out) { out[0] = g_tap.received; out[1] = g_tap.played; out[2] = g_tap.dropped; }
static void input_poll(void) {
  uint32_t live = g_input; unsigned taps[16];
  for (int b = 0; b < 16; b++) taps[b] = atomic_exchange(&g_tap_in[b], 0);
  g_eff_input = g_tap_off ? live : kr_tap_step(&g_tap, taps, live);
}
static int16_t input_state(unsigned port, unsigned device, unsigned index, unsigned id) {
  (void)index;
  if (port != 0 || (device & RETRO_DEVICE_MASK) != RETRO_DEVICE_JOYPAD) return 0;
  if (id == RETRO_DEVICE_ID_JOYPAD_MASK) return (int16_t)g_eff_input;
  return id < 16 ? (int16_t)((g_eff_input >> id) & 1) : 0;
}

// ───────────── 核选项 / 环境 ─────────────
#define KR_OPT_MAX 32
static char g_opt_key[KR_OPT_MAX][64], g_opt_val[KR_OPT_MAX][48];
static int g_opt_n = 0;
static void opt_add(const char *kv) {
  const char *eq = strchr(kv, '=');
  if (!eq || g_opt_n >= KR_OPT_MAX || eq - kv >= 64 || strlen(eq + 1) >= 48) return;
  memcpy(g_opt_key[g_opt_n], kv, (size_t)(eq - kv)); g_opt_key[g_opt_n][eq - kv] = 0;
  strcpy(g_opt_val[g_opt_n], eq + 1); g_opt_n++;
  fprintf(stderr, "[kr] option: %s=%s\n", g_opt_key[g_opt_n - 1], eq + 1);
}
static const char *opt_get(const char *k) { for (int i = 0; i < g_opt_n; i++) if (!strcmp(g_opt_key[i], k)) return g_opt_val[i]; return NULL; }
// 我们的默认（mGBA 自己的默认写在 libretro_core_options.h；这里只改两条）：跳帧归宿主、不读 BIOS 文件（HLE 就够；有人想塞真 BIOS 再说）
static const struct { const char *key, *value; } g_options[] = { {"mgba_frameskip", "0"}, {"mgba_use_bios", "OFF"} };
static void log_cb(enum retro_log_level level, const char *fmt, ...) {
  if (level < RETRO_LOG_WARN && !getenv("KR_LOG_ALL")) return;
  va_list ap; va_start(ap, fmt); vfprintf(stderr, fmt, ap); va_end(ap);
}
static bool environment(unsigned cmd, void *data) {
  switch (cmd) {
    case RETRO_ENVIRONMENT_GET_VARIABLE: {
      struct retro_variable *var = data;
      { const char *o = opt_get(var->key); if (o) { var->value = o; return true; } }
      for (size_t i = 0; i < sizeof g_options / sizeof g_options[0]; i++) if (!strcmp(var->key, g_options[i].key)) { var->value = g_options[i].value; return true; }
      return false;
    }
    case RETRO_ENVIRONMENT_GET_VARIABLE_UPDATE: *(bool *)data = false; return true;
    case RETRO_ENVIRONMENT_GET_CORE_OPTIONS_VERSION: return false;
    case RETRO_ENVIRONMENT_SET_VARIABLES: return true;
    case RETRO_ENVIRONMENT_SET_PIXEL_FORMAT: {
      enum retro_pixel_format f = *(enum retro_pixel_format *)data;
      if (f != RETRO_PIXEL_FORMAT_RGB565 && f != RETRO_PIXEL_FORMAT_XRGB8888 && f != RETRO_PIXEL_FORMAT_0RGB1555) return false;
      g_pixfmt = f; return true;
    }
    case RETRO_ENVIRONMENT_GET_SYSTEM_DIRECTORY: *(const char **)data = "/system"; return true;
    case RETRO_ENVIRONMENT_GET_SAVE_DIRECTORY: *(const char **)data = "/saves"; return true;
    case RETRO_ENVIRONMENT_GET_LOG_INTERFACE: ((struct retro_log_callback *)data)->log = log_cb; return true;
    case RETRO_ENVIRONMENT_GET_CAN_DUPE: *(bool *)data = true; return true;
    case RETRO_ENVIRONMENT_GET_INPUT_BITMASKS: return true;
    case RETRO_ENVIRONMENT_SET_INPUT_DESCRIPTORS:
    case RETRO_ENVIRONMENT_SET_MEMORY_MAPS:
    case RETRO_ENVIRONMENT_SET_SUPPORT_ACHIEVEMENTS:
    case RETRO_ENVIRONMENT_SET_GEOMETRY:
      return true;
    default:   // 震动 / 摄像头 / 传感器 / 成就接口：没有
      return false;
  }
}

// ───────────── 快照 / 缩略图 / 截图（和 PPSSPP 宿主同一套握手）─────────────
static _Atomic int g_req_snapshot = 0;
static uint8_t *g_snap_ptr = NULL; static _Atomic size_t g_snap_size = 0; static _Atomic unsigned g_snap_seq = 0;
static uint8_t *_Atomic g_restore_ptr = NULL; static _Atomic size_t g_restore_size = 0; static _Atomic unsigned g_restore_seq = 0; static _Atomic int g_restore_ok = 0;
EMSCRIPTEN_KEEPALIVE void kr_request_snapshot(void) { g_req_snapshot = 1; }
EMSCRIPTEN_KEEPALIVE unsigned kr_snap_seq(void) { return g_snap_seq; }
EMSCRIPTEN_KEEPALIVE uint8_t *kr_snap_ptr(void) { return g_snap_ptr; }
EMSCRIPTEN_KEEPALIVE double kr_snap_size(void) { return (double)g_snap_size; }
EMSCRIPTEN_KEEPALIVE void kr_snap_free(void) { free(g_snap_ptr); g_snap_ptr = NULL; g_snap_size = 0; }
EMSCRIPTEN_KEEPALIVE void kr_request_restore(uint8_t *ptr, double size) { g_restore_size = (size_t)size; g_restore_ptr = ptr; }
EMSCRIPTEN_KEEPALIVE unsigned kr_restore_seq(void) { return g_restore_seq; }
EMSCRIPTEN_KEEPALIVE int kr_restore_ok(void) { return g_restore_ok; }
static uint8_t g_thumb[FRAME_MAX_W * FRAME_MAX_H * 4]; static int g_thumb_w = 0, g_thumb_h = 0;
EMSCRIPTEN_KEEPALIVE uint8_t *kr_thumb_ptr(void) { return g_thumb; }
EMSCRIPTEN_KEEPALIVE int kr_thumb_w(void) { return g_thumb_w; }
EMSCRIPTEN_KEEPALIVE int kr_thumb_h(void) { return g_thumb_h; }
static void capture_thumb(void) {
  present_last();   // 攒着没转的那帧先转出来
  int w = g_frame_w, h = g_frame_h;
  g_thumb_w = g_thumb_h = 0;
  if (w <= 0 || h <= 0) return;
  memcpy(g_thumb, g_frame, (size_t)w * h * 4);   // 帧缓冲已经是 R,G,B,A
  g_thumb_w = w; g_thumb_h = h;
}
static void service_cart_load(void);   // 定义在电池存档节（要用 kr_save_ptr / save_size / fnv1a）
static _Atomic int g_req_frame = 0; static _Atomic unsigned g_frame_shot_seq = 0;
EMSCRIPTEN_KEEPALIVE void kr_request_frame(void) { g_req_frame = 1; }
EMSCRIPTEN_KEEPALIVE unsigned kr_frame_shot_seq(void) { return g_frame_shot_seq; }
static void service_snapshots(void) {
  if (g_req_frame) { g_req_frame = 0; capture_thumb(); atomic_fetch_add(&g_frame_shot_seq, 1); }
  if (g_req_snapshot) {
    g_req_snapshot = 0;
    capture_thumb();
    size_t size = retro_serialize_size();
    uint8_t *buf = size ? malloc(size) : NULL;
    if (buf && retro_serialize(buf, size)) { free(g_snap_ptr); g_snap_ptr = buf; g_snap_size = size; }
    else { free(buf); g_snap_size = 0; fprintf(stderr, "[kr] snapshot failed (size %zu)\n", size); }
    atomic_fetch_add(&g_snap_seq, 1);
  }
  uint8_t *rp = g_restore_ptr;
  if (rp) {
    g_restore_ptr = NULL;
    g_restore_ok = retro_unserialize(rp, g_restore_size) ? 1 : 0;
    if (!g_restore_ok) fprintf(stderr, "[kr] restore failed (size %zu)\n", (size_t)g_restore_size);
    free(rp);
    if (g_audio_live) atomic_store(&g_audio_r, atomic_load(&g_audio_w));
    atomic_fetch_add(&g_restore_seq, 1);
  }
  service_cart_load();
}

// ───────────── 电池存档：一块内存，变了就通知页面（页面装罐进 jars/）─────────────
#define SAVE_MAX (128 * 1024)
static _Atomic unsigned g_save_seq = 0;
static uint64_t g_save_hash = 0;
static uint64_t fnv1a(const uint8_t *p, size_t n) { uint64_t h = 1469598103934665603ull; for (size_t i = 0; i < n; i++) { h ^= p[i]; h *= 1099511628211ull; } return h; }
static size_t save_size(void) { size_t n = retro_get_memory_size(RETRO_MEMORY_SAVE_RAM); return n > SAVE_MAX ? SAVE_MAX : n; }
EMSCRIPTEN_KEEPALIVE uint8_t *kr_save_ptr(void) { return (uint8_t *)retro_get_memory_data(RETRO_MEMORY_SAVE_RAM); }
EMSCRIPTEN_KEEPALIVE double kr_save_size(void) { return (double)save_size(); }
EMSCRIPTEN_KEEPALIVE unsigned kr_save_seq(void) { return g_save_seq; }   // 页面轮询：变了就读 ptr / size 装罐
static void save_tick(void) {   // 每 30 帧算一次哈希（128 KB 几十微秒）
  uint8_t *p = kr_save_ptr(); size_t n = save_size();
  if (!p || !n) return;
  uint64_t h = fnv1a(p, n);
  if (h != g_save_hash) { g_save_hash = h; atomic_fetch_add(&g_save_seq, 1); }
}
static void load_save_file(void) {   // 页面 preRun 写在 /saves/game.sav 的那罐（没有就是新游戏）
  FILE *f = fopen("/saves/game.sav", "rb");
  if (!f) return;
  uint8_t *p = kr_save_ptr();
  if (p) { size_t n = fread(p, 1, SAVE_MAX, f); fprintf(stderr, "[kr] battery save loaded: %zu bytes\n", n); }
  fclose(f);
  g_save_hash = fnv1a(p ? p : (const uint8_t *)"", p ? save_size() : 0);   // 读进来的不算「变了」
}
// 导入电池存档（v0.2.5，user 10-21「今天没有导入电池存档的入口 做」）：页面把字节 malloc 进核内存后请求；模拟线程上 memcpy 进 SAVE_RAM、
//   重算哈希（页面自己已经装罐，不算「变了」）、retro_reset 让游戏从头把它读进去（闪存 / EEPROM 的内容游戏只在开机 / 读档时读；mGBA 的快照里也带着
//   存档内容，所以不能靠读快照——必须冷启）。大小对不上就拒（页面先核过一次，这里是最后一道）。
static uint8_t *_Atomic g_cart_ptr = NULL; static _Atomic size_t g_cart_size = 0; static _Atomic unsigned g_cart_seq = 0; static _Atomic int g_cart_ok = 0;
EMSCRIPTEN_KEEPALIVE void kr_request_cart_load(uint8_t *ptr, double size) { g_cart_size = (size_t)size; g_cart_ptr = ptr; }
EMSCRIPTEN_KEEPALIVE unsigned kr_cart_seq(void) { return g_cart_seq; }
EMSCRIPTEN_KEEPALIVE int kr_cart_ok(void) { return g_cart_ok; }
static void service_cart_load(void) {
  uint8_t *cp = g_cart_ptr;
  if (!cp) return;
  g_cart_ptr = NULL;
  uint8_t *p = kr_save_ptr(); size_t n = save_size();
  if (p && n && (size_t)g_cart_size == n) {
    memcpy(p, cp, n); g_save_hash = fnv1a(p, n);
    retro_reset();
    if (g_audio_live) atomic_store(&g_audio_r, atomic_load(&g_audio_w));
    g_cart_ok = 1; fprintf(stderr, "[kr] battery save imported: %zu bytes, core reset\n", n);
  } else { g_cart_ok = 0; fprintf(stderr, "[kr] battery save import rejected: %zu bytes offered, save ram is %zu\n", (size_t)g_cart_size, n); }
  free(cp);
  atomic_fetch_add(&g_cart_seq, 1);
}

// ───────────── 主循环：时间对齐 + 快进（照 PPSSPP 宿主的墙钟 / 跟屏幕两条路，没有跳帧——GBA 一帧很便宜）─────────────
static int g_timing_mode = -1;
static _Atomic double g_loop_last = 0;
static atomic_uint_least64_t g_frames_run = 0;
static double g_emu_ms_total = 0, g_frame_ms = 1000.0 / 59.7275;
static double g_anchor_real = 0, g_anchor_emu = 0, g_anchor_speed = 1.0;
static atomic_int g_vs_lock = 0;
static atomic_uint g_catchup_runs = 0, g_reanchors = 0;
static _Atomic int g_paused = 0;
static double g_speed = 1.0;
static double g_run_ms = 0, g_run_max = 0;
static double g_fm_n = 0, g_fm_sum = 0, g_fm_sumsq = 0;
EMSCRIPTEN_KEEPALIVE double kr_stat_frames(void) { return (double)g_frames_run; }
EMSCRIPTEN_KEEPALIVE double kr_stat_emu_ms(void) { return g_emu_ms_total; }
EMSCRIPTEN_KEEPALIVE int kr_vsync_lock(void) { return g_vs_lock; }
EMSCRIPTEN_KEEPALIVE double kr_vsync_dt(void) { return 0; }   // 不跟 rAF（见 frame()）
EMSCRIPTEN_KEEPALIVE unsigned kr_catchup_runs(void) { return g_catchup_runs; }
EMSCRIPTEN_KEEPALIVE unsigned kr_reanchors(void) { return g_reanchors; }
EMSCRIPTEN_KEEPALIVE unsigned kr_frameskip(void) { return 0; }
EMSCRIPTEN_KEEPALIVE double kr_frame_ms_avg(void) { return g_frame_ms; }
EMSCRIPTEN_KEEPALIVE void kr_set_paused(int p) { g_paused = p; }
EMSCRIPTEN_KEEPALIVE int kr_get_paused(void) { return g_paused; }
EMSCRIPTEN_KEEPALIVE void kr_set_speed(double x) { g_speed = x >= 0.25 && x <= 10 ? x : 1.0; }
EMSCRIPTEN_KEEPALIVE double kr_get_speed(void) { return g_speed; }
EMSCRIPTEN_KEEPALIVE double kr_loop_last_ms(void) { return atomic_load(&g_loop_last); }
EMSCRIPTEN_KEEPALIVE unsigned kr_loop_rescues(void) { return 0; }
EMSCRIPTEN_KEEPALIVE void kr_frame_ms_stats(double *out) {
  double n = g_fm_n, mean = n ? g_fm_sum / n : 0, var = n ? g_fm_sumsq / n - mean * mean : 0;
  out[0] = mean; out[1] = var > 0 ? sqrt(var) : 0; g_fm_n = g_fm_sum = g_fm_sumsq = 0;
}
EMSCRIPTEN_KEEPALIVE void kr_pace_stats(double *out) {
  kr_frame_ms_stats(out + 6);
  double n = g_pres_n, mean = n ? g_pres_sum / n : 0, var = n ? g_pres_sumsq / n - mean * mean : 0;
  int late = 0, bunched = 0;
  for (int i = 0; i < g_pres_count; i++) { if (g_pres_win[i] > mean * 1.5) late++; if (g_pres_win[i] < mean * 0.5) bunched++; }
  out[0] = n; out[1] = mean; out[2] = var > 0 ? sqrt(var) : 0; out[3] = g_pres_max; out[4] = late; out[5] = bunched;
  g_pres_n = g_pres_sum = g_pres_sumsq = g_pres_max = 0; g_pres_count = 0;
}
// 性能读数（PPSSPP 宿主那张 40 格的表）：这里只有 retro_run 的时间有意义，其余 0；页面按「模拟忙 = 1 − 等提交」算，单线程核没有提交线程 → 用 retro_run 占一趟的比例填
EMSCRIPTEN_KEEPALIVE void kr_perf_stats(double *out) {
  for (int i = 0; i < 40; i++) out[i] = 0;
  out[0] = g_run_ms; out[1] = g_run_max; g_run_max = 0;
}
static void reanchor(void) { g_anchor_real = emscripten_get_now(); g_anchor_emu = g_emu_ms_total; g_anchor_speed = g_speed; }
static double debt_ms(void) { return (emscripten_get_now() - g_anchor_real) * g_anchor_speed - (g_emu_ms_total - g_anchor_emu); }
static void run_one(void) {
  service_snapshots();
  double t0 = emscripten_get_now();
  retro_run();
  double dt = emscripten_get_now() - t0;
  g_run_ms += dt; if (dt > g_run_max) g_run_max = dt;
  uint64_t n = atomic_fetch_add(&g_frames_run, 1) + 1;
  g_emu_ms_total += g_frame_ms;   // GBA 一帧 = 固定 280896 周期：模拟时间按帧数算，不看声音（PPSSPP 那边按声音是因为它一趟不一定一帧）
  g_fm_n += 1; g_fm_sum += g_frame_ms; g_fm_sumsq += g_frame_ms * g_frame_ms;
  if (n % 30 == 0) save_tick();
}
static void frame(void) {
  double now = emscripten_get_now();
  g_loop_last = now;
  // 排程：一律按墙钟对齐（不像 PPSSPP 宿主那样跟 worker 的 rAF）——这个 worker 没有画布，Chromium 给它的 rAF 节拍和显示器无关
  //   （10-21 无头实测：按 rAF 一刷一帧跑到了 151%）。GBA 一帧很便宜：超前就 futex 睡到点，落后就连跑；页面按自己的 rAF 画最新一帧。
  if (g_timing_mode != EM_TIMING_SETIMMEDIATE) { emscripten_set_main_loop_timing(EM_TIMING_SETIMMEDIATE, 0); g_timing_mode = EM_TIMING_SETIMMEDIATE; g_anchor_real = 0; }
  if (g_paused) { service_snapshots(); present_last(); g_anchor_real = 0; static _Atomic uint32_t idle = 0; emscripten_futex_wait((void *)&idle, 0, 16.0); return; }
  if (g_anchor_real == 0 || g_anchor_speed != g_speed) reanchor();
  const double e = g_frame_ms;
  // 顺滑：等声音播掉一些再跑；声音时钟卡住 50 ms 就退回时间对齐
  if (g_pacing == 1 && g_audio_live && g_speed == 1.0) {
    double t0 = now;
    for (;;) {
      uint32_t r = atomic_load(&g_audio_r);
      if (atomic_load(&g_audio_w) - r <= g_audio_target) { run_one(); present_last(); reanchor(); return; }
      if (!g_audio_live || emscripten_get_now() - t0 > 50.0) break;
      emscripten_futex_wait((void *)&g_audio_r, r, 8.0);
    }
  }
  double d = debt_ms();
  if (d > e * 5.5 * (g_speed > 1.0 ? g_speed : 1.0)) { reanchor(); d = 0; atomic_fetch_add(&g_reanchors, 1); }   // 落后太多（切后台回来）：认了
  if (d < 0) { static _Atomic uint32_t sleeper = 0; emscripten_futex_wait((void *)&sleeper, 0, -d); d = debt_ms(); }   // 超前：睡到点
  // 落后：这一趟连跑到追上（快进时就是一趟跑好几帧），预算 ≈ 一次刷新，塞不下的下一趟接着
  int n = (int)floor((d + e * 0.5) / e); if (n < 1) n = 1; int cap = 3 * (int)ceil(g_speed > 1.0 ? g_speed : 1.0); if (n > cap) n = cap;
  double t0 = emscripten_get_now();
  for (int i = 0; i < n; i++) { run_one(); if (i > 0) atomic_fetch_add(&g_catchup_runs, 1); if (i + 1 < n && emscripten_get_now() - t0 > 15.0) break; }
  present_last();
}
static void watchdog(void *arg) { (void)arg; if (emscripten_get_now() - atomic_load(&g_loop_last) > 300.0) service_snapshots(); }   // 后台 rAF 停了也处理快照请求

int main(int argc, char **argv) {
  if (argc < 3) { fprintf(stderr, "[kr] usage: <cartridge path> <size>\n"); return 1; }
  snprintf(g_rom_path, sizeof g_rom_path, "%s", argv[1]);
  g_rom_size = strtoll(argv[2], NULL, 10);
  for (int i = 3; i < argc; i++) {
    if (!strcmp(argv[i], "tap=0")) g_tap_off = 1;
    if (!strncmp(argv[i], "opt:", 4)) opt_add(argv[i] + 4);
  }
  mkdir("/saves", 0777); mkdir("/system", 0777);
  if (!load_rom()) return 1;
  retro_set_environment(environment);
  retro_set_video_refresh(video_refresh);
  retro_set_audio_sample(audio_sample);
  retro_set_audio_sample_batch(audio_sample_batch);
  retro_set_input_poll(input_poll);
  retro_set_input_state(input_state);
  retro_init();
  struct retro_game_info info = { g_rom_path, g_rom, (size_t)g_rom_size, NULL };
  if (!retro_load_game(&info)) { fprintf(stderr, "[kr] retro_load_game failed for %s (%lld bytes)\n", g_rom_path, (long long)g_rom_size); return 1; }
  struct retro_system_av_info av;
  retro_get_system_av_info(&av);
  if (av.timing.fps > 1.0) { g_fps = av.timing.fps; g_frame_ms = 1000.0 / g_fps; }
  if (av.timing.sample_rate > 1000.0) g_rate = av.timing.sample_rate;
  load_save_file();
  fprintf(stderr, "[kr] mgba: game loaded: %s (%lld bytes), %.3f fps, %.0f Hz, %ux%u, software rendering\n", g_rom_path, (long long)g_rom_size, g_fps, g_rate, av.geometry.base_width, av.geometry.base_height);
  emscripten_set_interval(watchdog, 250.0, NULL);
  emscripten_set_main_loop(frame, 0, 1);
  return 0;
}
