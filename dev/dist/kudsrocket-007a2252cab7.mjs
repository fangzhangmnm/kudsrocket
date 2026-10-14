// src/version.ts
var APP_VERSION = "v0.1.0-2026-10-14";

// assets/icons.svg
var icons_default = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none">\n<!--\n  12 icons extracted from the family icon library (../20260708 SVG Icons/icons.svg) by extract-icons.py \u2014 do not hand-edit; re-run the script instead.\n  Family SVG Icons \u2014 MIT License, Copyright (c) 2026 fangzhangmnm.\n  Contains work derived from (per-icon provenance in data-src):\n    Feather Icons \u2014 MIT License, Copyright (c) 2013-2023 Cole Bemis \xB7 https://github.com/feathericons/feather\n-->\n  <!-- media -->\n  <!-- pause \u2014 \u6682\u505C:\u53CC\u7AD6\u6760 \u23F8(\u7C97 3.2 \u5706\u5E3D, brush-width \u540C\u6B3E\u52A0\u7C97\u624B\u6CD5); 20260819 media \u6279\u5165\u5E93 -->\n  <symbol id="pause" data-cat="media" data-src="own" data-note="\u6682\u505C:\u53CC\u7AD6\u6760 \u23F8(\u7C97 3.2 \u5706\u5E3D, brush-width \u540C\u6B3E\u52A0\u7C97\u624B\u6CD5); 20260819 media \u6279\u5165\u5E93" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="3.2"><path d="M8.3 5.5 V18.5"/><path d="M15.7 5.5 V18.5"/></g></symbol>\n  <!-- play \u2014 \u64AD\u653E:\u5B9E\u5FC3\u53F3\u5411\u4E09\u89D2 \u25B6(IEC 60417 \u78C1\u5E26\u673A\u60EF\u4F8B\u7EDF\u4E00\u5B9E\u5FC3, \u63CF\u8FB9\u540C\u8272\u53E0\u52A0\u5F97\u5706\u89D2); 20260819 media \u6279\u5165\u5E93 -->\n  <symbol id="play" data-cat="media" data-src="own" data-note="\u64AD\u653E:\u5B9E\u5FC3\u53F3\u5411\u4E09\u89D2 \u25B6(IEC 60417 \u78C1\u5E26\u673A\u60EF\u4F8B\u7EDF\u4E00\u5B9E\u5FC3, \u63CF\u8FB9\u540C\u8272\u53E0\u52A0\u5F97\u5706\u89D2); 20260819 media \u6279\u5165\u5E93" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8.2 5.4 L18.8 12 L8.2 18.6 Z" fill="currentColor"/></symbol>\n  <!-- fast-forward \u2014 \u5FEB\u8FDB:\u53CC\u53F3\u5411\u5B9E\u5FC3\u4E09\u89D2 \u23E9(\u8D70\u5E26\u8BED\u4E49; timelapse-record \u7684\u52A0\u901F\u89D2\u6807\u7528 chevron \u5206\u5DE5); 20260819 media \u6279\u5165\u5E93 -->\n  <symbol id="fast-forward" data-cat="media" data-src="own" data-note="\u5FEB\u8FDB:\u53CC\u53F3\u5411\u5B9E\u5FC3\u4E09\u89D2 \u23E9(\u8D70\u5E26\u8BED\u4E49; timelapse-record \u7684\u52A0\u901F\u89D2\u6807\u7528 chevron \u5206\u5DE5); 20260819 media \u6279\u5165\u5E93" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.4 6.8 L10.9 12 L4.4 17.2 Z" fill="currentColor"/><path d="M13.1 6.8 L19.6 12 L13.1 17.2 Z" fill="currentColor"/></symbol>\n  <!-- file -->\n  <!-- floppy-disk \u2014 \u8F6F\u76D8/\u4FDD\u5B58:\u6ED1\u76D6\u5DE6\u53F3\u5BF9\u79F0(7/17)\u4E14\u4E24\u7AD6\u7EBF\u9876\u5230\u9876\u8FB9 + \u9632\u5446\u89D2 k=3 -->\n  <symbol id="floppy-disk" data-cat="file" data-src="feather:save" data-note="\u8F6F\u76D8/\u4FDD\u5B58:\u6ED1\u76D6\u5DE6\u53F3\u5BF9\u79F0(7/17)\u4E14\u4E24\u7AD6\u7EBF\u9876\u5230\u9876\u8FB9 + \u9632\u5446\u89D2 k=3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h13l3 3v13a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 17 8 17 3"/></symbol>\n  <!-- folder-open \u2014 \u6253\u5F00\u7684\u6587\u4EF6\u5939:\u80CC\u677F\u6B62\u4E8E\u76D6\u9876 T \u63A5,\u4E0D\u518D\u4E92\u76F8\u538B\u7EBF -->\n  <symbol id="folder-open" data-cat="file" data-src="own" data-note="\u6253\u5F00\u7684\u6587\u4EF6\u5939:\u80CC\u677F\u6B62\u4E8E\u76D6\u9876 T \u63A5,\u4E0D\u518D\u4E92\u76F8\u538B\u7EBF" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18 V7 a2 2 0 0 1 2 -2 h4 l2 2 h6 a2 2 0 0 1 2 2 v1.8"/><path d="M3 18 L6.4 10.8 H21.6 L18.2 18 Z"/></symbol>\n  <!-- hierarchy -->\n  <!-- lock \u2014 \u9501:\u4F53 13x11+\u9501\u6881\u62AC\u9AD8(\u817F3.5),\u6574\u4F53\u5C45\u4E2D -->\n  <symbol id="lock" data-cat="hierarchy" data-src="own" data-note="\u9501:\u4F53 13x11+\u9501\u6881\u62AC\u9AD8(\u817F3.5),\u6574\u4F53\u5C45\u4E2D" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="10" width="13" height="11"/><path d="M8.8 10 V6.5 a3.2 3.2 0 0 1 6.4 0 V10"/></symbol>\n  <!-- common -->\n  <!-- x \u2014 \u53C9 -->\n  <symbol id="x" data-cat="common" data-src="own" data-note="\u53C9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5 L17.5 17.5 M17.5 6.5 L6.5 17.5"/></symbol>\n  <!-- cloud -->\n  <!-- cloud \u2014 \u4E91 -->\n  <symbol id="cloud" data-cat="cloud" data-src="feather:cloud" data-note="\u4E91" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></symbol>\n  <!-- viewport -->\n  <!-- maximize-viewport \u2014 \u9002\u914D\u89C6\u53E3:\u56DB\u89D2\u5411\u5916\u7684\u7BAD\u5934(reset-transform=\u540C\u5F62\u522B\u540D id, \u6539\u52A8\u4FDD\u6301\u540C\u51E0\u4F55) -->\n  <symbol id="maximize-viewport" data-cat="viewport" data-src="own" data-note="\u9002\u914D\u89C6\u53E3:\u56DB\u89D2\u5411\u5916\u7684\u7BAD\u5934(reset-transform=\u540C\u5F62\u522B\u540D id, \u6539\u52A8\u4FDD\u6301\u540C\u51E0\u4F55)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><!-- \u56DB\u89D2\u5411\u5916\u7684\u7BAD\u5934 --> <polyline points="4 9 4 4 9 4"/> <polyline points="20 9 20 4 15 4"/> <polyline points="4 15 4 20 9 20"/> <polyline points="20 15 20 20 15 20"/></symbol>\n  <!-- ui -->\n  <!-- more \u2014 \u6EA2\u51FA\u83DC\u5355:\u6A2A\u5411\u4E09\u70B9(\u539F \u22EF \u5B57\u7B26\u8DE8\u5E73\u53F0\u5B57\u5F62\u4E0D\u4E00) -->\n  <symbol id="more" data-cat="ui" data-src="own" data-note="\u6EA2\u51FA\u83DC\u5355:\u6A2A\u5411\u4E09\u70B9(\u539F \u22EF \u5B57\u7B26\u8DE8\u5E73\u53F0\u5B57\u5F62\u4E0D\u4E00)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none"/></symbol>\n  <!-- keyboard \u2014 \u952E\u76D8:\u5706\u70B9\u52A0\u5927\u6536\u7D27+\u7A7A\u683C\u4E0A\u79FB\u4E0D\u538B\u6846(\u4E0E shortcut \u4E0D\u540C\u8BED\u4E49) -->\n  <symbol id="keyboard" data-cat="ui" data-src="own" data-note="\u952E\u76D8:\u5706\u70B9\u52A0\u5927\u6536\u7D27+\u7A7A\u683C\u4E0A\u79FB\u4E0D\u538B\u6846(\u4E0E shortcut \u4E0D\u540C\u8BED\u4E49)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="7.2" cy="9.7" r="1.15" fill="currentColor" stroke="none"/><circle cx="10.4" cy="9.7" r="1.15" fill="currentColor" stroke="none"/><circle cx="13.6" cy="9.7" r="1.15" fill="currentColor" stroke="none"/><circle cx="16.8" cy="9.7" r="1.15" fill="currentColor" stroke="none"/><circle cx="7.2" cy="12.8" r="1.15" fill="currentColor" stroke="none"/><circle cx="10.4" cy="12.8" r="1.15" fill="currentColor" stroke="none"/><circle cx="13.6" cy="12.8" r="1.15" fill="currentColor" stroke="none"/><circle cx="16.8" cy="12.8" r="1.15" fill="currentColor" stroke="none"/><path d="M8.6 15.6 H15.4"/></symbol>\n  <!-- missing -->\n  <!-- gamepad \u2014 \u7F3A\u56FE\u6807\u5360\u4F4D \u2014 gamepad \u5C1A\u672A\u8FDB icons.svg -->\n  <symbol data-missing="1" id="gamepad" data-cat="missing" data-src="own" data-note="\u7F3A\u56FE\u6807\u5360\u4F4D \u2014 gamepad \u5C1A\u672A\u8FDB icons.svg\uFF0C\u91CD\u8DD1 extract-icons.py \u53EF\u81EA\u52A8\u6362\u6210\u771F\u56FE\u6807" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2.5" stroke-dasharray="2.5 2.5" opacity="0.35"/></symbol>\n</svg>\n';

// src/app/ui.ts
var $ = (id) => {
  const el = document.getElementById(id);
  if (!el) throw new Error(`missing #${id}`);
  return el;
};
function mountIcons() {
  const holder = document.createElement("div");
  holder.innerHTML = icons_default;
  document.body.prepend(holder.firstElementChild);
}
function icon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", `#${name}`);
  svg.append(use);
  return svg;
}
function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
    else if (k === "class") el.className = String(v);
    else el.setAttribute(k, v === true ? "" : String(v));
  }
  for (const c of children) if (c) el.append(c);
  return el;
}
var openSheet = null;
function sheet(build, opts = {}) {
  openSheet?.close(null);
  return new Promise((resolve) => {
    const back = h("div", { class: "sheet-back" });
    const box = h("div", { class: "sheet", role: "dialog" });
    let finished = false;
    const done = (v) => {
      if (finished) return;
      finished = true;
      back.remove();
      removeEventListener("keydown", onKey2, true);
      if (openSheet === handle) openSheet = null;
      resolve(v);
    };
    const handle = { close: (v) => done(v) };
    const onKey2 = (e) => {
      if (e.key === "Escape" && opts.dismissable !== false) {
        e.preventDefault();
        e.stopPropagation();
        done(null);
      } else e.stopPropagation();
    };
    if (opts.dismissable !== false) back.addEventListener("pointerdown", (e) => {
      if (e.target === back) done(null);
    });
    addEventListener("keydown", onKey2, true);
    box.append(...build(done));
    back.append(box);
    document.body.append(back);
    openSheet = handle;
    box.querySelector("input, button.primary")?.focus();
  });
}
var isSheetOpen = () => openSheet !== null;
function askPassword(title, hint = "") {
  return sheet((done) => {
    const input = h("input", { type: "password", autocomplete: "off", spellcheck: "false" });
    const submit = () => {
      if (input.value) done(input.value);
    };
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submit();
      }
    });
    return [
      h("h2", {}, title),
      hint ? h("p", { class: "hint" }, hint) : null,
      input,
      h(
        "div",
        { class: "row" },
        h("button", { onclick: () => done(null) }, "\u53D6\u6D88"),
        h("button", { class: "primary", onclick: submit }, "\u786E\u5B9A")
      )
    ].filter(Boolean);
  });
}
function confirmSheet(title, text, ok, cancel = "\u53D6\u6D88") {
  return sheet((done) => [
    h("h2", {}, title),
    h("p", {}, text),
    h(
      "div",
      { class: "row" },
      h("button", { onclick: () => done(false) }, cancel),
      h("button", { class: "primary", onclick: () => done(true) }, ok)
    )
  ]).then((v) => v === true);
}
function banner(text, level = "error") {
  const host = $("banners");
  const close = h("button", { class: "icon-btn", title: "\u5173\u95ED" }, icon("x"));
  const el = h("div", { class: `banner ${level}` }, h("span", {}, text), close);
  close.addEventListener("click", () => el.remove());
  host.append(el);
}
var noteTimer = 0;
function note(text, ms = 4e3) {
  const el = $("note");
  el.textContent = text;
  el.hidden = false;
  clearTimeout(noteTimer);
  noteTimer = window.setTimeout(() => {
    el.hidden = true;
  }, ms);
}
var busyDepth = 0;
async function withBusy(label, fn) {
  const el = $("busy");
  busyDepth++;
  el.querySelector("span").textContent = label;
  el.hidden = false;
  try {
    return await fn();
  } finally {
    if (--busyDepth === 0) el.hidden = true;
  }
}
function errorText(e) {
  if (e instanceof Error) return e.message;
  return String(e);
}

// src/app/core-session.ts
var BUTTON = { cross: 0, square: 1, select: 2, start: 3, up: 4, down: 5, left: 6, right: 7, circle: 8, triangle: 9, l: 10, r: 11 };
var bit = (b) => 1 << BUTTON[b];
var PACE_MODES = { wall: 0, audio: 1, vsync: 2 };
var MEMSTICK_DIR = "/saves/PSP/SAVEDATA";
var CoreSession = class _CoreSession {
  constructor(core, opts) {
    this.opts = opts;
    this.core = core;
    this.ac = opts.audioContext;
    this.ctx2d = opts.softCanvas.getContext("2d");
  }
  core;
  ac;
  masks = /* @__PURE__ */ new Map();
  // 各输入来源（键盘 / 手柄 / 软键）各自的按键位，合并后给核
  paceBuf = 0;
  mediaReads = 0;
  hwChecked = false;
  lastSeq = -1;
  image = null;
  ctx2d;
  fpsWindow = { t: performance.now(), frames: 0, fps: 0, emuMs: 0, speed: 0 };
  pace = { mean: 0, sd: 0, max: 0, late: 0, bunched: 0, frameMs: 0, frameMsSd: 0 };
  perRefresh = { last: performance.now(), seq: 0, dts: [], counts: [0, 0, 0], hz: 0, shown: [0, 0, 0] };
  startedAt = performance.now();
  static async start(opts) {
    const { default: createKrCore } = await import(new URL(`${opts.coreDir}kr-core.mjs`, location.href).href);
    let session2 = null;
    const media = opts.media;
    const core = await createKrCore({
      krMedia: {
        size: media.size,
        read: (offset, length) => {
          if (session2) session2.mediaReads++;
          return media.read(offset, length);
        }
      },
      arguments: [`/disc/game${opts.ext}`, String(media.size), ...opts.lowLatency ? ["lowlatency"] : []],
      locateFile: (path) => new URL(`${opts.coreDir}${path}`, location.href).href,
      preRun: [(M) => {
        if (!opts.memstick?.size) return;
        for (const [rel, bytes] of opts.memstick) {
          const full = `${MEMSTICK_DIR}/${rel}`;
          M.FS.mkdirTree(full.replace(/\/[^/]*$/, ""));
          M.FS.writeFile(full, bytes);
        }
      }],
      print: (s) => console.log(s),
      printErr: (s) => console.warn(s)
    });
    session2 = new _CoreSession(core, opts);
    session2.init();
    await session2.startAudio();
    return session2;
  }
  init() {
    const { core, opts } = this;
    if (opts.pacing) core._kr_set_pacing(PACE_MODES[opts.pacing]);
    this.paceBuf = core._malloc(8 * 8);
    const tellSize = () => {
      const r = opts.glCanvas.getBoundingClientRect(), dpr = devicePixelRatio || 1;
      core._kr_set_display_size(Math.round(r.width * dpr), Math.round(r.height * dpr));
    };
    new ResizeObserver(tellSize).observe(opts.glCanvas);
    tellSize();
  }
  async startAudio() {
    const { core, ac: ac2 } = this;
    await ac2.audioWorklet.addModule(new URL("./audio-worklet.js", location.href));
    const node = new AudioWorkletNode(ac2, "kr-audio", {
      numberOfInputs: 0,
      outputChannelCount: [2],
      processorOptions: {
        buffer: core.HEAPU8.buffer,
        ringPtr: core._kr_audio_ring(),
        ringFrames: core._kr_audio_ring_frames(),
        wPtr: core._kr_audio_w_ptr(),
        rPtr: core._kr_audio_r_ptr(),
        underrunPtr: core._kr_audio_underrun_ptr(),
        coreRate: core._kr_audio_rate(),
        targetFrames: 2048
        // ≈ 46 ms；对齐模式下核那边的硬上限是 3584（≈ 81 ms）
      }
    });
    node.connect(ac2.destination);
    const sync = () => core._kr_audio_set_live(ac2.state === "running" ? 1 : 0);
    ac2.onstatechange = sync;
    const resume = () => {
      if (!this.paused) ac2.resume().then(sync, () => {
      });
    };
    addEventListener("pointerdown", resume);
    addEventListener("keydown", resume);
    resume();
  }
  // ── 输入 ──
  setMask(source, mask) {
    if ((this.masks.get(source) ?? 0) === mask) return;
    this.masks.set(source, mask);
    let all = 0;
    for (const m of this.masks.values()) all |= m;
    this.core._kr_set_input(all >>> 0);
  }
  getMask(source) {
    return this.masks.get(source) ?? 0;
  }
  setAnalog(x, y) {
    this.core._kr_set_analog(Math.round(x * 32767), Math.round(y * 32767));
  }
  inputMask() {
    return this.core._kr_get_input();
  }
  // ── 暂停 / 快进 ──
  get paused() {
    return this.core._kr_get_paused() === 1;
  }
  setPaused(p) {
    this.core._kr_set_paused(p ? 1 : 0);
    if (p) this.ac.suspend().catch(() => {
    });
    else this.ac.resume().catch(() => {
    });
  }
  get speed() {
    return this.core._kr_get_speed();
  }
  setSpeed(x) {
    this.core._kr_set_speed(x);
  }
  // ── 快照（核线程在帧边界做，暂停中也能做）──
  waitSeq(getSeq, before, timeoutMs = 2e4) {
    return new Promise((resolve, reject) => {
      const t0 = performance.now();
      const poll = () => {
        if (getSeq() !== before) return resolve();
        if (performance.now() - t0 > timeoutMs) return reject(new Error("core did not answer in time"));
        setTimeout(poll, 10);
      };
      poll();
    });
  }
  async snapshot() {
    const { core } = this;
    const before = core._kr_snap_seq();
    core._kr_request_snapshot();
    await this.waitSeq(() => core._kr_snap_seq(), before);
    const size = core._kr_snap_size();
    if (!size) throw new Error("core returned no state");
    const bytes = core.HEAPU8.slice(core._kr_snap_ptr(), core._kr_snap_ptr() + size);
    core._kr_snap_free();
    return bytes;
  }
  async restore(bytes) {
    const { core } = this;
    const ptr = core._malloc(bytes.length);
    core.HEAPU8.set(bytes, ptr);
    const before = core._kr_restore_seq();
    core._kr_request_restore(ptr, bytes.length);
    await this.waitSeq(() => core._kr_restore_seq(), before);
    if (!core._kr_restore_ok()) throw new Error("core rejected the state");
  }
  // ── 画面（每次显示器刷新调一次）──
  tick() {
    const { core, opts } = this;
    const seq = core._kr_frame_seq();
    const now = performance.now();
    this.perRefresh.dts.push(now - this.perRefresh.last);
    this.perRefresh.last = now;
    this.perRefresh.counts[Math.min(seq - this.perRefresh.seq, 2)]++;
    this.perRefresh.seq = seq;
    if (!this.hwChecked && seq > 0) {
      this.hwChecked = true;
      const hw = core._kr_hw_active() === 1;
      opts.glCanvas.hidden = !hw;
      opts.softCanvas.hidden = hw;
    }
    if (seq !== this.lastSeq && !core._kr_hw_active()) {
      this.lastSeq = seq;
      const w = core._kr_frame_w(), h2 = core._kr_frame_h();
      if (w > 0 && h2 > 0) {
        const c = opts.softCanvas;
        if (c.width !== w || c.height !== h2) {
          c.width = w;
          c.height = h2;
          this.image = null;
        }
        this.image ??= this.ctx2d.createImageData(w, h2);
        const src = core.HEAPU8.subarray(core._kr_frame_ptr(), core._kr_frame_ptr() + w * h2 * 4);
        const dst = this.image.data;
        for (let i = 0; i < src.length; i += 4) {
          dst[i] = src[i + 2];
          dst[i + 1] = src[i + 1];
          dst[i + 2] = src[i];
          dst[i + 3] = 255;
        }
        this.ctx2d.putImageData(this.image, 0, 0);
      }
    }
  }
  // ── 统计（状态栏和自动化测试用）──
  stats() {
    const { core, ac: ac2 } = this;
    const now = performance.now();
    const frames = core._kr_stat_frames();
    const fw = this.fpsWindow;
    if (now - fw.t >= 1e3) {
      const emuMs = core._kr_stat_emu_ms();
      fw.fps = (frames - fw.frames) * 1e3 / (now - fw.t);
      fw.speed = (emuMs - fw.emuMs) / (now - fw.t);
      fw.t = now;
      fw.frames = frames;
      fw.emuMs = emuMs;
      core._kr_pace_stats(this.paceBuf);
      const f = core.HEAPF64.subarray(this.paceBuf >> 3, (this.paceBuf >> 3) + 8);
      this.pace = { mean: f[1], sd: f[2], max: f[3], late: f[4], bunched: f[5], frameMs: f[6], frameMsSd: f[7] };
      const sorted = this.perRefresh.dts.slice().sort((a, b) => a - b);
      this.perRefresh.hz = sorted.length ? 1e3 / sorted[sorted.length >> 1] : 0;
      this.perRefresh.shown = this.perRefresh.counts;
      this.perRefresh.dts = [];
      this.perRefresh.counts = [0, 0, 0];
    }
    const pacing = core._kr_get_pacing();
    return {
      frames,
      fps: fw.fps,
      speed: fw.speed,
      pace: this.pace,
      displayHz: this.perRefresh.hz,
      perRefresh: this.perRefresh.shown,
      pacing: ["\u5899\u949F", "\u58F0\u97F3", "\u8DDF\u5C4F\u5E55"][pacing] + (pacing === 2 ? ["\uFF08\u6309\u65F6\u95F4\u5BF9\u9F50\uFF09", "\uFF08\u6BCF\u5237\u65B0 1 \u5E27\uFF09"][core._kr_vsync_lock()] : ""),
      catchup: core._kr_catchup_runs(),
      reanchors: core._kr_reanchors(),
      frameskip: core._kr_frameskip(),
      renderer: core._kr_hw_active() ? "GPU\uFF08WebGL2\uFF09" + ["", " \xB7 \u4F4E\u5EF6\u8FDF\u753B\u5E03\uFF1A\u6D4F\u89C8\u5668\u91C7\u7EB3", " \xB7 \u4F4E\u5EF6\u8FDF\u753B\u5E03\uFF1A\u6D4F\u89C8\u5668\u6CA1\u91C7\u7EB3"][core._kr_desync_state()] : "\u8F6F\u4EF6\u6E32\u67D3",
      bytesFetched: core._kr_stat_bytes_fetched(),
      readsWaiting: core._kr_stat_reads_waiting(),
      mediaReads: this.mediaReads,
      audioState: ac2.state,
      audioClock: ac2.currentTime,
      audioRead: core.HEAP32[core._kr_audio_r_ptr() >> 2],
      audioFillMs: core._kr_audio_fill() / 44.1,
      audioUnderrunMs: core.HEAP32[core._kr_audio_underrun_ptr() >> 2] / 44.1,
      audioDropped: core._kr_audio_dropped(),
      outputLatencyMs: ((ac2.outputLatency || 0) + (ac2.baseLatency || 0)) * 1e3,
      paused: this.paused,
      gameSpeed: this.speed,
      seconds: (now - this.startedAt) / 1e3
    };
  }
  // ── 记忆棒（游戏内存档）：核的文件系统在主线程，直接读 ──
  /** 每个存档目录的「指纹」（文件路径 + 大小 + 修改时间），用来发现游戏存了档 / 删了档。 */
  memstickDirs() {
    const FS = this.core.FS;
    const out = /* @__PURE__ */ new Map();
    if (!FS.analyzePath(MEMSTICK_DIR).exists) return out;
    for (const dir of FS.readdir(MEMSTICK_DIR)) {
      if (dir === "." || dir === ".." || !FS.isDir(FS.stat(`${MEMSTICK_DIR}/${dir}`).mode)) continue;
      const parts = [];
      this.walk(`${MEMSTICK_DIR}/${dir}`, dir, (rel, st) => parts.push(`${rel}:${st.size}:${st.mtime.getTime()}`));
      out.set(dir, parts.sort().join("|"));
    }
    return out;
  }
  /** 读一个存档目录（键 = 「目录/文件」）。 */
  readSaveDir(dir) {
    const files = /* @__PURE__ */ new Map();
    this.walk(`${MEMSTICK_DIR}/${dir}`, dir, (rel) => files.set(rel, this.core.FS.readFile(`${MEMSTICK_DIR}/${rel}`)));
    return files;
  }
  walk(dir, rel, visit) {
    const FS = this.core.FS;
    if (!FS.analyzePath(dir).exists) return;
    for (const name of FS.readdir(dir)) {
      if (name === "." || name === "..") continue;
      const st = FS.stat(`${dir}/${name}`);
      const r = rel ? `${rel}/${name}` : name;
      if (FS.isDir(st.mode)) this.walk(`${dir}/${name}`, r, visit);
      else visit(r, st);
    }
  }
};

// src/app/softkeys.ts
var FACE = [["triangle", "tri"], ["square", "sq"], ["circle", "ci"], ["cross", "cr"]];
function mountSoftKeys(host, onMask) {
  const keys = /* @__PURE__ */ new Map();
  const key = (name, cls, label) => {
    const el = h("div", { class: `pk ${cls}`, "data-k": name }, label);
    keys.set(name, el);
    return el;
  };
  const dpad = h(
    "div",
    { class: "dpad" },
    h("i", { class: "arm up" }),
    h("i", { class: "arm down" }),
    h("i", { class: "arm left" }),
    h("i", { class: "arm right" })
  );
  const face = h("div", { class: "face" }, ...FACE.map(([n, c]) => key(n, `fb ${c}`, h("i", { class: `sym ${c}` }))));
  const layer = h(
    "div",
    { class: "softkeys", hidden: true },
    key("l", "shoulder l", "L"),
    key("r", "shoulder r", "R"),
    dpad,
    face,
    h("div", { class: "mid" }, key("select", "small", "SELECT"), key("start", "small", "START"))
  );
  host.append(layer);
  const pointers = /* @__PURE__ */ new Map();
  let shown = 0;
  const publish = () => {
    let m = 0;
    for (const v of pointers.values()) m |= v;
    if (m === shown) return;
    shown = m;
    for (const [n, el] of keys) el.classList.toggle("on", (m & bit(n)) !== 0);
    for (const d of ["up", "down", "left", "right"]) dpad.querySelector(`.${d}`).classList.toggle("on", (m & bit(d)) !== 0);
    onMask(m);
  };
  const hit = (x, y) => {
    const r = dpad.getBoundingClientRect();
    const pad2 = r.width * 0.15;
    if (x >= r.left - pad2 && x <= r.right + pad2 && y >= r.top - pad2 && y <= r.bottom + pad2) {
      const dx = x - (r.left + r.width / 2), dy = y - (r.top + r.height / 2);
      if (Math.hypot(dx, dy) < r.width * 0.12) return 0;
      const sector = (Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) + 8) % 8;
      return [
        bit("right"),
        bit("right") | bit("down"),
        bit("down"),
        bit("down") | bit("left"),
        bit("left"),
        bit("left") | bit("up"),
        bit("up"),
        bit("up") | bit("right")
      ][sector];
    }
    for (const [n, el] of keys) {
      const k = el.getBoundingClientRect();
      if (x >= k.left - 4 && x <= k.right + 4 && y >= k.top - 4 && y <= k.bottom + 4) return bit(n);
    }
    return 0;
  };
  layer.addEventListener("pointerdown", (e) => {
    if (!e.target.closest(".pk, .dpad")) return;
    e.preventDefault();
    layer.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, hit(e.clientX, e.clientY));
    publish();
  });
  layer.addEventListener("pointermove", (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, hit(e.clientX, e.clientY));
    publish();
  });
  const release = (e) => {
    if (pointers.delete(e.pointerId)) publish();
  };
  layer.addEventListener("pointerup", release);
  layer.addEventListener("pointercancel", release);
  layer.addEventListener("lostpointercapture", release);
  layer.addEventListener("contextmenu", (e) => e.preventDefault());
  return {
    el: layer,
    setVisible(v) {
      layer.hidden = !v;
      if (!v) {
        pointers.clear();
        publish();
      }
    },
    get visible() {
      return !layer.hidden;
    }
  };
}

// node_modules/@internal/store/dist/substrate.js
async function toU8(x) {
  if (x == null)
    return new Uint8Array(0);
  if (x instanceof Uint8Array)
    return x;
  if (x instanceof ArrayBuffer)
    return new Uint8Array(x);
  if (typeof x === "string")
    return new TextEncoder().encode(x);
  if (typeof x.arrayBuffer === "function")
    return new Uint8Array(await x.arrayBuffer());
  throw new Error("Store: \u65E0\u6CD5\u8BC6\u522B\u7684 bytes \u7C7B\u578B");
}
function bytesEqual(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++)
    if (a[i] !== b[i])
      return false;
  return true;
}
function createSubstrate() {
  let _editVersion = 0;
  let _savedVersion = 0;
  const edits = {
    mark: () => {
      _editVersion++;
    },
    version: () => _editVersion,
    markSaved: (v) => {
      _savedVersion = v == null ? _editVersion : v;
    },
    localDirty: () => _editVersion !== _savedVersion
  };
  const _chain = /* @__PURE__ */ new Map();
  function serialize(name, fn) {
    const prev = _chain.get(name) || Promise.resolve();
    const next = prev.then(fn, fn);
    _chain.set(name, next.then(() => {
    }, () => {
    }));
    return next;
  }
  function serialize2(a, b, fn) {
    const prev = Promise.all([_chain.get(a) || Promise.resolve(), _chain.get(b) || Promise.resolve()]);
    const next = prev.then(fn, fn);
    const tail = next.then(() => {
    }, () => {
    });
    _chain.set(a, tail);
    _chain.set(b, tail);
    return next;
  }
  async function drain() {
    for (let round = 0; round < 100; round++) {
      const tails = [..._chain.values()];
      if (!tails.length)
        return;
      await Promise.all(tails);
      const after = new Set(_chain.values());
      if (tails.length === after.size && tails.every((t) => after.has(t)))
        return;
    }
  }
  function createCoalescer() {
    let pending = null;
    let inFlight = null;
    let startVer = 0;
    let doLocal = async () => {
    }, doPush = async () => {
    };
    function configure(fns = {}) {
      if (fns.doLocal)
        doLocal = fns.doLocal;
      if (fns.doPush)
        doPush = fns.doPush;
    }
    async function _run(type) {
      inFlight = type;
      startVer = _editVersion;
      try {
        if (type === "push")
          await doPush();
        else
          await doLocal();
      } finally {
        inFlight = null;
        if (pending) {
          const next = pending;
          pending = null;
          _run(next);
        }
      }
    }
    function request(type) {
      if (!inFlight) {
        _run(type);
        return;
      }
      const hasNewEdits = _editVersion !== startVer;
      const shouldQueue = inFlight === "local" && type === "push" ? true : hasNewEdits;
      if (!shouldQueue)
        return;
      if (type === "push" || pending !== "push")
        pending = type;
    }
    return { configure, request, state: () => ({ pending, inFlight, startVer }) };
  }
  const session2 = createCoalescer();
  return { edits, session: session2, serialize, serialize2, drain };
}

// node_modules/@internal/store/dist/local-head.js
var BypassError = class extends Error {
  code = "BYPASS";
  constructor(name) {
    super(`local-head: "${name}" dirty \u4F46\u7F3A parentBase\uFF08\u7F16\u8F91\u6CA1\u8D70 recordEdit \u6B63\u95E8\uFF0C\u62D2\u7EDD\u53EF\u80FD\u9759\u9ED8\u8986\u76D6\u7684\u63A8\u9001\uFF09`);
    this.name = "BypassError";
  }
};
function createLocalHead({ kv, getCloudEtag, setCloudEtag, keyPrefix = "head" }) {
  const _base = /* @__PURE__ */ new Map();
  const _parent = /* @__PURE__ */ new Map();
  const _dirtyMem = /* @__PURE__ */ new Map();
  const _edits = /* @__PURE__ */ new Map();
  const dirtyKey = (n) => `${keyPrefix}.dirty:${n}`;
  function isDirtyThisTab(name) {
    if (_dirtyMem.has(name))
      return _dirtyMem.get(name);
    return kv.get(dirtyKey(name)) === "1";
  }
  function isDirtyAnywhere(name) {
    return kv.get(dirtyKey(name)) === "1" || isDirtyThisTab(name);
  }
  function _setDirty(name, d) {
    _dirtyMem.set(name, d);
    if (d)
      kv.set(dirtyKey(name), "1");
    else
      kv.remove(dirtyKey(name));
  }
  function seenBase(name) {
    return _base.has(name) ? _base.get(name) : getCloudEtag(name);
  }
  function ifMatchFor(name) {
    if (isDirtyThisTab(name)) {
      if (_parent.has(name))
        return _parent.get(name);
      const b = _base.has(name) ? _base.get(name) : null;
      if (b != null)
        throw new BypassError(name);
      return null;
    }
    return _parent.has(name) ? _parent.get(name) : seenBase(name);
  }
  function recordEdit(name) {
    _edits.set(name, (_edits.get(name) ?? 0) + 1);
    if (!isDirtyThisTab(name)) {
      _parent.set(name, _base.has(name) ? _base.get(name) : null);
    }
    _setDirty(name, true);
  }
  function markSeen(name, etag) {
    _base.set(name, etag);
    if (isDirtyThisTab(name) && !_parent.has(name))
      _parent.set(name, etag);
  }
  function markSynced(name, etag) {
    _base.set(name, etag);
    _setDirty(name, false);
    _parent.delete(name);
    setCloudEtag?.(name, etag);
  }
  function onPushed(name, newEtag, dirtyAfter) {
    if (newEtag == null && !dirtyAfter) {
      throw new Error(`local-head: "${name}" onPushed(null etag, dirtyAfter=false) \u2014\u2014 \u843D\u5730\u672A\u786E\u8BA4\u4E0D\u5F97\u6E05 dirty`);
    }
    if (newEtag != null)
      _base.set(name, newEtag);
    if (dirtyAfter) {
      _setDirty(name, true);
      _parent.set(name, newEtag ?? null);
    } else {
      _setDirty(name, false);
      _parent.delete(name);
    }
  }
  function forget(name) {
    _base.delete(name);
    _parent.delete(name);
    _dirtyMem.delete(name);
    kv.remove(dirtyKey(name));
    setCloudEtag?.(name, null);
  }
  return { ifMatchFor, seenBase, isDirtyThisTab, isDirtyAnywhere, recordEdit, markSeen, markSynced, onPushed, forget, editCount: (name) => _edits.get(name) ?? 0 };
}

// node_modules/@internal/store/dist/error-handling.js
var reporter = null;
function setStoreErrorReporter(fn) {
  reporter = fn;
}
function reportStoreError(err2, level = "error") {
  if (err2?.name === "IdbSuspendedError" && level !== "log")
    level = "log";
  reporter?.(err2, level);
}

