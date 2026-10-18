// Datos de /ciberseguridad-sector-publico/. Fuente: certificado RUP de la Cámara
// de Comercio de Bogotá (renovación 16-abr-2026, corte financiero 31-dic-2025),
// entregado por George el 18-oct-2026. Al renovar el RUP, revisar cifras y lista.
// Acuerdo Marco de Ciberseguridad (Colombia Compra Eficiente): Star participa pero
// aún no está adjudicado; agregar el bloque solo cuando se adjudique.

export const RUP = {
  proponente: '00069740',
  camara: 'Cámara de Comercio de Bogotá',
  renovacion: '16 de abril de 2026',
  tamano: 'Pequeña empresa (Mipyme)',
  contratosTotales: 60,
  contratosPublicos: 23,
  // Estimado de George (18-oct-2026): más de 100 contratos con entidades públicas
  // sumando mínimas cuantías y contratación directa (no se reportan en el RUP).
  // Verificable en SECOP; actualizar si se consolida la cifra exacta.
  contratosPublicosTotal: 'Más de 100',
  smmlvPublicos: '4.371',
};

// Entidades públicas con contratos ejecutados reportados en el RUP.
export const entidadesRup: { name: string; contratos?: number }[] = [
  { name: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)' },
  { name: 'Instituto de Desarrollo Urbano (IDU)', contratos: 2 },
  { name: 'Agencia Nacional de Tierras (ANT)' },
  { name: 'Secretaría Distrital de Integración Social (SDIS)' },
  { name: 'Canal Capital', contratos: 7 },
  { name: 'Fondo Especial para la Administración de Bienes de la Fiscalía General de la Nación' },
  { name: 'Caja de la Vivienda Popular', contratos: 2 },
  { name: 'Universidad Nacional de Colombia' },
  { name: 'Universidad del Magdalena' },
  { name: 'E.S.E. Hospital Departamental San Vicente de Paúl' },
  { name: 'Municipio de Tocancipá' },
  { name: 'Municipio de Soacha' },
  { name: 'Municipio de Armenia' },
  { name: 'Municipio de Facatativá' },
  { name: 'Municipio de Chocontá' },
];

// Clases UNSPSC (tercer nivel) del RUP asociadas técnicamente a seguridad de la
// información. Se excluyen a propósito computadores, ingeniería de software y equipo
// de red general (están inscritas, pero no son de seguridad).
export const codigosUnspsc: { code: string; label: string; detalle: string }[] = [
  { code: '43233200', label: 'Software de seguridad y protección', detalle: 'Antivirus, EDR/XDR, protección de correo y cifrado (Bitdefender, Hornetsecurity).' },
  { code: '43222500', label: 'Equipo de seguridad de red', detalle: 'Firewalls y dispositivos de seguridad perimetral.' },
  { code: '81111800', label: 'Servicios de sistemas y administración de componentes de sistemas', detalle: 'Incluye servicios de seguridad de computadores, redes e internet: análisis de vulnerabilidades y hacking ético.' },
  { code: '81112200', label: 'Mantenimiento y soporte de software', detalle: 'Renovación, actualización y soporte de las soluciones de seguridad.' },
  { code: '81112500', label: 'Alquiler o arrendamiento de licencias de software', detalle: 'Licenciamiento por suscripción de software de seguridad.' },
];

// Otras clases de TI inscritas en el RUP (infraestructura que acompaña los proyectos).
export const codigosTi: { code: string; label: string }[] = [
  { code: '81111500', label: 'Ingeniería de software o hardware' },
  { code: '43211500', label: 'Computadores' },
  { code: '43222600', label: 'Equipo de servicio de red' },
];

export interface SectorPublicoFaq {
  question: string;
  answer: string;
}

export const sectorPublicoFaqs: SectorPublicoFaq[] = [
  {
    question: '¿Star Solutions TI está inscrita en el RUP?',
    answer: `Sí. Star Solutions TI S.A.S. (NIT 900968161-7) está inscrita en el Registro Único de Proponentes de la ${RUP.camara} con el número de proponente ${RUP.proponente}, renovado el ${RUP.renovacion}. Tiene más de 100 contratos certificados con entidades públicas, entre los reportados en el RUP (${RUP.contratosTotales} contratos en total, ${RUP.contratosPublicos} con entidades públicas) y las mínimas cuantías y contrataciones directas, que no se reportan en el RUP.`,
  },
  {
    question: '¿Qué códigos UNSPSC tiene Star Solutions TI para ciberseguridad?',
    answer: 'Las clases asociadas a seguridad de la información son 43233200 (software de seguridad y protección), 43222500 (equipo de seguridad de red), 81111800 (servicios de sistemas y administración de componentes, que incluye seguridad de computadores, redes e internet), 81112200 (mantenimiento y soporte de software) y 81112500 (arrendamiento de licencias de software).',
  },
  {
    question: '¿Star Solutions TI es Mipyme?',
    answer: 'Sí. En el RUP está clasificada como pequeña empresa, lo que le permite participar en los procesos que las entidades limitan a Mipymes según la normativa de contratación estatal.',
  },
  {
    question: '¿Star Solutions TI tiene certificación ISO 27001?',
    answer: 'Sí. Su sistema de gestión está certificado en ISO/IEC 27001:2022 por SGS Colombia, organismo acreditado por ONAC (certificado CO25/00000158, vigente hasta noviembre de 2027).',
  },
  {
    question: '¿Qué soluciones de ciberseguridad contratan las entidades públicas con Star Solutions TI?',
    answer: 'Principalmente licenciamiento e implementación de Bitdefender GravityZone (protección de equipos y servidores), seguridad de correo con Hornetsecurity para Microsoft 365, análisis de vulnerabilidades y hacking ético. También equipos de cómputo y consultoría ISO 27001.',
  },
  {
    question: '¿Pueden ayudar a una entidad con el MSPI de MinTIC?',
    answer: 'Sí. El Modelo de Seguridad y Privacidad de la Información (MSPI) de MinTIC se basa en ISO/IEC 27001. Acompañamos el diagnóstico, los controles técnicos (protección de equipos, correo, vulnerabilidades) y la evidencia que la entidad necesita para sus reportes y auditorías.',
  },
];
