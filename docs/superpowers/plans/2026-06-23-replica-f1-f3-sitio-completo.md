# Réplica F1-F3 — Contenido/SEO/GEO en todo el sitio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replicar el estándar de página de marca (validado en el piloto Bitdefender) al resto del sitio: ~13 marcas restantes, páginas de servicio, home y páginas regionales, con research en vivo por marca para precisión técnica.

**Architecture:** Mismo patrón del piloto. Por marca: dossier en vivo → aplicar las 10 secciones del estándar a la página `.astro` → alinear `seo.ts` + `llms-full.txt`. Servicios/home/regionales: bloque GEO definicional + valor B2B + casos + FAQ + enlazado, sin "línea de fabricante" (usan `service()` schema). Sin dependencias nuevas; salida estática.

**Tech Stack:** Astro 6, Tailwind 4, JSON-LD, WebFetch/WebSearch.

## Global Constraints

- Estándar de referencia: `docs/superpowers/standards/brand-page-standard.md` (10 secciones + 5 reglas). Es el spec de cada página de marca.
- Partner status (Regla 4): "partner oficial" SOLO en Kaspersky y Hornetsecurity (Bitdefender ya hecho). TODAS las demás marcas: lenguaje neutro ("implementamos/desplegamos/integramos/punto de contacto local"). NUNCA afirmar partner oficial fuera de esas tres.
- Precisión (Regla 5): todo nombre de tier/módulo/reconocimiento sale del dossier verificado de esa marca. Prohibido inventar. No afirmar posiciones de analistas ni certificaciones sin fuente oficial. No atribuir a Starsolution certificaciones que no posea.
- GEO (Regla 1): cada página lleva un `<h2 id>` "¿Qué es [X]?" con 2-4 frases autónomas citables, alto en la página.
- SEO (Regla 2): `title` ≤60, `description` 140-160 chars, JSON-LD Product/Service + FAQPage (≥4 Q) + Breadcrumb vía `seo.ts`; ≥3 enlaces internos + ≥1 blog.
- FAQ: el array de la página y `faqJsonLd` de `seo.ts` son la MISMA fuente de verdad (texto idéntico).
- Base URL `https://starsolution.com.co`; idioma es-CO; evitar caracteres que rompan el build.
- Verificación: `npm run build` debe pasar (39 páginas) tras cada página.

---

## Phase F1 — Dossiers de research en vivo (subagentes, en lotes paralelos)

Un dossier por marca, idéntico formato al piloto, en `docs/superpowers/research/<key>-dossier.md` con las 5 secciones: `## Línea de producto`, `## Módulos y capacidades`, `## Mensajes y diferenciadores oficiales`, `## Reconocimientos vigentes`, `## Términos a corregir en el sitio`.

### Procedimiento por dossier (subagente general-purpose, model sonnet)

- [ ] **Step 1:** Investigar el sitio oficial de la marca (WebFetch; WebSearch si redirige), capturando nombres EXACTOS de ediciones/tiers/módulos vigentes y reconocimientos con año.
- [ ] **Step 2:** Leer la página actual (`src/pages/<key>.astro`) y la entrada `seo.ts` de esa key; comparar y listar drift en `## Términos a corregir` (`actual → oficial → archivo:línea`), o "Sin drift detectado".
- [ ] **Step 3:** Escribir el dossier con las 5 cabeceras + URLs fuente por hallazgo. Si un nombre no se confirma en la fuente oficial, decirlo en vez de adivinar.
- [ ] **Step 4 (controlador):** commit `research: dossier en vivo de <marca>`.

### Marcas y sitios oficiales (orden de prioridad)

