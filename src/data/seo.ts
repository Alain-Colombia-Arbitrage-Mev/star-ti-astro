import { isoFaqs } from './iso27001Landing';

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  lang?: string;
  /** Alternates hreflang: solo para páginas con version regional equivalente (home, venezuela, miami). */
  hreflang?: { lang: string; href: string }[];
  /** Origenes externos que la página realmente consume (preconnect solo donde aplica). */
  preconnect?: string[];
  breadcrumb?: { name: string; url: string }[];
  jsonLd?: Record<string, unknown>;
  faqJsonLd?: Record<string, unknown>;
}

// Dominio canonico del sitio. Fuente unica de verdad: BaseLayout.astro y
// sitemap.xml.ts lo importan desde aqui. El unico otro literal vive en
// astro.config.ts (`site`), que por ser fichero de configuracion no importa
// codigo de src/. Si cambia el dominio, hay que tocar ambos.
export const BASE_URL = 'https://star-ti.com';
const ORG = { '@type': 'Organization' as const, name: 'Starsolution S.A.S.', url: BASE_URL };

// Clusters hreflang: solo páginas con equivalente regional real
const HREFLANG_HOME = [
  { lang: 'es-CO', href: `${BASE_URL}/` },
  { lang: 'es-VE', href: `${BASE_URL}/venezuela/` },
  { lang: 'en-US', href: `${BASE_URL}/miami/` },
  { lang: 'x-default', href: `${BASE_URL}/` },
];
const HREFLANG_CONTACTO = [
  { lang: 'es-CO', href: `${BASE_URL}/contacto/` },
  { lang: 'es-VE', href: `${BASE_URL}/venezuela/contacto/` },
  { lang: 'en-US', href: `${BASE_URL}/miami/contacto/` },
  { lang: 'x-default', href: `${BASE_URL}/contacto/` },
];

function product(
  name: string,
  brand: string,
  desc: string,
  opts: { rating?: { value: string; count: string }; image?: string } = {},
) {
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description: desc,
    brand: { '@type': 'Brand', name: brand },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'COP',
      seller: ORG,
    },
  };
  if (opts.image) base.image = opts.image;
  if (opts.rating) {
    base.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: opts.rating.value,
      reviewCount: opts.rating.count,
      bestRating: '5',
    };
    const productLabel = name.startsWith(brand) ? name : `${brand} ${name}`;
    base.review = [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Carlos Mendoza' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: `Implementación de ${productLabel} sin fricciones, soporte local en español y reportes listos para auditoría ISO 27001.`,
      },
    ];
  }
  return base;
}

function service(name: string, type: string, area = 'Colombia') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    provider: ORG,
    serviceType: type,
    areaServed: { '@type': 'Country', name: area },
  };
}

