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

    if (url.pathname === LEADS_PATH) {
      return handleLeadSubmission(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

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
      return Response.json({ ok: true });
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
    Object.entries(rawFields).filter(([key]) => !key.startsWith("_")),
  );
  setField(fields, FIELD_NAMES.rawFields, JSON.stringify(publicRawFields, null, 2));

  return fields;
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
