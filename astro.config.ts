import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Debe coincidir con BASE_URL en src/data/seo.ts. No se importa de alli porque
// este fichero de configuracion se evalua antes que los alias de tsconfig.
const SITE = 'https://star-ti.com';

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
        return item;
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
