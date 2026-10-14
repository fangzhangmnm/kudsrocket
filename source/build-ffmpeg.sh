#!/usr/bin/env bash
# 编 wasm 版 ffmpeg（PPSSPP 自带的 3.0.2 子模块）→ $PPSSPP_SRC/ffmpeg/build-wasm/install —— created 20261014 by Claude Opus 5.5
# 没有它，PSP 的视频（PMF / H.264）解不了：游戏卡在开场动画（黑屏 / 白屏），或视频整片发绿。
# 解码器 / 解复用器 / 解析器照上游 ffmpeg/linux_x86-64.sh；去掉编码器、封装器、汇编、线程（wasm 里用不上）。
# 这样配出来的 ffmpeg 是 LGPL-2.1-or-later（没开 --enable-gpl）。
#
# 需要两个环境变量：EMSDK、PPSSPP_SRC（同 build.sh）。编完再按 build.sh 头注释重编核。
set -euo pipefail
: "${EMSDK:?set EMSDK}" "${PPSSPP_SRC:?set PPSSPP_SRC}"
# shellcheck disable=SC1091
source "$EMSDK/emsdk_env.sh" > /dev/null 2>&1

src="$PPSSPP_SRC/ffmpeg"
out="$src/build-wasm"
mkdir -p "$out"
cd "$out"

decoders="h264 mpeg4 h263 h263p mpeg2video mjpeg mjpegb aac aac_latm atrac3 atrac3p mp3 pcm_s16le pcm_s8"
demuxers="h264 h263 m4v mpegps mpegvideo avi mp3 aac pmp oma pcm_s16le pcm_s8 wav"
parsers="h264 mpeg4video mpegvideo aac aac_latm mpegaudio"
flags=()
for d in $decoders; do flags+=("--enable-decoder=$d"); done
for d in $demuxers; do flags+=("--enable-demuxer=$d"); done
for p in $parsers; do flags+=("--enable-parser=$p"); done

../configure --prefix="$out/install" \
  --cc=emcc --cxx=em++ --ar=emar --ranlib=emranlib --nm="$EMSDK/upstream/bin/llvm-nm" \
  --enable-cross-compile --target-os=none --arch=x86_32 --cpu=generic \
  --disable-asm --disable-inline-asm --disable-yasm \
  --disable-pthreads --disable-w32threads --disable-os2threads \
  --disable-shared --enable-static --disable-programs --disable-doc --disable-debug --disable-stripping \
  --disable-runtime-cpudetect --disable-avdevice --disable-avfilter --disable-postproc --disable-network \
  --disable-encoders --disable-muxers --disable-everything \
  "${flags[@]}" --enable-protocol=file \
  --extra-cflags='-O3 -pthread -D__STDC_CONSTANT_MACROS'
make -j"$(nproc)"
make install
ls -la "$out/install/lib"