// node_modules/@internal/store/dist/seal.js
var LockedError = class extends Error {
  code = "LOCKED";
  constructor(name) {
    super(`\u300C${name}\u300D\u5DF2\u52A0\u5BC6\u4E14\u672A\u89E3\u9501\uFF08\u9700\u8981\u5BC6\u7801\uFF09`);
    this.name = "LockedError";
  }
};
function cryptExtFor(name) {
  const base = name.includes("/") ? name.slice(name.lastIndexOf("/") + 1) : name;
  const dot = base.lastIndexOf(".");
  if (dot > 0 && dot < base.length - 1)
    return base.slice(dot + 1);
  return void 0;
}
function createSeal(cfg) {
  const { looksContainer, pack, unpack, getPassword: getPassword2, getPrev, makePeek } = cfg;
  function isContainer(bytes) {
    return looksContainer(bytes);
  }
  async function withPassword2(name, attempt) {
    const pw = getPassword2(name);
    if (!pw)
      return null;
    try {
      return await attempt(pw);
    } catch (e) {
      if (e?.code === "WRONG_PASSWORD")
        return null;
      throw e;
    }
  }
  async function sealForWrite(name, plain) {
    if (await looksContainer(plain))
      return plain;
    const prev = await getPrev(name);
    if (!prev || !await looksContainer(prev))
      return plain;
    const pw = getPassword2(name);
    if (!pw)
      throw new LockedError(name);
    let peek = null;
    if (makePeek) {
      try {
        peek = await makePeek(new Blob([plain]));
      } catch (e) {
        reportStoreError(e, "log");
        peek = null;
      }
    }
    const container = await pack({ dataBytes: plain, fileName: name, ext: cryptExtFor(name), peek, password: pw });
    return await toU8(container);
  }
  async function unsealForRead(name, bytes) {
    if (!await looksContainer(bytes))
      return bytes;
    const res = await withPassword2(name, (pw) => unpack(bytes, pw));
    return res ? res.dataBlob : null;
  }
  return { isContainer, sealForWrite, unsealForRead, withPassword: withPassword2 };
}

// node_modules/@internal/store/dist/identifiers.js
var SEAL_SUFFIX = ".zip";
function validateDocKinds(docKinds) {
  if (!Array.isArray(docKinds))
    throw new Error("docKinds must be an array (pass [] to declare that this app has no document kinds)");
  const seen = /* @__PURE__ */ new Set();
  for (const k of docKinds) {
    if (!k || typeof k.kind !== "string" || !k.kind)
      throw new Error(`docKinds: every row needs a non-empty kind (got ${JSON.stringify(k)})`);
    if (typeof k.suffix !== "string" || k.suffix.length < 2 || !k.suffix.startsWith("."))
      throw new Error(`docKinds[${k.kind}]: suffix must start with "." and have at least one character after it (got ${JSON.stringify(k.suffix)})`);
    if (k.suffix.includes("/") || /\s$/.test(k.suffix))
      throw new Error(`docKinds[${k.kind}]: suffix must not contain "/" or end with whitespace (got ${JSON.stringify(k.suffix)})`);
    if (k.container !== "raw" && k.container !== "zip")
      throw new Error(`docKinds[${k.kind}]: container must be "raw" or "zip" (got ${JSON.stringify(k.container)})`);
    const low = k.suffix.toLowerCase();
    if (seen.has(low))
      throw new Error(`docKinds: suffix ${JSON.stringify(k.suffix)} declared twice`);
    seen.add(low);
  }
  const lows = [...seen];
  for (const s of lows) {
    if (!s.endsWith(SEAL_SUFFIX))
      continue;
    const t = s.slice(0, -SEAL_SUFFIX.length);
    for (const s1 of lows) {
      if (t.endsWith(s1) || s1.endsWith(t)) {
        throw new Error(`docKinds: suffix ${JSON.stringify(s)} is ambiguous with the encryption container suffix "${SEAL_SUFFIX}"` + (t ? ` because ${JSON.stringify(t)} and ${JSON.stringify(s1)} overlap` : ` (a bare ".zip" document suffix can never be told apart from a container)`) + `: a cloud file named "X${s}" could be either a plaintext "${s}" document or the encrypted container of "X${t}"`);
      }
    }
  }
}
function createIdentifiers(docKinds) {
  validateDocKinds(docKinds);
  const kinds = Object.freeze(docKinds.map((k) => Object.freeze({ kind: k.kind, suffix: k.suffix, container: k.container })));
  const bySuffixLength = [...kinds].sort((a, b) => b.suffix.length - a.suffix.length);
  function parse(identifier) {
    if (typeof identifier !== "string" || !identifier)
      return null;
    const slash = identifier.lastIndexOf("/");
    const folder = slash < 0 ? "" : identifier.slice(0, slash);
    const base = slash < 0 ? identifier : identifier.slice(slash + 1);
    const low = base.toLowerCase();
    for (const k of bySuffixLength) {
      const s = k.suffix.toLowerCase();
      if (low.length > s.length && low.endsWith(s)) {
        return { identifier, folder, stem: base.slice(0, base.length - s.length), suffix: base.slice(base.length - s.length), kind: k.kind, container: k.container };
      }
    }
    return null;
  }
  function join(parts) {
    const folder = parts.folder ?? "";
    return `${folder ? `${folder}/` : ""}${parts.stem}${parts.suffix}`;
  }
  function sealed(identifier) {
    return `${identifier}${SEAL_SUFFIX}`;
  }
  function fromCloud(cloudName) {
    if (cloudName.endsWith(SEAL_SUFFIX)) {
      const inner = cloudName.slice(0, -SEAL_SUFFIX.length);
      if (parse(inner))
        return { identifier: inner, sealed: true };
    }
    return { identifier: cloudName, sealed: false };
  }
  return { kinds, parse, join, sealed, fromCloud };
}
function withStemTail(identifier, tail, ids) {
  const d = ids.parse(identifier);
  if (d)
    return ids.join({ folder: d.folder, stem: `${d.stem}${tail}`, suffix: d.suffix });
  const slash = identifier.lastIndexOf("/");
  const base = slash < 0 ? identifier : identifier.slice(slash + 1);
  const dot = base.lastIndexOf(".");
  const stem = dot > 0 ? base.slice(0, dot) : base, rest = dot > 0 ? base.slice(dot) : "";
  return `${slash < 0 ? "" : identifier.slice(0, slash + 1)}${stem}${tail}${rest}`;
}

// node_modules/@internal/store/dist/safe-resolve.js
function createSafeResolve(cfg) {
  const { cloud, local, head, localDirty = () => false, validateAdopt: validateAdopt2, unseal = (_n, blob) => Promise.resolve(blob), onReplacing = () => {
  }, looksEncrypted = () => Promise.resolve(false), serialize = (_n, fn) => fn() } = cfg;
  const editCount = (name) => head.editCount?.(name) ?? 0;
  async function safePull(name, { adopt, forceBackup = false, inChain = false } = {}) {
    onReplacing(true);
    try {
      const e0 = editCount(name);
      let backupName;
      if (forceBackup || head.isDirtyAnywhere(name) || localDirty() || head.seenBase(name) == null) {
        try {
          backupName = await local.backup(name);
        } catch (e) {
          reportStoreError(e, "warning");
          return { ok: false, reason: "backup-failed", error: e };
        }
      }
      const r = await cloud.pull(name);
      if (!r)
        return { ok: false, reason: "cloud-vanished", backupName };
      const plain = await unseal(name, r.blob);
      const ok = plain != null ? await validateAdopt2(plain) : await looksEncrypted(r.blob);
      if (!ok)
        return { ok: false, reason: "invalid-cloud-bytes", backupName };
      const commit = async () => {
        const e1 = editCount(name);
        if (e1 !== e0) {
          if (!forceBackup)
            return { ok: false, reason: "edited-during-pull", backupName };
          try {
            backupName = await local.backup(name);
          } catch (e) {
            reportStoreError(e, "warning");
            return { ok: false, reason: "backup-failed", backupName, error: e };
          }
        }
        await local.save(name, r.blob);
        if (editCount(name) !== e1)
          return { ok: false, reason: "edited-during-pull", backupName };
        head.markSynced(name, r.item?.eTag ?? null);
        return { ok: true, backupName };
      };
      const done = inChain ? await commit() : await serialize(name, commit);
      if (!done.ok)
        return done;
      if (adopt && plain != null)
        await adopt(plain, name);
      return done;
    } finally {
      onReplacing(false);
    }
  }
  async function tryHeal(name, bytes) {
    let pulled;
    try {
      pulled = await cloud.pull(name);
    } catch (e) {
      reportStoreError(e, "log");
      return false;
    }
    if (!pulled)
      return false;
    if (bytesEqual(await toU8(pulled.blob), bytes)) {
      head.markSynced(name, pulled.item?.eTag ?? null);
      return true;
    }
    return false;
  }
  async function weakOverride(name, bytes) {
    const r = await cloud.weakOverride(name, bytes, { encrypted: await looksEncrypted(bytes) });
    if (!(r.item && r.item.eTag))
      return { backedUp: r.backedUp, deferred: true };
    head.markSynced(name, r.item.eTag);
    return { backedUp: r.backedUp, deferred: false };
  }
  async function resolveConflict(name, choice, ctx = {}) {
    if (choice === "takeCloud") {
      const r = await safePull(name, { adopt: ctx.adopt, forceBackup: true, inChain: ctx.inChain });
      return r.ok ? { status: "resolved", resolution: "takeCloud", backupName: r.backupName } : { status: "unresolved", reason: r.reason, backupName: r.backupName };
    }
    if (choice === "keepMine" && ctx.bytes != null) {
      const r = await weakOverride(name, ctx.bytes);
      if (r.deferred)
        return { status: "unresolved", reason: "deferred", backedUp: r.backedUp };
      return { status: "resolved", resolution: "keepMine", backedUp: r.backedUp };
    }
    return { status: "cancelled" };
  }
  return { safePull, tryHeal, weakOverride, resolveConflict };
}

// node_modules/@internal/store/dist/push.js
var passBusy = (_l, fn) => fn();
var isConflict = (e) => !!e && (e.name === "CloudConflictError" || e.status === 412);
function retriable(e) {
  const x = e;
  const s = x?.status;
  if (x?.message === "Not signed in")
    return false;
  return (s == null || s === 429 || s >= 500 && s <= 599) && x?.name !== "CloudConflictError" && x?.name !== "CloudNameCollisionError";
}
function createPush(cfg) {
  const { cloud, head, seal, safeResolve, serialize, editVersion, busy = passBusy, maxAttempts = 4, backoffMs = 200, sleep = (ms) => new Promise((r) => setTimeout(r, ms)) } = cfg;
  async function doPush(name, { encode: encode2, getEditVersion = editVersion, onConflict, adopt, surfaceCollision = false }) {
    const ifMatch = head.ifMatchFor(name);
    const v0 = getEditVersion();
    const e0 = head.editCount?.(name) ?? 0;
    const editedSince = () => getEditVersion() !== v0 || (head.editCount?.(name) ?? 0) !== e0;
    const bytes = await seal.sealForWrite(name, await toU8(await encode2()));
    const isEnc = await seal.isContainer(bytes);
    return busy("sync.pushing", async () => {
      let attempt = 0, lastErr;
      while (attempt < maxAttempts) {
        attempt++;
        try {
          const { item } = await cloud.push(name, bytes, { baseEtag: ifMatch, encrypted: isEnc });
          if (!(item && item.eTag))
            return { status: "deferred", dirtyAfter: true };
          const dirtyAfter = editedSince();
          head.onPushed(name, item.eTag, dirtyAfter);
          return { status: "pushed", dirtyAfter };
        } catch (e) {
          if (isConflict(e)) {
            if (await safeResolve.tryHeal(name, bytes)) {
              const dirtyAfter = editedSince();
              if (dirtyAfter)
                head.recordEdit(name);
              return { status: "healed", dirtyAfter };
            }
            const choice = onConflict ? await onConflict({ name }) : "cancel";
            return await safeResolve.resolveConflict(name, choice, { bytes, adopt, inChain: true });
          }
          if (surfaceCollision && e?.name === "CloudNameCollisionError") {
            const choice = onConflict ? await onConflict({ name }) : "cancel";
            return await safeResolve.resolveConflict(name, choice, { bytes, adopt, inChain: true });
          }
          if (retriable(e) && attempt < maxAttempts) {
            lastErr = e;
            await sleep(backoffMs * attempt);
            continue;
          }
          throw e;
        }
      }
      throw lastErr;
    });
  }
  function push(name, opts) {
    return serialize(name, () => doPush(name, opts));
  }
  return { push, doPush };
}

// node_modules/@internal/store/dist/freshness.js
var passBusy2 = (_l, fn) => fn();
function createFreshness(cfg) {
  const { cloud, head, safeResolve, busy: _busy = passBusy2 } = cfg;
  const pullFailText = (reason) => reason === "invalid-cloud-bytes" ? "\u4E91\u7AEF\u5185\u5BB9\u6CA1\u901A\u8FC7\u6821\u9A8C\uFF0C\u53EF\u80FD\u662F\u516C\u5171 Wi-Fi \u767B\u5F55\u9875\u52AB\u6301\u6216\u6587\u4EF6\u635F\u574F" : reason === "cloud-vanished" ? "\u4E91\u7AEF\u6587\u4EF6\u521A\u521A\u88AB\u79FB\u52A8\u6216\u5220\u9664" : reason === "backup-failed" ? "\u672C\u5730\u7559\u5E95\u5931\u8D25\uFF0C\u4E3A\u4FDD\u6570\u636E\u6CA1\u6709\u8986\u76D6" : reason;
  async function open(name, opts = {}) {
    const { isOnline = () => true, probe, onNewer, adopt, localDirty, busy = passBusy2 } = opts;
    if (!isOnline())
      return { source: "local", reason: "offline" };
    return busy("cloud.checking", async () => {
      let meta;
      if (probe) {
        const raced = await Promise.race([
          cloud.fetchMeta(name).then((m) => ({ k: "meta", m }), (e) => ({ k: "err", e })),
          Promise.resolve(probe).then(() => ({ k: "skip" }))
        ]);
        if (raced.k === "skip")
          return { source: "local", reason: "skipped" };
        if (raced.k === "err")
          return { source: "local", reason: "cloud-error" };
        meta = raced.m;
      } else {
        try {
          meta = await cloud.fetchMeta(name);
        } catch (e) {
          reportStoreError(e, "log");
          return { source: "local", reason: "cloud-error" };
        }
      }
      if (!meta)
        return { source: "local", reason: "cloud-absent" };
      const base = head.seenBase(name);
      if (base != null && meta.etag === base) {
        head.markSeen(name, meta.etag);
        return { source: "local", reason: "in-sync" };
      }
      const dirty = head.isDirtyAnywhere(name) || (localDirty ? localDirty() : false);
      if (!dirty) {
        const r = await safeResolve.safePull(name, { adopt });
        if (!r.ok && r.reason !== "edited-during-pull")
          reportStoreError(new Error(`\u300C${name}\u300D\u4E91\u7AEF\u6709\u65B0\u7248\u672C\u4F46\u6682\u65F6\u53D6\u4E0D\u5230\uFF08${pullFailText(r.reason)}\uFF09\uFF0C\u5DF2\u6253\u5F00\u672C\u5730\u7248\u672C`), "info");
        return r.ok ? { source: "fast-forwarded", backupName: r.backupName } : { source: "local", reason: r.reason, error: r.error };
      }
      const choice = onNewer ? await onNewer({ name, cloudEtag: meta.etag, baseEtag: base, cloudTime: meta.lastModified }) : "cancel";
      if (choice === "takeCloud") {
        const r = await safeResolve.safePull(name, { adopt, forceBackup: true });
        if (!r.ok)
          reportStoreError(new Error(`\u300C${name}\u300D\u672A\u80FD\u53D6\u56DE\u4E91\u7AEF\u7248\u672C\uFF08${pullFailText(r.reason)}\uFF09\uFF0C\u672C\u6B21\u6253\u5F00\u7684\u4ECD\u662F\u672C\u5730\u7248\u672C`), "warning");
        return r.ok ? { source: "pulled", backupName: r.backupName } : { source: "local", reason: r.reason, backupName: r.backupName, error: r.error };
      }
      return { source: "local", reason: "kept" };
    });
  }
  async function refresh(name, opts = {}) {
    const { isOnline = () => true, adopt, localDirty, onReplaceStart, probe, busy = passBusy2 } = opts;
    if (!isOnline())
      return { status: "offline" };
    if (head.isDirtyAnywhere(name) || localDirty && localDirty())
      return { status: "dirty-skip" };
    return busy("cloud.checking", async () => {
      let meta;
      try {
        meta = await cloud.fetchMeta(name);
      } catch (e) {
        reportStoreError(e, "log");
        return { status: "cloud-error" };
      }
      if (!meta)
        return { status: "cloud-absent" };
      const base = head.seenBase(name);
      if (base != null && meta.etag === base) {
        head.markSeen(name, meta.etag);
        return { status: "in-sync" };
      }
      if (head.isDirtyAnywhere(name) || localDirty && localDirty())
        return { status: "dirty-skip" };
      if (onReplaceStart)
        onReplaceStart();
      const pulling = safeResolve.safePull(name, { adopt });
      if (probe) {
        const winner = await Promise.race([pulling.then((r2) => ({ r: r2 })), Promise.resolve(probe).then(() => null)]);
        if (winner == null) {
          pulling.catch((e) => reportStoreError(e, "log"));
          return { status: "escaped" };
        }
        return winner.r.ok ? { status: "fast-forwarded" } : winner.r.reason === "edited-during-pull" ? { status: "dirty-skip" } : { status: "ff-failed", reason: winner.r.reason };
      }
      const r = await pulling;
      if (!r.ok && r.reason === "edited-during-pull")
        return { status: "dirty-skip" };
      return r.ok ? { status: "fast-forwarded" } : { status: "ff-failed", reason: r.reason };
    });
  }
  return { open, refresh };
}

// node_modules/@internal/store/dist/move-aside.js
function pad(n, w = 2) {
  return String(n).padStart(w, "0");
}
function yyyymmddhhmmss(ms) {
  const d = new Date(ms);
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}
function guid() {
  const c = globalThis.crypto;
  if (c && c.randomUUID)
    return c.randomUUID();
  const a = new Uint8Array(16);
  if (c && c.getRandomValues)
    c.getRandomValues(a);
  else
    for (let i = 0; i < 16; i++)
      a[i] = Math.floor(Math.random() * 256);
  a[6] = a[6] & 15 | 64;
  a[8] = a[8] & 63 | 128;
  const h2 = Array.from(a, (b) => b.toString(16).padStart(2, "0"));
  return `${h2.slice(0, 4).join("")}-${h2.slice(4, 6).join("")}-${h2.slice(6, 8).join("")}-${h2.slice(8, 10).join("")}-${h2.slice(10, 16).join("")}`;
}
function asideStamp(ms) {
  return `${yyyymmddhhmmss(ms)}-${guid()}`;
}
function snapshotStampOf(s) {
  const m = s ? /^(\d{14})-/.exec(s) : null;
  return m ? m[1] : null;
}
function restoreStampDisplay(stamp14, fallbackMs) {
  const s = stamp14 && /^\d{14}$/.test(stamp14) ? stamp14 : yyyymmddhhmmss(fallbackMs);
  return `${s.slice(0, 8)}-${s.slice(8)}`;
}
async function restoreTargetName(orig, occupied, stamp14, fallbackMs, ids) {
  if (!await occupied(orig))
    return orig;
  const disp = restoreStampDisplay(stamp14, fallbackMs);
  const mk = (suf) => withStemTail(orig, ` [${suf}]`, ids);
  let target = mk(disp);
  for (let i = 2; await occupied(target); i++)
    target = mk(`${disp}-${i}`);
  return target;
}

