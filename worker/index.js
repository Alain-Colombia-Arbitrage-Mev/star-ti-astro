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
const LEADS_PATH = "/api/leads";
const DEFAULT_AIRTABLE_TABLE = "Leads Web";
const MIGRATED_HOSTS = new Set(["starsolutionsti.com.co", "www.starsolutionsti.com.co"]);
const ASSET_CASE_FIXES = new Map([
  ["/_astro/Footer.DwbKMbZa.css", "/_astro/Footer.1jOcFuDb.css"],
  ["/_astro/footer.dwbkmbza.css", "/_astro/Footer.1jOcFuDb.css"],
  ["/_astro/footer.1jocfudb.css", "/_astro/Footer.1jOcFuDb.css"],
  ["/_astro/iso-27001@_@astro.b6wserpz.css", "/_astro/iso-27001@_@astro.B6WseRpz.css"],
]);

const LEGACY_REDIRECTS = new Map([
  ["/dlp-bogota-colombia", "/dlp-prevencion-perdida-datos/"],
  ["/safetica-dlp-bogota-colombia", "/dlp-prevencion-perdida-datos/"],
  ["/antivirus-para-empresas-colombia", "/antivirus-empresas/"],
  ["/antivirus-kaspersky-bogota-colombia", "/kaspersky/"],
  ["/nosotros-star-solutions-t-i", "/sobre-nosotros/"],
  ["/soti-mdm-colombia", "/soti-mdm/"],
  ["/mdmsoti", "/soti-mdm/"],
  ["/ve", "/venezuela/"],
  ["/bitdefender-antivirus", "/bitdefender/"],
  ["/home-copy", "/"],
  ["/ridge-security-colombia", "/hacking-etico/"],
]);

const TRAILING_SLASH_PATHS = new Set([
  "/bitdefender",
  "/kaspersky",
  "/enthec",
  "/vicarius",
  "/stellar-cyber",
  "/hacking-etico",
  "/sealpath",
  "/netwrix",
  "/proofpoint",
  "/black-duck",
  "/teamviewer",
  "/anydesk",
  "/soti-mdm",
  "/cableado-estructurado",
  "/equipos-computo",
  "/brother",
  "/dlp-prevencion-perdida-datos",
  "/rthreat-bogota-colombia",
  "/antivirus-empresas",
  "/seguridad-informatica-empresas",
  "/sobre-nosotros",
  "/contacto",
  "/gracias",
  "/terminos",
  "/privacidad",
  "/politica-de-proteccion-de-datos-personales",
  "/informe-ciberseguridad-colombia-2026",
  "/venezuela",
  "/venezuela/contacto",
  "/miami",
  "/miami/contacto",
  "/blog",
  "/blog/iso-27001-regulaciones",
  "/blog/perfect-forward-secrecy",
  "/blog/ransomware-empresas-colombia",
  "/blog/respuesta-incidentes-ciberseguridad",
  "/blog/zero-trust-2025",
  "/iso-27001",
  "/hornetsecurity",
  "/mejores-empresas-consultoria-iso-27001-colombia",
  "/blog/comprar-kaspersky-empresas-colombia",
  "/blog/kaspersky-edr-xdr-mxdr-colombia",
  "/blog/kaspersky-next-precio-colombia",
]);

const FIELD_NAMES = {
  lead: "Lead",
  submittedAt: "Fecha de envio",
  name: "Nombre",
  email: "Email",
  phone: "Telefono",
  company: "Empresa",
  jobTitle: "Cargo",
  country: "Pais",
  region: "Region",
  service: "Servicio",
  budget: "Presupuesto",
  message: "Mensaje",
  employees: "Empleados",
  networkPoints: "Puntos de red",
  devices: "Dispositivos",
  useCase: "Caso de uso",
  acceptedPrivacy: "Acepta privacidad",
  sourceForm: "Formulario",
  sourceUrl: "URL de origen",
  sourcePath: "Ruta de origen",
  utmSource: "UTM source",
  utmMedium: "UTM medium",
  utmCampaign: "UTM campaign",
  utmContent: "UTM content",
  utmTerm: "UTM term",
  rawFields: "Campos completos",
  userAgent: "User agent",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === LEADS_PATH) {
      return handleLeadSubmission(request, env);
    }

    const canonicalUrl = getCanonicalRedirectUrl(url);
    if (canonicalUrl) {
      return Response.redirect(canonicalUrl.href, 301);
    }

    const assetResponse = await env.ASSETS.fetch(request);
    // *.workers.dev sigue activo para pruebas, pero no debe competir en Google
    // con el dominio canonico.
    if (url.hostname.endsWith(".workers.dev")) {
      const noindexResponse = new Response(assetResponse.body, assetResponse);
      noindexResponse.headers.set("X-Robots-Tag", "noindex, nofollow");
      return noindexResponse;
    }
    if (assetResponse.status !== 404 || !url.pathname.startsWith("/_astro/")) {
      return assetResponse;
    }

    const caseFixedPath = ASSET_CASE_FIXES.get(url.pathname);
    if (!caseFixedPath) {
      return assetResponse;
    }

    const caseFixedUrl = new URL(url.href);
    caseFixedUrl.pathname = caseFixedPath;
    return env.ASSETS.fetch(new Request(caseFixedUrl, request));
  },
};

