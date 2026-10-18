// Contenido de /blog/que-es-hornetsecurity/: guia pilar del cluster Hornetsecurity.
// La landing comercial es /hornetsecurity/ (planes y cotizacion); este post cubre la
// intencion informativa ("que es Hornetsecurity", "Hornetsecurity vs Defender").
// Datos verificados el 18-oct-2026: compra de Vade (marzo 2024) y adquisicion por
// Proofpoint (cerrada el 8-dic-2025, USD 1.800 M). No agregar cifras sin fuente.

export const hornetFaqs = [
  {
    q: '¿Qué es Hornetsecurity?',
    a: 'Hornetsecurity es un fabricante alemán de seguridad en la nube, fundado en 2007 en Hannover, especializado en proteger el correo y los datos de Microsoft 365. Su suite principal, 365 Total Protection, reúne filtrado de spam y malware, protección avanzada contra phishing, cifrado, archivado, backup y concienciación de usuarios. Desde diciembre de 2025 pertenece a Proofpoint.',
  },
  {
    q: '¿Hornetsecurity sigue existiendo después de la compra de Proofpoint?',
    a: 'Sí. Proofpoint completó la compra de Hornetsecurity el 8 de diciembre de 2025 y la convirtió en una unidad de negocio propia, dirigida por su fundador, Daniel Hofmann. Proofpoint anunció que los productos, los programas de partners y los canales de soporte existentes se mantienen.',
  },
  {
    q: '¿Hornetsecurity reemplaza a Microsoft Defender para Office 365?',
    a: 'No necesariamente. Hornetsecurity agrega una capa independiente sobre la seguridad nativa de Microsoft 365, y además incluye funciones que Microsoft no cubre de la misma forma, como el backup independiente de buzones, OneDrive, SharePoint y Teams. Muchas empresas usan ambas capas; la decisión depende de la licencia de Microsoft que ya tengan y del riesgo.',
  },
  {
    q: '¿Microsoft 365 no hace backup de mis correos?',
    a: 'Microsoft garantiza la disponibilidad del servicio, pero bajo su modelo de responsabilidad compartida la protección de los datos frente a borrados, errores o ransomware es responsabilidad del cliente. La papelera y los elementos recuperables tienen plazos limitados, por eso conviene un backup independiente como 365 Total Backup.',
  },
  {
    q: '¿Cuánto tarda implementar Hornetsecurity?',
    a: 'La activación técnica es rápida: se conecta el tenant de Microsoft 365 y se cambian los registros MX del dominio. Lo que toma más tiempo es ajustar políticas, listas y reglas sin afectar el correo de producción; por eso en Star Solutions TI hacemos una fase de ajuste antes de dar el servicio por estable.',
  },
  {
    q: '¿Cuánto cuesta Hornetsecurity en Colombia?',
    a: 'Hornetsecurity se licencia por usuario o buzón de Microsoft 365 y el valor depende del plan (Business, Enterprise, Enterprise Backup o Compliance & Awareness), del número de buzones y del plazo. Star Solutions TI, Partner Silver de Hornetsecurity, cotiza según su caso en pesos colombianos.',
  },
];