// node_modules/@internal/store/dist/delete.js
var passBusy3 = (_l, fn) => fn();
var DELQ_KEY = "internal.pending_deletions";
function createDelete(cfg) {
  const { cloud, local, head, kv, busy: _busy = passBusy3 } = cfg;
  function readQueue() {
    try {
      const raw = kv.get(DELQ_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      reportStoreError(e, "log");
      return [];
    }
  }
  function writeQueue(q) {
    if (q.length)
      kv.set(DELQ_KEY, JSON.stringify(q));
    else
      kv.remove(DELQ_KEY);
  }
  function enqueue(name, baseEtag, deleteEventId) {
    const q = readQueue().filter((e) => e.name !== name);
    q.push({ name, baseEtag, deleteEventId });
    writeQueue(q);
  }
  async function del(name, opts = {}) {
    const { isOnline = () => true, confirm, onDirtyWarn, busy = _busy } = opts;
    if (confirm && !await confirm({ title: "\u5220\u9664", body: name, danger: true }))
      return { status: "cancelled" };
    if (head.isDirtyAnywhere(name) && onDirtyWarn && !await onDirtyWarn({ name }))
      return { status: "cancelled" };
    const localPresent = local ? await local.exists(name) : false;
    const deleteEventId = asideStamp(Date.now());
    if (!isOnline()) {
      const baseEtag = cloud.getETag(name);
      let trashKey = null;
      if (localPresent)
        trashKey = await local.trash(name, deleteEventId);
      const queuedCloudDelete = baseEtag != null;
      if (queuedCloudDelete)
        enqueue(name, baseEtag, deleteEventId);
      head.forget(name);
      return { status: "trashed", where: "local", queuedCloudDelete, baseEtag, trashKey };
    }
    return busy("file.deleting", async () => {
      let cloudPresent = false;
      try {
        cloudPresent = !!await cloud.fetchMeta(name);
      } catch (e) {
        reportStoreError(e, "log");
        cloudPresent = false;
      }
      if (cloudPresent) {
        const wasDirty = head.isDirtyAnywhere(name);
        const trashed = await cloud.trash(name, deleteEventId);
        if (localPresent) {
          if (wasDirty) {
            head.forget(name);
            const trashKey = await local.trash(name, deleteEventId);
            return { status: "trashed", where: "both", trashed, trashKey };
          }
          await local.hardDelete(name);
        }
        head.forget(name);
        return { status: "trashed", where: "cloud", trashed };
      }
      if (localPresent) {
        const trashKey = await local.trash(name, deleteEventId);
        head.forget(name);
        return { status: "trashed", where: "local", trashKey };
      }
      return { status: "noop" };
    });
  }
  async function replayDelete(name, opts = {}) {
    const { baseEtag } = opts;
    const deleteEventId = opts.deleteEventId ?? asideStamp(Date.now());
    let meta;
    try {
      meta = await cloud.fetchMeta(name);
    } catch (e) {
      reportStoreError(e, "log");
      return { status: "deferred-offline" };
    }
    if (!meta)
      return { status: "converged", reason: "already-gone" };
    if (!baseEtag)
      return { status: "skipped-no-base" };
    if (meta.etag !== baseEtag)
      return { status: "conflict-edit-wins" };
    try {
      return { status: "trashed", trashed: await cloud.trash(name, deleteEventId, { baseEtag }) };
    } catch (e) {
      if (e?.status === 412)
        return { status: "conflict-edit-wins" };
      throw e;
    }
  }
  async function drainDeleteQueue() {
    const q = readQueue();
    if (!q.length)
      return { status: "drained", drained: 0, deferred: 0 };
    const remain = [];
    let drained = 0;
    for (const e of q) {
      let r;
      try {
        r = await replayDelete(e.name, { baseEtag: e.baseEtag, deleteEventId: e.deleteEventId });
      } catch (err2) {
        reportStoreError(err2, "log");
        remain.push(e);
        continue;
      }
      if (r.status === "deferred-offline")
        remain.push(e);
      else
        drained++;
    }
    writeQueue(remain);
    return { status: "drained", drained, deferred: remain.length };
  }
  return { del, replayDelete, drainDeleteQueue };
}

// node_modules/@internal/store/dist/is-hidden.js
function isHidden(name) {
  if (!name)
    return false;
  const seg = name.includes("/") ? name.slice(name.lastIndexOf("/") + 1) : name;
  return seg.startsWith(".");
}
function assertValidFileName(name, appId) {
  if (!name || !name.trim())
    throw new Error("\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A");
  const top = name.indexOf("/") >= 0 ? name.slice(0, name.indexOf("/")) : name;
  if (top === ".trash" || top === ".backup" || top === `.${appId}`) {
    throw new Error(`\u4FDD\u7559\u6839\uFF0C\u7981\u6B62\u7528\u4F5C\u6587\u4EF6/\u6587\u4EF6\u5939\u8DEF\u5F84\uFF1A${top}/\uFF08.trash/.backup/.${appId} \u5F52 store \u5B89\u5168\u7F51\u4E0E collections\uFF09`);
  }
}
function assertValidCollectionName(name) {
  if (!name || /[\\/:*?"<>|]/.test(name) || name === "." || name === "..") {
    throw new Error(`collection \u540D\u975E\u6CD5\uFF08\u987B\u5408\u6CD5\u6587\u4EF6\u540D\u3001\u65E0\u659C\u6760/\u65E0 Windows \u975E\u6CD5\u5B57\u7B26\u3001\u975E bare .|..\uFF1B\u70B9\u5206\u5C42\u7EA7\u653E\u884C\uFF09\uFF1A${JSON.stringify(name)}`);
  }
}

// node_modules/@internal/store/dist/errors.js
var CloudNetworkError = class extends Error {
  cause;
  constructor(message, cause) {
    super(message);
    this.name = "CloudNetworkError";
    this.cause = cause;
  }
};
var CloudStaleRefError = class extends Error {
  /** 失效的那张 ref。 */
  ref;
  cause;
  constructor(ref, message, cause) {
    super(message ?? `cloud ref no longer valid (moved/removed elsewhere): ${ref}`);
    this.name = "CloudStaleRefError";
    this.ref = ref;
    this.cause = cause;
  }
};

// node_modules/@internal/store/dist/cloud-sync.js
var CloudConflictError = class extends Error {
  sessionName;
  constructor(message, sessionName) {
    super(message);
    this.name = "CloudConflictError";
    this.sessionName = sessionName;
  }
};
var CloudNameCollisionError = class extends Error {
  sessionName;
  where;
  constructor(sessionName, where = "cloud") {
    super(where === "local" ? `\u672C\u5730\u5DF2\u6709\u540C\u540D\u300C${sessionName}\u300D\uFF08\u4E0D\u540C\u6587\u4EF6\uFF09` : `\u4E91\u7AEF\u5DF2\u6709\u540C\u540D\u300C${sessionName}\u300D\uFF08\u4E0D\u540C\u6587\u4EF6\uFF09`);
    this.name = "CloudNameCollisionError";
    this.sessionName = sessionName;
    this.where = where;
  }
};
var NO_KINDS = createIdentifiersNoKinds();
function createIdentifiersNoKinds() {
  return { kinds: [], parse: () => null, join: (p) => `${p.folder ? `${p.folder}/` : ""}${p.stem}${p.suffix}` };
}
var defaultCloudToName = (cloudName) => cloudName.endsWith(".zip") ? cloudName.slice(0, -4) : cloudName;
function createCloudSync(cfg) {
  const { provider, kv, fileName, encFileName = null, contentType = "application/octet-stream", trashFolder = ".trash", backupFolder = ".backup", appKey = "sync", manageDirty = true } = cfg;
  const now = cfg.now || (() => Date.now());
  const isHiddenAny = (n) => isHidden(n) || !!cfg.hidden?.(n);
  async function _find(name) {
    const p = fileName(name);
    let item = await provider.getItemByPath(p);
    if (item)
      return { item, path: p, enc: false };
    if (encFileName) {
      const pe = encFileName(name);
      item = await provider.getItemByPath(pe);
      if (item)
        return { item, path: pe, enc: true };
    }
    return { item: null, path: p, enc: false };
  }
  const match = cfg.match || ((it) => !it.isFolder);
  const toName = cfg.toName || defaultCloudToName;
  const ids = cfg.identifiers ?? NO_KINDS;
  const etagKey = (n) => `${appKey}.etag:${n}`;
  const dirtyKey = (n) => `${appKey}.dirty:${n}`;
  const baseName = (n) => n.includes("/") ? n.slice(n.lastIndexOf("/") + 1) : n;
  const stampedName = (n, enc = false, stamp2 = asideStamp(now())) => (enc && encFileName ? encFileName : fileName)(`${baseName(n)} [${stamp2}]`);
  function getETag(name) {
    return kv.get(etagKey(name)) || null;
  }
  function setETag(name, eTag) {
    if (eTag)
      kv.set(etagKey(name), eTag);
    else
      kv.remove(etagKey(name));
  }
  const _dirtyMem = /* @__PURE__ */ new Map();
  function isDirty2(name) {
    if (!manageDirty)
      return false;
    if (_dirtyMem.has(name))
      return _dirtyMem.get(name);
    const v = kv.get(dirtyKey(name));
    return v === null ? true : v === "1";
  }
  function setDirty(name, dirty) {
    if (!manageDirty)
      return;
    _dirtyMem.set(name, dirty);
    kv.set(dirtyKey(name), dirty ? "1" : "0");
  }
  function clearState(name) {
    _dirtyMem.delete(name);
    kv.remove(etagKey(name));
    if (manageDirty)
      kv.remove(dirtyKey(name));
  }
  const _ADOPT_TAIL_N = 8192;
  function _bytesEq(a, b) {
    if (a.length !== b.length)
      return false;
    for (let i = 0; i < a.length; i++)
      if (a[i] !== b[i])
        return false;
    return true;
  }
  async function _localTail(b, size, n) {
    const start = Math.max(0, size - n);
    if (b instanceof Blob)
      return new Uint8Array(await b.slice(start, size).arrayBuffer());
    return b.slice(start, size);
  }
  async function _confirmOurUpload(fresh, localBytes, size) {
    if (size <= 0)
      return "differ";
    try {
      const n = Math.min(_ADOPT_TAIL_N, size);
      const offset = Math.max(0, (fresh.size || size) - n);
      const raw = await provider.downloadRange(fresh.ref, offset, n);
      const cloudTail = raw instanceof Uint8Array ? raw : raw instanceof Blob ? new Uint8Array(await raw.arrayBuffer()) : new Uint8Array(raw);
      return _bytesEq(await _localTail(localBytes, size, n), cloudTail) ? "match" : "differ";
    } catch (e) {
      reportStoreError(e, "log");
      return "unknown";
    }
  }
  async function push(name, bytes, opts = {}) {
    const enc = !!(encFileName && opts.encrypted);
    const path = enc ? encFileName(name) : fileName(name);
    let baseEtag = "baseEtag" in opts ? opts.baseEtag : getETag(name);
    if (encFileName && baseEtag) {
      const otherPath = enc ? fileName(name) : encFileName(name);
      const target = await provider.getItemByPath(path).catch((e) => {
        reportStoreError(e, "log");
        return null;
      });
      if (!target) {
        const other = await provider.getItemByPath(otherPath).catch((e) => {
          reportStoreError(e, "log");
          return null;
        });
        if (other) {
          if (other.eTag !== baseEtag)
            throw new CloudConflictError(`\u4E91\u7AEF\u5DF2\u6709\u66F4\u65B0\u7248\u672C "${name}"`, name);
          const newBase = baseName(path);
          const renamed = await provider.rename(other.ref, newBase, baseEtag);
          baseEtag = renamed.eTag;
        }
      }
    }
    const wrote = bytes && (bytes.byteLength ?? bytes.size ?? bytes.length) || 0;
    let item = null;
    try {
      item = await provider.upload(path, bytes, { contentType, eTag: baseEtag, conflictBehavior: baseEtag ? "replace" : "fail" });
    } catch (e) {
      const status = e?.status;
      if (status === 412)
        throw new CloudConflictError(`\u4E91\u7AEF\u5DF2\u6709\u66F4\u65B0\u7248\u672C "${name}"`, name);
      if (!(status === 409 && !baseEtag))
        throw e;
    }
    if (!item || !item.eTag) {
      const fresh = await provider.getItemByPath(path).catch((e) => {
        reportStoreError(e, "log");
        return null;
      });
      const verdict = fresh && fresh.eTag && fresh.size === wrote ? await _confirmOurUpload(fresh, bytes, wrote) : null;
      if (verdict === "match")
        item = fresh;
      else if (!baseEtag && fresh && fresh.size > 0 && verdict !== "unknown") {
        throw new CloudNameCollisionError(name);
      } else {
        item = null;
      }
    }
    if (item && item.eTag) {
      setETag(name, item.eTag);
      setDirty(name, false);
    }
    return { item };
  }
  async function pull(name) {
    const { item } = await _find(name);
    if (!item)
      return null;
    const blob = await provider.download(item.ref);
    return { blob, item, suggestedName: name };
  }
  async function fetchMeta(name) {
    const { item } = await _find(name);
    if (!item)
      return null;
    return { etag: item.eTag, lastModified: item.lastModifiedDateTime, size: item.size, item };
  }
  async function pullTail(name, n) {
    const { item, enc } = await _find(name);
    if (!item)
      return null;
    const offset = Math.max(0, (item.size || 0) - n);
    const raw = await provider.downloadRange(item.ref, offset, Math.min(n, item.size || n));
    const bytes = raw instanceof Uint8Array ? raw : raw instanceof ArrayBuffer ? new Uint8Array(raw) : new Uint8Array(await raw.arrayBuffer());
    return { bytes, item, encrypted: enc };
  }
  async function pullRange(name, offset, length) {
    const { item, enc } = await _find(name);
    if (!item)
      return null;
    const size = item.size || 0;
    const off = Math.max(0, Math.min(offset, size));
    const len = Math.max(0, Math.min(length, size - off));
    if (len === 0)
      return { bytes: new Uint8Array(0), item, encrypted: enc };
    const raw = await provider.downloadRange(item.ref, off, len);
    const bytes = raw instanceof Uint8Array ? raw : raw instanceof ArrayBuffer ? new Uint8Array(raw) : new Uint8Array(await raw.arrayBuffer());
    return { bytes, item, encrypted: enc };
  }
  async function trash(name, deleteEventId, opts = {}) {
    const { item, enc } = await _find(name);
    if (!item) {
      clearState(name);
      return null;
    }
    const folderId = await provider.ensureFolder(trashFolder);
    const stamped = stampedName(name, enc, deleteEventId);
    const moved = await provider.move(item.ref, folderId, { newName: stamped, conflictBehavior: "fail", eTag: opts.baseEtag ?? item.eTag });
    clearState(name);
    return moved;
  }
  async function restore(cloudRef, targetName, opts = {}) {
    const clean = targetName;
    const folder = clean.includes("/") ? clean.slice(0, clean.lastIndexOf("/")) : "";
    const base = baseName(clean);
    const mkName = opts.encrypted && encFileName ? encFileName : fileName;
    const folderId = await provider.ensureFolder(folder);
    const disp = restoreStampDisplay(opts.snapshotStamp, now());
    const stamped = (suf) => withStemTail(base, ` [${suf}]`, ids);
    for (let attempt = 1; attempt < 100; attempt++) {
      const candidate = attempt === 1 ? base : attempt === 2 ? stamped(disp) : stamped(`${disp}-${attempt - 1}`);
      try {
        return await provider.move(cloudRef, folderId, { newName: mkName(candidate), conflictBehavior: "fail", eTag: opts.eTag ?? null });
      } catch (e) {
        const status = e?.status;
        if (status === 409)
          continue;
        if (status === 404)
          throw new CloudStaleRefError(cloudRef, `\u56DE\u6536\u7AD9\u9879\u5DF2\u88AB\u522B\u5904\u52A8\u8FC7\uFF08\u6062\u590D/\u6E05\u7A7A\uFF09\uFF0C\u8BF7\u5237\u65B0\uFF1A${targetName}`, e);
        throw e;
      }
    }
    return await provider.move(cloudRef, folderId, { newName: mkName(stamped(asideStamp(now()))), conflictBehavior: "fail", eTag: opts.eTag ?? null });
  }
  async function purge(cloudRef, eTag) {
    try {
      await provider.delete(cloudRef, eTag ?? void 0);
    } catch (e) {
      if (e?.status === 404)
        throw new CloudStaleRefError(cloudRef, "\u56DE\u6536\u7AD9\u9879\u5DF2\u88AB\u522B\u5904\u52A8\u8FC7\uFF08\u5DF2\u5220\u6216\u5DF2\u6062\u590D\uFF09\uFF0C\u8BF7\u5237\u65B0", e);
      throw e;
    }
  }
  async function weakOverride(name, bytes, opts = {}) {
    const path = encFileName && opts.encrypted ? encFileName(name) : fileName(name);
    const cur = await _find(name);
    let backedUp = null;
    let item;
    if (cur.item) {
      const folderId = await provider.ensureFolder(backupFolder);
      const stamped = stampedName(name, cur.enc);
      await provider.copy(cur.item.ref, folderId, stamped);
      backedUp = `${backupFolder}/${stamped}`;
      item = await provider.upload(path, bytes, { contentType, eTag: cur.item.eTag, conflictBehavior: "replace" });
    } else {
      item = await provider.upload(path, bytes, { contentType, conflictBehavior: "fail" });
    }
    if (!item || !item.eTag) {
      const f = await provider.getItemByPath(path).catch((e) => {
        reportStoreError(e, "log");
        return null;
      });
      if (f && f.eTag)
        item = f;
    }
    if (item && item.eTag) {
      setETag(name, item.eTag);
      setDirty(name, false);
    }
    return { item, backedUp };
  }
  async function _walk(subpath, out, depth, folders, status) {
    if (depth > 8)
      return;
    let items;
    try {
      items = await provider.list(subpath);
    } catch (e) {
      reportStoreError(e, "log");
      status.partial = true;
      return;
    }
    for (const it of items) {
      if (isHiddenAny(it.name))
        continue;
      const itPath = subpath ? `${subpath}/${it.name}` : it.name;
      if (it.isFolder) {
        if (folders)
          folders.push(itPath);
        await _walk(itPath, out, depth + 1, folders, status);
      } else if (match(it))
        out.push({ ...it, path: itPath, name: toName(itPath) });
    }
  }
  async function list() {
    const out = [];
    await _walk("", out, 0, null, { partial: false });
    return out;
  }
  async function listAll() {
    const out = [], folders = [], status = { partial: false };
    await _walk("", out, 0, folders, status);
    return { files: out, folders, complete: !status.partial };
  }
  async function listFolders() {
    const out = [], folders = [];
    await _walk("", out, 0, folders, { partial: false });
    return folders;
  }
  async function listFolder(path) {
    let items;
    try {
      items = await provider.list(path);
    } catch (e) {
      reportStoreError(e, "log");
      return { files: [], folders: [], complete: false };
    }
    const files = [], folders = [];
    for (const it of items) {
      if (isHiddenAny(it.name))
        continue;
      const itPath = path ? `${path}/${it.name}` : it.name;
      if (it.isFolder)
        folders.push(itPath);
      else if (match(it))
        files.push({ ...it, path: itPath, name: toName(itPath) });
    }
    return { files, folders, complete: true };
  }
  async function listTrash() {
    let items;
    try {
      items = await provider.list(trashFolder);
    } catch (e) {
      reportStoreError(e, "log");
      return [];
    }
    return items.filter(match);
  }
  async function listBackup() {
    let items;
    try {
      items = await provider.list(backupFolder);
    } catch (e) {
      reportStoreError(e, "log");
      return [];
    }
    return items.filter(match);
  }
  async function rename(oldName, newName, opts = {}) {
    if (oldName === newName)
      return;
    const found = await _find(oldName);
    const item = found.item;
    if (!item)
      throw new Error(`\u4E91\u7AEF\u627E\u4E0D\u5230\uFF1A${oldName}`);
    const oldFolder = oldName.includes("/") ? oldName.slice(0, oldName.lastIndexOf("/")) : "";
    const newFolder = newName.includes("/") ? newName.slice(0, newName.lastIndexOf("/")) : "";
    const mkName = found.enc && encFileName ? encFileName : fileName;
    const newBase = mkName(newName.includes("/") ? newName.slice(newName.lastIndexOf("/") + 1) : newName);
    let moved;
    if (oldFolder === newFolder) {
      moved = await provider.rename(item.ref, newBase, opts.baseEtag ?? item.eTag);
    } else {
      const targetId = newFolder ? await provider.ensureFolder(newFolder) : await provider.getApprootRef();
      moved = await provider.move(item.ref, targetId, { newName: newBase, conflictBehavior: "fail", eTag: opts.baseEtag ?? item.eTag });
    }
    const newETag = moved && moved.eTag || getETag(oldName);
    setETag(newName, newETag);
    setDirty(newName, false);
    clearState(oldName);
  }
  async function ensureFolder(path) {
    await provider.ensureFolder(path);
  }
  function deleteEmptyFolder(path) {
    return provider.deleteEmptyFolder(path);
  }
  return {
    push,
    pull,
    fetchMeta,
    pullTail,
    pullRange,
    weakOverride,
    trash,
    restore,
    purge,
    list,
    listAll,
    listFolder,
    listFolders,
    listTrash,
    listBackup,
    rename,
    ensureFolder,
    deleteEmptyFolder,
    getETag,
    setETag,
    isDirty: isDirty2,
    setDirty,
    clearState
  };
}

// node_modules/@internal/store/dist/identity.js
var passBusy4 = (_l, fn) => fn();
function createIdentity(cfg) {
  const { cloud, local, head, doPush, serialize, serialize2, seal, busy: _busy = passBusy4, isOnline, deleteOffline, queueUpload, nameOccupied } = cfg;
  const unseal = (name, blob) => seal ? seal.unsealForRead(name, blob) : Promise.resolve(blob);
  async function assertNameFree(newName, doCloud) {
    if (doCloud && nameOccupied) {
      if (await nameOccupied(newName))
        throw new CloudNameCollisionError(newName);
      return;
    }
    if (local && await local.exists(newName))
      throw new CloudNameCollisionError(newName);
  }
  async function probeOld(name) {
    try {
      return { known: true, meta: await cloud.fetchMeta(name) };
    } catch (e) {
      reportStoreError(e, "log");
      return { known: false };
    }
  }
  async function rename(oldName, newName, opts = {}) {
    const { encode: encode2, getEditVersion, cloud: doCloud = true, busy = _busy, skipOccupiedCheck } = opts;
    if (!oldName || !newName || oldName === newName)
      return { status: "noop" };
    return serialize2(oldName, newName, () => busy("file.renaming", async () => {
      if (!skipOccupiedCheck)
        await assertNameFree(newName, doCloud);
      const hasLocal = local ? await local.exists(oldName) : false;
      let bytes = null;
      if (encode2)
        bytes = await toU8(await encode2());
      else if (hasLocal)
        bytes = await toU8(await local.get(oldName));
      if (doCloud && isOnline && !isOnline() && deleteOffline && hasLocal) {
        await local.save(newName, bytes);
        head.recordEdit(newName);
        queueUpload?.(newName);
        await deleteOffline(oldName);
        return { status: "renamed", where: "offline-move", newName };
      }
      if (local && hasLocal) {
        await local.save(newName, bytes);
        await local.hardDelete(oldName);
      }
      if (!doCloud) {
        head.forget(oldName);
        return { status: "renamed", where: "local", newName };
      }
      try {
        const before = await probeOld(oldName);
        if (before.known && before.meta && (!head.isDirtyAnywhere(oldName) || bytes == null)) {
          await cloud.rename(oldName, newName, { baseEtag: before.meta.etag });
          head.markSeen(newName, cloud.getETag(newName));
          head.forget(oldName);
          return { status: "renamed", where: "cloud-move", newName };
        }
        if (bytes == null) {
          head.forget(oldName);
          return { status: "renamed", where: "local", newName };
        }
        const baseAtStart = head.seenBase(oldName);
        await doPush(newName, { encode: () => bytes, getEditVersion });
        const after = await probeOld(oldName);
        let oldCloudOrphan = false, oldKept = false, oldUnknown = false;
        if (!after.known) {
          oldUnknown = true;
        } else if (after.meta == null) {
        } else if (baseAtStart != null && baseAtStart === after.meta.etag) {
          try {
            await cloud.trash(oldName, asideStamp(Date.now()), { baseEtag: after.meta.etag });
          } catch (e) {
            reportStoreError(e, "warning");
            oldCloudOrphan = true;
          }
        } else {
          oldKept = true;
        }
        head.forget(oldName);
        return {
          status: "renamed",
          where: oldUnknown ? "cloud-push+unknown" : oldKept ? "cloud-push+kept" : oldCloudOrphan || after.known && after.meta ? "cloud-push+trash" : "cloud-push",
          newName,
          oldCloudOrphan,
          oldKept,
          oldUnknown,
          oldName
        };
      } catch (e) {
        reportStoreError(e, "warning");
        head.recordEdit(newName);
        head.forget(oldName);
        return { status: "renamed", where: "local", newName, cloudDeferred: true, error: e };
      }
    }));
  }
  async function acquire(cloudName, opts = {}) {
    const { localName = cloudName, adopt, busy = passBusy4 } = opts;
    return busy("file.pulling", () => serialize(localName, async () => {
      const r = await cloud.pull(cloudName);
      if (!r)
        return { status: "absent" };
      if (local)
        await local.save(localName, r.blob);
      head.markSynced(localName, r.item?.eTag ?? null);
      if (adopt) {
        const plain = await unseal(localName, r.blob);
        if (plain)
          await adopt(plain, localName);
      }
      return { status: "acquired", localName, item: r.item };
    }));
  }
  return { rename, acquire };
}

// node_modules/@internal/store/dist/trash.js
var passBusy5 = (_l, fn) => fn();
function createTrash(cfg) {
  const { cloud, local, head, busy: _busy = passBusy5 } = cfg;
  async function restore(opts = {}) {
    const { fromCloud, cloudRef, targetName, trashKey, encrypted, busy = _busy } = opts;
    return busy("trash.restoring", async () => {
      let name = targetName || null, restoredLocal = false, restoredCloud = false;
      if (trashKey && local) {
        const n = await local.restore(trashKey);
        if (n) {
          name = n;
          restoredLocal = true;
        }
      }
      if (fromCloud && cloudRef != null) {
        const snap = trashKey ? snapshotStampOf(trashKey.replace(/^[a-z]+\//, "")) : null;
        const ritem = await cloud.restore(cloudRef, name || targetName, { encrypted, snapshotStamp: snap });
        restoredCloud = true;
        const rname = name || targetName;
        if (rname && ritem && ritem.eTag)
          head.markSeen(rname, ritem.eTag);
      }
      if (!restoredLocal && !restoredCloud)
        return { status: "noop" };
      return { status: "restored", name, local: restoredLocal, cloud: restoredCloud };
    });
  }
  async function purge(opts = {}) {
    const { trashKey, cloudRef, confirm, busy = _busy } = opts;
    if (confirm && !await confirm({ title: "\u5F7B\u5E95\u5220\u9664", body: "\u4E0D\u53EF\u6062\u590D", danger: true }))
      return { status: "cancelled" };
    return busy("trash.purging", async () => {
      if (trashKey && local && local.purgeTrash)
        await local.purgeTrash(trashKey);
      if (cloudRef != null)
        await cloud.purge(cloudRef);
      return { status: "purged" };
    });
  }
  async function emptyTrash(opts = {}) {
    const { isOnline, busy = _busy, concurrency = 5, scope = "both" } = opts;
    return busy("trash.emptyTrash", async () => {
      let purged = 0;
      const failed = [];
      const errMsg = (e) => String(e?.message || e);
      if (scope !== "cloud" && local && local.listTrash && local.purgeTrash) {
        for (const t of await local.listTrash()) {
          try {
            await local.purgeTrash(t.trashKey);
            purged++;
          } catch (e) {
            reportStoreError(e, "warning");
            failed.push({ name: t.name, where: "local", error: errMsg(e) });
          }
        }
      }
      if (scope !== "local" && (!isOnline || isOnline())) {
        let items = null;
        try {
          items = await cloud.listTrash();
        } catch (e) {
          reportStoreError(e, "warning");
          failed.push({ where: "cloud-list", error: errMsg(e) });
        }
        items = items || [];
        for (let i = 0; i < items.length; i += concurrency) {
          await Promise.all(items.slice(i, i + concurrency).map(async (it) => {
            try {
              await cloud.purge(it.ref, it.eTag);
              purged++;
            } catch (e) {
              reportStoreError(e, "warning");
              failed.push({ name: it.name, where: "cloud", error: errMsg(e) });
            }
          }));
        }
      }
      return { status: "emptied", purged, failed };
    });
  }
  async function emptyBackup(opts = {}) {
    const { isOnline, busy = _busy, concurrency = 5, scope = "both" } = opts;
    return busy("trash.emptyBackups", async () => {
      let purged = 0;
      const failed = [];
      const errMsg = (e) => String(e?.message || e);
      if (scope !== "cloud" && local && local.listBackup && local.purgeTrash) {
        for (const b of await local.listBackup()) {
          try {
            await local.purgeTrash(b.trashKey);
            purged++;
          } catch (e) {
            reportStoreError(e, "warning");
            failed.push({ name: b.name, where: "local", error: errMsg(e) });
          }
        }
      }
      if (scope !== "local" && (!isOnline || isOnline())) {
        let items = null;
        try {
          items = await cloud.listBackup();
        } catch (e) {
          reportStoreError(e, "warning");
          failed.push({ where: "cloud-list", error: errMsg(e) });
        }
        items = items || [];
        for (let i = 0; i < items.length; i += concurrency) {
          await Promise.all(items.slice(i, i + concurrency).map(async (it) => {
            try {
              await cloud.purge(it.ref, it.eTag);
              purged++;
            } catch (e) {
              reportStoreError(e, "warning");
              failed.push({ name: it.name, where: "cloud", error: errMsg(e) });
            }
          }));
        }
      }
      return { status: "emptied", purged, failed };
    });
  }
  return { restore, purge, emptyTrash, emptyBackup };
}

// node_modules/@internal/store/dist/offload.js
var OffloadIllegalError = class extends Error {
  code = "OFFLOAD_ILLEGAL";
  reason;
  constructor(name, reason) {
    super(`offload "${name}" \u4E0D\u9002\u7528\uFF08${reason}\uFF09\uFF1A\u672C\u5730\u662F\u4E16\u754C\u552F\u4E00\u526F\u672C\u6216\u4E0D\u53EF\u91CD\u53D6\uFF0C\u62D2\u7EDD\u4E22\u5F03\u3002`);
    this.name = "OffloadIllegalError";
    this.reason = reason;
  }
};
function createOffload(cfg) {
  const { cloud, local, head, isOnline } = cfg;
  const serialize = cfg.serialize ?? ((_n, fn) => Promise.resolve().then(fn));
  async function offload(name) {
    return serialize(name, async () => {
      if (!await local.exists(name))
        return;
      if (head.isDirtyAnywhere(name))
        throw new OffloadIllegalError(name, "dirty");
      if (isOnline && !isOnline())
        throw new OffloadIllegalError(name, "offline");
      if (head.seenBase(name) == null)
        throw new OffloadIllegalError(name, "local-only");
      const meta = await cloud.fetchMeta(name).catch((e) => {
        reportStoreError(e, "log");
        return null;
      });
      if (!meta)
        throw new OffloadIllegalError(name, "cloud-gone");
      if (!(meta.size > 0))
        throw new OffloadIllegalError(name, "incomplete");
      if (head.isDirtyAnywhere(name))
        throw new OffloadIllegalError(name, "dirty");
      await local.hardDelete(name);
      head.forget(name);
    });
  }
  return { offload };
}

// node_modules/@internal/store/dist/reconcile.js
function classifyCloudGone(localNames, cloudNameSet, opts) {
  const demote = [];
  if (!opts.authoritative)
    return { demote };
  for (const name of localNames) {
    if (opts.skip?.(name))
      continue;
    if (cloudNameSet.has(name))
      continue;
    if (opts.seenBase(name) == null)
      continue;
    if (opts.isDirty(name))
      continue;
    demote.push(name);
  }
  return { demote };
}
function createReconcile(cfg) {
  const { cloud, local, head, pending, isOnline, activeIdentifier: activeFileNameFn } = cfg;
  const isHiddenAny = (n) => isHidden(n) || !!cfg.hidden?.(n);
  const now = cfg.now || (() => Date.now());
  const skipName = (opt) => opt ?? activeFileNameFn?.() ?? void 0;
  async function converge(localNames, cloudNames, authoritative, activeFileName) {
    if (!authoritative)
      return { demoted: [] };
    localNames = localNames.filter((n) => !isHiddenAny(n));
    for (const name of localNames) {
      if (pending.isPending(name) && (cloudNames.has(name) || head.isDirtyAnywhere(name)))
        pending.clear(name);
    }
    const { demote } = classifyCloudGone(localNames, cloudNames, {
      seenBase: (n) => head.seenBase(n),
      isDirty: (n) => head.isDirtyAnywhere(n),
      // 2026-08-21 修：per-tab 视角曾让 converge 把别 tab 的未推脏字节判成 clean 孤儿 → send trash（§A「dirty 永不被驱逐」失守）
      authoritative,
      skip: activeFileName ? (n) => n === activeFileName : void 0
    });
    const demoted = [];
    for (const name of demote) {
      if (!pending.seenGone(name, now()))
        continue;
      await local.trash(name, asideStamp(now()));
      cloud.clearState(name);
      head.forget(name);
      pending.clear(name);
      demoted.push(name);
    }
    return { demoted };
  }
  async function reconcile(opts = {}) {
    if (isOnline && !isOnline())
      return { demoted: [] };
    const all = await cloud.listAll().catch((e) => {
      reportStoreError(e, "log");
      return null;
    });
    const authoritative = !!(all && all.complete && all.files.length > 0);
    if (!authoritative)
      return { demoted: [] };
    const cloudNames = new Set(all.files.map((f) => f.name ?? f.path));
    return converge(await local.appKeys(), cloudNames, authoritative, skipName(opts.activeFileName));
  }
  async function reconcileFolder(folder, opts = {}) {
    if (isOnline && !isOnline())
      return { demoted: [] };
    const res = opts.cloudPrefetched !== void 0 ? opts.cloudPrefetched : await cloud.listFolder(folder).catch((e) => {
      reportStoreError(e, "log");
      return null;
    });
    if (!res || !res.complete)
      return { demoted: [] };
    const cloudNames = new Set(res.files.map((f) => f.name ?? f.path));
    const prefix = folder ? `${folder}/` : "";
    const localNames = (await local.appKeys()).filter((k) => {
      if (folder && !k.startsWith(prefix))
        return false;
      const rest = k.slice(prefix.length);
      return rest.length > 0 && !rest.includes("/");
    });
    return converge(localNames, cloudNames, true, skipName(opts.activeFileName));
  }
  return { reconcile, reconcileFolder };
}

// node_modules/@internal/store/dist/pending-gone.js
var KEY = "internal.pending_gone";
function createPendingGone(kv, graceMs) {
  function read() {
    try {
      const raw = kv.get(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      reportStoreError(e, "log");
      return {};
    }
  }
  function write(m) {
    if (Object.keys(m).length)
      kv.set(KEY, JSON.stringify(m));
    else
      kv.remove(KEY);
  }
  return {
    isPending(name) {
      return read()[name] != null;
    },
    seenGone(name, now) {
      const m = read();
      const first = m[name];
      if (first == null) {
        m[name] = now;
        write(m);
        return false;
      }
      if (now - first >= graceMs)
        return true;
      return false;
    },
    clear(name) {
      const m = read();
      if (m[name] != null) {
        delete m[name];
        write(m);
      }
    },
    names() {
      return Object.keys(read());
    }
  };
}

// node_modules/@internal/store/dist/folder-merge.js
var lastWinResolve = (x, y) => defaultResolve(x, y);
function resolverForPolicy(policy) {
  switch (policy) {
    case "last-win":
      return lastWinResolve;
    default:
      return lastWinResolve;
  }
}
var FOLDER_ENVELOPE_VERSION = 2;
function emptyFolder() {
  return { version: FOLDER_ENVELOPE_VERSION, items: [] };
}
function defaultResolve(x, y) {
  const ux = x.uat || 0, uy = y.uat || 0;
  if (uy > ux)
    return y;
  if (uy < ux)
    return x;
  return JSON.stringify(y) > JSON.stringify(x) ? y : x;
}
function mergeFolders(a, b, { resolve, conflictPolicy = "last-win" } = {}) {
  const A = a || emptyFolder(), B = b || emptyFolder();
  const pick = resolve || resolverForPolicy(conflictPolicy);
  const items = /* @__PURE__ */ new Map();
  for (const e of [...A.items || [], ...B.items || []]) {
    if (!e || e.id == null)
      continue;
    const cur = items.get(e.id);
    items.set(e.id, cur ? pick(cur, e) : e);
  }
  return { version: FOLDER_ENVELOPE_VERSION, items: [...items.values()] };
}
function isValidFolderEnvelope(o) {
  const f = o;
  return !!f && typeof f === "object" && Number.isFinite(f.version) && Array.isArray(f.items) && f.items.every((e) => e && e.id != null && Number.isFinite(e.uat));
}
function parseFolderBlob(textOrBytes) {
  let o;
  try {
    const s = typeof textOrBytes === "string" ? textOrBytes : new TextDecoder().decode(textOrBytes);
    o = JSON.parse(s);
  } catch (e) {
    reportStoreError(e, "log");
    return null;
  }
  return isValidFolderEnvelope(o) ? o : null;
}
function normalizeFolder(f) {
  const byId = (a, b) => String(a.id).localeCompare(String(b.id));
  return JSON.stringify({
    version: f.version,
    items: [...f.items || []].sort(byId)
  });
}

// node_modules/@internal/store/dist/folder-flow.js
function withTimeout(p, ms) {
  if (!ms)
    return p;
  return Promise.race([
    p,
    new Promise((_, rej) => setTimeout(() => rej(Object.assign(new Error("timeout"), { _timeout: true })), ms))
  ]);
}
var is412 = (e) => {
  const x = e;
  return !!x && (x.name === "CloudConflictError" || x.status === 412);
};
function createFolderFlow(cfg) {
  const { cloud, name, encode: encode2, decode: decode2, resolve, conflictPolicy = "last-win", isOnline, timeoutMs = 15e3 } = cfg;
  let chain = Promise.resolve(null);
  function sync(localFolder) {
    const run = () => _sync(localFolder, 0);
    chain = chain.then(run, run);
    return chain;
  }
  async function _sync(localFolder, depth) {
    if (isOnline && !isOnline())
      return { status: "offline", folder: localFolder };
    let pulled;
    try {
      pulled = await withTimeout(cloud.pull(name), timeoutMs);
    } catch (e) {
      reportStoreError(e, "log");
      return { status: "offline", folder: localFolder, error: e };
    }
    let cloudFolder = emptyFolder();
    if (pulled && pulled.blob) {
      let text;
      try {
        text = await pulled.blob.text();
      } catch (e) {
        reportStoreError(e, "log");
        return { status: "offline", folder: localFolder, error: e };
      }
      const parsed = decode2(text);
      if (!parsed)
        return { status: "invalid", folder: localFolder };
      cloudFolder = parsed;
    }
    const merged = mergeFolders(localFolder, cloudFolder, { resolve, conflictPolicy });
    if (normalizeFolder(merged) === normalizeFolder(cloudFolder)) {
      return { status: "synced", folder: merged, pushed: false, etag: pulled?.item?.eTag };
    }
    try {
      const res = await withTimeout(cloud.push(name, encode2(merged), { baseEtag: pulled?.item?.eTag }), timeoutMs);
      return { status: "synced", folder: merged, pushed: true, etag: res?.item?.eTag };
    } catch (e) {
      if (is412(e) && depth < 5)
        return _sync(merged, depth + 1);
      reportStoreError(e, "warning");
      return { status: "dirty", folder: merged, error: e };
    }
  }
  return { sync };
}

// node_modules/@internal/store/dist/collection.js
function collectionLocalKey(name) {
  return `collections/${name}`;
}
var SEED_UAT = 1;
var encode = (f) => new TextEncoder().encode(JSON.stringify(f));
var decode = (text) => parseFolderBlob(text);
function emptyCollectionBytes() {
  return encode(emptyFolder());
}
var resolveDef = (def) => typeof def === "function" ? def() : def;
var shallowCopy = (v) => Array.isArray(v) ? [...v] : v && typeof v === "object" ? { ...v } : v;
var valueOf = (e) => e.value;
var isTombstone = (e) => valueOf(e) === null;
function createCollection(cfg) {
  const { cloud, name, isOnline, syncDelayMs = 1500, now = () => Date.now(), manual = false, local, localWriteDelayMs = 400, getInitData } = cfg;
  const flow = createFolderFlow({ cloud, name, encode, decode, isOnline });
  let env = emptyFolder();
  let timer = null;
  let ready = false;
  const listeners = /* @__PURE__ */ new Set();
  let _firing = false;
  const _queued = [];
  function emit(changed) {
    if (!changed.length || !listeners.size)
      return;
    if (_firing) {
      _queued.push(...changed);
      return;
    }
    _firing = true;
    try {
      let batch = changed;
      while (batch.length) {
        for (const cb of listeners) {
          try {
            cb(batch);
          } catch (e) {
            reportStoreError(e, "log");
          }
        }
        batch = _queued.splice(0, _queued.length);
      }
    } finally {
      _firing = false;
    }
  }
  const snapshotValues = () => {
    const m = /* @__PURE__ */ new Map();
    for (const e of env.items)
      if (e.id != null)
        m.set(String(e.id), JSON.stringify(valueOf(e)));
    return m;
  };
  const fireChanged = (before) => {
    if (!listeners.size)
      return;
    const after = snapshotValues();
    const changed = [];
    for (const [id, v] of after)
      if (before.get(id) !== v)
        changed.push(id);
    for (const [id] of before)
      if (!after.has(id))
        changed.push(id);
    emit(changed);
  };
  const localKey = collectionLocalKey(name);
  let hydrated = false;
  let idbHad = false;
  let localTimer = null;
  let localChain = Promise.resolve({ ok: true });
  async function bytesOf(b) {
    if (!b)
      return null;
    if (b instanceof Uint8Array)
      return b;
    if (typeof b.arrayBuffer === "function")
      return new Uint8Array(await b.arrayBuffer());
    return null;
  }
  async function hydrateLocal() {
    if (!local || hydrated)
      return;
    hydrated = true;
    try {
      idbHad = await local.exists(localKey);
      if (idbHad) {
        const cached = parseFolderBlob(await bytesOf(await local.get(localKey)) ?? new Uint8Array(0));
        if (cached)
          env = mergeFolders(env, cached);
      }
    } catch (e) {
      reportStoreError(e, "log");
    }
  }
  function clearLocalTimer() {
    if (localTimer != null) {
      clearTimeout(localTimer);
      localTimer = null;
    }
  }
  function scheduleLocalWrite() {
    if (!local || localTimer != null)
      return;
    localTimer = setTimeout(() => {
      localTimer = null;
      void writeLocalNow();
    }, localWriteDelayMs);
  }
  function writeLocalNow() {
    if (!local)
      return Promise.resolve({ ok: true });
    clearLocalTimer();
    const snap = encode(env);
    localChain = localChain.then(() => local.save(localKey, snap).then(() => ({ ok: true }))).catch((e) => {
      reportStoreError(e, "warning");
      return { ok: false, error: e };
    });
    return localChain;
  }
  function clearTimer() {
    if (timer != null) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function scheduleSync() {
    scheduleLocalWrite();
    cloud.setDirty(name, true);
    if (manual)
      return;
    clearTimer();
    timer = setTimeout(() => {
      timer = null;
      void sync();
    }, syncDelayMs);
  }
  async function sync() {
    const before = snapshotValues();
    const res = await flow.sync(env);
    env = mergeFolders(env, res.folder);
    scheduleLocalWrite();
    if (res.status === "synced") {
      if (res.etag)
        cloud.setETag(name, res.etag);
      if (normalizeFolder(env) === normalizeFolder(res.folder))
        cloud.setDirty(name, false);
    }
    fireChanged(before);
    return res;
  }
  async function reconcile() {
    if (!cloud.isDirty(name) && (!isOnline || isOnline()) && cloud.getETag(name)) {
      const meta = await cloud.fetchMeta(name).catch((e) => {
        reportStoreError(e, "log");
        return null;
      });
      if (meta && meta.etag === cloud.getETag(name))
        return null;
    }
    return sync();
  }
  async function reconcileWithRemote() {
    try {
      return await reconcile() ?? { status: "unchanged" };
    } catch (e) {
      reportStoreError(e, "warning");
      return { status: "error", error: e };
    }
  }
  async function seedInit() {
    if (!getInitData)
      return;
    let initial;
    try {
      initial = await getInitData();
    } catch (e) {
      reportStoreError(e, "warning");
      return;
    }
    if (!initial || !initial.length)
      return;
    const seeded = initial.filter((it) => it && it.id != null && it.value !== void 0).map((it) => ({ id: it.id, uat: SEED_UAT, value: shallowCopy(it.value) }));
    if (!seeded.length)
      return;
    env = mergeFolders(env, { version: FOLDER_ENVELOPE_VERSION, items: seeded });
    cloud.setDirty(name, true);
    scheduleLocalWrite();
  }
  async function init() {
    await hydrateLocal();
    if (!idbHad)
      await seedInit();
    ready = true;
    void reconcile().catch((e) => reportStoreError(e, "log"));
  }
  function setItem(id, value) {
    if (!ready)
      throw new Error(`collection(${name}).setItem \u5728 init() \u524D\u8C03\u7528\u2014\u2014\u8BBE\u7F6E\u672A\u5C31\u7EEA`);
    if (id == null)
      throw new Error("collection.setItem: id \u5FC5\u586B");
    if (value === void 0)
      throw new Error(`collection(${name}).setItem: value \u4E0D\u53EF\u4E3A undefined\uFF08\u5220\u9664\u8BF7\u7528 deleteItem \u6216\u4F20 null \u5893\u7891\uFF09`);
    const prev = env.items.find((e) => e.id === id);
    const valueChanged = !prev || JSON.stringify(valueOf(prev)) !== JSON.stringify(value);
    const fi = { id, uat: now(), value: shallowCopy(value) };
    env = { ...env, items: [...env.items.filter((e) => e.id !== id), fi] };
    scheduleSync();
    if (valueChanged)
      emit([id]);
  }
  function deleteItem(id) {
    if (!ready)
      throw new Error(`collection(${name}).deleteItem \u5728 init() \u524D\u8C03\u7528`);
    setItem(id, null);
  }
  const entryOf = (e) => ({ id: String(e.id), uat: e.uat || 0, value: valueOf(e) });
  function getEntry(id) {
    const e = env.items.find((x) => x.id === id);
    return e && !isTombstone(e) ? entryOf(e) : void 0;
  }
  function getItem(id, def) {
    const e = env.items.find((x) => x.id === id);
    return e && !isTombstone(e) ? shallowCopy(valueOf(e)) : resolveDef(def);
  }
  function entries() {
    return env.items.filter((e) => !isTombstone(e)).map(entryOf);
  }
  function keys() {
    return env.items.filter((e) => !isTombstone(e)).map((e) => String(e.id));
  }
  function onChange(a, b) {
    const cb = typeof a === "string" ? (ids) => {
      if (ids.includes(a))
        b();
    } : a;
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  }
  function flushLocal() {
    return writeLocalNow();
  }
  function isDirty2() {
    return cloud.isDirty(name);
  }
  return { init, reconcileWithRemote, setItem, deleteItem, getItem, getEntry, entries, keys, onChange, flushLocal, isDirty: isDirty2 };
}

// node_modules/@internal/store/dist/listing.js
function classifySyncState(f) {
  if (!f.hasLocal)
    return "cloud-only";
  if (!f.cloudReachable) {
    if (f.dirty)
      return f.everSynced ? "unpushed" : "float";
    return f.everSynced ? "synced" : "local-only";
  }
  if (f.hasCloud) {
    const moved = f.cloudMoved || !f.everSynced;
    if (moved)
      return f.dirty ? "conflict" : "newer-on-cloud";
    return f.dirty ? "unpushed" : "synced";
  }
  if (!f.everSynced)
    return f.dirty ? "float" : "local-only";
  if (!f.absenceAuthoritative)
    return f.dirty ? "unpushed" : "synced";
  if (f.dirty)
    return "ghost";
  return f.pendingGone ? "pendingGone" : "local-only";
}
var toMs = (v) => {
  if (v == null)
    return void 0;
  if (typeof v === "number")
    return v;
  const t = Date.parse(v);
  return Number.isFinite(t) ? t : void 0;
};
function createListing(cfg) {
  const isHiddenAny = (n) => isHidden(n) || !!cfg.hidden?.(n);
  const { cloud, local, head, pendingFolders, isPendingGone, pendingFolderDeletions } = cfg;
  function classifyPath(path, cf, hasLocal, cloudReachable, absenceAuthoritative, localStat) {
    const hasCloud = cf != null;
    const seen = head.seenBase(path);
    const everSynced = seen != null;
    const cloudMoved = hasCloud && cf.eTag !== seen;
    const dirty = head.isDirtyAnywhere(path);
    const syncState = classifySyncState({
      hasLocal,
      hasCloud,
      everSynced,
      cloudMoved,
      dirty,
      cloudReachable,
      absenceAuthoritative,
      pendingGone: isPendingGone?.(path)
    });
    const lastModified = dirty ? localStat?.updatedAt ?? cf?.lastModified : cf?.lastModified ?? localStat?.updatedAt;
    return { identifier: path, syncState, size: cf?.size ?? localStat?.size, lastModified };
  }
  async function statLocal(keys) {
    const m = /* @__PURE__ */ new Map();
    if (!local.stat)
      return m;
    await Promise.all([...keys].map(async (k) => {
      const s = await local.stat(k);
      if (s)
        m.set(k, s);
    }));
    return m;
  }
  async function listFolder(folder, ctx, opts) {
    const cloudRes = opts?.cloudPrefetched !== void 0 ? opts.cloudPrefetched : ctx.online && ctx.signedIn ? await cloud.listFolder(folder).catch((e) => {
      reportStoreError(e, "log");
      return null;
    }) : null;
    const cloudReachable = cloudRes != null;
    const absenceAuthoritative = cloudReachable && cloudRes.complete === true;
    const prefix = folder ? `${folder}/` : "";
    const cloudMap = /* @__PURE__ */ new Map();
    for (const c of cloudRes?.files ?? []) {
      if (isHiddenAny(c.name))
        continue;
      cloudMap.set(c.name, { eTag: c.eTag, size: c.size, lastModified: toMs(c.lastModifiedDateTime) });
    }
    const localDirect = /* @__PURE__ */ new Set();
    const subfolders = /* @__PURE__ */ new Set();
    for (const k of await local.appKeys()) {
      if (folder && !k.startsWith(prefix))
        continue;
      const rest = k.slice(prefix.length);
      if (!rest)
        continue;
      const slash = rest.indexOf("/");
      if (slash >= 0) {
        const sub = prefix + rest.slice(0, slash);
        if (!isHiddenAny(sub))
          subfolders.add(sub);
      } else if (!isHiddenAny(k))
        localDirect.add(k);
    }
    for (const f of cloudRes?.folders ?? []) {
      if (!isHiddenAny(f))
        subfolders.add(f);
    }
    for (const p of pendingFolders?.() ?? []) {
      if (folder && !p.startsWith(prefix))
        continue;
      const rest = folder ? p.slice(prefix.length) : p;
      const seg = rest.includes("/") ? rest.slice(0, rest.indexOf("/")) : rest;
      if (seg && !isHiddenAny(seg))
        subfolders.add(prefix + seg);
    }
    const paths = /* @__PURE__ */ new Set([...cloudMap.keys(), ...localDirect]);
    const localStats = await statLocal(localDirect);
    const items = [];
    for (const path of paths)
      items.push(classifyPath(path, cloudMap.get(path), localDirect.has(path), cloudReachable, absenceAuthoritative, localStats.get(path)));
    const stale = opts?.staleCloud != null;
    if (opts?.staleCloud) {
      for (const f of opts.staleCloud.files) {
        if (paths.has(f.name) || isHiddenAny(f.name))
          continue;
        const rest = folder ? f.name.startsWith(prefix) ? f.name.slice(prefix.length) : "" : f.name;
        if (!rest || rest.includes("/"))
          continue;
        items.push({ identifier: f.name, syncState: "cloud-only", size: f.size, lastModified: f.lastModified });
      }
      for (const sf of opts.staleCloud.folders)
        if (!isHiddenAny(sf))
          subfolders.add(sf);
    }
    for (const d of pendingFolderDeletions?.() ?? [])
      subfolders.delete(d);
    const snap = { folder, items, folders: [...subfolders], complete: absenceAuthoritative };
    if (stale)
      snap.stale = true;
    return snap;
  }
  async function listAllItems(ctx) {
    const cloudRes = ctx.online && ctx.signedIn ? await cloud.listAll().catch((e) => {
      reportStoreError(e, "log");
      return null;
    }) : null;
    const cloudReachable = cloudRes != null;
    const absenceAuthoritative = cloudReachable && cloudRes.complete === true;
    const cloudMap = /* @__PURE__ */ new Map();
    for (const c of cloudRes?.files ?? []) {
      if (isHiddenAny(c.name))
        continue;
      cloudMap.set(c.name, { eTag: c.eTag, size: c.size, lastModified: toMs(c.lastModifiedDateTime) });
    }
    const localSet = new Set((await local.appKeys()).filter((k) => !isHiddenAny(k)));
    const paths = /* @__PURE__ */ new Set();
    for (const p of cloudMap.keys())
      paths.add(p);
    for (const p of localSet)
      paths.add(p);
    const localStats = await statLocal(localSet);
    const items = [];
    for (const path of paths)
      items.push(classifyPath(path, cloudMap.get(path), localSet.has(path), cloudReachable, absenceAuthoritative, localStats.get(path)));
    const folderSet = /* @__PURE__ */ new Set();
    for (const f of cloudRes?.folders ?? [])
      if (!isHiddenAny(f))
        folderSet.add(f);
    for (const p of pendingFolders?.() ?? [])
      if (!isHiddenAny(p))
        folderSet.add(p);
    for (const d of pendingFolderDeletions?.() ?? [])
      folderSet.delete(d);
    return { items, folders: [...folderSet], complete: cloudReachable ? cloudRes.complete : false };
  }
  return { listAllItems, listFolder };
}

// node_modules/@internal/store/dist/upload-queue.js
var UPQ_KEY = "internal.pending_uploads";
function createUploadReplay(cfg) {
  const { kv, local, head, isOnline, serialize, pushLocal, policy, confirm, onStatus } = cfg;
  function readQueue() {
    try {
      const v = JSON.parse(kv.get(UPQ_KEY) ?? "[]");
      return Array.isArray(v) ? v : [];
    } catch (e) {
      reportStoreError(e, "log");
      return [];
    }
  }
  function writeQueue(q) {
    if (q.length)
      kv.set(UPQ_KEY, JSON.stringify([...new Set(q)]));
    else
      kv.remove(UPQ_KEY);
  }
  function enqueue(name) {
    if (policy === "manual")
      return;
    writeQueue([...readQueue(), name]);
  }
  function remove(name) {
    const q = readQueue();
    if (q.includes(name))
      writeQueue(q.filter((n) => n !== name));
  }
  async function drain() {
    if (policy === "manual")
      return { status: "manual", pushed: 0 };
    const q = readQueue();
    if (!q.length)
      return { status: "empty", pushed: 0 };
    if (!isOnline())
      return { status: "offline", pushed: 0 };
    if (policy === "ask") {
      const ok = confirm ? await confirm(q.length) : false;
      if (!ok)
        return { status: "declined", pushed: 0 };
    }
    onStatus?.({ phase: "start", done: 0, total: q.length });
    const remain = [];
    let pushed = 0;
    for (const name of q) {
      const r = await serialize(name, async () => {
        if (!await local.exists(name))
          return "gone";
        if (!head.isDirtyAnywhere(name) || head.seenBase(name) != null)
          return "synced";
        try {
          const r2 = await pushLocal(name);
          return r2?.status === "deferred" ? "keep" : "pushed";
        } catch (e) {
          if (e?.name === "CloudNameCollisionError")
            return "collision";
          reportStoreError(e, "log");
          return "keep";
        }
      });
      if (r === "pushed") {
        pushed++;
        onStatus?.({ phase: "pushed", name, done: pushed, total: q.length });
      } else if (r === "collision")
        onStatus?.({ phase: "collision", name, done: pushed, total: q.length });
      else if (r === "keep")
        remain.push(name);
    }
    writeQueue(remain);
    onStatus?.({ phase: "done", done: pushed, total: q.length });
    return { status: "drained", pushed, remain: remain.length };
  }
  return { enqueue, remove, drain, pending: readQueue };
}

// node_modules/@internal/store/dist/trash-merge.js
var STAMP_RE = /^(.*) \[((\d{14})-[0-9a-fA-F-]+)\](\.zip)?$/;
var baseNameOf = (n) => n.includes("/") ? n.slice(n.lastIndexOf("/") + 1) : n;
function parseCloudTrashName(cloudName, toName) {
  const m = cloudName.match(STAMP_RE);
  if (m)
    return { base: m[1], id: m[2], ts: m[3], encrypted: !!m[4] };
  const base = toName(cloudName);
  return { base, id: null, ts: null, encrypted: base !== cloudName };
}
function parseLocalStamp(trashKey) {
  const slash = trashKey.indexOf("/");
  const inner = slash < 0 ? trashKey : trashKey.slice(slash + 1);
  const m = inner.match(/^((\d{14})-[0-9a-fA-F-]+):/);
  return m ? { id: m[1], ts: m[2] } : { id: null, ts: null };
}
var byTs = (a, b) => (a.ts || "").localeCompare(b.ts || "");
function mergeTrash(localEntries, cloudEntries, liveCloudNames = /* @__PURE__ */ new Set(), toName = defaultCloudToName) {
  const localByBase = /* @__PURE__ */ new Map();
  for (const e of localEntries) {
    const base = baseNameOf(e.name);
    const bucket = localByBase.get(base) ?? [];
    const st = parseLocalStamp(e.trashKey);
    bucket.push({ entry: e, id: st.id, ts: st.ts });
    localByBase.set(base, bucket);
  }
  const cloudByBase = /* @__PURE__ */ new Map();
  for (const it of cloudEntries) {
    const p = parseCloudTrashName(it.name, toName);
    const bucket = cloudByBase.get(p.base) ?? [];
    bucket.push({ item: it, id: p.id, ts: p.ts, encrypted: p.encrypted });
    cloudByBase.set(p.base, bucket);
  }
  const out = [];
  const bases = /* @__PURE__ */ new Set([...localByBase.keys(), ...cloudByBase.keys()]);
  for (const base of bases) {
    const locals = (localByBase.get(base) ?? []).slice().sort(byTs);
    const clouds = (cloudByBase.get(base) ?? []).slice().sort(byTs);
    const usedCloud = /* @__PURE__ */ new Set();
    const byId = /* @__PURE__ */ new Map();
    clouds.forEach((c, i) => {
      if (c.id)
        byId.set(c.id, i);
    });
    const lonelyLocals = [];
    for (const l of locals) {
      const ci = l.id != null ? byId.get(l.id) : void 0;
      if (ci == null || usedCloud.has(ci)) {
        lonelyLocals.push(l);
        continue;
      }
      usedCloud.add(ci);
      const c = clouds[ci];
      out.push({ identifier: l.entry.name, ts: l.ts ?? c.ts, side: "both", encrypted: c.encrypted, conflictLive: false, localKey: l.entry.trashKey, cloudRef: c.item.ref });
    }
    for (const l of lonelyLocals) {
      out.push({ identifier: l.entry.name, ts: l.ts, side: "local", encrypted: false, conflictLive: liveCloudNames.has(l.entry.name), localKey: l.entry.trashKey, cloudRef: null });
    }
    clouds.forEach((c, i) => {
      if (usedCloud.has(i))
        return;
      out.push({ identifier: base, ts: c.ts, side: "cloud", encrypted: c.encrypted, conflictLive: false, localKey: null, cloudRef: c.item.ref });
    });
  }
  return out;
}

// node_modules/@internal/store/dist/idb-store.js
var STORE = "blobs";
var _idbOpTimeoutMs = 3e3;
var IdbTimeoutError = class extends Error {
  constructor(op, ms) {
    super(`idb ${op} did not respond within ${ms}ms (connection wedged?)`);
    this.name = "IdbTimeoutError";
  }
};
var IdbSuspendedError = class extends Error {
  constructor(op) {
    super(`idb ${op} aborted on pagehide (page leaving; not an error of the data)`);
    this.name = "IdbSuspendedError";
  }
};
function createIdbCache(dbName) {
  let _db = null;
  let _closed = false;
  let _opens = 0;
  const _active = /* @__PURE__ */ new Set();
  let _suspended = false;
  function suspend(persisted = true) {
    if (!persisted)
      return;
    _suspended = true;
    let n = 0;
    for (const a of _active) {
      a.suspended = true;
      n++;
      try {
        a.t.abort();
      } catch {
      }
    }
    dropConnection(null);
    if (_opens > 0)
      reportStoreError(new Error(`[idb] pagehide persisted=true \u2192 aborted ${n} in-flight tx, connection closed, gated until pageshow (${dbName})`), "log");
  }
  function resume() {
    if (!_suspended)
      return;
    _suspended = false;
    reportStoreError(new Error(`[idb] pageshow \u2192 gate lifted, next op reopens (${dbName})`), "log");
  }
  const _onPageHide = (e) => suspend(e.persisted === true);
  const _onPageShow = () => resume();
  const _win = typeof window !== "undefined" && typeof window.addEventListener === "function" ? window : null;
  _win?.addEventListener("pagehide", _onPageHide);
  _win?.addEventListener("pageshow", _onPageShow);
  function dropConnection(which) {
    if (which !== null && _db !== which)
      return;
    const p = _db;
    _db = null;
    void p?.then((db) => {
      try {
        db.close();
      } catch {
      }
    }).catch(() => {
    });
  }
  function openDb() {
    if (_closed)
      return Promise.reject(new Error(`idb cache closed (disposed): ${dbName}`));
    if (_db)
      return _db;
    _opens++;
    const ms = _idbOpTimeoutMs;
    const p = new Promise((resolve, reject) => {
      const r = indexedDB.open(dbName, 1);
      const timer = setTimeout(() => {
        dropConnection(p);
        reject(new IdbTimeoutError("open", ms));
      }, ms);
      r.onupgradeneeded = () => {
        r.result.createObjectStore(STORE);
      };
      r.onblocked = () => {
        reportStoreError(new Error(`[idb] open blocked by another connection (versionchange pending): ${dbName}`), "log");
      };
      r.onsuccess = () => {
        clearTimeout(timer);
        const db = r.result;
        db.onclose = () => {
          dropConnection(p);
        };
        db.onversionchange = () => {
          db.close();
          dropConnection(p);
        };
        if (_db !== p) {
          db.close();
          return;
        }
        resolve(db);
      };
      r.onerror = () => {
        clearTimeout(timer);
        dropConnection(p);
        reject(r.error);
      };
    });
    _db = p;
    return p;
  }
  function close() {
    _closed = true;
    _win?.removeEventListener("pagehide", _onPageHide);
    _win?.removeEventListener("pageshow", _onPageShow);
    dropConnection(null);
  }
  function tx(mode, run, op = "tx") {
    if (_suspended)
      return Promise.reject(new IdbSuspendedError(`${mode} ${op}`));
    return txOnce(mode, run, op).catch((e) => {
      if (!(e instanceof IdbTimeoutError) || _closed)
        throw e;
      reportStoreError(new Error(`[idb] ${e.message} \u2192 reopening connection, retrying once`), "log");
      return txOnce(mode, run, op).catch((e2) => {
        if (e2 instanceof IdbTimeoutError)
          reportStoreError(e2, "warning");
        throw e2;
      });
    });
  }
  function txOnce(mode, run, op) {
    const conn = openDb();
    return conn.then((db) => new Promise((resolve, reject) => {
      const t = db.transaction(STORE, mode);
      const ms = _idbOpTimeoutMs;
      const rec = { t, mode, suspended: false };
      _active.add(rec);
      let failed = false;
      const timer = setTimeout(() => {
        if (failed)
          return;
        failed = true;
        _active.delete(rec);
        dropConnection(conn);
        try {
          t.abort();
        } catch {
        }
        reject(new IdbTimeoutError(`${mode} ${op}`, ms));
      }, ms);
      const fail = () => {
        if (failed)
          return;
        failed = true;
        clearTimeout(timer);
        _active.delete(rec);
        if (rec.suspended) {
          reject(new IdbSuspendedError(`${mode} ${op}`));
          return;
        }
        const err2 = t.error ?? new DOMException(`idb ${mode} transaction aborted`, "AbortError");
        if (err2.name === "QuotaExceededError")
          reportStoreError(err2, "error");
        reject(err2);
      };
      t.onerror = fail;
      t.onabort = fail;
      let finish;
      try {
        finish = run(t.objectStore(STORE));
      } catch (e) {
        failed = true;
        clearTimeout(timer);
        _active.delete(rec);
        reject(e);
        t.abort();
        return;
      }
      t.oncomplete = () => {
        clearTimeout(timer);
        _active.delete(rec);
        if (failed)
          return;
        resolve(finish());
      };
    }));
  }
  return {
    close,
    get(name) {
      return tx("readonly", (s) => {
        const r = s.get(name);
        return () => r.result;
      }, "get");
    },
    put(name, rec) {
      return tx("readwrite", (s) => {
        s.put(rec, name);
        return () => void 0;
      }, "put");
    },
    del(name) {
      return tx("readwrite", (s) => {
        s.delete(name);
        return () => void 0;
      }, "del");
    },
    keys() {
      return tx("readonly", (s) => {
        const r = s.getAllKeys();
        return () => r.result.filter((k) => typeof k === "string");
      }, "keys");
    },
    /** 按 key 前缀汇总占用（单事务 cursor 走一遍；`Blob.size` 是引用属性，**不把字节读进内存**）。
     *  只返两个标量，不返任何名字 —— 拿不到清单，故**不能**当全库列举用（那是被否决的退化设计）。 */
    usage(prefix) {
      return tx("readonly", (s) => {
        let bytes = 0, count = 0;
        const c = s.openCursor();
        c.onsuccess = () => {
          const cur = c.result;
          if (!cur)
            return;
          if (typeof cur.key === "string" && cur.key.startsWith(prefix)) {
            const rec = cur.value;
            if (rec && rec.blob) {
              bytes += rec.blob.size || 0;
              count++;
            }
          }
          cur.continue();
        };
        return () => ({ bytes, count });
      }, "usage");
    },
    /** 原子改名(同一事务 get→put 新→del 旧):trash/restore/backup 用。源不存在则 noop。 */
    rename(from, to) {
      return tx("readwrite", (s) => {
        const g = s.get(from);
        g.onsuccess = () => {
          const v = g.result;
          if (v !== void 0) {
            s.put(v, to);
            s.delete(from);
          }
        };
        return () => void 0;
      }, "rename");
    },
    /** 诊断/测试：连接被 open 过几次（重开可观测）。 */
    _opens() {
      return _opens;
    },
    /** 页面离场处置（pagehide 自动调；测试可直调）。 */
    suspend,
    /** bfcache 复活处置（pageshow 自动调；测试可直调）。 */
    resume
  };
}

// node_modules/@internal/store/dist/blob-partition.js
function createPartitionedBlobStore(dbName) {
  const idb = createIdbCache(dbName);
  const key = (p, name) => `${p}/${name}`;
  function view(p) {
    const prefix = `${p}/`;
    return {
      get: (name) => idb.get(key(p, name)),
      put: (name, rec) => idb.put(key(p, name), rec),
      del: (name) => idb.del(key(p, name)),
      exists: async (name) => await idb.get(key(p, name)) !== void 0,
      keys: async () => (await idb.keys()).filter((k) => k.startsWith(prefix)).map((k) => k.slice(prefix.length)),
      usage: () => idb.usage(prefix),
      moveTo: (name, to, toName) => idb.rename(key(p, name), key(to, toName))
    };
  }
  return { partition: view, close: () => idb.close() };
}

// node_modules/@internal/store/dist/local-cache.js
var NO_KINDS2 = createIdentifiers([]);
var stripStamp = (inner) => inner.replace(/^[^:]*:/, "");
var stamp = () => asideStamp(Date.now());
function splitKey(k) {
  const slash = k.indexOf("/");
  return slash < 0 ? { part: "trash", inner: k } : { part: k.slice(0, slash), inner: k.slice(slash + 1) };
}
function createLocalCache(dbName, opts = {}) {
  const ids = opts.identifiers ?? NO_KINDS2;
  const bs = createPartitionedBlobStore(dbName);
  const files = bs.partition("files");
  const trashP = bs.partition("trash");
  const backupP = bs.partition("backup");
  const dirIdxP = bs.partition("dir-index-cache");
  const _seenRev = /* @__PURE__ */ new Map();
  const _lastConflictBackupAt = /* @__PURE__ */ new Map();
  const CONFLICT_BACKUP_COOLDOWN_MS = 5 * 6e4;
  return {
    // 覆盖写。bytes 归一化成 Blob(契约落 Blob)。
    // ⚠ 曾把 hint.peek 一并写进记录的 .peek 字段——**零 reader**（活的图库缩略图走密文 getPeek），
    //   却对加密件把 256px **明文**缩略图落进了 IDB，违反红线「明文缩略图永不落盘」。字段已删；
    //   hint 仍原样透传给上层作旁路，但 store 不再持久化它的任何解码产物。
    async save(name, bytes, _hint, guard) {
      const blob = bytes instanceof Blob ? bytes : new Blob([bytes]);
      const stored = await files.get(name);
      const storedRev = stored?.rev ?? 0;
      let foreignOverwrite;
      if (guard === "user-save" && stored && storedRev !== (_seenRev.get(name) ?? 0)) {
        const nowTs = Date.now();
        const last = _lastConflictBackupAt.get(name) ?? 0;
        let backedUp = false;
        if (nowTs - last >= CONFLICT_BACKUP_COOLDOWN_MS) {
          await backupP.put(`${stamp()}:${name}`, { ...stored, updatedAt: nowTs });
          _lastConflictBackupAt.set(name, nowTs);
          backedUp = true;
        }
        foreignOverwrite = { backedUp, foreignRev: storedRev };
      }
      const rev2 = storedRev + 1;
      await files.put(name, { blob, updatedAt: Date.now(), rev: rev2 });
      _seenRev.set(name, rev2);
      return foreignOverwrite ? { rev: rev2, foreignOverwrite } : { rev: rev2 };
    },
    async get(name) {
      const r = await files.get(name);
      if (r)
        _seenRev.set(name, r.rev ?? 0);
      return r ? r.blob : null;
    },
    async exists(name) {
      return files.exists(name);
    },
    // 轻量元信息：blob.size 是 Blob 引用属性（不载字节）、updatedAt 存记录里 → 便宜。listing 给本地项填尺寸/时间。
    async stat(name) {
      const r = await files.get(name);
      return r ? { size: r.blob.size, updatedAt: r.updatedAt } : null;
    },
    // 已缓存的应用文件名 = files 分区键（trash/backup/collections 天然隔离在别分区，无需按名过滤）。
    async appKeys() {
      return files.keys();
    },
    // files 分区占用（字节 + 件数）。**不含** trash/backup/collections 分区，也不含纯云端未缓存的文件。
    async usage() {
      return files.usage();
    },
    // 覆盖前留底:复制到 backup 分区(yyyymmddhhmmss-guid 防撞;原件不动)。
    async backup(name) {
      const r = await files.get(name);
      if (!r)
        throw new Error(`\u672C\u5730\u65E0 ${name},\u65E0\u6CD5\u5907\u4EFD`);
      const inner = `${stamp()}:${name}`;
      await backupP.put(inner, { ...r, updatedAt: Date.now() });
      return `backup/${inner}`;
    },
    async trash(name, deleteEventId) {
      const inner = `${deleteEventId}:${name}`;
      await files.moveTo(name, "trash", inner);
      return `trash/${inner}`;
    },
    async hardDelete(name) {
      await files.del(name);
    },
    async restore(trashKey) {
      const { part, inner } = splitKey(trashKey);
      const orig = stripStamp(inner);
      const target = await restoreTargetName(orig, (n) => files.exists(n), snapshotStampOf(inner), Date.now(), ids);
      await (part === "backup" ? backupP : trashP).moveTo(inner, "files", target);
      return target;
    },
    async purgeTrash(trashKey) {
      const { part, inner } = splitKey(trashKey);
      await (part === "backup" ? backupP : trashP).del(inner);
    },
    async listTrash() {
      return (await trashP.keys()).map((inner) => ({ trashKey: `trash/${inner}`, name: stripStamp(inner) }));
    },
    // 备份分区列举（形同 listTrash，但 key 带 `backup/` 前缀 → restore/purgeTrash 经 splitKey 认得走 backupP）。
    async listBackup() {
      return (await backupP.keys()).map((inner) => ({ trashKey: `backup/${inner}`, name: stripStamp(inner) }));
    },
    // dir-index-cache：key=夹路径（""=根 → IDB 全键 "dir-index-cache/"），值=JSON 串装 Blob（store 自产自销，本层不解释）。
    async getDirIndexCache(folder) {
      const r = await dirIdxP.get(folder);
      return r ? await r.blob.text() : null;
    },
    async putDirIndexCache(folder, json) {
      await dirIdxP.put(folder, { blob: new Blob([json], { type: "application/json" }), updatedAt: Date.now() });
    },
    async clearDirIndexCache() {
      for (const k of await dirIdxP.keys())
        await dirIdxP.del(k);
    },
    // 0.11.6 明确登出：整分区清掉
    close() {
      bs.close();
    }
  };
}
function createStagingStore(dbName) {
  const bs = createPartitionedBlobStore(dbName);
  const p = bs.partition("staging");
  return {
    async get(key) {
      const r = await p.get(key);
      return r ? r.blob : null;
    },
    async put(key, blob) {
      await p.put(key, { blob, updatedAt: Date.now() });
    },
    async del(key) {
      await p.del(key);
    },
    async keys() {
      return p.keys();
    },
    close() {
      bs.close();
    }
  };
}
function createCollectionCache(dbName) {
  const idb = createIdbCache(dbName);
  return {
    async save(name, bytes) {
      const blob = bytes instanceof Blob ? bytes : new Blob([bytes]);
      await idb.put(name, { blob, updatedAt: Date.now() });
    },
    async get(name) {
      const r = await idb.get(name);
      return r ? r.blob : null;
    },
    async exists(name) {
      return await idb.get(name) !== void 0;
    },
    close() {
      idb.close();
    }
  };
}

// node_modules/@internal/store/dist/download-session.js
var EtagChangedError = class extends Error {
  constructor(name) {
    super(`\u4E91\u7AEF\u6587\u4EF6\u5DF2\u66F4\u65B0\uFF0C\u4E0B\u8F7D\u4F1A\u8BDD\u5931\u6548\uFF1A${name}`);
    this.name = "EtagChangedError";
  }
};
var CHUNK_DEFAULT = 2 * 1024 * 1024;
var CAP_DEFAULT = 256 * 1024 * 1024;
var mKey = (name) => `meta:${name}`;
var cKey = (name, i) => `chunk:${name}:${i}`;
function createDownloadSessions(cfg) {
  const { staging, fetchMeta, range, adoptLocal } = cfg;
  const chunkSize = cfg.chunkSize ?? CHUNK_DEFAULT;
  const capBytes = cfg.capBytes ?? CAP_DEFAULT;
  const now = cfg.now ?? (() => Date.now());
  let playbackBusy = 0;
  let playbackIdleWaiters = [];
  const playbackIdle = () => playbackBusy === 0 ? Promise.resolve() : new Promise((r) => playbackIdleWaiters.push(r));
  function playbackDone() {
    playbackBusy--;
    if (playbackBusy === 0) {
      const ws = playbackIdleWaiters;
      playbackIdleWaiters = [];
      for (const w of ws)
        w();
    }
  }
  let pinChain = Promise.resolve();
  const inflight = /* @__PURE__ */ new Map();
  const activeSessions = /* @__PURE__ */ new Set();
  const sGet = async (k) => {
    try {
      return await staging.get(k);
    } catch (e) {
      reportStoreError(e, "log");
      return null;
    }
  };
  const sPut = async (k, b) => {
    try {
      await staging.put(k, b);
    } catch (e) {
      reportStoreError(e, "log");
    }
  };
  async function readMeta(name) {
    try {
      const b = await sGet(mKey(name));
      if (!b)
        return null;
      const p = JSON.parse(await b.text());
      return p?.v === 1 && typeof p.eTag === "string" && Array.isArray(p.chunks) ? p : null;
    } catch (e) {
      reportStoreError(e, "log");
      return null;
    }
  }
  async function writeMeta(name, m) {
    await sPut(mKey(name), new Blob([JSON.stringify(m)], { type: "application/json" }));
  }
  async function purgeName(name) {
    try {
      const prefix = `chunk:${name}:`;
      for (const k of await staging.keys())
        if (k === mKey(name) || k.startsWith(prefix))
          await staging.del(k);
    } catch (e) {
      reportStoreError(e, "log");
    }
  }
  async function enforceCap() {
    try {
      const metas = [];
      for (const k of await staging.keys()) {
        if (!k.startsWith("meta:"))
          continue;
        const name = k.slice(5);
        const meta = await readMeta(name);
        if (meta)
          metas.push({ name, meta });
      }
      let total = metas.reduce((s, x) => s + x.meta.chunks.length * x.meta.chunkBytes, 0);
      if (total <= capBytes)
        return;
      metas.sort((a, b) => a.meta.touchedAt - b.meta.touchedAt);
      for (const { name, meta } of metas) {
        if (total <= capBytes)
          break;
        if (activeSessions.has(name))
          continue;
        await purgeName(name);
        total -= meta.chunks.length * meta.chunkBytes;
      }
    } catch (e) {
      reportStoreError(e, "log");
    }
  }
  async function coverage(name) {
    const m = await readMeta(name);
    if (!m)
      return null;
    const nChunks = Math.max(1, Math.ceil(m.totalBytes / m.chunkBytes));
    const got = new Set(m.chunks);
    const sizeOf = (i) => Math.min(m.chunkBytes, m.totalBytes - i * m.chunkBytes);
    let bytes = 0;
    for (const i of got)
      if (i >= 0 && i < nChunks)
        bytes += sizeOf(i);
    let headBytes = 0;
    for (let i = 0; i < nChunks && got.has(i); i++)
      headBytes += sizeOf(i);
    return { totalBytes: m.totalBytes, bytes, headBytes, complete: headBytes === m.totalBytes, eTag: m.eTag };
  }
  async function promoteFromStaging(name) {
    const m = await readMeta(name);
    if (!m)
      return "none";
    const nChunks = Math.max(1, Math.ceil(m.totalBytes / m.chunkBytes));
    const parts = [];
    let size = 0;
    for (let i = 0; i < nChunks; i++) {
      const c = await sGet(cKey(name, i));
      if (!c)
        return "incomplete";
      parts.push(c);
      size += c.size;
    }
    if (size !== m.totalBytes)
      return "incomplete";
    await adoptLocal(name, new Blob(parts), m.eTag);
    await purgeName(name);
    return "done";
  }
  async function open(name) {
    const cm0 = await fetchMeta(name);
    if (!cm0)
      return null;
    const { etag, size, item } = cm0;
    const prev = await readMeta(name);
    if (prev && prev.eTag !== etag)
      await purgeName(name);
    const meta = prev && prev.eTag === etag ? { ...prev, touchedAt: now() } : { v: 1, eTag: etag, totalBytes: size, chunkBytes: chunkSize, chunks: [], touchedAt: now() };
    const got = new Set(meta.chunks);
    await writeMeta(name, meta);
    const nChunks = Math.max(1, Math.ceil(size / chunkSize));
    let closed = false;
    activeSessions.add(name);
    function fetchChunk(i, prio) {
      const key = `${name}:${i}`;
      const existing = inflight.get(key);
      if (existing)
        return existing;
      const job = (async () => {
        const cached = await sGet(cKey(name, i));
        if (cached)
          return new Uint8Array(await cached.arrayBuffer());
        if (prio === "pin")
          await playbackIdle();
        const off = i * chunkSize;
        const len = Math.min(chunkSize, size - off);
        const bytes = await range(item, off, len);
        await sPut(cKey(name, i), new Blob([bytes]));
        if (!got.has(i)) {
          got.add(i);
          meta.chunks = [...got];
          meta.touchedAt = now();
          await writeMeta(name, meta);
        }
        void enforceCap();
        return bytes;
      })();
      inflight.set(key, job);
      job.finally(() => inflight.delete(key)).catch(() => {
      });
      return job;
    }
    function playbackChunk(i) {
      playbackBusy++;
      return fetchChunk(i, "playback").finally(playbackDone);
    }
    function pinChunk(i) {
      const job = pinChain.then(() => fetchChunk(i, "pin"));
      pinChain = job.catch(() => {
      });
      return job;
    }
    const clampRange = (offset, length) => {
      const off = Math.max(0, Math.min(offset, size));
      const len = Math.max(0, Math.min(length, size - off));
      return { i0: Math.floor(off / chunkSize), i1: len === 0 ? -1 : Math.floor((off + len - 1) / chunkSize), off, len };
    };
    const havedBytes = () => [...got].reduce((s, i) => s + Math.min(chunkSize, size - i * chunkSize), 0);
    return {
      name,
      totalSize: size,
      eTag: etag,
      async read(offset, length) {
        if (closed)
          throw new Error(`\u4F1A\u8BDD\u5DF2\u5173\u95ED\uFF1A${name}`);
        const { i0, i1, off, len } = clampRange(offset, length);
        if (len === 0)
          return new Uint8Array(0);
        const chunks = await Promise.all(Array.from({ length: i1 - i0 + 1 }, (_, k) => playbackChunk(i0 + k)));
        const out = new Uint8Array(len);
        let written = 0;
        for (let i = i0; i <= i1; i++) {
          const c = chunks[i - i0];
          const chunkStart = i * chunkSize;
          const from = Math.max(off, chunkStart) - chunkStart;
          const to = Math.min(off + len, chunkStart + c.length) - chunkStart;
          out.set(c.subarray(from, to), written);
          written += to - from;
        }
        return out;
      },
      async prefetch(offset, length) {
        if (closed)
          return;
        const { i0, i1 } = clampRange(offset, length);
        for (let i = i0; i <= i1; i++) {
          try {
            await pinChunk(i);
          } catch (e) {
            reportStoreError(e, "log");
          }
        }
      },
      havedBytes,
      async promote(opts) {
        if (closed)
          throw new Error(`\u4F1A\u8BDD\u5DF2\u5173\u95ED\uFF1A${name}`);
        for (let i = 0; i < nChunks; i++) {
          if (!got.has(i))
            await pinChunk(i);
          opts?.onProgress?.(havedBytes(), size);
        }
        const nowMeta = await fetchMeta(name);
        if (!nowMeta || nowMeta.etag !== etag) {
          await purgeName(name);
          throw new EtagChangedError(name);
        }
        const parts = [];
        for (let i = 0; i < nChunks; i++) {
          const c = await sGet(cKey(name, i));
          parts.push(c ?? new Blob([await pinChunk(i)]));
        }
        const asmSize = parts.reduce((s, p) => s + p.size, 0);
        if (asmSize !== size) {
          await purgeName(name);
          throw new Error(`staging \u7EC4\u88C5\u5C3A\u5BF8\u4E0D\u7B26\uFF08${name}\uFF1A${asmSize}\u2260${size}\uFF09\uFF0C\u5DF2\u6E05\u91CD\u4E0B`);
        }
        await adoptLocal(name, new Blob(parts), etag);
        await purgeName(name);
      },
      close() {
        closed = true;
        activeSessions.delete(name);
      }
    };
  }
  return { open, coverage, promoteFromStaging, purgeName, _enforceCap: enforceCap };
}

// node_modules/@internal/store/dist/kv-namespace.js
function namespacedKv(kv, ns) {
  if (!ns)
    throw new Error("namespacedKv: ns \u5FC5\u586B\uFF08${appId}.${databaseId}\uFF09");
  const prefix = `${ns}.`;
  return {
    get: (k) => kv.get(prefix + k),
    set: (k, v) => kv.set(prefix + k, v),
    remove: (k) => kv.remove(prefix + k),
    keys: () => (kv.keys?.() ?? []).filter((k) => k.startsWith(prefix)).map((k) => k.slice(prefix.length))
  };
}

// node_modules/@internal/store/dist/migration.js
function parseSchemaVersion(v) {
  const m = /^v(\d{3,})-(\d{8})$/.exec(v);
  if (!m)
    return null;
  return { seq: Number(m[1]), date: m[2] };
}
function needsMigration(current2, target) {
  const t = parseSchemaVersion(target);
  if (!t)
    throw new Error(`\u975E\u6CD5 target schema \u7248\u672C\u6233: ${target}`);
  if (current2 == null)
    return true;
  const c = parseSchemaVersion(current2);
  if (!c)
    return true;
  return c.seq < t.seq;
}
function storeNamespace(appId, databaseId) {
  if (!appId)
    throw new Error("storeNamespace: appId \u5FC5\u586B\u2014\u2014\u540C origin \u5144\u5F1F PWA \u9694\u79BB\u7684\u7EA2\u7EBF\uFF0C\u4E0D\u7ED9\u4F1A\u5171\u7528\u4E00\u4E2A\u5E93");
  if (!databaseId)
    throw new Error("storeNamespace: databaseId \u5FC5\u586B\u2014\u2014\u540C app \u591A store \u5B9E\u4F8B\u9694\u79BB\uFF08\u9ED8\u8BA4 defaultStore\uFF09");
  const root = `${appId}.${databaseId}`;
  return { root, dbName: root, schemaKey: "database-version" };
}
var MIGRATIONS = [];
async function runMigrations(ctx, migrations = MIGRATIONS) {
  for (const m of migrations) {
    if (!needsMigration(ctx.kv.get(ctx.ns.schemaKey), m.version))
      continue;
    ctx.log?.(`[migration] \u2192 ${m.version}: ${m.describe}`);
    await m.run(ctx);
    ctx.kv.set(ctx.ns.schemaKey, m.version);
  }
}
function localStorageMigrationKv() {
  const ls = globalThis.localStorage;
  if (!ls)
    throw new Error("localStorageMigrationKv: \u65E0 localStorage");
  return {
    get: (k) => ls.getItem(k),
    set: (k, v) => ls.setItem(k, v),
    remove: (k) => ls.removeItem(k),
    keys: () => Object.keys(ls)
  };
}
async function runStoreMigrations(appId, databaseId, log) {
  const ns = storeNamespace(appId, databaseId);
  const kv = namespacedKv(localStorageMigrationKv(), ns.root);
  await runMigrations({ kv, ns, log });
}

// node_modules/@internal/store/dist/zip-peek.js
var SIG_EOCD = 101010256;
var SIG_CD = 33639248;
var SIG_LOCAL = 67324752;
var LOCAL_HEADER_EXTRA_SLACK = 4096;
function tailStart(src) {
  return src.totalSize - src.tail.length;
}
async function readAbs(src, off, len) {
  if (len <= 0)
    return new Uint8Array(0);
  const ts = tailStart(src);
  if (off >= ts && off + len <= src.totalSize) {
    const s = off - ts;
    return src.tail.subarray(s, s + len);
  }
  return await src.range(off, len);
}
function findEOCD(tail) {
  if (tail.length < 22)
    return -1;
  const dv = new DataView(tail.buffer, tail.byteOffset, tail.byteLength);
  for (let i = tail.length - 22; i >= 0; i--) {
    if (dv.getUint32(i, true) !== SIG_EOCD)
      continue;
    const commentLen = dv.getUint16(i + 20, true);
    if (i + 22 + commentLen === tail.length)
      return i;
  }
  return -1;
}
function parseCD(cd) {
  const dv = new DataView(cd.buffer, cd.byteOffset, cd.byteLength);
  const entries = [];
  let p = 0;
  while (p + 46 <= cd.length) {
    if (dv.getUint32(p, true) !== SIG_CD)
      break;
    const method = dv.getUint16(p + 10, true);
    const compSize = dv.getUint32(p + 20, true);
    const nameLen = dv.getUint16(p + 28, true);
    const extraLen = dv.getUint16(p + 30, true);
    const commLen = dv.getUint16(p + 32, true);
    const localOff = dv.getUint32(p + 42, true);
    const name = new TextDecoder().decode(cd.subarray(p + 46, p + 46 + nameLen));
    entries.push({ name, method, compSize, nameLen, localOff });
    p += 46 + nameLen + extraLen + commLen;
  }
  return entries;
}
async function readCentralDirectory(src) {
  const eocd = findEOCD(src.tail);
  if (eocd < 0)
    return null;
  const dv = new DataView(src.tail.buffer, src.tail.byteOffset, src.tail.byteLength);
  const cdSize = dv.getUint32(eocd + 12, true);
  const cdOffset = dv.getUint32(eocd + 16, true);
  if (cdSize <= 0 || cdOffset + cdSize > src.totalSize)
    return null;
  const cd = await readAbs(src, cdOffset, cdSize);
  if (!cd || cd.length < cdSize)
    return null;
  return parseCD(cd);
}
async function inflate(raw, method) {
  if (method === 0)
    return raw.slice();
  if (method === 8) {
    if (typeof DecompressionStream === "undefined")
      return null;
    const ds = new DecompressionStream("deflate-raw");
    const stream = new Blob([raw]).stream().pipeThrough(ds);
    return new Uint8Array(await new Response(stream).arrayBuffer());
  }
  return null;
}
async function readEntryBytes(src, entry) {
  const guess = 30 + entry.nameLen + LOCAL_HEADER_EXTRA_SLACK + entry.compSize;
  const chunk = await readAbs(src, entry.localOff, Math.min(guess, src.totalSize - entry.localOff));
  if (!chunk || chunk.length < 30)
    return null;
  const dv = new DataView(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  if (dv.getUint32(0, true) !== SIG_LOCAL)
    return null;
  const nameLen = dv.getUint16(26, true);
  const extraLen = dv.getUint16(28, true);
  const dataStart = 30 + nameLen + extraLen;
  let raw;
  if (dataStart + entry.compSize <= chunk.length) {
    raw = chunk.subarray(dataStart, dataStart + entry.compSize);
  } else {
    raw = await readAbs(src, entry.localOff + dataStart, entry.compSize);
  }
  if (!raw)
    return null;
  return await inflate(raw, entry.method);
}

// node_modules/@internal/store/dist/persistence.js
var globalStorage = () => globalThis.navigator?.storage ?? null;
async function queryStoragePersistence(sm = globalStorage()) {
  if (typeof sm?.persisted !== "function")
    return { supported: false, persisted: false };
  try {
    return { supported: true, persisted: await sm.persisted() };
  } catch {
    return { supported: false, persisted: false };
  }
}
async function requestStoragePersistence(sm = globalStorage()) {
  if (typeof sm?.persist !== "function")
    return "unsupported";
  try {
    if (sm.persisted && await sm.persisted())
      return "granted";
    return await sm.persist() ? "granted" : "denied";
  } catch {
    return "unsupported";
  }
}

// node_modules/@internal/store/dist/ui-text.js
var STORE_TEXT_EN = {
  "sync.pushing": "Syncing\u2026",
  "file.renaming": "Renaming\u2026",
  "file.pulling": "Pulling\u2026",
  "cloud.checking": "Checking cloud\u2026",
  "file.deleting": "Deleting\u2026",
  "trash.restoring": "Restoring\u2026",
  "trash.purging": "Deleting permanently\u2026",
  "trash.emptyTrash": "Emptying trash\u2026",
  "trash.emptyBackups": "Emptying backup box\u2026",
  "file.encrypting": "Encrypting {name}\u2026",
  "file.decrypting": "Decrypting {name}\u2026",
  "file.rekeying": "Re-keying {name}\u2026",
  "file.reuploading": "Re-uploading\u2026",
  "folder.creating": "Creating folder\u2026",
  "folder.deleting": "Deleting folder\u2026"
};
function interpolate(s, params2) {
  if (!params2)
    return s;
  return s.replace(/\{(\w+)\}/g, (m, k) => k in params2 ? params2[k] : m);
}
function resolveStoreText(custom, key, params2) {
  const fromHost = custom?.(key, params2);
  if (fromHost != null)
    return fromHost;
  const base = STORE_TEXT_EN[key];
  return base != null ? interpolate(base, params2) : String(key);
}

// node_modules/@internal/store/dist/create-store.js
var ReadOnlyFilesError = class extends Error {
  constructor(op) {
    super(`\u53EA\u8BFB\u955C\u50CF\uFF1Afiles \u9762\u4E0D\u53EF\u5199\uFF08${op}\uFF09`);
    this.name = "ReadOnlyFilesError";
  }
};
var StoreDisposedError = class extends Error {
  constructor(op) {
    super(`store \u5DF2 dispose${op ? `\uFF08${op}\uFF09` : ""}\uFF0C\u62D2\u7EDD\u540E\u7EED\u8C03\u7528`);
    this.name = "StoreDisposedError";
  }
};
function localStorageKv() {
  const ls = globalThis.localStorage;
  if (!ls)
    throw new Error("createStore: \u65E0 localStorage\uFF0C\u8BF7\u6CE8\u5165 kv");
  return { get: (k) => ls.getItem(k), set: (k, v) => ls.setItem(k, v), remove: (k) => ls.removeItem(k), keys: () => Object.keys(ls) };
}
function createStore(config) {
  const { provider, ui, appId, databaseId = "defaultStore", kv: rawKv = localStorageKv(), validateAdopt: validateAdopt2, autoCacheOpenedFile = true } = config;
  const roGuard = (op) => {
    if (config.readOnlyFiles)
      throw new ReadOnlyFilesError(op);
  };
  let _disposed = false;
  function rejectAfterDispose(obj) {
    const out = {};
    for (const [k, v] of Object.entries(obj))
      out[k] = typeof v === "function" ? (...a) => {
        if (_disposed)
          throw new StoreDisposedError(k);
        return v(...a);
      } : v;
    return out;
  }
  if (!appId)
    throw new Error("createStore: appId \u5FC5\u586B\u2014\u2014\u540C origin \u5144\u5F1F PWA \u9694\u79BB\u7684\u7EA2\u7EBF\uFF08\u6BCF\u4E2A app \u5EFA\u81EA\u5DF1\u7684 IDB \u5E93\uFF09");
  if (config.persistence !== "app-managed" && config.persistence !== "none")
    throw new Error('createStore: persistence \u5FC5\u586B\uFF08"app-managed" | "none"\uFF09\u2014\u2014persist() \u63A5\u7EBF\u5FC5\u987B\u663E\u5F0F\u8868\u6001\uFF082026-08-27 \u62CD\u677F\uFF0C\u89C1 persistence.ts\uFF09');
  setStoreErrorReporter((err2, level) => ui.reportError(err2, level));
  if (config.persistence === "app-managed") {
    void queryStoragePersistence().then((st) => {
      if (st.supported && !st.persisted)
        ui.reportError(new Error("navigator.storage: origin not persisted yet \u2014 wire requestStoragePersistence() at a user gesture (best-effort layer, never load-bearing)"), "log");
    });
  }
  const ns = storeNamespace(appId, databaseId);
  const kv = namespacedKv(rawKv, ns.root);
  const ids = createIdentifiers(config.docKinds);
  const local = config.local ?? createLocalCache(ns.dbName, { identifiers: ids });
  const collectionLocal = config.local ?? createCollectionCache(ns.dbName);
  const rawOnline = config.isOnline ?? (() => globalThis.navigator?.onLine !== false);
  const signedIn = config.signedIn ?? (() => true);
  const isOnline = () => rawOnline() && signedIn();
  const getPassword2 = config.crypt?.getPassword ?? config.getPassword ?? (() => null);
  if (!config.encryption)
    throw new Error("createStore: config.encryption is required (pass createEncryption(), codec-less is fine) \u2014 no substitutes");
  if (config.reconcilePolicy !== "app-driven" && config.reconcilePolicy !== "none")
    throw new Error('createStore: config.reconcilePolicy is required ("app-driven" | "none") \u2014 declare who drives periodic reconcile');
  const enc = config.encryption;
  const toName = (cloudName) => ids.fromCloud(cloudName).identifier;
  const cloud = createCloudSync({ provider, kv, fileName: (n) => n, encFileName: (n) => ids.sealed(n), toName, appKey: "files", manageDirty: false, hidden: config.hidden, identifiers: ids });
  const collectionsCloud = createCloudSync({ provider, kv, fileName: (n) => `.${appId}/${n}.json`, appKey: "collections" });
  const sub = createSubstrate();
  const head = createLocalHead({
    kv,
    getCloudEtag: (n) => cloud.getETag(n),
    setCloudEtag: (n, e) => cloud.setETag(n, e),
    // 采纳云版时提交 durable etag（见 local-head.markSynced 注释：合 R1，非违规）
    keyPrefix: "files"
  });
  const migrationReady = config.skipMigration || !globalThis.localStorage ? Promise.resolve() : runStoreMigrations(appId, databaseId);
  const offloadMod = createOffload({ cloud, local, head, isOnline, serialize: sub.serialize });
  const CLOUD_GONE_GRACE_MS = 24 * 3600 * 1e3;
  const pendingGone = createPendingGone(kv, config.cloudGoneGraceMs ?? CLOUD_GONE_GRACE_MS);
  const reconcileMod = createReconcile({ cloud, local, head, pending: pendingGone, isOnline, activeIdentifier: config.activeIdentifier, hidden: config.hidden });
  const stagingStore = config.staging ?? createStagingStore(ns.dbName);
  const toU8Raw = async (raw) => raw instanceof Uint8Array ? raw : raw instanceof ArrayBuffer ? new Uint8Array(raw) : new Uint8Array(await raw.arrayBuffer());
  const sessions = createDownloadSessions({
    staging: stagingStore,
    fetchMeta: async (name) => {
      const m = await cloud.fetchMeta(name);
      return m ? { etag: m.etag, size: m.size, item: m.item } : null;
    },
    // 分片直连 provider.downloadRange（item.ref 已在开会话时解析——不每分片重走 metadata 往返）。
    range: async (item, offset, length) => toU8Raw(await provider.downloadRange(item.ref, offset, length)),
    // promote 落地：对齐 identity.acquire 语义（serialize 锁 + markSynced）；已有副本/dirty 绝不覆盖（§A）。
    adoptLocal: (name, blob, etag) => sub.serialize(name, async () => {
      if (await local.exists(name))
        return false;
      if (head.isDirtyAnywhere(name))
        return false;
      await local.save(name, blob);
      head.markSynced(name, etag);
      notifyFolderOf(name);
      return true;
    }),
    chunkSize: config.stagingChunkBytes,
    capBytes: config.stagingCapBytes
  });
  const FOLDERS_PENDING_KEY = "internal.pending_new_folders";
  const readPending = () => {
    try {
      const v = JSON.parse(kv.get(FOLDERS_PENDING_KEY) ?? "[]");
      return Array.isArray(v) ? v : [];
    } catch {
      return [];
    }
  };
  const writePending = (a) => kv.set(FOLDERS_PENDING_KEY, JSON.stringify([...new Set(a)]));
  const addPendingFolder = (p) => writePending([...readPending(), p]);
  const clearPendingFolder = (p) => writePending(readPending().filter((x) => x !== p));
  async function ensureFolderLocalFirst(path) {
    assertValidFileName(path, appId);
    cancelFolderDeletionForDescendant(path);
    addPendingFolder(path);
    if (isOnline()) {
      try {
        await cloud.ensureFolder(path);
        clearPendingFolder(path);
      } catch {
      }
    }
  }
  async function drainFolders() {
    if (!isOnline())
      return;
    for (const p of readPending()) {
      try {
        await cloud.ensureFolder(p);
        clearPendingFolder(p);
      } catch {
      }
    }
  }
  const FOLDER_DEL_KEY = "internal.pending_folder_deletions";
  const readFolderDel = () => {
    try {
      const v = JSON.parse(kv.get(FOLDER_DEL_KEY) ?? "[]");
      return Array.isArray(v) ? v : [];
    } catch {
      return [];
    }
  };
  const writeFolderDel = (a) => {
    const s = [...new Set(a)];
    if (s.length)
      kv.set(FOLDER_DEL_KEY, JSON.stringify(s));
    else
      kv.remove(FOLDER_DEL_KEY);
  };
  const enqueueFolderDel = (p) => writeFolderDel([...readFolderDel(), p]);
  const dequeueFolderDel = (p) => writeFolderDel(readFolderDel().filter((x) => x !== p));
  function cancelFolderDeletionForDescendant(path) {
    const q = readFolderDel();
    const keep = q.filter((f) => !(path === f || path.startsWith(`${f}/`)));
    if (keep.length !== q.length) {
      writeFolderDel(keep);
      for (const f of q)
        if (!keep.includes(f))
          notifyFolderOf(f);
    }
  }
  async function drainFolderDeletions() {
    if (!isOnline())
      return;
    const q = readFolderDel().sort((a, b) => b.split("/").length - a.split("/").length);
    for (const p of q) {
      let r;
      try {
        r = await cloud.deleteEmptyFolder(p);
      } catch (e) {
        ui.reportError(e, "warning");
        continue;
      }
      if (r.status === "list-failed")
        continue;
      dequeueFolderDel(p);
      notifyFolderOf(p);
    }
  }
  async function drainOfflineQueue() {
    await drainFolders();
    await uploadReplay.drain();
    await del.drainDeleteQueue();
    await drainFolderDeletions();
  }
  const listing = createListing({ cloud, local, head, pendingFolders: readPending, isPendingGone: (p) => pendingGone.isPending(p), pendingFolderDeletions: readFolderDel, hidden: config.hidden });
  const ctxNow = () => ({ signedIn: signedIn(), online: rawOnline() });
  const LOCAL_CTX = { signedIn: false, online: false };
  const folderWatchers = /* @__PURE__ */ new Map();
  const unAuth = provider.onAuthChanged?.((ev) => {
    if (ev.reason !== "signOut")
      return;
    void (async () => {
      try {
        await local.clearDirIndexCache?.();
      } catch (e) {
        ui.reportError(e, "log");
      }
      for (const f of [...folderWatchers.keys()])
        void pushLocalFrame(f);
    })();
  });
  const watcherOnError = /* @__PURE__ */ new WeakMap();
  function emitFolderError(folder, err2, phase) {
    const set = folderWatchers.get(folder);
    if (!set)
      return;
    for (const cb of set) {
      const h2 = watcherOnError.get(cb);
      if (h2) {
        try {
          h2(err2, phase);
        } catch (e) {
          ui.reportError(e);
        }
      }
    }
  }
  const SNAP_V = 1;
  async function readDirIndexCache(folder) {
    if (!local.getDirIndexCache)
      return null;
    try {
      const raw = await local.getDirIndexCache(folder);
      if (!raw)
        return null;
      const p = JSON.parse(raw);
      if (p?.v !== SNAP_V || !Array.isArray(p.files) || !Array.isArray(p.folders))
        return null;
      return p;
    } catch (e) {
      ui.reportError(e, "log");
      return null;
    }
  }
  function writeDirIndexCache(folder, live) {
    if (!local.putDirIndexCache || !live.complete)
      return;
    const files = live.files.filter((c) => !isHidden(c.name)).map((c) => ({ name: c.name, eTag: c.eTag, size: c.size, lastModified: toMs(c.lastModifiedDateTime), id: c.ref }));
    const folders = live.folders.filter((f) => !isHidden(f));
    void local.putDirIndexCache(folder, JSON.stringify({ v: SNAP_V, folder, savedAt: Date.now(), files, folders })).catch((e) => ui.reportError(e, "log"));
  }
  function emitFolder(folder, snap) {
    if (snap.folder !== folder) {
      ui.reportError(new Error(`watchFolder \u8DEF\u5F84\u9519\u4E71\uFF1A\u8BA2\u9605\u300C${folder}\u300D\u6536\u5230\u300C${snap.folder}\u300D\uFF0C\u5DF2\u4E22\u5F03`));
      return;
    }
    const set = folderWatchers.get(folder);
    if (!set)
      return;
    for (const cb of set) {
      try {
        cb(snap);
      } catch (e) {
        ui.reportError(e);
      }
    }
  }
  async function localFrameSnap(folder) {
    const stale = await readDirIndexCache(folder);
    return listing.listFolder(folder, LOCAL_CTX, stale ? { staleCloud: stale } : void 0);
  }
  async function pushLocalFrame(folder) {
    if (!folderWatchers.has(folder))
      return;
    try {
      emitFolder(folder, await localFrameSnap(folder));
    } catch (e) {
      ui.reportError(e);
      emitFolderError(folder, e, "local");
    }
  }
  async function pushRemoteFrame(folder) {
    if (!folderWatchers.has(folder))
      return;
    void ensureScaffold();
    const ctx = ctxNow();
    const live = ctx.online && ctx.signedIn ? await cloud.listFolder(folder).catch((e) => {
      ui.reportError(e, "log");
      return null;
    }) : null;
    await reconcileMod.reconcileFolder(folder, { cloudPrefetched: live }).catch((e) => ui.reportError(e));
    try {
      const stale = live ? null : await readDirIndexCache(folder);
      emitFolder(folder, await listing.listFolder(folder, ctx, stale ? { cloudPrefetched: live, staleCloud: stale } : { cloudPrefetched: live }));
    } catch (e) {
      ui.reportError(e);
      emitFolderError(folder, e, "remote");
    }
    if (live?.complete)
      writeDirIndexCache(folder, live);
  }
  function notifyFolderOf(name) {
    void pushLocalFrame(name.includes("/") ? name.slice(0, name.lastIndexOf("/")) : "");
  }
  function watchFolder(folder, cb, opts) {
    if (folder)
      assertValidFileName(folder, appId);
    let set = folderWatchers.get(folder);
    if (!set) {
      set = /* @__PURE__ */ new Set();
      folderWatchers.set(folder, set);
    }
    set.add(cb);
    if (opts?.onError)
      watcherOnError.set(cb, opts.onError);
    const fail = (e, phase) => {
      ui.reportError(e);
      try {
        opts?.onError?.(e, phase);
      } catch (e2) {
        ui.reportError(e2);
      }
    };
    void (async () => {
      try {
        await migrationReady;
      } catch (e) {
        fail(e, "local");
        return;
      }
      try {
        cb(await localFrameSnap(folder));
      } catch (e) {
        fail(e, "local");
      }
      await pushRemoteFrame(folder);
    })();
    return () => {
      const s = folderWatchers.get(folder);
      if (s) {
        s.delete(cb);
        if (!s.size)
          folderWatchers.delete(folder);
      }
    };
  }
  async function nameOccupied(name) {
    if (await local.exists(name))
      return "local";
    if (isOnline()) {
      try {
        if (await cloud.fetchMeta(name))
          return "cloud";
      } catch {
      }
    }
    return null;
  }
  const seal = createSeal({
    looksContainer: (b) => enc.looksEncryptedContainer(b),
    pack: (o) => enc.packContainer({ dataBytes: o.dataBytes, fileName: o.fileName, ext: o.ext, peek: o.peek, password: o.password }),
    unpack: (blob, pw) => enc.unpackContainer(blob, pw),
    getPassword: getPassword2,
    getPrev: (n) => local.get(n),
    makePeek: config.crypt?.makePeek
    // 明文→peek（app 域，如 ora 缩略图）；不给 → 容器无 peek
  });
  const safeResolve = createSafeResolve({
    cloud,
    local,
    head,
    localDirty: () => sub.edits.localDirty(),
    serialize: sub.serialize,
    // 0.15.2：拉云覆盖的临界段与用户保存的本地写同链互斥
    validateAdopt: validateAdopt2,
    unseal: (n, blob) => seal.unsealForRead(n, blob),
    // 返明文；加密但锁定 → null（safePull 退验封套）
    looksEncrypted: (b) => enc.looksEncryptedContainer(b)
  });
  const busyT = (label, fn) => ui.busy(resolveStoreText(ui.text, label), fn, label);
  const busyK = (key, params2, fn) => ui.busy(resolveStoreText(ui.text, key, params2), fn, key);
  const pushMod = createPush({ cloud, head, seal, safeResolve, serialize: sub.serialize, editVersion: () => sub.edits.version(), busy: busyT });
  const uploadReplayPolicy = config.offlineUploadReplay ?? "manual";
  if (uploadReplayPolicy !== "manual") {
    if (!ui.onReplayStatus)
      throw new Error("createStore: offlineUploadReplay\u2260'manual' \u9700 ui.onReplayStatus\uFF08ADR-0018 \u5F3A\u5236 UI \u63D0\u793A\uFF09");
    if (uploadReplayPolicy === "ask" && !ui.confirmReplay)
      throw new Error("createStore: offlineUploadReplay='ask' \u9700 ui.confirmReplay\uFF08\u56DE\u7EBF\u8BE2\u95EE\u7528\u6237\uFF09");
  }
  const pushBg = createPush({ cloud, head, seal, safeResolve, serialize: sub.serialize, editVersion: () => sub.edits.version(), busy: (_l, fn) => fn() });
  async function pushLocalBytes(name) {
    const blob = await local.get(name);
    if (!blob)
      return { status: "no-local" };
    const atRest = await toU8(blob instanceof Blob ? blob : new Blob([blob]));
    return pushBg.doPush(name, { encode: () => atRest });
  }
  const uploadReplay = createUploadReplay({
    kv,
    local,
    head,
    isOnline,
    serialize: sub.serialize,
    pushLocal: pushLocalBytes,
    policy: uploadReplayPolicy,
    confirm: ui.confirmReplay,
    onStatus: ui.onReplayStatus
  });
  const fresh = createFreshness({ cloud, head, safeResolve, busy: busyT });
  const del = createDelete({ cloud, local, head, kv, busy: busyT });
  const identity = createIdentity({
    cloud,
    local,
    head,
    doPush: pushMod.doPush,
    serialize: sub.serialize,
    serialize2: sub.serialize2,
    seal,
    busy: busyT,
    // 离线 move = 删+建（决策 1A/2）：在线走 identity 内的服务端原子 move；离线降级，复用 del.del 离线删 + uploadReplay 补推。
    isOnline,
    deleteOffline: (name) => del.del(name, { isOnline }).then(() => {
    }),
    // 完整离线删语义（move-aside + base-etag 云删排队 + null 守卫 + forget）
    queueUpload: (name) => uploadReplay.enqueue(name),
    // never-synced float 重连补推（ADR-0018）
    nameOccupied
    // 唯一占用检查（assertNameFree 据此抛）
  });
  const trashMod = createTrash({ cloud, local, head, busy: busyT });
  async function aggregateBox(box) {
    const cloudItems = await (box === "trash" ? cloud.listTrash() : cloud.listBackup());
    const localItems = box === "trash" ? local.listTrash ? await local.listTrash() : [] : local.listBackup ? await local.listBackup() : [];
    let live = /* @__PURE__ */ new Set();
    if (box === "trash" && localItems.length && isOnline()) {
      const all = await cloud.listAll().catch(() => null);
      if (all && all.complete)
        live = new Set(all.files.map((f) => f.name ?? f.path));
    }
    return mergeTrash(localItems, cloudItems, live, toName);
  }
  const DIRTY_PREFIX = "files.dirty:";
  const dirtyNames = () => kv.keys().filter((k) => k.startsWith(DIRTY_PREFIX) && kv.get(k) === "1").map((k) => k.slice(DIRTY_PREFIX.length));
  let _userWriteInFlight = null;
  function singleFlight(label, fn) {
    return (...a) => {
      if (_userWriteInFlight) {
        const e = new Error(`\u6709\u53E6\u4E00\u9879\u64CD\u4F5C\u8FDB\u884C\u4E2D\uFF08${_userWriteInFlight}\uFF09\uFF0C\u8BF7\u7B49\u5B83\u5B8C\u6210\u518D\u8BD5`);
        e.code = "STORE_BUSY";
        return Promise.reject(e);
      }
      _userWriteInFlight = label;
      return Promise.resolve().then(() => fn(...a)).finally(() => {
        _userWriteInFlight = null;
      });
    };
  }
  const delSF = singleFlight("\u5220\u9664", (n) => {
    uploadReplay.remove(n);
    return del.del(n, { isOnline });
  });
  const renameListeners = /* @__PURE__ */ new Set();
  const tryMoveSF = singleFlight("\u79FB\u52A8", async (from, to) => {
    const occ = await nameOccupied(to);
    if (occ)
      return { ok: false, reason: "name-collision", where: occ };
    const r = await identity.rename(from, to, { skipOccupiedCheck: true });
    notifyFolderOf(from);
    notifyFolderOf(to);
    for (const cb of renameListeners) {
      try {
        cb(from, to);
      } catch (e) {
        ui.reportError(e, "warning");
      }
    }
    return { ok: true, where: r.where, oldKept: r.oldKept, oldUnknown: r.oldUnknown, oldCloudOrphan: r.oldCloudOrphan, cloudDeferred: r.cloudDeferred, oldName: from };
  });
  const onConflictFor = (occasion) => async ({ name }) => {
    return ui.resolveConflict({ name, local: await local.get(name), cloud: null, occasion });
  };
  const onConflict = onConflictFor("push");
  async function encTailBytes(name, n, tryCloud) {
    const blob = await local.get(name);
    if (blob) {
      const b = blob instanceof Blob ? blob : new Blob([blob]);
      return b.slice(Math.max(0, b.size - n));
    }
    if (tryCloud && cloud.pullTail) {
      const t = await cloud.pullTail(name, n);
      return t ? new Blob([t.bytes]) : null;
    }
    return null;
  }
  async function openPeekSource(name, n, source) {
    const blob = source === "cloud" ? null : await local.get(name);
    if (blob) {
      const b = blob instanceof Blob ? blob : new Blob([blob]);
      const total = b.size;
      const tail = new Uint8Array(await b.slice(Math.max(0, total - n)).arrayBuffer());
      return { totalSize: total, tail, range: async (off, len) => new Uint8Array(await b.slice(off, off + len).arrayBuffer()) };
    }
    if (cloud.pullTail) {
      const t = await cloud.pullTail(name, n);
      if (!t)
        return null;
      const tail = t.bytes instanceof Uint8Array ? t.bytes : new Uint8Array(t.bytes);
      const total = t.item.size || tail.length;
      return {
        totalSize: total,
        tail,
        range: async (off, len) => {
          const r = cloud.pullRange ? await cloud.pullRange(name, off, len) : null;
          return r ? r.bytes instanceof Uint8Array ? r.bytes : new Uint8Array(r.bytes) : null;
        }
      };
    }
    return null;
  }
  async function decryptEncPeek(name, encPeek) {
    if (encPeek.type !== enc.ENC_PEEK_MIME)
      return encPeek;
    const parsed = enc.scanEncPeekFromEnd(new Uint8Array(await encPeek.arrayBuffer()));
    if (!parsed)
      return null;
    const plain = await seal.withPassword(name, (pw) => enc.decryptPeek(parsed, pw));
    return plain ? new Blob([plain]) : null;
  }
  async function encVerify(name, pw) {
    if (!pw)
      return false;
    const tail = await encTailBytes(name, enc.PEEK_TAIL_WINDOW, true);
    if (tail) {
      const p = enc.scanEncPeekFromEnd(new Uint8Array(await tail.arrayBuffer()));
      if (p) {
        try {
          await enc.decryptPeek(p, pw);
          return true;
        } catch {
          return false;
        }
      }
    }
    const full = await local.get(name);
    if (!full)
      return false;
    try {
      await enc.unpackContainer(full instanceof Blob ? full : new Blob([full]), pw);
      return true;
    } catch {
      return false;
    }
  }
  async function encIsEncrypted(name) {
    const blob = await local.get(name);
    return blob ? enc.looksEncryptedContainer(blob instanceof Blob ? blob : new Blob([blob])) : false;
  }
  async function encSwap(name, bytes, online, encrypted) {
    const prevEtag = cloud.getETag(name);
    const tracked = prevEtag != null;
    if (tracked && !online())
      return { status: "offline" };
    await local.save(name, bytes);
    if (!tracked)
      return { status: "swapped" };
    try {
      const { item } = await cloud.push(name, bytes, { baseEtag: head.seenBase(name), encrypted });
      if (!(item && item.eTag)) {
        head.onPushed(name, prevEtag, true);
        return { status: "cloud-deferred" };
      }
      head.onPushed(name, item.eTag, false);
      return { status: "swapped" };
    } catch (e) {
      head.onPushed(name, prevEtag, true);
      return { status: e?.name === "CloudConflictError" ? "conflict" : "cloud-deferred" };
    }
  }
  async function encEncrypt(name, online) {
    return busyK("file.encrypting", { name }, () => sub.serialize(name, async () => {
      const blob = await local.get(name);
      if (!blob)
        return { status: "no-local" };
      const asBlob = blob instanceof Blob ? blob : new Blob([blob]);
      if (await enc.looksEncryptedContainer(asBlob))
        return { status: "already" };
      if (cloud.getETag(name) != null && !online())
        return { status: "offline" };
      const pw = getPassword2(name);
      if (!pw)
        return { status: "locked" };
      let peek = null;
      if (config.crypt?.makePeek) {
        try {
          peek = await config.crypt.makePeek(asBlob);
        } catch {
          peek = null;
        }
      }
      const container = await enc.packContainer({ dataBytes: await toU8(asBlob), fileName: name, ext: cryptExtFor(name), peek, password: pw });
      return await encSwap(name, await toU8(container), online, true);
    }));
  }
  async function encDecrypt(name, online) {
    return busyK("file.decrypting", { name }, () => sub.serialize(name, async () => {
      const blob = await local.get(name);
      if (!blob)
        return { status: "no-local" };
      const asBlob = blob instanceof Blob ? blob : new Blob([blob]);
      if (!await enc.looksEncryptedContainer(asBlob))
        return { status: "not-encrypted" };
      if (cloud.getETag(name) != null && !online())
        return { status: "offline" };
      const res = await seal.withPassword(name, (pw) => enc.unpackContainer(asBlob, pw));
      if (!res)
        return { status: "locked" };
      return await encSwap(name, await toU8(res.dataBlob), online, false);
    }));
  }
  async function encRekey(name, newPassword, online) {
    if (!newPassword)
      throw new Error(`rekey: newPassword required (${name})`);
    return busyK("file.rekeying", { name }, () => sub.serialize(name, async () => {
      const blob = await local.get(name);
      if (!blob)
        return { status: "no-local" };
      const asBlob = blob instanceof Blob ? blob : new Blob([blob]);
      if (!await enc.looksEncryptedContainer(asBlob))
        return { status: "not-encrypted" };
      if (cloud.getETag(name) != null && !online())
        return { status: "offline" };
      const res = await seal.withPassword(name, (pw) => enc.unpackContainer(asBlob, pw));
      if (!res)
        return { status: "locked" };
      let peek = null;
      if (config.crypt?.makePeek) {
        try {
          peek = await config.crypt.makePeek(res.dataBlob);
        } catch {
          peek = null;
        }
      }
      const container = await enc.packContainer({ dataBytes: await toU8(res.dataBlob), fileName: name, ext: cryptExtFor(name), peek, password: newPassword });
      return await encSwap(name, await toU8(container), online, true);
    }));
  }
  function makeRaw(name, mode = "existing") {
    let _createChecked = mode !== "new";
    const readLocal = async () => {
      const blob = await local.get(name);
      if (!blob)
        return null;
      const asBlob = blob instanceof Blob ? blob : new Blob([blob]);
      return await seal.unsealForRead(name, asBlob);
    };
    return {
      async save(bytes, opts) {
        roGuard("save");
        await migrationReady;
        if (!_createChecked) {
          _createChecked = true;
          const where = await nameOccupied(name);
          if (where)
            throw new CloudNameCollisionError(name, where);
        }
        head.recordEdit(name);
        pendingGone.clear(name);
        cancelFolderDeletionForDescendant(name);
        const plain = await toU8(bytes);
        const sealed = await seal.sealForWrite(name, plain);
        const receipt = await sub.serialize(name, () => local.save(name, sealed, opts?.hint, "user-save"));
        if (receipt && typeof receipt === "object" && receipt.foreignOverwrite) {
          reportStoreError(new Error(`local overwrite conflict: "${name}" was written by another tab (rev ${receipt.foreignOverwrite.foreignRev}); their bytes were ${receipt.foreignOverwrite.backedUp ? "backed up before overwrite" : "overwritten (recent copy already in backup)"}`), "warning");
        }
        notifyFolderOf(name);
        if (opts?.tryPush === false)
          return { pushed: false, reason: "not-attempted" };
        let pushed = false, reason, resolution;
        try {
          const r = await pushMod.push(name, { encode: () => plain, onConflict, surfaceCollision: mode !== "new" });
          pushed = r.status === "pushed" || r.status === "healed" || r.status === "resolved";
          if (!pushed)
            reason = r.status;
          if (r.status === "resolved" && (r.resolution === "takeCloud" || r.resolution === "keepMine"))
            resolution = r.resolution;
        } catch (e) {
          ui.reportError(e);
          reason = "error";
        }
        if (head.isDirtyThisTab(name) && head.seenBase(name) == null)
          uploadReplay.enqueue(name);
        return { pushed, reason, resolution };
      },
      async open() {
        await migrationReady;
        if (await local.exists(name)) {
          const esc = isOnline() ? ui.offlineEscape?.() : void 0;
          try {
            await fresh.open(name, {
              isOnline,
              probe: esc?.probe,
              onNewer: onConflictFor("open"),
              localDirty: () => sub.edits.localDirty()
            }).catch((e) => ui.reportError(e));
          } finally {
            esc?.settle();
          }
          return readLocal();
        }
        if (autoCacheOpenedFile) {
          const esc = isOnline() ? ui.offlineEscape?.() : void 0;
          const pulling = identity.acquire(name, { localName: name }).catch((e) => {
            ui.reportError(e);
            return null;
          });
          try {
            await (esc ? Promise.race([pulling, esc.probe]) : pulling);
          } finally {
            esc?.settle();
          }
          return readLocal();
        }
        const pulled = await cloud.pull(name).catch((e) => {
          ui.reportError(e);
          return null;
        });
        return pulled ? await seal.unsealForRead(name, pulled.blob) : null;
      },
      // 头片 peek（0.15.0）：本地切片 / 云端 pullRange(0,n)，加密件 null，云端不可达抛（JSDoc 见 RawFile.getHead）。
      //   与 openPeekSource 同一路由纪律：source="cloud" 跳过本地分支；"local" 无本地才落云端。不经 openStream——那是 2 MiB
      //   分片 + staging tee 的流式面，为 10 KB 封面开会话是错的工具（每个 cloud-only tile 落 2 MiB 暂存）。
      async getHead(o) {
        await migrationReady;
        const n = Math.max(0, Math.floor(o.bytesLength));
        if (o.source !== "cloud") {
          const blob = await local.get(name);
          if (blob) {
            const b = blob instanceof Blob ? blob : new Blob([blob]);
            if (await enc.looksEncryptedContainer(b))
              return null;
            return b.slice(0, Math.min(n, b.size));
          }
        }
        if (!cloud.pullRange || !isOnline())
          return null;
        const r = await cloud.pullRange(name, 0, n);
        if (!r || r.encrypted)
          return null;
        return new Blob([r.bytes instanceof Uint8Array ? r.bytes : new Uint8Array(r.bytes)]);
      },
      pullIfClean(opts) {
        return fresh.refresh(name, { isOnline, ...opts });
      },
      // 事件驱动干净快进（clean→FF、dirty→no-op）；默认注入 store 的 isOnline（离线早退，不空跑 fetchMeta）
      tryMove(to) {
        roGuard("tryMove");
        return tryMoveSF(name, to);
      },
      async delete() {
        roGuard("delete");
        const r = await delSF(name);
        notifyFolderOf(name);
        return r;
      },
      // 返 DelResult（v436）：cancelled/noop/queuedCloudDelete 都不是「已删除」
      reupload() {
        roGuard("reupload");
        return busyK("file.reuploading", void 0, async () => {
          if (!await local.exists(name))
            return { status: "no-local" };
          pendingGone.clear(name);
          head.forget(name);
          head.recordEdit(name);
          const r = await pushLocalBytes(name);
          if (!head.isDirtyThisTab(name)) {
            pendingGone.clear(name);
            notifyFolderOf(name);
          }
          return r;
        });
      },
      isKeptOffline() {
        return local.exists(name);
      },
      // 有本地副本 = 已留作离线（无 LRU、无独立 pin flag）
      stagingCoverage() {
        return sessions.coverage(name);
      },
      // A5 透明面：只读账本，零网络（离线徽章/护栏用）
      async keepOffline(opts) {
        if (await local.exists(name))
          return;
        const runOnce = async () => {
          if (!isOnline()) {
            const r = await sessions.promoteFromStaging(name);
            if (r === "done")
              return;
            throw new Error(`\u79BB\u7EBF\u65E0\u6CD5\u7559\u79BB\u7EBF\uFF1A\u672C\u5730\u7F13\u5B58${r === "none" ? "\u6CA1\u6709" : "\u4E0D\u5B8C\u6574"}\uFF0C\u9700\u8981\u7F51\u7EDC\u8865\u9F50`);
          }
          let sess;
          try {
            sess = await sessions.open(name);
          } catch (e) {
            const r = await sessions.promoteFromStaging(name);
            if (r === "done")
              return;
            throw new Error(`\u7559\u79BB\u7EBF\u5931\u8D25\uFF1A\u4E91\u7AEF\u4E0D\u53EF\u8FBE\uFF08${e.message}\uFF09\uFF0C\u4E14\u672C\u5730\u7F13\u5B58${r === "none" ? "\u6CA1\u6709" : "\u4E0D\u5B8C\u6574"}`);
          }
          if (!sess)
            return;
          try {
            await sess.promote({ onProgress: opts?.onProgress });
          } finally {
            sess.close();
          }
        };
        try {
          await runOnce();
        } catch (e) {
          if (e instanceof EtagChangedError) {
            try {
              await runOnce();
              return;
            } catch (e2) {
              ui.reportError(e2);
              return;
            }
          }
          ui.reportError(e);
        }
      },
      async openStream() {
        await migrationReady;
        const blob = await local.get(name);
        if (blob) {
          const b = blob instanceof Blob ? blob : new Blob([blob]);
          return {
            totalSize: b.size,
            read: async (off, len) => new Uint8Array(await b.slice(Math.max(0, off), Math.min(b.size, Math.max(0, off) + Math.max(0, len))).arrayBuffer()),
            prefetch: async () => {
            },
            keep: async () => {
            },
            close: () => {
            }
          };
        }
        const sess = await sessions.open(name).catch((e) => {
          ui.reportError(e, "log");
          return null;
        });
        if (!sess)
          return null;
        return {
          totalSize: sess.totalSize,
          read: (off, len) => sess.read(off, len),
          prefetch: (off, len) => sess.prefetch(off, len),
          keep: (o) => sess.promote({ onProgress: o?.onProgress }),
          close: () => sess.close()
        };
      },
      async offload() {
        await offloadMod.offload(name);
        notifyFolderOf(name);
      },
      // 成功后重画本夹（badge 即时 → cloud-only）
      isEncrypted() {
        return encIsEncrypted(name);
      },
      encrypt(opts) {
        roGuard("encrypt");
        if (!ids.parse(name))
          throw new Error(`store: "${name}" is not a document of any declared kind and cannot be encrypted (docKinds: ${ids.kinds.map((k) => k.suffix).join(", ") || "none"})`);
        return encEncrypt(name, opts?.isOnline ?? isOnline);
      },
      decrypt(opts) {
        roGuard("decrypt");
        return encDecrypt(name, opts?.isOnline ?? isOnline);
      },
      rekey(opts) {
        roGuard("rekey");
        return encRekey(name, opts.newPassword, opts.isOnline ?? isOnline);
      },
      // at-rest 密文字节原样（内容盲、不解壳、不碰密码）。非加密件 / 无本地副本 → null。
      async getEncryptedBlob() {
        const blob = await local.get(name);
        if (!blob)
          return null;
        const asBlob = blob instanceof Blob ? blob : new Blob([blob]);
        if (!await enc.looksEncryptedContainer(asBlob))
          return null;
        return asBlob;
      },
      verifyPassword(pw) {
        return encVerify(name, pw);
      }
    };
  }
  function file(identifier, opts) {
    if (_disposed)
      throw new StoreDisposedError("file");
    assertValidFileName(identifier, appId);
    return rejectAfterDispose(makeRaw(identifier, opts.mode));
  }
  function zip(identifier, opts) {
    if (_disposed)
      throw new StoreDisposedError("zip");
    assertValidFileName(identifier, appId);
    const d = ids.parse(identifier);
    if (!d)
      throw new Error(`store.zip(): "${identifier}" is not a document of any declared kind (docKinds: ${ids.kinds.map((k) => k.suffix).join(", ") || "none"})`);
    if (d.container !== "zip")
      throw new Error(`store.zip(): "${identifier}" is a "${d.kind}" document whose container is "${d.container}", not "zip"; use store.file()`);
    const name = identifier;
    const raw = makeRaw(name, opts.mode);
    const getPeek = async (o) => {
      const src = await openPeekSource(name, o.bytesLength, o.source);
      if (!src)
        return null;
      const entries = await readCentralDirectory(src);
      if (!entries)
        return null;
      const encEntry = entries.find((e) => enc.CONTAINER_PEEK_ENTRIES.includes(e.name));
      if (encEntry) {
        const bytes2 = await readEntryBytes(src, encEntry);
        return bytes2 ? new Blob([bytes2], { type: enc.ENC_PEEK_MIME }) : null;
      }
      const target = entries.find((e) => e.name === o.zipEntry);
      if (!target)
        return null;
      const bytes = await readEntryBytes(src, target);
      return bytes ? new Blob([bytes]) : null;
    };
    const decryptPeekFn = (encPeek) => decryptEncPeek(name, encPeek);
    return rejectAfterDispose(Object.assign(raw, { getPeek, decryptPeek: decryptPeekFn }));
  }
  const _scaffoldNames = /* @__PURE__ */ new Set();
  const _scaffoldEnsured = /* @__PURE__ */ new Set();
  async function ensureScaffold() {
    if (!isOnline() || !signedIn() || _scaffoldEnsured.size >= _scaffoldNames.size)
      return;
    await migrationReady;
    try {
      await collectionsCloud.ensureFolder(`.${appId}`);
    } catch (e) {
      ui.reportError(e);
      return;
    }
    for (const name of _scaffoldNames) {
      if (_scaffoldEnsured.has(name))
        continue;
      try {
        if (!await collectionsCloud.fetchMeta(name).catch(() => null))
          await collectionsCloud.push(name, emptyCollectionBytes(), { baseEtag: null });
        _scaffoldEnsured.add(name);
      } catch (e) {
        ui.reportError(e);
      }
    }
  }
  function registerScaffold(name) {
    _scaffoldNames.add(name);
    void ensureScaffold();
  }
  const _collections = /* @__PURE__ */ new Map();
  function collection(name, opts = {}) {
    if (_disposed)
      throw new StoreDisposedError("collection");
    assertValidCollectionName(name);
    const cached = _collections.get(name);
    if (cached)
      return cached;
    const coll = rejectAfterDispose(createCollection({ cloud: collectionsCloud, name, local: collectionLocal, manual: opts.manual, getInitData: opts.getInitData }));
    registerScaffold(name);
    _collections.set(name, coll);
    return coll;
  }
  async function collectionPeek(name) {
    if (_disposed)
      throw new StoreDisposedError("collectionPeek");
    assertValidCollectionName(name);
    try {
      const meta = await collectionsCloud.fetchMeta(name);
      return meta ? "present" : "absent";
    } catch (e) {
      reportStoreError(e, "log");
      return "unknown";
    }
  }
  return {
    // ── file + collection。改身份走 file.tryMove(to)。──
    /** 文件对象工厂（含 tryMove/pullIfClean/save/open/delete/reupload…）。 */
    file,
    /** zip 容器文档（多 getPeek / decryptPeek）；种类不是 zip 容器 → 抛。 */
    zip,
    /** 身份的语法（0.16.0）：parse / join。gallery 和宿主直接用它，别再自己切名字。 */
    identifiers: ids,
    /** collection 工厂（app schema 全局单例；设置/状态全走它）。 */
    collection,
    /** collection 云端存在性探针（纯读零记账）："absent"=确认没有 / "present"=存在 / "unknown"=探不到（离线等，绝不当 absent）。 */
    collectionPeek,
    // ── files 命名空间。不暴露 list/listAll/localKeys（app 只放当前夹于内存；名字碰撞由 file.tryMove/mode:"new"
    //   内化检测，不靠「先 list 目标夹」；全库 listAll 仅库内 reconcile 用）。──
    /** 所有「不挂在单个 file 上」的文件域操作（列举订阅 / 文件夹增删 / 离线队列 / 回收站备份箱 / 名字占用 / 全库收敛）。
     *  **唯一列举面 = files.watchFolder（订阅当前夹）**：立即本地帧、云端到了同一 cb 再闪。 */
    files: rejectAfterDispose({
      /** 身份占用（**boolean**）：在线云端+本地都看，离线只看本地（靠 push conflictBehavior:fail 兜底）。app 新建/另存/改名前预检。0.16.0 起叫 occupied（原 nameOccupied）。 */
      occupied: (identifier) => nameOccupied(identifier).then((o) => o != null),
      /** persist 感知面（三件套之①）：纯查询快照（零弹窗，任何时刻可调）——app 画「本地缓存未受保护」badge 用。
       *  执行体（手势时刻调）= 顶层 export 的 requestStoragePersistence()；档位定性见 persistence.ts 头注释。 */
      persistence: () => queryStoragePersistence(),
      // ── dirty facet（0.4.0，2026-08-25 拍板 §1.3：聚合门面，别散一地）。绿灯门「先推完」按钮的读数与执行体。
      //   底层「不开文档推 dirty 项」路径此前**不存在**（uploadReplay 只管 never-synced float；已同步的
      //   dirty 只有下次 save 才补推）——按拍板「缺则此门面即其新家」，建在 pushLocalBytes（vetted push）之上。
      dirty: rejectAfterDispose({
        /** 有未推字节的文件**数**。⚠ 只返标量、永不返名字（与 usage 红线同口径——不是列举面，列举唯一面 =
         *  watchFolder）；bool 用 `count() > 0` 白送。口径 = durable dirty 轨（任何 tab 的未推都算）。 */
        count: async () => dirtyNames().length,
        /** 把所有 dirty 文件推上云（不开文档；per-name serialize 与用户操作互斥）。
         *  failed 返名字是**错误报告**不是列举面（量级=失败数）：离线/冲突/落地未确认都算失败留 dirty（0.15.1 起**加密锁定不再是失败原因**：at-rest 字节直推，不要密码），
         *  绝不谎报——绿灯门以 `count()===0` 为准，不以本方法返回为准。冲突不在这里弹面（batch 里不级联
         *  sheet）；名字留在 failed 里，用户打开该文件走正常 save/冲突面解决。 */
        pushAll: async () => {
          roGuard("dirty.pushAll");
          await migrationReady;
          let pushed = 0;
          const failed = [];
          for (const name of dirtyNames()) {
            const st = await sub.serialize(name, async () => {
              if (!head.isDirtyAnywhere(name))
                return "clean";
              try {
                const r = await pushLocalBytes(name);
                return r.status === "pushed" || r.status === "healed" ? "pushed" : "failed";
              } catch (e) {
                ui.reportError(e, "warning");
                return "failed";
              }
            });
            if (st === "pushed")
              pushed++;
            else if (st === "failed")
              failed.push(name);
          }
          return { pushed, failed };
        }
      }),
      /** 订阅**一个**文件夹（网盘模型）：立即本地帧 + 云端帧同一 cb 再闪；之后本夹任何本地写即时重推本地帧。返回退订。 */
      watchFolder,
      /** 0.14.0：身份变更事件——任何入口的 `file.tryMove` 成功后同步回调 `(from, to)`（库身份 = 全名；含离线 move 分支；撞名 ok:false 不发）。
       *  宿主按路径键的伴生数据（阅读位置 / 切章规则 / 缩略图缓存）据此跟着搬。返回退订。dispose 清空。 */
      onRenamed: (cb) => {
        renameListeners.add(cb);
        return () => {
          renameListeners.delete(cb);
        };
      },
      //   一次本地 IDB cursor（无网络），但仍是全表走一遍 → app 只在图库打开/刷新时调，别挂每帧。
      /** 本地已缓存文件的总占用（字节 + 件数），给 app 显示「本地存了多少」。**口径**：只量本库 files 分区，
       *  **不含** trash/backup/collections 分区、app 自己别的 IDB 库、纯云端未缓存的作品。
       *  ⚠ **只返两个标量、永不返名字** —— 它不是、也不能变成全库列举（列举唯一面 = watchFolder）。 */
      usage: () => local.usage(),
      /** 确保文件夹存在。**离线也能建**（本地登记 + 回线 drainOfflineQueue 补建）。 */
      ensureFolder: (path) => {
        roGuard("ensureFolder");
        return ensureFolderLocalFirst(path);
      },
      /** 新建空文件夹（gallery folder-tree；离线也能建，回线补建）。 */
      newFolder: singleFlight("\u65B0\u5EFA\u6587\u4EF6\u5939", (path) => {
        roGuard("newFolder");
        return busyK("folder.creating", void 0, async () => {
          await ensureFolderLocalFirst(path);
          notifyFolderOf(path);
        });
      }),
      // 子夹出现在父夹 → 重画父夹
      /** 删除**空**文件夹——「必须证实为空」库内强制（两端判空；非空/无法确认 → 抛错拒删）。 */
      deleteFolder: singleFlight("\u5220\u9664\u6587\u4EF6\u5939", (path) => {
        roGuard("deleteFolder");
        return busyK("folder.deleting", void 0, async () => {
          assertValidFileName(path, appId);
          const prefix = `${path}/`;
          if ((await local.appKeys()).some((k) => k.startsWith(prefix)))
            throw new Error(`\u6587\u4EF6\u5939\u975E\u7A7A\uFF08\u672C\u5730\u6709\u6587\u4EF6\uFF09\uFF0C\u62D2\u7EDD\u5220\u9664\uFF1A${path}`);
          const wasPending = readPending().includes(path);
          clearPendingFolder(path);
          if (!isOnline()) {
            if (wasPending) {
              notifyFolderOf(path);
              return;
            }
            enqueueFolderDel(path);
            notifyFolderOf(path);
            return;
          }
          const r = await cloud.deleteEmptyFolder(path);
          if (r.status === "non-empty")
            throw new Error(`\u6587\u4EF6\u5939\u975E\u7A7A\uFF0C\u62D2\u7EDD\u5220\u9664\uFF1A${path}`);
          if (r.status === "list-failed")
            throw new Error(`\u65E0\u6CD5\u786E\u8BA4\u6587\u4EF6\u5939\u662F\u5426\u4E3A\u7A7A\uFF08\u5217\u4E3E\u5931\u8D25\uFF09\uFF0C\u5DF2\u62D2\u7EDD\u5220\u9664\uFF1A${path}`);
          notifyFolderOf(path);
        });
      }),
      /** 离线队列统一重放（app 在 focus/visibility/online/boot 调）：新文件夹补建 → 新上传补推 → 删文件 → 删文件夹（按序）。 */
      drainOfflineQueue,
      //   conflictLive（离线删被 edit-wins 撤销→本地 trash 有、云端还活着）：仅当有本地 trash 项且能拿到**权威** live 列表时才判（离线/partial→空集→不误报）。
      /** 回收站列表：**本地↔云两端聚合**（mergeTrash）。只返元数据（trashKey/cloudItemId/原名/加密标志/conflictLive），绝不带 blob。 */
      listTrash: () => aggregateBox("trash"),
      /** 备份箱列表（同 listTrash 的两端聚合；备份箱是冲突 loser 留底，无 conflictLive 语义）。 */
      listBackup: () => aggregateBox("backup"),
      /** 从回收站/备份箱恢复一项。 */
      restoreTrash: singleFlight("\u6062\u590D", (...a) => {
        roGuard("restoreTrash");
        return trashMod.restore(...a);
      }),
      /** 彻底删除回收站/备份箱一项。 */
      purgeTrash: singleFlight("\u5F7B\u5E95\u5220\u9664", (...a) => {
        roGuard("purgeTrash");
        return trashMod.purge(...a);
      }),
      /** 清空回收站。 */
      emptyTrash: singleFlight("\u6E05\u7A7A\u56DE\u6536\u7AD9", (...a) => {
        roGuard("emptyTrash");
        return trashMod.emptyTrash(...a);
      }),
      /** 清空备份箱。 */
      emptyBackup: singleFlight("\u6E05\u7A7A\u5907\u4EFD\u7BB1", (...a) => {
        roGuard("emptyBackup");
        return trashMod.emptyBackup(...a);
      }),
      //   日常开夹的惰性收敛已在 watchFolder 内走 reconcileFolder（看到夹才收敛，同一 converge SSOT）。
      /** **全库** cloud-gone 收敛（去抖后 send trash）。**仅用户显式指令**（隐藏的「校验完整性」入口），
       *  绝不自动/轮询——全树 listAll 是重活。 */
      reconcileAll: (opts) => reconcileMod.reconcile({ activeFileName: opts?.activeIdentifier })
    }),
    // （encryption 面已随 @internal/encryption 立户退役 2026-08-28：加密是纯内容操作不属于同步引擎——
    //   app 用自己的 createEncryption 实例（无库模式也活着），store 只经 EncryptionPort 收同一实例。）
    // ── dispose（0.4.0，2026-08-25 拍板 §1.2）：停 watcher → drain in-flight push → 断 IDB 连接 → 拒后续。──
    /** 释放本 store 实例（切库/登出/多实例轮换用）。顺序：先拒新调用 + 停 watcher（不再有帧推给订阅者）→
     *  drain（默认 true：等 in-flight 的 push/写链收敛——正在推的字节**推完落账**，绝不半途掐；
     *  {drain:false} = 快速拆除，in-flight 操作会因连接关闭响亮失败、dirty 账还在下次补推）→ 关 IDB 连接。
     *  幂等。之后任何面（含 dispose 前已握着的 file/collection 对象）→ 抛 StoreDisposedError。
     *  ⚠ 不含 provider/auth 的登出（那是 app 侧 auth 的事）；错误上报单例 reporter 不重置（多实例共汇一处）。 */
    async dispose(opts) {
      if (_disposed)
        return;
      _disposed = true;
      renameListeners.clear();
      unAuth?.();
      folderWatchers.clear();
      if (opts?.drain !== false)
        await sub.drain();
      local.close?.();
      if (collectionLocal !== local)
        collectionLocal.close?.();
      stagingStore.close?.();
    }
    // 无 _internal —— app 绝不碰 head/cloud/sub（库内测试直接 import 对应模块）。
  };
}

// node_modules/@internal/store/dist/providers/graph.js
var GRAPH_BASE = "https://graph.microsoft.com/v1.0";
var SIMPLE_UPLOAD_LIMIT = 4 * 1024 * 1024;
function encodeSeg(name) {
  return encodeURIComponent(name).replace(/'/g, "%27");
}
function encodeApprootPath(path) {
  return path.split("/").filter(Boolean).map(encodeSeg).join("/");
}
function _rangeHeader(offset, length) {
  return offset == null ? `bytes=-${length}` : `bytes=${offset}-${offset + length - 1}`;
}
async function downloadRangeFromUrl(downloadUrl, offset, length) {
  const r = await fetch(downloadUrl, { headers: { Range: _rangeHeader(offset, length) } });
  if (!r.ok && r.status !== 206) {
    const err2 = new Error(`range download failed ${r.status}`);
    err2.status = r.status;
    throw err2;
  }
  return await r.arrayBuffer();
}
function createGraph(tokenSource) {
  const getToken2 = () => {
    if (!tokenSource)
      throw new Error("graph token source missing (page: createOneDriveProvider; SW: createGraph(createBridgeTokenSource(dbName)))");
    return tokenSource();
  };
  async function graphFetch(method, pathOrUrl, { headers = {}, body = null } = {}) {
    const token = await getToken2();
    const url = pathOrUrl.startsWith("http") ? pathOrUrl : `${GRAPH_BASE}${pathOrUrl}`;
    const init = { method, headers: { Authorization: `Bearer ${token}`, ...headers } };
    if (body != null) {
      if (typeof body === "string" || body instanceof ArrayBuffer || ArrayBuffer.isView(body) || body instanceof Blob) {
        init.body = body;
      } else {
        init.body = JSON.stringify(body);
        if (!init.headers["Content-Type"])
          init.headers["Content-Type"] = "application/json";
      }
    }
    let response;
    try {
      response = await fetch(url, init);
    } catch (e) {
      throw new CloudNetworkError(`Graph ${method} ${pathOrUrl}: network fetch failed (${String(e)})`, e);
    }
    if (!response.ok) {
      let detail = "";
      try {
        detail = await response.text();
      } catch (_) {
      }
      const err2 = new Error(`Graph ${method} ${pathOrUrl} \u2192 ${response.status}: ${detail}`);
      err2.status = response.status;
      err2.body = detail;
      throw err2;
    }
    return response;
  }
  async function listChildren(subfolder = "") {
    const pathPart = subfolder ? `:/${encodeApprootPath(subfolder)}:` : "";
    const items = [];
    let next = `/me/drive/special/approot${pathPart}/children?$top=200&$select=id,name,size,eTag,createdDateTime,lastModifiedDateTime,file,folder,@microsoft.graph.downloadUrl`;
    while (next) {
      let response;
      try {
        response = await graphFetch("GET", next);
      } catch (e) {
        if (e.status === 404 && subfolder)
          return [];
        throw e;
      }
      const page = await response.json();
      items.push(...page.value ?? []);
      next = page["@odata.nextLink"] ?? null;
    }
    return items;
  }
  async function getItemByPath(path) {
    try {
      const r = await graphFetch("GET", `/me/drive/special/approot:/${encodeApprootPath(path)}?$select=id,name,size,eTag,lastModifiedDateTime,folder,@microsoft.graph.downloadUrl`);
      return await r.json();
    } catch (e) {
      if (e.status === 404)
        return null;
      throw e;
    }
  }
  async function downloadItemBlob(itemId) {
    const dl = await getDownloadUrl(itemId);
    if (dl) {
      const r2 = await fetch(dl);
      if (!r2.ok)
        throw new Error(`downloadUrl failed ${r2.status}`);
      return await r2.blob();
    }
    const r = await graphFetch("GET", `/me/drive/items/${itemId}/content`);
    return await r.blob();
  }
  const _dlUrlCache = /* @__PURE__ */ new Map();
  async function downloadItemRange(itemId, offset, length) {
    let url = _dlUrlCache.get(itemId) ?? await getDownloadUrl(itemId);
    if (url) {
      _dlUrlCache.set(itemId, url);
      try {
        return await downloadRangeFromUrl(url, offset, length);
      } catch (_e) {
        _dlUrlCache.delete(itemId);
        url = await getDownloadUrl(itemId);
        if (url) {
          _dlUrlCache.set(itemId, url);
          return await downloadRangeFromUrl(url, offset, length);
        }
      }
    }
    const r = await graphFetch("GET", `/me/drive/items/${itemId}/content`, { headers: { Range: _rangeHeader(offset, length) } });
    return await r.arrayBuffer();
  }
  async function getDownloadUrl(itemId) {
    const r = await graphFetch("GET", `/me/drive/items/${itemId}`);
    const j = await r.json();
    return j["@microsoft.graph.downloadUrl"] || null;
  }
  async function uploadFileToApproot(path, blob, contentType = "application/octet-stream", { conflictBehavior = "replace", eTag = null } = {}) {
    if (conflictBehavior === "replace" && !eTag)
      throw new Error(`[graph] blind overwrite forbidden: conflictBehavior:"replace" requires If-Match eTag (${path})`);
    const headers = { "Content-Type": contentType };
    if (eTag)
      headers["If-Match"] = eTag;
    if (blob.size <= SIMPLE_UPLOAD_LIMIT) {
      const r = await graphFetch("PUT", `/me/drive/special/approot:/${encodeApprootPath(path)}:/content?@microsoft.graph.conflictBehavior=${conflictBehavior}`, { headers, body: blob });
      return r.json();
    }
    const sessR = await graphFetch("POST", `/me/drive/special/approot:/${encodeApprootPath(path)}:/createUploadSession`, {
      body: {
        item: {
          "@microsoft.graph.conflictBehavior": conflictBehavior,
          name: path.split("/").pop()
        }
      },
      headers: eTag ? { "If-Match": eTag } : void 0
    });
    const { uploadUrl } = await sessR.json();
    const CHUNK = 5 * 1024 * 1024;
    let offset = 0;
    let last = null;
    while (offset < blob.size) {
      const end = Math.min(offset + CHUNK, blob.size) - 1;
      const chunk = blob.slice(offset, end + 1);
      let r;
      try {
        r = await fetch(uploadUrl, {
          method: "PUT",
          headers: {
            "Content-Length": String(chunk.size),
            "Content-Range": `bytes ${offset}-${end}/${blob.size}`
          },
          body: chunk
        });
      } catch (e) {
        throw new CloudNetworkError(`Graph chunked upload PUT (${offset}-${end}/${blob.size}): network fetch failed (${String(e)})`, e);
      }
      if (!r.ok && r.status !== 202) {
        const err2 = new Error(`chunked upload failed ${r.status}`);
        err2.status = r.status;
        throw err2;
      }
      last = await r.json().then((j) => j).catch(() => null);
      offset = end + 1;
    }
    return last;
  }
  async function deleteItem(itemId, eTag) {
    await graphFetch("DELETE", `/me/drive/items/${itemId}`, eTag ? { headers: { "If-Match": eTag } } : {});
  }
  let _approotIdCache = null;
  const _subfolderIdCache = /* @__PURE__ */ new Map();
  function clearFolderCaches() {
    _approotIdCache = null;
    _subfolderIdCache.clear();
    _dlUrlCache.clear();
  }
  async function getApprootId() {
    if (_approotIdCache)
      return _approotIdCache;
    const r = await graphFetch("GET", "/me/drive/special/approot?$select=id");
    _approotIdCache = (await r.json()).id;
    return _approotIdCache;
  }
  async function ensureSubfolder(name) {
    if (!name)
      return getApprootId();
    const cached = _subfolderIdCache.get(name);
    if (cached !== void 0)
      return cached;
    try {
      const r = await graphFetch("GET", `/me/drive/special/approot:/${encodeApprootPath(name)}?$select=id,name,folder`);
      const item = await r.json();
      if (item.folder) {
        _subfolderIdCache.set(name, item.id);
        return item.id;
      }
      throw new Error(`${name} \u5DF2\u5B58\u5728\u4F46\u4E0D\u662F\u6587\u4EF6\u5939`);
    } catch (e) {
      if (e.status !== 404)
        throw e;
    }
    const segments = name.split("/").filter(Boolean);
    let parentId = await getApprootId();
    let cumulative = "";
    for (const seg of segments) {
      cumulative = cumulative ? `${cumulative}/${seg}` : seg;
      const cachedSeg = _subfolderIdCache.get(cumulative);
      if (cachedSeg !== void 0) {
        parentId = cachedSeg;
        continue;
      }
      try {
        const r2 = await graphFetch("GET", `/me/drive/special/approot:/${encodeApprootPath(cumulative)}?$select=id,folder`);
        const it2 = await r2.json();
        if (it2.folder) {
          parentId = it2.id;
          _subfolderIdCache.set(cumulative, parentId);
          continue;
        }
      } catch (e) {
        if (e.status !== 404)
          throw e;
      }
      const r = await graphFetch("POST", `/me/drive/items/${parentId}/children`, {
        body: {
          name: seg,
          folder: {},
          "@microsoft.graph.conflictBehavior": "fail"
        }
      });
      const it = await r.json();
      parentId = it.id;
      _subfolderIdCache.set(cumulative, parentId);
    }
    return parentId;
  }
  async function moveItemToFolder(itemId, targetFolderId, { eTag = null, newName = null, conflictBehavior = "fail" } = {}) {
    const headers = {};
    if (eTag)
      headers["If-Match"] = eTag;
    const body = {
      parentReference: { id: targetFolderId },
      "@microsoft.graph.conflictBehavior": conflictBehavior
    };
    if (newName)
      body.name = newName;
    const r = await graphFetch("PATCH", `/me/drive/items/${itemId}`, { headers, body });
    return r.json();
  }
  async function copyItemToFolder(itemId, targetFolderId, newName) {
    const res = await graphFetch("POST", `/me/drive/items/${itemId}/copy?@microsoft.graph.conflictBehavior=fail`, { body: { parentReference: { id: targetFolderId }, name: newName } });
    const monitor = res.headers.get("Location");
    if (!monitor) {
      const j = await res.json().catch(() => null);
      if (j && j.id)
        return j;
      throw new Error(`Graph copy ${itemId}: 202 without Location monitor`);
    }
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    for (let attempt = 1; attempt <= 170; attempt++) {
      let mr;
      try {
        mr = await fetch(monitor);
      } catch (e) {
        throw new CloudNetworkError(`Graph copy monitor: network fetch failed (${String(e)})`, e);
      }
      const j = await mr.json().catch(() => null);
      if (j?.status === "failed")
        throw new Error(`Graph copy ${itemId}: server reported failed`);
      const rid = j?.resourceId ?? (j?.status === "completed" ? j?.id : null);
      if (rid) {
        const ir = await graphFetch("GET", `/me/drive/items/${rid}`);
        return await ir.json();
      }
      await sleep(Math.min(250 * attempt, 2e3));
    }
    throw new Error(`Graph copy ${itemId}: monitor timeout (~5min)`);
  }
  async function renameItem(itemId, newName, eTag = null) {
    const headers = {};
    if (eTag)
      headers["If-Match"] = eTag;
    const r = await graphFetch("PATCH", `/me/drive/items/${itemId}`, {
      headers,
      body: { name: newName }
    });
    return r.json();
  }
  return {
    listChildren,
    getItemByPath,
    downloadItemBlob,
    downloadItemRange,
    getDownloadUrl,
    uploadFileToApproot,
    deleteItem,
    clearFolderCaches,
    getApprootId,
    ensureSubfolder,
    moveItemToFolder,
    copyItemToFolder,
    renameItem
  };
}

// node_modules/@internal/store/dist/providers/auth.js
var CLIENT_ID = "";
var AUTHORITY = "https://login.microsoftonline.com/common";
var SCOPES = ["Files.ReadWrite.AppFolder", "offline_access"];
var MSAL_URL = null;
function configureOneDriveAuth({ clientId, authority, scopes, msalUrl } = {}) {
  if (clientId)
    CLIENT_ID = clientId;
  if (authority)
    AUTHORITY = authority;
  if (scopes)
    SCOPES = scopes;
  if (msalUrl != null) {
    MSAL_URL = typeof document !== "undefined" && document.baseURI ? new URL(msalUrl, document.baseURI).href : null;
  }
}
function isAuthConfigured() {
  return typeof CLIENT_ID === "string" && CLIENT_ID.length > 0 && !CLIENT_ID.startsWith("REPLACE_ME");
}
var msalLoadPromise = null;
var pca = null;
var MSAL_TAIL_MAX = 40;
var _msalTail = [];
function _msalLog(level, message) {
  _msalTail.push(`${(/* @__PURE__ */ new Date()).toISOString().slice(11, 23)} L${level} ${message}`);
  if (_msalTail.length > MSAL_TAIL_MAX)
    _msalTail.splice(0, _msalTail.length - MSAL_TAIL_MAX);
  if (level <= 1)
    reportStoreError(new Error("[msal] " + message), "log");
}
function countRefreshTokens(homeAccountId) {
  try {
    const ls = globalThis.localStorage;
    if (!ls)
      return null;
    const prefix = homeAccountId ? homeAccountId.toLowerCase() + "-" : "";
    let n = 0;
    for (let i = 0; i < ls.length; i++) {
      const k = ls.key(i);
      if (k && k.includes("-refreshtoken-") && (!prefix || k.toLowerCase().startsWith(prefix)))
        n++;
    }
    return n;
  } catch {
    return null;
  }
}
function inspectMsalTokenCache(homeAccountId) {
  try {
    const ls = globalThis.localStorage;
    if (!ls)
      return null;
    const prefix = homeAccountId ? homeAccountId.toLowerCase() + "-" : "";
    const rts = [], ats = [];
    const fmt = (v) => {
      const n = Number(v);
      return Number.isFinite(n) && n > 0 ? new Date(n * 1e3).toISOString() : String(v ?? "-");
    };
    for (let i = 0; i < ls.length; i++) {
      const k = ls.key(i);
      if (!k)
        continue;
      const kl = k.toLowerCase();
      if (prefix && !kl.startsWith(prefix))
        continue;
      const isRt = kl.includes("-refreshtoken-"), isAt = kl.includes("-accesstoken-");
      if (!isRt && !isAt)
        continue;
      let ent = {};
      try {
        ent = JSON.parse(ls.getItem(k) ?? "{}");
      } catch {
      }
      const env = String(ent.environment ?? kl.split("-")[1] ?? "?");
      if (isRt)
        rts.push(`env=${env} familyId=${String(ent.familyId ?? "-")} expiresOn=${fmt(ent.expiresOn)}`);
      else
        ats.push(`env=${env} cachedAt=${fmt(ent.cachedAt)} expiresOn=${fmt(ent.expiresOn)} extExpiresOn=${fmt(ent.extendedExpiresOn)} target=${String(ent.target ?? "-").slice(0, 80)}`);
    }
    return { refreshTokens: rts, accessTokens: ats };
  } catch {
    return null;
  }
}
function _cacheLines(homeAccountId) {
  const c = inspectMsalTokenCache(homeAccountId);
  if (!c)
    return ["  msal-cache: (localStorage unavailable)"];
  return [
    `  msal-cache rt(${c.refreshTokens.length}):`,
    ...c.refreshTokens.map((l) => "    " + l),
    `  msal-cache at(${c.accessTokens.length}):`,
    ...c.accessTokens.map((l) => "    " + l)
  ];
}
function _logSilentFailure(where, account, e) {
  const err2 = e;
  const hid = typeof account?.homeAccountId === "string" ? account.homeAccountId : "";
  const lines = [
    `[auth] silent token renewal failed (${where}): name=${String(err2?.name ?? "?")} code=${String(err2?.errorCode ?? "?")} sub=${String(err2?.subError ?? "")} msg=${String(err2?.message ?? e).slice(0, 200)}`,
    `  account=${hid ? hid.slice(0, 8) + "\u2026" : "(none)"} refreshTokensInCache=${String(countRefreshTokens(hid || void 0))} scopes=${SCOPES.join(" ")} now=${(/* @__PURE__ */ new Date()).toISOString()}`,
    ..._cacheLines(hid || void 0),
    `  msal-tail(${_msalTail.length}):`,
    ..._msalTail.map((l) => "    " + l)
  ];
  reportStoreError(new Error(lines.join("\n")), "log");
}
var activeAccount = null;
var initPromise = null;
var INTERACTION_LATCH_MS = 6e4;
var _inflight = /* @__PURE__ */ new Map();
var _latched = /* @__PURE__ */ new Map();
function _isInteractionRequired(e) {
  const err2 = e;
  return err2?.name === "InteractionRequiredAuthError" || /^(login_required|interaction_required|consent_required)$/.test(String(err2?.errorCode ?? ""));
}
function _clearLatch() {
  _latched.clear();
}
function _acquireSingleFlight(key, account, where) {
  const l = _latched.get(key);
  if (l) {
    if (Date.now() < l.until) {
      l.suppressed++;
      return Promise.reject(l.err);
    }
    _latched.delete(key);
  }
  const inflight = _inflight.get(key);
  if (inflight)
    return inflight;
  const p = (async () => {
    try {
      const result = await pca.acquireTokenSilent({ scopes: SCOPES, account });
      return result.accessToken;
    } catch (e) {
      _logSilentFailure(where, account, e);
      if (_isInteractionRequired(e))
        _latched.set(key, { until: Date.now() + INTERACTION_LATCH_MS, err: e, suppressed: 0 });
      throw e;
    } finally {
      _inflight.delete(key);
    }
  })();
  _inflight.set(key, p);
  return p;
}
var _authSubs = /* @__PURE__ */ new Set();
function onAuthChanged(cb) {
  _authSubs.add(cb);
  return () => _authSubs.delete(cb);
}
function getAuthState() {
  return { signedIn: !!activeAccount, account: activeAccount };
}
function _emitAuth(reason) {
  const st = { ...getAuthState(), reason };
  for (const cb of _authSubs) {
    try {
      cb(st);
    } catch (_) {
    }
  }
}
var SCRIPT_LOAD_TIMEOUT_MS = 45e3;
function loadScript(url) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    let done = false;
    const settle = (fn) => {
      if (done)
        return;
      done = true;
      clearTimeout(timer);
      fn();
    };
    const timer = setTimeout(() => settle(() => {
      s.remove();
      reject(new Error(`timeout loading ${url}`));
    }), SCRIPT_LOAD_TIMEOUT_MS);
    s.src = url;
    s.async = true;
    s.onload = () => settle(resolve);
    s.onerror = () => settle(() => reject(new Error(`failed to load ${url}`)));
    document.head.appendChild(s);
  });
}
async function loadScriptWithRetry(url, attempts = 3) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      await loadScript(url);
      return;
    } catch (e) {
      lastErr = e;
      console.warn(`MSAL load attempt ${i + 1}/${attempts} failed`);
      if (i < attempts - 1)
        await new Promise((r) => setTimeout(r, 300 * (i + 1)));
    }
  }
  throw new Error(`MSAL load failed ${url}: ${lastErr?.message}`);
}
function loadMsal() {
  if (window.msal)
    return Promise.resolve(window.msal);
  if (msalLoadPromise)
    return msalLoadPromise;
  msalLoadPromise = (async () => {
    await loadScriptWithRetry(MSAL_URL);
    if (window.msal)
      return window.msal;
    msalLoadPromise = null;
    throw new Error("MSAL loaded but window.msal didn't appear");
  })().catch((e) => {
    msalLoadPromise = null;
    throw e;
  });
  return msalLoadPromise;
}
async function initAuth() {
  if (!isAuthConfigured()) {
    return { signedIn: false, account: null, notConfigured: true };
  }
  if (initPromise)
    return initPromise;
  initPromise = (async () => {
    const msal = await loadMsal();
    pca = new msal.PublicClientApplication({
      system: {
        loggerOptions: {
          logLevel: msal.LogLevel?.Info ?? 2,
          // 0 Error / 1 Warning / 2 Info / 3 Verbose / 4 Trace
          piiLoggingEnabled: false,
          loggerCallback: (level, message, containsPii) => {
            if (!containsPii)
              _msalLog(level, message);
          }
        }
      },
      auth: {
        clientId: CLIENT_ID,
        authority: AUTHORITY,
        redirectUri: location.origin + location.pathname,
        postLogoutRedirectUri: location.origin + location.pathname
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
        // 0.11.1（user 2026-08-31 批准 S3）：redirect 往返的临时缓存（request state / PKCE verifier / interaction 状态）
        //   MSAL 缺省放 sessionStorage——iOS 主屏 PWA 跳去微软页期间进程被杀（长画后内存紧张）→ sessionStorage 没了
        //   → 回程 handleRedirectPromise 对不上 state → 登录静默失败（案发 2026-08-31「点登录 OneDrive 挂不上」）。
        //   放 localStorage 即活过进程重启（MSAL 官方对 iOS PWA 的建议）。代价已核：① 弃置的 redirect（用户在微软页
        //   关掉）留下的 interaction_in_progress 由下次 boot 的 handleRedirectPromise 无 hash 分支 cleanRequestByInteractionType
        //   自清（vendored 3.27.0 已实证该分支）；② 两 tab 同时 redirect 登录会互撞 interaction_in_progress——单用户 app 可接受；
        //   ③ 暴露面无新类：access/refresh token 本就在 localStorage（cacheLocation）。
        temporaryCacheLocation: "localStorage"
      }
    });
    await pca.initialize();
    let response = null;
    try {
      response = await pca.handleRedirectPromise();
    } catch (e) {
      reportStoreError(new Error("[auth] sign-in redirect return failed (handleRedirectPromise): " + String(e?.message ?? e)), "error");
    }
    if (response?.account) {
      pca.setActiveAccount(response.account);
      activeAccount = response.account;
      _clearLatch();
      _emitAuth("signIn");
      return { signedIn: true, account: activeAccount };
    }
    const cached = pca.getAllAccounts();
    reportStoreError(new Error([`[auth] init: redirectResponse=no cachedAccounts=${cached.length} refreshTokensInCache=${String(countRefreshTokens())} now=${(/* @__PURE__ */ new Date()).toISOString()}`, ..._cacheLines()].join("\n")), "log");
    if (cached.length === 0)
      return { signedIn: false, account: null };
    _probeSilent(cached[0]);
    return { signedIn: false, account: null, probing: true, probedAccount: cached[0] };
  })().catch((e) => {
    initPromise = null;
    throw e;
  });
  return initPromise;
}
function _afterWindowLoad(fn) {
  const w = globalThis;
  if (!w.addEventListener || w.document?.readyState === "complete") {
    fn();
    return;
  }
  w.addEventListener("load", () => fn(), { once: true });
}
async function _probeSilent(account) {
  await new Promise((r) => _afterWindowLoad(r));
  try {
    await pca.acquireTokenSilent({ scopes: SCOPES, account });
    pca.setActiveAccount(account);
    activeAccount = account;
    _clearLatch();
    _emitAuth("silent");
  } catch (e) {
    _logSilentFailure("boot-probe", account, e);
  }
}
async function signIn(opts) {
  if (!pca)
    await initAuth();
  const request = { scopes: SCOPES, ...opts?.prompt ? { prompt: opts.prompt } : {} };
  if (opts?.mode === "popup") {
    const response = await pca.loginPopup(request);
    if (response?.account) {
      pca.setActiveAccount(response.account);
      activeAccount = response.account;
      _clearLatch();
      _emitAuth("signIn");
    }
    return response;
  }
  return pca.loginRedirect(request);
}
async function signOut() {
  if (!pca || !activeAccount)
    return;
  const account = activeAccount;
  activeAccount = null;
  _clearLatch();
  _emitAuth("signOut");
  try {
    await pca.clearCache({ account });
  } catch (e) {
    console.warn("clearCache failed:", e);
  }
  try {
    pca.setActiveAccount(null);
  } catch (_) {
  }
}
async function getToken() {
  if (!pca || !activeAccount)
    throw new Error("Not signed in");
  const account = activeAccount;
  try {
    return await _acquireSingleFlight(String(account?.homeAccountId ?? ""), account, "getToken");
  } catch (e) {
    if (activeAccount === account) {
      activeAccount = null;
      _emitAuth("expired");
    }
    throw e;
  }
}
function getActiveAccount() {
  return activeAccount;
}
function isSignedIn() {
  return !!activeAccount;
}
async function getTokenFor(homeAccountId) {
  if (!pca)
    await initAuth();
  if (!pca)
    throw new Error("Auth not initialized");
  const account = pca.getAccountByHomeId(homeAccountId);
  if (!account)
    throw new Error(`Account not signed in on this device: ${homeAccountId}`);
  return _acquireSingleFlight(homeAccountId, account, "getTokenFor");
}
async function retrySilentSignIn() {
  if (activeAccount)
    return true;
  if (!isAuthConfigured())
    return false;
  if (!pca) {
    try {
      await initAuth();
    } catch (_) {
      return false;
    }
  }
  if (!pca)
    return false;
  const cached = pca.getAllAccounts();
  if (cached.length === 0)
    return false;
  try {
    await pca.acquireTokenSilent({ scopes: SCOPES, account: cached[0] });
    pca.setActiveAccount(cached[0]);
    activeAccount = cached[0];
    _clearLatch();
    _emitAuth("silent");
    return true;
  } catch (e) {
    _logSilentFailure("retry-silent", cached[0], e);
    return false;
  }
}

// node_modules/@internal/store/dist/folder-delete.js
async function deleteEmptyFolderVia(getItemByPath, list, deleteById, path) {
  const item = await getItemByPath(path);
  if (!item)
    return { status: "already-gone" };
  if (!item.isFolder)
    throw new Error(`\u4E0D\u662F\u6587\u4EF6\u5939\uFF0C\u62D2\u7EDD\u5220\u9664\uFF1A${path}`);
  let children;
  try {
    children = await list(path);
  } catch {
    return { status: "list-failed" };
  }
  if (children.length)
    return { status: "non-empty" };
  await deleteById(item.ref, item.eTag);
  return { status: "deleted" };
}

// node_modules/@internal/store/dist/onedrive-provider.js
function toItem(it) {
  if (!it)
    return null;
  return {
    // ref ← Graph item id：OneDrive 的 ref 恰好=Graph id（改名/移动不作废）——那是**赠品不是契约**，
    //   消费方只能按 CloudItem.ref 的行李牌语义用（types.ts），绝不依赖其跨改名稳定性。
    ref: it.id,
    name: it.name,
    size: it.size || 0,
    eTag: it.eTag,
    lastModifiedDateTime: it.lastModifiedDateTime,
    isFolder: !!it.folder,
    // Graph: file facet vs folder facet
    path: it.path,
    downloadUrl: it["@microsoft.graph.downloadUrl"] || it.downloadUrl
  };
}
function graphToCloudProvider(graph) {
  if (!graph)
    throw new Error("graphToCloudProvider: graph transport \u5FC5\u4F20");
  const list = async (folder = "") => (await graph.listChildren(folder)).map(toItem);
  const getItemByPath = async (path) => toItem(await graph.getItemByPath(path));
  return {
    list,
    getItemByPath,
    download: (ref) => graph.downloadItemBlob(ref),
    downloadRange: (ref, offset, length) => graph.downloadItemRange(ref, offset, length),
    // graph.js 是 Blob 原生（按 .size 选简单/分块路径、用 .slice 切块）；lib 把字节归一成 Uint8Array。
    // 必须在这道接缝转回 Blob——Uint8Array.size===undefined → undefined<=4MB 为 false → 永远走分块、
    // while(0<undefined) 一个 chunk 都不传 → 上传 0 字节占位还回 etag（postmortem 2026-06-05 根因）。
    upload: (path, blob, { contentType = "application/octet-stream", eTag = null, conflictBehavior = "replace" } = {}) => {
      const body = blob instanceof Blob ? blob : new Blob([blob], { type: contentType });
      return graph.uploadFileToApproot(path, body, contentType, { conflictBehavior, eTag }).then(toItem);
    },
    // 文件硬删。⚠ 2026-08-25 修：旧版 `(id) => graph.deleteItem(id)` 把 eTag 吞了——purge 的 If-Match
    //   （v435 立的硬删守卫）从没到过 Graph，mock 比真机严（mock 校验 If-Match、真机根本没收到）。透传。
    delete: (ref, eTag) => graph.deleteItem(ref, eTag),
    // 删空夹（唯一文件夹删除面）：护栏在 folder-delete 深模块，If-Match folder etag best-effort。
    deleteEmptyFolder: (path) => deleteEmptyFolderVia(getItemByPath, list, (ref, etag) => graph.deleteItem(ref, etag), path),
    ensureFolder: (path) => graph.ensureSubfolder(path),
    move: (ref, folderRef, opts = {}) => graph.moveItemToFolder(ref, folderRef, opts).then(toItem),
    copy: (ref, folderRef, newName) => graph.copyItemToFolder(ref, folderRef, newName).then(toItem),
    rename: (ref, newName, eTag) => graph.renameItem(ref, newName, eTag).then(toItem),
    getApprootRef: () => graph.getApprootId()
  };
}

// node_modules/@internal/store/dist/providers/index.js
function createOneDriveProvider(config = {}) {
  configureOneDriveAuth(config);
  const hid = config.homeAccountId;
  const g = createGraph(hid ? () => getTokenFor(hid) : getToken);
  const provider = Object.assign(graphToCloudProvider(g), {
    onAuthChanged: (cb) => onAuthChanged((st) => cb({ signedIn: st.signedIn, reason: st.reason }))
  });
  return {
    provider,
    // CloudProvider（喂 createCloudSync）
    auth: { isAuthConfigured, initAuth, signIn, signOut, getToken, isSignedIn, getActiveAccount, retrySilentSignIn, onAuthChanged, getAuthState }
  };
}

// node_modules/@internal/encryption/dist/encryption.js
var SEVENZ_MAGIC = [55, 122, 188, 175, 39, 28];
var ZIP_MAGIC = [80, 75, 3, 4];
function _startsWith(u82, sig) {
  if (u82.length < sig.length)
    return false;
  for (let i = 0; i < sig.length; i++)
    if (u82[i] !== sig[i])
      return false;
  return true;
}
var PEEK_MAGIC = [158, 87, 80, 84, 72, 13, 10, 26];
var PEEK_VER = 1;
var PEEK_HEADER_LEN = 8 + 1 + 16 + 12 + 4;
var PEEK_MAX_LEN = 8 * 1024 * 1024;
var PBKDF2_ITERS = 25e4;
var PEEK_TAIL_WINDOW = 98304;
var ENC_PEEK_MIME = "application/x-sync-store-enc-peek";
var CONTAINER_PEEK_ENTRY = "peek";
var CONTAINER_PEEK_ENTRIES = [CONTAINER_PEEK_ENTRY];
var META_MAGIC = "WPMETA1\n";
function makeGuid() {
  return globalThis.crypto && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
}
var _keyCache = /* @__PURE__ */ new Map();
function _hex(u82) {
  return [...u82].map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function _deriveKey(password, salt) {
  const cacheKey = `${password}\0${_hex(salt)}`;
  const hit = _keyCache.get(cacheKey);
  if (hit)
    return hit;
  const subtle = globalThis.crypto.subtle;
  const base = await subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  const key = await subtle.deriveKey({ name: "PBKDF2", hash: "SHA-256", salt, iterations: PBKDF2_ITERS }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  _keyCache.set(cacheKey, key);
  return key;
}
async function encryptPeek(bytes, password) {
  const plain = bytes && bytes.length ? bytes : new Uint8Array(0);
  const salt = new Uint8Array(16), iv = new Uint8Array(12);
  globalThis.crypto.getRandomValues(salt);
  globalThis.crypto.getRandomValues(iv);
  const key = await _deriveKey(password, salt);
  const ct = new Uint8Array(await globalThis.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plain));
  const out = new Uint8Array(PEEK_HEADER_LEN + ct.length);
  out.set(PEEK_MAGIC, 0);
  out[8] = PEEK_VER;
  out.set(salt, 9);
  out.set(iv, 25);
  new DataView(out.buffer).setUint32(37, ct.length, true);
  out.set(ct, PEEK_HEADER_LEN);
  return out;
}
function scanEncPeekFromEnd(u82) {
  const n = u82.length;
  outer: for (let i = n - PEEK_HEADER_LEN; i >= 0; i--) {
    for (let k = 0; k < 8; k++)
      if (u82[i + k] !== PEEK_MAGIC[k])
        continue outer;
    const ver = u82[i + 8];
    if (ver !== PEEK_VER)
      continue;
    const len = new DataView(u82.buffer, u82.byteOffset + i + 37, 4).getUint32(0, true);
    if (len < 16 || len > PEEK_MAX_LEN || i + PEEK_HEADER_LEN + len > n)
      continue;
    return {
      start: i,
      end: i + PEEK_HEADER_LEN + len,
      ver,
      salt: u82.slice(i + 9, i + 25),
      iv: u82.slice(i + 25, i + 37),
      ct: u82.slice(i + PEEK_HEADER_LEN, i + PEEK_HEADER_LEN + len)
    };
  }
  return null;
}
async function decryptPeek(parsed, password) {
  const key = await _deriveKey(password, parsed.salt);
  try {
    return new Uint8Array(await globalThis.crypto.subtle.decrypt({ name: "AES-GCM", iv: parsed.iv }, key, parsed.ct));
  } catch {
    const err2 = new Error("wrong password");
    err2.code = "WRONG_PASSWORD";
    throw err2;
  }
}
async function _tailBytes(blobOrBytes, window2 = PEEK_TAIL_WINDOW) {
  if (blobOrBytes instanceof Uint8Array) {
    return blobOrBytes.length <= window2 ? blobOrBytes : blobOrBytes.slice(blobOrBytes.length - window2);
  }
  const blob = blobOrBytes.slice(Math.max(0, blobOrBytes.size - window2));
  return new Uint8Array(await blob.arrayBuffer());
}
function createEncryption(opts = {}) {
  const _codec = opts.codec ?? null;
  const report = opts.reportError ?? (() => {
  });
  const codec = () => {
    if (!_codec)
      throw new Error("encryption codec not configured (createEncryption({codec}) missing) \u2014 detection works, pack/unpack unavailable");
    return _codec;
  };
  async function looksEncryptedContainer(blobOrBytes) {
    try {
      const head = blobOrBytes instanceof Uint8Array ? blobOrBytes.slice(0, 6) : new Uint8Array(await blobOrBytes.slice(0, 6).arrayBuffer());
      if (_startsWith(head, SEVENZ_MAGIC))
        return true;
      return scanEncPeekFromEnd(await _tailBytes(blobOrBytes)) != null;
    } catch (e) {
      report(e);
      return false;
    }
  }
  async function packContainer({ dataBytes, fileName, ext = "bin", guid: guid2, peek = null, password }) {
    if (!password)
      throw new Error("cannot encrypt without a password");
    const metaJson = JSON.stringify({ v: 1, name: fileName || null, ext });
    const payloadBytes = await codec().pack7z([
      { path: "data.bin", data: dataBytes },
      { path: "meta.bin", data: META_MAGIC + metaJson }
    ], password);
    const peekEnc = await encryptPeek(peek, password);
    return await codec().zipPack([
      { path: guid2 || makeGuid(), data: payloadBytes },
      { path: CONTAINER_PEEK_ENTRY, data: peekEnc }
    ]);
  }
  function _pickData(inner) {
    if (inner["data.bin"])
      return inner["data.bin"];
    const names = Object.keys(inner).filter((n) => n !== "meta.bin");
    return names.length ? inner[names[0]] : null;
  }
  function _readMeta(inner) {
    if (!inner["meta.bin"])
      return null;
    try {
      const text = new TextDecoder().decode(inner["meta.bin"]);
      if (text.startsWith(META_MAGIC))
        return JSON.parse(text.slice(META_MAGIC.length));
    } catch (e) {
      report(e);
    }
    return null;
  }
  async function unpackContainer(blob, password) {
    const whole = blob instanceof Uint8Array ? blob : new Uint8Array(await blob.arrayBuffer());
    let payload = null, guid2 = "";
    if (_startsWith(whole, ZIP_MAGIC)) {
      try {
        const outer = await codec().zipUnpack(blob instanceof Blob ? blob : new Blob([whole]));
        const g = Object.keys(outer).find((n) => !CONTAINER_PEEK_ENTRIES.includes(n));
        if (g && outer[g] && (_startsWith(outer[g], SEVENZ_MAGIC) || _startsWith(outer[g], ZIP_MAGIC))) {
          payload = outer[g];
          guid2 = g;
        }
      } catch (e) {
        report(e);
      }
    }
    const inner = await codec().unpack7z(payload ?? whole, password);
    const data = _pickData(inner);
    if (!data)
      throw new Error("encrypted container has no readable payload");
    return { dataBlob: new Blob([data], { type: "application/zip" }), meta: _readMeta(inner), guid: guid2 };
  }
  return {
    looksEncryptedContainer,
    isEncryptedPeekBlob: (b) => !!b && b.type === ENC_PEEK_MIME,
    scanEncPeekFromEnd,
    encryptPeek,
    decryptPeek,
    packContainer,
    unpackContainer,
    isEncryptedBlob: (b) => looksEncryptedContainer(b),
    async tryDecryptEncryptedBlob(blob, pw) {
      if (!pw)
        return null;
      if (!await looksEncryptedContainer(blob))
        return null;
      try {
        return (await unpackContainer(blob, pw)).dataBlob;
      } catch {
        return null;
      }
    },
    PEEK_TAIL_WINDOW,
    ENC_PEEK_MIME,
    CONTAINER_PEEK_ENTRIES
  };
}

// src/app/config.ts
var APP_ID = "kudsrocket";
var CLIENT_ID2 = "0c1d8f21-dce6-4e17-a919-e6f226c47ee2";
var AUTHORITY2 = "https://login.microsoftonline.com/consumers";
var SCOPES2 = ["Files.ReadWrite.AppFolder", "offline_access"];
var MSAL_URL2 = "./vendor/msal/msal-browser.min.js";
var PANTRY = "pantry";
var CRUMBS = "crumbs";
var JARS = "jars";
var DISC_SUFFIXES = [".wafter", ".iso", ".cso"];
var CRUMB_SUFFIX = ".crumb";
var JAM_SUFFIX = ".jam";
var SLOTS = 4;
var JAM_POLL_MS = 2e3;
var FAST_FORWARD = 3;

// src/app/store-ui.ts
var BACKGROUND_KEYS = /* @__PURE__ */ new Set(["sync.pushing", "file.renaming"]);
function stemOf(identifier) {
  return identifier.replace(/^.*\//, "");
}
var storeUI = {
  busy: (label, fn, key) => key && BACKGROUND_KEYS.has(key) ? fn() : withBusy(label, fn),
  resolveConflict: async ({ name, occasion }) => {
    const choice = await sheet((done) => [
      h("h2", {}, "\u4E91\u7AEF\u548C\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u4E0D\u4E00\u6837"),
      h("p", {}, `${stemOf(name)}\uFF1A\u522B\u7684\u8BBE\u5907\u6539\u8FC7\u4E91\u7AEF\u90A3\u4EFD\uFF0C\u8FD9\u53F0\u8BBE\u5907\u4E0A\u4E5F\u6709\u6CA1\u4F20\u4E0A\u53BB\u7684\u6539\u52A8\u3002`),
      h("p", { class: "hint" }, occasion === "push" ? "\u300C\u7528\u8FD9\u53F0\u7684\u300D= \u9A6C\u4E0A\u7528\u8FD9\u53F0\u7684\u8986\u76D6\u4E91\u7AEF\uFF0C\u4E91\u7AEF\u90A3\u4EFD\u79FB\u5230\u5907\u4EFD\uFF1B\u300C\u7528\u4E91\u7AEF\u7684\u300D= \u8FD9\u53F0\u7684\u79FB\u5230\u5907\u4EFD\uFF0C\u6362\u6210\u4E91\u7AEF\u90A3\u4EFD\u3002" : "\u73B0\u5728\u5148\u6253\u5F00\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\uFF1B\u300C\u7528\u4E91\u7AEF\u7684\u300D= \u8FD9\u53F0\u7684\u79FB\u5230\u5907\u4EFD\uFF0C\u6362\u6210\u4E91\u7AEF\u90A3\u4EFD\u3002"),
      h(
        "div",
        { class: "row" },
        h("button", { onclick: () => done("cancel") }, "\u5148\u4E0D\u7BA1"),
        h("button", { onclick: () => done("takeCloud") }, "\u7528\u4E91\u7AEF\u7684"),
        h("button", { class: "primary", onclick: () => done("keepMine") }, "\u7528\u8FD9\u53F0\u7684")
      )
    ], { dismissable: false });
    return choice ?? "cancel";
  },
  reportError: (err2, level = "error") => {
    if (err2?.message === "Not signed in") {
      console.info("[store]", err2);
      return;
    }
    if (level === "log") {
      console.info("[store]", err2);
      return;
    }
    if (level === "info") {
      note(errorText(err2));
      return;
    }
    console.warn("[store]", err2);
    banner(errorText(err2), level);
  },
  onReplayStatus: ({ phase, name, done, total }) => {
    if (phase === "collision") banner(`${name ? stemOf(name) : ""}\uFF1A\u4E91\u7AEF\u5DF2\u7ECF\u6709\u540C\u540D\u7684\u4E86\uFF0C\u79BB\u7EBF\u65F6\u5B58\u7684\u8FD9\u4EFD\u6CA1\u4F20\u4E0A\u53BB`, "warning");
    else if (phase === "done") note(`\u79BB\u7EBF\u65F6\u5B58\u7684\u4F20\u4E0A\u4E91\u4E86\uFF08${done} / ${total}\uFF09`);
    else if (phase === "pushed") note(`\u6B63\u5728\u628A\u79BB\u7EBF\u65F6\u5B58\u7684\u4F20\u4E0A\u4E91\u2026 ${done} / ${total}`);
  }
};

// src/app/app-store.ts
var od = createOneDriveProvider({ clientId: CLIENT_ID2, scopes: SCOPES2, authority: AUTHORITY2, msalUrl: MSAL_URL2 });
var auth = od.auth;
var activeIdentifier = null;
function setActiveIdentifier(id) {
  activeIdentifier = id;
}
async function validateAdopt(plain) {
  if (plain.size < 64) return false;
  const tail = new Uint8Array(await plain.slice(plain.size - 64).arrayBuffer());
  const head = new TextDecoder().decode(tail.subarray(0, 4)), end = new TextDecoder().decode(tail.subarray(60, 64));
  return head === "KRD1" && end === "KRD1";
}
var store = null;
function getStore() {
  store ??= createStore({
    provider: od.provider,
    ui: storeUI,
    appId: APP_ID,
    persistence: "app-managed",
    // 登录按钮的手势里调 requestStoragePersistence()
    encryption: createEncryption(),
    // 不用库的加密（我们自己的 KRD1 在 app 层封好再交给库，库只见密文）
    reconcilePolicy: "app-driven",
    validateAdopt,
    docKinds: [
      { kind: "disc", suffix: ".wafter", container: "raw" },
      { kind: "disc", suffix: ".iso", container: "raw" },
      { kind: "disc", suffix: ".cso", container: "raw" },
      { kind: "crumb", suffix: CRUMB_SUFFIX, container: "raw" },
      { kind: "jam", suffix: JAM_SUFFIX, container: "raw" }
    ],
    autoCacheOpenedFile: true,
    // 快照 / 存档 open 后留本地；盘只走 openStream（不整份落本地）
    offlineUploadReplay: "auto",
    signedIn: () => od.auth.isSignedIn(),
    activeIdentifier: () => activeIdentifier
  });
  return store;
}

// src/disc/crypt.ts
var MAGIC = "KRD1";
var TRAILER_BYTES = 64;
var DEFAULT_ITERATIONS = 6e5;
var KDF_PBKDF2_SHA256 = 1;
var BLOCK = 16;
var NotADiscError = class extends Error {
  constructor(message = "not a KRD1 disc container") {
    super(message);
    this.name = "NotADiscError";
  }
};
var WrongPasswordError = class extends Error {
  constructor(message = "wrong password (or damaged metadata)") {
    super(message);
    this.name = "WrongPasswordError";
  }
};
var CorruptDiscError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "CorruptDiscError";
  }
};
function normalizePassword(password) {
  return password.normalize("NFKC");
}
async function deriveKeys(password, salt, iterations) {
  const base = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(normalizePassword(password)),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const bits2 = new Uint8Array(await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt, iterations },
    base,
    512
  ));
  const [body, meta] = await Promise.all([
    crypto.subtle.importKey("raw", bits2.slice(0, 32), "AES-CTR", false, ["encrypt", "decrypt"]),
    crypto.subtle.importKey("raw", bits2.slice(32, 64), "AES-GCM", false, ["encrypt", "decrypt"])
  ]);
  bits2.fill(0);
  return { body, meta };
}
function counterAt(nonce, blockIndex) {
  const ctr = new Uint8Array(BLOCK);
  ctr.set(nonce, 0);
  new DataView(ctr.buffer).setBigUint64(8, BigInt(blockIndex));
  return ctr;
}
async function ctrAt(key, nonce, offset, bytes) {
  if (offset % BLOCK !== 0) throw new RangeError(`CTR offset must be 16-byte aligned, got ${offset}`);
  if (bytes.length === 0) return new Uint8Array(0);
  return new Uint8Array(await crypto.subtle.encrypt(
    { name: "AES-CTR", counter: counterAt(nonce, offset / BLOCK), length: 64 },
    key,
    bytes
  ));
}
function encodeTrailer(t) {
  const out = new Uint8Array(TRAILER_BYTES);
  const dv = new DataView(out.buffer);
  const magic = new TextEncoder().encode(MAGIC);
  out.set(magic, 0);
  dv.setUint8(4, 1);
  dv.setUint8(5, KDF_PBKDF2_SHA256);
  dv.setUint32(8, t.iterations);
  out.set(t.salt, 12);
  out.set(t.nonce, 28);
  out.set(t.metaIv, 36);
  dv.setUint32(48, t.metaBytes);
  dv.setBigUint64(52, BigInt(t.bodyBytes));
  out.set(magic, 60);
  return out;
}
function decodeTrailer(bytes) {
  if (bytes.length !== TRAILER_BYTES) throw new NotADiscError();
  const dec = new TextDecoder();
  if (dec.decode(bytes.subarray(0, 4)) !== MAGIC || dec.decode(bytes.subarray(60, 64)) !== MAGIC) throw new NotADiscError();
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (dv.getUint8(4) !== 1) throw new NotADiscError(`unsupported KRD version ${dv.getUint8(4)}`);
  if (dv.getUint8(5) !== KDF_PBKDF2_SHA256) throw new NotADiscError(`unsupported KDF id ${dv.getUint8(5)}`);
  const bodyBytes = dv.getBigUint64(52);
  if (bodyBytes > BigInt(Number.MAX_SAFE_INTEGER)) throw new CorruptDiscError("body length out of range");
  return {
    iterations: dv.getUint32(8),
    salt: bytes.slice(12, 28),
    nonce: bytes.slice(28, 36),
    metaIv: bytes.slice(36, 48),
    metaBytes: dv.getUint32(48),
    bodyBytes: Number(bodyBytes)
  };
}
function random(n) {
  return crypto.getRandomValues(new Uint8Array(n));
}
var keyCache = /* @__PURE__ */ new Map();
function cachedKeys(password, salt, iterations) {
  const id = `${iterations}:${Array.from(salt, (b) => b.toString(16).padStart(2, "0")).join("")}:${password}`;
  let p = keyCache.get(id);
  if (!p) {
    p = deriveKeys(password, salt, iterations);
    p.catch(() => keyCache.delete(id));
    keyCache.set(id, p);
  }
  return p;
}
async function beginDisc(password, opts = {}) {
  const iterations = opts.iterations ?? DEFAULT_ITERATIONS;
  const salt = opts.salt ?? random(16), nonce = random(8);
  if (salt.length !== 16) throw new RangeError("salt must be 16 bytes");
  const keys = opts.salt ? await cachedKeys(password, salt, iterations) : await deriveKeys(password, salt, iterations);
  let offset = 0;
  let tailSeen = false;
  return {
    async encrypt(plain) {
      if (tailSeen) throw new RangeError("only the last chunk may have a length that is not a multiple of 16");
      if (plain.length % BLOCK !== 0) tailSeen = true;
      const out = await ctrAt(keys.body, nonce, offset, plain);
      offset += plain.length;
      return out;
    },
    async finish(extra = {}) {
      const meta = { v: 1, size: offset, ...extra };
      const metaIv = random(12);
      const sealed = new Uint8Array(await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: metaIv },
        keys.meta,
        new TextEncoder().encode(JSON.stringify(meta))
      ));
      const trailer = encodeTrailer({ iterations, salt, nonce, metaIv, metaBytes: sealed.length, bodyBytes: offset });
      const tail = new Uint8Array(sealed.length + TRAILER_BYTES);
      tail.set(sealed, 0);
      tail.set(trailer, sealed.length);
      return tail;
    }
  };
}
async function peekDisc(source) {
  if (source.size < TRAILER_BYTES) throw new NotADiscError();
  const t = decodeTrailer(await source.read(source.size - TRAILER_BYTES, TRAILER_BYTES));
  if (t.bodyBytes + t.metaBytes + TRAILER_BYTES !== source.size) {
    throw new CorruptDiscError(`length mismatch: trailer says ${t.bodyBytes}+${t.metaBytes}+${TRAILER_BYTES}, file has ${source.size}`);
  }
  return t;
}
async function openDisc(source, password) {
  const t = await peekDisc(source);
  const keys = await cachedKeys(password, t.salt, t.iterations);
  const sealed = await source.read(t.bodyBytes, t.metaBytes);
  let meta;
  try {
    meta = JSON.parse(new TextDecoder().decode(
      await crypto.subtle.decrypt({ name: "AES-GCM", iv: t.metaIv }, keys.meta, sealed)
    ));
  } catch {
    throw new WrongPasswordError();
  }
  if (meta.v !== 1 || meta.size !== t.bodyBytes) throw new CorruptDiscError("metadata does not match trailer");
  const size = t.bodyBytes;
  return {
    size,
    meta,
    async read(offset, length) {
      const start = Math.max(0, Math.min(size, offset));
      const end = Math.max(start, Math.min(size, offset + length));
      if (end === start) return new Uint8Array(0);
      const aligned = start - start % BLOCK;
      const cipher = await source.read(aligned, end - aligned);
      if (cipher.length !== end - aligned) throw new CorruptDiscError(`short read at ${aligned}: wanted ${end - aligned}, got ${cipher.length}`);
      const plain = await ctrAt(keys.body, t.nonce, aligned, cipher);
      return plain.subarray(start - aligned);
    }
  };
}
async function sha256Hex(bytes) {
  const d = new Uint8Array(await crypto.subtle.digest("SHA-256", bytes));
  return Array.from(d, (b) => b.toString(16).padStart(2, "0")).join("");
}
async function sealBytes(password, plain, opts = {}) {
  const w = await beginDisc(password, { salt: opts.salt });
  const body = await w.encrypt(plain);
  const tail = await w.finish({ ...opts.name ? { name: opts.name } : {}, sha256: await sha256Hex(plain) });
  const out = new Uint8Array(body.length + tail.length);
  out.set(body, 0);
  out.set(tail, body.length);
  return out;
}
async function unsealBytes(password, sealed) {
  const disc = await openDisc({ size: sealed.length, read: async (o, n) => sealed.subarray(o, o + n) }, password);
  const plain = await disc.read(0, disc.size);
  if (disc.meta.sha256 && disc.meta.sha256 !== await sha256Hex(plain)) throw new CorruptDiscError("content does not match its recorded sha256");
  return { plain, meta: disc.meta };
}

