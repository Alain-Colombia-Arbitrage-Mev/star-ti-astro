# Sitio web Star Solutions TI (star-ti.com)

Sitio Astro 6 + Tailwind 4, publicado como Cloudflare Worker (`wrangler.jsonc`, `worker/index.js`).
El dueño del negocio es George (Jorge Molano), Gerente General. Responder en español, en lenguaje
claro y no técnico, y explicar cada cambio antes de publicarlo.

## Reglas de trabajo

- **No tocar `main`.** `main` es el sitio en vivo: Cloudflare publica automáticamente cada cambio en
  esa rama. Todo el trabajo va en la rama `star-solutions/desarrollo`.
- Pasar cambios a `main` solo cuando George lo apruebe explícitamente.
- Respaldo del sitio original: rama `backup/main-2026-10-15`. No modificarla.
- Cada push a una rama genera una vista previa en Cloudflare. El enlace aparece en los checks del
  commit en GitHub, como "Preview URL".
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
- Componente reutilizable: `src/components/ConsultoriaForm.astro`. Campo "Servicio de Interés" como
  lista desplegable con 5 áreas:
  Ciberseguridad y protección de datos, Certificación ISO 27001, Seguridad de Email,
  Equipos de cómputo, Acceso Remoto y Soporte IT.
- Ese formulario está en el inicio y en las 20 páginas del menú (Star Protection, Star Inspection,
  Star Compliance y Más Soluciones).
- Cada solicitud indica desde qué página se llenó (`sourceForm`, p. ej. "Bitdefender - Consultoría
  gratuita"): va en el asunto del correo ("[Bitdefender] …"), en un recuadro al inicio del correo y
  al comienzo del título del registro en Airtable.

## Estado al 16-oct-2026

Hecho en `star-solutions/desarrollo`, todavía sin publicar en `main`:
- Nombre corregido, nueva dirección, formulario en todas las páginas del menú.
- Envío por correo: código listo y Resend configurado (ver abajo). Falta la prueba de envío.
- Origen de cada solicitud (página) visible en el correo y en Airtable.
- Página `/gracias`: se quitaron los tiempos de respuesta estimados.
- Inicio: "Protección Activa 24/7" se movió junto a las otras dos estadísticas.

Resend (configurado el 16-oct-2026):
- Cuenta de Resend creada por George. Dominio `star-ti.com` verificado (región São Paulo).
- Los registros de Resend están en `send.star-ti.com` y `resend._domainkey.star-ti.com`. Los MX de
  la raíz (Hornetsecurity y Outlook) no se tocaron.
- Clave de API solo con permiso de envío, guardada como secreto `RESEND_API_KEY` en el Worker
  `star-ti-astro` (Production y Previews).
- Si en Resend quedó una clave "Onboarding" con acceso total y nadie la usa, conviene borrarla.

Pendiente:
1. Probar el envío desde la vista previa de `star-solutions/desarrollo` (p. ej. desde /bitdefender/):
   que llegue a los miembros de solicitudes@star-ti.com, que no caiga en spam y que se vea en Resend → Emails.
2. Decidir si se agrega una 6.ª área (Cableado estructurado / Impresoras Brother) al formulario.
3. Decidir si las 6 páginas con formulario propio (Kaspersky, rThreat, ISO 27001, Mejores empresas
   ISO, Cableado, Equipos de cómputo) conservan los dos formularios o solo el estándar.
4. Quitar "Respuesta en menos de 2 horas" de la descripción SEO de /contacto (`src/data/seo.ts`).
5. Revisar la cifra "590K+ Clientes Satisfechos" del inicio: no está claro de dónde sale y podría
   ser una afirmación difícil de sustentar.
6. Publicar en `main` cuando todo esté probado.
7. A futuro: pasar a cuentas de la empresa el dominio, Cloudflare, GitHub y Airtable (hoy están en
   cuentas de Alain).

## Comandos

- `npm install`: instalar dependencias. Requiere Node.js 22.12 o superior.
- `npm run dev`: ver el sitio en http://localhost:4321 mientras se edita.
- `npm run build`: compilar y verificar que no haya errores.
