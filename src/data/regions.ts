export interface RegionData {
  slug: string;
  name: string;
  country: string;
  countryCode: string;
  locale: string;
  hreflang: string;
  city: string;
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
    address: 'Caracas, Venezuela',
    phone: '+584241234567',
    phoneDisplay: '+58 424 123 4567',
    email: 'venezuela@star-ti.com',
    whatsapp: '584241234567',
    timezone: 'America/Caracas',
    currency: 'USD',
    hours: 'Lun - Vie: 8am - 5pm VET',
    heroTitle: 'Ciberseguridad Empresarial en Venezuela',
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
    countryCode: 'US',
    locale: 'en-US',
    hreflang: 'en-US',
    city: 'Miami',
    address: 'Miami, FL, United States',
    phone: '+13051234567',
    phoneDisplay: '+1 (305) 123-4567',
    email: 'miami@star-ti.com',
    whatsapp: '13051234567',
    timezone: 'America/New_York',
    currency: 'USD',
    hours: 'Mon - Fri: 9am - 6pm EST',
    heroTitle: 'Enterprise Cybersecurity in Miami',
    heroSubtitle: 'Comprehensive cybersecurity solutions for businesses in South Florida. Bilingual team (English/Spanish) serving the Miami-Dade, Broward, and Palm Beach markets.',
    services: [
      'Ethical Hacking & Penetration Testing',
      'ISO 27001 Consulting',
      'Enterprise Antivirus (Bitdefender, Kaspersky)',
      'Data Loss Prevention (DLP)',
      'Red Team & BAS (Breach and Attack Simulation)',
      'Structured Cabling',
      'IT Equipment & Hardware',
      'Mobile Device Management (SOTI)',
    ],
    stats: [
      { label: 'Businesses Protected in South Florida', value: '200+' },
      { label: 'Years of Experience', value: '12+' },
      { label: 'Bilingual Team Members', value: '15+' },
      { label: 'Support Availability', value: '24/7' },
    ],
    testimonialRegion: 'South Florida businesses',
  },
};

export const serviceLinks = [
  { href: '/hacking-etico', label: 'Hacking Etico y Pentesting', labelEn: 'Ethical Hacking & Pentesting' },
  { href: '/iso27001', label: 'Consultoria ISO 27001', labelEn: 'ISO 27001 Consulting' },
  { href: '/bitdefender', label: 'Bitdefender GravityZone', labelEn: 'Bitdefender GravityZone' },
  { href: '/kaspersky', label: 'Kaspersky Endpoint Security', labelEn: 'Kaspersky Endpoint Security' },
  { href: '/hornet-security', label: 'Hornet Security 365', labelEn: 'Hornet Security 365' },
  { href: '/dlp-prevencion-perdida-datos', label: 'Software DLP', labelEn: 'DLP Software' },
  { href: '/rthreat-bogota-colombia', label: 'Red Team & BAS', labelEn: 'Red Team & BAS' },
  { href: '/teamviewer', label: 'TeamViewer', labelEn: 'TeamViewer' },
  { href: '/anydesk', label: 'AnyDesk', labelEn: 'AnyDesk' },
  { href: '/soti-mdm', label: 'SOTI MobiControl', labelEn: 'SOTI MobiControl' },
  { href: '/cableado-estructurado', label: 'Cableado Estructurado', labelEn: 'Structured Cabling' },
  { href: '/equipos-computo', label: 'Equipos de Computo', labelEn: 'IT Equipment' },
  { href: '/brother', label: 'Distribuidor Brother', labelEn: 'Brother Distributor' },
];