// src/app/discs.ts
var sessionPassword = null;
var getPassword = () => sessionPassword;
var setPassword = (p) => {
  sessionPassword = p;
};
async function sha16(text) {
  const d = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)));
  return Array.from(d.slice(0, 8), (b) => b.toString(16).padStart(2, "0")).join("");
}
async function discKey(stem) {
  return /^[0-9a-f]{16}$/.test(stem) ? stem : sha16(stem);
}
var stemOf2 = (name) => name.replace(/^.*\//, "").replace(/\.[^.]*$/, "");
var extOf = (name) => (name.match(/\.[A-Za-z0-9]+$/)?.[0] ?? ".iso").toLowerCase();
var NeedPassword = class extends Error {
  constructor() {
    super("password needed");
    this.name = "NeedPassword";
  }
};
async function isEncrypted(src) {
  try {
    await peekDisc(src);
    return true;
  } catch (e) {
    if (e instanceof NotADiscError) return false;
    throw e;
  }
}
async function unwrap(src, name, password) {
  if (!await isEncrypted(src)) return { media: src, ext: extOf(name), title: stemOf2(name), opened: null };
  const pw = password ?? sessionPassword;
  if (!pw) throw new NeedPassword();
  const opened = await openDisc(src, pw);
  sessionPassword = pw;
  const original = opened.meta.name ?? "game.iso";
  return { media: opened, ext: extOf(original), title: stemOf2(original), opened };
}
async function fromLocalFile(file, password) {
  const src = { size: file.size, read: async (o, n) => new Uint8Array(await file.slice(o, o + n).arrayBuffer()) };
  const u = await unwrap(src, file.name, password);
  return { ...u, key: await discKey(stemOf2(file.name)), identifier: null };
}
async function fromPantry(identifier, password) {
  const stream = await getStore().file(identifier, { mode: "existing" }).openStream();
  if (!stream) throw new Error("\u8FD9\u5F20\u76D8\u73B0\u5728\u62FF\u4E0D\u5230\uFF08\u6CA1\u767B\u5F55\u3001\u79BB\u7EBF\uFF0C\u6216\u8005\u4E91\u7AEF\u5DF2\u7ECF\u6CA1\u6709\u4E86\uFF09");
  const src = { size: stream.totalSize, read: (o, n) => stream.read(o, n) };
  const u = await unwrap(src, identifier, password);
  return { ...u, key: await discKey(stemOf2(identifier)), identifier };
}
async function titleInPantry(identifier) {
  if (!identifier.endsWith(".wafter")) return stemOf2(identifier);
  if (!sessionPassword) return null;
  const stream = await getStore().file(identifier, { mode: "existing" }).openStream();
  if (!stream) return null;
  try {
    const opened = await openDisc({ size: stream.totalSize, read: (o, n) => stream.read(o, n) }, sessionPassword);
    return stemOf2(opened.meta.name ?? identifier);
  } catch (e) {
    if (e instanceof WrongPasswordError) return null;
    throw e;
  } finally {
    stream.close();
  }
}

// vendor/fflate/fflate.esm.js
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new i32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le = new u16(mb);
  for (i = 1; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flm = /* @__PURE__ */ hMap(flt, 9, 0);
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m)
      m = a[i];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var wbits = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
};
var wbits16 = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
  d[o + 2] |= v >> 16;
};
var hTree = function(d, mb) {
  var t = [];
  for (var i = 0; i < d.length; ++i) {
    if (d[i])
      t.push({ s: i, f: d[i] });
  }
  var s = t.length;
  var t2 = t.slice();
  if (!s)
    return { t: et, l: 0 };
  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return { t: v, l: 1 };
  }
  t.sort(function(a, b) {
    return a.f - b.f;
  });
  t.push({ s: -1, f: 25001 });
  var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
  t[0] = { s: -1, f: l.f + r.f, l, r };
  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = { s: -1, f: l.f + r.f, l, r };
  }
  var maxSym = t2[0].s;
  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym)
      maxSym = t2[i].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i = 0, dt = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t2.sort(function(a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt >>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb)
        dt -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return { t: new u8(tr), l: mbt };
};
var ln = function(n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
  var s = c.length;
  while (s && !c[--s])
    ;
  var cl = new u16(++s);
  var cli = 0, cln = c[0], cls = 1;
  var w = function(v) {
    cl[cli++] = v;
  };
  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6)
          w(8304);
        if (cls > 2)
          w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w(cln);
      cls = 1;
      cln = c[i];
    }
  }
  return { c: cl.subarray(0, cli), n: s };
};
var clen = function(cf, cl) {
  var l = 0;
  for (var i = 0; i < cl.length; ++i)
    l += cf[i] * cl[i];
  return l;
};
var wfblk = function(out, pos, dat) {
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;
  for (var i = 0; i < s; ++i)
    out[o + i + 4] = dat[i];
  return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
  var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
  var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
  var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i)
    ++lcfreq[lclt[i] & 31];
  for (var i = 0; i < lcdt.length; ++i)
    ++lcfreq[lcdt[i] & 31];
  var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
  if (bs >= 0 && flen <= ftlen && flen <= dtlen)
    return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i = 0; i < nlcc; ++i)
      wbits(out, p + 3 * i, lct[clim[i]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15)
          wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    var sym = syms[i];
    if (sym > 255) {
      var len = sym >> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7)
        wbits(out, p, sym >> 23 & 31), p += fleb[len];
      var dst = sym & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3)
        wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[sym]), p += ll[sym];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
var deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var et = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
  var s = st.z || dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
  var w = o.subarray(pre, o.length - post);
  var lst = st.l;
  var pos = (st.r || 0) & 7;
  if (lvl) {
    if (pos)
      w[0] = st.r >> 3;
    var opt = deo[lvl - 1];
    var n = opt >> 13, c = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i2) {
      return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
    };
    var syms = new i32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
    for (; i + 2 < s; ++i) {
      var hv = hsh(i);
      var imod = i & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i) {
        var rem = s - i;
        if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j = 0; j < 286; ++j)
            lf[j] = 0;
          for (var j = 0; j < 30; ++j)
            df[j] = 0;
        }
        var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                ;
              if (nl > l) {
                l = nl, d = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod & 32767;
          }
        }
        if (d) {
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31, din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    for (i = Math.max(i, wi); i < s; ++i) {
      syms[li++] = dat[i];
      ++lf[dat[i]];
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    if (!lst) {
      st.r = pos & 7 | w[pos / 8 | 0] << 3;
      pos -= 7;
      st.h = head, st.p = prev, st.i = i, st.w = wi;
    }
  } else {
    for (var i = st.w || 0; i < s + lst; i += 65535) {
      var e = i + 65535;
      if (e >= s) {
        w[pos / 8 | 0] = lst;
        e = s;
      }
      pos = wfblk(w, pos + 1, dat.subarray(i, e));
    }
    st.i = s;
  }
  return slc(o, 0, pre + shft(pos) + post);
};
var crct = /* @__PURE__ */ function() {
  var t = new Int32Array(256);
  for (var i = 0; i < 256; ++i) {
    var c = i, k = 9;
    while (--k)
      c = (c & 1 && -306674912) ^ c >>> 1;
    t[i] = c;
  }
  return t;
}();
var crc = function() {
  var c = -1;
  return {
    p: function(d) {
      var cr = c;
      for (var i = 0; i < d.length; ++i)
        cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
      c = cr;
    },
    d: function() {
      return ~c;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  if (!st) {
    st = { l: 1 };
    if (opt.dictionary) {
      var dict = opt.dictionary.subarray(-32768);
      var newDat = new u8(dict.length + dat.length);
      newDat.set(dict);
      newDat.set(dat, dict.length);
      dat = newDat;
      st.w = dict.length;
    }
  }
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var mrg = function(a, b) {
  var o = {};
  for (var k in a)
    o[k] = a[k];
  for (var k in b)
    o[k] = b[k];
  return o;
};
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
var wbytes = function(d, b, v) {
  for (; v; ++b)
    d[b] = v, v >>>= 8;
};
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var fltn = function(d, p, t, o) {
  for (var k in d) {
    var val = d[k], n = p + k, op = o;
    if (Array.isArray(val))
      op = mrg(o, val[1]), val = val[0];
    if (val instanceof u8)
      t[n] = [val, op];
    else {
      t[n += "/"] = [new u8(0), op];
      fltn(val, n, t, o);
    }
  }
};
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i = 0; ; ) {
    var c = d[i++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length)
      return { s: r, r: slc(d, i - 1) };
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i = 0; i < str.length; ++i)
      ar_1[i] = str.charCodeAt(i);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w = function(v) {
    ar[ai++] = v;
  };
  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i);
    if (c < 128 || latin1)
      w(c);
    else if (c < 2048)
      w(192 | c >> 6), w(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
    else
      w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i = 0; i < dat.length; i += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
  var _a2 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
};
var z64e = function(d, b) {
  for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
    ;
  return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
};
var exfl = function(ex) {
  var le = 0;
  if (ex) {
    for (var k in ex) {
      var l = ex[k].length;
      if (l > 65535)
        err(9);
      le += l + 4;
    }
  }
  return le;
};
var wzh = function(d, b, f, fn, u, c, ce, co) {
  var fl2 = fn.length, ex = f.extra, col = co && co.length;
  var exl = exfl(ex);
  wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
  if (ce != null)
    d[b++] = 20, d[b++] = f.os;
  d[b] = 20, b += 2;
  d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
  d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
  var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
  if (y < 0 || y > 119)
    err(10);
  wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
  if (c != -1) {
    wbytes(d, b, f.crc);
    wbytes(d, b + 4, c < 0 ? -c - 2 : c);
    wbytes(d, b + 8, f.size);
  }
  wbytes(d, b + 12, fl2);
  wbytes(d, b + 14, exl), b += 16;
  if (ce != null) {
    wbytes(d, b, col);
    wbytes(d, b + 6, f.attrs);
    wbytes(d, b + 10, ce), b += 14;
  }
  d.set(fn, b);
  b += fl2;
  if (exl) {
    for (var k in ex) {
      var exf = ex[k], l = exf.length;
      wbytes(d, b, +k);
      wbytes(d, b + 2, l);
      d.set(exf, b + 4), b += 4 + l;
    }
  }
  if (col)
    d.set(co, b), b += col;
  return b;
};
var wzf = function(o, b, c, d, e) {
  wbytes(o, b, 101010256);
  wbytes(o, b + 8, c);
  wbytes(o, b + 10, c);
  wbytes(o, b + 12, d);
  wbytes(o, b + 16, e);
};
function zipSync(data, opts) {
  if (!opts)
    opts = {};
  var r = {};
  var files = [];
  fltn(data, "", r, opts);
  var o = 0;
  var tot = 0;
  for (var fn in r) {
    var _a2 = r[fn], file = _a2[0], p = _a2[1];
    var compression = p.level == 0 ? 0 : 8;
    var f = strToU8(fn), s = f.length;
    var com = p.comment, m = com && strToU8(com), ms = m && m.length;
    var exl = exfl(p.extra);
    if (s > 65535)
      err(11);
    var d = compression ? deflateSync(file, p) : file, l = d.length;
    var c = crc();
    c.p(file);
    files.push(mrg(p, {
      size: file.length,
      crc: c.d(),
      c: d,
      f,
      m,
      u: s != fn.length || m && com.length != ms,
      o,
      compression
    }));
    o += 30 + s + exl + l;
    tot += 76 + 2 * (s + exl) + (ms || 0) + l;
  }
  var out = new u8(tot + 22), oe = o, cdl = tot - o;
  for (var i = 0; i < files.length; ++i) {
    var f = files[i];
    wzh(out, f.o, f, f.f, f.u, f.c.length);
    var badd = 30 + f.f.length + exfl(f.extra);
    out.set(f.c, f.o + badd);
    wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
  }
  wzf(out, o, files.length, cdl, oe);
  return out;
}
function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      err(13);
  }
  ;
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = o == 4294967295 || c == 65535;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792;
    if (z) {
      c = b4(data, ze + 32);
      o = b4(data, ze + 48);
    }
  }
  var fltr = opts && opts.filter;
  for (var i = 0; i < c; ++i) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2)
        files[fn] = slc(data, b, b + sc);
      else if (c_2 == 8)
        files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
      else
        err(14, "unknown compression type " + c_2);
    }
  }
  return files;
}

