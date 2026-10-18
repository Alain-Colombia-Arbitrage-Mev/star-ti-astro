// Contenido de /blog/bitdefender-edr-xdr-mdr/: guia pilar del cluster Bitdefender.
// La landing comercial es /bitdefender/ (distribuidor, planes, precio); este post cubre
// la intencion informativa (EDR vs XDR vs MDR, consola GravityZone, agente BEST).
// Datos tecnicos de la documentacion de Bitdefender (arquitectura GravityZone, sensores
// XDR, rol Relay), verificados el 18-oct-2026. Cifras de Star confirmadas por George.

export const bdEdrFaqs = [
  {
    q: '¿Qué diferencia hay entre EDR, XDR y MDR en Bitdefender?',
    a: 'EDR detecta y responde a ataques en los equipos (computadores y servidores). XDR amplía esa visibilidad a identidades, red, nube y Microsoft 365, y correlaciona las señales en un solo incidente. MDR es un servicio: el equipo de seguridad de Bitdefender vigila su entorno 24/7 y responde por usted.',
  },
  {
    q: '¿Qué es Bitdefender Endpoint Security Tools (BEST)?',
    a: 'Es el agente de Bitdefender que se instala en cada computador y servidor. Contiene los módulos de protección (antimalware, firewall, control de contenido, EDR, entre otros) y se administra desde la consola GravityZone. Un equipo con BEST puede además cumplir el rol de Relay, que distribuye actualizaciones y comunica a los demás equipos con la consola.',
  },
  {
    q: '¿Qué es la consola GravityZone?',
    a: 'Es el panel central desde donde se administran todas las políticas, instalaciones, alertas e informes de Bitdefender en la empresa. Puede estar en la nube de Bitdefender (lo más común) o instalada en la infraestructura del cliente.',
  },
  {
    q: '¿Necesito XDR o me basta con EDR?',
    a: 'Si sus incidentes empiezan casi siempre en los equipos y su equipo de TI es pequeño, EDR suele ser suficiente. Si usa Microsoft 365, Directorio Activo o nube y quiere ver cómo se mueve un ataque entre esas capas, XDR le da esa vista unificada.',
  },
  {
    q: '¿Cuándo conviene contratar Bitdefender MDR?',
    a: 'Cuando la empresa no tiene un equipo de seguridad que revise alertas las 24 horas, opera de forma continua o tiene un riesgo alto (sector financiero, salud, sector público). MDR cubre noches, fines de semana y festivos, que es cuando suelen ejecutarse los ataques de ransomware.',
  },
  {
    q: '¿Cuánto cuesta Bitdefender EDR, XDR o MDR?',
    a: 'Depende del número de equipos y servidores, de la edición, de los sensores XDR que necesite, del plazo y de si incluye MDR e implementación. Como cada infraestructura es distinta, Star Solutions TI, Reseller Platinum de Bitdefender, revisa su caso y cotiza en pesos colombianos.',
  },
];
