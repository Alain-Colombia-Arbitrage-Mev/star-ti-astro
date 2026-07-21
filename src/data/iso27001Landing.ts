export interface IsoFaq {
  question: string;
  answer: string;
}

export const isoFaqs: IsoFaq[] = [
  {
    question: '¿Cuánto tiempo toma el proceso de certificación ISO 27001?',
    answer: 'Trabajamos con una ruta estructurada en seis fases, desde el diagnóstico de brechas hasta la auditoría externa. El proceso suele durar entre seis y doce meses, con un promedio de ocho meses según el alcance, el tamaño y la madurez de la organización.',
  },
  {
    question: '¿Cuánto cuesta certificarse ISO 27001 en Colombia?',
    answer: 'Como referencia, las empresas pequeñas pueden invertir entre 35 y 50 millones de pesos colombianos; las medianas, entre 60 y 120 millones; y las grandes, desde 150 millones. El diagnóstico gratuito permite definir el alcance y entregar una cotización ajustada al caso.',
  },
  {
    question: '¿ISO 27001 es obligatoria en Colombia?',
    answer: 'No es una exigencia legal directa, pero sí se ha vuelto un requisito contractual: licitaciones públicas y clientes corporativos la solicitan para trabajar con proveedores que tratan información sensible. Además, ayuda a demostrar medidas de seguridad frente a la Ley 1581 de Protección de Datos.',
  },
  {
    question: '¿Necesito un equipo interno especializado?',
    answer: 'No. Acompañamos a tu equipo paso a paso y distribuimos las responsabilidades para que la implementación sea compatible con la operación. Tu organización sí debe asignar responsables internos para facilitar las decisiones y la adopción del sistema.',
  },
  {
    question: '¿Es necesario implementar los 93 controles del Anexo A?',
    answer: 'No necesariamente. La organización determina los controles aplicables según su contexto y riesgos, y documenta las exclusiones justificadas en la Declaración de Aplicabilidad. El alcance debe responder a los riesgos reales del negocio.',
  },
  {
    question: '¿Qué diferencia hay entre ISO 27001 e ISO 27002?',
    answer: 'ISO 27001 es la norma certificable que define los requisitos del Sistema de Gestión de Seguridad de la Información. ISO 27002 es una guía de buenas prácticas para interpretar y aplicar controles; por sí sola no es certificable.',
  },
  {
    question: '¿Cómo elegir el organismo certificador?',
    answer: 'ICONTEC, SGS y Bureau Veritas son opciones habituales en Colombia. Los organismos acreditados por ONAC pueden emitir certificados con validez internacional. Te ayudamos a comparar alcance, experiencia sectorial, tiempos y costos.',
  },
  {
    question: '¿Qué pasa si no paso la auditoría externa?',
    answer: 'La metodología incluye auditoría interna, identificación de no conformidades, acciones correctivas y preparación del equipo. Si el auditor encuentra hallazgos, te acompañamos a responderlos y cerrar las brechas según los plazos acordados.',
  },
  {
    question: '¿Qué ocurre después de obtener el certificado?',
    answer: 'El certificado tiene una vigencia de tres años y normalmente incluye auditorías de seguimiento anuales. El SGSI debe mantenerse mediante auditorías internas, revisión por la dirección, gestión de incidentes y mejora continua.',
  },
];

export const painPoints = [
  {
    number: '01',
    title: 'Clientes y licitaciones exigentes',
    body: 'Grandes corporaciones y procesos de contratación pública solicitan ISO 27001 como requisito para trabajar con proveedores que manejan información sensible.',
  },
  {
    number: '02',
    title: 'Regulación y privacidad de datos',
    body: 'La Ley 1581 y las exigencias sectoriales requieren demostrar medidas de seguridad, gobierno y control sobre la información personal y corporativa.',
  },
  {
    number: '03',
    title: 'Más ataques, más exposición',
    body: 'La superficie digital crece cada año. Sin un sistema de gestión, la respuesta depende de esfuerzos aislados y aumenta el riesgo operativo y reputacional.',
  },
];

export const phases = [
  {
    number: '1',
    title: 'Diagnóstico estratégico',
    body: 'Identificamos brechas reales, riesgos críticos y prioridades. Recibes un roadmap con alcance, tiempos y entregables claros.',
  },
  {
    number: '2',
    title: 'Implementación optimizada',
    body: 'Desarrollamos el SGSI alineado a tu operación. Evitamos plantillas genéricas y documentación que no aporta valor.',
  },
  {
    number: '3',
    title: 'Preparación y auditoría',
    body: 'Preparamos la evidencia, ejecutamos la auditoría interna y acompañamos a tu equipo antes y durante la auditoría externa.',
  },
];

export const metrics = [
  { value: '50+', label: 'empresas acompañadas' },
  { value: '100%', label: 'aprobación en auditorías' },
  { value: '8 meses', label: 'promedio a certificación' },
];

export const testimonials = [
  {
    quote: 'Pensábamos que el proceso sería complejo y desgastante. Logramos certificarnos sin afectar la operación y con un plan claro desde el primer día.',
    author: 'Director de Tecnología, empresa SaaS',
  },
  {
    quote: 'La certificación ISO 27001 nos ayudó a cerrar contratos internacionales que antes nos exigían este requisito de seguridad.',
    author: 'Gerente General, servicios TI',
  },
  {
    quote: 'El acompañamiento en auditoría fue clave. Nos sentimos respaldados y supimos exactamente cómo responder a cada hallazgo.',
    author: 'Responsable de Seguridad, sector financiero',
  },
];

export const sectors = ['Tecnología', 'Servicios financieros', 'Salud', 'Industria', 'Empresas SaaS', 'Sector público'];

export const steps = [
  {
    number: '1',
    title: 'Diagnóstico',
    body: 'Evaluamos tu nivel de madurez y detectamos las brechas críticas frente a ISO 27001:2022.',
  },
  {
    number: '2',
    title: 'Implementación',
    body: 'Construimos el sistema de gestión adaptado a tu operación, con responsables y evidencias accionables.',
  },
  {
    number: '3',
    title: 'Certificación',
    body: 'Te acompañamos en la auditoría externa hasta obtener la certificación ISO 27001.',
  },
];

export const caseSteps = [
  { tag: 'Situación', color: '#4C9AFF', body: 'Una empresa tecnológica en expansión necesitaba ISO 27001 para firmar un contrato con un cliente extranjero.' },
  { tag: 'Problema', color: '#FEBC2E', body: 'No tenía una estructura formal de seguridad y el plazo para demostrar cumplimiento era limitado.' },
  { tag: 'Solución', color: '#FF6B72', body: 'Implementamos un roadmap priorizado por riesgos y acompañamos al equipo en cada fase del SGSI.' },
  { tag: 'Resultado', color: '#35C476', body: 'Obtuvo la certificación dentro del plazo requerido y pudo avanzar con el contrato internacional.' },
];

export const isoLeadEmail = 'contacto@star-ti.com';
export const isoWhatsAppNumber = '573007010017';
