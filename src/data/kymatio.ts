// Contenido compartido de /kymatio/: la página muestra estas FAQ y seo.ts las
// publica como FAQPage (JSON-LD), así ambas versiones nunca divergen.
// Fuentes: kymatio.com (HRM, Assessment & Awareness, Breach Scan, Digital
// Wellbeing, FAQ de despliegue), consultadas el 16-oct-2026.
export const kymatioFaqs = [
  {
    q: '¿Qué es la gestión del riesgo humano (Human Risk Management)?',
    a: 'Es la disciplina que mide, prioriza y reduce el riesgo de ciberseguridad que generan las personas: clics en phishing, credenciales expuestas, uso indebido de la información o fatiga que baja el nivel de alerta. A diferencia de la capacitación anual tradicional, se basa en métricas continuas por persona, puesto y área. Kymatio calcula el riesgo de cada puesto como la probabilidad de un incidente multiplicada por el impacto que tendría.',
  },
  {
    q: '¿Kymatio reemplaza la capacitación de seguridad que ya hacemos?',
    a: 'La complementa y la automatiza. Kymatio entrega a cada empleado sesiones cortas y adaptadas a su nivel mediante un asistente conversacional, en lugar de un curso igual para todos. Además mide si el comportamiento cambia de verdad con simulaciones de ataque, algo que una capacitación presencial no permite comprobar.',
  },
  {
    q: '¿Qué tipos de ataques simula Kymatio?',
    a: 'Simulaciones de ingeniería social por varios canales: phishing por correo, smishing por SMS, vishing por llamada (incluido un módulo de vishing con inteligencia artificial) y escenarios de ransomware. Los resultados muestran el índice de error humano y los grupos más vulnerables para enfocar la formación.',
  },
  {
    q: '¿Hay que instalar algo? ¿Cuánto tarda la implementación?',
    a: 'No se instala nada: Kymatio es una plataforma SaaS a la que se accede por navegador. Admite inicio de sesión federado con SAML 2.0 y aprovisionamiento automático de usuarios, por ejemplo con Microsoft Entra ID (Azure AD). Según el fabricante, la plataforma queda lista en hasta 48 horas desde que recibe la lista de usuarios y la configuración de los servicios contratados.',
  },
  {
    q: '¿Kymatio ayuda a cumplir ISO 27001 y la normativa colombiana?',
    a: 'Sí. ISO/IEC 27001:2022 exige en su control 6.3 un programa de concienciación, educación y formación en seguridad de la información, y Kymatio genera la evidencia medible para demostrarlo en auditoría. También aporta a la Ley 1581 de protección de datos y a los requisitos de ciberseguridad de la Superintendencia Financiera, al reducir el riesgo de filtraciones causadas por errores humanos. Star Solutions TI, certificada en ISO 27001, acompaña la implementación.',
  },
];
