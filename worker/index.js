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
  ["/soti-mdm-colombia", "/teamviewer/"],
  ["/mdmsoti", "/teamviewer/"],
  ["/ve", "/venezuela/"],
  ["/bitdefender-antivirus", "/bitdefender/"],
  ["/home-copy", "/"],
  ["/ridge-security-colombia", "/hacking-etico/"],
  // Paginas retiradas el 16-oct-2026 (Brother, SOTI, Black Duck, rThreat):
  // 301 a la solucion vigente mas cercana para conservar el SEO.
  ["/brother", "/equipos-computo/"],
  ["/brother/", "/equipos-computo/"],
  ["/soti-mdm", "/teamviewer/"],
  ["/soti-mdm/", "/teamviewer/"],
  ["/black-duck", "/hacking-etico/"],
  ["/black-duck/", "/hacking-etico/"],
  ["/rthreat-bogota-colombia", "/hacking-etico/"],
  ["/rthreat-bogota-colombia/", "/hacking-etico/"],
]);

const TRAILING_SLASH_PATHS = new Set([
  "/mejores-empresas-consultoria-iso-27001-colombia",
  "/blog/comprar-kaspersky-empresas-colombia",
  "/blog/kaspersky-edr-xdr-mxdr-colombia",
  "/blog/kaspersky-next-precio-colombia",
  "/bitdefender",
  "/kaspersky",
  "/kymatio",
  "/lastpass",
  "/enthec",
  "/vicarius",
  "/stellar-cyber",
  "/hacking-etico",
  "/sealpath",
  "/netwrix",
  "/proofpoint",
  "/teamviewer",
  "/anydesk",
  "/cableado-estructurado",
  "/equipos-computo",
  "/dlp-prevencion-perdida-datos",
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
    // *.workers.dev (vistas previas) no debe competir en Google con star-ti.com.
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

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1"]);

function getCanonicalRedirectUrl(url) {
  const target = new URL(url.href);
  const decodedPath = safeDecodePathname(url.pathname);
  const pathWithoutPunctuation = stripTrailingPunctuation(decodedPath);
  const lookupPath = pathWithoutPunctuation.toLowerCase() || "/";
  const legacyTarget = LEGACY_REDIRECTS.get(lookupPath);
  let hasChanged = false;

  // Todo el trafico va por HTTPS: sin esto, un enlace http:// (o el dominio
  // antiguo) servia la pagina sin cifrar y Chrome la marcaba "No seguro".
  if (url.protocol === "http:" && !LOCAL_HOSTS.has(url.hostname)) {
    target.protocol = "https:";
    hasChanged = true;
  }

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

async function handleLeadSubmission(request, env) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  const formData = await request.formData();
  const rawFields = formDataToObject(formData);
  const sourceUrl = getSourceUrl(request, rawFields);
  const sourcePath = sourceUrl ? new URL(sourceUrl).pathname : "";
  const redirectTo = getSafeRedirect(request, rawFields._redirect);

  // Spam: nunca se descarta. Todo llega a Airtable y al correo; lo sospechoso
  // va marcado "[Posible spam: motivo]". Una pagina en cache del navegador (sin
  // las senales de LeadFormGuard), el autocompletado del celular o un campo
  // trampa rellenado por el navegador no deben costar un cliente real.
  const spamReason = await detectSpam(request, env, rawFields);
  const spamTag = spamReason ? `[Posible spam: ${spamReason}] ` : "";
  if (spamReason) console.log("Lead marcado como posible spam", spamReason, sourcePath);

  const normalized = normalizeLead(rawFields, sourceUrl, sourcePath, request);
  if (spamTag) normalized[FIELD_NAMES.lead] = (spamTag + normalized[FIELD_NAMES.lead]).slice(0, 120);

  // La solicitud se guarda en Airtable (respaldo) y se envia por correo en
  // paralelo. Basta con que uno de los dos funcione para no perder el lead.
  const [airtable, email] = await Promise.all([
    saveLeadToAirtable(normalized, env),
    sendLeadEmail(normalized, env, spamTag),
  ]);

  if (airtable === "ok" || email === "ok") {
    if (wantsJson(request)) {
      return Response.json({ ok: true });
    }
    return Response.redirect(new URL(redirectTo, request.url).href, 303);
  }

  if (airtable === "skipped" && email === "skipped") {
    console.error("Lead not delivered: neither Airtable nor email is configured.");
    return failLeadRequest(request, "Lead delivery is not configured.", 503, redirectTo);
  }

  return failLeadRequest(request, "Could not save lead.", 502, redirectTo);
}

/** @returns {Promise<"ok" | "skipped" | "failed">} */
async function saveLeadToAirtable(fields, env) {
  const token = env.AIRTABLE_TOKEN;
  const baseId = env.AIRTABLE_BASE_ID;
  const table = env.AIRTABLE_TABLE_ID || env.AIRTABLE_TABLE_NAME || DEFAULT_AIRTABLE_TABLE;

  if (!token || !baseId) {
    console.warn("Airtable skipped: missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID.");
    return "skipped";
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
        records: [{ fields }],
      }),
    });

    if (!response.ok) {
      console.error("Airtable lead submission failed", response.status, await response.text());
      return "failed";
    }
    return "ok";
  } catch (error) {
    console.error("Airtable lead submission failed", error);
    return "failed";
  }
}

// --- Notificacion por correo (Resend: https://resend.com) ---
// Secreto requerido en Cloudflare: RESEND_API_KEY.
// Opcionales: LEAD_EMAIL_TO (correos separados por coma) y LEAD_EMAIL_FROM.
// Grupo de distribucion de Microsoft 365 creado para las solicitudes del sitio.
const DEFAULT_LEAD_EMAIL_TO = ["solicitudes@star-ti.com"];
const DEFAULT_LEAD_EMAIL_FROM = "Sitio web Star Solutions TI <formularios@star-ti.com>";

