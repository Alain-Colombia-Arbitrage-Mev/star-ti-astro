export interface Product {
  slug: string;
  brand: string;
  name: string;
  shortDescription: string;
  // Traducciones para la landing regional en ingles (/miami/). Opcionales:
  // las paginas en espanol usan los campos base. Ver RegionLanding.astro.
  nameEn?: string;
  shortDescriptionEn?: string;
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
  // Traducciones para /miami/ (ver Product arriba). name es un identificador
  // de marca ("STAR PROTECTION") y no se traduce.
  taglineEn?: string;
  descriptionEn?: string;
}

export const pilares: Pilar[] = [
  {
    id: 'star-protection',
    name: 'STAR PROTECTION',
    tagline: 'Defensa Activa',
    description: 'Migracion a modelos EDR/XDR gestionados. Proteccion recurrente como base de la relacion comercial con el cliente. Seguridad endpoint, email y servidores.',
    taglineEn: 'Active Defense',
    descriptionEn: 'Migration to managed EDR/XDR models. Recurring protection as the foundation of the client relationship. Endpoint, email and server security.',
    color: 'red',
    colorLight: 'red-50',
    icon: 'shield',
    products: [
      {
        slug: 'bitdefender',
        brand: 'Bitdefender',
        name: 'GravityZone EDR/XDR',
        shortDescription: 'Proteccion endpoint multicapa con IA, deteccion 99.9%, gestion cloud centralizada y anti-ransomware.',
        nameEn: 'GravityZone EDR/XDR',
        shortDescriptionEn: 'Multi-layered AI-powered endpoint protection, 99.9% detection, centralized cloud management and anti-ransomware.',
      },
      {
        slug: 'hornetsecurity',
        brand: 'Hornetsecurity',
        name: 'Seguridad Email 365',
        shortDescription: 'Proteccion email empresarial completa para Microsoft 365. Backup, archiving, encryption y continuity.',
        nameEn: 'Email Security 365',
        shortDescriptionEn: 'Complete enterprise email protection for Microsoft 365. Backup, archiving, encryption and continuity.',
      },
      {
        slug: 'kymatio',
        brand: 'Kymatio',
        name: 'Gestion del Riesgo Humano',
        shortDescription: 'Concienciacion adaptativa, simulaciones de phishing y vishing, credenciales expuestas y bienestar digital del equipo.',
        nameEn: 'Human Risk Management',
        shortDescriptionEn: 'Adaptive awareness, phishing and vishing simulations, exposed credentials and digital wellbeing.',
      },
      {
        slug: 'proofpoint',
        brand: 'Proofpoint',
        name: 'Email Security Avanzado',
        shortDescription: 'Proteccion avanzada contra phishing, BEC y amenazas dirigidas por correo electronico. Lider en Gartner.',
        nameEn: 'Advanced Email Security',
        shortDescriptionEn: 'Advanced protection against phishing, BEC and targeted email threats. A Gartner leader.',
      },
      {
        slug: 'kaspersky',
        brand: 'Kaspersky',
        name: 'Endpoint + Servers + Servicios',
        shortDescription: 'Proteccion endpoint con HuMachine Intelligence, gestion centralizada y cifrado para PYMES y enterprise.',
        nameEn: 'Endpoint + Servers + Services',
        shortDescriptionEn: 'Endpoint protection with HuMachine Intelligence, centralized management and encryption for SMB and enterprise.',
      },
    ],
  },
  {
    id: 'star-inspection',
    name: 'STAR INSPECTION',
    tagline: 'Visibilidad y Riesgo',
    description: 'El diagnostico gratuito es el producto inicial. Convierte problema percibido en evidencia tecnica + impacto financiero. Superficie de ataque, vulnerabilidades y monitoreo.',
    taglineEn: 'Visibility and Risk',
    descriptionEn: 'The free assessment is the entry product. It turns a perceived problem into technical evidence plus financial impact. Attack surface, vulnerabilities and monitoring.',
    color: 'blue',
    colorLight: 'blue-50',
    icon: 'search',
    products: [
      {
        slug: 'enthec',
        brand: 'Enthec',
        name: 'Superficie de Ataque (Identidades)',
        shortDescription: 'Monitoreo continuo de superficie de ataque externa. Deteccion de credenciales filtradas e identidades comprometidas.',
        nameEn: 'Attack Surface (Identities)',
        shortDescriptionEn: 'Continuous external attack surface monitoring. Detection of leaked credentials and compromised identities.',
      },
      {
        slug: 'vicarius',
        brand: 'Vicarius',
        name: 'Vulnerabilidades y CVEs Criticos',
        shortDescription: 'Gestion automatizada de vulnerabilidades y parches. Priorizacion de CVEs criticos con remediacion inteligente.',
        nameEn: 'Vulnerabilities and Critical CVEs',
        shortDescriptionEn: 'Automated vulnerability and patch management. Prioritization of critical CVEs with intelligent remediation.',
      },
      {
        slug: 'hacking-etico',
        brand: 'Star Solutions TI',
        name: 'Hacking Etico y Pentesting',
        shortDescription: 'Test de intrusion profesional certificado CEH/OSCP. Auditoria completa de seguridad con reporte ejecutivo.',
        nameEn: 'Ethical Hacking and Pentesting',
        shortDescriptionEn: 'Professional CEH/OSCP-certified penetration testing. Complete security audit with an executive report.',
      },
    ],
  },
  {
    id: 'star-compliance',
    name: 'STAR COMPLIANCE',
    tagline: 'Normativa y Gobierno',
    description: 'Consultoría especializada hacia certificacion ISO 27001 para sectores regulados (Superfinanciera, SIC). Genera el ticket mas alto y la relacion mas larga.',
    taglineEn: 'Compliance and Governance',
    descriptionEn: 'Specialized consulting toward ISO 27001 certification for regulated sectors. Generates the highest ticket and the longest relationship.',
    color: 'emerald',
    colorLight: 'emerald-50',
    icon: 'document',
    products: [
      {
        slug: 'iso-27001',
        brand: 'Star Solutions TI',
        name: 'Consultoría ISO 27001',
        shortDescription: 'Gap Analysis, implementacion de SGSI y acompanamiento hacia la certificacion. Mas de 50 proyectos exitosos.',
        nameEn: 'ISO 27001 Consulting',
        shortDescriptionEn: 'Gap analysis, ISMS implementation and support toward certification. More than 50 successful projects.',
      },
      {
        slug: 'sealpath',
        brand: 'SealPath',
        name: 'Seguridad de Datos (DLP)',
        shortDescription: 'Proteccion de datos centrada en el documento. Control persistente, cifrado y trazabilidad de informacion sensible.',
        nameEn: 'Data Security (DLP)',
        shortDescriptionEn: 'Document-centric data protection. Persistent control, encryption and traceability of sensitive information.',
      },
      {
        slug: 'netwrix',
        brand: 'Netwrix',
        name: 'Auditoria e Identidad',
        shortDescription: 'Auditoria de cambios, visibilidad de datos y gestion de identidades. Cumplimiento GDPR, HIPAA, PCI DSS.',
        nameEn: 'Auditing and Identity',
        shortDescriptionEn: 'Change auditing, data visibility and identity management. GDPR, HIPAA, PCI DSS compliance.',
      },
      {
        slug: 'lastpass',
        brand: 'LastPass',
        name: 'Gestion de Contrasenas y Accesos',
        shortDescription: 'Boveda cifrada zero-knowledge, MFA, SSO y 100+ politicas de acceso. Evidencia para controles ISO 27001.',
        nameEn: 'Password and Access Management',
        shortDescriptionEn: 'Zero-knowledge encrypted vault, MFA, SSO and 100+ access policies. Evidence for ISO 27001 controls.',
      },
    ],
  },
  {
    id: 'star-soc',
    name: 'STAR SOC',
    tagline: 'Monitoreo y Respuesta 24x7',
    description: 'Centro de operaciones de seguridad como servicio: monitoreo continuo, IA y analistas humanos, respuesta a incidentes y evidencia para auditorias, con Star como primer contacto.',
    taglineEn: '24x7 Monitoring and Response',
    descriptionEn: 'Security operations center as a service: continuous monitoring, AI and human analysts, incident response and audit evidence, with Star as the first point of contact.',
    color: 'violet',
    colorLight: 'violet-50',
    icon: 'eye',
    products: [
      {
        slug: 'star-soc',
        brand: 'Star SOC',
        name: 'SOC 24x7',
        shortDescription: 'Monitoreo, deteccion y respuesta a incidentes 24x7 con IA y analistas certificados. Evidencia lista para auditorias.',
        nameEn: '24x7 SOC',
        shortDescriptionEn: '24x7 monitoring, detection and incident response with AI and certified analysts. Audit-ready evidence.',
      },
      {
        slug: 'stellar-cyber',
        brand: 'Stellar Cyber',
        name: 'Monitoreo Centralizado (Open XDR)',
        shortDescription: 'Plataforma Open XDR con IA para deteccion y respuesta unificada. SOC automatizado con correlacion de amenazas.',
        nameEn: 'Centralized Monitoring (Open XDR)',
        shortDescriptionEn: 'AI-powered Open XDR platform for unified detection and response. Automated SOC with threat correlation.',
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
    slug: 'cableado-estructurado',
    brand: 'Star Solutions TI',
    name: 'Cableado Estructurado',
    shortDescription: 'Instalacion y mantenimiento de redes empresariales certificadas.',
  },
  {
    slug: 'equipos-computo',
    brand: 'Star Solutions TI',
    name: 'Equipos de Computo',
    shortDescription: 'Hardware empresarial: laptops, desktops, workstations y All-in-One.',
  },
];
