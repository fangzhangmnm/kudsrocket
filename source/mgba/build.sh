#!/usr/bin/env bash
# 编第二个核：mGBA（libretro，MPL-2.0）的 wasm 静态库 + 本目录 host.c → web/core-mgba/kr-core.{mjs,wasm}
# —— created 20261021 by Claude Fable 5.1（照 ../ppsspp/build.sh 的形；没有 GL、没有 ffmpeg、没有资源包）
#
# 需要两个环境变量：
#   EMSDK      emsdk 目录（里面有 emsdk_env.sh）
#   MGBA_SRC   上游 mGBA 源码（~/jupyter/third-party/mgba-0.10.5，家规检疫桶），已经按下面的方法配置 + 编过 libretro 核：
#     emcmake cmake -S . -B build-wasm -DCMAKE_BUILD_TYPE=Release -DBUILD_LIBRETRO=ON -DSKIP_LIBRARY=ON -DBUILD_SHARED=OFF -DBUILD_STATIC=ON \
#       -DBUILD_QT=OFF -DBUILD_SDL=OFF -DBUILD_TEST=OFF -DBUILD_SUITE=OFF -DBUILD_PERF=OFF -DBUILD_EXAMPLE=OFF -DBUILD_PYTHON=OFF \
#       -DBUILD_GL=OFF -DBUILD_GLES2=OFF -DBUILD_GLES3=OFF -DUSE_FFMPEG=OFF -DUSE_PNG=OFF -DUSE_ZLIB=OFF -DUSE_MINIZIP=OFF -DUSE_LIBZIP=OFF \
#       -DUSE_SQLITE3=OFF -DUSE_ELF=OFF -DUSE_LUA=OFF -DENABLE_SCRIPTING=OFF -DUSE_LZMA=OFF -DUSE_DISCORD_RPC=OFF -DUSE_EDITLINE=OFF \
#       -DUSE_GDB_STUB=OFF -DUSE_EPOXY=OFF -DUSE_PTHREADS=OFF -DM_CORE_GBA=ON -DM_CORE_GB=ON \
#       -DCMAKE_C_FLAGS="-O3 -msimd128 -D_GNU_SOURCE -D_POSIX_C_SOURCE=200809L"      # mGBA 的 CMake 在 Emscripten 平台不加 _GNU_SOURCE，strdup 会被 C99 严格模式藏掉
#     cmake --build build-wasm --target mgba_libretro -j12
#   产物 build-wasm/mgba_libretro.a（静态归档；patches/mgba/ 把 libretro 目标在 Emscripten 上改成 STATIC——SHARED 会被编成 PIC、emcc 把 .so 当动态侧模块，链出来只有 91 KB 的空壳）。
# 产物含 mGBA（MPL-2.0）：分发时附上游源码位置 + 本目录 + 这份脚本（scripts/deploy-site.sh 的 source/ 负责）。
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
root="$(cd "$here/../.." && pwd)"
: "${EMSDK:?set EMSDK}" "${MGBA_SRC:?set MGBA_SRC}"
# shellcheck disable=SC1091
source "$EMSDK/emsdk_env.sh" > /dev/null 2>&1

lib="$MGBA_SRC/build-wasm/mgba_libretro.a"
[ -f "$lib" ] || { echo "missing $lib (build the libretro core first, see the header of this script)" >&2; exit 1; }
out="$root/web/core-mgba"
mkdir -p "$out"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
ln -s "$lib" "$tmp/libmgba_libretro.a"   # CMake 的 PREFIX "" 让它不叫 lib*，给链接器一个规矩的名字

prof="--profiling-funcs"
[ "${KR_NO_SYMBOLS:-0}" = "1" ] && prof=""
emcc -c "$here/host.c" -o "$tmp/host.o" -I"$MGBA_SRC/src/platform/libretro" -O3 -pthread -msimd128
# shellcheck disable=SC2086
emcc "$tmp/host.o" "$tmp/libmgba_libretro.a" \
  -O3 -pthread -msimd128 $prof \
  -sPROXY_TO_PTHREAD=1 -sPTHREAD_POOL_SIZE=2 \
  -sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORT_NAME=createKrCore -sENVIRONMENT=web,worker \
  -sINITIAL_MEMORY=160MB -sALLOW_MEMORY_GROWTH=0 \
  -sSTACK_SIZE=1MB -sDEFAULT_PTHREAD_STACK_SIZE=1MB \
  -sEXPORTED_RUNTIME_METHODS=HEAPU8,HEAP32,HEAPF64,FS -sEXPORTED_FUNCTIONS=_main,_malloc,_free \
  -sFORCE_FILESYSTEM=1 \
  -o "$out/kr-core.mjs"

ls -la "$out"
