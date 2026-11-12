// Contenido de /blog/caida-microsoft-365-continuidad-correo/ (12-nov-2026).
// Hechos de la caida: El Imparcial, Infobae, Extra y ABC (12/13-nov-2026). Al publicar, Microsoft
// no habia anunciado la normalizacion completa (incidentes EX1550543 y MO1550821).
// Email Continuity Service: blog oficial de Hornetsecurity y ficha tecnica del servicio (activacion
// automatica, webmail, sincronizacion al volver el servidor, requiere el filtro antispam de Hornet).
// Star es Partner Silver de Hornetsecurity (confirmado por George, 18-oct-2026).

export const caidaMicrosoftFaqs = [
  {
    q: '¿Por qué se cayó Microsoft 365 el 12 de noviembre de 2026?',
    a: 'Según Microsoft, varios servidores de su infraestructura dejaron de estar disponibles de forma inesperada y el resto quedó sobrecargado. La empresa pausó sus despliegues, redistribuyó el tráfico y reinició los servidores afectados. Microsoft no ha vinculado la falla a un ciberataque.',
  },
  {
    q: '¿Qué servicios de Microsoft se vieron afectados?',
    a: 'Principalmente Outlook y Exchange Online (acceso a los buzones y envío y recepción de correo), además de Teams, Copilot y la carga de aplicaciones de Microsoft 365. Microsoft registró la falla como los incidentes EX1550543 y MO1550821 en el centro de administración.',
  },
  {
    q: '¿Qué es Email Continuity de Hornetsecurity?',
    a: 'Es un servicio que se activa automáticamente cuando el servidor de correo de la empresa, como Exchange Online, deja de estar disponible. Mientras dura la falla, los usuarios leen, responden y envían correos desde una interfaz web; cuando el servidor vuelve, el servicio compara los datos y entrega los correos que faltan en el buzón.',
  },
  {
    q: '¿Email Continuity también mantiene Teams o OneDrive?',
    a: 'No. Mantiene la operación del correo electrónico. Teams, SharePoint y OneDrive dependen de Microsoft; para esos casos el plan de continuidad debe prever canales alternos y copias de respaldo de los datos.',
  },
  {
    q: '¿Qué se necesita para tener continuidad del correo?',
    a: 'Que el correo de la empresa pase por el filtro de Hornetsecurity (sus registros MX apuntan a Hornetsecurity) y que el plan contratado incluya Email Continuity, ya sea dentro de 365 Total Protection o como servicio adicional según la edición. La configuración toma poco tiempo y no cambia la forma de trabajar de los usuarios.',
  },
];
