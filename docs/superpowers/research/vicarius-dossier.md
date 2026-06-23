# Vicarius — Dossier Verificado EN VIVO
**Fecha de investigación:** 2026-06-23  
**Fuentes primarias:** vicarius.io (homepage, /solution/vulnerability-management, /solution/vulnerability-remediation, /solutions/vintelligence-continuous-exposure-assessment-and-validation, /features/scripting, /articles/vicarius-recognized-in-gartners-2025-exposure-assessment-platform-magic-quadrant-proof-of-our-remediation-first-vision), globenewswire.com, G2, Gartner Peer Insights  
**Metodología:** WebFetch directo + WebSearch verificado. Solo se afirma lo confirmado en fuentes primarias.

---

## Línea de producto

**Plataforma principal: vRx**  
Nombre oficial completo: **vRx by Vicarius**  
Subtítulo posicionado por la empresa: *"Full Cycle Vulnerability Management"*  
Categoría de mercado autodeclarada: **Advanced Vulnerability Remediation**  
Categoría analistas (Gartner 2025): **Exposure Assessment Platforms (EAP)**

**Módulos/productos con nombre propio dentro del ecosistema vRx:**

| Nombre oficial | Tipo | Descripción breve |
|---|---|---|
| **vRx** | Plataforma core | Discovery, priorización y remediación unificadas |
| **vRx Scripting Engine** | Módulo dentro de vRx | Motor de scripts de remediación (PowerShell, Bash, Batch); biblioteca pública + scripts propios |
| **vuln_GPT** | IA dentro de Scripting Engine | Copiloto IA que genera scripts de remediación; una de las tres fuentes de scripts junto con vsociety e investigación interna |
| **Patchless Protection** | Módulo dentro de vRx | Mitigación a nivel de memoria mediante Dynamic Binary Instrumentation (DBI) sin parche oficial ni reinicio |
| **vIntelligence** | Módulo/capa de inteligencia dentro de vRx | Continuous Exposure Assessment & Validation; incluye Agentic AI Red Team |
| **vAnalyzer** | Módulo BI dentro de vRx | Business intelligence nativo de vRx para reportes y seguimiento de remediación |
| **vsociety** | Comunidad de investigación | Plataforma de vulnerability research donde se publican scripts CVE y detecciones comunitarias |

**Fuente:** https://www.vicarius.io/ · https://www.vicarius.io/solution/vulnerability-management · https://www.vicarius.io/features/scripting · https://www.vicarius.io/solutions/vintelligence-continuous-exposure-assessment-and-validation

**Nota:** No se encontró evidencia de un producto llamado **xTPMP** ni **Nucleus** en ninguna página oficial de vicarius.io. El término "xTags" aparece en contexto de metadatos de riesgo interno, no como producto. No confirmado = no incluido.

---

## Módulos y capacidades

### vRx Core — Capacidades exactas (naming oficial)

- **Real-Time Asset Visibility** — inventario continuo de activos Windows, macOS, Linux
- **Contextual Risk Assessment** — scoring de riesgo con contexto de negocio e impacto
- **AI-Driven Scoring** — priorización por IA con datos de explotabilidad real
- **Business Impact Analysis** — evaluación de impacto por activo/área de negocio
- **Patchless Protection** — mitigación en memoria vía DBI cuando no es posible parchear inmediatamente (sin reinicio, sin interrupción de servicio); nombre técnico interno también referenciado como "x_protect" en la comunidad vsociety
- **vRx Scripting Engine** — scripts de remediación multiOS; ejecuta PowerShell, Bash y Batch; biblioteca pública + generación IA (vuln_GPT)
- **Automated Patch Deployment** — parcheo nativo automatizado para más de 2,000 aplicaciones y sistemas operativos
- **Compliance Engine** — visibilidad de misconfigurations, reportes de cumplimiento normativo, evidencia auditable
- **Automated Reports & Insights** — informes automáticos de SLA y reducción de superficie

### vIntelligence — Capacidades exactas

- **Agentic AI Red Team** — agentes IA que validan autónomamente si una vulnerabilidad es explotable en el entorno real, sin riesgo en producción
- **Continuous Exposure Assessment** — monitoreo de la superficie de ataque sin depender de ciclos de escaneo
- **Universal Intelligence Normalization** — consolida datos de todos los vendors en una vista unificada
- **Threat Intelligence Enrichment** — enriquecimiento con EPSS, CISA KEV, MITRE ATT&CK
- **Automated Remediation Loop** — ejecuta corrección, re-valida y documenta el cierre
- **Risk Prioritization Engine** — elimina ~95% de ruido mediante scoring contextual dinámico

