// Preguntas de compra por página, escritas a partir del documento
// "Palabras clave Star Solutions TI" (225 palabras, 21 productos y servicios).
// Se muestran en la página (componente KeywordFaq) y se suman al FAQPage de seo.ts.
// Reglas: sin precios publicados, sin cifras distintas a las oficinas, sin prometer
// servicios que Star no presta. Las palabras se usan de forma natural, no repetidas.

export interface KwFaq { q: string; a: string }

export const keywordFaqs: Record<string, KwFaq[]> = {
  bitdefender: [
    { q: '¿Dónde comprar licencias Bitdefender para empresas en Colombia?', a: 'Las licencias Bitdefender para empresas se compran a través de un partner autorizado. Star Solutions TI es partner Bitdefender Platinum en Colombia, con sede en Bogotá y más de 150 implementaciones: cotizamos, activamos la consola Bitdefender GravityZone en Colombia y damos soporte en español.' },
    { q: '¿Cuál es el precio de Bitdefender GravityZone?', a: 'El precio de Bitdefender GravityZone depende del número de equipos, la edición (Bitdefender Business Security, Premium o las capas EDR, XDR y MDR) y el plazo de la licencia. Le enviamos la cotización sin costo, con descuento por volumen o por licencia multianual.' },
    { q: '¿Cómo funciona la renovación de licencias Bitdefender?', a: 'Para la renovación de licencias Bitdefender le avisamos antes del vencimiento, revisamos cuántos equipos tiene hoy y si conviene subir de edición. La consola y las políticas se mantienen, así que su antivirus Bitdefender corporativo no se interrumpe.' },
    { q: '¿Ofrecen Bitdefender EDR XDR y MDR en Colombia?', a: 'Sí. Implementamos Bitdefender EDR XDR en Colombia sobre la misma consola GravityZone, y Bitdefender MDR para empresas que necesitan monitoreo 24/7 sin armar un equipo propio. Le ayudamos a elegir según el tamaño y el riesgo de su empresa.' },
  ],
  kaspersky: [
    { q: '¿Star Solutions TI es distribuidor Kaspersky en Colombia?', a: 'Sí. Somos partner Kaspersky en Colombia, con más de 200 implementaciones y oficina en Bogotá. Vendemos licencias Kaspersky para empresas en Colombia, las instalamos y damos soporte en español.' },
    { q: '¿Cuál es el precio de Kaspersky Next en Colombia?', a: 'El precio de Kaspersky Next en Colombia depende de la edición (EDR Foundations, Kaspersky EDR Optimum, XDR Optimum o MXDR) y del número de equipos. Lo cotizamos sin costo y le mostramos qué edición se ajusta a lo que su equipo puede operar.' },
    { q: '¿Hacen la renovación de Kaspersky para empresas?', a: 'Sí. Gestionamos la renovación de Kaspersky para empresas, incluida la migración de Kaspersky Endpoint Security for Business a Kaspersky Next, sin perder las políticas ni dejar equipos sin protección.' },
    { q: '¿Qué opción de antivirus Kaspersky corporativo conviene a una pyme?', a: 'Para oficinas pequeñas existe Kaspersky Small Office Security; cuando la empresa necesita consola central y detección avanzada recomendamos Kaspersky Next, y para entornos grandes Kaspersky XDR. En Colombia le ayudamos a escoger y a instalarlo, en Bogotá o en remoto.' },
  ],
  hornetsecurity: [
    { q: '¿Qué incluye la seguridad de correo de Hornetsecurity?', a: 'Es protección de correo electrónico para empresas: filtro antispam empresarial, protección contra phishing en el correo, análisis de adjuntos y enlaces, cifrado de correo empresarial y archivado de correo electrónico. Funciona con Microsoft 365 y Google Workspace.' },
    { q: '¿Hornetsecurity hace backup de Microsoft 365?', a: 'Sí. El backup de Microsoft 365 respalda buzones, OneDrive, SharePoint y Teams, aparte del respaldo nativo de Microsoft. Es la forma de tener un respaldo del correo de Office 365 que no depende de la papelera de reciclaje. En Colombia lo implementamos y lo dejamos programado.' },
    { q: '¿Cuál es el precio de Hornetsecurity 365 Total Protection?', a: 'Depende del plan (Business, Enterprise, Enterprise Backup o Compliance and Awareness) y del número de buzones. Le enviamos la cotización sin costo, ajustada a su caso.' },
    { q: '¿Sirve como antispam para Exchange Online?', a: 'Sí. Hornetsecurity se integra con Exchange Online y agrega una capa de seguridad de correo para Microsoft 365 por encima del filtro nativo: menos spam, menos phishing y menos suplantación.' },
  ],
  proofpoint: [
    { q: '¿Star Solutions TI es partner Proofpoint en Colombia?', a: 'Sí. Como partner Proofpoint en Colombia vendemos, implementamos y damos soporte a Proofpoint, incluido Proofpoint Essentials para empresas medianas. El precio de Proofpoint depende de la edición y del número de usuarios; la cotización no tiene costo.' },
    { q: '¿Proofpoint protege contra el fraude BEC y la suplantación?', a: 'Sí. La protección contra fraude BEC detecta correos que se hacen pasar por directivos o proveedores para pedir pagos. Junto con DMARC en Colombia, reduce la suplantación del correo electrónico de las empresas.' },
    { q: '¿Incluye capacitación en phishing para los empleados?', a: 'Sí. Proofpoint tiene módulos de capacitación en phishing para los empleados, con simulaciones y entrenamiento corto. Así el anti phishing empresarial no depende solo de la tecnología.' },
  ],
  kymatio: [
    { q: '¿Qué es la gestión del riesgo humano en ciberseguridad?', a: 'Es medir y reducir el riesgo que generan las personas: clics en phishing, contraseñas expuestas, malas prácticas. Kymatio es una plataforma de security awareness que combina concientización en ciberseguridad para los empleados, simulación de phishing y de vishing, y seguimiento por área.' },
    { q: '¿Sirve para cumplir el control 6.3 de ISO 27001?', a: 'Sí. El control 6.3 de ISO 27001 pide concienciación, educación y formación demostrables. Kymatio deja la evidencia de su programa de concienciación en seguridad de la información: quién se capacitó, con qué resultado y cómo mejoró.' },
    { q: '¿Ofrecen capacitación en ciberseguridad para empresas?', a: 'Sí. La capacitación en ciberseguridad para empresas incluye ingeniería social (phishing, smishing y vishing), contenidos cortos y mediciones periódicas. La implementamos en Colombia y la acompañamos en español.' },
  ],
  enthec: [
    { q: '¿Qué hace Enthec Kartos en Colombia?', a: 'Kartos es vigilancia de la superficie de ataque externa (EASM): busca lo que un atacante ve de su empresa desde internet. Incluye monitoreo de la dark web para empresas, detección de credenciales filtradas de la empresa y monitoreo de filtraciones de datos.' },
    { q: '¿Sirve para la protección de la marca digital?', a: 'Sí. La protección de la marca digital incluye detectar dominios falsos, perfiles que suplantan a la empresa y campañas de phishing de marca. Es cibervigilancia para empresas, sin instalar nada en su red.' },
    { q: '¿Qué es Qondar y la protección digital de ejecutivos?', a: 'Qondar es el módulo de protección digital de ejecutivos: vigila los datos personales, financieros y la exposición en redes de directivos y personas clave, para reducir el riesgo de fraude dirigido.' },
  ],
  vicarius: [
    { q: '¿Qué incluye el análisis de vulnerabilidades en Colombia?', a: 'El análisis de vulnerabilidades en Colombia con Vicarius vRx incluye escaneo de vulnerabilidades en los equipos de la empresa, priorización de las vulnerabilidades críticas (CVE) y remediación. Hacemos la evaluación de vulnerabilidades en Bogotá o en remoto.' },
    { q: '¿Vicarius hace gestión de parches automatizada?', a: 'Sí. vRx es software de gestión de vulnerabilidades con gestión de parches automatizada (patch management para empresas) en Windows, macOS, Linux y aplicaciones de terceros. Cuando no hay parche, aplica protección sin parche.' },
    { q: '¿Cuál es el precio del análisis de vulnerabilidades?', a: 'El precio del análisis de vulnerabilidades depende del número de equipos y de si es una evaluación puntual o un servicio continuo con remediación. Lo cotizamos sin costo con Vicarius vRx en Colombia.' },
  ],
  'stellar-cyber': [
    { q: '¿Stellar Cyber es un SIEM para empresas en Colombia?', a: 'Sí, y algo más: es una plataforma SIEM con detección y respuesta XDR, NDR (detección de amenazas en la red) y automatización en una sola consola. Para muchas empresas es la alternativa a un SIEM tradicional, que exige más integración y más personal.' },
    { q: '¿Se puede tener SOC como servicio en Colombia con Stellar Cyber?', a: 'Sí. Ofrecemos SOC como servicio en Colombia con monitoreo de seguridad 24/7 sobre Stellar Cyber, para empresas que no quieren armar su propio centro de operaciones.' },
    { q: '¿Cuál es el precio de un SIEM como Stellar Cyber?', a: 'El precio de un SIEM depende del volumen de datos, las fuentes que se conectan y si incluye el servicio de monitoreo. Lo cotizamos sin costo después de revisar su entorno.' },
  ],
  'hacking-etico': [
    { q: '¿Quién hace hacking ético y pentesting en Colombia?', a: 'Star Solutions TI es una empresa de pentesting en Bogotá que hace hacking ético en Colombia para empresas y entidades públicas: pruebas de penetración en Bogotá o en remoto, pentesting externo e interno, pentest de aplicaciones web y técnicas de red team, siempre con autorización firmada.' },
    { q: '¿Cuál es el precio de un test de penetración?', a: 'El precio de un test de penetración depende del alcance: número de IP, aplicaciones, si es externo o interno y si incluye ingeniería social. Lo cotizamos sin costo; en el blog explicamos los rangos y qué los mueve.' },
    { q: '¿En qué se diferencia de una auditoría de seguridad informática?', a: 'Una auditoría de seguridad informática revisa controles y configuraciones; las pruebas de intrusión intentan explotar las fallas como lo haría un atacante. El ethical hacking para empresas combina ambas y entrega una evaluación de seguridad de las aplicaciones y la red con un plan de corrección.' },
  ],
  'iso-27001': [
    { q: '¿Cuánto cuesta la certificación ISO 27001 en Colombia?', a: 'El costo de la certificación ISO 27001 en Colombia tiene dos partes: la consultoría de implementación y la auditoría del organismo certificador, que se cotiza aparte. Puede calcular un rango para su empresa con nuestra calculadora de costo de ISO 27001.' },
    { q: '¿Qué incluye la consultoría ISO 27001 en Colombia?', a: 'La consultoría ISO 27001 en Colombia empieza con un gap analysis de ISO 27001, sigue con la implementación del SGSI según los requisitos de ISO 27001:2022, la declaración de aplicabilidad de ISO 27001 y la auditoría interna de ISO 27001 antes de la auditoría de certificación.' },
    { q: '¿Tienen consultores ISO 27001 en Bogotá?', a: 'Sí. Nuestro equipo de consultores ISO 27001 está en Bogotá y atiende en toda Colombia. Star Solutions TI está certificada en ISO/IEC 27001:2022 por SGS y acompaña la implementación de ISO 27001 con más de 50 proyectos.' },
    { q: '¿ISO 27001 sirve para el MSPI de MinTIC?', a: 'Sí. El MSPI de MinTIC se basa en ISO 27001, así que la implementación del SGSI sirve como base para las entidades públicas que deben cumplirlo.' },
  ],
  sealpath: [
    { q: '¿Qué es SealPath y cómo protege documentos confidenciales?', a: 'SealPath es IRM (gestión de derechos de información), también llamado DRM para documentos. Hace protección de documentos confidenciales: los cifra, controla quién los abre y permite revocar el acceso a documentos ya enviados.' },
    { q: '¿Sirve para proteger archivos compartidos y documentos de Microsoft 365?', a: 'Sí. Da control de acceso a los documentos aunque estén en correos, USB o la nube, incluida la seguridad de documentos en Microsoft 365. Es cifrado de documentos para empresas que no cambia la forma de trabajar.' },
    { q: '¿Ayuda con la protección de datos de la Ley 1581?', a: 'Sí. Para la protección de datos de la Ley 1581, SealPath limita quién puede ver la información personal y deja registro de cada acceso.' },
  ],
  netwrix: [
    { q: '¿Netwrix hace auditoría de Active Directory?', a: 'Sí. Netwrix hace auditoría de Active Directory y monitoreo de cambios en Active Directory: quién cambió qué, cuándo y desde dónde. También hace auditoría de permisos de archivos en sus servidores.' },
    { q: '¿Incluye gestión de accesos privilegiados (PAM)?', a: 'Sí. Netwrix Privilege Secure es gestión de accesos privilegiados (PAM) con accesos temporales. Refuerza la seguridad de identidades y deja la evidencia para la auditoría de cumplimiento de la Ley 1581 e ISO 27001.' },
    { q: '¿Cuál es el precio de Netwrix?', a: 'El precio de Netwrix depende del módulo y del número de usuarios o servidores. Lo cotizamos sin costo.' },
  ],
  lastpass: [
    { q: '¿Venden LastPass Business en Colombia?', a: 'Sí. Vendemos e implementamos LastPass Business y LastPass Teams en Colombia. Es un gestor de contraseñas empresarial: una bóveda de contraseñas cifrada para cada usuario, con contraseñas compartidas por área.' },
    { q: '¿Cuál es el precio de LastPass para empresas?', a: 'El precio de LastPass para empresas depende de la edición (Teams o Business) y del número de usuarios. Se lo cotizamos sin costo.' },
    { q: '¿Cómo ayuda a la gestión de contraseñas corporativas?', a: 'Un administrador de contraseñas para empresas permite aplicar la política de contraseñas de la empresa, activar SSO y MFA y quitar los accesos cuando alguien se retira. La gestión de contraseñas corporativas deja de depender de hojas de Excel.' },
  ],
  'dlp-prevencion-perdida-datos': [
    { q: '¿Qué solución de DLP ofrecen en Colombia?', a: 'Implementamos Endpoint Protector en Colombia, una solución de DLP (data loss prevention) para Colombia que controla qué datos salen por USB, correo, nube o impresión. Es software DLP para empresas que se administra desde una consola.' },
    { q: '¿Se puede bloquear el USB en las empresas?', a: 'Sí. El bloqueo de USB en las empresas se hace por políticas: puede permitir solo memorias autorizadas, solo lectura o bloquear todas. Es una de las primeras medidas contra la fuga de información en las empresas.' },
    { q: '¿Ayuda con la protección de datos personales en las empresas?', a: 'Sí. El DLP encuentra y protege datos sensibles (cédulas, datos financieros, historias clínicas) y evita que salgan sin control. Así apoya la protección de datos personales en las empresas bajo la Ley 1581. El precio de un DLP depende del número de equipos y se cotiza sin costo.' },
  ],
  teamviewer: [
    { q: '¿Star Solutions TI es distribuidor TeamViewer en Colombia?', a: 'Sí. Somos distribuidor TeamViewer en Colombia: vendemos la licencia de TeamViewer para empresas (TeamViewer Business y ediciones superiores), la activamos y damos soporte.' },
    { q: '¿Cuál es el precio de TeamViewer en Colombia?', a: 'El precio de TeamViewer en Colombia depende de la edición y del número de técnicos y equipos. Para comprar TeamViewer le enviamos la cotización sin costo, con facturación local.' },
    { q: '¿TeamViewer sirve para el soporte remoto de las empresas?', a: 'Sí. Es una de las herramientas de soporte remoto para empresas más usadas: los técnicos atienden a usuarios y servidores sin desplazarse, con registro de cada sesión.' },
  ],
  anydesk: [
    { q: '¿Venden licencias de AnyDesk para empresas?', a: 'Sí. Somos distribuidor AnyDesk en Colombia: vendemos la licencia de AnyDesk para empresas, la activamos y damos soporte en español.' },
    { q: '¿Cuál es el precio de AnyDesk?', a: 'El precio de AnyDesk depende de la edición y del número de usuarios y dispositivos. Para comprar AnyDesk le enviamos la cotización sin costo.' },
    { q: '¿AnyDesk es una alternativa a TeamViewer?', a: 'Sí. AnyDesk es una alternativa a TeamViewer para escritorio remoto en empresas: ligera y rápida en conexiones lentas. Vendemos las dos y le ayudamos a escoger.' },
  ],
  'cableado-estructurado': [
    { q: '¿Hacen cableado estructurado en Bogotá y en toda Colombia?', a: 'Sí. Somos una empresa de cableado estructurado con base en Bogotá que trabaja en toda Colombia: instalación de la red de datos, puntos de red para oficinas, cableado categoría 6A, fibra óptica para empresas en Bogotá y montaje de racks y gabinetes de comunicaciones.' },
    { q: '¿Cuál es el precio del cableado estructurado por punto?', a: 'El precio del cableado estructurado por punto depende de la categoría (6 o 6A), las distancias, el tipo de canaleta y si incluye rack y certificación. Para la cotización de cableado estructurado hacemos una visita técnica sin costo.' },
    { q: '¿Entregan la certificación de los puntos de red?', a: 'Sí. Hacemos la certificación de los puntos de red con equipo de medición y entregamos los reportes y la documentación as-built. El equipo cuenta con más de 12 profesionales certificados BICSI.' },
  ],
  'equipos-computo': [
    { q: '¿Venden equipos de cómputo para empresas en Colombia?', a: 'Sí. Somos proveedor de tecnología para empresas: vendemos computadores para empresas, portátiles corporativos y workstations en Colombia, de marcas como Lenovo, HP y Dell, con entrega en Bogotá y en otras ciudades.' },
    { q: '¿Atienden la renovación del parque de computadores?', a: 'Sí. Para la renovación del parque de computadores le ayudamos a definir perfiles por cargo, cotizamos por volumen y dejamos los equipos listos con su antivirus y políticas.' },
    { q: '¿Venden equipos de cómputo a entidades públicas?', a: 'Sí. Vendemos equipos de cómputo a entidades públicas, por SECOP y según las condiciones de cada proceso. Estamos inscritos en el RUP.' },
  ],
  'antivirus-empresas': [
    { q: '¿Cuál es el mejor antivirus para empresas en Colombia?', a: 'Depende del tamaño y del equipo de TI. En esta comparativa de antivirus empresariales ponemos Bitdefender vs Kaspersky, los dos que más implementamos: ambos son antivirus en la nube para empresas, con consola centralizada y EDR. Le recomendamos uno según su caso.' },
    { q: '¿Qué diferencia hay entre EDR y antivirus?', a: 'El antivirus bloquea amenazas conocidas; el EDR registra lo que pasa en cada equipo, detecta comportamientos sospechosos y permite responder. Hoy un antivirus para empresas en Colombia debería incluir EDR o tener la opción de agregarlo.' },
    { q: '¿Cuál es el precio de un antivirus para empresas?', a: 'El precio de un antivirus para empresas depende del número de equipos, si incluye antivirus para servidores y la edición. Para pymes hay ediciones de entrada; lo cotizamos sin costo.' },
  ],
  'seguridad-informatica-empresas': [
    { q: '¿Qué incluye la seguridad informática para empresas?', a: 'La seguridad informática para empresas cubre protección de equipos y correo, protección contra ransomware, hacking ético, gestión de vulnerabilidades, seguridad de la información y monitoreo 24/7. Star Solutions TI es una empresa de ciberseguridad en Colombia que ofrece estos servicios de ciberseguridad bajo cuatro pilares.' },
    { q: '¿Atienden empresas de ciberseguridad en Bogotá y pymes?', a: 'Sí. Estamos en Bogotá y atendemos ciberseguridad empresarial en Bogotá y el resto del país, desde ciberseguridad para pymes hasta grandes organizaciones. Más de 1.150 empresas han trabajado con nosotros desde 2016.' },
    { q: '¿Hacen consultoría en ciberseguridad?', a: 'Sí. La consultoría en ciberseguridad empieza con un diagnóstico gratuito: revisamos dónde está el riesgo y proponemos un plan por prioridades. Como proveedor de ciberseguridad, también implementamos y operamos las soluciones.' },
  ],
  'ciberseguridad-sector-publico': [
    { q: '¿Star Solutions TI es proveedor de ciberseguridad de entidades del Estado?', a: 'Sí. Somos proveedor de ciberseguridad de entidades del Estado, con más de 100 contratos públicos, inscripción en el RUP y procesos por SECOP. Uno de ellos protege 32.000 equipos de una sola entidad pública.' },
    { q: '¿Venden licencias de antivirus para entidades públicas?', a: 'Sí. Vendemos licencias de antivirus para entidades públicas, entre ellas Bitdefender para entidades públicas, con implementación y soporte. Participamos en procesos de ciberseguridad por SECOP según la modalidad de cada entidad.' },
    { q: '¿Apoyan el MSPI de MinTIC y la seguridad digital de alcaldías?', a: 'Sí. La seguridad digital de las entidades públicas, incluida la ciberseguridad de las alcaldías, se apoya en el MSPI de MinTIC. Acompañamos la implementación, hacemos hacking ético para entidades públicas y dejamos la evidencia para los entes de control.' },
  ],
};
