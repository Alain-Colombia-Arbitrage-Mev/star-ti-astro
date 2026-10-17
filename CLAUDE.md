# Sitio web Star Solutions TI (star-ti.com)

Sitio Astro 6 + Tailwind 4, publicado como Cloudflare Worker (`wrangler.jsonc`, `worker/index.js`).
El dueño del negocio es George (Jorge Molano), Gerente General. Responder en español, en lenguaje
claro y no técnico, y explicar cada cambio antes de publicarlo.

## Reglas de trabajo

- Ramas (desde el 16-oct-2026):
  - `main`: **congelada.** Es el sitio original de Alain y el respaldo de George. No se toca nunca.
    `backup/main-2026-10-15` es una copia idéntica; tampoco se toca.
  - `star-solutions/desarrollo`: donde se trabaja. Solo genera vista previa.
  - `produccion`: lo que está en vivo. Cloudflare publica automáticamente cada cambio en esta rama
    (Settings → Build → Branch control → Production branch = `produccion`).
- Publicar = pasar los cambios de `star-solutions/desarrollo` a `produccion`, solo cuando George lo
  apruebe explícitamente.
- Vista previa de desarrollo (siempre la última versión):
  https://star-solutions-desarrollo-star-ti-astro.guardcolombia.workers.dev/
  Cada push genera además un enlace propio, en los checks del commit en GitHub ("Preview URL").
- **En Cloudflare no usar "Add variable and deploy" ni "Deploy"** en la configuración del Worker:
  publica la última versión construida, aunque sea de desarrollo. Así pasó el 16-oct-2026 al guardar
  `RESEND_API_KEY`: quedó en vivo una versión de desarrollo. Para variables, guardar sin publicar
  (flecha ⌄ → "Save") o hacerlo junto con un push a `produccion`.
- Antes de subir cambios, correr `npm run build` y verificar que no haya errores.
- Nunca escribir claves ni secretos en el código, en `wrangler.jsonc` ni en el chat. Se configuran
  como *Secrets* del Worker en el panel de Cloudflare.
- No modificar URLs ni dominios existentes sin plan de redirecciones, para no perder el SEO.

## Datos de la empresa

- Nombre comercial: **Star Solutions TI**. Razón social: **Star Solutions TI S.A.S.**
  (antes figuraba como "Starsolution"; ya se corrigió).
- Sede Bogotá: **Cra 27 # 49 - 19, Bogotá** (antes Calle 52 A # 22 - 16).

## Formularios (leads)

- Todos los formularios envían a `/api/leads`, que maneja `worker/index.js`.
- Cada solicitud se guarda en Airtable (tabla "Leads Web") y además se envía por correo con Resend a
  solicitudes@star-ti.com (grupo de distribución de Microsoft 365). Basta con que uno de los dos
  funcione.
- El correo se activa cuando exista el secreto `RESEND_API_KEY` en el Worker.
  Los pasos están en `docs/configurar-correo-formularios.md`.
- Componente reutilizable: `src/components/ConsultoriaForm.astro`. Solo en el inicio muestra
  "Servicio de Interés" (`showService`) con 5 áreas: Ciberseguridad y protección de datos,
  Certificación ISO 27001, Seguridad de Email, Equipos de cómputo, Acceso Remoto y Soporte IT.
  En las páginas de producto el servicio es la propia página y se envía oculto.
- Ese formulario está en el inicio y en todas las páginas del menú (Star Protection, Star
  Inspection, Star Compliance y Más Soluciones).
