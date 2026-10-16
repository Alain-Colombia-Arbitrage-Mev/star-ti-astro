# Configurar el envío por correo de los formularios

Desde octubre de 2026, cada solicitud enviada desde los formularios del sitio
(`/api/leads`) se envía **por correo** y se sigue guardando en **Airtable** como
respaldo. Si uno de los dos falla, el otro asegura que la solicitud no se pierda.

- **Destinatario por defecto:** solicitudes@star-ti.com, un grupo de distribución de
  Microsoft 365. Quién recibe las solicitudes se cambia agregando o quitando miembros del
  grupo, sin tocar el sitio. El grupo debe aceptar correos de remitentes externos.
- **Remitente:** `Sitio web Star Solutions TI <formularios@star-ti.com>`. No hace
  falta que ese buzón exista.
- **Responder al cliente:** al dar "Responder" en el correo, la respuesta va
  directo al email que el cliente escribió en el formulario.
- **Servicio de envío:** [Resend](https://resend.com). El plan gratuito alcanza
  para el volumen de un formulario de contacto.

El código ya está listo en `worker/index.js`. Mientras no exista la clave
`RESEND_API_KEY`, el sitio funciona exactamente igual que antes (solo Airtable).

## Pasos (una sola vez, unos 20 minutos)

Los debe hacer quien administre la cuenta de Cloudflare donde está el Worker
`star-ti-astro` y la zona DNS `star-ti.com`.

1. **Crear la cuenta en Resend** con un correo de la empresa (recomendado:
   contacto@star-ti.com, para que la cuenta quede a nombre de Star Solutions TI).

2. **Agregar y verificar el dominio.** En Resend, ir a *Domains → Add Domain* y
   escribir `star-ti.com`. Resend muestra 2 o 3 registros DNS (DKIM y SPF del
   subdominio `send`).
   - Agregarlos en Cloudflare: *star-ti.com → DNS → Records*, tal cual los da
     Resend y con el proxy **desactivado** (nube gris, "DNS only").
   - Estos registros viven en subdominios propios de Resend (`resend._domainkey`,
     `send`). **No modifican los registros MX ni el correo actual de la empresa.**
   - Esperar a que Resend marque el dominio como *Verified* (normalmente unos
     minutos).

3. **Crear la clave de API.** En Resend, ir a *API Keys → Create API Key*, con
   permiso *Sending access* y limitada al dominio `star-ti.com`. Copiarla.

4. **Guardar la clave en Cloudflare como secreto.** Ir a *Workers & Pages →
   star-ti-astro → Settings → Variables and Secrets → Add*, tipo **Secret**:
   - Nombre: `RESEND_API_KEY`
   - Valor: la clave copiada en el paso 3

   Alternativa por terminal: `npx wrangler secret put RESEND_API_KEY`

   **No agregar la clave al código ni al archivo `wrangler.jsonc`.**

5. **Probar.** Enviar el formulario desde la vista previa de la rama o desde el
   sitio. Revisar que el correo llegue a los miembros de solicitudes@star-ti.com (y que no caiga en spam
   la primera vez) y que aparezca en *Resend → Emails*.

## Ajustes opcionales (sin tocar código)

En *Variables and Secrets* del Worker se pueden agregar estas variables:

| Variable          | Para qué sirve                          | Ejemplo                                      |
|-------------------|-----------------------------------------|----------------------------------------------|
| `LEAD_EMAIL_TO`   | Cambiar los destinatarios (con comas)   | `solicitudes@star-ti.com,ventas@star-ti.com`    |
| `LEAD_EMAIL_FROM` | Cambiar el remitente                    | `Star Solutions TI <web@star-ti.com>`        |

Importante: no definir variables en la sección `vars` de `wrangler.jsonc`. Al
publicar, Wrangler reemplaza las variables configuradas en el panel y podría
borrar la configuración de Airtable.
