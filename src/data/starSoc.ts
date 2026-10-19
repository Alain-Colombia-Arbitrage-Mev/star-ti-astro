// Contenido de /star-soc/: SOC administrado de marca blanca. El monitoreo 24/7, la
// investigacion y la atencion de incidentes los opera un aliado especializado; Star
// Solutions TI es el primer nivel de contacto con el cliente (definido por George,
// 19-oct-2026). No publicar SLA, tiempos de respuesta ni precios hasta confirmarlos
// con el contrato del aliado, ni afirmar analistas propios de Star.

export const socIncludes = [
  ['Monitoreo 24/7', 'Vigilancia continua de computadores, servidores, identidades, red, nube y Microsoft 365, incluidas noches, fines de semana y festivos.'],
  ['Correlación de eventos', 'Las señales de todas las fuentes se unen en una plataforma SIEM/XDR y se mapean con MITRE ATT&CK para ver el ataque completo, no alertas sueltas.'],
  ['Investigación por analistas', 'Analistas de seguridad revisan cada alerta relevante, descartan falsos positivos y confirman qué está pasando.'],
  ['Respuesta y contención', 'Ante un incidente confirmado se activan las acciones acordadas: aislar un equipo, bloquear una cuenta o un indicador, y guiar la recuperación.'],
  ['Reportes ejecutivos', 'Informes periódicos con incidentes, tendencias y recomendaciones, listos para la gerencia y la junta directiva.'],
  ['Evidencia de cumplimiento', 'Registros e informes que sirven como evidencia para ISO 27001, la Circular 007 de la Superfinanciera y auditorías de clientes.'],
];

export const socSteps = [
  ['Diagnóstico', 'Revisamos su infraestructura, sus herramientas actuales y qué fuentes conviene monitorear.'],
  ['Conexión', 'Conectamos los equipos, servidores, firewall, nube y correo a la plataforma del SOC.'],
  ['Monitoreo 24/7', 'El centro de operaciones vigila, correlaciona e investiga las alertas todo el día, todos los días.'],
  ['Aviso y respuesta', 'Si hay un incidente, Star le avisa, coordina la contención con el equipo del SOC y le acompaña hasta cerrarlo.'],
];

export const socFaqs = [
  {
    q: '¿Qué es un SOC?',
    a: 'Un SOC (Security Operations Center o centro de operaciones de seguridad) es un equipo con su plataforma que vigila la infraestructura de una empresa de forma continua, detecta ataques, los investiga y coordina la respuesta. Star SOC le entrega ese servicio sin que usted tenga que contratar analistas ni montar la plataforma.',
  },
  {
    q: '¿Qué diferencia hay entre un SOC y un MDR?',
    a: 'Un MDR se concentra en detectar y responder amenazas, sobre todo en los equipos (endpoints). Un SOC cubre más fuentes, como identidad, red, nube y correo, y suma investigación, gestión de incidentes y reportes de cumplimiento.',
  },
  {
    q: '¿Quién me atiende si hay un incidente?',
    a: 'Star Solutions TI es su contacto: le avisamos, coordinamos la respuesta con los analistas del centro de operaciones y le acompañamos hasta cerrar el incidente, en español y desde Colombia.',
  },
  {
    q: '¿Tengo que cambiar mi antivirus o mis herramientas?',
    a: 'No necesariamente. En el diagnóstico revisamos qué herramientas tiene y cuáles se pueden conectar al SOC. Si hace falta protección en los equipos, le recomendamos la opción adecuada, como Bitdefender GravityZone.',
  },
  {
    q: '¿Cuánto cuesta Star SOC?',
    a: 'Depende del número de dispositivos y de las fuentes que se monitorean (equipos, servidores, red, nube, correo) y del nivel de servicio. Después del diagnóstico le enviamos una propuesta en pesos colombianos.',
  },
  {
    q: '¿Star SOC sirve para cumplir ISO 27001 o la Circular 007?',
    a: 'Sí. El monitoreo continuo, la gestión de incidentes y los informes periódicos son evidencia que piden ISO 27001 y la Circular 007 de la Superfinanciera. El SOC no reemplaza el sistema de gestión, pero cubre la parte de detección y respuesta.',
  },
];