function getCanonicalRedirectUrl(url) {
  const target = new URL(url.href);
  const decodedPath = safeDecodePathname(url.pathname);
  const pathWithoutPunctuation = stripTrailingPunctuation(decodedPath);
  const lookupPath = pathWithoutPunctuation.toLowerCase() || "/";
  const legacyTarget = LEGACY_REDIRECTS.get(lookupPath);
  let hasChanged = false;

  if (MIGRATED_HOSTS.has(url.hostname)) {
    target.hostname = APEX;
    hasChanged = true;
  } else if (url.hostname.startsWith("www.")) {
    target.hostname = url.hostname.slice(4);
    hasChanged = true;
  }

  if (legacyTarget) {
    target.pathname = legacyTarget;
    hasChanged = true;
  } else if (TRAILING_SLASH_PATHS.has(lookupPath)) {
    target.pathname = `${lookupPath}/`;
    hasChanged = true;
  } else if (decodedPath !== pathWithoutPunctuation && pathWithoutPunctuation === "/") {
    target.pathname = "/";
    hasChanged = true;
  }

  return hasChanged ? target : null;
}

function stripTrailingPunctuation(pathname) {
  return pathname.replace(/[.,]+$/u, "") || "/";
}

function safeDecodePathname(pathname) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

// --- Endurecimiento del endpoint de leads -----------------------------------
// Limites pensados para formularios de contacto: holgados para personas,
// estrechos para abuso (payloads gigantes, cientos de campos, archivos).
const MAX_BODY_BYTES = 32 * 1024;
const MAX_FIELDS = 40;
const MAX_FIELD_CHARS = 500;
const MAX_LONG_FIELD_CHARS = 5000;
const LONG_FIELDS = new Set(["mensaje", "message", "caso"]);
const ALLOWED_CONTENT_TYPES = ["application/x-www-form-urlencoded", "multipart/form-data"];
// Origenes desde los que el navegador puede enviar formularios.
const ALLOWED_ORIGIN_HOSTS = new Set([APEX, `www.${APEX}`, "starsolutionsti.com.co", "www.starsolutionsti.com.co"]);

