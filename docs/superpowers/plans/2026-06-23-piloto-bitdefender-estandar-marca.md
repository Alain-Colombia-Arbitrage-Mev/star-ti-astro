# Piloto Bitdefender + Estándar de Página de Marca — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Investigar la línea de producto real de Bitdefender en vivo, elevar `bitdefender.astro` al estándar de página de marca (precisión técnica + valor B2B + GEO + SEO), y codificar ese estándar como blueprint reusable para replicar al resto del sitio.

**Architecture:** Contenido en páginas `.astro` (`src/pages/`); SEO/schema centralizado en `src/data/seo.ts` consumido por `BaseLayout.astro`. El piloto añade lo que falta a la página ya pulida de Bitdefender (bloque definicional GEO, casos por sector, verificación de exactitud) y produce dos documentos reutilizables: un dossier de research y el estándar de marca. Sin nuevas dependencias; salida estática.

**Tech Stack:** Astro 6, Tailwind CSS 4, JSON-LD (schema.org), WebFetch/WebSearch para research en vivo.

## Global Constraints

- Sitio base: `https://starsolution.com.co`. Idioma `es` (es-CO).
- SEO centralizado en `src/data/seo.ts`; usar helpers existentes `product()`, `service()`, `faqSchema()`. No duplicar schema en la página salvo el `Service` adicional ya presente.
- Partner status: "partner/reseller oficial" permitido SOLO en Bitdefender, Kaspersky, Hornetsecurity. Resto: lenguaje neutro. (Bitdefender = partner oficial → permitido.)
- Precisión técnica: todo nombre de tier/módulo/capacidad debe coincidir con el dossier verificado en vivo (Task 1). No inventar nombres de producto.
- No introducir dependencias nuevas. No conectar formularios a backend. No migrar imágenes a R2.
- El texto del sitio evita tildes en algunos strings legacy; mantener consistencia con el archivo que se edita (no introducir mojibake). Preferir copy sin caracteres que rompan el build.
- Comando de build/verificación: `npm run build` (preferir wrapper `rtk npm run build` si está disponible, por config global del usuario).

---

### Task 1: Dossier de research en vivo de Bitdefender

**Files:**
- Create: `docs/superpowers/research/bitdefender-dossier.md`

**Interfaces:**
- Produces: documento `bitdefender-dossier.md` con secciones fijas que Task 2/3/4 consumen:
  `## Línea de producto` (nombres exactos de ediciones/tiers vigentes),
  `## Módulos y capacidades`, `## Mensajes y diferenciadores oficiales`,
  `## Reconocimientos vigentes`, `## Términos a corregir en el sitio` (drift detectado).

- [ ] **Step 1: Investigar el sitio oficial en vivo**

Usar WebFetch sobre estas URLs (y WebSearch si alguna redirige), capturando nombres EXACTOS:
- `https://www.bitdefender.com/en-us/business/products/gravityzone-platform`
- `https://www.bitdefender.com/en-us/business/products` (listado de ediciones)
- `https://www.bitdefender.com/en-us/business/enterprise-products/gravityzone-business-security-premium`
- `https://www.bitdefender.com/en-us/business/managed-detection-response` (MDR)

Objetivo: confirmar si las ediciones siguen llamándose "Small Business Security", "Business Security Premium", "GravityZone Business Security Enterprise", y los nombres vigentes de EDR / XDR / MDR / CSPM Plus / Patch Management.

- [ ] **Step 2: Escribir el dossier**

Crear `docs/superpowers/research/bitdefender-dossier.md` con las 5 secciones del bloque Interfaces. En `## Términos a corregir en el sitio`, listar cualquier diferencia entre lo que dice hoy `bitdefender.astro`/`seo.ts` y los nombres oficiales (ej. si la tabla usa "Business Security Premium" pero el sitio oficial ya lo renombró). Cada ítem: `término actual → término oficial vigente → archivo:línea`.

- [ ] **Step 3: Verificar completitud**

Run: `rg -n "## Línea de producto|## Módulos|## Mensajes|## Reconocimientos|## Términos a corregir" docs/superpowers/research/bitdefender-dossier.md`
Expected: las 5 cabeceras presentes. Si `## Términos a corregir` está vacío, escribir explícitamente "Sin drift detectado: nombres del sitio coinciden con el oficial."

