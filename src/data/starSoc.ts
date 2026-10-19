// Contenido de /star-soc/: SOC administrado de marca blanca. El monitoreo 24/7, la
// investigacion y la atencion de incidentes los opera un aliado especializado; Star
// Solutions TI es el primer nivel de contacto con el cliente (definido por George,
// 19-oct-2026). Contenido tomado de la presentacion comercial Star SOC de George.
// No publicar SLA, tiempos de respuesta ni precios hasta confirmarlos con el contrato
// del aliado, ni afirmar analistas propios de Star. Las cifras del desafio son solo las
// verificadas (IBM 2024, Verizon DBIR 2024); las demas de la presentacion no tienen fuente.

export const socBenefits = [
  ['Operaciones sin interrupciones', 'Disponibilidad y productividad para su negocio, de día y de noche.'],
  ['Riesgo controlado', 'Menor exposición a amenazas, a pérdidas y a sanciones.'],
  ['Confianza y reputación', 'Relaciones más sólidas con clientes, aliados y reguladores.'],
];

export const socStats = [
  ['US$4,88 M', 'costo promedio global de una brecha de datos en 2024.', 'IBM, Cost of a Data Breach 2024'],
  ['68 %', 'de las brechas involucran el factor humano: un clic, un error o un engaño.', 'Verizon, DBIR 2024'],
  ['292 días', 'tarda en promedio identificar y contener una brecha que empieza con credenciales robadas.', 'IBM, Cost of a Data Breach 2024'],
];

export const socNeo = [
  'Analiza y prioriza las alertas',
  'Investiga los incidentes en profundidad',
  'Genera resúmenes ejecutivos en lenguaje no técnico',
  'Trabaja 24/7 junto a analistas certificados',
];

export const socModules = [
  ['Correo corporativo', ['Antiphishing y antimalware', 'Detección de fraude por correo (BEC)', 'Protección de identidad']],
  ['Endpoints (EDR y RMM)', ['Detección y respuesta', 'Gestión de dispositivos e inventario unificado', 'Parcheo y control remoto']],
  ['Detección de red (NDR)', ['Visibilidad del tráfico', 'Detección de amenazas en la red', 'Integración con herramientas de terceros']],
  ['Backup y recuperación', ['Respaldos seguros', 'Simulaciones de recuperación', 'Continuidad operativa']],
];

export const socSteps = [
  ['Recolección de datos', 'Eventos de correo, endpoints, red y nube.'],
  ['Triaje con Neo', 'La IA analiza, prioriza y descarta falsos positivos.'],
  ['Investigación', 'Los analistas reconstruyen el contexto completo del incidente.'],
  ['Respuesta activa', 'Contención y remediación 24/7.'],
  ['Reporte ejecutivo', 'Resumen en lenguaje no técnico y evidencia para auditorías.'],
];

export const socPlans = ['Visibility', 'Guard', 'Response', 'Compliance'];
export const socPlanNotes = ['Hasta 10 dispositivos', '', '', ''];
export const socPlanFeatures: [string, number][] = [
  // [característica, primer plan que la incluye (índice en socPlans)]
  ['Monitoreo de eventos', 0],
  ['SOC 24/7', 1],
  ['RMM y EDR', 1],
  ['Gestión de parcheo', 1],
  ['Seguridad de correo', 1],
  ['Respuesta y contención activa', 2],
  ['Reportes de auditoría', 2],
  ['Gestor técnico de cuenta (TAM)', 3],
  ['Análisis forense y pentesting', 3],
];
export const socPlanIdeal = ['Pequeñas empresas o evaluación inicial', 'Empresas en crecimiento', 'Organizaciones con mayor exposición', 'Sectores regulados y alta criticidad'];

export const socCompliance = ['ISO/IEC 27001', 'PCI DSS', 'Circular 007 de la Superfinanciera', 'Ley 1581 de 2012 (datos personales)'];

export const socMarkets = [
  ['Colombia', 'Mercado principal'],
  ['Venezuela', 'Expansión'],
  ['Estados Unidos', 'Expansión'],
];

export const socStart = [
  ['Evaluación gratuita de superficie de ataque', 'Conozca sus riesgos expuestos en internet, sin compromiso.'],
  ['Prueba piloto de 30 días', 'Experimente el valor de Star SOC en su propio entorno.'],
  ['Reunión de diagnóstico', 'Hable con nuestros especialistas y diseñemos la mejor solución para su negocio.'],
];

export const socFaqs = [
  {
    q: '¿Qué es un SOC?',
    a: 'Un SOC (Security Operations Center o centro de operaciones de seguridad) es un equipo con su plataforma que vigila la infraestructura de una empresa de forma continua, detecta ataques, los investiga y coordina la respuesta. Star SOC le entrega ese servicio sin que usted tenga que contratar analistas ni montar la plataforma.',
  },
  {
    q: '¿Qué es Neo?',
    a: 'Neo es el analista virtual de inteligencia artificial de Star SOC. Analiza y prioriza las alertas, descarta falsos positivos, investiga los incidentes y genera resúmenes ejecutivos. Trabaja 24/7 junto a analistas certificados, que toman las decisiones de respuesta.',
  },
  {
    q: '¿Qué diferencia hay entre un SOC y un MDR?',
    a: 'Un MDR se concentra en detectar y responder amenazas, sobre todo en los equipos (endpoints). Un SOC cubre más fuentes, como correo, red, nube e identidad, y suma investigación, gestión de incidentes y reportes de cumplimiento.',
  },
  {
    q: '¿Quién me atiende si hay un incidente?',
    a: 'Star Solutions TI es su contacto: le avisamos, coordinamos la respuesta con los analistas del centro de operaciones y le acompañamos hasta cerrar el incidente, en español.',
  },
  {
    q: '¿Cuánto cuesta Star SOC?',
    a: 'Depende del plan (Visibility, Guard, Response o Compliance) y del número de dispositivos. Después del diagnóstico le enviamos una propuesta en pesos colombianos. También puede empezar con una prueba piloto de 30 días.',
  },
  {
    q: '¿Star SOC sirve para cumplir ISO 27001 o la Circular 007?',
    a: 'Sí. El monitoreo continuo, la gestión de incidentes y la evidencia que genera el servicio sirven para ISO 27001, PCI DSS y la Circular 007 de la Superfinanciera. El SOC no reemplaza el sistema de gestión, pero cubre la parte de detección, respuesta y registro.',
  },
];