function apiHeaders(extra = {}) {
  return { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", ...extra };
}

function isAllowedOrigin(request) {
  const origin = request.headers.get("Origin");
  // Los navegadores siempre envian Origin en un POST; sin Origin es un script.
  // No se bloquea aqui (el antispam ya lo descarta por falta de _elapsed).
  if (!origin) return true;
  try {
    const host = new URL(origin).hostname;
    if (ALLOWED_ORIGIN_HOSTS.has(host)) return true;
    // Pruebas en *.workers.dev del propio worker.
    return host === new URL(request.url).hostname && host.endsWith(".workers.dev");
  } catch {
    return false;
  }
}

async function handleLeadSubmission(request, env) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: apiHeaders({ Allow: "POST" }),
    });
  }

  // Formularios de otros sitios no pueden escribir en nuestro Airtable.
  if (!isAllowedOrigin(request)) {
    console.log("Lead rechazado: origen no permitido", request.headers.get("Origin"));
    return new Response("Forbidden", { status: 403, headers: apiHeaders() });
  }

  // Limite de solicitudes por IP (binding LEAD_LIMITER en wrangler.jsonc).
  // Si el binding no existe, el formulario sigue funcionando.
  if (env.LEAD_LIMITER) {
    const ip = request.headers.get("CF-Connecting-IP") || "sin-ip";
    try {
      const { success } = await env.LEAD_LIMITER.limit({ key: `lead:${ip}` });
      if (!success) {
        return new Response("Too many requests", { status: 429, headers: apiHeaders({ "Retry-After": "60" }) });
      }
    } catch (error) {
      console.error("Rate limiter no disponible; se continua", error);
    }
  }

  const contentType = (request.headers.get("Content-Type") || "").toLowerCase();
  if (!ALLOWED_CONTENT_TYPES.some((type) => contentType.startsWith(type))) {
    return new Response("Unsupported media type", { status: 415, headers: apiHeaders() });
  }

  const declaredLength = Number(request.headers.get("Content-Length") || 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return new Response("Payload too large", { status: 413, headers: apiHeaders() });
  }

  let formData;
  try {
    // Se lee el cuerpo con tope real (Content-Length puede mentir o faltar).
    const body = await readBodyWithLimit(request, MAX_BODY_BYTES);
    if (body === null) {
      return new Response("Payload too large", { status: 413, headers: apiHeaders() });
    }
    formData = await new Response(body, { headers: { "Content-Type": contentType } }).formData();
  } catch {
    return new Response("Bad request", { status: 400, headers: apiHeaders() });
  }

  const rawFields = formDataToObject(formData);
  if (rawFields === null) {
    return new Response("Bad request", { status: 400, headers: apiHeaders() });
  }
  const sourceUrl = getSourceUrl(request, rawFields);
  const sourcePath = sourceUrl ? new URL(sourceUrl).pathname : "";
  const redirectTo = getSafeRedirect(request, rawFields._redirect);

  // Spam: se responde igual que un envio exitoso para no darle pistas al bot.
  const spamReason = await detectSpam(request, env, rawFields);
  if (spamReason) {
    console.log("Lead descartado como spam", spamReason, sourcePath);
    if (wantsJson(request)) return Response.json({ ok: true }, { headers: apiHeaders() });
    return Response.redirect(new URL(redirectTo, request.url).href, 303);
  }

  const normalized = normalizeLead(rawFields, sourceUrl, sourcePath, request);
  const token = env.AIRTABLE_TOKEN;
  const baseId = env.AIRTABLE_BASE_ID;
  const table = env.AIRTABLE_TABLE_ID || env.AIRTABLE_TABLE_NAME || DEFAULT_AIRTABLE_TABLE;

  if (!token || !baseId) {
    console.error("Airtable lead submission skipped: missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID.");
    return failLeadRequest(request, "Airtable is not configured.", 503, redirectTo);
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        typecast: true,
        records: [{ fields: normalized }],
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Airtable lead submission failed", response.status, body);
      return failLeadRequest(request, "Could not save lead.", 502, redirectTo);
    }

    if (wantsJson(request)) {
      return Response.json({ ok: true }, { headers: apiHeaders() });
    }

    return Response.redirect(new URL(redirectTo, request.url).href, 303);
  } catch (error) {
    console.error("Lead submission failed", error);
    return failLeadRequest(request, "Could not save lead.", 502, redirectTo);
  }
}

function normalizeLead(rawFields, sourceUrl, sourcePath, request) {
  const name = getFirst(rawFields, ["nombre", "name"]);
  const email = getFirst(rawFields, ["email"]);
  const phone = getFirst(rawFields, ["telefono", "phone"]);
  const company = getFirst(rawFields, ["empresa", "company"]);
  const service = getFirst(rawFields, ["servicio", "service"]);
  const titleParts = [name || email || company || "Lead sitio web", service || sourcePath || "Formulario"];

  const fields = {};
  setField(fields, FIELD_NAMES.lead, titleParts.filter(Boolean).join(" - ").slice(0, 120));
  setField(fields, FIELD_NAMES.submittedAt, new Date().toISOString());
  setField(fields, FIELD_NAMES.name, name);
  setField(fields, FIELD_NAMES.email, email);
  setField(fields, FIELD_NAMES.phone, phone);
  setField(fields, FIELD_NAMES.company, company);
  setField(fields, FIELD_NAMES.jobTitle, getFirst(rawFields, ["cargo"]));
  setField(fields, FIELD_NAMES.country, getFirst(rawFields, ["pais", "country"]));
  setField(fields, FIELD_NAMES.region, getFirst(rawFields, ["region"]));
  setField(fields, FIELD_NAMES.service, service);
  setField(fields, FIELD_NAMES.budget, getFirst(rawFields, ["presupuesto", "budget"]));
  setField(fields, FIELD_NAMES.message, getFirst(rawFields, ["mensaje", "message"]));
  setField(fields, FIELD_NAMES.employees, getFirst(rawFields, ["empleados"]));
  setField(fields, FIELD_NAMES.networkPoints, getFirst(rawFields, ["puntos"]));
  setField(fields, FIELD_NAMES.devices, getFirst(rawFields, ["dispositivos"]));
  setField(fields, FIELD_NAMES.useCase, getFirst(rawFields, ["caso"]));
  setField(fields, FIELD_NAMES.acceptedPrivacy, rawFields.privacy ? "si" : "");
  setField(fields, FIELD_NAMES.sourceForm, getFirst(rawFields, ["_source_form"]));
  setField(fields, FIELD_NAMES.sourceUrl, sourceUrl);
  setField(fields, FIELD_NAMES.sourcePath, sourcePath);
  setField(fields, FIELD_NAMES.userAgent, request.headers.get("User-Agent"));

  if (sourceUrl) {
    const params = new URL(sourceUrl).searchParams;
    setField(fields, FIELD_NAMES.utmSource, params.get("utm_source"));
    setField(fields, FIELD_NAMES.utmMedium, params.get("utm_medium"));
    setField(fields, FIELD_NAMES.utmCampaign, params.get("utm_campaign"));
    setField(fields, FIELD_NAMES.utmContent, params.get("utm_content"));
    setField(fields, FIELD_NAMES.utmTerm, params.get("utm_term"));
  }

  const publicRawFields = Object.fromEntries(
    Object.entries(rawFields).filter(([key]) => !key.startsWith("_") && key !== TURNSTILE_FIELD),
  );
  setField(fields, FIELD_NAMES.rawFields, JSON.stringify(publicRawFields, null, 2));

  return fields;
}

