// Contenido compartido de /lastpass/: la página muestra estas FAQ y seo.ts las
// publica como FAQPage (JSON-LD), así ambas versiones nunca divergen.
// Fuentes: lastpass.com/products/business, Trust Center de LastPass, comunicados
// de prensa (ISO 27701, may-2024) y cobertura del incidente de 2022
// (KrebsOnSecurity, sep-2023), consultados el 16-oct-2026.
export const lastpassFaqs = [
  {
    q: '¿Cómo ayuda LastPass a cumplir ISO 27001?',
    a: 'LastPass cubre de forma directa varios controles del Anexo A de ISO/IEC 27001:2022: 5.15 (control de acceso), 5.16 (gestión de identidades), 5.17 (información de autenticación), 5.18 (derechos de acceso), 8.2 (accesos privilegiados), 8.5 (autenticación segura) y 8.15 (registro de eventos). Las políticas centralizadas, el MFA obligatorio, la revocación automática de accesos y los informes de actividad generan la evidencia que piden los auditores. Star Solutions TI, certificada en ISO 27001, ayuda a documentar estos controles dentro de su SGSI.',
  },
  {
    q: '¿El administrador puede ver las contraseñas de los empleados?',
    a: 'No. LastPass usa un modelo de conocimiento cero (zero-knowledge): las bóvedas se cifran y descifran en el dispositivo del usuario con AES de 256 bits, a partir de su contraseña maestra, y ni LastPass ni el administrador pueden leerlas. El administrador sí controla las políticas, los grupos, las carpetas compartidas y los permisos, y puede ver los informes de uso y de seguridad.',
  },
  {
    q: '¿Es seguro LastPass después del incidente de seguridad de 2022?',
    a: 'En 2022 atacantes accedieron al entorno de desarrollo de LastPass y luego robaron copias de respaldo con bóvedas de clientes. Las contraseñas guardadas estaban cifradas, pero se expusieron datos de cuenta sin cifrar, y la protección de cada bóveda dependía de la fortaleza de su contraseña maestra. LastPass reconstruyó desde cero su entorno de desarrollo, rotó secretos y certificados, endureció los requisitos de contraseña maestra y obtuvo después nuevas certificaciones como ISO 27701 (2024). Por eso recomendamos implementarlo con contraseñas maestras robustas, MFA obligatorio o inicio de sesión federado, y con las políticas bien configuradas desde el primer día.',
  },
  {
    q: '¿Se integra con Microsoft Entra ID, Google Workspace u Okta?',
    a: 'Sí. LastPass Business se integra con Microsoft Active Directory, Microsoft Entra ID (Azure AD), Google Workspace, Okta y OneLogin para crear y desactivar usuarios automáticamente y permitir el inicio de sesión federado. Cuando un empleado sale de la empresa y se desactiva en el directorio, pierde el acceso a las credenciales compartidas sin pasos manuales.',
  },
  {
    q: '¿Qué diferencia hay entre LastPass Business y Business Max?',
    a: 'Business incluye la bóveda cifrada por empleado, la consola de administración, más de 100 políticas de seguridad, carpetas compartidas, monitoreo de la dark web, integraciones de directorio, informes avanzados y SSO para algunas aplicaciones. Business Max agrega SSO ilimitado, MFA avanzado sin contraseña para estaciones de trabajo y VPN, y módulos para descubrir y controlar aplicaciones SaaS, herramientas de IA y sitios web usados sin autorización (shadow IT). Le ayudamos a elegir el plan según sus requisitos de cumplimiento.',
  },
  {
    q: '¿LastPass sirve para la Ley 1581 de protección de datos en Colombia?',
    a: 'Sí, como medida técnica de seguridad. La Ley 1581 de 2012 obliga a los responsables del tratamiento a proteger los datos personales contra acceso no autorizado, y las credenciales débiles o compartidas por correo son una de las causas más comunes de filtraciones. LastPass reduce ese riesgo y deja trazabilidad de quién accede a qué. LastPass cuenta además con la certificación de privacidad ISO 27701 y declara cumplimiento con GDPR.',
  },
];
