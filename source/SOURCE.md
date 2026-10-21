# Source for the compiled core

`dev/dist/core-*/` and `dist/core-*/` contain a WebAssembly build of:

- **PPSSPP v1.20.4** (GPL-2.0-or-later) — https://github.com/hrydgard/ppsspp/tree/v1.20.4 (with submodules),
  plus `ppsspp-v1.20.4-kudsrocket.patch` from this folder (`git apply` at the repo root; it also touches submodules).
- **FFmpeg 3.0.2** as vendored by PPSSPP (`ffmpeg/` submodule, LGPL-2.1-or-later), configured by `build-ffmpeg.sh`.
- `host.c` (the libretro frontend), built by `build.sh`.

Build order: apply the patch → `build-ffmpeg.sh` → `cd libretro && emmake make platform=emscripten TARGET_ARCH=wasm32 WITH_DYNAREC=0` → `build.sh`.
License texts: `LICENSE-GPL-2.0.txt`, `LICENSE-LGPL-2.1.txt`.

`dev/dist/core-mgba-*/` and `dist/core-mgba-*/` contain a WebAssembly build of **mGBA 0.10.5** (MPL-2.0) — https://github.com/mgba-emu/mgba/tree/0.10.5,
plus `mgba/mgba-0.10.5-kudsrocket.patch` (build the libretro target as a static library on Emscripten) and the frontend `mgba/host.c`, built by `mgba/build.sh`
(the exact cmake invocation is in that script's header). License text: `mgba/LICENSE-MPL-2.0.txt`.

Everything else on this site: `../LICENSE` (MIT).
