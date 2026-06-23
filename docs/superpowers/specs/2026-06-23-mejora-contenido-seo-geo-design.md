# Diseño: Mejora de contenido, SEO y discoverabilidad AI (GEO) en todo el sitio

**Fecha:** 2026-06-23
**Proyecto:** starsolution-astro (Astro 6, Tailwind 4, salida estática, Cloudflare Pages)
**Sitio:** https://starsolution.com.co

## Objetivo

Elevar el contenido empresarial, el SEO tradicional y la discoverabilidad por agentes
AI (GEO) de todas las páginas del sitio, partiendo de la línea de producto real de cada
fabricante (investigada en vivo en sus sitios oficiales). Cuatro prioridades, todas
relevantes, con la **precisión técnica** como cimiento:

1. **Precisión técnica del producto** — nombres exactos de tiers/módulos/capacidades del fabricante.
2. **Valor empresarial / persuasión B2B** — resultados de negocio: riesgo, cumplimiento Ley 1581 (Habeas Data) / ISO 27001, continuidad, ROI, casos por sector.
3. **Discoverabilidad por agentes AI (GEO)** — contenido definicional citable, FAQs, tablas comparativas, schema enriquecido.
4. **SEO tradicional** — titles/metas/keywords long-tail locales, headings, enlazado interno, datos estructurados.

## Enfoque elegido (B): Blueprint primero, luego réplica

1. Definir un **estándar de página de marca** (blueprint reusable).
2. Aplicarlo a **una página piloto: Bitdefender**, y validarla con el usuario.
3. Replicar el patrón a las ~14 páginas de marca.
4. Extender a servicios, home y páginas regionales.

La investigación de marca en vivo se paraleliza (subagentes); la redacción la mantiene
el agente principal para conservar una voz consistente.

## Estándar de página de marca (10 secciones)

Cada página de marca debe contener, en este orden:

1. **Hero** — propuesta de valor + keyword local (ej. "[Producto] para empresas en Colombia").
2. **"¿Qué es [producto]?"** — bloque definicional citable por AI, 2-3 frases directas y autónomas.
3. **Línea de producto real del fabricante** — tiers/módulos con nombres exactos verificados en vivo.
4. **Valor empresarial por resultado de negocio** — riesgo, cumplimiento Ley 1581 / ISO 27001, continuidad.
5. **Casos de uso por sector** — financiero, salud, gobierno, retail (según aplique a la marca).
6. **Tabla comparativa / "para quién es cada edición"**.
7. **Por qué Starsolution** — soporte local en español, despliegue desde Bogotá, cobertura CO/VE/Miami.
8. **FAQ** — 4-6 preguntas que alimentan el `FAQPage` schema.
9. **CTA de cotización**.
10. **SEO técnico** — title/meta/keywords + JSON-LD `Product` + `FAQPage` + `Breadcrumb` + enlazado interno.

## Relación con fabricantes (partner status)

Política **mixta**:
- Por defecto, lenguaje neutro y siempre verdadero: "implementamos", "desplegamos", "integramos".
- Se usa "partner/reseller oficial" **solo** en las marcas que el usuario confirme expresamente.
- Marcas con partnership oficial confirmado: **Bitdefender, Kaspersky, Hornetsecurity**.
- El resto de marcas: lenguaje neutro ("implementamos / desplegamos / integramos").

## Fases

- **F0 — Estándar + piloto (Bitdefender):** investigar bitdefender.com en vivo, aplicar el blueprint,
  actualizar `src/pages/bitdefender.astro` y su entrada en `src/data/seo.ts`. Validar con el usuario.
- **F1 — Investigación de marca:** dossiers en vivo de cada fabricante (línea de producto, features,
  mensajes clave). Paralelizable.
- **F2 — Páginas de marca (~14):** Bitdefender, Kaspersky, Proofpoint, Netwrix, Hornetsecurity,
  Stellar Cyber, SealPath, Vicarius, Enthec, Black Duck, SOTI, TeamViewer, AnyDesk, Brother.
- **F3 — Servicios + home + regionales:** hacking ético, ISO 27001, DLP, cableado, antivirus-empresas,
  equipos-cómputo, home, venezuela/*, miami/*; enlazado interno y schema coherentes.

## Arquitectura / convenciones a respetar

- SEO centralizado en `src/data/seo.ts` (interfaz `SEOData`, helpers `product()`, `service()`, `faqSchema()`).
- Páginas `.astro` en `src/pages/`; imágenes WebP SEO-nombradas en `public/assets/`.
- Mantener el patrón de 3 pilares (Star Protection / Inspection / Compliance).
- No introducir dependencias nuevas; salida estática.

## Criterios de éxito

- Cada página de marca cumple las 10 secciones del estándar.
- Nombres de línea de producto verificados contra el sitio oficial (sin tiers obsoletos).
- Cada página: title/meta únicos, JSON-LD válido (Product + FAQPage + Breadcrumb), ≥4 FAQs.
- Build de Astro pasa sin errores; sin afirmaciones de "partner" no confirmadas.

## Fuera de alcance (YAGNI)

- Conectar formularios a backend real.
- Migración de imágenes a Cloudflare R2.
- Nuevos posts de blog (más allá del enlazado interno existente).
- Rediseño visual estructural más allá de lo que exija el contenido nuevo.