**Fuente:** https://www.vicarius.io/solutions/vintelligence-continuous-exposure-assessment-and-validation · https://www.vicarius.io/articles/from-alert-overload-to-closed-loop-security-introducing-vintelligence

### Público objetivo confirmado

Equipos de IT y Seguridad que gestionan vulnerabilidades. Sectores cubiertos: Manufacturing, Finance, Government, Healthcare, Education, Small Business. También MSPs.

---

## Mensajes y diferenciadores oficiales

**Tagline principal:**  
> *"Remediate more vulnerabilities"*

**Posicionamiento central:**  
> *"Full Cycle Vulnerability Management — Find vulnerabilities, prioritize them, and remediate in real-time in a single platform."*

**Diferenciador clave vs. competencia (Gartner/messaging oficial):**  
> *"While others focus on visibility, dashboards, and prioritization, Vicarius focuses on eliminating risk."*  
> *"Customers don't need another visibility layer. They need fewer open exposures."*

**Tres rutas de remediación (diferenciador estructural):**
1. Automated native patching (patch deployment)
2. AI-generated scripting via vuln_GPT (Scripting Engine)
3. Patchless Protection (mitigación en memoria por DBI)

**Métricas propias publicadas (verificadas en homepage):**
- 80% reducción en tiempo dedicado a parcheo manual
- 22 días de MTTR (Mean Time To Remediate) promedio
- $20K+ en ahorro por consolidación de herramientas
- Ahorro de hasta 60% de workload en el ciclo de vida de vulnerabilidades

**Fuente:** https://www.vicarius.io/ · https://www.vicarius.io/articles/vicarius-recognized-in-gartners-2025-exposure-assessment-platform-magic-quadrant-proof-of-our-remediation-first-vision

---

## Reconocimientos vigentes

| Reconocimiento | Entidad | Año | Detalle exacto |
|---|---|---|---|
| **Niche Player** | Gartner Magic Quadrant for Exposure Assessment Platforms | 2025 (nov) | Primera aparición en MQ EAP; categoría "Niche Player" confirmada |
| **IDC MarketScape: Worldwide Exposure Assessment Platforms** | IDC | 2025 (oct) | Reconocido como vendor en el MarketScape EAP 2025; posición exacta en cuadrante no divulgada públicamente en el press release |
| Mención en **"Emerging Tech: The Future of Exposure Management is Preemptive"** | Gartner | Julio 2025 | Mención en Emerging Tech report |
| Mención en **"Emerging Tech Impact Radar: Global Attack Surface Grid"** | Gartner | Septiembre 2025 | Mención en Impact Radar |
| **G2 Leader / Highest ROI** | G2 | 2025–2026 | Badge "Highest ROI" y categoría Leader (Spring); rating 4.8/5 en Capterra 2024; 4.7/5 en Gartner Peer Insights |
| **PeerSpot Tech Leader Award** | PeerSpot | No especificado año | Confirmado en homepage pero sin año explícito |
| **Capterra Shortlist** | Capterra | 2024 | Rating 4.8/5 |
| **Serie B $30M** | BusinessWire | Enero 2024 | Ronda para impulsar innovación IA en vulnerability remediation |

**Corrección importante:** El homepage de vicarius.io menciona *"Gartner 2025 Magic Quadrant for EAP"* pero NO en la categoría "EAP for Endpoint Management" — es el reporte **Exposure Assessment Platforms**, no "Endpoint Management". El término interno del sitio usa "EAP" como abreviatura de Exposure Assessment Platforms.

**Fuentes:** https://www.globenewswire.com/news-release/2025/11/11/3185665/0/en/Vicarius-Named-a-Niche-Player-in-the-2025-Gartner-Magic-Quadrant-for-Exposure-Assessment-Platforms.html · https://www.globenewswire.com/news-release/2025/10/01/3159851/0/en/Vicarius-Recognized-in-IDC-MarketScape-for-Exposure-Assessment-Platforms-2025-and-Mentioned-in-two-Gartner-Reports.html · https://www.vicarius.io/articles/vicarius-recognized-in-idc-marketscape-2025-a-testament-to-the-future-of-exposure-management

---

## Términos a corregir en el sitio

### Archivo: `src/pages/vicarius.astro`