- [ ] **Step 4: Commit**

```bash
git add docs/superpowers/research/bitdefender-dossier.md
git commit -m "research: dossier en vivo de Bitdefender GravityZone para piloto"
```

---

### Task 2: Codificar el estándar de página de marca

**Files:**
- Create: `docs/superpowers/standards/brand-page-standard.md`

**Interfaces:**
- Consumes: estructura observada en `src/pages/bitdefender.astro` (la mejor referencia actual).
- Produces: `brand-page-standard.md` — checklist de las 10 secciones + reglas de GEO/SEO/partner, que el plan de réplica (F1-F3) aplicará a cada marca.

- [ ] **Step 1: Escribir el estándar**

Crear `docs/superpowers/standards/brand-page-standard.md` con:

1. Las 10 secciones obligatorias (Hero; "¿Qué es?"; Línea de producto real; Valor empresarial; Casos por sector; Tabla comparativa; Por qué Starsolution; FAQ; CTA; SEO técnico), cada una con 1-2 frases de qué debe contener.
2. Regla GEO: el bloque "¿Qué es [producto]?" debe ser 2-3 frases autónomas, sin pronombres dependientes del contexto, que respondan literalmente "qué es" para que un LLM lo cite. Debe ir cerca del inicio (tras el hero).
3. Regla SEO: title ≤60 chars con keyword + marca + "Starsolution"; meta description 140-160 chars con keyword local; `Product` JSON-LD + `FAQPage` (≥4 Q) + `Breadcrumb` vía `seo.ts`; enlazado interno a ≥3 páginas relacionadas + ≥1 blog.
4. Regla partner: tabla de marcas y su tratamiento (oficial: Bitdefender/Kaspersky/Hornetsecurity; neutro: resto).
5. Regla de precisión: nombres de producto SIEMPRE desde dossier de la marca.

- [ ] **Step 2: Verificar**

Run: `rg -c "^[0-9]\.|^### |Regla" docs/superpowers/standards/brand-page-standard.md`
Expected: salida > 0 (documento tiene estructura numerada + reglas).

- [ ] **Step 3: Commit**

```bash
git add docs/superpowers/standards/brand-page-standard.md
git commit -m "docs: estandar reusable de pagina de marca (blueprint)"
```

---

### Task 3: Aplicar correcciones de precisión + bloque GEO + casos por sector en `bitdefender.astro`

**Files:**
- Modify: `src/pages/bitdefender.astro`

**Interfaces:**
- Consumes: `bitdefender-dossier.md` (Task 1) para nombres de producto; `brand-page-standard.md` (Task 2) para reglas.

- [ ] **Step 1: Aplicar correcciones de drift del dossier**

Por cada ítem en `## Términos a corregir` del dossier, editar la cadena correspondiente en `bitdefender.astro` (ej. nombres en `PRODUCT_MODULES`, encabezados de la tabla de planes en líneas ~395-405). Si el dossier dijo "Sin drift detectado", omitir este step.

- [ ] **Step 2: Añadir bloque definicional GEO "¿Qué es Bitdefender GravityZone?"**

Insertar esta sección inmediatamente después del cierre de la franja de premios (después de `</section>` de "Awards / Recognition strip", antes de `<!-- GravityZone Platform -->`):

```astro
    <!-- ¿Qué es? · Bloque definicional para AI/GEO -->
    <section class="bg-white pt-14 sm:pt-16" aria-labelledby="que-es-gravityzone">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="que-es-gravityzone" class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          ¿Que es Bitdefender GravityZone?
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Bitdefender GravityZone es la plataforma unificada de ciberseguridad empresarial de Bitdefender. Reune en un solo agente y una consola en la nube la proteccion de endpoints con inteligencia artificial, EDR, XDR, gestion de parches y seguridad de cargas de trabajo en la nube. Las empresas la usan para prevenir, detectar e investigar ataques —ransomware, phishing avanzado y amenazas dirigidas— desde laptops y servidores hasta entornos AWS y Azure. En Colombia, Starsolution la implementa como partner oficial de Bitdefender, con soporte local en espanol y politicas alineadas con la Ley 1581 de Habeas Data e ISO 27001.
        </p>
      </div>
    </section>
```

