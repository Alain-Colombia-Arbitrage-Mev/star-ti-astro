# Estándar de Página de Marca — Starsolution

Blueprint reusable para toda página de producto/marca del sitio. Derivado del piloto
Bitdefender. Cada página de marca debe cumplir las 10 secciones y las 5 reglas.

## Las 10 secciones obligatorias

1. **Hero** — Logo del fabricante + propuesta de valor en 1 frase con keyword local
   ("[Producto] para empresas en Colombia"). CTA primario (cotizar/demo) + CTA secundario.
   Badge de relación (partner oficial SOLO si aplica; ver Regla 4).
2. **"¿Qué es [producto]?"** — Bloque definicional citable por AI (ver Regla 1). Va
   inmediatamente después del hero o de la franja de reconocimientos.
3. **Línea de producto real del fabricante** — Tiers/módulos con nombres EXACTOS del
   dossier de la marca (ver Regla 5). Tarjetas o lista, una por módulo/edición.
4. **Valor empresarial por resultado de negocio** — No features sueltas: riesgo reducido,
   cumplimiento (Ley 1581 Habeas Data, ISO 27001, sectoriales), continuidad, ahorro/ROI.
5. **Casos de uso por sector** — 3-4 sectores relevantes (banca, salud, gobierno, retail,
   manufactura) con "Reto" + "Cómo lo resolvemos", anclados al contexto regulatorio CO.
6. **Tabla comparativa / "para quién es cada edición"** — Comparativa de tiers o de la
   marca vs. alternativas, con `<caption>` sr-only descriptivo y `<th scope>` correctos.
7. **Por qué Starsolution** — Soporte local en español, despliegue desde Bogotá, cobertura
   CO/VE/Miami, qué incluye el servicio. Métricas de credibilidad.
8. **FAQ** — 4-6 preguntas reales de prospectos. Única fuente de verdad compartida con el
   `faqJsonLd` de `seo.ts` (mismo texto en ambos lados).
9. **CTA de cotización** — Sección final orientada a conversión (demo/cotización/análisis).
10. **SEO técnico** — title/meta/keywords + `Product` JSON-LD + `FAQPage` + `Breadcrumb`
    vía `seo.ts`; enlazado interno a ≥3 páginas relacionadas + ≥1 recurso de blog.

## Regla 1 — GEO (discoverabilidad por agentes AI)

El bloque "¿Qué es [producto]?" debe ser **2-4 frases autónomas**, sin pronombres que
dependan del contexto previo ("esto", "la misma"), que respondan literalmente *qué es* el
producto. Estructura recomendada: (a) qué es y de quién; (b) qué reúne/hace; (c) para qué
lo usan las empresas; (d) cómo lo entrega Starsolution en Colombia. Objetivo: que un LLM
pueda extraer y citar el párrafo como respuesta directa. Debe ir alto en la página y tener
un `<h2 id>` con la pregunta como texto.

## Regla 2 — SEO tradicional

- `title` ≤ 60 chars: keyword + marca + "Starsolution".
- `description` 140-160 chars con keyword local y diferenciador.
- `Product` JSON-LD (helper `product()`), `FAQPage` (helper `faqSchema()`, ≥4 Q),
  `Breadcrumb` (array `breadcrumb` en `seo.ts`).
- Enlazado interno: ≥3 soluciones relacionadas + ≥1 post de blog (sección "Soluciones
  Relacionadas" al pie).
- Headings jerárquicos: un solo `<h1>` (hero), `<h2>` por sección.

## Regla 3 — Valor empresarial / B2B

Cada afirmación de valor debe atarse a un resultado de negocio colombiano: cumplimiento
(Ley 1581, ISO 27001, Circular 007 Superfinanciera, MSPI MinTIC según sector), reducción
de riesgo de ransomware/phishing, continuidad operativa, ahorro vs. costo de incidente o
de montar capacidad in-house. Evitar listas de features sin "y eso para el negocio significa…".

## Regla 4 — Partner status (tratamiento por marca)

- **Partner/reseller oficial** (permitido afirmar "partner oficial"): **Bitdefender,
  Kaspersky, Hornetsecurity**.
- **Lenguaje neutro** (usar "implementamos / desplegamos / integramos / somos su punto de
  contacto local"; NO afirmar "partner oficial"): todas las demás marcas (Proofpoint,
  Netwrix, Stellar Cyber, SealPath, Vicarius, Enthec, Black Duck, SOTI, TeamViewer,
  AnyDesk, Brother, etc.).

## Regla 5 — Precisión técnica (anti-invención)

Todo nombre de edición, tier, módulo, capacidad o reconocimiento debe provenir del dossier
verificado en vivo de esa marca (`docs/superpowers/research/<marca>-dossier.md`). Prohibido
inventar o suponer nombres. Si el dossier marca "drift", corregir el sitio. No afirmar
posiciones de analistas (Gartner Leader/Visionary, etc.) ni certificaciones sin confirmarlas
en la fuente oficial. No atribuir a Starsolution certificaciones que no posea.