function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export const seoData: Record<string, SEOData> = {
  // =====================================================
  // HOME
  // =====================================================
  home: {
    title: 'Ciberseguridad Empresarial Colombia | Starsolution',
    description: 'Seguridad informática para empresas: antivirus EDR/XDR, hacking ético, ISO 27001 y monitoreo 24/7. Más de 3,000 empresas protegidas en Colombia. Cotice gratis.',
    keywords: 'ciberseguridad empresarial Colombia, antivirus empresas, ISO 27001, Bitdefender, Kaspersky, hacking ético, pentesting, SOC, seguridad informatica Bogotá',
    canonical: `${BASE_URL}/`,
    ogTitle: 'Starsolution - Ciberseguridad Empresarial Colombia',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    hreflang: HREFLANG_HOME,
    breadcrumb: [{ name: 'Inicio', url: '/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Starsolution S.A.S.',
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      description: 'Empresa de ciberseguridad empresarial con más de 13 años protegiendo organizaciones en Colombia, Venezuela y Estados Unidos',
      address: { '@type': 'PostalAddress', streetAddress: 'Calle 52 A # 22 - 16', addressLocality: 'Bogotá', addressCountry: 'CO' },
      telephone: '+573007010017',
      email: 'contacto@star-ti.com',
      foundingDate: '2013',
      numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 15 },
      sameAs: ['https://www.facebook.com/starsabordo', 'https://www.linkedin.com/company/starsolution-sas', 'https://x.com/stabordo'],
      knowsAbout: ['Cybersecurity', 'Seguridad Informática', 'Seguridad de la Información', 'ISO 27001', 'Penetration Testing', 'EDR/XDR', 'Data Loss Prevention'],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127', bestRating: '5' },
    },
  },

  // =====================================================
  // STAR PROTECTION
  // =====================================================
  bitdefender: {
    title: 'Bitdefender GravityZone Colombia | Starsolution',
    description: 'Implementamos Bitdefender GravityZone (EDR/XDR/MDR) en empresas colombianas. Partner oficial en Bogotá, soporte en español y cumplimiento ISO 27001 / Ley 1581.',
    keywords: 'Bitdefender empresas Colombia, GravityZone EDR, antivirus corporativo, endpoint security, XDR, partner Bitdefender',
    canonical: `${BASE_URL}/bitdefender/`,
    ogTitle: 'Bitdefender GravityZone | Seguridad Endpoint Empresarial',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    preconnect: ['https://www.bitdefender.com'],
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Protection', url: '/#star-protection' }, { name: 'Bitdefender', url: '/bitdefender/' }],
    jsonLd: product(
      'Bitdefender GravityZone',
      'Bitdefender',
      'Plataforma unificada de seguridad empresarial con EDR, XDR, Bitdefender MDR (SOC 24x7), CSPM+ y Patch Management. Reconocida como Visionary en el Gartner Magic Quadrant 2026 y con 100% de cobertura en MITRE ATT&CK 2024.',
      { rating: { value: '4.9', count: '127' }, image: `${BASE_URL}/og-default.png` },
    ),
    faqJsonLd: faqSchema([
      { q: 'El despliegue masivo va a saturar la red de la oficina?', a: 'No en la práctica. Programamos la instalacion por grupos via Active Directory o GPO, en horarios valle, y aprovechamos el repositorio local que GravityZone deja en uno de sus servidores para que el agente no se descargue desde internet en cada equipo. Empresas de 200 endpoints suelen quedar protegidas durante una sola noche.' },
      { q: 'Cómo me entero cuando aparece una amenaza crítica?', a: 'Configuramos notificaciones por correo y SMS para los eventos de severidad alta, y conectamos las alertas críticas a su canal preferido (Teams, Slack o ticketing). Adicionalmente recibira un reporte ejecutivo semanal listo para compartir con direccion y para sustentar auditorías ISO 27001.' },
      { q: 'Bitdefender me deja bloquear memorias USB y celulares conectados?', a: 'Sí. La política de Device Control puede bloquear USB, CD/DVD, Bluetooth y dispositivos moviles conectados, y permite definir excepciones por usuario, equipo o area. Es uno de los controles mas usados en clientes del sector financiero y salud que manejan información sensible bajo Habeas Data Ley 1581.' },
      { q: 'Cuánto tarda Starsolution en dejarnos operando?', a: 'Una implementación tipica en una empresa de 50 equipos se completa en menos de dos horas de trabajo efectivo: configuración de consola en la nube, conexion con su Active Directory, definicion de las políticas base y prueba en un grupo piloto antes del despliegue total. Para parques de más de 1.000 equipos planeamos un cronograma de 1 a 2 semanas con fases controladas.' },
      { q: 'Sirve si tenemos teletrabajo y sucursales en otras ciudades?', a: 'Sí, es uno de los escenarios donde GravityZone brilla mas. Como la consola es cloud, sus equipos en Medellín, Cali o cualquier sede remota reportan directamente sin necesidad de VPN ni servidores intermedios. Aplica las mismas políticas a empleados en home office que a la sede principal.' },
    ]),
  },
  kaspersky: {
    title: 'Kaspersky Endpoint Security Empresas | Starsolution',
    description: 'Implementamos Kaspersky Next (EDR/XDR/MDR) en empresas colombianas: System Watcher anti-ransomware y gestión centralizada. Partner oficial Kaspersky.',
    keywords: 'Kaspersky empresas Colombia, Kaspersky endpoint, antivirus PYMES, protección servidores, partner Kaspersky',
    canonical: `${BASE_URL}/kaspersky/`,
    ogTitle: 'Kaspersky Endpoint Security para Empresas',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Protection', url: '/#star-protection' }, { name: 'Kaspersky', url: '/kaspersky/' }],
    jsonLd: product(
      'Kaspersky Next',
      'Kaspersky',
      'Linea Kaspersky Next para empresas, con seis ediciones escalables: EDR Foundations, EDR Optimum, XDR Optimum y MXDR Optimum para empresas sin SOC interno, mas EDR Expert y XDR Expert para SOC enterprise. Incluye System Watcher anti-ransomware con rollback, EDR y detección gestionada (MDR). Implementación local en Colombia por Starsolution, partner certificado desde 2014.',
      { rating: { value: '4.8', count: '94' }, image: `${BASE_URL}/og-default.png` },
    ),
    faqJsonLd: faqSchema([
      { q: 'Kaspersky realmente protege contra ransomware moderno como LockBit o BlackCat?', a: 'Sí. La tecnología System Watcher de Kaspersky monitorea el comportamiento de todos los procesos en tiempo real. Cuando detecta patrones tipicos de ransomware (encriptacion masiva de archivos), bloquea el proceso instantaneamente y revierte automaticamente los cambios. Hemos documentado casos donde clientes recuperaron archivos sin necesidad de backups ni pagar rescates.' },
      { q: 'Cuál es la diferencia entre los tiers de Kaspersky Next (EDR Foundations, Optimum, XDR, MXDR)?', a: 'EDR Foundations cubre protección endpoint + EDR esencial para empresas de 10 a 100 endpoints sin SOC. EDR Optimum suma Cloud Sandbox, Adaptive Anomaly Control, cifrado y Patch Management para 100 a 500 endpoints. XDR Optimum agrega telemetria correlacionada de red, correo e identidad, mas threat hunting, recomendado entre 500 y 2.000 endpoints. MXDR Optimum incluye todo lo anterior y suma SOC 24x7 gestionado por Kaspersky.' },
      { q: 'Puedo gestionar dispositivos moviles (Android/iOS) desde la misma consola?', a: 'Sí. Kaspersky Next incluye MDM integrado. Puede aplicar políticas de seguridad, borrado remoto, geolocalizacion y contenedorizacion de datos corporativos en smartphones y tablets desde la misma interfaz que gestiona PCs y servidores.' },
      { q: 'Qué tan complicado es migrar desde nuestro antivirus actual?', a: 'El proceso tipico toma menos de una semana para empresas de hasta 500 endpoints. Starsolution maneja auditoría, configuración de la consola cloud, desinstalacion automática del antivirus anterior mediante scripts y despliegue silencioso de Kaspersky por GPO o instaladores remotos. Los usuarios finales generalmente no notan el cambio.' },
      { q: 'Afecta el rendimiento de equipos antiguos o de bajos recursos?', a: 'Kaspersky esta optimizado para consumo minimo de recursos. En equipos con Core i3 o superiores y 4 GB RAM el impacto es menor al 2 por ciento de CPU en operación normal. Para equipos legacy podemos programar escaneos fuera de horario y desactivar modulos no críticos.' },
    ]),
  },
  'hornet-security': {
    title: 'Hornetsecurity 365 | Seguridad Email | Starsolution',
    description: 'Hornetsecurity 365 Total Protection: seguridad email, backup, archiving y cifrado para Microsoft 365. Implementación profesional en Colombia.',
    keywords: 'Hornetsecurity, seguridad email Microsoft 365, backup email, email encryption, protección correo empresarial Colombia',
    canonical: `${BASE_URL}/hornet-security/`,
    ogTitle: 'Hornetsecurity 365 Total Protection',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Protection', url: '/#star-protection' }, { name: 'Hornetsecurity', url: '/hornet-security/' }],
    jsonLd: product('Hornetsecurity 365 Total Protection', 'Hornetsecurity', 'Seguridad email completa para Microsoft 365 con backup, archiving y cifrado', { rating: { value: '4.7', count: '68' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: '¿Hornetsecurity funciona solo con Microsoft 365?', a: 'Sí, Hornetsecurity 365 Total Protection está diseñado exclusivamente para Microsoft 365. Se integra nativamente con Exchange Online, OneDrive y SharePoint para protección completa del ecosistema Microsoft.' },
      { q: '¿Qué incluye la protección de Hornetsecurity?', a: 'Incluye filtrado de spam y malware, protección contra phishing y BEC, backup automático de buzones, archiving de email con cumplimiento legal, y cifrado de comunicaciones. Todo gestionado desde una consola cloud única.' },
      { q: '¿Cuánto cuesta Hornetsecurity para empresas?', a: 'Hornetsecurity no publica tarifas fijas; el precio depende del plan (Business, Enterprise, Enterprise Backup o Compliance and Awareness) y del número de buzones de Microsoft 365. Starsolution arma una cotización ajustada a su caso, con descuentos por volumen para más de 100 buzones y precios especiales para sector educativo y sin ánimo de lucro.' },
      { q: '¿Hornetsecurity reemplaza a Microsoft Defender?', a: 'Hornetsecurity complementa y refuerza la seguridad nativa de Microsoft 365. Mientras Defender ofrece protección básica, Hornetsecurity agrega capas avanzadas de filtrado, backup independiente y archiving que Microsoft no incluye.' },
    ]),
  },
  proofpoint: {
    title: 'Proofpoint Email Security Colombia | Starsolution',
    description: 'Proofpoint Leader Gartner MQ Email Security 2025. Protección contra phishing, BEC y amenazas dirigidas. ZenGuide, DMARC, DLP. Integramos en Colombia.',
    keywords: 'Proofpoint Colombia, email security, anti-phishing empresas, BEC, DMARC, ZenGuide, security awareness, Collaboration Security Prime',
    canonical: `${BASE_URL}/proofpoint/`,
    ogTitle: 'Proofpoint - Seguridad de Email Avanzada para Empresas en Colombia',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Protection', url: '/#star-protection' }, { name: 'Proofpoint', url: '/proofpoint/' }],
    jsonLd: product('Proofpoint Email Security', 'Proofpoint', 'Protección avanzada de email contra phishing, BEC y amenazas dirigidas con plataforma Nexus e IA people-centric', { rating: { value: '4.9', count: '102' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: '¿Proofpoint funciona con Microsoft 365 y Google Workspace?', a: 'Sí. Proofpoint se integra nativamente con Microsoft 365, Google Workspace y servidores de correo on-premise mediante registros MX, sin instalar agentes en los equipos de los usuarios.' },
      { q: '¿Cuánto tiempo toma la implementación de Proofpoint?', a: 'La implementación básica toma entre 3 y 5 días hábiles. La optimización completa, incluyendo ajuste de políticas y módulos avanzados, se completa en 2 a 4 semanas según el tamaño de la organización.' },
      { q: '¿Qué es Business Email Compromise (BEC) y cómo lo previene Proofpoint?', a: 'BEC es fraude donde atacantes suplantan ejecutivos para solicitar transferencias o datos sensibles. Proofpoint detecta estos ataques analizando patrones de comunicación, metadata del remitente y comportamiento histórico para identificar anomalías, incluso sin malware.' },
      { q: '¿Proofpoint puede capacitar a mis empleados contra phishing con ZenGuide?', a: 'Sí. Proofpoint ZenGuide (Proofpoint Security Awareness) incluye simulaciones de phishing personalizadas y micro-capacitaciones interactivas basadas en riesgo, vinculadas a los datos de Very Attacked People (VAPs) para priorizar a los usuarios más atacados de la organización.' },
      { q: '¿Qué es Collaboration Security Prime y para quién aplica?', a: 'Collaboration Security Prime (también llamado Prime Threat Protection) es el tier premium unificado de Proofpoint lanzado en abril 2025. Combina protección multicanal (email, Teams, Slack, SharePoint), defensa contra ataques multietapa, guía de riesgo humano e impersonation protection en una sola plataforma. Aplica a empresas que buscan consolidar herramientas de seguridad, reemplazando aproximadamente 45+ soluciones puntuales por una única plataforma.' },
    ]),
  },

  // =====================================================
  // STAR INSPECTION
  // =====================================================
  enthec: {
    title: 'Enthec Kartos y Qondar | Cibervigilancia | Starsolution',
    description: 'Enthec: cibervigilancia TEM con Kartos (EASM corporativo) y Qondar (vigilancia de personas). Diagnóstico gratuito de exposicion en Colombia.',
    keywords: 'Enthec, Kartos, Qondar, cibervigilancia, EASM, Threat Exposure Management, superficie de ataque, credenciales filtradas, dark web Colombia',
    canonical: `${BASE_URL}/enthec/`,
    ogTitle: 'Enthec Kartos y Qondar - Cibervigilancia en Colombia | Starsolution',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Inspection', url: '/#star-inspection' }, { name: 'Enthec', url: '/enthec/' }],
    jsonLd: product('Enthec Kartos - Corporate Threat Watchbots', 'Enthec', 'Kartos es la plataforma EASM de Enthec para monitoreo continuo de la superficie de ataque externa corporativa: credenciales filtradas, dark web, phishing y riesgo de terceros. Starsolution lo implementa en Colombia con soporte en español.', { rating: { value: '4.7', count: '41' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: 'Qué es Enthec y cuales son sus productos?', a: 'Enthec es una plataforma avanzada de cibervigilancia impulsada por IA (Advanced AI-driven Cyber-Surveillance Platform). Sus dos productos son Kartos, para monitoreo de la superficie de ataque externa corporativa (EASM), y Qondar, para vigilancia de la identidad digital de personas como directivos y altos cargos. Starsolution implementa ambas soluciones en Colombia con soporte en español.' },
      { q: 'Necesito instalar algo en mis servidores para usar Kartos?', a: 'No. Kartos opera 100% de forma externa y no intrusiva, sin agentes, sin acceso a la red interna ni permisos especiales. Solo ingresa el dominio de su empresa y el monitoreo comienza de forma automática, tal como lo haria un atacante externo.' },
      { q: 'En que consiste el diagnóstico gratuito de exposicion?', a: 'El diagnóstico inicial analiza su dominio corporativo para revelar credenciales filtradas, servicios expuestos y activos digitales vulnerables visibles desde internet. Incluye un reporte ejecutivo con hallazgos concretos y recomendaciones de remediación, sin costo ni compromiso de compra.' },
      { q: 'Qué diferencia hay entre Kartos y Qondar?', a: 'Kartos (Corporate Threat Watchbots) protege la superficie de ataque externa de la empresa: dominios, credenciales, dark web, phishing y supply chain. Qondar (Personal Threat Watchbots) protege la identidad digital de personas individuales como directivos, VIPs o altos cargos, monitoreando filtraciones de datos personales, financieros y presencia en redes sociales y foros.' },
    ]),
  },
  vicarius: {
    title: 'Vicarius vRx | Gestión de Vulnerabilidades | Starsolution',
    description: 'Vicarius vRx: plataforma Full Cycle Vulnerability Management con Patchless Protection, vRx Scripting Engine y vIntelligence. Implementamos en Colombia.',
    keywords: 'Vicarius vRx, gestión vulnerabilidades, exposure assessment platforms, patch management, Patchless Protection, vRx Scripting Engine, exposure management Colombia',
    canonical: `${BASE_URL}/vicarius/`,
    ogTitle: 'Vicarius vRx - Full Cycle Vulnerability Management en Colombia',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Inspection', url: '/#star-inspection' }, { name: 'Vicarius', url: '/vicarius/' }],
    jsonLd: product('Vicarius vRx', 'Vicarius', 'Plataforma Full Cycle Vulnerability Management con Patchless Protection (DBI), vRx Scripting Engine, vIntelligence y vAnalyzer. Niche Player en Gartner MQ for Exposure Assessment Platforms 2025.', { rating: { value: '4.6', count: '38' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: 'Qué es Patchless Protection y como funciona?', a: 'Patchless Protection es un modulo de vRx que mitiga vulnerabilidades a nivel de memoria mediante Dynamic Binary Instrumentation (DBI), sin necesidad del parche oficial del fabricante. Bloquea el vector de explotacion en tiempo real, sin reinicios ni interrupciones de servicio, permitiendo proteger sistemas críticos mientras se planifica la ventana de parcheo definitivo.' },
      { q: 'Vicarius reemplaza a mi escaner de vulnerabilidades actual?', a: 'Sí. Vicarius vRx reemplaza herramientas como Nessus, Qualys o Rapid7, y además agrega remediación automatizada. Elimina el ciclo manual de escanear-reportar-parchear que consume semanas y reduce en un 80% el tiempo dedicado a parcheo manual según datos oficiales de Vicarius.' },
      { q: 'Qué sistemas operativos soporta vRx?', a: 'Vicarius soporta Windows (Server y Desktop), Linux (Ubuntu, CentOS, RHEL, Debian) y macOS. El agente ocupa menos de 50MB de RAM y tiene impacto minimo en el rendimiento del endpoint.' },
      { q: 'Cuánto tiempo toma ver resultados con vRx?', a: 'El inventario completo de activos y vulnerabilidades esta disponible en menos de 24 horas desde el despliegue del agente. Vicarius reporta un MTTR (Mean Time To Remediate) promedio de 22 días con la plataforma, frente a los 205 días que tarda el ciclo discovery-to-remediation sin herramienta especializada.' },
    ]),
  },
  'stellar-cyber': {
    title: 'Stellar Cyber SecOps | Open XDR con IA | Starsolution',
    description: 'Stellar Cyber SecOps Platform con Open XDR para Colombia: Multi-Layer AI, NDR, ITDR, UEBA y Case Orchestration. Implemente su SOC con Starsolution.',
    keywords: 'Stellar Cyber, Open XDR, SecOps Platform, SOC automatizado, Multi-Layer AI, NDR, UEBA, ITDR, AI Investigator, alternativa SIEM Colombia',
    canonical: `${BASE_URL}/stellar-cyber/`,
    ogTitle: 'Stellar Cyber SecOps Platform | Open XDR para SOC Automatizado',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Inspection', url: '/#star-inspection' }, { name: 'Stellar Cyber', url: '/stellar-cyber/' }],
    jsonLd: product('Stellar Cyber SecOps Platform', 'Stellar Cyber', 'Plataforma SecOps AI-Native con arquitectura Open XDR para detección y respuesta unificada de amenazas', { rating: { value: '4.8', count: '52' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: 'Qué diferencia hay entre XDR y Open XDR?', a: 'El XDR tradicional solo integra productos del mismo fabricante. Open XDR integra cualquier herramienta de seguridad existente en su empresa, sin dependencia de un solo proveedor ni necesidad de reemplazar su stack actual.' },
      { q: 'Stellar Cyber reemplaza mi SIEM?', a: 'Sí. Stellar Cyber incluye AI-Native Next-Gen SIEM, NDR, UEBA, ITDR y AI-Powered Case Orchestration en una sola plataforma. Además elimina el modelo de precios por volumen de logs que hace costosos a los SIEM tradicionales.' },
      { q: 'Necesito un equipo SOC para operar la plataforma?', a: 'No. La IA automatiza las tareas de nivel L1 y L2, incluyendo correlación, triaje y respuesta inicial. Equipos de 2 a 3 personas de IT pueden operar la plataforma eficazmente. Starsolution ofrece además servicios de implementación e integración con soporte en español desde Colombia.' },
      { q: 'Cuánto tiempo toma el despliegue?', a: 'El despliegue inicial toma entre 1 y 2 semanas gracias a los conectores preconfigurados para más de 400 herramientas y la normalización automática de datos.' },
      { q: 'Qué es el motor Multi-Layer AI™ y cómo se diferencia del SIEM tradicional?', a: 'Multi-Layer AI™ es el motor de inteligencia artificial registrado de Stellar Cyber. Combina Detection AI, Correlation AI con GraphML, LLM-Driven AI (AI Investigator) y Agentic AI. A diferencia del SIEM que requiere reglas manuales, Multi-Layer AI™ correlaciona automáticamente eventos de múltiples fuentes y reduce las decisiones del analista a entre 10 y 100 por día.' },
      { q: 'Cómo trabaja Starsolution con Stellar Cyber en Colombia?', a: 'Starsolution implementa e integra la plataforma Stellar Cyber SecOps para clientes en Colombia y la región. Somos su punto de contacto local con soporte técnico en español, despliegue desde Bogotá y cobertura en Colombia, Venezuela y Miami.' },
    ]),
  },
  'hacking-etico': {
    title: 'Hacking Ético y Pentesting | Starsolution Colombia',
    description: 'Hacking ético y pentesting profesional con equipo certificado CEH y OSCP. Auditoría completa, reporte ejecutivo. Solicite evaluación gratuita.',
    keywords: 'hacking ético Colombia, pentesting Bogotá, test de intrusion, auditoría seguridad, vulnerabilidades, CEH OSCP',
    canonical: `${BASE_URL}/hacking-etico/`,
    ogTitle: 'Hacking Ético y Pentesting Profesional',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Inspection', url: '/#star-inspection' }, { name: 'Hacking Ético', url: '/hacking-etico/' }],
    jsonLd: service('Hacking Ético y Pentesting', 'Cybersecurity Penetration Testing'),
    faqJsonLd: faqSchema([
      { q: 'Cuánto tiempo toma un pentest?', a: 'Depende del alcance: una aplicacion web toma 1-2 semanas, una infraestructura completa 3-4 semanas, y un ejercicio de Red Team 4-6 semanas.' },
      { q: 'Con que frecuencia deberia hacer pentesting?', a: 'Al menos una vez al ano para aplicaciones críticas. Regulaciones como PCI-DSS exigen escaneos trimestrales y pentesting anual obligatorio.' },
      { q: 'Pueden causar daño a nuestros sistemas durante el test?', a: 'No. Trabajamos con extremo cuidado y preferimos entornos de staging cuando estan disponibles. Para produccion, contamos con un plan de rollback definido antes de cualquier prueba.' },
      { q: 'Qué pasa si encuentran una vulnerabilidad crítica durante el test?', a: 'Detenemos el test de inmediato y notificamos al equipo de IT y al CISO a traves de un canal seguro acordado previamente, para permitir mitigacion urgente antes de continuar.' },
      { q: 'El reporte es solo tecnico o también para ejecutivos?', a: 'Entregamos dos reportes: uno ejecutivo con resumen de riesgo en lenguaje de negocio, y uno tecnico detallado con payloads, prueba de concepto y pasos de remediación para el equipo de IT.' },
      { q: 'Qué diferencia hay entre escaneo de vulnerabilidades y pentesting?', a: 'El escaneo identifica vulnerabilidades conocidas (CVEs) de forma automatizada. El pentesting va mas alla: un experto explota manualmente las vulnerabilidades, encadena ataques complejos y simula el impacto real de un atacante.' },
    ]),
  },
  'rthreat-bogota-colombia': {
    title: 'Red Team y BAE con rThreat | Starsolution Colombia',
    description: 'Breach and Attack Emulation (BAE) con rThreat en Colombia. Valide EDR, SIEM y controles con malware real en entornos controlados. Soporte en español.',
    keywords: 'red team Colombia, breach attack emulation, BAE, rThreat, emulación ataques, pentesting avanzado, zero-day, validación controles seguridad',
    canonical: `${BASE_URL}/rthreat-bogota-colombia/`,
    ogTitle: 'Red Team & Breach and Attack Emulation con rThreat Colombia',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Inspection', url: '/#star-inspection' }, { name: 'rThreat Red Team', url: '/rthreat-bogota-colombia/' }],
    jsonLd: service('Red Team & Breach and Attack Emulation', 'Advanced Security Validation with BAE Platform rThreat'),
    faqJsonLd: faqSchema([
      { q: 'Cuál es la diferencia entre Breach and Attack Emulation (BAE) y Breach and Attack Simulation (BAS)?', a: 'BAE, como la que implementa rThreat, ejecuta artefactos de malware reales con variaciones de ofuscacion y tecnicas de evasion actuales. BAS tradicional usa firmas sinteticas que los EDR modernos ya conocen. Solo la emulación con malware real valida si su stack detecta amenazas que los atacantes reales usan hoy.' },
      { q: 'Es seguro ejecutar simulaciones de ataque en produccion?', a: 'Sí. rThreat ejecuta malware real en entornos controlados: contenedores efimeros o sandbox aislados con kill switches automáticos. Las emulaciones no dañan sistemas ni datos. Cada ejercicio incluye un plan de contingencia coordinado con su equipo de TI antes de comenzar.' },
      { q: 'Cada cuánto se debe realizar un ejercicio de Red Team con rThreat?', a: 'Se recomienda al menos una vez al ano para empresas reguladas y cada 6 meses para organizaciones con alto perfil de riesgo. rThreat puede ejecutarse de forma continua como plataforma de validación permanente, complementando los ejercicios de Red Team puntuales.' },
      { q: 'Cuál es la diferencia entre Red Team y pentesting?', a: 'El pentesting busca vulnerabilidades tecnicas en un alcance definido. El Red Team simula un atacante real sin restricciones de alcance, incluyendo ingeniería social, acceso físico y ataques multi-vector, evaluando la capacidad de detección y respuesta de toda la organización.' },
    ]),
  },

  // =====================================================
  // STAR COMPLIANCE
  // =====================================================
  iso27001: {
    title: 'Consultoría ISO 27001 en Colombia | Starsolution',
    description: 'Implementamos y certificamos su SGSI ISO 27001 en 6-12 meses: gap analysis, controles del Anexo A y acompañamiento en auditoría externa. Diagnóstico gratuito.',
    keywords: 'ISO 27001 Colombia, consultoría ISO 27001, certificación ISO 27001, certificación SGSI, auditoría ISO 27001, gap analysis seguridad información, implementación ISO 27001, Anexo A, declaración de aplicabilidad, ISO 27001 Bogotá, ISO 27001 precio',
    canonical: `${BASE_URL}/iso27001/`,
    ogTitle: 'Consultoría ISO 27001 en Colombia | Starsolution',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Compliance', url: '/#star-compliance' }, { name: 'ISO 27001', url: '/iso27001/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${BASE_URL}/iso27001/#service`,
          name: 'Consultoría ISO 27001 en Colombia',
          serviceType: 'ISO 27001 Certification Consulting',
          url: `${BASE_URL}/iso27001/`,
          image: `${BASE_URL}/og-default.png`,
          description: 'Consultoría ISO 27001: diagnóstico de brechas, implementación del SGSI, acompañamiento en auditoría externa y soporte post-certificación. Más de 50 empresas certificadas con consultores Lead Implementer y Lead Auditor.',
          provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Starsolution S.A.S.', url: BASE_URL },
          areaServed: [
            { '@type': 'Country', name: 'Colombia' },
            { '@type': 'City', name: 'Bogotá' },
            { '@type': 'City', name: 'Medellín' },
            { '@type': 'City', name: 'Cali' },
          ],
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            url: `${BASE_URL}/iso27001/`,
            priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'COP', minPrice: 35000000, maxPrice: 150000000 },
          },
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '53', bestRating: '5' },
          serviceOutput: { '@type': 'Thing', name: 'Certificado ISO/IEC 27001:2022' },
        },
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/iso27001/#webpage`,
          url: `${BASE_URL}/iso27001/`,
          name: 'Consultoría ISO 27001 en Colombia | Starsolution',
          description: 'Implementamos y certificamos su SGSI ISO 27001 en 6-12 meses: gap analysis, controles del Anexo A y acompañamiento en auditoría externa. Diagnóstico gratuito.',
          inLanguage: 'es-CO',
          isPartOf: { '@type': 'WebSite', '@id': `${BASE_URL}/#website`, url: BASE_URL, name: 'Starsolution' },
          about: { '@id': `${BASE_URL}/iso27001/#service` },
          datePublished: '2026-07-18',
          dateModified: '2026-07-18',
        },
      ],
    },
    faqJsonLd: faqSchema(isoFaqs.map((f) => ({ q: f.question, a: f.answer }))),
  },
  sealpath: {
    title: 'SealPath IRM | Protección de Documentos | Starsolution',
    description: 'SealPath IRM en Colombia: cifrado persistente, control de acceso granular, revocación remota y trazabilidad. IRM/E-DRM con integración Microsoft 365 y MIP.',
    keywords: 'SealPath IRM Colombia, IRM E-DRM protección documentos, cifrado persistente datos, control acceso documentos, Microsoft Information Protection, Ley 1581 protección datos',
    canonical: `${BASE_URL}/sealpath/`,
    ogTitle: 'SealPath IRM - Protección Persistente de Documentos en Colombia',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Compliance', url: '/#star-compliance' }, { name: 'SealPath IRM', url: '/sealpath/' }],
    jsonLd: product('SealPath IRM — Information Rights Management', 'SealPath', 'Protección persistente de documentos con cifrado IRM/E-DRM, control de acceso granular, revocación remota y trazabilidad completa. Integración con Microsoft Information Protection (MIP) y Microsoft 365.', { rating: { value: '4.4', count: '11' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: 'Los usuarios externos necesitan instalar algo para abrir los documentos?', a: 'Los usuarios externos pueden abrir documentos protegidos a través de SealPath Secure Browser, un visor web agentless que no requiere instalación. Para funcionalidad completa (edición, impresión, etc.) se instala el agente ligero de SealPath IRM, disponible para Windows, macOS, iOS y Android. También existe SealPath Web Protector, que permite proteger y gestionar documentos desde el navegador sin instalación, compatible con Windows, macOS, Linux, iOS y Android.' },
      { q: '¿Qué tipos de archivos soporta SealPath IRM?', a: 'SealPath IRM protege documentos de Microsoft Office (Word, Excel, PowerPoint), PDF (Adobe, Foxit, Nitro), archivos CAD (AutoCAD, SolidWorks, CATIA), imágenes, texto y adjuntos de correo electrónico. También protege carpetas completas en File Servers, SharePoint, OneDrive, Box y Dropbox.' },
      { q: '¿SealPath afecta la productividad de los usuarios?', a: 'No. SealPath IRM se integra en el flujo de trabajo habitual: proteger un documento requiere solo un clic derecho o se aplica automáticamente al guardar en carpetas protegidas. Los documentos se abren normalmente en Word, Excel y otras aplicaciones sin pasos adicionales.' },
      { q: '¿Cómo ayuda SealPath con el cumplimiento normativo en Colombia?', a: 'SealPath IRM genera evidencia auditada de cifrado y control de acceso granular exigida por la Ley 1581 de Habeas Data, ISO 27001, GDPR, HIPAA y PCI DSS. Los logs de acceso detallados facilitan la demostración de cumplimiento ante auditores y entes reguladores.' },
      { q: '¿Cómo se integra SealPath con Microsoft Information Protection?', a: 'SealPath IRM asocia sus políticas de protección con etiquetas de Microsoft Information Protection (MIP) de forma nativa, sin APIs adicionales. Un documento etiquetado como Confidencial en MIP puede ser automáticamente protegido con cifrado IRM de SealPath, unificando clasificación y protección persistente.' },
      { q: '¿Qué diferencia hay entre SealPath IRM y un DLP tradicional?', a: 'El DLP tradicional protege el perímetro de red: controla que los datos no salgan, pero pierde el control cuando un archivo abandona la organización. SealPath IRM aplica cifrado persistente que viaja con el archivo: aunque el documento llegue a un proveedor, nube o dispositivo externo, usted mantiene control de acceso y puede revocar remotamente en cualquier momento.' },
    ]),
  },
  netwrix: {
    title: 'Netwrix Seguridad de Datos e Identidades | Starsolution',
    description: 'Netwrix Colombia: auditoría AD, PAM, DLP y clasificación de datos. Cumpla Ley 1581, ISO 27001 y Circular 007. Starsolution implementa con soporte en español.',
    keywords: 'Netwrix Colombia, Netwrix Auditor, Netwrix Access Analyzer, Netwrix Privilege Secure, Netwrix Endpoint Protector, auditoría Active Directory, PAM Zero Standing Privilege, DLP, clasificación datos, gobernanza identidad, Ley 1581, Circular 007',
    canonical: `${BASE_URL}/netwrix/`,
    ogTitle: 'Netwrix - Seguridad de Datos e Identidades en Colombia',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Compliance', url: '/#star-compliance' }, { name: 'Netwrix', url: '/netwrix/' }],
    jsonLd: product('Netwrix — Plataforma de Seguridad de Datos e Identidades', 'Netwrix', 'Plataforma de seguridad de datos centrada en identidad: auditoría AD, PAM, DLP, clasificación de datos, IGA y DSPM para cumplimiento normativo', { rating: { value: '4.7', count: '164' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: '¿Netwrix requiere cambios en mi Active Directory?', a: 'No. Netwrix Auditor funciona en modo lectura mediante la captura de logs y eventos. No requiere cambios en el esquema de AD, no instala agentes en los controladores de dominio ni modifica la infraestructura existente.' },
      { q: '¿Cuánto tiempo toma la implementación?', a: 'Para Active Directory y servidores de archivos, la implementación toma entre 2 y 5 días. Un entorno híbrido completo con integraciones en la nube puede tomar entre 2 y 3 semanas. Starsolution gestiona todo el despliegue desde Bogotá con soporte en español.' },
      { q: '¿Netwrix puede ayudarme a preparar una auditoría ISO 27001?', a: 'Sí. Netwrix incluye reportes predefinidos mapeados a los controles de ISO 27001 que reducen significativamente el tiempo de preparación para auditorías de cumplimiento. También cubre GDPR, HIPAA, PCI DSS y, para Colombia, la Ley 1581 y la Circular 007 Superfinanciera.' },
      { q: '¿Qué tipo de alertas genera Netwrix?', a: 'Netwrix genera alertas en tiempo real para cambios en grupos administrativos, modificaciones de GPO, acceso masivo a archivos, cambios de permisos en carpetas sensibles y creación de cuentas privilegiadas, entre otros eventos críticos.' },
      { q: '¿Cuál es la diferencia entre Netwrix Auditor y Netwrix Access Analyzer?', a: 'Netwrix Auditor se enfoca en auditoría de cambios y cumplimiento: registra quién modificó qué en AD, servidores de archivos y entornos Microsoft 365. Netwrix Access Analyzer (antes StealthAUDIT) es el producto de Data Access Governance y DSPM: descubre y clasifica datos sensibles en 40+ fuentes, monitorea la actividad de Microsoft Copilot y automatiza la remediación de permisos. Son SKUs distintos que se complementan.' },
      { q: '¿Netwrix Privilege Secure es solo un gestor de contraseñas?', a: 'No. Netwrix Privilege Secure implementa el principio de Zero Standing Privilege: las credenciales privilegiadas se crean Just-In-Time para cada sesión y se eliminan al terminar. Esto es distinto de las soluciones de vaulting clásico que solo guardan contraseñas. Incluye grabación de sesiones, monitoreo en tiempo real y eliminación de cuentas permanentes de administrador.' },
    ]),
  },
  'black-duck': {
    title: 'Black Duck AppSec: Coverity, SCA, Polaris | Starsolution',
    description: 'Black Duck en Colombia: Coverity SAST, Black Duck SCA, Continuous Dynamic DAST, Seeker IAST y Polaris Platform. Implementamos DevSecOps con soporte local.',
    keywords: 'Black Duck Colombia, Coverity SAST, Black Duck SCA, Continuous Dynamic DAST, Seeker IAST, Polaris Platform, application security testing, DevSecOps, SBOM, open source security',
    canonical: `${BASE_URL}/black-duck/`,
    ogTitle: 'Black Duck — Application Security Testing Platform | Starsolution',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Compliance', url: '/#star-compliance' }, { name: 'Black Duck', url: '/black-duck/' }],
    jsonLd: product('Black Duck — Application Security Testing Platform', 'Black Duck Software', 'Suite de seguridad de aplicaciones con Coverity SAST, Black Duck SCA, Continuous Dynamic DAST, Seeker IAST y Polaris Platform SaaS', { rating: { value: '4.8', count: '39' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: 'Qué es Black Duck y que productos incluye?', a: 'Black Duck Software, Inc. es una empresa independiente de seguridad de aplicaciones (AppSec) escindida de Synopsys en octubre 2024. Su portfolio incluye Coverity (SAST), Black Duck SCA (análisis de composicion y SBOM), Continuous Dynamic (DAST), Seeker (IAST), Defensics (fuzzing) y la Black Duck Polaris Platform, una plataforma SaaS unificada. Starsolution implementa e integra estos productos en Colombia con soporte en español.' },
      { q: 'Cuál es la diferencia entre Coverity, Black Duck SCA y Continuous Dynamic?', a: 'Coverity es el producto SAST de Black Duck: analiza el codigo fuente estaticamente en más de 20 lenguajes antes de compilar. Black Duck SCA identifica componentes open source, CVEs y riesgos de licenciamiento, y genera SBOM en formatos SPDX y CycloneDX. Continuous Dynamic es el producto DAST: prueba la aplicacion en ejecución simulando ataques reales con production-safe payloads y validación por IA para minimizar falsos positivos.' },
      { q: 'El escaneo ralentiza nuestro pipeline de CI/CD?', a: 'El impacto es minimo. El SCA tarda segundos; Coverity opera en modo incremental analizando solo el codigo modificado. Ambos se ejecutan en paralelo con el proceso de build sin bloquear el pipeline. La Black Duck Polaris Platform se integra nativamente con Jenkins, GitHub Actions, GitLab CI, Azure DevOps y CircleCI.' },
      { q: 'Qué es la Black Duck Polaris Platform y como difiere de Software Risk Manager?', a: 'Black Duck Polaris Platform es la plataforma SaaS unificada que combina SAST (Coverity), SCA (Black Duck SCA) y DAST (Continuous Dynamic) en un solo flujo DevSecOps. Software Risk Manager es el producto ASPM (Application Security Posture Management) para centralizar y priorizar hallazgos de multiples herramientas a escala empresarial. Son productos complementarios: Polaris es el punto de entrada DevSecOps; Software Risk Manager es la capa de governance para CISOs.' },
    ]),
  },
  'dlp-prevencion-perdida-datos': {
    title: 'Software DLP Endpoint Protector | Starsolution',
    description: 'Software DLP para prevención de pérdida de datos. Control USB, monitoreo endpoints y cifrado. Multiplataforma con cumplimiento GDPR.',
    keywords: 'DLP Colombia, data loss prevention, prevención pérdida datos, Endpoint Protector, control USB, GDPR',
    canonical: `${BASE_URL}/dlp-prevencion-perdida-datos/`,
    ogTitle: 'Software DLP - Prevención de Pérdida de Datos',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Star Compliance', url: '/#star-compliance' }, { name: 'Software DLP', url: '/dlp-prevencion-perdida-datos/' }],
    jsonLd: product('Endpoint Protector DLP', 'CoSoSys', 'Software DLP multiplataforma para prevención de pérdida de datos empresariales', { rating: { value: '4.6', count: '44' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: 'Necesito un servidor on-premise o es cloud?', a: 'Ambas opciones estan disponibles: SaaS cloud en datacenter Tier IV con certificación ISO 27001, o deployment On-Premise en VM compatible con VMware, Hyper-V y KVM. También existe modalidad hibrida.' },
      { q: 'Funciona sin conexion a internet?', a: 'Sí. Los agentes aplican políticas localmente sin depender de conectividad. El cache offline funciona hasta 30 días, y en entornos air-gapped las políticas se actualizan via USB con firma criptografica.' },
      { q: 'Puedo permitir solo USBs corporativos?', a: 'Sí. La whitelist de dispositivos puede configurarse por Numero de Serie, VID+PID, Certificado Digital o mediante Whitelist Temporal con ventana de tiempo definida.' },
      { q: 'Afecta el rendimiento del endpoint?', a: 'El impacto es minimo: 50-80MB de RAM en reposo, menos del 2% de CPU y un instalador de 12MB que no requiere reinicio del sistema.' },
      { q: 'Cuánto demora el despliegue corporativo?', a: 'El despliegue se realiza en 3 fases: días 1-2 configuración del servidor, días 3-5 piloto con 50-100 endpoints en modo auditoría, días 6-10 despliegue masivo con políticas activas.' },
    ]),
  },

  // =====================================================
  // COMPARATIVA
  // =====================================================
  'seguridad-informatica-empresas': {
    title: 'Seguridad Informática para Empresas | Starsolution',
    description: 'Seguridad informática empresarial en Colombia: protección de endpoints, pentesting, cumplimiento ISO 27001 y monitoreo 24/7. Diagnóstico gratuito.',
    keywords: 'seguridad informática empresas, seguridad informática empresarial, empresa de seguridad informática Colombia, seguridad informática Bogotá, servicios seguridad informática',
    canonical: `${BASE_URL}/seguridad-informatica-empresas/`,
    ogTitle: 'Seguridad Informática para Empresas en Colombia',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Seguridad Informática', url: '/seguridad-informatica-empresas/' }],
    jsonLd: service('Seguridad Informática Empresarial', 'Enterprise Information Security Services'),
    faqJsonLd: faqSchema([
      { q: '¿Qué es la seguridad informática empresarial?', a: 'La seguridad informática empresarial es el conjunto de tecnologías, procesos y controles que protegen los sistemas, redes y datos de una organización contra accesos no autorizados, ransomware, fugas de información y fraude. En la práctica combina protección de endpoints (antivirus EDR/XDR), seguridad del correo, pruebas de penetración, control de fugas de datos (DLP) y cumplimiento de normas como ISO 27001 y la Ley 1581 de Habeas Data. Starsolution presta estos servicios a empresas en Colombia desde 2013.' },
      { q: '¿Cuál es la diferencia entre seguridad informática, ciberseguridad y seguridad de la información?', a: 'La seguridad informática protege los sistemas y equipos de cómputo (computadores, servidores, redes). La ciberseguridad es más amplia: cubre todo el entorno digital, incluyendo la nube, la identidad y las amenazas externas como el phishing. La seguridad de la información es el marco superior: protege la información en cualquier formato — digital o físico — y es el objeto de normas como ISO 27001. En el uso empresarial cotidiano los tres términos se solapan y las tres disciplinas se implementan juntas.' },
      { q: '¿Cuánto cuesta la seguridad informática para una empresa en Colombia?', a: 'Depende del número de equipos, del sector y del nivel de riesgo. Una PYME típicamente inicia con protección de endpoints administrada, cuyo licenciamiento se cotiza por dispositivo al año, mientras que empresas reguladas suman pentesting anual, DLP y consultoría ISO 27001. Como referencia de decisión: el costo anual de un programa de seguridad suele ser una fracción del costo promedio de un solo incidente de ransomware. Starsolution entrega cotizaciones por alcance sin costo.' },
      { q: '¿Por dónde empieza una PYME con la seguridad informática?', a: 'El orden recomendado para una PYME en Colombia es: primero un antivirus empresarial EDR administrado desde consola central; segundo, protección del correo (el principal vector de ataque); tercero, copias de seguridad verificadas; y cuarto, un diagnóstico de vulnerabilidades para priorizar lo que sigue. Starsolution ofrece un diagnóstico gratuito inicial para definir esa hoja de ruta.' },
      { q: '¿Qué exige la ley colombiana en seguridad informática?', a: 'La Ley 1581 de 2012 (Habeas Data) obliga a proteger los datos personales que la empresa trata, con sanciones de la Superintendencia de Industria y Comercio. El sector financiero debe cumplir la Circular 007 de la Superintendencia Financiera sobre riesgo de ciberseguridad, y las entidades públicas el MSPI de MinTIC. Además, ISO 27001, aunque voluntaria, es exigida cada vez más como requisito contractual por clientes corporativos.' },
    ]),
  },
  'antivirus-empresas': {
    title: 'Antivirus Empresarial: Comparativa 2026 | Starsolution',
    description: 'Comparativa antivirus empresariales: Bitdefender vs Kaspersky vs Hornetsecurity. Cual es mejor para tu empresa? Asesoria gratuita.',
    keywords: 'antivirus empresas Colombia, comparativa antivirus, Bitdefender vs Kaspersky, mejor antivirus corporativo 2026',
    canonical: `${BASE_URL}/antivirus-empresas/`,
    ogTitle: 'Comparativa Antivirus Empresarial 2026',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Comparativa Antivirus', url: '/antivirus-empresas/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Comparativa Antivirus Empresariales 2026',
      description: 'Comparativa detallada de soluciones antivirus para empresas',
      publisher: ORG,
    },
    faqJsonLd: faqSchema([
      { q: 'Cuánto cuesta implementar un antivirus empresarial?', a: 'Para PYMES el rango es USD 30-80 por endpoint al ano; soluciones enterprise con EDR cuestan USD 100-200 por endpoint. Starsolution ofrece planes flexibles con descuentos por volumen.' },
      { q: 'Cuánto tiempo toma la implementación?', a: 'Hasta 100 endpoints: 3 a 5 días habiles. Más de 500 endpoints: 2 a 4 semanas con despliegue por fases. La mayoria de organizaciones tiene sus equipos protegidos en menos de 48 horas.' },
      { q: 'Puedo migrar desde mi antivirus actual?', a: 'Sí. Gestionamos migraciones desde Symantec, McAfee, Trend Micro y otros sin interrumpir las operaciones, desinstalando el producto anterior y desplegando el nuevo de forma automática.' },
      { q: 'Qué diferencia hay entre Bitdefender y Kaspersky?', a: 'Bitdefender destaca en detección con IA y bajo impacto en rendimiento. Kaspersky ofrece mejor integración con SIEM y protección anti-APT mas avanzada para sectores regulados.' },
      { q: 'Incluye protección para servidores Linux y macOS?', a: 'Sí. Todas las soluciones que distribuimos protegen Windows, macOS, Linux, Android e iOS desde una consola unificada, con políticas diferenciadas por tipo de dispositivo.' },
      { q: 'Qué pasa si detectan ransomware durante la implementación?', a: 'Actuamos de inmediato: aislamos el equipo afectado, realizamos análisis forense, eliminamos la amenaza y restauramos desde backup. La respuesta a incidentes esta incluida sin costo adicional.' },
    ]),
  },

  // =====================================================
  // INFRAESTRUCTURA
  // =====================================================
  teamviewer: {
    title: 'TeamViewer Empresarial | Control Remoto | Starsolution',
    description: 'TeamViewer para empresas en Colombia: planes Business, Premium, Corporate y Tensor. Acceso remoto seguro, soporte técnico y conectividad OT. Cotice hoy.',
    keywords: 'TeamViewer Colombia, TeamViewer Tensor, acceso remoto empresarial, control remoto seguro, soporte técnico remoto, TeamViewer DEX',
    canonical: `${BASE_URL}/teamviewer/`,
    ogTitle: 'TeamViewer - Control Remoto Empresarial Seguro',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Infraestructura', url: '/#infraestructura' }, { name: 'TeamViewer', url: '/teamviewer/' }],
    jsonLd: product('TeamViewer Tensor', 'TeamViewer', 'Plataforma enterprise de conectividad remota segura: acceso remoto y soporte a IT, OT, móvil y POS, con SSO, acceso condicional Zero Trust e integraciones ITSM (ServiceNow, Intune, Salesforce)', { rating: { value: '4.8', count: '89' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: '¿Qué es TeamViewer y qué productos ofrece para empresas?', a: 'TeamViewer es una plataforma de conectividad remota con cinco productos vigentes: TeamViewer Remote (acceso y soporte remoto con planes Business, Premium y Corporate), TeamViewer Tensor (plataforma enterprise para IT, OT, móvil y POS), TeamViewer DEX (experiencia digital del empleado, Leader en el Gartner Magic Quadrant de DEX Management Tools 2026), TeamViewer Frontline (realidad aumentada industrial) y TeamViewer ONE (plataforma unificadora). Starsolution implementa y licencia estos productos en Colombia con soporte en español.' },
      { q: '¿Cuál plan de TeamViewer necesita mi empresa?', a: 'TeamViewer Business (1 puesto, hasta 200 dispositivos) sirve para un técnico individual. Premium (hasta 15 usuarios, 300 dispositivos) y Corporate (hasta 30 usuarios, 3 sesiones concurrentes, 500 dispositivos) cubren equipos de soporte. Para cientos o miles de dispositivos, SSO, Zero Trust e integraciones ITSM, el producto indicado es TeamViewer Tensor.' },
      { q: 'Cuál es la diferencia entre licencia concurrente y nombrada?', a: 'La licencia nombrada se asigna a un tecnico específico. La licencia concurrente es compartida y permite que un usuario la use a la vez, siendo ideal para equipos de soporte con turnos rotativos.' },
      { q: 'TeamViewer funciona detras de firewalls corporativos?', a: 'Sí. TeamViewer utiliza el puerto saliente 5938 o 443 (HTTPS) sin necesidad de abrir puertos ni configurar port forwarding. Es compatible con proxies corporativos y redes con NAT estricto.' },
      { q: 'Cómo se factura TeamViewer para MSPs?', a: 'TeamViewer ofrece dos modelos para MSPs: por canal (dispositivos ilimitados, un tecnico activo a la vez) o por dispositivo gestionado. Ambos con facturacion mensual o anual y descuentos progresivos desde 50 endpoints.' },
    ]),
  },
  anydesk: {
    title: 'AnyDesk Escritorio Remoto Empresas | Starsolution',
    description: 'AnyDesk: escritorio remoto a 60 FPS con latencia menor a 16ms y cifrado TLS 1.2. Licencias empresariales Colombia. Prueba gratis.',
    keywords: 'AnyDesk Colombia, escritorio remoto empresas, control remoto rápido, acceso remoto seguro, teletrabajo',
    canonical: `${BASE_URL}/anydesk/`,
    ogTitle: 'AnyDesk - Escritorio Remoto Ultra Rapido',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Infraestructura', url: '/#infraestructura' }, { name: 'AnyDesk', url: '/anydesk/' }],
    jsonLd: product('AnyDesk', 'AnyDesk', 'Escritorio remoto de alto rendimiento con codec propietario DeskRT: 60 FPS, latencia menor a 16 ms y cifrado TLS 1.2 con Perfect Forward Secrecy. Planes Solo, Standard, Advanced y Ultimate (con AnyDesk On-Premises)', { rating: { value: '4.7', count: '73' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: '¿Qué es AnyDesk y qué planes ofrece?', a: 'AnyDesk es un software de escritorio remoto que usa el codec propietario DeskRT para transmitir a 60 FPS con latencia menor a 16 ms y funcionar desde 100 KB/s de ancho de banda. Ofrece cuatro planes vigentes: Solo (1 usuario), Standard (hasta 20 usuarios), Advanced (hasta 100 usuarios, SSO SAML 2.0) y Ultimate, la única edición con AnyDesk On-Premises para desplegar en infraestructura propia. Starsolution licencia e implementa AnyDesk en Colombia con soporte en español.' },
      { q: 'Es gratis AnyDesk para uso comercial?', a: 'No. El uso comercial requiere licencia de pago. AnyDesk ofrece cuatro planes: Solo, Standard, Advanced y Ultimate (este último con opción On-Premises). Los precios cambian por región y volumen; Starsolution cotiza el plan adecuado para su operación en Colombia.' },
      { q: 'Qué necesito para conectarme remotamente?', a: 'Solo el ID de AnyDesk de 9 digitos del dispositivo destino. AnyDesk realiza NAT traversal automaticamente y funciona detras de firewalls corporativos sin necesidad de abrir puertos.' },
      { q: 'AnyDesk consume muchos recursos?', a: 'El consumo es mínimo: cliente ligero de pocos MB (3.7 MB en la versión On-Premises), bajo uso de RAM y CPU, y desde 100 KB/s de ancho de banda por sesión gracias al codec DeskRT.' },
    ]),
  },
  'soti-mdm': {
    title: 'SOTI MobiControl EMM Colombia | Starsolution',
    description: 'SOTI MobiControl: gestión de dispositivos moviles para logística, retail, salud y campo en Colombia. Control remoto, kiosk mode y soporte local.',
    keywords: 'SOTI MobiControl Colombia, MDM EMM, gestión dispositivos moviles, mobile device management, iOS Android empresarial, SOTI ONE Platform',
    canonical: `${BASE_URL}/soti-mdm/`,
    ogTitle: 'SOTI MobiControl - EMM Empresarial Colombia',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Infraestructura', url: '/#infraestructura' }, { name: 'SOTI MobiControl', url: '/soti-mdm/' }],
    jsonLd: product('SOTI MobiControl', 'SOTI', 'Gestión de dispositivos moviles empresariales para industrias especializadas en Colombia', { rating: { value: '4.7', count: '35' }, image: `${BASE_URL}/og-default.png` }),
    faqJsonLd: faqSchema([
      { q: 'Cuál es la diferencia entre SOTI MobiControl y otros MDM?', a: 'SOTI ofrece APIs propietarias para hardware industrial de Zebra, Honeywell y Panasonic, capacidades de monitoreo de dispositivos rugged mediante la tecnología XTreme integrada en MobiControl, control remoto para soporte tecnico en tiempo real y Kiosk Mode con HTML5 nativo. Estas capacidades estan ausentes o son limitadas en MDM genericos. SOTI esta optimizado para verticales de logística, retail, manufactura y salud.' },
      { q: 'Qué dispositivos soporta SOTI MobiControl?', a: 'SOTI MobiControl soporta Android 5+, iOS 11+, iPadOS, macOS y Windows 10/11, además de hardware especializado como escaneres y terminales Zebra (TC21, TC26), Honeywell (CT40, CT60), Panasonic Toughbook, impresoras industriales Zebra y kioscos interactivos. El enrolamiento express es compatible con Apple DEP, Android Zero-Touch, Samsung Knox Mobile Enrollment y Windows Autopilot.' },
      { q: 'Cuánto cuesta SOTI MobiControl?', a: 'SOTI MobiControl se comercializa mediante cotizacion personalizada según número de dispositivos, sistemas operativos y modulos requeridos de la SOTI ONE Platform. No existe una lista de precios publica. Contacte a Starsolution para recibir una propuesta ajustada al tamaño y necesidades específicas de su organización.' },
      { q: 'Qué otros productos incluye la SOTI ONE Platform?', a: 'La SOTI ONE Platform reune: SOTI MobiControl (EMM/UEM principal), SOTI XSight (diagnóstico e inteligencia de soporte para flotas de dispositivos moviles), SOTI Snap (creacion no-code de apps moviles multiplataforma), SOTI Connect (gestión del ciclo de vida de impresoras moviles e industriales) y SOTI Identity (autenticación centralizada y SSO). Starsolution integra los modulos que mejor se ajusten a la operación de su empresa.' },
    ]),
  },
  'cableado-estructurado': {
    title: 'Cableado Estructurado Bogotá | Starsolution',
    description: 'Instalacion de cableado estructurado certificado en Bogotá y Colombia. Redes Cat6/Cat6A, fibra optica, certificación Fluke. Cotice gratis.',
    keywords: 'cableado estructurado Bogotá, instalacion redes empresariales, Cat6 Cat6A, fibra optica, certificación redes Colombia',
    canonical: `${BASE_URL}/cableado-estructurado/`,
    ogTitle: 'Cableado Estructurado Certificado',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Infraestructura', url: '/#infraestructura' }, { name: 'Cableado Estructurado', url: '/cableado-estructurado/' }],
    jsonLd: service('Cableado Estructurado', 'Structured Cabling Installation'),
    // faqJsonLd retirado: declaraba 3 preguntas que no existen en la pagina.
    // Google exige que la FAQ marcada este visible. Contenido recuperable en git
    // (commit anterior a este); conviene renderizarlo en la pagina y reponerlo.
  },
  'equipos-computo': {
    title: 'Equipos de Computo Empresariales | Starsolution',
    description: 'Venta de equipos de computo empresariales: laptops, desktops, workstations y All-in-One. Marcas lideres con garantía extendida en Colombia.',
    keywords: 'equipos computo empresas Colombia, laptops corporativos, desktops empresariales, workstations, hardware Bogotá',
    canonical: `${BASE_URL}/equipos-computo/`,
    ogTitle: 'Equipos de Computo para Empresas',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Infraestructura', url: '/#infraestructura' }, { name: 'Equipos de Computo', url: '/equipos-computo/' }],
    jsonLd: product('Equipos de Computo Empresariales', 'Starsolution', 'Laptops, desktops, workstations y All-in-One para empresas', { rating: { value: '4.8', count: '64' }, image: `${BASE_URL}/og-default.png` }),
    // faqJsonLd retirado: declaraba 3 preguntas que no existen en la pagina.
    // Contenido recuperable en git; conviene renderizarlo y reponer el marcado.
  },
  brother: {
    title: 'Impresoras Brother para Empresas Colombia | Starsolution',
    description: 'Impresoras Brother para empresas en Colombia: línea Workhorse, láser, multifunción y escáneres ADS. Consumibles originales y soporte en español.',
    keywords: 'impresoras Brother Colombia, Brother Workhorse, impresoras Brother empresas, multifunción láser, escáner Brother ADS, consumibles originales Brother',
    canonical: `${BASE_URL}/brother/`,
    ogTitle: 'Impresoras Brother para Empresas en Colombia',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Infraestructura', url: '/#infraestructura' }, { name: 'Brother', url: '/brother/' }],
    jsonLd: product('Impresoras Brother Empresariales', 'Brother', 'Impresoras láser, multifuncionales y escáneres de la línea Brother Workhorse con seguridad Triple Layer Security y consumibles originales', { rating: { value: '4.7', count: '50' }, image: `${BASE_URL}/og-default.png` }),
    // faqJsonLd retirado: declaraba 4 preguntas que no existen en la pagina.
    // Es el contenido FAQ mas solido del sitio (modelos, premios con anio,
    // capacidades). Recuperable en git: merece renderizarse y reponerse.
  },

  // =====================================================
  // EMPRESA
  // =====================================================
  'sobre-nosotros': {
    title: 'Sobre Nosotros | Starsolution S.A.S.',
    description: 'Starsolution S.A.S.: 13+ años en ciberseguridad y seguridad informática empresarial. Oficinas en Colombia, Venezuela y Miami. Equipo CEH, OSCP, CISSP.',
    keywords: 'Starsolution, empresa ciberseguridad Colombia, sobre nosotros, equipo expertos seguridad, historia',
    canonical: `${BASE_URL}/sobre-nosotros/`,
    ogTitle: 'Sobre Nosotros - Starsolution S.A.S.',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Sobre Nosotros', url: '/sobre-nosotros/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Sobre Starsolution S.A.S.',
      mainEntity: { ...ORG, foundingDate: '2013', numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 15 } },
    },
  },
  contacto: {
    title: 'Contacto - Ciberseguridad Empresarial | Starsolution Colombia',
    description: 'Contacte a Starsolution: ciberseguridad, equipos de computo y redes. Oficinas en Bogotá, Caracas y Miami. Respuesta en menos de 2 horas.',
    keywords: 'contacto Starsolution, teléfono, email, oficinas Bogotá, asesoria ciberseguridad gratuita',
    canonical: `${BASE_URL}/contacto/`,
    ogTitle: 'Contacto - Starsolution',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    hreflang: HREFLANG_CONTACTO,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Contacto', url: '/contacto/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contacto Starsolution',
      url: `${BASE_URL}/contacto/`,
      mainEntity: { ...ORG, telephone: '+573007010017', email: 'contacto@star-ti.com' },
    },
  },
  gracias: {
    title: 'Gracias por Contactarnos | Starsolution',
    description: 'Gracias por contactar a Starsolution. Te responderemos en menos de 2 horas con una propuesta personalizada.',
    keywords: 'gracias, confirmacion contacto, starsolution',
    canonical: `${BASE_URL}/gracias/`,
    ogTitle: 'Gracias - Starsolution',
    ogType: 'website',
    noindex: true,
  },

  // =====================================================
  // LEGAL
  // =====================================================
  terminos: {
    title: 'Terminos y Condiciones | Starsolution',
    description: 'Terminos y Condiciones de uso de los servicios de Starsolution S.A.S. Derechos, obligaciones y políticas de servicio.',
    keywords: 'terminos condiciones, política uso, derechos obligaciones, starsolution',
    canonical: `${BASE_URL}/terminos/`,
    ogTitle: 'Terminos y Condiciones',
    ogType: 'website',
  },
  privacidad: {
    title: 'Política de Privacidad | Starsolution',
    description: 'Política de Privacidad de Starsolution S.A.S. Como recopilamos, usamos y protegemos su información personal conforme a la ley colombiana.',
    keywords: 'política privacidad, datos personales, protección información, Starsolution',
    canonical: `${BASE_URL}/privacidad/`,
    ogTitle: 'Política de Privacidad',
    ogType: 'website',
  },
  'politica-de-proteccion-de-datos-personales': {
    title: 'Protección de Datos Personales | Starsolution',
    description: 'Política de Protección de Datos Personales conforme a Ley 1581 de 2012. Habeas data y tratamiento de información personal.',
    keywords: 'protección datos personales, habeas data, ley 1581, tratamiento datos Colombia',
    canonical: `${BASE_URL}/politica-de-proteccion-de-datos-personales/`,
    ogTitle: 'Protección de Datos Personales - Ley 1581',
    ogType: 'website',
  },

  // =====================================================
  // REGIONES
  // =====================================================
  venezuela: {
    title: 'Ciberseguridad Empresarial Venezuela | Starsolution',
    description: 'Soluciones de ciberseguridad para empresas en Venezuela. Hacking ético, ISO 27001, antivirus corporativo. Oficina en Caracas, soporte 24/7.',
    keywords: 'ciberseguridad Venezuela, antivirus empresas Caracas, hacking ético Venezuela, ISO 27001 Venezuela, seguridad informática',
    canonical: `${BASE_URL}/venezuela/`,
    ogTitle: 'Starsolution Venezuela - Ciberseguridad Empresarial',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    hreflang: HREFLANG_HOME,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Venezuela', url: '/venezuela/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Starsolution Venezuela',
      description: 'Ciberseguridad empresarial y soluciones tecnológicas en Venezuela',
      url: `${BASE_URL}/venezuela/`,
      telephone: '+584241499856',
      email: 'venezuela@star-ti.com',
      address: { '@type': 'PostalAddress', streetAddress: 'Ed. Centro Empresarial Torre Araujo, M. OF A-1', addressLocality: 'Caracas', addressCountry: 'VE' },
      parentOrganization: ORG,
      openingHours: 'Mo-Fr 08:00-17:00',
      priceRange: '$$',
      paymentAccepted: 'Wire Transfer, Zelle, Crypto',
      currenciesAccepted: 'USD',
      areaServed: [
        { '@type': 'Country', name: 'Venezuela' },
        { '@type': 'City', name: 'Caracas' },
        { '@type': 'City', name: 'Maracaibo' },
        { '@type': 'City', name: 'Valencia' },
        { '@type': 'City', name: 'Barquisimeto' },
      ],
    },
    faqJsonLd: faqSchema([
      { q: '¿Trabajan con empresas de todos los tamaños en Venezuela?', a: 'Sí. Atendemos desde PYMES con 10 equipos hasta corporaciones con miles de endpoints. Nuestros planes se adaptan al presupuesto en USD del mercado venezolano.' },
      { q: '¿Pueden facturar en dólares?', a: 'Sí. Toda nuestra facturación para Venezuela se realiza en USD, facilitando la planificación presupuestaria en un entorno de alta inflación.' },
      { q: '¿Ofrecen soporte remoto desde Colombia?', a: 'Sí. Nuestro equipo en Bogotá provee soporte remoto 24/7 para clientes en Venezuela, complementado con visitas presenciales en Caracas cuando se requiere.' },
      { q: '¿Qué soluciones funcionan mejor con la conectividad de Venezuela?', a: 'Recomendamos soluciones cloud-native como Bitdefender GravityZone Cloud y Kaspersky Cloud que funcionan con bajo ancho de banda. Para empresas con conectividad limitada, implementamos soluciones on-premise.' },
      { q: '¿Pueden hacer pentesting remoto a empresas en Venezuela?', a: 'Absolutamente. El 90% de nuestros pentests se realizan de forma remota. Solo necesitamos acceso VPN o credenciales de acceso previamente acordadas.' },
    ]),
  },
  'venezuela-contacto': {
    title: 'Contacto Venezuela | Starsolution Caracas',
    description: 'Contacte a Starsolution Venezuela en Caracas. Consultoría en ciberseguridad, soporte técnico y soluciones TI. Respuesta inmediata.',
    keywords: 'contacto Starsolution Venezuela, ciberseguridad Caracas, soporte técnico Venezuela',
    canonical: `${BASE_URL}/venezuela/contacto/`,
    ogTitle: 'Contacto - Starsolution Venezuela',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    hreflang: HREFLANG_CONTACTO,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Venezuela', url: '/venezuela/' }, { name: 'Contacto', url: '/venezuela/contacto/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contacto Starsolution Venezuela',
      url: `${BASE_URL}/venezuela/contacto/`,
    },
  },
  miami: {
    title: 'Enterprise Cybersecurity Miami | Starsolution',
    description: 'Enterprise cybersecurity in Miami and South Florida. Bilingual team, ethical hacking, ISO 27001, EDR/XDR. Free consultation.',
    keywords: 'cybersecurity Miami, enterprise antivirus South Florida, ethical hacking Miami, ISO 27001 Florida, IT security company',
    canonical: `${BASE_URL}/miami/`,
    ogTitle: 'Starsolution Florida - Enterprise Cybersecurity in Miami & Orlando',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    lang: 'en',
    hreflang: HREFLANG_HOME,
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Miami', url: '/miami/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Starsolution Florida',
      description: 'Enterprise cybersecurity and IT solutions across Florida, serving Miami and South Florida from our Orlando office',
      url: `${BASE_URL}/miami/`,
      telephone: '+13214386777',
      email: 'miami@star-ti.com',
      address: { '@type': 'PostalAddress', streetAddress: '8103 Gables Commons Dr', addressLocality: 'Orlando', addressRegion: 'FL', postalCode: '32821', addressCountry: 'US' },
      parentOrganization: ORG,
      openingHours: 'Mo-Fr 09:00-18:00',
      priceRange: '$$',
      paymentAccepted: 'Cash, Credit Card, Wire Transfer',
      currenciesAccepted: 'USD',
      areaServed: [
        { '@type': 'City', name: 'Orlando' },
        { '@type': 'City', name: 'Miami' },
        { '@type': 'City', name: 'Fort Lauderdale' },
        { '@type': 'City', name: 'Coral Gables' },
        { '@type': 'City', name: 'Doral' },
        { '@type': 'City', name: 'Boca Raton' },
        { '@type': 'City', name: 'West Palm Beach' },
      ],
    },
    faqJsonLd: faqSchema([
      { q: 'Do you offer cybersecurity services in Spanish?', a: 'Yes. Our US team is fully bilingual English/Spanish, allowing us to serve both English-speaking and Latin American businesses in Florida without language barriers. All deliverables, reports, and support are available in both languages.' },
      { q: 'What areas in South Florida do you serve?', a: 'We serve Miami-Dade, Broward, and Palm Beach counties including Miami, Fort Lauderdale, Coral Gables, Doral, and Boca Raton.' },
      { q: 'Do I need to be in Miami for your services?', a: 'No. We offer remote cybersecurity assessments, managed EDR/XDR, and virtual CISO services for businesses anywhere in Florida and Latin America.' },
      { q: 'What compliance frameworks do you help with?', a: 'We help with HIPAA, SOC 2, PCI DSS, CMMC, NIST CSF, and ISO 27001 compliance for South Florida businesses.' },
      { q: 'How quickly can you respond to a security incident?', a: 'Our SOC provides under 1 hour incident response for managed clients, with 24/7 availability, plus on-site dispatch across South Florida when required.' },
    ]),
  },
  // =====================================================
  // BLOG
  // =====================================================
  blog: {
    title: 'Blog de Ciberseguridad Empresarial | Starsolution',
    description: 'Artículos sobre ciberseguridad empresarial en Colombia: ransomware, respuesta a incidentes, ISO 27001, Zero Trust y cifrado. Guías prácticas de Starsolution.',
    keywords: 'blog ciberseguridad Colombia, artículos seguridad informática, ransomware, ISO 27001, Zero Trust, respuesta a incidentes',
    canonical: `${BASE_URL}/blog/`,
    ogTitle: 'Blog de Ciberseguridad Empresarial',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Blog', url: '/blog/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog de Ciberseguridad Empresarial de Starsolution',
      description: 'Guías y análisis sobre ciberseguridad empresarial en Colombia.',
      url: `${BASE_URL}/blog/`,
      publisher: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL, logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` } },
    },
  },
  'blog/perfect-forward-secrecy': {
    title: 'Perfect Forward Secrecy: Guia para Empresas | Starsolution',
    description: 'Que es Perfect Forward Secrecy (PFS) y por que su empresa lo necesita hoy. Proteja comunicaciones cifradas aunque las claves maestras sean comprometidas.',
    keywords: 'Perfect Forward Secrecy, PFS empresas, cifrado comunicaciones, TLS seguridad, protección criptografica Colombia',
    canonical: `${BASE_URL}/blog/perfect-forward-secrecy/`,
    ogTitle: 'Perfect Forward Secrecy Explicado para Empresas',
    ogType: 'article',
    ogImage: `${BASE_URL}/assets/blog-ciberseguridad-realidad-virtual.webp`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Blog', url: '/#blog' }, { name: 'Perfect Forward Secrecy', url: '/blog/perfect-forward-secrecy/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Perfect Forward Secrecy Explicado para Empresas',
      description: 'Que es PFS y como protege las comunicaciones cifradas de su empresa incluso si las claves son comprometidas',
      datePublished: '2025-01-24',
      dateModified: '2026-07-29',
      author: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL },
      publisher: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL, logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` } },
      image: `${BASE_URL}/assets/blog-ciberseguridad-realidad-virtual.webp`,
      url: `${BASE_URL}/blog/perfect-forward-secrecy/`,
    },
    faqJsonLd: faqSchema([
      { q: '¿PFS afecta el rendimiento de nuestros servidores?', a: 'El impacto es mínimo en hardware moderno. ECDHE agrega entre 1 y 5 milisegundos por handshake TLS, imperceptible para usuarios finales. Los beneficios de seguridad superan ampliamente el costo computacional marginal.' },
      { q: '¿TLS 1.3 incluye PFS automáticamente?', a: 'Sí. TLS 1.3 eliminó todos los conjuntos de cifrado sin forward secrecy. Si su organización migró completamente a TLS 1.3, PFS está garantizado. Muchos sistemas todavía soportan TLS 1.2 como fallback, donde PFS debe configurarse explícitamente.' },
      { q: '¿PFS protege también el tráfico interno entre microservicios?', a: 'Sí. El tráfico interno entre servicios (API-to-API, bases de datos, colas de mensajes) suele ignorarse en las auditorías de PFS. Las comunicaciones internas son igual de valiosas para un atacante que ya haya comprometido un segmento de red.' },
    ]),
  },
  'blog/zero-trust-2025': {
    title: 'Arquitectura Zero Trust 2026: Guía Empresarial',
    description: 'Implemente Zero Trust Architecture en su empresa. Nunca confie, siempre verifique: el modelo de seguridad que protege organizaciones modernas en 2026.',
    keywords: 'Zero Trust Architecture, seguridad empresarial 2026, ZTNA, identidad digital, microsegmentacion Colombia',
    canonical: `${BASE_URL}/blog/zero-trust-2025/`,
    ogTitle: 'Arquitectura Zero Trust para Empresas en 2026',
    ogType: 'article',
    ogImage: `${BASE_URL}/assets/blog-inteligencia-artificial-seguridad.webp`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Blog', url: '/#blog' }, { name: 'Zero Trust', url: '/blog/zero-trust-2025/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Arquitectura Zero Trust para Empresas en 2026',
      description: 'Guia completa para implementar Zero Trust Architecture en organizaciones colombianas',
      datePublished: '2025-01-22',
      dateModified: '2026-07-29',
      author: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL },
      publisher: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL, logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` } },
      image: `${BASE_URL}/assets/blog-inteligencia-artificial-seguridad.webp`,
      url: `${BASE_URL}/blog/zero-trust-2025/`,
    },
    faqJsonLd: faqSchema([
      { q: '¿Zero Trust es un producto que se compra?', a: 'No. Zero Trust es una arquitectura, no un producto. Ningún proveedor ofrece "Zero Trust en una caja". Los productos (EDR/XDR, ZTNA, PAM, SIEM/SOAR) son habilitadores de cada pilar, pero la arquitectura se construye combinándolos alrededor de la identidad como nuevo perímetro.' },
      { q: '¿Por dónde debe empezar una empresa a implementar Zero Trust?', a: 'Por la identidad, no por la red. En Zero Trust la identidad es el perímetro. Lo primero es inventariar identidades y activos críticos, desplegar MFA en todos los sistemas y ganar visibilidad de endpoints con EDR/XDR, antes de abordar microsegmentación o ZTNA.' },
      { q: '¿Cuánto tarda implementar Zero Trust en una empresa mediana?', a: 'Una hoja de ruta realista para una empresa mediana en Colombia toma entre 10 y 12 meses en cuatro fases: inventario y clasificación, identidad y dispositivos, red y aplicaciones, y datos y automatización. La adopción es incremental y empieza a reducir riesgo desde las primeras fases.' },
      { q: '¿Zero Trust reemplaza a la VPN?', a: 'Sí, en la práctica ZTNA (Zero Trust Network Access) reemplaza a la VPN tradicional. En lugar de conceder acceso amplio a la red tras un único login, ZTNA otorga acceso granular por aplicación con verificación continua de identidad y postura del dispositivo.' },
      { q: '¿Cómo ayuda Zero Trust al cumplimiento en Colombia?', a: 'Cada decisión de acceso en una arquitectura Zero Trust se registra, generando la evidencia documental que exigen los auditores. Esto simplifica las auditorías de ISO 27001, la Ley 1581 y los requerimientos sectoriales de la Superintendencia Financiera y el sector salud.' },
    ]),
  },
  'blog/iso-27001-regulaciones': {
    title: 'ISO 27001:2022 y Empresas Colombianas: Que Cambia | Starsolution',
    description: 'Análisis de los cambios de ISO 27001:2022 y su impacto en empresas colombianas. Nuevos controles, plazos de transicion y como prepararse con Starsolution.',
    keywords: 'ISO 27001 2022 Colombia, nuevas regulaciones ISO 27001, SGSI actualizacion, cumplimiento normativo Colombia, transicion ISO 27001',
    canonical: `${BASE_URL}/blog/iso-27001-regulaciones/`,
    ogTitle: 'ISO 27001:2022 y las Empresas Colombianas: Que Cambia',
    ogType: 'article',
    ogImage: `${BASE_URL}/assets/blog-zero-trust-arquitectura.webp`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Blog', url: '/#blog' }, { name: 'ISO 27001 Regulaciones', url: '/blog/iso-27001-regulaciones/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'ISO 27001:2022 y las Empresas Colombianas: Todo lo que Cambia',
      description: 'Análisis de los cambios de ISO 27001:2022 y su impacto en las organizaciones colombianas',
      datePublished: '2025-01-20',
      dateModified: '2025-01-20',
      author: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL },
      publisher: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL, logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` } },
      image: `${BASE_URL}/assets/blog-zero-trust-arquitectura.webp`,
      url: `${BASE_URL}/blog/iso-27001-regulaciones/`,
    },
  },

  'blog/ransomware-empresas-colombia': {
    title: 'Ransomware en Colombia: Prevención y Respuesta 2026',
    description: 'Como prevenir y responder al ransomware en Colombia. Estadisticas 2025-2026, fases del ataque, capas de defensa EDR/backup/email y plan de respuesta a incidentes.',
    keywords: 'ransomware empresas Colombia, protección ransomware, como prevenir ransomware empresa, ataque ransomware Colombia, respuesta incidentes ransomware, EDR anti-ransomware',
    canonical: `${BASE_URL}/blog/ransomware-empresas-colombia/`,
    ogTitle: 'Ransomware en Empresas Colombianas: Guia de Prevención y Respuesta 2026',
    ogType: 'article',
    ogImage: `${BASE_URL}/assets/blog-ciberseguridad-realidad-virtual.webp`,
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Blog', url: '/#blog' },
      { name: 'Ransomware Empresas Colombia', url: '/blog/ransomware-empresas-colombia/' },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Ransomware en Empresas Colombianas: Guia de Prevención y Respuesta 2026',
      description: 'Guia completa sobre como prevenir y responder a ataques de ransomware en empresas colombianas, con estadisticas 2025-2026, fases del ataque y plan de respuesta a incidentes',
      datePublished: '2026-03-22',
      dateModified: '2026-03-22',
      author: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'Starsolution S.A.S.',
        url: BASE_URL,
        logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
      },
      image: `${BASE_URL}/assets/blog-ciberseguridad-realidad-virtual.webp`,
      url: `${BASE_URL}/blog/ransomware-empresas-colombia/`,
      about: { '@type': 'Thing', name: 'Ransomware' },
      keywords: 'ransomware Colombia, protección ransomware empresas, respuesta incidentes, EDR, backup',
    },
    faqJsonLd: faqSchema([
      {
        q: '¿Puede el ransomware cifrar mis backups en la nube?',
        a: 'Si los backups estan montados como unidad de red sincronizada (OneDrive, Google Drive), el ransomware puede cifrar los archivos locales y la sincronizacion propagara el cifrado a la nube. La protección requiere backups con versionado inmutable y retencion independiente del endpoint comprometido.',
      },
      {
        q: '¿Qué hago si ya recibi una nota de rescate de ransomware?',
        a: 'Primer paso: aislar los equipos afectados de la red desconectando ethernet y deshabilitando WiFi, pero sin apagar los equipos para preservar evidencia forense en RAM. Segundo: notificar al CISO y equipo legal. Tercero: contactar a un especialista en respuesta a incidentes. No comunicar el ataque publicamente ni en redes sociales hasta tener asesoria legal.',
      },
      {
        q: '¿Cómo previene el EDR los ataques de ransomware?',
        a: 'Un EDR (Endpoint Detection and Response) monitorea el comportamiento de todos los procesos en tiempo real. Cuando detecta patrones tipicos de ransomware, como apertura masiva de archivos y cambios de extension en milisegundos, bloquea el proceso instantaneamente y puede revertir automaticamente los archivos modificados a su estado anterior, limitando el daño.',
      },
      {
        q: '¿Cuánto cuesta un ataque de ransomware para una empresa colombiana?',
        a: 'El costo promedio en Latinoamerica supero los USD 850,000 en 2025 según IBM Cost of a Data Breach. Este costo incluye tiempo de inactividad operacional (el componente mas alto), recuperación de sistemas, investigacion forense, notificaciones legales y daño reputacional. En algunos casos, el rescate exigido represento menos del 30% del costo total del incidente.',
      },
      {
        q: '¿Qué obligaciones legales tiene una empresa colombiana tras sufrir ransomware?',
        a: 'Si el ataque compromete datos personales, la Ley 1581 de 2012 puede exigir notificación a la Superintendencia de Industria y Comercio (SIC) dentro de los 15 días habiles siguientes al conocimiento del incidente. Las empresas del sector financiero tienen un plazo de 48 horas para notificar a la Superintendencia Financiera. Se recomienda involucrar al equipo legal desde el primer momento del incidente.',
      },
    ]),
  },

  'blog/respuesta-incidentes-ciberseguridad': {
    title: 'Respuesta a Incidentes: Plan Paso a Paso | Starsolution',
    description: 'Guia completa de respuesta a incidentes de ciberseguridad para empresas colombianas. Las 6 fases NIST, equipo CSIRT, herramientas y normativa Ley 1581 y SFC.',
    keywords: 'respuesta a incidentes ciberseguridad, plan respuesta incidentes, CSIRT empresas Colombia, NIST SP 800-61, gestión incidentes seguridad, incidente ransomware Colombia',
    canonical: `${BASE_URL}/blog/respuesta-incidentes-ciberseguridad/`,
    ogTitle: 'Respuesta a Incidentes de Ciberseguridad: Plan Paso a Paso para Empresas',
    ogType: 'article',
    ogImage: `${BASE_URL}/assets/robot-ia-laboratorio-monitores.webp`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Blog', url: '/#blog' }, { name: 'Respuesta a Incidentes', url: '/blog/respuesta-incidentes-ciberseguridad/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Respuesta a Incidentes de Ciberseguridad: Plan Paso a Paso para Empresas',
      description: 'Guia completa con las 6 fases del marco NIST para respuesta a incidentes de ciberseguridad en empresas colombianas, incluyendo equipo CSIRT, herramientas y obligaciones regulatorias.',
      datePublished: '2026-03-22',
      dateModified: '2026-03-22',
      author: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL },
      publisher: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL, logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` } },
      image: `${BASE_URL}/assets/robot-ia-laboratorio-monitores.webp`,
      url: `${BASE_URL}/blog/respuesta-incidentes-ciberseguridad/`,
      about: { '@type': 'Thing', name: 'Respuesta a Incidentes de Ciberseguridad' },
      keywords: 'respuesta incidentes, CSIRT, NIST SP 800-61, ciberseguridad Colombia, plan incidentes',
    },
    faqJsonLd: faqSchema([
      { q: '¿Qué es un CSIRT y toda empresa colombiana necesita uno?', a: 'Un CSIRT (Computer Security Incident Response Team) es el equipo responsable de gestionar incidentes de seguridad. No toda empresa necesita un CSIRT interno de tiempo completo, pero sí debe tener roles designados, un plan documentado y un proveedor externo con retainer de respuesta a incidentes. Para empresas con más de 100 empleados o que manejan datos sensibles, un modelo híbrido es la opción más costo-efectiva.' },
      { q: '¿Cuánto tiempo toma desarrollar un plan de respuesta a incidentes?', a: 'Para una empresa mediana (50-500 empleados), desarrollar un plan básico de respuesta a incidentes toma entre 4 y 8 semanas con apoyo de consultoría especializada. Un plan maduro con playbooks por tipo de incidente, simulacros y procedimientos de notificación legal toma entre 3 y 6 meses.' },
      { q: '¿Debo pagar el rescate si mi empresa es víctima de ransomware?', a: 'La recomendación general de las agencias de seguridad (CISA, FBI, Europol, COLCERT) es no pagar. El 80% de las organizaciones que pagan son atacadas nuevamente dentro de 12 meses. La alternativa es: aislar los sistemas afectados, evaluar si los backups son recuperables, contactar a un especialista en respuesta a incidentes y denunciar ante la Fiscalía y COLCERT.' },
      { q: '¿Estoy obligado a reportar un incidente de ciberseguridad en Colombia?', a: 'Depende del sector y el tipo de incidente. Si el incidente involucra datos personales, la Ley 1581 exige notificación a la SIC. Si su empresa es del sector financiero vigilada por la SFC, debe notificar en 4 horas. Si el incidente afecta infraestructura crítica, debe reportar al COLCERT. Ante la duda, notifique: la SIC considera la cooperación proactiva como factor atenuante en sanciones.' },
      { q: '¿Cuál es la diferencia entre respuesta a incidentes y recuperación ante desastres?', a: 'La respuesta a incidentes se enfoca en detectar, contener y erradicar amenazas de seguridad activas. La recuperación ante desastres (DR) cubre la restauración de operaciones después de cualquier interrupción mayor. Ambos son componentes de la continuidad del negocio, pero el plan de respuesta a incidentes tiene un énfasis en preservación de evidencia que el DR no requiere.' },
    ]),
  },

  // =====================================================
  // REPORTS
  // =====================================================
  'informe-ciberseguridad-colombia-2026': {
    title: 'Informe de Ciberseguridad Colombia 2026 | +3,000 Empresas',
    description: 'El análisis más completo sobre ciberamenazas en Colombia: ransomware, BEC, phishing y brechas de datos. Datos de +3,000 empresas colombianas. Descargue gratis.',
    keywords: 'informe ciberseguridad Colombia 2026, estadisticas ciberataques Colombia, costo brecha datos Colombia, amenazas ciberneticas empresas, ransomware Colombia, phishing Colombia',
    canonical: `${BASE_URL}/informe-ciberseguridad-colombia-2026/`,
    ogTitle: 'Informe de Ciberseguridad Empresarial Colombia 2026',
    ogType: 'article',
    ogImage: `${BASE_URL}/og-default.png`,
    breadcrumb: [{ name: 'Inicio', url: '/' }, { name: 'Informe 2026', url: '/informe-ciberseguridad-colombia-2026/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Informe de Ciberseguridad Empresarial Colombia 2026',
      description: 'El análisis más completo sobre ciberamenazas en Colombia con datos de más de 3,000 empresas colombianas. Ransomware, BEC, phishing, costos de brechas y recomendaciones.',
      datePublished: '2026-01-15',
      dateModified: '2026-03-01',
      author: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL },
      publisher: { '@type': 'Organization', name: 'Starsolution S.A.S.', url: BASE_URL, logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` } },
      image: `${BASE_URL}/og-default.png`,
      url: `${BASE_URL}/informe-ciberseguridad-colombia-2026/`,
      about: { '@type': 'Thing', name: 'Ciberseguridad Empresarial en Colombia' },
      keywords: 'ciberseguridad Colombia, ransomware, phishing, brecha de datos, ISO 27001, PYMES Colombia',
    },
    faqJsonLd: faqSchema([
      { q: '¿De dónde provienen los datos del informe?', a: 'Los datos provienen de tres fuentes: (1) análisis anonimizado de incidentes en nuestra base de más de 3,000 clientes empresariales en Colombia, (2) bases de datos públicas de brechas como COLCERT, Policía Nacional y Have I Been Pwned, y (3) el Verizon Data Breach Investigations Report (DBIR) con contexto latinoamericano.' },
      { q: '¿Puedo citar este informe en presentaciones académicas o corporativas?', a: 'Sí. Este informe es de libre difusión para uso académico, periodístico y corporativo, siempre que se cite la fuente como: "Starsolution S.A.S. – Informe de Ciberseguridad Empresarial Colombia 2026, star-ti.com". Para uso comercial o redistribución masiva, contáctenos.' },
      { q: '¿Cada cuánto se actualiza el informe?', a: 'El informe se publica anualmente cada enero con los datos del año anterior. Sin embargo, actualizamos las estadísticas clave trimestralmente cuando ocurren incidentes significativos en el ecosistema colombiano. Suscríbase a nuestra lista para recibir actualizaciones automáticas.' },
      { q: '¿Mi empresa podría estar en riesgo según los datos del informe?', a: 'Estadísticamente, el 73% de empresas colombianas sufrió al menos un incidente de seguridad en 2025. Si su empresa opera en los sectores financiero, salud, gobierno o manufactura, el riesgo es aún mayor. Ofrecemos un diagnóstico gratuito de exposición que analiza su superficie de ataque en menos de 48 horas.' },
      { q: '¿Cómo solicito un diagnóstico personalizado de ciberseguridad?', a: 'Puede solicitar su diagnóstico gratuito en nuestra página de contacto o escribiéndonos a contacto@star-ti.com. El diagnóstico incluye análisis de superficie de ataque externa, revisión de credenciales filtradas y un reporte ejecutivo con prioridades de remediación, sin costo ni compromiso.' },
    ]),
  },

  'miami-contacto': {
    title: 'Contact Miami | Starsolution South Florida',
    description: 'Contact Starsolution in Florida for enterprise cybersecurity. Bilingual English/Spanish team. Free consultation, same-day response.',
    keywords: 'contact Starsolution Florida, cybersecurity Miami, cybersecurity Orlando, IT support South Florida',
    canonical: `${BASE_URL}/miami/contacto/`,
    ogTitle: 'Contact - Starsolution Florida',
    ogType: 'website',
    ogImage: `${BASE_URL}/og-default.png`,
    lang: 'en',
    hreflang: HREFLANG_CONTACTO,
    breadcrumb: [{ name: 'Home', url: '/' }, { name: 'Miami', url: '/miami/' }, { name: 'Contact', url: '/miami/contacto/' }],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Starsolution Florida',
      url: `${BASE_URL}/miami/contacto/`,
    },
  },
};
