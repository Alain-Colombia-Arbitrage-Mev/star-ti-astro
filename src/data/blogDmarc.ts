// Contenido de /blog/como-implementar-dmarc/: guia tecnica que alimenta la landing
// /revision-dmarc-gratis/. Registros y etapas segun RFC 7489 y la documentacion de
// Microsoft y Google; requisitos de remitentes masivos ya verificados el 18-oct-2026
// (Google/Yahoo 2024, Outlook.com mayo 2025).

export const dmarcGuideFaqs = [
  {
    q: '¿Cuánto tiempo toma implementar DMARC?',
    a: 'Publicar los registros toma minutos. Llegar a la política de rechazo (p=reject) sin afectar correo legítimo suele tomar entre uno y tres meses, porque primero hay que monitorear los reportes e identificar todos los sistemas que envían correo con su dominio.',
  },
  {
    q: '¿Puedo poner p=reject desde el primer día?',
    a: 'No se recomienda. Si algún sistema legítimo (facturación electrónica, CRM, plataforma de marketing, impresoras que envían correo) no está en SPF o no firma con DKIM, sus correos serán rechazados. Empiece con p=none, revise los reportes y avance por etapas.',
  },
  {
    q: '¿Qué pasa si tengo dos registros SPF?',
    a: 'El SPF queda inválido. Un dominio debe tener un solo registro TXT que empiece por v=spf1. Si necesita autorizar varios servicios, se agregan en ese mismo registro con include.',
  },
  {
    q: '¿Qué es el límite de 10 consultas de SPF?',
    a: 'La especificación de SPF permite un máximo de 10 consultas DNS al evaluar el registro. Cada include, a, mx o redirect cuenta. Si se supera, SPF falla aunque el servidor esté autorizado. Hay que consolidar servicios o quitar los que ya no se usan.',
  },
  {
    q: '¿DMARC protege contra todo el phishing?',
    a: 'No. DMARC impide que suplanten exactamente su dominio. No evita dominios parecidos (por ejemplo, con una letra cambiada) ni correos maliciosos desde dominios ajenos. Para eso se necesita un filtro de correo como Hornetsecurity y capacitación de los usuarios.',
  },
  {
    q: '¿Star Solutions TI puede revisar mi dominio?',
    a: 'Sí. Hacemos una revisión gratuita de SPF, DKIM y DMARC del dominio que usted nos pida revisar, con información pública del DNS y sin pedirle accesos. Si encuentra algo por corregir, le explicamos cómo hacerlo o lo implementamos por usted.',
  },
];
