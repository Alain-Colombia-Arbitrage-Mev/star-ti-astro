# Fase 0 — Dominio canónico y captura de leads

**Fecha:** 2026-07-21
**Estado:** Aprobado, pendiente de plan de implementación

## Contexto

El encargo original era convertir cuatro landings HTML a rutas Astro, mejorar su contenido y
optimizar para búsquedas por IA. Al explorar el proyecto aparecieron dos problemas que bloquean
ese objetivo y que son independientes de las landings. Este documento cubre solo esos dos.
Las landings son Fase 1; la capa de contenido GEO es Fase 2.

### Problema 1: el dominio canónico no existe

`starsolution.com.co` no resuelve (NXDOMAIN). Sin embargo es el valor de `site` en
`astro.config.ts` y de `BASE_URL` en `seo.ts`, de donde se derivan los canonicals, el JSON-LD,
los hreflang, las etiquetas Open Graph y ambos sitemaps de las 38 páginas del sitio.

Verificado en producción:

```
starsolution.com.co     → NXDOMAIN
star-ti.com             → 200, canonical: https://starsolution.com.co/
starsolutionsti.com.co  → 200, canonical: https://starsolution.com.co/
```

Consecuencias, en orden de gravedad:

1. Cada página declara como canónica una URL en un host inexistente. Google respeta el canonical;
   esto basta para que las URLs reales no se indexen o caigan del índice.
2. Los dos dominios vivos sirven contenido idéntico: contenido duplicado sin canónico válido que
   los desambigüe.
3. `llms.txt` y `llms-full.txt` — los archivos dirigidos a crawlers de IA — entregan el 100% de
   sus enlaces rotos. Todo el andamiaje de GEO ya existía (`robots.txt` permite más de 20 agentes
   de IA, hay JSON-LD extenso) y estaba colgado de un dominio muerto. Este es, literalmente, el
   problema que el encargo original pedía resolver.

El dominio canónico correcto es **`star-ti.com`**: es el apex principal en `wrangler.jsonc`,
coincide con el correo corporativo (`contacto@star-ti.com`) y con el `mailto:` de las cuatro
landings HTML.

### Problema 2: los formularios no capturan leads

Ningún formulario del sitio persiste datos. Hay dos patrones, ambos con fuga:

- **General:** `<form action="/gracias" method="GET">`. `gracias.astro` es estática y no procesa
  nada. Presente en `contacto.astro`, `index.astro`, `RegionLanding.astro` y ocho páginas más.
- **ISO 27001:** JS intercepta el submit y construye un `mailto:`. Depende de que el visitante
  tenga cliente de correo configurado.

Los leads se están perdiendo hoy, en producción.

## Alcance

Dentro: dominio canónico, deduplicación de dominios, endpoint de leads contra Airtable, alta y
notificación en buscadores.
Fuera: contenido, landings, rutas nuevas, `llms.txt` reescrito con nuevas secciones, `HowTo`
schema y reestructuración de contenido para extracción (Fase 1 y 2).

## Diseño

### A. Dominio canónico

83 ocurrencias de `starsolution.com.co` en 10 archivos fuente (`dist/` es salida de build y se
regenera):

| Archivo | Ocurrencias | Naturaleza |
|---|---|---|
| `public/llms.txt` | 35 | enlaces a páginas |
| `public/llms-full.txt` | 32 | enlaces a páginas |
| `public/robots.txt` | 5 | 2 `Sitemap:` + 3 en comentarios |
| `src/layouts/BaseLayout.astro` | 2 | `ogImage` fallback (L12) y `BASE_URL` propio (L14) |
| `src/pages/bitdefender.astro` | 2 | JSON-LD `Service` inline (L77, L87) |
| `src/data/seo.ts` | 2 | `BASE_URL` (L22) y texto de FAQ (L958) |
| `astro.config.ts` | 2 | `site` (L6) y comparación en `serialize` (L23) |
| `src/pages/sitemap.xml.ts` | 1 | constante `BASE` (L1) |
| `src/pages/404.astro` | 1 | `canonical` hardcodeado (L10) |
| `src/pages/informe-ciberseguridad-colombia-2026.astro` | 1 | texto visible de atribución (L938) |