(Ajustar el primer sustantivo/lista de capacidades si el dossier reportó nombres distintos.)

- [ ] **Step 3: Añadir sección de casos de uso por sector**

Insertar antes de la sección `<!-- Plans -->` (antes de `<section id="planes"`). Primero, en el frontmatter (después del array `FAQS`, antes de `const CHECK_PATH`), añadir:

```astro
const SECTOR_CASES = [
  { sector: 'Banca y servicios financieros', need: 'Cumplir Circular 007 de la Superfinanciera y SOX, y frenar fraude por ransomware.', how: 'EDR + Device Control para bloquear exfiltracion por USB y reporteria lista para auditoria.' },
  { sector: 'Salud y EPS', need: 'Proteger historias clinicas bajo Habeas Data Ley 1581 y mantener disponibilidad 24/7.', how: 'Anti-ransomware con remediacion automatica y cifrado de disco en estaciones clinicas.' },
  { sector: 'Gobierno y sector publico', need: 'Alinear con el MSPI de MinTIC y resistir ataques dirigidos a entidades.', how: 'XDR con correlacion de red e identidad y MDR + SOC 24x7 para turnos que la entidad no cubre.' },
  { sector: 'Manufactura y retail', need: 'Proteger sedes distribuidas y puntos de venta sin equipo de TI en cada ciudad.', how: 'Consola cloud sin VPN: mismas politicas en Bogota, Medellin y Cali desde un solo panel.' },
];
```

Luego la sección:

```astro
    <!-- Casos de uso por sector -->
    <section class="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">GravityZone por sector en Colombia</h2>
        <p class="text-gray-600 max-w-2xl mb-12">Como aplicamos la plataforma a los retos de cumplimiento y operacion mas comunes en cada industria.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTOR_CASES.map((c) => (
            <article class="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">{c.sector}</h3>
              <p class="text-sm text-gray-600 mb-3"><span class="font-semibold text-gray-800">Reto:</span> {c.need}</p>
              <p class="text-sm text-gray-600"><span class="font-semibold text-gray-800">Como lo resolvemos:</span> {c.how}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
```

- [ ] **Step 3.1: Verificar exactitud de las afirmaciones regulatorias**

Confirmar (WebSearch rápido) que "Circular 007 Superfinanciera", "MSPI MinTIC" y "Ley 1581" son referencias correctas y vigentes para Colombia. Corregir cualquier nombre antes de continuar. No afirmar certificaciones que Starsolution no posea.

- [ ] **Step 4: Verificar que el build pasa**

Run: `npm run build`
Expected: build OK, sin errores de sintaxis Astro; `dist/bitdefender/index.html` generado.

- [ ] **Step 5: Verificar presencia de las nuevas secciones en el HTML renderizado**

Run: `rg -c "Que es Bitdefender GravityZone|GravityZone por sector" dist/bitdefender/index.html`
Expected: 2

- [ ] **Step 6: Commit**

```bash
git add src/pages/bitdefender.astro
git commit -m "content(bitdefender): bloque definicional GEO + casos por sector + precision de linea de producto"
```

---

### Task 4: Actualizar `seo.ts` y `llms.txt` para Bitdefender

**Files:**
- Modify: `src/data/seo.ts:115-137` (entrada `bitdefender`)
- Modify: `public/llms.txt` (si existe; si no, crear nota en el dossier y omitir)

**Interfaces:**
- Consumes: `bitdefender-dossier.md` (Task 1).

- [ ] **Step 1: Alinear descripción y Product schema con el dossier**

En `src/data/seo.ts`, entrada `bitdefender`: si el dossier reportó nombres de edición distintos a los del `product(...)` (líneas ~124-129), actualizarlos. Verificar que `description` (línea 117) sigue ≤160 chars y refleja la línea vigente. Confirmar que el `faqJsonLd` (líneas 130-136) coincide textualmente con el array `FAQS` de la página (deben ser la misma fuente de verdad).

- [ ] **Step 2: Verificar longitud de meta description**