// src/app/saves.ts
var sessionSalt = crypto.getRandomValues(new Uint8Array(16));
var crumbId = (key, slot) => `${CRUMBS}/${key}-s${slot}${CRUMB_SUFFIX}`;
function watchSlots(key, cb) {
  return getStore().files.watchFolder(CRUMBS, (snap) => {
    const byId = new Map(snap.items.map((it) => [it.identifier, it.lastModified ?? Date.now()]));
    cb(Array.from({ length: SLOTS }, (_, i) => ({ slot: i + 1, savedAt: byId.get(crumbId(key, i + 1)) ?? null })));
  });
}
async function put(identifier, sealed) {
  const store2 = getStore();
  await store2.files.ensureFolder(identifier.replace(/\/[^/]*$/, ""));
  const exists = await store2.files.occupied(identifier);
  return store2.file(identifier, { mode: exists ? "existing" : "new" }).save(new Blob([sealed]));
}
async function get(identifier) {
  const store2 = getStore();
  if (!await store2.files.occupied(identifier)) return null;
  const blob = await store2.file(identifier, { mode: "existing" }).open();
  return blob ? new Uint8Array(await blob.arrayBuffer()) : null;
}
async function saveSlot(key, slot, state, password) {
  return put(crumbId(key, slot), await sealBytes(password, state, { salt: sessionSalt }));
}
async function loadSlot(key, slot, password) {
  const sealed = await get(crumbId(key, slot));
  return sealed ? (await unsealBytes(password, sealed)).plain : null;
}
var jamId = async (dir) => `${JARS}/${await sha16(`savedata:${dir}`)}${JAM_SUFFIX}`;
function listJams(timeoutMs = 1e4) {
  return new Promise((resolve) => {
    let latest = { ids: [], complete: false };
    let off = null;
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      queueMicrotask(() => off?.());
      resolve(latest);
    };
    const timer = setTimeout(finish, timeoutMs);
    off = getStore().files.watchFolder(JARS, (snap) => {
      latest = { ids: snap.items.map((it) => it.identifier).filter((id) => id.endsWith(JAM_SUFFIX)), complete: snap.complete };
      if (snap.complete) finish();
    });
    if (settled) off();
  });
}
async function loadMemstick(password, ids, complete) {
  const files = /* @__PURE__ */ new Map();
  const dirs = /* @__PURE__ */ new Set();
  let next = 0;
  const worker = async () => {
    while (next < ids.length) {
      const id = ids[next++];
      const sealed = await get(id);
      if (!sealed) continue;
      const unzipped = unzipSync((await unsealBytes(password, sealed)).plain);
      for (const [path, bytes] of Object.entries(unzipped)) {
        files.set(path, bytes);
        dirs.add(path.split("/")[0]);
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(6, ids.length) }, worker));
  return { files, dirs, complete };
}
async function saveSaveDir(dir, files, password) {
  const zip = zipSync(Object.fromEntries(files), { level: 0 });
  return put(await jamId(dir), await sealBytes(password, zip, { salt: sessionSalt }));
}
async function deleteSaveDir(dir) {
  const id = await jamId(dir);
  const store2 = getStore();
  if (await store2.files.occupied(id)) await store2.file(id, { mode: "existing" }).delete();
}

