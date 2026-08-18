export interface RegionData {
  slug: string;
  name: string;
  country: string;
  // Nombre del pais para la landing en ingles (/miami/). Solo lo lee
  // RegionLanding cuando isEnglish; opcional en las regiones en espanol.
  countryEn?: string;
  countryCode: string;
  locale: string;
  hreflang: string;
  city: string;
  serviceMarket?: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
  timezone: string;
  currency: string;
  hours: string;
  heroTitle: string;
  heroSubtitle: string;
  services: string[];
  stats: { label: string; value: string }[];
  testimonialRegion: string;
}

export const regions: Record<string, RegionData> = {
  colombia: {
    slug: '',
    name: 'Colombia',
    country: 'Colombia',
    countryCode: 'CO',
    locale: 'es-CO',
    hreflang: 'es-CO',
    city: 'Bogota',
    address: 'Calle 52 A # 22 - 16, Bogota',
    phone: '+573007010017',
    phoneDisplay: '+57 300 701 0017',
    email: 'contacto@star-ti.com',
    whatsapp: '573007010017',
    timezone: 'America/Bogota',
    currency: 'COP',
    hours: 'Lun - Vie: 8am - 6pm COT',
    heroTitle: 'Ciberseguridad Empresarial en Colombia',
    heroSubtitle: 'Soluciones integrales de seguridad informatica para empresas colombianas. Sede principal en Bogota con cobertura nacional.',
    services: [
      'Hacking Ético y Pentesting',
      'Consultoría ISO 27001',
      'Antivirus Corporativo (Bitdefender, Kaspersky)',
      'Software DLP',
      'Red Team y BAS',
      'Cableado Estructurado',
      'Equipos de Cómputo',
      'Gestión de Dispositivos Móviles (SOTI)',
    ],
    stats: [
      { label: 'Empresas Protegidas en Colombia', value: '2,500+' },
      { label: 'Años de Experiencia', value: '12+' },
      { label: 'Certificaciones Activas', value: '50+' },
      { label: 'Disponibilidad de Soporte', value: '24/7' },
    ],
    testimonialRegion: 'empresas colombianas',
  },
  venezuela: {
    slug: 'venezuela',
    name: 'Venezuela',
    country: 'Venezuela',
    countryCode: 'VE',
    locale: 'es-VE',
    hreflang: 'es-VE',
    city: 'Caracas',
    address: 'Ed. Centro Empresarial Torre Araujo, M. OF A-1, Caracas, Venezuela',
    phone: '+584241499856',
    phoneDisplay: '+58 424 149 9856',
    email: 'venezuela@star-ti.com',
    whatsapp: '584241499856',
    timezone: 'America/Caracas',
    currency: 'USD',
    hours: 'Lun - Vie: 8am - 5pm VET',
    heroTitle: 'Empresa de Ciberseguridad en Venezuela',
    heroSubtitle: 'Protección digital integral para empresas venezolanas. Oficina en Caracas con soporte remoto a nivel nacional. Más de 10 años atendiendo el mercado venezolano.',
    services: [
      'Hacking Ético y Pentesting',
      'Consultoría ISO 27001',
      'Antivirus Corporativo (Bitdefender, Kaspersky)',
      'Software DLP',
      'Acceso Remoto Empresarial (TeamViewer, AnyDesk)',
      'Equipos de Cómputo',
      'Gestión de Dispositivos Móviles (SOTI)',
      'Seguridad de Email (Hornet Security)',
    ],
    stats: [
      { label: 'Empresas Protegidas en Venezuela', value: '300+' },
      { label: 'Años en el Mercado Venezolano', value: '10+' },
      { label: 'Proyectos Exitosos', value: '150+' },
      { label: 'Soporte en Español', value: '24/7' },
    ],
    testimonialRegion: 'empresas venezolanas',
  },
  miami: {
    slug: 'miami',
    name: 'Miami',
    country: 'Estados Unidos',
    countryEn: 'the United States',
    countryCode: 'US',
    locale: 'en-US',
    hreflang: 'en-US',
    city: 'Orlando',
    address: '8103 Gables Commons Dr, Orlando, FL 32821, United States',
    phone: '+13214386777',
    phoneDisplay: '+1 (321) 438-6777',
    email: 'miami@star-ti.com',
    whatsapp: '13214386777',
    timezone: 'America/New_York',
    currency: 'USD',
    hours: 'Mon - Fri: 9am - 6pm EST',
    serviceMarket: 'Miami & Fort Lauderdale',
    heroTitle: 'Cybersecurity Services in Miami & Fort Lauderdale',
    heroSubtitle: 'Managed EDR/XDR, enterprise antivirus, SealPath data protection, pentesting and vCISO support for companies with 100 to 1,000 endpoints across Miami-Dade, Broward and South Florida.',
    services: [
      'Ethical Hacking & Penetration Testing',
      'Managed EDR/XDR',
      'ISO 27001 Consulting',
      'Enterprise Antivirus (Bitdefender, Kaspersky)',
      'SealPath IRM Data Protection',
      'Data Loss Prevention (DLP)',
      'Virtual CISO',
      'Red Team & BAS (Breach and Attack Simulation)',
      'Mobile Device Management (SOTI)',
    ],
    stats: [
      { label: 'Endpoint Environments', value: '100-1k' },
      { label: 'Years of Experience', value: '13+' },
      { label: 'Bilingual Team Members', value: '15+' },
      { label: 'Support Availability', value: '24/7' },
    ],
    testimonialRegion: 'South Florida businesses',
  },
};

export const serviceLinks = [
  { href: '/hacking-etico', label: 'Hacking Etico y Pentesting', labelEn: 'Ethical Hacking & Pentesting' },
  { href: '/iso-27001', label: 'Consultoría ISO 27001', labelEn: 'ISO 27001 Consulting' },
  { href: '/bitdefender', label: 'Bitdefender GravityZone', labelEn: 'Bitdefender GravityZone' },
  { href: '/kaspersky', label: 'Kaspersky Endpoint Security', labelEn: 'Kaspersky Endpoint Security' },
  { href: '/hornetsecurity', label: 'Hornet Security 365', labelEn: 'Hornet Security 365' },
  { href: '/dlp-prevencion-perdida-datos', label: 'Software DLP', labelEn: 'DLP Software' },
  { href: '/rthreat-bogota-colombia', label: 'Red Team & BAS', labelEn: 'Red Team & BAS' },
  { href: '/teamviewer', label: 'TeamViewer', labelEn: 'TeamViewer' },
  { href: '/anydesk', label: 'AnyDesk', labelEn: 'AnyDesk' },
  { href: '/soti-mdm', label: 'SOTI MobiControl', labelEn: 'SOTI MobiControl' },
  { href: '/cableado-estructurado', label: 'Cableado Estructurado', labelEn: 'Structured Cabling' },
  { href: '/equipos-computo', label: 'Equipos de Computo', labelEn: 'IT Equipment' },
  { href: '/brother', label: 'Distribuidor Brother', labelEn: 'Brother Distributor' },
];
