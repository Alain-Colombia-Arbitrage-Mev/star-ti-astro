import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { seoData } from './src/data/seo';

// Debe coincidir con BASE_URL en src/data/seo.ts. Se importa seoData por ruta
// relativa (seo.ts e iso27001Landing.ts son datos puros sin alias), pero SITE
// se mantiene como literal porque `site` se resuelve antes de cargar el modulo.
const SITE = 'https://star-ti.com';

// lastmod del sitemap derivado del dateModified/datePublished del JSON-LD de
// cada pagina: fuente unica de verdad en seo.ts. Solo las paginas con fecha
// real (posts del blog, informe) lo reciben; el resto se omite a proposito.
const LASTMOD = new Map<string, string>();
for (const entry of Object.values(seoData)) {
  const jsonLd = entry.jsonLd as { dateModified?: string; datePublished?: string } | undefined;
  const date = jsonLd?.dateModified ?? jsonLd?.datePublished;
  if (date && entry.canonical) LASTMOD.set(entry.canonical, date);
}
// El indice /blog/ no tiene fecha propia: hereda la mas reciente de sus posts.
const blogDates = [...LASTMOD.entries()]
  .filter(([url]) => url.includes('/blog/'))
  .map(([, date]) => date)
  .sort();
if (blogDates.length) LASTMOD.set(`${SITE}/blog/`, blogDates[blogDates.length - 1]);

// Landings comerciales actualizadas recientemente que no tienen fecha propia en
// JSON-LD. Mantener estas fechas atadas a cambios reales de contenido.
const COMMERCIAL_LASTMOD = [
  ['/bitdefender/', '2026-08-18'],
  ['/iso-27001/', '2026-08-18'],
  ['/kaspersky/', '2026-08-18'],
  ['/mejores-empresas-consultoria-iso-27001-colombia/', '2026-08-18'],
  ['/miami/', '2026-08-18'],
  ['/miami/contacto/', '2026-08-18'],
  ['/seguridad-informatica-empresas/', '2026-08-18'],
] as const;
for (const [path, date] of COMMERCIAL_LASTMOD) LASTMOD.set(`${SITE}${path}`, date);

// Clusters hreflang: deben coincidir con HREFLANG_HOME/HREFLANG_CONTACTO en
// src/data/seo.ts (que los emite en el <head>). Aqui se inyectan tambien en el
// sitemap como <xhtml:link>. La opcion `i18n` nativa no sirve porque exige que
// el locale sea un segmento de ruta (/es-CO/...), y este sitio usa /venezuela/,
// /miami/. Por eso se construyen los `links` a mano en serialize().
const HREFLANG_HOME = [
  { lang: 'es-CO', url: `${SITE}/` },
  { lang: 'es-VE', url: `${SITE}/venezuela/` },
  { lang: 'en-US', url: `${SITE}/miami/` },
  { lang: 'x-default', url: `${SITE}/` },
];
const HREFLANG_CONTACTO = [
  { lang: 'es-CO', url: `${SITE}/contacto/` },
  { lang: 'es-VE', url: `${SITE}/venezuela/contacto/` },
  { lang: 'en-US', url: `${SITE}/miami/contacto/` },
  { lang: 'x-default', url: `${SITE}/contacto/` },
];
const HOME_CLUSTER = new Set(HREFLANG_HOME.filter((l) => l.lang !== 'x-default').map((l) => l.url));
const CONTACTO_CLUSTER = new Set(HREFLANG_CONTACTO.filter((l) => l.lang !== 'x-default').map((l) => l.url));

export default defineConfig({
  site: SITE,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias/') && !page.includes('/404'),
      serialize: (item) => {
        if (item.url === `${SITE}/`) {
          item.changefreq = 'weekly' as const;
          item.priority = 1.0;
        } else if (item.url.includes('/blog/')) {
          item.changefreq = 'monthly' as const;
          item.priority = 0.7;
        } else if (item.url.includes('/contacto') || item.url.includes('/terminos') || item.url.includes('/privacidad') || item.url.includes('/politica-de-proteccion')) {
          item.changefreq = 'yearly' as const;
          item.priority = 0.3;
        } else {
          item.changefreq = 'monthly' as const;
          item.priority = 0.8;
        }
        // Inyecta las alternativas hreflang reales en el sitemap (<xhtml:link>).
        if (HOME_CLUSTER.has(item.url)) {
          item.links = HREFLANG_HOME;
        } else if (CONTACTO_CLUSTER.has(item.url)) {
          item.links = HREFLANG_CONTACTO;
        }
        // lastmod solo en paginas con fecha real (blog, informe).
        const lastmod = LASTMOD.get(item.url);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