**1. Métrica de remediación incorrecta**
- Actual: `"Reducción promedio del 85% en tiempo de remediacion de CVEs críticos"` (línea 47)
- Oficial: Vicarius publica **80% de reducción en tiempo de parcheo manual** y **MTTR de 22 días** — el 85% aparece varias veces en el contenido del sitio pero no proviene de ninguna fuente oficial verificable de vicarius.io; el dato oficial es 80%
- Archivo:línea: `src/pages/vicarius.astro:47`

**2. Estadística "102 días" no verificada en fuente oficial Vicarius**
- Actual: `"102 dias — Promedio para aplicar un parche critico"` (línea 88)
- Oficial: Vicarius publica **205 días** como el tiempo promedio discovery-to-remediation en su página de producto (`/solution/vulnerability-management`); los 22 días de MTTR son el diferenciador de la plataforma. Los 102 días pueden ser de una fuente de terceros no citada.
- Archivo:línea: `src/pages/vicarius.astro:88`

**3. Métrica en integrations section inconsistente con homepage oficial**
- Actual: `"85% — Reducción en tiempo de remediación"` (línea 271–272)
- Oficial: Dato verificado en homepage es **80%**
- Archivo:línea: `src/pages/vicarius.astro:271`

**4. Ausencia de vIntelligence y vAnalyzer como módulos nombrados**
- Actual: El sitio describe capacidades genéricas sin mencionar los nombres de módulo **vIntelligence** y **vAnalyzer**
- Oficial: Son módulos con nombre propio y página dedicada en vicarius.io (vIntelligence = Continuous Exposure Assessment & Validation; vAnalyzer = BI reporting tool)
- Archivo:línea: `src/pages/vicarius.astro` — sección "Capacidades de Vicarius vRx" (~líneas 99–193); no es un error de nombre pero sí una omisión de nomenclatura oficial

**5. Nombre del motor de scripting impreciso**
- Actual: `"Scripts de Remediación"` con descripción de "biblioteca de scripts pre-construidos" (línea 159)
- Oficial: Nombre exacto = **"vRx Scripting Engine"**; el AI copilot integrado se llama **vuln_GPT**; la comunidad de scripts es **vsociety**
- Archivo:línea: `src/pages/vicarius.astro:159`

**6. Patchless Protection — nombre correcto, descripción técnica a precisar**
- Actual: `"protege la vulnerabilidad en memoria"` (línea 147)
- Oficial: El mecanismo técnico es **Dynamic Binary Instrumentation (DBI)** — el nombre del módulo "Patchless Protection" es correcto, pero la descripción podría mencionar que opera vía DBI para mayor precisión técnica
- Archivo:línea: `src/pages/vicarius.astro:147`

**7. Reconocimiento Gartner — categoría exacta**
- Actual: `src/data/seo.ts` no menciona Gartner explícitamente, pero el seo entry vicarius (~línea 219) usa lenguaje genérico sin mencionar "Exposure Assessment Platforms"
- Oficial: El reconocimiento Gartner 2025 es en **Magic Quadrant for Exposure Assessment Platforms** (no "EAP for Endpoint Management"), posición **Niche Player**
- Archivo:línea: `src/data/seo.ts:219–233` (keywords y description no incluyen EAP/reconocimiento)

### Archivo: `src/data/seo.ts` (entrada `vicarius`, líneas 218–234)

**8. Keywords desactualizadas / términos de mercado ausentes**
- Actual: `keywords: 'Vicarius vRx, gestion vulnerabilidades, patch management, CVE priorizacion, virtual patching Colombia'` (línea 221)
- Oficial: Categoría de mercado usada por Gartner e IDC 2025 = **"Exposure Assessment Platforms"** (EAP); lenguaje de exposición = **"exposure management"**, **"continuous exposure assessment"**; estos términos GEO/SEO están ausentes
- Archivo:línea: `src/data/seo.ts:221`

**9. Rating en jsonLd no verificado vs. fuente oficial**
- Actual: `rating: { value: '4.6', count: '38' }` (línea 227)
- Oficial: G2 reporta reviews vigentes (~4.8 en Capterra, 4.7 en Gartner Peer Insights); el 4.6 de G2 no fue confirmado directamente en revisión de la página G2 en esta sesión — no se puede desmentir pero tampoco confirmar
- Archivo:línea: `src/data/seo.ts:227`

---

*Sin drift detectado en: nombre de plataforma (vRx correcto), nombre "Patchless Protection" (correcto), soporte de OS Windows/Linux/macOS (correcto), posicionamiento como reemplazo de Nessus/Qualys/Rapid7 (correcto y consistente con mensajes oficiales), audiencia IT+Security (correcta).*
