// Contenido de /acronis/ (pilar Star Protection: backup y recuperacion).
// Capacidades y ediciones de Acronis Cyber Protect segun fuentes publicas (Acronis,
// G2, AV-TEST), verificadas el 19-oct-2026. Cifra de backups atacados: Sophos 2024.
// PENDIENTE: confirmar con George el nivel de partner de Star con Acronis antes de
// afirmar un nivel especifico; la pagina solo dice que Star implementa y soporta.

export const acronisCapabilities = [
  ['Backup de todo su entorno', 'Computadores, servidores físicos, máquinas virtuales, aplicaciones y Microsoft 365, con copias locales y en la nube.'],
  ['Protección contra ransomware', 'Acronis Active Protection detecta el cifrado malicioso por comportamiento, lo detiene y revierte los archivos afectados.'],
  ['Recuperación ante desastres', 'Si un servidor cae, se recupera la operación desde la copia en minutos u horas, no en días.'],
  ['Antimalware y EDR', 'Protección del equipo en el mismo agente del backup, con detección y respuesta según la edición.'],
  ['Vulnerabilidades y parches', 'Evaluación de vulnerabilidades y aplicación de parches desde la misma consola.'],
  ['Backups verificados', 'Escaneo de malware en las copias y notarización para comprobar que el respaldo no fue alterado (ediciones avanzadas).'],
];

export const acronisEditions = [
  ['Standard', 'Backup esencial, protección continua de datos, filtrado de URL y monitoreo de salud de discos.', 'Empresas que necesitan respaldo confiable y sencillo.'],
  ['Advanced', 'Lo anterior más planes de protección compartidos, escaneo de malware en backups, notarización e informes personalizables.', 'Empresas medianas y grandes con más equipos y servidores.'],
  ['Backup Advanced', 'Enfocada en respaldo avanzado: deduplicación, procesamiento fuera del equipo, soporte de cintas y opciones de recuperación ampliadas.', 'Entornos con muchos datos, virtualización o requisitos de retención.'],
];

export const acronisSteps = [
  ['Diagnóstico', 'Inventariamos qué hay que respaldar y definimos cuánta información puede perder (RPO) y en cuánto tiempo debe volver a operar (RTO).'],
  ['Diseño 3-2-1', 'Definimos copias, ubicaciones, retención y una copia aislada que el ransomware no pueda alcanzar.'],
  ['Implementación', 'Desplegamos el agente, configuramos las políticas y hacemos la primera copia completa.'],
  ['Pruebas de restauración', 'Restauramos de verdad, de forma periódica. Un backup que nunca se probó no es un backup.'],
  ['Monitoreo y soporte', 'Revisamos que cada copia termine bien y le damos soporte en español cuando necesite recuperar.'],
];

export const acronisFaqs = [
  {
    q: '¿Qué es Acronis Cyber Protect?',
    a: 'Es una plataforma que une en un solo agente y una sola consola el backup, la recuperación ante desastres, la protección contra ransomware y malware, y la gestión de vulnerabilidades y parches. Sirve para computadores, servidores, máquinas virtuales y Microsoft 365.',
  },
  {
    q: '¿Por qué no basta con copiar los archivos a un disco o a la nube?',
    a: 'Porque el ransomware busca las copias. Según el estudio de Sophos de 2024, en el 94 % de las organizaciones atacadas los delincuentes intentaron comprometer los backups, y en el 57 % de esos intentos lo lograron. Hace falta una copia aislada, protegida contra borrado y probada con restauraciones reales.',
  },
  {
    q: '¿Qué es la regla 3-2-1?',
    a: 'Tener al menos 3 copias de los datos, en 2 medios distintos, con 1 copia fuera de la oficina. Hoy se recomienda sumar una copia inmutable o desconectada que no se pueda borrar ni cifrar desde la red.',
  },
  {
    q: '¿Acronis reemplaza a mi antivirus o EDR?',
    a: 'Incluye protección antimalware, pero su fortaleza es el respaldo y la recuperación. En empresas medianas y grandes recomendamos combinarlo con un EDR como Bitdefender GravityZone: uno previene y detecta, el otro garantiza que pueda recuperarse.',
  },
  {
    q: '¿Cuánto cuesta Acronis para empresas?',
    a: 'Depende de la edición, del número de equipos, servidores y máquinas virtuales, y del almacenamiento en la nube que necesite. Después del diagnóstico le enviamos una propuesta en pesos colombianos.',
  },
  {
    q: '¿Sirve para cumplir ISO 27001?',
    a: 'Sí. ISO/IEC 27001:2022 incluye controles de copias de respaldo y de continuidad. Las políticas, los registros de cada copia y las pruebas de restauración documentadas son evidencia para el auditor.',
  },
];
