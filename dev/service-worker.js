// service-worker.js —— KudsRocket 的离线壳 + 跨源隔离头。created 20261014 by Claude Opus 5.5（离线壳照 MoonSinger service-worker.js）
//
// 跨源隔离：多线程核要 SharedArrayBuffer → 页面必须 crossOriginIsolated。GitHub Pages 设不了响应头，
//   这里给本站的每个响应补上 COOP / COEP / CORP（做法同开源的 coi-serviceworker）。第一次打开时页面还没被本 SW 管，
//   main.ts 等 SW 接管后自动重新载入一次。
// 缓存：
//   - 名字 = "kudsrocket-<主 bundle 哈希>"；新版本 = 新缓存名，activate 只删自己前缀的旧缓存（家规：同域名兄弟和 pwa-models 不碰）。
//   - dist/ 下的文件名都带内容哈希（主 bundle、核目录 core-<哈希>/）= 永不变 → 先看缓存；第一次用到时才下载、存进缓存（核约 20 MB，不预缓存）。
//   - 其余（index.html、styles.css …）：prod 先看缓存、后台核对（变了提示「有新版本」）；dev（路径含 /dev/ 或本机）先走网络。
//   - 不缓存：别的域名（OneDrive / 登录）、本机开发服务器的 /__dev/。

const PREFIX = "kudsrocket-";
const STATIC_PRECACHE = ["./", "./index.html", "./styles.css", "./audio-worklet.js", "./manifest.webmanifest", "./vendor/msal/msal-browser.min.js"];
const SCOPE_PATH = self.location.pathname.replace(/[^/]*$/, "");
const IS_DEV = SCOPE_PATH.includes("/dev/") || /^(127\.0\.0\.1|localhost)$/.test(self.location.hostname);

let CACHE_NAME = PREFIX + "boot";
// SW 空闲被杀后重启，顶层重跑：从 caches.keys() 找回自己那个缓存（家族级坑）
async function cacheName() {
  if (CACHE_NAME !== PREFIX + "boot") return CACHE_NAME;
  const keys = (await caches.keys()).filter((k) => k.startsWith(PREFIX) && k !== PREFIX + "boot");
  if (keys.length) CACHE_NAME = keys[keys.length - 1];
  return CACHE_NAME;
}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const res = await fetch("./index.html", { cache: "no-store" });
    const html = await res.text();
    const bundle = html.match(/src="(\.\/dist\/kudsrocket-[a-z0-9]+\.mjs)"/i)?.[1];
    CACHE_NAME = PREFIX + (bundle?.match(/kudsrocket-([a-z0-9]+)\.mjs/i)?.[1] ?? "dev");
    const cache = await caches.open(CACHE_NAME);
    await Promise.all([...STATIC_PRECACHE, ...(bundle ? [bundle] : [])].map((u) =>
      fetch(u, { cache: "no-store" }).then((r) => (r.ok ? cache.put(u, r) : null)).catch((e) => console.warn("[SW] precache miss", u, e.message))));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keep = await cacheName();
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== keep).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

function isolate(resp) {
  if (!resp || resp.type === "opaqueredirect" || resp.status === 0 || resp.status < 200 || resp.status > 599) return resp;
  const h = new Headers(resp.headers);
  h.set("Cross-Origin-Opener-Policy", "same-origin");
  h.set("Cross-Origin-Embedder-Policy", "require-corp");
  h.set("Cross-Origin-Resource-Policy", "same-origin");
  return new Response(resp.body, { status: resp.status, statusText: resp.statusText, headers: h });
}

let updateAnnounced = false;
async function notifyUpdate() {
  if (updateAnnounced) return;
  updateAnnounced = true;
  for (const c of await self.clients.matchAll({ includeUncontrolled: true })) c.postMessage({ type: "asset-updated" });
}

async function immutable(req) {
  const cache = await caches.open(await cacheName());
  const hit = await cache.match(req);
  if (hit) return hit;
  const resp = await fetch(req);
  if (resp.ok) cache.put(req, resp.clone()).catch(() => {});
  return resp;
}

async function cacheFirst(req) {
  const cache = await caches.open(await cacheName());
  const hit = await cache.match(req, { ignoreSearch: true });
  const net = fetch(req).then((resp) => {
    if (resp.ok) {
      if (hit) {
        const a = hit.headers.get("etag"), b = resp.headers.get("etag");
        if (a && b && a !== b) notifyUpdate();
      }
      cache.put(req, resp.clone()).catch(() => {});
    }
    return resp;
  }).catch(() => null);
  if (hit) return hit;
  return (await net) ?? fallback(req, cache);
}

async function networkFirst(req) {
  const cache = await caches.open(await cacheName());
  try {
    const resp = await fetch(req);
    if (resp.ok) cache.put(req, resp.clone()).catch(() => {});
    return resp;
  } catch {
    return (await cache.match(req, { ignoreSearch: true })) ?? fallback(req, cache);
  }
}

async function fallback(req, cache) {
  if (req.mode === "navigate") { const f = await cache.match("./index.html"); if (f) return f; }
  return new Response("offline & not cached", { status: 503 });
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(SCOPE_PATH)) return;
  if (!SCOPE_PATH.includes("/dev/") && url.pathname.includes("/dev/")) return; // prod 的 SW 不管 /dev/
  if (url.pathname.includes("/__dev/") || url.pathname.includes("/pwa-models/")) return;
  const p = url.pathname.includes("/dist/") ? immutable(req) : IS_DEV ? networkFirst(req) : cacheFirst(req);
  event.respondWith(p.then(isolate));
});
