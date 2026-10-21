// Despues de `astro build`: calcula un hash por pagina del sitemap, lo compara con
// el manifiesto de la version publicada y deja en dist/indexnow-pending.json las URLs
// que cambiaron. El cron del worker se las avisa a Bing (IndexNow) una vez publicada.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const SITE = "https://star-ti.com";
const DIST = new URL("../dist/", import.meta.url);

const sitemap = readFileSync(new URL("sitemap-0.xml", DIST), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const hashes = {};
for (const url of urls) {
  const path = url.replace(SITE, "").replace(/\/$/, "") + "/index.html";
  const file = new URL("." + path, DIST);
  if (!existsSync(file)) continue;
  // Las rutas de /_astro/ cambian con cualquier ajuste de CSS; no cuentan como cambio de la pagina.
  const html = readFileSync(file, "utf8").replace(/\/_astro\/[^"')\s]+/g, "");
  hashes[url] = createHash("sha1").update(html).digest("hex");
}

let previous = null;
let previousPending = null;
try {
  const res = await fetch(`${SITE}/indexnow-manifest.json`, { headers: { "cache-control": "no-cache" } });
  if (res.ok) previous = await res.json();
  else if (res.status !== 404) throw new Error(`HTTP ${res.status}`);
  const pend = await fetch(`${SITE}/indexnow-pending.json`, { headers: { "cache-control": "no-cache" } });
  if (pend.ok) previousPending = await pend.json();
} catch (err) {
  // Sin el manifiesto anterior no se puede saber que cambio: no se avisa nada en este build.
  console.warn(`[indexnow] no se pudo leer el manifiesto publicado (${err.message}); sin avisos en este build`);
  previous = { hashes };
}

const now = Date.now();
const changed = new Set(
  previous ? urls.filter((u) => hashes[u] && previous.hashes?.[u] !== hashes[u]) : urls.filter((u) => hashes[u]),
);
// Si hubo otro build hace poco y el cron aun no alcanzo a avisar, se conservan sus URLs.
if (previousPending && now - previousPending.generated < 2 * 60 * 60 * 1000) {
  for (const u of previousPending.urls || []) if (hashes[u]) changed.add(u);
}

writeFileSync(new URL("indexnow-manifest.json", DIST), JSON.stringify({ generated: now, hashes }));
writeFileSync(new URL("indexnow-pending.json", DIST), JSON.stringify({ generated: now, urls: [...changed] }));
console.log(`[indexnow] ${changed.size} URL(s) para avisar a Bing de ${Object.keys(hashes).length} paginas`);