| # | key (`seo.ts` / `src/pages/<key>.astro`) | Marca | Partner | Sitio oficial a investigar |
|---|---|---|---|---|
| A1 | kaspersky | Kaspersky | **oficial** | kaspersky.com/small-to-medium-business-security (Kaspersky Next: EDR Foundations/Optimum/Expert, MXDR) |
| A2 | hornet-security | Hornetsecurity | **oficial** | hornetsecurity.com (365 Total Protection tiers, VM Backup, Security Awareness, 365 Permission Manager) |
| B1 | proofpoint | Proofpoint | neutro | proofpoint.com (Threat Protection, Prime Threat Protection, Email Security, Targeted Attack Protection) |
| B2 | netwrix | Netwrix | neutro | netwrix.com (Auditor, Access Analyzer/Enterprise Auditor, Privilege Secure, Endpoint Protector/DLP) |
| B3 | stellar-cyber | Stellar Cyber | neutro | stellarcyber.ai (Open XDR platform, Multi-Layer AI, SecOps platform) |
| B4 | sealpath | SealPath | neutro | sealpath.com (IRM/DRM, Data Protection, tiers) |
| B5 | vicarius | Vicarius | neutro | vicarius.io (vRx, vulnerability remediation, patchless protection) |
| B6 | enthec | Enthec | neutro | enthec.com (Kartos external attack surface, Qondar) |
| B7 | black-duck | Black Duck | neutro | blackduck.com (Polaris, SCA, Coverity SAST, Seeker IAST) — nota: ahora Black Duck Software, ex-Synopsys |
| B8 | soti-mdm | SOTI | neutro | soti.net (SOTI MobiControl, SOTI ONE Platform, XSight) |
| C1 | rthreat-bogota-colombia | RThreat | neutro | rthreat.net (Breach & Attack Simulation, BAS) |
| C2 | teamviewer | TeamViewer | neutro | teamviewer.com (Remote, Tensor, DEX, productos empresariales) |
| C3 | anydesk | AnyDesk | neutro | anydesk.com (Solo/Standard/Advanced, AnyDesk para empresas) |
| C4 | brother | Brother | neutro | brother (gama empresarial impresión/escáner gestionado; producto atípico, no ciberseguridad) |

---

## Phase F2 — Aplicar el estándar a cada página de marca

Para cada marca, en orden de prioridad (A1, A2, B1…C4), ejecutar el MISMO procedimiento usando su dossier (F1).

### Procedimiento por marca

**Files:** Modify `src/pages/<key>.astro`; Modify `src/data/seo.ts` (entrada `<key>`); Modify `public/llms-full.txt` (bloque de la marca).

- [ ] **Step 1 — Corregir drift:** aplicar cada ítem de `## Términos a corregir` del dossier a la página y a `seo.ts` (nombres de tier/módulo/reconocimiento). Verificar que NO queden términos viejos: `rg -c "<termino viejo>" dist/<key>/index.html` = 0 tras build.
- [ ] **Step 2 — Bloque GEO "¿Qué es?":** insertar tras el hero (o franja de premios) una `<section aria-labelledby="que-es-<key>">` con `<h2 id="que-es-<key>">¿Que es <Producto>?</h2>` y un párrafo de 2-4 frases autónomas (qué es y de quién / qué hace / para qué lo usan las empresas / cómo lo entrega Starsolution en Colombia). Para marcas neutras, cerrar con "Starsolution lo implementa/integra en Colombia con soporte local en espanol" (sin "partner oficial").
- [ ] **Step 3 — Casos por sector:** añadir array `SECTOR_CASES` (campos `sector`/`need`/`how`) en el frontmatter + sección de tarjetas (banca/salud/gobierno/retail u otros sectores que apliquen a la marca), anclados a Ley 1581 / ISO 27001 / marco sectorial CO.
- [ ] **Step 4 — Línea de producto + valor B2B:** asegurar que la página presenta los tiers/módulos reales (dossier) y que cada bloque de valor ata a un resultado de negocio (Regla 3). Si la página ya los tiene (verificar contra el estándar), solo corregir naming.
- [ ] **Step 5 — FAQ + schema:** garantizar ≥4 FAQs reales; sincronizar el array de la página con `faqJsonLd` en `seo.ts` (texto idéntico). Verificar `title` ≤60 y `description` 140-160 (medir con node).
- [ ] **Step 6 — Enlazado + llms:** confirmar ≥3 enlaces internos + ≥1 blog al pie; actualizar el bloque de la marca en `public/llms-full.txt` con naming verificado.
- [ ] **Step 7 — Build + verificación:** `npm run build`; comprobar en `dist/<key>/index.html`: bloque "Que es" presente (1), tipos JSON-LD incluyen Product/Service + FAQPage + BreadcrumbList, sin términos viejos.
- [ ] **Step 8 — Commit:** `content(<key>): estandar de marca (GEO + sector + precision + seo)`.