// Senales que agrega src/components/LeadFormGuard.astro en el navegador.
const MIN_FILL_MS = 3000;
const TURNSTILE_FIELD = "cf-turnstile-response";

async function detectSpam(request, env, fields) {
  if (fields._website) return "honeypot";
  // Sin _elapsed el envio no paso por el navegador (POST directo al endpoint).
  const elapsed = Number(fields._elapsed);
  if (!fields._elapsed || !Number.isFinite(elapsed)) return "sin-js";
  if (elapsed < MIN_FILL_MS) return "demasiado-rapido";

  // Turnstile solo se exige cuando el secreto existe en el worker.
  if (env.TURNSTILE_SECRET_KEY) {
    const token = fields[TURNSTILE_FIELD];
    if (!token) return "turnstile-ausente";
    try {
      const body = new FormData();
      body.append("secret", env.TURNSTILE_SECRET_KEY);
      body.append("response", token);
      const ip = request.headers.get("CF-Connecting-IP");
      if (ip) body.append("remoteip", ip);
      const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
      const outcome = await result.json();
      if (!outcome.success) return "turnstile-invalido";
    } catch (error) {
      // Si Cloudflare no responde se acepta el lead: perder un cliente cuesta mas que un spam.
      console.error("Turnstile no disponible; lead aceptado", error);
    }
  }
  return null;
}

async function readBodyWithLimit(request, limit) {
  if (!request.body) return new Uint8Array();
  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > limit) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const out = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return out;
}

// Devuelve null si el envio es claramente abusivo (archivos o demasiados campos).
function formDataToObject(formData) {
  const fields = {};
  let count = 0;
  for (const [key, value] of formData.entries()) {
    // Ningun formulario del sitio sube archivos: cualquier archivo es abuso.
    if (typeof value !== "string") return null;
    if (++count > MAX_FIELDS || key.length > 64) return null;
    const max = LONG_FIELDS.has(key) ? MAX_LONG_FIELD_CHARS : MAX_FIELD_CHARS;
    const stringValue = neutralizeFormula(stripControlChars(value).trim().slice(0, max));
    if (!stringValue) continue;
    if (fields[key]) {
      fields[key] = `${fields[key]}, ${stringValue}`.slice(0, MAX_LONG_FIELD_CHARS);
    } else {
      fields[key] = stringValue;
    }
  }
  return fields;
}

function stripControlChars(value) {
  // Conserva saltos de linea y tabuladores del mensaje; elimina el resto.
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/gu, "");
}

// Inyeccion de formulas: si los leads se exportan de Airtable a Excel/Sheets,
// un valor como "=HYPERLINK(...)" o "@SUM(...)" se ejecutaria al abrirlo.
// Se antepone un apostrofo. Los telefonos "+57 300..." no se tocan.
function neutralizeFormula(value) {
  if (/^[=@\t\r]/u.test(value) || /^[+-](?![\d\s(])/u.test(value)) {
    return `'${value}`;
  }
  return value;
}

function getFirst(fields, keys) {
  for (const key of keys) {
    if (fields[key]) return fields[key];
  }
  return "";
}

function setField(fields, fieldName, value) {
  if (value === undefined || value === null || value === "") return;
  fields[fieldName] = String(value);
}

function getSourceUrl(request, fields) {
  const source = fields._source_url || request.headers.get("Referer");
  if (!source) return "";

  try {
    return new URL(source, request.url).href;
  } catch {
    return "";
  }
}

function getSafeRedirect(request, redirectValue) {
  if (!redirectValue) return "/gracias";

  try {
    const requestUrl = new URL(request.url);
    const redirectUrl = new URL(redirectValue, requestUrl.origin);
    if (redirectUrl.origin !== requestUrl.origin) return "/gracias";
    return `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`;
  } catch {
    return "/gracias";
  }
}

function wantsJson(request) {
  const accept = request.headers.get("Accept") || "";
  return accept.includes("application/json");
}

function failLeadRequest(request, message, status, redirectTo = "/gracias") {
  if (wantsJson(request)) {
    return Response.json({ ok: false, error: message }, { status, headers: apiHeaders() });
  }

  return Response.redirect(new URL(redirectTo, request.url).href, 303);
}