const EMAIL_FIELD_ORDER = [
  FIELD_NAMES.name,
  FIELD_NAMES.company,
  FIELD_NAMES.email,
  FIELD_NAMES.phone,
  FIELD_NAMES.service,
  FIELD_NAMES.message,
  FIELD_NAMES.jobTitle,
  FIELD_NAMES.country,
  FIELD_NAMES.region,
  FIELD_NAMES.budget,
  FIELD_NAMES.employees,
  FIELD_NAMES.networkPoints,
  FIELD_NAMES.devices,
  FIELD_NAMES.useCase,
  FIELD_NAMES.acceptedPrivacy,
  FIELD_NAMES.sourceForm,
  FIELD_NAMES.sourceUrl,
  FIELD_NAMES.utmSource,
  FIELD_NAMES.utmMedium,
  FIELD_NAMES.utmCampaign,
  FIELD_NAMES.submittedAt,
];

/** @returns {Promise<"ok" | "skipped" | "failed">} */
async function sendLeadEmail(fields, env, spamTag = "") {
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("Email skipped: missing RESEND_API_KEY.");
    return "skipped";
  }

  const to = (env.LEAD_EMAIL_TO ? env.LEAD_EMAIL_TO.split(",") : DEFAULT_LEAD_EMAIL_TO)
    .map((address) => address.trim())
    .filter(Boolean);
  const from = env.LEAD_EMAIL_FROM || DEFAULT_LEAD_EMAIL_FROM;
  const leadEmail = fields[FIELD_NAMES.email];
  const service = fields[FIELD_NAMES.service] || "Sin servicio indicado";
  const who = fields[FIELD_NAMES.company] || fields[FIELD_NAMES.name] || leadEmail || "Contacto web";
  const origin = getLeadOrigin(fields);

  const rows = EMAIL_FIELD_ORDER.filter((key) => fields[key]).map((key) => [key, fields[key]]);
  const text = [
    `ORIGEN: ${origin.form}`,
    ...(fields[FIELD_NAMES.sourcePath] ? [`Pagina: ${fields[FIELD_NAMES.sourcePath]}`] : []),
    "",
    ...rows.map(([key, value]) => `${key}: ${value}`),
  ].join("\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#111">
<h2 style="margin:0 0 12px">Nueva solicitud desde star-ti.com</h2>
<div style="background:#fdecec;border-left:4px solid #dc2626;padding:10px 14px;margin:0 0 16px">
<div style="font-size:12px;color:#991b1b;text-transform:uppercase;letter-spacing:.5px">Origen del formulario</div>
<div style="font-size:18px;font-weight:bold;color:#111">${escapeHtml(origin.form)}</div>${
    fields[FIELD_NAMES.sourcePath]
      ? `<div style="font-size:12px;color:#555">Página: ${escapeHtml(fields[FIELD_NAMES.sourcePath])}</div>`
      : ""
  }
</div>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([key, value]) =>
        `<tr><td style="border-bottom:1px solid #eee;color:#555;vertical-align:top"><strong>${escapeHtml(key)}</strong></td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>
<p style="color:#888;font-size:12px;margin-top:16px">Responda este correo para contestarle directamente al cliente.</p></div>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `${spamTag}[${origin.page}] Nueva solicitud web: ${service} - ${who}`.slice(0, 200),
        text,
        html,
        ...(isLikelyEmail(leadEmail) ? { reply_to: leadEmail } : {}),
      }),
    });

    if (!response.ok) {
      console.error("Lead email failed", response.status, await response.text());
      return "failed";
    }
    return "ok";
  } catch (error) {
    console.error("Lead email failed", error);
    return "failed";
  }
}

// Desde que parte del sitio se lleno el formulario. "form" es la etiqueta
// completa (p. ej. "Bitdefender - Consultoría gratuita") y "page" solo la
// pagina ("Bitdefender"), para el asunto del correo.
function getLeadOrigin(fields) {
  const form = fields[FIELD_NAMES.sourceForm] || fields[FIELD_NAMES.sourcePath] || "Sitio web";
  const page = form.split(" - ")[0].trim() || form;
  return { form, page };
}

function isLikelyEmail(value) {
  return typeof value === "string" && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeLead(rawFields, sourceUrl, sourcePath, request) {
  const name = getFirst(rawFields, ["nombre", "name"]);
  const email = getFirst(rawFields, ["email"]);
  const phone = getFirst(rawFields, ["telefono", "phone"]);
  const company = getFirst(rawFields, ["empresa", "company"]);
  const service = getFirst(rawFields, ["servicio", "service"]);
  const sourceForm = getFirst(rawFields, ["_source_form"]);
  const originPage = (sourceForm || sourcePath).split(" - ")[0].trim();
  const titleParts = [name || email || company || "Lead sitio web", service || sourcePath || "Formulario"];
  const title = titleParts.filter(Boolean).join(" - ");

  const fields = {};
  setField(fields, FIELD_NAMES.lead, (originPage ? `[${originPage}] ${title}` : title).slice(0, 120));
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
  setField(fields, FIELD_NAMES.sourceForm, sourceForm);
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

function formDataToObject(formData) {
  const fields = {};
  for (const [key, value] of formData.entries()) {
    const stringValue = typeof value === "string" ? value.trim() : value.name;
    if (!stringValue) continue;
    if (fields[key]) {
      fields[key] = `${fields[key]}, ${stringValue}`;
    } else {
      fields[key] = stringValue;
    }
  }
  return fields;
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
    return Response.json({ ok: false, error: message }, { status });
  }

  return Response.redirect(new URL(redirectTo, request.url).href, 303);
}
