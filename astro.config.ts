import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://starsolution.com.co',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es-CO',
        locales: {
          'es-CO': 'es-CO',
          'es-VE': 'es-VE',
          'en-US': 'en-US',
        },
      },
      filter: (page) => !page.includes('/gracias/') && !page.includes('/404'),
      serialize: (item) => {
        item.lastmod = new Date('2026-03-19');
        if (item.url === 'https://starsolution.com.co/') {
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
        return item;
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