---

## Phase F3 — Servicios, comparativa, home y regionales

Páginas sin "línea de fabricante". Aplicar: bloque GEO "¿Qué es [servicio]?", valor B2B, casos/uso, FAQ (≥4, sincronizada con `seo.ts`), enlazado interno, y `Service` schema. Sin partner status.

### Páginas y enfoque

| key | Tipo | Enfoque específico |
|---|---|---|
| antivirus-empresas | Comparativa (hub) | Tabla Bitdefender vs Kaspersky vs Hornetsecurity con naming verificado de los 3 dossiers; bloque GEO "¿Cómo elegir antivirus empresarial?"; enlaza a las 3 páginas. Página estratégica de enlazado. |
| hacking-etico | Servicio | GEO "¿Qué es el hacking ético / pentesting?"; metodología (OWASP, OSSTMM), entregables, casos por sector. |
| iso27001 | Servicio | GEO "¿Qué es ISO 27001?"; fases de implementación, relación con Ley 1581; FAQ de certificación. |
| dlp-prevencion-perdida-datos | Servicio | GEO "¿Qué es DLP?"; casos de fuga de datos, relación Habeas Data; vincular SealPath/Netwrix. |
| cableado-estructurado | Servicio infra | GEO "¿Qué es cableado estructurado?"; normas (TIA/EIA-568), categorías; casos. |
| equipos-computo | Servicio/venta | GEO definicional; valor B2B (garantía, soporte local); enlazar a seguridad. |
| home (`index.astro`) | Home | Reforzar bloque definicional de Starsolution citable por AI; verificar enlazado a las páginas mejoradas; FAQ general si aplica. |
| venezuela, miami | Regional | Adaptar el estándar al contexto local (idioma/regulación); GEO definicional regional; enlazado. |

### Procedimiento por página de servicio

- [ ] **Step 1:** Leer la página y su `seo.ts`. Para `antivirus-empresas`, además leer los 3 dossiers (bitdefender/kaspersky/hornet-security) y verificar naming en la comparativa.
- [ ] **Step 2:** Insertar bloque GEO "¿Qué es…?" (h2 con id) autónomo y citable.
- [ ] **Step 3:** Reforzar valor B2B + casos/uso + FAQ (≥4, sincronizada con `seo.ts`).
- [ ] **Step 4:** Verificar `title`/`description` (longitudes), `Service` JSON-LD + FAQPage + Breadcrumb, ≥3 enlaces internos + ≥1 blog.
- [ ] **Step 5:** `npm run build`; verificar bloque GEO y JSON-LD en `dist/<key>/index.html`.
- [ ] **Step 6:** Commit `content(<key>): GEO + valor B2B + seo`.

---

## Ejecución recomendada (lotes)
1. F1 dossiers en lotes paralelos de 3-4 subagentes (A1-A2, luego B1-B4, B5-B8, C1-C4).
2. F2 por marca en orden de prioridad, con build + commit por marca (checkpoint).
3. F3 al final; `antivirus-empresas` primero (depende de los 3 dossiers de antivirus).
4. Al terminar todo: revisión whole-branch (superpowers:requesting-code-review) y finishing-a-development-branch.

## Self-Review
- Cobertura del estándar: cada marca pasa por las 10 secciones (F2 Steps 2-6); servicios cubren GEO+B2B+FAQ+schema (F3). ✓
- Partner status: Global Constraints + F2 Step 2 (solo Kaspersky/Hornetsecurity oficiales). ✓
- Precisión: F1 dossiers + F2 Step 1 drift + Regla 5. ✓
- GEO: F2 Step 2 / F3 Step 2 (bloque citable) + llms-full.txt. ✓
- SEO: F2 Step 5 / F3 Step 4 (longitudes, schema, enlazado). ✓
- No placeholders: el procedimiento es concreto e idéntico por página; el contenido específico proviene de cada dossier (artefacto definido en F1), no de un placeholder. ✓
- Orden/decisiones: tabla de prioridad explícita; `antivirus-empresas` después de sus 3 dossiers. ✓