Tres decisiones de diseño más allá del reemplazo literal:

1. **Fuente única de verdad.** `BaseLayout.astro:14` duplica el `BASE_URL` de `seo.ts:22`, y
   `sitemap.xml.ts:1` lo duplica una tercera vez. Se exporta la constante desde `seo.ts` y los
   otros dos la importan. Un reemplazo literal dejaría tres sitios donde volver a equivocarse.
2. **`astro.config.ts:23` es una trampa.** El `serialize` del sitemap compara
   `item.url === 'https://starsolution.com.co/'` para asignar prioridad 1.0 a la home. Si se
   cambia `site` sin tocar esa línea, la comparación deja de coincidir y la home pierde su
   prioridad sin error visible.
3. **Dos ocurrencias son prosa, no configuración.** La FAQ del informe (`seo.ts:958` y
   `informe-...astro:938`) pide a universidades, medios y consultoras que citen
   `starsolution.com.co`. Se corrigen como texto.

### B. Deduplicación de dominios

En `worker/index.js`, redirección 301 de `starsolutionsti.com.co` → `star-ti.com`, preservando
path y query, junto a la lógica `www.` existente.

**`starsolutionsti.com.ve` queda excluido.** Su zona está fuera de Cloudflare
(`wrangler.jsonc:22`) y redirigir el dominio venezolano al colombiano es una decisión comercial,
no técnica. Se trata aparte.

### C. Endpoint de leads

En `worker/index.js`, antes del `env.ASSETS.fetch`:

```
POST /api/lead
  1. valida method, content-type y campos requeridos
  2. honeypot: si el campo señuelo viene lleno → 200 sin persistir
  3. POST a api.airtable.com/v0/{BASE_ID}/{TABLA}, Bearer ${env.AIRTABLE_TOKEN}
  4. 200 {ok:true} | 400 validación | 502 fallo de Airtable
```

`AIRTABLE_TOKEN` y `AIRTABLE_BASE_ID` como secrets de Cloudflare (`wrangler secret put`). Nunca
en el repositorio ni en el cliente: si el formulario postease directo a Airtable desde el
navegador, el token quedaría expuesto y cualquiera podría escribir en la base.

**Mejora progresiva.** Los formularios se quedan como HTML con `action="/gracias/"`. Encima, un
JS intercepta, hace `fetch` al endpoint y confirma en sitio. Si el JS no carga, el formulario se
comporta como hoy: no se empeora ningún caso.

**El lead nunca se descarta.** Si Airtable falla, el worker responde 502 y el front cae al
`mailto:` como red de seguridad. Un lead incómodo es preferible a un lead perdido.

El mapeo de nombres de campo vive en una constante al principio del worker, para ajustarlo a las
columnas reales de Airtable sin tocar la lógica.

### D. Alta y notificación en buscadores

Estas tareas son de configuración en paneles externos, no de código, pero pertenecen a Fase 0:
corregir el canonical sin reenviar los sitemaps deja la recuperación a merced del recrawl
espontáneo, que puede tardar semanas.

**Razonamiento.** El objetivo declarado del encargo es aparecer en motores de IA. Estos no
mantienen un índice propio al que uno se dé de alta: operan sobre índices de búsqueda
convencionales. Google AI Overviews y AI Mode leen el índice de Google; ChatGPT Search se apoya
en Bing y en su propio crawler (`OAI-SearchBot`); Copilot usa Bing; Perplexity mantiene índice
propio. Estar indexado en Google y Bing es por tanto condición previa, no un paso paralelo.

Tareas:

