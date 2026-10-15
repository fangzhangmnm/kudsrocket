#!/usr/bin/env bash
# 编 wasm 核：上游 PPSSPP 的 libretro 静态库 + 本目录 host.c → web/core/kr-core.{mjs,wasm,data}
# —— created 20261014 by Claude Opus 5.5
#
# 需要两个环境变量：
#   EMSDK       emsdk 目录（里面有 emsdk_env.sh）
#   PPSSPP_SRC  上游 PPSSPP 源码：已打 patches/ppsspp/*.patch，并已在 libretro/ 下
#               先跑 build-ffmpeg.sh，再 `emmake make platform=emscripten TARGET_ARCH=wasm32 WITH_DYNAREC=0` 编出 ppsspp_libretro_emscripten.bc
# 产物含 PPSSPP（GPL-2.0-or-later），见仓根 LICENSE 的说明。
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
root="$(cd "$here/../.." && pwd)"
: "${EMSDK:?set EMSDK}" "${PPSSPP_SRC:?set PPSSPP_SRC}"
# shellcheck disable=SC1091
source "$EMSDK/emsdk_env.sh" > /dev/null 2>&1

lib="$PPSSPP_SRC/libretro/ppsspp_libretro_emscripten.bc"
[ -f "$lib" ] || { echo "missing $lib" >&2; exit 1; }
# 视频解码（PMF / H.264 / AT3 等）要 ffmpeg 3.0.2 的 wasm 版：$PPSSPP_SRC/ffmpeg/build-wasm/install（编法见 build-ffmpeg.sh）。
# 没有它游戏会卡在开场动画（黑屏 / 白屏）或视频发绿。ffmpeg 按我们的配置是 LGPL-2.1-or-later。
ff="$PPSSPP_SRC/ffmpeg/build-wasm/install/lib"
[ -f "$ff/libavcodec.a" ] || { echo "missing $ff/libavcodec.a" >&2; exit 1; }

out="$root/web/core"
mkdir -p "$out"

# PPSSPP 运行时要的资源（系统字体 flash0、PPGe 图集、兼容表），打包成 /system/PPSSPP
assets="$(mktemp -d)"
trap 'rm -rf "$assets"' EXIT
mkdir -p "$assets/PPSSPP"
cp -r "$PPSSPP_SRC/assets/flash0" "$assets/PPSSPP/"
# 上游把静态库叫 .bc，emcc 会按扩展名当源码编译；它其实是 ar 归档，给它一个 .a 的名字
ln -s "$lib" "$assets/libppsspp_libretro.a"
for f in compat.ini knownfuncs.ini langregion.ini ppge_atlas.meta ppge_atlas.zim font_atlas.meta font_atlas.zim asciifont_atlas.meta asciifont_atlas.zim; do
  cp "$PPSSPP_SRC/assets/$f" "$assets/PPSSPP/"
done
# VFPU 查表（assets/vfpu/*.dat，4.8 MB）：PPSSPP 用它们复现 PSP 硬件 sin / cos / rcp / asin / exp2 / log2 的精确位结果（Core/MIPS/MIPSVFPUUtils.cpp LOAD_TABLE）。
#   10-15 iPad 日志抓到「[CPU] Error loading 'vfpu/vfpu_sin_lut8192.dat' (size=0)」= 以前没打进包，核一直在用近似的浮点回退。
cp -r "$PPSSPP_SRC/assets/vfpu" "$assets/PPSSPP/"

# 性能量具（host.c「性能量具」节）：核对这些 GLES2 函数的调用在链接时绕到 host.c 的 __wrap_glXxx（计数 / 计时），再转 __real_glXxx。
wrap=""
for s in glDrawElements glDrawArrays glTexImage2D glTexSubImage2D glCompressedTexImage2D glBufferData glBufferSubData glReadPixels glGetError glFinish glFlush glUseProgram glBindFramebuffer; do
  wrap="$wrap -Wl,--wrap=$s"
done
# 默认保留 wasm 函数名（--profiling-funcs，+1 MB，行为不变）：浏览器的 CPU 采样（iPad Safari 检查器 / Quest 远程调试 / private/tests/perf-probe.ts --profile）
#   能认出核里的函数——10-15 就是这样抓到上游把 wasm 钉死在慢解释器上的。KR_NO_SYMBOLS=1 去掉。
prof="--profiling-funcs"
[ "${KR_NO_SYMBOLS:-0}" = "1" ] && prof=""

# host.c 是 C：先用 emcc 编成 .o；核里是 C++，链接交给 em++ 才会带上 C++ 标准库
emcc -c "$here/host.c" -o "$assets/host.o" -I"$PPSSPP_SRC/libretro/libretro-common/include" -O3 -pthread -msimd128
# shellcheck disable=SC2086
em++ "$assets/host.o" "$assets/libppsspp_libretro.a" \
  "$ff/libavformat.a" "$ff/libavcodec.a" "$ff/libswscale.a" "$ff/libswresample.a" "$ff/libavutil.a" \
  -O3 -pthread -msimd128 $wrap $prof \
  -sPROXY_TO_PTHREAD=1 -sPTHREAD_POOL_SIZE=12 \
  -sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORT_NAME=createKrCore -sENVIRONMENT=web,worker \
  -sINITIAL_MEMORY=768MB -sALLOW_MEMORY_GROWTH=0 \
  -sSTACK_SIZE=1MB -sDEFAULT_PTHREAD_STACK_SIZE=1MB \
  -sEXPORTED_RUNTIME_METHODS=HEAPU8,HEAP32,HEAPF64,FS -sEXPORTED_FUNCTIONS=_main,_malloc,_free \
  -sMIN_WEBGL_VERSION=2 -sMAX_WEBGL_VERSION=2 -sFULL_ES3=1 -sGL_ENABLE_GET_PROC_ADDRESS=1 -lGL -sUSE_ZLIB=1 \
  -sOFFSCREENCANVAS_SUPPORT=1 -sOFFSCREENCANVASES_TO_PTHREAD=#gl \
  -sFORCE_FILESYSTEM=1 --preload-file "$assets/PPSSPP@/system/PPSSPP" \
  -o "$out/kr-core.mjs"

ls -la "$out"