Run: `node -e "const s=require('fs').readFileSync('src/data/seo.ts','utf8');const m=s.match(/bitdefender:\s*{[\s\S]*?description: '([^']+)'/);console.log(m[1].length)"`
Expected: número entre 140 y 160.

- [ ] **Step 3: Actualizar `llms.txt` si aplica**

Run: `ls public/llms.txt public/llms-full.txt 2>/dev/null`
Si existen, abrir y asegurar que la entrada de Bitdefender menciona "GravityZone (EDR, XDR, MDR, CSPM Plus, Patch Management)" y "partner oficial en Colombia". Editar si está desactualizado. Si no existen, anotarlo en el dossier como pendiente para el plan de réplica y omitir.

- [ ] **Step 4: Verificar build**

Run: `npm run build`
Expected: build OK; `rg -c "GravityZone" dist/bitdefender/index.html` > 0.

- [ ] **Step 5: Commit**

```bash
git add src/data/seo.ts public/llms.txt
git commit -m "seo(bitdefender): alinear Product schema/meta/llms con linea de producto verificada"
```

---

### Task 5: Verificación final + puerta de validación del piloto

**Files:** (ninguno — verificación)

- [ ] **Step 1: Build limpio completo**

Run: `npm run build`
Expected: 0 errores.

- [ ] **Step 2: Checklist del estándar contra la página**

Verificar manualmente que `bitdefender.astro` cumple las 10 secciones del estándar (Task 2). Confirmar con grep las 3 piezas nuevas/clave:

Run: `rg -c "Que es Bitdefender GravityZone|GravityZone por sector|application/ld\\+json" dist/bitdefender/index.html`
Expected: bloque "Que es" = 1, "por sector" = 1, scripts ld+json ≥ 3 (Product + FAQPage + Breadcrumb + Service).

- [ ] **Step 3: Validar JSON-LD**

Abrir `dist/bitdefender/index.html`, extraer los bloques `application/ld+json` y confirmar que parsean como JSON válido y que existe uno con `"@type":"FAQPage"` y otro con `"@type":"Product"`.

Run: `rg -o '"@type":"[A-Za-z]+"' dist/bitdefender/index.html | sort -u`
Expected: incluye `"@type":"Product"`, `"@type":"FAQPage"`, `"@type":"BreadcrumbList"`, `"@type":"Service"`.

- [ ] **Step 4: Puerta de validación del usuario**

Presentar al usuario: el dossier, el estándar, y la página Bitdefender resultante (resumen de cambios). Pedir aprobación del estándar ANTES de escribir el plan de réplica F1-F3. Si el usuario pide ajustes, modificar el estándar (Task 2) y re-aplicar a Bitdefender, luego repetir esta puerta.

---

## Self-Review

**Spec coverage:**
- Precisión técnica → Task 1 (dossier) + Task 3 Step 1 + Task 4 Step 1. ✓
- Valor empresarial B2B → Task 3 Step 3 (casos por sector). ✓
- GEO/AI → Task 3 Step 2 (bloque "¿Qué es?") + Task 4 Step 3 (llms.txt) + Task 5 Step 3 (JSON-LD). ✓
- SEO tradicional → Task 4 Step 1-2 (meta/Product) + estándar de enlazado interno (Task 2). ✓
- Estándar reusable → Task 2. ✓
- Partner status mixto → Global Constraints + Task 2 Step 1 regla 4 (Bitdefender = oficial, aplicado en el bloque GEO). ✓
- Gate de validación antes de replicar → Task 5 Step 4. ✓

**Placeholders:** El copy del bloque GEO y de los casos por sector está completo y concreto. Las referencias al dossier son a un artefacto definido en Task 1, no placeholders. ✓

**Type consistency:** `SECTOR_CASES` (campos `sector`/`need`/`how`) se define en Task 3 Step 3 y se consume en la misma sección. `FAQS`/`faqJsonLd` se mantienen como única fuente de verdad (Task 4 Step 1). ✓

## Fuera de alcance (este plan)
Réplica a las otras ~13 marcas, servicios, home y regionales (F1-F3): se planifican en un plan aparte DESPUÉS de aprobar el estándar en la puerta de validación (Task 5 Step 4).
