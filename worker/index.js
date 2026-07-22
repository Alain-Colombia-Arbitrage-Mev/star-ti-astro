// Redirecciones 301 y servido de assets estaticos de dist/.
//
// 1. Migracion de dominio: starsolutionsti.com.co -> star-ti.com. La autoridad
//    SEO estaba en el dominio antiguo; el 301 con mapeo 1:1 (misma ruta y query)
//    la traslada al canonico. Debe permanecer activo indefinidamente: si el
//    dominio antiguo se deja caducar, la autoridad transferida se pierde.
//    starsolutionsti.com.ve queda FUERA a proposito: su zona esta fuera de
//    Cloudflare y su destino es una decision comercial aparte.
// 2. www.* -> apex del mismo dominio (canonico para SEO).
// 3. El resto se sirve desde los assets estaticos.
const APEX = "star-ti.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;

    // Dominio migrado (apex y www) -> canonico, conservando ruta y query.
    if (host === "starsolutionsti.com.co" || host === "www.starsolutionsti.com.co") {
      url.hostname = APEX;
      return Response.redirect(url.href, 301);
    }

    // www.* -> apex del mismo dominio.
    if (host.startsWith("www.")) {
      url.hostname = host.slice(4);
      return Response.redirect(url.href, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
