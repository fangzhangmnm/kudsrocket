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

# host.c 是 C：先用 emcc 编成 .o；核里是 C++，链接交给 em++ 才会带上 C++ 标准库
emcc -c "$here/host.c" -o "$assets/host.o" -I"$PPSSPP_SRC/libretro/libretro-common/include" -O3 -pthread -msimd128
em++ "$assets/host.o" "$assets/libppsspp_libretro.a" \
  "$ff/libavformat.a" "$ff/libavcodec.a" "$ff/libswscale.a" "$ff/libswresample.a" "$ff/libavutil.a" \
  -O3 -pthread -msimd128 \
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
