// <define:__CORE_DIRS__>
var define_CORE_DIRS_default = { ppsspp: "./dist/core-602016aa4429/", mgba: "./dist/core-mgba-0eb982e32acb/" };

// src/version.ts
var APP_VERSION = "v0.2.9-2026-10-24";

// src/app/config.ts
var APP_ID = "kudsrocket";
var APP_GUID = "kudsrocket-1773e4e65b0a1462";
var CLIENT_ID = "0c1d8f21-dce6-4e17-a919-e6f226c47ee2";
var AUTHORITY = "https://login.microsoftonline.com/consumers";
var SCOPES = ["Files.ReadWrite.AppFolder", "offline_access"];
var MSAL_URL = "./vendor/msal/msal-browser.min.js";
var PANTRY = "pantry";
var CRUMBS = "crumbs";
var JARS = "jars";
var DISC_SUFFIXES = [".wafter", ".iso", ".cso", ".gba", ".gb", ".gbc"];
var CRUMB_SUFFIX = ".crumb";
var JAM_SUFFIX = ".jam";
var RECIPES = "recipes";
var RECIPE_SUFFIX = ".recipe";
var TINS = "tins";
var TIN_SUFFIX = ".biscuit";
var DOC_KINDS = [
  { kind: "disc", suffix: ".wafter", container: "raw", tier: "resource" },
  { kind: "disc", suffix: ".iso", container: "raw", tier: "resource" },
  { kind: "disc", suffix: ".cso", container: "raw", tier: "resource" },
  { kind: "disc", suffix: ".gba", container: "raw", tier: "resource" },
  // 卡带（mGBA）：同样三等、只读、不留本地（2026-10-21）
  { kind: "disc", suffix: ".gb", container: "raw", tier: "resource" },
  { kind: "disc", suffix: ".gbc", container: "raw", tier: "resource" },
  { kind: "crumb", suffix: CRUMB_SUFFIX, container: "raw" },
  { kind: "crumb", suffix: CRUMB_SUFFIX, container: "raw", tier: "auto-backup", stem: /^[0-9a-f]{16}-[ah]\d+$/ },
  { kind: "jam", suffix: JAM_SUFFIX, container: "raw" },
  // 菜谱 = 机器写、可重学的东西 → 二等：永不弹面、这台的赢（每台设备只写自己那份，撞上只会是同一台的两个标签页）
  { kind: "recipe", suffix: RECIPE_SUFFIX, container: "raw", tier: "auto-backup" },
  // 铁盒 = 一等作品：里面是人导入的攻略图 / 笔记，丢了没地方再生 → 冲突弹面、输家进备份箱（10-18）
  { kind: "tin", suffix: TIN_SUFFIX, container: "raw" }
];
var STREAM_LANES = 3;
var STREAM_STALL_MS = 3e3;
var AUTO_SLOTS = 4;
var LOCAL_SNAPSHOTS_KEPT = 2;
var AUTO_EVERY_MS = 10 * 6e4;
var AUTO_MIN_GAP_MS = 3e4;
var THUMB_W = 240;
var PLATFORM_CODE = { psp: "wafer", gba: "cracker" };
var JAM_POLL_MS = 1e3;
var ACTIVITY_INPUT_WINDOW_MS = 2 * 6e4;
var ACTIVITY_PROGRESS_WINDOW_MS = 2 * 6e4;

// assets/icons.svg
var icons_default = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none">\n<!--\n  24 icons extracted from the family icon library (../20260708 SVG Icons/icons.svg) by extract-icons.py \u2014 do not hand-edit; re-run the script instead.\n  Family SVG Icons \u2014 MIT License, Copyright (c) 2026 fangzhangmnm.\n  Contains work derived from (per-icon provenance in data-src):\n    Feather Icons \u2014 MIT License, Copyright (c) 2013-2023 Cole Bemis \xB7 https://github.com/feathericons/feather\n    Lucide \u2014 ISC License, Copyright (c) 2020 Lucide Contributors \xB7 https://github.com/lucide-icons/lucide\n-->\n  <!-- edit -->\n  <!-- paste \u2014 \u7C98\u8D34:\u526A\u8D34\u677F\u4E0D\u7F29(\u5E93\u5C3A\u5BF8)+\u6587\u6863\u63A2\u51FA\u53F3\u4E0B\u89D2, \u6309 copy \u7684\u524D\u540E\u4EF6\u6BD4\u4F8B -->\n  <symbol id="paste" data-cat="edit" data-src="own" data-note="\u7C98\u8D34:\u526A\u8D34\u677F\u4E0D\u7F29(\u5E93\u5C3A\u5BF8)+\u6587\u6863\u63A2\u51FA\u53F3\u4E0B\u89D2, \u6309 copy \u7684\u524D\u540E\u4EF6\u6BD4\u4F8B" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><mask id="icPaC"><rect width="24" height="24" fill="#fff" stroke="none"/><g transform="translate(6.76 3.85) scale(0.860)" fill="#000" stroke="#000" stroke-width="3.14" stroke-linejoin="round"><path d="M4 5.6a1.7 1.7 0 0 1 1.7-1.7h6.6l4 4v11.5a1.7 1.7 0 0 1-1.7 1.7H5.7A1.7 1.7 0 0 1 4 20.8z"/></g></mask><g mask="url(#icPaC)"><mask id="icPbTC"><rect width="24" height="24" fill="#fff"/><rect x="6.0" y="1.0000000000000002" width="6" height="4.2" rx="1.2" fill="#000" stroke="#000" stroke-width="2.4"/></mask><g mask="url(#icPbTC)"><rect x="2.0" y="3.3" width="14" height="17" rx="2"/></g><rect x="6.0" y="1.0000000000000002" width="6" height="4.2" rx="1.2"/></g><g transform="translate(6.76 3.85) scale(0.860)" stroke-width="1.98"><path d="M4 5.6a1.7 1.7 0 0 1 1.7-1.7h6.6l4 4v11.5a1.7 1.7 0 0 1-1.7 1.7H5.7A1.7 1.7 0 0 1 4 20.8z"/><path d="M12.3 3.9V8h4"/><path d="M6.6 12.4h7.2M6.6 15.4h5"/></g></symbol>\n  <!-- media -->\n  <!-- pause \u2014 \u6682\u505C:\u53CC\u7AD6\u6760 \u23F8(\u7C97 3.2 \u5706\u5E3D, brush-width \u540C\u6B3E\u52A0\u7C97\u624B\u6CD5); 20260819 media \u6279\u5165\u5E93 -->\n  <symbol id="pause" data-cat="media" data-src="own" data-note="\u6682\u505C:\u53CC\u7AD6\u6760 \u23F8(\u7C97 3.2 \u5706\u5E3D, brush-width \u540C\u6B3E\u52A0\u7C97\u624B\u6CD5); 20260819 media \u6279\u5165\u5E93" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="3.2"><path d="M8.3 5.5 V18.5"/><path d="M15.7 5.5 V18.5"/></g></symbol>\n  <!-- play \u2014 \u64AD\u653E:\u5B9E\u5FC3\u53F3\u5411\u4E09\u89D2 \u25B6(IEC 60417 \u78C1\u5E26\u673A\u60EF\u4F8B\u7EDF\u4E00\u5B9E\u5FC3, \u63CF\u8FB9\u540C\u8272\u53E0\u52A0\u5F97\u5706\u89D2); 20260819 media \u6279\u5165\u5E93 -->\n  <symbol id="play" data-cat="media" data-src="own" data-note="\u64AD\u653E:\u5B9E\u5FC3\u53F3\u5411\u4E09\u89D2 \u25B6(IEC 60417 \u78C1\u5E26\u673A\u60EF\u4F8B\u7EDF\u4E00\u5B9E\u5FC3, \u63CF\u8FB9\u540C\u8272\u53E0\u52A0\u5F97\u5706\u89D2); 20260819 media \u6279\u5165\u5E93" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8.2 5.4 L18.8 12 L8.2 18.6 Z" fill="currentColor"/></symbol>\n  <!-- fast-forward \u2014 \u5FEB\u8FDB:\u53CC\u53F3\u5411\u5B9E\u5FC3\u4E09\u89D2 \u23E9(\u8D70\u5E26\u8BED\u4E49; timelapse-record \u7684\u52A0\u901F\u89D2\u6807\u7528 chevron \u5206\u5DE5); 20260819 media \u6279\u5165\u5E93 -->\n  <symbol id="fast-forward" data-cat="media" data-src="own" data-note="\u5FEB\u8FDB:\u53CC\u53F3\u5411\u5B9E\u5FC3\u4E09\u89D2 \u23E9(\u8D70\u5E26\u8BED\u4E49; timelapse-record \u7684\u52A0\u901F\u89D2\u6807\u7528 chevron \u5206\u5DE5); 20260819 media \u6279\u5165\u5E93" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.4 6.8 L10.9 12 L4.4 17.2 Z" fill="currentColor"/><path d="M13.1 6.8 L19.6 12 L13.1 17.2 Z" fill="currentColor"/></symbol>\n  <!-- volume \u2014 \u97F3\u91CF(BR \u97F3\u91CF\u6761\u65C1\u6807\u8BC6): \u5B9E\u5FC3\u5587\u53ED(\u7BB1\u4F53+\u9525\u5355\u8DEF\u5F84)+\u53CC\u58F0\u6CE2\u5F27(\u5185 r3.4 \xB142\xB0, \u5916 r6.1 \xB152\xB0, \u5F27\u95F4\u7559\u767D 1.0); media \u6279\u7EDF\u4E00\u5B9E\u5FC3, \u5F27\u7559\u63CF\u8FB9=\u58F0\u6CE2\u4E0D\u662F\u5B9E\u4F53\u300220260821 \u7532\u65B9\u62CD\u677F\u7D27\u51D1\u7248+\u7B2C\u4E8C\u9053\u58F0\u6CE2\u5165\u5E93(\u7A7A\u5FC3\u5587\u53ED\u7248/\u5355\u5F27\u7248\u843D\u9009) -->\n  <symbol id="volume" data-cat="media" data-src="own" data-note="\u97F3\u91CF(BR \u97F3\u91CF\u6761\u65C1\u6807\u8BC6): \u5B9E\u5FC3\u5587\u53ED(\u7BB1\u4F53+\u9525\u5355\u8DEF\u5F84)+\u53CC\u58F0\u6CE2\u5F27(\u5185 r3.4 \xB142\xB0, \u5916 r6.1 \xB152\xB0, \u5F27\u95F4\u7559\u767D 1.0); media \u6279\u7EDF\u4E00\u5B9E\u5FC3, \u5F27\u7559\u63CF\u8FB9=\u58F0\u6CE2\u4E0D\u662F\u5B9E\u4F53\u300220260821 \u7532\u65B9\u62CD\u677F\u7D27\u51D1\u7248+\u7B2C\u4E8C\u9053\u58F0\u6CE2\u5165\u5E93(\u7A7A\u5FC3\u5587\u53ED\u7248/\u5355\u5F27\u7248\u843D\u9009)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 10.3 H8.7 L12.6 6.6 V17.4 L8.7 13.7 H5.5 Z" fill="currentColor"/><path d="M15.13 9.73 A3.4 3.4 0 0 1 15.13 14.27"/><path d="M16.36 7.19 A6.1 6.1 0 0 1 16.36 16.81"/></symbol>\n  <!-- file -->\n  <!-- floppy-disk \u2014 \u8F6F\u76D8/\u4FDD\u5B58:\u6ED1\u76D6\u5DE6\u53F3\u5BF9\u79F0(7/17)\u4E14\u4E24\u7AD6\u7EBF\u9876\u5230\u9876\u8FB9 + \u9632\u5446\u89D2 k=3 -->\n  <symbol id="floppy-disk" data-cat="file" data-src="feather:save" data-note="\u8F6F\u76D8/\u4FDD\u5B58:\u6ED1\u76D6\u5DE6\u53F3\u5BF9\u79F0(7/17)\u4E14\u4E24\u7AD6\u7EBF\u9876\u5230\u9876\u8FB9 + \u9632\u5446\u89D2 k=3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h13l3 3v13a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 17 8 17 3"/></symbol>\n  <!-- folder-open \u2014 \u6253\u5F00\u7684\u6587\u4EF6\u5939:\u80CC\u677F\u6B62\u4E8E\u76D6\u9876 T \u63A5,\u4E0D\u518D\u4E92\u76F8\u538B\u7EBF -->\n  <symbol id="folder-open" data-cat="file" data-src="own" data-note="\u6253\u5F00\u7684\u6587\u4EF6\u5939:\u80CC\u677F\u6B62\u4E8E\u76D6\u9876 T \u63A5,\u4E0D\u518D\u4E92\u76F8\u538B\u7EBF" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18 V7 a2 2 0 0 1 2 -2 h4 l2 2 h6 a2 2 0 0 1 2 2 v1.8"/><path d="M3 18 L6.4 10.8 H21.6 L18.2 18 Z"/></symbol>\n  <!-- folder \u2014 \u6587\u4EF6\u5939:\u5DE6\u8FB9 tab + \u77E9\u5F62\u4E3B\u4F53 -->\n  <symbol id="folder" data-cat="file" data-src="lucide:folder" data-note="\u6587\u4EF6\u5939:\u5DE6\u8FB9 tab + \u77E9\u5F62\u4E3B\u4F53" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><!-- \u6587\u4EF6\u5939\uFF1A\u5DE6\u8FB9 tab + \u77E9\u5F62\u4E3B\u4F53 --> <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></symbol>\n  <!-- trash-can \u2014 \u5783\u573E\u6876:\u6876\u8EAB\u6536\u53E3(feather \u662F\u76F4\u7B52);\u4E0E fluent(\u5706\u63D0\u624B/\u66F4\u4F4E)\u3001heroicons(\u5F27\u5F62\u900F\u89C6)\u4EA6\u4E0D\u540C \u2014 own -->\n  <symbol id="trash-can" data-cat="file" data-src="own" data-note="\u5783\u573E\u6876:\u6876\u8EAB\u6536\u53E3(feather \u662F\u76F4\u7B52);\u4E0E fluent(\u5706\u63D0\u624B/\u66F4\u4F4E)\u3001heroicons(\u5F27\u5F62\u900F\u89C6)\u4EA6\u4E0D\u540C \u2014 own" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 9.5v9"/><path d="M14 9.5v9"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></symbol>\n  <!-- new \u2014 \u65B0\u5EFA:\u7EAF\u52A0\u53F7(\u7B49\u957F\u5341\u5B57\u7EBF) -->\n  <symbol id="new" data-cat="file" data-src="own" data-note="\u65B0\u5EFA:\u7EAF\u52A0\u53F7(\u7B49\u957F\u5341\u5B57\u7EBF)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/> <line x1="5" y1="12" x2="19" y2="12"/></symbol>\n  <!-- hierarchy -->\n  <!-- lock \u2014 \u9501:\u4F53 13x11+\u9501\u6881\u62AC\u9AD8(\u817F3.5),\u6574\u4F53\u5C45\u4E2D -->\n  <symbol id="lock" data-cat="hierarchy" data-src="own" data-note="\u9501:\u4F53 13x11+\u9501\u6881\u62AC\u9AD8(\u817F3.5),\u6574\u4F53\u5C45\u4E2D" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="10" width="13" height="11"/><path d="M8.8 10 V6.5 a3.2 3.2 0 0 1 6.4 0 V10"/></symbol>\n  <!-- common -->\n  <!-- x \u2014 \u53C9 -->\n  <symbol id="x" data-cat="common" data-src="own" data-note="\u53C9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5 L17.5 17.5 M17.5 6.5 L6.5 17.5"/></symbol>\n  <!-- chevron-left \u2014 \u2039 \u5C0F\u5C3A\u5BF8\u4F18\u5316\u88F8 chevron:\u63CF\u8FB9 2.4\u3001\u81C2\u77ED(14px chip \u7528)\uFF1B\u5E93\u91CC\u5E26\u6746\u7684 back \u662F\u53E6\u4E00\u8BED\u4E49\u3010WeebPaint \u53C2\u8003\u7A97\u591A\u56FE\u65F6\u7A97\u5E95\u7FFB\u9875 chip\uFF1Bfable \u81EA\u753B\u672A\u8FC7\u76EE\u3011 -->\n  <symbol id="chevron-left" data-cat="common" data-src="own" data-note="\u2039 \u5C0F\u5C3A\u5BF8\u4F18\u5316\u88F8 chevron:\u63CF\u8FB9 2.4\u3001\u81C2\u77ED(14px chip \u7528)\uFF1B\u5E93\u91CC\u5E26\u6746\u7684 back \u662F\u53E6\u4E00\u8BED\u4E49\u3010WeebPaint \u53C2\u8003\u7A97\u591A\u56FE\u65F6\u7A97\u5E95\u7FFB\u9875 chip\uFF1Bfable \u81EA\u753B\u672A\u8FC7\u76EE\u3011" data-review="pending" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="14.5 6 9 12 14.5 18" stroke-width="2.4"/></symbol>\n  <!-- chevron-right \u2014 \u203A chevron-left \u7684\u7CBE\u786E\u955C\u50CF\u3010WeebPaint \u53C2\u8003\u7A97\u7FFB\u9875 chip\uFF1Bfable \u81EA\u753B\u672A\u8FC7\u76EE\u3011 -->\n  <symbol id="chevron-right" data-cat="common" data-src="own" data-note="\u203A chevron-left \u7684\u7CBE\u786E\u955C\u50CF\u3010WeebPaint \u53C2\u8003\u7A97\u7FFB\u9875 chip\uFF1Bfable \u81EA\u753B\u672A\u8FC7\u76EE\u3011" data-review="pending" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="9.5 6 15 12 9.5 18" stroke-width="2.4"/></symbol>\n  <!-- back \u2014 \u8FD4\u56DE:\u5DE6\u5411\u6574\u7BAD\u5934(\u5E26\u6746;\u88F8 chevron-left \u66FE\u56E0\u5C0F\u5C3A\u5BF8\u6E32\u67D3\u5DEE\u88AB sunset) -->\n  <symbol id="back" data-cat="common" data-src="own" data-note="\u8FD4\u56DE:\u5DE6\u5411\u6574\u7BAD\u5934(\u5E26\u6746;\u88F8 chevron-left \u66FE\u56E0\u5C0F\u5C3A\u5BF8\u6E32\u67D3\u5DEE\u88AB sunset)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12H5"/><polyline points="11 6 5 12 11 18"/></symbol>\n  <!-- forward \u2014 \u524D\u8FDB:back \u7684\u7CBE\u786E\u955C\u50CF(\u53F3\u5411\u6574\u7BAD\u5934\u5E26\u6746;\u4E0E chevron-right \u88F8 chevron \u5206\u5DE5)\u3010WebXiaoHeiWu \u4FA7\u680F\u9875\u5934\u300C\u56DE\u9000\u300D\u53F3\u90BB\u7684\u300C\u524D\u8FDB\u300D\u94AE\uFF08\u56DE\u9000\u4E4B\u540E\u518D\u56DE\u53BB\uFF09\uFF1B2026-09-10 fable \u81EA\u753B\u672A\u8FC7\u76EE\u3011 -->\n  <symbol id="forward" data-cat="common" data-src="own" data-note="\u524D\u8FDB:back \u7684\u7CBE\u786E\u955C\u50CF(\u53F3\u5411\u6574\u7BAD\u5934\u5E26\u6746;\u4E0E chevron-right \u88F8 chevron \u5206\u5DE5)\u3010WebXiaoHeiWu \u4FA7\u680F\u9875\u5934\u300C\u56DE\u9000\u300D\u53F3\u90BB\u7684\u300C\u524D\u8FDB\u300D\u94AE\uFF08\u56DE\u9000\u4E4B\u540E\u518D\u56DE\u53BB\uFF09\uFF1B2026-09-10 fable \u81EA\u753B\u672A\u8FC7\u76EE\u3011" data-review="pending" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12H19"/><polyline points="13 6 19 12 13 18"/></symbol>\n  <!-- check \u2014 \u52FE -->\n  <symbol id="check" data-cat="common" data-src="own" data-note="\u52FE" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5 L9.5 17.5 L19.5 6.5"/></symbol>\n  <!-- cloud -->\n  <!-- cloud \u2014 \u4E91 -->\n  <symbol id="cloud" data-cat="cloud" data-src="feather:cloud" data-note="\u4E91" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></symbol>\n  <!-- viewport -->\n  <!-- maximize-viewport \u2014 \u9002\u914D\u89C6\u53E3:\u56DB\u89D2\u5411\u5916\u7684\u7BAD\u5934(reset-transform=\u540C\u5F62\u522B\u540D id, \u6539\u52A8\u4FDD\u6301\u540C\u51E0\u4F55) -->\n  <symbol id="maximize-viewport" data-cat="viewport" data-src="own" data-note="\u9002\u914D\u89C6\u53E3:\u56DB\u89D2\u5411\u5916\u7684\u7BAD\u5934(reset-transform=\u540C\u5F62\u522B\u540D id, \u6539\u52A8\u4FDD\u6301\u540C\u51E0\u4F55)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><!-- \u56DB\u89D2\u5411\u5916\u7684\u7BAD\u5934 --> <polyline points="4 9 4 4 9 4"/> <polyline points="20 9 20 4 15 4"/> <polyline points="4 15 4 20 9 20"/> <polyline points="20 15 20 20 15 20"/></symbol>\n  <!-- picture-in-picture \u2014 \u753B\u4E2D\u753B:\u5927\u6846(\u4E3B\u753B\u5E03) + \u53F3\u4E0B\u89D2\u5185\u5D4C\u5C0F\u7A97(\u53C2\u8003\u5C0F\u7A97\u81EA\u5DF1) -->\n  <symbol id="picture-in-picture" data-cat="viewport" data-src="own" data-note="\u753B\u4E2D\u753B:\u5927\u6846(\u4E3B\u753B\u5E03) + \u53F3\u4E0B\u89D2\u5185\u5D4C\u5C0F\u7A97(\u53C2\u8003\u5C0F\u7A97\u81EA\u5DF1)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><!-- \u5927\u6846\uFF08\u4E3B\u753B\u5E03\uFF09+ \u5185\u5D4C\u5C0F\u7A97\uFF08\u53C2\u8003\u5C0F\u7A97\u81EA\u5DF1\uFF09\u2014\u2014 picture-in-picture \u9690\u55BB --> <rect x="3" y="4" width="18" height="14" rx="2"/> <rect x="12" y="10" width="7" height="5" rx="1"/></symbol>\n  <!-- one-to-one \u2014 1:1 \u50CF\u7D20:\u56DB\u89D2\u62EC\u53F7 + \u4E2D\u5FC3\u4E00\u9897\u5B9E\u5FC3\u50CF\u7D20=\u300C\u4E00\u56FE\u50CF\u7D20\u5BF9\u4E00\u5C4F\u50CF\u7D20\u300D(\u4E0D\u5199 1:1 \u6587\u5B57)\u3010WeebPaint \u53C2\u8003\u7A97 \uFF0B \u83DC\u5355\u300C1:1 \u50CF\u7D20\u300D\u9879\uFF1Bfable \u81EA\u753B\u672A\u8FC7\u76EE\u3011 -->\n  <symbol id="one-to-one" data-cat="viewport" data-src="own" data-note="1:1 \u50CF\u7D20:\u56DB\u89D2\u62EC\u53F7 + \u4E2D\u5FC3\u4E00\u9897\u5B9E\u5FC3\u50CF\u7D20=\u300C\u4E00\u56FE\u50CF\u7D20\u5BF9\u4E00\u5C4F\u50CF\u7D20\u300D(\u4E0D\u5199 1:1 \u6587\u5B57)\u3010WeebPaint \u53C2\u8003\u7A97 \uFF0B \u83DC\u5355\u300C1:1 \u50CF\u7D20\u300D\u9879\uFF1Bfable \u81EA\u753B\u672A\u8FC7\u76EE\u3011" data-review="pending" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8 V3.5 H8"/><path d="M16 3.5 H20.5 V8"/><path d="M20.5 16 V20.5 H16"/><path d="M8 20.5 H3.5 V16"/><rect x="9.6" y="9.6" width="4.8" height="4.8" fill="currentColor" stroke="none"/></symbol>\n  <!-- ui -->\n  <!-- more \u2014 \u6EA2\u51FA\u83DC\u5355:\u6A2A\u5411\u4E09\u70B9(\u539F \u22EF \u5B57\u7B26\u8DE8\u5E73\u53F0\u5B57\u5F62\u4E0D\u4E00) -->\n  <symbol id="more" data-cat="ui" data-src="own" data-note="\u6EA2\u51FA\u83DC\u5355:\u6A2A\u5411\u4E09\u70B9(\u539F \u22EF \u5B57\u7B26\u8DE8\u5E73\u53F0\u5B57\u5F62\u4E0D\u4E00)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none"/></symbol>\n  <!-- keyboard \u2014 \u952E\u76D8:\u5706\u70B9\u52A0\u5927\u6536\u7D27+\u7A7A\u683C\u4E0A\u79FB\u4E0D\u538B\u6846(\u4E0E shortcut \u4E0D\u540C\u8BED\u4E49) -->\n  <symbol id="keyboard" data-cat="ui" data-src="own" data-note="\u952E\u76D8:\u5706\u70B9\u52A0\u5927\u6536\u7D27+\u7A7A\u683C\u4E0A\u79FB\u4E0D\u538B\u6846(\u4E0E shortcut \u4E0D\u540C\u8BED\u4E49)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="7.2" cy="9.7" r="1.15" fill="currentColor" stroke="none"/><circle cx="10.4" cy="9.7" r="1.15" fill="currentColor" stroke="none"/><circle cx="13.6" cy="9.7" r="1.15" fill="currentColor" stroke="none"/><circle cx="16.8" cy="9.7" r="1.15" fill="currentColor" stroke="none"/><circle cx="7.2" cy="12.8" r="1.15" fill="currentColor" stroke="none"/><circle cx="10.4" cy="12.8" r="1.15" fill="currentColor" stroke="none"/><circle cx="13.6" cy="12.8" r="1.15" fill="currentColor" stroke="none"/><circle cx="16.8" cy="12.8" r="1.15" fill="currentColor" stroke="none"/><path d="M8.6 15.6 H15.4"/></symbol>\n  <!-- menu \u2014 \u6C49\u5821\u83DC\u5355:\u4E09\u6761\u7B49\u957F\u6A2A\u7EBF(y=7/12/17) -->\n  <symbol id="menu" data-cat="ui" data-src="own" data-note="\u6C49\u5821\u83DC\u5355:\u4E09\u6761\u7B49\u957F\u6A2A\u7EBF(y=7/12/17)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"></line> <line x1="4" y1="12" x2="20" y2="12"></line> <line x1="4" y1="17" x2="20" y2="17"></line></symbol>\n</svg>\n';

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
    overlayHost().append(back);
    openSheet = handle;
    box.querySelector("input, button.primary")?.focus();
  });
}
var isSheetOpen = () => openSheet !== null;
var OVERLAY_IDS = ["banners", "note", "update", "busy"];
var overlayHost = () => document.fullscreenElement ?? document.body;
function mountOverlays() {
  document.addEventListener("fullscreenchange", () => {
    const host = overlayHost();
    for (const id of OVERLAY_IDS) host.append($(id));
    for (const back of Array.from(document.querySelectorAll(".sheet-back"))) host.append(back);
  });
}
var rememberChoice = false;
function takeRememberChoice() {
  const v = rememberChoice;
  rememberChoice = false;
  return v;
}
function askPassword(title, hint = "", opts = {}) {
  rememberChoice = false;
  return sheet((done) => {
    const mode = opts.purpose === "new" ? "new-password" : "current-password";
    const account = h("input", { type: "text", name: "username", autocomplete: "username", value: APP_ID, readonly: true, tabindex: "-1", "aria-hidden": "true", class: "sr-only" });
    const input = h("input", { type: "password", name: mode, autocomplete: mode, spellcheck: "false", "aria-label": "\u53E3\u4EE4" });
    const remember = opts.offerRemember ? h("input", { type: "checkbox" }) : null;
    const submit = () => {
      if (input.value) {
        rememberChoice = !!remember?.checked;
        done(input.value);
      }
    };
    const form = h(
      "form",
      { class: "pw-form", onsubmit: (e) => {
        e.preventDefault();
        submit();
      } },
      account,
      input,
      remember ? h("label", { class: "remember-row" }, remember, h("span", {}, "\u5728\u8FD9\u53F0\u8BBE\u5907\u4E0A\u8BB0\u4F4F 30 \u5929"), h("span", { class: "hint" }, "\u80FD\u89E3\u9501\u8FD9\u53F0\u8BBE\u5907\u7684\u4EBA\u5C31\u80FD\u6253\u5F00\u4F60\u7684\u4E1C\u897F")) : null,
      h(
        "div",
        { class: "row" },
        h("button", { type: "button", onclick: () => done(null) }, "\u53D6\u6D88"),
        h("button", { type: "submit", class: "primary" }, "\u786E\u5B9A")
      )
    );
    queueMicrotask(() => input.focus());
    return [
      h("h2", {}, title),
      hint ? h("p", { class: "hint" }, hint) : null,
      form
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
function isNetworkError(e) {
  const x = e;
  return x?.name === "CloudNetworkError" || /network fetch failed|Load failed|Failed to fetch|NetworkError/i.test(x?.message ?? "");
}
function errorText(e) {
  if (isNetworkError(e)) return "\u7F51\u7EDC\u65AD\u4E86\u4E00\u4E0B\uFF08\u8FDE\u4E0D\u4E0A OneDrive\uFF09";
  if (e instanceof Error) return e.message;
  return String(e);
}

// src/app/save-scan.ts
function groupSaveDirs(files) {
  const norm2 = files.map((f) => ({ ...f, path: f.path.replace(/\\/g, "/").replace(/^\/+/, "") }));
  const roots = /* @__PURE__ */ new Map();
  for (const f of norm2) {
    const m = /^(?:(.*)\/)?([^/]+)\/PARAM\.SFO$/i.exec(f.path);
    if (!m) continue;
    const full = m[1] ? `${m[1]}/${m[2]}` : m[2];
    const prev = roots.get(m[2]);
    if (prev && prev !== full) throw new Error(`\u5B58\u6863\u76EE\u5F55 ${m[2]} \u5728\u9009\u6765\u7684\u4E1C\u897F\u91CC\u6709\u4E24\u4EFD\uFF08${prev} \u548C ${full}\uFF09\u2014\u2014\u53EA\u9009\u4E00\u4EFD SAVEDATA`);
    roots.set(m[2], full);
  }
  const out = [];
  for (const [dir, full] of roots) {
    const files2 = /* @__PURE__ */ new Map();
    let newest = 0;
    for (const f of norm2) {
      if (!f.path.startsWith(full + "/")) continue;
      files2.set(`${dir}/${f.path.slice(full.length + 1)}`, f);
      newest = Math.max(newest, f.mtime);
    }
    out.push({ dir, game: gameOf(dir), files: files2, newest });
  }
  return out.sort((a, b) => a.dir.localeCompare(b.dir));
}
var gameOf = (dir) => /^[A-Z]{4}\d{5}/.test(dir) ? dir.slice(0, 9) : dir;
function sfoInfo(bytes) {
  if (!bytes || bytes.length < 20) return {};
  const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (v.getUint32(0, true) !== 1179865088) return {};
  const keyTab = v.getUint32(8, true), dataTab = v.getUint32(12, true), n = v.getUint32(16, true);
  const out = {};
  for (let i = 0; i < n && 20 + i * 16 + 16 <= bytes.length; i++) {
    const e = 20 + i * 16;
    const kOff = v.getUint16(e, true), fmt2 = v.getUint16(e + 2, true), len = v.getUint32(e + 4, true), dOff = v.getUint32(e + 12, true);
    let end = keyTab + kOff;
    while (end < bytes.length && bytes[end]) end++;
    const key = new TextDecoder().decode(bytes.subarray(keyTab + kOff, end));
    if (fmt2 !== 516) continue;
    const s = new TextDecoder().decode(bytes.subarray(dataTab + dOff, Math.min(bytes.length, dataTab + dOff + len))).replace(/\0+$/, "").replace(/\s+/g, " ").trim();
    if (key === "TITLE") out.title = s;
    else if (key === "SAVEDATA_TITLE") out.saveTitle = s;
    else if (key === "SAVEDATA_DETAIL") out.detail = s;
  }
  return out;
}
function sameEntries(a, b) {
  const ka = Object.keys(a).sort(), kb = Object.keys(b).sort();
  if (ka.length !== kb.length || ka.some((k, i) => k !== kb[i])) return false;
  return ka.every((k) => a[k].length === b[k].length && a[k].every((x, i) => x === b[k][i]));
}
function differingFiles(mine, cloud) {
  const keys = [.../* @__PURE__ */ new Set([...Object.keys(mine), ...Object.keys(cloud)])].sort();
  const eq = (x, y) => x.length === y.length && x.every((b, i) => b === y[i]);
  return keys.filter((k) => !mine[k] || !cloud[k] || !eq(mine[k], cloud[k])).map((k) => k.split("/").slice(1).join("/") + (!mine[k] ? "\uFF08\u53EA\u5728\u4E91\u7AEF\uFF09" : !cloud[k] ? "\uFF08\u53EA\u5728\u8FD9\u8FB9\uFF09" : ""));
}
function groupByGame(dirs) {
  const m = /* @__PURE__ */ new Map();
  for (const d of dirs) {
    const g = m.get(d.game) ?? { game: d.game, title: "", dirs: [], newest: 0 };
    g.dirs.push(d.dir);
    g.newest = Math.max(g.newest, d.newest);
    if (!g.title && d.title) g.title = d.title;
    m.set(d.game, g);
  }
  return [...m.values()].sort((a, b) => b.newest - a.newest);
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
var hMap = function(cd, mb3, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb3);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le = new u16(mb3);
  for (i = 1; i < mb3; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb3);
    var rvb = 15 - mb3;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb3 - cd[i];
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
var hTree = function(d, mb3) {
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
  if (mbt > mb3) {
    var i = 0, dt = 0;
    var lft = mbt - mb3, cst = 1 << lft;
    t2.sort(function(a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb3) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb3;
      } else
        break;
    }
    dt >>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb3)
        dt -= 1 << mb3 - tr[i2_2]++ - 1;
      else
        ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb3) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb3;
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
  var _a2 = hTree(lf, 15), dlt = _a2.t, mlb2 = _a2.l;
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
    lm = hMap(dlt, mlb2, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
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
function strToU8(str2, latin1) {
  if (latin1) {
    var ar_1 = new u8(str2.length);
    for (var i = 0; i < str2.length; ++i)
      ar_1[i] = str2.charCodeAt(i);
    return ar_1;
  }
  if (te)
    return te.encode(str2);
  var l = str2.length;
  var ar = new u8(str2.length + (str2.length >> 1));
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
    var c = str2.charCodeAt(i);
    if (c < 128 || latin1)
      w(c);
    else if (c < 2048)
      w(192 | c >> 6), w(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str2.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
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

// src/app/format/migrate/index.ts
var FORMAT = {
  crumb: { major: 1, minor: 0, patch: 0 },
  jam: { major: 1, minor: 0, patch: 0 },
  recipe: { major: 1, minor: 0, patch: 0 },
  tin: { major: 1, minor: 0, patch: 0 }
};
var MISSING_MAJOR = { crumb: 1, jam: 1, recipe: 1, tin: null };
var MIN_MAJOR = { crumb: 1, jam: 1, recipe: 1, tin: 1 };
var STAMP_AT = { crumb: "format", jam: "format", recipe: "format", tin: "self" };
var LABEL = { crumb: "\u5FEB\u7167", jam: "\u5B58\u6863\u7F50", recipe: "\u8BFB\u76D8\u83DC\u8C31", tin: "\u997C\u5E72\u94C1\u76D2" };
var STEPS = {};
var FormatTooNewError = class extends Error {
  component;
  fileStamp;
  appStamp;
  constructor(component, fileStamp, appStamp) {
    super(`\u8FD9\u4EFD${LABEL[component]}\u662F\u66F4\u65B0\u7248\u672C\u5199\u7684\uFF08\u683C\u5F0F ${fmt(fileStamp)}\uFF0C\u8FD9\u7248\u53EA\u8BA4\u5230 ${fmt(appStamp)}\uFF09\uFF1A\u8FD9\u7248\u6253\u4E0D\u5F00\uFF0C\u4E5F\u4E0D\u4F1A\u6539\u5B83`);
    this.name = "FormatTooNewError";
    this.component = component;
    this.fileStamp = fileStamp;
    this.appStamp = appStamp;
  }
};
var FormatTooOldError = class extends Error {
  component;
  fileStamp;
  constructor(component, fileStamp, minMajor) {
    super(`\u8FD9\u4EFD${LABEL[component]}\u7684\u683C\u5F0F ${fmt(fileStamp)} \u6BD4\u8FD9\u7248\u80FD\u8BFB\u7684\u8FD8\u8001\uFF08\u6700\u8001 ${minMajor}\uFF09`);
    this.name = "FormatTooOldError";
    this.component = component;
    this.fileStamp = fileStamp;
  }
};
var fmt = (s) => `${s.major}.${s.minor}.${s.patch}`;
var nat = (v) => typeof v === "number" && Number.isInteger(v) && v >= 0 ? v : null;
var obj = (x) => x && typeof x === "object" && !Array.isArray(x) ? x : {};
var stampObject = (c, json) => STAMP_AT[c] === "self" ? obj(json) : obj(obj(json).format);
function readStamp(c, json) {
  const o = stampObject(c, json);
  const major = nat(o.v) ?? MISSING_MAJOR[c];
  if (major === null) return null;
  return { major, minor: nat(o.minor) ?? 0, patch: nat(o.patch) ?? 0 };
}
function compareStamp(file, mine) {
  if (file.minor > mine.minor) return "newer-minor";
  if (file.minor < mine.minor) return "older";
  if (file.patch > mine.patch) return "newer-patch";
  if (file.patch < mine.patch) return "older";
  return "same";
}
function migrate(c, json, steps = STEPS) {
  const stamp2 = readStamp(c, json);
  if (!stamp2) throw new Error(`${c}: format stamp missing`);
  const mine = FORMAT[c];
  if (stamp2.major > mine.major) throw new FormatTooNewError(c, stamp2, mine);
  if (stamp2.major < MIN_MAJOR[c]) throw new FormatTooOldError(c, stamp2, MIN_MAJOR[c]);
  let cur = json, v = stamp2.major;
  while (v < mine.major) {
    const step = steps[c]?.[v];
    if (!step) throw new Error(`migrate: no step registered for ${c} v${v} \u2192 v${v + 1} (format discipline violated: every major bump needs a STEP)`);
    cur = step(cur);
    v++;
    if (stampObject(c, cur).v !== v) throw new Error(`migrate: step ${c} v${v - 1}\u2192v${v} did not set v`);
  }
  return { json: cur, stamp: stamp2, verdict: v !== stamp2.major ? "older" : compareStamp(stamp2, mine) };
}
function stampFields(c) {
  const s = FORMAT[c];
  return { v: s.major, minor: s.minor, patch: s.patch };
}
function checkFormat(c, json) {
  const r = migrate(c, obj(json));
  return { stamp: r.stamp, verdict: r.verdict };
}
var told = /* @__PURE__ */ new Set();
function toldOnce(c) {
  if (told.has(c)) return false;
  told.add(c);
  return true;
}
var newerMinorText = (c, file) => `\u8FD9\u4EFD${LABEL[c]}\u662F\u66F4\u65B0\u7248\u672C\u5199\u7684\uFF08\u683C\u5F0F ${fmt(file)}\uFF09\uFF1A\u8FD9\u7248\u6CA1\u6709\u7684\u529F\u80FD\u770B\u4E0D\u5230\uFF0C\u4E5F\u4E0D\u4F1A\u4E22\u3002`;

// src/app/format/metas.ts
function crumbMeta(m) {
  return { format: stampFields("crumb"), thumb: m.thumbB64, at: m.at, auto: m.auto, fp: m.fp, t: m.title, ...m.ws?.length && m.wsz ? { ws: m.ws, wsz: m.wsz } : {} };
}
function jamMeta(jar, at) {
  return { format: stampFields("jam"), jar, at };
}
function recipeMeta(at) {
  return { format: stampFields("recipe"), at };
}

// src/disc/crypt.ts
var MAGIC = "KRD1";
var MAGIC2 = "KRD2";
var TRAILER_BYTES = 64;
var HEADER_BYTES = 64;
var DEFAULT_ITERATIONS = 6e5;
var DEFAULT_META_CAP = 4096;
var HEAD_PEEK_BYTES = HEADER_BYTES + 64 * 1024;
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
var derivedKeys = /* @__PURE__ */ new Map();
var DERIVED_KEYS_MAX = 512;
async function deriveKeys(password, salt, iterations) {
  const cacheKey2 = `${iterations}:${Array.from(salt, (b) => b.toString(16).padStart(2, "0")).join("")}:${normalizePassword(password)}`;
  const hit = derivedKeys.get(cacheKey2);
  if (hit) return hit;
  const p = deriveKeysUncached(password, salt, iterations);
  derivedKeys.set(cacheKey2, p);
  p.catch(() => derivedKeys.delete(cacheKey2));
  if (derivedKeys.size > DERIVED_KEYS_MAX) derivedKeys.delete(derivedKeys.keys().next().value);
  return p;
}
async function deriveKeysUncached(password, salt, iterations) {
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
function encodeParams(t) {
  const out = new Uint8Array(HEADER_BYTES);
  const dv = new DataView(out.buffer);
  const magic = new TextEncoder().encode(t.layout === "head" ? MAGIC2 : MAGIC);
  if (t.layout === "head" && (t.metaCap % BLOCK !== 0 || t.metaCap / BLOCK > 65535 || t.metaCap < t.metaBytes)) throw new RangeError("bad metaCap");
  out.set(magic, 0);
  dv.setUint8(4, 1);
  dv.setUint8(5, KDF_PBKDF2_SHA256);
  dv.setUint16(6, t.layout === "head" ? t.metaCap / BLOCK : 0);
  dv.setUint32(8, t.iterations);
  out.set(t.salt, 12);
  out.set(t.nonce, 28);
  out.set(t.metaIv, 36);
  dv.setUint32(48, t.metaBytes);
  dv.setBigUint64(52, BigInt(t.bodyBytes));
  out.set(magic, 60);
  return out;
}
function decodeParams(bytes) {
  if (bytes.length !== HEADER_BYTES) throw new NotADiscError();
  const dec = new TextDecoder();
  const m0 = dec.decode(bytes.subarray(0, 4)), m1 = dec.decode(bytes.subarray(60, 64));
  const layout = m0 === MAGIC2 ? "head" : m0 === MAGIC ? "tail" : (() => {
    throw new NotADiscError();
  })();
  if (m1 !== m0) throw new NotADiscError();
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (dv.getUint8(4) !== 1) throw new NotADiscError(`unsupported KRD version ${dv.getUint8(4)}`);
  if (dv.getUint8(5) !== KDF_PBKDF2_SHA256) throw new NotADiscError(`unsupported KDF id ${dv.getUint8(5)}`);
  const bodyBytes = dv.getBigUint64(52);
  if (bodyBytes > BigInt(Number.MAX_SAFE_INTEGER)) throw new CorruptDiscError("body length out of range");
  const metaBytes = dv.getUint32(48);
  const metaCap = layout === "head" ? dv.getUint16(6) * BLOCK : metaBytes;
  if (layout === "head" && metaCap < metaBytes) throw new CorruptDiscError("metadata larger than its reserved area");
  return {
    iterations: dv.getUint32(8),
    salt: bytes.slice(12, 28),
    nonce: bytes.slice(28, 36),
    metaIv: bytes.slice(36, 48),
    metaBytes,
    bodyBytes: Number(bodyBytes),
    metaCap,
    layout,
    metaOffset: layout === "head" ? HEADER_BYTES : Number(bodyBytes),
    bodyOffset: layout === "head" ? HEADER_BYTES + metaCap : 0
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
  const layout = opts.layout ?? "head";
  const metaCap = layout === "head" ? Math.ceil((opts.metaCap ?? DEFAULT_META_CAP) / BLOCK) * BLOCK : 0;
  if (salt.length !== 16) throw new RangeError("salt must be 16 bytes");
  if (layout === "head" && (metaCap < BLOCK || metaCap / BLOCK > 65535)) throw new RangeError("metaCap out of range");
  const keys = opts.salt ? await cachedKeys(password, salt, iterations) : await deriveKeys(password, salt, iterations);
  let offset = 0;
  let tailSeen = false;
  return {
    headBytes: layout === "head" ? HEADER_BYTES + metaCap : 0,
    async encrypt(plain) {
      if (tailSeen) throw new RangeError("only the last chunk may have a length that is not a multiple of 16");
      if (plain.length % BLOCK !== 0) tailSeen = true;
      const out = await ctrAt(keys.body, nonce, offset, plain);
      offset += plain.length;
      return out;
    },
    encryptAt(at, plain) {
      return ctrAt(keys.body, nonce, at, plain);
    },
    async finish(extra = {}) {
      const meta = { v: 1, size: opts.size ?? offset, ...extra };
      const metaIv = random(12);
      const sealed = new Uint8Array(await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: metaIv },
        keys.meta,
        new TextEncoder().encode(JSON.stringify(meta))
      ));
      if (layout === "head") {
        if (sealed.length > metaCap) throw new RangeError(`metadata (${sealed.length} bytes) exceeds the reserved ${metaCap} bytes`);
        const head = new Uint8Array(HEADER_BYTES + metaCap);
        head.set(encodeParams({ iterations, salt, nonce, metaIv, metaBytes: sealed.length, bodyBytes: meta.size, metaCap, layout }), 0);
        head.set(sealed, HEADER_BYTES);
        return head;
      }
      const trailer = encodeParams({ iterations, salt, nonce, metaIv, metaBytes: sealed.length, bodyBytes: offset, metaCap: sealed.length, layout });
      const tail = new Uint8Array(sealed.length + TRAILER_BYTES);
      tail.set(sealed, 0);
      tail.set(trailer, sealed.length);
      return tail;
    }
  };
}
function metaCapFor(meta) {
  const n = new TextEncoder().encode(JSON.stringify(meta)).length + 16 + 256;
  return Math.max(DEFAULT_META_CAP, Math.ceil(n / BLOCK) * BLOCK);
}
async function peekDisc(source) {
  if (source.size < HEADER_BYTES) throw new NotADiscError();
  const head = await source.read(0, HEADER_BYTES);
  let t;
  if (new TextDecoder().decode(head.subarray(0, 4)) === MAGIC2) {
    t = decodeParams(head);
    if (t.layout !== "head" || HEADER_BYTES + t.metaCap + t.bodyBytes !== source.size) {
      throw new CorruptDiscError(`length mismatch: header says ${HEADER_BYTES}+${t.metaCap}+${t.bodyBytes}, file has ${source.size}`);
    }
    return t;
  }
  t = decodeParams(await source.read(source.size - TRAILER_BYTES, TRAILER_BYTES));
  if (t.layout !== "tail" || t.bodyBytes + t.metaBytes + TRAILER_BYTES !== source.size) {
    throw new CorruptDiscError(`length mismatch: trailer says ${t.bodyBytes}+${t.metaBytes}+${TRAILER_BYTES}, file has ${source.size}`);
  }
  return t;
}
async function openHead(head, password) {
  if (head.length < HEADER_BYTES || new TextDecoder().decode(head.subarray(0, 4)) !== MAGIC2) return null;
  const t = decodeParams(head.subarray(0, HEADER_BYTES));
  if (t.layout !== "head" || head.length < HEADER_BYTES + t.metaBytes) return null;
  const keys = await cachedKeys(password, t.salt, t.iterations);
  return { params: t, meta: await decryptMeta(keys, t, head.subarray(HEADER_BYTES, HEADER_BYTES + t.metaBytes)) };
}
async function decryptMeta(keys, t, sealed) {
  let meta;
  try {
    meta = JSON.parse(new TextDecoder().decode(
      await crypto.subtle.decrypt({ name: "AES-GCM", iv: t.metaIv }, keys.meta, sealed)
    ));
  } catch {
    throw new WrongPasswordError();
  }
  if (meta.v !== 1 || meta.size !== t.bodyBytes) throw new CorruptDiscError("metadata does not match the parameter block");
  return meta;
}
async function openDisc(source, password) {
  const t = await peekDisc(source);
  const keys = await cachedKeys(password, t.salt, t.iterations);
  const meta = await decryptMeta(keys, t, await source.read(t.metaOffset, t.metaBytes));
  const size = t.bodyBytes, base = t.bodyOffset;
  return {
    size,
    meta,
    async read(offset, length) {
      const start = Math.max(0, Math.min(size, offset));
      const end = Math.max(start, Math.min(size, offset + length));
      if (end === start) return new Uint8Array(0);
      const aligned = start - start % BLOCK;
      const cipher = await source.read(base + aligned, end - aligned);
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
async function pipe(bytes, ts) {
  const stream = new Blob([bytes]).stream().pipeThrough(ts);
  return new Uint8Array(await new Response(stream).arrayBuffer());
}
var deflateRaw = (bytes) => pipe(bytes, new CompressionStream("deflate-raw"));
var inflateRaw = (bytes) => pipe(bytes, new DecompressionStream("deflate-raw"));
async function sealBytes(password, plain, opts = {}) {
  const payload = opts.compress ? await deflateRaw(plain) : plain;
  const meta = { ...opts.meta, ...opts.compress ? { z: "deflate-raw" } : {}, sha256: await sha256Hex(payload) };
  const w = await beginDisc(password, { salt: opts.salt, metaCap: metaCapFor({ v: 1, size: payload.length, ...meta }) });
  const body = await w.encrypt(payload);
  const head = await w.finish(meta);
  const out = new Uint8Array(head.length + body.length);
  out.set(head, 0);
  out.set(body, head.length);
  return out;
}
async function unsealBytes(password, sealed) {
  const disc = await openDisc({ size: sealed.length, read: async (o, n) => sealed.subarray(o, o + n) }, password);
  const payload = await disc.read(0, disc.size);
  if (disc.meta.sha256 && disc.meta.sha256 !== await sha256Hex(payload)) throw new CorruptDiscError("content does not match its recorded sha256");
  if (disc.meta.z && disc.meta.z !== "deflate-raw") throw new CorruptDiscError(`unknown compression "${String(disc.meta.z)}"`);
  return { plain: disc.meta.z ? await inflateRaw(payload) : payload, meta: disc.meta };
}

// node_modules/@internal/store/dist/base/substrate.js
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
    let pending2 = null;
    let inFlight2 = null;
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
      inFlight2 = type;
      startVer = _editVersion;
      try {
        if (type === "push")
          await doPush();
        else
          await doLocal();
      } finally {
        inFlight2 = null;
        if (pending2) {
          const next = pending2;
          pending2 = null;
          _run(next);
        }
      }
    }
    function request(type) {
      if (!inFlight2) {
        _run(type);
        return;
      }
      const hasNewEdits = _editVersion !== startVer;
      const shouldQueue = inFlight2 === "local" && type === "push" ? true : hasNewEdits;
      if (!shouldQueue)
        return;
      if (type === "push" || pending2 !== "push")
        pending2 = type;
    }
    return { configure, request, state: () => ({ pending: pending2, inFlight: inFlight2, startVer }) };
  }
  const session2 = createCoalescer();
  return { edits, session: session2, serialize, serialize2, drain };
}

// node_modules/@internal/store/dist/works/local-head.js
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

// node_modules/@internal/store/dist/base/error-handling.js
var reporter = null;
function setStoreErrorReporter(fn) {
  reporter = fn;
}
function reportStoreError(err3, level = "error") {
  if (err3?.name === "IdbSuspendedError" && level !== "log")
    level = "log";
  reporter?.(err3, level);
}

// node_modules/@internal/store/dist/works/seal.js
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

// node_modules/@internal/store/dist/base/identifiers.js
var SEAL_SUFFIX = ".zip";
function validateDocKinds(docKinds) {
  if (!Array.isArray(docKinds))
    throw new Error("docKinds must be an array (pass [] to declare that this app has no document kinds)");
  const seen = /* @__PURE__ */ new Set();
  const plain = /* @__PURE__ */ new Set();
  for (const k of docKinds) {
    if (!k || typeof k.kind !== "string" || !k.kind)
      throw new Error(`docKinds: every row needs a non-empty kind (got ${JSON.stringify(k)})`);
    if (typeof k.suffix !== "string" || k.suffix.length < 2 || !k.suffix.startsWith("."))
      throw new Error(`docKinds[${k.kind}]: suffix must start with "." and have at least one character after it (got ${JSON.stringify(k.suffix)})`);
    if (k.suffix.includes("/") || /\s$/.test(k.suffix))
      throw new Error(`docKinds[${k.kind}]: suffix must not contain "/" or end with whitespace (got ${JSON.stringify(k.suffix)})`);
    if (k.container !== "raw" && k.container !== "zip")
      throw new Error(`docKinds[${k.kind}]: container must be "raw" or "zip" (got ${JSON.stringify(k.container)})`);
    if (k.tier !== void 0 && k.tier !== "work" && k.tier !== "auto-backup" && k.tier !== "resource")
      throw new Error(`docKinds[${k.kind}]: tier must be "work" | "auto-backup" | "resource" (got ${JSON.stringify(k.tier)})`);
    if (k.stem !== void 0 && !(k.stem instanceof RegExp))
      throw new Error(`docKinds[${k.kind}]: stem must be a RegExp (got ${JSON.stringify(String(k.stem))})`);
    if (k.stem && (k.stem.global || k.stem.sticky))
      throw new Error(`docKinds[${k.kind}]: stem must not use the g / y flags (stateful)`);
    if (k.validate !== void 0 && typeof k.validate !== "function")
      throw new Error(`docKinds[${k.kind}]: validate must be a function`);
    const low = k.suffix.toLowerCase();
    if (!k.stem) {
      if (plain.has(low))
        throw new Error(`docKinds: suffix ${JSON.stringify(k.suffix)} declared twice (rows sharing a suffix must carry a stem pattern; at most one may not)`);
      plain.add(low);
    }
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
  const kinds = Object.freeze(docKinds.map((k) => Object.freeze({
    kind: k.kind,
    suffix: k.suffix,
    container: k.container,
    tier: k.tier ?? "work",
    ...k.stem ? { stem: k.stem } : {},
    ...k.validate ? { validate: k.validate } : {}
  })));
  const bySuffix = /* @__PURE__ */ new Map();
  for (const k of kinds) {
    const low = k.suffix.toLowerCase();
    (bySuffix.get(low) ?? bySuffix.set(low, []).get(low)).push(k);
  }
  const suffixesLongestFirst = [...bySuffix.keys()].sort((a, b) => b.length - a.length);
  function match(identifier) {
    if (typeof identifier !== "string" || !identifier)
      return null;
    const slash = identifier.lastIndexOf("/");
    const folder = slash < 0 ? "" : identifier.slice(0, slash);
    const base = slash < 0 ? identifier : identifier.slice(slash + 1);
    const low = base.toLowerCase();
    for (const s of suffixesLongestFirst) {
      if (!(low.length > s.length && low.endsWith(s)))
        continue;
      const stem = base.slice(0, base.length - s.length);
      const rows = bySuffix.get(s);
      const row = rows.find((r) => r.stem && r.stem.test(stem)) ?? rows.find((r) => !r.stem);
      if (!row)
        continue;
      return { row, d: { identifier, folder, stem, suffix: base.slice(base.length - s.length), kind: row.kind, container: row.container, tier: row.tier ?? "work" } };
    }
    return null;
  }
  const parse = (identifier) => match(identifier)?.d ?? null;
  const rowOf2 = (identifier) => match(identifier)?.row ?? null;
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
  return { kinds, parse, rowOf: rowOf2, join, sealed, fromCloud };
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

// node_modules/@internal/store/dist/works/safe-resolve.js
function createSafeResolve(cfg) {
  const { cloud, local: local2, head, localDirty = () => false, validateAdopt: validateAdopt2, unseal = (_n, blob) => Promise.resolve(blob), onReplacing = () => {
  }, looksEncrypted = () => Promise.resolve(false), serialize = (_n, fn) => fn() } = cfg;
  const editCount = (name) => head.editCount?.(name) ?? 0;
  async function safePull(name, { adopt, forceBackup = false, inChain = false } = {}) {
    onReplacing(true);
    try {
      const e0 = editCount(name);
      let backupName;
      if (forceBackup || head.isDirtyAnywhere(name) || localDirty() || head.seenBase(name) == null) {
        try {
          backupName = await local2.backup(name);
        } catch (e) {
          reportStoreError(e, "warning");
          return { ok: false, reason: "backup-failed", error: e };
        }
      }
      const r = await cloud.pull(name);
      if (!r)
        return { ok: false, reason: "cloud-vanished", backupName };
      const plain = await unseal(name, r.blob);
      const ok = plain != null ? await validateAdopt2(plain, name) : await looksEncrypted(r.blob);
      if (!ok)
        return { ok: false, reason: "invalid-cloud-bytes", backupName };
      const commit = async () => {
        const e1 = editCount(name);
        if (e1 !== e0) {
          if (!forceBackup)
            return { ok: false, reason: "edited-during-pull", backupName };
          try {
            backupName = await local2.backup(name);
          } catch (e) {
            reportStoreError(e, "warning");
            return { ok: false, reason: "backup-failed", backupName, error: e };
          }
        }
        await local2.save(name, r.blob);
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
  async function weakOverride(name, bytes, backup = true) {
    const r = await cloud.weakOverride(name, bytes, { encrypted: await looksEncrypted(bytes), backup });
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
      const r = await weakOverride(name, ctx.bytes, ctx.loserBackup !== false);
      if (r.deferred)
        return { status: "unresolved", reason: "deferred", backedUp: r.backedUp };
      return { status: "resolved", resolution: "keepMine", backedUp: r.backedUp };
    }
    return { status: "cancelled" };
  }
  return { safePull, tryHeal, weakOverride, resolveConflict };
}

// node_modules/@internal/store/dist/works/push.js
var passBusy = (_l, fn) => fn();
var isConflict = (e) => !!e && (e.name === "CloudConflictError" || e.status === 412);
var pushRetryDefaults = { maxAttempts: 4, backoffMs: 200, exponential: false };
function retriable(e) {
  const x = e;
  const s = x?.status;
  if (x?.message === "Not signed in")
    return false;
  return (s == null || s === 429 || s >= 500 && s <= 599) && x?.name !== "CloudConflictError" && x?.name !== "CloudNameCollisionError";
}
function createPush(cfg) {
  const { cloud, head, seal, safeResolve, serialize, editVersion, busy = passBusy, maxAttempts = pushRetryDefaults.maxAttempts, backoffMs = pushRetryDefaults.backoffMs, exponential = pushRetryDefaults.exponential, sleep = (ms) => new Promise((r) => setTimeout(r, ms)) } = cfg;
  async function doPush(name, { encode: encode2, getEditVersion = editVersion, onConflict, adopt, surfaceCollision = false, onProgress, loserBackup }) {
    const ifMatch = head.ifMatchFor(name);
    const v0 = getEditVersion();
    const e0 = head.editCount?.(name) ?? 0;
    const editedSince = () => getEditVersion() !== v0 || (head.editCount?.(name) ?? 0) !== e0;
    const bytes = await seal.sealForWrite(name, await toU8(await encode2()));
    const isEnc = await seal.isContainer(bytes);
    const session2 = cfg.sessionFor ? await cfg.sessionFor(name, bytes) : void 0;
    return busy("sync.pushing", async () => {
      let attempt = 0, lastErr;
      while (attempt < maxAttempts) {
        attempt++;
        try {
          const { item } = await cloud.push(name, bytes, { baseEtag: ifMatch, encrypted: isEnc, onProgress, session: session2 });
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
            return await safeResolve.resolveConflict(name, choice, { bytes, adopt, inChain: true, loserBackup });
          }
          if (surfaceCollision && e?.name === "CloudNameCollisionError") {
            const choice = onConflict ? await onConflict({ name }) : "cancel";
            return await safeResolve.resolveConflict(name, choice, { bytes, adopt, inChain: true, loserBackup });
          }
          if (retriable(e) && attempt < maxAttempts) {
            lastErr = e;
            await sleep(exponential ? Math.min(backoffMs * 2 ** (attempt - 1), 15e3) : backoffMs * attempt);
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

// node_modules/@internal/store/dist/works/freshness.js
var passBusy2 = (_l, fn) => fn();
function createFreshness(cfg) {
  const { cloud, head, safeResolve, busy: _busy = passBusy2, hints, lineageFromDurable = true } = cfg;
  const adoptDurableBase = (name, localDirty) => {
    if (!lineageFromDurable)
      return;
    if (head.isDirtyAnywhere(name) || (localDirty ? localDirty() : false))
      return;
    const d = head.seenBase(name);
    if (d != null)
      head.markSeen(name, d);
  };
  const hintedInSync = (name) => {
    const h2 = hints?.peek(name);
    const base = head.seenBase(name);
    return !!h2 && base != null && h2.etag === base;
  };
  const pullFailText = (reason) => reason === "invalid-cloud-bytes" ? "\u4E91\u7AEF\u5185\u5BB9\u6CA1\u901A\u8FC7\u6821\u9A8C\uFF0C\u53EF\u80FD\u662F\u516C\u5171 Wi-Fi \u767B\u5F55\u9875\u52AB\u6301\u6216\u6587\u4EF6\u635F\u574F" : reason === "cloud-vanished" ? "\u4E91\u7AEF\u6587\u4EF6\u521A\u521A\u88AB\u79FB\u52A8\u6216\u5220\u9664" : reason === "backup-failed" ? "\u672C\u5730\u7559\u5E95\u5931\u8D25\uFF0C\u4E3A\u4FDD\u6570\u636E\u6CA1\u6709\u8986\u76D6" : reason;
  async function open(name, opts = {}) {
    const { isOnline = () => true, probe, onNewer, adopt, localDirty, busy = passBusy2 } = opts;
    if (!isOnline()) {
      adoptDurableBase(name, localDirty);
      return { source: "local", reason: "offline" };
    }
    if (hintedInSync(name)) {
      head.markSeen(name, head.seenBase(name));
      return { source: "local", reason: "in-sync" };
    }
    return busy("cloud.checking", async () => {
      let meta;
      if (probe) {
        const raced = await Promise.race([
          cloud.fetchMeta(name).then((m) => ({ k: "meta", m }), (e) => ({ k: "err", e })),
          Promise.resolve(probe).then(() => ({ k: "skip" }))
        ]);
        if (raced.k === "skip") {
          adoptDurableBase(name, localDirty);
          return { source: "local", reason: "skipped" };
        }
        if (raced.k === "err") {
          adoptDurableBase(name, localDirty);
          return { source: "local", reason: "cloud-error" };
        }
        meta = raced.m;
      } else {
        try {
          meta = await cloud.fetchMeta(name);
        } catch (e) {
          reportStoreError(e, "log");
          adoptDurableBase(name, localDirty);
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
    const { isOnline = () => true, adopt, localDirty, onReplaceStart, probe, busy = passBusy2, trustHints = true } = opts;
    if (!isOnline())
      return { status: "offline" };
    if (head.isDirtyAnywhere(name) || localDirty && localDirty())
      return { status: "dirty-skip" };
    if (trustHints && hintedInSync(name)) {
      head.markSeen(name, head.seenBase(name));
      return { status: "in-sync" };
    }
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

// node_modules/@internal/store/dist/works/fresh-hints.js
function createFreshHints(opts = {}) {
  const ttl = opts.ttlMs ?? 3e4;
  const now = opts.now ?? (() => Date.now());
  const map = /* @__PURE__ */ new Map();
  return {
    note(name, meta) {
      map.set(name, { meta, at: now() });
    },
    peek(name) {
      const h2 = map.get(name);
      if (!h2)
        return null;
      if (now() - h2.at > ttl) {
        map.delete(name);
        return null;
      }
      return h2.meta;
    },
    forget(name) {
      map.delete(name);
    }
  };
}

// node_modules/@internal/store/dist/base/move-aside.js
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

// node_modules/@internal/store/dist/works/delete.js
var passBusy3 = (_l, fn) => fn();
var DELQ_KEY = "internal.pending_deletions";
function createDelete(cfg) {
  const { cloud, local: local2, head, kv, busy: _busy = passBusy3 } = cfg;
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
    const { isOnline = () => true, confirm, onDirtyWarn, busy = _busy, expectCloudAbsent = false } = opts;
    if (confirm && !await confirm({ title: "\u5220\u9664", body: name, danger: true }))
      return { status: "cancelled" };
    if (head.isDirtyAnywhere(name) && onDirtyWarn && !await onDirtyWarn({ name }))
      return { status: "cancelled" };
    const localPresent = local2 ? await local2.exists(name) : false;
    const deleteEventId = asideStamp(Date.now());
    if (!isOnline()) {
      if (expectCloudAbsent)
        return { status: "cancelled", reason: "offline" };
      const baseEtag = cloud.getETag(name);
      let trashKey = null;
      if (localPresent)
        trashKey = await local2.trash(name, deleteEventId);
      const queuedCloudDelete = baseEtag != null;
      if (queuedCloudDelete)
        enqueue(name, baseEtag, deleteEventId);
      head.forget(name);
      return { status: "trashed", where: "local", queuedCloudDelete, baseEtag, trashKey };
    }
    return busy("file.deleting", async () => {
      let cloudPresent = false, metaFailed = false;
      try {
        cloudPresent = !!await cloud.fetchMeta(name);
      } catch (e) {
        reportStoreError(e, "log");
        cloudPresent = false;
        metaFailed = true;
      }
      if (expectCloudAbsent && metaFailed)
        return { status: "cancelled", reason: "offline" };
      if (expectCloudAbsent && cloudPresent)
        return { status: "cancelled", reason: "cloud-present" };
      if (cloudPresent) {
        const wasDirty = head.isDirtyAnywhere(name);
        const trashed = await cloud.trash(name, deleteEventId);
        if (localPresent) {
          if (wasDirty) {
            head.forget(name);
            const trashKey = await local2.trash(name, deleteEventId);
            return { status: "trashed", where: "both", trashed, trashKey };
          }
          await local2.hardDelete(name);
        }
        head.forget(name);
        return { status: "trashed", where: "cloud", trashed };
      }
      if (localPresent) {
        const trashKey = await local2.trash(name, deleteEventId);
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
      } catch (err3) {
        reportStoreError(err3, "log");
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

// node_modules/@internal/store/dist/base/is-hidden.js
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

// node_modules/@internal/store/dist/base/errors.js
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

// node_modules/@internal/store/dist/works/cloud-sync.js
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
  return { kinds: [], parse: () => null, rowOf: () => null, join: (p) => `${p.folder ? `${p.folder}/` : ""}${p.stem}${p.suffix}` };
}
var defaultCloudToName = (cloudName) => cloudName.endsWith(".zip") ? cloudName.slice(0, -4) : cloudName;
function createCloudSync(cfg) {
  const { provider, kv, fileName: fileName2, encFileName = null, contentType = "application/octet-stream", trashFolder = ".trash", backupFolder = ".backup", appKey = "sync", manageDirty = true } = cfg;
  const now = cfg.now || (() => Date.now());
  const isHiddenAny = (n) => isHidden(n) || !!cfg.hidden?.(n);
  async function _find(name) {
    const p = fileName2(name);
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
  const stampedName = (n, enc = false, stamp2 = asideStamp(now())) => (enc && encFileName ? encFileName : fileName2)(`${baseName(n)} [${stamp2}]`);
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
    const path = enc ? encFileName(name) : fileName2(name);
    let baseEtag = "baseEtag" in opts ? opts.baseEtag : getETag(name);
    if (encFileName && baseEtag) {
      const otherPath = enc ? fileName2(name) : encFileName(name);
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
      item = await provider.upload(path, bytes, { contentType, eTag: baseEtag, conflictBehavior: baseEtag ? "replace" : "fail", onProgress: opts.onProgress, session: opts.session });
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
  async function pushStream(name, source, opts = {}) {
    if (!provider.uploadStream)
      throw new Error("cloud-sync.pushStream: provider has no uploadStream");
    const path = fileName2(name);
    let item = null;
    try {
      item = await provider.uploadStream(path, source, { contentType, conflictBehavior: "fail", onProgress: opts.onProgress });
    } catch (e) {
      if (e?.status === 409)
        throw new CloudNameCollisionError(name);
      throw e;
    }
    if (!item || !item.eTag) {
      const fresh = await provider.getItemByPath(path).catch((e) => {
        reportStoreError(e, "log");
        return null;
      });
      if (fresh && fresh.eTag && fresh.size === source.size)
        item = fresh;
      else
        throw new Error(`cloud-sync.pushStream: upload of "${name}" was not confirmed by the cloud`);
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
    const mkName = opts.encrypted && encFileName ? encFileName : fileName2;
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
    const path = encFileName && opts.encrypted ? encFileName(name) : fileName2(name);
    const cur = await _find(name);
    let backedUp = null;
    let item;
    if (cur.item) {
      if (opts.backup !== false) {
        const folderId = await provider.ensureFolder(backupFolder);
        const stamped = stampedName(name, cur.enc);
        await provider.copy(cur.item.ref, folderId, stamped);
        backedUp = `${backupFolder}/${stamped}`;
      }
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
    const mkName = found.enc && encFileName ? encFileName : fileName2;
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
    pushStream,
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

// node_modules/@internal/store/dist/works/identity.js
var passBusy4 = (_l, fn) => fn();
function createIdentity(cfg) {
  const { cloud, local: local2, head, doPush, serialize, serialize2, seal, busy: _busy = passBusy4, isOnline, deleteOffline, queueUpload, nameOccupied } = cfg;
  const unseal = (name, blob) => seal ? seal.unsealForRead(name, blob) : Promise.resolve(blob);
  async function assertNameFree(newName, doCloud) {
    if (doCloud && nameOccupied) {
      if (await nameOccupied(newName))
        throw new CloudNameCollisionError(newName);
      return;
    }
    if (local2 && await local2.exists(newName))
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
      const hasLocal = local2 ? await local2.exists(oldName) : false;
      let bytes = null;
      if (encode2)
        bytes = await toU8(await encode2());
      else if (hasLocal)
        bytes = await toU8(await local2.get(oldName));
      if (doCloud && isOnline && !isOnline() && deleteOffline && hasLocal) {
        await local2.save(newName, bytes);
        head.recordEdit(newName);
        queueUpload?.(newName);
        await deleteOffline(oldName);
        return { status: "renamed", where: "offline-move", newName };
      }
      if (local2 && hasLocal) {
        await local2.save(newName, bytes);
        await local2.hardDelete(oldName);
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
      if (local2)
        await local2.save(localName, r.blob);
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

// node_modules/@internal/store/dist/works/trash.js
var passBusy5 = (_l, fn) => fn();
function createTrash(cfg) {
  const { cloud, local: local2, head, busy: _busy = passBusy5 } = cfg;
  async function restore(opts = {}) {
    const { fromCloud, cloudRef, targetName, trashKey, encrypted, busy = _busy } = opts;
    return busy("trash.restoring", async () => {
      let name = targetName || null, restoredLocal = false, restoredCloud = false;
      if (trashKey && local2) {
        const n = await local2.restore(trashKey);
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
      if (trashKey && local2 && local2.purgeTrash)
        await local2.purgeTrash(trashKey);
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
      if (scope !== "cloud" && local2 && local2.listTrash && local2.purgeTrash) {
        for (const t of await local2.listTrash()) {
          try {
            await local2.purgeTrash(t.trashKey);
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
      if (scope !== "cloud" && local2 && local2.listBackup && local2.purgeTrash) {
        for (const b of await local2.listBackup()) {
          try {
            await local2.purgeTrash(b.trashKey);
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

// node_modules/@internal/store/dist/works/offload.js
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
  const { cloud, local: local2, head, isOnline } = cfg;
  const serialize = cfg.serialize ?? ((_n, fn) => Promise.resolve().then(fn));
  async function offload(name) {
    return serialize(name, async () => {
      if (!await local2.exists(name))
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
      await local2.hardDelete(name);
      head.forget(name);
    });
  }
  return { offload };
}

// node_modules/@internal/store/dist/works/reconcile.js
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
  const { cloud, local: local2, head, pending: pending2, isOnline, activeIdentifier: activeFileNameFn } = cfg;
  const isHiddenAny = (n) => isHidden(n) || !!cfg.hidden?.(n);
  const now = cfg.now || (() => Date.now());
  const skipName = (opt) => opt ?? activeFileNameFn?.() ?? void 0;
  async function converge(localNames, cloudNames, authoritative, activeFileName) {
    if (!authoritative)
      return { demoted: [] };
    localNames = localNames.filter((n) => !isHiddenAny(n));
    for (const name of localNames) {
      if (pending2.isPending(name) && (cloudNames.has(name) || head.isDirtyAnywhere(name)))
        pending2.clear(name);
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
      if (!pending2.seenGone(name, now()))
        continue;
      if (cfg.drop?.(name))
        await local2.hardDelete(name);
      else
        await local2.trash(name, asideStamp(now()));
      cloud.clearState(name);
      head.forget(name);
      pending2.clear(name);
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
    return converge(await local2.appKeys(), cloudNames, authoritative, skipName(opts.activeFileName));
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
    const localNames = (await local2.appKeys()).filter((k) => {
      if (folder && !k.startsWith(prefix))
        return false;
      const rest = k.slice(prefix.length);
      return rest.length > 0 && !rest.includes("/");
    });
    return converge(localNames, cloudNames, true, skipName(opts.activeFileName));
  }
  return { reconcile, reconcileFolder };
}

// node_modules/@internal/store/dist/works/pending-gone.js
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

// node_modules/@internal/store/dist/works/folder-merge.js
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

// node_modules/@internal/store/dist/works/folder-flow.js
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

// node_modules/@internal/store/dist/works/collection.js
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
  const { cloud, name, isOnline, syncDelayMs = 1500, now = () => Date.now(), manual = false, local: local2, localWriteDelayMs = 400, getInitData } = cfg;
  const flow = createFolderFlow({ cloud, name, encode, decode, isOnline });
  let env = emptyFolder();
  let timer2 = null;
  let ready = false;
  const listeners2 = /* @__PURE__ */ new Set();
  let _firing = false;
  const _queued = [];
  function emit(changed) {
    if (!changed.length || !listeners2.size)
      return;
    if (_firing) {
      _queued.push(...changed);
      return;
    }
    _firing = true;
    try {
      let batch = changed;
      while (batch.length) {
        for (const cb of listeners2) {
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
    if (!listeners2.size)
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
    if (!local2 || hydrated)
      return;
    hydrated = true;
    try {
      idbHad = await local2.exists(localKey);
      if (idbHad) {
        const cached = parseFolderBlob(await bytesOf(await local2.get(localKey)) ?? new Uint8Array(0));
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
    if (!local2 || localTimer != null)
      return;
    localTimer = setTimeout(() => {
      localTimer = null;
      void writeLocalNow();
    }, localWriteDelayMs);
  }
  function writeLocalNow() {
    if (!local2)
      return Promise.resolve({ ok: true });
    clearLocalTimer();
    const snap = encode(env);
    localChain = localChain.then(() => local2.save(localKey, snap).then(() => ({ ok: true }))).catch((e) => {
      reportStoreError(e, "warning");
      return { ok: false, error: e };
    });
    return localChain;
  }
  function clearTimer() {
    if (timer2 != null) {
      clearTimeout(timer2);
      timer2 = null;
    }
  }
  function scheduleSync() {
    scheduleLocalWrite();
    cloud.setDirty(name, true);
    if (manual)
      return;
    clearTimer();
    timer2 = setTimeout(() => {
      timer2 = null;
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
    listeners2.add(cb);
    return () => {
      listeners2.delete(cb);
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

// node_modules/@internal/store/dist/works/listing.js
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
  const { cloud, local: local2, head, pendingFolders, isPendingGone, pendingFolderDeletions } = cfg;
  const describe = (n) => {
    const d = cfg.describe?.(n);
    return d ? d.kind !== void 0 ? { kind: d.kind, tier: d.tier } : { tier: d.tier } : { tier: "work" };
  };
  function classifyPath(path, cf, hasLocal, cloudReachable, absenceAuthoritative, localStat) {
    const hasCloud = cf != null;
    const seen = head.seenBase(path);
    const everSynced = seen != null;
    const cloudMoved = hasCloud && cf.eTag !== seen;
    const dirty = head.isDirtyAnywhere(path);
    const syncState2 = classifySyncState({
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
    return { identifier: path, ...describe(path), syncState: syncState2, size: cf?.size ?? localStat?.size, lastModified };
  }
  async function statLocal(keys) {
    const m = /* @__PURE__ */ new Map();
    if (!local2.stat)
      return m;
    await Promise.all([...keys].map(async (k) => {
      const s = await local2.stat(k);
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
    for (const k of await local2.appKeys()) {
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
        items.push({ identifier: f.name, ...describe(f.name), syncState: "cloud-only", size: f.size, lastModified: f.lastModified });
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
    const localSet = new Set((await local2.appKeys()).filter((k) => !isHiddenAny(k)));
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

// node_modules/@internal/store/dist/works/upload-queue.js
var UPQ_KEY = "internal.pending_uploads";
function createUploadReplay(cfg) {
  const { kv, local: local2, head, isOnline, serialize, pushLocal, policy, confirm, onStatus } = cfg;
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
        if (!await local2.exists(name))
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

// node_modules/@internal/store/dist/works/trash-merge.js
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

// node_modules/@internal/store/dist/base/idb-store.js
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
    void p?.then((db3) => {
      try {
        db3.close();
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
      const timer2 = setTimeout(() => {
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
        clearTimeout(timer2);
        const db3 = r.result;
        db3.onclose = () => {
          dropConnection(p);
        };
        db3.onversionchange = () => {
          db3.close();
          dropConnection(p);
        };
        if (_db !== p) {
          db3.close();
          return;
        }
        resolve(db3);
      };
      r.onerror = () => {
        clearTimeout(timer2);
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
  function tx3(mode, run, op = "tx") {
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
    return conn.then((db3) => new Promise((resolve, reject) => {
      const t = db3.transaction(STORE, mode);
      const ms = _idbOpTimeoutMs;
      const rec = { t, mode, suspended: false };
      _active.add(rec);
      let failed = false;
      const timer2 = setTimeout(() => {
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
        clearTimeout(timer2);
        _active.delete(rec);
        if (rec.suspended) {
          reject(new IdbSuspendedError(`${mode} ${op}`));
          return;
        }
        const err3 = t.error ?? new DOMException(`idb ${mode} transaction aborted`, "AbortError");
        if (err3.name === "QuotaExceededError")
          reportStoreError(err3, "error");
        reject(err3);
      };
      t.onerror = fail;
      t.onabort = fail;
      let finish;
      try {
        finish = run(t.objectStore(STORE));
      } catch (e) {
        failed = true;
        clearTimeout(timer2);
        _active.delete(rec);
        reject(e);
        t.abort();
        return;
      }
      t.oncomplete = () => {
        clearTimeout(timer2);
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
      return tx3("readonly", (s) => {
        const r = s.get(name);
        return () => r.result;
      }, "get");
    },
    put(name, rec) {
      return tx3("readwrite", (s) => {
        s.put(rec, name);
        return () => void 0;
      }, "put");
    },
    del(name) {
      return tx3("readwrite", (s) => {
        s.delete(name);
        return () => void 0;
      }, "del");
    },
    keys() {
      return tx3("readonly", (s) => {
        const r = s.getAllKeys();
        return () => r.result.filter((k) => typeof k === "string");
      }, "keys");
    },
    /** 按 key 前缀汇总占用（单事务 cursor 走一遍；`Blob.size` 是引用属性，**不把字节读进内存**）。
     *  只返两个标量，不返任何名字 —— 拿不到清单，故**不能**当全库列举用（那是被否决的退化设计）。 */
    usage(prefix) {
      return tx3("readonly", (s) => {
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
      return tx3("readwrite", (s) => {
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

// node_modules/@internal/store/dist/base/blob-partition.js
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

// node_modules/@internal/store/dist/base/local-cache.js
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

// node_modules/@internal/store/dist/stream/chunk-scheduler.js
var StreamStallError = class extends Error {
  constructor(key) {
    super(`chunk stalled (no bytes within the stall window): ${key}`);
    this.name = "StreamStallError";
  }
};
var MAX_ATTEMPTS = 3;
function createChunkScheduler(cfg = {}) {
  const lanes = Math.max(1, Math.floor(cfg.lanes ?? 1));
  const stallMs = cfg.stallMs !== void 0 && cfg.stallMs > 0 ? cfg.stallMs : null;
  const now = cfg.now ?? (() => Date.now());
  const jobs = /* @__PURE__ */ new Map();
  let playbackBusy = 0;
  const idleWaiters = /* @__PURE__ */ new Set();
  let laneFree = lanes;
  const laneQueue = [];
  const stats = { hedges: 0, stallAborts: 0, fallbacks: 0 };
  function playbackDone() {
    playbackBusy--;
    if (playbackBusy === 0) {
      const ws = [...idleWaiters];
      idleWaiters.clear();
      for (const w of ws)
        w();
    }
  }
  function request(req) {
    let job = jobs.get(req.key);
    const fresh = !job;
    if (job) {
      if (req.prio === "playback")
        promote(job);
    } else {
      job = newJob(req);
      jobs.set(req.key, job);
    }
    if (req.prio === "playback") {
      playbackBusy++;
      job.promise.then(playbackDone, playbackDone);
    }
    if (fresh)
      void run(job);
    return job.promise;
  }
  function newJob(req) {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    promise.catch(() => {
    });
    return { key: req.key, req, demand: req.prio === "playback", startedAt: -1, attempts: [], settled: false, hasLane: false, wake: null, promise, resolve, reject };
  }
  function promote(job) {
    if (job.demand)
      return;
    job.demand = true;
    job.wake?.();
    if (stallMs !== null) {
      const t = now();
      const a = job.attempts.find((x) => x.running && t - x.lastAt >= stallMs);
      if (a)
        onStall(job, a);
    }
  }
  async function run(job) {
    try {
      if (job.req.preflight) {
        const pre = await job.req.preflight();
        if (pre) {
          settleOk(job, pre, null);
          return;
        }
      }
      if (!job.demand) {
        await acquireLane(job);
        while (!job.demand && playbackBusy > 0)
          await yieldToPlayback(job);
      }
      if (job.req.sources.length === 0)
        throw new Error(`no source for chunk ${job.key}`);
      launch(job);
    } catch (e) {
      settleErr(job, e);
    }
  }
  function acquireLane(job) {
    if (job.demand)
      return Promise.resolve();
    if (laneFree > 0) {
      laneFree--;
      job.hasLane = true;
      return Promise.resolve();
    }
    return new Promise((r) => {
      job.wake = () => {
        job.wake = null;
        r();
      };
      laneQueue.push(job);
    });
  }
  function releaseLane(job) {
    if (!job.hasLane)
      return;
    job.hasLane = false;
    laneFree++;
    while (laneQueue.length) {
      const j = laneQueue.shift();
      if (j.wake && !j.demand) {
        laneFree--;
        j.hasLane = true;
        j.wake();
        return;
      }
    }
  }
  function yieldToPlayback(job) {
    return new Promise((r) => {
      const w = () => {
        idleWaiters.delete(w);
        job.wake = null;
        r();
      };
      job.wake = w;
      idleWaiters.add(w);
    });
  }
  const unusedSource = (job) => {
    const used = new Set(job.attempts.map((a) => a.sourceIdx));
    for (let i = 0; i < job.req.sources.length; i++)
      if (!used.has(i))
        return i;
    return -1;
  };
  const finish = (a) => {
    a.running = false;
    if (a.timer) {
      clearTimeout(a.timer);
      a.timer = null;
    }
  };
  function launch(job) {
    const idx = unusedSource(job) >= 0 ? unusedSource(job) : job.attempts[job.attempts.length - 1].sourceIdx;
    const src = job.req.sources[idx];
    const a = { sourceIdx: idx, ctrl: typeof AbortController === "function" ? new AbortController() : null, lastAt: now(), timer: null, running: true };
    job.attempts.push(a);
    if (job.startedAt < 0)
      job.startedAt = a.lastAt;
    const arm = () => {
      if (stallMs === null)
        return;
      if (a.timer)
        clearTimeout(a.timer);
      a.timer = setTimeout(() => onStall(job, a), stallMs);
    };
    arm();
    let p;
    try {
      p = src.fetch({ signal: a.ctrl?.signal, onProgress: () => {
        a.lastAt = now();
        arm();
      } });
    } catch (e) {
      p = Promise.reject(e);
    }
    p.then((bytes) => {
      finish(a);
      settleOk(job, bytes, src.origin);
    }, (err3) => {
      const wasRunning = a.running;
      finish(a);
      if (job.settled || !wasRunning)
        return;
      if (job.attempts.some((x) => x.running))
        return;
      if (unusedSource(job) >= 0 && job.attempts.length < MAX_ATTEMPTS) {
        stats.fallbacks++;
        launch(job);
        return;
      }
      settleErr(job, err3);
    });
  }
  function onStall(job, a) {
    if (!a.running || job.settled)
      return;
    if (job.demand) {
      const running = job.attempts.filter((x) => x.running).length;
      if (running < 2 && job.attempts.length < MAX_ATTEMPTS) {
        stats.hedges++;
        launch(job);
      }
      return;
    }
    stats.stallAborts++;
    finish(a);
    a.ctrl?.abort();
    if (job.attempts.some((x) => x.running))
      return;
    if (unusedSource(job) >= 0 && job.attempts.length < MAX_ATTEMPTS) {
      stats.fallbacks++;
      launch(job);
      return;
    }
    settleErr(job, new StreamStallError(job.key));
  }
  function settleOk(job, bytes, origin) {
    const first = !job.settled;
    if (first) {
      job.settled = true;
      for (const x of job.attempts)
        if (x.running) {
          finish(x);
          x.ctrl?.abort();
        }
    }
    let tee = Promise.resolve();
    if (origin !== null && job.req.arrived) {
      try {
        tee = Promise.resolve(job.req.arrived(bytes, origin)).then(() => {
        }, () => {
        });
      } catch {
      }
    }
    if (first) {
      job.resolve(bytes);
      void tee.then(() => close(job));
    }
  }
  function settleErr(job, err3) {
    if (job.settled)
      return;
    job.settled = true;
    for (const x of job.attempts)
      if (x.running) {
        finish(x);
        x.ctrl?.abort();
      }
    job.reject(err3);
    close(job);
  }
  function close(job) {
    if (jobs.get(job.key) === job)
      jobs.delete(job.key);
    releaseLane(job);
  }
  function status(prefix) {
    const t = now();
    let demand = 0, speculative = 0, queued = 0, oldest = 0, stalled = 0;
    for (const j of jobs.values()) {
      if (j.settled || prefix !== void 0 && !j.key.startsWith(prefix))
        continue;
      if (j.demand)
        demand++;
      else if (j.startedAt >= 0)
        speculative++;
      else
        queued++;
      if (j.startedAt >= 0)
        oldest = Math.max(oldest, t - j.startedAt);
      const running = j.attempts.filter((a) => a.running);
      if (stallMs !== null && running.length > 0 && running.every((a) => t - a.lastAt >= stallMs))
        stalled++;
    }
    return { demand, speculative, queued, oldestMs: oldest, stalled };
  }
  return { request, status, stats, lanes, stallMs };
}

// node_modules/@internal/store/dist/stream/download-session.js
var EtagChangedError = class extends Error {
  constructor(name) {
    super(`\u4E91\u7AEF\u6587\u4EF6\u5DF2\u66F4\u65B0\uFF0C\u4E0B\u8F7D\u4F1A\u8BDD\u5931\u6548\uFF1A${name}`);
    this.name = "EtagChangedError";
  }
};
var CHUNK_DEFAULT = 2 * 1024 * 1024;
var CAP_DEFAULT = 256 * 1024 * 1024;
var VERIFY_EVERY = 16;
var MIRROR_COOLDOWN_MS = 3e4;
var MIRROR_COOLDOWN_MAX_MS = 10 * 6e4;
var mKey = (name) => `meta:${name}`;
var cKey = (name, i) => `chunk:${name}:${i}`;
function createDownloadSessions(cfg) {
  const { staging, fetchMeta, range, adoptLocal } = cfg;
  const chunkSize = cfg.chunkSize ?? CHUNK_DEFAULT;
  const capBytes = cfg.capBytes ?? CAP_DEFAULT;
  const now = cfg.now ?? (() => Date.now());
  const streaming = cfg.streaming;
  const lanes = Math.max(1, Math.floor(streaming?.lanes ?? 1));
  const hotMs = cfg.hotMs ?? 6e4;
  const blockEviction = !!streaming;
  const scheduler = createChunkScheduler({ lanes, stallMs: streaming?.stallMs, now });
  const activeSessions = /* @__PURE__ */ new Set();
  const liveMeta = /* @__PURE__ */ new Map();
  const evictHooks = /* @__PURE__ */ new Map();
  let estTotal = null;
  const mirrorHealth = /* @__PURE__ */ new Map();
  const mirrorRejected = /* @__PURE__ */ new Set();
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
  const sDel = async (k) => {
    try {
      await staging.del(k);
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
    estTotal = null;
    const lm = liveMeta.get(name);
    if (lm) {
      for (const i of lm.chunks)
        evictHooks.get(name)?.(i);
      lm.chunks = [];
      lm.mirrored = void 0;
      lm.hot = void 0;
      lm.hits = void 0;
    }
    try {
      const prefix = `chunk:${name}:`;
      for (const k of await staging.keys())
        if (k === mKey(name) || k.startsWith(prefix))
          await staging.del(k);
    } catch (e) {
      reportStoreError(e, "log");
    }
  }
  const chunkLenOf = (m, i) => Math.min(m.chunkBytes, m.totalBytes - i * m.chunkBytes);
  const metaBytes = (m) => m.chunks.reduce((s, i) => s + chunkLenOf(m, i), 0);
  async function enforceCap() {
    try {
      if (estTotal !== null && estTotal <= capBytes)
        return;
      const metas = [];
      for (const k of await staging.keys()) {
        if (!k.startsWith("meta:"))
          continue;
        const name = k.slice(5);
        const meta = liveMeta.get(name) ?? await readMeta(name);
        if (meta)
          metas.push({ name, meta });
      }
      let total = metas.reduce((s, x) => s + metaBytes(x.meta), 0);
      estTotal = total;
      if (total <= capBytes)
        return;
      if (!blockEviction) {
        metas.sort((a, b) => a.meta.touchedAt - b.meta.touchedAt);
        for (const { name, meta } of metas) {
          if (total <= capBytes)
            break;
          if (activeSessions.has(name))
            continue;
          const n = metaBytes(meta);
          await purgeName(name);
          total -= n;
        }
        estTotal = total;
        return;
      }
      const t = now();
      const cands = [];
      for (const { name, meta } of metas) {
        const active = activeSessions.has(name) ? 1 : 0;
        for (const i of meta.chunks) {
          const hot = meta.hot?.[String(i)] ?? meta.touchedAt;
          if (active && t - hot < hotMs)
            continue;
          cands.push({ name, meta, i, active, hits: meta.hits?.[String(i)] ?? 0, hot });
        }
      }
      cands.sort((a, b) => a.active - b.active || a.hits - b.hits || a.hot - b.hot);
      const touched = /* @__PURE__ */ new Map();
      for (const c of cands) {
        if (total <= capBytes)
          break;
        await sDel(cKey(c.name, c.i));
        const m = c.meta;
        m.chunks = m.chunks.filter((x) => x !== c.i);
        if (m.mirrored) {
          m.mirrored = m.mirrored.filter((x) => x !== c.i);
          if (!m.mirrored.length)
            m.mirrored = void 0;
        }
        if (m.hot)
          delete m.hot[String(c.i)];
        if (m.hits)
          delete m.hits[String(c.i)];
        evictHooks.get(c.name)?.(c.i);
        total -= chunkLenOf(m, c.i);
        touched.set(c.name, m);
      }
      for (const [name, m] of touched) {
        if (m.chunks.length === 0 && !activeSessions.has(name))
          await sDel(mKey(name));
        else
          await writeMeta(name, m);
      }
      estTotal = total;
    } catch (e) {
      reportStoreError(e, "log");
    }
  }
  async function coverage(name) {
    const m = liveMeta.get(name) ?? await readMeta(name);
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
  const healthOf = (src) => {
    let h2 = mirrorHealth.get(src);
    if (!h2)
      mirrorHealth.set(src, h2 = { failures: 0, downUntil: 0 });
    return h2;
  };
  const mirrorUp = (src) => now() >= healthOf(src).downUntil;
  const mirrorFailed = (src) => {
    const h2 = healthOf(src);
    h2.failures++;
    h2.downUntil = now() + Math.min(MIRROR_COOLDOWN_MS * 2 ** (h2.failures - 1), MIRROR_COOLDOWN_MAX_MS);
  };
  const mirrorOk = (src) => {
    const h2 = healthOf(src);
    h2.failures = 0;
    h2.downUntil = 0;
  };
  const sameBytes = (a, b) => {
    if (a.length !== b.length)
      return false;
    for (let i = 0; i < a.length; i++)
      if (a[i] !== b[i])
        return false;
    return true;
  };
  async function open(name) {
    let cm0 = null, cloudErr = null;
    try {
      cm0 = await fetchMeta(name);
    } catch (e) {
      cloudErr = e;
    }
    const prev = await readMeta(name);
    const mirrorList = streaming?.mirrors?.() ?? [];
    let etag, size, item;
    if (cm0) {
      ({ etag, size, item } = cm0);
    } else if (prev && mirrorList.length > 0) {
      etag = prev.eTag;
      size = prev.totalBytes;
      item = null;
    } else {
      if (cloudErr)
        throw cloudErr;
      return null;
    }
    if (prev && prev.eTag !== etag)
      await purgeName(name);
    const meta = prev && prev.eTag === etag ? { ...prev, touchedAt: now() } : { v: 1, eTag: etag, totalBytes: size, chunkBytes: chunkSize, chunks: [], touchedAt: now() };
    const got = new Set(meta.chunks);
    const mirrored = new Set(meta.mirrored ?? []);
    await writeMeta(name, meta);
    let lastHotFlush = now();
    const touch = (i, hit) => {
      const k = String(i), t = now();
      (meta.hot ??= {})[k] = t;
      if (hit)
        (meta.hits ??= {})[k] = Math.min(8, (meta.hits[k] ?? 0) + 1);
      else
        (meta.hits ??= {})[k] ??= 0;
      if (hit && t - lastHotFlush >= 2e3) {
        lastHotFlush = t;
        void writeMeta(name, meta);
      }
    };
    evictHooks.set(name, (i) => {
      got.delete(i);
      mirrored.delete(i);
      verifiedEvict(i);
    });
    const nChunks = Math.max(1, Math.ceil(size / chunkSize));
    let closed = false;
    let mirror = null;
    let mirrorState = "none";
    for (const src of mirrorList) {
      if (mirrorRejected.has(`${name}@${etag}@${src.label}`)) {
        mirrorState = "rejected";
        continue;
      }
      if (item !== null && !mirrorUp(src)) {
        mirrorState = "down";
        continue;
      }
      let handle = null;
      try {
        handle = await src.open(name, size);
      } catch (e) {
        reportStoreError(e, "log");
      }
      if (handle) {
        mirror = { src, handle };
        mirrorState = "ok";
        break;
      }
    }
    if (item === null && !mirror) {
      if (cloudErr)
        throw cloudErr;
      return null;
    }
    activeSessions.add(name);
    liveMeta.set(name, meta);
    let mirrorChunks = 0;
    let firstOk = false;
    let firstCheck = null;
    const verified = /* @__PURE__ */ new Set();
    const verifiedEvict = (i) => {
      verified.delete(i);
    };
    const chunkOff = (i) => i * chunkSize;
    const chunkLen = (i) => Math.min(chunkSize, size - chunkOff(i));
    async function rejectMirror(reason) {
      if (!mirror)
        return;
      const { src } = mirror;
      mirror = null;
      mirrorState = "rejected";
      mirrorRejected.add(`${name}@${etag}@${src.label}`);
      const bad = [...mirrored];
      for (const i of bad) {
        got.delete(i);
        mirrored.delete(i);
        await sDel(cKey(name, i));
      }
      meta.chunks = [...got];
      meta.mirrored = [];
      await writeMeta(name, meta);
      reportStoreError(new Error(`mirror "${src.label}" served different bytes for "${name}" (${reason}); dropped it for this version and purged ${bad.length} unverified chunk(s)`), "warning");
    }
    async function sampleVerify(i, bytes, seq) {
      if (item === null || !mirror || verified.has(i))
        return;
      if (seq % VERIFY_EVERY !== 0)
        return;
      let ref = null;
      try {
        ref = await range(item, chunkOff(i), chunkLen(i));
      } catch (e) {
        reportStoreError(e, "log");
        return;
      }
      if (!mirror)
        return;
      if (sameBytes(ref, bytes)) {
        verified.add(i);
        if (mirrored.delete(i)) {
          meta.mirrored = mirrored.size ? [...mirrored] : void 0;
          await writeMeta(name, meta);
        }
      } else
        await rejectMirror(`chunk ${i}`);
    }
    async function arrived(i, bytes, origin) {
      if (origin === "mirror" && !mirror)
        return;
      let changed = false;
      if (!got.has(i)) {
        got.add(i);
        changed = true;
        if (estTotal !== null)
          estTotal += chunkLen(i);
      }
      touch(i, false);
      if (origin === "mirror" && !verified.has(i) && !mirrored.has(i)) {
        mirrored.add(i);
        changed = true;
      }
      if (changed) {
        meta.chunks = [...got];
        meta.mirrored = mirrored.size ? [...mirrored] : void 0;
        meta.touchedAt = now();
      }
      const seq = origin === "mirror" ? ++mirrorChunks : 0;
      await sPut(cKey(name, i), new Blob([bytes]));
      if (changed)
        await writeMeta(name, meta);
      void enforceCap();
      if (origin === "mirror")
        void sampleVerify(i, bytes, seq);
    }
    function sourcesFor(i) {
      const off = chunkOff(i), len = chunkLen(i);
      const list = [];
      if (mirror && (item === null || mirrorUp(mirror.src))) {
        const m = mirror;
        list.push({
          origin: "mirror",
          fetch: async (o) => {
            try {
              const b = await m.handle.read(off, len, o);
              if (b.length !== len)
                throw new Error(`mirror "${m.src.label}": chunk ${i} returned ${b.length} bytes, wanted ${len}`);
              if (streaming?.verifyChunk && mirror === m) {
                let verdict = null;
                try {
                  verdict = await streaming.verifyChunk({ name, index: i, offset: off, length: len, origin: "mirror" }, b);
                } catch (e) {
                  reportStoreError(e, "log");
                  verdict = null;
                }
                if (verdict === false) {
                  await rejectMirror(`host verify chunk ${i}`);
                  throw new Error(`mirror "${m.src.label}": chunk ${i} failed the host's integrity check`);
                }
                if (verdict === true)
                  verified.add(i);
              }
              if (!firstOk && item !== null && mirror === m) {
                let checker = false;
                if (!firstCheck) {
                  checker = true;
                  firstCheck = range(item, off, len).then((ref) => sameBytes(ref, b) ? "same" : "differs", (e) => {
                    reportStoreError(e, "log");
                    return "unknown";
                  });
                }
                const r = await firstCheck;
                if (r === "differs") {
                  if (checker)
                    await rejectMirror(`chunk ${i}`);
                  throw new Error(`mirror "${m.src.label}": chunk ${i} differs from cloud`);
                }
                if (r === "same") {
                  firstOk = true;
                  if (checker)
                    verified.add(i);
                } else if (checker)
                  firstCheck = null;
              }
              mirrorOk(m.src);
              return b;
            } catch (e) {
              if (!o.signal?.aborted && mirror === m) {
                mirrorFailed(m.src);
                mirrorState = "down";
                reportStoreError(e, "log");
              }
              throw e;
            }
          }
        });
      }
      if (item !== null)
        list.push({ origin: "cloud", fetch: (o) => range(item, off, len, o) });
      return list;
    }
    const fetchChunk = (i, prio) => scheduler.request({
      key: `${name}:${i}`,
      prio,
      preflight: async () => {
        const c = await sGet(cKey(name, i));
        if (c)
          touch(i, true);
        return c ? new Uint8Array(await c.arrayBuffer()) : null;
      },
      sources: sourcesFor(i),
      arrived: (bytes, origin) => arrived(i, bytes, origin)
    });
    const playbackChunk = (i) => fetchChunk(i, "playback");
    const pinChunk = (i) => fetchChunk(i, "pin");
    const clampRange = (offset, length) => {
      const off = Math.max(0, Math.min(offset, size));
      const len = Math.max(0, Math.min(length, size - off));
      return { i0: Math.floor(off / chunkSize), i1: len === 0 ? -1 : Math.floor((off + len - 1) / chunkSize), off, len };
    };
    const havedBytes = () => [...got].reduce((s, i) => s + chunkLen(i), 0);
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
          const chunkStart = chunkOff(i);
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
          if (streaming)
            await pinChunk(i);
          else {
            try {
              await pinChunk(i);
            } catch (e) {
              reportStoreError(e, "log");
            }
          }
        }
      },
      havedBytes,
      async promote(opts) {
        if (closed)
          throw new Error(`\u4F1A\u8BDD\u5DF2\u5173\u95ED\uFF1A${name}`);
        const missing = Array.from({ length: nChunks }, (_, i) => i).filter((i) => !got.has(i));
        let next = 0;
        const worker = async () => {
          while (next < missing.length) {
            await pinChunk(missing[next++]);
            opts?.onProgress?.(havedBytes(), size);
          }
        };
        await Promise.all(Array.from({ length: Math.max(1, Math.min(lanes, missing.length)) }, worker));
        opts?.onProgress?.(havedBytes(), size);
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
      status() {
        const s = scheduler.status(`${name}:`);
        const state2 = mirror ? item === null || mirrorUp(mirror.src) ? "ok" : "down" : mirrorState;
        return { ...s, mirror: state2, mirrorLabel: mirror?.src.label, cloudless: item === null };
      },
      close() {
        closed = true;
        activeSessions.delete(name);
        evictHooks.delete(name);
        if (liveMeta.get(name) === meta) {
          liveMeta.delete(name);
          if (meta.chunks.length)
            void writeMeta(name, meta);
        }
      }
      // 关会话把命中账落盘（有账才写：promote 清过的不复活）
    };
  }
  return { open, coverage, promoteFromStaging, purgeName, _enforceCap: enforceCap, _scheduler: scheduler };
}

// node_modules/@internal/store/dist/base/kv-namespace.js
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

// node_modules/@internal/store/dist/works/migration.js
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
  if (databaseId.endsWith(".staging"))
    throw new Error(`storeNamespace: databaseId \u4E0D\u8BB8\u4EE5 ".staging" \u7ED3\u5C3E\uFF08${databaseId}\uFF09\u2014\u2014\u90A3\u662F 2.2.0 \u6D41\u5F0F\u6682\u5B58\u533A\u5E93\u540D\u7684\u540E\u7F00\uFF0C\u4F1A\u548C\u522B\u7684\u5B9E\u4F8B\u649E\u5E93`);
  const root = `${appId}.${databaseId}`;
  return { root, dbName: root, schemaKey: "database-version", stagingDbName: `${root}.staging` };
}
var MIGRATIONS = [
  // 2.2.0（道 6 F-58 §8 第 1 件，user 2026-10-21「同意」）：流式暂存区（staging/ 分区）搬出主库、住自己的库 `${root}.staging`。
  //   旧库里的 `staging/` 键**不迁、整批删**：staging 只装云端拉来的 re-fetchable 字节（download-session 纪律），清了绝不丢数据。
  //   一等作品（files/）和三等暂存不再同库同表；主库的 usage 不再混进分片。
  {
    version: "v001-20261021",
    describe: "staging/ \u5206\u533A\u642C\u51FA\u4E3B\u5E93\uFF08\u65B0\u5E93 `${root}.staging`\uFF09\uFF1B\u4E3B\u5E93\u91CC\u7684\u65E7 staging/ \u952E\u6574\u6279\u5220\uFF08re-fetchable\uFF09",
    async run(ctx) {
      if (!ctx.blobs) {
        ctx.log?.("[migration] v001: no blobs port (test / no IDB) \u2192 skip IDB part");
        return;
      }
      const keys = (await ctx.blobs.keys()).filter((k) => k.startsWith("staging/"));
      for (const k of keys)
        await ctx.blobs.del(k);
      ctx.log?.(`[migration] v001: purged ${keys.length} legacy staging/ key(s) from ${ctx.ns.dbName}`);
    }
  }
];
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
async function runStoreMigrations(appId, databaseId, log2, blobs) {
  const ns = storeNamespace(appId, databaseId);
  const kv = namespacedKv(localStorageMigrationKv(), ns.root);
  await runMigrations({ kv, ns, log: log2, blobs });
}

// node_modules/@internal/store/dist/works/zip-peek.js
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

// node_modules/@internal/store/dist/base/persistence.js
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

// node_modules/@internal/store/dist/base/ui-text.js
var STORE_TEXT_EN = {
  "sync.pushing": "Syncing\u2026",
  "file.renaming": "Renaming\u2026",
  "file.uploading": "Uploading\u2026",
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
  /** resource 给了 = 2.1.0 三等资源那一种文档只读（docKinds 行 tier:"resource"）；没给 = readOnlyFiles:true 的整面只读。 */
  constructor(op, resource) {
    super(resource ? `\u4E09\u7B49\u8D44\u6E90\u300C${resource}\u300D\u53EA\u8BFB\uFF1A${op}` : `\u53EA\u8BFB\u955C\u50CF\uFF1Afiles \u9762\u4E0D\u53EF\u5199\uFF08${op}\uFF09`);
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
  function rejectAfterDispose(obj2) {
    const out = {};
    for (const [k, v] of Object.entries(obj2))
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
  setStoreErrorReporter((err3, level) => ui.reportError(err3, level));
  if (config.persistence === "app-managed") {
    void queryStoragePersistence().then((st) => {
      if (st.supported && !st.persisted)
        ui.reportError(new Error("navigator.storage: origin not persisted yet \u2014 wire requestStoragePersistence() at a user gesture (best-effort layer, never load-bearing)"), "log");
    });
  }
  const ns = storeNamespace(appId, databaseId);
  const kv = namespacedKv(rawKv, ns.root);
  const ids = createIdentifiers(config.docKinds);
  const tierOf = (name) => ids.parse(name)?.tier ?? "work";
  const tierGuard = (op, name) => {
    roGuard(op);
    if (tierOf(name) === "resource")
      throw new ReadOnlyFilesError(op, name);
  };
  const local2 = config.local ?? createLocalCache(ns.dbName, { identifiers: ids });
  const collectionLocal = config.local ?? createCollectionCache(ns.dbName);
  const rawOnline = config.isOnline ?? (() => globalThis.navigator?.onLine !== false);
  const signedIn2 = config.signedIn ?? (() => true);
  const isOnline = () => rawOnline() && signedIn2();
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
  const migrationReady = config.skipMigration || !globalThis.localStorage ? Promise.resolve() : (() => {
    const raw = createIdbCache(ns.dbName);
    return runStoreMigrations(appId, databaseId, void 0, { keys: () => raw.keys(), del: (k) => raw.del(k) }).finally(() => {
      raw.close();
    });
  })();
  const offloadMod = createOffload({ cloud, local: local2, head, isOnline, serialize: sub.serialize });
  const CLOUD_GONE_GRACE_MS = 24 * 3600 * 1e3;
  const pendingGone = createPendingGone(kv, config.cloudGoneGraceMs ?? CLOUD_GONE_GRACE_MS);
  const reconcileMod = createReconcile({ cloud, local: local2, head, pending: pendingGone, isOnline, activeIdentifier: config.activeIdentifier, hidden: config.hidden, drop: (n) => tierOf(n) === "resource" });
  const stagingStore = config.staging ?? createStagingStore(ns.stagingDbName);
  const toU8Raw = async (raw) => raw instanceof Uint8Array ? raw : raw instanceof ArrayBuffer ? new Uint8Array(raw) : new Uint8Array(await raw.arrayBuffer());
  const sessions = createDownloadSessions({
    staging: stagingStore,
    fetchMeta: async (name) => {
      const m = await cloud.fetchMeta(name);
      return m ? { etag: m.etag, size: m.size, item: m.item } : null;
    },
    // 分片直连 provider.downloadRange（item.ref 已在开会话时解析——不每分片重走 metadata 往返）。
    range: async (item, offset, length, opts) => toU8Raw(await provider.downloadRange(item.ref, offset, length, opts)),
    // promote 落地：对齐 identity.acquire 语义（serialize 锁 + markSynced）；已有副本/dirty 绝不覆盖（§A）。
    adoptLocal: (name, blob, etag) => sub.serialize(name, async () => {
      if (await local2.exists(name))
        return false;
      if (head.isDirtyAnywhere(name))
        return false;
      await local2.save(name, blob);
      head.markSynced(name, etag);
      notifyFolderOf(name);
      return true;
    }),
    chunkSize: config.stagingChunkBytes,
    capBytes: config.stagingCapBytes,
    streaming: config.streaming
    // 2.0.0 行为开关（不传 = 0.18）
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
  const listing = createListing({
    cloud,
    local: local2,
    head,
    pendingFolders: readPending,
    isPendingGone: (p) => pendingGone.isPending(p),
    pendingFolderDeletions: readFolderDel,
    hidden: config.hidden,
    describe: (n) => {
      const d = ids.parse(n);
      return { kind: d?.kind, tier: d?.tier ?? "work" };
    }
  });
  const ctxNow = () => ({ signedIn: signedIn2(), online: rawOnline() });
  const LOCAL_CTX = { signedIn: false, online: false };
  const folderWatchers = /* @__PURE__ */ new Map();
  const unAuth = provider.onAuthChanged?.((ev) => {
    if (ev.reason !== "signOut")
      return;
    void (async () => {
      try {
        await local2.clearDirIndexCache?.();
      } catch (e) {
        ui.reportError(e, "log");
      }
      for (const f of [...folderWatchers.keys()])
        void pushLocalFrame(f);
    })();
  });
  const watcherOnError = /* @__PURE__ */ new WeakMap();
  function emitFolderError(folder, err3, phase) {
    const set2 = folderWatchers.get(folder);
    if (!set2)
      return;
    for (const cb of set2) {
      const h2 = watcherOnError.get(cb);
      if (h2) {
        try {
          h2(err3, phase);
        } catch (e) {
          ui.reportError(e);
        }
      }
    }
  }
  const SNAP_V = 1;
  async function readDirIndexCache(folder) {
    if (!local2.getDirIndexCache)
      return null;
    try {
      const raw = await local2.getDirIndexCache(folder);
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
    if (!local2.putDirIndexCache || !live.complete)
      return;
    const files = live.files.filter((c) => !isHidden(c.name)).map((c) => ({ name: c.name, eTag: c.eTag, size: c.size, lastModified: toMs(c.lastModifiedDateTime), id: c.ref }));
    const folders = live.folders.filter((f) => !isHidden(f));
    void local2.putDirIndexCache(folder, JSON.stringify({ v: SNAP_V, folder, savedAt: Date.now(), files, folders })).catch((e) => ui.reportError(e, "log"));
  }
  function emitFolder(folder, snap) {
    if (snap.folder !== folder) {
      ui.reportError(new Error(`watchFolder \u8DEF\u5F84\u9519\u4E71\uFF1A\u8BA2\u9605\u300C${folder}\u300D\u6536\u5230\u300C${snap.folder}\u300D\uFF0C\u5DF2\u4E22\u5F03`));
      return;
    }
    const set2 = folderWatchers.get(folder);
    if (!set2)
      return;
    for (const cb of set2) {
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
    if (live?.complete) {
      writeDirIndexCache(folder, live);
      for (const f of live.files)
        if (f.eTag)
          freshHints.note(f.name, { etag: f.eTag, lastModified: f.lastModifiedDateTime, size: f.size, item: f });
    }
  }
  function notifyFolderOf(name) {
    void pushLocalFrame(name.includes("/") ? name.slice(0, name.lastIndexOf("/")) : "");
  }
  function watchFolder(folder, cb, opts) {
    if (folder)
      assertValidFileName(folder, appId);
    let set2 = folderWatchers.get(folder);
    if (!set2) {
      set2 = /* @__PURE__ */ new Set();
      folderWatchers.set(folder, set2);
    }
    set2.add(cb);
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
    if (await local2.exists(name))
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
    getPrev: (n) => local2.get(n),
    makePeek: config.crypt?.makePeek
    // 明文→peek（app 域，如 ora 缩略图）；不给 → 容器无 peek
  });
  const safeResolve = createSafeResolve({
    cloud,
    local: local2,
    head,
    localDirty: () => sub.edits.localDirty(),
    serialize: sub.serialize,
    // 0.15.2：拉云覆盖的临界段与用户保存的本地写同链互斥
    validateAdopt: (plain, name) => (ids.rowOf(name)?.validate ?? validateAdopt2)(plain),
    // 2.1.0：每种文档可带自己的验真，没带用全局的
    unseal: (n, blob) => seal.unsealForRead(n, blob),
    // 返明文；加密但锁定 → null（safePull 退验封套）
    looksEncrypted: (b) => enc.looksEncryptedContainer(b)
  });
  const busyT = (label, fn) => ui.busy(resolveStoreText(ui.text, label), fn, label);
  const busyK = (key, params2, fn) => ui.busy(resolveStoreText(ui.text, key, params2), fn, key);
  const sessionFor = config.uploads?.resumable ? async (name, bytes) => {
    const subtle = globalThis.crypto?.subtle;
    if (!subtle || bytes.byteLength <= 4 * 1024 * 1024)
      return void 0;
    const digest = new Uint8Array(await subtle.digest("SHA-256", bytes));
    const token = Array.from(digest, (b) => b.toString(16).padStart(2, "0")).join("");
    const key = `internal.upload-session:${name}`;
    return {
      token,
      async load() {
        try {
          const v = kv.get(key);
          return v ? JSON.parse(v) : null;
        } catch {
          return null;
        }
      },
      async save(rec) {
        kv.set(key, JSON.stringify(rec));
      },
      async clear() {
        kv.remove(key);
      }
    };
  } : void 0;
  const pushMod = createPush({ cloud, head, seal, safeResolve, serialize: sub.serialize, editVersion: () => sub.edits.version(), busy: busyT, sessionFor, ...config.pushRetry });
  const uploadReplayPolicy = config.offlineUploadReplay ?? "manual";
  if (uploadReplayPolicy !== "manual") {
    if (!ui.onReplayStatus)
      throw new Error("createStore: offlineUploadReplay\u2260'manual' \u9700 ui.onReplayStatus\uFF08ADR-0018 \u5F3A\u5236 UI \u63D0\u793A\uFF09");
    if (uploadReplayPolicy === "ask" && !ui.confirmReplay)
      throw new Error("createStore: offlineUploadReplay='ask' \u9700 ui.confirmReplay\uFF08\u56DE\u7EBF\u8BE2\u95EE\u7528\u6237\uFF09");
  }
  const pushBg = createPush({ cloud, head, seal, safeResolve, serialize: sub.serialize, editVersion: () => sub.edits.version(), busy: (_l, fn) => fn(), sessionFor, ...config.pushRetry });
  async function pushLocalBytes(name) {
    const blob = await local2.get(name);
    if (!blob)
      return { status: "no-local" };
    const atRest = await toU8(blob instanceof Blob ? blob : new Blob([blob]));
    return pushBg.doPush(name, { encode: () => atRest });
  }
  const uploadReplay = createUploadReplay({
    kv,
    local: local2,
    head,
    isOnline,
    serialize: sub.serialize,
    pushLocal: pushLocalBytes,
    policy: uploadReplayPolicy,
    confirm: ui.confirmReplay,
    onStatus: ui.onReplayStatus
  });
  const freshHints = createFreshHints();
  const fresh = createFreshness({ cloud, head, safeResolve, busy: busyT, hints: freshHints, lineageFromDurable: config.openLineageFromDurable ?? true });
  const del = createDelete({ cloud, local: local2, head, kv, busy: busyT });
  const identity = createIdentity({
    cloud,
    local: local2,
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
  const trashMod = createTrash({ cloud, local: local2, head, busy: busyT });
  async function aggregateBox(box) {
    const cloudItems = await (box === "trash" ? cloud.listTrash() : cloud.listBackup());
    const localItems = box === "trash" ? local2.listTrash ? await local2.listTrash() : [] : local2.listBackup ? await local2.listBackup() : [];
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
  const delIfCloudAbsentSF = singleFlight("\u5220\u9664", async (n) => {
    const d = await del.del(n, { isOnline, expectCloudAbsent: true });
    if (d.status === "trashed")
      uploadReplay.remove(n);
    return d;
  });
  const trashedOrWhy = (d) => d.status === "trashed" ? { status: "trashed" } : d.status === "cancelled" ? { status: "unresolved", reason: d.reason === "cloud-present" ? "cloud-reappeared" : "offline" } : { status: "unresolved", reason: d.status };
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
    if (tierOf(name) === "auto-backup")
      return "keepMine";
    return ui.resolveConflict({ name, local: await local2.get(name), cloud: null, occasion, cloudState: "changed" });
  };
  const onConflict = onConflictFor("push");
  async function encTailBytes(name, n, tryCloud) {
    const blob = await local2.get(name);
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
    const blob = source === "cloud" ? null : await local2.get(name);
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
    const full = await local2.get(name);
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
    const blob = await local2.get(name);
    return blob ? enc.looksEncryptedContainer(blob instanceof Blob ? blob : new Blob([blob])) : false;
  }
  async function encSwap(name, bytes, online, encrypted) {
    const prevEtag = cloud.getETag(name);
    const tracked = prevEtag != null;
    if (tracked && !online())
      return { status: "offline" };
    await local2.save(name, bytes);
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
      const blob = await local2.get(name);
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
      const blob = await local2.get(name);
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
      const blob = await local2.get(name);
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
      const blob = await local2.get(name);
      if (!blob)
        return null;
      const asBlob = blob instanceof Blob ? blob : new Blob([blob]);
      return await seal.unsealForRead(name, asBlob);
    };
    const resolveCleanGone = async () => {
      if (head.seenBase(name) == null)
        return { status: "clean" };
      const candidate = pendingGone.isPending(name);
      if (!isOnline())
        return candidate ? { status: "offline" } : { status: "clean" };
      let meta;
      try {
        meta = await cloud.fetchMeta(name);
      } catch (e) {
        ui.reportError(e, "log");
        return candidate ? { status: "offline" } : { status: "clean" };
      }
      if (meta)
        return { status: "clean" };
      const choice = tierOf(name) === "auto-backup" ? "takeCloud" : await ui.resolveConflict({ name, local: await local2.get(name), cloud: null, occasion: "push", cloudState: "absent" });
      if (choice === "cancel")
        return { status: "cancelled" };
      if (choice === "takeCloud") {
        const d = await delIfCloudAbsentSF(name);
        if (d.status === "trashed")
          pendingGone.clear(name);
        notifyFolderOf(name);
        return trashedOrWhy(d);
      }
      const blob = await local2.get(name);
      if (!blob)
        return { status: "no-local" };
      const atRest = await toU8(blob instanceof Blob ? blob : new Blob([blob]));
      pendingGone.clear(name);
      head.forget(name);
      head.recordEdit(name);
      let r;
      try {
        r = await pushMod.push(name, { encode: () => atRest, onConflict, surfaceCollision: true, loserBackup: tierOf(name) !== "auto-backup" });
      } catch (e) {
        ui.reportError(e);
        notifyFolderOf(name);
        return { status: "not-pushed", reason: "error" };
      }
      notifyFolderOf(name);
      if (r.status === "resolved" && r.resolution === "takeCloud")
        return { status: "took-cloud", backupName: r.backupName };
      const pushed = r.status === "pushed" || r.status === "healed" || r.status === "resolved";
      return pushed ? { status: "pushed" } : { status: "not-pushed", reason: r.status };
    };
    return {
      async save(bytes, opts) {
        tierGuard("save", name);
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
        const receipt = await sub.serialize(name, () => local2.save(name, sealed, opts?.hint, "user-save"));
        if (receipt && typeof receipt === "object" && receipt.foreignOverwrite) {
          reportStoreError(new Error(`local overwrite conflict: "${name}" was written by another tab (rev ${receipt.foreignOverwrite.foreignRev}); their bytes were ${receipt.foreignOverwrite.backedUp ? "backed up before overwrite" : "overwritten (recent copy already in backup)"}`), "warning");
        }
        notifyFolderOf(name);
        if (opts?.tryPush === false)
          return { pushed: false, reason: "not-attempted" };
        let pushed = false, reason, resolution;
        try {
          const r = await pushMod.push(name, { encode: () => sealed, onConflict, surfaceCollision: mode !== "new", onProgress: opts?.onProgress, loserBackup: tierOf(name) !== "auto-backup" });
          pushed = r.status === "pushed" || r.status === "healed" || r.status === "resolved";
          if (!pushed)
            reason = r.status;
          if (r.status === "resolved" && (r.resolution === "takeCloud" || r.resolution === "keepMine"))
            resolution = r.resolution;
        } catch (e) {
          ui.reportError(e);
          reason = "error";
        }
        notifyFolderOf(name);
        if (head.isDirtyThisTab(name) && head.seenBase(name) == null)
          uploadReplay.enqueue(name);
        return { pushed, reason, resolution };
      },
      async open() {
        await migrationReady;
        if (await local2.exists(name)) {
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
        if (autoCacheOpenedFile && tierOf(name) !== "resource") {
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
          const blob = await local2.get(name);
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
      // 0.18.0 主动叫面（JSDoc 见 RawFile.resolve）。面 = 同一个 ui.resolveConflict；派发 = 同一个 safeResolve / pushMod，没有第二套逻辑。
      async resolve(opts) {
        await migrationReady;
        roGuard("resolve");
        if (tierOf(name) === "resource")
          return { status: "clean" };
        if (!await local2.exists(name))
          return { status: "no-local" };
        if (!head.isDirtyAnywhere(name))
          return resolveCleanGone();
        if (!isOnline())
          return { status: "offline" };
        let cloudState = "changed";
        try {
          const meta = await cloud.fetchMeta(name);
          cloudState = !meta ? head.seenBase(name) == null ? "never" : "absent" : meta.etag === head.seenBase(name) ? "unchanged" : "changed";
        } catch (e) {
          ui.reportError(e, "log");
        }
        const choice = tierOf(name) === "auto-backup" ? "keepMine" : await ui.resolveConflict({ name, local: await local2.get(name), cloud: null, occasion: "push", cloudState });
        if (choice === "cancel")
          return { status: "cancelled" };
        if (choice === "takeCloud") {
          if (cloudState === "absent" || cloudState === "never") {
            const d = await delIfCloudAbsentSF(name);
            notifyFolderOf(name);
            return trashedOrWhy(d);
          }
          const r2 = await safeResolve.resolveConflict(name, "takeCloud", { adopt: opts?.adopt });
          notifyFolderOf(name);
          return r2.status === "resolved" ? { status: "took-cloud", backupName: r2.backupName } : { status: "unresolved", reason: r2.reason };
        }
        const blob = await local2.get(name);
        if (!blob)
          return { status: "no-local" };
        const atRest = await toU8(blob instanceof Blob ? blob : new Blob([blob]));
        let r;
        try {
          r = await pushMod.push(name, { encode: () => atRest, onConflict, surfaceCollision: true, loserBackup: tierOf(name) !== "auto-backup" });
        } catch (e) {
          ui.reportError(e);
          notifyFolderOf(name);
          return { status: "not-pushed", reason: "error" };
        }
        notifyFolderOf(name);
        if (r.status === "resolved" && r.resolution === "takeCloud")
          return { status: "took-cloud", backupName: r.backupName };
        const pushed = r.status === "pushed" || r.status === "healed" || r.status === "resolved";
        return pushed ? { status: "pushed" } : { status: "not-pushed", reason: r.status };
      },
      tryMove(to) {
        tierGuard("tryMove", name);
        return tryMoveSF(name, to);
      },
      async trash() {
        tierGuard("trash", name);
        const r = await delSF(name);
        notifyFolderOf(name);
        return r;
      },
      // 2.1.2 起叫 trash（原 delete；动词 = 语义：移进回收站）。返 TrashOutcome（v436）：cancelled/noop/queuedCloudDelete 都不是「已进回收站」
      reupload() {
        tierGuard("reupload", name);
        return busyK("file.reuploading", void 0, async () => {
          if (!await local2.exists(name))
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
        return local2.exists(name);
      },
      // 有本地副本 = 已留作离线（无 LRU、无独立 pin flag）
      stagingCoverage() {
        return sessions.coverage(name);
      },
      // A5 透明面：只读账本，零网络（离线徽章/护栏用）
      async keepOffline(opts) {
        if (await local2.exists(name))
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
        const blob = await local2.get(name);
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
            },
            status: () => ({ demand: 0, speculative: 0, queued: 0, oldestMs: 0, stalled: 0, mirror: "none", cloudless: false })
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
          status: () => sess.status(),
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
        tierGuard("encrypt", name);
        if (!ids.parse(name))
          throw new Error(`store: "${name}" is not a document of any declared kind and cannot be encrypted (docKinds: ${ids.kinds.map((k) => k.suffix).join(", ") || "none"})`);
        return encEncrypt(name, opts?.isOnline ?? isOnline);
      },
      decrypt(opts) {
        tierGuard("decrypt", name);
        return encDecrypt(name, opts?.isOnline ?? isOnline);
      },
      rekey(opts) {
        tierGuard("rekey", name);
        return encRekey(name, opts.newPassword, opts.isOnline ?? isOnline);
      },
      // at-rest 密文字节原样（内容盲、不解壳、不碰密码）。非加密件 / 无本地副本 → null。
      async getEncryptedBlob() {
        const blob = await local2.get(name);
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
    if (!isOnline() || !signedIn2() || _scaffoldEnsured.size >= _scaffoldNames.size)
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
    /** 文件对象工厂（含 tryMove/pullIfClean/save/open/trash/reupload…）。 */
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
         *  sheet）；名字留在 failed 里，用户打开该文件走正常 save/冲突面解决。
         *  ⚠ 滥用警示：这是**自动续推**（登录后 / 回线 / 回前台把已 consent 的保存补上去），If-Match 守着、撞上就留 dirty。
         *  **不要**把它接到用户按的「传上去 / 全部推送」按钮上——那是替人选了「本地覆盖云端」的方向。失败名单里的文件只能经 `resolve()` 处理。 */
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
      usage: () => local2.usage(),
      /** 0.17.0：流式新建一个纯云端文件（KudsRocket「边加密边上传、不留本地副本」）。宿主按 source.read 逐块给字节（本地 File、边加密的管线……），
       *  库逐块上传（Graph 上传会话；最后一块落地才成文件，中途断了云端没有半成品），**整份永不进内存、不落本地、不写谱系**。
       *  只准新建：身份已占（本地或云端）→ CloudNameCollisionError，一个字节不传。要网：离线 / 没登录 → 抛（没有本地字节可排队）。
       *  成功后文件是 cloud-only（本夹 watcher 重画）；之后 open() 走 acquire 照常。进度经 onProgress。busy 键 "file.uploading"（宿主可按键路由到后台提示）。 */
      uploadStream: async (identifier, source, opts = {}) => {
        roGuard("uploadStream");
        await migrationReady;
        assertValidFileName(identifier, appId);
        if (!isOnline())
          throw new Error(`uploadStream "${identifier}": cloud unreachable (offline or signed out)`);
        const where = await nameOccupied(identifier);
        if (where)
          throw new CloudNameCollisionError(identifier, where);
        await busyK("file.uploading", void 0, () => cloud.pushStream(identifier, source, { onProgress: opts.onProgress }));
        notifyFolderOf(identifier);
        return { status: "uploaded", size: source.size };
      },
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
          if ((await local2.appKeys()).some((k) => k.startsWith(prefix)))
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
      local2.close?.();
      if (collectionLocal !== local2)
        collectionLocal.close?.();
      stagingStore.close?.();
    }
    // 无 _internal —— app 绝不碰 head/cloud/sub（库内测试直接 import 对应模块）。
  };
}

// node_modules/@internal/store/dist/works/maintenance.js
var WipeConsentError = class extends Error {
  code = "WIPE_CONSENT";
  constructor(msg) {
    super(msg);
    this.name = "WipeConsentError";
  }
};
var BLOCKED_TIMEOUT_MS = 2e3;
var _idb = () => globalThis.indexedDB ?? null;
var _ls = () => {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
};
async function listNamespaceDbs(appId, idb) {
  if (typeof idb.databases !== "function")
    return { supported: false, names: [] };
  try {
    const all = await idb.databases();
    return { supported: true, names: all.map((d) => d.name ?? "").filter((n) => n.startsWith(`${appId}.`)) };
  } catch {
    return { supported: false, names: [] };
  }
}
function listNamespaceLsKeys(appId, ls) {
  const prefix = `${appId}.`;
  const keys = [];
  for (let i = 0; i < ls.length; i++) {
    const k = ls.key(i);
    if (k && k.startsWith(prefix))
      keys.push(k);
  }
  return keys;
}
function deleteDbOrBlocked(idb, name) {
  return new Promise((resolve) => {
    let settled = false;
    const done = (r) => {
      if (!settled) {
        settled = true;
        resolve(r);
      }
    };
    const timer2 = setTimeout(() => done("blocked"), BLOCKED_TIMEOUT_MS);
    const req = idb.deleteDatabase(name);
    req.onsuccess = () => {
      clearTimeout(timer2);
      done("deleted");
    };
    req.onerror = () => {
      clearTimeout(timer2);
      done("blocked");
    };
    req.onblocked = () => {
    };
  });
}
async function scanAppNamespace(appId) {
  if (!appId)
    throw new Error("scanAppNamespace: appId required");
  const idb = _idb();
  const ls = _ls();
  const dbs = idb ? await listNamespaceDbs(appId, idb) : { supported: false, names: [] };
  return {
    databasesSupported: dbs.supported,
    databases: dbs.names,
    localStorageKeys: ls ? listNamespaceLsKeys(appId, ls).length : 0
  };
}
async function wipeAppNamespace(opts) {
  const { appId, consent } = opts;
  if (!appId)
    throw new Error("wipeAppNamespace: appId required");
  const expected = consent?.expected?.trim() ?? "";
  if (expected.length < 4)
    throw new WipeConsentError("wipe refused: consent.expected missing or too short (app must show the user a real confirmation phrase)");
  if (consent.typed !== consent.expected)
    throw new WipeConsentError("wipe refused: typed consent does not match the expected phrase");
  const report = { deletedDatabases: [], blockedDatabases: [], localStorageKeysRemoved: 0 };
  const idb = _idb();
  if (idb) {
    const dbs = await listNamespaceDbs(appId, idb);
    for (const name of dbs.names) {
      const r = await deleteDbOrBlocked(idb, name);
      (r === "deleted" ? report.deletedDatabases : report.blockedDatabases).push(name);
    }
  }
  const ls = _ls();
  if (ls) {
    const keys = listNamespaceLsKeys(appId, ls);
    for (const k of keys)
      ls.removeItem(k);
    report.localStorageKeysRemoved = keys.length;
  }
  return report;
}

// node_modules/@internal/store/dist/base/providers/range-body.js
async function readBody(r, onProgress) {
  const body = r.body;
  if (!onProgress || !body || typeof body.getReader !== "function")
    return await r.arrayBuffer();
  const reader = body.getReader();
  const parts = [];
  let total = 0;
  for (; ; ) {
    const { done, value } = await reader.read();
    if (done)
      break;
    if (value && value.byteLength) {
      parts.push(value);
      total += value.byteLength;
      onProgress(total);
    }
  }
  const out = new Uint8Array(total);
  let at = 0;
  for (const p of parts) {
    out.set(p, at);
    at += p.byteLength;
  }
  return out.buffer;
}
function anySignal(signals) {
  const live = signals.filter((s) => !!s);
  if (live.length === 0)
    return void 0;
  if (live.length === 1)
    return live[0];
  if (typeof AbortController !== "function")
    return live[0];
  const ctrl = new AbortController();
  for (const s of live) {
    if (s.aborted) {
      ctrl.abort(s.reason);
      break;
    }
    s.addEventListener("abort", () => ctrl.abort(s.reason), { once: true });
  }
  return ctrl.signal;
}

// node_modules/@internal/store/dist/base/providers/graph.js
var DEFAULT_GRAPH_TIMEOUTS = { meta: 3e4, chunk: 12e4, range: 6e4, blob: 15 * 6e4 };
var graphTimeouts = null;
var graphChunkResume = false;
var graphVerifyCommit = false;
var graphSleep = (ms) => new Promise((r) => setTimeout(r, ms));
var timed = (kind) => {
  if (!graphTimeouts)
    return void 0;
  const ms = graphTimeouts[kind];
  return typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function" ? AbortSignal.timeout(ms) : void 0;
};
var CHUNK_RETRY_MAX = 5;
var chunkBackoffMs = (attempt) => Math.min(1e3 * 2 ** (attempt - 1), 16e3);
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
async function downloadRangeFromUrl(downloadUrl, offset, length, opts = {}) {
  let r;
  try {
    r = await fetch(downloadUrl, { headers: { Range: _rangeHeader(offset, length) }, signal: anySignal([timed("range"), opts.signal]) });
  } catch (e) {
    throw new CloudNetworkError(`range download: network fetch failed (${String(e)})`, e);
  }
  if (!r.ok && r.status !== 206) {
    const err3 = new Error(`range download failed ${r.status}`);
    err3.status = r.status;
    throw err3;
  }
  try {
    return await readBody(r, opts.onProgress);
  } catch (e) {
    throw new CloudNetworkError(`range download: body failed (${String(e)})`, e);
  }
}
function createGraph(tokenSource, opts = {}) {
  graphTimeouts = opts.timeouts ? { ...DEFAULT_GRAPH_TIMEOUTS, ...opts.timeouts } : null;
  graphChunkResume = !!opts.chunkResume;
  graphVerifyCommit = !!opts.verifyChunkedCommit;
  if (opts.sleep)
    graphSleep = opts.sleep;
  const getToken2 = () => {
    if (!tokenSource)
      throw new Error("graph token source missing (page: createOneDriveProvider; SW: createGraph(createBridgeTokenSource(dbName)))");
    return tokenSource();
  };
  async function graphFetch(method, pathOrUrl, { headers = {}, body = null } = {}) {
    const token = await getToken2();
    const url = pathOrUrl.startsWith("http") ? pathOrUrl : `${GRAPH_BASE}${pathOrUrl}`;
    const init = { method, headers: { Authorization: `Bearer ${token}`, ...headers }, signal: timed("meta") };
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
      const err3 = new Error(`Graph ${method} ${pathOrUrl} \u2192 ${response.status}: ${detail}`);
      err3.status = response.status;
      err3.body = detail;
      throw err3;
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
      let r2;
      try {
        r2 = await fetch(dl, { signal: timed("blob") });
      } catch (e) {
        throw new CloudNetworkError(`downloadUrl: network fetch failed (${String(e)})`, e);
      }
      if (!r2.ok)
        throw new Error(`downloadUrl failed ${r2.status}`);
      return await r2.blob();
    }
    const r = await graphFetch("GET", `/me/drive/items/${itemId}/content`);
    return await r.blob();
  }
  const _dlUrlCache = /* @__PURE__ */ new Map();
  async function downloadItemRange(itemId, offset, length, opts2 = {}) {
    let url = _dlUrlCache.get(itemId) ?? await getDownloadUrl(itemId);
    if (url) {
      _dlUrlCache.set(itemId, url);
      try {
        return await downloadRangeFromUrl(url, offset, length, opts2);
      } catch (e) {
        if (opts2.signal?.aborted)
          throw e;
        _dlUrlCache.delete(itemId);
        url = await getDownloadUrl(itemId);
        if (url) {
          _dlUrlCache.set(itemId, url);
          return await downloadRangeFromUrl(url, offset, length, opts2);
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
  async function uploadFileToApproot(path, blob, contentType = "application/octet-stream", { conflictBehavior = "replace", eTag = null, onProgress, session: session2 } = {}) {
    if (conflictBehavior === "replace" && !eTag)
      throw new Error(`[graph] blind overwrite forbidden: conflictBehavior:"replace" requires If-Match eTag (${path})`);
    const headers = { "Content-Type": contentType };
    if (eTag)
      headers["If-Match"] = eTag;
    if (blob.size <= SIMPLE_UPLOAD_LIMIT) {
      onProgress?.(0, blob.size);
      const r = await graphFetch("PUT", `/me/drive/special/approot:/${encodeApprootPath(path)}:/content?@microsoft.graph.conflictBehavior=${conflictBehavior}`, { headers, body: blob });
      onProgress?.(blob.size, blob.size);
      return r.json();
    }
    return uploadChunked(path, { size: blob.size, read: async (o, n) => new Uint8Array(await blob.slice(o, o + n).arrayBuffer()) }, conflictBehavior, eTag, onProgress, session2);
  }
  async function uploadStreamToApproot(path, source, _contentType = "application/octet-stream", { conflictBehavior = "fail", eTag = null, onProgress } = {}) {
    if (conflictBehavior === "replace" && !eTag)
      throw new Error(`[graph] blind overwrite forbidden: conflictBehavior:"replace" requires If-Match eTag (${path})`);
    return uploadChunked(path, source, conflictBehavior, eTag, onProgress);
  }
  async function uploadChunked(path, source, conflictBehavior, eTag, onProgress, session2) {
    const CHUNK2 = 5 * 1024 * 1024;
    const total = source.size;
    let offset = 0;
    let last = null;
    let uploadUrl = null;
    let resumed = false;
    if (session2) {
      const rec = await session2.load().catch(() => null);
      if (rec && rec.token === session2.token && rec.total === total && rec.eTag === eTag && (rec.expiresAt == null || rec.expiresAt > Date.now())) {
        try {
          const st = await fetch(rec.uploadUrl, { signal: timed("meta") });
          const j = st.ok ? await st.json().catch(() => null) : null;
          const next = j?.nextExpectedRanges?.[0]?.split("-")[0];
          const at = next != null ? Number(next) : NaN;
          if (st.ok && Number.isFinite(at) && at >= 0 && at <= total) {
            uploadUrl = rec.uploadUrl;
            offset = at;
            resumed = true;
          }
        } catch (_) {
        }
      }
      if (!uploadUrl && rec)
        await session2.clear().catch(() => {
        });
    }
    if (!uploadUrl) {
      const sessR = await graphFetch("POST", `/me/drive/special/approot:/${encodeApprootPath(path)}:/createUploadSession`, {
        body: {
          item: {
            "@microsoft.graph.conflictBehavior": conflictBehavior,
            name: path.split("/").pop()
          }
        },
        headers: eTag ? { "If-Match": eTag } : void 0
      });
      const sess = await sessR.json();
      uploadUrl = sess.uploadUrl;
      if (session2) {
        const exp = sess.expirationDateTime ? Date.parse(sess.expirationDateTime) : NaN;
        await session2.save({ uploadUrl, total, eTag, token: session2.token, createdAt: Date.now(), expiresAt: Number.isFinite(exp) ? exp : null }).catch(() => {
        });
      }
    }
    const sessionUrl = uploadUrl;
    const forget = () => session2 ? session2.clear().catch(() => {
    }) : Promise.resolve();
    let failures = 0;
    const resumeFrom = async (why) => {
      failures++;
      if (failures > CHUNK_RETRY_MAX)
        throw new CloudNetworkError(`Graph chunked upload ${path}: gave up after ${CHUNK_RETRY_MAX} retries at ${offset}/${total} (${why})`);
      await graphSleep(chunkBackoffMs(failures));
      let st;
      try {
        st = await fetch(sessionUrl, { signal: timed("meta") });
      } catch (e) {
        throw new CloudNetworkError(`Graph upload session status: network fetch failed (${String(e)})`, e);
      }
      if (!st.ok)
        throw new CloudNetworkError(`Graph upload session ${path}: gone (${st.status}) after ${why}`);
      const j = await st.json().catch(() => null);
      const next = j?.nextExpectedRanges?.[0]?.split("-")[0];
      const at = next != null ? Number(next) : NaN;
      if (!Number.isFinite(at) || at < 0 || at > total)
        throw new CloudNetworkError(`Graph upload session ${path}: no usable nextExpectedRanges after ${why}`);
      return at;
    };
    const cancelSession = async () => {
      try {
        await fetch(sessionUrl, { method: "DELETE", signal: timed("meta") });
      } catch (_) {
      }
    };
    onProgress?.(offset, total);
    while (offset < total) {
      const end = Math.min(offset + CHUNK2, total) - 1;
      if ((graphVerifyCommit || resumed) && end === total - 1 && eTag) {
        const cur = await getItemByPath(path);
        if (cur && cur.eTag && cur.eTag !== eTag) {
          await cancelSession();
          await forget();
          const err3 = new Error(`chunked upload ${path}: item changed during upload (If-Match ${eTag} \u2260 ${cur.eTag})`);
          err3.status = 412;
          throw err3;
        }
      }
      const chunk = await source.read(offset, end - offset + 1);
      if (chunk.length !== end - offset + 1)
        throw new Error(`[graph] chunk source short read at ${offset}: wanted ${end - offset + 1}, got ${chunk.length}`);
      let r;
      try {
        r = await fetch(sessionUrl, {
          method: "PUT",
          headers: {
            "Content-Length": String(chunk.length),
            "Content-Range": `bytes ${offset}-${end}/${total}`
          },
          body: chunk,
          signal: timed("chunk")
        });
      } catch (e) {
        if (!graphChunkResume)
          throw new CloudNetworkError(`Graph chunked upload PUT (${offset}-${end}/${total}): network fetch failed (${String(e)})`, e);
        offset = await resumeFrom(`network: ${String(e)}`);
        continue;
      }
      if (!r.ok && r.status !== 202) {
        if (graphChunkResume && (r.status === 429 || r.status === 416 || r.status >= 500 && r.status <= 599)) {
          offset = await resumeFrom(`http ${r.status}`);
          continue;
        }
        await forget();
        const err3 = new Error(`chunked upload failed ${r.status}`);
        err3.status = r.status;
        throw err3;
      }
      failures = 0;
      last = await r.json().then((j) => j).catch(() => null);
      offset = end + 1;
      onProgress?.(offset, total);
    }
    await forget();
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
        mr = await fetch(monitor, { signal: timed("meta") });
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
    uploadStreamToApproot,
    deleteItem,
    clearFolderCaches,
    getApprootId,
    ensureSubfolder,
    moveItemToFolder,
    copyItemToFolder,
    renameItem
  };
}

// node_modules/@internal/store/dist/base/providers/auth.js
var CLIENT_ID2 = "";
var AUTHORITY2 = "https://login.microsoftonline.com/consumers";
var SCOPES2 = ["Files.ReadWrite.AppFolder", "offline_access"];
var MSAL_URL2 = null;
function configureOneDriveAuth({ clientId, authority, scopes, msalUrl } = {}) {
  if (clientId)
    CLIENT_ID2 = clientId;
  if (authority) {
    if (!/^https:\/\/login\.microsoftonline\.com\/consumers\/?$/.test(authority))
      throw new Error(`configureOneDriveAuth: authority must be https://login.microsoftonline.com/consumers (family hard rule #7: personal Microsoft accounts only; /common is forbidden) \u2014 got ${authority}`);
    AUTHORITY2 = authority;
  }
  if (scopes)
    SCOPES2 = scopes;
  if (msalUrl != null) {
    MSAL_URL2 = typeof document !== "undefined" && document.baseURI ? new URL(msalUrl, document.baseURI).href : null;
  }
}
function isAuthConfigured() {
  return typeof CLIENT_ID2 === "string" && CLIENT_ID2.length > 0 && !CLIENT_ID2.startsWith("REPLACE_ME");
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
    const fmt2 = (v) => {
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
        rts.push(`env=${env} familyId=${String(ent.familyId ?? "-")} expiresOn=${fmt2(ent.expiresOn)}`);
      else
        ats.push(`env=${env} cachedAt=${fmt2(ent.cachedAt)} expiresOn=${fmt2(ent.expiresOn)} extExpiresOn=${fmt2(ent.extendedExpiresOn)} target=${String(ent.target ?? "-").slice(0, 80)}`);
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
  const err3 = e;
  const hid = typeof account?.homeAccountId === "string" ? account.homeAccountId : "";
  const lines = [
    `[auth] silent token renewal failed (${where}): name=${String(err3?.name ?? "?")} code=${String(err3?.errorCode ?? "?")} sub=${String(err3?.subError ?? "")} msg=${String(err3?.message ?? e).slice(0, 200)}`,
    `  account=${hid ? hid.slice(0, 8) + "\u2026" : "(none)"} refreshTokensInCache=${String(countRefreshTokens(hid || void 0))} scopes=${SCOPES2.join(" ")} now=${(/* @__PURE__ */ new Date()).toISOString()}`,
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
  const err3 = e;
  return err3?.name === "InteractionRequiredAuthError" || /^(login_required|interaction_required|consent_required)$/.test(String(err3?.errorCode ?? ""));
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
      const result = await pca.acquireTokenSilent({ scopes: SCOPES2, account });
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
      clearTimeout(timer2);
      fn();
    };
    const timer2 = setTimeout(() => settle(() => {
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
    await loadScriptWithRetry(MSAL_URL2);
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
        clientId: CLIENT_ID2,
        authority: AUTHORITY2,
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
    await pca.acquireTokenSilent({ scopes: SCOPES2, account });
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
  const request = { scopes: SCOPES2, ...opts?.prompt ? { prompt: opts.prompt } : {} };
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
    await pca.acquireTokenSilent({ scopes: SCOPES2, account: cached[0] });
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

// node_modules/@internal/store/dist/base/folder-delete.js
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

// node_modules/@internal/store/dist/base/onedrive-provider.js
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
    downloadRange: (ref, offset, length, opts) => graph.downloadItemRange(ref, offset, length, opts),
    // graph.js 是 Blob 原生（按 .size 选简单/分块路径、用 .slice 切块）；lib 把字节归一成 Uint8Array。
    // 必须在这道接缝转回 Blob——Uint8Array.size===undefined → undefined<=4MB 为 false → 永远走分块、
    // while(0<undefined) 一个 chunk 都不传 → 上传 0 字节占位还回 etag（postmortem 2026-06-05 根因）。
    upload: (path, blob, { contentType = "application/octet-stream", eTag = null, conflictBehavior = "replace", onProgress, session: session2 } = {}) => {
      const body = blob instanceof Blob ? blob : new Blob([blob], { type: contentType });
      return graph.uploadFileToApproot(path, body, contentType, { conflictBehavior, eTag, onProgress, session: session2 }).then(toItem);
    },
    ...graph.uploadStreamToApproot ? {
      uploadStream: (path, source, { contentType = "application/octet-stream", eTag = null, conflictBehavior = "fail", onProgress } = {}) => graph.uploadStreamToApproot(path, source, contentType, { conflictBehavior, eTag, onProgress }).then(toItem)
    } : {},
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

// node_modules/@internal/store/dist/base/providers/index.js
function createOneDriveProvider(config = {}) {
  configureOneDriveAuth(config);
  const hid = config.homeAccountId;
  const g = createGraph(hid ? () => getTokenFor(hid) : getToken, config.transport ?? {});
  const provider = Object.assign(graphToCloudProvider(g), {
    onAuthChanged: (cb) => onAuthChanged((st) => cb({ signedIn: st.signedIn, reason: st.reason }))
  });
  return {
    provider,
    // CloudProvider（喂 createCloudSync）
    auth: { isAuthConfigured, initAuth, signIn, signOut, getToken, isSignedIn, getActiveAccount, retrySilentSignIn, onAuthChanged, getAuthState }
  };
}

// node_modules/@internal/store/dist/stream/mirror.js
function createFileMirror(label, lookup) {
  return {
    label,
    async open(name, size) {
      const f = await lookup(name);
      if (!f || f.size !== size)
        return null;
      return {
        async read(offset, length) {
          const start = Math.max(0, Math.min(offset, f.size));
          return new Uint8Array(await f.slice(start, Math.min(f.size, start + Math.max(0, length))).arrayBuffer());
        }
      };
    }
  };
}
function createHttpMirror(label, urlFor, opts = {}) {
  const doFetch = opts.fetch ?? ((input, init) => fetch(input, init));
  const timed2 = () => opts.timeoutMs && typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function" ? AbortSignal.timeout(opts.timeoutMs) : void 0;
  return {
    label,
    async open(name, size) {
      const url = urlFor(name);
      if (!url)
        return null;
      let r;
      try {
        r = await doFetch(url, { headers: { Range: "bytes=0-0" }, signal: timed2() });
      } catch {
        return null;
      }
      try {
        await r.body?.cancel();
      } catch {
      }
      if (r.status !== 206)
        return null;
      const m = /\/(\d+)\s*$/.exec(r.headers.get("Content-Range") ?? "");
      if (!m || Number(m[1]) !== size)
        return null;
      return {
        async read(offset, length, o = {}) {
          let res;
          try {
            res = await doFetch(url, { headers: { Range: `bytes=${offset}-${offset + length - 1}` }, signal: anySignal([timed2(), o.signal]) });
          } catch (e) {
            throw new Error(`mirror "${label}": range fetch failed (${String(e)})`, { cause: e });
          }
          if (res.status !== 206) {
            try {
              await res.body?.cancel();
            } catch {
            }
            throw new Error(`mirror "${label}": range GET \u2192 ${res.status}`);
          }
          let buf;
          try {
            buf = await readBody(res, o.onProgress);
          } catch (e) {
            throw new Error(`mirror "${label}": range body failed (${String(e)})`, { cause: e });
          }
          if (buf.byteLength !== length)
            throw new Error(`mirror "${label}": range returned ${buf.byteLength} bytes, wanted ${length}`);
          return new Uint8Array(buf);
        }
      };
    }
  };
}

// node_modules/@internal/encryption/dist/encryption.js
var SEVENZ_MAGIC = [55, 122, 188, 175, 39, 28];
var ZIP_MAGIC = [80, 75, 3, 4];
function _startsWith(u83, sig) {
  if (u83.length < sig.length)
    return false;
  for (let i = 0; i < sig.length; i++)
    if (u83[i] !== sig[i])
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
function _hex(u83) {
  return [...u83].map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function _deriveKey(password, salt) {
  const cacheKey2 = `${password}\0${_hex(salt)}`;
  const hit = _keyCache.get(cacheKey2);
  if (hit)
    return hit;
  const subtle = globalThis.crypto.subtle;
  const base = await subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  const key = await subtle.deriveKey({ name: "PBKDF2", hash: "SHA-256", salt, iterations: PBKDF2_ITERS }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
  _keyCache.set(cacheKey2, key);
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
function scanEncPeekFromEnd(u83) {
  const n = u83.length;
  outer: for (let i = n - PEEK_HEADER_LEN; i >= 0; i--) {
    for (let k = 0; k < 8; k++)
      if (u83[i + k] !== PEEK_MAGIC[k])
        continue outer;
    const ver = u83[i + 8];
    if (ver !== PEEK_VER)
      continue;
    const len = new DataView(u83.buffer, u83.byteOffset + i + 37, 4).getUint32(0, true);
    if (len < 16 || len > PEEK_MAX_LEN || i + PEEK_HEADER_LEN + len > n)
      continue;
    return {
      start: i,
      end: i + PEEK_HEADER_LEN + len,
      ver,
      salt: u83.slice(i + 9, i + 25),
      iv: u83.slice(i + 25, i + 37),
      ct: u83.slice(i + PEEK_HEADER_LEN, i + PEEK_HEADER_LEN + len)
    };
  }
  return null;
}
async function decryptPeek(parsed, password) {
  const key = await _deriveKey(password, parsed.salt);
  try {
    return new Uint8Array(await globalThis.crypto.subtle.decrypt({ name: "AES-GCM", iv: parsed.iv }, key, parsed.ct));
  } catch {
    const err3 = new Error("wrong password");
    err3.code = "WRONG_PASSWORD";
    throw err3;
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
  async function packContainer({ dataBytes, fileName: fileName2, ext = "bin", guid: guid2, peek = null, password }) {
    if (!password)
      throw new Error("cannot encrypt without a password");
    const metaJson = JSON.stringify({ v: 1, name: fileName2 || null, ext });
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

// node_modules/@internal/encryption/dist/remember.js
var MAX_REMEMBER_MS = 30 * 24 * 60 * 60 * 1e3;
var RECORD_VERSION = 1;
var AAD_TAG = "internal-encryption.remember.v1";
var CLOCK_SLACK_MS = 24 * 60 * 60 * 1e3;
var STORE_NAME = "secret";
var RECORD_KEY = "password";
function idbSecretStore(dbName, factory) {
  const idb = factory ?? globalThis.indexedDB;
  if (!idb)
    throw new Error("idbSecretStore: IndexedDB is not available here (inject a SecretStore instead)");
  let dbp3 = null;
  const db3 = () => {
    dbp3 ??= new Promise((resolve, reject) => {
      const req = idb.open(dbName, 1);
      req.onupgradeneeded = () => {
        req.result.createObjectStore(STORE_NAME);
      };
      req.onsuccess = () => {
        const d = req.result;
        d.onversionchange = () => {
          d.close();
          dbp3 = null;
        };
        resolve(d);
      };
      req.onerror = () => reject(req.error);
    });
    dbp3.catch(() => {
      dbp3 = null;
    });
    return dbp3;
  };
  async function tx3(mode, body) {
    const d = await db3();
    return new Promise((resolve, reject) => {
      const t = d.transaction(STORE_NAME, mode);
      let result;
      const req = body(t.objectStore(STORE_NAME));
      req.onsuccess = () => {
        result = req.result;
      };
      t.oncomplete = () => resolve(result);
      t.onerror = () => reject(t.error);
      t.onabort = () => reject(t.error ?? new Error("remember: transaction aborted"));
    });
  }
  const exists2 = async () => {
    if (dbp3)
      return true;
    if (typeof idb.databases !== "function")
      return true;
    try {
      return (await idb.databases()).some((d) => d.name === dbName);
    } catch {
      return true;
    }
  };
  return {
    get: async () => await exists2() ? tx3("readonly", (s) => s.get(RECORD_KEY)) : void 0,
    put: async (rec) => {
      await tx3("readwrite", (s) => s.put(rec, RECORD_KEY));
    },
    delete: async () => {
      if (await exists2())
        await tx3("readwrite", (s) => s.delete(RECORD_KEY));
    }
  };
}
function createPasswordKeeper(opts) {
  const store2 = opts.store ?? idbSecretStore(opts.dbName);
  const now = opts.now ?? (() => Date.now());
  const aad = (expiresAt) => new TextEncoder().encode(`${AAD_TAG}|${expiresAt}`);
  const isRecord = (x) => {
    const r = x;
    return r != null && typeof r === "object" && r.v === RECORD_VERSION && typeof r.key === "object" && r.key != null && r.iv instanceof Uint8Array && r.iv.length === 12 && r.ct instanceof ArrayBuffer && typeof r.expiresAt === "number" && Number.isFinite(r.expiresAt);
  };
  const forget = async () => {
    await store2.delete();
  };
  const quietForget = () => forget().catch(() => {
  });
  async function live() {
    let rec;
    try {
      rec = await store2.get();
    } catch {
      return null;
    }
    if (rec == null)
      return null;
    const t = now();
    if (!isRecord(rec) || rec.expiresAt <= t || rec.expiresAt > t + MAX_REMEMBER_MS + CLOCK_SLACK_MS) {
      await quietForget();
      return null;
    }
    return rec;
  }
  return {
    async remember(password, o = {}) {
      if (typeof password !== "string" || password.length === 0)
        throw new TypeError("remember: password must be a non-empty string");
      const ttl = o.ttlMs ?? MAX_REMEMBER_MS;
      if (typeof ttl !== "number" || !Number.isFinite(ttl) || ttl <= 0)
        throw new RangeError("remember: ttlMs must be a positive number of milliseconds");
      const expiresAt = Math.round(now() + Math.min(ttl, MAX_REMEMBER_MS));
      const subtle = globalThis.crypto.subtle;
      const key = await subtle.generateKey({ name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
      const iv = globalThis.crypto.getRandomValues(new Uint8Array(12));
      const ct = await subtle.encrypt({ name: "AES-GCM", iv, additionalData: aad(expiresAt) }, key, new TextEncoder().encode(password));
      const rec = { v: RECORD_VERSION, key, iv, ct, expiresAt };
      await store2.put(rec);
      return { expiresAt };
    },
    async recall() {
      const rec = await live();
      if (!rec)
        return null;
      try {
        const plain = await globalThis.crypto.subtle.decrypt({ name: "AES-GCM", iv: rec.iv, additionalData: aad(rec.expiresAt) }, rec.key, rec.ct);
        return new TextDecoder().decode(plain);
      } catch {
        await quietForget();
        return null;
      }
    },
    async status() {
      const rec = await live();
      return rec ? { remembered: true, expiresAt: rec.expiresAt } : { remembered: false, expiresAt: null };
    },
    forget
  };
}

// src/app/labels.ts
var labels = /* @__PURE__ */ new Map();
var setLabel = (identifier, label) => {
  labels.set(identifier, label);
};
function labelFor(identifier) {
  const known = labels.get(identifier);
  if (known) return known;
  const m = /^crumbs\/[0-9a-f]{16}-([sa])([0-9]+)\.crumb$/.exec(identifier);
  if (m) return `\u5FEB\u7167\uFF08${m[1] === "s" ? "\u624B\u52A8" : "\u81EA\u52A8"} ${m[2]}\uFF09`;
  if (identifier.startsWith("jars/")) return "\u5B58\u6863";
  if (identifier.startsWith("pantry/")) return "\u76D8";
  if (identifier.startsWith("recipes/")) return "\u8BFB\u76D8\u83DC\u8C31";
  if (identifier.startsWith("tins/")) return "\u53C2\u8003\u7A97\uFF08\u653B\u7565 / \u7B14\u8BB0\uFF09";
  if (identifier.startsWith("tmp/traces/")) return "\u8BFB\u76D8\u8F68\u8FF9";
  return identifier.replace(/^.*\//, "");
}

// src/app/device-kv.ts
var PREFIX = `${APP_GUID}:device.`;
var OLD_PREFIX = `${APP_ID}.device.`;
var mem = /* @__PURE__ */ new Map();
var movedLegacy = 0;
try {
  const olds = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(OLD_PREFIX)) olds.push(k);
  }
  for (const k of olds) {
    const v = localStorage.getItem(k);
    const nk = PREFIX + k.slice(OLD_PREFIX.length);
    if (v !== null && localStorage.getItem(nk) === null) localStorage.setItem(nk, v);
    localStorage.removeItem(k);
    movedLegacy++;
  }
} catch {
}
var legacyKeysMoved = () => movedLegacy;
function get(key) {
  try {
    return localStorage.getItem(PREFIX + key) ?? mem.get(key) ?? null;
  } catch {
    return mem.get(key) ?? null;
  }
}
function set(key, value) {
  if (value == null) mem.delete(key);
  else mem.set(key, value);
  try {
    if (value == null) localStorage.removeItem(PREFIX + key);
    else localStorage.setItem(PREFIX + key, value);
  } catch {
  }
}
var STAGING_CAP_CHOICES = [
  { label: "256 MB\uFF08\u9ED8\u8BA4\uFF09", bytes: 0 },
  { label: "1 GB", bytes: 1 * 2 ** 30 },
  { label: "4 GB", bytes: 4 * 2 ** 30 },
  { label: "16 GB", bytes: 16 * 2 ** 30 }
];
function stagingCapBytes() {
  const n = Number(get("staging-cap") ?? 0);
  return Number.isFinite(n) && n > 0 ? n : 0;
}
function setStagingCapBytes(bytes) {
  set("staging-cap", bytes > 0 ? String(bytes) : null);
}
var BLACKBOX_MAX = 400;
function loadBlackbox() {
  try {
    const v = JSON.parse(get("blackbox") ?? "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}
function saveBlackbox(entries) {
  try {
    set("blackbox", JSON.stringify(entries.slice(-BLACKBOX_MAX)));
  } catch {
  }
}
function mirrorUrls() {
  try {
    const v = JSON.parse(get("mirrors") ?? "[]");
    return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}
function setMirrorUrls(urls) {
  set("mirrors", urls.length ? JSON.stringify(urls) : null);
}
function deviceKvWipeAll() {
  let n = 0;
  try {
    const ks = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIX)) ks.push(k);
    }
    for (const k of ks) {
      localStorage.removeItem(k);
      n++;
    }
  } catch {
  }
  n += mem.size;
  mem.clear();
  return n;
}
function deviceKvCount() {
  try {
    let n = 0;
    for (let i = 0; i < localStorage.length; i++) if (localStorage.key(i)?.startsWith(PREFIX)) n++;
    return n + mem.size;
  } catch {
    return mem.size;
  }
}
function bindingsText(core2) {
  return get(`bindings.${core2}`);
}
function setBindingsText(core2, text) {
  set(`bindings.${core2}`, text);
}
function deviceId() {
  let v = get("device-id");
  if (!v || !/^[0-9a-f]{8}$/.test(v)) {
    v = Array.from(crypto.getRandomValues(new Uint8Array(4)), (b) => b.toString(16).padStart(2, "0")).join("");
    set("device-id", v);
  }
  return v;
}

// src/app/sync-status.ts
var STUCK_MS = 45e3;
var LOG_MAX = 400;
var flights = /* @__PURE__ */ new Map();
var nextId = 1;
var pending = 0;
var needsYou = 0;
var activities = /* @__PURE__ */ new Map();
var problem = null;
var local = null;
var doneUntil = 0;
var netBytes = { up: 0, down: 0 };
var softProblem = null;
var retryHook = null;
function networkHiccup(detail) {
  softProblem = { text: "\u7F51\u7EDC\u65AD\u4E86\u4E00\u4E0B\uFF0C\u6CA1\u4F20\u4E0A\u53BB\uFF1A\u5B58\u5728\u8FD9\u53F0\u8BBE\u5907\u4E86\uFF0C\u8054\u7F51\u540E\u81EA\u52A8\u518D\u4F20", at: Date.now() };
  logEvent("warn", `\u7F51\u7EDC\uFF1A${detail}`);
  retryHook?.();
}
function onRetryWanted(fn) {
  retryHook = fn;
}
var readWait = null;
function setReadWait(text) {
  if (text !== readWait) {
    readWait = text;
    if (text) logEvent("warn", text);
    else render();
  }
}
var log = loadBlackbox();
log.push({ at: Date.now(), level: "info", text: `\u2014\u2014 \u9875\u9762\u8F7D\u5165 ${APP_VERSION} \u2014\u2014` });
var flushTimer = 0;
function flushLog() {
  clearTimeout(flushTimer);
  flushTimer = 0;
  saveBlackbox(log);
}
addEventListener("pagehide", flushLog);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushLog();
});
var onClick = null;
var signedIn = () => true;
var timer = 0;
var listeners = /* @__PURE__ */ new Set();
function subscribe(cb) {
  listeners.add(cb);
  cb(state());
  return () => {
    listeners.delete(cb);
  };
}
var inFlight = () => !!local || flights.size > 0 || activities.size > 0;
function inFlightFresh() {
  if (local || activities.size) return true;
  const now = performance.now();
  for (const f of flights.values()) if (now - Math.max(f.startedAt, f.progressAt ?? f.startedAt) < 9e4) return true;
  return false;
}
function whenIdle() {
  if (!inFlight()) return Promise.resolve();
  return new Promise((resolve) => {
    const off = subscribe(() => {
      if (!inFlight()) {
        off();
        resolve();
      }
    });
  });
}
function beginLocal(label) {
  local = { label, startedAt: performance.now() };
  render();
}
var nextActivity = 1;
function activity(text, run) {
  const id = nextActivity++;
  activities.set(id, text);
  render();
  return run().finally(() => {
    activities.delete(id);
    render();
  });
}
function endLocal() {
  local = null;
  render();
}
var mb = (n) => n >= 2 ** 20 ? `${(n / 2 ** 20).toFixed(1)} MB` : `${(n / 1024).toFixed(0)} KB`;
var secs = (t0) => `${((performance.now() - t0) / 1e3).toFixed(0)} s`;
function logEvent(level, text) {
  log.push({ at: Date.now(), level, text });
  if (log.length > LOG_MAX) log.shift();
  if (!flushTimer) flushTimer = window.setTimeout(flushLog, 500);
  (level === "info" ? console.info : console.warn)("[sync]", text);
  render();
}
function track(label, bytes, run, verb = "\u4F20") {
  const id = nextId++;
  const f = { id, label, bytes, startedAt: performance.now(), done: null, verb };
  flights.set(id, f);
  logEvent("info", `\u5F00\u59CB\u4F20 ${label}\uFF08${mb(bytes)}\uFF09`);
  let lastPaint = 0;
  const p = run((done, total) => {
    const delta = Math.max(0, done - (f.done ?? 0));
    if (f.verb === "\u4F20") netBytes.up += delta;
    else netBytes.down += delta;
    f.done = done;
    if (total) f.bytes = total;
    f.progressAt = performance.now();
    const now = performance.now();
    if (now - lastPaint > 200 || done === total) {
      lastPaint = now;
      render();
    }
  });
  return p.then((r) => {
    flights.delete(id);
    if (r.pushed) {
      problem = null;
      softProblem = null;
      doneUntil = performance.now() + 3e3;
      logEvent("info", `\u4F20\u597D\u4E86 ${label}\uFF0C\u7528\u4E86 ${secs(f.startedAt)}`);
    } else if (!signedIn()) {
      problem = null;
      doneUntil = performance.now() + 3e3;
      logEvent("info", `${label} \u5B58\u5728\u8FD9\u53F0\u8BBE\u5907\uFF08\u6CA1\u767B\u5F55\uFF0C\u4E0D\u4F20\uFF09`);
    } else if (r.reason === "not-attempted") {
      problem = null;
      doneUntil = performance.now() + 3e3;
      logEvent("info", `${label} \u5B58\u5728\u8FD9\u53F0\u8BBE\u5907\u4E86\uFF08\u9501\u5C4F / \u540E\u53F0\u4E0D\u4F20\uFF0C\u56DE\u6765\u81EA\u52A8\u4F20\uFF09`);
      retryHook?.();
    } else if (r.reason === "error" || r.reason === "deferred") {
      softProblem = { text: `${label} \u6CA1\u4F20\u4E0A\u53BB\uFF08\u7F51\u7EDC\uFF1F\uFF09\uFF1A\u5B58\u5728\u8FD9\u53F0\u8BBE\u5907\u4E86\uFF0C\u4F1A\u81EA\u52A8\u518D\u4F20`, at: Date.now() };
      logEvent("warn", softProblem.text);
      retryHook?.();
    } else {
      problem = { text: `${label} \u6CA1\u4F20\u4E0A\u53BB\uFF08${r.reason ?? "\u539F\u56E0\u4E0D\u660E"}\uFF09`, at: Date.now() };
      logEvent("warn", problem.text);
    }
    return r;
  }, (e) => {
    flights.delete(id);
    problem = { text: `${label} \u51FA\u9519\uFF1A${errorText(e)}`, at: Date.now() };
    logEvent("error", problem.text);
    throw e;
  });
}
function setPending(c) {
  needsYou = c.needsYou;
  pending = c.needsYou + c.waiting;
  newerOnCloud = c.newer;
  if (pending === 0) softProblem = null;
  render();
}
var newerOnCloud = 0;
function dumpLog() {
  return log.map((e) => `${new Date(e.at).toLocaleTimeString()} ${e.level === "info" ? " " : e.level === "warn" ? "!" : "\u2716"} ${e.text}`).join("\n") || "\uFF08\u8FD8\u6CA1\u6709\u8BB0\u5F55\uFF09";
}
function mount(opts) {
  onClick = opts.onClick;
  signedIn = opts.signedIn;
  for (const id of ["syncbar", "sync-home"]) $(id).addEventListener("click", () => onClick?.());
  render();
}
function state() {
  if (readWait) return { kind: "stuck", text: readWait };
  if (local) return { kind: "saving", text: `\u6B63\u5728\u5B58 ${local.label}\u2026` };
  const first = flights.values().next().value;
  if (first) {
    const elapsed = performance.now() - first.startedAt;
    const more = flights.size > 1 ? `\uFF08\u8FD8\u6709 ${flights.size - 1} \u4E2A\u6392\u7740\uFF09` : "";
    const pct2 = first.done != null && first.bytes ? ` ${Math.floor(first.done / first.bytes * 100)}%` : "";
    const fraction = first.done != null ? first.done / first.bytes : null;
    const stuck = elapsed > STUCK_MS && (first.done == null || first.done === 0 || first.bytes < 64 * 2 ** 20);
    if (stuck) return { kind: "stuck", text: `\u5361\u4F4F\u4E86\uFF1F${first.label} \u5DF2\u7ECF${first.verb}\u4E86 ${secs(first.startedAt)}${pct2}${more}`, fraction };
    return { kind: "busy", text: `\u6B63\u5728${first.verb} ${first.label} ${mb(first.bytes)}${pct2} \xB7 ${secs(first.startedAt)}${more}`, fraction };
  }
  const act = activities.values().next().value;
  if (act) return { kind: "busy", text: `${act}${activities.size > 1 ? `\uFF08\u8FD8\u6709 ${activities.size - 1} \u4EF6\uFF09` : ""}` };
  if (problem) return { kind: "bad", text: problem.text };
  if (needsYou > 0) return { kind: "attention", text: `${needsYou} \u4E2A\u8981\u5904\u7406\uFF08\u70B9\u5F00\u770B\uFF09${pending > needsYou ? ` \xB7 ${pending - needsYou} \u4E2A\u7B49\u7740\u4F20` : ""}` };
  if (softProblem && pending > 0) return { kind: "waiting", text: softProblem.text };
  if (performance.now() < doneUntil) return signedIn() ? { kind: "done", text: "\u4F20\u597D\u4E86" } : { kind: "local", text: "\u5B58\u5728\u8FD9\u53F0\u8BBE\u5907\u4E86\uFF08\u6CA1\u767B\u5F55\uFF0C\u4E0D\u4F20\uFF09" };
  if (!signedIn()) return pending > 0 ? { kind: "local", text: `${pending} \u4E2A\u53EA\u5728\u8FD9\u53F0\u8BBE\u5907\uFF08\u767B\u5F55\u540E\u518D\u4F20\uFF09` } : { kind: "idle", text: "\u6CA1\u767B\u5F55\uFF1A\u5B58\u6863\u53EA\u5728\u8FD9\u53F0\u8BBE\u5907" };
  if (pending > 0) return { kind: "waiting", text: `${pending} \u4E2A\u7B49\u7740\u4F20\uFF08\u4F1A\u81EA\u5DF1\u4F20\u4E0A\u53BB\uFF0C\u4E0D\u7528\u7BA1\uFF09${newerOnCloud ? ` \xB7 ${newerOnCloud} \u4E2A\u4E91\u7AEF\u6709\u65B0\u7248` : ""}` };
  if (newerOnCloud > 0) return { kind: "idle", text: `\u4E91\u7AEF\u6709\u65B0\u7248 ${newerOnCloud} \u4E2A\uFF08\u522B\u7684\u8BBE\u5907\u5B58\u7684\uFF0C\u81EA\u52A8\u6362\uFF09` };
  return { kind: "idle", text: "\u4E91\u7AEF\uFF1A\u5DF2\u540C\u6B65" };
}
function render() {
  const s = state();
  for (const cb of listeners) cb(s);
  const bar = document.getElementById("syncbar"), home = document.getElementById("sync-home");
  if (bar) {
    bar.className = `syncbar ${s.kind}${s.fraction != null ? " known" : ""}`;
    bar.hidden = s.kind === "idle";
    const fill2 = h("span", { class: "syncbar-fill" });
    if (s.fraction != null) fill2.style.width = `${Math.max(2, Math.min(100, s.fraction * 100)).toFixed(1)}%`;
    bar.replaceChildren(h("span", { class: "syncbar-track" }, fill2), h("span", { class: "syncbar-text" }, s.text));
  }
  if (home) {
    home.className = `sync-home ${s.kind}`;
    home.hidden = false;
    home.textContent = s.text;
  }
  const live = local || flights.size || activities.size || performance.now() < doneUntil;
  if (live && !timer) timer = window.setInterval(() => {
    if (!(local || flights.size || activities.size || performance.now() < doneUntil)) {
      clearInterval(timer);
      timer = 0;
    }
    render();
  }, 1e3);
}

// src/app/store-ui.ts
var BACKGROUND_KEYS = /* @__PURE__ */ new Set(["sync.pushing", "file.renaming", "file.uploading", "cloud.checking", "file.pulling"]);
var STATUS_KEYS = /* @__PURE__ */ new Set(["file.deleting", "folder.creating"]);
var modalHook = () => {
};
var modalDepth = 0;
function onStoreModal(fn) {
  modalHook = fn;
}
async function modal(fn) {
  if (modalDepth++ === 0) modalHook(true);
  try {
    return await fn();
  } finally {
    if (--modalDepth === 0) modalHook(false);
  }
}
var stemOf = (identifier) => labelFor(identifier);
var storeUI = {
  busy: (label, fn, key) => {
    if (key && STATUS_KEYS.has(key)) return activity(label, fn);
    if (!key || !BACKGROUND_KEYS.has(key)) return modal(() => withBusy(label, fn));
    if (key === "file.pulling") note(label, 3e4);
    return fn();
  },
  // 这张面是唯一能决定「用哪份」的地方：app 代码不许替人回答（10-16 user「禁止越狱」；v0.1.33–0.1.35 的 presetResolution 已删）。
  resolveConflict: async ({ name, occasion, cloudState }) => {
    const n = stemOf(name);
    const text = cloudState === "absent" ? {
      title: "\u4E91\u7AEF\u90A3\u4EFD\u6CA1\u4E86",
      body: `\u300C${n}\u300D\u5728\u4E91\u7AEF\u5DF2\u7ECF\u4E0D\u5728\u4E86\uFF08\u522B\u7684\u8BBE\u5907\u5220\u4E86\uFF0C\u6216\u79FB\u8FDB\u4E86\u56DE\u6536\u7AD9\uFF09\uFF0C\u8FD9\u53F0\u8BBE\u5907\u4E0A\u8FD8\u7559\u7740\u4E00\u4EFD\u3002`,
      hint: "\u300C\u4E91\u7AEF\u8986\u76D6\u672C\u5730\u300D= \u8DDF\u7740\u4E91\u7AEF\uFF0C\u8FD9\u53F0\u7684\u8FD9\u4EFD\u4E5F\u79FB\u5230\u56DE\u6536\u7AD9\uFF08\u80FD\u6062\u590D\uFF09\uFF1B\u300C\u672C\u5730\u8986\u76D6\u4E91\u7AEF\u300D= \u628A\u8FD9\u53F0\u7684\u4F20\u56DE\u4E91\u7AEF\u3002"
    } : cloudState === "never" ? {
      title: "\u4E91\u7AEF\u6CA1\u6709\u8FD9\u4EFD",
      body: `\u300C${n}\u300D\u4ECE\u6CA1\u4F20\u5230\u4E91\u7AEF\u8FC7\u3002`,
      hint: "\u300C\u672C\u5730\u8986\u76D6\u4E91\u7AEF\u300D= \u7B2C\u4E00\u6B21\u4F20\u4E0A\u53BB\uFF1B\u300C\u4E91\u7AEF\u8986\u76D6\u672C\u5730\u300D= \u4E91\u7AEF\u6CA1\u6709\u8FD9\u4EFD\uFF0C\u8FD9\u53F0\u7684\u8FD9\u4EFD\u79FB\u5230\u56DE\u6536\u7AD9\uFF08\u80FD\u6062\u590D\uFF09\u3002"
    } : cloudState === "unchanged" ? {
      title: "\u4E91\u7AEF\u6CA1\u53D8\uFF0C\u8FD9\u53F0\u6709\u6CA1\u4F20\u4E0A\u53BB\u7684\u6539\u52A8",
      body: `\u300C${n}\u300D\u4E91\u7AEF\u8FD8\u662F\u4E0A\u6B21\u540C\u6B65\u7684\u90A3\u4E00\u7248\uFF0C\u8FD9\u53F0\u8BBE\u5907\u4E0A\u6709\u65B0\u6539\u52A8\u6CA1\u4F20\u3002`,
      hint: "\u300C\u4E91\u7AEF\u8986\u76D6\u672C\u5730\u300D= \u653E\u5F03\u8FD9\u53F0\u7684\u6539\u52A8\uFF0C\u6362\u56DE\u4E91\u7AEF\u90A3\u7248\uFF08\u8FD9\u53F0\u7684\u8FDB\u5907\u4EFD\u7BB1\uFF09\uFF1B\u300C\u672C\u5730\u8986\u76D6\u4E91\u7AEF\u300D= \u628A\u8FD9\u53F0\u7684\u4F20\u4E0A\u53BB\u3002"
    } : occasion === "push" ? {
      title: "\u4E91\u7AEF\u6709\u65B0\u7248\u672C",
      body: `\u300C${n}\u300D\u5728\u4E91\u7AEF\u548C\u8FD9\u53F0\u8BBE\u5907\u4E0A\u5404\u6709\u4E00\u7248\u65B0\u6539\u52A8\uFF08\u522B\u7684\u8BBE\u5907\u5B58\u8FC7\uFF0C\u6216\u8005\u8FD9\u53F0\u6CA1\u8BFB\u5230\u8FC7\u4E91\u7AEF\u90A3\u4EFD\uFF09\u3002`,
      hint: "\u300C\u4E91\u7AEF\u8986\u76D6\u672C\u5730\u300D= \u6362\u6210\u4E91\u7AEF\u90A3\u4EFD\uFF0C\u8FD9\u53F0\u7684\u8FD9\u4EFD\u8FDB\u5907\u4EFD\u7BB1\uFF1B\u300C\u672C\u5730\u8986\u76D6\u4E91\u7AEF\u300D= \u7528\u8FD9\u53F0\u7684\u76D6\u6389\u4E91\u7AEF\uFF0C\u4E91\u7AEF\u90A3\u4EFD\u8FDB\u5907\u4EFD\u7BB1\u3002\u88AB\u66FF\u6362\u7684\u7248\u672C\u4F1A\u81EA\u52A8\u7559\u5E95\uFF0C\u4E0D\u4F1A\u4E22\u5931\u3002"
    } : {
      title: "\u4E91\u7AEF\u6709\u65B0\u7248\u672C",
      body: `\u300C${n}\u300D\u4E91\u7AEF\u6709\u66F4\u65B0\u7684\u7248\u672C\uFF0C\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u662F\u65E7\u7684\u3002`,
      hint: "\u300C\u4E91\u7AEF\u8986\u76D6\u672C\u5730\u300D= \u6362\u6210\u4E91\u7AEF\u90A3\u4EFD\uFF0C\u8FD9\u53F0\u7684\u8FD9\u4EFD\u8FDB\u5907\u4EFD\u7BB1\uFF1B\u300C\u53D6\u6D88\u300D= \u5148\u6253\u5F00\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u3002\u88AB\u66FF\u6362\u7684\u7248\u672C\u4F1A\u81EA\u52A8\u7559\u5E95\uFF0C\u4E0D\u4F1A\u4E22\u5931\u3002"
    };
    const choice = await modal(() => sheet((done) => [
      h("h2", {}, text.title),
      h("p", {}, text.body),
      h("p", { class: "hint" }, text.hint),
      h(
        "div",
        { class: "row" },
        h("button", { onclick: () => done("cancel") }, "\u53D6\u6D88"),
        ...occasion === "push" ? [h("button", { onclick: () => done("keepMine") }, "\u672C\u5730\u8986\u76D6\u4E91\u7AEF")] : [],
        h("button", { class: "primary", onclick: () => done("takeCloud") }, "\u4E91\u7AEF\u8986\u76D6\u672C\u5730")
      )
    ], { dismissable: false }));
    logEvent("warn", `\u51B2\u7A81\uFF1A${stemOf(name)}\uFF08${occasion}\uFF09\u2192 ${{ keepMine: "\u672C\u5730\u8986\u76D6\u4E91\u7AEF", takeCloud: "\u4E91\u7AEF\u8986\u76D6\u672C\u5730", cancel: "\u53D6\u6D88" }[choice ?? "cancel"]}`);
    return choice ?? "cancel";
  },
  reportError: (err3, level = "error") => {
    if (err3?.message === "Not signed in") {
      console.info("[store]", err3);
      return;
    }
    if (level === "log") {
      console.info("[store]", err3);
      logEvent("info", `store\xB7log\uFF1A${errorText(err3).slice(0, 220)}`);
      return;
    }
    if (level === "info") {
      note(errorText(err3));
      return;
    }
    if (isNetworkError(err3)) {
      networkHiccup(String(err3?.message ?? err3));
      return;
    }
    logEvent(level === "warning" ? "warn" : "error", `store\uFF1A${errorText(err3)}`);
    banner(errorText(err3), level);
  },
  onReplayStatus: ({ phase, name, done, total }) => {
    if (phase === "collision") banner(`${name ? stemOf(name) : ""}\uFF1A\u4E91\u7AEF\u5DF2\u7ECF\u6709\u540C\u540D\u7684\u4E86\uFF0C\u79BB\u7EBF\u65F6\u5B58\u7684\u8FD9\u4EFD\u6CA1\u4F20\u4E0A\u53BB`, "warning");
    else if (phase === "done") note(`\u79BB\u7EBF\u65F6\u5B58\u7684\u4F20\u4E0A\u4E91\u4E86\uFF08${done} / ${total}\uFF09`);
    else if (phase === "pushed") note(`\u6B63\u5728\u628A\u79BB\u7EBF\u65F6\u5B58\u7684\u4F20\u4E0A\u4E91\u2026 ${done} / ${total}`);
  }
};

// src/app/mirror-urls.ts
function mirrorUrlFor(base, identifier, pantry) {
  if (!identifier.startsWith(`${pantry}/`)) return null;
  return `${base.replace(/\/+$/, "")}/${identifier.split("/").map(encodeURIComponent).join("/")}`;
}
var MAX_MIRRORS = 8;
function parseMirrorList(text) {
  const ok = [], rejected = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    let u;
    try {
      u = new URL(line);
    } catch {
      rejected.push({ line, why: "\u4E0D\u662F\u7F51\u5740" });
      continue;
    }
    if (u.protocol !== "https:") {
      rejected.push({ line, why: "\u53EA\u6536 https\uFF08Tailscale \u7528 tailscale serve \u7ED9\u8BC1\u4E66\uFF09" });
      continue;
    }
    if (u.search || u.hash) {
      rejected.push({ line, why: "\u4E0D\u8981\u5E26 ? \u6216 #" });
      continue;
    }
    const norm2 = `${u.origin}${u.pathname.replace(/\/+$/, "")}`;
    if (ok.includes(norm2)) continue;
    if (ok.length >= MAX_MIRRORS) {
      rejected.push({ line, why: `\u6700\u591A ${MAX_MIRRORS} \u6761` });
      continue;
    }
    ok.push(norm2);
  }
  return { ok, rejected };
}
function mirrorLabel(base) {
  try {
    return new URL(base).host;
  } catch {
    return base;
  }
}

// src/app/app-store.ts
var od = createOneDriveProvider({
  clientId: CLIENT_ID,
  scopes: SCOPES,
  authority: AUTHORITY,
  msalUrl: MSAL_URL,
  transport: { timeouts: DEFAULT_GRAPH_TIMEOUTS, chunkResume: true, verifyChunkedCommit: true }
});
var auth = od.auth;
var _keeper = null;
var passwordKeeper = () => _keeper ??= createPasswordKeeper({ dbName: `${APP_GUID}.remember` });
var localDiscFiles = null;
function setLocalDiscFiles(files) {
  localDiscFiles = files?.length ? new Map(files.map((f) => [f.name, f])) : null;
}
var localDiscFileCount = () => localDiscFiles?.size ?? 0;
function discMirrors() {
  const out = [];
  if (localDiscFiles) out.push(createFileMirror("\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u6587\u4EF6", (id) => id.startsWith(`${PANTRY}/`) ? localDiscFiles?.get(id.slice(PANTRY.length + 1)) ?? null : null));
  for (const base of mirrorUrls()) out.push(createHttpMirror(mirrorLabel(base), (id) => mirrorUrlFor(base, id, PANTRY), { timeoutMs: 6e4 }));
  return out;
}
var activeIdentifier = null;
function setActiveIdentifier(id) {
  activeIdentifier = id;
}
async function validateAdopt(plain) {
  if (plain.size < 64) return false;
  const dec = new TextDecoder();
  const block = async (off) => new Uint8Array(await plain.slice(off, off + 64).arrayBuffer());
  const head = await block(0);
  if (dec.decode(head.subarray(0, 4)) === "KRD2" && dec.decode(head.subarray(60, 64)) === "KRD2") return true;
  const tail = await block(plain.size - 64);
  return dec.decode(tail.subarray(0, 4)) === "KRD1" && dec.decode(tail.subarray(60, 64)) === "KRD1";
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
    pushRetry: { maxAttempts: 5, backoffMs: 1e3, exponential: true },
    // 0.17.2 显式开：熬得过 iOS 切网络那几秒（默认 4 × 200·n ms）
    validateAdopt,
    docKinds: DOC_KINDS,
    // store 2.1：每行带公民等级（盘三等 / 自动快照二等 / 其余一等），表和理由在 config.ts
    streaming: { lanes: STREAM_LANES, stallMs: STREAM_STALL_MS, mirrors: discMirrors },
    // store 2.0：读盘投机并行 + 卡住对冲 / 让道 + 镜像（默认关，大文件消费方显式开）
    autoCacheOpenedFile: true,
    // 快照 / 存档 open 后留本地；盘只走 openStream（不整份落本地）
    ...stagingCapBytes() ? { stagingCapBytes: stagingCapBytes() } : {},
    // 流式暂存区上限（设置里改；user「cache上限设置」）。改了要重新载入才生效
    offlineUploadReplay: "auto",
    signedIn: () => od.auth.isSignedIn(),
    activeIdentifier: () => activeIdentifier
  });
  return store;
}
async function disposeStore() {
  if (store) {
    await store.dispose();
    store = null;
  }
}

// src/app/identity.ts
async function sha16(text) {
  const d = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)));
  return Array.from(d.slice(0, 8), (b) => b.toString(16).padStart(2, "0")).join("");
}
async function discKey(stem) {
  return /^[0-9a-f]{16}$/.test(stem) ? stem : sha16(stem);
}
var gameKey = (fp) => sha16(`${fp.k}:${fp.id}:${fp.v ?? ""}`);
function fpCompatible(saved, now) {
  if (!saved) return true;
  if (saved.k !== now.k || saved.size !== now.size) return false;
  if (saved.id && now.id && (saved.id !== now.id || (saved.v ?? "") !== (now.v ?? ""))) return false;
  return true;
}

// src/app/jar-import.ts
async function prepare(items, password, io) {
  const { ids, complete } = await io.list();
  if (!complete) throw new Error("\u6CA1\u62FF\u5230\u4E91\u7AEF\u5B8C\u6574\u7684\u5B58\u6863\u5217\u8868\uFF08\u6CA1\u767B\u5F55 / \u79BB\u7EBF / \u7F51\u7EDC\u6162\uFF09\u3002\u5148\u4E0D\u88C5\uFF1A\u4E0D\u7136\u53EF\u80FD\u65B0\u5EFA\u51FA\u548C\u4E91\u7AEF\u91CD\u590D\u7684\u7F50\u3002");
  const existing = new Set(ids);
  const plan = await Promise.all(items.map(async (it) => ({ it, id: await io.idOf(it.dir) })));
  const probe = plan.find((p) => existing.has(p.id))?.id ?? ids[0];
  if (probe) {
    const sealed = await io.get(probe);
    if (sealed) await unsealBytes(password, sealed);
  }
  return { existing, plan };
}
async function compareWithCloud(it, id, password, io) {
  const sealed = await io.get(id);
  if (!sealed) throw new Error("\u4E91\u7AEF\u5217\u8868\u91CC\u6709\uFF0C\u4F46\u8BFB\u4E0D\u5230");
  const { plain, meta } = await unsealBytes(password, sealed);
  checkFormat("jam", meta);
  const cloud = unzipSync(plain);
  return sameEntries(it.entries, cloud) ? { same: true, cloudAt: meta.at, differ: [] } : { same: false, cloudAt: meta.at, differ: differingFiles(it.entries, cloud) };
}
async function planImport(items, password, io) {
  const { existing, plan } = await prepare(items, password, io);
  const out = [];
  for (const { it, id } of plan) {
    const mineAt = Math.max(0, ...Object.values(it.mtimes));
    try {
      if (!existing.has(id)) {
        out.push({ dir: it.dir, status: "new" });
        continue;
      }
      const c = await compareWithCloud(it, id, password, io);
      out.push(c.same ? { dir: it.dir, status: "same" } : { dir: it.dir, status: "differ", mineAt, cloudAt: c.cloudAt, differ: c.differ });
    } catch (e) {
      if (e instanceof WrongPasswordError) throw e;
      out.push({ dir: it.dir, status: "error", error: e instanceof Error ? e.message : String(e) });
    }
  }
  return out;
}
async function runImport(items, password, onEach, io, decisions = {}) {
  const { existing, plan } = await prepare(items, password, io);
  const out = [];
  for (const { it, id } of plan) {
    let r;
    try {
      const mineAt = Math.max(0, ...Object.values(it.mtimes));
      let overwrite = false, cloudAt;
      if (existing.has(id)) {
        const c = await compareWithCloud(it, id, password, io);
        if (c.same) {
          r = { dir: it.dir, status: "same" };
          out.push(r);
          onEach(out.length, r);
          continue;
        }
        if (decisions[it.dir] !== "overwrite") {
          r = { dir: it.dir, status: "differ", mineAt, cloudAt: c.cloudAt, differ: c.differ };
          out.push(r);
          onEach(out.length, r);
          continue;
        }
        await io.trash(id);
        overwrite = true;
        cloudAt = c.cloudAt;
      }
      {
        const zip = zipSync(Object.fromEntries(Object.entries(it.entries).map(([p, b]) => [p, [b, { mtime: new Date(it.mtimes[p] ?? mineAt) }]])), { level: 0 });
        await io.put(id, await sealBytes(password, zip, { salt: io.salt, meta: jamMeta({ k: io.k, m: "shared", u: it.dir }, mineAt) }), it.dir);
        const back = await io.get(id);
        if (!back) throw new Error("\u5199\u5B8C\u8BFB\u4E0D\u56DE\u6765");
        const { plain, meta } = await unsealBytes(password, back);
        if (meta.jar?.u !== it.dir || !sameEntries(it.entries, unzipSync(plain))) throw new Error("\u5199\u5B8C\u8BFB\u56DE\u6765\u548C\u6E90\u6587\u4EF6\u4E0D\u4E00\u6837");
        r = overwrite ? { dir: it.dir, status: "overwritten", mineAt, cloudAt } : { dir: it.dir, status: "new" };
      }
    } catch (e) {
      if (e instanceof WrongPasswordError) throw e;
      r = { dir: it.dir, status: "error", error: e instanceof Error ? e.message : String(e) };
    }
    out.push(r);
    onEach(out.length, r);
  }
  return out;
}
function exportSaveDirs(files, times, dirs) {
  const want = new Set(dirs);
  const entries = {};
  for (const [path, bytes] of files) {
    const dir = path.split("/")[0];
    if (!want.has(dir)) continue;
    entries[`SAVEDATA/${path}`] = [bytes, { mtime: new Date(times.get(dir) ?? Date.now()) }];
  }
  return zipSync(entries, { level: 0 });
}

// src/app/tin-format.ts
var TIN_HEAD = "tin.json";
var TIN_VERSION = FORMAT.tin.major;
var TIN_REFS_DIR = ".kudsrocket/references";
var TinTooNewError = class extends Error {
  fileVersion;
  constructor(fileVersion) {
    super(`tin version ${fileVersion} is newer than this app (${TIN_VERSION})`);
    this.name = "TinTooNewError";
    this.fileVersion = fileVersion;
  }
};
var NotATinError = class extends Error {
  constructor(why) {
    super(`not a tin: ${why}`);
    this.name = "NotATinError";
  }
};
var tinId = (key) => `${TINS}/${key}${TIN_SUFFIX}`;
var TIN_RE = new RegExp(`^${TINS}/([0-9a-f]{16})\\${TIN_SUFFIX}$`);
var parseTinId = (id) => TIN_RE.exec(id)?.[1] ?? null;
var isRefEntry = (path) => path.startsWith(`${TIN_REFS_DIR}/`);
var TEXTISH = /\.(json|txt|md|ini|csv)$/i;
function encodeTin(t) {
  const entries = {};
  entries[TIN_HEAD] = [new TextEncoder().encode(JSON.stringify({ ...t.head, ...stampFields("tin") })), { level: 6 }];
  for (const path of [...t.files.keys()].sort()) {
    if (path === TIN_HEAD) continue;
    entries[path] = [t.files.get(path), { level: TEXTISH.test(path) ? 6 : 0 }];
  }
  return zipSync(entries);
}
function decodeTin(zip) {
  let raw;
  try {
    raw = unzipSync(zip);
  } catch (e) {
    throw new NotATinError(`unzip failed (${e instanceof Error ? e.message : String(e)})`);
  }
  const headBytes = raw[TIN_HEAD];
  if (!headBytes) throw new NotATinError(`no ${TIN_HEAD}`);
  let head;
  try {
    head = JSON.parse(new TextDecoder().decode(headBytes));
  } catch {
    throw new NotATinError(`${TIN_HEAD} is not JSON`);
  }
  if (typeof head !== "object" || head === null || typeof head.v !== "number") throw new NotATinError(`${TIN_HEAD} has no version`);
  if (head.v > TIN_VERSION) throw new TinTooNewError(head.v);
  const verdict = compareStamp(readStamp("tin", head), FORMAT.tin);
  const files = /* @__PURE__ */ new Map();
  for (const [path, bytes] of Object.entries(raw)) if (path !== TIN_HEAD && !path.endsWith("/")) files.set(path, bytes);
  return { head, files, verdict };
}
function withRefs(files, refs) {
  const out = /* @__PURE__ */ new Map();
  for (const [p, b] of files) if (!isRefEntry(p)) out.set(p, b);
  for (const [p, b] of refs) out.set(p, b);
  return out;
}

// src/app/sync-class.ts
function syncClass(syncState2) {
  if (syncState2 === "synced" || syncState2 === "cloud-only" || syncState2 === "local-only") return "ok";
  if (syncState2 === "unpushed" || syncState2 === "float" || syncState2 === "pendingGone" || syncState2 === "newer-on-cloud") return "waiting";
  return "needs-you";
}

// src/app/saves.ts
var sessionSalt = crypto.getRandomValues(new Uint8Array(16));
var HISTORY_KEEP = 3;
var crumbId = (key, kind, n) => `${CRUMBS}/${key}-${kind}${n}${CRUMB_SUFFIX}`;
var CRUMB_RE = new RegExp(`^${CRUMBS}/([0-9a-f]{16})-([sah])([0-9]+)\\${CRUMB_SUFFIX}$`);
function parseCrumbId(id) {
  const m = CRUMB_RE.exec(id);
  return m ? { key: m[1], kind: m[2], n: Number(m[3]) } : null;
}
var isLocal = (syncState2) => syncState2 !== "cloud-only";
function watchSlots(key, cb) {
  return getStore().files.watchFolder(CRUMBS, (snap) => {
    const all = [];
    for (const it of snap.items) {
      const c = parseCrumbId(it.identifier);
      if (c) all.push({ id: it.identifier, ...c, savedAt: it.lastModified ?? Date.now(), local: isLocal(it.syncState) });
    }
    const mine = all.filter((c) => c.key === key);
    const manual = mine.filter((c) => c.kind === "s").sort((a, b) => a.n - b.n).map((c) => ({ id: c.id, kind: "s", n: c.n, savedAt: c.savedAt, local: c.local }));
    const autos = Array.from({ length: AUTO_SLOTS }, (_, i) => {
      const n = i + 1, id = crumbId(key, "a", n), hit = mine.find((c) => c.id === id);
      return { id, kind: "a", n, savedAt: hit?.savedAt ?? null, local: hit?.local ?? false };
    });
    cb([...manual, ...autos], all, snap.complete);
  });
}
var foldersEnsured = /* @__PURE__ */ new Map();
function ensureFolderOf(identifier) {
  const folder = identifier.replace(/\/[^/]*$/, "");
  let ensured = foldersEnsured.get(folder);
  if (!ensured) {
    ensured = getStore().files.ensureFolder(folder);
    foldersEnsured.set(folder, ensured);
    ensured.catch(() => foldersEnsured.delete(folder));
  }
  return ensured;
}
async function put(identifier, sealed, opts = {}) {
  const store2 = getStore();
  await ensureFolderOf(identifier);
  return track(labelFor(identifier), sealed.length, (onProgress) => store2.file(identifier, { mode: "existing" }).save(new Blob([sealed]), { onProgress, tryPush: !opts.deferPush }));
}
async function clearLocalCopies(folders) {
  const store2 = getStore();
  let dropped = 0, kept = 0, bytes = 0;
  for (const folder of folders) {
    const { items } = await listFolderOnce(folder, 8e3);
    for (const it of items) {
      if (it.syncState === "cloud-only") continue;
      if (it.syncState !== "synced") {
        kept++;
        continue;
      }
      try {
        await store2.file(it.identifier, { mode: "existing" }).offload();
        dropped++;
        bytes += it.size ?? 0;
      } catch {
        kept++;
      }
    }
  }
  return { dropped, kept, bytes };
}
async function get2(identifier) {
  const store2 = getStore();
  if (!await store2.files.occupied(identifier)) return null;
  const blob = await store2.file(identifier, { mode: "existing" }).open();
  return blob ? new Uint8Array(await blob.arrayBuffer()) : null;
}
async function ensureLineage(identifier) {
  const f = getStore().file(identifier, { mode: "existing" });
  if (navigator.onLine) {
    const r = await f.pullIfClean({ trustHints: false }).catch((e) => {
      console.warn("[lineage]", e);
      return null;
    });
    if (r && (r.status === "in-sync" || r.status === "fast-forwarded" || r.status === "cloud-absent")) return true;
    if (r && r.status === "dirty-skip") return false;
    if (r && (r.status === "cloud-error" || r.status === "ff-failed" || r.status === "escaped")) return false;
  }
  return await f.open().catch(() => null) != null;
}
var readSealed = (identifier) => get2(identifier);
var putSealed = (identifier, sealed) => put(identifier, sealed);
function saveTrace(identifier, bytes, opts = {}) {
  return put(identifier, bytes, opts);
}
async function saveRecipe(identifier, model, password, opts = {}) {
  if (recipeTooNew.has(identifier)) {
    console.warn("[recipe] not overwriting a recipe written by a newer app", identifier);
    return { pushed: false };
  }
  return put(identifier, await sealBytes(password, model, { salt: sessionSalt, compress: true, meta: recipeMeta(Date.now()) }), opts);
}
var recipeTooNew = /* @__PURE__ */ new Set();
async function readRecipe(identifier, password) {
  const sealed = await get2(identifier).catch(() => null);
  if (!sealed) return null;
  try {
    const { plain, meta } = await unsealBytes(password, sealed);
    checkFormat("recipe", meta);
    return plain;
  } catch (e) {
    if (e instanceof FormatTooNewError) {
      recipeTooNew.add(identifier);
      console.warn("[recipe]", e.message);
    }
    return null;
  }
}
async function readTin(identifier, password, waitForCloud) {
  const folder = identifier.replace(/\/[^/]*$/, "");
  const { items } = await listFolderOnce(folder, 8e3, waitForCloud);
  if (!items.some((it) => it.identifier === identifier) && !await getStore().files.occupied(identifier).catch(() => false)) return { state: "absent" };
  let sealed;
  try {
    const blob = await getStore().file(identifier, { mode: "existing" }).open();
    sealed = blob ? new Uint8Array(await blob.arrayBuffer()) : null;
  } catch (e) {
    return { state: "unreadable", why: e instanceof Error ? e.message : String(e), wrongPassword: false };
  }
  if (!sealed) return { state: "unreadable", why: "\u62FF\u4E0D\u5230\uFF08\u79BB\u7EBF\u4E14\u8FD9\u53F0\u8BBE\u5907\u6CA1\u6709\u526F\u672C\uFF1F\uFF09", wrongPassword: false };
  try {
    return { state: "read", zip: (await unsealBytes(password, sealed)).plain };
  } catch (e) {
    return { state: "unreadable", why: e instanceof WrongPasswordError ? "\u53E3\u4EE4\u4E0D\u662F\u8FD9\u4E2A" : e instanceof Error ? e.message : String(e), wrongPassword: e instanceof WrongPasswordError };
  }
}
async function saveTin(identifier, zip, password, opts = {}) {
  return put(identifier, await sealBytes(password, zip, { salt: sessionSalt, meta: { at: Date.now() } }), opts);
}
async function sealSnapshot(state2, meta, password) {
  const thumb = meta.thumb ? btoa(Array.from(meta.thumb, (b) => String.fromCharCode(b)).join("")) : void 0;
  return sealBytes(password, state2, { salt: sessionSalt, compress: true, meta: crumbMeta({ thumbB64: thumb, at: meta.at, auto: meta.auto, fp: meta.fp, title: meta.title, ws: meta.ws, wsz: meta.wsz }) });
}
async function saveSnapshot(identifier, state2, meta, password, opts = {}) {
  return put(identifier, await sealSnapshot(state2, meta, password), opts);
}
async function writeLocal(identifier, sealed) {
  await ensureFolderOf(identifier);
  await getStore().file(identifier, { mode: "existing" }).save(new Blob([sealed]), { tryPush: false });
}
async function loadSnapshot(identifier, password) {
  const sealed = await get2(identifier);
  if (!sealed) return null;
  const { plain, meta } = await unsealBytes(password, sealed);
  const { stamp: stamp2, verdict } = checkFormat("crumb", meta);
  return { state: plain, meta, stamp: stamp2, verdict };
}
async function peekMeta(identifier, password) {
  const f = getStore().file(identifier, { mode: "existing" });
  const head = await f.getHead({ bytesLength: HEAD_PEEK_BYTES, source: "local" }).catch(() => null);
  if (head) {
    const got = await openHead(new Uint8Array(await head.arrayBuffer()), password);
    if (got) return got.meta;
  }
  const stream = await f.openStream();
  if (!stream) return null;
  try {
    return (await openDisc({ size: stream.totalSize, read: (o, n) => stream.read(o, n) }, password)).meta;
  } finally {
    stream.close();
  }
}
async function renameJam(from, to) {
  return (await getStore().file(from, { mode: "existing" }).tryMove(to)).ok;
}
var peekSnapshot = peekMeta;
async function moveSnapshot(from, to) {
  const r = await getStore().file(from, { mode: "existing" }).tryMove(to);
  return r.ok;
}
async function deleteSnapshot(identifier) {
  const r = await getStore().file(identifier, { mode: "existing" }).trash();
  return r.status !== "cancelled" && r.status !== "noop";
}
async function tidyLocalSnapshots(slots, history = []) {
  const have = slots.filter((s) => s.kind === "s" && s.savedAt && s.local).sort((a, b) => b.savedAt - a.savedAt).slice(LOCAL_SNAPSHOTS_KEPT);
  for (const h2 of history) if (h2.local) have.push(h2);
  let n = 0;
  for (const s of have) {
    try {
      await getStore().file(s.id, { mode: "existing" }).offload();
      n++;
    } catch (e) {
      console.info("[tidy] kept", s.id, e);
    }
  }
  return n;
}
var jarFolder = (k) => k === PLATFORM_CODE.psp ? JARS : `${JARS}/${k}`;
var jamId = async (jar) => {
  const seed = jar.k === PLATFORM_CODE.psp && jar.m === "shared" ? `savedata:${jar.u}` : `${jar.k}/${jar.m}:${jar.u}`;
  return `${jarFolder(jar.k)}/${await sha16(seed)}${JAM_SUFFIX}`;
};
var describeJar = (jar) => jar.m === "shared" ? `\u5B58\u6863 ${jar.u}` : `\u5B58\u6863\uFF08\u8DDF\u6587\u4EF6 ${jar.u}\uFF09`;
function listFolderOnce(folder, timeoutMs = 1e4, waitForCloud = true) {
  return new Promise((resolve) => {
    let latest = { items: [], complete: false };
    let off = null;
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer2);
      queueMicrotask(() => off?.());
      resolve(latest);
    };
    const timer2 = setTimeout(finish, timeoutMs);
    off = getStore().files.watchFolder(folder, (snap) => {
      latest = { items: snap.items.map((it) => ({ identifier: it.identifier, syncState: it.syncState, size: it.size, lastModified: it.lastModified })), complete: snap.complete };
      if (snap.complete || !waitForCloud) finish();
    });
    if (settled) off();
  });
}
async function listJams(k, opts = {}) {
  const { items, complete } = await listFolderOnce(jarFolder(k), opts.timeoutMs ?? 1e4, opts.waitForCloud ?? true);
  return { ids: items.map((it) => it.identifier).filter((id) => id.endsWith(JAM_SUFFIX)), complete };
}
var SYNC_TEXT = {
  "synced": "\u5DF2\u540C\u6B65",
  "cloud-only": "\u53EA\u5728\u4E91\u7AEF",
  "unpushed": "\u6709\u6539\u52A8\u6CA1\u4F20\u4E0A\u53BB",
  "newer-on-cloud": "\u4E91\u7AEF\u6709\u65B0\u7248",
  "conflict": "\u548C\u4E91\u7AEF\u51B2\u7A81",
  "ghost": "\u4E91\u7AEF\u90A3\u4EFD\u6CA1\u4E86\uFF0C\u8FD9\u53F0\u6709\u6CA1\u4F20\u7684",
  "pendingGone": "\u4E91\u7AEF\u521A\u6CA1\u4E86",
  "float": "\u53EA\u5728\u8FD9\u53F0\u8BBE\u5907\uFF0C\u4ECE\u6CA1\u4F20\u8FC7",
  "local-only": "\u53EA\u5728\u8FD9\u53F0\u8BBE\u5907"
};
var needsAttention = (syncState2) => syncClass(syncState2) !== "ok";
var LOG_SLOT = "tmp/log.txt";
async function uploadLog(text) {
  const f = getStore().file(LOG_SLOT, { mode: "existing" });
  await f.open().catch(() => null);
  const r = await f.save(new Blob([text], { type: "text/plain" }), { tryPush: true });
  if (!r.pushed) throw new Error(`\u6CA1\u4F20\u4E0A\u53BB\uFF08${r.resolution ?? r.reason ?? "\u539F\u56E0\u4E0D\u660E"}\uFF09`);
}
async function dropStaleLocal(identifier) {
  await getStore().file(identifier, { mode: "existing" }).offload();
}
async function nudge(identifier, syncState2) {
  const f = getStore().file(identifier, { mode: "existing" });
  if (syncState2 === "newer-on-cloud") {
    await f.pullIfClean({ trustHints: false });
    return "\u5DF2\u6362\u6210\u4E91\u7AEF\u90A3\u4EFD";
  }
  const r = await f.resolve();
  switch (r.status) {
    case "took-cloud":
      return "\u4E91\u7AEF\u8986\u76D6\u4E86\u672C\u5730\uFF08\u8FD9\u53F0\u7684\u90A3\u4EFD\u8FDB\u4E86\u5907\u4EFD\u7BB1\uFF09";
    case "trashed":
      return "\u8DDF\u4E86\u4E91\u7AEF\uFF1A\u4E91\u7AEF\u90A3\u4EFD\u5DF2\u7ECF\u6CA1\u4E86\uFF0C\u8FD9\u53F0\u7684\u90A3\u4EFD\u79FB\u5230\u56DE\u6536\u7AD9\u4E86\uFF08\u80FD\u6062\u590D\uFF09";
    case "pushed":
      return "\u672C\u5730\u8986\u76D6\u4E86\u4E91\u7AEF\uFF08\u4F20\u4E0A\u53BB\u4E86\uFF09";
    case "cancelled":
      return "\u8FD9\u6B21\u6CA1\u52A8\uFF08\u53D6\u6D88\uFF09";
    case "clean":
      return "\u8FD9\u4EFD\u6CA1\u6709\u8981\u5904\u7406\u7684\u6539\u52A8";
    case "no-local":
      return "\u8FD9\u53F0\u8BBE\u5907\u4E0A\u6CA1\u6709\u5B83\u7684\u526F\u672C";
    case "offline":
      return "\u73B0\u5728\u79BB\u7EBF\uFF0C\u8FDE\u4E0D\u4E0A\u4E91\u7AEF";
    case "not-pushed":
      return `\u8FD8\u6CA1\u4F20\u4E0A\u53BB\uFF08${r.reason}\uFF09`;
    case "unresolved":
      if (r.reason === "cloud-reappeared") return "\u6CA1\u52A8\uFF1A\u4E91\u7AEF\u90A3\u4EFD\u53C8\u51FA\u73B0\u4E86\uFF08\u522B\u7684\u8BBE\u5907\u521A\u4F20\u56DE\u6216\u6062\u590D\uFF09\u3002\u518D\u6309\u4E00\u6B21\u300C\u5904\u7406\u2026\u300D\uFF0C\u6309\u4E91\u7AEF\u6709\u65B0\u7248\u90A3\u6761\u8DEF\u8D70";
      if (r.reason === "offline") return "\u6CA1\u52A8\uFF1A\u73B0\u5728\u8FDE\u4E0D\u4E0A\u4E91\u7AEF\uFF0C\u6CA1\u6CD5\u786E\u8BA4\u4E91\u7AEF\u90A3\u4EFD\u662F\u4E0D\u662F\u771F\u7684\u6CA1\u4E86";
      return `\u6CA1\u6362\u6210\u4E91\u7AEF\u90A3\u4EFD\uFF08${r.reason ?? "\u539F\u56E0\u4E0D\u660E"}\uFF09`;
  }
}
async function loadMemstick(k, password, ids, complete) {
  const got = /* @__PURE__ */ new Map();
  const unreadable = /* @__PURE__ */ new Set();
  let wrongPassword = 0;
  let next = 0;
  const worker = async () => {
    while (next < ids.length) {
      const id = ids[next++];
      try {
        const sealed = await get2(id);
        if (!sealed) {
          unreadable.add(id);
          continue;
        }
        const { plain, meta } = await unsealBytes(password, sealed);
        try {
          checkFormat("jam", meta);
        } catch (e) {
          if (e instanceof FormatTooNewError) {
            unreadable.add(id);
            console.warn("[memstick]", e.message);
            continue;
          }
          throw e;
        }
        const entries = unzipSync(plain);
        const dir = meta.jar?.u ?? Object.keys(entries)[0]?.split("/")[0];
        if (!dir) {
          unreadable.add(id);
          continue;
        }
        got.set(id, { dir, entries, at: meta.at });
      } catch (e) {
        if (e instanceof WrongPasswordError) wrongPassword++;
        else console.warn("[memstick]", id, e);
        unreadable.add(id);
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(6, ids.length) }, worker));
  if (wrongPassword && !got.size) throw new WrongPasswordError();
  const owners = /* @__PURE__ */ new Map();
  for (const [id, { dir }] of got) owners.set(dir, [...owners.get(dir) ?? [], id]);
  const duplicates = new Map([...owners].filter(([, v]) => v.length > 1));
  const files = /* @__PURE__ */ new Map(), dirs = /* @__PURE__ */ new Set(), loaded = /* @__PURE__ */ new Map(), times = /* @__PURE__ */ new Map();
  for (const [id, { dir, entries, at }] of got) {
    setLabel(id, describeJar({ k, m: "shared", u: dir }));
    if (duplicates.has(dir)) continue;
    loaded.set(id, dir);
    dirs.add(dir);
    if (at) times.set(dir, at);
    for (const [path, bytes] of Object.entries(entries)) files.set(path, bytes);
  }
  return { files, dirs, complete, loaded, unreadable, duplicates, times };
}
async function saveSaveDir(jar, files, password, opts = {}) {
  const id = await jamId(jar);
  setLabel(id, describeJar(jar));
  const zip = zipSync(Object.fromEntries(files), { level: 0 });
  return put(id, await sealBytes(password, zip, { salt: sessionSalt, meta: jamMeta(jar, Date.now()) }), opts);
}
async function deleteSaveDir(jar) {
  const id = await jamId(jar);
  const store2 = getStore();
  if (await store2.files.occupied(id)) await store2.file(id, { mode: "existing" }).trash();
}
async function deleteJam(identifier) {
  const r = await getStore().file(identifier, { mode: "existing" }).trash();
  return r.status !== "cancelled" && r.status !== "noop";
}
async function listBins(titleByKey) {
  const store2 = getStore();
  const [trash, backup] = await Promise.all([store2.files.listTrash(), store2.files.listBackup()]);
  const mk = (bin) => (t) => ({ bin, identifier: t.identifier, label: labelOfBinned(t.identifier, titleByKey), ts: t.ts, side: t.side, raw: { localKey: t.localKey, cloudRef: t.cloudRef, encrypted: t.encrypted } });
  return [...trash.map(mk("trash")), ...backup.map(mk("backup"))].sort((a, b) => (b.ts ?? "").localeCompare(a.ts ?? ""));
}
function labelOfBinned(identifier, titleByKey) {
  const c = parseCrumbId(identifier);
  if (c) {
    const game = titleByKey?.(c.key) ?? `\u76D8 ${c.key.slice(0, 6)}\u2026`;
    const slot = c.kind === "h" ? `\u5386\u53F2\uFF08\u5B58\u4E8E ${new Date(c.n).toLocaleString()}\uFF09` : `${c.kind === "s" ? "\u624B\u52A8" : "\u81EA\u52A8"} ${c.n}`;
    return `\u5FEB\u7167 ${slot} \xB7 ${game}`;
  }
  if (identifier.endsWith(JAM_SUFFIX)) return "\u5B58\u6863\uFF08\u4E00\u7F50\uFF09";
  const tin = parseTinId(identifier);
  if (tin) return `\u53C2\u8003\u7A97\uFF08\u653B\u7565 / \u7B14\u8BB0\uFF09\xB7 ${titleByKey?.(tin) ?? `\u76D8 ${tin.slice(0, 6)}\u2026`}`;
  return identifier.replace(/^.*\//, "");
}
async function restoreBin(item) {
  const r = await getStore().files.restoreTrash({
    trashKey: item.raw.localKey,
    cloudRef: item.raw.cloudRef,
    fromCloud: item.side !== "local",
    targetName: item.identifier,
    encrypted: item.raw.encrypted
  });
  return r.status;
}
function pspImportPorts() {
  const k = PLATFORM_CODE.psp;
  return {
    list: async () => {
      const r = await listJams(k, { timeoutMs: 2e4, waitForCloud: auth.isSignedIn() });
      return auth.isSignedIn() ? r : { ...r, complete: true };
    },
    // 没登录 = 本机就是全部（complete 只说云端那一帧；写本机，登录后传，撞上云端的由库弹面）
    idOf: (dir) => jamId({ k, m: "shared", u: dir }),
    get: get2,
    put: (id, sealed, dir) => {
      setLabel(id, describeJar({ k, m: "shared", u: dir }));
      return put(id, sealed);
    },
    trash: (id) => deleteJam(id),
    salt: sessionSalt,
    k
  };
}
function importSaveDirs(items, password, onEach, decisions = {}) {
  return runImport(items, password, onEach, pspImportPorts(), decisions);
}
function planSaveDirs(items, password) {
  return planImport(items, password, pspImportPorts());
}

// src/disc/sfo.ts
var SECTOR = 2048;
async function readDir(src, lba, size) {
  const buf = await src.read(lba * SECTOR, Math.min(size, 64 * SECTOR));
  const out = [];
  let i = 0;
  while (i < buf.length) {
    const len = buf[i];
    if (len === 0) {
      i = (Math.floor(i / SECTOR) + 1) * SECTOR;
      continue;
    }
    if (i + 33 > buf.length) break;
    const dv = new DataView(buf.buffer, buf.byteOffset + i, len);
    const nameLen = buf[i + 32];
    const name = new TextDecoder().decode(buf.subarray(i + 33, i + 33 + nameLen)).replace(/;1$/, "");
    out.push({ name, lba: dv.getUint32(2, true), size: dv.getUint32(10, true), isDir: (buf[i + 25] & 2) !== 0 });
    i += len;
  }
  return out;
}
function parseSfo(b) {
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  if (dv.getUint32(0, false) !== 5264198) return {};
  const keyTable = dv.getUint32(8, true), dataTable = dv.getUint32(12, true), count = dv.getUint32(16, true);
  const out = {};
  const dec = new TextDecoder();
  for (let n = 0; n < count && 20 + n * 16 + 16 <= b.length; n++) {
    const e = 20 + n * 16;
    const keyOff = dv.getUint16(e, true), fmt2 = dv.getUint16(e + 2, true), len = dv.getUint32(e + 4, true), dataOff = dv.getUint32(e + 12, true);
    const k0 = keyTable + keyOff;
    const key = dec.decode(b.subarray(k0, b.indexOf(0, k0)));
    if (fmt2 === 516 || fmt2 === 4) out[key] = dec.decode(b.subarray(dataTable + dataOff, dataTable + dataOff + len)).replace(/\0+$/, "");
  }
  return out;
}
async function readDiscLabel(src) {
  try {
    if (src.size < 17 * SECTOR) return null;
    const pvd = await src.read(16 * SECTOR, SECTOR);
    if (pvd[0] !== 1 || new TextDecoder().decode(pvd.subarray(1, 6)) !== "CD001") return null;
    const root = new DataView(pvd.buffer, pvd.byteOffset + 156, 34);
    const top = await readDir(src, root.getUint32(2, true), root.getUint32(10, true));
    const game = top.find((e) => e.isDir && e.name === "PSP_GAME");
    if (!game) return null;
    const sfo = (await readDir(src, game.lba, game.size)).find((e) => !e.isDir && e.name === "PARAM.SFO");
    if (!sfo || sfo.size > 64 * 1024) return null;
    const kv = parseSfo(await src.read(sfo.lba * SECTOR, sfo.size));
    if (!kv.DISC_ID) return null;
    return { id: kv.DISC_ID, version: kv.DISC_VERSION, title: kv.TITLE };
  } catch {
    return null;
  }
}

// src/disc/gba-header.ts
var ascii = (b) => Array.from(b, (x) => x >= 32 && x < 127 ? String.fromCharCode(x) : "").join("").trim();
function parseGbaHeader(head) {
  if (head.length < 192 || head[178] !== 150) return null;
  const code = ascii(head.subarray(172, 176));
  if (code.length !== 4) return null;
  return { title: ascii(head.subarray(160, 172)), code, maker: ascii(head.subarray(176, 178)), version: head[188] };
}
async function readGbaHeader(src) {
  if (src.size < 192) return null;
  return parseGbaHeader(await src.read(0, 192));
}

// src/app/cores.ts
var CORES = {
  ppsspp: { id: "ppsspp", platform: PLATFORM_CODE.psp, exts: [".iso", ".cso", ".pbp"], media: "random", saves: "shared" },
  mgba: { id: "mgba", platform: PLATFORM_CODE.gba, exts: [".gba", ".gb", ".gbc"], media: "whole", saves: "file" }
};
function coreForExt(ext) {
  const e = ext.toLowerCase();
  return Object.values(CORES).find((c) => c.exts.includes(e)) ?? CORES.ppsspp;
}
var coreDirOf = (id) => define_CORE_DIRS_default[id];

// node_modules/@internal/prefetch/dist/model.js
var MAX_CONTEXTS = 6e3;
var SUCC_PER_CONTEXT = 8;
var MAX_LABELS = 512;
var BLOCKS_PER_LABEL = 256;
var emptyCalib = () => ({ sequential: [0, 0], ranges: [0, 0], label: [0, 0], successor: [0, 0] });
function emptyModel(blockBytes, size) {
  return { blockBytes, size, sessions: 0, succ: /* @__PURE__ */ new Map(), labels: /* @__PURE__ */ new Map(), calib: emptyCalib(), streams: [] };
}
function addSucc(m, ctx, next) {
  let row = m.succ.get(ctx);
  if (!row)
    m.succ.set(ctx, row = /* @__PURE__ */ new Map());
  row.set(next, (row.get(next) ?? 0) + 1);
}
function labelFired(m, label) {
  let s = m.labels.get(label);
  if (!s)
    m.labels.set(label, s = { fired: 0, blocks: /* @__PURE__ */ new Map() });
  s.fired++;
}
function learnLabel(m, label, block, delayMs) {
  let s = m.labels.get(label);
  if (!s)
    m.labels.set(label, s = { fired: 0, blocks: /* @__PURE__ */ new Map() });
  const c = s.blocks.get(block);
  if (c) {
    c[0]++;
    c[1] += delayMs;
  } else
    s.blocks.set(block, [1, delayMs]);
}
function mergeModel(into, other) {
  if (other.blockBytes !== into.blockBytes || other.size !== into.size)
    return into;
  into.sessions += other.sessions;
  for (const [ctx, row] of other.succ)
    for (const [n, c] of row) {
      let r = into.succ.get(ctx);
      if (!r)
        into.succ.set(ctx, r = /* @__PURE__ */ new Map());
      r.set(n, (r.get(n) ?? 0) + c);
    }
  for (const [label, s] of other.labels) {
    let t = into.labels.get(label);
    if (!t)
      into.labels.set(label, t = { fired: 0, blocks: /* @__PURE__ */ new Map() });
    t.fired += s.fired;
    for (const [b, [c, d]] of s.blocks) {
      const x = t.blocks.get(b);
      if (x) {
        x[0] += c;
        x[1] += d;
      } else
        t.blocks.set(b, [c, d]);
    }
  }
  for (const e of Object.keys(into.calib)) {
    into.calib[e][0] += other.calib[e][0];
    into.calib[e][1] += other.calib[e][1];
  }
  return into;
}
var cloneModel = (m) => mergeModel(emptyModel(m.blockBytes, m.size), m);
function encodeModel(m) {
  const rowTotal = (row) => {
    let s = 0;
    for (const c of row.values())
      s += c;
    return s;
  };
  const succ = [...m.succ].sort((a, b) => rowTotal(b[1]) - rowTotal(a[1])).slice(0, MAX_CONTEXTS).map(([ctx, row]) => [ctx, [...row].sort((a, b) => b[1] - a[1]).slice(0, SUCC_PER_CONTEXT).flat()]);
  const labels2 = [...m.labels].sort((a, b) => b[1].fired - a[1].fired).slice(0, MAX_LABELS).map(([label, s]) => [
    label,
    s.fired,
    [...s.blocks].sort((a, b) => b[1][0] - a[1][0]).slice(0, BLOCKS_PER_LABEL).flatMap(([b, [c, d]]) => [b, c, Math.round(d)])
  ]);
  const wire = { v: 1, bb: m.blockBytes, size: m.size, sessions: m.sessions, succ, labels: labels2, calib: m.calib, streams: m.streams.map(([b, r, g]) => [b, r, Math.round(g)]) };
  return new TextEncoder().encode(JSON.stringify(wire));
}
function decodeModel(bytes, blockBytes, size) {
  let w;
  try {
    w = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return null;
  }
  if (!w || w.v !== 1 || w.bb !== blockBytes || w.size !== size)
    return null;
  const m = emptyModel(blockBytes, size);
  m.sessions = w.sessions | 0;
  for (const [ctx, flat] of w.succ ?? []) {
    const row = /* @__PURE__ */ new Map();
    for (let i = 0; i + 1 < flat.length; i += 2)
      row.set(flat[i], flat[i + 1]);
    m.succ.set(ctx, row);
  }
  for (const [label, fired, flat] of w.labels ?? []) {
    const blocks = /* @__PURE__ */ new Map();
    for (let i = 0; i + 2 < flat.length; i += 3)
      blocks.set(flat[i], [flat[i + 1], flat[i + 2]]);
    m.labels.set(label, { fired, blocks });
  }
  for (const e of Object.keys(m.calib)) {
    const c = w.calib?.[e];
    if (Array.isArray(c) && c.length === 2)
      m.calib[e] = [c[0] | 0, c[1] | 0];
  }
  for (const x of w.streams ?? [])
    if (Array.isArray(x) && x.length === 3)
      m.streams.push([x[0], x[1], x[2]]);
  return m;
}

// node_modules/@internal/prefetch/dist/planner.js
var PRIOR = { sequential: [2, 1], ranges: [4, 1], label: [1, 1], successor: [1, 1] };
var START_LABEL = "@start";
var DEFAULT_FETCH_P90 = 1500;
var MAX_STREAMS = 16;
function admitThreshold(n) {
  if (!n)
    return 0.2;
  if (n.saveData)
    return Infinity;
  if (n.metered === true)
    return 0.6;
  if (n.metered === "unknown")
    return 0.35;
  return 0.2;
}
var Planner = class {
  size;
  blockBytes;
  blockCount;
  /** 预测用：这台设备的 + 别的设备的 + 这一局的。 */
  model;
  /** 只记这一局学到的；结账时加到 own 上存回去（别的设备的次数不会被重复记进自己那份）。 */
  delta;
  own;
  enabled;
  localCap;
  /** 认为已在本机的块 → 最近一次碰它的时刻（Map 的插入顺序 = 最近使用顺序）。 */
  local = /* @__PURE__ */ new Map();
  hist = [];
  /** 顺序流表：每条流 = 最后一块、连着往后读了几块、两块之间的典型间隔、最近一次碰的时刻。 */
  streams = [];
  gapMs = 3e3;
  lastDistinctAt = -1;
  explicit = [];
  windows = [];
  pending = /* @__PURE__ */ new Map();
  samples = [];
  /** 自上次取走后发生的「用上 / 浪费」（外壳取走写 trace 和统计）。 */
  outcomes = [];
  constructor(o) {
    this.size = o.size;
    this.blockBytes = o.blockBytes;
    this.blockCount = Math.ceil(o.size / o.blockBytes);
    this.own = o.own ?? emptyModel(o.blockBytes, o.size);
    this.model = cloneModel(this.own);
    for (const m of o.others ?? [])
      mergeModel(this.model, m);
    this.delta = emptyModel(o.blockBytes, o.size);
    this.streams = this.own.streams.slice(0, MAX_STREAMS).map(([last, run, gapMs]) => ({ last, run, gapMs, at: 0 }));
    this.enabled = new Set(o.experts ?? Object.keys(PRIOR));
    this.localCap = Math.max(1, Math.floor(o.cacheBytes / o.blockBytes));
  }
  blockOf(offset) {
    return Math.floor(offset / this.blockBytes);
  }
  rangeOf(block) {
    const offset = block * this.blockBytes;
    return { offset, length: Math.min(this.blockBytes, this.size - offset) };
  }
  // ── 观察 ──
  observeRead(t, offset, length) {
    const b0 = this.blockOf(offset), b1 = this.blockOf(offset + Math.max(length, 1) - 1);
    for (let b = b0; b <= b1 && b < this.blockCount; b++)
      this.touch(t, b);
  }
  touch(t, b) {
    const p = this.pending.get(b);
    if (p) {
      this.pending.delete(b);
      this.credit(p.expert, true);
      this.outcomes.push({ block: b, used: true, expert: p.expert });
    }
    for (const w of this.windows)
      if (t <= w.until && !w.seen.has(b)) {
        w.seen.add(b);
        for (const m of [this.model, this.delta])
          learnLabel(m, w.label, b, t - w.start);
      }
    const last = this.hist.at(-1);
    if (b !== last) {
      if (last !== void 0) {
        const prev = this.hist.at(-2);
        for (const m of [this.model, this.delta]) {
          addSucc(m, String(last), b);
          if (prev !== void 0)
            addSucc(m, `${prev},${last}`, b);
        }
        if (this.lastDistinctAt >= 0) {
          const g = Math.min(6e4, Math.max(50, t - this.lastDistinctAt));
          this.gapMs = this.gapMs * 0.8 + g * 0.2;
        }
      }
      this.hist.push(b);
      if (this.hist.length > 3)
        this.hist.shift();
      this.lastDistinctAt = t;
    }
    this.followStream(t, b);
    this.markLocal(t, b);
  }
  /** b 接上某条流（= 那条流的下一块）就延长它；是同一块就只更新时刻；否则开一条新流（挤掉最久没动的）。 */
  followStream(t, b) {
    const same = this.streams.find((s2) => s2.last === b);
    if (same) {
      same.at = t;
      return;
    }
    const s = this.streams.find((x) => x.last + 1 === b);
    if (s) {
      s.gapMs = s.gapMs * 0.7 + Math.min(6e4, Math.max(50, t - s.at)) * 0.3;
      s.last = b;
      s.run++;
      s.at = t;
      return;
    }
    this.streams.push({ last: b, run: 0, gapMs: this.gapMs, at: t });
    if (this.streams.length > MAX_STREAMS)
      this.streams.sort((x, y) => y.at - x.at).length = MAX_STREAMS;
  }
  observeHint(t, h2) {
    const conf = Math.min(1, Math.max(0, h2.confidence ?? 0.8));
    const within2 = Math.max(0, h2.withinMs ?? 3e4);
    let i = 0;
    for (const r of h2.ranges ?? []) {
      if (!(r.length > 0))
        continue;
      const b0 = this.blockOf(r.offset), b1 = this.blockOf(r.offset + r.length - 1);
      for (let b = b0; b <= b1 && b < this.blockCount; b++)
        this.explicit.push({ block: b, p: conf, until: t + within2, due: t + i++ });
    }
    if (h2.label) {
      for (const m of [this.model, this.delta])
        labelFired(m, h2.label);
      this.windows.push({ label: h2.label, start: t, until: t + within2, conf, seen: /* @__PURE__ */ new Set() });
    }
  }
  // ── 预取的来回 ──
  /** dueMs = 预测的「大约什么时候要」：过了它再宽限一阵还没被读到才算浪费（远期的猜测不该被 30 s 的期限冤枉）。 */
  issued(t, block, expert, score, dueMs = t) {
    const grace = Math.max(3e4, 4 * this.fetchP90Ms());
    this.pending.set(block, { expert, until: Math.max(t, dueMs) + grace, score });
    for (const m of [this.model, this.delta])
      m.calib[expert][0]++;
  }
  /** 预取完成（这块已在本机）。ms = 花了多久；命中本机的不要喂进实测。 */
  prefetched(t, block, networkMs) {
    this.markLocal(t, block);
    if (networkMs !== void 0)
      this.sample(networkMs);
  }
  /** 预取失败：撤回，不算浪费。 */
  prefetchFailed(block) {
    const p = this.pending.get(block);
    if (!p)
      return;
    this.pending.delete(block);
    for (const m of [this.model, this.delta])
      m.calib[p.expert][0] = Math.max(0, m.calib[p.expert][0] - 1);
  }
  /** 实测：拉一块（走了网络的）花了多久。 */
  sample(ms) {
    this.samples.push(ms);
    if (this.samples.length > 32)
      this.samples.shift();
  }
  quantile(q) {
    if (!this.samples.length)
      return null;
    const s = [...this.samples].sort((a, b) => a - b);
    return s[Math.min(s.length - 1, Math.floor(q * s.length))];
  }
  fetchMs() {
    return this.quantile(0.5);
  }
  fetchP90Ms() {
    return this.quantile(0.9) ?? DEFAULT_FETCH_P90;
  }
  /** 比这慢的读 = 没命中、在等网络。 */
  slowReadMs() {
    const m = this.fetchMs();
    return m === null ? 40 : Math.max(20, Math.min(200, m / 4));
  }
  isLocal(block) {
    return this.local.has(block);
  }
  /** 在途 / 已拉来还没被读到的投机里分最低的那个（名额满时，更有把握的候选可以挤掉它）。 */
  lowestPending() {
    let low = null;
    for (const [block, p] of this.pending)
      if (!low || p.score < low.score)
        low = { block, score: p.score };
    return low;
  }
  /** 放弃一个投机：记浪费，名额让出来。 */
  abandon(block) {
    const p = this.pending.get(block);
    if (!p)
      return;
    this.pending.delete(block);
    this.credit(p.expert, false);
    this.outcomes.push({ block, used: false, expert: p.expert });
  }
  pendingCount() {
    return this.pending.size;
  }
  // ── 预测 ──
  /** 到期的：投机没被用上的记浪费；过期的提示和窗口收掉。 */
  tick(t) {
    for (const [b, p] of this.pending)
      if (p.until < t) {
        this.pending.delete(b);
        this.credit(p.expert, false);
        this.outcomes.push({ block: b, used: false, expert: p.expert });
      }
    this.explicit = this.explicit.filter((x) => x.until >= t && !this.local.has(x.block));
    this.windows = this.windows.filter((w) => w.until >= t);
  }
  candidates(t, limit = 8) {
    this.tick(t);
    const acc = /* @__PURE__ */ new Map();
    const add = (b, p, e, due) => {
      if (!this.enabled.has(e) || !(p > 0) || b < 0 || b >= this.blockCount || this.local.has(b) || this.pending.has(b))
        return;
      const rp = this.reliability(e) * Math.min(1, p);
      let a = acc.get(b);
      if (!a)
        acc.set(b, a = { keep: 1, best: 0, expert: e, due });
      a.keep *= 1 - rp;
      if (rp > a.best) {
        a.best = rp;
        a.expert = e;
      }
      if (due < a.due)
        a.due = due;
    };
    const last = this.hist.at(-1);
    for (const s of this.streams) {
      const p0 = s.run / (s.run + 1);
      const depth = Math.min(8, Math.max(1, Math.ceil(this.fetchP90Ms() / Math.max(1, s.gapMs)) + 1));
      let p = 1;
      for (let k = 1; k <= depth; k++) {
        p *= p0;
        add(s.last + k, p, "sequential", s.at + k * s.gapMs);
      }
    }
    for (const x of this.explicit)
      add(x.block, x.p, "ranges", x.due);
    for (const w of this.windows) {
      const s = this.model.labels.get(w.label);
      if (!s || s.fired < 2)
        continue;
      for (const [b, [c, d]] of s.blocks)
        add(b, c / (s.fired - 1) * w.conf, "label", w.start + d / c);
    }
    if (last !== void 0) {
      for (const [n1, p1] of this.successors(this.hist, 3)) {
        add(n1, p1, "successor", t + this.gapMs);
        for (const [n2, p2] of this.successors([...this.hist.slice(-1), n1], 2))
          add(n2, p1 * p2, "successor", t + 2 * this.gapMs);
      }
    }
    return [...acc].map(([block, a]) => ({ block, score: 1 - a.keep, expert: a.expert, dueMs: a.due })).sort((x, y) => y.score - x.score || x.dueMs - y.dueMs).slice(0, limit);
  }
  /** 后继分布：先用两块的上下文，见过不到 2 次就退回一块的；次数做收缩（c / (总数 + 1)），见得少就没把握。 */
  successors(h2, k) {
    const a = h2.at(-1);
    if (a === void 0)
      return [];
    const two = h2.length >= 2 ? this.model.succ.get(`${h2.at(-2)},${a}`) : void 0;
    const total = (r) => {
      let s = 0;
      for (const c of r?.values() ?? [])
        s += c;
      return s;
    };
    const row = two && total(two) >= 2 ? two : this.model.succ.get(String(a));
    if (!row)
      return [];
    const n = total(row);
    return [...row].sort((x, y) => y[1] - x[1]).slice(0, k).map(([b, c]) => [b, c / (n + 1)]);
  }
  reliability(e) {
    const [issued, used] = this.model.calib[e];
    const [a, b] = PRIOR[e];
    return (used + a) / (issued + a + b);
  }
  credit(e, used) {
    if (used)
      for (const m of [this.model, this.delta])
        m.calib[e][1]++;
  }
  markLocal(t, b) {
    this.local.delete(b);
    this.local.set(b, t);
    if (this.local.size > this.localCap)
      this.local.delete(this.local.keys().next().value);
  }
  // ── 给宿主 ──
  /** 最近 withinMs 内碰过的块，最近的优先，最多 limit 块，合并成连续的字节范围。 */
  workingSet(t, withinMs = 12e4, limit = 64) {
    const blocks = [...this.local].filter(([, at]) => at >= t - withinMs).sort((a, b) => b[1] - a[1]).slice(0, limit).map(([b]) => b).sort((a, b) => a - b);
    const out = [];
    for (const b of blocks) {
      const r = this.rangeOf(b), prev = out.at(-1);
      if (prev && prev.offset + prev.length === r.offset)
        prev.length += r.length;
      else
        out.push(r);
    }
    return out;
  }
  /** 结账：在途的投机全记浪费，返回「这台设备的 + 这一局的」= 该存回去的那份。 */
  finish() {
    for (const [b, p] of this.pending) {
      this.credit(p.expert, false);
      this.outcomes.push({ block: b, used: false, expert: p.expert });
    }
    this.pending.clear();
    this.windows = [];
    this.explicit = [];
    const out = mergeModel(cloneModel(this.own), this.delta);
    out.sessions++;
    out.streams = [...this.streams].sort((a, b) => b.at - a.at).filter((x) => x.run >= 1).slice(0, MAX_STREAMS).map((x) => [x.last, x.run, x.gapMs]);
    return out;
  }
};
var Gate = class {
  issuedAt = [];
  perMinute;
  maxOutstanding;
  constructor(perMinute, maxOutstanding) {
    this.perMinute = perMinute;
    this.maxOutstanding = maxOutstanding;
  }
  rateOk(t) {
    this.issuedAt = this.issuedAt.filter((x) => x > t - 6e4);
    return this.issuedAt.length < this.perMinute;
  }
  /** 这个候选能不能发：名额有空就发；满了就看能不能挤掉最低的（能就先挤掉）。 */
  admit(planner, score) {
    if (planner.pendingCount() < this.maxOutstanding)
      return true;
    const low = planner.lowestPending();
    if (!low || score < low.score + 0.1)
      return false;
    planner.abandon(low.block);
    return true;
  }
  note(t) {
    this.issuedAt.push(t);
  }
  refund(t) {
    const i = this.issuedAt.lastIndexOf(t);
    if (i >= 0)
      this.issuedAt.splice(i, 1);
  }
};
function makeGate(blockBytes, cacheBytes, perMinute = 30) {
  return new Gate(perMinute, Math.max(1, Math.floor(cacheBytes / 4 / blockBytes)));
}

// node_modules/@internal/prefetch/dist/prefetch.js
var DEFAULT_BLOCK_BYTES = 2 * 1024 * 1024;
var START_WINDOW_MS = 6e4;
async function createPrefetch(o) {
  const { source, budget } = o;
  const blockBytes = o.blockBytes ?? DEFAULT_BLOCK_BYTES;
  const clock = o.clock ?? { now: () => globalThis.performance?.now() ?? Date.now() };
  const report = o.report ?? ((e, where) => console.warn(`[prefetch] ${where}:`, e));
  const emit = (e) => {
    try {
      o.trace?.(e);
    } catch (err3) {
      report(err3, "trace callback");
    }
  };
  let own;
  const others = [];
  if (o.memory) {
    try {
      const bytes = await o.memory.load();
      own = bytes && decodeModel(bytes, blockBytes, source.size) || void 0;
    } catch (e) {
      report(e, "load model");
    }
    try {
      for (const bytes of await o.memory.others?.() ?? []) {
        const m = decodeModel(bytes, blockBytes, source.size);
        if (m)
          others.push(m);
      }
    } catch (e) {
      report(e, "load other devices' models");
    }
  }
  const planner = new Planner({ size: source.size, blockBytes, cacheBytes: budget.cacheBytes, own, others });
  const gate = makeGate(blockBytes, budget.cacheBytes, budget.speculativePerMinute);
  const concurrency = Math.max(1, budget.concurrency ?? 1);
  const stats = {
    reads: 0,
    stallMs: 0,
    slowReads: 0,
    prefetches: 0,
    used: 0,
    wasted: 0,
    fetchMs: null,
    fetchP90Ms: null,
    experts: { sequential: { issued: 0, used: 0 }, ranges: { issued: 0, used: 0 }, label: { issued: 0, used: 0 }, successor: { issued: 0, used: 0 } }
  };
  let inflight = 0;
  let closed = false;
  const drainOutcomes = () => {
    const t = clock.now();
    for (const x of planner.outcomes.splice(0)) {
      if (x.used) {
        stats.used++;
        stats.experts[x.expert].used++;
      } else
        stats.wasted++;
      emit({ t, kind: "outcome", block: x.block, used: x.used, expert: x.expert });
    }
  };
  const pump = () => {
    if (closed || !source.prefetch)
      return;
    while (inflight < concurrency) {
      const t = clock.now();
      const threshold = admitThreshold(budget.network?.());
      if (!Number.isFinite(threshold) || !gate.rateOk(t))
        break;
      const c = planner.candidates(t, 4).find((x) => x.score >= threshold);
      if (!c || !gate.admit(planner, c.score)) {
        drainOutcomes();
        break;
      }
      drainOutcomes();
      issue(t, c.block, c.score, c.expert, c.dueMs);
    }
  };
  const issue = (t, block, score, expert, dueMs) => {
    inflight++;
    gate.note(t);
    planner.issued(t, block, expert, score, dueMs);
    stats.experts[expert].issued++;
    const r = planner.rangeOf(block);
    source.prefetch(r.offset, r.length).then(() => {
      const now = clock.now(), ms = now - t;
      const local2 = ms < planner.slowReadMs();
      if (local2)
        gate.refund(t);
      else
        stats.prefetches++;
      planner.prefetched(now, block, local2 ? void 0 : ms);
      emit({ t: now, kind: "prefetch", block, score, expert, ms, ok: true, local: local2 });
    }, (e) => {
      const now = clock.now();
      planner.prefetchFailed(block);
      emit({ t: now, kind: "prefetch", block, score, expert, ms: now - t, ok: false, local: false });
      report(e, `prefetch block ${block}`);
    }).finally(() => {
      inflight--;
      pump();
    });
  };
  const prefetcher = {
    async read(offset, length) {
      const t0 = clock.now();
      planner.observeRead(t0, offset, length);
      drainOutcomes();
      const pending2 = source.read(offset, length);
      pump();
      const bytes = await pending2;
      const waitMs = clock.now() - t0;
      stats.reads++;
      if (waitMs > planner.slowReadMs()) {
        stats.slowReads++;
        stats.stallMs += waitMs;
        if (planner.blockOf(offset) === planner.blockOf(offset + Math.max(length, 1) - 1))
          planner.sample(waitMs);
      }
      emit({ t: t0, kind: "read", offset, length, waitMs });
      return bytes;
    },
    hint(h2) {
      const t = clock.now();
      planner.observeHint(t, h2);
      emit({ t, kind: "hint", label: h2.label, ranges: h2.ranges?.length ?? 0, confidence: h2.confidence ?? 0.8, withinMs: h2.withinMs ?? 3e4 });
      pump();
    },
    workingSet(withinMs) {
      return planner.workingSet(clock.now(), withinMs);
    },
    stats() {
      stats.fetchMs = planner.fetchMs();
      stats.fetchP90Ms = stats.fetchMs === null ? null : planner.fetchP90Ms();
      return structuredClone(stats);
    },
    async close() {
      if (closed)
        return;
      closed = true;
      const merged = planner.finish();
      drainOutcomes();
      if (o.memory) {
        try {
          await o.memory.save(encodeModel(merged));
        } catch (e) {
          report(e, "save model");
        }
      }
    }
  };
  planner.observeHint(clock.now(), { label: START_LABEL, confidence: 0.9, withinMs: START_WINDOW_MS });
  pump();
  return prefetcher;
}

// src/app/disc-prefetch.ts
function networkState() {
  const c = navigator.connection;
  return { metered: c?.type === "cellular" ? true : c?.type ? false : "unknown", saveData: !!c?.saveData };
}
function createDiscPrefetcher(stream, o) {
  let missed = 0;
  return createPrefetch({
    source: { size: stream.totalSize, read: (off, n) => stream.read(off, n), prefetch: (off, n) => stream.prefetch(off, n) },
    budget: { cacheBytes: o.cacheBytes, concurrency: o.lanes, network: networkState },
    ...o.memory ? { memory: o.memory } : {},
    ...o.trace ? { trace: o.trace } : {},
    report: (e, where) => {
      if (where.startsWith("prefetch block")) {
        if (++missed <= 3 || missed % 50 === 0) console.info(`[prefetch] ${where} \u6CA1\u62C9\u5230\uFF08\u7B2C ${missed} \u6B21\uFF09`, e);
        return;
      }
      o.log("warn", `\u9884\u53D6\uFF1A${where}\uFF1A${e instanceof Error ? e.message : String(e)}`);
    }
  });
}
function discOpenHinter(pf) {
  const last = /* @__PURE__ */ new Map();
  return (path) => {
    const now = performance.now();
    if (now - (last.get(path) ?? -1e9) < 2e3) return;
    last.set(path, now);
    if (last.size > 512) last.clear();
    pf.hint({ label: `f:${fnv1a(path)}`, confidence: 0.8, withinMs: 1e4 });
  };
}
function fnv1a(s) {
  let h2 = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h2 ^= s.charCodeAt(i);
    h2 = Math.imul(h2, 16777619);
  }
  return (h2 >>> 0).toString(16).padStart(8, "0");
}
function prefetchSummary(s) {
  const ms = (v) => v == null ? "?" : `${Math.round(v)}`;
  const ex = Object.entries(s.experts).filter(([, v]) => v.issued).map(([k, v]) => `${k} ${v.used}/${v.issued}`).join(" \xB7 ");
  return `\u9884\u53D6\uFF1A\u8BFB ${s.reads} \u6B21\uFF0C\u6162\u8BFB ${s.slowReads} \u6B21\u5171\u5361 ${(s.stallMs / 1e3).toFixed(1)} s\uFF1B\u6295\u673A\u8D70\u7F51\u7EDC ${s.prefetches} \u7247\uFF0C\u7528\u4E0A ${s.used}\u3001\u767D\u62C9 ${s.wasted}\uFF1B\u62C9\u4E00\u5757 \u4E2D\u4F4D ${ms(s.fetchMs)} ms / p90 ${ms(s.fetchP90Ms)} ms${ex ? `\uFF1B\u4E13\u5BB6 ${ex}` : ""}`;
}

// src/app/recipe-names.ts
var MAX_OTHER_RECIPES = 8;
var recipeBase = (discIdentifier) => sha16(`recipe:${discIdentifier}`);
var recipeId = (base, device) => `${RECIPES}/${base}-${device}${RECIPE_SUFFIX}`;
function otherRecipes(ids, base, mine) {
  return ids.filter((id) => id !== mine && id.startsWith(`${RECIPES}/${base}-`) && id.endsWith(RECIPE_SUFFIX)).slice(0, MAX_OTHER_RECIPES);
}

// src/app/recipes.ts
var OWN_WAIT_MS = 2500;
var OTHERS_WAIT_MS = 3e3;
var within = (p, ms, fallback) => Promise.race([p.catch(() => fallback), new Promise((r) => setTimeout(() => r(fallback), ms))]);
function recipeMemory(discIdentifier, password, hidden, log2) {
  const names = recipeBase(discIdentifier).then((base) => ({ base, mine: recipeId(base, deviceId()) }));
  const own = within(names.then(({ mine }) => readRecipe(mine, password)), OWN_WAIT_MS, null);
  const others = within(names.then(async ({ base, mine }) => {
    const { items } = await listFolderOnce(RECIPES, OTHERS_WAIT_MS, true);
    const out = [];
    for (const id of otherRecipes(items.map((it) => it.identifier), base, mine)) {
      const m = await readRecipe(id, password);
      if (m) out.push(m);
    }
    return out;
  }), OTHERS_WAIT_MS, []);
  void Promise.all([own, others]).then(([o, x]) => log2(`\u8BFB\u76D8\u83DC\u8C31\uFF1A\u8FD9\u53F0\u8BBE\u5907\u7684${o ? `\u6709\uFF08${(o.length / 1024).toFixed(0)} KB\uFF09` : "\u6CA1\u6709"}\uFF0C\u522B\u7684\u8BBE\u5907 ${x.length} \u4EFD`));
  return {
    load: () => own,
    others: () => others,
    save: async (model) => {
      const { mine } = await names;
      await saveRecipe(mine, model, password, { deferPush: hidden() });
    }
  };
}

// src/app/read-trace.ts
var EXPERTS = ["sequential", "ranges", "label", "successor"];
var MAX_ROWS = 2e5;
function createReadTrace(clock = () => performance.now()) {
  const t0 = clock();
  const startedAt = Date.now();
  const rows = [];
  let dropped = 0;
  const push = (row) => {
    if (rows.length < MAX_ROWS) rows.push(row);
    else dropped++;
  };
  const at = (t) => Math.round(t - t0);
  return {
    onEvent(e) {
      if (e.kind === "read") push([at(e.t), "r", e.offset, e.length, Math.round(e.waitMs)]);
      else if (e.kind === "prefetch") push([at(e.t), "p", e.block, EXPERTS.indexOf(e.expert), Math.round(e.ms), e.ok ? 1 : 0, e.local ? 1 : 0]);
      else if (e.kind === "outcome") push([at(e.t), "o", e.block, e.used ? 1 : 0, EXPERTS.indexOf(e.expert)]);
    },
    wrap(pf) {
      return {
        read: (o, n) => pf.read(o, n),
        hint: (h2) => {
          push([at(clock()), "h", h2.label ?? null, h2.ranges ? h2.ranges.flatMap((r) => [r.offset, r.length]) : null, h2.confidence ?? 0.8, h2.withinMs ?? 3e4]);
          pf.hint(h2);
        },
        workingSet: (w) => pf.workingSet(w),
        stats: () => pf.stats(),
        close: () => pf.close()
      };
    },
    rows: () => rows.length,
    async dump(head) {
      const json = new TextEncoder().encode(JSON.stringify({ v: 1, startedAt, ...head, experts: EXPERTS, dropped, rows }));
      if (typeof CompressionStream !== "function") return { bytes: json, gzip: false };
      const gz = new Uint8Array(await new Response(new Blob([json]).stream().pipeThrough(new CompressionStream("gzip"))).arrayBuffer());
      return { bytes: gz, gzip: true };
    }
  };
}

// src/app/read-retry.ts
function permanentReadError(e) {
  const x = e;
  return x?.name === "EtagChangedError" || x?.status === 404 || x?.status === 410;
}
var retryDelayMs = (attempt) => Math.min(5e3, 500 * 2 ** Math.min(attempt - 1, 4));
async function readWithRetry(read, o, n, hooks) {
  for (let attempt = 1; ; attempt++) {
    try {
      const bytes = await read(o, n);
      if (attempt > 1) hooks.onWait(null);
      return bytes;
    } catch (e) {
      if (permanentReadError(e)) {
        hooks.onWait(null);
        throw e;
      }
      const why = hooks.reason();
      hooks.onWait(`\u8BFB\u76D8\u5728\u7B49${why.startsWith("\u767B\u5F55") ? "\u767B\u5F55" : "\u7F51"}\uFF08\u7B2C ${attempt} \u6B21\u91CD\u8BD5${why ? `\uFF0C${why}` : ""}\uFF09`);
      await hooks.wait(attempt);
    }
  }
}

// src/app/discs.ts
var traceOn = false;
var enableReadTrace = () => {
  traceOn = true;
};
var sessionPassword = null;
var getPassword = () => sessionPassword;
var setPassword = (p) => {
  sessionPassword = p;
};
var stemOf2 = (name) => name.replace(/^.*\//, "").replace(/\.[^.]*$/, "");
var extOf = (name) => (name.match(/\.[A-Za-z0-9]+$/)?.[0] ?? ".iso").toLowerCase();
var DiscUnavailableError = class extends Error {
  constructor(identifier) {
    super(`disc unavailable right now: ${identifier}`);
    this.name = "DiscUnavailableError";
  }
};
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
async function unwrap(src, name, password, fallbackKey) {
  let media = src, original = name, opened = null;
  if (await isEncrypted(src)) {
    const pw = password ?? sessionPassword;
    if (!pw) throw new NeedPassword();
    opened = await openDisc(src, pw);
    sessionPassword = pw;
    original = opened.meta.name ?? "game.iso";
    media = opened;
  }
  const fp = await fingerprintFor(media, opened?.meta.fp, extOf(original));
  const keyFromGame = !!fp.id;
  const key = keyFromGame ? await gameKey(fp) : fallbackKey ?? await discKey(stemOf2(name));
  if (!keyFromGame) console.warn("[disc] disc id unreadable; key =", fallbackKey ? "cached card" : "file name");
  return { media, ext: extOf(original), title: stemOf2(original), fp, key, keyFromGame };
}
async function fingerprintFor(media, fromMeta, ext) {
  if (fromMeta?.k && fromMeta.size === media.size) return fromMeta;
  const core2 = coreForExt(ext);
  if (core2.id === "mgba") {
    const h2 = await readGbaHeader(media);
    return { k: core2.platform, size: media.size, ...h2 ? { id: h2.code + h2.maker, v: String(h2.version) } : {} };
  }
  const label = await readDiscLabel(media);
  return { k: PLATFORM_CODE.psp, size: media.size, ...label?.id ? { id: label.id } : {}, ...label?.version ? { v: label.version } : {} };
}
async function fromLocalFile(file, password) {
  const src = { size: file.size, read: async (o, n) => new Uint8Array(await file.slice(o, o + n).arrayBuffer()) };
  return { ...await unwrap(src, file.name, password), identifier: null };
}
var retryHooks = {
  onWait: (text) => setReadWait(text),
  reason: () => !navigator.onLine ? "\u73B0\u5728\u79BB\u7EBF" : !auth.isSignedIn() ? "\u767B\u5F55\u8FC7\u671F\u4E86\uFF1A\u9000\u51FA\u5230\u9996\u9875\u91CD\u65B0\u767B\u5F55\uFF0C\u518D\u70B9\u300C\u7EE7\u7EED\u300D\uFF08\u56DE\u5230\u6700\u8FD1\u4E00\u4EFD\u5FEB\u7167\uFF09\uFF1B\u4EE5\u540E\u5148\u300C\u7F13\u5B58\u5168\u76D8\u300D\u5C31\u4E0D\u6015\u8FD9\u4E2A" : "",
  wait: (attempt) => new Promise((resolve) => {
    const done = () => {
      clearTimeout(t);
      removeEventListener("online", done);
      document.removeEventListener("visibilitychange", onVis);
      resolve();
    };
    const onVis = () => {
      if (document.visibilityState === "visible") done();
    };
    const t = setTimeout(done, navigator.onLine ? retryDelayMs(attempt) : 3e4);
    addEventListener("online", done);
    document.addEventListener("visibilitychange", onVis);
  })
};
async function fromPantry(identifier, password, fallbackKey) {
  const pw = password ?? sessionPassword;
  const memory = pw ? recipeMemory(identifier, pw, () => document.visibilityState === "hidden", (t) => logEvent("info", t)) : void 0;
  const stream = await getStore().file(identifier, { mode: "existing" }).openStream();
  if (!stream) throw new Error("\u8FD9\u5F20\u76D8\u73B0\u5728\u62FF\u4E0D\u5230\uFF08\u6CA1\u767B\u5F55\u3001\u79BB\u7EBF\uFF0C\u6216\u8005\u4E91\u7AEF\u5DF2\u7ECF\u6CA1\u6709\u4E86\uFF09");
  const trace = traceOn ? createReadTrace() : void 0;
  const raw = await createDiscPrefetcher(stream, { cacheBytes: stagingCapBytes() || 256 * 2 ** 20, lanes: STREAM_LANES, log: logEvent, memory, ...trace ? { trace: (e) => trace.onEvent(e) } : {} });
  const prefetcher = trace ? trace.wrap(raw) : raw;
  const src = { size: stream.totalSize, read: (o, n) => readWithRetry((a, b) => prefetcher.read(a, b), o, n, retryHooks) };
  return { ...await unwrap(src, identifier, password, fallbackKey), identifier, net: () => stream.status(), prefetcher, rawSize: stream.totalSize, ...trace ? { trace } : {} };
}
async function inspectPantry(identifier) {
  const encrypted = identifier.endsWith(".wafter");
  if (encrypted && !sessionPassword) return null;
  const f = getStore().file(identifier, { mode: "existing" });
  const card = async (name, fp) => ({ title: stemOf2(name), fp, key: fp.id ? await gameKey(fp) : await discKey(stemOf2(identifier)) });
  try {
    if (encrypted) {
      const head = await f.getHead({ bytesLength: HEAD_PEEK_BYTES, source: "local" }).catch(() => null);
      if (head) {
        const got = await openHead(new Uint8Array(await head.arrayBuffer()), sessionPassword);
        if (got?.meta.fp?.k) return card(got.meta.name ?? identifier, got.meta.fp);
      }
    }
    const stream = await f.openStream();
    if (!stream) throw new DiscUnavailableError(identifier);
    try {
      const src = { size: stream.totalSize, read: (o, n) => stream.read(o, n) };
      let media = src, name = identifier, metaFp;
      if (encrypted) {
        const opened = await openDisc(src, sessionPassword);
        media = opened;
        name = opened.meta.name ?? identifier;
        metaFp = opened.meta.fp;
      }
      return card(name, await fingerprintFor(media, metaFp, extOf(name)));
    } finally {
      stream.close();
    }
  } catch (e) {
    if (e instanceof WrongPasswordError) return null;
    throw e;
  }
}

// src/app/save-import.ts
var GBA_SAVE_KINDS = { 512: "EEPROM 4 Kb", 8192: "EEPROM 64 Kb", 32768: "SRAM 32 KB", 65536: "Flash 64 KB", 131072: "Flash 128 KB" };
var isGbaSaveSize = (n) => n in GBA_SAVE_KINDS;
async function detectSaves(files) {
  if (!files.length) return { kind: "none", why: "\u4EC0\u4E48\u90FD\u6CA1\u9009\u5230\u3002" };
  let dirs = [];
  try {
    dirs = groupSaveDirs(files);
  } catch (e) {
    return { kind: "none", why: e instanceof Error ? e.message : String(e) };
  }
  if (dirs.length) return { kind: "psp", dirs };
  if (files.length === 1) {
    const f = files[0];
    const bytes = await f.read();
    const name = f.path.split("/").pop() ?? f.path;
    if (isGbaSaveSize(bytes.length)) return { kind: "gba", name, bytes, saveKind: GBA_SAVE_KINDS[bytes.length] };
    return { kind: "none", why: `\u300C${name}\u300D${bytes.length} \u5B57\u8282\uFF1A\u4E0D\u662F GBA \u7535\u6C60\u5B58\u6863\u7684\u5927\u5C0F\uFF08512 / 8 K / 32 K / 64 K / 128 K\uFF09\uFF0C\u4E5F\u4E0D\u662F PSP \u5B58\u6863\u76EE\u5F55\u3002\u6A21\u62DF\u5668\u7684\u5FEB\u7167\uFF08.sgm / .ss0 / .state\uFF09\u4E0D\u662F\u7535\u6C60\u5B58\u6863\uFF0C\u8FDB\u4E0D\u6765\u3002` };
  }
  return { kind: "none", why: `${files.length} \u4E2A\u6587\u4EF6\u91CC\u6CA1\u6709 PSP \u5B58\u6863\u76EE\u5F55\uFF08\u6BCF\u4E2A\u76EE\u5F55\u91CC\u90FD\u6709\u4E00\u4E2A PARAM.SFO\uFF09\uFF0C\u4E5F\u4E0D\u662F\u5355\u4E2A GBA \u7535\u6C60\u5B58\u6863\u3002` };
}
var cartJar = (k, key) => ({ k, m: "file", u: key });
var norm = (s) => s.toLowerCase().replace(/\.[a-z0-9]+$/, "").replace(/[^a-z0-9一-鿿]+/g, "");
function matchCartByName(fileName2, carts) {
  const f = norm(fileName2);
  if (f.length < 3) return null;
  const hits = carts.filter((c) => {
    const t = norm(c.title);
    return t.length >= 3 && (t.includes(f) || f.includes(t));
  });
  return hits.length === 1 ? hits[0] : null;
}

// src/app/save-import-ui.ts
var fmtWhen = (t) => t ? new Date(t).toLocaleString() : "\u4E0D\u77E5\u9053";
function pickFiles(opts) {
  return new Promise((resolve) => {
    const input = h("input", { type: "file", hidden: "", ...opts.accept ? { accept: opts.accept } : {} });
    if (opts.folder) {
      input.setAttribute("webkitdirectory", "");
      input.multiple = true;
    }
    input.addEventListener("change", () => {
      resolve(input.files?.length ? [...input.files] : null);
      input.remove();
    });
    input.addEventListener("cancel", () => {
      resolve(null);
      input.remove();
    });
    document.body.append(input);
    input.click();
  });
}
function chooseGames(title, hint, groups, verb, opts = {}) {
  const want = new Set(opts.preselect ? groups.map((g) => g.game) : []);
  return sheet((done) => {
    const rows = h("div", { class: "menu-list" });
    const go = h("button", { class: "primary", onclick: () => done(new Set(want)) });
    const draw = () => {
      rows.replaceChildren(...groups.map((g) => h(
        "button",
        { class: `menu-item${want.has(g.game) ? " on" : ""}`, onclick: () => {
          if (want.has(g.game)) want.delete(g.game);
          else want.add(g.game);
          draw();
        } },
        h("span", {}, `${want.has(g.game) ? "\u2713 " : ""}${g.title || g.game}`),
        h("span", { class: "muted" }, `${g.game} \xB7 ${g.dirs.length} \u4E2A\u5B58\u6863\u76EE\u5F55 \xB7 \u6700\u8FD1 ${fmtWhen(g.newest)}`)
      )));
      const n = groups.filter((g) => want.has(g.game)).reduce((s, g) => s + g.dirs.length, 0);
      go.textContent = n ? `${verb}\uFF08${n} \u4E2A\u5B58\u6863\u76EE\u5F55\uFF09` : verb;
      go.disabled = !n;
    };
    draw();
    return [h("h2", {}, title), h("p", { class: "muted" }, hint), rows, h("div", { class: "row" }, h("button", { onclick: () => done(null) }, "\u53D6\u6D88"), go)];
  });
}
function countSheet(title, total) {
  const bar = h("progress", { max: String(total), value: "0" });
  const text = h("span", { class: "muted" }, "");
  let finish = () => {
  };
  void sheet((done) => {
    finish = done;
    return [h("h2", {}, title), bar, text];
  }, { dismissable: false });
  return { set(done, line) {
    bar.value = done;
    text.textContent = `${done} / ${total} \xB7 ${line}`;
  }, close: () => finish(null) };
}
async function pickSource() {
  const how = await sheet((done) => [
    h("h2", {}, "\u5BFC\u5165\u5B58\u6863\uFF1A\u4ECE\u54EA\u91CC\u6765"),
    h("p", { class: "muted" }, "PSP\uFF1A\u9009 PPSSPP \u8BB0\u5FC6\u68D2\u7684 SAVEDATA \u6587\u4EF6\u5939\uFF08\u9009\u4E0A\u4E00\u5C42\u7684 PSP \u4E5F\u884C\uFF09\u6216\u5B83\u7684 zip\u3002GBA\uFF1A\u9009\u522B\u7684\u6A21\u62DF\u5668\u7684\u7535\u6C60\u5B58\u6863\u6587\u4EF6\uFF08.sav / .srm\uFF0C\u4E5F\u53EF\u4EE5\u662F\u88C5\u7740\u5B83\u7684 zip\uFF09\u3002\u8BA4\u51FA\u6765\u662F\u4EC0\u4E48\u4F1A\u5148\u7ED9\u4F60\u770B\uFF0C\u518D\u95EE\u8986\u76D6\u4E0D\u8986\u76D6\u3002\u6587\u4EF6\u5939\u8981\u7528\u7535\u8111\u4E0A\u7684 Chrome / Edge\uFF1B\u6587\u4EF6\u54EA\u53F0\u8BBE\u5907\u90FD\u80FD\u9009\u3002"),
    h("div", { class: "row" }, h("button", { onclick: () => done(null) }, "\u53D6\u6D88"), h("button", { onclick: () => done("file") }, "\u9009\u6587\u4EF6\u2026"), h("button", { class: "primary", onclick: () => done("folder") }, "\u9009\u6587\u4EF6\u5939\u2026"))
  ]);
  if (!how) return null;
  if (how === "folder") {
    const files = await pickFiles({ folder: true });
    return files && files.map((f2) => ({ path: f2.webkitRelativePath || f2.name, mtime: f2.lastModified, read: async () => new Uint8Array(await f2.arrayBuffer()) }));
  }
  const [f] = await pickFiles({ folder: false, accept: ".zip,.sav,.srm,.sa1,.fla,.eep,.bin,application/zip" }) ?? [];
  if (!f) return null;
  const bytes = new Uint8Array(await f.arrayBuffer());
  if (bytes.length >= 4 && bytes[0] === 80 && bytes[1] === 75 && bytes[2] === 3 && bytes[3] === 4) {
    const entries = unzipSync(bytes);
    return Object.entries(entries).filter(([p]) => !p.endsWith("/")).map(([path, b]) => ({ path, mtime: f.lastModified, read: async () => b }));
  }
  return [{ path: f.name, mtime: f.lastModified, read: async () => bytes }];
}
function reviewSheet(title, intro, rows) {
  const dec = {};
  for (const r of rows) if (r.status === "differ") dec[r.id] = "skip";
  const differ = rows.filter((r) => r.status === "differ");
  return sheet((done) => {
    const list = h("div", { class: "menu-list" });
    const go = h("button", { class: "primary", onclick: () => done({ ...dec }) });
    const draw = () => {
      list.replaceChildren(...rows.map((r) => {
        const over = r.status === "differ" && dec[r.id] === "overwrite";
        const what = r.status === "new" ? "\u65B0\u5EFA" : r.status === "same" ? "\u4E00\u6837\uFF0C\u8DF3\u8FC7" : r.status === "error" ? "\u51FA\u9519\uFF0C\u4E0D\u52A8" : over ? "\u8986\u76D6\uFF08\u65E7\u7684\u8FDB\u56DE\u6536\u7AD9\uFF09" : "\u4E0D\u4E00\u6837\uFF0C\u8DF3\u8FC7\uFF08\u70B9\u4E00\u4E0B\u6539\u6210\u8986\u76D6\uFF09";
        const body = [h("span", {}, `${over ? "\u2713 " : ""}${r.label}`), h("span", { class: "muted" }, `${what}${r.detail ? ` \xB7 ${r.detail}` : ""}`)];
        return r.status === "differ" ? h("button", { class: `menu-item${over ? " on" : ""}`, onclick: () => {
          dec[r.id] = over ? "skip" : "overwrite";
          draw();
        } }, ...body) : h("div", { class: "menu-item" }, ...body);
      }));
      const n = rows.filter((r) => r.status === "new" || r.status === "differ" && dec[r.id] === "overwrite").length;
      go.textContent = n ? `\u7EE7\u7EED\uFF08\u5199 ${n} \u4EFD\uFF09` : "\u6CA1\u6709\u8981\u5199\u7684";
      go.disabled = !n;
    };
    draw();
    return [
      h("h2", {}, title),
      ...intro.map((t) => h("p", { class: "muted" }, t)),
      ...differ.length ? [h(
        "div",
        { class: "row" },
        h("button", { onclick: () => {
          for (const r of differ) dec[r.id] = "overwrite";
          draw();
        } }, `\u4E0D\u4E00\u6837\u7684\u5168\u90E8\u8986\u76D6\uFF08${differ.length}\uFF09`),
        h("button", { onclick: () => {
          for (const r of differ) dec[r.id] = "skip";
          draw();
        } }, "\u5168\u90E8\u8DF3\u8FC7")
      )] : [],
      list,
      h("div", { class: "row" }, h("button", { onclick: () => done(null) }, "\u53D6\u6D88"), go)
    ];
  });
}
async function confirmOverwrite(labels2) {
  if (!labels2.length) return true;
  return confirmSheet(`\u8986\u76D6 ${labels2.length} \u4EFD\uFF1F`, `${labels2.join("\n")}

\u65E7\u7684\u5148\u8FDB\u56DE\u6536\u7AD9\uFF08\u5B58\u6863\u7BA1\u7406 \u2192 \u56DE\u6536\u7AD9\u91CC\u80FD\u627E\u56DE\uFF09\uFF0C\u518D\u5199\u5BFC\u5165\u7684\u8FD9\u4EFD\u3002\u4E0D\u66FF\u4F60\u731C\u54EA\u8FB9\u65B0\uFF1A\u8FD9\u662F\u4F60\u5B9A\u7684\u3002`, "\u8986\u76D6\uFF0C\u65E7\u7684\u8FDB\u56DE\u6536\u7AD9");
}
var rowOf = (r, label) => r.status === "new" ? { id: r.dir, label, detail: "", status: "new" } : r.status === "same" ? { id: r.dir, label, detail: "", status: "same" } : r.status === "differ" ? { id: r.dir, label, detail: `\u8FD9\u8FB9 ${fmtWhen(r.mineAt)} \xB7 \u4E91\u7AEF ${fmtWhen(r.cloudAt)} \xB7 \u4E0D\u540C\uFF1A${r.differ.join("\u3001")}`, status: "differ" } : r.status === "error" ? { id: r.dir, label, detail: r.error, status: "error" } : { id: r.dir, label, detail: "", status: "same" };
async function importPsp(ctx, det) {
  const dirs = det.dirs;
  const titled = await Promise.all(dirs.map(async (d) => {
    const p = d.files.get(`${d.dir}/PARAM.SFO`);
    return { ...d, title: p ? sfoInfo(await p.read()).title : void 0 };
  }));
  const chosen = await chooseGames("\u5BFC\u5165\u5B58\u6863\uFF1A\u8BA4\u51FA\u662F PSP \u8BB0\u5FC6\u68D2\u5B58\u6863", `${dirs.length} \u4E2A\u5B58\u6863\u76EE\u5F55\u3002\u9009\u8981\u5BFC\u7684\u6E38\u620F\uFF1B\u4E0B\u4E00\u6B65\u770B\u4E91\u7AEF\u6709\u6CA1\u6709\u3001\u4E00\u6837\u4E0D\u4E00\u6837\uFF0C\u518D\u5B9A\u8986\u76D6\u3002`, groupByGame(titled.map((d) => ({ dir: d.dir, game: d.game, newest: d.newest, title: d.title }))), "\u4E0B\u4E00\u6B65", { preselect: true });
  if (!chosen?.size) return;
  const picked = titled.filter((d) => chosen.has(d.game));
  const items = await Promise.all(picked.map(async (d) => {
    const entries = {}, mtimes = {};
    for (const [k, f] of d.files) {
      entries[k] = await f.read();
      mtimes[k] = f.mtime;
    }
    return { dir: d.dir, entries, mtimes };
  }));
  const labelOf = new Map(picked.map((d) => [d.dir, d.title ? `${d.title}\uFF08${d.dir}\uFF09` : d.dir]));
  const planned = await ctx.withPassword(async (pw) => {
    const p = pw ?? ctx.getPassword();
    if (!p) throw new NeedPassword();
    return planSaveDirs(items, p);
  }, "\u5B58\u6863");
  if (!planned) return;
  const rows = planned.map((r) => rowOf(r, labelOf.get(r.dir) ?? r.dir));
  const decisions = await reviewSheet("\u5BFC\u5165\u5B58\u6863\uFF1A\u4F1A\u600E\u6837", ["\u4E91\u7AEF\u6CA1\u6709\u7684\u65B0\u5EFA\uFF1B\u4E00\u6837\u7684\u8DF3\u8FC7\uFF1B\u4E0D\u4E00\u6837\u7684\u9ED8\u8BA4\u8DF3\u8FC7\u2014\u2014\u70B9\u4E00\u4E0B\u6539\u6210\u8986\u76D6\uFF0C\u6216\u8005\u7528\u4E0A\u9762\u7684\u4E00\u9524\u5B50\u3002"], rows);
  if (!decisions) return;
  const overwriting = rows.filter((r) => r.status === "differ" && decisions[r.id] === "overwrite").map((r) => r.label);
  if (!await confirmOverwrite(overwriting)) return;
  ctx.log("info", `\u5BFC\u5165\u5B58\u6863\uFF08PSP\uFF09\uFF1A\u5F00\u59CB\uFF08${items.length} \u4E2A\u76EE\u5F55\uFF0C\u8986\u76D6 ${overwriting.length}\uFF09`);
  let ui = null;
  const results = await ctx.withPassword(async (pw) => {
    const p = pw ?? ctx.getPassword();
    if (!p) throw new NeedPassword();
    ui = countSheet("\u6B63\u5728\u5199\u2026", items.length);
    try {
      return await importSaveDirs(items, p, (done, r) => ui.set(done, `${labelOf.get(r.dir) ?? r.dir}\uFF1A${{ new: "\u65B0\u5EFA", same: "\u4E00\u6837\uFF0C\u8DF3\u8FC7", differ: "\u4E0D\u4E00\u6837\uFF0C\u6CA1\u52A8", overwritten: "\u8986\u76D6\u4E86", error: "\u51FA\u9519" }[r.status]}`), decisions);
    } finally {
      ui.close();
      ui = null;
    }
  }, "\u5B58\u6863");
  if (!results) return;
  const by = (s) => results.filter((r) => r.status === s);
  for (const r of results) ctx.log(r.status === "error" ? "warn" : "info", `\u5BFC\u5165\u5B58\u6863\uFF08PSP\uFF09\uFF1A${r.dir} \u2192 ${r.status}${r.status === "error" ? `\uFF08${r.error}\uFF09` : ""}`);
  void sheet((close) => [
    h("h2", {}, "\u5BFC\u5165\u5B58\u6863\uFF1A\u7ED3\u679C"),
    h("p", {}, `\u65B0\u5EFA ${by("new").length} \xB7 \u8986\u76D6 ${by("overwritten").length} \xB7 \u4E00\u6837\u8DF3\u8FC7 ${by("same").length} \xB7 \u4E0D\u4E00\u6837\u6CA1\u52A8 ${by("differ").length}${by("error").length ? ` \xB7 \u51FA\u9519 ${by("error").length}` : ""}`),
    ...by("overwritten").length ? [h("p", { class: "hint" }, "\u88AB\u8986\u76D6\u7684\u65E7\u7F50\u5728\u56DE\u6536\u7AD9\uFF08\u5B58\u6863\u7BA1\u7406 \u2192 \u56DE\u6536\u7AD9 / \u5907\u4EFD\u7BB1\uFF09\u3002")] : [],
    ...by("error").length ? [h("div", { class: "menu-list" }, ...results.filter((r) => r.status === "error").map((r) => h("div", { class: "menu-item" }, h("span", {}, labelOf.get(r.dir) ?? r.dir), h("span", { class: "muted" }, r.error))))] : [],
    h("div", { class: "row" }, h("button", { class: "primary", onclick: () => close() }, "\u597D"))
  ]);
}
async function importGba(ctx, det) {
  const { bytes, name, saveKind } = det;
  let target;
  if (ctx.cart) {
    if (ctx.jamBlocked) {
      banner("\u5B58\u6863\u7684\u4E91\u7AEF\u5217\u8868\u6CA1\u62FF\u5168\uFF08\u6CA1\u767B\u5F55 / \u79BB\u7EBF / \u7F51\u7EDC\u6162\uFF09\uFF1A\u5148\u4E0D\u5BFC\u5165\uFF0C\u514D\u5F97\u76D6\u6389\u522B\u7684\u8BBE\u5907\u5B58\u7684\u3002\u8054\u7F51\u540E\u91CD\u5F00\u8FD9\u5F20\u5361\u5E26\u518D\u8BD5\u3002", "warning");
      return;
    }
    target = { ...ctx.cart, open: true };
  } else {
    const carts = ctx.carts();
    if (!carts.length) {
      banner("\u76D8\u5E93\u91CC\u6CA1\u6709 GBA \u5361\u5E26\uFF1A\u5148\u628A\u5361\u5E26\u52A0\u8FDB\u76D8\u5E93\uFF08\u6216\u8005\u5F00\u7740\u90A3\u5F20\u5361\u5E26\u518D\u5BFC\u5165\uFF09\uFF0C\u6211\u624D\u77E5\u9053\u8FD9\u4EFD\u5B58\u6863\u8BE5\u8DDF\u8C01\u3002", "warning");
      return;
    }
    const guess = matchCartByName(name, carts);
    const pick = await sheet((done) => [
      h("h2", {}, "\u5BFC\u5165\u5B58\u6863\uFF1A\u8BA4\u51FA\u662F GBA \u7535\u6C60\u5B58\u6863"),
      h("p", { class: "muted" }, `\u300C${name}\u300D${(bytes.length / 1024).toFixed(0)} KB\uFF0C${saveKind}\u3002\u5B57\u8282\u91CC\u6CA1\u6709\u6E38\u620F\u540D\uFF1A\u8FD9\u662F\u54EA\u5F20\u5361\u5E26\u7684\uFF1F${guess ? "\u6309\u6587\u4EF6\u540D\u731C\u4E86\u4E00\u5F20\uFF0C\u70B9\u522B\u7684\u53EF\u4EE5\u6539\u3002" : ""}\u6539\u7248\u548C\u539F\u7248\u5361\u5E26\u5934\u4E00\u6837\u7684\uFF08\u6BD4\u5982\u6539\u7248\u5B9D\u53EF\u68A6\uFF09\u5171\u7528\u4E00\u7F50\uFF0C\u5217\u8868\u91CC\u53EA\u6709\u4E00\u6761\u3002`),
      h("div", { class: "menu-list" }, ...carts.map((c) => h(
        "button",
        { class: `menu-item${guess && guess.key === c.key ? " on" : ""}`, onclick: () => done(c) },
        h("span", {}, `${guess && guess.key === c.key ? "\u2713 " : ""}${c.title}`),
        h("span", { class: "muted" }, c.saveSize ? `\u5B58\u6863 ${GBA_SAVE_KINDS[c.saveSize] ?? `${c.saveSize} B`}` : "\u6CA1\u5F00\u8FC7\uFF0C\u4E0D\u77E5\u9053\u5B58\u6863\u7C7B\u578B")
      ))),
      h("div", { class: "row" }, h("button", { onclick: () => done(null) }, "\u53D6\u6D88"))
    ]);
    if (!pick) return;
    target = { platform: PLATFORM_CODE.gba, key: pick.key, title: pick.title, saveSize: pick.saveSize, open: false };
  }
  const warn = [];
  if (target.saveSize) {
    if (bytes.length !== target.saveSize) {
      banner(`\u300C${name}\u300D\u4E0D\u662F\u300C${target.title}\u300D\u7684\u7535\u6C60\u5B58\u6863\uFF1A\u5B83 ${bytes.length} \u5B57\u8282\uFF08${saveKind}\uFF09\uFF0C\u8FD9\u5F20\u5361\u5E26\u7684\u5B58\u6863\u662F ${target.saveSize} \u5B57\u8282\uFF08${GBA_SAVE_KINDS[target.saveSize] ?? "\u672A\u77E5\u7C7B\u578B"}\uFF09\u3002`, "warning");
      return;
    }
  } else warn.push("\u8FD9\u5F20\u5361\u5E26\u8FD8\u6CA1\u5728\u8FD9\u91CC\u5F00\u8FC7\uFF0C\u6CA1\u6CD5\u6838\u5BF9\u5B58\u6863\u7C7B\u578B\uFF1A\u6309\u6587\u4EF6\u5927\u5C0F\u5F53\u5B83\u662F\uFF1B\u5F00\u6E38\u620F\u65F6\u5BF9\u4E0D\u4E0A\u4F1A\u62A5\uFF0C\u6E38\u620F\u4F1A\u5F53\u65B0\u6863\u3002");
  const jar = cartJar(target.platform, target.key);
  const signedIn2 = auth.isSignedIn();
  const listedRaw = await listJams(target.platform, { timeoutMs: 2e4, waitForCloud: signedIn2 });
  const listed = signedIn2 ? listedRaw : { ...listedRaw, complete: true };
  const id = await jamId(jar);
  let status;
  if (!listed.ids.includes(id)) {
    if (!listed.complete) {
      banner("\u6CA1\u62FF\u5230\u4E91\u7AEF\u5B8C\u6574\u7684\u5B58\u6863\u5217\u8868\uFF08\u6CA1\u767B\u5F55 / \u79BB\u7EBF / \u7F51\u7EDC\u6162\uFF09\u3002\u5148\u4E0D\u5BFC\u5165\uFF1A\u4E0D\u7136\u53EF\u80FD\u76D6\u6389\u522B\u7684\u8BBE\u5907\u5B58\u7684\u3002", "warning");
      return;
    }
    status = { dir: id, status: "new" };
  } else {
    const loaded = await ctx.withPassword(async (pw2) => {
      const p = pw2 ?? ctx.getPassword();
      if (!p) throw new NeedPassword();
      return loadMemstick(target.platform, p, [id], listed.complete);
    }, "\u5B58\u6863");
    if (!loaded) return;
    const cur = loaded.files.get("save.bin") ?? [...loaded.files.values()][0];
    if (!cur) status = { dir: id, status: "error", error: "\u73B0\u5728\u90A3\u7F50\u8BFB\u4E0D\u51FA\u6765\uFF08\u53E3\u4EE4\u4E0D\u662F\u8FD9\u4E2A / \u574F\u4E86\uFF09\uFF1A\u4E0D\u52A8\u5B83" };
    else if (cur.length === bytes.length && cur.every((b, i) => b === bytes[i])) status = { dir: id, status: "same" };
    else status = { dir: id, status: "differ", mineAt: 0, cloudAt: [...loaded.times.values()][0], differ: [`${(cur.length / 1024).toFixed(0)} KB \u2192 ${(bytes.length / 1024).toFixed(0)} KB`] };
  }
  if (status.status === "same") {
    note("\u5BFC\u5165\u7684\u548C\u73B0\u5728\u7684\u7535\u6C60\u5B58\u6863\u4E00\u5B57\u4E0D\u5DEE\uFF0C\u4EC0\u4E48\u90FD\u4E0D\u7528\u505A\u3002", 4e3);
    return;
  }
  const row = rowOf(status, `${target.title} \u2190 ${name}`);
  if (status.status === "differ") row.detail = `\u73B0\u5728\u90A3\u7F50 ${fmtWhen(status.cloudAt)}${target.open ? "\uFF08\u6E38\u620F\u6B63\u5F00\u7740\uFF09" : ""}`;
  const decisions = await reviewSheet("\u5BFC\u5165\u5B58\u6863\uFF1A\u4F1A\u600E\u6837", [`${saveKind}\uFF0C\u8DDF\u300C${target.title}\u300D\u3002${target.open ? "\u5BFC\u5B8C\u6E38\u620F\u4F1A\u51B7\u542F\uFF0C\u4ECE\u6807\u9898\u753B\u9762\u9009\u300C\u7EE7\u7EED\u300D\u3002" : "\u4E0B\u6B21\u5F00\u8FD9\u5F20\u5361\u5E26\u65F6\u751F\u6548\u3002"}`, ...warn], [row]);
  if (!decisions) return;
  const overwrite = status.status === "differ" && decisions[row.id] === "overwrite";
  if (status.status === "differ" && !overwrite) return;
  if (!await confirmOverwrite(overwrite ? [row.label] : [])) return;
  const pw = ctx.getPassword() ?? await ctx.withPassword(async (p) => {
    if (!p) throw new NeedPassword();
    return p;
  }, "\u5B58\u6863");
  if (!pw) return;
  ctx.log("info", `\u5BFC\u5165\u5B58\u6863\uFF08GBA\uFF09\uFF1A\u300C${name}\u300D\uFF08${bytes.length} B\uFF09\u2192 ${target.title}${overwrite ? "\uFF0C\u65E7\u7F50\u8FDB\u56DE\u6536\u7AD9" : ""}`);
  if (overwrite) await deleteSaveDir(jar);
  const r = await saveSaveDir(jar, /* @__PURE__ */ new Map([["save.bin", bytes]]), pw);
  if (target.open && ctx.cart) {
    await ctx.cart.load(bytes);
    note(`\u5BFC\u5165\u597D\u4E86${r.pushed ? "\u3001\u5DF2\u4F20\u4E0A\u4E91\u7AEF" : "\uFF08\u672C\u673A\u5DF2\u843D\uFF0C\u7A0D\u540E\u4F20\uFF09"}\uFF1A\u6E38\u620F\u5DF2\u91CD\u5F00\uFF0C\u4ECE\u6807\u9898\u753B\u9762\u9009\u300C\u7EE7\u7EED\u300D\u3002\u6E38\u620F\u8BA4\u4E0D\u51FA\u8FD9\u4EFD\u5B58\u6863\u7684\u8BDD\u4F1A\u5F53\u65B0\u6863\u5F00\u59CB\u3002`, 7e3);
  } else note(`\u5BFC\u5165\u597D\u4E86${r.pushed ? "\u3001\u5DF2\u4F20\u4E0A\u4E91\u7AEF" : "\uFF08\u672C\u673A\u5DF2\u843D\uFF0C\u7A0D\u540E\u4F20\uFF09"}\uFF1A\u4E0B\u6B21\u5F00\u300C${target.title}\u300D\u5C31\u662F\u8FD9\u4EFD\u5B58\u6863\u3002`, 6e3);
}
async function importSaves(ctx) {
  const files = await pickSource();
  if (!files) return;
  const det = await detectSaves(files);
  if (det.kind === "none") {
    banner(det.why, "warning");
    return;
  }
  try {
    if (det.kind === "psp") await importPsp(ctx, det);
    else await importGba(ctx, det);
  } catch (e) {
    banner(`\u5BFC\u5165\u5B58\u6863\u51FA\u9519\uFF1A${errorText(e)}`);
    ctx.log("warn", `\u5BFC\u5165\u5B58\u6863\u51FA\u9519\uFF1A${errorText(e)}`);
  }
}

// src/app/core-session.ts
var BUTTON = { cross: 0, square: 1, select: 2, start: 3, up: 4, down: 5, left: 6, right: 7, circle: 8, triangle: 9, l: 10, r: 11 };
var bit = (b) => 1 << BUTTON[b];
var PACE_MODES = { wall: 0, audio: 1, vsync: 2 };
var MEMSTICK_DIR = "/saves/PSP/SAVEDATA";
var PERF_WORDS = 40;
var clamp01 = (x) => x < 0 ? 0 : x > 1 ? 1 : x;
var RUNNING_FRAMES = 2;
var loopAge = (v) => v <= 0 ? -1 : v > 1e11 ? Date.now() - v : performance.now() - v;
var SNAPSHOT_FRAMES = 60;
var CoreSession = class _CoreSession {
  constructor(core2, opts) {
    this.opts = opts;
    this.core = core2;
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
  // 读盘的网络用量：这一秒拿了多少字节、核等读盘等了多少毫秒（核的读是同步的——等多久就停多久，声音跟着欠）。
  //   user 10-14「状态栏显示实时网络用量判断是游戏卡了还是在等网」。added 20261014 by Claude Fable 5.1
  net = { bytes: 0, waitMs: 0, inflight: 0, bps: 0, waitPerSec: 0 };
  pace = { mean: 0, sd: 0, max: 0, late: 0, bunched: 0, frameMs: 0, frameMsSd: 0 };
  perRefresh = { last: performance.now(), seq: 0, dts: [], counts: [0, 0, 0], hz: 0, shown: [0, 0, 0] };
  startedAt = performance.now();
  perfBuf = 0;
  perfPrev = null;
  perf = null;
  /** 这一秒窗口的排程读数：追进度 / 重锚每秒几次、跑了几帧（0 = 核没在跑，性能读数当作废）。 */
  win = { catchupPerSec: 0, reanchorsPerSec: 0, ranFrames: 0 };
  winPrev = { catchup: 0, reanchors: 0 };
  /** 核 stderr 最近几十行（只留像报错 / 诊断的）：日志面板要的。 */
  stderrTail = [];
  /** 显卡名（核起 GL 时问浏览器的；软件渲染 / 老核 = 空）。 */
  glRenderer = "";
  static async start(opts) {
    const { default: createKrCore } = await import(new URL(`${opts.coreDir}kr-core.mjs`, location.href).href);
    let session2 = null;
    const media = opts.media;
    const core2 = await createKrCore({
      krOnDiscOpen: (path) => opts.onDiscOpen?.(path),
      krMedia: {
        size: media.size,
        read: async (offset, length) => {
          const s = session2, t0 = performance.now();
          if (s) {
            s.mediaReads++;
            s.net.inflight++;
          }
          try {
            const bytes = await media.read(offset, length);
            if (s) s.net.bytes += bytes.length;
            return bytes;
          } finally {
            if (s) {
              s.net.waitMs += performance.now() - t0;
              s.net.inflight--;
            }
          }
        }
      },
      arguments: [`/disc/game${opts.ext}`, String(media.size), ...opts.lowLatency ? ["lowlatency"] : [], ...opts.cpuCore === "interp" ? ["cpu=interp"] : [], ...opts.skinning === "gpu" ? ["skin=gpu"] : [], ...opts.presentEvery ? [`cadence=${opts.presentEvery}`] : [], ...opts.cullOff ? ["cull=0"] : [], ...opts.forceSoftware ? ["render=sw"] : [], ...opts.glCheck ? ["glcheck=1"] : [], ...opts.tapOff ? ["tap=0"] : [], ...opts.hideExt ? [`hideext=${opts.hideExt}`] : [], ...opts.coreOptions ?? []],
      locateFile: (path) => new URL(`${opts.coreDir}${path}`, location.href).href,
      preRun: [(M) => {
        for (const [path, bytes] of opts.extraFiles ?? []) {
          M.FS.mkdirTree(path.replace(/\/[^/]*$/, ""));
          M.FS.writeFile(path, bytes);
        }
        if (!opts.memstick?.size) return;
        for (const [rel, bytes] of opts.memstick) {
          const full = `${MEMSTICK_DIR}/${rel}`;
          M.FS.mkdirTree(full.replace(/\/[^/]*$/, ""));
          M.FS.writeFile(full, bytes);
          const at = opts.memstickTimes?.get(rel.split("/")[0]);
          if (at) {
            try {
              M.FS.utime(full, at, at);
            } catch (e) {
              console.warn("[memstick] utime", rel, e);
            }
          }
        }
      }],
      print: (s) => console.log(s),
      printErr: (s) => {
        console.warn(s);
        session2?.noteStderr(s);
      }
    });
    session2 = new _CoreSession(core2, opts);
    session2.init();
    await session2.startAudio();
    return session2;
  }
  init() {
    const { core: core2, opts } = this;
    if (opts.pacing) core2._kr_set_pacing(PACE_MODES[opts.pacing]);
    this.paceBuf = core2._malloc(8 * 8);
    this.perfBuf = core2._malloc(PERF_WORDS * 8);
    new ResizeObserver(() => this.notifyDisplaySize()).observe(opts.glCanvas);
    this.notifyDisplaySize();
  }
  audioHooked = false;
  audioNode = null;
  syncLive() {
    this.core._kr_audio_set_live(this.ac.state === "running" ? 1 : 0);
  }
  /** 声音管线整个重建（新 AudioContext + 新 worklet，接回同一个环形缓冲）：iOS 从中断回来 AudioContext 说 running 其实哑着（10-15 user「游戏复活但是没声音」）。
   *  旧上下文关掉（best effort）；读指针跳到写指针（不回放后台攒下的旧声音）。 */
  async rebuildAudio(fresh) {
    const old = this.ac;
    try {
      this.audioNode?.disconnect();
    } catch {
    }
    try {
      this.gain?.disconnect();
    } catch {
    }
    old.close().catch(() => {
    });
    this.ac = fresh;
    const { core: core2 } = this;
    Atomics.store(core2.HEAP32, core2._kr_audio_r_ptr() >> 2, Atomics.load(core2.HEAP32, core2._kr_audio_w_ptr() >> 2));
    await this.startAudio();
  }
  async startAudio() {
    const { core: core2, ac: ac2 } = this;
    await ac2.audioWorklet.addModule(new URL("./audio-worklet.js", location.href));
    const node = new AudioWorkletNode(ac2, "kr-audio", {
      numberOfInputs: 0,
      outputChannelCount: [2],
      processorOptions: {
        buffer: core2.HEAPU8.buffer,
        ringPtr: core2._kr_audio_ring(),
        ringFrames: core2._kr_audio_ring_frames(),
        wPtr: core2._kr_audio_w_ptr(),
        rPtr: core2._kr_audio_r_ptr(),
        underrunPtr: core2._kr_audio_underrun_ptr(),
        coreRate: core2._kr_audio_rate(),
        targetFrames: 2048
        // ≈ 46 ms；对齐模式下核那边的硬上限是 3584（≈ 81 ms）
      }
    });
    this.audioNode = node;
    this.gain = ac2.createGain();
    node.connect(this.gain).connect(ac2.destination);
    this.applyGain();
    const sync = () => this.syncLive();
    ac2.onstatechange = sync;
    const resume = () => {
      if (!this.paused) this.ac.resume().then(sync, () => {
      });
    };
    if (!this.audioHooked) {
      this.audioHooked = true;
      addEventListener("pointerdown", resume);
      addEventListener("keydown", resume);
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") resume();
      });
    }
    resume();
  }
  // ── 输入 ──
  setMask(source, mask) {
    if ((this.masks.get(source) ?? 0) === mask) return;
    this.masks.set(source, mask);
    if (mask) this.opts.onInput?.();
    let all = 0;
    for (const m of this.masks.values()) all |= m;
    all >>>= 0;
    this.core._kr_set_input(all);
    const rising = all & ~this.prevAll, falling = this.prevAll & ~all;
    this.prevAll = all;
    if (rising || falling) this.noteEdges(rising, falling, source);
  }
  prevAll = 0;
  /** 声音缓冲（W-4 方案用）：顺滑模式的目标水位、对齐模式的上限，毫秒（页面记着自己设的；没设过 = 核的默认 46 / 81 ms）。 */
  audioBufferMs = { target: 46, max: 81 };
  setAudioBuffer(targetMs, maxMs) {
    const rate = this.core._kr_audio_rate() || 44100;
    const f = (ms) => Math.round(ms / 1e3 * rate);
    this.core._kr_audio_set_target(f(targetMs));
    this.core._kr_audio_set_max(f(maxMs));
    this.audioBufferMs = { target: targetMs, max: maxMs };
  }
  /** 按下锁存（W-38）即时开关；老核没有这个导出 → 改不了。 */
  get tapOff() {
    return this.core._kr_tap_off ? this.core._kr_tap_off() === 1 : false;
  }
  setTapOff(off) {
    this.core._kr_set_tap_off?.(off ? 1 : 0);
  }
  // ── 连按测量（W-38）：页面看到的按下 / 按住多久 / 松开多久，和核放出去的点按对账；一串停下 1 s 后由 takeBurst 交出一次 ──
  burst = null;
  inputStatsBuf = 0;
  /** 核的锁存累计：收到几下、放出几下、排满丢掉几下（老核 = null）。 */
  inputStats() {
    const c = this.core;
    if (!c._kr_input_stats) return null;
    if (!this.inputStatsBuf) this.inputStatsBuf = c._malloc(3 * 8);
    c._kr_input_stats(this.inputStatsBuf);
    const b = this.inputStatsBuf >> 3;
    return { received: c.HEAPF64[b], played: c.HEAPF64[b + 1], dropped: c.HEAPF64[b + 2] };
  }
  noteEdges(rising, falling, source) {
    const now = performance.now();
    for (let b = 0; b < 16; b++) if (rising >>> b & 1) this.core._kr_input_tap?.(b);
    if (rising && (!this.burst || now - this.burst.last > 600)) {
      const st = this.inputStats();
      this.burst = { n: 0, start: now, last: now, minHold: Infinity, minGap: Infinity, source, coreRecv: st?.received ?? 0, corePlayed: st?.played ?? 0, coreDropped: st?.dropped ?? 0, downAt: /* @__PURE__ */ new Map(), upAt: /* @__PURE__ */ new Map() };
    }
    const B = this.burst;
    if (!B) return;
    for (let b = 0; b < 16; b++) {
      if (rising >>> b & 1) {
        B.n++;
        const up = B.upAt.get(b);
        if (up !== void 0) B.minGap = Math.min(B.minGap, now - up);
        B.downAt.set(b, now);
      }
      if (falling >>> b & 1) {
        const d = B.downAt.get(b);
        if (d !== void 0) B.minHold = Math.min(B.minHold, now - d);
        B.upAt.set(b, now);
      }
    }
    B.last = now;
  }
  /** 现在有一串连按正在记（主线程据此决定要不要重设「这一串期间」的手柄计数起点）。 */
  takeBurstPending() {
    return this.burst !== null;
  }
  /** 一串连按（≥ 3 下）停下 1 s 之后交出一次统计，否则 null。 */
  takeBurst(now) {
    const B = this.burst;
    if (!B || now - B.last < 1e3) return null;
    this.burst = null;
    if (B.n < 3) return null;
    const st = this.inputStats();
    return { n: B.n, ms: B.last - B.start, minHold: B.minHold, minGap: B.minGap, source: B.source, coreRecv: (st?.received ?? 0) - B.coreRecv, corePlayed: (st?.played ?? 0) - B.corePlayed, coreDropped: (st?.dropped ?? 0) - B.coreDropped };
  }
  getMask(source) {
    return this.masks.get(source) ?? 0;
  }
  setAnalog(x, y) {
    if (x || y) this.opts.onInput?.();
    this.core._kr_set_analog(Math.round(x * 32767), Math.round(y * 32767));
  }
  noteStderr(s) {
    const m = /^\[kr\] GL renderer: (.*)$/.exec(s);
    if (m) this.glRenderer = m[1].trim();
    if (/error|fail|could not|incomplete|invalid|GL caps|GL check|GL err|forced|disabled \(cull|\[kr\] option/i.test(s) && !/SCENET|sceUtility|mac address/i.test(s) && !this.coreErrorsSeen.has(s) && this.coreErrorsSeen.size < 40) {
      this.coreErrorsSeen.add(s);
      this.opts.onCoreError?.(s.length > 300 ? s.slice(0, 300) + "\u2026" : s);
    }
    if (!/error|fail|shader|\[kr\]/i.test(s)) return;
    this.stderrTail.push(s.length > 200 ? s.slice(0, 200) + "\u2026" : s);
    if (this.stderrTail.length > 40) this.stderrTail.shift();
  }
  coreErrorsSeen = /* @__PURE__ */ new Set();
  gpuTotalsBuf = 0;
  gpuTotals() {
    const c = this.core;
    if (!c._kr_gpu_totals) return null;
    if (!this.gpuTotalsBuf) this.gpuTotalsBuf = c._malloc(4 * 8);
    c._kr_gpu_totals(this.gpuTotalsBuf);
    const b = this.gpuTotalsBuf >> 3;
    return { readbacks: c.HEAPF64[b], blocking: c.HEAPF64[b + 1], transfers: c.HEAPF64[b + 2], copies: c.HEAPF64[b + 3] };
  }
  /** 卡带核的电池存档（mGBA：SRAM / Flash / EEPROM 一块内存）：此刻的字节 + 变化计数（宿主每 30 帧算一次哈希，变了 +1）。PSP 核没有这几个导出 → null。2026-10-21 */
  saveRam() {
    const c = this.core;
    if (!c._kr_save_ptr || !c._kr_save_size || !c._kr_save_seq) return null;
    const ptr = c._kr_save_ptr(), size = c._kr_save_size();
    if (!ptr || !size) return null;
    return { bytes: c.HEAPU8.slice(ptr, ptr + size), seq: c._kr_save_seq() };
  }
  /** 核 stderr 里最近的报错 / 诊断行（最多 40 行）。 */
  coreLog() {
    return this.stderrTail;
  }
  /** 核堆用了多少字节（工具栏「内存」；老核没有这个导出 → 0）。核的堆固定 768 MB、不增长。 */
  heapUsed() {
    return this.core._kr_heap_used ? this.core._kr_heap_used() : 0;
  }
  /** 这一局读过的盘上字节并集的大小（核 mark_seen；挂机判定的进展信号）。老核没有这个导出 → 0。 */
  discSeenBytes() {
    return this.core._kr_disc_seen_bytes ? this.core._kr_disc_seen_bytes() : 0;
  }
  // ── 音量 / 静音（W-12：和设备硬件音量独立；user 10-14「一个和苹果硬件独立的音量和静音控制」）──
  gain = null;
  vol = 1;
  muted = false;
  get volume() {
    return this.vol;
  }
  get isMuted() {
    return this.muted;
  }
  setVolume(v) {
    this.vol = Math.max(0, Math.min(1, v));
    this.applyGain();
  }
  setMuted(m) {
    this.muted = m;
    this.applyGain();
  }
  /** 内部的「先别出声」（「从上次开始」读档好之前；和人设的静音分开，不改 isMuted）。 */
  held = false;
  setHold(h2) {
    this.held = h2;
    this.applyGain();
  }
  get isHeld() {
    return this.held;
  }
  applyGain() {
    if (!this.gain) return;
    const g = this.muted || this.held ? 0 : this.vol * this.vol;
    this.gain.gain.setTargetAtTime(g, this.ac.currentTime, 0.015);
  }
  // ── 截图（W-14）：核只抓一帧（不序列化整机状态），原生大小 RGBA、左上角原点 ──
  async captureFrame() {
    const { core: core2 } = this;
    if (!core2._kr_request_frame) return null;
    const before = core2._kr_frame_shot_seq();
    core2._kr_request_frame();
    await this.waitSeq(() => core2._kr_frame_shot_seq(), before, 5e3);
    const w = core2._kr_thumb_w(), h2 = core2._kr_thumb_h();
    return w > 0 && h2 > 0 ? { rgba: core2.HEAPU8.slice(core2._kr_thumb_ptr(), core2._kr_thumb_ptr() + w * h2 * 4), w, h: h2 } : null;
  }
  /** 把画布的实际显示像素告诉核（核在 GPU 里按整数倍放大）。ResizeObserver 自动调；画布搬进小窗（别的 document、别的 devicePixelRatio，
   *  主窗口的 ResizeObserver 看不见它）时宿主在小窗 resize 里手动调。 */
  notifyDisplaySize() {
    const c = this.opts.glCanvas;
    const r = c.getBoundingClientRect(), dpr = (c.ownerDocument.defaultView ?? window).devicePixelRatio || 1;
    this.core._kr_set_display_size(Math.round(r.width * dpr), Math.round(r.height * dpr));
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
  get audio() {
    return this.ac;
  }
  get speed() {
    return this.core._kr_get_speed();
  }
  setSpeed(x) {
    this.core._kr_set_speed(x);
  }
  /** 排程（运行中可切；核在下一趟 frame() 换 rAF / setImmediate 并重新锚定）：两条线程都不忙、帧率却低时，换一种看帧率变不变 = 分辨「GPU 慢」和「浏览器把 worker 的 rAF 压慢了」。 */
  setPacing(mode) {
    this.core._kr_set_pacing(PACE_MODES[mode]);
  }
  pacingMode() {
    const v = this.core._kr_get_pacing();
    return v === 0 ? "wall" : v === 1 ? "audio" : "vsync";
  }
  /** 上屏节拍强制值：0 = 自动（核按刷新率 / 游戏帧率算，72 Hz × 30 帧 → 3）；1 = 每次刷新都上（eager，停留 2 / 3 交替）；2 / 3 = 每 2 / 3 次刷新一帧。运行中可切，核下一秒生效。 */
  setPresentEveryForce(k) {
    this.core._kr_set_present_every_force?.(k);
  }
  presentEveryForce() {
    return this.core._kr_present_every_force ? this.core._kr_present_every_force() : 0;
  }
  // ── 画 30 帧（移动设备默认；user 10-14「移动设备上应该限速30吧」）：游戏逻辑仍 60，只对本身 60 帧的游戏少画一半（核按 vblank / flip 比判断，30 帧的游戏不再折半）──
  cap30 = false;
  setFrameCap30(on) {
    this.cap30 = on;
    if (this.core._kr_set_frameskip_floor) this.core._kr_set_frameskip_floor(on ? 1 : 0);
  }
  get frameCap30() {
    return this.cap30;
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
  /** 存 / 读之前等核真正跑起来（出过 RUNNING_FRAMES 帧）：刚启动时 PPSSPP 的模拟线程还在「已请求启动」，上游 EmuThreadPause 遇到这个状态直接返回，
   *  存 / 恢复和刚起步的模拟线程撞在一起会把核卡死（10-14 流程测试抓到：「从上次开始」一开盘就读档 → core did not answer）。 */
  async whenRunning(minFrames = RUNNING_FRAMES) {
    const t0 = performance.now(), f0 = this.stats().frames;
    try {
      await this.whenRunningInner(minFrames);
    } finally {
      console.info(`[resume] whenRunning(${minFrames}) waited ${(performance.now() - t0).toFixed(0)} ms (frames ${f0} \u2192 ${this.stats().frames})`);
    }
  }
  /** 核出过 n 帧没有（刚开盘拍快照前问一句，没到就别拍——不是错，是还没到时候）。 */
  framesRun() {
    return this.core._kr_stat_frames();
  }
  /** 无头测试：让核假装丢一次 WebGL 上下文（1.5 s 后浏览器恢复）。老核没有 → false。 */
  debugLoseGl() {
    if (!this.core._kr_debug_lose_gl) return false;
    this.core._kr_debug_lose_gl();
    return true;
  }
  readyForSnapshot() {
    return this.framesRun() >= SNAPSHOT_FRAMES;
  }
  async whenRunningInner(minFrames) {
    const t0 = performance.now();
    while (this.core._kr_stat_frames() < minFrames) {
      if (performance.now() - t0 > 3e4) throw new Error("core is not running yet");
      await new Promise((r) => setTimeout(r, 50));
    }
  }
  /** 存整机状态；同一帧的画面（RGBA，左上角原点）一起交出来给缩略图用（取不到 = null）。 */
  async snapshot() {
    await this.whenRunning(SNAPSHOT_FRAMES);
    const { core: core2 } = this;
    const before = core2._kr_snap_seq();
    core2._kr_request_snapshot();
    await this.waitSeq(() => core2._kr_snap_seq(), before);
    const size = core2._kr_snap_size();
    if (!size) throw new Error("core returned no state");
    const state2 = core2.HEAPU8.slice(core2._kr_snap_ptr(), core2._kr_snap_ptr() + size);
    core2._kr_snap_free();
    const w = core2._kr_thumb_w(), h2 = core2._kr_thumb_h();
    const frame2 = w > 0 && h2 > 0 ? { rgba: core2.HEAPU8.slice(core2._kr_thumb_ptr(), core2._kr_thumb_ptr() + w * h2 * 4), w, h: h2 } : null;
    return { state: state2, frame: frame2 };
  }
  /** 开盘时罐里那份存档文件的大小（-1 = 没有罐 / 核不支持）；和 saveRam().bytes.length 不等 = 核没读它（页面报横条）。 */
  saveFileBytes() {
    return this.core._kr_save_file_bytes ? this.core._kr_save_file_bytes() : -1;
  }
  /** 导入电池存档（卡带核）：字节进核内存 → 核在模拟线程上换掉 SAVE_RAM 并冷启（host.c service_cart_load）。大小必须等于 saveRam().bytes.length。 */
  async cartLoad(bytes) {
    await this.whenRunning();
    const { core: core2 } = this;
    if (!core2._kr_request_cart_load || !core2._kr_cart_seq || !core2._kr_cart_ok) throw new Error("this core has no battery save to import into");
    const ptr = core2._malloc(bytes.length);
    if (!ptr) throw new Error(`core out of memory: cannot allocate ${bytes.length} bytes for the battery save`);
    core2.HEAPU8.set(bytes, ptr);
    const before = core2._kr_cart_seq();
    core2._kr_request_cart_load(ptr, bytes.length);
    await this.waitSeq(() => core2._kr_cart_seq(), before);
    if (!core2._kr_cart_ok()) throw new Error("core rejected the battery save (size mismatch)");
  }
  async restore(bytes) {
    await this.whenRunning();
    const { core: core2 } = this;
    const ptr = core2._malloc(bytes.length);
    if (!ptr) throw new Error(`core out of memory: cannot allocate ${(bytes.length / 2 ** 20).toFixed(0)} MB to restore a state`);
    core2.HEAPU8.set(bytes, ptr);
    const before = core2._kr_restore_seq();
    core2._kr_request_restore(ptr, bytes.length);
    await this.waitSeq(() => core2._kr_restore_seq(), before);
    if (!core2._kr_restore_ok()) throw new Error("core rejected the state");
  }
  // ── 画面（每次显示器刷新调一次）──
  tick() {
    const { core: core2, opts } = this;
    const seq = core2._kr_frame_seq();
    const now = performance.now();
    this.perRefresh.dts.push(now - this.perRefresh.last);
    this.perRefresh.last = now;
    this.perRefresh.counts[Math.min(seq - this.perRefresh.seq, 2)]++;
    this.perRefresh.seq = seq;
    if (!this.hwChecked && seq > 0) {
      this.hwChecked = true;
      const hw = core2._kr_hw_active() === 1;
      opts.glCanvas.hidden = !hw;
      opts.softCanvas.hidden = hw;
    }
    if (seq !== this.lastSeq && !core2._kr_hw_active()) {
      this.lastSeq = seq;
      const w = core2._kr_frame_w(), h2 = core2._kr_frame_h();
      if (w > 0 && h2 > 0) {
        const c = opts.softCanvas;
        if (c.width !== w || c.height !== h2) {
          c.width = w;
          c.height = h2;
          this.image = null;
          c.style.setProperty("--ar", String(w / h2));
        }
        this.image ??= this.ctx2d.createImageData(w, h2);
        const src = core2.HEAPU8.subarray(core2._kr_frame_ptr(), core2._kr_frame_ptr() + w * h2 * 4);
        const dst = this.image.data;
        if (core2._kr_frame_format?.() === 1) dst.set(src);
        else for (let i = 0; i < src.length; i += 4) {
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
    const { core: core2, ac: ac2 } = this;
    const now = performance.now();
    const frames = core2._kr_stat_frames();
    const fw = this.fpsWindow;
    if (now - fw.t >= 1e3) {
      const dtMs = now - fw.t, ranFrames = frames - fw.frames;
      const emuMs = core2._kr_stat_emu_ms();
      fw.fps = (frames - fw.frames) * 1e3 / (now - fw.t);
      fw.speed = (emuMs - fw.emuMs) / (now - fw.t);
      const n = this.net;
      n.bps = n.bytes * 1e3 / (now - fw.t);
      n.waitPerSec = n.waitMs * 1e3 / (now - fw.t);
      n.bytes = 0;
      n.waitMs = 0;
      fw.t = now;
      fw.frames = frames;
      fw.emuMs = emuMs;
      core2._kr_pace_stats(this.paceBuf);
      const f = core2.HEAPF64.subarray(this.paceBuf >> 3, (this.paceBuf >> 3) + 8);
      this.pace = { mean: f[1], sd: f[2], max: f[3], late: f[4], bunched: f[5], frameMs: f[6], frameMsSd: f[7] };
      {
        const c = core2._kr_catchup_runs(), r = core2._kr_reanchors();
        this.win = { catchupPerSec: (c - this.winPrev.catchup) * 1e3 / dtMs, reanchorsPerSec: (r - this.winPrev.reanchors) * 1e3 / dtMs, ranFrames };
        this.winPrev = { catchup: c, reanchors: r };
      }
      if (core2._kr_perf_stats) {
        core2._kr_perf_stats(this.perfBuf);
        const p = core2.HEAPF64.slice(this.perfBuf >> 3, (this.perfBuf >> 3) + PERF_WORDS);
        const q = this.perfPrev;
        if (q) {
          const d = (i) => p[i] - q[i];
          const drawn = Math.max(1, f[0]), ran = Math.max(1, ranFrames);
          const per = (i) => d(i) / drawn;
          const emuWaitMs = d(34) / 1e3, renderWaitMs = d(35) / 1e3;
          this.perf = {
            emuBusy: clamp01(1 - emuWaitMs / dtMs),
            submitBusy: clamp01((d(0) - renderWaitMs) / dtMs),
            runMsPerFrame: d(0) / ran,
            runMaxMs: p[1],
            presentMs: per(2),
            draws: per(3),
            tex: per(4),
            texPx: per(5),
            texMs: per(6),
            buf: per(7),
            bufBytes: per(8),
            bufMs: per(9),
            read: per(10),
            readMs: per(11),
            getErr: per(12),
            sync: per(13),
            syncMs: per(14),
            prog: per(15),
            fbo: per(16),
            map: per(17),
            mapMs: per(18),
            blit: per(19),
            glError: p[20],
            glErrors: p[21],
            ppsspp: { drawCalls: p[22], vertexDecodes: p[23], vertsSubmitted: p[24], vertsDecoded: p[25], flushes: p[26], texturesDecoded: p[27], readbacks: p[28], blockingReadbacks: p[29], uploads: p[30], blockTransfers: p[31], copies: p[32], fbosCreated: p[33], listMs: p[36] }
          };
        }
        this.perfPrev = p;
      }
      const sorted = this.perRefresh.dts.slice().sort((a, b) => a - b);
      this.perRefresh.hz = sorted.length ? 1e3 / sorted[sorted.length >> 1] : 0;
      this.perRefresh.shown = this.perRefresh.counts;
      this.perRefresh.dts = [];
      this.perRefresh.counts = [0, 0, 0];
    }
    const pacing = core2._kr_get_pacing();
    const autoWall = core2._kr_pacing_auto_wall ? core2._kr_pacing_auto_wall() === 1 : false;
    return {
      /** 核自己量到 worker 的 rAF 慢、这一局改了墙钟（设的仍是跟屏幕）。 */
      autoWall,
      frames,
      fps: fw.fps,
      speed: fw.speed,
      pace: this.pace,
      displayHz: this.perRefresh.hz,
      perRefresh: this.perRefresh.shown,
      pacing: autoWall ? "\u5899\u949F\uFF08\u8BBE\u7684\u662F\u8DDF\u5C4F\u5E55\uFF1B\u6838\u91CF\u5230 rAF \u6162\uFF0C\u81EA\u52A8\u5207\uFF09" : ["\u5899\u949F", "\u58F0\u97F3", "\u8DDF\u5C4F\u5E55"][pacing] + (pacing === 2 ? ["\uFF08\u6309\u65F6\u95F4\u5BF9\u9F50\uFF09", "\uFF08\u6BCF\u5237\u65B0 1 \u5E27\uFF09"][core2._kr_vsync_lock()] : ""),
      catchup: core2._kr_catchup_runs(),
      reanchors: core2._kr_reanchors(),
      /** 现在实际按哪种排程跑（核自己改成墙钟也算 wall）。 */
      pacingMode: autoWall ? "wall" : ["wall", "audio", "vsync"][pacing],
      /** 核线程 rAF 的间隔（EMA，ms；0 = 不是跟屏幕排程）：Safari 把 worker 的 rAF 压慢时这里 > 16.7。 */
      vsyncDt: core2._kr_vsync_dt(),
      /** 上屏节拍（cadence.h）：跟屏幕排程下每几次刷新上屏一帧；1 = 每次。72 Hz 屏放 30 帧的游戏 → 3（24 fps 匀速，不然每帧交替占 2 / 3 次刷新 = 抖）。老核 = 1。 */
      presentEvery: core2._kr_present_every ? core2._kr_present_every() : 1,
      /** 这一局累计（按模拟帧）：PPSSPP 去显卡读回画面几次（阻塞的几次）、块传输几次、帧缓冲拷贝几次。W-37：游戏抓画面那一下有没有回读。老核 = null。 */
      gpuTotals: this.gpuTotals(),
      win: this.win,
      /** 核的帧循环多久没被调用了（ms；-1 = 老核不知道）。大 = 循环死了（rAF 没人调）；小而帧数不走 = 卡在 retro_run 里。 */
      loopAgeMs: core2._kr_loop_last_ms ? loopAge(core2._kr_loop_last_ms()) : -1,
      loopRescues: core2._kr_loop_rescues ? core2._kr_loop_rescues() : 0,
      glLost: core2._kr_gl_state ? (core2._kr_gl_state() & 1) === 1 : false,
      glRestores: core2._kr_gl_state ? core2._kr_gl_state() >> 1 : 0,
      frameskip: core2._kr_frameskip(),
      renderer: core2._kr_hw_active() ? "GPU\uFF08WebGL2\uFF09" + ["", " \xB7 \u4F4E\u5EF6\u8FDF\u753B\u5E03\uFF1A\u6D4F\u89C8\u5668\u91C7\u7EB3", " \xB7 \u4F4E\u5EF6\u8FDF\u753B\u5E03\uFF1A\u6D4F\u89C8\u5668\u6CA1\u91C7\u7EB3"][core2._kr_desync_state()] : "\u8F6F\u4EF6\u6E32\u67D3",
      bytesFetched: core2._kr_stat_bytes_fetched(),
      readsWaiting: core2._kr_stat_reads_waiting(),
      mediaReads: this.mediaReads,
      /** 这一秒读盘拿到的字节 / 秒。 */
      netBps: this.net.bps,
      /** 这一秒里核等读盘等了多少毫秒（接近 1000 = 整秒都在等网）。 */
      netWaitMs: this.net.waitPerSec,
      netInflight: this.net.inflight,
      audioState: ac2.state,
      audioClock: ac2.currentTime,
      audioRead: core2.HEAP32[core2._kr_audio_r_ptr() >> 2],
      audioFillMs: core2._kr_audio_fill() / ((core2._kr_audio_rate() || 44100) / 1e3),
      audioUnderrunMs: core2.HEAP32[core2._kr_audio_underrun_ptr() >> 2] / ((core2._kr_audio_rate() || 44100) / 1e3),
      audioDropped: core2._kr_audio_dropped(),
      outputLatencyMs: ((ac2.outputLatency || 0) + (ac2.baseLatency || 0)) * 1e3,
      paused: this.paused,
      gameSpeed: this.speed,
      seconds: (now - this.startedAt) / 1e3,
      /** 画 30 帧：要的 / 此刻真在生效（游戏本身 60 帧才生效）/ 核估的游戏本身帧率（0 = 还没量到）。 */
      frameCap: { want: this.cap30, active: core2._kr_frameskip_floor_active ? core2._kr_frameskip_floor_active() > 0 : false, nativeFps: core2._kr_native_fps ? core2._kr_native_fps() : 0 },
      /** 性能读数（每秒一个窗口；第一秒 / 老核 = null）。 */
      perf: this.perf,
      glRenderer: this.glRenderer,
      coreLog: () => this.coreLog()
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
var STICK_DEADZONE = 0.12;
function mountSoftKeys(host, on) {
  const keys = /* @__PURE__ */ new Map();
  const key = (id, bits2, cls, label) => {
    const el = h("div", { class: `pk ${cls}`, "data-k": id }, label);
    keys.set(id, { el, bits: bits2 });
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
  const face = h("div", { class: "face" }, ...FACE.map(([n, c]) => key(n, bit(n), `fb ${c}`, h("i", { class: `sym ${c}` }))));
  const mkStick = (side) => {
    const knob = h("i", { class: "knob" });
    return { el: h("div", { class: `stick ${side}` }, knob), knob };
  };
  const sticks = { left: mkStick("left"), right: mkStick("right") };
  const pauseKey = h("div", { class: "pk small sys", "data-sys": "pause", title: "\u6682\u505C / \u7EE7\u7EED" }, "\u6682\u505C");
  const fastKey = h("div", { class: "pk small sys", "data-sys": "fast", title: "\u6309\u4F4F\u5FEB\u8FDB" }, "\u5FEB\u8FDB");
  const layer = h(
    "div",
    { class: "softkeys", hidden: true },
    key("lt", bit("l"), "shoulder lt", "LT"),
    key("l", bit("l"), "shoulder l", "L"),
    key("r", bit("r"), "shoulder r", "R"),
    key("rt", bit("r"), "shoulder rt", "RT"),
    sticks.left.el,
    dpad,
    sticks.right.el,
    face,
    h("div", { class: "mid" }, pauseKey, key("select", bit("select"), "small", "SELECT"), key("start", bit("start"), "small", "START"), fastKey)
  );
  host.append(layer);
  const pointers = /* @__PURE__ */ new Map();
  let shown = 0;
  const publish = () => {
    let m = 0;
    for (const v of pointers.values()) m |= v;
    if (m === shown) return;
    shown = m;
    for (const [id, k] of keys) k.el.classList.toggle("on", (pointerKey.get(id) ?? 0) > 0);
    for (const d of ["up", "down", "left", "right"]) dpad.querySelector(`.${d}`).classList.toggle("on", (m & bit(d)) !== 0);
    on.onMask(m);
  };
  const pointerKey = /* @__PURE__ */ new Map();
  const pointerOn = /* @__PURE__ */ new Map();
  const FACE_REACH = 1.5;
  const hit = (x, y) => {
    {
      let bits2 = 0;
      const ids = [];
      for (const [n] of FACE) {
        const k = keys.get(n), b = k.el.getBoundingClientRect(), r2 = b.width / 2;
        if (Math.hypot(x - (b.left + r2), y - (b.top + b.height / 2)) <= r2 * FACE_REACH) {
          bits2 |= k.bits;
          ids.push(n);
        }
      }
      if (ids.length) return { bits: bits2, ids };
    }
    const isFace = (id) => FACE.some(([n]) => n === id);
    for (const [id, k] of keys) {
      if (isFace(id)) continue;
      const b = k.el.getBoundingClientRect();
      if (x >= b.left && x <= b.right && y >= b.top && y <= b.bottom) return { bits: k.bits, ids: [id] };
    }
    const r = dpad.getBoundingClientRect();
    const pad2 = r.width * 0.15;
    if (x >= r.left - pad2 && x <= r.right + pad2 && y >= r.top - pad2 && y <= r.bottom + pad2) {
      const dx = x - (r.left + r.width / 2), dy = y - (r.top + r.height / 2);
      if (Math.hypot(dx, dy) < r.width * 0.12) return { bits: 0, ids: [] };
      const sector = (Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) + 8) % 8;
      return { bits: [
        bit("right"),
        bit("right") | bit("down"),
        bit("down"),
        bit("down") | bit("left"),
        bit("left"),
        bit("left") | bit("up"),
        bit("up"),
        bit("up") | bit("right")
      ][sector], ids: [] };
    }
    for (const [id, k] of keys) {
      if (isFace(id)) continue;
      const b = k.el.getBoundingClientRect();
      if (x >= b.left - 4 && x <= b.right + 4 && y >= b.top - 4 && y <= b.bottom + 4) return { bits: k.bits, ids: [id] };
    }
    return { bits: 0, ids: [] };
  };
  const setPointer = (pid, x, y) => {
    for (const prev of pointerOn.get(pid) ?? []) pointerKey.set(prev, Math.max(0, (pointerKey.get(prev) ?? 1) - 1));
    const got = hit(x, y);
    pointers.set(pid, got.bits);
    pointerOn.set(pid, got.ids);
    for (const id of got.ids) pointerKey.set(id, (pointerKey.get(id) ?? 0) + 1);
    shown = -1;
    publish();
  };
  const stickPointer = { left: null, right: null };
  const stickMove = (side, x, y) => {
    const s = sticks[side];
    const r = s.el.getBoundingClientRect();
    const rad = r.width / 2;
    let dx = (x - (r.left + rad)) / rad, dy = (y - (r.top + rad)) / rad;
    const len = Math.hypot(dx, dy);
    if (len > 1) {
      dx /= len;
      dy /= len;
    }
    s.knob.style.transform = `translate(${(dx * 50).toFixed(1)}%, ${(dy * 50).toFixed(1)}%)`;
    s.el.classList.add("on");
    const dead = Math.hypot(dx, dy) < STICK_DEADZONE;
    (side === "left" ? on.onLeftStick : on.onRightStick)(dead ? 0 : dx, dead ? 0 : dy);
  };
  const stickRelease = (side) => {
    stickPointer[side] = null;
    sticks[side].knob.style.transform = "";
    sticks[side].el.classList.remove("on");
    (side === "left" ? on.onLeftStick : on.onRightStick)(0, 0);
  };
  const sideOf = (pid) => stickPointer.left === pid ? "left" : stickPointer.right === pid ? "right" : null;
  let fastPointer = null;
  layer.addEventListener("pointerdown", (e) => {
    const t = e.target;
    const st = t.closest(".stick");
    if (st) {
      const side = st.classList.contains("right") ? "right" : "left";
      if (stickPointer[side] !== null) return;
      e.preventDefault();
      layer.setPointerCapture(e.pointerId);
      stickPointer[side] = e.pointerId;
      stickMove(side, e.clientX, e.clientY);
      return;
    }
    const sys = t.closest("[data-sys]")?.dataset.sys;
    if (sys === "pause") {
      e.preventDefault();
      on.onPause();
      return;
    }
    if (sys === "fast") {
      e.preventDefault();
      layer.setPointerCapture(e.pointerId);
      fastPointer = e.pointerId;
      fastKey.classList.add("on");
      on.onFast(true);
      return;
    }
    if (!t.closest(".pk, .dpad")) return;
    e.preventDefault();
    layer.setPointerCapture(e.pointerId);
    setPointer(e.pointerId, e.clientX, e.clientY);
  });
  layer.addEventListener("pointermove", (e) => {
    const side = sideOf(e.pointerId);
    if (side) {
      stickMove(side, e.clientX, e.clientY);
      return;
    }
    if (!pointers.has(e.pointerId)) return;
    setPointer(e.pointerId, e.clientX, e.clientY);
  });
  const release = (e) => {
    const side = sideOf(e.pointerId);
    if (side) {
      stickRelease(side);
      return;
    }
    if (e.pointerId === fastPointer) {
      fastPointer = null;
      fastKey.classList.remove("on");
      on.onFast(false);
      return;
    }
    for (const id of pointerOn.get(e.pointerId) ?? []) pointerKey.set(id, Math.max(0, (pointerKey.get(id) ?? 1) - 1));
    pointerOn.delete(e.pointerId);
    if (pointers.delete(e.pointerId)) {
      shown = -1;
      publish();
    }
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
        pointerOn.clear();
        pointerKey.clear();
        shown = -1;
        publish();
        for (const side of ["left", "right"]) if (stickPointer[side] !== null) stickRelease(side);
        if (fastPointer !== null) {
          fastPointer = null;
          fastKey.classList.remove("on");
          on.onFast(false);
        }
      }
    },
    get visible() {
      return !layer.hidden;
    },
    setLayout(layout) {
      layer.classList.toggle("gba", layout === "gba");
    }
  };
}

// src/app/remember-password.ts
var rememberPassword = async (password) => (await passwordKeeper().remember(password)).expiresAt;
var recallPassword = () => passwordKeeper().recall();
var rememberedUntil = async () => (await passwordKeeper().status()).expiresAt;
var hasRememberedPassword = async () => (await passwordKeeper().status()).remembered;
var forgetPassword = () => passwordKeeper().forget();

// src/app/title-cache.ts
var DB_NAME = `${APP_GUID}.titles`;
var STORE2 = "cards";
var SALT_KEY = "_salt";
var dbp = null;
function db() {
  dbp ??= new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE2);
    };
    req.onsuccess = () => {
      req.result.onversionchange = () => {
        req.result.close();
        dbp = null;
      };
      resolve(req.result);
    };
    req.onerror = () => reject(req.error);
  });
  dbp.catch(() => {
    dbp = null;
  });
  return dbp;
}
async function closeTitleCacheDb() {
  const p = dbp;
  dbp = null;
  if (p) {
    try {
      (await p).close();
    } catch {
    }
  }
}
async function tx(mode, body) {
  const d = await db();
  return new Promise((resolve, reject) => {
    const t = d.transaction(STORE2, mode);
    let result;
    const req = body(t.objectStore(STORE2));
    if (req) req.onsuccess = () => {
      result = req.result;
    };
    t.oncomplete = () => resolve(result);
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error ?? new Error("title-cache transaction aborted"));
  });
}
async function cacheKey(password, create) {
  let salt = await tx("readonly", (s) => s.get(SALT_KEY));
  if (!salt) {
    if (!create) return null;
    salt = crypto.getRandomValues(new Uint8Array(16));
    await tx("readwrite", (s) => s.put(salt, SALT_KEY));
  }
  return (await deriveKeys(password, salt, DEFAULT_ITERATIONS)).meta;
}
async function loadTitleCards(password) {
  const out = /* @__PURE__ */ new Map();
  const key = await cacheKey(password, false).catch(() => null);
  if (!key) return out;
  const keys = await tx("readonly", (s) => s.getAllKeys()).catch(() => void 0) ?? [];
  const vals = await tx("readonly", (s) => s.getAll()).catch(() => void 0) ?? [];
  for (let i = 0; i < keys.length && i < vals.length; i++) {
    if (keys[i] === SALT_KEY) continue;
    const v = vals[i];
    try {
      const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: v.iv }, key, v.ct);
      out.set(String(keys[i]), { size: v.size, card: JSON.parse(new TextDecoder().decode(plain)) });
    } catch {
    }
  }
  return out;
}
async function saveTitleCard(password, identifier, size, card) {
  const key = await cacheKey(password, true);
  if (!key) return;
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(JSON.stringify(card)));
  const rec = { size, iv, ct };
  await tx("readwrite", (s) => s.put(rec, identifier));
}
var clearTitleCards = () => tx("readwrite", (s) => s.clear()).then(() => void 0);

// src/app/presence.ts
var pipActive = false;
function setPipActive(on) {
  pipActive = on;
}
var inForeground = () => document.visibilityState === "visible" || pipActive;
var inBackground = () => !inForeground();
var purposeAt = -Infinity;
function reloadOnPurpose() {
  purposeAt = performance.now();
  location.reload();
}
var leavingOnPurpose = () => performance.now() - purposeAt < 3e3;

// src/app/slot-writer.ts
function createSlotWriter(d) {
  const setTimer = d.setTimer ?? ((fn, ms) => setTimeout(fn, ms));
  const clearTimer = d.clearTimer ?? ((t) => clearTimeout(t));
  const entries = /* @__PURE__ */ new Map();
  let pushTimer = null;
  function settle(e, failedGen, err3) {
    const keep = [];
    for (const w of e.waiters) {
      if (e.landedGen >= w.gen) w.resolve();
      else if (failedGen != null && w.gen <= failedGen) w.reject(err3);
      else keep.push(w);
    }
    e.waiters = keep;
  }
  function armPush(ms) {
    if (pushTimer != null) clearTimer(pushTimer);
    pushTimer = setTimer(() => {
      pushTimer = null;
      if (!d.background()) d.pushSoon();
    }, ms);
  }
  return {
    commit(id, bytes, opts) {
      let e = entries.get(id);
      if (!e) {
        e = { bytes, at: opts.at, gen: 0, landedGen: 0, chain: Promise.resolve(), waiters: [] };
        entries.set(id, e);
      }
      const entry = e;
      const g = ++entry.gen;
      entry.bytes = bytes;
      entry.at = opts.at;
      if (pushTimer != null) {
        clearTimer(pushTimer);
        pushTimer = null;
      }
      const local2 = new Promise((resolve, reject) => {
        entry.waiters.push({ gen: g, resolve, reject });
      });
      local2.catch(() => {
      });
      if (entry.landedGen < g - 1) d.log("info", `${d.label(id)}\uFF1A\u4E0A\u4E00\u4EFD\u8FD8\u6392\u7740\uFF08\u8FD9\u4E00\u683C\u5728\u4F20\uFF09\uFF0C\u53EA\u7559\u6700\u65B0\u8FD9\u4EFD`);
      entry.chain = entry.chain.then(async () => {
        if (entry.gen !== g) return;
        await d.writeLocal(id, bytes);
        entry.landedGen = g;
        settle(entry);
        if (entry.gen === g) armPush(opts.pushAfterMs);
      }).catch((err3) => {
        d.log("warn", `${d.label(id)} \u6CA1\u843D\u5230\u672C\u673A\uFF1A${err3 instanceof Error ? err3.message : String(err3)}`);
        settle(entry, g, err3);
      });
      return { local: local2 };
    },
    latest(id) {
      const e = entries.get(id);
      return e ? { bytes: e.bytes, at: e.at } : null;
    },
    queuedLocal: () => [...entries.values()].filter((e) => e.landedGen < e.gen).length,
    async drain() {
      await Promise.all([...entries.values()].map((e) => e.chain));
      if (pushTimer != null) {
        clearTimer(pushTimer);
        pushTimer = null;
        if (!d.background()) d.pushSoon();
      }
    }
  };
}

// src/app/deadline.ts
function withDeadline(p, ms, onSettleLate) {
  let timedOut = false;
  let timer2 = 0;
  const late = p.then((value) => {
    if (timedOut) onSettleLate?.({ ok: true, value });
    return value;
  }, (error) => {
    if (timedOut) onSettleLate?.({ ok: false, error });
    throw error;
  });
  return Promise.race([
    late.finally(() => clearTimeout(timer2)),
    new Promise((resolve) => {
      timer2 = window.setTimeout(() => {
        timedOut = true;
        resolve("timeout");
      }, ms);
    })
  ]);
}

// src/app/resume.ts
function pickNewest(cands) {
  let best = null;
  for (const c of cands) {
    const t = c.at ?? c.savedAt;
    if (t == null) continue;
    if (!best || t > best.t || t === best.t && c.item.kind === "s" && best.c.item.kind === "a") best = { c, t };
  }
  return best?.c.item ?? null;
}

// src/app/undo-guard.ts
var DB_NAME2 = `${APP_GUID}.undo-guard`;
var STORE3 = "guards";
var dbp2 = null;
function db2() {
  dbp2 ??= new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME2, 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE3);
    };
    req.onsuccess = () => {
      req.result.onversionchange = () => {
        req.result.close();
        dbp2 = null;
      };
      resolve(req.result);
    };
    req.onerror = () => reject(req.error);
  });
  dbp2.catch(() => {
    dbp2 = null;
  });
  return dbp2;
}
async function closeUndoGuardDb() {
  const p = dbp2;
  dbp2 = null;
  if (p) {
    try {
      (await p).close();
    } catch {
    }
  }
}
async function tx2(mode, body) {
  const d = await db2();
  return new Promise((resolve, reject) => {
    const t = d.transaction(STORE3, mode);
    let result;
    const req = body(t.objectStore(STORE3));
    if (req) req.onsuccess = () => {
      result = req.result;
    };
    t.oncomplete = () => resolve(result);
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error ?? new Error("undo-guard transaction aborted"));
  });
}
var putGuard = (g) => tx2("readwrite", (s) => s.put(g, g.kind));
async function getGuard(kind, discKey2) {
  const g = await tx2("readonly", (s) => s.get(kind));
  return g && g.discKey === discKey2 ? g : void 0;
}
async function deleteGuard(kind, discKey2) {
  if (await getGuard(kind, discKey2)) await tx2("readwrite", (s) => s.delete(kind));
}

// src/disc/ppst.ts
var PPST_COMPRESS = { none: 0, snappy: 1, zstd: 2 };
var HEAD = 48;
var TITLE = 128;
var cstr = (b) => {
  const end = b.indexOf(0);
  return new TextDecoder().decode(end < 0 ? b : b.subarray(0, end));
};
function parsePpst(bytes) {
  if (bytes.length < HEAD) throw new Error("not a PPSSPP savestate (too small)");
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const revision = dv.getInt32(0, true), compress = dv.getInt32(4, true), expected = dv.getUint32(8, true), uncompressedSize = dv.getUint32(12, true);
  if (revision < 4 || revision > 64) throw new Error(`not a PPSSPP savestate (revision ${revision})`);
  const head = HEAD + (revision >= 5 ? TITLE : 0);
  if (head + expected !== bytes.length) throw new Error(`PPSSPP savestate size mismatch: header says ${expected}, file has ${bytes.length - head}`);
  return {
    revision,
    compress,
    uncompressedSize,
    gitVersion: cstr(bytes.subarray(16, 48)),
    title: revision >= 5 ? cstr(bytes.subarray(48, 48 + TITLE)) : "",
    body: bytes.subarray(head)
  };
}
function parsePpstName(name) {
  const m = /^([A-Z0-9]+)_([0-9.]*)_(\d+)\.ppst$/i.exec(name.replace(/^.*[\\/]/, ""));
  return m ? { id: m[1], version: m[2], slot: Number(m[3]) } : null;
}

// vendor/fzstd/fzstd.esm.js
var ab = ArrayBuffer;
var u82 = Uint8Array;
var u162 = Uint16Array;
var i16 = Int16Array;
var i322 = Int32Array;
var slc2 = function(v, s, e) {
  if (u82.prototype.slice)
    return u82.prototype.slice.call(v, s, e);
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  var n = new u82(e - s);
  n.set(v.subarray(s, e));
  return n;
};
var fill = function(v, n, s, e) {
  if (u82.prototype.fill)
    return u82.prototype.fill.call(v, n, s, e);
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  for (; s < e; ++s)
    v[s] = n;
  return v;
};
var cpw = function(v, t, s, e) {
  if (u82.prototype.copyWithin)
    return u82.prototype.copyWithin.call(v, t, s, e);
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  while (s < e) {
    v[t++] = v[s++];
  }
};
var ec2 = [
  "invalid zstd data",
  "window size too large (>2046MB)",
  "invalid block type",
  "FSE accuracy too high",
  "match distance too far back",
  "unexpected EOF"
];
var err2 = function(ind, msg, nt) {
  var e = new Error(msg || ec2[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err2);
  if (!nt)
    throw e;
  return e;
};
var rb = function(d, b, n) {
  var i = 0, o = 0;
  for (; i < n; ++i)
    o |= d[b++] << (i << 3);
  return o;
};
var b42 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var rzfh = function(dat, w) {
  var n3 = dat[0] | dat[1] << 8 | dat[2] << 16;
  if (n3 == 3126568 && dat[3] == 253) {
    var flg = dat[4];
    var ss = flg >> 5 & 1, cc = flg >> 2 & 1, df = flg & 3, fcf = flg >> 6;
    if (flg & 8)
      err2(0);
    var bt = 6 - ss;
    var db3 = df == 3 ? 4 : df;
    var di = rb(dat, bt, db3);
    bt += db3;
    var fsb = fcf ? 1 << fcf : ss;
    var fss = rb(dat, bt, fsb) + (fcf == 1 && 256);
    var ws = fss;
    if (!ss) {
      var wb = 1 << 10 + (dat[5] >> 3);
      ws = wb + (wb >> 3) * (dat[5] & 7);
    }
    if (ws > 2145386496)
      err2(1);
    var buf = new u82((w == 1 ? fss || ws : w ? 0 : ws) + 12);
    buf[0] = 1, buf[4] = 4, buf[8] = 8;
    return {
      b: bt + fsb,
      y: 0,
      l: 0,
      d: di,
      w: w && w != 1 ? w : buf.subarray(12),
      e: ws,
      o: new i322(buf.buffer, 0, 3),
      u: fss,
      c: cc,
      m: Math.min(131072, ws)
    };
  } else if ((n3 >> 4 | dat[3] << 20) == 25481893) {
    return b42(dat, 4) + 8;
  }
  err2(0);
};
var msb = function(val) {
  var bits2 = 0;
  for (; 1 << bits2 <= val; ++bits2)
    ;
  return bits2 - 1;
};
var rfse = function(dat, bt, mal) {
  var tpos = (bt << 3) + 4;
  var al = (dat[bt] & 15) + 5;
  if (al > mal)
    err2(3);
  var sz = 1 << al;
  var probs = sz, sym = -1, re = -1, i = -1, ht = sz;
  var buf = new ab(512 + (sz << 2));
  var freq = new i16(buf, 0, 256);
  var dstate = new u162(buf, 0, 256);
  var nstate = new u162(buf, 512, sz);
  var bb1 = 512 + (sz << 1);
  var syms = new u82(buf, bb1, sz);
  var nbits = new u82(buf, bb1 + sz);
  while (sym < 255 && probs > 0) {
    var bits2 = msb(probs + 1);
    var cbt = tpos >> 3;
    var msk = (1 << bits2 + 1) - 1;
    var val = (dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (tpos & 7) & msk;
    var msk1fb = (1 << bits2) - 1;
    var msv = msk - probs - 1;
    var sval = val & msk1fb;
    if (sval < msv)
      tpos += bits2, val = sval;
    else {
      tpos += bits2 + 1;
      if (val > msk1fb)
        val -= msv;
    }
    freq[++sym] = --val;
    if (val == -1) {
      probs += val;
      syms[--ht] = sym;
    } else
      probs -= val;
    if (!val) {
      do {
        var rbt = tpos >> 3;
        re = (dat[rbt] | dat[rbt + 1] << 8) >> (tpos & 7) & 3;
        tpos += 2;
        sym += re;
      } while (re == 3);
    }
  }
  if (sym > 255 || probs)
    err2(0);
  var sympos = 0;
  var sstep = (sz >> 1) + (sz >> 3) + 3;
  var smask = sz - 1;
  for (var s = 0; s <= sym; ++s) {
    var sf = freq[s];
    if (sf < 1) {
      dstate[s] = -sf;
      continue;
    }
    for (i = 0; i < sf; ++i) {
      syms[sympos] = s;
      do {
        sympos = sympos + sstep & smask;
      } while (sympos >= ht);
    }
  }
  if (sympos)
    err2(0);
  for (i = 0; i < sz; ++i) {
    var ns = dstate[syms[i]]++;
    var nb = nbits[i] = al - msb(ns);
    nstate[i] = (ns << nb) - sz;
  }
  return [tpos + 7 >> 3, {
    b: al,
    s: syms,
    n: nbits,
    t: nstate
  }];
};
var rhu = function(dat, bt) {
  var i = 0, wc = -1;
  var buf = new u82(292), hb = dat[bt];
  var hw = buf.subarray(0, 256);
  var rc = buf.subarray(256, 268);
  var ri = new u162(buf.buffer, 268);
  if (hb < 128) {
    var _a2 = rfse(dat, bt + 1, 6), ebt = _a2[0], fdt2 = _a2[1];
    bt += hb;
    var epos = ebt << 3;
    var lb = dat[bt];
    if (!lb)
      err2(0);
    var st1 = 0, st2 = 0, btr1 = fdt2.b, btr2 = btr1;
    var fpos = (++bt << 3) - 8 + msb(lb);
    for (; ; ) {
      fpos -= btr1;
      if (fpos < epos)
        break;
      var cbt = fpos >> 3;
      st1 += (dat[cbt] | dat[cbt + 1] << 8) >> (fpos & 7) & (1 << btr1) - 1;
      hw[++wc] = fdt2.s[st1];
      fpos -= btr2;
      if (fpos < epos)
        break;
      cbt = fpos >> 3;
      st2 += (dat[cbt] | dat[cbt + 1] << 8) >> (fpos & 7) & (1 << btr2) - 1;
      hw[++wc] = fdt2.s[st2];
      btr1 = fdt2.n[st1];
      st1 = fdt2.t[st1];
      btr2 = fdt2.n[st2];
      st2 = fdt2.t[st2];
    }
    if (++wc > 255)
      err2(0);
  } else {
    wc = hb - 127;
    for (; i < wc; i += 2) {
      var byte = dat[++bt];
      hw[i] = byte >> 4;
      hw[i + 1] = byte & 15;
    }
    ++bt;
  }
  var wes = 0;
  for (i = 0; i < wc; ++i) {
    var wt = hw[i];
    if (wt > 11)
      err2(0);
    wes += wt && 1 << wt - 1;
  }
  var mb3 = msb(wes) + 1;
  var ts = 1 << mb3;
  var rem = ts - wes;
  if (rem & rem - 1)
    err2(0);
  hw[wc++] = msb(rem) + 1;
  for (i = 0; i < wc; ++i) {
    var wt = hw[i];
    ++rc[hw[i] = wt && mb3 + 1 - wt];
  }
  var hbuf = new u82(ts << 1);
  var syms = hbuf.subarray(0, ts), nb = hbuf.subarray(ts);
  ri[mb3] = 0;
  for (i = mb3; i > 0; --i) {
    var pv = ri[i];
    fill(nb, i, pv, ri[i - 1] = pv + rc[i] * (1 << mb3 - i));
  }
  if (ri[0] != ts)
    err2(0);
  for (i = 0; i < wc; ++i) {
    var bits2 = hw[i];
    if (bits2) {
      var code = ri[bits2];
      fill(syms, i, code, ri[bits2] = code + (1 << mb3 - bits2));
    }
  }
  return [bt, {
    n: nb,
    b: mb3,
    s: syms
  }];
};
var dllt = rfse(/* @__PURE__ */ new u82([
  81,
  16,
  99,
  140,
  49,
  198,
  24,
  99,
  12,
  33,
  196,
  24,
  99,
  102,
  102,
  134,
  70,
  146,
  4
]), 0, 6)[1];
var dmlt = rfse(/* @__PURE__ */ new u82([
  33,
  20,
  196,
  24,
  99,
  140,
  33,
  132,
  16,
  66,
  8,
  33,
  132,
  16,
  66,
  8,
  33,
  68,
  68,
  68,
  68,
  68,
  68,
  68,
  68,
  36,
  9
]), 0, 6)[1];
var doct = rfse(/* @__PURE__ */ new u82([
  32,
  132,
  16,
  66,
  102,
  70,
  68,
  68,
  68,
  68,
  36,
  73,
  2
]), 0, 5)[1];
var b2bl = function(b, s) {
  var len = b.length, bl = new i322(len);
  for (var i = 0; i < len; ++i) {
    bl[i] = s;
    s += 1 << b[i];
  }
  return bl;
};
var llb = /* @__PURE__ */ new u82((/* @__PURE__ */ new i322([
  0,
  0,
  0,
  0,
  16843009,
  50528770,
  134678020,
  202050057,
  269422093
])).buffer, 0, 36);
var llbl = /* @__PURE__ */ b2bl(llb, 0);
var mlb = /* @__PURE__ */ new u82((/* @__PURE__ */ new i322([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  16843009,
  50528770,
  117769220,
  185207048,
  252579084,
  16
])).buffer, 0, 53);
var mlbl = /* @__PURE__ */ b2bl(mlb, 3);
var dhu = function(dat, out, hu) {
  var len = dat.length, ss = out.length, lb = dat[len - 1], msk = (1 << hu.b) - 1, eb = -hu.b;
  if (!lb)
    err2(0);
  var st = 0, btr = hu.b, pos = (len << 3) - 8 + msb(lb) - btr, i = -1;
  for (; pos > eb && i < ss; ) {
    var cbt = pos >> 3;
    var val = (dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (pos & 7);
    st = (st << btr | val) & msk;
    out[++i] = hu.s[st];
    pos -= btr = hu.n[st];
  }
  if (pos != eb || i + 1 != ss)
    err2(0);
};
var dhu4 = function(dat, out, hu) {
  var bt = 6;
  var ss = out.length, sz1 = ss + 3 >> 2, sz2 = sz1 << 1, sz3 = sz1 + sz2;
  dhu(dat.subarray(bt, bt += dat[0] | dat[1] << 8), out.subarray(0, sz1), hu);
  dhu(dat.subarray(bt, bt += dat[2] | dat[3] << 8), out.subarray(sz1, sz2), hu);
  dhu(dat.subarray(bt, bt += dat[4] | dat[5] << 8), out.subarray(sz2, sz3), hu);
  dhu(dat.subarray(bt), out.subarray(sz3), hu);
};
var rzb = function(dat, st, out) {
  var _a2;
  var bt = st.b;
  var b0 = dat[bt], btype = b0 >> 1 & 3;
  st.l = b0 & 1;
  var sz = b0 >> 3 | dat[bt + 1] << 5 | dat[bt + 2] << 13;
  var ebt = (bt += 3) + sz;
  if (btype == 1) {
    if (bt >= dat.length)
      return;
    st.b = bt + 1;
    if (out) {
      fill(out, dat[bt], st.y, st.y += sz);
      return out;
    }
    return fill(new u82(sz), dat[bt]);
  }
  if (ebt > dat.length)
    return;
  if (btype == 0) {
    st.b = ebt;
    if (out) {
      out.set(dat.subarray(bt, ebt), st.y);
      st.y += sz;
      return out;
    }
    return slc2(dat, bt, ebt);
  }
  if (btype == 2) {
    var b3 = dat[bt], lbt = b3 & 3, sf = b3 >> 2 & 3;
    var lss = b3 >> 4, lcs = 0, s4 = 0;
    if (lbt < 2) {
      if (sf & 1)
        lss |= dat[++bt] << 4 | (sf & 2 && dat[++bt] << 12);
      else
        lss = b3 >> 3;
    } else {
      s4 = sf;
      if (sf < 2)
        lss |= (dat[++bt] & 63) << 4, lcs = dat[bt] >> 6 | dat[++bt] << 2;
      else if (sf == 2)
        lss |= dat[++bt] << 4 | (dat[++bt] & 3) << 12, lcs = dat[bt] >> 2 | dat[++bt] << 6;
      else
        lss |= dat[++bt] << 4 | (dat[++bt] & 63) << 12, lcs = dat[bt] >> 6 | dat[++bt] << 2 | dat[++bt] << 10;
    }
    ++bt;
    var buf = out ? out.subarray(st.y, st.y + st.m) : new u82(st.m);
    var spl = buf.length - lss;
    if (lbt == 0)
      buf.set(dat.subarray(bt, bt += lss), spl);
    else if (lbt == 1)
      fill(buf, dat[bt++], spl);
    else {
      var hu = st.h;
      if (lbt == 2) {
        var hud = rhu(dat, bt);
        lcs += bt - (bt = hud[0]);
        st.h = hu = hud[1];
      } else if (!hu)
        err2(0);
      (s4 ? dhu4 : dhu)(dat.subarray(bt, bt += lcs), buf.subarray(spl), hu);
    }
    var ns = dat[bt++];
    if (ns) {
      if (ns == 255)
        ns = (dat[bt++] | dat[bt++] << 8) + 32512;
      else if (ns > 127)
        ns = ns - 128 << 8 | dat[bt++];
      var scm = dat[bt++];
      if (scm & 3)
        err2(0);
      var dts = [dmlt, doct, dllt];
      for (var i = 2; i > -1; --i) {
        var md = scm >> (i << 1) + 2 & 3;
        if (md == 1) {
          var rbuf = new u82([0, 0, dat[bt++]]);
          dts[i] = {
            s: rbuf.subarray(2, 3),
            n: rbuf.subarray(0, 1),
            t: new u162(rbuf.buffer, 0, 1),
            b: 0
          };
        } else if (md == 2) {
          _a2 = rfse(dat, bt, 9 - (i & 1)), bt = _a2[0], dts[i] = _a2[1];
        } else if (md == 3) {
          if (!st.t)
            err2(0);
          dts[i] = st.t[i];
        }
      }
      var _b2 = st.t = dts, mlt = _b2[0], oct = _b2[1], llt = _b2[2];
      var lb = dat[ebt - 1];
      if (!lb)
        err2(0);
      var spos = (ebt << 3) - 8 + msb(lb) - llt.b, cbt = spos >> 3, oubt = 0;
      var lst = (dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << llt.b) - 1;
      cbt = (spos -= oct.b) >> 3;
      var ost = (dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << oct.b) - 1;
      cbt = (spos -= mlt.b) >> 3;
      var mst = (dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << mlt.b) - 1;
      for (++ns; --ns; ) {
        var llc = llt.s[lst];
        var lbtr = llt.n[lst];
        var mlc = mlt.s[mst];
        var mbtr = mlt.n[mst];
        var ofc = oct.s[ost];
        var obtr = oct.n[ost];
        cbt = (spos -= ofc) >> 3;
        var ofp = 1 << ofc;
        var off = ofp + ((dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16 | dat[cbt + 3] << 24) >>> (spos & 7) & ofp - 1);
        cbt = (spos -= mlb[mlc]) >> 3;
        var ml = mlbl[mlc] + ((dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (spos & 7) & (1 << mlb[mlc]) - 1);
        cbt = (spos -= llb[llc]) >> 3;
        var ll = llbl[llc] + ((dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (spos & 7) & (1 << llb[llc]) - 1);
        cbt = (spos -= lbtr) >> 3;
        lst = llt.t[lst] + ((dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << lbtr) - 1);
        cbt = (spos -= mbtr) >> 3;
        mst = mlt.t[mst] + ((dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << mbtr) - 1);
        cbt = (spos -= obtr) >> 3;
        ost = oct.t[ost] + ((dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << obtr) - 1);
        if (off > 3) {
          st.o[2] = st.o[1];
          st.o[1] = st.o[0];
          st.o[0] = off -= 3;
        } else {
          var idx = off - (ll != 0);
          if (idx) {
            off = idx == 3 ? st.o[0] - 1 : st.o[idx];
            if (idx > 1)
              st.o[2] = st.o[1];
            st.o[1] = st.o[0];
            st.o[0] = off;
          } else
            off = st.o[0];
        }
        for (var i = 0; i < ll; ++i) {
          buf[oubt + i] = buf[spl + i];
        }
        oubt += ll, spl += ll;
        var stin = oubt - off;
        if (stin < 0) {
          var len = -stin;
          var bs = st.e + stin;
          if (len > ml)
            len = ml;
          for (var i = 0; i < len; ++i) {
            buf[oubt + i] = st.w[bs + i];
          }
          oubt += len, ml -= len, stin = 0;
        }
        for (var i = 0; i < ml; ++i) {
          buf[oubt + i] = buf[stin + i];
        }
        oubt += ml;
      }
      if (oubt != spl) {
        while (spl < buf.length) {
          buf[oubt++] = buf[spl++];
        }
      } else
        oubt = buf.length;
      if (out)
        st.y += oubt;
      else
        buf = slc2(buf, 0, oubt);
    } else if (out) {
      st.y += lss;
      if (spl) {
        for (var i = 0; i < lss; ++i) {
          buf[i] = buf[spl + i];
        }
      }
    } else if (spl)
      buf = slc2(buf, spl);
    st.b = ebt;
    return buf;
  }
  err2(2);
};
var cct = function(bufs, ol) {
  if (bufs.length == 1)
    return bufs[0];
  var buf = new u82(ol);
  for (var i = 0, b = 0; i < bufs.length; ++i) {
    var chk = bufs[i];
    buf.set(chk, b);
    b += chk.length;
  }
  return buf;
};
function decompress(dat, buf) {
  var bufs = [], nb = +!buf;
  var bt = 0, ol = 0;
  for (; dat.length; ) {
    var st = rzfh(dat, nb || buf);
    if (typeof st == "object") {
      if (nb) {
        buf = null;
        if (st.w.length == st.u) {
          bufs.push(buf = st.w);
          ol += st.u;
        }
      } else {
        bufs.push(buf);
        st.e = 0;
      }
      for (; !st.l; ) {
        var blk = rzb(dat, st, buf);
        if (!blk)
          err2(5);
        if (buf)
          st.e = st.y;
        else {
          bufs.push(blk);
          ol += blk.length;
          cpw(st.w, 0, blk.length);
          st.w.set(blk, st.w.length - blk.length);
        }
      }
      bt = st.b + st.c * 4;
    } else
      bt = st;
    dat = dat.subarray(bt);
  }
  return cct(bufs, ol);
}

// src/app/snapshots.ts
var LOCAL_WAIT_MS = 4e3;
var MANUAL_PUSH_DELAY_MS = 2e4;
var HISTORY_MIN_AGE_MS = 10 * 6e4;
function setHistoryMinAgeForTest(ms) {
  HISTORY_MIN_AGE_MS = ms;
}
var pushHook = () => {
};
function setSnapshotPushHook(fn) {
  pushHook = fn;
}
var writer = createSlotWriter({
  writeLocal,
  pushSoon: () => pushHook(),
  background: () => inBackground(),
  log: (level, text) => logEvent(level, text),
  label: (id) => labelFor(id)
});
var fpSame = (saved, now) => !!saved && fpCompatible(saved, now);
function workingSetOf(disc) {
  const ranges = disc.prefetcher?.workingSet() ?? [];
  return ranges.length && disc.rawSize ? { ws: ranges.flatMap((r) => [r.offset, r.length]), wsz: disc.rawSize } : {};
}
var slotLabel = (s) => s.kind === "h" ? `\u5386\u53F2 ${new Date(s.n).toLocaleString()}` : `${s.kind === "s" ? "\u624B\u52A8" : "\u81EA\u52A8"} ${s.n}`;
var Snapshots = class {
  constructor(session2, disc, verbs, onChange) {
    this.session = session2;
    this.disc = disc;
    this.verbs = verbs;
    this.onChange = onChange;
    void (async () => {
      const lg = await getGuard("load", disc.key).catch(() => void 0);
      if (lg && !this.undoLoadState) this.undoLoadState = { state: null, label: lg.label };
      const sg = await getGuard("save", disc.key).catch(() => void 0);
      if (sg && !this.undoSaveInfo) this.undoSaveInfo = { id: sg.id, label: sg.label, old: sg.old ? new Uint8Array(await sg.old.arrayBuffer()) : null, newAt: sg.newAt };
      onChange();
    })();
    this.off = this.subscribe(onChange);
  }
  slots = [];
  all = [];
  busy = false;
  playedSinceSnap = 0;
  metaCache = /* @__PURE__ */ new Map();
  healTried = false;
  /** 这一页从别的代号接过来的格子：不许被这一页接下来的存档盖掉。 */
  adopted = /* @__PURE__ */ new Set();
  // ── 撤销两道护栏（照 PPSSPP 的 Undo last save / Undo last load，各一层，全局一份）。added 20261014 by Claude Opus 5.5
  //   跨重启：存在本机 IDB，全局各一份（undo-guard.ts；user 10-14「undo护栏放idb就行了，不是正式文件，只是护栏」「是不是应该全局一份就行了？」）；这一页里内存也留一份，撤得快。
  /** 撤销读档：读档前那一刻的整机状态（state = 这一页内存里的原样；没有 = 重启后只剩 IDB 里封好的那份）。 */
  undoLoadState = null;
  /** 撤销存档：刚存的是哪一格；old = 覆盖前原来那份（封好的字节），null = 刚才是存了新的一格；newAt = 刚存那份的存档时刻。 */
  undoSaveInfo = null;
  /** 面板上「撤销」按钮的说明；没有可撤的 = null。 */
  get undoLoadText() {
    return this.undoLoadState ? `\u64A4\u9500\u8BFB\u6863\uFF08\u56DE\u5230\u8BFB\u300C${this.undoLoadState.label}\u300D\u4E4B\u524D\uFF09` : null;
  }
  get undoSaveText() {
    const u = this.undoSaveInfo;
    return !u ? null : u.old ? `\u64A4\u9500\u5B58\u6863\uFF08\u300C${u.label}\u300D\u6362\u56DE\u539F\u6765\u90A3\u4EFD\uFF09` : `\u64A4\u9500\u5B58\u6863\uFF08\u521A\u5B58\u7684\u300C${u.label}\u300D\u79FB\u5230\u56DE\u6536\u7AD9\uFF09`;
  }
  off;
  /** 收到过权威（云端完整）帧没有：「接着玩」要等它，不然另一台设备新存的格子还没出现在列表里。 */
  listComplete = false;
  completeWaiters = [];
  /** 收到过任何一帧没有（本机帧也算）：没登录 / 离线续玩至少要等它，不然列表是空的（10-14 流程测试抓到：v0.1.6 起离线「继续」= 从头开始）。 */
  gotFrame = false;
  frameWaiters = [];
  subscribe(onChange) {
    return watchSlots(this.disc.key, (slots, all, complete) => {
      this.slots = slots;
      this.all = all;
      for (const s of slots) setLabel(s.id, `\u5FEB\u7167\uFF08${slotLabel(s)}\uFF0C${this.disc.title}\uFF09`);
      this.gotFrame = true;
      for (const w of this.frameWaiters.splice(0)) w();
      if (complete) {
        this.listComplete = true;
        for (const w of this.completeWaiters.splice(0)) w();
      }
      onChange();
      if (complete) void this.tryHeal();
    });
  }
  /** 重列一次（退订再订 = store 重新列云端）：打开快照面板、回到前台时调。游戏开着时 store 不会自己重列，别的设备后来存 / 补传的格子这一局看不到
   *  （10-15 分析报告 §3：Quest 先开了游戏、iPad 回前台才补传的手动 1）。W-26。 */
  refresh() {
    const onChange = this.onChange;
    this.off();
    this.off = this.subscribe(onChange);
  }
  /** 「接着玩」：等云端完整帧（waitCloud 时，最多 timeoutMs），再读每一格的元数据按存档时刻 at 选最新（resume.ts 的不变量）。
   *  partial = 没等到云端帧，选的是这台设备上看得到的最新一份。 */
  async newestForResume(opts) {
    const t0 = performance.now();
    if (!this.gotFrame) {
      await Promise.race([new Promise((r) => this.frameWaiters.push(r)), new Promise((r) => setTimeout(r, 5e3))]);
    }
    const tFrame = performance.now();
    if (opts.waitCloud && !this.listComplete) {
      await Promise.race([
        new Promise((r) => this.completeWaiters.push(r)),
        new Promise((r) => setTimeout(r, opts.timeoutMs ?? 1e4))
      ]);
    }
    const tCloud = performance.now();
    const partial = opts.waitCloud && !this.listComplete;
    const filled = this.slots.filter((s) => s.savedAt);
    if (!filled.length) return null;
    const pw = await this.verbs.password("\u5FEB\u7167");
    const tPw = performance.now();
    const cands = filled.map((s) => ({ item: s, savedAt: s.savedAt }));
    if (pw) {
      let next = 0;
      const worker = async () => {
        while (next < cands.length) {
          const c = cands[next++];
          const meta = await this.peek(c.item);
          if (meta?.at) c.at = meta.at;
        }
      };
      await Promise.all(Array.from({ length: Math.min(4, cands.length) }, worker));
    }
    const slot = pickNewest(cands);
    logEvent("info", `\u7EED\u73A9\u9009\u683C\uFF1A${slot ? `${slotLabel(slot)}\uFF08at ${new Date(cands.find((c) => c.item === slot)?.at ?? slot.savedAt ?? 0).toLocaleString()}\uFF09` : "\u6CA1\u6709"}\uFF0C\u5019\u9009 ${cands.length}\uFF0C\u4E91\u7AEF\u5E27${this.listComplete ? "\u5230\u4E86" : "\u6CA1\u7B49\u5230"}`);
    console.info(`[resume] first frame ${(tFrame - t0).toFixed(0)} ms \xB7 cloud frame ${(tCloud - tFrame).toFixed(0)} ms \xB7 password ${(tPw - tCloud).toFixed(0)} ms \xB7 peek ${cands.length} slots ${(performance.now() - tPw).toFixed(0)} ms`);
    return slot ? { slot, partial } : null;
  }
  dispose() {
    this.off();
  }
  /** 自愈只试一次，但要等到「列表完整 + 这一页有口令」（明文盘一开始没有口令，第一次存快照时才有）。 */
  tryHeal() {
    if (this.healTried || !this.verbs.knownPassword()) return Promise.resolve();
    this.healTried = true;
    return this.heal().catch((e) => console.warn("[heal]", e));
  }
  newest() {
    return this.slots.filter((s) => s.savedAt).sort((a, b) => b.savedAt - a.savedAt)[0] ?? null;
  }
  /** 手动快照不设上限：新一格的号 = 现有最大号 + 1。 */
  nextManualSlot() {
    const n = Math.max(0, ...this.slots.filter((s) => s.kind === "s").map((s) => s.n)) + 1;
    return { id: crumbId(this.disc.key, "s", n), kind: "s", n, savedAt: null, local: false };
  }
  /** 存一格。auto = 自动存的（存不了就算了，不打扰人）。 */
  async save(kind, n, auto = false) {
    if (this.busy) {
      if (auto) return;
      throw new Error("\u4E0A\u4E00\u4E2A\u5FEB\u7167\u8FD8\u5728\u5B58\uFF0C\u7B49\u4E00\u4E0B\u518D\u5B58");
    }
    this.busy = true;
    let label = slotLabel({ kind, n });
    beginLocal(`${auto ? "\u81EA\u52A8\u5FEB\u7167" : `\u5FEB\u7167\u300C${label}\u300D`}`);
    try {
      const { state: state2, frame: frame2 } = await this.session.snapshot();
      this.playedSinceSnap = 0;
      const pw = auto ? this.verbs.knownPassword() ?? await this.verbs.password("\u5FEB\u7167") : await this.verbs.password("\u5FEB\u7167");
      if (!pw) return;
      let thumb;
      try {
        if (frame2) thumb = await this.verbs.encodeThumbnail(frame2.rgba, frame2.w, frame2.h);
      } catch (e) {
        console.warn("[thumb]", e);
      }
      await this.tryHeal();
      if (this.adopted.has(crumbId(this.disc.key, kind, n))) {
        if (!auto) {
          this.verbs.say(`\u521A\u63A5\u4E0A\u7684\u5FEB\u7167\u653E\u5728\u300C${label}\u300D\uFF0C\u6CA1\u8986\u76D6\u5B83\u3002\u6362\u4E00\u683C\u518D\u5B58\u3002`, 8e3);
          return;
        }
        const alt = this.pickAutoSlot();
        if (!alt) return;
        n = alt.n;
        label = slotLabel({ kind, n });
      }
      let old = null, oldAt = 0, oldMine = false;
      const mine = !auto && kind === "s" ? writer.latest(crumbId(this.disc.key, kind, n)) : null;
      if (mine) {
        old = mine.bytes;
        oldAt = mine.at;
        oldMine = true;
      } else if (!auto && kind === "s" && this.slots.some((x) => x.kind === "s" && x.n === n && x.savedAt)) {
        const existing = this.slots.find((x) => x.kind === "s" && x.n === n);
        oldAt = (await this.peek(existing).catch(() => null))?.at ?? existing.savedAt ?? Date.now();
        old = await readSealed(crumbId(this.disc.key, kind, n)).catch(() => null);
        if (!old) {
          const fresh = this.nextManualSlot();
          this.verbs.say(`\u62FF\u4E0D\u5230\u300C${label}\u300D\u539F\u6765\u90A3\u4EFD\uFF08\u79BB\u7EBF\uFF1F\uFF09\uFF0C\u6CA1\u8986\u76D6\u5B83\uFF0C\u5B58\u6210\u4E86\u65B0\u7684\u300C${slotLabel(fresh)}\u300D`, 8e3);
          n = fresh.n;
          label = slotLabel(fresh);
        }
      }
      if (auto && this.slots.some((x) => x.kind === "a" && x.n === n && x.savedAt) && !await ensureLineage(crumbId(this.disc.key, kind, n))) {
        console.info("[auto snapshot] skipped: slot", n, "is cloud-only and unreachable");
        return;
      }
      const id = crumbId(this.disc.key, kind, n);
      const at = Date.now();
      const sealed = await sealSnapshot(state2, { thumb, at, auto, fp: this.disc.fp, title: this.disc.title, ...workingSetOf(this.disc) }, pw);
      const { local: local2 } = writer.commit(id, sealed, { at, pushAfterMs: auto ? 0 : MANUAL_PUSH_DELAY_MS });
      this.metaCache.delete(id);
      const landed = await withDeadline(local2, LOCAL_WAIT_MS, (late) => {
        if (!late.ok && auto) this.leaveFailed = true;
        logEvent(late.ok ? "info" : "warn", late.ok ? `\u300C${label}\u300D\u6392\u7740\u7684\u90A3\u4EFD\u843D\u5230\u8FD9\u53F0\u8BBE\u5907\u4E86` : `\u300C${label}\u300D\u6392\u7740\u7684\u90A3\u4EFD\u6CA1\u843D\u5230\u8FD9\u53F0\u8BBE\u5907\uFF1A${String(late.error)}`);
      });
      if (landed === "timeout") {
        logEvent("info", `\u5B58\u300C${label}\u300D\uFF1A\u8FD9\u4E00\u683C\u6B63\u5728\u4F20\u4E0A\u4E00\u4EFD\uFF0C\u65B0\u7684\u4E00\u4EFD\u6392\u7740\uFF0C\u4F20\u5B8C\u5C31\u843D\u5230\u8FD9\u53F0\u8BBE\u5907`);
        this.verbs.say(`\u300C${label}\u300D\u6536\u4E0B\u4E86\uFF1A\u8FD9\u4E00\u683C\u8FD8\u5728\u4F20\u4E0A\u4E00\u4EFD\uFF0C\u4F20\u5B8C\u9A6C\u4E0A\u5199\u8FDB\u8FD9\u53F0\u8BBE\u5907\uFF08\u53EF\u4EE5\u63A5\u7740\u73A9\uFF09`, 6e3);
      } else logEvent("info", `\u5B58\u300C${label}\u300D\uFF1A\u843D\u5230\u8FD9\u53F0\u8BBE\u5907\u4E86${auto ? "" : `\uFF0C${MANUAL_PUSH_DELAY_MS / 1e3} s \u540E\u4F20\uFF08\u671F\u95F4\u518D\u5B58\u53EA\u4F20\u6700\u540E\u4E00\u4EFD\uFF09`}`);
      if (old && oldMine && at - oldAt < HISTORY_MIN_AGE_MS) logEvent("info", `\u5386\u53F2\uFF1A\u88AB\u76D6\u6389\u7684\u300C${label}\u300D\u662F\u8FD9\u4E00\u9875 ${Math.round((at - oldAt) / 1e3)} s \u524D\u521A\u5B58\u7684\u4E2D\u95F4\u6001\uFF0C\u4E0D\u53E6\u7559\uFF08\u4E0A\u4E00\u4EFD\u80FD\u64A4\u9500\uFF09`);
      else if (old) void this.keepHistory(old, oldAt);
      if (!auto) {
        this.undoSaveInfo = { id, label, old, newAt: at };
        putGuard({ kind: "save", discKey: this.disc.key, id, label, old: old ? new Blob([old]) : null, newAt: at, at }).catch((e) => console.warn("[undo-guard] save", e));
      }
    } finally {
      endLocal();
      this.busy = false;
    }
  }
  /** 退出前：排着还没落本机的那几份落完（W-42）。 */
  drainWrites() {
    return writer.drain();
  }
  /** 续推之后（main.ts pushDirty）：传上去的快照只留最新几份本机副本（以前是每格推完立刻收拾）。 */
  afterPush() {
    tidyLocalSnapshots(this.slots, this.history()).catch((e) => console.warn("[tidy]", e));
  }
  /** 导入 PC 版 PPSSPP 的快照（W-7）：存成**新的**一格手动快照，不覆盖任何格。added 20261014 by Claude Opus 5.5
   *  放在哪 = 文件名里的盘号 + 版本算出的游戏身份代号（和开同一张盘算出来的一样）：是开着的这张盘 → 这张盘的格子、记上盘指纹（读档护栏照常）；
   *  不是 → 先问人，导 = 放进那个游戏自己的快照里（开那张盘时看得到），不记指纹（不知道那张盘多大）。
   *  存档时刻 = 那个文件的修改时间（PPSSPP 存的那一刻）；jpg = PPSSPP 同名截图，有就缩成缩略图（壳注入的 shrinkImage）。 */
  async importPpst(ppst, jpg) {
    const name = parsePpstName(ppst.name);
    if (!name || !name.id) throw new Error(`\u300C${ppst.name}\u300D\u4E0D\u50CF PPSSPP \u7684\u5FEB\u7167\u6587\u4EF6\u540D\uFF08\u5E94\u8BE5\u662F \u76D8\u53F7_\u7248\u672C_\u683C.ppst\uFF09`);
    const file = parsePpst(ppst.bytes);
    let state2;
    if (file.compress === PPST_COMPRESS.none) state2 = file.body;
    else if (file.compress === PPST_COMPRESS.zstd) state2 = decompress(file.body);
    else throw new Error("\u8FD9\u662F\u8001\u7248\u672C PPSSPP \u7684\u538B\u7F29\u683C\u5F0F\uFF08snappy\uFF09\uFF0C\u8BFB\u4E0D\u4E86\uFF1B\u5728 PC \u4E0A\u7528\u65B0\u7248 PPSSPP \u8BFB\u4E00\u6B21\u518D\u5B58\u4E00\u6B21");
    if (state2.length !== file.uncompressedSize) throw new Error(`\u89E3\u5F00\u540E ${state2.length} \u5B57\u8282\uFF0C\u6587\u4EF6\u5934\u8BF4 ${file.uncompressedSize}\uFF1A\u6587\u4EF6\u53EF\u80FD\u574F\u4E86\uFF0C\u6CA1\u5BFC\u5165`);
    const key = await gameKey({ k: PLATFORM_CODE.psp, id: name.id, v: name.version || void 0, size: 0 });
    const here = key === this.disc.key;
    const game = `${file.title || name.id}\uFF08${name.id}${name.version ? ` v${name.version}` : ""}\uFF09`;
    if (!here && !await this.verbs.confirmImportElsewhere(game)) return;
    if (this.busy) throw new Error("\u4E0A\u4E00\u4E2A\u5FEB\u7167\u8FD8\u5728\u5B58\uFF0C\u7B49\u4E00\u4E0B\u518D\u5BFC\u5165");
    this.busy = true;
    const n = here ? this.nextManualSlot().n : Math.max(0, ...this.all.filter((c) => c.key === key && c.kind === "s").map((c) => c.n)) + 1;
    const label = slotLabel({ kind: "s", n });
    beginLocal(`\u5BFC\u5165\u5FEB\u7167\u300C${label}\u300D`);
    try {
      const pw = await this.verbs.password("\u5BFC\u5165\u5FEB\u7167");
      if (!pw) return;
      let thumb;
      if (jpg) try {
        thumb = await this.verbs.shrinkImage(jpg);
      } catch (e) {
        console.warn("[thumb]", e);
      }
      await saveSnapshot(crumbId(key, "s", n), state2, { thumb, at: ppst.lastModified, auto: false, fp: here ? this.disc.fp : void 0, title: here ? this.disc.title : file.title || name.id }, pw);
      this.verbs.say(`\u5DF2\u5BFC\u5165${here ? "" : `\u5230 ${game} \u7684\u5FEB\u7167\u91CC\uFF0C`}\u6210\u300C${label}\u300D\uFF08PPSSPP ${file.gitVersion} \u5B58\u4E8E ${new Date(ppst.lastModified).toLocaleString()}\uFF09`, 8e3);
    } finally {
      endLocal();
      this.busy = false;
    }
  }
  /** 这张盘的历史份（手动覆盖时被盖掉的），新的在前。 */
  history() {
    return this.all.filter((c) => c.key === this.disc.key && c.kind === "h").sort((a, b) => b.n - a.n);
  }
  /** 把被盖掉的那份存成历史（新文件，不留本机副本），多出 HISTORY_KEEP 的最老的进回收站。user 10-15「手动覆盖时，被盖的那份自动留进「历史」，保留最近 3 份 同意」。 */
  async keepHistory(sealed, at) {
    const id = crumbId(this.disc.key, "h", at || Date.now());
    try {
      if (this.all.some((c) => c.id === id)) return;
      await putSealed(id, sealed);
      logEvent("info", `\u5386\u53F2\uFF1A\u7559\u4E0B\u88AB\u76D6\u6389\u7684\u90A3\u4EFD\uFF08\u5B58\u4E8E ${new Date(at).toLocaleString()}\uFF09`);
      for (const h2 of this.history().filter((c) => c.id !== id).slice(HISTORY_KEEP - 1)) {
        logEvent("info", `\u5386\u53F2\uFF1A\u8D85\u8FC7 ${HISTORY_KEEP} \u4EFD\uFF0C\u6700\u8001\u7684\u8FDB\u56DE\u6536\u7AD9\uFF08${slotLabel(h2)}\uFF09`);
        await deleteSnapshot(h2.id).catch((e) => console.warn("[history]", e));
      }
    } catch (e) {
      logEvent("warn", `\u5386\u53F2\u4EFD\u6CA1\u5B58\u4E0A\uFF1A${String(e)}`);
    }
  }
  /** 自动快照：先填空格，满了覆盖最旧的（刚接上的不算）。 */
  async auto() {
    await this.tryHeal();
    const target = this.pickAutoSlot();
    if (target) await this.save("a", target.n, true);
  }
  /** 轮转选哪格：空格 → 本机有副本里最旧的（有谱系，直接盖）→ 只在云端的里最旧的（要先拉一次接谱系）。刚接上的格不盖。 */
  pickAutoSlot() {
    const autos = this.slots.filter((s) => s.kind === "a" && !this.adopted.has(s.id));
    const oldest = (xs) => xs.slice().sort((a, b) => a.savedAt - b.savedAt)[0] ?? null;
    return autos.find((s) => !s.savedAt) ?? oldest(autos.filter((s) => s.local)) ?? oldest(autos);
  }
  /** 每次刷新调：playedMs = 这一步里算「在玩」的毫秒（挂机判定 activity.ts 给；挂机 / 后台 / 暂停 = 0）。玩够 AUTO_EVERY_MS 就自动存。 */
  tick(playedMs) {
    if (playedMs <= 0) return;
    this.playedSinceSnap += playedMs;
    if (this.playedSinceSnap >= AUTO_EVERY_MS) this.auto().catch((e) => console.warn("[auto snapshot]", e));
  }
  /** 切到后台 / 退出前：离上次快照玩过一阵了就存一份。 */
  leaveFailed = false;
  async onLeave() {
    if (this.playedSinceSnap < AUTO_MIN_GAP_MS) return;
    try {
      await this.auto();
      this.leaveFailed = false;
    } catch (e) {
      this.leaveFailed = true;
      logEvent("warn", `\u79BB\u5F00\u65F6\u7684\u81EA\u52A8\u5FEB\u7167\u6CA1\u6210\uFF1A${String(e)}`);
      throw e;
    }
  }
  /** 回到前台：离开时那份自动快照没成（iOS 冻住页面让 IDB 写超时，10-15 日志「store：timeout」）就补一份。 */
  async onWake() {
    if (!this.leaveFailed) return;
    this.leaveFailed = false;
    logEvent("info", "\u79BB\u5F00\u65F6\u7684\u81EA\u52A8\u5FEB\u7167\u6CA1\u6210\uFF0C\u56DE\u6765\u8865\u4E00\u4EFD");
    await this.auto();
  }
  /** 读一格（这张盘的，或别的代号下的）。指纹对不上先问人；人说不读就返回 false。 */
  async load(slot) {
    const pw = await this.verbs.password("\u5FEB\u7167");
    if (!pw) return false;
    this.hintWorkingSet(slot, pw);
    const got = await loadSnapshot(slot.id, pw);
    if (!got) {
      this.verbs.say(`\u300C${slotLabel(slot)}\u300D\u662F\u7A7A\u7684`);
      return false;
    }
    if (got.verdict === "newer-minor" && toldOnce("crumb")) this.verbs.say(newerMinorText("crumb", got.stamp));
    if (!fpCompatible(got.meta.fp, this.disc.fp) && !await this.verbs.confirmMismatch()) return false;
    const before = this.session.readyForSnapshot() ? await this.session.snapshot().catch(() => null) : null;
    await this.session.restore(got.state);
    if (before) this.undoLoadState = { state: before.state, label: slotLabel(slot) };
    else logEvent("info", `\u8BFB\u300C${slotLabel(slot)}\u300D\uFF1A\u521A\u5F00\u76D8\uFF0C\u6CA1\u62CD\u64A4\u9500\u62A4\u680F${this.undoLoadState ? "\uFF08\u4FDD\u7559\u4E0A\u4E00\u4EFD\uFF09" : ""}`);
    if (before) {
      const label = slotLabel(slot);
      void sealBytes(pw, before.state, { compress: true }).then((sealed) => putGuard({ kind: "load", discKey: this.disc.key, sealed: new Blob([sealed]), label, at: Date.now() })).catch((e) => console.warn("[undo-guard] load", e));
    }
    this.playedSinceSnap = 0;
    this.verbs.say(`\u5DF2\u8BFB\u300C${slotLabel(slot)}\u300D`);
    return true;
  }
  /** 撤销读档：回到读档前那一刻（一层）。这一页内存里有就直接用；重启过就从本机 IDB 读封好的那份。 */
  async undoLastLoad() {
    const u = this.undoLoadState;
    if (!u) return;
    let state2 = u.state;
    if (!state2) {
      const g = await getGuard("load", this.disc.key);
      const pw = await this.verbs.password("\u5FEB\u7167");
      if (!g || !pw) {
        this.verbs.say("\u64A4\u9500\u8BFB\u6863\u7684\u90A3\u4EFD\u4E0D\u5728\u4E86");
        this.undoLoadState = null;
        return;
      }
      state2 = (await unsealBytes(pw, new Uint8Array(await g.sealed.arrayBuffer()))).plain;
    }
    this.undoLoadState = null;
    await this.session.restore(state2);
    deleteGuard("load", this.disc.key).catch(() => {
    });
    this.verbs.say(`\u5DF2\u64A4\u9500\u8BFB\u6863\uFF1A\u56DE\u5230\u8BFB\u300C${u.label}\u300D\u4E4B\u524D`);
  }
  /** 撤销存档（一层）：覆盖的 → 原来那份写回这一格，刚存的那份挪到新的一格（两份都不丢）；存新的一格的 → 那格移到回收站。 */
  async undoLastSave() {
    const u = this.undoSaveInfo;
    if (!u) return;
    if (this.busy) throw new Error("\u8FD8\u5728\u5B58\uFF0C\u7B49\u4E00\u4E0B\u518D\u64A4\u9500");
    this.undoSaveInfo = null;
    deleteGuard("save", this.disc.key).catch(() => {
    });
    const pw = this.verbs.knownPassword() ?? await this.verbs.password("\u5FEB\u7167");
    const now = pw ? await peekSnapshot(u.id, pw).catch(() => null) : null;
    if (now?.at !== u.newAt) {
      if (u.old) {
        const fresh = this.nextManualSlot();
        await putSealed(fresh.id, u.old);
        this.verbs.say(`\u300C${u.label}\u300D\u4E4B\u540E\u53C8\u88AB\u5B58\u8FC7\uFF0C\u6CA1\u5F80\u56DE\u76D6\uFF1B\u539F\u6765\u90A3\u4EFD\u653E\u5728\u4E86\u300C${slotLabel(fresh)}\u300D`, 8e3);
      } else this.verbs.say(`\u300C${u.label}\u300D\u4E4B\u540E\u53C8\u88AB\u5B58\u8FC7\uFF0C\u8FD9\u6B21\u64A4\u9500\u4E0D\u505A\u4E86`, 6e3);
      return;
    }
    if (!u.old) {
      logEvent("warn", `\u64A4\u9500\u5B58\u6863\uFF08\u521A\u5B58\u7684\u65B0\u683C\u79FB\u5230\u56DE\u6536\u7AD9\uFF09\uFF1A${u.id}`);
      if (await deleteSnapshot(u.id)) this.verbs.say(`\u5DF2\u64A4\u9500\uFF1A\u521A\u5B58\u7684\u300C${u.label}\u300D\u79FB\u5230\u4E86\u56DE\u6536\u7AD9`);
      return;
    }
    const keep = this.nextManualSlot();
    logEvent("warn", `\u64A4\u9500\u5B58\u6863\uFF08\u8986\u76D6\uFF09\uFF1A\u521A\u5B58\u7684 ${u.id} \u632A\u5230 ${keep.id}\uFF0C\u539F\u6765\u90A3\u4EFD\u5199\u56DE`);
    if (!await moveSnapshot(u.id, keep.id)) throw new Error(`\u6CA1\u80FD\u628A\u521A\u5B58\u7684\u90A3\u4EFD\u632A\u5230\u300C${slotLabel(keep)}\u300D\uFF0C\u64A4\u9500\u6CA1\u505A\uFF08\u4E24\u4EFD\u90FD\u8FD8\u5728\u539F\u5904\uFF09`);
    await putSealed(u.id, u.old);
    this.verbs.say(`\u5DF2\u64A4\u9500\uFF1A\u300C${u.label}\u300D\u6362\u56DE\u539F\u6765\u90A3\u4EFD\uFF1B\u521A\u5B58\u7684\u90A3\u4EFD\u5728\u300C${slotLabel(keep)}\u300D`, 8e3);
  }
  /** 删一格 → 回收站。 */
  async remove(id) {
    logEvent("warn", `\u4EBA\u5220\u5FEB\u7167\uFF1A${id}`);
    const ok = await deleteSnapshot(id);
    if (ok) {
      this.adopted.delete(id);
      if (this.undoSaveInfo?.id === id) {
        this.undoSaveInfo = null;
        deleteGuard("save", this.disc.key).catch(() => {
        });
      }
      this.verbs.say("\u5DF2\u79FB\u5230\u56DE\u6536\u7AD9");
    }
    return ok;
  }
  /** 读档前给预取库递提示：这一格存的时候游戏在读的盘上字节（快照头里的工作集）+ 标签 `snapshot:<这一格>`（库学「读这一格之后真读了什么」，跨局、以后跨设备）。
   *  头多半已在缓存里（挑格 / 面板看过）；没有就读一次头（几十 KB）。拿不到 / 对不上这份盘文件 = 只发标签。added 20261018 by Claude Opus 5.5 */
  hintWorkingSet(slot, pw) {
    const pf = this.disc.prefetcher;
    if (!pf) return;
    const savedAt = this.slots.find((s) => s.id === slot.id)?.savedAt ?? null;
    const metaP = savedAt ? this.peek({ id: slot.id, savedAt }) : peekSnapshot(slot.id, pw).catch(() => null);
    void metaP.then((m) => {
      const ws = m?.ws, ok = !!ws?.length && m.wsz === this.disc.rawSize;
      const ranges = ok ? Array.from({ length: Math.floor(ws.length / 2) }, (_, i) => ({ offset: ws[2 * i], length: ws[2 * i + 1] })) : void 0;
      pf.hint({ label: `snapshot:${slot.id.replace(/^.*\//, "")}`, ...ranges ? { ranges } : {}, confidence: 0.9, withinMs: 3e4 });
      logEvent("info", `\u8BFB\u6863\u63D0\u793A\uFF1A${ranges ? `\u5DE5\u4F5C\u96C6 ${ranges.length} \u6BB5 ${(ranges.reduce((s, r) => s + r.length, 0) / 2 ** 20).toFixed(0)} MB` : ws?.length ? "\u5DE5\u4F5C\u96C6\u662F\u53E6\u4E00\u4EFD\u76D8\u6587\u4EF6\u7684\uFF0C\u4E0D\u7528" : "\u8FD9\u4E00\u683C\u6CA1\u8BB0\u5DE5\u4F5C\u96C6\uFF08\u8001\u5FEB\u7167\uFF09"}`);
    }, (e) => console.info("[hint] peek failed", e));
  }
  /** 面板上的缩略图 / 时间：只读文件尾。这一页没口令就不读（不为了看缩略图去问人）。 */
  peek(item) {
    const pw = this.verbs.knownPassword();
    if (!pw || !item.savedAt) return Promise.resolve(null);
    const k = `${item.id}@${item.savedAt}`;
    let p = this.metaCache.get(k);
    if (!p) {
      p = peekSnapshot(item.id, pw).catch(() => null);
      this.metaCache.set(k, p);
    }
    return p;
  }
  /** crumbs/ 里不是这张盘代号的快照，按主人分组、新的在前。面板全列出来：能读、能接、能删——自动不猜的人来做。 */
  foreign() {
    const groups = /* @__PURE__ */ new Map();
    for (const c of this.all) if (c.key !== this.disc.key && c.kind !== "h") groups.set(c.key, [...groups.get(c.key) ?? [], c]);
    return [...groups].map(([key, items]) => ({ key, items: items.sort((a, b) => b.savedAt - a.savedAt), newestAt: Math.max(...items.map((i) => i.savedAt)) })).sort((a, b) => b.newestAt - a.newestAt);
  }
  /** 把一组快照接到这张盘上（人点的）。手动的接成新号（不盖现有的），自动的接进空格；没空格的留在原处。返回接上了几个。 */
  /** 「这一局用这组快照」= 把这一局的快照代号改成那组的（v0.1.21）。**不挪文件、不删文件**。
   *  以前是 adopt = 一张一张 move 到这张盘的代号下——库的 move 在离线 / 没登录时是「本机删旧名 + 新名等着推」，新名那半边没推上去云端就只剩回收站那份：
   *  10-15 user 的手动快照就是这么「不见」的（00:54 自动 1 / 手动 1 先后进回收站）。user「玩家如果习惯用独苗存档的话丢存档的风险是无法直视的」→
   *  手动快照从此不被任何自动流程挪 / 删 / 盖；只有人按「删」「撤销存档」才动它。 */
  async useGroup(group, opts = {}) {
    const pw = this.verbs.knownPassword() ?? await this.verbs.password("\u5FEB\u7167");
    if (!pw) return false;
    const meta = await peekSnapshot(group.items[0].id, pw).catch(() => null);
    const same = !!meta && fpSame(meta.fp, this.disc.fp);
    const game = meta?.fp ? `${meta.fp.id ?? "\u7F16\u53F7\u4E0D\u660E"}${meta.fp.v ? ` v${meta.fp.v}` : ""}` : `\u4EE3\u53F7 ${group.key.slice(0, 8)}\u2026`;
    if (!same && !opts.confirmed && !await this.verbs.confirmUseGroup(game)) return false;
    this.rekey(group.key, `\u8FD9\u4E00\u5C40\u6539\u7528\u5FEB\u7167\u4EE3\u53F7 ${group.key.slice(0, 8)}\u2026\uFF08${game}\uFF0C${group.items.length} \u4E2A\uFF1B${same ? "\u6307\u7EB9\u5BF9\u5F97\u4E0A" : "\u6307\u7EB9\u5BF9\u4E0D\u4E0A\uFF0C\u4EBA\u786E\u8BA4\u7684"}\uFF09`);
    this.verbs.say(`\u8FD9\u4E00\u5C40\u7528\u90A3 ${group.items.length} \u4E2A\u5FEB\u7167\uFF08\u4EE3\u53F7 ${group.key.slice(0, 8)}\u2026\uFF09\uFF1B\u6587\u4EF6\u6CA1\u52A8`, 6e3);
    return true;
  }
  rekey(key, why) {
    logEvent("info", why);
    this.disc.key = key;
    this.off();
    this.off = this.subscribe(this.onChange);
    this.healTried = true;
  }
  /** 自愈：这张盘一格快照都没有时，看看别的代号下有没有指纹**肯定**对得上的快照组（代号从文件名换成游戏身份、或盘号读不出的老盘）。
   *  有就问人，人同意才搬过来（不替人猜）；不同意的仍在面板「别的快照」里，随时能手动接。 */
  async heal() {
    if (this.slots.some((s) => s.savedAt)) return;
    const pw = this.verbs.knownPassword();
    if (!pw) return;
    let best = null;
    for (const g of this.foreign()) {
      const meta = await peekSnapshot(g.items[0].id, pw).catch(() => null);
      if (meta && fpSame(meta.fp, this.disc.fp) && (!best || g.newestAt > best.newestAt)) best = g;
    }
    if (!best || !await this.verbs.confirmAdopt(best.items.length, best.newestAt || null)) return;
    await this.useGroup(best, { confirmed: true });
  }
};

// src/app/panels.ts
var fmtTs = (ts) => ts && ts.length >= 12 ? `${ts.slice(0, 4)}-${ts.slice(4, 6)}-${ts.slice(6, 8)} ${ts.slice(8, 10)}:${ts.slice(10, 12)}` : "";
var fmtWhen2 = (t) => t ? new Date(t).toLocaleString() : "";
var fmtSize = (n) => n ? n >= 2 ** 20 ? `${(n / 2 ** 20).toFixed(1)} MB` : `${(n / 1024).toFixed(0)} KB` : "";
var sideText = { local: "\u53EA\u5728\u8FD9\u53F0\u8BBE\u5907", cloud: "\u53EA\u5728\u4E91\u7AEF", both: "\u4E24\u8FB9\u90FD\u6709" };
async function openBins(titleByKey) {
  let items;
  try {
    items = await withBusy("\u6B63\u5728\u5217\u56DE\u6536\u7AD9\u2026", () => listBins(titleByKey));
  } catch (e) {
    banner(`\u5217\u4E0D\u51FA\u56DE\u6536\u7AD9\uFF1A${errorText(e)}`);
    return;
  }
  await sheet((done) => {
    const row = (it) => h(
      "div",
      { class: "bin-row" },
      h(
        "div",
        { class: "slot-text" },
        h("span", { class: "slot-name" }, it.label),
        h("span", { class: "muted" }, `${it.bin === "trash" ? "\u56DE\u6536\u7AD9" : "\u5907\u4EFD\u7BB1"} \xB7 ${fmtTs(it.ts)} \xB7 ${sideText[it.side]}`)
      ),
      h("button", { onclick: async () => {
        done();
        try {
          const status = await restoreBin(it);
          banner(`\u5DF2\u6062\u590D\uFF08${status}\uFF09\u3002\u6062\u590D\u51FA\u6765\u7684\u548C\u73B0\u6709\u7684\u540C\u540D\u65F6\uFF0C\u6587\u4EF6\u540D\u4F1A\u591A\u4E00\u4E2A\u65F6\u95F4\u6233\uFF1B\u5B58\u6863\u7F50\u91CD\u590D\u65F6\u4E0B\u6B21\u5F00\u76D8\u4F1A\u8BA9\u4F60\u9009\u4E00\u7F50\u3002`, "warning");
        } catch (e) {
          banner(`\u6062\u590D\u5931\u8D25\uFF1A${errorText(e)}`);
        }
      } }, "\u6062\u590D")
    );
    return [
      h("h2", {}, "\u56DE\u6536\u7AD9 / \u5907\u4EFD\u7BB1"),
      h("p", { class: "hint" }, "\u5220\u6389\u7684\u5FEB\u7167\u3001\u7A0B\u5E8F\u81EA\u5DF1\u5220\u6389\u7684\u5B58\u6863\u5728\u56DE\u6536\u7AD9\uFF1B\u4E91\u7AEF\u548C\u8FD9\u53F0\u8BBE\u5907\u51B2\u7A81\u65F6\u8F93\u7684\u90A3\u4E00\u65B9\u5728\u5907\u4EFD\u7BB1\u3002\u90FD\u6CA1\u6709\u771F\u7684\u4E22\u3002"),
      items.length ? h("div", { class: "bins" }, ...items.map(row)) : h("p", { class: "muted" }, "\u662F\u7A7A\u7684\u3002"),
      h("div", { class: "row" }, h("button", { onclick: () => done() }, "\u5173\u95ED"))
    ];
  });
}
function gameOf2(r, ctx) {
  const c = parseCrumbId(r.it.identifier);
  if (c) return r.meta?.t ?? ctx.titleByKey(c.key) ?? (r.meta?.fp?.id ? `${r.meta.fp.id}${r.meta.fp.v ? ` v${r.meta.fp.v}` : ""}` : `\u4EE3\u53F7 ${c.key.slice(0, 8)}\u2026`);
  const dir = r.meta?.jar?.u;
  if (dir) return ctx.titleByDir(dir) ?? dir.slice(0, 9);
  return r.peeked ? "\u522B\u7684" : "\u2026";
}
function nameOf(r) {
  const c = parseCrumbId(r.it.identifier);
  if (c) return `\u5FEB\u7167 ${c.kind === "s" ? "\u624B\u52A8" : "\u81EA\u52A8"} ${c.n}`;
  const dir = r.meta?.jar?.u;
  return dir ? `\u5B58\u6863 ${dir}` : labelFor(r.it.identifier);
}
var whenOf = (r) => r.meta?.at ?? r.it.lastModified ?? 0;
var whenText = (r) => r.meta?.at ? fmtWhen2(r.meta.at) : r.it.lastModified ? `${fmtWhen2(r.it.lastModified)}\uFF08\u6587\u4EF6\u65F6\u95F4\uFF09` : "\u65F6\u95F4\u4E0D\u660E";
async function openSaveManager(ctx) {
  let jars, crumbs, complete;
  try {
    const [j, c] = await withBusy("\u6B63\u5728\u5217\u5B58\u6863\u2026", () => Promise.all([listFolderOnce(jarFolder(PLATFORM_CODE.psp), 8e3), listFolderOnce(CRUMBS, 8e3)]));
    jars = j.items;
    crumbs = c.items;
    complete = j.complete && c.complete;
  } catch (e) {
    banner(`\u5217\u4E0D\u51FA\u5B58\u6863\uFF1A${errorText(e)}`);
    return;
  }
  const only = ctx.only;
  const rows = [...jars, ...crumbs].filter((it) => {
    const c = parseCrumbId(it.identifier);
    return !only || !c || c.key === only.key;
  }).map((it) => ({ it, meta: null, peeked: false }));
  let cancelled = false, peeking = 0;
  const body = h("div", { class: "sm-body" });
  let closeSheet = () => {
  };
  const render2 = () => {
    const visible = rows.filter((r) => !(only && r.meta?.jar && !(only.discId && r.meta.jar.u.toUpperCase().startsWith(only.discId.toUpperCase()))));
    const todo = visible.filter((r) => syncClass(r.it.syncState) === "needs-you").sort((a, b) => whenOf(b) - whenOf(a));
    const waiting = visible.filter((r) => syncClass(r.it.syncState) === "waiting").sort((a, b) => whenOf(b) - whenOf(a));
    const groups = /* @__PURE__ */ new Map();
    for (const r of visible) groups.set(gameOf2(r, ctx), [...groups.get(gameOf2(r, ctx)) ?? [], r]);
    const sections = [...groups].map(([g, rs]) => [g, rs.sort((a, b) => whenOf(b) - whenOf(a))]).sort((a, b) => whenOf(b[1][0]) - whenOf(a[1][0]));
    body.replaceChildren(
      h("h3", {}, todo.length ? `\u8981\u4F60\u5904\u7406\u7684\uFF08${todo.length}\uFF09` : "\u6CA1\u6709\u8981\u4F60\u5904\u7406\u7684"),
      ...todo.length ? [h("div", { class: "bins" }, ...todo.map((r) => row(r, true)))] : [],
      ...waiting.length ? [
        h("h3", {}, `\u7B49\u7740\u4F20\u7684\uFF08${waiting.length}\uFF09`),
        h("p", { class: "muted" }, "\u4F1A\u81EA\u5DF1\u4F20\u4E0A\u53BB\uFF08\u8054\u7F51\u3001\u56DE\u5230\u524D\u53F0\u65F6\u81EA\u52A8\u7EED\u4F20\uFF09\uFF0C\u4E00\u822C\u4E0D\u7528\u7BA1\uFF1B\u771F\u60F3\u73B0\u5728\u51B3\u5B9A\u4E5F\u53EF\u4EE5\u70B9\u300C\u5904\u7406\u2026\u300D\u3002"),
        h("div", { class: "bins" }, ...waiting.map((r) => row(r, true)))
      ] : [],
      ...peeking ? [h("p", { class: "muted" }, `\u6B63\u5728\u8BFB\u540D\u5B57\u548C\u65F6\u95F4\u2026\uFF08\u8FD8\u6709 ${peeking} \u6761\uFF09`)] : [],
      ...sections.flatMap(([g, rs]) => [h("h3", {}, `${g}\uFF08${rs.length}\uFF09`), h("div", { class: "bins" }, ...rs.map((r) => row(r, false)))]),
      ...visible.length ? [] : [h("p", { class: "muted" }, "\u7A7A\u7684\u3002")]
    );
  };
  const act = (r, label, title) => h("button", { class: syncClass(r.it.syncState) === "needs-you" ? "primary" : "", title, onclick: async () => {
    closeSheet();
    try {
      note(await nudge(r.it.identifier, r.it.syncState), 8e3);
    } catch (e) {
      banner(`\u6CA1\u5904\u7406\u6210\uFF1A${errorText(e)}`);
    }
  } }, label);
  const attentionButtons = (r) => r.it.syncState === "newer-on-cloud" ? [act(r, "\u4E91\u7AEF\u8986\u76D6\u672C\u5730", "\u8FD9\u53F0\u7684\u526F\u672C\u662F\u5E72\u51C0\u7684\uFF1A\u76F4\u63A5\u6362\u6210\u4E91\u7AEF\u90A3\u4EFD")] : [act(r, "\u5904\u7406\u2026", "\u5F39\u51FA\u9009\u62E9\u9762\uFF1A\u4E91\u7AEF\u8986\u76D6\u672C\u5730 / \u672C\u5730\u8986\u76D6\u4E91\u7AEF / \u53D6\u6D88\u3002\u4E91\u7AEF\u90A3\u4EFD\u6CA1\u4E86\u65F6\u300C\u4E91\u7AEF\u8986\u76D6\u672C\u5730\u300D= \u8FD9\u53F0\u7684\u8FD9\u4EFD\u79FB\u5230\u56DE\u6536\u7AD9\u3002\u88AB\u66FF\u6362\u7684\u7248\u672C\u4F1A\u81EA\u52A8\u7559\u5E95\uFF0C\u4E0D\u4F1A\u4E22\u5931")];
  const row = (r, inTodo) => {
    const c = parseCrumbId(r.it.identifier);
    const thumb = c ? h("div", { class: "thumb small" }, r.meta?.thumb ? h("img", { src: `data:image/jpeg;base64,${r.meta.thumb}`, alt: "" }) : null) : null;
    const canLoad = c && ctx.loadSnapshot && c.key === ctx.loadSnapshot.key && r.it.syncState !== "cloud-only" ? ctx.loadSnapshot : null;
    const cls = syncClass(r.it.syncState);
    return h(
      "div",
      { class: `bin-row${cls === "needs-you" ? " attention" : cls === "waiting" ? " waiting" : ""}` },
      thumb,
      h(
        "div",
        { class: "slot-text" },
        h("span", { class: "slot-name" }, inTodo ? `${nameOf(r)} \xB7 ${gameOf2(r, ctx)}` : nameOf(r)),
        h("span", { class: "muted" }, [whenText(r), SYNC_TEXT[r.it.syncState] ?? r.it.syncState, fmtSize(r.it.size)].filter(Boolean).join(" \xB7 "))
      ),
      ...needsAttention(r.it.syncState) ? attentionButtons(r) : [],
      canLoad ? h("button", { class: "primary", onclick: () => {
        closeSheet();
        canLoad.load(r.it.identifier, c.kind, c.n);
      } }, "\u8BFB") : null,
      // 10-15 user：00:54 那两份（自动 1 / 手动 1）就是在这里按的「删」——以为删的是这台没传上去的副本，其实云端那份一起进了回收站。先确认、说清楚。
      // 10-16 user「冲突的时候不要放删除按钮」：要处理的行不放「删掉」（那里只二选一）；正常行照旧。
      needsAttention(r.it.syncState) ? null : h("button", { title: "\u5220\u6389\u8FD9\u4EFD\uFF1A\u4E91\u7AEF\u90A3\u4EFD\u548C\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u526F\u672C\u90FD\u79FB\u5230\u56DE\u6536\u7AD9", onclick: async () => {
        closeSheet();
        const ok = await confirmSheet("\u5220\u6389\u8FD9\u4EFD\uFF1F", `${nameOf(r)}\uFF1A\u4E91\u7AEF\u90A3\u4EFD\u548C\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u526F\u672C\u90FD\u4F1A\u79FB\u5230\u56DE\u6536\u7AD9\uFF08\u4E3B\u9875\u300C\u56DE\u6536\u7AD9 / \u5907\u4EFD\u7BB1\u300D\u80FD\u6062\u590D\uFF09\u3002\u53EA\u662F\u60F3\u653E\u5F03\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u6539\u52A8\uFF1F\u90A3\u4E0D\u662F\u8FD9\u4E2A\u6309\u94AE\u2014\u2014\u8981\u5904\u7406\u90A3\u4E00\u884C\u7684\u300C\u5904\u7406\u2026\u300D\u4F1A\u5F39\u9009\u62E9\u9762\u3002`, "\u79FB\u5230\u56DE\u6536\u7AD9");
        if (!ok) return;
        try {
          if (await deleteJam(r.it.identifier)) note("\u5DF2\u79FB\u5230\u56DE\u6536\u7AD9");
        } catch (e) {
          banner(`\u6CA1\u80FD\u79FB\u5230\u56DE\u6536\u7AD9\uFF1A${errorText(e)}`);
        }
      } }, "\u5220\u6389")
    );
  };
  const fill2 = async () => {
    const pw = ctx.password();
    if (!pw) return;
    const queue = rows.filter((r) => !r.peeked);
    peeking = queue.length;
    render2();
    let dirty = false;
    const flush = () => {
      if (dirty && !cancelled) {
        dirty = false;
        render2();
      }
    };
    const ticker = setInterval(flush, 400);
    const worker = async () => {
      while (queue.length && !cancelled) {
        const r = queue.shift();
        r.meta = await peekMeta(r.it.identifier, pw).catch(() => null);
        r.peeked = true;
        peeking--;
        dirty = true;
      }
    };
    await Promise.all(Array.from({ length: 4 }, worker));
    clearInterval(ticker);
    flush();
  };
  render2();
  void fill2();
  await sheet((done) => {
    closeSheet = () => done();
    const unlock = ctx.password() ? null : h("button", { onclick: async () => {
      if (await ctx.askPassword()) {
        unlock.remove();
        void fill2();
      }
    } }, "\u8F93\u5165\u53E3\u4EE4\uFF0C\u770B\u662F\u54EA\u5F20\u76D8\u7684");
    return [
      h("h2", {}, only ? `\u5B58\u6863\u7BA1\u7406 \xB7 ${only.title}` : "\u5B58\u6863\u7BA1\u7406"),
      h("p", { class: "hint" }, `${complete ? "" : "\u4E91\u7AEF\u5217\u8868\u6CA1\u62FF\u5168\uFF08\u6CA1\u767B\u5F55 / \u7F51\u7EDC\u6162\uFF09\uFF0C\u770B\u5230\u7684\u53EF\u80FD\u4E0D\u5168\u3002"}\u300C\u5904\u7406\u2026\u300D= \u5F39\u51FA\u9009\u62E9\u9762\uFF08\u4E91\u7AEF\u8986\u76D6\u672C\u5730 / \u672C\u5730\u8986\u76D6\u4E91\u7AEF / \u53D6\u6D88\uFF09\uFF0C\u4EBA\u5728\u9762\u91CC\u9009\uFF1B\u4E91\u7AEF\u90A3\u4EFD\u6CA1\u4E86\u65F6\u300C\u4E91\u7AEF\u8986\u76D6\u672C\u5730\u300D= \u8FD9\u53F0\u7684\u8FD9\u4EFD\u79FB\u5230\u56DE\u6536\u7AD9\u3002\u4E24\u8FB9\u90FD\u4E0D\u4F1A\u4E22\uFF0C\u88AB\u66FF\u6362\u7684\u8FDB\u5907\u4EFD\u7BB1\u3002`),
      unlock,
      body,
      h(
        "div",
        { class: "row" },
        h("button", { onclick: () => {
          done();
          openBins(ctx.titleByKey).catch((e) => banner(errorText(e)));
        } }, "\u56DE\u6536\u7AD9 / \u5907\u4EFD\u7BB1"),
        h("button", { onclick: () => {
          done();
          openLog();
        } }, "\u540C\u6B65\u65E5\u5FD7"),
        h("button", { onclick: () => done() }, "\u5173\u95ED")
      )
    ].filter(Boolean);
  }).finally(() => {
    cancelled = true;
  });
}
var deviceLabel = () => {
  const ua = navigator.userAgent;
  return /OculusBrowser|Quest/i.test(ua) ? "Quest" : /iPad|iPhone/.test(ua) || /Macintosh/.test(ua) && navigator.maxTouchPoints > 1 ? "iPad" : /Android/.test(ua) ? "Android" : "PC";
};
function openLog() {
  const text = dumpLog();
  void sheet((done) => [
    h("h2", {}, "\u540C\u6B65\u65E5\u5FD7\uFF08\u8FD9\u4E00\u9875\uFF09"),
    h("pre", { class: "log" }, text),
    h(
      "div",
      { class: "row" },
      h("button", { onclick: () => {
        navigator.clipboard?.writeText(text).then(() => note("\u5DF2\u590D\u5236"), () => note("\u590D\u5236\u4E0D\u4E86\uFF0C\u624B\u52A8\u9009\u4E2D\u590D\u5236"));
      } }, "\u590D\u5236"),
      // Quest 上复制粘贴太麻烦：一键写到云端 tmp/log.txt（明文、所有设备一个槽），电脑上从 OneDrive 文件夹拿
      h("button", { onclick: async () => {
        const head = `# KudsRocket ${APP_VERSION} \xB7 ${deviceLabel()} \xB7 ${(/* @__PURE__ */ new Date()).toISOString()} \xB7 ${navigator.userAgent}

`;
        try {
          await withBusy("\u5199\u65E5\u5FD7\u5230\u4E91\u7AEF\u2026", () => uploadLog(head + dumpLog()));
          note(`\u5199\u597D\u4E86\uFF1A${LOG_SLOT}\uFF08\u4F1A\u76D6\u6389\u4E0A\u4E00\u4EFD\uFF09`, 6e3);
        } catch (e) {
          banner(`\u65E5\u5FD7\u6CA1\u5199\u4E0A\u53BB\uFF1A${errorText(e)}`);
        }
      } }, "\u5199\u5230\u4E91\u7AEF\uFF08tmp/log.txt\uFF09"),
      h("button", { onclick: () => done() }, "\u5173\u95ED")
    )
  ]);
}
async function resolveDuplicates(duplicates, peek, standardId) {
  let changed = false;
  for (const [dir, ids] of duplicates) {
    const infos = await Promise.all(ids.map(async (id) => ({ id, meta: await peek(id).catch(() => null) })));
    const keep = await sheet((done) => [
      h("h2", {}, `\u5B58\u6863\u300C${dir}\u300D\u6709 ${ids.length} \u4EFD`),
      h("p", { class: "hint" }, "\u53EF\u80FD\u662F\u4ECE\u56DE\u6536\u7AD9\u6062\u590D\u8FC7\u3001\u6216\u624B\u5DE5\u642C\u8FC7\u5B58\u6863\u3002\u9009\u4E00\u4EFD\u7559\u4E0B\uFF0C\u5176\u4F59\u79FB\u5230\u56DE\u6536\u7AD9\uFF1B\u4E0D\u9009 = \u8FD9\u6B21\u8FD9\u4E2A\u5B58\u6863\u4E0D\u8BFB\u4E5F\u4E0D\u5199\u3002"),
      h("div", { class: "bins" }, ...infos.map(({ id, meta }) => h(
        "div",
        { class: "bin-row" },
        h(
          "div",
          { class: "slot-text" },
          h("span", { class: "slot-name" }, labelFor(id)),
          h("span", { class: "muted" }, [meta?.at ? fmtWhen2(meta.at) : "\u65F6\u95F4\u4E0D\u660E", `${id.replace(/^.*\//, "").slice(0, 8)}\u2026`, meta?.size ? `${(meta.size / 1024).toFixed(0)} KB` : ""].filter(Boolean).join(" \xB7 "))
        ),
        h("button", { class: "primary", onclick: () => done(id) }, "\u7559\u8FD9\u4EFD")
      ))),
      h("div", { class: "row" }, h("button", { onclick: () => done(null) }, "\u5148\u4E0D\u9009"))
    ], { dismissable: false });
    if (!keep) continue;
    for (const id of ids) {
      if (id === keep) continue;
      try {
        if (await deleteJam(id)) changed = true;
      } catch (e) {
        banner(`\u6CA1\u80FD\u79FB\u5230\u56DE\u6536\u7AD9\uFF1A${errorText(e)}`);
      }
    }
    const std = await standardId(dir);
    if (keep !== std) {
      try {
        if (await renameJam(keep, std)) changed = true;
        else banner(`\u300C${dir}\u300D\u7559\u4E0B\u7684\u90A3\u7F50\u6CA1\u80FD\u6539\u56DE\u6807\u51C6\u540D\uFF08\u76EE\u6807\u8FD8\u88AB\u5360\u7740\uFF09\uFF1A\u4E0B\u6B21\u5F00\u76D8\u53EF\u80FD\u8FD8\u8981\u518D\u9009\u4E00\u6B21\u3002`, "warning");
      } catch (e) {
        banner(`\u6539\u540D\u5931\u8D25\uFF1A${errorText(e)}`);
      }
    }
  }
  return changed;
}

// src/app/quest-input.ts
var COMBO_WINDOW_MS = 5e3;
var GAZE_CONFIRM_MS = 2500;
function isTypingKey(code) {
  return /^Key[A-Z]$|^Digit\d$|^Numpad\d$|^Space$/.test(code);
}
var QUEST_PAD_HOWTO = "\u624B\u67C4\u4E0A\u540C\u65F6\u6309 View + Menu\uFF08\u4E2D\u95F4\u4E24\u4E2A\u5C0F\u952E\uFF09\uFF0C\u6216\u8005 \u8BBE\u7F6E \u203A \u8BBE\u5907 \u203A \u6E38\u620F\u624B\u67C4 \u5173\u6389\u300C\u4F7F\u7528\u6CE8\u89C6\u5149\u6807\u300D\uFF1B\u8FD8\u4E0D\u884C\u5C31\u91CD\u542F Quest\uFF08\u7CFB\u7EDF\u5076\u5C14\u81EA\u5DF1\u5361\u5728\u8FD9\u4E2A\u72B6\u6001\uFF0C\u91CD\u542F\u80FD\u597D\uFF09";
function createQuestInputAdvisor() {
  let padsNow = 0;
  let padsEverSeen = false;
  let comboAt = -Infinity;
  let typingSeen = false;
  let navSince = -1;
  let wheels = 0;
  const given = /* @__PURE__ */ new Set();
  const combo = () => {
    if (given.has("combo")) return null;
    given.add("combo");
    given.add("gaze");
    return {
      reason: "combo",
      text: `\u624B\u67C4\u88AB Quest \u6536\u8D70\u4E86\uFF1A\u521A\u624D\u540C\u65F6\u6309\u4E86 Start + Select\uFF0C\u90A3\u6B63\u662F Quest \u7684\u300C\u6CE8\u89C6\u5149\u6807\u300D\u5F00\u5173\uFF08View + Menu\uFF09\u3002\u518D\u540C\u65F6\u6309\u4E00\u6B21\u5C31\u56DE\u6765\uFF1B\u4E0D\u884C\u5C31\u91CD\u542F Quest`,
      log: "Quest \u8F93\u5165\uFF1ASelect + Start \u540C\u6309\u540E\u624B\u67C4\u4ECE Gamepad API \u6D88\u5931 \u2192 \u5224\u4E3A\u7CFB\u7EDF\u6CE8\u89C6\u5149\u6807\u5F00\u5173\uFF08View + Menu\uFF09\uFF0C\u5DF2\u63D0\u793A"
    };
  };
  const gaze = () => {
    if (given.has("gaze")) return null;
    given.add("gaze");
    return {
      reason: "gaze",
      text: `\u6536\u5230\u7684\u662F\u65B9\u5411\u952E / \u56DE\u8F66\uFF0C\u4E0D\u662F\u624B\u67C4\u3002\u5982\u679C\u4F60\u624B\u4E0A\u662F\u624B\u67C4\uFF1AQuest \u6B63\u62FF\u5B83\u5F53\u5149\u6807\u7528\uFF0C\u7F51\u9875\u770B\u4E0D\u5230\u3002${QUEST_PAD_HOWTO}`,
      log: `Quest \u8F93\u5165\uFF1AGamepad API \u6CA1\u6709\u624B\u67C4\uFF0C\u5374\u6765\u4E86\u53EA\u6709\u5BFC\u822A\u952E\u7684\u952E\u76D8\u8F93\u5165\uFF08${GAZE_CONFIRM_MS / 1e3} s \u5185\u6CA1\u6709\u6253\u5B57\u952E\uFF1B\u6EDA\u8F6E ${wheels} \u6B21\uFF09\u2192 \u5224\u4E3A\u6CE8\u89C6\u5149\u6807\u6A21\u5F0F\u7684\u624B\u67C4\uFF0C\u5DF2\u63D0\u793A`
    };
  };
  return {
    feed(s) {
      switch (s.kind) {
        case "pads": {
          const before = padsNow;
          padsNow = s.count;
          if (s.count > 0) {
            padsEverSeen = true;
            navSince = -1;
            return null;
          }
          if (before > 0 && s.now - comboAt < COMBO_WINDOW_MS) return combo();
          return null;
        }
        case "combo":
          comboAt = s.now;
          return null;
        case "wheel":
          wheels++;
          return null;
        case "key":
          if (isTypingKey(s.code)) {
            typingSeen = true;
            navSince = -1;
            return null;
          }
          if (padsNow > 0 || typingSeen) return null;
          if (s.now - comboAt < COMBO_WINDOW_MS && padsEverSeen) return combo();
          if (navSince < 0) navSince = s.now;
          return null;
        case "tick":
          if (navSince >= 0 && !typingSeen && padsNow === 0 && s.now - navSince >= GAZE_CONFIRM_MS) {
            navSince = -1;
            return gaze();
          }
          return null;
      }
    },
    /** 真键盘玩家：按过打字键就不再拿导航键当证据（main.ts 也拿它决定要不要收起软键）。 */
    get typingSeen() {
      return typingSeen;
    },
    get wheels() {
      return wheels;
    }
  };
}

// src/app/settings-model.ts
var SECTIONS = [
  { id: "picture", title: "\u753B\u9762", hint: "\u4E0A\u5C4F\u8282\u594F\u3001\u5206\u8FA8\u7387\u3001\u8D34\u56FE" },
  { id: "pacing", title: "\u8282\u594F", hint: "\u8DDF\u5C4F\u5E55\u8FD8\u662F\u8DDF\u949F\u3001\u6A21\u62DF\u901F\u5EA6\u3001\u8BFB\u76D8\u65F6\u5E8F" },
  { id: "controls", title: "\u64CD\u4F5C", hint: "\u6309\u952E\u3001\u6447\u6746\u3001\u786E\u8BA4\u952E" },
  { id: "system", title: "\u6A21\u62DF\u5668", hint: "CPU \u6838\u5FC3\u3001\u6E38\u620F\u8BED\u8A00\u3001\u673A\u578B" },
  { id: "compat", title: "\u517C\u5BB9", hint: "\u753B\u9762\u7F3A\u4E1C\u897F / \u5361\u7684\u65F6\u5019\u5BF9\u7167\u7528" },
  { id: "diag", title: "\u8BCA\u65AD", hint: "\u7EDF\u8BA1\u3001\u663E\u5361\u8C03\u7528\u67E5\u9519" }
];
var OFF_ON = (off = "\u5173", on = "\u5F00") => [{ value: "disabled", label: off }, { value: "enabled", label: on }];
var core = (id, section, label, choices, def, hint) => ({ id, section, label, hint, choices, def, apply: "reload", layer: "core" });
var PPSSPP_OPTIONS = [
  // 画面
  core("ppsspp_internal_resolution", "picture", "\u5185\u90E8\u5206\u8FA8\u7387", [1, 2, 3, 4].map((k) => ({ value: `${480 * k}x${272 * k}`, label: `${k}\xD7\uFF08${480 * k}\xD7${272 * k}\uFF09` })), "480x272", "PSP \u539F\u751F\u662F 1\xD7\u3002\u624B\u673A / Quest \u4E0A 1\xD7 \u5C31\u597D\uFF0C\u8D8A\u9AD8\u8D8A\u5403\u663E\u5361"),
  core("ppsspp_texture_filtering", "picture", "\u8D34\u56FE\u8FC7\u6EE4", [{ value: "Auto", label: "\u81EA\u52A8" }, { value: "Nearest", label: "\u6700\u8FD1\u90BB\uFF08\u50CF\u7D20\u611F\uFF09" }, { value: "Linear", label: "\u7EBF\u6027\uFF08\u67D4\u4E00\u70B9\uFF09" }, { value: "Auto max quality", label: "\u81EA\u52A8\xB7\u6700\u9AD8\u8D28\u91CF" }], "Auto"),
  core("ppsspp_texture_scaling_level", "picture", "\u8D34\u56FE\u653E\u5927", [{ value: "disabled", label: "\u5173" }, { value: "2x", label: "2\xD7" }, { value: "3x", label: "3\xD7" }, { value: "4x", label: "4\xD7" }, { value: "5x", label: "5\xD7" }], "disabled", "\u5728 CPU \u4E0A\u653E\u5927\u8D34\u56FE\uFF1A\u5F88\u5403 CPU\uFF0CQuest \u4E0A\u522B\u5F00"),
  core("ppsspp_texture_scaling_type", "picture", "\u8D34\u56FE\u653E\u5927\u7B97\u6CD5", [{ value: "xbrz", label: "xBRZ" }, { value: "hybrid", label: "Hybrid" }, { value: "bicubic", label: "Bicubic" }, { value: "hybrid_bicubic", label: "Hybrid + Bicubic" }], "xbrz", "\u300C\u8D34\u56FE\u653E\u5927\u300D\u5F00\u7740\u624D\u6709\u7528"),
  core("ppsspp_texture_shader", "picture", "\u8D34\u56FE\u653E\u5927\uFF08\u663E\u5361\uFF09", [{ value: "disabled", label: "\u5173" }, { value: "2xBRZ", label: "Tex2xBRZ" }, { value: "4xBRZ", label: "Tex4xBRZ" }, { value: "MMPX", label: "MMPX" }], "disabled"),
  core("ppsspp_texture_anisotropic_filtering", "picture", "\u5404\u5411\u5F02\u6027\u8FC7\u6EE4", [{ value: "disabled", label: "\u5173" }, { value: "2x", label: "2\xD7" }, { value: "4x", label: "4\xD7" }, { value: "8x", label: "8\xD7" }, { value: "16x", label: "16\xD7" }], "16x"),
  core("ppsspp_smart_2d_texture_filtering", "picture", "\u667A\u80FD 2D \u8D34\u56FE\u8FC7\u6EE4", OFF_ON(), "disabled"),
  core("ppsspp_texture_deposterize", "picture", "\u8D34\u56FE\u53BB\u8272\u9636", OFF_ON(), "disabled"),
  // 节奏
  core("ppsspp_locked_cpu_speed", "pacing", "\u9501\u5B9A PSP \u7684 CPU \u9891\u7387", [{ value: "disabled", label: "\u4E0D\u9501\uFF08\u7167\u6E38\u620F\uFF09" }, ...["222MHz", "266MHz", "333MHz", "444MHz", "555MHz", "666MHz"].map((v) => ({ value: v, label: v }))], "disabled", "\u6709\u7684\u6E38\u620F\u8D85\u9891\u624D\u4E0D\u5361\uFF1B\u6A21\u62DF\u8D77\u6765\u66F4\u91CD"),
  core("ppsspp_io_timing_method", "pacing", "\u8BFB\u76D8\u65F6\u5E8F", [{ value: "Fast", label: "\u5FEB" }, { value: "Host", label: "\u8DDF\u4E3B\u673A" }, { value: "Simulate UMD delays", label: "\u6A21\u62DF UMD \u5EF6\u8FDF" }], "Host", "\u9ED8\u8BA4\u300C\u8DDF\u4E3B\u673A\u300D\uFF1A\u7B49\u7F51\u4E0A\u7684\u76D8\u65F6\u53EA\u505C\u7B49\u5B83\u7684\u90A3\u4E2A\u7EBF\u7A0B\uFF0C\u753B\u9762\u548C\u58F0\u97F3\u7167\u8DD1\uFF0810-18 \u8D77\uFF1Bhost.c \u7684\u9ED8\u8BA4\u8868\u540C\u503C\uFF09\u3002\u300C\u5FEB\u300D= \u8BFB\u76D8\u65F6\u6574\u4E2A\u6E38\u620F\u7B49\u7740\uFF1B\u4E2A\u522B\u6E38\u620F\u8BFB\u76D8\u592A\u5FEB\u4F1A\u51FA\u9519\uFF0C\u624D\u7528\u300C\u6A21\u62DF UMD \u5EF6\u8FDF\u300D"),
  // 操作
  core("ppsspp_button_preference", "controls", "\u7CFB\u7EDF\u786E\u8BA4\u952E", [{ value: "Circle", label: "\u25CB\uFF08\u65E5\u7248\u4E60\u60EF\uFF09" }, { value: "Cross", label: "\xD7\uFF08\u6B27\u7F8E\u4E60\u60EF\uFF09" }], "Cross", "\u53EA\u7BA1 PSP \u7CFB\u7EDF\u5BF9\u8BDD\u6846\uFF08\u5B58\u6863\u3001\u8BFB\u6863\u90A3\u79CD\uFF09\uFF1B\u6E38\u620F\u5185\u6309\u952E\u5404\u6E38\u620F\u81EA\u5DF1\u5B9A"),
  core("ppsspp_analog_deadzone", "controls", "\u6447\u6746\u6B7B\u533A", ["0.0", "0.05", "0.10", "0.15", "0.20", "0.25", "0.30"].map((v) => ({ value: v, label: `${Math.round(Number(v) * 100)}%` })), "0.0"),
  core("ppsspp_analog_is_circular", "controls", "\u6447\u6746\u5706\u5F62\u8865\u507F", OFF_ON(), "disabled", "\u624B\u67C4\u6447\u6746\u662F\u5706\u5F62\u884C\u7A0B\u65F6\u5F00\uFF0C\u659C\u5411\u80FD\u63A8\u5230\u5E95"),
  // 模拟器
  core("ppsspp_cpu_core", "system", "CPU \u6838\u5FC3", [{ value: "IR JIT", label: "IR \u89E3\u91CA\u5668\uFF08\u9ED8\u8BA4\uFF09" }, { value: "Interpreter", label: "\u7ECF\u5178\u89E3\u91CA\u5668\uFF08\u6162 3 \u500D\uFF0C\u6392\u67E5\u7528\uFF09" }], "IR JIT", "\u7F51\u9875\u91CC\u6CA1\u6709 JIT"),
  core("ppsspp_language", "system", "\u6E38\u620F\u8BED\u8A00", [
    ["Automatic", "\u81EA\u52A8"],
    ["Japanese", "\u65E5\u8BED"],
    ["English", "\u82F1\u8BED"],
    ["Chinese Simplified", "\u7B80\u4F53\u4E2D\u6587"],
    ["Chinese Traditional", "\u7E41\u4F53\u4E2D\u6587"],
    ["Korean", "\u97E9\u8BED"],
    ["French", "\u6CD5\u8BED"],
    ["Spanish", "\u897F\u73ED\u7259\u8BED"],
    ["German", "\u5FB7\u8BED"],
    ["Italian", "\u610F\u5927\u5229\u8BED"],
    ["Dutch", "\u8377\u5170\u8BED"],
    ["Portuguese", "\u8461\u8404\u7259\u8BED"],
    ["Russian", "\u4FC4\u8BED"]
  ].map(([value, label]) => ({ value, label })), "Automatic", "PSP \u7CFB\u7EDF\u8BED\u8A00\uFF1A\u652F\u6301\u591A\u8BED\u8A00\u7684\u6E38\u620F\u6309\u5B83\u9009"),
  core("ppsspp_psp_model", "system", "PSP \u578B\u53F7", [{ value: "psp_2000_3000", label: "PSP-2000 / 3000" }, { value: "psp_1000", label: "PSP-1000" }], "psp_2000_3000", "1000 \u578B\u5185\u5B58\u5C11\uFF0C\u4E2A\u522B\u8001\u6E38\u620F\u8981\u5B83"),
  // 兼容
  core("ppsspp_software_skinning", "compat", "CPU \u8499\u76AE", OFF_ON("\u5173\uFF08\u4EA4\u7ED9\u663E\u5361\uFF0C\u9ED8\u8BA4\uFF09", "\u5F00"), "disabled", "\u5E26\u9AA8\u9ABC\u7684\u6A21\u578B\u5728 CPU \u4E0A\u7B97"),
  core("ppsspp_disable_range_culling", "compat", "\u5173\u8303\u56F4\u5254\u9664", OFF_ON(), "disabled", "\u4E0D\u8BA9\u663E\u5361\u63D0\u524D\u4E22\u6389\u300C\u770B\u8D77\u6765\u5728\u753B\u9762\u5916\u300D\u7684\u9876\u70B9"),
  core("ppsspp_gpu_hardware_transform", "compat", "\u786C\u4EF6\u53D8\u6362", OFF_ON("\u5173\uFF08\u8F6F\u4EF6\u53D8\u6362\uFF09", "\u5F00\uFF08\u9ED8\u8BA4\uFF09"), "enabled"),
  core("ppsspp_hardware_tesselation", "compat", "\u786C\u4EF6\u66F2\u9762\u7EC6\u5206", OFF_ON(), "disabled"),
  core("ppsspp_spline_quality", "compat", "\u66F2\u9762\u8D28\u91CF", [{ value: "Low", label: "\u4F4E" }, { value: "Medium", label: "\u4E2D" }, { value: "High", label: "\u9AD8" }], "High"),
  core("ppsspp_skip_buffer_effects", "compat", "\u8DF3\u8FC7\u7F13\u51B2\u6548\u679C", OFF_ON(), "disabled", "\u5FEB\uFF0C\u4F46\u6709\u7684\u6E38\u620F\u4F1A\u4EC0\u4E48\u90FD\u753B\u4E0D\u51FA\u6765"),
  core("ppsspp_skip_gpu_readbacks", "compat", "\u8DF3\u8FC7\u663E\u5361\u56DE\u8BFB", OFF_ON(), "disabled", "\u5FEB\uFF0C\u4F46\u6E38\u620F\u300C\u6293\u753B\u9762\u300D\uFF08\u6BD4\u5982\u8FC7\u5173\u7167\u7247\uFF09\u4F1A\u662F\u65E7\u7684"),
  core("ppsspp_lazy_texture_caching", "compat", "\u61D2\u8D34\u56FE\u7F13\u5B58", OFF_ON(), "disabled", "\u5FEB\uFF0C\u4E2A\u522B\u6E38\u620F\u6587\u5B57\u4F1A\u51FA\u9519"),
  core("ppsspp_lower_resolution_for_effects", "compat", "\u7279\u6548\u964D\u5206\u8FA8\u7387", [{ value: "disabled", label: "\u5173" }, { value: "Safe", label: "\u4FDD\u5B88" }, { value: "Balanced", label: "\u5747\u8861" }, { value: "Aggressive", label: "\u6FC0\u8FDB" }], "disabled")
];
var OFF_ON_CAPS = (off = "\u5173", on = "\u5F00") => [{ value: "OFF", label: off }, { value: "ON", label: on }];
var MGBA_OPTIONS = [
  core("mgba_skip_bios", "system", "\u8DF3\u8FC7\u5F00\u673A\u52A8\u753B", OFF_ON_CAPS(), "OFF", "GBA \u5F00\u673A\u90A3\u4E0B Game Boy \u6807\u5FD7"),
  core("mgba_gb_model", "system", "Game Boy \u673A\u578B", ["Autodetect", "Game Boy", "Super Game Boy", "Game Boy Color", "Game Boy Advance"].map((v, i) => ({ value: v, label: ["\u81EA\u52A8", "Game Boy", "Super Game Boy", "Game Boy Color", "Game Boy Advance"][i] })), "Autodetect", "\u53EA\u7BA1 .gb / .gbc"),
  core("mgba_idle_optimization", "pacing", "\u7A7A\u8F6C\u5FAA\u73AF\u4F18\u5316", [{ value: "Remove Known", label: "\u53BB\u6389\u5DF2\u77E5\u7684\uFF08\u9ED8\u8BA4\uFF09" }, { value: "Detect and Remove", label: "\u81EA\u52A8\u68C0\u6D4B\u5E76\u53BB\u6389" }, { value: "Don't Remove", label: "\u4E0D\u52A8" }], "Remove Known", "\u6E38\u620F\u7A7A\u7B49\u65F6\u5C11\u7B97\u51E0\u5708\uFF1B\u4E2A\u522B\u6E38\u620F\u4F1A\u51FA\u95EE\u9898\u65F6\u6539\u300C\u4E0D\u52A8\u300D"),
  core("mgba_allow_opposing_directions", "controls", "\u5141\u8BB8\u540C\u65F6\u6309\u76F8\u53CD\u65B9\u5411", [{ value: "no", label: "\u4E0D\uFF08\u771F\u673A\u505A\u4E0D\u5230\uFF09" }, { value: "yes", label: "\u5141\u8BB8" }], "no"),
  core("mgba_solar_sensor_level", "controls", "\u592A\u9633\u4F20\u611F\u5668", [{ value: "sensor", label: "\u8DDF\u8BBE\u5907\u5149\u611F" }, ...Array.from({ length: 11 }, (_, i) => ({ value: String(i), label: String(i) }))], "0", "\u6076\u9B54\u57CE\u6653\u6708 / \u6211\u4EEC\u7684\u592A\u9633\u90A3\u51E0\u4E2A"),
  core("mgba_audio_low_pass_filter", "system", "\u58F0\u97F3\u4F4E\u901A\u6EE4\u6CE2", OFF_ON(), "disabled", "\u50CF\u771F\u673A\u5587\u53ED\u90A3\u79CD\u95F7\u4E00\u70B9"),
  core("mgba_audio_low_pass_range", "system", "\u4F4E\u901A\u6EE4\u6CE2\u5F3A\u5EA6", [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((x) => ({ value: String(x), label: `${x}%` })), "60"),
  core("mgba_sgb_borders", "picture", "Super Game Boy \u8FB9\u6846", OFF_ON_CAPS(), "ON"),
  core("mgba_gb_colors_preset", "picture", "Game Boy \u914D\u8272\u9884\u8BBE", ["0", "1", "2", "3"].map((v) => ({ value: v, label: ["\u9ED8\u8BA4", "1", "2", "3"][Number(v)] })), "0"),
  core("mgba_force_gbp", "compat", "Game Boy Player \u9707\u52A8", OFF_ON_CAPS(), "OFF")
];
var ALL_CORE_OPTIONS = [...PPSSPP_OPTIONS, ...MGBA_OPTIONS];
var coreOptionsFor = (core2) => core2 === "mgba" ? MGBA_OPTIONS : PPSSPP_OPTIONS;
var HIDDEN = [
  { match: /^ppsspp_(enable_wlan|change_mac_address\d+|wlan_channel|enable_builtin_pro_ad_hoc_server|change_pro_ad_hoc_server_address|pro_ad_hoc_server_address\d+|enable_upnp|upnp_use_original_port|port_offset|minimum_timeout|forced_first_connect)$/, why: "\u8054\u7F51\uFF1A\u5BB6\u89C4\u9EC4\u7EBF\u533A\uFF0C\u4E0D\u8FDE\u5916\u90E8\u670D\u52A1" },
  { match: /^ppsspp_cache_iso$/, why: "\u6574\u5F20\u76D8\u8BFB\u8FDB\u5185\u5B58\uFF1A\u786C\u89C4\u77E9\uFF0C\u6574\u5F20\u5149\u76D8\u6C38\u8FDC\u4E0D\u8FDB\u5185\u5B58" },
  { match: /^ppsspp_(software_rendering|frameskip|frameskiptype|auto_frameskip|frame_duplication|detect_vsync_swap_interval|force_lag_sync|inflight_frames)$/, why: "\u6E32\u67D3\u65B9\u5F0F\u3001\u8DF3\u5E27\u3001\u6392\u7A0B\u7531 app \u7BA1\uFF08\u6392\u7A0B / \u4E0A\u5C4F\u8282\u62CD / \u8F6F\u4EF6\u6E32\u67D3\u5728 app \u5C42\uFF09" },
  { match: /^ppsspp_backend$/, why: "\u7F51\u9875\u91CC\u53EA\u6709 WebGL2" },
  { match: /^ppsspp_(cheats|texture_replacement)$/, why: "\u8981\u5916\u90E8\u6587\u4EF6\uFF08\u91D1\u624B\u6307 / \u8D34\u56FE\u5305\uFF09\uFF0C\u8FD8\u6CA1\u63A5" },
  { match: /^ppsspp_fast_memory$/, why: "wasm \u4E0B\u5FC5\u987B\u5173\uFF08\u574F\u5730\u5740\u4F1A\u8BA9\u6574\u4E2A\u6838\u5D29\uFF0Cv0.1.32\uFF09" },
  { match: /^ppsspp_(ignore_bad_memory_access|memstick_inserted)$/, why: "\u5FC5\u987B\u5F00\u7740\uFF1A\u5173\u4E86\u6E38\u620F\u8BFB\u4E0D\u5230\u5B58\u6863 / \u78B0\u5230\u574F\u5730\u5740\u6574\u4E2A\u6838\u5C31\u505C" },
  { match: /^ppsspp_(mulitsample_level|cropto16x9|analog_sensitivity)$/, why: "\u8FD8\u6CA1\u5728\u7F51\u9875\u91CC\u9A8C\u8FC7 / \u7528\u4E0D\u4E0A\uFF0C\u7B49\u9700\u8981\u518D\u9732" },
  { match: /^mgba_frameskip$/, why: "\u6392\u7A0B / \u8DF3\u5E27\u5F52 app\uFF08\u5BBF\u4E3B\uFF09" },
  { match: /^mgba_use_bios$/, why: "BIOS \u6587\u4EF6\u6CA1\u63A5\uFF08HLE \u5C31\u591F\uFF09" },
  { match: /^mgba_gb_colors$/, why: "\u81EA\u5B9A\u4E49\u8C03\u8272\u76D8\uFF1A\u4E0A\u6E38\u4E5F\u53EA\u6709 Grayscale \u4E00\u9879" }
];
var isHidden2 = (key) => HIDDEN.some((h2) => h2.match.test(key));
var APP_SETTINGS = [
  { id: "app.cadence", section: "picture", label: "\u4E0A\u5C4F\u8282\u62CD", hint: "\u9ED8\u8BA4\u6BCF\u5E27\u90FD\u4E0A\u5C4F\uFF08user 10-21\uFF09\u300272 Hz \u5C4F\u653E 30 \u5E27\u6E38\u620F\u5ACC\u6296\u53EF\u8BD5\u300C\u81EA\u52A8\uFF08\u5300\u901F\uFF09\u300D= \u6BCF 3 \u6B21\u5237\u65B0 1 \u5E27", choices: [{ value: "1", label: "\u6BCF\u6B21\u5237\u65B0\u90FD\u4E0A\uFF08\u9ED8\u8BA4\uFF09" }, { value: "0", label: "\u81EA\u52A8\uFF08\u5300\u901F\u8282\u62CD\uFF09" }, { value: "2", label: "\u6BCF 2 \u6B21\u5237\u65B0" }, { value: "3", label: "\u6BCF 3 \u6B21\u5237\u65B0" }], def: "1", apply: "now", layer: "app" },
  { id: "app.cap30", section: "picture", label: "\u53EA\u753B 30 \u5E27", hint: "\u6E38\u620F\u672C\u8EAB 60 \u5E27\u65F6\u5C11\u753B\u4E00\u534A\uFF0C\u903B\u8F91\u7167\u5E38\uFF08\u79FB\u52A8\u8BBE\u5907\u9ED8\u8BA4\u5F00\uFF09", choices: OFF_ON("\u753B\u6EE1 60", "\u53EA\u753B 30"), def: "auto", apply: "now", layer: "app" },
  {
    id: "app.preset",
    section: "pacing",
    label: "\u65B9\u6848",
    hint: "\u4E00\u9009\u5C31\u628A\u6392\u7A0B\u3001\u58F0\u97F3\u7F13\u51B2\u3001\u7CFB\u7EDF\u58F0\u97F3\u5EF6\u8FDF\u3001\u753B\u51E0\u5E27\u4E00\u8D77\u6362\u6389\uFF08W-4\uFF09\u3002\u4E0B\u9762\u51E0\u9879\u5355\u72EC\u6539\u8FC7\u5C31\u663E\u793A\u300C\u81EA\u5B9A\u4E49\u300D",
    choices: [{ value: "default", label: "\u5747\u8861\uFF08\u9ED8\u8BA4\uFF09" }, { value: "gal", label: "GAL\uFF1A\u542C\u58F0\u7701\u7535" }, { value: "act", label: "ACT\uFF1A\u4F4E\u5EF6\u8FDF" }, { value: "mus", label: "MUS\uFF1A\u97F3\u753B\u5BF9\u9F50\uFF08\u5BF9\u9F50\u8FD8\u6CA1\u505A\uFF0C\u73B0\u540C ACT\uFF09" }, { value: "custom", label: "\u81EA\u5B9A\u4E49\uFF08\u5355\u72EC\u6539\u8FC7\uFF09" }],
    def: "default",
    apply: "now",
    layer: "app"
  },
  { id: "app.ffcap", section: "pacing", label: "\u5FEB\u8FDB\u4E0A\u9650", hint: "\u6309\u4F4F\u5FEB\u8FDB / RT \u6309\u5230\u5E95\u65F6\u6700\u591A\u8DD1\u51E0\u500D\uFF08\u8BBE\u5907\u8DD1\u4E0D\u5230\u5C31\u8DD1\u5230\u5B83\u7684\u6781\u9650\uFF1B\u5FEB\u8FDB\u65F6\u81EA\u52A8\u591A\u8DF3\u5E27\uFF09", choices: [2, 3, 4, 5, 8, 10].map((x) => ({ value: String(x), label: x === 8 ? "\xD78\uFF08\u9ED8\u8BA4\uFF09" : `\xD7${x}` })), def: "8", apply: "now", layer: "app" },
  { id: "app.pacing", section: "pacing", label: "\u6392\u7A0B", hint: "\u8DDF\u5C4F\u5E55 = \u8DDF\u663E\u793A\u5668\u5237\u65B0\u8D70\uFF1B\u8DDF\u58F0\u97F3 = \u987A\u6ED1\u4E0D\u7206\u97F3\uFF08\u5EF6\u8FDF\u9AD8\uFF09\uFF1B\u5899\u949F = \u6838\u81EA\u5DF1\u8BA1\u65F6", choices: [{ value: "vsync", label: "\u8DDF\u5C4F\u5E55" }, { value: "audio", label: "\u8DDF\u58F0\u97F3\uFF08\u987A\u6ED1\uFF09" }, { value: "wall", label: "\u5899\u949F" }], def: "vsync", apply: "now", layer: "app" },
  { id: "app.tap", section: "controls", label: "\u6309\u4E0B\u9501\u5B58", hint: "\u5FEB\u901F\u8FDE\u6309\u6BCF\u4E00\u4E0B\u90FD\u8BA9\u6E38\u620F\u770B\u5230\uFF08\u81F3\u5C11\u6309\u4F4F 2 \u5E27\u3001\u677E\u5F00 2 \u5E27\uFF09", choices: OFF_ON("\u5173", "\u5F00\uFF08\u9ED8\u8BA4\uFF09"), def: "enabled", apply: "now", layer: "app" },
  { id: "app.render", section: "compat", label: "\u8F6F\u4EF6\u6E32\u67D3", hint: "\u5B8C\u5168\u4E0D\u7528\u663E\u5361\uFF1A\u5F88\u6162\uFF0C\u4F46\u753B\u9762\u662F\u5BF9\u7684\u2014\u2014\u5224\u65AD\u662F\u4E0D\u662F\u663E\u5361\u90A3\u6761\u8DEF\u7684\u95EE\u9898", choices: OFF_ON(), def: "disabled", apply: "reload", layer: "app" },
  { id: "app.stats", section: "diag", label: "\u7EDF\u8BA1\u8BE6\u60C5", hint: "\u753B\u9762\u4E0A\u53E0\u4E00\u5757\u5E27\u8282\u594F / \u58F0\u97F3 / \u8BFB\u76D8 / \u624B\u67C4\u7684\u8BFB\u6570", choices: OFF_ON(), def: "disabled", apply: "now", layer: "app" },
  { id: "app.glcheck", section: "diag", label: "GL \u8BCA\u65AD", hint: "\u62BD\u6837\u67E5\u6BCF\u4E2A\u663E\u5361\u8C03\u7528\uFF0C\u7B2C\u4E00\u6B21\u51FA\u9519\u7684\u5199\u8FDB\u65E5\u5FD7\uFF08\u6162\u4E00\u70B9\uFF09", choices: OFF_ON(), def: "disabled", apply: "reload", layer: "app" }
];
var APP_RELOAD_PARAMS = { "app.render": ["render", "sw"], "app.glcheck": ["glcheck", "1"] };
var VALID = new Map(ALL_CORE_OPTIONS.map((d) => [d.id, new Set(d.choices.map((c) => c.value))]));
function readCoreOverrides(params2) {
  const out = /* @__PURE__ */ new Map();
  if (params2.get("skin") === "cpu") out.set("ppsspp_software_skinning", "enabled");
  if (params2.get("cull") === "0") out.set("ppsspp_disable_range_culling", "enabled");
  if (params2.get("cpu") === "interp") out.set("ppsspp_cpu_core", "Interpreter");
  for (const part of (params2.get("o") ?? "").split(";")) {
    const i = part.indexOf(":");
    if (i <= 0) continue;
    const key = decodeURIComponent(part.slice(0, i)), value = decodeURIComponent(part.slice(i + 1));
    if (isHidden2(key) || !VALID.get(key)?.has(value)) continue;
    out.set(key, value);
  }
  return out;
}
function writeCoreOverrides(params2, overrides2) {
  const q = new URLSearchParams(params2);
  q.delete("skin");
  q.delete("cull");
  q.delete("cpu");
  const parts = [...overrides2].filter(([k, v]) => ALL_CORE_OPTIONS.find((d) => d.id === k)?.def !== v && !isHidden2(k) && VALID.get(k)?.has(v)).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => `${encodeURIComponent(k)}:${encodeURIComponent(v)}`);
  if (parts.length) q.set("o", parts.join(";"));
  else q.delete("o");
  return q;
}
var coreOptionArgs = (overrides2) => [...overrides2].filter(([k, v]) => !isHidden2(k) && VALID.get(k)?.has(v)).map(([k, v]) => `opt:${k}=${v}`);
var PRESETS = {
  default: { pacing: "vsync", audioTargetMs: 46, audioMaxMs: 81, latencyHint: "interactive", cap30: "auto" },
  gal: { pacing: "audio", audioTargetMs: 150, audioMaxMs: 300, latencyHint: "playback", cap30: true, note: "\u5207\u5230\u540E\u53F0\u7EE7\u7EED\u51FA\u58F0\uFF08\u6302\u673A\u5F53 mp3\uFF09\u8FD8\u6CA1\u505A\uFF1A\u73B0\u5728\u5207\u540E\u53F0\u4F1A\u6682\u505C" },
  act: { pacing: "vsync", audioTargetMs: 23, audioMaxMs: 35, latencyHint: "interactive", cap30: false, note: "\u58F0\u97F3\u7F13\u51B2\u538B\u5230\u6700\u5C0F\uFF0C\u5B81\u613F\u5076\u5C14\u7206\u97F3" },
  mus: { pacing: "vsync", audioTargetMs: 23, audioMaxMs: 35, latencyHint: "interactive", cap30: false, note: "\u753B\u9762\u6309\u58F0\u97F3\u8F93\u51FA\u5EF6\u8FDF\u63A8\u8FDF\uFF08\u97F3\u753B\u5BF9\u9F50\uFF09\u8FD8\u6CA1\u505A\uFF1A\u73B0\u5728\u548C ACT \u4E00\u6837" }
};
function presetOf(k, deviceCap30) {
  for (const id of ["default", "gal", "act"]) {
    const p = PRESETS[id];
    const cap = p.cap30 === "auto" ? deviceCap30 : p.cap30;
    if (p.pacing === k.pacing && p.audioTargetMs === k.audioTargetMs && p.audioMaxMs === k.audioMaxMs && p.latencyHint === k.latencyHint && cap === k.cap30) return id;
  }
  return "custom";
}

// src/app/speed.ts
var TRIGGER_DEADZONE = 0.2;
var ANALOG_MAX = 4;
var FULL_PRESS = 0.95;
var DEFAULT_FF_CAP = 8;
function triggerSpeed(value, cap = DEFAULT_FF_CAP) {
  const v = Math.max(0, (value - TRIGGER_DEADZONE) / (1 - TRIGGER_DEADZONE));
  if (v <= 0) return 1;
  if (value >= FULL_PRESS) return cap;
  const s = 1 + (Math.min(ANALOG_MAX, cap) - 1) * (v / ((FULL_PRESS - TRIGGER_DEADZONE) / (1 - TRIGGER_DEADZONE)));
  return Math.min(cap, Math.round(s * 4) / 4);
}

// src/app/controls.ts
var ACTIONS = ["pause", "fast", "fast-toggle", "fast-analog", "snapshot", "load", "screenshot", "mute", "fullscreen", "reference", "pip"];
var ACTION_LABEL = {
  pause: "\u6682\u505C / \u7EE7\u7EED",
  fast: "\u5FEB\u8FDB\uFF08\u6309\u4F4F\uFF09",
  "fast-toggle": "\u5FEB\u8FDB\uFF08\u5F00\u5173\uFF09",
  "fast-analog": "\u5FEB\u8FDB\uFF08\u6309\u6DF1\u6D45\u53D8\u901F\uFF09",
  snapshot: "\u5B58\u5FEB\u7167\uFF08\u9009\u8FC7\u7684\u683C\uFF09",
  load: "\u8BFB\u5FEB\u7167\uFF08\u9009\u8FC7\u7684\u683C\uFF09",
  screenshot: "\u622A\u56FE",
  mute: "\u9759\u97F3",
  fullscreen: "\u5168\u5C4F",
  reference: "\u53C2\u8003\u7A97",
  pip: "\u5C0F\u7A97"
};
var isAction = (target) => target.startsWith("!");
var actionOf = (target) => isAction(target) && ACTIONS.includes(target.slice(1)) ? target.slice(1) : null;
function keyTarget(scheme2, ov, code) {
  const o = ov?.keyboard;
  if (o && code in o) return o[code];
  return scheme2.keyboard[code] ?? null;
}
function padTarget(scheme2, ov, index) {
  const o = ov?.gamepad;
  if (o && String(index) in o) return o[String(index)];
  return scheme2.gamepad[index] ?? null;
}
function resolveTarget(scheme2, target) {
  if (!target) return null;
  if (isAction(target)) {
    const a = actionOf(target);
    return a ? { kind: "action", action: a } : null;
  }
  const b = scheme2.buttons.find((x) => x.id === target);
  return b ? { kind: "button", id: b.id, bit: b.bit } : null;
}
var resolveKey = (scheme2, ov, code) => resolveTarget(scheme2, keyTarget(scheme2, ov, code));
var resolvePad = (scheme2, ov, index) => resolveTarget(scheme2, padTarget(scheme2, ov, index));
function withBinding(scheme2, ov, device, key, target) {
  const next = { keyboard: { ...ov?.keyboard ?? {} }, gamepad: { ...ov?.gamepad ?? {} } };
  const def = device === "keyboard" ? scheme2.keyboard[key] ?? null : scheme2.gamepad[Number(key)] ?? null;
  const table = next[device];
  if (target === def) delete table[key];
  else table[key] = target;
  if (!Object.keys(next.keyboard).length) delete next.keyboard;
  if (!Object.keys(next.gamepad).length) delete next.gamepad;
  return next;
}
function keysFor(scheme2, ov, target) {
  const keyboard = [.../* @__PURE__ */ new Set([...Object.keys(scheme2.keyboard), ...Object.keys(ov?.keyboard ?? {})])].filter((c) => keyTarget(scheme2, ov, c) === target).sort();
  const gamepad = [.../* @__PURE__ */ new Set([...Object.keys(scheme2.gamepad), ...Object.keys(ov?.gamepad ?? {})])].map(Number).filter((i) => padTarget(scheme2, ov, i) === target).sort((a, b) => a - b);
  return { keyboard, gamepad };
}
var PAD_KEYCODES = {
  195: "PadA",
  196: "PadB",
  197: "PadX",
  198: "PadY",
  199: "PadRB",
  200: "PadLB",
  201: "PadLT",
  202: "PadRT",
  203: "PadUp",
  204: "PadDown",
  205: "PadLeft",
  206: "PadRight",
  207: "PadMenu",
  208: "PadView",
  211: "PadLUp",
  212: "PadLDown",
  213: "PadLRight",
  214: "PadLLeft",
  215: "PadRUp",
  216: "PadRDown",
  217: "PadRRight",
  218: "PadRLeft"
};
function keyCodeOf(e) {
  return e.code && e.code !== "Unidentified" ? e.code : PAD_KEYCODES[e.keyCode] ?? "";
}
var PAD_INDEX_LABEL = {
  0: "A\uFF08\u4E0B\uFF09",
  1: "B\uFF08\u53F3\uFF09",
  2: "X\uFF08\u5DE6\uFF09",
  3: "Y\uFF08\u4E0A\uFF09",
  4: "LB",
  5: "RB",
  6: "LT",
  7: "RT",
  8: "View / Select",
  9: "Menu / Start",
  10: "\u5DE6\u6447\u6746\u6309\u4E0B",
  11: "\u53F3\u6447\u6746\u6309\u4E0B",
  12: "\u5341\u5B57 \u2191",
  13: "\u5341\u5B57 \u2193",
  14: "\u5341\u5B57 \u2190",
  15: "\u5341\u5B57 \u2192",
  16: "Home / Guide"
};
function keyLabel(code) {
  if (code.startsWith("Key")) return code.slice(3);
  if (code.startsWith("Digit")) return code.slice(5);
  if (code.startsWith("Arrow")) return { ArrowUp: "\u2191", ArrowDown: "\u2193", ArrowLeft: "\u2190", ArrowRight: "\u2192" }[code] ?? code;
  if (code.startsWith("Pad")) return "\u624B\u67C4 " + code.slice(3);
  return { Space: "\u7A7A\u683C", Enter: "\u56DE\u8F66", Escape: "Esc", Backquote: "`", ShiftRight: "\u53F3 Shift", ShiftLeft: "\u5DE6 Shift", Tab: "Tab" }[code] ?? code;
}
var PSP_SCHEME = {
  core: "ppsspp",
  buttons: [
    { id: "cross", bit: 0, label: "\xD7" },
    { id: "square", bit: 1, label: "\u25A1" },
    { id: "select", bit: 2, label: "SELECT" },
    { id: "start", bit: 3, label: "START" },
    { id: "up", bit: 4, label: "\u2191" },
    { id: "down", bit: 5, label: "\u2193" },
    { id: "left", bit: 6, label: "\u2190" },
    { id: "right", bit: 7, label: "\u2192" },
    { id: "circle", bit: 8, label: "\u25CB" },
    { id: "triangle", bit: 9, label: "\u25B3" },
    { id: "l", bit: 10, label: "L" },
    { id: "r", bit: 11, label: "R" }
  ],
  sticks: 1,
  rightStick: "dpad",
  softkeys: "psp",
  keyboard: {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
    KeyX: "circle",
    KeyZ: "cross",
    KeyA: "square",
    KeyS: "triangle",
    Space: "start",
    KeyV: "select",
    Enter: "select",
    KeyQ: "l",
    KeyW: "r",
    // 壳的动作：Tab 按住快进、` 快进开关、Esc / P 暂停、M 静音、F2 存、F4 读
    Tab: "!fast",
    Backquote: "!fast-toggle",
    Escape: "!pause",
    KeyP: "!pause",
    KeyM: "!mute",
    F2: "!snapshot",
    F4: "!load",
    // 手柄当键盘来的（Quest 的 2D 浏览器把蓝牙手柄翻成 VK_GAMEPAD_*；main.ts PAD_KEYCODES 翻成这些假 code）：A × · B ○ · X □ · Y △ · 肩键 / 扳机 L R · 十字 · Menu Start · View Select · 右摇杆四向 → 十字
    PadA: "cross",
    PadB: "circle",
    PadX: "square",
    PadY: "triangle",
    PadRB: "r",
    PadLB: "l",
    PadLT: "l",
    PadRT: "r",
    PadUp: "up",
    PadDown: "down",
    PadLeft: "left",
    PadRight: "right",
    PadMenu: "start",
    PadView: "select",
    PadRUp: "up",
    PadRDown: "down",
    PadRRight: "right",
    PadRLeft: "left"
  },
  gamepad: {
    0: "cross",
    1: "circle",
    2: "square",
    3: "triangle",
    4: "l",
    5: "r",
    8: "select",
    9: "start",
    12: "up",
    13: "down",
    14: "left",
    15: "right",
    // 扳机和功能键（PPSSPP Xbox 出厂默认）：LT 暂停、RT 按深浅变速、右摇杆按下 = 快进开关、Home 暂停。PSP 只有 L / R 两个肩键 = LB / RB，扳机本来就空着
    6: "!pause",
    7: "!fast-analog",
    11: "!fast-toggle",
    16: "!pause"
  },
  stickKeys: { KeyI: [0, -1], KeyK: [0, 1], KeyJ: [-1, 0], KeyL: [1, 0], PadLUp: [0, -1], PadLDown: [0, 1], PadLRight: [1, 0], PadLLeft: [-1, 0] }
};
var GBA_SCHEME = {
  core: "mgba",
  buttons: [
    { id: "b", bit: 0, label: "B" },
    { id: "select", bit: 2, label: "SELECT" },
    { id: "start", bit: 3, label: "START" },
    { id: "up", bit: 4, label: "\u2191" },
    { id: "down", bit: 5, label: "\u2193" },
    { id: "left", bit: 6, label: "\u2190" },
    { id: "right", bit: 7, label: "\u2192" },
    { id: "a", bit: 8, label: "A" },
    { id: "l", bit: 10, label: "L" },
    { id: "r", bit: 11, label: "R" }
  ],
  sticks: 0,
  rightStick: null,
  softkeys: "gba",
  keyboard: {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
    KeyZ: "a",
    KeyX: "b",
    KeyA: "l",
    KeyS: "r",
    Enter: "start",
    Backspace: "select",
    Space: "start",
    KeyV: "select",
    Tab: "!fast",
    Backquote: "!fast-toggle",
    Escape: "!pause",
    KeyP: "!pause",
    KeyM: "!mute",
    F2: "!snapshot",
    F4: "!load",
    PadA: "a",
    PadB: "b",
    PadX: "b",
    PadY: "a",
    PadRB: "r",
    PadLB: "l",
    PadLT: "l",
    PadRT: "r",
    PadUp: "up",
    PadDown: "down",
    PadLeft: "left",
    PadRight: "right",
    PadMenu: "start",
    PadView: "select",
    PadLUp: "up",
    PadLDown: "down",
    PadLRight: "right",
    PadLLeft: "left",
    PadRUp: "up",
    PadRDown: "down",
    PadRRight: "right",
    PadRLeft: "left"
  },
  gamepad: {
    0: "a",
    1: "b",
    2: "b",
    3: "a",
    4: "l",
    5: "r",
    8: "select",
    9: "start",
    12: "up",
    13: "down",
    14: "left",
    15: "right",
    6: "!pause",
    7: "!fast-analog",
    11: "!fast-toggle",
    16: "!pause"
  },
  stickKeys: {}
};
var SCHEMES = { ppsspp: PSP_SCHEME, mgba: GBA_SCHEME };
function parseOverrides(text) {
  if (!text) return null;
  try {
    const v = JSON.parse(text);
    if (!v || typeof v !== "object") return null;
    const clean = (t) => {
      if (!t || typeof t !== "object") return void 0;
      const out = {};
      for (const [k, x] of Object.entries(t)) if (x === null || typeof x === "string") out[k] = x;
      return Object.keys(out).length ? out : void 0;
    };
    const o = {};
    const kb = clean(v.keyboard), gp = clean(v.gamepad);
    if (kb) o.keyboard = kb;
    if (gp) o.gamepad = gp;
    return Object.keys(o).length ? o : null;
  } catch {
    return null;
  }
}
var serializeOverrides = (ov) => ov && Object.keys(ov).length ? JSON.stringify(ov) : null;

// src/app/bindings-panel.ts
var KEYBOARD_SKIP = ["fast-analog"];
function openBindings(host, capture = null) {
  const { scheme: scheme2 } = host;
  const targets = [
    ...scheme2.buttons.map((b) => ({ target: b.id, label: b.label, kind: "button" })),
    ...ACTIONS.map((a) => ({ target: "!" + a, label: ACTION_LABEL[a], kind: "action" }))
  ];
  let stopCapture = null;
  const reopen = (next) => {
    stopCapture?.();
    stopCapture = null;
    closeSheet();
    openBindings(host, next);
  };
  let closeSheet = () => {
  };
  const bind = (device, key, target) => {
    host.setOverrides(withBinding(scheme2, host.overrides(), device, key, target));
    const label = targets.find((t) => t.target === target)?.label ?? target;
    host.log(`\u952E\u4F4D\uFF1A${device === "keyboard" ? "\u952E\u76D8" : "\u624B\u67C4"} ${device === "keyboard" ? keyLabel(key) : PAD_INDEX_LABEL[Number(key)] ?? `#${key}`} \u2192 ${label}`);
    reopen(null);
  };
  const unbind = (device, key) => {
    host.setOverrides(withBinding(scheme2, host.overrides(), device, key, null));
    host.log(`\u952E\u4F4D\uFF1A\u89E3\u7ED1 ${device === "keyboard" ? "\u952E\u76D8 " + keyLabel(key) : "\u624B\u67C4 " + (PAD_INDEX_LABEL[Number(key)] ?? `#${key}`)}`);
    reopen(null);
  };
  void sheet((close) => {
    closeSheet = () => close();
    const ov = host.overrides();
    const changed = (ov?.keyboard ? Object.keys(ov.keyboard).length : 0) + (ov?.gamepad ? Object.keys(ov.gamepad).length : 0);
    const cell = (device, t) => {
      const keys = keysFor(scheme2, ov, t.target);
      const list = device === "keyboard" ? keys.keyboard : keys.gamepad.map(String);
      const skip = device === "keyboard" && t.kind === "action" && KEYBOARD_SKIP.includes(t.target.slice(1));
      const capturing = capture && capture.device === device && capture.target === t.target;
      return h(
        "div",
        { class: "bind-cell" + (capturing ? " capturing" : "") },
        ...list.map((k) => h(
          "span",
          { class: "bind-key" },
          device === "keyboard" ? keyLabel(k) : PAD_INDEX_LABEL[Number(k)] ?? `#${k}`,
          h("button", { class: "bind-x", title: "\u89E3\u7ED1", "aria-label": "\u89E3\u7ED1", onclick: () => unbind(device, k) }, "\xD7")
        )),
        skip ? h("span", { class: "muted" }, "\u2014") : capturing ? h("span", { class: "muted" }, device === "keyboard" ? "\u6309\u4E00\u4E2A\u952E\u2026\uFF08Esc \u53D6\u6D88\uFF09" : "\u6309\u624B\u67C4\u4E0A\u7684\u4E00\u4E2A\u952E\u2026\uFF08Esc \u53D6\u6D88\uFF09") : h("button", { class: "bind-add", title: "\u518D\u7ED1\u4E00\u4E2A", onclick: () => reopen({ device, target: t.target }) }, "\uFF0B")
      );
    };
    const rows = targets.map((t) => h(
      "div",
      { class: "bind-row" + (t.kind === "action" ? " action" : "") },
      h("span", { class: "bind-label" }, t.label),
      cell("keyboard", t),
      cell("gamepad", t)
    ));
    if (capture) {
      const onKey2 = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) return;
        if (e.code === "Escape") {
          reopen(null);
          return;
        }
        if (capture.device === "keyboard") {
          const code = keyCodeOf(e);
          if (code) bind("keyboard", code, capture.target);
        }
      };
      window.addEventListener("keydown", onKey2, { capture: true });
      let raf = 0;
      if (capture.device === "gamepad") {
        const was = /* @__PURE__ */ new Map();
        for (const gp of navigator.getGamepads?.() ?? []) if (gp) gp.buttons.forEach((b, i) => was.set(`${gp.index}:${i}`, b.pressed));
        const poll = () => {
          for (const gp of navigator.getGamepads?.() ?? []) {
            if (!gp) continue;
            for (let i = 0; i < gp.buttons.length; i++) {
              const pressed = gp.buttons[i].pressed || (gp.buttons[i].value ?? 0) > 0.5;
              if (pressed && !was.get(`${gp.index}:${i}`)) {
                bind("gamepad", String(i), capture.target);
                return;
              }
              was.set(`${gp.index}:${i}`, pressed);
            }
          }
          raf = requestAnimationFrame(poll);
        };
        raf = requestAnimationFrame(poll);
      }
      stopCapture = () => {
        window.removeEventListener("keydown", onKey2, { capture: true });
        if (raf) cancelAnimationFrame(raf);
      };
    }
    return [
      h("h2", {}, "\u6539\u952E"),
      h("p", { class: "hint" }, `\u952E\u76D8\u548C\u624B\u67C4\u5404\u81EA\u7ED1\uFF1B\u4E00\u4E2A\u952E\u53EA\u80FD\u6307\u4E00\u4E2A\u4E1C\u897F\uFF0C\u4E00\u4E2A\u4E1C\u897F\u53EF\u4EE5\u6709\u51E0\u4E2A\u952E\u3002\u53EA\u8BB0\u5728\u8FD9\u53F0\u8BBE\u5907\u4E0A${changed ? `\uFF08\u6539\u4E86 ${changed} \u5904\uFF09` : "\uFF08\u73B0\u5728\u5168\u662F\u9ED8\u8BA4\uFF09"}\u3002\u624B\u67C4\u6309\u6807\u51C6\u5E03\u5C40\u8BA4\u952E\uFF0CQuest \u628A\u624B\u67C4\u5F53\u952E\u76D8\u5582\u8FDB\u6765\u7684\u4E5F\u7B97\u952E\u76D8\u3002`),
      h("div", { class: "bind-head" }, h("span", {}, ""), h("span", {}, "\u952E\u76D8"), h("span", {}, "\u624B\u67C4")),
      h("div", { class: "bind-table" }, ...rows),
      h(
        "div",
        { class: "row" },
        h("button", { onclick: () => {
          stopCapture?.();
          close();
        } }, "\u5173\u95ED"),
        h("button", { disabled: changed ? void 0 : "", onclick: () => {
          host.setOverrides(null);
          host.log("\u952E\u4F4D\uFF1A\u5168\u90E8\u6062\u590D\u9ED8\u8BA4");
          reopen(null);
        } }, "\u5168\u90E8\u6062\u590D\u9ED8\u8BA4")
      )
    ];
  }).then(() => {
    stopCapture?.();
  });
}

// src/app/settings-panel.ts
function activeReloadSettings(params2, catalog = ALL_CORE_OPTIONS) {
  const ov = readCoreOverrides(params2);
  const core2 = catalog.filter((d) => ov.has(d.id) && ov.get(d.id) !== d.def).map((d) => `${d.label}\uFF1A${d.choices.find((c) => c.value === ov.get(d.id))?.label ?? ov.get(d.id)}`);
  const app = Object.entries(APP_RELOAD_PARAMS).filter(([, [k, v]]) => params2.get(k) === v).map(([id]) => APP_SETTINGS.find((d) => d.id === id).label);
  return [...app, ...core2];
}
function openSettings(host, focus, draft) {
  const start = readCoreOverrides(host.params);
  const appReloadStart = new Map(Object.entries(APP_RELOAD_PARAMS).map(([id, [k, v]]) => [id, host.params.get(k) === v ? "enabled" : "disabled"]));
  const core2 = new Map(draft?.core ?? start);
  const appReload = new Map(draft?.appReload ?? appReloadStart);
  const catalog = host.coreOptions ?? PPSSPP_OPTIONS;
  const valueOf2 = (d) => d.layer === "core" ? core2.get(d.id) ?? d.def : d.apply === "reload" ? appReload.get(d.id) : host.get(d.id);
  const pending2 = () => {
    const keys = /* @__PURE__ */ new Set([...core2.keys(), ...start.keys()]);
    let n = 0;
    for (const k of keys) if ((core2.get(k) ?? catalog.find((d) => d.id === k)?.def) !== (start.get(k) ?? catalog.find((d) => d.id === k)?.def)) n++;
    for (const [k, v] of appReload) if (appReloadStart.get(k) !== v) n++;
    return n;
  };
  void sheet((close) => {
    const go = h("button", { class: "primary" });
    const refresh = () => {
      const n = pending2();
      go.hidden = !n;
      go.textContent = `\u7528\u8FD9\u4E9B\u8BBE\u7F6E\u91CD\u65B0\u8F7D\u5165\uFF08${n} \u9879\uFF09`;
    };
    const row = (d) => {
      const sel = h(
        "select",
        { class: "setting-select", "aria-label": d.label },
        ...d.choices.map((c) => h("option", { value: c.value, ...c.value === valueOf2(d) ? { selected: "" } : {} }, c.label))
      );
      sel.addEventListener("change", () => {
        if (d.layer === "core") {
          if (sel.value === d.def) core2.delete(d.id);
          else core2.set(d.id, sel.value);
        } else if (d.apply === "reload") appReload.set(d.id, sel.value);
        else {
          host.set(d.id, sel.value);
          host.log(`\u8BBE\u7F6E\uFF1A${d.label} \u2192 ${d.choices.find((c) => c.value === sel.value)?.label ?? sel.value}`);
          close();
          openSettings(host, d.section, { core: core2, appReload });
          return;
        }
        refresh();
      });
      return h(
        "div",
        { class: "setting-row" },
        h("label", {}, h("span", {}, d.label), d.apply === "reload" ? h("span", { class: "setting-tag" }, "\u91CD\u65B0\u8F7D\u5165\u751F\u6548") : null),
        sel,
        d.hint ? h("p", { class: "muted setting-hint" }, d.hint) : null
      );
    };
    const all = [...APP_SETTINGS, ...catalog];
    const sections = SECTIONS.map((s) => {
      const items = all.filter((d) => d.section === s.id);
      const extra = host.extras?.[s.id];
      return h("section", { class: "setting-section", id: `settings-${s.id}` }, h("h3", {}, `${s.title}`, h("span", { class: "muted" }, ` \xB7 ${s.hint}`)), ...items.map(row), extra ? extra(() => close()) : null);
    });
    const nav = h("div", { class: "setting-nav" }, ...SECTIONS.map((s) => h("button", { onclick: () => document.getElementById(`settings-${s.id}`)?.scrollIntoView({ block: "start", behavior: "smooth" }) }, s.title)));
    go.addEventListener("click", () => {
      let q = writeCoreOverrides(host.params, core2);
      for (const [id, [k, v]] of Object.entries(APP_RELOAD_PARAMS)) {
        if (appReload.get(id) === "enabled") q.set(k, v);
        else if (q.get(k) === v) q.delete(k);
      }
      host.log(`\u8BBE\u7F6E\uFF1A\u91CD\u65B0\u8F7D\u5165\uFF08${activeReloadSettings(q).join(" \xB7 ") || "\u5168\u90E8\u9ED8\u8BA4"}\uFF09`);
      host.reload(q.toString());
    });
    const reset = h("button", { onclick: () => {
      close();
      openSettings(host, focus, { core: /* @__PURE__ */ new Map(), appReload: new Map([...appReload.keys()].map((k) => [k, "disabled"])) });
    } }, "\u8981\u91CD\u65B0\u8F7D\u5165\u7684\u5168\u90E8\u6062\u590D\u9ED8\u8BA4");
    refresh();
    if (focus) queueMicrotask(() => document.getElementById(`settings-${focus}`)?.scrollIntoView({ block: "start" }));
    return [
      h("h2", {}, "\u8BBE\u7F6E"),
      h("p", { class: "hint" }, "\u9009\u4E86\u5C31\u751F\u6548\u7684\u5F53\u573A\u5C31\u53D8\u3002\u6807\u7740\u300C\u91CD\u65B0\u8F7D\u5165\u751F\u6548\u300D\u7684\u5148\u5728\u8FD9\u91CC\u6539\u597D\uFF0C\u6700\u540E\u70B9\u5E95\u4E0B\u7684\u6309\u94AE\u4E00\u8D77\u751F\u6548\u2014\u2014\u8FD9\u4E9B\u53EA\u5728\u8FD9\u4E00\u6B21\u6253\u5F00\u91CC\u6709\u6548\uFF08\u8981\u4E0D\u8981\u8BB0\u4F4F\u3001\u6309\u8BBE\u5907\u8FD8\u662F\u6309\u6E38\u620F\u8BB0\uFF0C\u7B49\u4F60\u5B9A\uFF09\u3002"),
      nav,
      ...sections,
      h("div", { class: "row" }, h("button", { onclick: () => close() }, "\u5173\u95ED"), reset, go)
    ];
  });
}

// src/app/disc-tools.ts
var CHUNK = 8 * 2 ** 20;
var canWriteLocalFiles = () => typeof globalThis.showSaveFilePicker === "function" && typeof globalThis.showOpenFilePicker === "function";
var Cancelled = class extends Error {
  constructor() {
    super("cancelled");
    this.name = "Cancelled";
  }
};
function randomStem() {
  return Array.from(crypto.getRandomValues(new Uint8Array(8)), (b) => b.toString(16).padStart(2, "0")).join("");
}
async function writeAll(out, body) {
  const w = await out.createWritable();
  try {
    await body(w);
    await w.close();
  } catch (e) {
    await w.abort().catch(() => {
    });
    throw e;
  }
}
async function uploadToPantry(input, password, identifier, onProgress) {
  const src = { size: input.size, read: async (o, n) => new Uint8Array(await input.slice(o, o + n).arrayBuffer()) };
  const fp = await fingerprintFor(src, void 0, extOf(input.name));
  const writer2 = await beginDisc(password, { size: input.size });
  const head = await writer2.finish({ name: input.name, fp });
  const total = head.length + input.size;
  const source = {
    size: total,
    async read(offset, length) {
      const out = new Uint8Array(length);
      let o = 0;
      if (offset < head.length) {
        const n = Math.min(length, head.length - offset);
        out.set(head.subarray(offset, offset + n), 0);
        o = n;
      }
      if (o < length) {
        const bodyOff = offset + o - head.length;
        if (bodyOff % 16 !== 0) throw new RangeError(`upload chunk not 16-aligned at body offset ${bodyOff}`);
        const plain = new Uint8Array(await input.slice(bodyOff, bodyOff + (length - o)).arrayBuffer());
        out.set(await writer2.encryptAt(bodyOff, plain), o);
      }
      return out;
    }
  };
  await getStore().files.uploadStream(identifier, source, { onProgress });
}
async function encryptToLocal(input, password, out, p) {
  const src = { size: input.size, read: async (o, n) => new Uint8Array(await input.slice(o, o + n).arrayBuffer()) };
  const fp = await fingerprintFor(src, void 0, extOf(input.name));
  const writer2 = await beginDisc(password);
  await writeAll(out, async (w) => {
    await w.write(new Uint8Array(writer2.headBytes));
    for (let off = 0; off < input.size; off += CHUNK) {
      if (p.cancelled) throw new Cancelled();
      const plain = new Uint8Array(await input.slice(off, off + CHUNK).arrayBuffer());
      await w.write(await writer2.encrypt(plain));
      p.update(Math.min(off + CHUNK, input.size), input.size);
    }
    await w.write({ type: "write", position: 0, data: await writer2.finish({ name: input.name, fp }) });
  });
}
async function openForDecrypt(input, password) {
  const src = { size: input.size, read: async (o, n) => new Uint8Array(await input.slice(o, o + n).arrayBuffer()) };
  const disc = await openDisc(src, password);
  return {
    name: disc.meta.name ?? `${input.name.replace(/\.[^.]*$/, "")}.iso`,
    size: disc.size,
    async write(out, p) {
      await writeAll(out, async (w) => {
        for (let off = 0; off < disc.size; off += CHUNK) {
          if (p.cancelled) throw new Cancelled();
          await w.write(await disc.read(off, CHUNK));
          p.update(Math.min(off + CHUNK, disc.size), disc.size);
        }
      });
    }
  };
}

// src/app/activity.ts
function createActivity(rules, startAt) {
  const maxStep = rules.maxStepMs ?? 1e3;
  let lastInput = startAt;
  let lastProgress = -Infinity;
  let seen = 0;
  let played = 0;
  const state2 = (at, ctx) => {
    if (!ctx.visible || ctx.paused) return "away";
    return at - lastInput <= rules.inputWindowMs || at - lastProgress <= rules.progressWindowMs ? "playing" : "idle";
  };
  return {
    input(at) {
      if (at > lastInput) lastInput = at;
    },
    discSeen(total, at) {
      if (total > seen) {
        seen = total;
        lastProgress = at;
      }
    },
    tick(dt, at, ctx) {
      if (dt <= 0 || dt > maxStep || state2(at, ctx) !== "playing") return 0;
      played += dt;
      return dt;
    },
    state: state2,
    get playedMs() {
      return played;
    }
  };
}

// src/app/stall.ts
function createStallDetector(opts) {
  let armed = false;
  let lastFrames = -1;
  let since = 0;
  let reported = false;
  return {
    /** 每次 HUD 刷新喂一次。 */
    feed(s) {
      if (!armed) {
        if (s.frames >= opts.armFrames) {
          armed = true;
          lastFrames = s.frames;
          since = s.now;
        }
        return "idle";
      }
      if (s.frames !== lastFrames) {
        lastFrames = s.frames;
        since = s.now;
        reported = false;
        return "ok";
      }
      if (!s.visible || s.paused || s.held || s.waitingDisc) {
        since = s.now;
        return "idle";
      }
      if (s.now - since >= opts.stallMs && !reported) {
        reported = true;
        return "stalled";
      }
      return reported ? "idle" : "ok";
    },
    /** 人点了「先不管」/ 救活没成：过 ms 之后允许再判一次。 */
    snooze(nowMs) {
      since = nowMs;
      reported = false;
    },
    get stalledForMs() {
      return (now) => now - since;
    }
  };
}

// src/app/unlock-triage.ts
var UNAVAILABLE_TRIES = 4;
var MAYBE_LATER = /* @__PURE__ */ new Set(["DiscUnavailableError", "TitleReadTimeout", "EtagChangedError"]);
function triageUnlockFailure(e, ctx) {
  const name = e?.name ?? "";
  if (!(ctx.isNetwork || MAYBE_LATER.has(name))) return { kind: "unsupported", why: whyText(e) };
  if (ctx.isNetwork || !ctx.reachable) return { kind: "retry", counted: false };
  return ctx.tries + 1 >= UNAVAILABLE_TRIES ? { kind: "unsupported", why: `\u5728\u7EBF\u65F6\u8FDE\u7740 ${UNAVAILABLE_TRIES} \u6B21\u90FD\u4ECE OneDrive \u62FF\u4E0D\u5230\u5B83\u3002\u4E0A\u4F20\u76D8\u4F20\u5230\u4E00\u534A\u5173\u6389\u9875\u9762\uFF0COneDrive \u4F1A\u7559\u4E0B\u8FD9\u6837\u4E00\u4E2A\u770B\u4E0D\u89C1\u7684\u534A\u622A\uFF0C\u8FC7\u4E00\u9635\u4F1A\u81EA\u5DF1\u6E05\u6389\u3002` } : { kind: "retry", counted: true };
}
function whyText(e) {
  const x = e;
  if (x?.name === "NotADiscError") return "\u8BFB\u4E0D\u5230\u76D8\u5934\uFF1A\u6587\u4EF6\u592A\u5C0F\uFF0C\u6216\u8005\u4E0D\u662F\u672C app \u505A\u7684\u76D8\u3002\u4E0A\u4F20\u76D8\u4F20\u5230\u4E00\u534A\u5173\u6389\u9875\u9762\u4E5F\u4F1A\u7559\u4E0B\u8FD9\u6837\u7684\u534A\u622A\u3002";
  if (x?.name === "CorruptDiscError") return "\u76D8\u5934\u548C\u6587\u4EF6\u5927\u5C0F\u5BF9\u4E0D\u4E0A\uFF1A\u591A\u534A\u662F\u6CA1\u4F20\u5B8C\u7684\u76D8\uFF08\u4E0A\u4F20\u4E2D\u9014\u5173\u4E86\u9875\u9762\uFF09\uFF0C\u6216\u8005\u6587\u4EF6\u574F\u4E86\u3002";
  if (x?.status === 404 || x?.status === 410) return "OneDrive \u8BF4\u8FD9\u4E2A\u6587\u4EF6\u4E0D\u5728\u4E86\u3002";
  return `\u8BFB\u4E0D\u51FA\u6765\uFF08${x?.message ?? String(e)}\uFF09\u3002`;
}

// src/app/pip.ts
var FIT_SLACK_PX = 2;
function fitDelta(inner, picture) {
  if (inner.h > inner.w || picture.w <= 0 || picture.h <= 0) return null;
  const dw = Math.round(picture.w) - inner.w, dh = Math.round(picture.h) - inner.h;
  return dw < -FIT_SLACK_PX || dh < -FIT_SLACK_PX ? { dw: Math.min(dw, 0), dh: Math.min(dh, 0) } : null;
}
var api = () => globalThis.documentPictureInPicture ?? null;
var pipSupported = () => typeof api()?.requestWindow === "function";
function copyStyles(from, to) {
  for (const sheet2 of Array.from(from.styleSheets)) {
    try {
      const css = Array.from(sheet2.cssRules).map((r) => r.cssText).join("\n");
      const style = to.createElement("style");
      style.textContent = css;
      to.head.append(style);
    } catch {
      if (!sheet2.href) continue;
      const link = to.createElement("link");
      link.rel = "stylesheet";
      link.href = sheet2.href;
      to.head.append(link);
    }
  }
}
function createPip(stage, host) {
  let win = null;
  let hole = null;
  const home = stage.ownerDocument;
  const restore = () => {
    if (!win) return;
    const w = win;
    win = null;
    if (hole) {
      hole.replaceWith(stage);
      hole = null;
    }
    stage.classList.remove("pip");
    host.onLeave();
    try {
      w.close();
    } catch {
    }
  };
  const open = async () => {
    const a = api();
    if (!a || win) return false;
    const r = stage.getBoundingClientRect();
    const pic = host.picture();
    const ar = pic && pic.width > 0 && pic.height > 0 ? pic.width / pic.height : 480 / 272;
    const width = Math.round(Math.min(Math.max(r.width / 2, 320), 720));
    const w = await a.requestWindow({ width, height: Math.round(width / ar) });
    const d = w.document;
    d.title = home.title;
    copyStyles(home, d);
    const sprite = home.querySelector("body > svg");
    if (sprite) d.body.prepend(sprite.cloneNode(true));
    d.body.classList.add("pip-body");
    hole = host.placeholder();
    stage.replaceWith(hole);
    stage.classList.add("pip");
    d.body.append(stage);
    win = w;
    w.addEventListener("pagehide", restore);
    let fitPending = false;
    const measure = () => {
      const p = host.picture();
      fitPending = !!p && fitDelta({ w: w.innerWidth, h: w.innerHeight }, { w: p.width, h: p.height }) !== null;
    };
    const fit = () => {
      if (!fitPending) return;
      fitPending = false;
      const p = host.picture();
      const dd = p && fitDelta({ w: w.innerWidth, h: w.innerHeight }, { w: p.width, h: p.height });
      if (!dd) return;
      try {
        w.resizeBy(dd.dw, dd.dh);
      } catch (e) {
        console.warn("[pip] fit", e);
      }
    };
    w.addEventListener("resize", measure);
    w.addEventListener("pointerup", fit, true);
    w.addEventListener("keyup", fit, true);
    measure();
    host.onEnter(w);
    return true;
  };
  return {
    get supported() {
      return pipSupported();
    },
    get active() {
      return win != null;
    },
    get window() {
      return win;
    },
    open,
    close: restore
  };
}

// node_modules/@internal/reference-window/dist/pointer-gesture.js
function pinchScaleRot(start, dist, angle, minScale, maxScale) {
  const scale = Math.max(minScale, Math.min(maxScale, start.vp.scale * (dist / start.dist)));
  let dRot = angle - start.angle;
  if (dRot > Math.PI)
    dRot -= 2 * Math.PI;
  if (dRot < -Math.PI)
    dRot += 2 * Math.PI;
  return { scale, rot: start.vp.rot + dRot };
}
function solveAnchorTranslation(modelPt, scale, rot, screenX, screenY) {
  const c = Math.cos(rot), s = Math.sin(rot);
  return {
    tx: screenX - (modelPt.x * scale * c - modelPt.y * scale * s),
    ty: screenY - (modelPt.x * scale * s + modelPt.y * scale * c)
  };
}

// node_modules/@internal/reference-window/dist/deck/deck.js
function cloneView(v) {
  if (!v)
    return null;
  const ok = Number.isFinite(v.tx) && Number.isFinite(v.ty) && Number.isFinite(v.scale) && Number.isFinite(v.rot);
  return ok ? { tx: v.tx, ty: v.ty, scale: v.scale, rot: v.rot } : null;
}
function clonePlay(p) {
  if (!p || !Number.isFinite(p.t))
    return null;
  return { t: p.t, loop: !!p.loop };
}
function cloneCarried(c) {
  return { at: c.at, item: JSON.parse(JSON.stringify(c.item)), files: { ...c.files } };
}
function clampIndex(i, n) {
  if (n <= 0)
    return 0;
  if (!Number.isFinite(i))
    return 0;
  return Math.max(0, Math.min(n - 1, Math.trunc(i)));
}
function createDeck() {
  let cards2 = [];
  let carried = [];
  let index = 0;
  let seq = 0;
  const listeners2 = /* @__PURE__ */ new Set();
  const emit = (what) => {
    let first = null, threw = false;
    for (const fn of [...listeners2]) {
      try {
        fn(what);
      } catch (e) {
        if (!threw) {
          threw = true;
          first = e;
        }
      }
    }
    if (threw)
      throw first;
  };
  const make = (c) => ({
    id: `c${++seq}`,
    kind: c.kind,
    name: c.name ?? "",
    bytes: c.bytes ?? null,
    mime: c.mime ?? (c.bytes?.type || ""),
    target: c.target ?? null,
    vp: cloneView(c.vp),
    play: clonePlay(c.play),
    origin: c.origin ?? null,
    ram: c.ram && Number.isFinite(c.ram.bytes) ? { bytes: c.ram.bytes } : null
  });
  const copy = (c) => ({ ...c, vp: cloneView(c.vp), play: clonePlay(c.play), ram: c.ram ? { bytes: c.ram.bytes } : null });
  const deck = {
    get size() {
      return cards2.length;
    },
    get index() {
      return index;
    },
    get current() {
      return cards2[index] ?? null;
    },
    cards: () => cards2,
    get: (id) => cards2.find((c) => c.id === id) ?? null,
    indexOf: (id) => cards2.findIndex((c) => c.id === id),
    snapshot: () => ({ index, cards: cards2.map(copy), carried: carried.map(cloneCarried) }),
    restore(s) {
      if (!s || !Array.isArray(s.cards))
        throw new TypeError("Deck.restore expects { cards: [...] }");
      cards2 = s.cards.map((c) => {
        if (!c || typeof c.kind !== "string" || !c.kind)
          throw new TypeError("Deck.restore: every card needs a non-empty string kind");
        return make(c);
      });
      carried = (s.carried ?? []).map(cloneCarried);
      index = clampIndex(s.index ?? 0, cards2.length);
      emit({ type: "reset" });
      return cards2.map((c) => c.id);
    },
    clear() {
      cards2 = [];
      carried = [];
      index = 0;
      emit({ type: "reset" });
    },
    add(card, opts) {
      if (!card || typeof card.kind !== "string" || !card.kind)
        throw new TypeError("Deck.add: card needs a non-empty string kind");
      const c = make(card);
      cards2.push(c);
      if (opts?.select ?? true)
        index = cards2.length - 1;
      emit({ type: "cards" });
      return c.id;
    },
    remove(id) {
      const i = deck.indexOf(id);
      if (i < 0)
        return;
      cards2.splice(i, 1);
      if (i < index)
        index -= 1;
      index = clampIndex(index, cards2.length);
      emit({ type: "cards" });
    },
    move(id, toIndex) {
      const from = deck.indexOf(id);
      if (from < 0)
        return;
      const to = clampIndex(toIndex, cards2.length);
      if (to === from)
        return;
      const viewing = cards2[index]?.id ?? null;
      const [c] = cards2.splice(from, 1);
      cards2.splice(to, 0, c);
      if (viewing)
        index = deck.indexOf(viewing);
      emit({ type: "cards" });
    },
    select(i) {
      const next = clampIndex(i, cards2.length);
      if (next === index)
        return;
      index = next;
      emit({ type: "view" });
    },
    setView(id, vp) {
      const c = deck.get(id);
      const v = cloneView(vp);
      if (!c || !v)
        return;
      const o = c.vp;
      if (o && o.tx === v.tx && o.ty === v.ty && o.scale === v.scale && o.rot === v.rot)
        return;
      c.vp = v;
      emit({ type: "view" });
    },
    setPlay(id, play2) {
      const c = deck.get(id);
      const p = clonePlay(play2);
      if (!c || !p)
        return;
      if (c.play && c.play.t === p.t && c.play.loop === p.loop)
        return;
      c.play = p;
      emit({ type: "view" });
    },
    setRam(id, on) {
      const c = deck.get(id);
      if (!c)
        return;
      if (on) {
        if (c.ram)
          return;
        c.ram = { bytes: c.bytes?.size ?? 0 };
      } else {
        if (!c.ram || !c.bytes)
          return;
        c.ram = null;
      }
      emit({ type: "cards" });
    },
    fill(id, bytes, mime) {
      const c = deck.get(id);
      if (!c || !c.ram)
        return;
      c.bytes = bytes;
      if (mime)
        c.mime = mime;
      emit({ type: "view" });
    },
    setTarget(id, target) {
      const c = deck.get(id);
      if (!c || c.target === target)
        return;
      c.target = target;
      emit({ type: "cards" });
      emit({ type: "invalidate", id });
    },
    invalidate(id) {
      if (deck.indexOf(id) < 0)
        return;
      emit({ type: "invalidate", id });
    },
    onChange(fn) {
      listeners2.add(fn);
      return () => {
        listeners2.delete(fn);
      };
    }
  };
  return deck;
}

// node_modules/@internal/reference-window/dist/deck/import.js
function sniffKind(f) {
  const t = (f.type || "").toLowerCase(), n = (f.name || "").toLowerCase();
  if (t.startsWith("image/"))
    return "image";
  if (t.startsWith("audio/"))
    return "audio";
  if (t.startsWith("video/"))
    return "video";
  if (t.startsWith("text/") || /\.(txt|md)$/.test(n))
    return "text";
  if (/\.(mp3|m4a|wav|flac|ogg|opus|aac|weba)$/.test(n))
    return "audio";
  if (/\.(png|jpe?g|webp|gif)$/.test(n))
    return "image";
  if (/\.(mp4|webm|mov)$/.test(n))
    return "video";
  return null;
}
async function importIntoDeck(deck, files, o) {
  const out = { added: [], filled: [], skipped: [], notes: [] };
  for (const f of files) {
    const name = f.name ?? "", kind = sniffKind(f);
    if (!kind || !o.kinds.includes(kind)) {
      out.skipped.push({ name, why: "unsupported" });
      continue;
    }
    const hole = deck.cards().find((c) => c.ram && !c.bytes && c.kind === kind && c.name === name);
    if (hole) {
      deck.fill(hole.id, f, f.type || void 0);
      deck.select(deck.indexOf(hole.id));
      out.filled.push(hole);
      continue;
    }
    try {
      let blob = f, mime = f.type || "", ram = false;
      const canCompress = !!o.transcoder?.kinds.includes(kind), limit = o.askAbove?.[kind];
      if (o.ask && limit !== void 0 && f.size > limit) {
        const estimate = canCompress && o.transcoder?.estimate ? await o.transcoder.estimate(kind, f).catch(() => null) : null;
        const choice = await o.ask({ name, kind, bytes: f.size, estimate, canCompress, suggestRam: o.ramAbove !== void 0 && f.size > o.ramAbove });
        if (choice === "cancel") {
          out.skipped.push({ name, why: "cancelled" });
          continue;
        }
        if (choice === "ram")
          ram = true;
        if (choice === "compress" && canCompress) {
          const r = await o.transcoder.encode(kind, f);
          blob = r.blob;
          mime = r.mime;
          if (r.note)
            out.notes.push(`${name}: ${r.note}`);
        }
      }
      if (kind === "text" && !mime)
        mime = /\.md$/i.test(name) ? "text/markdown" : "text/plain";
      const id = deck.add({ kind, bytes: blob, mime, name, ...ram ? { ram: { bytes: blob.size } } : {} });
      const c = deck.cards().find((x) => x.id === id);
      if (c)
        out.added.push(c);
    } catch (e) {
      out.skipped.push({ name, why: "failed", message: String(e?.message ?? e) });
    }
  }
  return out;
}

// node_modules/@internal/reference-window/dist/reference-window.js
function fmtBytes(n) {
  return n >= 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`;
}
var REF_LONG_PRESS_MS = 450;
var REF_LONG_PRESS_CANCEL_SQ = 64;
var LIVE_THROTTLE_MS = 300;
var IDLE_DIM_MS = 2500;
var NEAREST_MIN_SCALE = 2;
var MAX_SCALE = 50;
var MIN_VISIBLE_PX = 16;
var PAN_KEEP_PX = 24;
var SPAWN_LEFT = 112;
var SPAWN_TOP = 104;
var CLAMP_MIN_LEFT = 96;
var CLAMP_MIN_TOP = 96;
var DRAG_TOP_FLOOR = 60;
var MIN_EDGE = 96;
var TEXT_SCALE_MIN = 0.5;
var TEXT_SCALE_MAX = 4;
var REF_ICON_IDS = {
  folder: "folder",
  paste: "paste",
  cloud: "cloud",
  pip: "picture-in-picture",
  oneToOne: "one-to-one",
  trash: "trash-can",
  x: "x",
  plus: "new",
  prev: "chevron-left",
  next: "chevron-right",
  // 2026-09-29：挪动顺序 / 跳转列表。都是库里现成的图标（带杆的左右箭头、勾），没有新画。
  earlier: "back",
  later: "forward",
  current: "check",
  // 0.4.0（2026-10-09）：音频卡的播放 / 暂停。图标库里现成的。
  play: "play",
  pause: "pause"
};
function iconMarkup(id) {
  const sym = typeof document !== "undefined" ? document.querySelector(`svg symbol[id="${id}"]`) : null;
  if (!sym) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 2" aria-hidden="true" data-icon-missing="${id}"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>`;
  }
  const attrs = ["viewBox", "fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin"].map((a) => {
    const v = sym.getAttribute(a);
    return v != null ? `${a}="${v}"` : "";
  }).filter(Boolean).join(" ");
  return `<svg ${attrs} aria-hidden="true" data-icon="${id}">${sym.innerHTML}</svg>`;
}
function buildTemplate() {
  return `<style>
:host {
  position: fixed;
  top: 60px; left: 16px;
  display: block;
  width: 280px; height: 320px;
  min-width: ${MIN_EDGE}px; min-height: ${MIN_EDGE}px;
  resize: both;              /* \u684C\u9762\u9F20\u6807\u62D6\u53F3\u4E0B\u89D2\uFF1Btouch \u8D70 .grip */
  overflow: hidden;
  border: 1px solid var(--line, #3c4043);
  border-radius: var(--radius, 10px);
  outline: none;
  box-shadow: var(--shadow, 0 8px 24px rgba(0, 0, 0, 0.4));
  z-index: var(--z-window, 100);
  -webkit-tap-highlight-color: transparent;
  font-size: 13px;
  /* \u5E95 = \u7EAF\u8272 --void\uFF080.3.1\uFF0Cuser 2026-09-30\u300C\u80CC\u666F\u4E5F\u4E0D\u9700\u8981\u52A0\u70B9\uFF0C\u5C31\u7EAF\u8272\u300D\uFF09\u3002\u60F3\u8981\u548C\u81EA\u5DF1\u753B\u5E03\u540C\u6B3E\u70B9\u9635\u7684\u5BBF\u4E3B
     \uFF08WeebPaint 0830\u300C\u5E95=editor \u753B\u5E03 void \u540C\u6B3E\u300D\uFF09\u5728\u5BBF\u4E3B CSS \u91CC\u5BF9 wp-reference-window \u5199 background-image\u2014\u2014
     \u5916\u90E8\u6837\u5F0F\u76D6\u5F97\u8FC7 :host\u3002 */
  background-color: var(--void, #e6e2d6);
}
:host(:not([open])) { display: none; }
canvas {
  position: absolute; inset: 0; display: block;
  width: 100%; height: 100%;
  touch-action: none; cursor: grab;
}
canvas:active { cursor: grabbing; }
:host([pick]) canvas, :host([pick]) canvas:active { cursor: crosshair; }
/* gizmo \u5C3A\u5BF8 = \u5BB6\u65CF\u6D6E\u7A97\u6807\u51C6\u4EF6\uFF08user 0830\u300C\u6309 Layers \u7684\u5927\u5C0F\u6765\u300D\uFF09\uFF1A\u628A\u624B 22\xD722 \u6EE1\u94FA\uFF08\u540C styles.css
   .float-panel-resize \u7684\u53CC\u659C\u7EB9\u6E10\u53D8\uFF09\uFF0C\uFF0B 28\uFF0Cchips 14px \u56FE\u6807\u3002 */
/* \u53F3\u4E0A\u89D2\u4E24\u9897\u5706\u94AE\uFF1A\uFF0B\uFF08\u83DC\u5355\uFF09\u5728\u5DE6\u3001\xD7\uFF08\u5173\u7A97\uFF09\u5728\u6700\u53F3\u2014\u2014\u5173\u95ED\u4ECE\u83DC\u5355\u91CC\u63D0\u51FA\u6765\uFF082026-09-11 user\u300C\u53C2\u8003\u7A97\u7684\u5173\u95ED\u6309\u94AE\u63D0\u51FA\u6765\u653E\u5728\u2026\u53F3\u8FB9\u3002\u4E0D\u7136\u627E\u4E0D\u5230\u300D\uFF09 */
.plus, .close {
  position: absolute; top: 4px; z-index: 3;
  width: 28px; height: 28px; padding: 0; border: none; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: color-mix(in srgb, var(--bg, #202124) 72%, transparent);
  color: var(--ink, #e8eaed); cursor: pointer;   /* \u7EAF\u83DC\u5355\u94AE\uFF080830 user\uFF1A\uFF0B\u517C\u62D6\u628A\u5F88\u5947\u602A\uFF0C\u62D6\u5F52\u5DE6\u4E0A\u89D2\u70B9\u9635\u628A\u624B\uFF09 */
  user-select: none; -webkit-user-select: none;
  transition: opacity 0.35s;
}
.close { right: 4px; }
.plus { right: 36px; }
.plus svg, .close svg { width: 16px; height: 16px; pointer-events: none; }
/* 0.4.4\uFF1A\u4E09\u9897\u5706\u94AE\u52A0\u4E00\u5708\u6DE1\u8FB9\u2014\u2014\u5E95\u8272\u548C\u5361\u7247\u4E00\u6837\u6697\u7684\u65F6\u5019\uFF08KudsRocket \u6587\u5B57\u5361\uFF09\u5706\u94AE\u6574\u4E2A\u770B\u4E0D\u89C1\u3001\u53EA\u5269\u4E2A\u56FE\u6807\uFF0810-18 \u622A\u56FE\u6838\u8FC7\uFF09 */
.plus, .close, .move .knob { box-shadow: 0 0 0 1px color-mix(in srgb, var(--ink, #e8eaed) 28%, transparent); }
.plus:hover, .close:hover { background: color-mix(in srgb, var(--bg, #202124) 90%, transparent); }
/* \u62D6\u52A8\u628A\u624B\uFF08user 0830\u300C\u5DE6\u4E0A\u89D2\u52A0\u4E00\u70B9\u5C0F\u70B9\u4E00\u6837\u7684\u62D6\u52A8\u533A\u57DF\u2026\u4E09\u89D2\u5F62\u5E03\u5C40\uFF0C\u6CA1\u6709\u6309\u94AE\u5F0F\u9AD8\u4EAE\uFF0C\u53C2\u8003 resize\u300D\uFF09\uFF1A
   \u4E0E\u53F3\u4E0B resize \u628A\u624B\u540C\u5F62\u5236\u540C\u5C3A\u5BF8\u2014\u2014\u70B9\u9635\u88C1\u6210\u5DE6\u4E0A\u4E09\u89D2\u3001\u65E0\u5E95\u65E0\u6846\uFF0C\u53EA\u9760 opacity \u547C\u5438\u3002gizmo \u7EB9\u7406\u975E icon\u3002 */
/* \u4E24\u628A\u624B\u5728\u6697\u56FE\uFF08\u4E09\u6B21\u5143\u76F8\u7247\uFF09\u4E0A\u770B\u4E0D\u6E05\uFF08user 0830\uFF09\u2192 \u4E0E \uFF0B \u540C\u6B3E\u300C\u534A\u900F\u660E\u4E3B\u9898\u5E95 + \u4E3B\u8272 gizmo\u300D\uFF1A
   \u5143\u7D20\u672C\u8EAB\u88C1\u6210\u4E09\u89D2\u5F62\u5E95\u677F\uFF08clip-path\uFF09\uFF0C\u7EB9\u7406\u8D70 ::after \u7528 currentColor=--ink\u3002\u6D45\u4E3B\u9898=\u767D\u5E95\u9ED1\u70B9\u3001\u6697\u4E3B\u9898=\u9ED1\u5E95\u767D\u70B9\u3002 */
/* 0.4.1\uFF08user 2026-10-13\u300C\u53C2\u8003\u7A97\u5DE6\u4E0A\u89D2\u5176\u5B9E\u4E00\u76F4\u6BD4\u8F83\u96BE\u62D6\u300D\uFF09\uFF1A\u53EF\u70B9\u533A\u653E\u5927\u5230 36 px \u900F\u660E\u65B9\u5757\uFF0C\u770B\u5F97\u89C1\u7684\u8FD8\u662F 22 px \u5C0F\u4E09\u89D2\u2014\u2014\u4EBA\u7784\u7740\u4E09\u89D2\u6309\uFF0C\u8FD8\u662F\u70B9\u4E0D\u4E2D\u3002
   0.4.3\uFF08user 2026-10-18\u300C\u5DE6\u4E0A\u89D2\u90A3\u4E2A\u5F88akward\u5F88\u96BE\u70B9\u7684\u3002\u3002\u3002\u603B\u662F\u70B9\u4E0D\u4E2D\uFF0C\u4F18\u5316\u4E00\u4E0B\uFF0C\u6216\u8005\u5E72\u8106\u6362\u6210\u4E00\u4E2A\u70B9\u4E86\u4E4B\u540E\u53D8\u6210\u56FE\u6807\uFF0C\u62D6\u52A8\u662F\u62D6\u52A8\u7684\u591A\u4E49\u6309\u94AE\u300D\uFF09\uFF1A
   \u6362\u6210\u548C \uFF0B / \xD7 \u540C\u6B3E\u7684\u5706\u94AE\uFF0828 px\uFF0C\u534A\u900F\u660E\u4E3B\u9898\u5E95 + \u56FE\u6807\uFF09\uFF0C\u53EF\u70B9\u533A 36 px\uFF08\u89E6\u5C4F 44 px\uFF09\u3002**\u70B9\u4E00\u4E0B = \u7F29\u6210\u5C0F\u56FE\u6807**\uFF08\u5C0F\u56FE\u6807\u5C31\u51FA\u73B0\u5728\u540C\u4E00\u4E2A\u4F4D\u7F6E\u3001\u540C\u4E00\u4E2A\u56FE\u6807\uFF0C
   \u518D\u70B9\u4E00\u4E0B\u6062\u590D\uFF09\uFF0C**\u6309\u4F4F\u62D6 = \u632A\u7A97**\uFF08\u52A8\u8FC7 4 px \u624D\u7B97\u62D6\uFF09\u3002\u56FE\u6807\u7528\u5C0F\u7A97\u90A3\u4E2A\uFF08= \u6536\u8D77\u540E\u7684\u5C0F\u56FE\u6807\uFF09\uFF0C\u770B\u5F97\u51FA\u300C\u70B9\u4E86\u4F1A\u53D8\u6210\u4EC0\u4E48\u300D\u3002 */
.move {
  position: absolute; left: 0; top: 0; width: 36px; height: 36px; z-index: 3;
  padding: 0; border: none; background: transparent;
  cursor: grab; touch-action: none; user-select: none; -webkit-user-select: none;
  color: var(--ink, #e8eaed); opacity: 0.85;
  transition: opacity 0.35s;
}
@media (pointer: coarse) { .move { width: 44px; height: 44px; } }
.move .knob {
  position: absolute; left: 4px; top: 4px; width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: color-mix(in srgb, var(--bg, #202124) 72%, transparent);
  pointer-events: none;
}
.move .knob svg { width: 16px; height: 16px; }
.move:hover { opacity: 1; }
.move:hover .knob { background: color-mix(in srgb, var(--bg, #202124) 90%, transparent); }
.move:active { cursor: grabbing; }
/* resize \u628A\u624B\uFF1A\u659C\u7EB9\u6CBF styles.css .float-panel-resize \u5BB6\u65CF\u6807\u51C6\u4EF6\uFF1B19\uFF08user 0830\uFF1A\u89C6\u89C9\u4E0A\u659C\u7EB9\u6BD4\u70B9\u9635\u663E\u5927\uFF0C\u7A0D\u5C0F\u4E00\u70B9\uFF09 */
.grip {
  position: absolute; right: 0; bottom: 0; width: 19px; height: 19px;
  cursor: nwse-resize; touch-action: none; z-index: 2;
  color: var(--ink, #e8eaed); opacity: 0.85;
  background: color-mix(in srgb, var(--bg, #202124) 72%, transparent);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  transition: opacity 0.35s;
}
.grip:hover { opacity: 1; }
/* \u659C\u7EB9\u4F4D\u7F6E\uFF1A\u6807\u51C6\u4EF6\u662F 45\u201352 / 66\u201373%\uFF0C\u4F46\u672C\u628A\u624B\u88C1\u6210\u4E09\u89D2\u540E\u659C\u8FB9\u6B63\u843D\u5728 135\xB0 \u6E10\u53D8\u7EBF\u7684 50% \u4F4D\u2014\u2014\u7B2C\u4E00\u9053\u7EB9\u4F1A\u88AB
   \u8170\u65A9\u6210\u7EC6\u4E1D\uFF08user 0830 \u6293\u5230\uFF09\u3002\u6574\u4F53\u5F80\u89D2\u843D\u632A 13%\uFF1A58\u201365 / 79\u201386%\uFF0C\u659C\u8FB9\u5916\u7559 ~2px \u5E95\u677F\u767D\u8FB9\u3002 */
.grip::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(135deg,
    transparent 0 58%, currentColor 58% 65%,
    transparent 65% 79%, currentColor 79% 86%,
    transparent 86%);
}
.chips {
  position: absolute; left: 50%; bottom: 4px; transform: translateX(-50%); z-index: 2;
  display: flex; align-items: center; gap: 2px;
  background: color-mix(in srgb, var(--bg, #202124) 72%, transparent);
  border-radius: 12px; padding: 1px 4px;
  color: var(--ink, #e8eaed);
  cursor: default;   /* \u8BA1\u6570\u6587\u672C\u4E0D\u51FA I-beam\uFF1B\u6309\u94AE\u5404\u81EA pointer */
  transition: opacity 0.35s;
}
.chips.hidden { display: none; }
.chip { background: transparent; border: none; color: inherit; padding: 2px; cursor: pointer; display: flex; }
.chip svg { width: 14px; height: 14px; }
.chip-count { font-size: 11px; min-width: 26px; text-align: center; color: var(--ink-soft, #9aa0a6); font-family: inherit; justify-content: center; }
/* gizmo \u663E\u9690\u4E24\u6863\uFF08user 0830\u300C\u9F20\u6807\u79FB\u8D70\u65F6 gizmos \u90FD\u9690\u85CF\u300D\uFF1B\u300C12.12 iPad \u770B\u8D77\u6765\u8FD8\u884C\u4E0D\u5E72\u6270\u300D\u2192 \u89E6\u5C4F\u6863\u7EF4\u6301\uFF09\uFF1A
   .away = \u80FD\u60AC\u505C\u7684\u8BBE\u5907\u6307\u9488\u79BB\u7A97 \u2192 \u5168\u9690\uFF08\u8FDB\u7A97\u5373\u73B0\uFF09\uFF1B.idle = \u95F2\u7F6E 2.5s \u6DE1\u81F3 .35\uFF08\u89E6\u5C4F\u65E0\u60AC\u505C\u53EA\u6709\u8FD9\u6863\uFF0C
   \u5168\u9690\u4F1A\u8BA9 chips \u53D8\u76F2\u64CD\u4F5C\uFF09\u3002\u83DC\u5355\u5F39\u5C42\u4E0D\u5728\u5176\u5217\u3002 */
:host(.idle) .plus, :host(.idle) .close, :host(.idle) .grip, :host(.idle) .chips, :host(.idle) .move { opacity: 0.35; }
/* 0.4.1 \u6536\u6210\u5C0F\u56FE\u6807\uFF08user 2026-10-09\u300Creference window\u52A0\u4E00\u4E2A\u6700\u5C0F\u5316\uFF08\u53D8\u6210\u4E00\u4E2A\u53EF\u62D6\u52A8\u5C0F\u56FE\u6807\uFF09\u7684\u529F\u80FD\uFF0C\u4EE5\u540E\u8BA9opus\u5F04\u300D\uFF09\uFF1A
   \u7A97\u7F29\u6210 44 px \u5706\u94AE\uFF08\u5C3A\u5BF8\u7528 !important \u538B\u4F4F style \u91CC\u7684\u5BBD\u9AD8\u2014\u2014\u539F\u6765\u7684\u5BBD\u9AD8\u539F\u6837\u7559\u7740\uFF0C\u6062\u590D\u5C31\u56DE\u53BB\uFF09\uFF1B\u91CC\u9762\u53EA\u5269 .bubble\uFF1A\u62D6 = \u632A\u4F4D\u7F6E\uFF0C\u70B9 = \u6062\u590D\u3002 */
:host([minimized]) {
  box-sizing: border-box !important; width: 44px !important; height: 44px !important; min-width: 0 !important; min-height: 0 !important;
  border-radius: 50% !important; resize: none !important; background-color: color-mix(in srgb, var(--bg, #202124) 85%, transparent);
}
:host([minimized]) :is(canvas, .text, .audio, .empty, .move, .plus, .close, .grip, .chips) { display: none !important; }
.bubble { display: none; }
:host([minimized]) .bubble {
  display: flex; position: absolute; inset: 0; z-index: 4; align-items: center; justify-content: center;
  padding: 0; border: none; border-radius: 50%; background: transparent; color: var(--ink, #e8eaed);
  cursor: grab; touch-action: none; user-select: none; -webkit-user-select: none;
}
:host([minimized]) .bubble:active { cursor: grabbing; }
.bubble svg { width: 22px; height: 22px; pointer-events: none; }
:host(.away) .plus, :host(.away) .close, :host(.away) .grip, :host(.away) .chips, :host(.away) .move { opacity: 0; }
/* \u83DC\u5355\u4E0D\u5728 shadow \u91CC\uFF082026-09-02\uFF09\uFF1A\u6302 body \u8D70 ui/popup-menu\u2014\u2014absolute \u5B50\u8282\u70B9\u4F1A\u88AB :host overflow:hidden \u88C1\u3001
   \u4E5F\u56F0\u5728 :host \u7684 stacking context \u91CC\u88AB\u522B\u7684\u6D6E\u7A97\u76D6\uFF08\u8001\u9519\u8BEF\u590D\u53D1\u6839\u56E0\uFF09\u3002 */
/* \u6587\u5B57\u5361\uFF1A\u53EA\u8BFB\u3001\u53EF\u9009\u4E2D\u3001\u53EF\u6EDA\u52A8\u3002\u5355\u6307\u6EDA\u52A8\u4EA4\u7ED9\u6D4F\u89C8\u5668\uFF08touch-action: pan-y\uFF09\uFF0C\u53CC\u6307\u634F\u5408\u8C03\u5B57\u53F7\u7531\u7EC4\u4EF6\u63A5\u3002
   \u5E95\u8272\u7528\u4E3B\u9898\u5E95\u800C\u4E0D\u662F\u70B9\u9635\uFF1A\u5B57\u8981\u80FD\u8BFB\u3002\u9009\u4E2D\u6587\u5B57\u9700\u8981\u628A\u7126\u70B9\u62FF\u8FC7\u6765 \u2192 data-takes-focus \u653E\u884C\uFF08\u5176\u4F59 gizmo \u4E0D\u62A2\u7126\u70B9\uFF09\u3002 */
.text {
  position: absolute; inset: 0; display: none; overflow: auto; z-index: 1;
  box-sizing: border-box; padding: 36px 12px 30px 12px;   /* 0.4.4\uFF1A\u4E0A\u8FB9\u7559\u51FA\u5706\u94AE\u90A3\u4E00\u6392\uFF084 + 28 px\uFF09\uFF0C\u5B57\u4E0D\u518D\u88AB\u5DE6\u4E0A\u89D2\u5706\u94AE / \uFF0B / \xD7 \u76D6\u4F4F */
  color: var(--ink, #e8eaed);
  background: color-mix(in srgb, var(--bg, #202124) 94%, transparent);
  font-size: calc(13px * var(--ref-text-scale, 1)); line-height: 1.55;
  white-space: pre-wrap; overflow-wrap: anywhere;
  user-select: text; -webkit-user-select: text;
  touch-action: pan-y; cursor: text;
  -webkit-overflow-scrolling: touch;
}
.text.shown { display: block; }
.text.missing { color: var(--ink-soft, #9aa0a6); font-style: italic; }
.empty {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 6px; text-align: center; color: var(--ink-soft, #9aa0a6);
  pointer-events: none; padding: 12px; font-size: 12px;
}
.empty.hidden { display: none; }
/* 0.4.0 \u97F3\u9891\u5361\uFF082026-10-09\uFF09\uFF1A\u5361\u7247\u5185\u5BB9\u533A\u4E00\u4E2A\u64AD\u653E / \u6682\u505C + \u540D\u5B57 + \u80FD\u62D6\u7684\u8FDB\u5EA6\u6761 + \u65F6\u95F4\uFF1B\u4E0D\u81EA\u52A8\u653E\uFF08user\u300C\u5176\u5B9E\u6211\u4E5F\u89C9\u5F97\u81EA\u52A8\u653E\u53CD\u800C\u70E6\uFF0C\u8981\u4E0D\u8FD8\u662F\u64AD\u653E\u952E\u5427\u300D\uFF09 */
.audio { position: absolute; inset: 0; display: none; z-index: 1; align-items: center; gap: 12px; padding: 12px 14px 30px 14px; box-sizing: border-box;
  color: var(--ink, #e8eaed); background: color-mix(in srgb, var(--bg, #202124) 94%, transparent); }
.audio.shown { display: flex; }
.audio .aplay { flex: none; width: 52px; height: 52px; border-radius: 50%; border: 1px solid var(--line, #5f6368); background: transparent; color: inherit; display: grid; place-items: center; cursor: pointer; padding: 0; }
.audio .aplay svg { width: 26px; height: 26px; }
.audio .ainfo { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px; }
.audio .aname { font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.audio .aseek { width: 100%; margin: 0; accent-color: var(--ink, #e8eaed); }
.audio .atime { font-size: 12px; color: var(--ink-soft, #9aa0a6); font-variant-numeric: tabular-nums; }
.audio.missing .aname { color: var(--ink-soft, #9aa0a6); font-style: italic; }
.empty ::slotted(*), .empty p { margin: 0; }
:host(:focus) { box-shadow: var(--shadow, 0 8px 24px rgba(0, 0, 0, 0.4)), inset 0 0 0 2px color-mix(in srgb, var(--ink, #e8eaed) 45%, transparent); }   /* \u6709\u7126\u70B9 = \u7C98\u8D34\u843D\u8FD9\u91CC\uFF1A\u4E00\u5708\u7EC6\u63CF\u8FB9 */
</style>
<canvas></canvas>
<div class="text" part="text" data-takes-focus></div>
<div class="audio" part="audio"><button class="aplay" type="button"></button><div class="ainfo"><div class="aname"></div><input class="aseek" type="range" min="0" max="1000" step="1" value="0"><div class="atime"></div></div></div>
<div class="empty"><slot name="empty"><p>\uFF0B \u5BFC\u5165\u53C2\u8003</p></slot></div>
<button class="move" part="move" type="button" title="Tap: minimize \xB7 drag: move" aria-label="Tap: minimize \xB7 drag: move"><span class="knob">${iconMarkup(REF_ICON_IDS.pip)}</span></button>
<button class="plus" part="plus" type="button" aria-haspopup="true">${iconMarkup(REF_ICON_IDS.plus)}</button>
<button class="close" part="close" type="button">${iconMarkup(REF_ICON_IDS.x)}</button>
<div class="grip" part="grip"></div>
<button class="bubble" part="bubble" type="button" title="Restore (drag to move)" aria-label="Restore (drag to move)">${iconMarkup(REF_ICON_IDS.pip)}</button>
<div class="chips hidden">
  <button class="chip" data-page="-1" type="button">${iconMarkup(REF_ICON_IDS.prev)}</button>
  <button class="chip chip-count" data-jump type="button">1/1</button>
  <button class="chip" data-page="1" type="button">${iconMarkup(REF_ICON_IDS.next)}</button>
</div>
`;
}
var WpReferenceWindow = class extends HTMLElement {
  static get observedAttributes() {
    return ["open", "no-cloud", "minimized"];
  }
  /** 0.3.1：窗身可拿焦点（粘贴归焦点）。属性只能在这里加（自定义元素构造器里加属性 = createElement 直接炸）；宿主可自定 tabindex。 */
  connectedCallback() {
    if (!this.hasAttribute("tabindex"))
      this.tabIndex = 0;
  }
  // no-cloud：宿主云功能关 → 藏云盘选图项
  // 宿主端口：live 合成 provider（一次性 set；组件在当前页 kind=live 时消费）。null = 这个宿主没有画面可出。
  liveProvider = null;
  /** 两帧之间至少隔多久（毫秒）。归宿主定：只有宿主知道自己出一帧多贵。缺省 300 = WeebPaint 现值。 */
  liveMinIntervalMs = LIVE_THROTTLE_MS;
  /** ＋ 菜单里列哪些画面（多台相机的宿主用）。null = 只列一项。 */
  liveTargets = null;
  /** 链接卡的内容端口（0.3.0）：bytes 为空、有 target 的非 live 卡从这里要内容。null = 这个宿主没有可链接的东西。 */
  linkProvider = null;
  // 宿主端口：＋ 菜单（一次性 set = ui/popup-menu 的 togglePopupMenu）。null = 没菜单（裸挂时 ＋ 无反应）。
  menuPort = null;
  /** 拖把地板（宿主注入 = ui/floating-window 运行时量的「顶栏下缘」；缺省 60 = 旧常数，裸挂可用）。
   *  拖 / 恢复 / 视口钳制三条路都吃它——出血区规则只准一个出处（2026-09-02 C2）。 */
  topFloor = DRAG_TOP_FLOOR;
  /** 0.4.0 音频卡的速度档（宿主注入，如 [1, 0.75, 0.5]；保音高）。null = 不给速度（库的缺省；user 2026-10-09「默认不开，moonsinger开」）。 */
  audioRates = null;
  /** 底边地板（宿主注入 = 屏底被占掉的高度：app 内软键盘、iOS 键盘那一块……；缺省 0）。拖 / resize / 视口钳制都吃它——
   *  否则右下角的 resize 把手会被键盘盖住（user 2026-09-30「参考窗或者任何浮窗需要保证 move 和 resize 能点到」）。改了之后宿主调 reclamp()。 */
  bottomFloor = 0;
  _canvas;
  _cctx;
  _textEl;
  _audioLayer;
  _aPlay;
  _aName;
  _aSeek;
  _aTime;
  /** 0.4.0 音频卡：一个窗一个 <audio>，记着正在放哪张卡。翻到别的卡 / 关窗都不停（user「关窗的时候音乐不停」、2026-10-09「1. 不停」）。 */
  _audio = null;
  _audioOf = null;
  _audioUrl = null;
  _rate = 1;
  _emptyEl;
  _plusEl;
  _menu = null;
  // 菜单句柄（开着才非 null）
  _delArmed = false;
  // 删除二段确认 armed（菜单关即复位）
  _chipsEl;
  _chipCountEl;
  _menuAnchor = null;
  // 现在开着的菜单挂在谁身上（＋ 或计数钮）
  // ---- 多参考模型：卡片归牌组；这里只留画它们要用的东西 ----
  _deck = createDeck();
  _offDeck = null;
  _muted = false;
  // 自己改牌组的那一下不听自己的回声（同步的重入守卫，不是时间窗）
  _shownId = null;
  // 现在画着的是哪张卡
  _bitmaps = /* @__PURE__ */ new Map();
  // 解好的位图，按卡 id
  _decoding = /* @__PURE__ */ new Set();
  // 正在解的卡
  _texts = /* @__PURE__ */ new Map();
  // 解好的文字，按卡 id
  _linked = /* @__PURE__ */ new Map();
  // 链接卡取回来的字节（只显示不存）
  _linkMissing = /* @__PURE__ */ new Set();
  // 链接卡这次取不到（页删了…）
  _resolving = /* @__PURE__ */ new Set();
  // 正在向宿主要内容的链接卡
  _textPinch = [];
  // 文字层上的指针（捏合调字号）
  _textPinchStart = null;
  _textScrollRaf = null;
  _labels = {};
  _liveSource = null;
  _liveSize = null;
  // 这张卡「本来多大」（宿主没说 = 画面的像素尺寸）
  _liveOf = null;
  // 手上这一帧是哪张卡的
  _liveDirty = false;
  _lastLiveComposeT;
  _liveThrottle = null;
  _vp = { tx: 0, ty: 0, scale: 1, rot: 0 };
  _raf = null;
  _panelDrag = null;
  _resizeDrag = null;
  _pointers = /* @__PURE__ */ new Map();
  _gestureStart = null;
  _picking = false;
  _longPressTimer = null;
  _lpStart = null;
  _lpEvent = null;
  _idleTimer = null;
  constructor() {
    super();
    window.addEventListener?.("resize", () => {
      if (!this.open)
        return;
      if (this._clampIntoViewport())
        this._emitRect();
    });
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = buildTemplate();
    this._canvas = root.querySelector("canvas");
    this._textEl = root.querySelector(".text");
    this._audioLayer = root.querySelector(".audio");
    this._aPlay = root.querySelector(".aplay");
    this._aName = root.querySelector(".aname");
    this._aSeek = root.querySelector(".aseek");
    this._aTime = root.querySelector(".atime");
    this._aPlay.innerHTML = iconMarkup(REF_ICON_IDS.play);
    this._aPlay.addEventListener("click", () => this.togglePlay());
    this._aSeek.addEventListener("input", () => {
      const a = this._audio;
      if (a && this._audioOf === this._deck.current?.id && Number.isFinite(a.duration)) {
        a.currentTime = Number(this._aSeek.value) / 1e3 * a.duration;
        this._updateAudioLayer();
      }
    });
    this._aSeek.addEventListener("change", () => this._saveAudioPos());
    this.addEventListener("keydown", (e) => {
      if (e.key === " " && this._deck.current?.kind === "audio" && !e.composedPath()[0]?.closest?.("input, .text")) {
        e.preventDefault();
        e.stopPropagation();
        this.togglePlay();
      }
    });
    this._emptyEl = root.querySelector(".empty");
    this._plusEl = root.querySelector(".plus");
    this._chipsEl = root.querySelector(".chips");
    this._chipCountEl = root.querySelector(".chip-count");
    this._cctx = this._canvas.getContext("2d");
    this._bind(root);
    this._offDeck = this._deck.onChange((what) => this._onDeckChange(what));
  }
  // ---- 牌组（宿主可以直接用；也可以换成自己的，比如和 VR 视图共用一副）----
  get deck() {
    return this._deck;
  }
  set deck(d) {
    if (!d || d === this._deck)
      return;
    this._offDeck?.();
    this._closeAllBitmaps();
    this._deck = d;
    this._shownId = null;
    this._offDeck = d.onChange((what) => this._onDeckChange(what));
    this._syncFromDeck();
  }
  // ---- 属性面（入向；程序性 set 不发事件）----
  /** 键盘焦点在参考窗上（含窗内文字卡）= 宿主的 Ctrl+V 应落到这里（0.3.1，user「看 focus」）。 */
  get hasFocus() {
    return document.activeElement === this;
  }
  get open() {
    return this.hasAttribute("open");
  }
  set open(v) {
    this.toggleAttribute("open", !!v);
    if (!v) {
      this._menu?.close();
      this.toggleAttribute("minimized", false);
    }
  }
  // 关窗 = 菜单一并收（菜单挂 body，不随窗隐）；收着的小图标也一起还原（再开 = 整窗）
  /** 0.4.1 收成小图标（程序性 set 不发事件，同 open）。收着的时候 `rect` 照样报原来的宽高（只有位置跟着小图标走），宿主存的大小不会被 44×44 盖掉。 */
  get minimized() {
    return this.hasAttribute("minimized");
  }
  set minimized(v) {
    if (!!v === this.minimized)
      return;
    if (v) {
      const r = this.getBoundingClientRect();
      if (r.width > 0 && r.height > 0)
        this._restoreSize = { w: r.width, h: r.height };
    }
    this.toggleAttribute("minimized", !!v);
    if (v)
      this._menu?.close();
    else
      this._afterRestore();
  }
  _restoreSize = null;
  attributeChangedCallback(name, oldV, newV) {
    if (name === "no-cloud") {
      this._menu?.refresh();
      return;
    }
    if (name === "open" && oldV !== newV && newV != null)
      this._afterShow();
  }
  close() {
    this.open = false;
  }
  // 程序性关（不发事件）
  /** 0.4.0 导入漏斗（deck/import.ts）：嗅种类 → 够大就问宿主（ask）→ 原样 / 压（宿主注入的 transcoder）/ 不要 → 进牌组；加进去了就开窗。
   *  kinds 缺省 = 图片 / 文字 / 音频。结果（加了哪些、哪些没进、为什么）原样还给宿主，由宿主明说。 */
  async importFiles(files, opts = {}) {
    const r = await importIntoDeck(this._deck, files, { ...opts, kinds: opts.kinds ?? ["image", "text", "audio"] });
    if (r.added.length || r.filled.length)
      this.open = true;
    return r;
  }
  /** 元素从文档里拿掉 = 停（关窗不停；整个窗没了才停）。 */
  disconnectedCallback() {
    this._audio?.pause();
  }
  // ---- 0.4.0 音频卡 ----
  /** 当前这张音频卡：播放 / 暂停（换了一张卡 = 先停上一张、从这张记着的位置放）。不是音频卡 = 什么都不做。 */
  togglePlay() {
    const cur = this._deck.current;
    if (!cur || cur.kind !== "audio")
      return;
    const bytes = cur.bytes ?? this._linked.get(cur.id) ?? null;
    if (!bytes)
      return;
    if (this._audioOf !== cur.id)
      this._loadAudio(cur, bytes);
    const a = this._audio;
    if (a.paused)
      a.play().catch((e) => this._emit("notice", { level: "error", code: "decode-failed", id: cur.id, name: cur.name, message: String(e?.message ?? e) }));
    else
      a.pause();
    this._updateAudioLayer();
  }
  /** 正在放（任何一张音频卡）。 */
  get playing() {
    return !!this._audio && !this._audio.paused;
  }
  _loadAudio(c, bytes) {
    this._stopAudio();
    const a = new Audio(), t0 = c.play?.t ?? 0;
    this._audioUrl = URL.createObjectURL(bytes);
    a.preload = "auto";
    a.src = this._audioUrl;
    a.loop = !!c.play?.loop;
    a.playbackRate = this._rate;
    a.preservesPitch = true;
    if (t0 > 0)
      a.addEventListener("loadedmetadata", () => {
        a.currentTime = Math.min(t0, Number.isFinite(a.duration) ? a.duration : t0);
      }, { once: true });
    for (const ev of ["timeupdate", "play", "pause", "ended", "loadedmetadata", "durationchange"])
      a.addEventListener(ev, () => this._updateAudioLayer());
    a.addEventListener("pause", () => this._saveAudioPos());
    a.addEventListener("error", () => this._emit("notice", { level: "error", code: "decode-failed", id: c.id, name: c.name, message: "audio could not be decoded" }));
    this._audio = a;
    this._audioOf = c.id;
  }
  _stopAudio() {
    if (this._audio) {
      this._saveAudioPos();
      this._audio.pause();
      this._audio.removeAttribute("src");
    }
    if (this._audioUrl)
      URL.revokeObjectURL(this._audioUrl);
    this._audio = null;
    this._audioOf = null;
    this._audioUrl = null;
  }
  /** 放到哪 / 循环记进卡（视图态：牌组发 view，不标脏）。 */
  _saveAudioPos() {
    const a = this._audio, id = this._audioOf;
    if (!a || !id || this._deck.indexOf(id) < 0)
      return;
    this._deck.setPlay(id, { t: Math.round(a.currentTime * 100) / 100, loop: a.loop });
  }
  _updateAudioLayer() {
    const cur = this._deck.current, isAudio = cur?.kind === "audio";
    this._audioLayer.classList.toggle("shown", isAudio);
    if (!isAudio || !cur)
      return;
    const a = this._audio && this._audioOf === cur.id ? this._audio : null, playing = !!a && !a.paused;
    const want = playing ? REF_ICON_IDS.pause : REF_ICON_IDS.play;
    if (this._aPlay.dataset.icon !== want) {
      this._aPlay.innerHTML = iconMarkup(want);
      this._aPlay.dataset.icon = want;
    }
    this._aPlay.setAttribute("aria-label", playing ? this._labels.pause ?? "Pause" : this._labels.play ?? "Play");
    const missing = !cur.bytes && !this._linked.get(cur.id);
    this._audioLayer.classList.toggle("missing", missing);
    const hole = missing && !!cur.ram;
    const name = hole ? `${cur.name || this._labels.kindNames?.audio || "audio"} \xB7 ${fmtBytes(cur.ram.bytes)} \u2014 ${this._ramMissingText()}` : missing && this._linkMissing.has(cur.id) ? this._labels.linkMissing ?? "Content unavailable" : cur.name || this._labels.kindNames?.audio || "audio";
    if (this._aName.textContent !== name)
      this._aName.textContent = name;
    const dur = a && Number.isFinite(a.duration) ? a.duration : null, t = a ? a.currentTime : cur.play?.t ?? 0;
    this._aPlay.disabled = missing;
    this._aSeek.disabled = !dur;
    this._aSeek.value = String(dur ? Math.round(t / dur * 1e3) : 0);
    const fmt2 = (x) => `${Math.floor(x / 60)}:${String(Math.floor(x % 60)).padStart(2, "0")}`;
    this._aTime.textContent = `${fmt2(t)}${dur ? ` / ${fmt2(dur)}` : ""}${a && a.playbackRate !== 1 ? ` \xB7 ${a.playbackRate}\xD7` : ""}${cur.play?.loop ? ` \xB7 ${this._labels.loop ?? "loop"}` : ""}`;
  }
  get live() {
    return this._deck.current?.kind === "live";
  }
  isLive() {
    return this.live;
  }
  get viewport() {
    return { ...this._vp };
  }
  set viewport(v) {
    if (!v)
      return;
    if (Number.isFinite(v.tx))
      this._vp.tx = v.tx;
    if (Number.isFinite(v.ty))
      this._vp.ty = v.ty;
    if (Number.isFinite(v.scale))
      this._vp.scale = v.scale;
    if (Number.isFinite(v.rot))
      this._vp.rot = v.rot;
    this._saveCurrentVp();
    this._invalidate();
  }
  get rect() {
    const r = this.getBoundingClientRect();
    if (this.minimized) {
      const w = this._restoreSize?.w ?? (parseFloat(this.style.width) || 280) + 2, h2 = this._restoreSize?.h ?? (parseFloat(this.style.height) || 320) + 2;
      return { left: r.left, top: r.top, width: w, height: h2 };
    }
    return { left: r.left, top: r.top, width: r.width, height: r.height };
  }
  set rect(o) {
    if (o && o.left != null && o.top != null) {
      this.style.left = Math.max(CLAMP_MIN_LEFT, o.left) + "px";
      this.style.top = Math.max(CLAMP_MIN_TOP, this.topFloor, o.top) + "px";
      if (o.width)
        this.style.width = o.width + "px";
      if (o.height)
        this.style.height = o.height + "px";
      if (this.minimized && o.width && o.height)
        this._restoreSize = null;
      this._clampIntoViewport();
    } else if (!this.style.left || !this.style.top) {
      this.style.left = SPAWN_LEFT + "px";
      this.style.top = SPAWN_TOP + "px";
    }
  }
  set labels(l) {
    this._labels = { ...this._labels, ...l };
    this._menu?.refresh();
    const setTitle = (sel, title, aria) => {
      const b = this.shadowRoot.querySelector(sel);
      if (!b)
        return;
      if (title)
        b.title = title;
      if (aria || title)
        b.setAttribute("aria-label", aria || title);
    };
    setTitle(".plus", l.menu);
    setTitle(".close", l.closeWin);
    setTitle(".move", l.move);
    setTitle('[data-page="-1"]', l.prev);
    setTitle('[data-page="1"]', l.next);
    setTitle("[data-jump]", l.jump);
    setTitle(".grip", l.resize, l.resizeAria);
    setTitle(".bubble", l.restore);
  }
  // ---- 多参考内容 API（宿主灌注；程序性，不发事件）----
  /** 整表替换（load 恢复用）。旧 image bitmap 全部释放。 */
  setItems(items, index = 0) {
    this._closeAllBitmaps();
    const ids = this._mute(() => this._deck.restore({
      index,
      cards: items.map((it) => it.kind === "image" ? { kind: "image", bytes: it.blob, mime: it.blob?.type ?? "", vp: it.vp } : { kind: "live", vp: it.vp })
    }));
    items.forEach((it, i) => {
      if (it.kind === "image")
        this._bitmaps.set(ids[i], it.bitmap);
    });
    this._shownId = this._deck.current?.id ?? null;
    this._loadCurrentVp({ fitIfMissing: true });
    this._afterItemsChanged();
  }
  /** 追加一张图并翻到它（导入漏斗尾）。 */
  addImage(bitmap, blob, opts) {
    this._saveCurrentVp();
    const id = this._mute(() => this._deck.add({ kind: "image", bytes: blob, mime: blob?.type ?? "", name: opts?.name ?? "", origin: opts?.origin ?? null }));
    this._bitmaps.set(id, bitmap);
    this._shownId = id;
    this._loadCurrentVp({ fitIfMissing: true });
    this._afterItemsChanged();
  }
  /** 追加一张文字卡并翻到它（0.3.0）。name 缺省取首行。 */
  addText(text, opts) {
    this._saveCurrentVp();
    const mime = opts?.mime ?? "text/plain";
    const id = this._mute(() => this._deck.add({ kind: "text", bytes: new Blob([text], { type: mime }), mime, name: opts?.name ?? "", origin: opts?.origin ?? null }));
    this._texts.set(id, text);
    this._shownId = id;
    this._loadCurrentVp({ fitIfMissing: true });
    this._afterItemsChanged();
  }
  /** 画布镜像页：已有 → 翻过去；没有 → 追加并翻到（liveProvider 缺席 = no-op）。 */
  showLive(target = null, name = "") {
    if (!this.liveProvider)
      return;
    const i = this._deck.cards().findIndex((c) => c.kind === "live" && (c.target ?? null) === target);
    this._saveCurrentVp();
    this._mute(() => {
      if (i >= 0)
        this._deck.select(i);
      else
        this._deck.add({ kind: "live", target, name });
    });
    this._shownId = this._deck.current?.id ?? null;
    this._liveDirty = true;
    this._loadCurrentVp({ fitIfMissing: true });
    this._afterItemsChanged();
  }
  /** 清空（换画/重置）。 */
  clearAll() {
    this._closeAllBitmaps();
    this._mute(() => this._deck.clear());
    this._shownId = null;
    this._stopLiveTimer();
    this._afterItemsChanged();
  }
  /** 宿主读走全部状态（desk 同步 + 保存收集）。当前页 vp 先回写。 */
  getRefState() {
    this._saveCurrentVp();
    return {
      index: this._deck.index,
      items: this._deck.cards().map((c) => c.kind === "live" ? { kind: "live", vp: c.vp ? { ...c.vp } : null } : { kind: "image", blob: c.bytes, vp: c.vp ? { ...c.vp } : null })
    };
  }
  get itemCount() {
    return this._deck.size;
  }
  fitToPanel() {
    const src = this._sourceSize();
    if (!src)
      return;
    const bw = this._canvas.width / (window.devicePixelRatio || 1);
    const bh = this._canvas.height / (window.devicePixelRatio || 1);
    if (src.w <= 0 || src.h <= 0 || bw <= 0 || bh <= 0)
      return;
    const s = Math.min(bw / src.w, bh / src.h) * 0.95;
    this._vp = { tx: bw / 2, ty: bh / 2, scale: s, rot: 0 };
    this._saveCurrentVp();
    this._emitViewport();
    this._invalidate();
  }
  /** 1:1 像素（user 0830）：1 图像素 = 1 **设备**像素（像素图标真面目；scale=1/dpr）、摆正（rot=0）、
   *  当前画布中心的图点保持锚定。菜单项触发 = 用户交互 → 发事件。 */
  oneToOne() {
    const src = this._sourceSize();
    if (!src)
      return;
    const dpr = window.devicePixelRatio || 1;
    const bw = this._canvas.width / dpr, bh = this._canvas.height / dpr;
    const ip = screenToImg(bw / 2, bh / 2, this._vp);
    const scale = 1 / dpr;
    const t = solveAnchorTranslation(ip, scale, 0, bw / 2, bh / 2);
    this._vp = { tx: t.tx, ty: t.ty, scale, rot: 0 };
    this._containVp();
    this._saveCurrentVp();
    this._emitViewport();
    this._invalidate();
  }
  // 缩放界限：放大顶 MAX_SCALE；缩小到长边显示 ≥ MIN_VISIBLE_PX 即止（小图不设限到 1:1 之上）。
  _scaleBounds() {
    const src = this._sourceSize();
    const lo = src ? Math.min(1, MIN_VISIBLE_PX / Math.max(src.w, src.h)) : 0.02;
    return { lo, hi: MAX_SCALE };
  }
  // 平移护栏：图的（旋转后）bbox 与画布保 ≥keep 重叠——图永远找得回来；keep 对小图/小窗自适应收缩。
  _containVp() {
    const src = this._sourceSize();
    if (!src)
      return;
    const dpr = window.devicePixelRatio || 1;
    const cw = this._canvas.width / dpr, ch = this._canvas.height / dpr;
    if (!(cw > 0) || !(ch > 0))
      return;
    const v = this._vp;
    const c = Math.abs(Math.cos(v.rot)), s = Math.abs(Math.sin(v.rot));
    const halfW = (src.w * c + src.h * s) / 2 * v.scale;
    const halfH = (src.w * s + src.h * c) / 2 * v.scale;
    const keepX = Math.min(PAN_KEEP_PX, halfW, cw / 2);
    const keepY = Math.min(PAN_KEEP_PX, halfH, ch / 2);
    v.tx = clamp(v.tx, keepX - halfW, cw - keepX + halfW);
    v.ty = clamp(v.ty, keepY - halfH, ch - keepY + halfH);
  }
  // 宿主在 doc 像素/结构变化时调（组件不监听宿主全局事件）。真合成在 _render 里按脏标+节流做。
  //   target 不给 = 「有东西变了」（WeebPaint 现有用法）；给了 = 只有那一个画面变了，当前看的不是它就不理。
  markLiveDirty(target) {
    if (!this.live)
      return;
    if (target !== void 0 && (this._deck.current?.target ?? null) !== target)
      return;
    this._liveDirty = true;
    this._invalidate();
  }
  // ---- 出向事件 ----
  _emit(name, detail) {
    this.dispatchEvent(new CustomEvent(name, { detail }));
  }
  _emitViewport() {
    this._emit("viewportchange", { ...this._vp });
  }
  _emitRect() {
    this._emit("rectchange", this.rect);
  }
  _emitItems() {
    this._emit("itemschange", { index: this._deck.index, count: this._deck.size });
  }
  // ---- 内部：item 切换 ----
  _saveCurrentVp() {
    const cur = this._deck.current;
    if (cur)
      this._mute(() => this._deck.setView(cur.id, this._vp));
  }
  _loadCurrentVp(opts) {
    const cur = this._deck.current;
    if (!cur)
      return;
    if (cur.vp)
      this._vp = { ...cur.vp };
    else if (opts.fitIfMissing) {
      this._vp = { tx: 0, ty: 0, scale: 1, rot: 0 };
      queueMicrotask(() => {
        if (!this._deck.current?.vp)
          this.fitToPanelSilent();
      });
    }
  }
  /** fit 但不发事件（程序性初始适应；用户双击走 fitToPanel）。 */
  fitToPanelSilent() {
    if (this._deck.current?.kind === "text") {
      this._vp = { tx: 0, ty: 0, scale: 1, rot: 0 };
      this._saveCurrentVp();
      this._updateTextLayer();
      return;
    }
    const src = this._sourceSize();
    if (!src)
      return;
    const bw = this._canvas.width / (window.devicePixelRatio || 1);
    const bh = this._canvas.height / (window.devicePixelRatio || 1);
    if (src.w <= 0 || src.h <= 0 || bw <= 0 || bh <= 0)
      return;
    const s = Math.min(bw / src.w, bh / src.h) * 0.95;
    this._vp = { tx: bw / 2, ty: bh / 2, scale: s, rot: 0 };
    this._saveCurrentVp();
    this._invalidate();
  }
  _page(delta) {
    const n = this._deck.size;
    if (n < 2)
      return;
    this._saveCurrentVp();
    this._mute(() => this._deck.select((this._deck.index + delta + n) % n));
    this._shownId = this._deck.current?.id ?? null;
    if (this.live)
      this._liveDirty = true;
    this._loadCurrentVp({ fitIfMissing: true });
    this._afterItemsChanged();
    this._emitItems();
  }
  /** 用户把当前这张卡挪一位。还在看这张卡，只是它排的位置变了。 */
  _moveCurrent(delta) {
    const cur = this._deck.current;
    const to = this._deck.index + delta;
    if (!cur || to < 0 || to >= this._deck.size)
      return;
    this._saveCurrentVp();
    this._mute(() => this._deck.move(cur.id, to));
    this._afterItemsChanged();
    this._emitItems();
  }
  /** 用户从跳转列表里点了第 i 张。 */
  _jumpTo(i) {
    if (i === this._deck.index || i < 0 || i >= this._deck.size)
      return;
    this._saveCurrentVp();
    this._mute(() => this._deck.select(i));
    this._shownId = this._deck.current?.id ?? null;
    if (this.live)
      this._liveDirty = true;
    this._loadCurrentVp({ fitIfMissing: true });
    this._afterItemsChanged();
    this._emitItems();
  }
  _cardLabel(c, i) {
    const firstLine = c.kind === "text" ? (this._texts.get(c.id) ?? "").split("\n").find((l) => l.trim())?.trim().slice(0, 24) : "";
    const name = c.name || firstLine || this._labels.kindNames?.[c.kind] || c.kind;
    return `${i + 1}  ${name}`;
  }
  _deleteCurrent() {
    const cur = this._deck.current;
    if (!cur)
      return;
    this._bitmaps.get(cur.id)?.close?.();
    this._bitmaps.delete(cur.id);
    this._mute(() => this._deck.remove(cur.id));
    this._shownId = this._deck.current?.id ?? null;
    if (this.live)
      this._liveDirty = true;
    this._loadCurrentVp({ fitIfMissing: true });
    this._afterItemsChanged();
    this._emitItems();
  }
  // ---- 牌组 ⇄ 视图 ----
  /** 自己改牌组的那一下不听自己的回声。别的监听者（宿主、VR 视图）照常收到。 */
  _mute(fn) {
    const was = this._muted;
    this._muted = true;
    try {
      return fn();
    } finally {
      this._muted = was;
    }
  }
  _closeAllBitmaps() {
    for (const bm of this._bitmaps.values())
      bm.close?.();
    this._bitmaps.clear();
    this._texts.clear();
    this._linked.clear();
    this._linkMissing.clear();
  }
  /** 别人（宿主直接用 .deck、或共用这副牌的另一个视图）改了牌组。 */
  _onDeckChange(what) {
    if (this._muted)
      return;
    if (what.type === "invalidate") {
      const c = this._deck.get(what.id);
      if (c?.kind === "live") {
        if (this._deck.current?.id === what.id)
          this.markLiveDirty();
        return;
      }
      if (c && !c.bytes && c.target) {
        this._linked.delete(c.id);
        this._linkMissing.delete(c.id);
        this._texts.delete(c.id);
        this._bitmaps.get(c.id)?.close?.();
        this._bitmaps.delete(c.id);
      }
    }
    this._syncFromDeck();
  }
  /** 把视图对齐到牌组现状。幂等：牌组没变就什么都不做。 */
  _syncFromDeck() {
    for (const [id, bm] of this._bitmaps) {
      if (this._deck.indexOf(id) < 0) {
        bm.close?.();
        this._bitmaps.delete(id);
      }
    }
    for (const m of [this._texts, this._linked])
      for (const id of [...m.keys()])
        if (this._deck.indexOf(id) < 0)
          m.delete(id);
    for (const id of [...this._linkMissing])
      if (this._deck.indexOf(id) < 0)
        this._linkMissing.delete(id);
    if (this._audioOf && this._deck.indexOf(this._audioOf) < 0)
      this._stopAudio();
    for (const c of this._deck.cards()) {
      if (c.kind === "live")
        continue;
      const bytes = c.bytes ?? this._linked.get(c.id) ?? null;
      if (!bytes) {
        if (c.target && !this._linkMissing.has(c.id) && !this._resolving.has(c.id))
          this._resolveLink(c);
        continue;
      }
      if (c.kind === "image" && !this._bitmaps.has(c.id) && !this._decoding.has(c.id))
        this._decode(c, bytes);
      else if (c.kind === "text" && !this._texts.has(c.id) && !this._decoding.has(c.id))
        this._decodeText(c, bytes);
    }
    const cur = this._deck.current;
    if ((cur?.id ?? null) !== this._shownId) {
      this._shownId = cur?.id ?? null;
      if (cur?.kind === "live")
        this._liveDirty = true;
      this._loadCurrentVp({ fitIfMissing: true });
    } else if (cur?.vp) {
      const a = cur.vp, b = this._vp;
      if (a.tx !== b.tx || a.ty !== b.ty || a.scale !== b.scale || a.rot !== b.rot)
        this._vp = { ...a };
    }
    this._afterItemsChanged();
  }
  /** 只给了字节没给位图的图片卡（宿主直接往牌组里加的）：这里解。解不出来要说，不许装没事。 */
  _decode(c, bytes) {
    if (typeof createImageBitmap !== "function")
      return;
    this._decoding.add(c.id);
    createImageBitmap(bytes).then((bm) => {
      this._decoding.delete(c.id);
      if (this._deck.indexOf(c.id) < 0 || this._bitmaps.has(c.id)) {
        bm.close?.();
        return;
      }
      this._bitmaps.set(c.id, bm);
      if (this._deck.current?.id === c.id) {
        if (!this._deck.current.vp)
          this.fitToPanelSilent();
        this._invalidate();
      }
    }, (e) => {
      this._decoding.delete(c.id);
      this._emit("notice", { level: "error", code: "decode-failed", id: c.id, name: c.name, message: String(e?.message ?? e) });
    });
  }
  _decodeText(c, bytes) {
    this._decoding.add(c.id);
    bytes.text().then((text) => {
      this._decoding.delete(c.id);
      if (this._deck.indexOf(c.id) < 0)
        return;
      this._texts.set(c.id, text);
      if (this._deck.current?.id === c.id)
        this._afterItemsChanged();
    }, (e) => {
      this._decoding.delete(c.id);
      this._emit("notice", { level: "error", code: "decode-failed", id: c.id, name: c.name, message: String(e?.message ?? e) });
    });
  }
  /** 链接卡：向宿主要内容。要不到 → 记下「缺」，卡上如实写；宿主 invalidate 后再要。 */
  _resolveLink(c) {
    if (!this.linkProvider || !c.target) {
      this._linkMissing.add(c.id);
      if (this._deck.current?.id === c.id)
        this._afterItemsChanged();
      return;
    }
    this._resolving.add(c.id);
    Promise.resolve().then(() => this.linkProvider(c.target, c.kind)).then((blob) => {
      this._resolving.delete(c.id);
      if (this._deck.indexOf(c.id) < 0)
        return;
      if (blob)
        this._linked.set(c.id, blob);
      else
        this._linkMissing.add(c.id);
      this._syncFromDeck();
    }, (e) => {
      this._resolving.delete(c.id);
      this._linkMissing.add(c.id);
      this._emit("notice", { level: "error", code: "link-failed", id: c.id, name: c.name, target: c.target, message: String(e?.message ?? e) });
      this._syncFromDeck();
    });
  }
  _afterItemsChanged() {
    if (!this.live)
      this._stopLiveTimer();
    this._updateEmptyHint();
    this._updateChips();
    this._updateTextLayer();
    this._updateAudioLayer();
    this._invalidate();
  }
  /** 文字卡：内容层显示 / 隐藏 + 灌内容 + 字号 + 滚动位置。 */
  _updateTextLayer() {
    const cur = this._deck.current;
    const hole = !!cur && cur.kind !== "audio" && cur.kind !== "live" && !!cur.ram && !cur.bytes;
    const isText = cur?.kind === "text" || hole;
    this._textEl.classList.toggle("shown", isText);
    this._canvas.style.visibility = isText || cur?.kind === "audio" ? "hidden" : "";
    if (!isText || !cur)
      return;
    if (hole) {
      this._textEl.classList.add("missing");
      const content2 = `${cur.name || this._labels.kindNames?.[cur.kind] || cur.kind} \xB7 ${fmtBytes(cur.ram.bytes)}
${this._ramMissingText()}`;
      if (this._textEl.textContent !== content2)
        this._textEl.textContent = content2;
      return;
    }
    const text = this._texts.get(cur.id);
    const missing = text === void 0 && this._linkMissing.has(cur.id);
    this._textEl.classList.toggle("missing", missing);
    const content = text ?? (missing ? this._labels.linkMissing ?? "Content unavailable" : "");
    if (this._textEl.textContent !== content)
      this._textEl.textContent = content;
    this._textEl.style.setProperty("--ref-text-scale", String(this._vp.scale));
    const ty = this._vp.ty;
    if (Math.abs(this._textEl.scrollTop - ty) > 0.5)
      requestAnimationFrame(() => {
        if (this._deck.current?.id === cur.id)
          this._textEl.scrollTop = ty;
      });
  }
  _updateChips() {
    const n = this._deck.size;
    this._chipsEl.classList.toggle("hidden", n < 2);
    if (n >= 2)
      this._chipCountEl.textContent = `${this._deck.index + 1}/${n}`;
  }
  _sourceSize() {
    const cur = this._deck.current;
    if (!cur)
      return null;
    if (cur.kind === "live") {
      this._dropLiveIfOther(cur);
      if (!this._liveSource && this.liveProvider)
        this._takeLiveFrame(cur);
      return this._liveSource ? this._liveSize : null;
    }
    const bm = this._bitmaps.get(cur.id);
    return bm ? { w: bm.width, h: bm.height } : null;
  }
  // ---- 内部：显示/绑定 ----
  _afterShow() {
    if (!this.style.left || !this.style.top) {
      this.style.left = SPAWN_LEFT + "px";
      this.style.top = SPAWN_TOP + "px";
    }
    this._clampIntoViewport();
    this._resizeCanvasToBody();
    this._updateEmptyHint();
    this._updateChips();
    if (this.live)
      this._liveDirty = true;
    if (this._deck.current && !this._deck.current.vp)
      this.fitToPanelSilent();
    this._pokeIdle();
    this._invalidate();
  }
  _bind(root) {
    this._plusEl.addEventListener("click", () => this._toggleMenu());
    root.querySelector(".close").addEventListener("click", () => {
      this.open = false;
      this._emit("openchange", { open: false });
    });
    const move = root.querySelector(".move");
    move.addEventListener("pointerdown", (e) => {
      const r = this.getBoundingClientRect();
      this._panelDrag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ol: r.left, ot: r.top, moved: false };
      try {
        move.setPointerCapture(e.pointerId);
      } catch {
      }
      e.preventDefault();
    });
    move.addEventListener("pointermove", (e) => {
      const d = this._panelDrag;
      if (!d || e.pointerId !== d.id)
        return;
      if (!d.moved && Math.hypot(e.clientX - d.sx, e.clientY - d.sy) < 4)
        return;
      d.moved = true;
      const w = this.offsetWidth, h2 = this.offsetHeight;
      const left = clamp(d.ol + (e.clientX - d.sx), 0, window.innerWidth - w);
      const top = clamp(d.ot + (e.clientY - d.sy), this.topFloor, Math.max(this.topFloor, window.innerHeight - this.bottomFloor - h2));
      this.style.left = left + "px";
      this.style.top = top + "px";
      this._emitRect();
    });
    const endMove = (e) => {
      const d = this._panelDrag;
      if (d && e.pointerId === d.id) {
        try {
          move.releasePointerCapture(e.pointerId);
        } catch {
        }
        this._panelDrag = null;
        if (e.type === "pointerup" && !d.moved)
          this._setMinimizedByUser(true);
      }
    };
    move.addEventListener("pointerup", endMove);
    move.addEventListener("pointercancel", endMove);
    move.addEventListener("click", (e) => {
      if (e.detail === 0)
        this._setMinimizedByUser(true);
    });
    const bubble = root.querySelector(".bubble");
    let bub = null;
    bubble.addEventListener("pointerdown", (e) => {
      const r = this.getBoundingClientRect();
      bub = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ol: r.left, ot: r.top, moved: false };
      try {
        bubble.setPointerCapture(e.pointerId);
      } catch {
      }
      e.preventDefault();
    });
    bubble.addEventListener("pointermove", (e) => {
      if (!bub || e.pointerId !== bub.id)
        return;
      const dx = e.clientX - bub.sx, dy = e.clientY - bub.sy;
      if (!bub.moved && Math.hypot(dx, dy) < 4)
        return;
      bub.moved = true;
      const w = this.offsetWidth, h2 = this.offsetHeight;
      this.style.left = clamp(bub.ol + dx, 0, window.innerWidth - w) + "px";
      this.style.top = clamp(bub.ot + dy, this.topFloor, Math.max(this.topFloor, window.innerHeight - this.bottomFloor - h2)) + "px";
      this._emitRect();
    });
    const endBubble = (e) => {
      if (!bub || e.pointerId !== bub.id)
        return;
      try {
        bubble.releasePointerCapture(e.pointerId);
      } catch {
      }
      const tap = !bub.moved && e.type === "pointerup";
      bub = null;
      if (tap)
        this._setMinimizedByUser(false);
    };
    bubble.addEventListener("pointerup", endBubble);
    bubble.addEventListener("pointercancel", endBubble);
    root.addEventListener("pointerdown", () => this._pokeIdle(), { capture: true });
    root.addEventListener("pointermove", () => this._pokeIdle(), { capture: true, passive: true });
    const hoverCapable = typeof matchMedia === "function" && matchMedia("(hover: hover)").matches;
    if (hoverCapable) {
      this.addEventListener("pointerenter", () => this.classList.remove("away"));
      this.addEventListener("pointerleave", () => {
        if (this._panelDrag || this._resizeDrag || this._pointers.size > 0)
          return;
        this.classList.add("away");
      });
    }
    this._chipsEl.addEventListener("click", (e) => {
      const t = e.target;
      if (t.closest("[data-jump]")) {
        this._toggleJump();
        return;
      }
      const b = t.closest("[data-page]");
      if (b)
        this._page(parseInt(b.dataset.page, 10));
    });
    const keepHostFocus = (e) => {
      const t = e.target;
      if (!t?.closest?.("button"))
        return;
      e.preventDefault();
    };
    root.addEventListener("pointerdown", keepHostFocus);
    root.addEventListener("mousedown", keepHostFocus);
    const grip = root.querySelector(".grip");
    grip.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      e.stopPropagation();
      try {
        grip.setPointerCapture(e.pointerId);
      } catch {
      }
      const r = this.getBoundingClientRect();
      this._resizeDrag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, w0: r.width, h0: r.height, l0: r.left, t0: r.top };
    });
    grip.addEventListener("pointermove", (e) => {
      if (!this._resizeDrag || e.pointerId !== this._resizeDrag.id)
        return;
      const w = Math.max(MIN_EDGE, Math.min(window.innerWidth - 8 - this._resizeDrag.l0, this._resizeDrag.w0 + (e.clientX - this._resizeDrag.sx)));
      const h2 = Math.max(MIN_EDGE, Math.min(window.innerHeight - this.bottomFloor - 8 - this._resizeDrag.t0, this._resizeDrag.h0 + (e.clientY - this._resizeDrag.sy)));
      this.style.width = w + "px";
      this.style.height = h2 + "px";
      this._emitRect();
    });
    const endResize = (e) => {
      if (this._resizeDrag && e.pointerId === this._resizeDrag.id) {
        try {
          grip.releasePointerCapture(e.pointerId);
        } catch {
        }
        this._resizeDrag = null;
      }
    };
    grip.addEventListener("pointerup", endResize);
    grip.addEventListener("pointercancel", endResize);
    const tx3 = this._textEl;
    tx3.addEventListener("scroll", () => {
      if (this._textScrollRaf != null)
        return;
      this._textScrollRaf = requestAnimationFrame(() => {
        this._textScrollRaf = null;
        if (this._deck.current?.kind !== "text")
          return;
        this._vp.ty = tx3.scrollTop;
        this._saveCurrentVp();
        this._emitViewport();
      });
    }, { passive: true });
    tx3.addEventListener("pointerdown", (e) => {
      this._textPinch.push({ id: e.pointerId, x: e.clientX, y: e.clientY });
      if (this._textPinch.length === 2) {
        const [a, b] = this._textPinch;
        this._textPinchStart = { dist: Math.hypot(b.x - a.x, b.y - a.y) || 1, scale: this._vp.scale };
        try {
          tx3.setPointerCapture(e.pointerId);
        } catch {
        }
        e.preventDefault();
      }
    });
    tx3.addEventListener("pointermove", (e) => {
      const p = this._textPinch.find((q) => q.id === e.pointerId);
      if (!p)
        return;
      p.x = e.clientX;
      p.y = e.clientY;
      if (this._textPinch.length >= 2 && this._textPinchStart) {
        const [a, b] = this._textPinch;
        const dist = Math.hypot(b.x - a.x, b.y - a.y) || 1;
        this._setTextScale(this._textPinchStart.scale * (dist / this._textPinchStart.dist));
        e.preventDefault();
      }
    });
    const endTextPointer = (e) => {
      this._textPinch = this._textPinch.filter((q) => q.id !== e.pointerId);
      if (this._textPinch.length < 2)
        this._textPinchStart = null;
    };
    tx3.addEventListener("pointerup", endTextPointer);
    tx3.addEventListener("pointercancel", endTextPointer);
    tx3.addEventListener("wheel", (e) => {
      if (!(e.ctrlKey || e.metaKey))
        return;
      e.preventDefault();
      this._setTextScale(this._vp.scale * Math.exp(-e.deltaY * 5e-3));
    }, { passive: false });
    this._canvas.addEventListener("pointerdown", (e) => this._onDown(e), { passive: false });
    this._canvas.addEventListener("pointermove", (e) => this._onMove(e), { passive: false });
    this._canvas.addEventListener("pointerup", (e) => this._onUp(e), { passive: false });
    this._canvas.addEventListener("pointercancel", (e) => this._onUp(e), { passive: false });
    this._canvas.addEventListener("wheel", (e) => this._onWheel(e), { passive: false });
    this._canvas.addEventListener("dblclick", () => this.fitToPanel());
    const ro = new ResizeObserver(() => {
      this._clampIntoViewport();
      this._resizeCanvasToBody();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      this._render();
      this._emitRect();
    });
    ro.observe(this);
  }
  _ramMissingText() {
    return this._labels.ramMissing ?? "Kept in memory only, not saved. Drop the file here or import it again with \uFF0B.";
  }
  _menuItems() {
    const l = this._labels, cur = this._deck.current;
    return [
      { id: "load", label: l.load ?? "Load image", icon: REF_ICON_IDS.folder },
      { id: "paste", label: l.paste ?? "Paste", icon: REF_ICON_IDS.paste },
      { id: "cloud", label: l.cloud ?? "From cloud", icon: REF_ICON_IDS.cloud, hidden: this.hasAttribute("no-cloud") },
      // 宿主出画面的卡：宿主没给 provider 就不列（写作 app 没有画布可镜像）；多台相机的宿主经 liveTargets 列多项
      ...this._liveMenuItems(),
      { id: "onetoone", label: l.oneToOne ?? "1:1", icon: REF_ICON_IDS.oneToOne, hidden: this._deck.current?.kind === "audio" },
      // 0.4.0 音频卡：循环（ROUND 的设想：放在 ＋ 菜单）；速度只在宿主给了档位时列（user 2026-10-09「默认不开，moonsinger开」）。点了不关，可以连点
      ...this._deck.current?.kind === "audio" ? this._audioMenuItems() : [],
      // 只放内存（user 2026-10-09「然后能不能加RAM only，就是不落盘，每次重新上传」）：有自己字节的卡才有（链接卡 / 宿主画面 / 读回来的空位没有）
      { id: "minimize", label: l.minimize ?? "Minimize to icon", icon: REF_ICON_IDS.pip, separatorBefore: true },
      {
        id: "ram",
        label: l.ram ?? "Keep in memory only (not saved)",
        ...cur?.ram ? { icon: REF_ICON_IDS.current } : {},
        hidden: !cur || cur.kind === "live" || !!cur.target || !cur.bytes,
        separatorBefore: true
      },
      // 挪动顺序的逃生口（user 2026-09-29「reorder也需要有逃生口」）：点完菜单不关，可以连点；到头的那一项藏起来
      {
        id: "earlier",
        label: l.moveEarlier ?? "Move earlier",
        icon: REF_ICON_IDS.earlier,
        hidden: this._deck.size < 2 || this._deck.index === 0,
        separatorBefore: true
      },
      {
        id: "later",
        label: l.moveLater ?? "Move later",
        icon: REF_ICON_IDS.later,
        hidden: this._deck.size < 2 || this._deck.index === this._deck.size - 1,
        separatorBefore: this._deck.size >= 2 && this._deck.index === 0
      },
      // 删除 = 二段确认（防误碰，user 0830）：第一下 arm（文案换 delConfirm 变红），第二下才删；没有可删的页时藏。
      {
        id: "delete",
        label: this._delArmed ? l.delConfirm ?? l.del ?? "Delete" : l.del ?? "Delete",
        icon: REF_ICON_IDS.trash,
        danger: this._delArmed,
        hidden: this._deck.size === 0,
        separatorBefore: true
      }
      // 「关闭」2026-09-11 从菜单提出成窗右上角 × 钮（user「不然找不到」）
    ];
  }
  _audioMenuItems() {
    const cur = this._deck.current, l = this._labels, loop = !!cur.play?.loop;
    return [
      { id: "loop", label: l.loop ?? "Loop", ...loop ? { icon: REF_ICON_IDS.current } : {}, separatorBefore: true },
      ...(this.audioRates ?? []).map((r, i) => ({ id: "rate:" + r, label: `${l.rate ?? "Speed"} ${r}\xD7`, ...r === this._rate ? { icon: REF_ICON_IDS.current } : {}, ...i === 0 ? { separatorBefore: true } : {} }))
    ];
  }
  _liveMenuId(target) {
    return target == null ? "live" : "live:" + target;
  }
  _liveMenuTargets() {
    if (!this.liveProvider)
      return [];
    const list = this.liveTargets?.();
    return list && list.length ? list : [{ target: null, label: this._labels.live ?? "Live mirror" }];
  }
  _liveMenuItems() {
    return this._liveMenuTargets().map((t) => ({ id: this._liveMenuId(t.target), label: t.label, icon: REF_ICON_IDS.pip }));
  }
  /** 跳转列表：点计数钮弹出，一张卡一行，点哪个跳哪个。复用同一个菜单端口，不加新 gizmo。 */
  _toggleJump() {
    if (!this.menuPort || this._deck.size < 2)
      return;
    this._swapMenuAnchor(this._chipCountEl);
    this._menu = this.menuPort({
      anchor: this._chipCountEl,
      items: () => this._deck.cards().map((c, i) => ({
        id: "jump:" + i,
        label: this._cardLabel(c, i),
        ...i === this._deck.index ? { icon: REF_ICON_IDS.current } : {}
      })),
      align: "left",
      band: "menu",
      swallowOutsideTap: true,
      ariaLabel: this._labels.jump,
      onClose: () => {
        this._menu = null;
        this._menuAnchor = null;
      },
      onPick: (id) => {
        this._jumpTo(parseInt(id.slice(5), 10));
      }
    });
    this._menuAnchor = this._menu ? this._chipCountEl : null;
  }
  /** 两个菜单共用一个端口：要开的和正开着的不是同一个锚 → 先把开着的收掉（同一个锚则交给端口自己的 toggle 语义）。 */
  _swapMenuAnchor(next) {
    if (this._menu && this._menuAnchor !== next)
      this._menu.close();
  }
  _toggleMenu() {
    if (!this.menuPort)
      return;
    this._swapMenuAnchor(this._plusEl);
    this._delArmed = false;
    this._menu = this.menuPort({
      anchor: this._plusEl,
      items: () => this._menuItems(),
      align: "right",
      band: "menu",
      swallowOutsideTap: true,
      // 菜单开着时点别处 = 只关菜单，那一击不落到画布/主画布（原 shadow 内行为保留并推广）
      ariaLabel: this._labels.menu,
      onClose: () => {
        this._menu = null;
        this._menuAnchor = null;
        this._delArmed = false;
      },
      onPick: (id) => {
        if (id === "delete") {
          if (!this._delArmed) {
            this._delArmed = true;
            return "keep";
          }
          this._deleteCurrent();
          return;
        }
        if (id === "earlier" || id === "later") {
          this._delArmed = false;
          this._moveCurrent(id === "earlier" ? -1 : 1);
          return "keep";
        }
        if (id === "loop") {
          const cur = this._deck.current;
          if (!cur)
            return;
          const loop = !cur.play?.loop;
          if (this._audio && this._audioOf === cur.id)
            this._audio.loop = loop;
          this._deck.setPlay(cur.id, { t: this._audio && this._audioOf === cur.id ? this._audio.currentTime : cur.play?.t ?? 0, loop });
          this._updateAudioLayer();
          return "keep";
        }
        if (id === "ram") {
          const cur = this._deck.current;
          if (cur)
            this._deck.setRam(cur.id, !cur.ram);
          return "keep";
        }
        if (id.startsWith("rate:")) {
          this._rate = Number(id.slice(5)) || 1;
          if (this._audio)
            this._audio.playbackRate = this._rate;
          this._updateAudioLayer();
          return "keep";
        }
        if (id === "load")
          this._emit("requestload");
        else if (id === "paste")
          this._emit("requestpaste");
        else if (id === "cloud")
          this._emit("requestcloudload");
        else if (id === "live" || id.startsWith("live:")) {
          const t = this._liveMenuTargets().find((x) => this._liveMenuId(x.target) === id);
          this.showLive(t?.target ?? null, t?.target == null ? "" : t.label);
          this._emitItems();
        } else if (id === "onetoone")
          this.oneToOne();
        else if (id === "minimize")
          this._setMinimizedByUser(true);
      }
    });
    this._menuAnchor = this._menu ? this._plusEl : null;
  }
  _pokeIdle() {
    this.classList.remove("idle");
    if (this._idleTimer)
      clearTimeout(this._idleTimer);
    this._idleTimer = setTimeout(() => {
      this.classList.add("idle");
    }, IDLE_DIM_MS);
  }
  _onDown(e) {
    if (!this.hasAttribute("pick"))
      this.focus({ preventScroll: true });
    try {
      this._canvas.setPointerCapture?.(e.pointerId);
    } catch {
    }
    this._pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this._pointers.size === 1) {
      if (this.hasAttribute("pick")) {
        this._beginPick(e);
        e.preventDefault();
        return;
      }
      if (e.pointerType === "touch") {
        this._lpStart = { x: e.clientX, y: e.clientY };
        this._lpEvent = e;
        this._longPressTimer = setTimeout(() => {
          this._longPressTimer = null;
          if (this._lpEvent)
            this._beginPick(this._lpEvent);
        }, REF_LONG_PRESS_MS);
      }
    }
    if (this._pointers.size === 2) {
      this._cancelLongPress();
      this._endPick();
      const arr = [...this._pointers.values()];
      const dx = arr[1].x - arr[0].x, dy = arr[1].y - arr[0].y;
      this._gestureStart = {
        midX: (arr[0].x + arr[1].x) / 2,
        midY: (arr[0].y + arr[1].y) / 2,
        dist: Math.hypot(dx, dy) || 1,
        angle: Math.atan2(dy, dx),
        vp: { ...this._vp }
      };
    }
    e.preventDefault();
  }
  _onMove(e) {
    const p = this._pointers.get(e.pointerId);
    if (!p)
      return;
    const px = p.x, py = p.y;
    p.x = e.clientX;
    p.y = e.clientY;
    if (this._longPressTimer && this._lpStart) {
      const ddx = e.clientX - this._lpStart.x, ddy = e.clientY - this._lpStart.y;
      if (ddx * ddx + ddy * ddy > REF_LONG_PRESS_CANCEL_SQ)
        this._cancelLongPress();
    }
    if (this._picking && this._pointers.size === 1) {
      this._pickAt(e.clientX, e.clientY);
      e.preventDefault();
      return;
    }
    if (this._pointers.size === 1) {
      this._vp.tx += e.clientX - px;
      this._vp.ty += e.clientY - py;
      this._containVp();
      this._saveCurrentVp();
      this._emitViewport();
      this._invalidate();
    } else if (this._pointers.size >= 2 && this._gestureStart) {
      const arr = [...this._pointers.values()];
      const dx = arr[1].x - arr[0].x, dy = arr[1].y - arr[0].y;
      const dist = Math.hypot(dx, dy) || 1;
      const midX = (arr[0].x + arr[1].x) / 2;
      const midY = (arr[0].y + arr[1].y) / 2;
      const angle = Math.atan2(dy, dx);
      const g = this._gestureStart;
      const b = this._scaleBounds();
      const { scale, rot } = pinchScaleRot(g, dist, angle, b.lo, b.hi);
      const rect = this._canvas.getBoundingClientRect();
      const ip = screenToImg(g.midX - rect.left, g.midY - rect.top, g.vp);
      const t = solveAnchorTranslation(ip, scale, rot, midX - rect.left, midY - rect.top);
      this._vp = { tx: t.tx, ty: t.ty, scale, rot };
      this._containVp();
      this._saveCurrentVp();
      this._emitViewport();
      this._invalidate();
    }
    e.preventDefault();
  }
  _onUp(e) {
    this._pointers.delete(e.pointerId);
    this._cancelLongPress();
    if (this._pointers.size === 0)
      this._endPick();
    if (this._pointers.size < 2)
      this._gestureStart = null;
    e.preventDefault?.();
  }
  _onWheel(e) {
    e.preventDefault();
    const rect = this._canvas.getBoundingClientRect();
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;
    const ip = screenToImg(sx, sy, this._vp);
    const factor = e.ctrlKey || e.metaKey ? Math.exp(-e.deltaY * 0.01) : Math.exp(-e.deltaY * 5e-3);
    const b = this._scaleBounds();
    const newScale = clamp(this._vp.scale * factor, b.lo, b.hi);
    const t = solveAnchorTranslation(ip, newScale, this._vp.rot, sx, sy);
    this._vp.tx = t.tx;
    this._vp.ty = t.ty;
    this._vp.scale = newScale;
    this._containVp();
    this._saveCurrentVp();
    this._emitViewport();
    this._invalidate();
  }
  _setTextScale(scale) {
    const s = clamp(scale, TEXT_SCALE_MIN, TEXT_SCALE_MAX);
    if (s === this._vp.scale)
      return;
    this._vp.scale = s;
    this._textEl.style.setProperty("--ref-text-scale", String(s));
    this._saveCurrentVp();
    this._emitViewport();
  }
  // ---- 吸色（v154；宿主拿事件接主吸色 setColor + pin）----
  _cancelLongPress() {
    if (this._longPressTimer) {
      clearTimeout(this._longPressTimer);
      this._longPressTimer = null;
    }
    this._lpStart = null;
    this._lpEvent = null;
  }
  _beginPick(e) {
    this._picking = true;
    this._cancelLongPress();
    this._emit("colorpickstart");
    this._pickAt(e.clientX, e.clientY);
  }
  _endPick() {
    if (!this._picking)
      return;
    this._picking = false;
    this._emit("colorpickend");
  }
  // 读自家 canvas 像素（所见即所吸）。透明区 hex=null（宿主收 pin）。半透明合成到白底。
  _pickAt(clientX, clientY) {
    const rect = this._canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    let px = Math.round((clientX - rect.left) * dpr);
    let py = Math.round((clientY - rect.top) * dpr);
    px = Math.max(0, Math.min(this._canvas.width - 1, px));
    py = Math.max(0, Math.min(this._canvas.height - 1, py));
    let d;
    try {
      d = this._cctx.getImageData(px, py, 1, 1).data;
    } catch {
      return;
    }
    let r = d[0], g = d[1], b = d[2];
    const a = d[3];
    if (a === 0) {
      this._emit("colorpick", { hex: null, screenX: clientX, screenY: clientY });
      return;
    }
    if (a < 255) {
      const f = a / 255;
      r = Math.round(r * f + 255 * (1 - f));
      g = Math.round(g * f + 255 * (1 - f));
      b = Math.round(b * f + 255 * (1 - f));
    }
    const hex = "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
    this._emit("colorpick", { hex, screenX: clientX, screenY: clientY });
  }
  // ---- 渲染 ----
  _resizeCanvasToBody() {
    const dpr = window.devicePixelRatio || 1;
    const w = this.clientWidth;
    const h2 = this.clientHeight;
    if (w <= 0 || h2 <= 0)
      return;
    this._canvas.width = Math.round(w * dpr);
    this._canvas.height = Math.round(h2 * dpr);
    this._canvas.style.width = w + "px";
    this._canvas.style.height = h2 + "px";
  }
  _invalidate() {
    if (this._raf)
      return;
    this._raf = requestAnimationFrame(() => {
      this._raf = null;
      this._render();
    });
  }
  _stopLiveTimer() {
    this._liveSource = null;
    this._liveSize = null;
    this._liveOf = null;
    this._liveDirty = false;
    if (this._liveThrottle != null) {
      clearTimeout(this._liveThrottle);
      this._liveThrottle = null;
    }
  }
  /** 手上的帧是另一张卡的（多台相机之间翻页）→ 扔掉，连节流的计时一起清：新卡的第一帧要立刻出，不许先画一下别人的画面。 */
  _dropLiveIfOther(cur) {
    if (this._liveOf === cur.id)
      return;
    this._liveSource = null;
    this._liveSize = null;
    this._liveOf = cur.id;
    this._lastLiveComposeT = void 0;
    if (this._liveThrottle != null) {
      clearTimeout(this._liveThrottle);
      this._liveThrottle = null;
    }
  }
  /** 向宿主要一帧。要到了返回 true。 */
  _takeLiveFrame(cur) {
    if (!this.liveProvider)
      return false;
    const want = { width: this._canvas.width, height: this._canvas.height };
    const got = this.liveProvider(want, cur.target ?? null);
    if (!got)
      return false;
    const wrapped = "source" in got;
    const src = wrapped ? got.source : got;
    this._liveSource = src;
    this._liveSize = wrapped ? { w: got.width, h: got.height } : { w: src.width, h: src.height };
    this._liveOf = cur.id;
    this._lastLiveComposeT = performance.now();
    return true;
  }
  // live 合成：只在脏标真起时问 provider；节流内保留脏标等 timer 补帧（S9）。
  _recomposeLive() {
    const cur = this._deck.current;
    if (!this.liveProvider || !cur)
      return true;
    this._dropLiveIfOther(cur);
    const gap = Math.max(0, this.liveMinIntervalMs);
    const now = performance.now();
    const since = now - (this._lastLiveComposeT ?? -Infinity);
    if (since < gap) {
      if (this._liveThrottle == null) {
        this._liveThrottle = setTimeout(() => {
          this._liveThrottle = null;
          this._invalidate();
        }, gap + 20 - since);
      }
      return false;
    }
    this._takeLiveFrame(cur);
    return true;
  }
  _render() {
    const cur = this._deck.current;
    if (cur?.kind === "live" && this._liveDirty) {
      if (this._recomposeLive())
        this._liveDirty = false;
    }
    const dpr = window.devicePixelRatio || 1;
    const W = this._canvas.width, H = this._canvas.height;
    const ctx = this._cctx;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W, H);
    let source = null;
    if (cur?.kind === "live") {
      if (!this._liveSource)
        this._recomposeLive();
      source = this._liveSource;
    } else if (cur)
      source = this._bitmaps.get(cur.id) ?? null;
    if (!source)
      return;
    const nearest = this._vp.scale >= NEAREST_MIN_SCALE;
    ctx.imageSmoothingEnabled = !nearest;
    if (!nearest)
      ctx.imageSmoothingQuality = "high";
    const v = this._vp;
    const c = Math.cos(v.rot), s = Math.sin(v.rot);
    ctx.setTransform(v.scale * c * dpr, v.scale * s * dpr, -v.scale * s * dpr, v.scale * c * dpr, v.tx * dpr, v.ty * dpr);
    const size = cur?.kind === "live" && this._liveSize ? this._liveSize : { w: source.width, h: source.height };
    ctx.drawImage(source, -size.w / 2, -size.h / 2, size.w, size.h);
  }
  _updateEmptyHint() {
    this._emptyEl.classList.toggle("hidden", this._deck.size > 0);
  }
  /** 视口护栏：尺寸不超视口预算、位置不落屏外（拖已自钳；这里兜 restore/open/浏览器窗口 resize/
   *  native CSS resize 四条路）。返回是否有修正。 */
  /** 地板变了（键盘露 / 收、顶栏高度变）之后宿主调：整窗钳回可见区，动了就发 rectchange。 */
  reclamp() {
    if (this._clampIntoViewport())
      this._emitRect();
  }
  /** 0.4.1 用户收起 / 恢复（菜单项、点小图标）：改状态 + 发 minimizechange（宿主想记住就记）。 */
  _setMinimizedByUser(v) {
    if (v === this.minimized)
      return;
    this.minimized = v;
    this._emit("minimizechange", { minimized: v });
  }
  /** 恢复成整窗之后：小图标可能被挪到了右下角——整窗钳回可见区；画面重新按窗大小铺（收着时 canvas 是隐藏的）。 */
  _afterRestore() {
    if (!this.open)
      return;
    if (this._clampIntoViewport())
      this._emitRect();
    this._resizeCanvasToBody();
    if (this.live)
      this._liveDirty = true;
    this._pokeIdle();
    this._invalidate();
  }
  _clampIntoViewport() {
    const vw = window.innerWidth, vh = window.innerHeight;
    if (!(vw > 0) || !(vh > 0))
      return false;
    let w = this.offsetWidth, h2 = this.offsetHeight;
    if (!(w > 0) || !(h2 > 0))
      return false;
    let changed = false;
    const maxW = Math.max(MIN_EDGE, vw - 8), maxH = Math.max(MIN_EDGE, vh - this.topFloor - this.bottomFloor - 8);
    if (w > maxW || h2 > maxH) {
      const cs = getComputedStyle(this), bw = w - parseFloat(cs.width), bh = h2 - parseFloat(cs.height);
      if (w > maxW) {
        this.style.width = Math.max(0, maxW - (bw > 0 ? bw : 0)) + "px";
        changed = true;
      }
      if (h2 > maxH) {
        this.style.height = Math.max(0, maxH - (bh > 0 ? bh : 0)) + "px";
        changed = true;
      }
      w = this.offsetWidth;
      h2 = this.offsetHeight;
    }
    const r = this.getBoundingClientRect();
    const left = clamp(r.left, 0, vw - w);
    const top = clamp(r.top, this.topFloor, Math.max(this.topFloor, vh - this.bottomFloor - h2));
    if (Math.abs(left - r.left) > 0.5) {
      this.style.left = left + "px";
      changed = true;
    }
    if (Math.abs(top - r.top) > 0.5) {
      this.style.top = top + "px";
      changed = true;
    }
    return changed;
  }
};
function clamp(x, lo, hi) {
  return Math.max(lo, Math.min(hi, x));
}
function screenToImg(sx, sy, vp) {
  const c = Math.cos(-vp.rot), s = Math.sin(-vp.rot);
  const dx = sx - vp.tx, dy = sy - vp.ty;
  return { x: (dx * c - dy * s) / vp.scale, y: (dx * s + dy * c) / vp.scale };
}
var WP_REFERENCE_WINDOW_TAG = "wp-reference-window";
if (!customElements.get(WP_REFERENCE_WINDOW_TAG)) {
  customElements.define(WP_REFERENCE_WINDOW_TAG, WpReferenceWindow);
}

// node_modules/@internal/reference-window/dist/deck/manifest.js
var DECK_MANIFEST_VERSION = 1;
var DECK_MANIFEST_NAME = "manifest.json";
function deckDir(app) {
  if (!/^[a-z][a-z0-9-]*$/.test(app))
    throw new Error(`deckDir: app name must be lowercase [a-z0-9-], got "${app}"`);
  return `.${app}/references`;
}
var DeckManifestTooNewError = class extends Error {
  fileVersion;
  libVersion;
  constructor(fileVersion, libVersion) {
    super(`reference manifest version ${fileVersion} is newer than this library supports (${libVersion}); refusing to read`);
    this.name = "DeckManifestTooNewError";
    this.fileVersion = fileVersion;
    this.libVersion = libVersion;
  }
};
var EXT_BY_MIME = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "text/plain": "txt",
  "text/markdown": "md",
  "video/mp4": "mp4",
  "video/webm": "webm",
  "audio/mpeg": "mp3",
  "audio/mp4": "m4a",
  "audio/ogg": "ogg",
  "audio/opus": "opus",
  "audio/webm": "weba",
  // 0.4.0（2026-10-09，音频卡；Claude Opus 5.5）：以前这几种落成 bin
  "audio/wav": "wav",
  "audio/flac": "flac",
  "audio/aac": "aac",
  "video/quicktime": "mov"
};
var MIME_BY_EXT = Object.fromEntries(Object.entries(EXT_BY_MIME).map(([m, e]) => [e, m]));
var EXT_BY_MIME_ALIAS = {
  "audio/x-wav": "wav",
  "audio/wave": "wav",
  "audio/vnd.wave": "wav",
  "audio/x-m4a": "m4a",
  "audio/mp3": "mp3",
  "audio/x-flac": "flac",
  "audio/aacp": "aac"
};
function extForMime(mime) {
  const base = (mime || "").split(";")[0].trim().toLowerCase();
  return EXT_BY_MIME[base] ?? EXT_BY_MIME_ALIAS[base] ?? (base.startsWith("image/") ? "img" : "bin");
}
function mimeForName(name) {
  const m = /\.([A-Za-z0-9]+)$/.exec(name || "");
  return m ? MIME_BY_EXT[m[1].toLowerCase()] ?? "" : "";
}
function extOfName(name) {
  const m = /\.([A-Za-z0-9]+)$/.exec(name || "");
  return m ? m[1].toLowerCase() : "bin";
}
var fileName = (dir, position, ext) => `${dir}/r${position}.${ext}`;
var STEPS2 = {};
function isObj(x) {
  return !!x && typeof x === "object" && !Array.isArray(x);
}
function migrateDeckManifest(json) {
  const src = isObj(json) ? json : {};
  let v = typeof src.version === "number" && Number.isFinite(src.version) ? Math.trunc(src.version) : 1;
  if (v > DECK_MANIFEST_VERSION)
    throw new DeckManifestTooNewError(v, DECK_MANIFEST_VERSION);
  let cur = src;
  while (v < DECK_MANIFEST_VERSION) {
    const step = STEPS2[v];
    if (!step)
      throw new Error(`migrateDeckManifest: no step registered for v${v} \u2192 v${v + 1}`);
    cur = step(cur);
    v++;
    if (cur.version !== v)
      throw new Error(`migrateDeckManifest: step v${v - 1}\u2192v${v} did not set version`);
  }
  const items = Array.isArray(cur.items) ? cur.items.filter((it) => isObj(it) && typeof it.kind === "string" && !!it.kind) : [];
  const index = typeof cur.index === "number" && Number.isFinite(cur.index) ? Math.trunc(cur.index) : 0;
  return { version: DECK_MANIFEST_VERSION, index, items };
}
function readView(x) {
  if (!isObj(x))
    return null;
  const { tx: tx3, ty, scale, rot } = x;
  const ok = [tx3, ty, scale, rot].every((n) => typeof n === "number" && Number.isFinite(n));
  return ok ? { tx: tx3, ty, scale, rot } : null;
}
function readPlay(x) {
  if (!isObj(x) || typeof x.t !== "number" || !Number.isFinite(x.t))
    return null;
  return { t: x.t, loop: !!x.loop };
}
var str = (x) => typeof x === "string" ? x : "";
async function decodeDeck(o) {
  const dir = deckDir(o.app);
  const blob = o.getFile(`${dir}/${DECK_MANIFEST_NAME}`);
  if (!blob)
    return { index: 0, cards: [], carried: [] };
  let json;
  try {
    json = JSON.parse(await blob.text());
  } catch (e) {
    throw new Error(`decodeDeck: ${dir}/${DECK_MANIFEST_NAME} is not valid JSON: ${String(e.message)}`);
  }
  return decodeDeckFromJson(json, o);
}
function decodeDeckFromJson(manifestJson, o) {
  const m = migrateDeckManifest(manifestJson);
  const known = new Set(o.knownKinds);
  const cards2 = [];
  const carried = [];
  let index = 0, indexSet = false;
  m.items.forEach((raw, at) => {
    if (!known.has(raw.kind)) {
      const files = {};
      const s = str(raw.src) ? o.getFile(str(raw.src)) : null;
      if (s)
        files.src = s;
      carried.push({ at, item: JSON.parse(JSON.stringify(raw)), files });
      return;
    }
    const ram = isObj(raw.ram) && typeof raw.ram.bytes === "number" && Number.isFinite(raw.ram.bytes) ? { bytes: raw.ram.bytes } : null;
    const src = ram ? "" : str(raw.src);
    const bytes = src ? o.getFile(src) : null;
    if (at === m.index) {
      index = cards2.length;
      indexSet = true;
    }
    cards2.push({
      kind: raw.kind,
      name: str(raw.name),
      bytes,
      mime: str(raw.mime) || bytes?.type || mimeForName(src),
      target: str(raw.target) || null,
      vp: readView(raw.vp),
      play: readPlay(raw.play),
      origin: str(raw.origin) || null,
      ram
    });
  });
  if (!indexSet)
    index = Math.max(0, Math.min(cards2.length - 1, m.index));
  return { index, cards: cards2, carried };
}
function encodeDeck(s, o) {
  const dir = deckDir(o.app);
  const slots = s.cards.map((card) => ({ card }));
  for (const c of [...s.carried].sort((a, b) => a.at - b.at)) {
    const at = Math.max(0, Math.min(slots.length, Math.trunc(c.at) || 0));
    slots.splice(at, 0, { carried: c });
  }
  const files = /* @__PURE__ */ new Map();
  const items = [];
  let index = 0;
  const viewing = s.cards[s.index] ?? null;
  slots.forEach((slot, position) => {
    if ("carried" in slot) {
      const item2 = JSON.parse(JSON.stringify(slot.carried.item));
      const src = slot.carried.files.src;
      if (src) {
        const n = fileName(dir, position, extOfName(str(item2.src)));
        files.set(n, src);
        item2.src = n;
      } else
        delete item2.src;
      items.push(item2);
      return;
    }
    const c = slot.card;
    if (c === viewing)
      index = position;
    const item = { kind: c.kind };
    if (c.bytes && !c.ram) {
      const n = fileName(dir, position, extForMime(c.mime || c.bytes.type));
      files.set(n, c.bytes);
      item.src = n;
    }
    item.vp = c.vp ? { tx: c.vp.tx, ty: c.vp.ty, scale: c.vp.scale, rot: c.vp.rot } : null;
    if (c.name)
      item.name = c.name;
    if (c.mime && (!item.src || mimeForName(item.src) !== c.mime.split(";")[0].trim().toLowerCase()))
      item.mime = c.mime;
    if (c.target)
      item.target = c.target;
    if (c.origin)
      item.origin = c.origin;
    if (c.play)
      item.play = { t: c.play.t, loop: c.play.loop };
    if (c.ram)
      item.ram = { bytes: c.ram.bytes };
    items.push(item);
  });
  const manifest = { version: DECK_MANIFEST_VERSION, index, items };
  const out = /* @__PURE__ */ new Map();
  out.set(`${dir}/${DECK_MANIFEST_NAME}`, new Blob([JSON.stringify(manifest)], { type: "application/json" }));
  for (const [n, b] of files)
    out.set(n, b);
  return out;
}

// node_modules/@internal/workbench-elements/dist/host-floors.js
function safeAreaTop() {
  const probe = document.createElement("div");
  probe.style.cssText = "position:fixed;top:0;left:0;height:0;padding-top:env(safe-area-inset-top,0px);visibility:hidden;pointer-events:none;";
  document.body.appendChild(probe);
  const v = parseFloat(getComputedStyle(probe).paddingTop) || 0;
  probe.remove();
  return v;
}
var _f = { toolbarBottom: () => 0, floatingTop: () => safeAreaTop() };
var floors = { toolbarBottom: () => _f.toolbarBottom(), floatingTop: () => _f.floatingTop() };

// node_modules/@internal/workbench-elements/dist/anchored-popup.js
function topToolbarBottom() {
  return floors.toolbarBottom();
}
function positionPopup(popupEl, opts = {}) {
  if (!popupEl)
    return;
  const { anchor = null, align = "right", offsetY = 4, edgeMargin = 8, belowToolbars = false, clampViewport = true } = opts;
  popupEl.style.position = "fixed";
  const safeTop = safeAreaTop();
  let top;
  const w = popupEl.offsetWidth || 0;
  if (anchor) {
    const r = anchor.getBoundingClientRect();
    top = r.bottom + offsetY;
    if (align === "right") {
      let right = window.innerWidth - r.right;
      if (w)
        right = Math.max(edgeMargin, Math.min(right, window.innerWidth - w - edgeMargin));
      popupEl.style.right = right + "px";
      popupEl.style.left = "auto";
    } else {
      let left = r.left;
      if (w)
        left = Math.max(edgeMargin, Math.min(left, window.innerWidth - w - edgeMargin));
      popupEl.style.left = left + "px";
      popupEl.style.right = "auto";
    }
  } else {
    top = safeTop + offsetY;
    if (align === "right") {
      popupEl.style.right = edgeMargin + "px";
      popupEl.style.left = "auto";
    } else {
      popupEl.style.left = edgeMargin + "px";
      popupEl.style.right = "auto";
    }
  }
  if (belowToolbars)
    top = Math.max(top, topToolbarBottom() + offsetY);
  top = Math.max(top, safeTop + 4);
  if (clampViewport) {
    const h2 = popupEl.offsetHeight || 0;
    if (h2)
      top = Math.min(top, Math.max(safeTop + 4, window.innerHeight - h2 - 8));
  }
  popupEl.style.top = top + "px";
}

// node_modules/@internal/workbench-elements/dist/icon.js
function iconHtml(name, opts = {}) {
  const { size, cls } = opts;
  const attrs = [
    'viewBox="0 0 24 24"',
    cls ? `class="${cls}"` : "",
    size ? `width="${size}" height="${size}"` : "",
    'aria-hidden="true"'
  ].filter(Boolean).join(" ");
  return `<svg ${attrs}><use href="#${name}"/></svg>`;
}

// node_modules/@internal/workbench-elements/dist/popup-menu.js
var _open = [];
function currentPopupMenu() {
  return _open[_open.length - 1] ?? null;
}
function togglePopupMenu(opts) {
  const cur = _open.find((x) => x.anchor === opts.anchor);
  if (cur) {
    cur.close();
    return null;
  }
  return openPopupMenu(opts);
}
function openPopupMenu(opts) {
  const variant = opts.variant ?? "list";
  const band = opts.band ?? "menu";
  const el = document.createElement("div");
  el.className = (variant === "compact" ? "lasso-icon-menu lasso-icon-list " : "menu-panel ") + `popup-menu popup-menu--${variant}` + (band === "css" ? "" : ` band-${band}`);
  el.setAttribute("role", "menu");
  const render2 = () => {
    const items = opts.items().filter((it) => !it.hidden);
    const anyIcon = items.some((it) => !!it.icon);
    let html = "";
    for (const it of items) {
      if (it.separatorBefore)
        html += `<hr class="popup-menu-sep">`;
      if (it.header) {
        html += `<div class="popup-menu-group">${escapeHtml(it.label)}</div>`;
        continue;
      }
      const cls = variant === "compact" ? "lasso-tool-btn popup-menu-item" : "menu-item popup-menu-item" + (anyIcon ? " menu-item-with-icon" : "") + (it.danger ? " danger" : "");
      const role = it.checked != null ? "menuitemradio" : "menuitem";
      const checkAttr = it.checked != null ? variant === "compact" ? ` aria-pressed="${it.checked}"` : ` aria-checked="${it.checked}"` : "";
      const icon2 = anyIcon ? it.icon ? iconHtml(it.icon) : `<span class="menu-item-icon-blank"></span>` : "";
      html += `<button type="button" class="${cls}" role="${role}" data-id="${escapeHtml(it.id)}"${checkAttr}${it.disabled ? " disabled" : ""}>` + icon2 + `<span class="menu-item-label">${escapeHtml(it.label)}</span></button>`;
    }
    el.innerHTML = html;
  };
  render2();
  document.body.appendChild(el);
  const handle = _mount(el, opts, {
    reposition: true,
    onRefresh: render2,
    onClosed: () => el.remove()
  });
  el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-id]");
    if (!b || b.disabled)
      return;
    e.stopPropagation();
    const id = b.dataset.id;
    const item = opts.items().find((it) => it.id === id);
    if (!item)
      return;
    const r = opts.onPick(id, item);
    if (r === "keep") {
      if (handle.isOpen)
        handle.refresh();
      return;
    }
    handle.close();
  });
  return handle;
}
function _mount(el, opts, hooks) {
  for (const h2 of [..._open])
    if (!h2.el.contains(opts.anchor) && h2.el !== el)
      h2.close();
  if (opts.ariaLabel)
    el.setAttribute("aria-label", opts.ariaLabel);
  let open = true;
  const position = () => {
    if (!hooks.reposition)
      return;
    positionPopup(el, {
      anchor: opts.anchor,
      align: opts.align ?? "right",
      offsetY: opts.offsetY ?? 4,
      belowToolbars: opts.belowToolbars,
      edgeMargin: opts.edgeMargin,
      clampViewport: true
    });
  };
  const onDocPointerDown = (e) => {
    const path = e.composedPath();
    if (path.includes(el) || path.includes(opts.anchor))
      return;
    if (_open.some((h2) => h2 !== handle && el.contains(h2.anchor) && path.includes(h2.el)))
      return;
    handle.close();
    if (opts.swallowOutsideTap) {
      e.stopPropagation();
      e.preventDefault();
    }
  };
  const onKey2 = (e) => {
    if (currentPopupMenu() !== handle)
      return;
    if (e.key === "Escape") {
      e.preventDefault();
      handle.close();
      return;
    }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      const btns = [...el.querySelectorAll("button:not([disabled])")];
      if (!btns.length)
        return;
      const i = btns.indexOf(document.activeElement);
      const next = e.key === "ArrowDown" ? (i + 1) % btns.length : (i - 1 + btns.length) % btns.length;
      btns[next].focus();
      e.preventDefault();
    }
  };
  const onResize = () => {
    if (open)
      position();
  };
  let anchorAt = anchorPos();
  function anchorPos() {
    const r = opts.anchor.getBoundingClientRect();
    return { x: r.left, y: r.top };
  }
  const onScroll = (e) => {
    if (!open)
      return;
    const t = e.target;
    if (t && el.contains(t))
      return;
    const now = anchorPos();
    if (Math.abs(now.x - anchorAt.x) < 0.5 && Math.abs(now.y - anchorAt.y) < 0.5)
      return;
    handle.close();
  };
  const handle = {
    get isOpen() {
      return open;
    },
    el,
    anchor: opts.anchor,
    refresh() {
      if (!open)
        return;
      hooks.onRefresh?.();
      position();
      anchorAt = anchorPos();
    },
    close() {
      if (!open)
        return;
      open = false;
      document.removeEventListener("pointerdown", onDocPointerDown, true);
      document.removeEventListener("keydown", onKey2, true);
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
      const i = _open.indexOf(handle);
      if (i >= 0)
        _open.splice(i, 1);
      hooks.onClosed();
      opts.onClose?.();
    }
  };
  position();
  setTimeout(() => {
    if (!open)
      return;
    document.addEventListener("pointerdown", onDocPointerDown, true);
    document.addEventListener("keydown", onKey2, true);
    document.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
  }, 0);
  _open.push(handle);
  return handle;
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

// node_modules/@internal/workbench-elements/src/workbench-elements.css
var workbench_elements_default = "/* @internal/workbench-elements \u2014\u2014 \u56DB\u4E2A\u539F\u5B50\u7684\u76AE\uFF08WET \u81EA WeebPaint styles.css\uFF0C2026-09-09\uFF0CClaude Fable 5.1\uFF09\u3002\n   class \u540D\u4E0E WeebPaint \u5B8C\u5168\u4E00\u81F4\uFF08\u4E0D\u6539\u8BED\u4E49\uFF09\uFF1B\u5BBF\u4E3B\u5DF2\u6709\u540C\u540D\u89C4\u5219\u65F6\u91CD\u590D\u65E0\u5BB3\uFF0C\u65E5\u540E\u53EF\u5220\u81EA\u5BB6\u90A3\u4EFD\u3002\n   \u9700\u8981\u5BBF\u4E3B :root \u63D0\u4F9B\u7684 token\uFF1A--bg --bg-soft --ink --ink-soft --line --shadow --accent --danger\n                              --z-menu --z-popover --z-modal --z-notice --z-toast */\n\n/* \u2500\u2500 popup-menu \xB7 list \u53D8\u4F53\uFF08.menu-panel \u76AE\uFF09 \u2500\u2500 */\n.menu-panel {\n  position: fixed;\n  min-width: 200px;\n  max-width: min(320px, calc(100vw - 24px));\n  max-height: calc(100vh - 80px);\n  overflow-y: auto;\n  background: var(--bg);\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  box-shadow: var(--shadow);\n  color: var(--ink);\n  z-index: var(--z-menu);\n  padding: 6px;\n  -webkit-overflow-scrolling: touch;\n  overscroll-behavior: contain;\n}\n.popup-menu.band-menu    { z-index: var(--z-menu); }\n.popup-menu.band-popover { z-index: var(--z-popover); }\n.popup-menu.band-modal   { z-index: calc(var(--z-modal) + 5); }\n.popup-menu--list { top: auto; left: auto; }          /* \u5750\u6807\u5168\u7531 positionPopup \u5199 inline */\n.popup-menu-sep { border: none; border-top: 1px solid var(--line); margin: 4px 2px; }\n.popup-menu-item.danger, .popup-menu-item.danger svg { color: var(--danger); }\n.popup-menu-group { font-size: 10px; color: var(--ink-soft); padding: 6px 8px 2px; text-transform: uppercase; letter-spacing: .06em; user-select: none; }\n\n.menu-item {\n  width: 100%;\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 10px 12px;\n  background: transparent; border: none; border-radius: 6px;\n  font: inherit; color: var(--ink); cursor: pointer; text-align: left;\n}\n.menu-item:hover { background: color-mix(in srgb, var(--ink) 8%, transparent); }\n.menu-item:disabled { opacity: 0.35; cursor: not-allowed; }\n.menu-item:disabled:hover { background: transparent; }\n.menu-item.menu-item-with-icon { justify-content: flex-start; gap: 10px; }\n.menu-item.menu-item-with-icon svg { width: 18px; height: 18px; flex-shrink: 0; }\n.menu-item-icon-blank { width: 18px; height: 18px; flex: none; }\n.menu-item-label { min-width: 0; }\n\n/* \u2500\u2500 popup-menu \xB7 compact \u53D8\u4F53\uFF08.lasso-icon-menu.lasso-icon-list \u76AE + .lasso-tool-btn \u836F\u4E38\u884C\uFF09 \u2500\u2500 */\n.lasso-icon-menu {\n  position: fixed; display: flex; gap: 2px; padding: 4px;\n  z-index: var(--z-popover);\n  background: var(--bg-soft); border: 1px solid var(--line); border-radius: 8px; box-shadow: var(--shadow);\n  color: var(--ink);\n}\n.lasso-icon-menu.lasso-icon-list { flex-direction: column; align-items: stretch; min-width: 168px; }\n.lasso-icon-menu.lasso-icon-list > button { display: flex; align-items: center; justify-content: flex-start; gap: 8px; padding: 5px 8px; font-size: 12px; }\n.lasso-icon-menu.lasso-icon-list > button svg { width: 18px; height: 18px; flex: 0 0 auto; }\n.lasso-tool-btn {\n  background: transparent; border: none;\n  padding: 4px 10px; font: inherit; font-size: 13px; color: var(--ink);\n  cursor: pointer; border-radius: 999px; white-space: nowrap;\n}\n.lasso-tool-btn:hover { background: color-mix(in srgb, var(--ink) 8%, transparent); }\n\n/* \u2500\u2500 notice \xB7 \u6808 + .toast \u76AE \u2500\u2500 */\n.toast {\n  position: fixed; left: 50%; bottom: max(env(safe-area-inset-bottom, 0px), 20px); transform: translateX(-50%);\n  display: flex; align-items: center; gap: 8px; padding: 8px 12px;\n  background: var(--ink); color: var(--bg);\n  border-radius: 999px; box-shadow: var(--shadow);\n  z-index: var(--z-toast); font-size: 13px;\n}\n.toast button {\n  background: transparent; border: 1px solid color-mix(in srgb, var(--bg) 40%, transparent); color: var(--bg);\n  padding: 4px 10px; border-radius: 999px; font-size: 12px; cursor: pointer;\n}\n.toast button.dismiss { border: none; font-size: 16px; padding: 2px 6px; }\n.dismiss svg { width: 16px; height: 16px; display: block; }\n.notice-stack {\n  position: fixed; left: 50%; transform: translateX(-50%);\n  bottom: max(env(safe-area-inset-bottom, 0px), 20px);\n  display: flex; flex-direction: column; align-items: center; gap: 8px;\n  max-width: calc(100vw - 24px);\n  z-index: var(--z-notice);\n  pointer-events: none;\n}\n.notice-stack.docked-top { bottom: auto; }\n.notice-stack > .toast { position: static; transform: none; pointer-events: auto; max-width: min(640px, calc(100vw - 24px)); flex-wrap: wrap; justify-content: center; }\n.notice-stack > .toast .notice-text { white-space: pre-wrap; word-break: break-word; max-height: 40vh; overflow: auto; }\n.toast.notice-error   { background: #c0392b; color: #fff; }\n.toast.notice-warning { background: #b7791f; color: #fff; }\n.toast.notice-error button, .toast.notice-warning button { color: #fff; border-color: rgba(255, 255, 255, 0.4); }\n.toast button.primary { background: rgba(255, 255, 255, 0.18); font-weight: 600; }\n";

// src/app/guide-window.ts
var APP = "kudsrocket";
var KINDS = ["image", "text"];
var ASK_ABOVE = 1024 * 1024;
var RAM_ABOVE = 4 * 1024 * 1024;
var SAVE_DELAY_MS = 1500;
var mb2 = (n) => `${(n / 2 ** 20).toFixed(n >= 10 * 2 ** 20 ? 0 : 1)} MB`;
function createGuideWindow(d) {
  let el = null;
  let fileInput = null;
  let game = null;
  let getPw = () => null;
  let phase = "none";
  let why = null;
  let head = { v: TIN_VERSION };
  let others = /* @__PURE__ */ new Map();
  let loading = null;
  let loadTimer = null;
  let saveTimer = null;
  let cardsDirty = false, viewDirty = false;
  let applying = false;
  let saving = Promise.resolve();
  let told2 = false;
  function ensureEl() {
    if (el) return el;
    document.head.append(h("style", { id: "workbench-elements-css" }, workbench_elements_default));
    const w = document.createElement("wp-reference-window");
    w.className = "ref-window";
    w.setAttribute("no-cloud", "");
    w.menuPort = (o) => {
      const handle = togglePopupMenu(o);
      const fs = document.fullscreenElement;
      if (handle && fs) {
        const menus = document.body.querySelectorAll(":scope > .popup-menu");
        const m = menus[menus.length - 1];
        if (m) fs.append(m);
      }
      return handle;
    };
    w.labels = {
      load: "\u5BFC\u5165\u56FE\u7247 / \u6587\u5B57\u2026",
      paste: "\u7C98\u8D34",
      oneToOne: "\u539F\u5C3A\u5BF8",
      del: "\u5220\u6389\u8FD9\u5F20",
      delConfirm: "\u518D\u70B9\u4E00\u6B21\u5220\u6389",
      closeWin: "\u6536\u8D77\u53C2\u8003\u7A97",
      prev: "\u4E0A\u4E00\u5F20",
      next: "\u4E0B\u4E00\u5F20",
      menu: "\u53C2\u8003\u7A97\u83DC\u5355",
      move: "\u70B9\u4E00\u4E0B\u7F29\u6210\u5C0F\u56FE\u6807\uFF0C\u6309\u4F4F\u62D6\u52A8\u632A\u4F4D\u7F6E",
      resize: "\u6539\u5927\u5C0F",
      resizeAria: "\u6539\u5927\u5C0F",
      moveEarlier: "\u5F80\u524D\u632A",
      moveLater: "\u5F80\u540E\u632A",
      jump: "\u8DF3\u5230\u2026",
      kindNames: { image: "\u56FE\u7247", text: "\u6587\u5B57" },
      linkMissing: "\u5185\u5BB9\u4E0D\u5728\u4E86",
      ram: "\u53EA\u653E\u5185\u5B58\uFF08\u4E0D\u5B58\u8FDB\u76D2\u5B50\uFF09",
      ramMissing: "\u53EA\u5728\u5185\u5B58\u91CC\uFF0C\u6CA1\u5B58\u2014\u2014\u628A\u8FD9\u4E2A\u6587\u4EF6\u62D6\u8FDB\u6765\uFF0C\u6216\u8005\u70B9 \uFF0B \u91CD\u65B0\u5BFC\u5165\uFF0C\u5C31\u8865\u56DE\u8FD9\u91CC",
      minimize: "\u7F29\u6210\u5C0F\u56FE\u6807",
      restore: "\u70B9\u4E00\u4E0B\u6062\u590D\uFF0C\u6309\u4F4F\u62D6\u52A8\u632A\u4F4D\u7F6E"
    };
    const input = h("input", { type: "file", multiple: true, hidden: true, accept: "image/*,.txt,.md,text/plain,text/markdown" });
    (document.fullscreenElement ?? document.body).append(w);
    document.body.append(input);
    el = w;
    fileInput = input;
    w.deck.onChange((what) => {
      if (applying) return;
      if (what.type === "cards") {
        cardsDirty = true;
        scheduleSave();
      } else if (what.type === "view") viewDirty = true;
    });
    w.addEventListener("openchange", () => {
      viewDirty = true;
      if (w.open) syncFloor();
    });
    w.addEventListener("rectchange", () => {
      viewDirty = true;
    });
    w.addEventListener("requestload", () => {
      input.value = "";
      input.click();
    });
    input.addEventListener("change", () => {
      const files = [...input.files ?? []];
      if (files.length) void importFiles(files);
    });
    w.addEventListener("requestpaste", () => {
      void pasteFromClipboard();
    });
    addEventListener("paste", (e) => {
      if (!w.hasFocus) return;
      const cd = e.clipboardData;
      if (!cd) return;
      e.preventDefault();
      e.stopPropagation();
      const files = [...cd.files];
      if (files.length) {
        void importFiles(files);
        return;
      }
      const text = cd.getData("text/plain");
      if (text.trim()) {
        w.addText(text, { name: "" });
        w.open = true;
        return;
      }
      d.say("\u526A\u8D34\u677F\u91CC\u6CA1\u6709\u56FE\u7247\u6216\u6587\u5B57", 3e3);
    }, true);
    w.addEventListener("dragover", (e) => {
      if (e.dataTransfer && Array.from(e.dataTransfer.types).includes("Files")) {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = "copy";
      }
    });
    w.addEventListener("drop", (e) => {
      const files = [...e.dataTransfer?.files ?? []];
      if (!files.length) return;
      e.preventDefault();
      e.stopPropagation();
      void importFiles(files);
    });
    w.addEventListener("notice", (e) => {
      const n = e.detail;
      d.log(n.level === "error" ? "warn" : "info", `\u53C2\u8003\u7A97\uFF1A${n.code} ${n.name ?? ""} ${n.message}`);
      if (n.code === "decode-failed") d.say(`\u8FD9\u5F20\u56FE\u8FD9\u4E2A\u6D4F\u89C8\u5668\u6253\u4E0D\u5F00${n.name ? `\uFF1A${n.name}` : ""}`, 4e3);
    });
    w.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        w.blur();
        document.activeElement?.blur?.();
        return;
      }
      if (e.ctrlKey || e.metaKey) e.stopPropagation();
    });
    w.addEventListener("keyup", (e) => {
      if (e.ctrlKey || e.metaKey || e.key === "Escape") e.stopPropagation();
    });
    document.addEventListener("fullscreenchange", () => {
      (document.fullscreenElement ?? document.body).append(w);
      if (w.open) syncFloor();
    });
    addEventListener("resize", () => {
      if (w.open) syncFloor();
    });
    return w;
  }
  function syncFloor() {
    if (!el) return;
    el.topFloor = d.topFloor();
    el.bottomFloor = 0;
    if (el.open) el.reclamp();
  }
  async function importFiles(files) {
    const w = ensureEl();
    const r = await w.importFiles(files, { kinds: KINDS, ask, askAbove: { image: ASK_ABOVE }, ramAbove: RAM_ABOVE });
    for (const k of r.skipped) {
      if (k.why === "unsupported") d.say(`\u8BA4\u4E0D\u51FA\uFF1A${k.name}\uFF08\u53C2\u8003\u7A97\u6536\u56FE\u7247\u548C\u6587\u5B57\uFF09`, 4e3);
      else if (k.why === "failed") {
        d.say(`\u6CA1\u52A0\u4E0A\uFF1A${k.name}`, 4e3);
        d.log("warn", `\u53C2\u8003\u7A97\uFF1A${k.name} \u6CA1\u52A0\u4E0A\uFF1A${k.message ?? "?"}`);
      }
    }
    for (const n of r.notes) d.log("info", `\u53C2\u8003\u7A97\uFF1A${n}`);
    if (r.added.length || r.filled.length) {
      tellIfNotSaved();
      d.log("info", `\u53C2\u8003\u7A97\uFF1A\u52A0\u4E86 ${r.added.length} \u5F20${r.filled.length ? `\u3001\u8865\u56DE ${r.filled.length} \u5F20` : ""}`);
    }
  }
  async function pasteFromClipboard() {
    const w = ensureEl();
    try {
      for (const it of await navigator.clipboard.read()) {
        const img = it.types.find((x) => x.startsWith("image/"));
        if (img) {
          await importFiles([new File([await it.getType(img)], `clipboard.${img.split("/")[1] ?? "png"}`, { type: img })]);
          return;
        }
        if (it.types.includes("text/plain")) {
          const text = await (await it.getType("text/plain")).text();
          if (text.trim()) {
            w.addText(text, { name: "" });
            w.open = true;
            tellIfNotSaved();
            return;
          }
        }
      }
    } catch {
      try {
        const text = await navigator.clipboard.readText();
        if (text.trim()) {
          w.addText(text, { name: "" });
          w.open = true;
          tellIfNotSaved();
          return;
        }
      } catch {
      }
    }
    d.say("\u526A\u8D34\u677F\u91CC\u6CA1\u6709\u56FE\u7247\u6216\u6587\u5B57\uFF08\u6216\u6D4F\u89C8\u5668\u4E0D\u8BA9\u8BFB\uFF09", 3e3);
  }
  function ask(q) {
    return sheet((done) => {
      const keep = h("button", { class: q.suggestRam ? "" : "primary", onclick: () => done("keep") }, "\u5B58\u8FDB\u76D2\u5B50");
      const ram = h("button", { class: q.suggestRam ? "primary" : "", onclick: () => done("ram") }, "\u53EA\u653E\u5185\u5B58");
      return [
        h("h2", {}, `${q.name}\uFF1A${mb2(q.bytes)}`),
        h("p", { class: "muted" }, "\u5B58\u8FDB\u76D2\u5B50 = \u8DDF\u7740\u8FD9\u4E2A\u6E38\u620F\u540C\u6B65\u5230 OneDrive\uFF0C\u522B\u7684\u8BBE\u5907\u4E5F\u80FD\u770B\uFF08\u4E4B\u540E\u6BCF\u6B21\u6539\u53C2\u8003\u7A97\u90FD\u8981\u4F20\u4E00\u6B21\u6574\u76D2\uFF09\u3002\u53EA\u653E\u5185\u5B58 = \u8FD9\u6B21\u6253\u5F00\u6709\u6548\uFF0C\u4E0B\u6B21\u662F\u4E2A\u7A7A\u4F4D\uFF0C\u628A\u540C\u4E00\u4E2A\u6587\u4EF6\u62D6\u8FDB\u6765\u5C31\u8865\u56DE\u3002"),
        h("div", { class: "row" }, ...q.suggestRam ? [ram, keep] : [keep, ram], h("button", { onclick: () => done("cancel") }, "\u7B97\u4E86"))
      ];
    }).then((v) => v ?? "cancel");
  }
  function tellIfNotSaved() {
    if (told2 || phase === "ready" || phase === "loading") return;
    told2 = true;
    d.say(phase === "nopw" ? "\u53C2\u8003\u7A97\uFF1A\u8FD9\u6B21\u6CA1\u6709\u53E3\u4EE4\uFF0C\u91CC\u9762\u7684\u4E1C\u897F\u4E0D\u4F1A\u5B58" : `\u53C2\u8003\u7A97\u8FD9\u6B21\u53EA\u8BFB\uFF1A${why ?? "\u76D2\u5B50\u6CA1\u8BFB\u8FDB\u6765"}\u2014\u2014\u6539\u7684\u4E1C\u897F\u4E0D\u4F1A\u5B58`, 6e3);
  }
  function ensureLoaded() {
    if (loadTimer) {
      clearTimeout(loadTimer);
      loadTimer = null;
    }
    if (!game) return Promise.resolve();
    if (phase === "nopw" && getPw()) loading = null;
    return loading ??= load(game);
  }
  async function load(g) {
    const w = ensureEl();
    const pw = getPw();
    if (!pw) {
      phase = "nopw";
      why = "\u6CA1\u6709\u53E3\u4EE4";
      d.log("info", "\u53C2\u8003\u7A97\uFF1A\u8FD9\u6B21\u6CA1\u6709\u53E3\u4EE4\uFF08\u660E\u6587\u76D8\u3001\u8FD8\u6CA1\u8F93\u8FC7\uFF09\uFF0C\u53C2\u8003\u7A97\u4E0D\u8BFB\u4E0D\u5B58");
      return;
    }
    phase = "loading";
    const id = tinId(g.key);
    const r = await readTin(id, pw, d.cloudReachable());
    if (game !== g) return;
    if (r.state === "absent") {
      head = { v: TIN_VERSION, k: g.k, ...g.id ? { id: g.id } : {}, ...g.ver ? { ver: g.ver } : {}, t: g.title };
      others = /* @__PURE__ */ new Map();
      phase = "ready";
      d.log("info", "\u53C2\u8003\u7A97\uFF1A\u8FD9\u4E2A\u6E38\u620F\u8FD8\u6CA1\u6709\u76D2\u5B50\uFF08\u7B2C\u4E00\u6B21\u52A0\u4E1C\u897F\u65F6\u5EFA\uFF09");
      return;
    }
    if (r.state === "unreadable") {
      phase = "readonly";
      why = r.wrongPassword ? "\u76D2\u5B50\u662F\u7528\u522B\u7684\u53E3\u4EE4\u5C01\u7684" : `\u76D2\u5B50\u6CA1\u8BFB\u8FDB\u6765\uFF08${r.why}\uFF09`;
      d.log("warn", `\u53C2\u8003\u7A97\uFF1A${why}\uFF1B\u8FD9\u4E00\u5C40\u4E0D\u5199`);
      return;
    }
    let tin;
    try {
      tin = decodeTin(r.zip);
    } catch (e) {
      phase = "readonly";
      why = e instanceof TinTooNewError ? `\u76D2\u5B50\u662F\u65B0\u7248\u672C\u5199\u7684\uFF08\u683C\u5F0F ${e.fileVersion}\uFF09` : `\u76D2\u5B50\u574F\u4E86\uFF08${e instanceof Error ? e.message : String(e)}\uFF09`;
      d.log("warn", `\u53C2\u8003\u7A97\uFF1A${why}\uFF1B\u8FD9\u4E00\u5C40\u4E0D\u5199`);
      return;
    }
    if (tin.verdict === "newer-minor" && toldOnce("tin")) {
      const st = readStamp("tin", tin.head);
      if (st) note(newerMinorText("tin", st), 5e3);
    }
    head = { ...tin.head, k: g.k, t: g.title, ...g.id ? { id: g.id } : {}, ...g.ver ? { ver: g.ver } : {} };
    others = new Map([...tin.files].filter(([p]) => !isRefEntry(p)));
    applying = true;
    try {
      const decoded = await decodeDeck({
        app: APP,
        knownKinds: KINDS,
        getFile: (path) => {
          const b = tin.files.get(path);
          return b ? new Blob([b], { type: mimeForName(path) }) : null;
        }
      });
      w.deck.restore(decoded);
      phase = "ready";
    } catch (e) {
      w.deck.clear();
      phase = "readonly";
      why = e instanceof DeckManifestTooNewError ? "\u53C2\u8003\u7A97\u7684\u6E05\u5355\u662F\u65B0\u7248\u672C\u5199\u7684" : `\u53C2\u8003\u7A97\u7684\u6E05\u5355\u8BFB\u4E0D\u51FA\uFF08${e instanceof Error ? e.message : String(e)}\uFF09`;
      d.log("warn", `\u53C2\u8003\u7A97\uFF1A${why}\uFF1B\u8FD9\u4E00\u5C40\u4E0D\u5199`);
    } finally {
      applying = false;
    }
    const ref = tin.head.ref;
    if (ref?.rect) w.rect = ref.rect;
    if (ref?.open && w.deck.size) {
      w.open = true;
      syncFloor();
    }
    cardsDirty = viewDirty = false;
    d.log("info", `\u53C2\u8003\u7A97\uFF1A\u8BFB\u8FDB ${w.deck.size} \u5F20${ref?.open ? "\uFF08\u4E0A\u6B21\u5F00\u7740\uFF0C\u653E\u56DE\u539F\u5904\uFF09" : ""}`);
  }
  function scheduleSave() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      saveTimer = null;
      void save({});
    }, SAVE_DELAY_MS);
  }
  function save(opts) {
    return saving = saving.then(() => saveNow(opts)).catch((e) => d.log("error", `\u53C2\u8003\u7A97\u6CA1\u5B58\u4E0A\uFF1A${e instanceof Error ? e.message : String(e)}`));
  }
  async function saveNow(opts) {
    const g = game, w = el, pw = getPw();
    if (!g || !w || phase !== "ready" || !pw || !(cardsDirty || viewDirty)) return;
    if (!cardsDirty && !w.deck.size && !others.size) {
      viewDirty = false;
      return;
    }
    cardsDirty = viewDirty = false;
    const refs = /* @__PURE__ */ new Map();
    for (const [path, blob] of encodeDeck(w.deck.snapshot(), { app: APP })) refs.set(path, new Uint8Array(await blob.arrayBuffer()));
    const r = w.rect;
    const zip = encodeTin({ head: { ...head, ref: { open: w.open, rect: { left: Math.round(r.left), top: Math.round(r.top), width: Math.round(r.width), height: Math.round(r.height) } } }, files: withRefs(others, refs) });
    const res = await saveTin(tinId(g.key), zip, pw, opts);
    d.log("info", `\u53C2\u8003\u7A97\uFF1A\u5B58\u4E86 ${w.deck.size} \u5F20\uFF08${mb2(zip.length)}\uFF09${res.pushed ? "\uFF0C\u5DF2\u540C\u6B65" : opts.deferPush ? "\uFF0C\u5148\u843D\u8FD9\u53F0\u8BBE\u5907" : `\uFF0C\u6CA1\u63A8\u4E0A\u53BB\uFF08${res.reason ?? "\u7B49\u7F51"}\uFF09`}`);
    if (res.resolution === "takeCloud" && game === g) {
      d.log("info", "\u53C2\u8003\u7A97\uFF1A\u51B2\u7A81\u65F6\u9009\u4E86\u4E91\u7AEF\u90A3\u4EFD\uFF0C\u91CD\u8BFB");
      loading = null;
      await ensureLoaded();
    }
  }
  return {
    attach(g, password, delayMs) {
      ensureEl();
      game = g;
      getPw = password;
      phase = "none";
      why = null;
      told2 = false;
      head = { v: TIN_VERSION };
      others = /* @__PURE__ */ new Map();
      loading = null;
      cardsDirty = viewDirty = false;
      applying = true;
      try {
        el.deck.clear();
      } finally {
        applying = false;
      }
      el.open = false;
      if (loadTimer) clearTimeout(loadTimer);
      loadTimer = setTimeout(() => {
        loadTimer = null;
        void ensureLoaded();
      }, delayMs);
    },
    async toggle() {
      const w = ensureEl();
      if (!game) return;
      if (!w.open && (phase === "none" || phase === "loading" || phase === "nopw" && getPw())) {
        d.say("\u6B63\u5728\u6253\u5F00\u53C2\u8003\u7A97\u2026", 2e3);
        await ensureLoaded();
      }
      w.open = !w.open;
      if (w.open) {
        syncFloor();
        w.focus({ preventScroll: true });
        if (!w.deck.size) d.say("\u53C2\u8003\u7A97\uFF1A\u70B9 \uFF0B \u5BFC\u5165\u653B\u7565\u622A\u56FE / \u6587\u5B57\uFF0C\u6216\u8005 Ctrl+V \u7C98\u8D34", 5e3);
        tellIfNotSaved();
      } else w.blur();
    },
    isOpen: () => !!el?.open,
    async flush(opts = {}) {
      if (saveTimer) {
        clearTimeout(saveTimer);
        saveTimer = null;
      }
      await save(opts);
    },
    state: () => ({ phase, cards: el?.deck.size ?? 0, open: !!el?.open, why })
  };
}

// src/app/shell-reset.ts
var IS_DEV = location.pathname.includes("/dev/") || /^(127\.0\.0\.1|localhost)$/.test(location.hostname);
var OWN_CACHE_PREFIX = IS_DEV ? "kudsrocket-dev-" : "kudsrocket-prod-";
var ownCache = (name) => name.startsWith(OWN_CACHE_PREFIX);
async function clearOwnShell() {
  let n = 0;
  try {
    const r = await navigator.serviceWorker?.getRegistration();
    if (r) await r.unregister().catch(() => {
    });
  } catch {
  }
  try {
    if (typeof caches !== "undefined") {
      for (const k of await caches.keys()) if (ownCache(k) && await caches.delete(k).catch(() => false)) n++;
    }
  } catch {
  }
  return n;
}

// src/app/namespace-migration.ts
var LEGACY = {
  // 老名字（test/namespace-prefix 守卫按行放行 legacy-name 标记：这里就是为了删它们）
  titles: `${APP_ID}.titles`,
  // legacy-name
  undoGuard: `${APP_ID}.undo-guard`,
  // legacy-name
  remember: `${APP_ID}.remember`
  // legacy-name
};
var BLOCKED_TIMEOUT_MS2 = 2e3;
async function exists(name) {
  try {
    if (typeof indexedDB.databases !== "function") return false;
    return (await indexedDB.databases()).some((d) => d.name === name);
  } catch {
    return false;
  }
}
function deleteDbOrBlocked2(name) {
  return new Promise((resolve) => {
    let settled = false;
    const done = (r) => {
      if (!settled) {
        settled = true;
        resolve(r);
      }
    };
    const timer2 = setTimeout(() => done("blocked"), BLOCKED_TIMEOUT_MS2);
    const req = indexedDB.deleteDatabase(name);
    req.onsuccess = () => {
      clearTimeout(timer2);
      done("deleted");
    };
    req.onerror = () => {
      clearTimeout(timer2);
      done("blocked");
    };
    req.onblocked = () => {
    };
  });
}
async function readAll(name, store2) {
  const db3 = await new Promise((resolve, reject) => {
    const req = indexedDB.open(name);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  try {
    if (!db3.objectStoreNames.contains(store2)) return [];
    return await new Promise((resolve, reject) => {
      const req = db3.transaction(store2, "readonly").objectStore(store2).getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  } finally {
    db3.close();
  }
}
async function migrateLegacyNamespace() {
  const r = { moved: [], deleted: [], blocked: [], passwordReset: false };
  if (typeof indexedDB === "undefined") return r;
  if (await exists(LEGACY.undoGuard)) {
    try {
      for (const g of await readAll(LEGACY.undoGuard, "guards")) await putGuard(g);
      r.moved.push("undo-guard");
    } catch (e) {
      console.warn("[namespace-migration] undo-guard copy failed", e);
    }
    (await deleteDbOrBlocked2(LEGACY.undoGuard) === "deleted" ? r.deleted : r.blocked).push(LEGACY.undoGuard);
  }
  if (await exists(LEGACY.titles)) (await deleteDbOrBlocked2(LEGACY.titles) === "deleted" ? r.deleted : r.blocked).push(LEGACY.titles);
  if (await exists(LEGACY.remember)) {
    r.passwordReset = true;
    (await deleteDbOrBlocked2(LEGACY.remember) === "deleted" ? r.deleted : r.blocked).push(LEGACY.remember);
  }
  return r;
}

// src/app/factory-reset.ts
var OWN_DBS = [`${APP_GUID}.titles`, `${APP_GUID}.undo-guard`, `${APP_GUID}.remember`];
var PHRASE = "\u8FD8\u539F\u51FA\u5382";
async function listOwnDbs() {
  try {
    if (typeof indexedDB.databases !== "function") return [];
    return (await indexedDB.databases()).map((d) => d.name ?? "").filter((n) => OWN_DBS.includes(n));
  } catch {
    return [];
  }
}
function typedConsent() {
  return sheet((done) => {
    const input = h("input", { type: "text", placeholder: PHRASE, autocomplete: "off", "aria-label": "\u786E\u8BA4" });
    const ok = h("button", { class: "primary", onclick: () => done(input.value) }, "\u8FD8\u539F\u51FA\u5382\u8BBE\u7F6E");
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") done(input.value);
    });
    queueMicrotask(() => input.focus());
    return [
      h("h2", {}, "\u6700\u540E\u786E\u8BA4"),
      h("p", {}, `\u5728\u4E0B\u9762\u8F93\u5165\u300C${PHRASE}\u300D\u56DB\u4E2A\u5B57\uFF0C\u518D\u70B9\u6309\u94AE\u3002\u4E91\u7AEF\u7684\u76D8\u3001\u5FEB\u7167\u3001\u5B58\u6863\u90FD\u4E0D\u4F1A\u52A8\uFF1B\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u5168\u90E8\u6E05\u6389\u3001\u8BB0\u4F4F\u7684\u53E3\u4EE4\u5FD8\u6389\u3001\u8BBE\u5907\u53F7\u6362\u65B0\u3002`),
      input,
      h("div", { class: "row" }, h("button", { onclick: () => done(null) }, "\u53D6\u6D88"), ok)
    ];
  });
}
async function runFactoryReset(opts = {}) {
  if (navigator.onLine === false) {
    banner("\u8981\u8054\u7F51\u624D\u80FD\u8FD8\u539F\u51FA\u5382\uFF1A\u6E05\u6389\u79BB\u7EBF\u58F3\u4E4B\u540E\u9875\u9762\u8981\u91CD\u65B0\u4E0B\u8F7D\u3002", "warning");
    return;
  }
  if (opts.busy) {
    banner("\u5148\u9000\u51FA\u6B63\u5728\u73A9\u7684\u8FD9\u5F20\u76D8\u518D\u8FD8\u539F\u51FA\u5382\u3002", "warning");
    return;
  }
  let dirty = 0;
  try {
    dirty = await getStore().files.dirty.count();
  } catch {
  }
  const msg = (dirty > 0 ? `\u6709 ${dirty} \u4EFD\u8FD8\u6CA1\u4F20\u4E0A\u53BB\uFF08\u5FEB\u7167 / \u5B58\u6863\uFF09\uFF0C\u4F1A\u8DDF\u7740\u4E00\u8D77\u5220\u6389\uFF0C\u4E0D\u9020\u9003\u751F\u526F\u672C\u3002` : "\u8FD9\u53F0\u8BBE\u5907\u4E0A\u6CA1\u6709\u8FD8\u6CA1\u4F20\u4E0A\u53BB\u7684\u4E1C\u897F\u3002") + "\n\u8FD8\u539F\u51FA\u5382 = \u8FD9\u4E2A app \u5728\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u5168\u90E8\u6E05\u6210\u65B0\u88C5\uFF1A\u672C\u673A\u526F\u672C\u3001\u6682\u5B58\u533A\u3001\u540D\u7247\u7F13\u5B58\u3001\u64A4\u9500\u62A4\u680F\u3001\u8BB0\u4F4F\u7684\u53E3\u4EE4\u3001\u8BBE\u5907\u53F7\u3001\u952E\u4F4D\u7ED1\u5B9A\u3001\u79BB\u7EBF\u58F3\u3002\u4E91\u7AEF\uFF08OneDrive AppFolder\uFF09\u4E00\u4E2A\u5B57\u8282\u4E0D\u52A8\uFF0C\u522B\u7684 app \u4E0D\u52A8\u3002";
  if (!await confirmSheet("\u8FD8\u539F\u51FA\u5382\u8BBE\u7F6E\uFF1F", msg, "\u7EE7\u7EED")) return;
  const typed = await typedConsent();
  if (typed == null) return;
  if (typed.trim() !== PHRASE) {
    banner("\u8F93\u5165\u7684\u5B57\u4E0D\u5BF9\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u505A\u3002", "warning");
    return;
  }
  try {
    logEvent("info", `\u8FD8\u539F\u51FA\u5382\uFF1A\u5F00\u59CB\uFF08\u6CA1\u4F20\u4E0A\u53BB ${dirty} \u4EFD\uFF09`);
    await disposeStore();
    const storeReport = await wipeAppNamespace({ appId: APP_ID, consent: { expected: PHRASE, typed: typed.trim() } });
    await closeUndoGuardDb();
    await closeTitleCacheDb();
    try {
      await passwordKeeper().forget();
    } catch {
    }
    const deleted = [], blocked = [];
    for (const name of await listOwnDbs()) (await deleteDbOrBlocked2(name) === "deleted" ? deleted : blocked).push(name);
    const ls = deviceKvWipeAll();
    const cachesRemoved = await clearOwnShell();
    const scan = await scanAppNamespace(APP_ID);
    const totalBlocked = storeReport.blockedDatabases.length + blocked.length;
    if (totalBlocked > 0) {
      const names = [...storeReport.blockedDatabases, ...blocked].join(" ");
      logEvent("warn", `\u8FD8\u539F\u51FA\u5382\uFF1A${totalBlocked} \u4E2A\u5E93\u88AB\u5360\u7740\u6CA1\u5220\u6389\uFF08${names}\uFF09\uFF1B\u5173\u6389\u522B\u7684\u6807\u7B7E\u9875\u518D\u505A\u4E00\u6B21`);
      banner(`\u8FD8\u539F\u51FA\u5382\u505A\u4E86\u4E00\u534A\uFF1A${totalBlocked} \u4E2A\u5E93\u88AB\u522B\u7684\u6807\u7B7E\u9875\u5360\u7740\uFF0C\u6CA1\u5220\u6389\uFF08${names}\uFF09\u3002\u5173\u6389\u8FD9\u4E2A app \u7684\u5176\u4ED6\u6807\u7B7E\u9875\u518D\u505A\u4E00\u6B21\uFF08\u53EF\u4EE5\u91CD\u590D\u505A\uFF09\u3002\u9875\u9762\u4F1A\u91CD\u65B0\u8F7D\u5165\u3002`, "warning");
      setTimeout(() => reloadOnPurpose(), 2500);
      return;
    }
    const residue = scan.databases.length + scan.localStorageKeys + (await listOwnDbs()).length + deviceKvCount();
    note(residue === 0 ? `\u8FD8\u539F\u51FA\u5382\u5B8C\u6210\uFF1A\u5220\u4E86 ${storeReport.deletedDatabases.length + deleted.length} \u4E2A\u5E93\u3001${storeReport.localStorageKeysRemoved + ls} \u4E2A\u952E\u3001${cachesRemoved} \u4E2A\u7F13\u5B58\u3002\u91CD\u65B0\u8F7D\u5165\u2026` : `\u8FD8\u539F\u51FA\u5382\u505A\u5B8C\u4E86\uFF0C\u4F46\u8FD8\u5269 ${residue} \u5904\u6B8B\u7559\uFF1B\u91CD\u65B0\u8F7D\u5165\u540E\u518D\u505A\u4E00\u6B21\u3002`, 4e3);
    setTimeout(() => reloadOnPurpose(), 1200);
  } catch (e) {
    if (e?.name === "WipeConsentError") {
      banner("\u8F93\u5165\u7684\u5B57\u4E0D\u5BF9\uFF0C\u4EC0\u4E48\u90FD\u6CA1\u505A\u3002", "warning");
      return;
    }
    banner(`\u8FD8\u539F\u51FA\u5382\u51FA\u9519\uFF1A${errorText(e)}\u3002\u9875\u9762\u4F1A\u91CD\u65B0\u8F7D\u5165\u3002`);
    setTimeout(() => reloadOnPurpose(), 1500);
  }
}

// src/app/main.ts
var params = new URLSearchParams(location.search);
var DEV_SERVER = /^(127\.0\.0\.1|localhost)$/.test(location.hostname);
var IS_DEV_CHANNEL = location.pathname.includes("/dev/") || DEV_SERVER;
if (IS_DEV_CHANNEL) enableReadTrace();
var OWN_SW = new URL("./service-worker.js", location.href).href;
var ownController = () => navigator.serviceWorker.controller?.scriptURL === OWN_SW;
async function ensureIsolation() {
  if (!("serviceWorker" in navigator)) return crossOriginIsolated;
  const reg = await navigator.serviceWorker.register("./service-worker.js").catch((e) => {
    console.warn("[sw]", e);
    return null;
  });
  navigator.serviceWorker.addEventListener("message", (e) => {
    if (e.data?.type === "asset-updated") showUpdate();
  });
  if (reg) watchUpdates(reg);
  if (crossOriginIsolated) return true;
  if (!reg || ownController()) return false;
  while (!ownController()) await new Promise((r) => navigator.serviceWorker.addEventListener("controllerchange", r, { once: true }));
  location.reload();
  return new Promise(() => {
  });
}
function watchUpdates(reg) {
  const live = ownController;
  if (reg.waiting && live()) showUpdate();
  reg.addEventListener("updatefound", () => {
    const w = reg.installing;
    w?.addEventListener("statechange", () => {
      if ((w.state === "installed" || w.state === "activated") && live()) showUpdate();
    });
  });
  const check = () => {
    if (document.visibilityState === "visible") reg.update().catch(() => {
    });
  };
  document.addEventListener("visibilitychange", check);
  addEventListener("focus", check);
  setInterval(check, 10 * 6e4);
}
function showUpdate() {
  const el = $("update");
  if (!el.hidden) return;
  const close = h("button", { class: "icon-btn", title: "\u5148\u4E0D\u7BA1" }, icon("x"));
  close.addEventListener("click", () => {
    el.hidden = true;
  });
  el.replaceChildren(h("span", {}, "\u6709\u65B0\u7248\u672C"), h("button", { class: "primary", onclick: () => reloadOnPurpose() }, session ? "\u91CD\u65B0\u8F7D\u5165\uFF08\u4F1A\u9000\u51FA\u5F53\u524D\u8FD9\u5F20\u76D8\uFF09" : "\u91CD\u65B0\u8F7D\u5165"), close);
  el.hidden = false;
}
async function forceUpdate() {
  if (!await confirmSheet("\u5F3A\u5236\u66F4\u65B0\uFF1F", `\u73B0\u5728\u662F ${APP_VERSION}\u3002\u4F1A\u6E05\u6389\u8FD9\u4E2A app \u81EA\u5DF1\u7684\u79BB\u7EBF\u58F3\u7F13\u5B58\u5E76\u91CD\u65B0\u8F7D\u5165${session ? "\uFF08\u4F1A\u9000\u51FA\u5F53\u524D\u8FD9\u5F20\u76D8\uFF09" : ""}\uFF1B\u5B58\u6863\u3001\u5FEB\u7167\u3001\u767B\u5F55\u72B6\u6001\u90FD\u4E0D\u52A8\u3002${inFlight() ? "\u26A0 \u6709\u4E1C\u897F\u6B63\u5728\u4F20\uFF0C\u91CD\u65B0\u8F7D\u5165\u4F1A\u6253\u65AD\u5B83\uFF08\u5FEB\u7167\u4F1A\u7559\u5728\u672C\u673A\u7B49\u7EED\u4F20\uFF1B\u4E0A\u4F20\u4E2D\u7684\u76D8\u5F97\u91CD\u4F20\uFF09\u3002" : ""}`, "\u66F4\u65B0")) return;
  await clearOwnShell();
  reloadOnPurpose();
}
var session = null;
var current = null;
var discOpens = 0;
var ac = null;
var softKeys = null;
var snaps = null;
var activity2 = null;
var stageEl = $("stage");
var pausedMarkEl = $("paused-mark");
var resumeCoverEl = $("resume-cover");
var pip = createPip(stageEl, {
  onEnter(win) {
    setPipActive(true);
    win.addEventListener("keydown", (e) => onKey(e, true));
    win.addEventListener("keyup", (e) => onKey(e, false));
    win.addEventListener("blur", () => session?.setMask("keyboard", 0));
    win.addEventListener("resize", () => session?.notifyDisplaySize());
    session?.notifyDisplaySize();
    renderPipBar(true);
    startFrameLoop();
    renderToolbar();
    logEvent("info", `\u5C0F\u7A97\uFF1A\u753B\u9762\u642C\u8FDB\u7F6E\u9876\u5C0F\u7A97\uFF08${win.innerWidth}\xD7${win.innerHeight}\uFF09`);
  },
  onLeave() {
    setPipActive(false);
    renderPipBar(false);
    session?.notifyDisplaySize();
    startFrameLoop();
    renderToolbar();
    logEvent("info", "\u5C0F\u7A97\uFF1A\u753B\u9762\u642C\u56DE\u9875\u9762");
  },
  // 这一页看着像空标签页，容易被顺手关掉：写明关了会怎样（user 10-24「小窗的时候父窗口关了不应该猝死」）
  picture: () => {
    const c = stageEl.querySelector("canvas:not([hidden])");
    return c ? c.getBoundingClientRect() : null;
  },
  placeholder: () => h("div", { class: "pip-placeholder" }, h("p", {}, "\u753B\u9762\u5728\u5C0F\u7A97\u91CC"), h("p", { class: "hint" }, "\u5173\u6389\u8FD9\u4E2A\u6807\u7B7E\u9875\uFF0C\u5C0F\u7A97\u548C\u6E38\u620F\u4F1A\u4E00\u8D77\u5173\u3002"), h("button", { class: "primary", onclick: () => pip.close() }, "\u6536\u56DE"))
});
addEventListener("beforeunload", (e) => {
  if (pip.active && session && !leavingOnPurpose()) {
    e.preventDefault();
    e.returnValue = "";
  }
});
async function togglePip() {
  if (pip.active) {
    pip.close();
    return;
  }
  if (!pip.supported) {
    say("\u8FD9\u4E2A\u6D4F\u89C8\u5668\u6CA1\u6709\u5C0F\u7A97\uFF08\u8981\u684C\u9762\u7248 Chrome / Edge\uFF09", 4e3);
    return;
  }
  if (!session) return;
  if (document.fullscreenElement) await document.exitFullscreen().catch(() => {
  });
  try {
    if (!await pip.open()) say("\u5C0F\u7A97\u6CA1\u5F00\u8D77\u6765", 3e3);
  } catch (e) {
    say(`\u5C0F\u7A97\u6CA1\u5F00\u8D77\u6765\uFF1A${errorText(e)}`, 5e3);
    logEvent("warn", `\u5C0F\u7A97\u5931\u8D25\uFF1A${errorText(e)}`);
  }
}
function renderPipBar(on) {
  stageEl.querySelector("#pip-bar")?.remove();
  if (!on) return;
  stageEl.append(h(
    "div",
    { id: "pip-bar", class: "esc-keys" },
    toolButton("floppy-disk", "\u5B58\u5FEB\u7167\uFF08F2 \u90A3\u4E00\u683C\uFF09", () => {
      const t = quickSlot(true);
      if (t) saveTo(t);
    }, "\u5FEB\u7167"),
    toolButton("keyboard", "\u5C4F\u5E55\u8F6F\u952E", toggleSoftKeys, "\u8F6F\u952E")
  ));
}
var softAnalog = { x: 0, y: 0 };
var softRight = { x: 0, y: 0 };
var currentSlot = null;
var lastNote = "";
var cards = /* @__PURE__ */ new Map();
var titles = { get: (id) => cards.get(id)?.title, has: (id) => cards.has(id) };
var latencyHint = "interactive";
function audioContext() {
  ac ??= new AudioContext({ sampleRate: 44100, latencyHint });
  return ac;
}
async function cycleAudio() {
  const ctx = audioContext();
  if (ctx.state === "closed") return;
  await ctx.suspend();
  await ctx.resume();
  logEvent("info", `\u58F0\u97F3\u6302\u8D77\u2192\u6062\u590D\uFF1A${ctx.state}`);
}
async function rebuildAudio(why) {
  if (!session) return;
  const fresh = new AudioContext({ sampleRate: 44100, latencyHint });
  ac = fresh;
  await session.rebuildAudio(fresh);
  logEvent("warn", `\u58F0\u97F3\u91CD\u5EFA\uFF08${why}\uFF09\uFF1A\u65B0 AudioContext ${fresh.state}`);
}
function audioAlive(a, b) {
  return b.audioClock - a.audioClock > 0.5 || b.audioRead !== a.audioRead;
}
var say = (text, ms) => {
  lastNote = text;
  note(text, ms);
};
var pushDirtyNow = async () => {
};
setSnapshotPushHook(() => {
  void pushDirtyNow();
});
var pausedByModal = false;
onStoreModal((on) => {
  const s = session;
  if (!s) return;
  if (on) {
    if (!s.paused) {
      s.setPaused(true);
      pausedByModal = true;
      logEvent("info", "\u5E93\u7684\u9762\u677F / \u906E\u7F69\u5F00\u7740\uFF1A\u6E38\u620F\u6682\u505C");
      renderToolbar();
    }
  } else if (pausedByModal) {
    pausedByModal = false;
    s.setPaused(false);
    renderToolbar();
  }
});
var guide = createGuideWindow({
  log: (level, text) => logEvent(level, text),
  say,
  topFloor: () => document.fullscreenElement ? 0 : $("toolbar").getBoundingClientRect().bottom,
  cloudReachable: () => auth.isSignedIn() && navigator.onLine
});
var pantryItems = [];
var pantryComplete = false;
var unwatchPantry = null;
function watchPantry() {
  unwatchPantry?.();
  unwatchPantry = getStore().files.watchFolder(PANTRY, (snap) => {
    pantryItems = snap.items.map((it) => ({ identifier: it.identifier, size: it.size, lastModified: it.lastModified, syncState: it.syncState }));
    pantryComplete = snap.complete;
    renderLibrary();
  });
}
var remembered = false;
var rememberedTill = null;
var dayText = (ms) => new Date(ms).toLocaleDateString("zh-CN", { month: "long", day: "numeric" });
var triedUnlock = /* @__PURE__ */ new Set();
var unsupported = /* @__PURE__ */ new Map();
var unavailableTries = /* @__PURE__ */ new Map();
var unlocking = /* @__PURE__ */ new Set();
var UNLOCK_DEADLINE_MS = 45e3;
var titleCache = null;
var titleCacheFor = null;
async function hydrateTitles() {
  const pw = getPassword();
  if (!pw) return;
  if (titleCacheFor !== pw) {
    titleCacheFor = pw;
    titleCache = await loadTitleCards(pw).catch((e) => {
      console.warn("[title-cache]", e);
      return /* @__PURE__ */ new Map();
    });
  }
  let hit = 0;
  for (const it of pantryItems) {
    if (cards.has(it.identifier)) continue;
    const c = titleCache?.get(it.identifier);
    if (c && (it.size == null || c.size === it.size)) {
      cards.set(it.identifier, c.card);
      hit++;
    }
  }
  if (hit) renderLibrary();
}
var unlockRetryMs = 15e3;
var unlockRetryTimer = 0;
function adoptPassword(pw) {
  if (pw !== getPassword()) {
    triedUnlock.clear();
    titleCacheFor = null;
  }
  setPassword(pw);
  hydrateTitles().catch(() => {
  });
  if (!takeRememberChoice()) return;
  rememberPassword(pw).then((till) => {
    remembered = true;
    rememberedTill = till;
    renderAccount();
    say(`\u8FD9\u53F0\u8BBE\u5907\u8BB0\u4F4F\u53E3\u4EE4\u4E86\uFF0C\u5230 ${dayText(till)}\uFF08\u4E3B\u9875\u4E0A\u80FD\u5FD8\u8BB0\uFF09`);
  }, (e) => banner(`\u6CA1\u8BB0\u4F4F\u53E3\u4EE4\uFF1A${errorText(e)}`));
}
async function forgetRemembered(why) {
  await forgetPassword().catch((e) => console.warn("[remember]", e));
  await clearTitleCards().catch(() => {
  });
  titleCache = null;
  titleCacheFor = null;
  remembered = false;
  rememberedTill = null;
  renderAccount();
  say(why);
}
var logButton = () => h("button", { title: "\u9ED1\u5323\u5B50\uFF1A\u5B58 / \u4F20 / \u51B2\u7A81 / \u5207\u540E\u53F0 / \u6838\u6CA1\u53CD\u5E94\u2026\u2026\u8DE8\u91CD\u8F7D\u4FDD\u7559", onclick: () => openLog() }, "\u65E5\u5FD7");
var rememberRow = () => remembered ? [h("span", { class: "muted" }, rememberedTill ? `\xB7 \u8FD9\u53F0\u8BBE\u5907\u8BB0\u7740\u53E3\u4EE4\uFF08\u5230 ${dayText(rememberedTill)}\uFF09` : "\xB7 \u8FD9\u53F0\u8BBE\u5907\u8BB0\u7740\u53E3\u4EE4"), h("button", { onclick: () => {
  forgetRemembered("\u5DF2\u5FD8\u8BB0\u8FD9\u53F0\u8BBE\u5907\u8BB0\u7740\u7684\u53E3\u4EE4").catch(() => {
  });
} }, "\u5FD8\u8BB0\u53E3\u4EE4")] : [];
function renderAccount() {
  const row = $("account");
  $("tools").hidden = !auth.isSignedIn();
  if (!auth.isAuthConfigured()) {
    row.replaceChildren();
    return;
  }
  if (auth.isSignedIn()) {
    row.replaceChildren(
      icon("cloud"),
      h("span", {}, "OneDrive"),
      h("button", { onclick: async () => {
        await auth.signOut();
        if (remembered) await forgetRemembered("\u5DF2\u9000\u51FA\u767B\u5F55\uFF0C\u8FD9\u53F0\u8BBE\u5907\u4E5F\u4E0D\u518D\u8BB0\u7740\u53E3\u4EE4");
        renderAccount();
        renderLibrary();
      } }, "\u9000\u51FA\u767B\u5F55"),
      ...rememberRow(),
      logButton()
    );
  } else {
    row.replaceChildren(
      h("button", { class: "primary", onclick: () => {
        requestStoragePersistence().catch(() => {
        });
        auth.signIn().catch((e) => banner(`\u767B\u5F55\u5931\u8D25\uFF1A${errorText(e)}`));
      } }, icon("cloud"), "\u767B\u5F55"),
      ...rememberRow(),
      logButton()
    );
  }
}
var gb = (n) => n ? `${(n / 2 ** 30).toFixed(2)} GB` : "";
function renderLibrary() {
  const list = $("library");
  const discs = pantryItems.filter((it) => DISC_SUFFIXES.some((s) => it.identifier.toLowerCase().endsWith(s))).sort((a, b) => (b.lastModified ?? 0) - (a.lastModified ?? 0));
  const locked = discs.some((d) => d.identifier.endsWith(".wafter") && !titles.has(d.identifier) && !unsupported.has(d.identifier));
  if (getPassword()) {
    if (titleCacheFor !== getPassword()) {
      hydrateTitles().catch(() => {
      });
    }
    const pending2 = discs.filter((d) => d.identifier.endsWith(".wafter") && !cards.has(d.identifier) && !unsupported.has(d.identifier) && !triedUnlock.has(d.identifier) && !(titleCache?.get(d.identifier) && (d.size == null || titleCache.get(d.identifier).size === d.size)));
    if (pending2.length) {
      for (const d of pending2) triedUnlock.add(d.identifier);
      unlockTitles(pending2.map((d) => d.identifier)).catch((e) => console.warn("[unlock]", e));
    }
  }
  const rows = [];
  const last = lastPlayed();
  if (last && discs.some((d) => d.identifier === last)) {
    rows.push(h(
      "button",
      { class: "disc continue", onclick: () => playFromPantry(last, true) },
      icon("play"),
      h("span", { class: "title" }, `\u7EE7\u7EED\uFF1A${titles.get(last) ?? (last.endsWith(".wafter") ? "\u4E0A\u6B21\u90A3\u5F20" : stemOf2(last))}`),
      h("span", { class: "muted" }, "\u8BFB\u6700\u65B0\u7684\u5FEB\u7167")
    ));
  }
  for (const d of discs) {
    if (unsupported.has(d.identifier)) {
      rows.push(h(
        "div",
        { class: "disc-row" },
        h(
          "button",
          { class: "disc", onclick: () => {
            unsupportedSheet(d.identifier).catch((e) => banner(errorText(e)));
          } },
          h("span", { class: "title" }, h("span", {}, stemOf2(d.identifier)), h("span", { class: "sub muted" }, "\u4E0D\u652F\u6301\u7684\u76D8")),
          h("span", { class: "muted" }, gb(d.size))
        )
      ));
      continue;
    }
    const t = titles.get(d.identifier) ?? (d.identifier.endsWith(".wafter") ? null : stemOf2(d.identifier));
    const local2 = d.syncState !== "cloud-only";
    rows.push(h(
      "div",
      { class: "disc-row" },
      h(
        "button",
        { class: "disc", onclick: () => {
          discMenu(d.identifier).catch((e) => banner(errorText(e)));
        } },
        t ? null : icon("lock"),
        h(
          "span",
          { class: "title" },
          h("span", {}, t ?? stemOf2(d.identifier)),
          t && t !== stemOf2(d.identifier) ? h("span", { class: "sub muted" }, stemOf2(d.identifier) + (d.identifier.match(/\.[^.]*$/)?.[0] ?? "")) : null
        ),
        h("span", { class: "muted" }, `${gb(d.size)}${local2 ? " \xB7 \u672C\u673A" : ""}`)
      ),
      // 留一份在这台设备（离线能玩、不等网）/ 移除本机副本（云端那份不动）。user 10-14「可以加一个手动cache的功能」
      h("button", {
        class: "icon-btn",
        title: local2 ? "\u79FB\u9664\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u526F\u672C\uFF08\u4E91\u7AEF\u4E0D\u52A8\uFF09" : "\u628A\u8FD9\u5F20\u76D8\u6574\u4E2A\u7559\u5728\u8FD9\u53F0\u8BBE\u5907\u4E0A\uFF08\u79BB\u7EBF\u4E5F\u80FD\u6253\u5F00\uFF09",
        onclick: () => local2 ? offloadDisc(d.identifier) : keepDisc(d.identifier)
      }, icon(local2 ? "x" : "cloud"))
    ));
  }
  if (!discs.length && auth.isSignedIn()) {
    rows.push(h("p", { class: "muted" }, pantryComplete ? `\u7A7A\u7684\u3002\u6587\u4EF6\u653E\u5728 OneDrive\u300C\u5E94\u7528\u300D\u91CC\u672C app \u7684\u6587\u4EF6\u5939 \u2192 ${PANTRY}/` : "\u2026"));
  }
  list.replaceChildren(...rows);
  $("unlock").hidden = !locked;
}
async function discMenu(identifier) {
  if (unsupported.has(identifier)) return unsupportedSheet(identifier);
  const card = cards.get(identifier);
  const title = card?.title ?? (identifier.endsWith(".wafter") ? "\u8FD9\u5F20\u76D8" : stemOf2(identifier));
  const choice = await sheet((done) => [
    h("h2", {}, title),
    h(
      "div",
      { class: "menu" },
      h("button", { class: "primary", onclick: () => done("resume") }, "\u4ECE\u4E0A\u6B21\u5F00\u59CB\uFF08\u8BFB\u6700\u65B0\u7684\u5FEB\u7167\uFF09"),
      h("button", { onclick: () => done("fresh") }, "\u4ECE\u5934\u5F00\u59CB\uFF08\u4E0D\u8BFB\u5FEB\u7167\uFF09"),
      h("button", { onclick: () => done("saves") }, "\u5B58\u6863\u7BA1\u7406"),
      pantryItems.find((it) => it.identifier === identifier)?.syncState === "cloud-only" ? h("button", { onclick: () => done("cache") }, "\u7F13\u5B58\u5168\u76D8\uFF08\u6574\u5F20\u7559\u5728\u8FD9\u53F0\u8BBE\u5907\uFF1A\u79BB\u7EBF\u4E5F\u80FD\u6253\u5F00\uFF0C\u4E0D\u518D\u7B49\u7F51\uFF09") : null,
      h("button", { onclick: () => done(null) }, "\u53D6\u6D88")
    )
  ]);
  if (choice === "cache") {
    cacheWholeDisc(identifier).catch((e) => banner(errorText(e)));
    return;
  }
  if (choice === "resume" || choice === "fresh") playFromPantry(identifier, choice === "resume");
  else if (choice === "saves") await openSaveManager({ ...saveManagerContext, only: card ? { title: card.title, key: card.key, discId: card.fp.id } : void 0 });
}
var saveManagerContext = {
  get loadSnapshot() {
    return current && snaps ? { key: current.key, load: (id, kind, n) => loadFrom({ id, kind, n }) } : void 0;
  },
  password: () => getPassword(),
  async askPassword() {
    const pw = await askPassword("\u8F93\u5165\u53E3\u4EE4", "\u8BFB\u5FEB\u7167 / \u5B58\u6863\u7684\u5143\u6570\u636E\u624D\u77E5\u9053\u662F\u54EA\u5F20\u76D8\u7684\u3002", { offerRemember: true });
    if (pw) {
      adoptPassword(pw);
      unlockTitles().catch(() => {
      });
    }
    return pw;
  },
  titleByKey: (key) => [...cards.values()].find((c) => c.key === key)?.title ?? null,
  titleByDir: (dir) => [...cards.values()].find((c) => c.fp.id && dir.toUpperCase().startsWith(c.fp.id.toUpperCase()))?.title ?? null
};
async function cacheWholeDisc(identifier) {
  const f = getStore().file(identifier, { mode: "existing" });
  if (await f.isKeptOffline()) {
    say("\u8FD9\u5F20\u76D8\u5DF2\u7ECF\u5728\u8FD9\u53F0\u8BBE\u5907\u4E0A\u4E86");
    return;
  }
  const size = pantryItems.find((it) => it.identifier === identifier)?.size ?? 0;
  const name = cards.get(identifier)?.title ?? stemOf2(identifier);
  const r = await track(`\u76D8 ${name}`, size, async (onProgress) => {
    await f.keepOffline({ onProgress });
    const ok = await f.isKeptOffline();
    return { pushed: ok, reason: ok ? void 0 : "\u6CA1\u7559\u6210\uFF08\u770B\u6A2A\u6761\uFF09" };
  }, "\u7F13\u5B58");
  if (r.pushed) say(`\u300C${name}\u300D\u6574\u5F20\u5728\u8FD9\u53F0\u8BBE\u5907\u4E0A\u4E86\uFF1A\u79BB\u7EBF\u4E5F\u80FD\u6253\u5F00\uFF0C\u4E0D\u518D\u7B49\u7F51`, 6e3);
  watchPantry();
  if (session && current?.identifier === identifier) renderToolbar();
}
var keepDisc = cacheWholeDisc;
async function offloadDisc(identifier) {
  try {
    await getStore().file(identifier, { mode: "existing" }).offload();
    say("\u5DF2\u79FB\u9664\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u526F\u672C");
  } catch (e) {
    banner(`\u6CA1\u79FB\u9664\uFF1A${errorText(e)}`);
  }
}
async function unlockTitles(ids) {
  let pw = getPassword();
  if (!pw) {
    pw = await askPassword("\u8F93\u5165\u53E3\u4EE4", "\u52A0\u5BC6\u76D8\u7684\u540D\u5B57\u8981\u53E3\u4EE4\u624D\u770B\u5F97\u89C1\u3002", { offerRemember: true });
    if (!pw) return;
    adoptPassword(pw);
  }
  let wrong = 0, unavailable = 0;
  const gaveUp = [];
  const todo = (ids ?? pantryItems.filter((it) => it.identifier.endsWith(".wafter")).map((it) => it.identifier)).filter((id) => !cards.has(id) && !unsupported.has(id) && !unlocking.has(id));
  for (const id of todo) unlocking.add(id);
  let next = 0;
  const worker = async () => {
    while (next < todo.length) {
      const id = todo[next++];
      try {
        const card = await withDeadline(inspectPantry(id), UNLOCK_DEADLINE_MS);
        if (card === "timeout") throw Object.assign(new Error(`${UNLOCK_DEADLINE_MS / 1e3} \u79D2\u6CA1\u8BFB\u51FA\u6765`), { name: "TitleReadTimeout" });
        if (card) {
          unavailableTries.delete(id);
          cards.set(id, card);
          renderLibrary();
          const size = pantryItems.find((it) => it.identifier === id)?.size ?? 0;
          saveTitleCard(pw, id, size, card).then(() => {
            titleCache?.set(id, { size, card });
          }, (e) => console.warn("[title-cache]", e));
        } else {
          wrong++;
          logEvent("warn", `\u76D8\u540D\uFF1A${id} \u8FD9\u4E2A\u53E3\u4EE4\u6253\u4E0D\u5F00`);
        }
      } catch (e) {
        const tries = unavailableTries.get(id) ?? 0;
        const v = triageUnlockFailure(e, { reachable: auth.isSignedIn() && navigator.onLine, isNetwork: isNetworkError(e), tries });
        if (v.kind === "unsupported") {
          unsupported.set(id, v.why);
          unavailableTries.delete(id);
          gaveUp.push(id);
          logEvent("warn", `\u76D8\u540D\uFF1A${id} \u6807\u6210\u4E0D\u652F\u6301\u7684\u76D8\u2014\u2014${errorText(e).slice(0, 200)}`);
        } else {
          if (v.counted) unavailableTries.set(id, tries + 1);
          unavailable++;
          triedUnlock.delete(id);
          logEvent("warn", `\u76D8\u540D\uFF1A${id} \u6CA1\u8BFB\u5230${v.counted ? `\uFF08\u7B2C ${tries + 1} \u6B21\uFF09` : ""}\u2014\u2014${errorText(e).slice(0, 200)}`);
        }
      } finally {
        unlocking.delete(id);
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, todo.length) }, worker));
  if (wrong) say(`${wrong} \u5F20\u76D8\u8FD9\u4E2A\u53E3\u4EE4\u6253\u4E0D\u5F00`);
  if (unavailable) {
    if (unlockRetryMs === 15e3) say(`${unavailable} \u5F20\u76D8\u7684\u540D\u5B57\u8FD9\u6B21\u6CA1\u8BFB\u5230\uFF0C\u4F1A\u81EA\u5DF1\u518D\u8BD5`, 5e3);
    clearTimeout(unlockRetryTimer);
    unlockRetryTimer = window.setTimeout(() => renderLibrary(), unlockRetryMs);
    unlockRetryMs = Math.min(unlockRetryMs * 2, 6e4);
  } else unlockRetryMs = 15e3;
  if (gaveUp.length) {
    renderLibrary();
    say(`${gaveUp.length} \u5F20\u76D8\u8BFB\u4E0D\u51FA\u6765\uFF0C\u6807\u6210\u300C\u4E0D\u652F\u6301\u7684\u76D8\u300D\u4E86\uFF08\u70B9\u5F00\u770B\u4E3A\u4EC0\u4E48\uFF09`, 6e3);
  }
}
async function unsupportedSheet(identifier) {
  const again = await sheet((done) => [
    h("h2", {}, "\u4E0D\u652F\u6301\u7684\u76D8"),
    h("p", {}, `${identifier.split("/").pop()}\uFF1A${unsupported.get(identifier) ?? ""}`),
    h("p", { class: "muted" }, "\u8FD9\u4E00\u9875\u4E0D\u4F1A\u518D\u81EA\u52A8\u8BFB\u5B83\uFF0C\u4E5F\u4E0D\u4F1A\u518D\u5F39\u9519\u3002\u770B\u5F97\u89C1\u7684\u574F\u6587\u4EF6\u5728 OneDrive \u91CC\u5220\uFF1B\u770B\u4E0D\u89C1\u7684\u662F\u6CA1\u4F20\u5B8C\u7684\u534A\u622A\uFF0COneDrive \u8FC7\u4E00\u9635\u4F1A\u81EA\u5DF1\u6E05\u6389\u3002"),
    h("div", { class: "row" }, h("button", { onclick: () => done(null) }, "\u5173\u95ED"), h("button", { class: "primary", onclick: () => done(true) }, "\u518D\u8BFB\u4E00\u6B21"))
  ]);
  if (!again) return;
  unsupported.delete(identifier);
  unavailableTries.delete(identifier);
  triedUnlock.delete(identifier);
  renderLibrary();
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
      const r = await open(pw);
      if (pw) adoptPassword(pw);
      return r;
    } catch (e) {
      if (!(e instanceof NeedPassword || e instanceof WrongPasswordError)) throw e;
      if (e instanceof WrongPasswordError) {
        hint = "\u53E3\u4EE4\u4E0D\u5BF9\uFF0C\u518D\u8BD5\u4E00\u6B21\u3002";
        if (!pw && remembered) {
          await forgetRemembered("\u8FD9\u53F0\u8BBE\u5907\u8BB0\u7740\u7684\u53E3\u4EE4\u6253\u4E0D\u5F00\u5B83\uFF0C\u5DF2\u5FD8\u8BB0");
          hint = "\u8FD9\u53F0\u8BBE\u5907\u8BB0\u7740\u7684\u53E3\u4EE4\u6253\u4E0D\u5F00\u5B83\uFF08\u522B\u5904\u6362\u8FC7\u53E3\u4EE4\uFF1F\uFF09\uFF0C\u8F93\u4E00\u6B21\u65B0\u7684\u3002";
        }
      }
      const got = await askPassword(`${what}\u662F\u52A0\u5BC6\u7684`, hint || "\u8F93\u5165\u53E3\u4EE4\u3002", { offerRemember: true });
      if (!got) return null;
      pw = got;
    }
  }
}
function playFromPantry(identifier, resume) {
  audioContext();
  const cachedKey = cards.get(identifier)?.key ?? titleCache?.get(identifier)?.card.key;
  runPlay(() => withPassword((pw) => fromPantry(identifier, pw, cachedKey), "\u8FD9\u5F20\u76D8"), resume);
}
function playLocal(file) {
  audioContext();
  runPlay(() => withPassword((pw) => fromLocalFile(file, pw), "\u8FD9\u4E2A\u6587\u4EF6"), DEV_SERVER && params.get("resume") === "1");
}
function runPlay(prepare2, resume) {
  if (session) return;
  play(prepare2, resume).catch((e) => {
    console.error(e);
    banner(`\u542F\u52A8\u5931\u8D25\uFF1A${errorText(e)}`);
    $("home").hidden = false;
    $("game").hidden = true;
  });
}
async function ensurePassword(why) {
  const pw = getPassword();
  if (pw) return pw;
  const got = await askPassword("\u8BBE\u4E2A\u53E3\u4EE4", `${why}\u90FD\u7528\u53E3\u4EE4\u52A0\u5BC6\u540E\u624D\u5B58\u8FDB OneDrive\u3002\u4E0B\u6B21\u8981\u8F93\u540C\u4E00\u4E2A\u3002`, { offerRemember: true });
  if (got) adoptPassword(got);
  return got;
}
var jamBlocked = false;
var memstickInfo = null;
var PSP_JAR = (dir) => ({ k: PLATFORM_CODE.psp, m: "shared", u: dir });
async function play(prepare2, resume) {
  const disc = await prepare2();
  if (!disc) return;
  current = disc;
  const core2 = coreForExt(disc.ext);
  useScheme(core2.id);
  let memstick = /* @__PURE__ */ new Map();
  let memstickTimes = /* @__PURE__ */ new Map();
  let extraFiles = /* @__PURE__ */ new Map();
  say("\u6B63\u5728\u8BFB\u5B58\u6863\u2026", 3e4);
  const cloudReachable = auth.isSignedIn() && navigator.onLine;
  if (core2.saves === "shared") {
    const listed = await listJams(PLATFORM_CODE.psp, { timeoutMs: 1e4, waitForCloud: cloudReachable });
    if (listed.ids.length) {
      const loaded = await withPassword(async (pw) => {
        const p = pw ?? getPassword();
        if (!p) throw new NeedPassword();
        const m = await loadMemstick(PLATFORM_CODE.psp, p, listed.ids, listed.complete);
        if (pw) setPassword(pw);
        return m;
      }, "\u5B58\u6863");
      if (loaded) {
        memstickInfo = loaded;
        memstick = loaded.files;
        memstickTimes = loaded.times;
        say(`\u5B58\u6863\uFF1A${loaded.dirs.size} \u4E2A`);
        if (loaded.unreadable.size) banner(`${loaded.unreadable.size} \u7F50\u5B58\u6863\u8FD9\u6B21\u6CA1\u8BFB\u8FDB\u6765\uFF08\u62FF\u4E0D\u5230\u3001\u53E3\u4EE4\u4E0D\u662F\u8FD9\u4E2A\u3001\u6216\u5185\u5BB9\u574F\u4E86\uFF09\uFF1A\u5B83\u4EEC\u5BF9\u5E94\u7684\u5B58\u6863\u8FD9\u6B21\u4E0D\u4F1A\u88AB\u8986\u76D6\u3002`, "warning");
        if (loaded.duplicates.size) {
          const pw = getPassword();
          const changed = await resolveDuplicates(loaded.duplicates, (id) => peekSnapshot(id, pw).then((m) => m && { at: m.at, size: m.size }), (dir) => jamId(PSP_JAR(dir)));
          if (changed) {
            banner("\u5B58\u6863\u6574\u7406\u597D\u4E86\uFF0C\u91CD\u65B0\u5F00\u8FD9\u5F20\u76D8\u5C31\u4F1A\u8BFB\u8FDB\u6765\u3002", "warning");
            return;
          }
          banner(`${loaded.duplicates.size} \u4E2A\u5B58\u6863\u5404\u6709\u597D\u51E0\u4EFD\u3001\u8FD8\u6CA1\u9009\uFF1A\u8FD9\u6B21\u5B83\u4EEC\u4E0D\u8BFB\u4E5F\u4E0D\u5199\u3002`, "warning");
        }
      } else {
        jamBlocked = true;
        banner("\u6CA1\u8BFB\u5B58\u6863\uFF1A\u8FD9\u6B21\u7A0B\u5E8F\u81EA\u5DF1\u5B58\u7684\u6863\u4E0D\u4F1A\u540C\u6B65\u5230 OneDrive\uFF08\u514D\u5F97\u76D6\u6389\u539F\u6765\u7684\uFF09\u3002", "warning");
      }
    } else say("\u8FD8\u6CA1\u6709\u5B58\u6863", 2e3);
    if (cloudReachable && !listed.complete) banner("\u5B58\u6863\u7684\u4E91\u7AEF\u5217\u8868\u6CA1\u62FF\u5168\uFF08\u7F51\u7EDC\u6162\uFF1F\uFF09\uFF1A\u8FD9\u6B21\u53EF\u80FD\u770B\u4E0D\u5230\u522B\u7684\u8BBE\u5907\u4E0A\u7684\u65B0\u5B58\u6863\uFF1B\u65B0\u5B58\u7684\u6863\u548C\u4E91\u7AEF\u649E\u4E0A\u65F6\u4F1A\u8BA9\u4F60\u9009\u3002", "warning");
  } else {
    extraFiles = await loadCartSave(core2, disc, cloudReachable);
  }
  $("home").hidden = true;
  $("game").hidden = false;
  $("title").textContent = disc.title;
  setActiveIdentifier(disc.identifier);
  if (resume) showResumeCover("\u6B63\u5728\u63A5\u4E0A\u6B21\u7684\u8FDB\u5EA6\u2026");
  activity2 = createActivity({ inputWindowMs: ACTIVITY_INPUT_WINDOW_MS, progressWindowMs: ACTIVITY_PROGRESS_WINDOW_MS }, performance.now());
  session = await CoreSession.start({
    onInput: () => activity2?.input(performance.now()),
    media: disc.media,
    ext: disc.ext,
    coreDir: coreDirOf(core2.id),
    glCanvas: $("gl"),
    softCanvas: $("screen"),
    audioContext: audioContext(),
    lowLatency: params.get("lowlatency") !== "0",
    pacing: params.get("pace") === "wall" ? "wall" : params.get("pace") === "audio" ? "audio" : void 0,
    cpuCore: params.get("cpu") === "interp" ? "interp" : void 0,
    presentEvery: params.has("cadence") ? Number(params.get("cadence")) || 0 : DEFAULT_PRESENT_EVERY,
    // 上屏节拍：默认每帧上屏（user 10-21）；?cadence=0 = 自动匀速节拍、=3 诊断用
    cullOff: params.get("cull") === "0",
    // 画面兼容（☰「画面兼容…」拼的网址参数）
    forceSoftware: params.get("render") === "sw",
    glCheck: params.get("glcheck") === "1",
    tapOff: params.get("tap") === "0",
    hideExt: (params.get("hideext") ?? "").replace(/[^A-Za-z0-9_,]/g, "").slice(0, 200) || void 0,
    // 只测试用（W-34）
    coreOptions: coreOptionArgs(readCoreOverrides(params)),
    onCoreError: (line) => logEvent("warn", `\u6838\uFF1A${line}`),
    onDiscOpen: /* @__PURE__ */ ((hint) => (path) => {
      discOpens++;
      hint?.(path);
    })(disc.prefetcher ? discOpenHinter(disc.prefetcher) : null),
    // 打开了盘上哪个文件 → 预取标签（P0½ 第三刀）；本机文件没有预取器，只计数
    skinning: params.get("skin") === "cpu" ? "cpu" : "gpu",
    // 10-16 默认 GPU 蒙皮：PC 量过模拟线程 28%→25% 忙、顶点缓冲 2.4→1.4 MB/帧（wasm 没有 JIT 顶点解码器，软件蒙皮不划算）；?skin=cpu 退回
    memstick,
    memstickTimes,
    extraFiles
  });
  if (resume) session.setHold(true);
  session.setFrameCap30(defaultFrameCap30());
  {
    const on = activeReloadSettings(params);
    if (on.length) logEvent("info", `\u8FD9\u6B21\u6253\u5F00\u7684\u8BBE\u7F6E\uFF1A${on.join(" \xB7 ")}`);
  }
  if (disc.identifier) {
    try {
      appState().setItem("lastDisc", disc.identifier);
    } catch (e) {
      console.warn(e);
    }
  }
  snaps = new Snapshots(session, disc, snapshotVerbs, () => {
    if (slotsSheetOpen) renderSlots();
  });
  if (core2.saves === "shared") {
    jamSigs = session.memstickDirs();
    setInterval(() => jamTick(false), JAM_POLL_MS);
  } else setInterval(() => {
    void cartTick(false);
  }, JAM_POLL_MS);
  guide.attach({ key: disc.key, title: disc.title, k: disc.fp.k, id: disc.fp.id, ver: disc.fp.v }, getPassword, 5e3);
  addEventListener("visibilitychange", () => {
    if (!session) return;
    if (pip.active) {
      logEvent("info", `\u4E3B\u9875\u9762${document.visibilityState === "hidden" ? "\u5207\u5230\u540E\u53F0" : "\u56DE\u5230\u524D\u53F0"}\uFF1A\u753B\u9762\u5728\u5C0F\u7A97\u91CC\uFF0C\u6838\u7167\u8DD1`);
      return;
    }
    if (document.visibilityState !== "hidden") {
      const s0 = session.stats();
      const f0 = s0.frames;
      logEvent("info", `\u56DE\u5230\u524D\u53F0\uFF1A\u5E27 ${f0}\uFF0C\u58F0\u97F3 ${audioContext().state}${pausedByHide ? "\uFF08\u540E\u53F0\u65F6\u6682\u505C\u7740\uFF09" : ""}`);
      if (pausedByHide) {
        pausedByHide = false;
        session.setPaused(false);
        renderToolbar();
      }
      if (!session.paused) cycleAudio().catch((e) => logEvent("warn", `\u58F0\u97F3\u6302\u8D77\u2192\u6062\u590D\u5931\u8D25\uFF1A${errorText(e)}`));
      perfSoon();
      setTimeout(() => {
        if (!session) return;
        const st = session.stats();
        const soundOk = st.audioState !== "running" || session.paused || st.frames === f0 || audioAlive(s0, st);
        logEvent(st.frames > f0 && soundOk ? "info" : "warn", `\u56DE\u6765 2 s\uFF1A\u5E27 ${f0} \u2192 ${st.frames}${st.frames > f0 ? "" : "\uFF08\u6CA1\u8D70\uFF01\uFF09"}\uFF0C\u58F0\u97F3 ${st.audioState} \u65F6\u949F+${(st.audioClock - s0.audioClock).toFixed(2)} s \u8BFB\u6307\u9488${st.audioRead === s0.audioRead ? "\u6CA1\u52A8" : "\u5728\u8D70"} \u7F13\u51B2 ${st.audioFillMs.toFixed(0)} ms \u6B20\u8F7D ${st.audioUnderrunMs.toFixed(0)} ms \u4E22 ${st.audioDropped}${soundOk ? "" : "\uFF08\u54D1\u4E86\uFF01\uFF09"}\uFF0C\u8FFD\u8FDB\u5EA6 ${st.catchup}\uFF0C\u91CD\u951A ${st.reanchors}\uFF0C\u7B49\u8BFB\u76D8 ${st.netInflight}\uFF0C\u6682\u505C ${session.paused}\uFF0C\u5FAA\u73AF ${st.loopAgeMs < 0 ? "?" : `${st.loopAgeMs.toFixed(0)} ms \u524D`}\uFF0C\u81EA\u6551 ${st.loopRescues}\uFF0CGL ${st.glLost ? "\u4E22\u4E86" : "\u5728"}/\u6062\u590D ${st.glRestores}`);
        if (!soundOk) rebuildAudio("\u56DE\u6765\u540E\u58F0\u97F3\u4E0D\u8D70").catch((e) => logEvent("error", `\u58F0\u97F3\u91CD\u5EFA\u5931\u8D25\uFF1A${errorText(e)}`));
      }, 2e3);
      snaps?.refresh();
      snaps?.onWake().catch((e) => console.warn("[wake snapshot]", e));
      return;
    }
    logEvent("info", `\u5207\u5230\u540E\u53F0\uFF1A\u5E27 ${session.stats().frames}\uFF0C\u58F0\u97F3 ${audioContext().state}`);
    if (!session.paused) {
      session.setPaused(true);
      pausedByHide = true;
    }
    snaps?.onLeave().catch((e) => console.warn("[auto snapshot]", e));
    jamTick(true);
    void guide.flush({ deferPush: true });
  });
  startFrameLoop();
  renderToolbar();
  const autoState = params.get("state");
  if (autoState && DEV_SERVER) restoreFromDevServer(autoState).catch((e) => say(`\u8BFB\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(e)}`));
  else if (resume) resumeNewest().catch((e) => banner(`\u8BFB\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(e)}`)).finally(() => hideResumeCover());
}
function showResumeCover(text) {
  const c = resumeCoverEl;
  c.textContent = text;
  c.hidden = false;
}
function hideResumeCover() {
  setTimeout(() => {
    resumeCoverEl.hidden = true;
    session?.setHold(false);
  }, 300);
}
async function resumeNewest() {
  say("\u6B63\u5728\u627E\u6700\u65B0\u7684\u5FEB\u7167\u2026", 3e4);
  if (!resumeCoverEl.hidden) showResumeCover("\u6B63\u5728\u627E\u6700\u65B0\u7684\u5FEB\u7167\u2026");
  const got = await snaps.newestForResume({ waitCloud: auth.isSignedIn() && navigator.onLine });
  if (!resumeCoverEl.hidden && got) showResumeCover(`\u6B63\u5728\u8BFB\u300C${slotLabel(got.slot)}\u300D\u2026`);
  if (!got) {
    say("\u8FD9\u5F20\u76D8\u8FD8\u6CA1\u6709\u5FEB\u7167\uFF0C\u4ECE\u5934\u5F00\u59CB");
    return null;
  }
  if (got.partial) banner("\u4E91\u7AEF\u7684\u5FEB\u7167\u5217\u8868\u6CA1\u62FF\u5168\uFF08\u7F51\u7EDC\u6162\uFF1F\uFF09\uFF1A\u8BFB\u7684\u662F\u8FD9\u53F0\u8BBE\u5907\u4E0A\u80FD\u770B\u5230\u7684\u6700\u65B0\u4E00\u4EFD\uFF0C\u522B\u7684\u8BBE\u5907\u4E0A\u53EF\u80FD\u6709\u66F4\u65B0\u7684\u3002", "warning");
  if (got.slot.kind === "s") currentSlot = got.slot;
  await snaps.load(got.slot);
  return got.slot;
}
var jamSigs = /* @__PURE__ */ new Map();
var jamPending = /* @__PURE__ */ new Map();
var jamSaving = false;
var jamRetryAt = 0;
var jamWarned = /* @__PURE__ */ new Set();
async function jamWritable(dir) {
  const id = await jamId(PSP_JAR(dir));
  const why = memstickInfo?.duplicates.has(dir) ? "\u6709\u597D\u51E0\u4EFD\u3001\u8FD8\u6CA1\u9009\u4E00\u4EFD" : memstickInfo?.unreadable.has(id) ? "\u539F\u6765\u90A3\u4EFD\u8FD9\u6B21\u6CA1\u8BFB\u8FDB\u6765" : null;
  if (!why) return true;
  if (!jamWarned.has(dir)) {
    jamWarned.add(dir);
    banner(`\u5B58\u6863\u300C${dir}\u300D${why}\uFF1A\u8FD9\u6B21\u7A0B\u5E8F\u5B58\u7684\u8FD9\u4E2A\u6863\u53EA\u7559\u5728\u8FD9\u53F0\u8BBE\u5907\u7684\u5185\u5B58\u91CC\uFF0C\u4E0D\u4F1A\u5199\u5230 OneDrive\uFF08\u514D\u5F97\u76D6\u6389\u539F\u6765\u7684\uFF09\u3002`, "warning");
  }
  return false;
}
var CART_JAR = cartJar;
var cartCore = null;
var cartSeqSaved = -1;
var cartSeqSeen = -1;
var cartSaving = false;
async function loadCartSave(core2, disc, cloudReachable) {
  const files = /* @__PURE__ */ new Map();
  cartCore = core2;
  cartNoted = false;
  const listed = await listJams(core2.platform, { timeoutMs: 1e4, waitForCloud: cloudReachable });
  const id = await jamId(CART_JAR(core2.platform, disc.key));
  if (!listed.ids.includes(id)) {
    if (cloudReachable && !listed.complete) {
      jamBlocked = true;
      banner("\u5B58\u6863\u7684\u4E91\u7AEF\u5217\u8868\u6CA1\u62FF\u5168\uFF08\u7F51\u7EDC\u6162\uFF1F\uFF09\uFF1A\u8FD9\u6B21\u4E0D\u5F80\u4E91\u7AEF\u5199\u7535\u6C60\u5B58\u6863\uFF0C\u514D\u5F97\u76D6\u6389\u522B\u7684\u8BBE\u5907\u5B58\u7684\u3002", "warning");
    } else say("\u8FD8\u6CA1\u6709\u5B58\u6863", 2e3);
    return files;
  }
  const loaded = await withPassword(async (pw) => {
    const p = pw ?? getPassword();
    if (!p) throw new NeedPassword();
    const m = await loadMemstick(core2.platform, p, [id], listed.complete);
    if (pw) setPassword(pw);
    return m;
  }, "\u5B58\u6863");
  if (!loaded || loaded.unreadable.size) {
    jamBlocked = true;
    banner("\u6CA1\u8BFB\u5230\u7535\u6C60\u5B58\u6863\uFF1A\u8FD9\u6B21\u7A0B\u5E8F\u81EA\u5DF1\u5B58\u7684\u6863\u4E0D\u4F1A\u540C\u6B65\u5230 OneDrive\uFF08\u514D\u5F97\u76D6\u6389\u539F\u6765\u7684\uFF09\u3002", "warning");
    return files;
  }
  const bytes = loaded.files.get("save.bin") ?? [...loaded.files.values()][0];
  if (bytes) files.set("/saves/game.sav", bytes);
  say(`\u5B58\u6863\uFF1A${bytes ? `${(bytes.length / 1024).toFixed(0)} KB` : "\u7A7A"}`);
  return files;
}
function importCtx() {
  const s = session, c = current, cc = cartCore;
  return {
    withPassword,
    getPassword,
    log: logEvent,
    cart: s && c && cc && cc.saves !== "shared" ? {
      platform: cc.platform,
      key: c.key,
      title: c.title,
      saveSize: s.saveRam()?.bytes.length ?? 0,
      load: async (bytes) => {
        await s.cartLoad(bytes);
        const now = s.saveRam();
        cartSeqSeen = cartSeqSaved = now?.seq ?? cartSeqSeen;
      }
    } : null,
    carts: () => [...cards.entries()].filter(([, k]) => k.fp.k === PLATFORM_CODE.gba).map(([identifier, k]) => ({ identifier, title: k.title, key: k.key, saveSize: k.saveSize })),
    jamBlocked
  };
}
var runImportSaves = () => importSaves(importCtx());
var cartNoted = false;
async function cartTick(force) {
  if (!session || !current || !cartCore || jamBlocked || cartSaving) return;
  const ram = session.saveRam();
  if (ram && !cartNoted) {
    cartNoted = true;
    const fb = session.saveFileBytes();
    if (fb >= 0 && fb !== ram.bytes.length) banner(`\u7535\u6C60\u5B58\u6863\u6CA1\u8BFB\u8FDB\u53BB\uFF1A\u7F50\u91CC\u90A3\u4EFD ${fb} \u5B57\u8282\uFF0C\u8FD9\u5F20\u5361\u5E26\u7684\u5B58\u6863\u662F ${ram.bytes.length} \u5B57\u8282\uFF08${GBA_SAVE_KINDS[ram.bytes.length] ?? "\u672A\u77E5\u7C7B\u578B"}\uFF09\u3002\u6E38\u620F\u4F1A\u5F53\u65B0\u6863\uFF1B\u8981\u7528\u90A3\u4EFD\u5F97\u91CD\u65B0\u5BFC\u5165\u5BF9\u7684\u6587\u4EF6\u3002`, "warning");
    if (current?.identifier) {
      const card = cards.get(current.identifier);
      if (card && card.saveSize !== ram.bytes.length) {
        const upd = { ...card, saveSize: ram.bytes.length };
        cards.set(current.identifier, upd);
        const pw2 = getPassword();
        if (pw2) saveTitleCard(pw2, current.identifier, card.fp.size, upd).catch(() => {
        });
      }
    }
  }
  if (!ram || ram.seq === cartSeqSaved) return;
  if (!force && ram.seq !== cartSeqSeen) {
    cartSeqSeen = ram.seq;
    return;
  }
  const pw = await ensurePassword("\u5B58\u6863");
  if (!pw) {
    jamBlocked = true;
    banner("\u6CA1\u8BBE\u53E3\u4EE4\uFF1A\u8FD9\u6B21\u7A0B\u5E8F\u81EA\u5DF1\u5B58\u7684\u6863\u4E0D\u4F1A\u540C\u6B65\u3002", "warning");
    return;
  }
  cartSaving = true;
  try {
    const r = await withDeadline(
      saveSaveDir(CART_JAR(cartCore.platform, current.key), /* @__PURE__ */ new Map([["save.bin", ram.bytes]]), pw, { deferPush: inBackground() }),
      2e4,
      (late) => logEvent(late.ok ? "info" : "warn", late.ok ? `\u7535\u6C60\u5B58\u6863\u8FDF\u5230\u7684\u4E0A\u4F20${late.value.pushed ? "\u4F20\u597D\u4E86" : "\u6CA1\u4F20\u4E0A\u53BB\uFF08\u4F1A\u7EED\u63A8\uFF09"}` : `\u7535\u6C60\u5B58\u6863\u8FDF\u5230\u7684\u4E0A\u4F20\u5931\u8D25\uFF1A${errorText(late.error)}`)
    );
    if (r === "timeout") {
      logEvent("warn", "\u7535\u6C60\u5B58\u6863 20 s \u8FD8\u6CA1\u5B58\u5B8C\uFF1A\u5148\u653E\u5F00\uFF08\u672C\u673A\u4F1A\u843D\u4E0B\u3001\u81EA\u52A8\u7EED\u63A8\uFF09\uFF0C\u4E0B\u6B21\u518D\u6838");
      return;
    }
    cartSeqSaved = ram.seq;
    logEvent("info", `\u7535\u6C60\u5B58\u6863\uFF1A${(ram.bytes.length / 1024).toFixed(0)} KB \u88C5\u7F50${r.pushed ? "\u3001\u5DF2\u4F20" : "\u3001\u672C\u673A\u5DF2\u843D\uFF08\u7A0D\u540E\u4F20\uFF09"}`);
  } catch (e) {
    logEvent("error", `\u7535\u6C60\u5B58\u6863\u6CA1\u5B58\u4E0A\uFF1A${errorText(e)}`);
  } finally {
    cartSaving = false;
  }
}
async function jamTick(force) {
  if (!session || jamBlocked || jamSaving || performance.now() < jamRetryAt) return;
  const now = session.memstickDirs();
  const changed = [], removed = [];
  for (const [dir, sig] of now) {
    if (jamSigs.get(dir) === sig) continue;
    if (force || jamPending.get(dir) === sig) changed.push(dir);
  }
  if (now.size > 0 || jamSigs.size === 0) {
    for (const dir of jamSigs.keys()) if (!now.has(dir) && (force || !jamPending.has(dir))) removed.push(dir);
  }
  jamPending = now;
  if (!changed.length && !removed.length) return;
  const pw = await ensurePassword("\u5B58\u6863");
  if (!pw) {
    jamBlocked = true;
    banner("\u6CA1\u8BBE\u53E3\u4EE4\uFF1A\u8FD9\u6B21\u7A0B\u5E8F\u81EA\u5DF1\u5B58\u7684\u6863\u4E0D\u4F1A\u540C\u6B65\u3002", "warning");
    return;
  }
  jamSaving = true;
  try {
    let pushed = true, wrote = 0;
    const hidden = inBackground();
    for (const dir of changed) {
      if (!await jamWritable(dir)) continue;
      const r = await withDeadline(
        saveSaveDir(PSP_JAR(dir), session.readSaveDir(dir), pw, { deferPush: hidden }),
        2e4,
        (late) => logEvent(late.ok ? "info" : "warn", late.ok ? `\u5B58\u6863 ${dir} \u8FDF\u5230\u7684\u4E0A\u4F20${late.value.pushed ? "\u4F20\u597D\u4E86" : "\u6CA1\u4F20\u4E0A\u53BB\uFF08\u4F1A\u7EED\u63A8\uFF09"}` : `\u5B58\u6863 ${dir} \u8FDF\u5230\u7684\u4E0A\u4F20\u51FA\u9519\uFF1A${String(late.error)}`)
      );
      if (r === "timeout") {
        logEvent("warn", `\u5B58\u6863 ${dir} 20 s \u8FD8\u6CA1\u5B58\u5B8C\uFF1A\u5148\u653E\u5F00\uFF08\u672C\u673A\u4F1A\u843D\u4E0B\u3001\u81EA\u52A8\u7EED\u63A8\uFF09\uFF0C\u4E0B\u6B21\u518D\u6838`);
        pushed = false;
        continue;
      }
      jamSigs.set(dir, now.get(dir));
      pushed &&= r.pushed;
      wrote++;
    }
    for (const dir of removed) {
      if (!await jamWritable(dir)) continue;
      await deleteSaveDir(PSP_JAR(dir));
      jamSigs.delete(dir);
      wrote++;
    }
    if (wrote && !pushed) console.info("[jam] saved locally, upload pending");
  } catch (e) {
    jamRetryAt = performance.now() + 3e4;
    banner(`\u5B58\u6863\u6CA1\u5B58\u4E0A\uFF1A${errorText(e)}\uFF0830 \u79D2\u540E\u518D\u8BD5\uFF09`);
  } finally {
    jamSaving = false;
  }
}
var canvasVerbs = {
  /** 截图编码：整数倍最近邻放大（像素保持方块）+ PNG / JPG。 */
  async encodeImage(rgba, w, h2, opts) {
    const src = new OffscreenCanvas(w, h2);
    src.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(rgba), w, h2), 0, 0);
    const dst = new OffscreenCanvas(w * opts.scale, h2 * opts.scale);
    const ctx = dst.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(src, 0, 0, w * opts.scale, h2 * opts.scale);
    const blob = await dst.convertToBlob(opts.type === "png" ? { type: "image/png" } : { type: "image/jpeg", quality: 0.92 });
    return new Uint8Array(await blob.arrayBuffer());
  }
};
async function thumbFrom(src, w, h2) {
  const tw = Math.min(THUMB_W, w), th = Math.round(h2 * tw / w);
  const dst = new OffscreenCanvas(tw, th);
  const ctx = dst.getContext("2d");
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(src, 0, 0, tw, th);
  return new Uint8Array(await (await dst.convertToBlob({ type: "image/jpeg", quality: 0.8 })).arrayBuffer());
}
var snapshotVerbs = {
  async encodeThumbnail(rgba, w, h2) {
    const src = new OffscreenCanvas(w, h2);
    src.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(rgba), w, h2), 0, 0);
    return thumbFrom(src, w, h2);
  },
  async shrinkImage(bytes) {
    const bmp = await createImageBitmap(new Blob([bytes]));
    try {
      return await thumbFrom(bmp, bmp.width, bmp.height);
    } finally {
      bmp.close();
    }
  },
  confirmImportElsewhere: (game) => confirmSheet("\u4E0D\u662F\u5F00\u7740\u7684\u8FD9\u5F20\u76D8\u7684\u5FEB\u7167", `\u8FD9\u4E2A\u5FEB\u7167\u662F ${game} \u7684\u3002\u5BFC\u5165\u7684\u8BDD\u653E\u8FDB\u90A3\u4E2A\u6E38\u620F\u81EA\u5DF1\u7684\u5FEB\u7167\u91CC\uFF0C\u5F00\u90A3\u5F20\u76D8\u65F6\u80FD\u770B\u5230\u3001\u80FD\u8BFB\u3002`, "\u5BFC\u5165\u5230\u90A3\u91CC", "\u4E0D\u5BFC\u5165"),
  password: (why) => ensurePassword(why),
  knownPassword: () => getPassword(),
  confirmMismatch: () => confirmSheet("\u8FD9\u4E2A\u5FEB\u7167\u50CF\u662F\u522B\u7684\u76D8\u5B58\u7684", "\u5B58\u5B83\u7684\u65F6\u5019\u7528\u7684\u4E0D\u662F\u8FD9\u5F20\u76D8\uFF08\u7F16\u53F7\u3001\u7248\u672C\u6216\u5927\u5C0F\u5BF9\u4E0D\u4E0A\uFF09\u3002\u786C\u8BFB\u53EF\u80FD\u8DD1\u98DE\uFF0C\u8BFB\u4E4B\u524D\u6700\u597D\u5148\u5B58\u4E00\u4EFD\u3002", "\u8FD8\u662F\u8BFB", "\u4E0D\u8BFB"),
  confirmAdopt: (count, at) => confirmSheet(
    "\u627E\u5230\u8FD9\u5F20\u76D8\u7684\u5FEB\u7167\u4E86\uFF1F",
    `\u6709 ${count} \u4E2A\u5FEB\u7167\u770B\u7740\u662F\u8FD9\u5F20\u76D8\u7684${at ? `\uFF08\u6700\u65B0\u7684\u5B58\u4E8E ${new Date(at).toLocaleString()}\uFF09` : ""}\uFF0C\u662F\u5728\u522B\u7684\u4EE3\u53F7\u4E0B\u5B58\u7684\uFF08\u540C\u4E00\u5F20\u76D8\u7684\u672C\u673A\u6587\u4EF6 / \u6539\u8FC7\u540D / \u76D8\u53F7\u6CA1\u8BFB\u51FA\u6765\uFF09\u3002\u8FD9\u4E00\u5C40\u5C31\u7528\u90A3\u7EC4\u7684\u4EE3\u53F7\u5B58\u8BFB\u5417\uFF1F\u6587\u4EF6\u4E0D\u4F1A\u88AB\u632A\u52A8\u3002\u4E0D\u7528\u7684\u8BDD\u968F\u65F6\u80FD\u5728\u5FEB\u7167\u9762\u677F\u300C\u522B\u7684\u5FEB\u7167\u300D\u91CC\u9009\u3002`,
    "\u7528\u90A3\u7EC4",
    "\u4E0D\u7528"
  ),
  confirmUseGroup: (game) => confirmSheet("\u4E0D\u662F\u8FD9\u5F20\u76D8\u7684\u5FEB\u7167\u7EC4", `\u8FD9\u7EC4\u5FEB\u7167\u662F ${game} \u7684\uFF08\u6307\u7EB9\u548C\u8FD9\u5F20\u76D8\u5BF9\u4E0D\u4E0A\uFF09\u3002\u8FD9\u4E00\u5C40\u6539\u7528\u5B83\u7684\u4EE3\u53F7\u5B58\u8BFB\u7684\u8BDD\uFF0C\u4E4B\u540E\u5B58\u7684\u5FEB\u7167\u90FD\u653E\u8FDB\u90A3\u7EC4\u3002\u6587\u4EF6\u4E0D\u4F1A\u88AB\u632A\u52A8\u3002`, "\u7528\u5B83", "\u4E0D\u7528"),
  say: (text, ms) => say(text, ms)
};
function saveTo(slot) {
  snaps?.save(slot.kind, slot.n).then(() => {
    currentSlot = slot;
  }, (e) => banner(`\u5B58\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(e)}`));
}
function loadFrom(slot) {
  snaps?.load(slot).then((ok) => {
    if (ok && slot.kind === "s" && "savedAt" in slot) currentSlot = slot;
  }, (e) => {
    if (e instanceof WrongPasswordError) banner("\u5FEB\u7167\u7684\u53E3\u4EE4\u548C\u8FD9\u4E00\u9875\u8BB0\u7740\u7684\u53E3\u4EE4\u4E0D\u4E00\u6837\uFF0C\u8BFB\u4E0D\u4E86\u3002");
    else banner(`\u8BFB\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(e)}`);
  });
}
function quickSlot(forSave) {
  if (!snaps) return null;
  if (currentSlot) return currentSlot;
  const manual = snaps.slots.filter((s) => s.kind === "s" && s.savedAt).sort((a, b) => b.savedAt - a.savedAt)[0];
  return manual ?? (forSave ? snaps.nextManualSlot() : snaps.newest());
}
async function restoreFromDevServer(name) {
  const r = await fetch(`/__dev/state/${encodeURIComponent(name)}`);
  if (!r.ok) throw new Error(`server ${r.status}`);
  await session.restore(new Uint8Array(await r.arrayBuffer()));
  say(`\u5DF2\u8BFB\u5F00\u53D1\u5FEB\u7167 ${name}`);
}
function binsButton(close) {
  const b = h("button", { onclick: () => {
    close();
    openBins(saveManagerContext.titleByKey).catch((e) => banner(errorText(e)));
  } }, "\u56DE\u6536\u7AD9 / \u5907\u4EFD\u7BB1");
  const key = current?.key;
  if (key) listBins(saveManagerContext.titleByKey).then((items) => {
    const n = items.filter((it) => parseCrumbId(it.identifier)?.key === key).length;
    if (n) {
      b.textContent = `\u56DE\u6536\u7AD9 / \u5907\u4EFD\u7BB1\uFF08\u8FD9\u5F20\u76D8 ${n} \u4EFD\uFF09`;
      b.classList.add("has-bins");
    }
  }).catch(() => {
  });
  return b;
}
var slotsSheetOpen = false;
function openSlots() {
  if (!snaps) return;
  snaps.refresh();
  renderSlots();
}
function renderSlots() {
  if (!snaps) return;
  const s = snaps;
  const when = (t) => t ? new Date(t).toLocaleString() : "";
  const removeBtn = (id, done) => h("button", { class: "small", title: "\u79FB\u5230\u56DE\u6536\u7AD9", onclick: async () => {
    done();
    if (await confirmSheet("\u79FB\u5230\u56DE\u6536\u7AD9\uFF1F", "\u5FEB\u7167\u4F1A\u8FDB\u56DE\u6536\u7AD9\uFF0C\u4E3B\u9875\u300C\u56DE\u6536\u7AD9 / \u5907\u4EFD\u7BB1\u300D\u91CC\u80FD\u6062\u590D\u3002", "\u79FB\u5230\u56DE\u6536\u7AD9")) s.remove(id).catch((e) => banner(errorText(e)));
  } }, "\u5220");
  const q = quickSlot(true);
  const target = s.slots.find((x) => x.id === q.id) ?? q;
  const targetFilled = !!target.savedAt;
  const ats = /* @__PURE__ */ new Map();
  const rows = /* @__PURE__ */ new Map();
  const byAt = (list) => [...list].sort((a, b) => (ats.get(b.id) ?? b.savedAt) - (ats.get(a.id) ?? a.savedAt));
  const manual = s.slots.filter((x) => x.savedAt && x.kind === "s");
  const auto = s.slots.filter((x) => x.savedAt && x.kind === "a");
  const history = s.history();
  const manualList = h("div", { class: "slots" });
  const autoList = h("div", { class: "slots" });
  const targetWhen = h("span", { class: "muted" }, targetFilled ? `\u76D6\u6389 ${when(target.savedAt)} \u90A3\u4EFD \xB7 \u80FD\u64A4\u9500` : "");
  const row = (slot, done) => {
    const thumb = h("div", { class: "thumb" });
    const timeEl = h("span", { class: "muted" }, `${when(slot.savedAt)}${slot.local ? " \xB7 \u672C\u673A" : ""}`);
    const el = h(
      "div",
      { class: `slot${slot.kind === "a" ? " auto" : ""}` },
      thumb,
      h(
        "div",
        { class: "slot-text" },
        h("span", { class: "slot-name" }, slotLabel(slot), targetFilled && slot.id === target.id ? h("span", { class: "tag", title: "F2 \u5B58 / F4 \u8BFB \u5BF9\u7684\u662F\u8FD9\u4E00\u683C" }, "F2 / F4") : null),
        timeEl
      ),
      h(
        "div",
        { class: "slot-buttons" },
        slot.kind === "s" ? h("button", { title: "\u7528\u73B0\u5728\u7684\u8FDB\u5EA6\u76D6\u6389\u8FD9\u4E00\u683C\uFF08\u80FD\u64A4\u9500\uFF09", onclick: () => {
          done();
          saveTo(slot);
        } }, "\u8986\u76D6") : null,
        h("button", { title: "\u8BFB\u8FD9\u4E00\u683C\uFF1A\u624B\u4E0A\u6CA1\u5B58\u7684\u8FDB\u5EA6\u4F1A\u4E22\uFF08\u80FD\u300C\u64A4\u9500\u8BFB\u6863\u300D\u627E\u56DE\uFF09", onclick: () => {
          done();
          loadFrom(slot);
        } }, "\u8BFB"),
        removeBtn(slot.id, done)
      )
    );
    rows.set(slot.id, el);
    return { el, peek: s.peek(slot).then((m) => {
      if (m?.thumb) thumb.append(h("img", { src: `data:image/jpeg;base64,${m.thumb}`, alt: "" }));
      if (m?.at) {
        ats.set(slot.id, m.at);
        timeEl.textContent = `${when(m.at)}${slot.local ? " \xB7 \u672C\u673A" : ""}`;
        if (slot.id === target.id) targetWhen.textContent = `\u76D6\u6389 ${when(m.at)} \u90A3\u4EFD \xB7 \u80FD\u64A4\u9500`;
      }
    }) };
  };
  const foreignRow = (g, done) => {
    const head = h("span", { class: "muted" }, `\u4EE3\u53F7 ${g.key.slice(0, 8)}\u2026 \xB7 ${g.items.length} \u4E2A \xB7 \u6700\u65B0 ${when(g.newestAt)}`);
    const title = h("span", { class: "slot-name" }, "\u522B\u7684\u540D\u5B57\u4E0B\u7684\u5FEB\u7167");
    s.peek(g.items[0]).then((m) => {
      if (m?.fp) title.textContent = `${m.fp.id ?? "\u7F16\u53F7\u4E0D\u660E"}${m.fp.v ? ` v${m.fp.v}` : ""} \xB7 ${(m.fp.size / 2 ** 30).toFixed(2)} GB${m.fp.id === current?.fp.id && m.fp.size === current?.fp.size ? "\uFF08\u548C\u8FD9\u5F20\u76D8\u5BF9\u5F97\u4E0A\uFF09" : ""}`;
    });
    return h(
      "div",
      { class: "slot foreign" },
      // 没缩略图：两列（user 10-15 iPad 截图：文字被挤进 96px 的缩略图列，「col比例不对」）
      h("div", { class: "slot-text" }, title, head),
      h(
        "div",
        { class: "slot-buttons" },
        h("button", { title: "\u8FD9\u4E00\u5C40\u6539\u7528\u8FD9\u7EC4\u7684\u4EE3\u53F7\u5B58\u8BFB\uFF1B\u6587\u4EF6\u4E0D\u632A\u4E0D\u5220", onclick: () => {
          done();
          s.useGroup(g).catch((e) => banner(errorText(e)));
        } }, "\u8FD9\u4E00\u5C40\u7528\u8FD9\u7EC4\u5FEB\u7167"),
        h("button", { onclick: () => {
          done();
          openForeign(g);
        } }, "\u9010\u4E2A\u770B")
      )
    );
  };
  const foreign = s.foreign();
  slotsSheetOpen = true;
  sheet((done) => {
    const builtManual = byAt(manual).map((slot) => row(slot, () => done()));
    const builtAuto = byAt(auto).map((slot) => row(slot, () => done()));
    manualList.replaceChildren(...builtManual.map((b) => b.el));
    autoList.replaceChildren(...builtAuto.map((b) => b.el));
    Promise.all(builtManual.map((b) => b.peek)).then(() => manualList.replaceChildren(...byAt(manual).map((x) => rows.get(x.id))));
    Promise.all(builtAuto.map((b) => b.peek)).then(() => autoList.replaceChildren(...byAt(auto).map((x) => rows.get(x.id))));
    const undo = [
      s.undoSaveText ? h("button", { onclick: () => {
        done();
        s.undoLastSave().catch((e) => banner(errorText(e)));
      } }, s.undoSaveText) : null,
      s.undoLoadText ? h("button", { onclick: () => {
        done();
        s.undoLastLoad().catch((e) => banner(errorText(e)));
      } }, s.undoLoadText) : null
    ].filter(Boolean);
    const autoNewest = auto.length ? Math.max(...auto.map((x) => x.savedAt)) : 0;
    return [
      h("h2", {}, "\u5FEB\u7167"),
      ...undo.length ? [h("div", { class: "row undo-row" }, ...undo)] : [],
      targetFilled ? h(
        "div",
        { class: "row save-row" },
        h("button", { class: "primary big save-main", onclick: () => {
          done();
          saveTo(target);
        } }, h("span", {}, `\u8986\u76D6\u300C${slotLabel(target)}\u300D`), targetWhen),
        h("button", { class: "big", onclick: () => {
          done();
          saveTo(s.nextManualSlot());
        } }, "\u5B58\u4E00\u4EFD\u65B0\u7684")
      ) : h("button", { class: "primary big", onclick: () => {
        done();
        saveTo(target);
      } }, "\u5B58\u4E00\u4EFD\u65B0\u7684"),
      manual.length ? manualList : h("p", { class: "muted" }, "\u8FD8\u6CA1\u6709\u624B\u52A8\u5FEB\u7167\u3002"),
      h("p", { class: "hint" }, "\u65B0\u7684\u5728\u4E0A\uFF0C\u4E0D\u9650\u4EFD\u6570\u3002\u8BFB\u6863\u4F1A\u4E22\u6389\u624B\u4E0A\u6CA1\u5B58\u7684\u8FDB\u5EA6\uFF0C\u8BFB\u9519\u4E86\u70B9\u300C\u64A4\u9500\u8BFB\u6863\u300D\u56DE\u53BB\u3002"),
      ...history.length ? [h(
        "details",
        { class: "auto-snaps" },
        h("summary", {}, `\u8986\u76D6\u65F6\u7559\u4E0B\u7684\u5386\u53F2 \xB7 ${history.length} \u4EFD \xB7 \u6700\u8FD1 ${when(history[0].n)}`),
        h("p", { class: "hint" }, `\u8986\u76D6\u624B\u52A8\u683C\u65F6\u88AB\u76D6\u6389\u7684\u90A3\u4EFD\u4F1A\u7559\u5728\u8FD9\u91CC\uFF0C\u6BCF\u5F20\u76D8\u7559\u6700\u8FD1 ${HISTORY_KEEP} \u4EFD\uFF1B\u66F4\u8001\u7684\u8FDB\u56DE\u6536\u7AD9\u3002\u8BFB\u5B83 = \u56DE\u5230\u90A3\u4E00\u523B\uFF1B\u60F3\u653E\u56DE\u67D0\u4E00\u683C\u5C31\u8BFB\u4E86\u518D\u8986\u76D6\u3002`),
        h("div", { class: "slots" }, ...history.map((it) => {
          const thumb = h("div", { class: "thumb" });
          s.peek(it).then((m) => {
            if (m?.thumb) thumb.append(h("img", { src: `data:image/jpeg;base64,${m.thumb}`, alt: "" }));
          });
          return h(
            "div",
            { class: "slot auto" },
            thumb,
            h("div", { class: "slot-text" }, h("span", { class: "slot-name" }, slotLabel(it)), h("span", { class: "muted" }, `${when(it.n)}${it.local ? " \xB7 \u672C\u673A" : ""}`)),
            h(
              "div",
              { class: "slot-buttons" },
              h("button", { title: "\u8BFB\u8FD9\u4E00\u4EFD\uFF1A\u624B\u4E0A\u6CA1\u5B58\u7684\u8FDB\u5EA6\u4F1A\u4E22\uFF08\u80FD\u300C\u64A4\u9500\u8BFB\u6863\u300D\u627E\u56DE\uFF09", onclick: () => {
                done();
                loadFrom(it);
              } }, "\u8BFB"),
              removeBtn(it.id, done)
            )
          );
        }))
      )] : [],
      ...auto.length ? [h(
        "details",
        { class: "auto-snaps" },
        h("summary", {}, `\u81EA\u52A8\u5FEB\u7167 \xB7 ${auto.length} \u4EFD \xB7 \u6700\u65B0 ${when(autoNewest)}`),
        h("p", { class: "hint" }, `\u4E0D\u7528\u7BA1\uFF1A\u5207\u5230\u540E\u53F0\u3001\u6BCF\u8FD0\u884C 10 \u5206\u949F\u5404\u5B58\u4E00\u4EFD\uFF0C\u8F6E\u6D41\u7528 ${AUTO_SLOTS} \u683C\u3002\u300C\u4ECE\u4E0A\u6B21\u5F00\u59CB\u300D\u4F1A\u81EA\u5DF1\u6311\u624B\u52A8\u548C\u81EA\u52A8\u91CC\u6700\u65B0\u7684\u90A3\u4EFD\u3002`),
        autoList
      )] : [],
      ...foreign.length ? [h("h3", {}, "\u522B\u7684\u5FEB\u7167"), h("div", { class: "slots" }, ...foreign.map((g) => foreignRow(g, () => done())))] : [],
      h(
        "div",
        { class: "row" },
        h("button", { title: "\u9009 PC \u7248 PPSSPP \u5B58\u7684 .ppst\uFF08\u53EF\u4EE5\u8FDE\u540C\u540D\u7684 .jpg \u622A\u56FE\u4E00\u8D77\u9009\uFF0C\u5F53\u7F29\u7565\u56FE\uFF09", onclick: () => {
          done();
          importPcSnapshot();
        } }, "\u4ECE PC \u7248 PPSSPP \u5BFC\u5165\u2026"),
        binsButton(() => done()),
        h("button", { onclick: () => done() }, "\u5173\u95ED")
      )
    ];
  }).then(() => {
    slotsSheetOpen = false;
  });
}
function importPcSnapshot() {
  if (!snaps) return;
  const s = snaps;
  const input = h("input", { type: "file", multiple: true });
  input.addEventListener("change", async () => {
    const files = Array.from(input.files ?? []);
    const ppst = files.filter((f) => /\.ppst$/i.test(f.name) && !/\.undo\.ppst$/i.test(f.name));
    if (ppst.length !== 1) {
      banner(ppst.length ? "\u4E00\u6B21\u5BFC\u5165\u4E00\u4E2A .ppst\uFF08\u53EF\u4EE5\u8FDE\u540C\u540D\u7684 .jpg \u4E00\u8D77\u9009\uFF09" : "\u6CA1\u9009\u5230 .ppst \u6587\u4EF6\uFF08PPSSPP \u7684\u5FEB\u7167\u5728 PSP/PPSSPP_STATE \u6587\u4EF6\u5939\u91CC\uFF09", "warning");
      return;
    }
    const p = ppst[0];
    const jpg = files.find((f) => f.name.toLowerCase() === p.name.toLowerCase().replace(/\.ppst$/, ".jpg"));
    try {
      await s.importPpst({ name: p.name, bytes: new Uint8Array(await p.arrayBuffer()), lastModified: p.lastModified }, jpg ? new Uint8Array(await jpg.arrayBuffer()) : null);
    } catch (e) {
      banner(`\u6CA1\u5BFC\u5165\uFF1A${errorText(e)}`);
    }
  });
  input.click();
}
function openForeign(g) {
  if (!snaps) return;
  const s = snaps;
  sheet((done) => [
    h("h2", {}, `\u4EE3\u53F7 ${g.key.slice(0, 8)}\u2026 \u7684\u5FEB\u7167`),
    h("div", { class: "slots" }, ...g.items.map((it) => {
      const thumb = h("div", { class: "thumb" });
      s.peek(it).then((m) => {
        if (m?.thumb) thumb.append(h("img", { src: `data:image/jpeg;base64,${m.thumb}`, alt: "" }));
      });
      return h(
        "div",
        { class: "slot" },
        thumb,
        h("div", { class: "slot-text" }, h("span", { class: "slot-name" }, slotLabel(it)), h("span", { class: "muted" }, new Date(it.savedAt).toLocaleString())),
        h(
          "div",
          { class: "slot-buttons" },
          h("button", { onclick: async () => {
            done();
            if (await confirmSheet("\u79FB\u5230\u56DE\u6536\u7AD9\uFF1F", "\u4E3B\u9875\u300C\u56DE\u6536\u7AD9 / \u5907\u4EFD\u7BB1\u300D\u91CC\u80FD\u6062\u590D\u3002", "\u79FB\u5230\u56DE\u6536\u7AD9")) s.remove(it.id).catch((e) => banner(errorText(e)));
          } }, "\u5220"),
          h("button", { class: "primary", onclick: () => {
            done();
            loadFrom(it);
          } }, "\u8BFB")
        )
      );
    })),
    h("div", { class: "row" }, h("button", { onclick: () => done() }, "\u8FD4\u56DE"))
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
  const bar = $("toolbar");
  bar.replaceChildren(
    h("span", { id: "title-wrap" }, $("title")),
    $("hud"),
    h("span", { class: "muted ver", title: "\u7248\u672C" }, APP_VERSION),
    // 有空就显示（user 10-14「有多余的空可以显示版本号」）；窄屏 CSS 藏起来，☰ 里一直有
    shotButton(),
    snapshotButton(),
    ...pip.supported ? [pipButton()] : [],
    // 只有桌面版 Chrome / Edge 有 Document PiP；没有的浏览器不露入口
    toolButton("menu", "\u83DC\u5355\uFF08\u6682\u505C / \u5FEB\u8FDB / \u8F6F\u952E / \u5168\u5C4F / \u97F3\u91CF / \u7EDF\u8BA1 / \u5B58\u6863\u7BA1\u7406 / \u9000\u51FA\uFF09", openMenu, "\u83DC\u5355")
  );
  renderFsBar();
  pausedMarkEl.hidden = !session.paused;
}
function openMenu() {
  if (!session) return;
  const s = session;
  let done = null;
  const item = (label, hint, fn, on = false) => h("button", { class: `menu-item${on ? " on" : ""}`, onclick: () => {
    done?.();
    fn();
  } }, h("span", {}, label), h("span", { class: "muted" }, hint));
  const big = (label, fn, on = false) => h("button", { class: on ? "primary" : "", onclick: () => {
    done?.();
    fn();
  } }, label);
  const changed = activeReloadSettings(params);
  void sheet((close) => {
    done = () => close();
    return [
      h("h2", {}, current?.title ?? "\u83DC\u5355"),
      h("p", { class: "muted" }, APP_VERSION),
      h(
        "div",
        { class: "menu-grid" },
        big(s.paused ? "\u7EE7\u7EED" : "\u6682\u505C", togglePause, s.paused),
        big("\u5FEB\u7167\u2026", openSlots),
        big("\u5B58\u6863\u7BA1\u7406\u2026", () => {
          openSaveManager({ ...saveManagerContext, only: current ? { title: current.title, key: current.key, discId: current.fp.id } : void 0 }).catch((e) => banner(errorText(e)));
        })
      ),
      h("div", { class: "menu-list" }, item("\u5BFC\u5165\u5B58\u6863\u2026", cartCore ? "\u522B\u7684\u6A21\u62DF\u5668\u7684 .sav / .srm\uFF1A\u6362\u6389\u8FD9\u5F20\u5361\u5E26\u7684\u5B58\u6863\uFF0C\u6E38\u620F\u51B7\u542F" : "PPSSPP \u8BB0\u5FC6\u68D2\u7684 SAVEDATA\uFF08\u6587\u4EF6\u5939 / zip\uFF09", () => {
        runImportSaves().catch((e) => banner(errorText(e)));
      })),
      h("h3", {}, "\u8FD9\u53F0\u8BBE\u5907"),
      h(
        "div",
        { class: "menu-list" },
        item(document.fullscreenElement ? "\u9000\u51FA\u5168\u5C4F" : "\u5168\u5C4F", "Alt+Enter \xB7 \u53CC\u51FB\u753B\u9762", toggleFullscreen),
        ...pip.supported ? [item(pip.active ? "\u6536\u56DE\u5C0F\u7A97" : "\u5C0F\u7A97", "Alt+P \xB7 \u7F6E\u9876\u7684\u5C0F\u753B\u9762\uFF0C\u8FB9\u770B\u8FB9\u505A\u522B\u7684", () => {
          togglePip().catch(() => {
          });
        }, pip.active)] : [],
        item(softKeys?.visible ? "\u6536\u8D77\u5C4F\u5E55\u8F6F\u952E" : "\u5C4F\u5E55\u8F6F\u952E", "\u89E6\u5C4F / \u5C04\u7EBF\u70B9", toggleSoftKeys, softKeys?.visible ?? false),
        item(s.isMuted ? "\u53D6\u6D88\u9759\u97F3" : `\u97F3\u91CF ${Math.round(s.volume * 100)}`, "M \u9759\u97F3", openVolume, s.isMuted),
        item(ffOn ? "\u6062\u590D\u6B63\u5E38\u901F\u5EA6" : `\u5FEB\u8FDB\uFF08\u6700\u5FEB \xD7${ffCap}\uFF09`, "\u624B\u67C4\u6309\u4F4F RT\uFF08\u6309\u4E00\u534A\u6309\u6DF1\u6D45\uFF09\xB7 \u6309\u4F4F Tab \xB7 ` \u5207\u6362", () => setFast(!ffOn), ffOn)
      ),
      h("h3", {}, "\u66F4\u591A"),
      h(
        "div",
        { class: "menu-list" },
        item(guide.isOpen() ? "\u6536\u8D77\u53C2\u8003\u7A97" : "\u53C2\u8003\u7A97", "Alt+R \xB7 \u653B\u7565 / \u7B14\u8BB0\uFF0C\u8DDF\u7740\u8FD9\u4E2A\u6E38\u620F\u540C\u6B65", () => {
          void guide.toggle();
        }, guide.isOpen()),
        item("\u8BBE\u7F6E\u2026", changed.length ? `\u8FD9\u6B21\u6253\u5F00\u6539\u7740\uFF1A${changed.join(" \xB7 ")}` : "\u753B\u9762 \xB7 \u8282\u594F \xB7 \u64CD\u4F5C \xB7 \u6A21\u62DF\u5668 \xB7 \u517C\u5BB9 \xB7 \u8BCA\u65AD", () => openSettings(settingsHost()), changed.length > 0),
        item("\u65E5\u5FD7", "\u9ED1\u5323\u5B50\uFF08\u8DE8\u91CD\u8F7D\uFF09", openLog),
        item("\u9000\u51FA\u8FD9\u5F20\u76D8", "\u5B58\u6863\u4F1A\u5148\u540C\u6B65\u5B8C", () => {
          quit().catch((e) => banner(errorText(e)));
        })
      ),
      h("div", { class: "row" }, h("button", { onclick: () => close() }, "\u5173\u95ED"))
    ];
  });
}
var lastPreset = "default";
function applyPreset(id) {
  const s = session;
  if (!s || id === "custom" || !(id in PRESETS)) return;
  const p = PRESETS[id];
  s.setPacing(p.pacing);
  s.setAudioBuffer(p.audioTargetMs, p.audioMaxMs);
  s.setFrameCap30(p.cap30 === "auto" ? defaultFrameCap30() : p.cap30);
  s.setPresentEveryForce(0);
  lastPreset = id;
  const hintChanged = latencyHint !== p.latencyHint;
  latencyHint = p.latencyHint;
  if (hintChanged) rebuildAudio(`\u6362\u65B9\u6848\uFF08\u7CFB\u7EDF\u58F0\u97F3\u5EF6\u8FDF\u6863 \u2192 ${p.latencyHint}\uFF09`).catch((e) => logEvent("error", `\u58F0\u97F3\u91CD\u5EFA\u5931\u8D25\uFF1A${errorText(e)}`));
  logEvent("info", `\u65B9\u6848 \u2192 ${id.toUpperCase()}\uFF1A\u6392\u7A0B ${p.pacing} \xB7 \u58F0\u97F3\u7F13\u51B2 ${p.audioTargetMs} / ${p.audioMaxMs} ms \xB7 \u7CFB\u7EDF\u5EF6\u8FDF\u6863 ${p.latencyHint} \xB7 \u53EA\u753B 30 \u5E27 ${p.cap30 === "auto" ? "\u8BBE\u5907\u9ED8\u8BA4" : p.cap30 ? "\u5F00" : "\u5173"}${p.note ? ` \xB7 \u6CA1\u505A\u7684\uFF1A${p.note}` : ""}`);
  if (p.note) say(p.note, 6e3);
}
function settingsHost() {
  return {
    params,
    get(id) {
      const s = session;
      if (!s) return "";
      switch (id) {
        case "app.cadence":
          return String(s.presentEveryForce());
        case "app.cap30":
          return s.frameCap30 ? "enabled" : "disabled";
        case "app.pacing":
          return s.pacingMode();
        case "app.ffcap":
          return String(ffCap);
        case "app.preset": {
          const now = presetOf({ pacing: s.pacingMode(), audioTargetMs: s.audioBufferMs.target, audioMaxMs: s.audioBufferMs.max, latencyHint, cap30: s.frameCap30 }, defaultFrameCap30());
          return now === "act" && lastPreset === "mus" ? "mus" : now;
        }
        case "app.tap":
          return s.tapOff ? "disabled" : "enabled";
        case "app.stats":
          return $("status").hidden ? "disabled" : "enabled";
      }
      return "";
    },
    set(id, v) {
      const s = session;
      if (!s) return;
      switch (id) {
        case "app.cadence":
          s.setPresentEveryForce(Number(v));
          break;
        case "app.cap30":
          s.setFrameCap30(v === "enabled");
          break;
        case "app.pacing":
          s.setPacing(v === "wall" ? "wall" : v === "audio" ? "audio" : "vsync");
          break;
        case "app.preset":
          applyPreset(v);
          break;
        case "app.ffcap":
          ffCap = Number(v) || DEFAULT_FF_CAP;
          applySpeed();
          break;
        case "app.tap":
          s.setTapOff(v === "disabled");
          break;
        case "app.stats":
          $("status").hidden = v !== "enabled";
          break;
      }
      renderToolbar();
    },
    log: (text) => logEvent("info", text),
    reload: (search) => {
      location.search = search;
    },
    coreOptions: coreOptionsFor(activeCore),
    extras: { controls: (close) => h("div", { class: "setting-row" }, h("label", {}, h("span", {}, "\u952E\u4F4D"), h("span", { class: "setting-tag" }, "\u53EA\u5728\u8FD9\u53F0\u8BBE\u5907")), h("button", { onclick: () => {
      close();
      openBindings(bindingsHost());
    } }, "\u6539\u952E\u2026"), h("p", { class: "muted setting-hint" }, "\u952E\u76D8\u548C\u624B\u67C4\u5404\u81EA\u7ED1\uFF1B\u9ED8\u8BA4 = PPSSPP \u7684\u952E\u4F4D\uFF08Z \xD7 \xB7 X \u25CB \xB7 A \u25A1 \xB7 S \u25B3 \xB7 \u7A7A\u683C Start \xB7 V / \u56DE\u8F66 Select \xB7 Q W = L R \xB7 Tab \u5FEB\u8FDB \xB7 Esc \u6682\u505C\uFF09\u548C Xbox \u51FA\u5382\u6273\u673A\uFF08LT \u6682\u505C \xB7 RT \u5FEB\u8FDB\uFF09")) }
  };
}
var hudPrev = { t: performance.now(), up: 0, down: 0 };
function renderHud() {
  if (!session) return;
  const st = session.stats();
  const now = performance.now(), dt = (now - hudPrev.t) / 1e3;
  feedStall(now, st);
  const up = (netBytes.up - hudPrev.up) / dt, down = st.netBps + (netBytes.down - hudPrev.down) / dt;
  hudPrev = { t: now, up: netBytes.up, down: netBytes.down };
  const rate = (b) => b >= 2 ** 20 ? `${(b / 2 ** 20).toFixed(1)}M` : b >= 1024 ? `${(b / 1024).toFixed(0)}K` : `${b.toFixed(0)}`;
  const heap = session.heapUsed();
  const js = performance.memory?.usedJSHeapSize;
  const el = $("hud");
  const ns = current?.net?.();
  const waiting = ns && ns.demand > 0 ? ` \xB7 \u7B49\u76D8 ${ns.demand}${ns.oldestMs >= 1e3 ? ` \xB7 ${(ns.oldestMs / 1e3).toFixed(0)}s` : ""}${ns.stalled ? ` \xB7 \u5361${ns.stalled}` : ""}` : "";
  el.textContent = `${st.fps.toFixed(0)} fps \xB7 \u2193${rate(down)} \u2191${rate(up)}${waiting} \xB7 ${heap ? `${(heap / 2 ** 20).toFixed(0)}/768M` : "\u2014"}${js ? ` \xB7 JS ${(js / 2 ** 20).toFixed(0)}M` : ""}`;
  const stuck = st.netWaitMs > 300 || !!ns?.stalled;
  el.classList.toggle("waiting", stuck);
  const nsLine = ns ? `
\u8BFB\u76D8\u5728\u9014\uFF1A\u6E38\u620F\u5728\u7B49 ${ns.demand} \u7247 \xB7 \u9884\u53D6 ${ns.speculative} \u7247\u5728\u4F20\u3001${ns.queued} \u7247\u6392\u961F${ns.stalled ? ` \xB7 ${ns.stalled} \u7247 3 \u79D2\u6CA1\u5230\u5B57\u8282\uFF08\u5728\u6362\u8DEF / \u5BF9\u51B2\uFF09` : ""}${ns.mirror !== "none" ? ` \xB7 \u955C\u50CF${ns.mirrorLabel ? `\u300C${ns.mirrorLabel}\u300D` : ""}\uFF1A${{ ok: "\u5728\u7528", down: "\u51FA\u9519\u4E86\uFF0C\u6682\u65F6\u8D70\u4E91\u7AEF", rejected: "\u5B57\u8282\u548C\u4E91\u7AEF\u4E0D\u4E00\u6837\uFF0C\u8FD9\u4E00\u7248\u4E0D\u7528\u5B83" }[ns.mirror] ?? ns.mirror}` : ""}` : "";
  const pf = current?.prefetcher?.stats();
  const pfLine = pf ? `
\u9884\u53D6\uFF1A\u6295\u673A\u8D70\u7F51\u7EDC ${pf.prefetches} \u7247\u3001\u7528\u4E0A ${pf.used}\u3001\u767D\u62C9 ${pf.wasted}\uFF1B\u6E38\u620F\u6162\u8BFB ${pf.slowReads} \u6B21\u5171 ${(pf.stallMs / 1e3).toFixed(1)} s${pf.fetchMs != null ? `\uFF1B\u62C9\u4E00\u5757 ${Math.round(pf.fetchMs)} ms` : ""}` : "";
  el.title = (stuck ? `\u5728\u7B49\u8BFB\u76D8\uFF1A\u8FD9\u4E00\u79D2\u7B49\u4E86 ${st.netWaitMs.toFixed(0)} ms\uFF08\u7F51\u6162 / \u65AD\u4E86\uFF1B\u300C\u7F13\u5B58\u5168\u76D8\u300D\u540E\u5C31\u4E0D\u7B49\uFF09` : "\u5E27\u7387 \xB7 \u4E0B\u8F7D \xB7 \u4E0A\u4F20 \xB7 \u6838\u5185\u5B58\uFF08\u5DF2\u7528 / 768 MB\uFF09") + nsLine + pfLine;
}
var syncState = { kind: "idle", text: "" };
function snapshotButton(id = "snapshot-btn") {
  const b = toolButton("floppy-disk", syncState.kind === "idle" ? "\u5FEB\u7167" : `\u5FEB\u7167 \xB7 ${syncState.text}`, openSlots, "\u5FEB\u7167");
  b.classList.add("smart", syncState.kind);
  b.id = id;
  return b;
}
function pipButton() {
  const b = toolButton("picture-in-picture", pip.active ? "\u6536\u56DE\u5C0F\u7A97\uFF08Alt+P\uFF09" : "\u5C0F\u7A97\uFF1A\u7F6E\u9876\u7684\u5C0F\u753B\u9762\uFF0C\u8FB9\u770B\u8FB9\u505A\u522B\u7684\uFF08Alt+P\uFF09", () => {
    togglePip().catch(() => {
    });
  });
  b.classList.add("pip-btn");
  b.classList.toggle("on", pip.active);
  return b;
}
function renderFsBar() {
  const bar = document.getElementById("fs-bar") ?? h("div", { id: "fs-bar", class: "esc-keys" });
  bar.replaceChildren(shotButton(), snapshotButton("fs-snapshot-btn"), toolButton("menu", "\u83DC\u5355\uFF08\u9000\u51FA\u5168\u5C4F\u5728\u8FD9\u91CC\uFF09", openMenu, "\u83DC\u5355"));
  if (!bar.isConnected) stageEl.append(bar);
}
function toggleMute() {
  if (!session) return;
  session.setMuted(!session.isMuted);
  renderToolbar();
  say(session.isMuted ? "\u9759\u97F3" : "\u53D6\u6D88\u9759\u97F3", 1500);
}
function openVolume() {
  if (!session) return;
  const s = session;
  const range = h("input", { type: "range", min: "0", max: "100", value: String(Math.round(s.volume * 100)) });
  const val = h("span", { class: "muted" }, `${range.value}`);
  range.addEventListener("input", () => {
    s.setVolume(Number(range.value) / 100);
    if (s.isMuted) s.setMuted(false);
    val.textContent = range.value;
  });
  void sheet((done) => [
    h("h2", {}, "\u97F3\u91CF"),
    h("p", { class: "hint" }, "\u53EA\u7BA1\u8FD9\u4E2A\u9875\u9762\u7684\u58F0\u97F3\uFF0C\u548C\u8BBE\u5907\u7684\u97F3\u91CF\u952E\u662F\u5206\u5F00\u7684\u3002M \u952E = \u9759\u97F3\u3002"),
    h("div", { class: "row volume-row" }, range, val),
    h(
      "div",
      { class: "row" },
      h("button", { onclick: () => {
        toggleMute();
        done();
      } }, s.isMuted ? "\u53D6\u6D88\u9759\u97F3" : "\u9759\u97F3"),
      h("button", { class: "primary", onclick: () => done() }, "\u597D")
    )
  ]).then(() => renderToolbar());
}
var SHOT_SCALES = [1, 2, 3, 4];
function shotButton() {
  const b = h("button", { class: "icon-btn", title: "\u622A\u56FE\uFF08\u6309\u4E0B\u90A3\u4E00\u523B\uFF1B\u5206\u4EAB / \u4FDD\u5B58\uFF09", "aria-label": "\u622A\u56FE" }, h("span", { class: "label" }, "\u622A\u56FE"));
  let viaPointer = false;
  const go = () => {
    shareScreenshot().catch((e) => banner(`\u622A\u56FE\u5931\u8D25\uFF1A${errorText(e)}`));
  };
  b.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    viaPointer = true;
    go();
  });
  b.addEventListener("click", () => {
    if (viaPointer) {
      viaPointer = false;
      b.blur();
      return;
    }
    go();
    b.blur();
  });
  return b;
}
async function shareScreenshot() {
  if (!session) return;
  const frame2 = await session.captureFrame();
  if (!frame2) {
    banner("\u8FD9\u4E2A\u6838\u7248\u672C\u6293\u4E0D\u4E86\u753B\u9762\uFF0C\u91CD\u65B0\u8F7D\u5165\u8BD5\u8BD5\u3002");
    return;
  }
  const stamp2 = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 15);
  let scale = 3, type = "png";
  let file = null, url = "";
  const img = h("img", { class: "shot", alt: "" });
  const info = h("p", { class: "muted" }, "\u2026");
  const shareBtn = h("button", { class: "primary" }, "\u5206\u4EAB");
  const saveBtn = h("button", {}, "\u4FDD\u5B58");
  const render2 = async () => {
    const bytes = await canvasVerbs.encodeImage(frame2.rgba, frame2.w, frame2.h, { scale, type });
    file = new File([bytes], `KudsRocket-${stamp2}${scale > 1 ? `-x${scale}` : ""}.${type}`, { type: type === "png" ? "image/png" : "image/jpeg" });
    if (url) URL.revokeObjectURL(url);
    url = URL.createObjectURL(file);
    img.src = url;
    info.textContent = `${frame2.w * scale}\xD7${frame2.h * scale}${scale > 1 ? `\uFF08\u539F\u751F ${frame2.w}\xD7${frame2.h} \xD7 ${scale}\uFF0C\u50CF\u7D20\u653E\u5927\uFF09` : "\uFF08\u539F\u751F\u5927\u5C0F\uFF09"} \xB7 ${type.toUpperCase()} \xB7 ${(file.size / 1024).toFixed(0)} KB`;
    const canShare = !!navigator.canShare?.({ files: [file] });
    shareBtn.hidden = !canShare;
    saveBtn.className = canShare ? "" : "primary";
  };
  const seg = (choices, get3, set2, label) => {
    const box = h("div", { class: "seg" });
    const paint = () => {
      for (const b of Array.from(box.children)) b.classList.toggle("on", b.dataset.v === String(get3()));
    };
    for (const c of choices) box.append(h("button", { "data-v": String(c), onclick: () => {
      set2(c);
      paint();
      render2().catch((e) => banner(errorText(e)));
    } }, label(c)));
    paint();
    return box;
  };
  shareBtn.addEventListener("click", () => {
    if (file) navigator.share({ files: [file] }).catch((e) => {
      if (e.name !== "AbortError") banner(`\u5206\u4EAB\u5931\u8D25\uFF1A${errorText(e)}`);
    });
  });
  saveBtn.addEventListener("click", () => {
    if (!file) return;
    const a = h("a", { href: url, download: file.name });
    document.body.append(a);
    a.click();
    a.remove();
  });
  await render2();
  await sheet((done) => [
    h("h2", {}, "\u622A\u56FE"),
    img,
    info,
    h(
      "div",
      { class: "row" },
      seg(SHOT_SCALES, () => scale, (v) => {
        scale = v;
      }, (v) => v === 1 ? "\u539F\u751F" : `\xD7${v}`),
      seg(["png", "jpg"], () => type, (v) => {
        type = v;
      }, (v) => v.toUpperCase())
    ),
    h("div", { class: "row" }, shareBtn, saveBtn, h("button", { onclick: () => done() }, "\u5173\u95ED"))
  ]);
  if (url) URL.revokeObjectURL(url);
}
function togglePause() {
  if (!session) return;
  session.setPaused(!session.paused);
  renderToolbar();
}
var ffOn = false;
var rtSpeed = 1;
var ffCap = DEFAULT_FF_CAP;
function applySpeed() {
  if (!session) return;
  const want = Math.max(ffOn ? ffCap : 1, rtSpeed);
  if (session.speed !== want) {
    session.setSpeed(want);
    renderToolbar();
  }
}
function setFast(on) {
  ffOn = on;
  applySpeed();
}
var DEFAULT_PRESENT_EVERY = 1;
function defaultFrameCap30() {
  const forced = params.get("cap");
  if (forced === "0" || forced === "1") return forced === "1";
  return navigator.maxTouchPoints > 0 || /OculusBrowser|Quest|Android|Mobile/i.test(navigator.userAgent);
}
var softKeysChoice = "auto";
var hardwareSeen = false;
function toggleSoftKeys() {
  softKeysChoice = "user";
  softKeys?.setVisible(!softKeys.visible);
  renderToolbar();
}
function hardwareInput(kind) {
  if (hardwareSeen) return;
  hardwareSeen = true;
  if (softKeysChoice !== "auto" || !softKeys?.visible) return;
  softKeys.setVisible(false);
  renderToolbar();
  say(`\u7528\u4E0A${kind}\u4E86\uFF0C\u5C4F\u5E55\u8F6F\u952E\u5148\u6536\u8D77\uFF08\u83DC\u5355\u91CC\u80FD\u518D\u6253\u5F00\uFF09`, 4e3);
}
function toggleFullscreen() {
  if (pip.active) {
    say("\u753B\u9762\u5728\u5C0F\u7A97\u91CC\uFF0C\u6CA1\u6709\u5168\u5C4F\uFF1B\u5148\u300C\u6536\u56DE\u300D", 3e3);
    return;
  }
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {
  });
  else stageEl.requestFullscreen({ navigationUI: "hide" }).catch((e) => say(`\u5168\u5C4F\u5931\u8D25\uFF1A${errorText(e)}`));
}
var stall = createStallDetector({ stallMs: 3e3, armFrames: 2 });
var stallSheetOpen = false;
function feedStall(now, st) {
  if (!session) return;
  const v = stall.feed({ now, frames: st.frames, visible: inForeground(), paused: session.paused, held: session.isHeld, waitingDisc: st.netInflight > 0 });
  if (v === "stalled" && !stallSheetOpen) {
    logEvent("error", `\u6838\u6CA1\u53CD\u5E94\uFF1A${(stall.stalledForMs(now) / 1e3).toFixed(0)} s \u6CA1\u51FA\u5E27\uFF08\u58F0\u97F3 ${audioContext().state}\uFF0C\u8FFD\u8FDB\u5EA6 ${st.catchup}\uFF0C\u91CD\u951A ${st.reanchors}\uFF0C\u5FAA\u73AF ${st.loopAgeMs < 0 ? "?" : `${st.loopAgeMs.toFixed(0)} ms \u524D`}\uFF0C\u81EA\u6551 ${st.loopRescues}\uFF0CGL ${st.glLost ? "\u4E22\u4E86" : "\u5728"}/\u6062\u590D ${st.glRestores}\uFF09`);
    openStallSheet();
  }
}
function openStallSheet() {
  if (!session || stallSheetOpen) return;
  const s = session;
  stallSheetOpen = true;
  const tryRevive = async () => {
    audioContext().resume().catch(() => {
    });
    s.setPaused(false);
    s.setHold(false);
    const a0 = s.stats();
    const f0 = a0.frames;
    await new Promise((r) => setTimeout(r, 1500));
    const a1 = s.stats();
    if (a1.audioState === "running" && !audioAlive(a0, a1)) await rebuildAudio("\u6551\u6D3B\u65F6\u58F0\u97F3\u4E0D\u8D70").catch(() => {
    });
    const ok = a1.frames > f0;
    logEvent(ok ? "info" : "error", ok ? "\u6551\u6D3B\u4E86\uFF08\u5E27\u6570\u53C8\u8D70\u4E86\uFF09" : "\u6CA1\u6551\u6D3B\uFF08\u5E27\u6570\u8FD8\u662F\u4E0D\u52A8\uFF09");
    say(ok ? "\u6551\u6D3B\u4E86" : "\u6CA1\u6551\u6D3B\uFF1A\u6838\u8FD8\u662F\u4E0D\u52A8\u3002\u8BD5\u300C\u5B58\u5FEB\u7167\u62A2\u6551\u300D\u6216\u91CD\u65B0\u8F7D\u5165", 6e3);
    if (!ok) {
      stall.snooze(performance.now());
      openStallSheet();
    }
  };
  const rescue = async () => {
    try {
      await snaps?.save("s", snaps.nextManualSlot().n);
      logEvent("info", "\u62A2\u6551\u5FEB\u7167\uFF1A\u6838\u7B54\u4E86\uFF0C\u5DF2\u5B58\u6210\u65B0\u7684\u624B\u52A8\u683C");
    } catch (e) {
      logEvent("error", `\u62A2\u6551\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(e)}`);
      banner(`\u62A2\u6551\u5FEB\u7167\u5931\u8D25\uFF1A${errorText(e)}\u3002\u5207\u51FA\u53BB\u90A3\u4E00\u523B\u5B58\u8FC7\u81EA\u52A8\u5FEB\u7167\u7684\u8BDD\uFF0C\u91CD\u65B0\u8F7D\u5165\u540E\u4E3B\u9875\u300C\u7EE7\u7EED\u300D\u80FD\u8BFB\u5230\u3002`);
    }
  };
  void sheet((done) => [
    h("h2", {}, "\u753B\u9762\u4E0D\u52A8\u4E86\uFF08\u6838\u6CA1\u53CD\u5E94\uFF09"),
    h("p", {}, "\u5E38\u89C1\u539F\u56E0\uFF1A\u4ECE\u522B\u7684 app / \u9501\u5C4F\u5207\u56DE\u6765\u540E\uFF0C\u7CFB\u7EDF\u628A\u663E\u5361\u4E0A\u4E0B\u6587\u6536\u8D70\u4E86\u3002\u6309\u987A\u5E8F\u8BD5\uFF1A"),
    h(
      "div",
      { class: "menu-list" },
      h("button", { class: "menu-item", onclick: () => {
        done();
        void tryRevive();
      } }, h("span", {}, "\u8BD5\u7740\u6551\u6D3B"), h("span", { class: "muted" }, "\u6062\u590D\u58F0\u97F3\u3001\u89E3\u9664\u6682\u505C\uFF0C\u770B\u5E27\u6570\u52A8\u4E0D\u52A8")),
      h("button", { class: "menu-item", onclick: () => {
        done();
        void rescue();
      } }, h("span", {}, "\u5B58\u5FEB\u7167\u62A2\u6551"), h("span", { class: "muted" }, "\u6838\u8FD8\u80FD\u7B54\u5C31\u5B58\u6210\u65B0\u7684\u624B\u52A8\u683C")),
      h("button", { class: "menu-item", onclick: () => {
        done();
        reloadOnPurpose();
      } }, h("span", {}, "\u91CD\u65B0\u8F7D\u5165"), h("span", { class: "muted" }, "\u4E3B\u9875\u70B9\u300C\u7EE7\u7EED\u300D\u8BFB\u6700\u65B0\u5FEB\u7167\uFF08\u5207\u51FA\u53BB\u65F6\u5B58\u8FC7\u81EA\u52A8\u5FEB\u7167\uFF09")),
      h("button", { class: "menu-item", onclick: () => {
        done();
        quit().catch((e) => banner(errorText(e)));
      } }, h("span", {}, "\u9000\u51FA\u8FD9\u5F20\u76D8"), h("span", { class: "muted" }, "\u5B58\u6863\u4F1A\u5148\u540C\u6B65\u5B8C"))
    ),
    h("div", { class: "row" }, h("button", { onclick: () => {
      done();
      stall.snooze(performance.now() + 27e3);
    } }, "\u5148\u4E0D\u7BA1\uFF0830 \u79D2\u540E\u518D\u770B\uFF09"))
  ], { dismissable: false }).then(() => {
    stallSheetOpen = false;
  });
}
var prefetchClosed = false;
async function closePrefetcher() {
  const pf = current?.prefetcher;
  if (!pf || prefetchClosed) return;
  prefetchClosed = true;
  const stats = pf.stats();
  logEvent("info", prefetchSummary(stats));
  await pf.close().catch((e) => logEvent("warn", `\u9884\u53D6\u7ED3\u8D26\u5931\u8D25\uFF1A${errorText(e)}`));
  const tr = current?.trace;
  if (tr && current?.identifier && tr.rows()) {
    try {
      const { bytes, gzip } = await tr.dump({ app: APP_VERSION, disc: await recipeBase(current.identifier), device: deviceId(), size: current.rawSize, blockBytes: 2 * 2 ** 20, stats });
      const stamp2 = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").replace(/\..*$/, "").replace("T", "-");
      const id = `tmp/traces/${await recipeBase(current.identifier)}-${deviceId()}-${stamp2}.trace.json${gzip ? ".gz" : ""}`;
      await saveTrace(id, bytes, { deferPush: document.visibilityState === "hidden" });
      logEvent("info", `\u8BFB\u76D8\u8F68\u8FF9\uFF1A${tr.rows()} \u884C\uFF0C${(bytes.length / 1024).toFixed(0)} KB \u2192 ${id}`);
    } catch (e) {
      logEvent("warn", `\u8BFB\u76D8\u8F68\u8FF9\u6CA1\u5B58\u4E0A\uFF1A${errorText(e)}`);
    }
  }
}
addEventListener("pagehide", () => {
  void closePrefetcher();
  void guide.flush({ deferPush: true });
});
async function quit() {
  const ok = await confirmSheet("\u9000\u51FA\uFF1F", "\u5B58\u6863\u4F1A\u5148\u540C\u6B65\u5B8C\u518D\u9000\u51FA\uFF1B\u4E0D\u4F1A\u81EA\u52A8\u5B58\u5FEB\u7167\u3002", "\u9000\u51FA");
  if (!ok) return;
  let leaveNow = false;
  const status = h("p", { class: "muted" }, syncState.text || "\u6B63\u5728\u540C\u6B65\u2026");
  const off = subscribe((s) => {
    status.textContent = s.text || "\u6B63\u5728\u540C\u6B65\u2026";
  });
  const closing = sheet((done) => [
    h("h2", {}, "\u6B63\u5728\u9000\u51FA\u2026"),
    status,
    h("div", { class: "row" }, h("button", { onclick: () => done("leave") }, "\u4E0D\u7B49\u4E86\uFF0C\u76F4\u63A5\u9000\u51FA"))
  ], { dismissable: false }).then((v) => {
    if (v === "leave") {
      leaveNow = true;
      reloadOnPurpose();
    }
  });
  try {
    if (!leaveNow) await Promise.all([jamTick(true), cartTick(true)]);
    if (!leaveNow) await guide.flush();
    if (!leaveNow) await snaps?.drainWrites();
    if (!leaveNow) await pushDirtyNow();
    if (!leaveNow) await whenIdle();
    if (!leaveNow) await closePrefetcher();
  } finally {
    off();
  }
  if (!leaveNow) reloadOnPurpose();
}
var scheme = PSP_SCHEME;
var overrides = parseOverrides(bindingsText(scheme.core));
var activeCore = "ppsspp";
function useScheme(core2) {
  activeCore = core2;
  scheme = SCHEMES[core2] ?? PSP_SCHEME;
  overrides = parseOverrides(bindingsText(scheme.core));
  softKeys?.setLayout(scheme.softkeys);
}
function setOverrides(ov) {
  overrides = ov;
  setBindingsText(scheme.core, serializeOverrides(ov));
}
var bindingsHost = () => ({ scheme, overrides: () => overrides, setOverrides, log: (t) => logEvent("info", t) });
var STICK_DEADZONE2 = 0.12;
var padInfo = "";
function rightStickMask(x, y) {
  return (x < -0.5 ? bit("left") : 0) | (x > 0.5 ? bit("right") : 0) | (y < -0.5 ? bit("up") : 0) | (y > 0.5 ? bit("down") : 0);
}
function pollGamepads(s) {
  let mask = scheme.rightStick ? rightStickMask(softRight.x, softRight.y) : 0, ax = softAnalog.x, ay = softAnalog.y;
  const act = { pause: 0, fastAnalog: 0, fastToggle: false, fastHold: false, others: /* @__PURE__ */ new Set() };
  if (Math.hypot(keyAnalog.x, keyAnalog.y) > Math.hypot(ax, ay)) {
    ax = keyAnalog.x;
    ay = keyAnalog.y;
  }
  const names = [];
  let pressed = false;
  let combo = false;
  for (const gp of navigator.getGamepads?.() ?? []) {
    if (!gp || !gp.connected) continue;
    if (gp.timestamp !== padLastTs.get(gp.index)) {
      padLastTs.set(gp.index, gp.timestamp);
      padTsChanges++;
    }
    names.push(gp.id.slice(0, 40) + (gp.mapping === "standard" ? "" : "\uFF08\u975E\u6807\u51C6\u5E03\u5C40\uFF0C\u952E\u4F4D\u53EF\u80FD\u4E0D\u5BF9\uFF09"));
    if (gp.buttons[8]?.pressed && gp.buttons[9]?.pressed) combo = true;
    for (let i = 0; i < gp.buttons.length; i++) {
      const b = gp.buttons[i];
      if (!b) continue;
      const r = resolvePad(scheme, overrides, i);
      if (!r) continue;
      if (r.kind === "button") {
        if (b.pressed) {
          mask |= 1 << r.bit;
          pressed = true;
        }
        continue;
      }
      const v = typeof b.value === "number" ? b.value : b.pressed ? 1 : 0;
      switch (r.action) {
        case "pause":
          act.pause = Math.max(act.pause, v);
          break;
        case "fast-analog":
          act.fastAnalog = Math.max(act.fastAnalog, v);
          break;
        case "fast-toggle":
          act.fastToggle ||= b.pressed;
          break;
        case "fast":
          act.fastHold ||= b.pressed;
          break;
        default:
          if (b.pressed) act.others.add(r.action);
      }
    }
    const x = gp.axes[0] ?? 0, y = gp.axes[1] ?? 0;
    if (Math.hypot(x, y) > STICK_DEADZONE2) {
      pressed = true;
      if (Math.hypot(x, y) > Math.hypot(ax, ay)) {
        ax = x;
        ay = y;
      }
    }
    const rm = scheme.rightStick ? rightStickMask(gp.axes[2] ?? 0, gp.axes[3] ?? 0) : 0;
    if (rm) pressed = true;
    mask |= rm;
  }
  padInfo = names.join(" + ");
  {
    const ltDown = padLtDown ? act.pause > 0.3 : act.pause > 0.5;
    if (ltDown && !padLtDown) togglePause();
    if (act.fastToggle && !padR3) setFast(!ffOn);
    if (act.fastHold !== padFfHold) {
      padFfHold = act.fastHold;
      setFast(act.fastHold);
    }
    for (const a of act.others) if (!padActionsDown.has(a)) runAction(a);
    padActionsDown = act.others;
    padLtDown = ltDown;
    padR3 = act.fastToggle;
    const rs = s.paused ? 1 : triggerSpeed(act.fastAnalog, ffCap);
    if (rs !== rtSpeed) {
      rtSpeed = rs;
      applySpeed();
    }
    if (ltDown || act.fastToggle || act.fastHold || act.others.size || act.fastAnalog > TRIGGER_DEADZONE) pressed = true;
  }
  if (pressed) hardwareInput("\u624B\u67C4");
  s.setMask("pad", mask);
  s.setAnalog(ax, ay);
  if (questAdvisor) {
    const now = performance.now();
    if (combo && !comboHeld) {
      logEvent("info", "\u624B\u67C4\uFF1ASelect + Start \u540C\u65F6\u6309\u4E0B\uFF08Quest \u4E0A\u8FD9\u5C31\u662F View + Menu = \u7CFB\u7EDF\u300C\u6CE8\u89C6\u5149\u6807\u300D\u5F00\u5173\uFF09");
      questFeed({ kind: "combo", now });
    }
    comboHeld = combo;
    questFeed({ kind: "pads", count: names.length, now });
    questFeed({ kind: "tick", now });
  }
}
var comboHeld = false;
var padLtDown = false;
var padR3 = false;
var padFfHold = false;
var padActionsDown = /* @__PURE__ */ new Set();
var padLastTs = /* @__PURE__ */ new Map();
var padTsChanges = 0;
var padTsAtBurst = 0;
var padPolls = 0;
var padPollsAtBurst = 0;
var statusAt = 0;
var lastFrameAt = performance.now();
var perfLogAt = 0;
var perfLogged = 0;
function perfSoon() {
  perfLogAt = performance.now() - (perfLogged ? 11e4 : 0);
}
var pausedByHide = false;
var frameGen = 0;
function startFrameLoop() {
  const gen = ++frameGen;
  (pip.window ?? window).requestAnimationFrame(() => frame(gen));
}
function frame(gen) {
  if (gen !== frameGen || !session) return;
  pollGamepads(session);
  padPolls++;
  {
    const b = session.takeBurst(performance.now());
    if (b) {
      const tsN = padTsChanges - padTsAtBurst, polls = padPolls - padPollsAtBurst;
      logEvent("info", `\u8FDE\u6309\uFF1A\u9875\u9762\u770B\u5230 ${b.n} \u4E0B\uFF08${(b.ms / 1e3).toFixed(1)} s\uFF0C\u6765\u6E90 ${b.source}\uFF09\xB7 \u6838\u6536\u5230 ${b.coreRecv} \u653E\u51FA ${b.corePlayed}${b.coreDropped ? ` \u4E22 ${b.coreDropped}` : ""} \xB7 \u6700\u77ED\u6309\u4F4F ${Number.isFinite(b.minHold) ? b.minHold.toFixed(0) : "\u2014"} ms \xB7 \u6700\u77ED\u677E\u5F00 ${Number.isFinite(b.minGap) ? b.minGap.toFixed(0) : "\u2014"} ms \xB7 \u8FD9\u671F\u95F4\u9875\u9762\u8BFB\u624B\u67C4 ${polls} \u6B21\u3001\u6D4F\u89C8\u5668\u66F4\u65B0\u624B\u67C4\u72B6\u6001 ${tsN} \u6B21${params.get("tap") === "0" ? " \xB7 \u9501\u5B58\u5173\u7740\uFF08tap=0\uFF09" : ""}`);
    }
    if (!session.takeBurstPending()) {
      padTsAtBurst = padTsChanges;
      padPollsAtBurst = padPolls;
    }
  }
  session.tick();
  const now = performance.now();
  if (activity2) {
    activity2.discSeen(session.discSeenBytes(), now);
    snaps?.tick(activity2.tick(now - lastFrameAt, now, { visible: inForeground(), paused: session.paused }));
  }
  lastFrameAt = now;
  if (now - statusAt > 500) {
    statusAt = now;
    renderHud();
    if (!$("status").hidden) $("status").textContent = statusText();
    if (!perfLogAt) perfLogAt = now;
    if (!session.paused && inForeground() && now - perfLogAt > (perfLogged ? 12e4 : 1e4)) {
      perfLogAt = now;
      perfLogged++;
      const s = session.stats();
      logEvent("info", `\u6027\u80FD\uFF1A${s.fps.toFixed(0)} fps \xB7 \u901F\u5EA6 ${pct(s.speed)} \xB7 ${s.renderer} \xB7 ${perfLines(s).join(" \xB7 ")} \xB7 \u624B\u67C4\uFF1A${padInfo || "Gamepad API \u6CA1\u770B\u5230\u624B\u67C4"}${questAdvisor ? ` \xB7 \u6EDA\u8F6E ${questAdvisor.wheels} \u6B21` : ""}${s.gpuTotals ? ` \xB7 \u672C\u5C40\u7D2F\u8BA1\uFF1A\u56DE\u8BFB ${s.gpuTotals.readbacks}\uFF08\u963B\u585E ${s.gpuTotals.blocking}\uFF09\xB7 \u5757\u4F20\u8F93 ${s.gpuTotals.transfers} \xB7 \u62F7\u8D1D ${s.gpuTotals.copies}` : ""}${s.coreLog().length ? ` \xB7 \u6838 stderr\uFF1A${s.coreLog().slice(-3).join(" | ")}` : ""}`);
    }
  }
  (pip.window ?? window).requestAnimationFrame(() => frame(gen));
}
var pct = (x) => `${(x * 100).toFixed(0)}%`;
function perfLines(s) {
  const p = s.perf;
  if (!p) return ["\u6838\u7EBF\u7A0B\uFF1A\u8FD8\u6CA1\u6709\u8BFB\u6570\uFF08\u521A\u8D77 / \u8001\u6838\uFF09"];
  if (s.win.ranFrames === 0) return [`\u6838\u7EBF\u7A0B\uFF1A\u8FD9\u4E00\u79D2\u6CA1\u8DD1\u5E27\uFF08${s.paused ? "\u6682\u505C\u4E2D" : "\u6838\u6CA1\u5728\u8DD1"}\uFF09${s.glRenderer ? ` \xB7 ${s.glRenderer}` : ""}`];
  const capText = s.frameCap.want ? s.frameCap.active ? "\u751F\u6548" : `\u5F85\u547D\uFF08\u672C\u8EAB ${s.frameCap.nativeFps ? s.frameCap.nativeFps.toFixed(0) + " \u5E27" : "\u672A\u91CF"}\uFF09` : "\u5173";
  const nativeShown = s.frameCap.nativeFps ? s.frameCap.nativeFps / (s.frameCap.active ? 2 : 1) : 0;
  const shownTarget = s.presentEvery > 1 && s.displayHz ? s.displayHz / s.presentEvery : nativeShown || 60;
  const onPace = s.fps >= shownTarget * 0.9 && s.speed > 0.95;
  const rafSlow = s.pacingMode === "vsync" && s.vsyncDt > 21;
  const who = p.emuBusy > 0.85 ? "\u6A21\u62DF\u7EBF\u7A0B\uFF08CPU\uFF1A\u89E3\u91CA\u5668 / \u9876\u70B9\u89E3\u7801\uFF09" : p.submitBusy > 0.7 ? "\u63D0\u4EA4\u7EBF\u7A0B\uFF08GL \u8C03\u7528\u592A\u591A / \u592A\u8D35\uFF09" : onPace ? "\u90FD\u4E0D\u7D27" : rafSlow ? `\u6392\u7A0B\uFF08\u6838\u7684 rAF \u88AB\u538B\u6162\u5230 ${s.vsyncDt.toFixed(0)} ms\uFF1AGPU \u8FDB\u7A0B\u8DDF\u4E0D\u4E0A\u6216\u6D4F\u89C8\u5668\u8282\u6D41\u2014\u2014\u2630 \u5207\u300C\u5899\u949F\u300D\u5BF9\u7167\uFF09` : "\u6D4F\u89C8\u5668 / GPU\uFF08\u4E24\u6761\u7EBF\u7A0B\u90FD\u4E0D\u7D27\u3001rAF \u4E5F\u51C6\u65F6\uFF09";
  const ratio = s.displayHz && nativeShown ? s.displayHz / nativeShown : 0;
  const uneven = ratio > 1.5 && Math.abs(ratio - Math.round(ratio)) > 0.05 * ratio;
  const cadence = s.presentEvery > 1 ? ` \xB7 \u4E0A\u5C4F\u8282\u62CD\uFF1A\u6BCF ${s.presentEvery} \u6B21\u5237\u65B0 1 \u5E27\uFF08${(s.displayHz / s.presentEvery).toFixed(0)} fps \u5300\u901F\uFF1B${s.displayHz.toFixed(0)} Hz \u5C4F\u9664\u4E0D\u5C3D ${nativeShown.toFixed(0)} \u5E27\uFF0C\u591A\u51FA\u7684\u5E27\u4E22\u6389\u4E0D\u91CD\u590D\uFF09` : uneven ? ` \xB7 \u8282\u594F\uFF1A${s.displayHz.toFixed(0)} Hz \u5C4F\u653E ${nativeShown.toFixed(0)} \u5E27\u7684\u6E38\u620F\u9664\u4E0D\u5C3D\u2014\u2014\u6BCF\u5E27\u4EA4\u66FF\u5360 ${Math.floor(ratio)} / ${Math.ceil(ratio)} \u6B21\u5237\u65B0\uFF08\u770B\u7740\u6296\uFF1B\u8DDF\u5C4F\u5E55\u6392\u7A0B\u4F1A\u6309\u56FA\u5B9A\u8282\u62CD\u4E0A\u5C4F\uFF09` : "";
  return [
    `\u6838\u7EBF\u7A0B\uFF1A\u6A21\u62DF ${pct(p.emuBusy)} \u5FD9 \xB7 \u63D0\u4EA4 ${pct(p.submitBusy)} \u5FD9\uFF08retro_run \u5747 ${p.runMsPerFrame.toFixed(1)} / \u6700\u957F ${p.runMaxMs.toFixed(0)} ms \xB7 \u4E0A\u5C4F ${p.presentMs.toFixed(2)} ms\uFF09\xB7 \u74F6\u9888\uFF1A${who}${p.glErrors ? ` \xB7 GL \u9519\u8BEF 0x${p.glError.toString(16)} \xD7${p.glErrors}` : ""}${s.glRenderer ? ` \xB7 ${s.glRenderer}` : ""}`,
    `\u6392\u7A0B\uFF1A${s.pacing} \xB7 \u6838 rAF \u95F4\u9694 ${s.vsyncDt ? s.vsyncDt.toFixed(1) + " ms" : "\u2014"} \xB7 \u51FA\u5E27\u95F4\u9694 ${s.pace.mean.toFixed(1)} \xB1 ${s.pace.sd.toFixed(1)} / \u6700\u957F ${s.pace.max.toFixed(0)} ms \xB7 \u8FFD\u8FDB\u5EA6 ${s.win.catchupPerSec.toFixed(0)} \u5E27/s \xB7 \u91CD\u951A ${s.win.reanchorsPerSec.toFixed(1)}/s \xB7 \u8DF3\u5E27 ${s.frameskip} \xB7 \u753B 30 \u5E27\uFF1A${capText} \xB7 \u4E3B\u7EBF\u7A0B ${s.displayHz.toFixed(0)} Hz\uFF08\u6BCF\u6B21\u5237\u65B0\u65B0\u5E27 0/1/2+\uFF1A${s.perRefresh.join("/")}\uFF09${cadence}`,
    `\u6BCF\u5E27 GL\uFF1A\u753B ${p.draws.toFixed(0)} \u6B21 \xB7 \u6362\u7A0B\u5E8F ${p.prog.toFixed(0)} \xB7 \u8D34\u56FE ${p.tex.toFixed(1)}\uFF08${(p.texPx / 1e3).toFixed(0)}k px\uFF0C${p.texMs.toFixed(2)} ms\uFF09\xB7 \u7F13\u51B2 ${p.buf.toFixed(1)}\uFF08${(p.bufBytes / 1024).toFixed(0)} KB\uFF0C${p.bufMs.toFixed(2)} ms\uFF09\xB7 map ${p.map.toFixed(1)}\uFF08${p.mapMs.toFixed(2)} ms\uFF09\xB7 \u56DE\u8BFB ${p.read.toFixed(1)}\uFF08${p.readMs.toFixed(2)} ms\uFF09\xB7 \u540C\u6B65 ${p.sync.toFixed(1)}\uFF08${p.syncMs.toFixed(2)} ms\uFF09\xB7 blit ${p.blit.toFixed(1)} \xB7 PPSSPP\uFF1Adraw ${p.ppsspp.drawCalls} \xB7 \u9876\u70B9 ${p.ppsspp.vertsSubmitted}\uFF08\u89E3\u7801 ${p.ppsspp.vertsDecoded}\uFF09\xB7 \u8D34\u56FE\u89E3\u7801 ${p.ppsspp.texturesDecoded} \xB7 \u56DE\u8BFB ${p.ppsspp.readbacks} \xB7 \u62F7\u8D1D ${p.ppsspp.copies} \xB7 \u663E\u793A\u5217\u8868 ${p.ppsspp.listMs.toFixed(1)} ms`
  ];
}
function statusText() {
  const s = session.stats();
  return [
    `${APP_VERSION} \xB7 ${s.fps.toFixed(1)} fps \xB7 \u901F\u5EA6 ${(s.speed * 100).toFixed(0)}% \xB7 ${s.renderer} \xB7 \u9650\u901F\uFF1A${s.pacing}${s.paused ? " \xB7 \u6682\u505C\u4E2D" : ""}${s.gameSpeed > 1 ? ` \xB7 \u5FEB\u8FDB \xD7${s.gameSpeed}` : ""}`,
    `\u753B\u9762\u8282\u594F\uFF1A\u51FA\u5E27\u95F4\u9694 ${s.pace.mean.toFixed(1)} \xB1 ${s.pace.sd.toFixed(1)} ms \xB7 \u6700\u957F ${s.pace.max.toFixed(0)} ms \xB7 \u8DF3\u5E27 ${["\u5173", "\u6BCF 2 \u5E27\u753B 1", "\u6BCF 3 \u5E27\u753B 1"][s.frameskip]} \xB7 \u8FFD\u8FDB\u5EA6 ${s.catchup} \u5E27 \xB7 \u91CD\u65B0\u5BF9\u9F50 ${s.reanchors} \u6B21 \xB7 \u753B 30 \u5E27\uFF1A${s.frameCap.want ? s.frameCap.active ? "\u751F\u6548\uFF08\u6E38\u620F\u672C\u8EAB 60 \u5E27\uFF09" : `\u5F85\u547D\uFF08\u6E38\u620F\u672C\u8EAB ${s.frameCap.nativeFps ? s.frameCap.nativeFps.toFixed(0) + " \u5E27" : "\u8FD8\u6CA1\u91CF\u5230"}\uFF09` : "\u5173"}`,
    ...perfLines(s),
    `\u663E\u793A\u5668 \u2248 ${s.displayHz.toFixed(0)} Hz \xB7 \u6BCF\u6B21\u5237\u65B0\u770B\u5230\u65B0\u5E27\uFF1A0 \u5F20 ${s.perRefresh[0]} \xB7 1 \u5F20 ${s.perRefresh[1]} \xB7 2 \u5F20\u4EE5\u4E0A ${s.perRefresh[2]}\uFF08\u6BCF\u79D2\uFF09`,
    `\u76D8\uFF1A\u8FD9\u4E00\u79D2 ${(s.netBps / 1024).toFixed(0)} KB/s \xB7 \u7B49\u8BFB\u76D8 ${s.netWaitMs.toFixed(0)} ms/s${s.netInflight ? `\uFF08\u6B63\u5728\u7B49 ${s.netInflight} \u4E2A\uFF09` : ""} \xB7 \u7D2F\u8BA1 ${(s.bytesFetched / 2 ** 20).toFixed(1)} MB / ${s.mediaReads} \u6B21`,
    `\u58F0\u97F3\uFF1A${s.audioState} \xB7 \u7F13\u51B2 ${s.audioFillMs.toFixed(0)} ms \xB7 \u8F93\u51FA\u5EF6\u8FDF ${s.outputLatencyMs.toFixed(0)} ms \xB7 \u6B20\u8F7D\u7D2F\u8BA1 ${s.audioUnderrunMs.toFixed(0)} ms \xB7 \u4E22\u5F03 ${s.audioDropped}`,
    `\u624B\u67C4\uFF1A${padInfo || (IS_QUEST ? `\u6CA1\u68C0\u6D4B\u5230\u3002Quest \u53EF\u80FD\u6B63\u62FF\u624B\u67C4\u5F53\u5149\u6807\u7528\uFF08\u7F51\u9875\u770B\u4E0D\u5230\uFF09\uFF1A${QUEST_PAD_HOWTO}\u3002Xbox \u624B\u67C4\u6700\u7A33` : "\u6CA1\u68C0\u6D4B\u5230\uFF08\u63D2\u4E0A\u540E\u5728\u9875\u9762\u4E0A\u6309\u4E00\u4E0B\u624B\u67C4\u6309\u952E\uFF09")}`,
    `\u6D3B\u52A8\uFF1A${activity2 ? { playing: "\u8FD0\u884C\u4E2D", idle: "\u6302\u673A\uFF08\u81EA\u52A8\u5FEB\u7167\u4E0D\u8BA1\u65F6\uFF09", away: "\u540E\u53F0 / \u6682\u505C" }[activity2.state(performance.now(), { visible: inForeground(), paused: s.paused })] : "\u2014"} \xB7 \u8BFB\u8FC7\u7684\u76D8 ${(session.discSeenBytes() / 2 ** 20).toFixed(1)} MB \xB7 \u8FD9\u6B21\u8FD0\u884C ${((activity2?.playedMs ?? 0) / 6e4).toFixed(1)} \u5206\u949F`,
    `\u624B\u67C4\uFF08\u540C PPSSPP Xbox \u9ED8\u8BA4\uFF09\uFF1AA \xD7 \xB7 B \u25CB \xB7 X \u25A1 \xB7 Y \u25B3 \xB7 LB/RB L/R \xB7 LT \u6682\u505C \xB7 RT \u5FEB\u8FDB\uFF08\u6309\u4E00\u534A\u6309\u6DF1\u6D45 1\u20134\xD7\uFF0C\u6309\u5230\u5E95 \xD7${ffCap}\uFF09\xB7 \u53F3\u6447\u6746\u6309\u4E0B \u5FEB\u8FDB\u5F00\u5173 \xB7 \u5DE6\u6447\u6746 \u6447\u6746 \xB7 \u53F3\u6447\u6746 \u5341\u5B57`,
    `\u952E\u76D8\uFF08\u540C PPSSPP \u9ED8\u8BA4\uFF09\uFF1A\u65B9\u5411\u952E \u5341\u5B57 \xB7 I/J/K/L \u6447\u6746\uFF08\u53F3 Shift \u8F7B\u63A8\uFF09\xB7 X \u25CB \xB7 Z \xD7 \xB7 A \u25A1 \xB7 S \u25B3 \xB7 Q/W L/R \xB7 \u7A7A\u683C Start \xB7 V / \u56DE\u8F66 Select \xB7 Esc / P \u6682\u505C \xB7 \u6309\u4F4F Tab \u5FEB\u8FDB \xB7 \` \u5FEB\u8FDB\u5F00\u5173 \xB7 M \u9759\u97F3 \xB7 F2 \u5B58 / F4 \u8BFB\u5F53\u524D\u683C`
  ].join("\n");
}
var IS_QUEST = /\bQuest\b|OculusBrowser/.test(navigator.userAgent);
var questAdvisor = IS_QUEST ? createQuestInputAdvisor() : null;
function questFeed(sig) {
  const adv = questAdvisor?.feed(sig);
  if (!adv) return;
  logEvent("info", adv.log);
  say(adv.text, 15e3);
}
var seenKeys = /* @__PURE__ */ new Set();
function noteKey(e, code) {
  if (seenKeys.size >= 16) return;
  const sig = `${e.code}|${e.keyCode}|${e.location}`;
  if (seenKeys.has(sig)) return;
  seenKeys.add(sig);
  const r = resolveKey(scheme, overrides, code);
  const mapped = r ? r.kind === "button" ? `\u2192 ${r.id}` : `\u2192 \u52A8\u4F5C ${r.action}` : scheme.stickKeys[code] ? "\u2192 \u6447\u6746" : "\xB7 \u6CA1\u6620\u5C04\u5230\u952E\u4F4D";
  logEvent("info", `\u8F93\u5165\uFF1A\u952E code=${e.code || "(\u7A7A)"} key=${e.key.length > 1 ? e.key : "(\u5B57\u7B26)"} keyCode=${e.keyCode} location=${e.location}${code !== e.code ? ` \u2192 ${code}` : ""} ${mapped}`);
}
var stickKeysDown = /* @__PURE__ */ new Set();
var keyAnalog = { x: 0, y: 0 };
function updateKeyAnalog(lightly) {
  let x = 0, y = 0;
  for (const k of stickKeysDown) {
    const d = scheme.stickKeys[k];
    if (d) {
      x += d[0];
      y += d[1];
    }
  }
  const len = Math.hypot(x, y) || 1, mag = lightly ? 0.5 : 1;
  keyAnalog = { x: x / len * mag, y: y / len * mag };
}
var rightShift = false;
function onKey(e, down) {
  if (!session || isSheetOpen()) return;
  const code = keyCodeOf(e);
  if (down && !e.repeat) {
    noteKey(e, code);
    questFeed({ kind: "key", code, now: performance.now() });
  }
  const kind = code.startsWith("Pad") ? "\u624B\u67C4" : "\u952E\u76D8";
  const counts = !(IS_QUEST && kind === "\u952E\u76D8" && !isTypingKey(code) && !questAdvisor?.typingSeen);
  if (down && e.code === "Enter" && e.altKey) {
    e.preventDefault();
    toggleFullscreen();
    return;
  }
  if (down && e.code === "KeyR" && e.altKey) {
    e.preventDefault();
    if (!e.repeat) void guide.toggle();
    return;
  }
  if (down && e.code === "KeyP" && e.altKey) {
    e.preventDefault();
    if (!e.repeat) togglePip().catch(() => {
    });
    return;
  }
  if (scheme.stickKeys[code]) {
    e.preventDefault();
    if (down) {
      stickKeysDown.add(code);
      if (counts) hardwareInput(kind);
    } else stickKeysDown.delete(code);
    updateKeyAnalog(e.getModifierState?.("Shift") && e.location === 2 || rightShift);
    return;
  }
  if (e.code === "ShiftRight") {
    rightShift = down;
    updateKeyAnalog(down);
    return;
  }
  const r = resolveKey(scheme, overrides, code);
  if (!r) return;
  e.preventDefault();
  if (r.kind === "action") {
    if (r.action === "fast") {
      if (!e.repeat) setFast(down);
      return;
    }
    if (down && !e.repeat) runAction(r.action);
    return;
  }
  if (down && counts) hardwareInput(kind);
  const m = session.getMask("keyboard");
  session.setMask("keyboard", down ? m | 1 << r.bit : m & ~(1 << r.bit));
}
function runAction(a) {
  if (!session) return;
  switch (a) {
    case "pause":
      togglePause();
      break;
    case "fast-toggle":
      setFast(!ffOn);
      break;
    case "snapshot": {
      const t = quickSlot(true);
      if (t) saveTo(t);
      break;
    }
    case "load": {
      const t = quickSlot(false);
      if (t) loadFrom(t);
      break;
    }
    case "screenshot":
      shareScreenshot().catch((e) => banner(`\u622A\u56FE\u5931\u8D25\uFF1A${errorText(e)}`));
      break;
    case "mute":
      toggleMute();
      break;
    case "fullscreen":
      toggleFullscreen();
      break;
    case "reference":
      void guide.toggle();
      break;
    case "pip":
      togglePip().catch(() => {
      });
      break;
    case "fast":
    case "fast-analog":
      break;
  }
}
function progressSheet(title) {
  let cancelled = false;
  let finish = () => {
  };
  const bar = h("progress", { max: "1", value: "0" });
  const text = h("span", { class: "muted" }, "");
  sheet((done) => {
    finish = done;
    return [
      h("h2", {}, title),
      bar,
      text,
      h("div", { class: "row" }, h("button", { onclick: () => {
        cancelled = true;
      } }, "\u53D6\u6D88"))
    ];
  }, { dismissable: false });
  const t0 = performance.now();
  return {
    p: {
      update(d, total) {
        bar.value = d / total;
        const mbs = d / 2 ** 20 / ((performance.now() - t0) / 1e3);
        text.textContent = `${(d / 2 ** 30).toFixed(2)} / ${(total / 2 ** 30).toFixed(2)} GB \xB7 ${mbs.toFixed(0)} MB/s`;
      },
      get cancelled() {
        return cancelled;
      }
    },
    close: () => finish(null)
  };
}
async function askNewPassword() {
  for (; ; ) {
    const a = await askPassword("\u8BBE\u53E3\u4EE4", "\u4EE5\u540E\u6253\u5F00\u8981\u7528\u540C\u4E00\u4E2A\u53E3\u4EE4\u3002\u53E3\u4EE4\u4E0D\u5B58\uFF0C\u5FD8\u4E86\u5C31\u6253\u4E0D\u5F00\u3002", { purpose: "new" });
    if (!a) return null;
    const b = await askPassword("\u518D\u8F93\u4E00\u6B21", "\u786E\u8BA4\u521A\u624D\u7684\u53E3\u4EE4\u3002", { purpose: "new" });
    if (b === null) return null;
    if (a === b) return a;
    banner("\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u6837\uFF0C\u518D\u6765\u4E00\u6B21\u3002", "warning");
  }
}
async function makeWafer() {
  const [handle] = await showOpenFilePicker();
  const input = await handle.getFile();
  const pw = await askNewPassword();
  if (!pw) return;
  const out = await showSaveFilePicker({ suggestedName: `${randomStem()}.wafter` });
  const ui = progressSheet("\u6B63\u5728\u52A0\u5BC6\u2026");
  try {
    await encryptToLocal(input, pw, out, ui.p);
    say(`\u505A\u597D\u4E86\uFF1A${out.name}\u3002\u653E\u8FDB OneDrive \u672C app \u6587\u4EF6\u5939\u7684 ${PANTRY}/ \u5C31\u80FD\u5728\u5217\u8868\u91CC\u770B\u5230\u3002`, 1e4);
  } catch (e) {
    if (e instanceof Cancelled) say("\u53D6\u6D88\u4E86\uFF0C\u6CA1\u7559\u4E0B\u534A\u6210\u54C1");
    else throw e;
  } finally {
    ui.close();
  }
}
async function unwrapWafer() {
  const [handle] = await showOpenFilePicker({ types: [{ description: "wafter", accept: { "application/octet-stream": [".wafter"] } }] });
  const input = await handle.getFile();
  const opened = await withPassword(async (pw) => {
    const p = pw ?? getPassword();
    if (!p) throw new NeedPassword();
    return openForDecrypt(input, p);
  }, "\u8FD9\u4E2A\u6587\u4EF6");
  if (!opened) return;
  const out = await showSaveFilePicker({ suggestedName: opened.name });
  const ui = progressSheet("\u6B63\u5728\u89E3\u5BC6\u2026");
  try {
    await opened.write(out, ui.p);
    say(`\u89E3\u597D\u4E86\uFF1A${out.name}`, 6e3);
  } catch (e) {
    if (e instanceof Cancelled) say("\u53D6\u6D88\u4E86\uFF0C\u6CA1\u7559\u4E0B\u534A\u6210\u54C1");
    else throw e;
  } finally {
    ui.close();
  }
}
async function unpackSaves() {
  const k = PLATFORM_CODE.psp;
  const { ids, complete } = await listJams(k, { timeoutMs: 2e4, waitForCloud: true });
  if (!ids.length) {
    banner("\u4E91\u7AEF\u8FD8\u6CA1\u6709\u5B58\u6863\u3002", "warning");
    return;
  }
  const stick = await withPassword(async (pw) => {
    const p = pw ?? getPassword();
    if (!p) throw new NeedPassword();
    return loadMemstick(k, p, ids, complete);
  }, "\u5B58\u6863");
  if (!stick) return;
  const dirs = [...stick.dirs].map((dir) => ({ dir, game: gameOf(dir), newest: stick.times.get(dir) ?? 0, title: sfoInfo(stick.files.get(`${dir}/PARAM.SFO`)).title }));
  const skipped = stick.unreadable.size + [...stick.duplicates.values()].reduce((s, v) => s + v.length, 0);
  const chosen = await chooseGames("\u5B58\u6863\u89E3\u7F50\uFF1A\u89E3\u54EA\u51E0\u4E2A\u6E38\u620F", `\u4E91\u7AEF ${ids.length} \u7F50${complete ? "" : "\uFF08\u4E91\u7AEF\u5217\u8868\u6CA1\u62FF\u5168\uFF0C\u53EF\u80FD\u7F3A\u51E0\u7F50\uFF09"}${skipped ? `\uFF1B${skipped} \u7F50\u6253\u4E0D\u5F00\u6216\u91CD\u590D\uFF0C\u6CA1\u5217\u51FA\u6765` : ""}\u3002\u6253\u6210\u4E00\u4E2A zip \u4E0B\u8F7D\uFF1A\u91CC\u9762\u662F SAVEDATA/<\u5B58\u6863\u76EE\u5F55>/\u2026\uFF0C\u89E3\u538B\u8FDB PPSSPP \u7684 memstick/PSP/ \u5C31\u80FD\u7528\uFF08\u540C\u540D\u76EE\u5F55\u4F1A\u88AB\u76D6\uFF0C\u5148\u5907\u4EFD\uFF09\u3002`, groupByGame(dirs), "\u6253\u5305\u4E0B\u8F7D");
  if (!chosen?.size) return;
  const want = dirs.filter((d) => chosen.has(d.game)).map((d) => d.dir);
  const zip = await exportSaveDirs(stick.files, stick.times, want);
  const stamp2 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16).replace(/[-:T]/g, "");
  const url = URL.createObjectURL(new Blob([zip], { type: "application/zip" }));
  const a = h("a", { href: url, download: `saves-${stamp2}.zip` });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 6e4);
  logEvent("info", `\u5B58\u6863\u89E3\u7F50\uFF1A${[...chosen].join(" \xB7 ")}\uFF0C${want.length} \u4E2A\u76EE\u5F55 \u2192 saves-${stamp2}.zip\uFF08${(zip.length / 1024).toFixed(0)} KB\uFF09`);
  say(`\u6253\u5305\u597D\u4E86\uFF1A${want.length} \u4E2A\u5B58\u6863\u76EE\u5F55\uFF08saves-${stamp2}.zip\uFF09`, 6e3);
}
var toolErr = (e) => {
  if (e?.name !== "AbortError") banner(errorText(e));
};
async function uploadWafer(file) {
  const label = await readDiscLabel({ size: file.size, read: async (o, n) => new Uint8Array(await file.slice(o, o + n).arrayBuffer()) });
  const twin = [...cards.entries()].find(([, c]) => c.fp.size === file.size && (c.fp.id ?? null) === (label?.id ?? null) && (c.fp.v ?? null) === (label?.version ?? null));
  const locked = pantryItems.filter((it) => it.identifier.endsWith(".wafter") && !cards.has(it.identifier) && !unsupported.has(it.identifier)).length;
  if (twin && !await confirmSheet("\u98DF\u54C1\u67DC\u91CC\u597D\u50CF\u5DF2\u7ECF\u6709\u8FD9\u5F20\u76D8\u4E86", `\u300C${twin[1].title}\u300D\uFF08${stemOf2(twin[0])}\uFF09\u76D8\u53F7\u3001\u7248\u672C\u3001\u5927\u5C0F\u90FD\u4E00\u6837\u3002\u8FD8\u8981\u518D\u4F20\u4E00\u4EFD\u5417\uFF1F`, "\u8FD8\u662F\u4F20", "\u4E0D\u4F20")) return;
  if (!twin && locked) say(`\u6709 ${locked} \u5F20\u76D8\u8FD8\u6CA1\u8F93\u53E3\u4EE4\u770B\u540D\u5B57\uFF0C\u6CA1\u6CD5\u6BD4\u5BF9\u662F\u4E0D\u662F\u4F20\u8FC7\u4E86`, 6e3);
  const pw = await askNewPassword();
  if (!pw) return;
  const identifier = `${PANTRY}/${randomStem()}.wafter`;
  await track(`\u76D8 ${file.name}`, file.size, (onProgress) => uploadToPantry(file, pw, identifier, onProgress).then(() => ({ pushed: true })));
  say(`\u4F20\u597D\u4E86\uFF1A${file.name}\u3002\u5173\u6389\u8FD9\u4E00\u9875\u524D\u522B\u6E05\u6D4F\u89C8\u5668\u6570\u636E\u4E5F\u6CA1\u5173\u7CFB\u2014\u2014\u5B83\u6CA1\u7559\u672C\u673A\u526F\u672C\u3002`, 8e3);
  watchPantry();
}
async function clearCache() {
  if (!await confirmSheet("\u6E05\u672C\u673A\u7F13\u5B58\uFF1F", "\u653E\u6389\u6240\u6709\u5DF2\u7ECF\u540C\u6B65\u5230 OneDrive \u7684\u672C\u673A\u526F\u672C\uFF08\u76D8\u3001\u5B58\u6863\u3001\u5FEB\u7167\uFF09\uFF1B\u6CA1\u4F20\u4E0A\u53BB\u7684\u3001\u53EA\u5728\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u4E00\u5F8B\u4E0D\u52A8\u3002\u8981\u79BB\u7EBF\u73A9\u7684\u76D8\u4E4B\u540E\u518D\u300C\u7559\u5728\u8FD9\u53F0\u8BBE\u5907\u300D\u3002", "\u6E05")) return;
  try {
    const r = await withBusyNote("\u6B63\u5728\u6E05\u672C\u673A\u7F13\u5B58\u2026", () => clearLocalCopies([PANTRY, jarFolder(PLATFORM_CODE.psp), CRUMBS]));
    banner(`\u653E\u6389\u4E86 ${r.dropped} \u4E2A\u672C\u673A\u526F\u672C\uFF08\u7EA6 ${(r.bytes / 2 ** 20).toFixed(0)} MB\uFF09${r.kept ? `\uFF1B${r.kept} \u4E2A\u6CA1\u52A8\uFF08\u6CA1\u4F20\u4E0A\u53BB / \u53EA\u5728\u672C\u673A / \u4E91\u7AEF\u62FF\u4E0D\u5230\uFF09` : ""}\u3002\u6D41\u5F0F\u6682\u5B58\u533A\u7531\u5E93\u6309\u4E0A\u9650\u81EA\u5DF1\u6E05\u3002`, "warning");
    watchPantry();
  } catch (e) {
    banner(`\u6E05\u7F13\u5B58\u5931\u8D25\uFF1A${errorText(e)}`);
  }
}
function openMirrors() {
  const area = h("textarea", { class: "mirror-list", rows: 4, spellcheck: "false", placeholder: "https://\u6211\u7684\u7535\u8111.xxxx.ts.net" });
  area.value = mirrorUrls().join("\n");
  const status = h("p", { class: "muted" });
  const showLocal = () => {
    status.textContent = localDiscFileCount() ? `\u8FD9\u6B21\u6253\u5F00\u91CC\uFF1A\u7528 ${localDiscFileCount()} \u4E2A\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u76D8\u6587\u4EF6\uFF08\u91CD\u65B0\u8F7D\u5165\u9875\u9762\u5C31\u5FD8\uFF09` : "\u8FD9\u6B21\u6253\u5F00\u91CC\uFF1A\u6CA1\u6311\u672C\u673A\u76D8\u6587\u4EF6";
  };
  showLocal();
  const pick = $("mirror-files");
  pick.onchange = () => {
    const fs = [...pick.files ?? []];
    setLocalDiscFiles(fs);
    logEvent("info", `\u955C\u50CF\uFF1A\u7528\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684 ${fs.length} \u4E2A\u76D8\u6587\u4EF6`);
    showLocal();
  };
  void sheet((done) => [
    h("h2", {}, "\u76D8\u7684\u955C\u50CF"),
    h("p", {}, "\u8BFB\u76D8\u65F6\u5148\u4ECE\u8FD9\u91CC\u62FF\uFF0C\u62FF\u4E0D\u5230 / \u5361\u4F4F / \u5185\u5BB9\u548C\u4E91\u7AEF\u4E0D\u4E00\u6837\u5C31\u56DE\u5230 OneDrive\u3002\u7B2C\u4E00\u7247\u4F1A\u5148\u548C\u4E91\u7AEF\u6BD4\u4E00\u6B21\uFF0C\u4E4B\u540E\u62BD\u6837\u6BD4\uFF1B\u4E0D\u4E00\u6837\u7684\u8FD9\u53F0\u8BBE\u5907\u8FD9\u6B21\u5C31\u4E0D\u7528\u5B83\u3002\u4E0B\u4E00\u6B21\u5F00\u76D8\u751F\u6548\u3002"),
    h("h3", {}, "\u955C\u50CF\u4E3B\u673A\uFF08\u4E00\u884C\u4E00\u4E2A\uFF0C\u53EA\u6536 https\uFF09"),
    area,
    h("p", { class: "muted" }, "\u7535\u8111\u4E0A\uFF1Anode scripts/mirror-serve.ts <OneDrive \u91CC KudsRocket \u7684\u6587\u4EF6\u5939>\uFF0C\u518D tailscale serve --bg 8790\uFF0C\u628A tailscale \u7ED9\u7684 https \u5730\u5740\u586B\u5728\u8FD9\u91CC\u3002\u5730\u5740\u53EA\u8BB0\u5728\u8FD9\u53F0\u8BBE\u5907\u3002"),
    h("h3", {}, "\u8FD9\u53F0\u8BBE\u5907\u4E0A\u7684\u76D8\u6587\u4EF6"),
    h("button", { onclick: () => {
      pick.value = "";
      pick.click();
    } }, "\u6311\u76D8\u6587\u4EF6\u2026"),
    h("button", { onclick: () => {
      setLocalDiscFiles(null);
      showLocal();
    } }, "\u4E0D\u7528\u4E86"),
    status,
    h(
      "div",
      { class: "row" },
      h("button", { onclick: () => done(null) }, "\u53D6\u6D88"),
      h("button", { class: "primary", onclick: () => {
        const { ok, rejected } = parseMirrorList(area.value);
        setMirrorUrls(ok);
        logEvent("info", `\u955C\u50CF\uFF1A\u5730\u5740\u8868 ${ok.length} \u6761${rejected.length ? `\uFF0C\u9000\u56DE ${rejected.length} \u6761` : ""}`);
        if (rejected.length) banner(`\u6CA1\u6536\u4E0B\uFF1A${rejected.map((r) => `${r.line}\uFF08${r.why}\uFF09`).join("\uFF1B")}`, "warning");
        else say(ok.length ? `\u8BB0\u4E0B\u4E86 ${ok.length} \u4E2A\u955C\u50CF\uFF0C\u4E0B\u4E00\u6B21\u5F00\u76D8\u751F\u6548` : "\u955C\u50CF\u5730\u5740\u6E05\u7A7A\u4E86", 4e3);
        done(void 0);
      } }, "\u4FDD\u5B58")
    )
  ]);
}
async function withBusyNote(text, fn) {
  say(text, 6e5);
  try {
    return await fn();
  } finally {
    note("", 1);
  }
}
async function boot() {
  mountIcons();
  mountOverlays();
  $("version").textContent = APP_VERSION;
  $("version").title = "\u70B9\u4E00\u4E0B\uFF1A\u5F3A\u5236\u66F4\u65B0";
  $("version").addEventListener("click", () => {
    forceUpdate().catch((e) => banner(errorText(e)));
  });
  $("force-update").addEventListener("click", () => {
    forceUpdate().catch((e) => banner(errorText(e)));
  });
  $("factory-reset").addEventListener("click", () => {
    runFactoryReset({ busy: !!session }).catch(toolErr);
  });
  if (!await ensureIsolation()) {
    $("library").replaceChildren(h("p", {}, "\u8FD9\u4E2A\u6D4F\u89C8\u5668\u7528\u4E0D\u4E86\uFF08\u8DE8\u6E90\u9694\u79BB\u6CA1\u751F\u6548\uFF09\u3002\u8BF7\u6362\u6700\u65B0\u7248\u7684 Chrome / Edge / Safari\u3002"));
    return;
  }
  try {
    const mig = await migrateLegacyNamespace();
    const did = [...mig.moved.map((x) => `\u642C ${x}`), ...mig.deleted.map((x) => `\u5220 ${x}`), ...mig.blocked.map((x) => `${x} \u88AB\u5360\u7740\u3001\u4E0B\u6B21\u518D\u5220`)];
    if (did.length || legacyKeysMoved()) logEvent("info", `\u8001\u5E93\u540D\u8FC1\u79FB\uFF1A${[...did, legacyKeysMoved() ? `\u672C\u673A\u952E\u642C ${legacyKeysMoved()} \u4E2A` : ""].filter(Boolean).join("\uFF1B")}${mig.passwordReset ? "\uFF1B\u8BB0\u4F4F\u7684\u53E3\u4EE4\u8981\u91CD\u8F93\u4E00\u6B21" : ""}`);
  } catch (e) {
    logEvent("warn", `\u8001\u5E93\u540D\u8FC1\u79FB\u6CA1\u505A\u5B8C\uFF1A${errorText(e)}`);
  }
  softKeys = mountSoftKeys(stageEl, {
    onMask: (m) => session?.setMask("soft", m),
    onLeftStick: (x, y) => {
      softAnalog = { x, y };
    },
    onRightStick: (x, y) => {
      softRight = { x, y };
    },
    onPause: togglePause,
    onFast: (d) => setFast(d)
  });
  softKeys.setVisible(true);
  stageEl.addEventListener("dblclick", (e) => {
    if (!e.target.closest(".softkeys .pk, .softkeys .dpad")) toggleFullscreen();
  });
  addEventListener("keydown", (e) => onKey(e, true));
  const padLine = (g) => `${g.id.slice(0, 60)} \xB7 mapping=${g.mapping || "(\u975E\u6807\u51C6)"} \xB7 ${g.buttons.length} \u952E ${g.axes.length} \u8F74`;
  addEventListener("gamepadconnected", (e) => logEvent("info", `\u624B\u67C4\u63A5\u5165\uFF08Gamepad API\uFF09\uFF1A${padLine(e.gamepad)}`));
  addEventListener("gamepaddisconnected", (e) => logEvent("info", `\u624B\u67C4\u62D4\u51FA\uFF08Gamepad API\uFF09\uFF1A${padLine(e.gamepad)}`));
  addEventListener("keyup", (e) => onKey(e, false));
  if (questAdvisor) addEventListener("wheel", () => {
    if (session) questFeed({ kind: "wheel", now: performance.now() });
  }, { passive: true });
  addEventListener("blur", () => session?.setMask("keyboard", 0));
  subscribe((s) => {
    syncState = s;
    if (!session) return;
    for (const id of ["snapshot-btn", "fs-snapshot-btn"]) document.getElementById(id)?.replaceWith(snapshotButton(id));
  });
  for (const t of ["gesturestart", "gesturechange"]) document.addEventListener(t, (e) => e.preventDefault(), { passive: false });
  const local2 = canWriteLocalFiles();
  for (const id of ["make-wafter", "unwrap-wafter"]) $(id).disabled = !local2;
  $("tools-hint").hidden = local2;
  $("make-wafter").addEventListener("click", () => {
    makeWafer().catch(toolErr);
  });
  const uploadInput = $("upload-file");
  $("upload-wafter").addEventListener("click", () => {
    uploadInput.value = "";
    uploadInput.click();
  });
  uploadInput.addEventListener("change", () => {
    const f = uploadInput.files?.[0];
    if (f) uploadWafer(f).catch(toolErr);
  });
  $("clear-cache").addEventListener("click", () => {
    clearCache().catch(toolErr);
  });
  $("mirrors").addEventListener("click", openMirrors);
  const capSel = $("staging-cap");
  for (const c of STAGING_CAP_CHOICES) capSel.append(h("option", { value: String(c.bytes) }, c.label));
  capSel.value = String(stagingCapBytes());
  capSel.addEventListener("change", () => {
    setStagingCapBytes(Number(capSel.value));
    banner("\u6682\u5B58\u533A\u4E0A\u9650\u6539\u4E86\uFF0C\u91CD\u65B0\u8F7D\u5165\u9875\u9762\u540E\u751F\u6548\u3002", "warning");
  });
  $("unwrap-wafter").addEventListener("click", () => {
    unwrapWafer().catch(toolErr);
  });
  $("save-manager").addEventListener("click", () => {
    openSaveManager(saveManagerContext).catch((e) => banner(errorText(e)));
  });
  $("bins").addEventListener("click", () => {
    openBins(saveManagerContext.titleByKey).catch((e) => banner(errorText(e)));
  });
  $("pack-saves").addEventListener("click", () => {
    runImportSaves().catch(toolErr);
  });
  $("unpack-saves").addEventListener("click", () => {
    unpackSaves().catch(toolErr);
  });
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
  recallPassword().then(async (pw) => {
    if (!pw) return;
    setPassword(pw);
    remembered = true;
    rememberedTill = await rememberedUntil().catch(() => null);
    renderAccount();
    unlockTitles().catch(() => {
    });
  }, (e) => console.warn("[remember]", e));
  watchPantry();
  mount({ onClick: () => {
    openSaveManager(saveManagerContext).catch((e) => banner(errorText(e)));
  }, signedIn: () => auth.isSignedIn() });
  const pendingBy = /* @__PURE__ */ new Map();
  const pendingWatch = /* @__PURE__ */ new Map();
  const countPending = (folder) => {
    pendingWatch.get(folder)?.();
    pendingWatch.set(folder, store2.files.watchFolder(folder, (snap) => {
      const newer = snap.items.filter((it) => it.syncState === "newer-on-cloud");
      pendingBy.set(folder, {
        needsYou: snap.items.filter((it) => syncClass(it.syncState) === "needs-you").length,
        waiting: snap.items.filter((it) => syncClass(it.syncState) === "waiting" && it.syncState !== "newer-on-cloud").length,
        newer: newer.length
      });
      const sum = [...pendingBy.values()].reduce((a, b) => ({ needsYou: a.needsYou + b.needsYou, waiting: a.waiting + b.waiting, newer: a.newer + b.newer }), { needsYou: 0, waiting: 0, newer: 0 });
      setPending(sum);
      for (const it of newer) if (folder === CRUMBS || !session) dropStaleLocal(it.identifier).catch((e) => console.warn("[stale]", e));
    }));
  };
  const recount = () => {
    countPending(jarFolder(PLATFORM_CODE.psp));
    countPending(CRUMBS);
    countPending(TINS);
  };
  recount();
  $("refresh").addEventListener("click", () => watchPantry());
  const refocus = () => {
    if (!session && auth.isSignedIn() && document.visibilityState === "visible") watchPantry();
  };
  document.addEventListener("visibilitychange", refocus);
  addEventListener("focus", refocus);
  renderAccount();
  renderLibrary();
  addEventListener("beforeunload", (e) => {
    if (inFlight()) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
  let pushing = null;
  const pushDirty = () => {
    if (pushing) return pushing;
    if (inFlightFresh() || !auth.isSignedIn() || !navigator.onLine) return Promise.resolve();
    pushing = activity("\u6B63\u5728\u4F20\u6CA1\u4F20\u4E0A\u53BB\u7684\u2026", () => store2.files.dirty.pushAll()).then((r) => {
      if (r.pushed || r.failed.length) logEvent(r.failed.length ? "warn" : "info", `\u7EED\u63A8\uFF1A\u4F20\u4E0A\u53BB ${r.pushed} \u4E2A${r.failed.length ? `\uFF0C\u6CA1\u4F20\u4E0A\u53BB ${r.failed.length} \u4E2A\uFF08\u79BB\u7EBF / \u51B2\u7A81\uFF1A\u51B2\u7A81\u7684\u5728\u5B58\u6863\u7BA1\u7406\u300C\u8981\u4F60\u5904\u7406\u7684\u300D\u91CC\uFF09` : ""}`);
      snaps?.afterPush();
    }).catch((e) => {
      console.warn("[pushAll]", e);
    }).finally(() => {
      pushing = null;
      recount();
    });
    return pushing;
  };
  pushDirtyNow = pushDirty;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") pushDirty();
  });
  addEventListener("online", pushDirty);
  let retryTimer = 0;
  onRetryWanted(() => {
    clearTimeout(retryTimer);
    retryTimer = window.setTimeout(pushDirty, 15e3);
  });
  setInterval(() => {
    if ([...pendingBy.values()].some((n) => n.needsYou + n.waiting > 0)) void pushDirty();
  }, 45e3);
  let askedPush = false;
  const askThenPush = async () => {
    if (askedPush) {
      void pushDirty();
      return;
    }
    askedPush = true;
    let n = 0;
    try {
      n = await store2.files.dirty.count();
    } catch {
    }
    if (n === 0) return;
    const go = await confirmSheet("\u6709\u8FD8\u6CA1\u4F20\u4E0A\u53BB\u7684", `\u8FD9\u53F0\u8BBE\u5907\u4E0A\u6709 ${n} \u4EFD\u8FD8\u6CA1\u4F20\u4E0A\u53BB\uFF08\u5FEB\u7167 / \u5B58\u6863\uFF09\u3002\u73B0\u5728\u4F20\u4E0A\u53BB\uFF1F\u4E0D\u4F20\u7684\u8BDD\u7559\u5728\u8FD9\u53F0\u8BBE\u5907\uFF0C\u56DE\u524D\u53F0 / \u4E0B\u6B21\u5B58\u6863\u65F6\u4F1A\u8DDF\u7740\u4E00\u8D77\u4F20\u3002`, "\u4F20\u4E0A\u53BB", "\u5148\u4E0D\u4F20");
    logEvent("info", go ? `\u767B\u5F55\u540E\uFF1A${n} \u4EFD\u8FD8\u6CA1\u4F20\u4E0A\u53BB\uFF0C\u4F20` : `\u767B\u5F55\u540E\uFF1A${n} \u4EFD\u8FD8\u6CA1\u4F20\u4E0A\u53BB\uFF0C\u5148\u4E0D\u4F20`);
    if (go) void pushDirty();
  };
  auth.onAuthChanged(() => {
    renderAccount();
    renderLibrary();
    if (auth.isSignedIn()) {
      for (const f of [PANTRY, CRUMBS, JARS]) store2.files.ensureFolder(f).catch((e) => console.warn("[ensureFolder]", f, e));
      store2.files.drainOfflineQueue().catch((e) => console.warn("[drain]", e));
      void askThenPush();
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
  discOpens: () => discOpens,
  // 核报上来的「打开了盘上哪个文件」次数（P0½ 第三刀的无头验证）
  async press(name, ms = 120) {
    if (!session) return;
    session.setMask("test", bit(name));
    await new Promise((r) => setTimeout(r, ms));
    session.setMask("test", 0);
  },
  inputMask: () => session ? session.inputMask() : 0,
  snapshot: async () => session ? (await session.snapshot()).state.length : 0,
  /** 手柄这一路此刻按着的 PSP 键位（测试：按住 RT 时不该有 R）。 */
  padMask: () => session?.getMask("pad") ?? 0,
  /** 卡带核的电池存档内存大小（-1 = 这个核没有）。 */
  saveRam: () => session?.saveRam()?.bytes.length ?? -1,
  saveRamHead: (n = 32) => {
    const b = session?.saveRam()?.bytes;
    return b ? Array.from(b.subarray(0, n), (x) => x.toString(16).padStart(2, "0")).join("") : null;
  },
  importSaves: () => runImportSaves(),
  /** GL 诊断自测：核在下一趟抽查帧里故意发一个非法调用（要用 ?glcheck=1 开盘）。 */
  glSelfTest: () => session?.core?._kr_glcheck_selftest?.(),
  /** 开发期：把这一刻存成 private/states/<name>（经开发服务器 POST /__dev/state/；之后 ?state=<name> 从这里起跑）。added 20261017 by Claude Opus 5.5 */
  devSave: async (name) => {
    if (!session) return 0;
    const st = await session.snapshot();
    const r = await fetch(`/__dev/state/${encodeURIComponent(name)}`, { method: "POST", body: st.state });
    if (!r.ok) throw new Error(`server ${r.status}`);
    return st.state.length;
  },
  restoreFromServer: restoreFromDevServer,
  started: () => session !== null,
  guide: () => guide.state(),
  toggleGuide: () => guide.toggle(),
  pause: (p) => {
    session?.setPaused(p);
    renderToolbar();
  },
  // 只在本机开发服务器上有：自动快照、测试口令（测试一律用假口令）
  ...DEV_SERVER ? {
    autoSnapshot: () => snaps?.auto(),
    setTestPassword: (p) => setPassword(p),
    slots: () => snaps?.slots,
    askPassword: () => ensurePassword("\u6D4B\u8BD5"),
    hasPassword: () => getPassword() !== null,
    remembered: () => hasRememberedPassword(),
    openStallSheet: () => openStallSheet(),
    log: () => dumpLog(),
    debugLoseGl: () => session?.debugLoseGl() ?? false,
    history: () => snaps?.history().map((h2) => h2.n) ?? [],
    setHistoryMinAge: (ms) => setHistoryMinAgeForTest(ms),
    /** 库的全屏遮罩跑 ms 毫秒（验遮罩开着时游戏暂停、关了恢复；W-42）。 */
    storeOverlay: (ms) => storeUI.busy("\u6D4B\u8BD5\u906E\u7F69", () => new Promise((r) => setTimeout(r, ms)), "trash.purging"),
    rebuildAudio: () => rebuildAudio("\u6D4B\u8BD5"),
    async titleCacheTest() {
      const pw = getPassword();
      if (!pw) return "no password";
      const card = { title: "\u6D4B\u8BD5\u76D8", fp: { k: "wafer", id: "TEST00001", v: "1.00", size: 123 }, key: "k" };
      await saveTitleCard(pw, "pantry/test.wafter", 123, card);
      const got = (await loadTitleCards(pw)).get("pantry/test.wafter");
      const other = (await loadTitleCards("other-password")).get("pantry/test.wafter");
      return got?.card.title === "\u6D4B\u8BD5\u76D8" && got.size === 123 && !other ? "ok" : `bad: ${JSON.stringify(got)} / ${JSON.stringify(other)}`;
    },
    resumeNewest: () => resumeNewest().then((s) => s ? `${s.kind}${s.n}` : null),
    // 探针：同一局里反复「存 → 恢复」n 次，每步报耗时和帧数（查「恢复两次之后核不应答」）
    async stateCycle(n) {
      const out = [];
      for (let i = 0; i < n && session; i++) {
        const t0 = performance.now();
        try {
          const st = await session.snapshot();
          const t1 = performance.now();
          await session.restore(st.state);
          out.push(`#${i} snap ${(t1 - t0).toFixed(0)}ms restore ${(performance.now() - t1).toFixed(0)}ms frames=${session.stats().frames}`);
        } catch (e) {
          out.push(`#${i} FAILED ${errorText(e)} frames=${session.stats().frames}`);
          break;
        }
        await new Promise((r) => setTimeout(r, 300));
      }
      return out;
    }
  } : {},
  speed: (x) => {
    session?.setSpeed(x);
    renderToolbar();
  }
};
boot().catch((e) => {
  console.error(e);
  banner(`\u542F\u52A8\u5931\u8D25\uFF1A${errorText(e)}`);
});
//# sourceMappingURL=kudsrocket-4616612bb613.mjs.map
