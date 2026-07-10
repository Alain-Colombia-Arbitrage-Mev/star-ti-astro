// Redirige www.* al dominio apex con 301 (canonico para SEO).
// El resto de peticiones se sirven desde los assets estaticos de dist/.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.href, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
