const AIRTABLE_API_BASE = "https://api.airtable.com/v0";
const DEFAULT_TABLE_NAME = "Leads Web";

const fields = [
  { name: "Lead", type: "singleLineText" },
  { name: "Fecha de envio", type: "singleLineText" },
  { name: "Nombre", type: "singleLineText" },
  { name: "Email", type: "email" },
  { name: "Telefono", type: "phoneNumber" },
  { name: "Empresa", type: "singleLineText" },
  { name: "Cargo", type: "singleLineText" },
  { name: "Pais", type: "singleLineText" },
  { name: "Region", type: "singleLineText" },
  { name: "Servicio", type: "singleLineText" },
  { name: "Presupuesto", type: "singleLineText" },
  { name: "Mensaje", type: "multilineText" },
  { name: "Empleados", type: "singleLineText" },
  { name: "Puntos de red", type: "singleLineText" },
  { name: "Dispositivos", type: "singleLineText" },
  { name: "Caso de uso", type: "singleLineText" },
  { name: "Acepta privacidad", type: "singleLineText" },
  { name: "Formulario", type: "singleLineText" },
  { name: "URL de origen", type: "url" },
  { name: "Ruta de origen", type: "singleLineText" },
  { name: "UTM source", type: "singleLineText" },
  { name: "UTM medium", type: "singleLineText" },
  { name: "UTM campaign", type: "singleLineText" },
  { name: "UTM content", type: "singleLineText" },
  { name: "UTM term", type: "singleLineText" },
  { name: "Campos completos", type: "multilineText" },
  { name: "User agent", type: "multilineText" },
];

const token = process.env.AIRTABLE_TOKEN;
const baseId = process.env.AIRTABLE_BASE_ID;
const tableName = process.env.AIRTABLE_TABLE_NAME || DEFAULT_TABLE_NAME;
const tableId = process.env.AIRTABLE_TABLE_ID;

if (!token || !baseId) {
  console.error("Missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID.");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

async function airtable(path, init = {}) {
  const response = await fetch(`${AIRTABLE_API_BASE}${path}`, {
    ...init,
    headers: { ...headers, ...(init.headers || {}) },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${body}`);
  }

  return response.json();
}

const schema = await airtable(`/meta/bases/${baseId}/tables`);
let table = schema.tables.find((item) => item.id === tableId || item.name === tableName);

if (!table) {
  table = await airtable(`/meta/bases/${baseId}/tables`, {
    method: "POST",
    body: JSON.stringify({
      name: tableName,
      fields,
    }),
  });
  console.log(`Created Airtable table: ${table.name} (${table.id})`);
  process.exit(0);
}

const existingFields = new Set(table.fields.map((field) => field.name));
const missingFields = fields.filter((field) => !existingFields.has(field.name));

for (const field of missingFields) {
  await airtable(`/meta/bases/${baseId}/tables/${table.id}/fields`, {
    method: "POST",
    body: JSON.stringify(field),
  });
  console.log(`Created field: ${field.name}`);
}

if (missingFields.length === 0) {
  console.log(`Airtable table is already ready: ${table.name} (${table.id})`);
} else {
  console.log(`Airtable table updated: ${table.name} (${table.id})`);
}
