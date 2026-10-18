// Datos del /informe-ciberseguridad-colombia-2026/. Corregido el 18-oct-2026 a pedido de
// George: el informe original tenia cifras sin fuente (73%, USD 2,3 M, N=3.247, etc.).
// Regla: toda cifra lleva su fuente publica; lo que viene de Star es cualitativo
// ("lo que vemos en campo") y nunca se presenta como estadistica. Verificado en prensa
// y resumenes de los reportes el 18-oct-2026; revisar al publicar cada edicion nueva.

export interface InformeSource {
  id: string;
  label: string;
  url: string;
}

export const INFORME_SOURCES: InformeSource[] = [
  { id: 'dijin-2025', label: 'Policía Nacional (DIJIN): balance de delitos informáticos 2025', url: 'https://x.com/DIJINPolicia/status/2012936116719042636' },
  { id: 'policia-h1-2026', label: 'El Nuevo Siglo: delitos informáticos aumentaron 35 % en el primer semestre de 2026 (boletín de la Policía)', url: 'https://www.elnuevosiglo.com.co/nacion/delitos-informaticos-aumentaron-un-35-en-el-primer-semestre-de-2026' },
  { id: 'ibm-2026', label: 'IBM: Cost of a Data Breach Report 2026', url: 'https://www.ibm.com/reports/data-breach' },
  { id: 'dbir-2026', label: 'Verizon: 2026 Data Breach Investigations Report', url: 'https://www.verizon.com/business/resources/reports/dbir/' },
  { id: 'ic3-2025', label: 'FBI: Internet Crime Report 2025 (IC3)', url: 'https://www.ic3.gov/AnnualReport/Reports' },
  { id: 'mintic-ifx', label: 'MinTIC: comunicado sobre el ataque a IFX Networks (septiembre de 2023)', url: 'https://www.mintic.gov.co/portal/715/w3-article-278831.html' },
  { id: 'sfc-007', label: 'Superintendencia Financiera: Circular Externa 007 de 2018', url: 'https://www.superfinanciera.gov.co/publicaciones/10096745/normativa/normativa-general/circulares-externas-cartas-circulares-y-resoluciones-desde-el-ano-/circulares-externas/circulares-externas--10096745/' },
  { id: 'ley-1581', label: 'Ley 1581 de 2012 (Secretaría del Senado)', url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html' },
  { id: 'smmlv-2026', label: 'Decreto 1469 de 2025: salario mínimo 2026 ($1.750.905)', url: 'https://www.cafam.com.co/noticias/salario-minimo-2026' },
];

export const informeFaqs = [
  {
    q: '¿De dónde provienen los datos del informe?',
    a: 'Todas las cifras provienen de fuentes públicas citadas: Policía Nacional (DIJIN), IBM Cost of a Data Breach 2026, Verizon DBIR 2026, el informe IC3 2025 del FBI y comunicados de MinTIC y la Superintendencia Financiera. Las observaciones de Star Solutions TI son cualitativas, a partir de la experiencia con más de 1.150 empresas atendidas desde 2016, y no se presentan como estadísticas.',
  },
  {
    q: '¿Cuántos delitos informáticos se denunciaron en Colombia en 2025?',
    a: 'Según la Policía Nacional (DIJIN), en 2025 se registraron 62.299 denuncias por delitos informáticos. El hurto por medios informáticos, el acceso abusivo a sistemas y la violación de datos personales concentraron el 88 % de los casos. En el primer semestre de 2026 las denuncias subieron un 35 % frente al mismo periodo de 2025.',
  },
  {
    q: '¿Cuánto cuesta una brecha de datos?',
    a: 'Según el informe Cost of a Data Breach 2026 de IBM, el costo promedio mundial de una brecha de datos llegó a USD 4,99 millones, y las organizaciones tardaron en promedio 247 días en identificarla y contenerla.',
  },
  {
    q: '¿Puedo citar este informe?',
    a: 'Sí. Puede citarlo como "Star Solutions TI S.A.S. – Informe de Ciberseguridad Empresarial Colombia 2026, star-ti.com". Para las cifras, le recomendamos citar también la fuente original que indicamos junto a cada dato.',
  },
  {
    q: '¿Cómo solicito un diagnóstico de ciberseguridad?',
    a: 'Puede solicitarlo sin costo en la página de contacto de star-ti.com, escribiendo a contacto@star-ti.com o llamando al +57 300 701 0017. Revisamos su exposición externa y le entregamos prioridades de remediación.',
  },
];