// src/app/main.ts
var params = new URLSearchParams(location.search);
var DEV_SERVER = /^(127\.0\.0\.1|localhost)$/.test(location.hostname);
async function ensureIsolation() {
  if (!("serviceWorker" in navigator)) return crossOriginIsolated;
  const reg = await navigator.serviceWorker.register("./service-worker.js").catch((e) => {
    console.warn("[sw]", e);
    return null;
  });
  navigator.serviceWorker.addEventListener("message", (e) => {
    if (e.data?.type === "asset-updated") showUpdate();
  });
  if (crossOriginIsolated) return true;
  if (!reg || navigator.serviceWorker.controller) return false;
  await new Promise((r) => navigator.serviceWorker.addEventListener("controllerchange", r, { once: true }));
  location.reload();
  return new Promise(() => {
  });
}
function showUpdate() {
  const el = $("update");
  if (!el.hidden) return;
  el.replaceChildren(h("span", {}, "\u6709\u65B0\u7248\u672C"), h("button", { onclick: () => location.reload() }, session ? "\u91CD\u65B0\u8F7D\u5165\uFF08\u8FD9\u4E00\u5C40\u4F1A\u9000\u51FA\uFF09" : "\u91CD\u65B0\u8F7D\u5165"));
  el.hidden = false;
}
var session = null;
var current = null;
var ac = null;
var softKeys = null;
var currentSlot = 1;
var slots = [];
var lastNote = "";
var titles = /* @__PURE__ */ new Map();
function audioContext() {
  ac ??= new AudioContext({ sampleRate: 44100, latencyHint: "interactive" });
  return ac;
}
var say = (text, ms) => {
  lastNote = text;
  note(text, ms);
};
var pantryItems = [];
var pantryComplete = false;
function renderAccount() {
  const row = $("account");
  if (!auth.isAuthConfigured()) {
    row.replaceChildren(h("span", { class: "muted" }, "\u6CA1\u914D OneDrive"));
    return;
  }
  if (auth.isSignedIn()) {
    row.replaceChildren(
      icon("cloud"),
      h("span", {}, "OneDrive \u5DF2\u8FDE\u63A5"),
      h("button", { onclick: async () => {
        await auth.signOut();
        renderAccount();
        renderLibrary();
      } }, "\u9000\u51FA\u767B\u5F55")
    );
  } else {
    row.replaceChildren(
      icon("cloud"),
      h("span", { class: "muted" }, "\u6CA1\u767B\u5F55\uFF1A\u6E38\u620F\u5E93\u548C\u5B58\u6863\u90FD\u5728\u4F60\u81EA\u5DF1\u7684 OneDrive \u91CC"),
      h("button", { class: "primary", onclick: () => {
        requestStoragePersistence().catch(() => {
        });
        auth.signIn().catch((e) => banner(`\u767B\u5F55\u5931\u8D25\uFF1A${errorText(e)}`));
      } }, "\u767B\u5F55 OneDrive")
    );
  }
}
var gb = (n) => n ? `${(n / 2 ** 30).toFixed(2)} GB` : "";
function renderLibrary() {
  const list = $("library");
  const discs = pantryItems.filter((it) => DISC_SUFFIXES.some((s) => it.identifier.toLowerCase().endsWith(s))).sort((a, b) => (b.lastModified ?? 0) - (a.lastModified ?? 0));
  const locked = discs.some((d) => d.identifier.endsWith(".wafter") && !titles.has(d.identifier));
  const rows = [];
  const last = lastPlayed();
  if (last && discs.some((d) => d.identifier === last)) {
    rows.push(h(
      "button",
      { class: "disc continue", onclick: () => playFromPantry(last, true) },
      icon("play"),
      h("span", { class: "title" }, `\u63A5\u7740\u73A9\uFF1A${titles.get(last) ?? (last.endsWith(".wafter") ? "\u4E0A\u6B21\u90A3\u5F20" : stemOf2(last))}`),
      h("span", { class: "muted" }, "\u8BFB\u6700\u65B0\u7684\u5FEB\u7167")
    ));
  }
  for (const d of discs) {
    const t = titles.get(d.identifier) ?? (d.identifier.endsWith(".wafter") ? null : stemOf2(d.identifier));
    rows.push(h(
      "button",
      { class: "disc", onclick: () => playFromPantry(d.identifier, false) },
      t ? null : icon("lock"),
      h("span", { class: "title" }, t ?? stemOf2(d.identifier)),
      h("span", { class: "muted" }, gb(d.size))
    ));
  }
  if (!discs.length) {
    rows.push(h("p", { class: "muted" }, !auth.isSignedIn() ? "\u767B\u5F55\u540E\u8FD9\u91CC\u5217\u51FA OneDrive \u91CC\u7684\u76D8\u3002" : pantryComplete ? `\u98DF\u54C1\u67DC\u662F\u7A7A\u7684\uFF1A\u628A\u76D8\u653E\u8FDB OneDrive\u300C\u5E94\u7528\u300D\u6587\u4EF6\u5939\u91CC\u672C app \u7684\u6587\u4EF6\u5939 \u2192 ${PANTRY}/\uFF08\u52A0\u5BC6\u7684 .wafter \u6216 .iso / .cso\uFF09\u3002` : "\u6B63\u5728\u770B\u98DF\u54C1\u67DC\u2026"));
  }
  list.replaceChildren(...rows);
  $("unlock").hidden = !locked;
}
async function unlockTitles() {
  const pw = await askPassword("\u8F93\u5165\u53E3\u4EE4", "\u52A0\u5BC6\u76D8\u7684\u540D\u5B57\u8981\u53E3\u4EE4\u624D\u770B\u5F97\u89C1\u3002\u53E3\u4EE4\u53EA\u5728\u8FD9\u4E00\u9875\u91CC\u8BB0\u7740\uFF0C\u5173\u6389\u5C31\u5FD8\u3002");
  if (!pw) return;
  setPassword(pw);
  let wrong = 0;
  for (const d of pantryItems.filter((it) => it.identifier.endsWith(".wafter") && !titles.has(it.identifier))) {
    try {
      const t = await titleInPantry(d.identifier);
      if (t) {
        titles.set(d.identifier, t);
        renderLibrary();
      } else wrong++;
    } catch (e) {
      banner(`\u8BFB\u540D\u5B57\u5931\u8D25\uFF1A${errorText(e)}`, "warning");
    }
  }
  if (wrong) say(`${wrong} \u5F20\u76D8\u8FD9\u4E2A\u53E3\u4EE4\u6253\u4E0D\u5F00`);
}
var appState = () => getStore().collection("synced-app-state");
function lastPlayed() {
  try {
    return appState().getItem("lastDisc", null);
  } catch {
    return null;
  }
}
async function withPassword(open, what) {
  let pw;
  let hint = "";
  for (; ; ) {
    try {
      return await open(pw);
    } catch (e) {
      if (!(e instanceof NeedPassword || e instanceof WrongPasswordError)) throw e;
      if (e instanceof WrongPasswordError) hint = "\u53E3\u4EE4\u4E0D\u5BF9\uFF0C\u518D\u8BD5\u4E00\u6B21\u3002";
      const got = await askPassword(`${what}\u662F\u52A0\u5BC6\u7684`, hint || "\u8F93\u5165\u53E3\u4EE4\u3002\u53E3\u4EE4\u53EA\u5728\u8FD9\u4E00\u9875\u91CC\u8BB0\u7740\uFF0C\u5173\u6389\u5C31\u5FD8\u3002");
      if (!got) return null;
      pw = got;
    }
  }
}
function playFromPantry(identifier, resume) {
  audioContext();
  runPlay(() => withPassword((pw) => fromPantry(identifier, pw), "\u8FD9\u5F20\u76D8"), resume);
}
function playLocal(file) {
  audioContext();
  runPlay(() => withPassword((pw) => fromLocalFile(file, pw), "\u8FD9\u4E2A\u6587\u4EF6"), false);
}
function runPlay(prepare, resume) {
  if (session) return;
  play(prepare, resume).catch((e) => {
    console.error(e);
    banner(`\u542F\u52A8\u5931\u8D25\uFF1A${errorText(e)}`);
    $("home").hidden = false;
    $("game").hidden = true;
  });
}
async function ensurePassword(why) {
  const pw = getPassword();
  if (pw) return pw;
  const got = await askPassword("\u8BBE\u4E2A\u53E3\u4EE4", `${why}\u90FD\u7528\u53E3\u4EE4\u52A0\u5BC6\u540E\u624D\u5B58\u8FDB OneDrive\u3002\u53E3\u4EE4\u53EA\u5728\u8FD9\u4E00\u9875\u91CC\u8BB0\u7740\uFF0C\u5173\u6389\u5C31\u5FD8\uFF1B\u4E0B\u6B21\u8981\u8F93\u540C\u4E00\u4E2A\u3002`);
  if (got) setPassword(got);
  return got;
}
var jamBlocked = false;
async function play(prepare, resume) {
  const disc = await prepare();
  if (!disc) return;
  current = disc;
  let memstick = /* @__PURE__ */ new Map();
  say("\u6B63\u5728\u8BFB\u8BB0\u5FC6\u68D2\u2026", 3e4);
  const listed = await listJams(auth.isSignedIn() ? 1e4 : 1500);
  if (listed.ids.length) {
    const loaded = await withPassword(async (pw) => {
      const p = pw ?? getPassword();
      if (!p) throw new NeedPassword();
      const m = await loadMemstick(p, listed.ids, listed.complete);
      if (pw) setPassword(pw);
      return m;
    }, "\u6E38\u620F\u5B58\u6863");
    if (loaded) {
      memstick = loaded.files;
      say(`\u8BB0\u5FC6\u68D2\uFF1A${loaded.dirs.size} \u4E2A\u5B58\u6863`);
    } else {
      jamBlocked = true;
      banner("\u6CA1\u8BFB\u8BB0\u5FC6\u68D2\uFF1A\u8FD9\u4E00\u5C40\u91CC\u6E38\u620F\u81EA\u5DF1\u5B58\u7684\u6863\u4E0D\u4F1A\u540C\u6B65\u5230 OneDrive\uFF08\u514D\u5F97\u76D6\u6389\u539F\u6765\u7684\uFF09\u3002", "warning");
    }
  } else say("\u8BB0\u5FC6\u68D2\u662F\u7A7A\u7684", 2e3);
  if (auth.isSignedIn() && !listed.complete) banner("\u8BB0\u5FC6\u68D2\u7684\u4E91\u7AEF\u5217\u8868\u6CA1\u62FF\u5168\uFF08\u7F51\u7EDC\u6162\uFF1F\uFF09\uFF1A\u8FD9\u4E00\u5C40\u53EF\u80FD\u770B\u4E0D\u5230\u522B\u7684\u8BBE\u5907\u4E0A\u7684\u65B0\u5B58\u6863\u3002", "warning");
  $("home").hidden = true;
  $("game").hidden = false;
  $("title").textContent = disc.title;
  setActiveIdentifier(disc.identifier);
  session = await CoreSession.start({
    media: disc.media,
    ext: disc.ext,
    coreDir: "./dist/core-7b77a439ff6e/",
    glCanvas: $("gl"),
    softCanvas: $("screen"),
    audioContext: audioContext(),
    lowLatency: params.get("lowlatency") !== "0",
    pacing: params.get("pace") === "wall" ? "wall" : params.get("pace") === "audio" ? "audio" : void 0,
    memstick
  });
  if (disc.identifier) {
    try {
      appState().setItem("lastDisc", disc.identifier);
    } catch (e) {
      console.warn(e);
    }
  }
  watchSlots(disc.key, (s) => {
    slots = s;
  });
  jamSigs = session.memstickDirs();
  setInterval(() => jamTick(false), JAM_POLL_MS);
  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") jamTick(true);
  });
  requestAnimationFrame(frame);
  renderToolbar();
  const autoState = params.get("state");
  if (autoState && DEV_SERVER) restoreFromDevServer(autoState).catch((e) => say(`\u8BFB\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(e)}`));
  else if (resume) resumeNewest().catch((e) => banner(`\u8BFB\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(e)}`));
}
async function resumeNewest() {
  for (let i = 0; i < 50 && !slots.some((s) => s.savedAt); i++) await new Promise((r) => setTimeout(r, 100));
  const newest = slots.filter((s) => s.savedAt).sort((a, b) => b.savedAt - a.savedAt)[0];
  if (!newest) {
    say("\u8FD9\u5F20\u76D8\u8FD8\u6CA1\u6709\u5FEB\u7167\uFF0C\u4ECE\u5934\u5F00\u59CB");
    return;
  }
  currentSlot = newest.slot;
  await loadFromSlot(newest.slot);
}
var jamSigs = /* @__PURE__ */ new Map();
var jamPending = /* @__PURE__ */ new Map();
var jamSaving = false;
var jamRetryAt = 0;
async function jamTick(force) {
  if (!session || jamBlocked || jamSaving || performance.now() < jamRetryAt) return;
  const now = session.memstickDirs();
  const changed = [], removed = [];
  for (const [dir, sig] of now) {
    if (jamSigs.get(dir) === sig) continue;
    if (force || jamPending.get(dir) === sig) changed.push(dir);
  }
  for (const dir of jamSigs.keys()) if (!now.has(dir) && (force || !jamPending.has(dir))) removed.push(dir);
  jamPending = now;
  if (!changed.length && !removed.length) return;
  const pw = await ensurePassword("\u6E38\u620F\u5B58\u6863");
  if (!pw) {
    jamBlocked = true;
    banner("\u6CA1\u8BBE\u53E3\u4EE4\uFF1A\u8FD9\u4E00\u5C40\u91CC\u6E38\u620F\u81EA\u5DF1\u5B58\u7684\u6863\u4E0D\u4F1A\u540C\u6B65\u3002", "warning");
    return;
  }
  jamSaving = true;
  try {
    let pushed = true;
    for (const dir of changed) {
      const r = await saveSaveDir(dir, session.readSaveDir(dir), pw);
      jamSigs.set(dir, now.get(dir));
      pushed &&= r.pushed;
    }
    for (const dir of removed) {
      await deleteSaveDir(dir);
      jamSigs.delete(dir);
    }
    say(pushed ? "\u6E38\u620F\u5B58\u6863\u5DF2\u540C\u6B65\u5230 OneDrive" : "\u6E38\u620F\u5B58\u6863\u5DF2\u5B58\u5728\u8FD9\u53F0\u8BBE\u5907\uFF08\u8054\u7F51\u767B\u5F55\u540E\u81EA\u52A8\u4F20\u4E0A\u53BB\uFF09");
  } catch (e) {
    jamRetryAt = performance.now() + 3e4;
    banner(`\u6E38\u620F\u5B58\u6863\u6CA1\u5B58\u4E0A\uFF1A${errorText(e)}\uFF0830 \u79D2\u540E\u518D\u8BD5\uFF09`);
  } finally {
    jamSaving = false;
  }
}
async function saveToSlot(slot) {
  if (!session || !current) return;
  const t0 = performance.now();
  const state = await session.snapshot();
  const pw = await ensurePassword("\u5FEB\u7167");
  if (!pw) return;
  say(`\u6B63\u5728\u5B58\u683C ${slot}\u2026`, 6e4);
  const r = await saveSlot(current.key, slot, state, pw);
  currentSlot = slot;
  say(`\u5DF2\u5B58\u683C ${slot}\uFF08${(state.length / 2 ** 20).toFixed(0)} MB\uFF0C${((performance.now() - t0) / 1e3).toFixed(1)} \u79D2\uFF09${r.pushed ? "\uFF0C\u5DF2\u4F20\u5230 OneDrive" : "\uFF0C\u5148\u5B58\u5728\u8FD9\u53F0\u8BBE\u5907\uFF0C\u8054\u7F51\u767B\u5F55\u540E\u81EA\u52A8\u4F20"}`);
}
async function loadFromSlot(slot) {
  if (!session || !current) return;
  const key = current.key;
  const state = await withPassword(async (pw) => {
    const p = pw ?? getPassword();
    if (!p) throw new NeedPassword();
    const s = await loadSlot(key, slot, p);
    if (pw) setPassword(pw);
    return s;
  }, "\u5FEB\u7167");
  if (!state) {
    say(`\u683C ${slot} \u662F\u7A7A\u7684`);
    return;
  }
  await session.restore(state);
  currentSlot = slot;
  say(`\u5DF2\u8BFB\u683C ${slot}`);
}
async function restoreFromDevServer(name) {
  const r = await fetch(`/__dev/state/${encodeURIComponent(name)}`);
  if (!r.ok) throw new Error(`server ${r.status}`);
  await session.restore(new Uint8Array(await r.arrayBuffer()));
  say(`\u5DF2\u8BFB\u5F00\u53D1\u5FEB\u7167 ${name}`);
}
function openSlots() {
  const when = (t) => t ? new Date(t).toLocaleString() : "\u7A7A";
  sheet((done) => [
    h("h2", {}, "\u5FEB\u7167"),
    h("p", { class: "hint" }, "\u6574\u673A\u72B6\u6001\uFF0C\u968F\u65F6\u5B58\u968F\u65F6\u8BFB\uFF08F2 \u5B58\u3001F4 \u8BFB\u5F53\u524D\u683C\uFF09\u3002\u6E38\u620F\u81EA\u5DF1\u5B58\u7684\u6863\u53E6\u5916\u81EA\u52A8\u540C\u6B65\uFF0C\u4E0D\u7528\u7BA1\u3002"),
    ...Array.from({ length: SLOTS }, (_, i) => {
      const s = slots[i] ?? { slot: i + 1, savedAt: null };
      return h(
        "div",
        { class: `slot${s.slot === currentSlot ? " current" : ""}` },
        h("span", { class: "slot-name" }, `\u683C ${s.slot}`),
        h("span", { class: "muted" }, when(s.savedAt)),
        h("button", { onclick: () => {
          done();
          saveToSlot(s.slot).catch((e) => banner(`\u5B58\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(e)}`));
        } }, "\u5B58\u5230\u8FD9\u683C"),
        h("button", { class: "primary", disabled: !s.savedAt, onclick: () => {
          done();
          loadFromSlot(s.slot).catch((e) => banner(`\u8BFB\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(e)}`));
        } }, "\u8BFB\u8FD9\u683C")
      );
    }),
    h("div", { class: "row" }, h("button", { onclick: () => done() }, "\u5173\u95ED"))
  ]);
}
function toolButton(name, title, onclick, label) {
  const b = h("button", { class: "icon-btn", title, "aria-label": title }, label ? h("span", { class: "label" }, label) : icon(name));
  b.addEventListener("click", () => {
    onclick();
    b.blur();
  });
  return b;
}
function renderToolbar() {
  if (!session) return;
  const paused = session.paused, fast = session.speed > 1;
  const bar = $("toolbar");
  const pauseBtn = toolButton(paused ? "play" : "pause", paused ? "\u7EE7\u7EED\uFF08P\uFF09" : "\u6682\u505C\uFF08P\uFF09", togglePause);
  const ffBtn = toolButton("fast-forward", fast ? "\u6062\u590D\u6B63\u5E38\u901F\u5EA6\uFF08Tab\uFF09" : `\u5FEB\u8FDB \xD7${FAST_FORWARD}\uFF08\u6309\u4F4F Tab\uFF09`, () => setFast(!fast));
  ffBtn.classList.toggle("on", fast);
  const padBtn = toolButton("gamepad", "\u5C4F\u5E55\u8F6F\u952E", toggleSoftKeys, "\u8F6F\u952E");
  padBtn.classList.toggle("on", softKeys?.visible ?? false);
  bar.replaceChildren(
    h("span", { id: "title-wrap" }, $("title")),
    pauseBtn,
    ffBtn,
    toolButton("floppy-disk", "\u5FEB\u7167", openSlots),
    padBtn,
    toolButton("maximize-viewport", "\u5168\u5C4F\uFF08Alt+Enter / \u53CC\u51FB\u753B\u9762\uFF09", toggleFullscreen),
    toolButton("more", "\u7EDF\u8BA1", () => {
      $("status").hidden = !$("status").hidden;
    }),
    toolButton("x", "\u9000\u51FA\u8FD9\u5F20\u76D8", quit)
  );
  $("paused-mark").hidden = !paused;
}
function togglePause() {
  if (!session) return;
  session.setPaused(!session.paused);
  renderToolbar();
}
function setFast(on) {
  if (!session) return;
  session.setSpeed(on ? FAST_FORWARD : 1);
  renderToolbar();
}
function toggleSoftKeys() {
  softKeys?.setVisible(!softKeys.visible);
  renderToolbar();
}
function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {
  });
  else $("stage").requestFullscreen({ navigationUI: "hide" }).catch((e) => say(`\u5168\u5C4F\u5931\u8D25\uFF1A${errorText(e)}`));
}
async function quit() {
  const ok = await confirmSheet("\u9000\u51FA\u8FD9\u5F20\u76D8\uFF1F", "\u6CA1\u5B58\u7684\u5FEB\u7167\u4F1A\u4E22\uFF1B\u6E38\u620F\u81EA\u5DF1\u5B58\u7684\u6863\u5DF2\u7ECF\u81EA\u52A8\u540C\u6B65\u3002", "\u9000\u51FA");
  if (!ok) return;
  await jamTick(true);
  location.reload();
}
var PAD_MAP = [
  [0, "cross"],
  [1, "circle"],
  [2, "square"],
  [3, "triangle"],
  [4, "l"],
  [5, "r"],
  [6, "l"],
  [7, "r"],
  [8, "select"],
  [9, "start"],
  [12, "up"],
  [13, "down"],
  [14, "left"],
  [15, "right"]
];
var STICK_DEADZONE = 0.12;
var padInfo = "";
function pollGamepads(s) {
  let mask = 0, ax = 0, ay = 0;
  const names = [];
  for (const gp of navigator.getGamepads?.() ?? []) {
    if (!gp || !gp.connected) continue;
    names.push(gp.id.slice(0, 40) + (gp.mapping === "standard" ? "" : "\uFF08\u975E\u6807\u51C6\u5E03\u5C40\uFF0C\u952E\u4F4D\u53EF\u80FD\u4E0D\u5BF9\uFF09"));
    for (const [i, name] of PAD_MAP) if (gp.buttons[i]?.pressed) mask |= bit(name);
    const x = gp.axes[0] ?? 0, y = gp.axes[1] ?? 0;
    if (Math.hypot(x, y) > STICK_DEADZONE && Math.hypot(x, y) > Math.hypot(ax, ay)) {
      ax = x;
      ay = y;
    }
  }
  padInfo = names.join(" + ");
  s.setMask("pad", mask);
  s.setAnalog(ax, ay);
}
var statusAt = 0;
function frame() {
  if (!session) return;
  pollGamepads(session);
  session.tick();
  const now = performance.now();
  if (!$("status").hidden && now - statusAt > 250) {
    statusAt = now;
    $("status").textContent = statusText();
  }
  requestAnimationFrame(frame);
}
function statusText() {
  const s = session.stats();
  return [
    `${APP_VERSION} \xB7 ${s.fps.toFixed(1)} fps \xB7 \u901F\u5EA6 ${(s.speed * 100).toFixed(0)}% \xB7 ${s.renderer} \xB7 \u9650\u901F\uFF1A${s.pacing}${s.paused ? " \xB7 \u6682\u505C\u4E2D" : ""}${s.gameSpeed > 1 ? ` \xB7 \u5FEB\u8FDB \xD7${s.gameSpeed}` : ""}`,
    `\u753B\u9762\u8282\u594F\uFF1A\u51FA\u5E27\u95F4\u9694 ${s.pace.mean.toFixed(1)} \xB1 ${s.pace.sd.toFixed(1)} ms \xB7 \u6700\u957F ${s.pace.max.toFixed(0)} ms \xB7 \u8DF3\u5E27 ${["\u5173", "\u6BCF 2 \u5E27\u753B 1", "\u6BCF 3 \u5E27\u753B 1"][s.frameskip]} \xB7 \u8FFD\u8FDB\u5EA6 ${s.catchup} \u5E27 \xB7 \u91CD\u65B0\u5BF9\u9F50 ${s.reanchors} \u6B21`,
    `\u663E\u793A\u5668 \u2248 ${s.displayHz.toFixed(0)} Hz \xB7 \u6BCF\u6B21\u5237\u65B0\u770B\u5230\u65B0\u5E27\uFF1A0 \u5F20 ${s.perRefresh[0]} \xB7 1 \u5F20 ${s.perRefresh[1]} \xB7 2 \u5F20\u4EE5\u4E0A ${s.perRefresh[2]}\uFF08\u6BCF\u79D2\uFF09`,
    `\u76D8\uFF1A\u8BFB\u4E86 ${(s.bytesFetched / 2 ** 20).toFixed(1)} MB / ${s.mediaReads} \u6B21 \xB7 \u7B49\u5F85\u4E2D ${s.readsWaiting}`,
    `\u58F0\u97F3\uFF1A${s.audioState} \xB7 \u7F13\u51B2 ${s.audioFillMs.toFixed(0)} ms \xB7 \u8F93\u51FA\u5EF6\u8FDF ${s.outputLatencyMs.toFixed(0)} ms \xB7 \u6B20\u8F7D\u7D2F\u8BA1 ${s.audioUnderrunMs.toFixed(0)} ms \xB7 \u4E22\u5F03 ${s.audioDropped}`,
    `\u624B\u67C4\uFF1A${padInfo || "\u6CA1\u68C0\u6D4B\u5230\uFF08\u63D2\u4E0A\u540E\u5728\u9875\u9762\u4E0A\u6309\u4E00\u4E0B\u624B\u67C4\u6309\u952E\uFF09"}`,
    `\u952E\u76D8\uFF1A\u65B9\u5411\u952E \xB7 X \u25CB \xB7 Z \xD7 \xB7 A \u25A1 \xB7 S \u25B3 \xB7 Q/W L/R \xB7 \u56DE\u8F66 Start \xB7 \u7A7A\u683C Select \xB7 P \u6682\u505C \xB7 \u6309\u4F4F Tab \u5FEB\u8FDB \xB7 F2 \u5B58 / F4 \u8BFB\u5F53\u524D\u683C`
  ].join("\n");
}
var KEYMAP = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", KeyX: "circle", KeyZ: "cross", KeyA: "square", KeyS: "triangle", Enter: "start", Space: "select", KeyQ: "l", KeyW: "r" };
function onKey(e, down) {
  if (!session || isSheetOpen()) return;
  if (down && e.code === "Enter" && e.altKey) {
    e.preventDefault();
    toggleFullscreen();
    return;
  }
  if (e.code === "Tab") {
    e.preventDefault();
    if (!e.repeat) setFast(down);
    return;
  }
  if (down && !e.repeat) {
    if (e.code === "KeyP") {
      e.preventDefault();
      togglePause();
      return;
    }
    if (e.code === "F2") {
      e.preventDefault();
      saveToSlot(currentSlot).catch((err2) => banner(`\u5B58\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(err2)}`));
      return;
    }
    if (e.code === "F4") {
      e.preventDefault();
      loadFromSlot(currentSlot).catch((err2) => banner(`\u8BFB\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(err2)}`));
      return;
    }
  }
  const b = KEYMAP[e.code];
  if (!b) return;
  e.preventDefault();
  const m = session.getMask("keyboard");
  session.setMask("keyboard", down ? m | bit(b) : m & ~bit(b));
}
async function boot() {
  mountIcons();
  $("version").textContent = APP_VERSION;
  if (!await ensureIsolation()) {
    $("library").replaceChildren(h("p", {}, "\u8FD9\u4E2A\u6D4F\u89C8\u5668\u5F00\u4E0D\u4E86\u591A\u7EBF\u7A0B\uFF08\u8DE8\u6E90\u9694\u79BB\u6CA1\u751F\u6548\uFF09\u3002\u8BF7\u6362\u6700\u65B0\u7248\u7684 Chrome / Edge / Safari / Quest \u6D4F\u89C8\u5668\u3002"));
    return;
  }
  softKeys = mountSoftKeys($("stage"), (m) => session?.setMask("soft", m));
  if (matchMedia("(pointer: coarse)").matches) softKeys.setVisible(true);
  $("stage").addEventListener("dblclick", (e) => {
    if (!e.target.closest(".softkeys .pk, .softkeys .dpad")) toggleFullscreen();
  });
  addEventListener("keydown", (e) => onKey(e, true));
  addEventListener("keyup", (e) => onKey(e, false));
  addEventListener("blur", () => session?.setMask("keyboard", 0));
  const fileInput = $("local-file");
  $("open-local").addEventListener("click", () => {
    audioContext();
    fileInput.click();
  });
  fileInput.addEventListener("change", () => {
    const f = fileInput.files?.[0];
    if (f) playLocal(f);
  });
  $("unlock").addEventListener("click", () => {
    unlockTitles().catch((e) => banner(errorText(e)));
  });
  const store2 = getStore();
  store2.files.watchFolder(PANTRY, (snap) => {
    pantryItems = snap.items;
    pantryComplete = snap.complete;
    renderLibrary();
  });
  renderAccount();
  renderLibrary();
  auth.onAuthChanged(() => {
    renderAccount();
    renderLibrary();
    if (auth.isSignedIn()) {
      for (const f of [PANTRY, CRUMBS, JARS]) store2.files.ensureFolder(f).catch((e) => console.warn("[ensureFolder]", f, e));
      store2.files.drainOfflineQueue().catch((e) => console.warn("[drain]", e));
    }
  });
  try {
    await auth.initAuth();
  } catch (e) {
    banner(`OneDrive \u767B\u5F55\u72B6\u6001\u8BFB\u53D6\u5931\u8D25\uFF1A${errorText(e)}`, "warning");
  }
  try {
    await appState().init();
    renderLibrary();
  } catch (e) {
    console.warn("[app-state]", e);
  }
}
globalThis.kr = {
  stats: () => session ? { ...session.stats(), note: lastNote } : null,
  async press(name, ms = 120) {
    if (!session) return;
    session.setMask("test", bit(name));
    await new Promise((r) => setTimeout(r, ms));
    session.setMask("test", 0);
  },
  inputMask: () => session ? session.inputMask() : 0,
  snapshot: async () => session ? (await session.snapshot()).length : 0,
  restoreFromServer: restoreFromDevServer,
  started: () => session !== null,
  pause: (p) => {
    session?.setPaused(p);
    renderToolbar();
  },
  speed: (x) => {
    session?.setSpeed(x);
    renderToolbar();
  }
};
boot().catch((e) => {
  console.error(e);
  banner(`\u542F\u52A8\u5931\u8D25\uFF1A${errorText(e)}`);
});
//# sourceMappingURL=kudsrocket-007a2252cab7.mjs.map