1. **Google Search Console.** Verificar propiedad de `star-ti.com`, reenviar `/sitemap-index.xml`
   y `/sitemap.xml`, y comprobar en el informe de cobertura cuántas URLs estaban excluidas por
   canonical hacia otro dominio.
2. **Bing Webmaster Tools.** Dar de alta `star-ti.com` y enviar sitemaps. Es el paso que se
   omite con más frecuencia y el que alimenta a ChatGPT Search y Copilot.
3. **IndexNow.** Activar desde el panel de Cloudflare para notificar los cambios sin esperar al
   recrawl.

Antes de ejecutar el punto 1 conviene resolver el riesgo de elección de canónico descrito más
abajo: Search Console es precisamente donde se comprueba qué dominio acumula historial.

**Nota sobre `llms.txt`.** El proyecto ya publica `llms.txt` y `llms-full.txt`, y en Fase 0 se
corrigen sus enlaces rotos. Conviene registrar la expectativa con precisión: ninguna empresa
grande de IA ha confirmado públicamente consumir ese archivo. Es una convención propuesta, de
coste de mantenimiento bajo y beneficio no demostrado. No debe tratarse como palanca principal
de visibilidad en IA. El `robots.txt` existente, que permite explícitamente más de 20 agentes de
IA, sí es relevante y ya está correctamente resuelto.

## Verificación

- `grep -r "starsolution\.com\.co" dist/` tras el build no devuelve nada.
- `curl -I https://starsolutionsti.com.co/bitdefender/` devuelve 301 a
  `https://star-ti.com/bitdefender/`.
- La home conserva `<priority>1.0</priority>` en `/sitemap-index.xml`.
- `POST /api/lead` con payload válido crea un registro en Airtable; con honeypot lleno devuelve
  200 sin crear registro; sin campos requeridos devuelve 400.
- Un formulario enviado con JS deshabilitado sigue llegando a `/gracias/`.
- Los sitemaps aparecen como enviados y procesados sin errores en Google Search Console y Bing
  Webmaster Tools.

### Señales de éxito posteriores

No son verificables el día del despliegue; se comprueban en las semanas siguientes.

- **Cobertura en Search Console:** las URLs excluidas por canonical hacia otro dominio bajan a
  cero y las páginas pasan a indexadas.
- **Crawlers de IA en analíticas de Cloudflare:** filtrando por user-agent `GPTBot`,
  `PerplexityBot`, `ClaudeBot` y `OAI-SearchBot` debe verse actividad. Su ausencia indica que no
  están leyendo el sitio.
- **Tráfico de referencia** desde `chatgpt.com` y `perplexity.ai`.

## Dependencias externas

De la persona usuaria:

- **Parte C:** **Base ID** (`app...`), **nombre de la tabla**, **nombres exactos de las
  columnas** y un **token de acceso personal** con permiso `data.records:write` limitado a esa
  base.
- **Parte D:** acceso a Google Search Console, Bing Webmaster Tools y al panel de Cloudflare.
  Son tareas de panel; se pueden ejecutar de forma acompañada pero no automatizar desde el
  repositorio.

La parte A no depende de ninguna de las dos y puede desplegarse por separado. Si Airtable no está
listo, el endpoint queda implementado e inerte hasta que se configuren los secrets.

## Riesgos

- **Elección del canónico.** Si el historial de indexación y los backlinks apuntasen mayormente a
  `starsolutionsti.com.co`, redirigir hacia `star-ti.com` traslada autoridad en la dirección
  contraria a la acumulada. Conviene contrastarlo en Google Search Console. Dado que el canonical
  lleva tiempo apuntando a un dominio muerto, es probable que haya poca autoridad consolidada en
  cualquiera de los dos.
- **Recuperación no inmediata.** Corregir el canonical no reindexa el sitio al día siguiente. Hay
  que reenviar los sitemaps en Search Console y esperar el recrawl.