// Contenido de /revision-dmarc-gratis/: landing de la campana de email marketing de
// seguridad de correo (Hornetsecurity / Proofpoint). La revision se hace solo sobre el
// dominio que el propio cliente pide revisar (consentimiento); Star no escanea dominios
// de terceros. Requisitos de Google/Yahoo (2024) y Microsoft Outlook.com (mayo 2025)
// verificados el 18-oct-2026.

export const dmarcChecks = [
  ['SPF', 'Qué servidores pueden enviar correo en nombre de su dominio. Revisamos que esté completo y que no supere el límite de consultas.'],
  ['DKIM', 'La firma digital que prueba que un correo realmente salió de su empresa y no fue alterado.'],
  ['DMARC', 'La política que le dice al mundo qué hacer con los correos falsos que usan su dominio: monitorearlos, mandarlos a spam o rechazarlos.'],
  ['Registros MX y entrega', 'Por dónde entra su correo y si hay configuraciones que lo exponen o lo hacen caer en spam.'],
];

export const dmarcFaqs = [
  {
    q: '¿Qué es DMARC?',
    a: 'DMARC es un registro público en el DNS de su dominio que, junto con SPF y DKIM, le permite a los servidores de correo del mundo saber si un mensaje que dice venir de su empresa es legítimo, y qué hacer si no lo es. Sin DMARC en modo de protección, cualquiera puede enviar correos haciéndose pasar por su empresa.',
  },
  {
    q: '¿Por qué es importante proteger mi dominio contra la suplantación?',
    a: 'Porque es la base del fraude por correo corporativo (BEC): los atacantes envían facturas o solicitudes de pago falsas a sus clientes y proveedores usando su nombre. Además, desde 2024 Google y Yahoo, y desde mayo de 2025 Microsoft para Outlook.com, exigen SPF, DKIM y DMARC a los remitentes masivos; sin ellos, sus correos legítimos pueden llegar a spam.',
  },
  {
    q: '¿La revisión tiene algún costo?',
    a: 'No. La revisión es gratuita y sin compromiso. Si encontramos algo por corregir, le explicamos cómo hacerlo y, si lo desea, le cotizamos la implementación.',
  },
  {
    q: '¿Qué necesitan para hacer la revisión?',
    a: 'Solo el dominio de su empresa (por ejemplo, suempresa.com.co) y sus datos de contacto. Revisamos únicamente información pública del DNS: no necesitamos accesos, contraseñas ni instalar nada. Solo revisamos dominios a solicitud de la propia empresa.',
  },
  {
    q: '¿Cómo se corrige si mi dominio no está protegido?',
    a: 'Se ajustan los registros SPF y DKIM, se publica DMARC en modo de monitoreo y, después de revisar los reportes unas semanas, se pasa a modo de protección (cuarentena o rechazo) sin afectar el correo legítimo. Star Solutions TI lo implementa con soluciones como Hornetsecurity y Proofpoint.',
  },
];
