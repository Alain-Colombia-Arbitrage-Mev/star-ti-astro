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

// Reconocimientos de Acronis Cyber Protect Cloud (edicion en la nube de la misma
// plataforma). Fuentes: AV-TEST, SE Labs, Info-Tech y Omdia segun Acronis; 19-oct-2026.
export const acronisAwards = [
  ['AV-TEST', 'Top Product', 'Puntaje perfecto de 18/18 en la evaluación de protección empresarial para Windows 11, febrero de 2026.'],
  ['AV-TEST', 'Advanced Approved Endpoint Protection', 'Certificación de protección avanzada contra amenazas (ATP) para Windows, 2026, con 35 de 35 puntos en protección.'],
  ['SE Labs', 'AAA', 'Máxima calificación en la prueba de seguridad avanzada de Acronis Cyber Protect Cloud con Advanced Security + XDR, 2025.'],
  ['Info-Tech · SoftwareReviews', 'XDR Champion', 'Reconocimiento como campeón en detección y respuesta extendida (XDR), 2025.'],
  ['Omdia', 'Champion', 'Matriz de liderazgo en ecosistemas de ciberseguridad para proveedores de servicios administrados, 2026.'],
];

export const acronisSpecs = [
  ['Cifrado', 'AES-256 para las copias, en tránsito y en reposo, con contraseña definida por el cliente.'],
  ['Almacenamiento inmutable', 'Las copias en la nube no se pueden modificar ni borrar durante el periodo de retención definido.'],
  ['Sistemas operativos', 'Windows (incluido Windows en ARM), Windows Server, macOS y Linux.'],
  ['Virtualización', 'VMware vSphere, Microsoft Hyper-V, Citrix XenServer, Red Hat Virtualization, KVM y Oracle VM. Respaldo sin agente para Proxmox VE (máquinas virtuales y contenedores LXC) y Nutanix AHV.'],
  ['Nube y SaaS', 'Microsoft 365 (Exchange Online, OneDrive, SharePoint y Teams), Google Workspace (Gmail, Drive, Contactos y Calendario) y Microsoft Azure.'],
  ['Identidad', 'Recuperación de Microsoft Entra ID: usuarios, grupos y políticas.'],
  ['Restauración universal', 'Recupera Windows y Linux en hardware distinto: de físico a virtual, de virtual a nube o a un equipo nuevo.'],
  ['Restauración instantánea', 'Arranca una copia como máquina virtual para volver a operar mientras los datos se mueven en segundo plano.'],
  ['Destinos de copia', 'Almacenamiento local o NAS, nube de Acronis o nubes públicas, combinables para cumplir la regla 3-2-1.'],
];

export const acronisUseCases = [
  ['Ataque de ransomware', 'Detección del cifrado, reversión de archivos y restauración desde una copia aislada.'],
  ['Error humano', 'Un archivo, una carpeta o un buzón borrado por error se recupera en minutos.'],
  ['Falla de un servidor', 'La copia arranca como máquina virtual mientras se repara o reemplaza el equipo.'],
  ['Cambio de hardware', 'Migración a un equipo o servidor nuevo sin reinstalar todo desde cero.'],
  ['Cumplimiento y auditoría', 'Retención, registros de cada copia y pruebas de restauración documentadas.'],
  ['Microsoft 365', 'Microsoft no garantiza la recuperación de todo lo que usted borra: el respaldo propio de correo, OneDrive y SharePoint cierra ese hueco.'],
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
    q: '¿Qué son el RPO y el RTO?',
    a: 'El RPO (objetivo de punto de recuperación) es cuánta información puede perder: si se respalda cada 4 horas, en el peor caso pierde 4 horas de trabajo. El RTO (objetivo de tiempo de recuperación) es en cuánto tiempo debe volver a operar. Con esos dos números se define la frecuencia de las copias y la forma de recuperar.',
  },
  {
    q: '¿Acronis respalda Microsoft 365 y Google Workspace?',
    a: 'Sí. Respalda Exchange Online, OneDrive, SharePoint y Teams en Microsoft 365, y Gmail, Drive, Contactos y Calendario en Google Workspace, directamente desde la nube y sin instalar nada en los equipos.',
  },
  {
    q: '¿Funciona con VMware, Hyper-V o Proxmox?',
    a: 'Sí. Respalda VMware vSphere, Hyper-V y otros hipervisores, y desde la versión 17 respalda sin agente máquinas virtuales de Proxmox VE y Nutanix AHV. También permite restaurar en un hipervisor o hardware distinto.',
  },
  {
    q: '¿Qué pasa si un atacante obtiene la contraseña de la consola?',
    a: 'Por eso se recomienda almacenamiento inmutable y autenticación de dos factores en la consola: las copias inmutables no se pueden borrar ni modificar durante la retención, aunque alguien entre con credenciales robadas.',
  },
  {
    q: '¿Cada cuánto se deben probar las restauraciones?',
    a: 'Recomendamos al menos una prueba trimestral de los sistemas críticos y después de cada cambio importante. Las pruebas documentadas son además evidencia para ISO 27001 (control 8.13, copias de respaldo de la información).',
  },
  {
    q: '¿Cuánto cuesta Acronis para empresas?',
    a: 'Depende de la edición, del número de equipos, servidores y máquinas virtuales, y del almacenamiento en la nube que necesite. Después del diagnóstico le enviamos una propuesta en pesos colombianos.',
  },
  {
    q: '¿Sirve para cumplir ISO 27001?',
    a: 'Sí. ISO/IEC 27001:2022 incluye controles de copias de respaldo de la información (8.13) y de preparación de las TIC para la continuidad del negocio (5.30). Las políticas, los registros de cada copia y las pruebas de restauración documentadas son evidencia para el auditor.',
  },
];