- Cada solicitud indica desde qué página se llenó (`sourceForm`, p. ej. "Bitdefender - Consultoría
  gratuita"): va en el asunto del correo ("[Bitdefender] …"), en un recuadro al inicio del correo y
  al comienzo del título del registro en Airtable.

## Estado al 16-oct-2026

Publicado en vivo el 16-oct-2026 (rama `produccion`):
- Nombre corregido, nueva dirección, formulario en todas las páginas del menú.
- Envío por correo con Resend configurado (ver abajo). Probado desde la vista previa.
- Origen de cada solicitud (página) visible en el correo y en Airtable.
- Página `/gracias`: se quitaron los tiempos de respuesta estimados.
- Inicio: "Protección Activa 24/7" se movió junto a las otras dos estadísticas.
- Destinatario de los correos: solicitudes@star-ti.com.
- Menú: se quitó "Contacto" (redundante con el botón rojo) y se agregó el sello ISO 27001 de SGS,
  que descarga el certificado (`public/certificados/`). El certificado aún muestra la dirección
  anterior; pedir a SGS que la actualice en la próxima auditoría.

Segunda publicación, 16-oct-2026 (aprobada por George):
- "Servicio de Interés" solo en el formulario del inicio.
- Promesas de respuesta "en menos de 2 horas" cambiadas por "a la mayor brevedad" (Contacto,
  Cableado, Kaspersky, Equipos de cómputo, descripción SEO de /contacto).
- Páginas nuevas: `/kymatio/` (Star Protection, después de Hornetsecurity) y `/lastpass/`
  (Star Compliance, después de Netwrix). Contenido basado en las webs oficiales; confirmar con
  George si hay acuerdo comercial con ambas marcas.
- Páginas retiradas: Brother, SOTI MobiControl, Black Duck y rThreat (Red Team & BAS). Sus URLs
  redirigen con 301 (worker y `public/_redirects`): /brother/ → /equipos-computo/,
  /soti-mdm/ → /teamviewer/, /black-duck/ y /rthreat-bogota-colombia/ → /hacking-etico/.
  No volver a crear esas URLs sin quitar antes la redirección.
- Inicio: franja animada de clientes (`ClientesMarquee`, lista en `src/data/clientes.ts`, logos en
  `public/clientes/`). Al reemplazar un logo con el mismo nombre, subir `LOGOS_VERSION`.
- Encabezado de cada herramienta con su logo oficial (`BrandLogoCard`, logos en `public/marcas/`)
  en lugar de imágenes genéricas. Hacking ético, ISO 27001, Cableado y Equipos de cómputo son
  servicios propios y conservan su imagen. Bitdefender: logo blanco sobre su azul (#006DFF).

Resend (configurado el 16-oct-2026):
- Cuenta de Resend creada por George. Dominio `star-ti.com` verificado (región São Paulo).
- Los registros de Resend están en `send.star-ti.com` y `resend._domainkey.star-ti.com`. Los MX de
  la raíz (Hornetsecurity y Outlook) no se tocaron.
- Clave de API solo con permiso de envío, guardada como secreto `RESEND_API_KEY` en el Worker
  `star-ti-astro` (Production y Previews).
- Si en Resend quedó una clave "Onboarding" con acceso total y nadie la usa, conviene borrarla.

Pendiente:
1. Hecho: prueba de correo desde la vista previa llegó a solicitudes@ con la etiqueta de origen, y
   el grupo acepta correos externos. Falta una prueba desde star-ti.com y revisar Airtable.
2. Decidir si las 5 páginas con formulario propio (Kaspersky, ISO 27001, Mejores empresas ISO,
   Cableado, Equipos de cómputo) conservan los dos formularios o solo el estándar.
3. Revisar la cifra "590K+ Clientes Satisfechos" del inicio: no está claro de dónde sale y podría
   ser una afirmación difícil de sustentar. Unificar también "más de 3,000 empresas" (inicio) con
   "más de 500 empresas" (Contacto).
4. A futuro: pasar a cuentas de la empresa el dominio, Cloudflare, GitHub y Airtable (hoy están en
   cuentas de Alain).

## Publicado el 17-oct-2026 (aprobado por George)

- Worker: toda petición `http://` se redirige con 301 a `https://` (el sitio aparecía "No seguro").
- Schema sin `aggregateRating`/`review` inventados (riesgo de acción manual de Google): los
  productos son `Service` (función `resellerService`). Organization con `legalName`, `taxID`
  900968161-7, `hasCredential` ISO/IEC 27001:2022 (SGS CO25/00000158, vence 2027-11-12) y redes.
- Cifras validadas por George: +1.150 empresas atendidas, 590K+ endpoints protegidos, 10 años
  (constituida en 2016), 50M datos protegidos, 85M amenazas bloqueadas. No hay ISO 9001 (en proceso).
- Casos de clientes autorizados: Canal Capital (Mauris Ávila) e Integral Group Solutions (Fabio Pachón).
- Informe 2026: metodología basada en fuentes públicas (no hay análisis de incidentes de clientes).
- Redes: facebook.com/starsolutionstisas, instagram.com/starsolutionti,
  linkedin.com/company/starsolutionstisas, x.com/tistarsolutions.

En desarrollo (tanda 2): enlaces internos a /seguridad-informatica-empresas/, títulos ≤ 60 y
descripciones ≤ 160, `lastmod` del sitemap, 301 con barra final faltantes, `noindex` en
*.workers.dev, CSP y Permissions-Policy. HSTS pendiente hasta confirmar el certificado.

## Antispam de formularios (tanda 3, en desarrollo)

- `src/components/LeadFormGuard.astro` (montado en `BaseLayout`) agrega a todo `form[data-lead-form]`
  un campo trampa `_website` y `_elapsed` (ms hasta el envío). `detectSpam` en `worker/index.js`
  **nunca descarta**: todo se entrega a Airtable y al correo; lo sospechoso (sin `_elapsed`, trampa
  llena, envío en menos de 3 s o Turnstile fallido) lleva el prefijo "[Posible spam: motivo]".
  Motivo: el HTML queda hasta 1 h en caché del navegador (sin las señales nuevas) y el autocompletado
  del celular envía en < 3 s. El 17-oct-2026 descartar "sin-js" hizo perder la prueba de George.
- Cloudflare Turnstile se activa solo con las dos claves; sin ellas funcionan las otras capas:
  1. Cloudflare → Turnstile → Add widget: `star-ti.com` y `guardcolombia.workers.dev`, modo Managed.
  2. Worker → Settings → Variables and Secrets: secreto `TURNSTILE_SECRET_KEY`. **Guardar con
     "Save" (flecha ⌄), sin "Deploy".**
  3. Worker → Settings → Build → Build variables: `PUBLIC_TURNSTILE_SITE_KEY` (pública).
  4. Se activa con el siguiente push a `produccion`. Si siteverify no responde, el lead se acepta.

## Comandos

- `npm install`: instalar dependencias. Requiere Node.js 22.12 o superior.
- `npm run dev`: ver el sitio en http://localhost:4321 mientras se edita.
- `npm run build`: compilar y verificar que no haya errores.
