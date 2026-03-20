const BASE = 'https://starsolution.com.co';
const NOW = new Date().toISOString().split('T')[0];

interface SitemapEntry {
  url: string;
  priority: number;
  changefreq: string;
  lastmod?: string;
}

const pages: SitemapEntry[] = [
  // Homepage - highest priority
  { url: '/', priority: 1.0, changefreq: 'weekly' },

  // STAR PROTECTION - core products (high priority, revenue drivers)
  { url: '/bitdefender/', priority: 0.9, changefreq: 'monthly' },
  { url: '/kaspersky/', priority: 0.9, changefreq: 'monthly' },
  { url: '/hornet-security/', priority: 0.9, changefreq: 'monthly' },
  { url: '/proofpoint/', priority: 0.9, changefreq: 'monthly' },

  // STAR INSPECTION - diagnostic & visibility
  { url: '/enthec/', priority: 0.9, changefreq: 'monthly' },
  { url: '/vicarius/', priority: 0.9, changefreq: 'monthly' },
  { url: '/stellar-cyber/', priority: 0.9, changefreq: 'monthly' },
  { url: '/hacking-etico/', priority: 0.9, changefreq: 'monthly' },
  { url: '/rthreat-bogota-colombia/', priority: 0.8, changefreq: 'monthly' },

  // STAR COMPLIANCE - consulting & governance
  { url: '/iso27001/', priority: 0.9, changefreq: 'monthly' },
  { url: '/sealpath/', priority: 0.9, changefreq: 'monthly' },
  { url: '/netwrix/', priority: 0.9, changefreq: 'monthly' },
  { url: '/black-duck/', priority: 0.8, changefreq: 'monthly' },
  { url: '/dlp-prevencion-perdida-datos/', priority: 0.7, changefreq: 'monthly' },

  // Comparison / landing pages + Reports
  { url: '/antivirus-empresas/', priority: 0.8, changefreq: 'monthly' },
  { url: '/informe-ciberseguridad-colombia-2026/', priority: 0.9, changefreq: 'quarterly', lastmod: '2026-01-15' },

  // Infrastructure services
  { url: '/teamviewer/', priority: 0.7, changefreq: 'monthly' },
  { url: '/anydesk/', priority: 0.7, changefreq: 'monthly' },
  { url: '/soti-mdm/', priority: 0.7, changefreq: 'monthly' },
  { url: '/cableado-estructurado/', priority: 0.7, changefreq: 'monthly' },
  { url: '/equipos-computo/', priority: 0.7, changefreq: 'monthly' },
  { url: '/brother/', priority: 0.6, changefreq: 'monthly' },

  // Company pages
  { url: '/sobre-nosotros/', priority: 0.7, changefreq: 'monthly' },
  { url: '/contacto/', priority: 0.8, changefreq: 'monthly' },

  // Regional pages
  { url: '/venezuela/', priority: 0.8, changefreq: 'monthly' },
  { url: '/venezuela/contacto/', priority: 0.7, changefreq: 'monthly' },
  { url: '/miami/', priority: 0.8, changefreq: 'monthly' },
  { url: '/miami/contacto/', priority: 0.7, changefreq: 'monthly' },

  // Legal pages (low priority but needed)
  { url: '/terminos/', priority: 0.3, changefreq: 'yearly' },
  { url: '/privacidad/', priority: 0.3, changefreq: 'yearly' },
  { url: '/politica-de-proteccion-de-datos-personales/', priority: 0.3, changefreq: 'yearly' },
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p.url}</loc>
    <lastmod>${p.lastmod || NOW}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
