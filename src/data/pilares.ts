export interface Product {
  slug: string;
  brand: string;
  name: string;
  shortDescription: string;
  url?: string;
}

export interface Pilar {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  colorLight: string;
  icon: string;
  products: Product[];
}

export const pilares: Pilar[] = [
  {
    id: 'star-protection',
    name: 'STAR PROTECTION',
    tagline: 'Defensa Activa',
    description: 'Migracion a modelos EDR/XDR gestionados. Proteccion recurrente como base de la relacion comercial con el cliente. Seguridad endpoint, email y servidores.',
    color: 'red',
    colorLight: 'red-50',
    icon: 'shield',
    products: [
      {
        slug: 'bitdefender',
        brand: 'Bitdefender',
        name: 'GravityZone EDR/XDR',
        shortDescription: 'Proteccion endpoint multicapa con IA, deteccion 99.9%, gestion cloud centralizada y anti-ransomware.',
      },
      {
        slug: 'hornet-security',
        brand: 'Hornetsecurity',
        name: 'Seguridad Email 365',
        shortDescription: 'Proteccion email empresarial completa para Microsoft 365. Backup, archiving, encryption y continuity.',
      },
      {
        slug: 'proofpoint',
        brand: 'Proofpoint',
        name: 'Email Security Avanzado',
        shortDescription: 'Proteccion avanzada contra phishing, BEC y amenazas dirigidas por correo electronico. Lider en Gartner.',
      },
      {
        slug: 'kaspersky',
        brand: 'Kaspersky',
        name: 'Endpoint + Servers + Servicios',
        shortDescription: 'Proteccion endpoint con HuMachine Intelligence, gestion centralizada y cifrado para PYMES y enterprise.',
      },
    ],
  },
  {
    id: 'star-inspection',
    name: 'STAR INSPECTION',
    tagline: 'Visibilidad y Riesgo',
    description: 'El diagnostico gratuito es el producto inicial. Convierte problema percibido en evidencia tecnica + impacto financiero. Superficie de ataque, vulnerabilidades y monitoreo.',
    color: 'blue',
    colorLight: 'blue-50',
    icon: 'search',
    products: [
      {
        slug: 'enthec',
        brand: 'Enthec',
        name: 'Superficie de Ataque (Identidades)',
        shortDescription: 'Monitoreo continuo de superficie de ataque externa. Deteccion de credenciales filtradas e identidades comprometidas.',
      },
      {
        slug: 'vicarius',
        brand: 'Vicarius',
        name: 'Vulnerabilidades y CVEs Criticos',
        shortDescription: 'Gestion automatizada de vulnerabilidades y parches. Priorizacion de CVEs criticos con remediacion inteligente.',
      },
      {
        slug: 'stellar-cyber',
        brand: 'Stellar Cyber',
        name: 'Monitoreo Centralizado (Open XDR)',
        shortDescription: 'Plataforma Open XDR con IA para deteccion y respuesta unificada. SOC automatizado con correlacion de amenazas.',
      },
      {
        slug: 'hacking-etico',
        brand: 'Starsolution',
        name: 'Hacking Etico y Pentesting',
        shortDescription: 'Test de intrusion profesional certificado CEH/OSCP. Auditoria completa de seguridad con reporte ejecutivo.',
      },
      {
        slug: 'rthreat-bogota-colombia',
        brand: 'rThreat',
        name: 'Red Team & BAS',
        shortDescription: 'Simulacion de brechas y ataques con malware real en entornos controlados. Validacion de controles de seguridad.',
      },
    ],
  },
  {
    id: 'star-compliance',
    name: 'STAR COMPLIANCE',
    tagline: 'Normativa y Gobierno',
    description: 'Consultoria especializada hacia certificacion ISO 27001 para sectores regulados (Superfinanciera, SIC). Genera el ticket mas alto y la relacion mas larga.',
    color: 'emerald',
    colorLight: 'emerald-50',
    icon: 'document',
    products: [
      {
        slug: 'iso27001',
        brand: 'Starsolution',
        name: 'Consultoria ISO 27001',
        shortDescription: 'Gap Analysis, implementacion de SGSI y acompanamiento hacia la certificacion. Mas de 50 proyectos exitosos.',
      },
      {
        slug: 'sealpath',
        brand: 'SealPath',
        name: 'Seguridad de Datos (DLP)',
        shortDescription: 'Proteccion de datos centrada en el documento. Control persistente, cifrado y trazabilidad de informacion sensible.',
      },
      {
        slug: 'netwrix',
        brand: 'Netwrix',
        name: 'Auditoria e Identidad',
        shortDescription: 'Auditoria de cambios, visibilidad de datos y gestion de identidades. Cumplimiento GDPR, HIPAA, PCI DSS.',
      },
      {
        slug: 'black-duck',
        brand: 'Black Duck',
        name: 'Application Security Testing',
        shortDescription: 'Analisis de seguridad de aplicaciones (SAST/DAST/SCA). Deteccion de vulnerabilidades en codigo y dependencias.',
      },
    ],
  },
];

export const infraServices: Product[] = [
  {
    slug: 'teamviewer',
    brand: 'TeamViewer',
    name: 'Control Remoto Empresarial',
    shortDescription: 'Acceso remoto seguro, soporte remoto e infraestructura escalable para empresas.',
  },
  {
    slug: 'anydesk',
    brand: 'AnyDesk',
    name: 'Escritorio Remoto Ultra Rapido',
    shortDescription: 'El escritorio remoto mas rapido del mundo. 60 FPS, latencia <16ms, cifrado TLS 1.2.',
  },
  {
    slug: 'soti-mdm',
    brand: 'SOTI',
    name: 'MobiControl MDM',
    shortDescription: 'Gestion de dispositivos moviles para logistica, retail, manufactura y salud.',
  },
  {
    slug: 'cableado-estructurado',
    brand: 'Starsolution',
    name: 'Cableado Estructurado',
    shortDescription: 'Instalacion y mantenimiento de redes empresariales certificadas.',
  },
  {
    slug: 'equipos-computo',
    brand: 'Starsolution',
    name: 'Equipos de Computo',
    shortDescription: 'Hardware empresarial: laptops, desktops, workstations y All-in-One.',
  },
  {
    slug: 'brother',
    brand: 'Brother',
    name: 'Impresoras y Multifuncionales',
    shortDescription: 'Distribuidor autorizado Brother. Impresoras laser, multifuncion y consumibles.',
  },
];
