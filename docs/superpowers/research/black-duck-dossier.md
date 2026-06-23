# Black Duck — Dossier técnico verificado en vivo

**Fecha de verificación:** 2026-06-23
**Fuente primaria:** blackduck.com (en vivo)
**Estado empresa:** Black Duck Software, Inc. — empresa independiente desde octubre 2024 (escindida de Synopsys Software Integrity Group).

---

## Línea de producto

Black Duck ofrece una suite integrada de Application Security Testing (AppSec) bajo la marca **Black Duck Software, Inc.**. Los productos vigentes, con sus nombres oficiales exactos, son:

| Nombre oficial exacto | Capacidad | Categoría |
|---|---|---|
| **Black Duck® SCA** | Software Composition Analysis | Open source security + license compliance |
| **Coverity®** | Static Analysis (SAST) | SAST |
| **Continuous Dynamic™** | Dynamic Application Security Testing | DAST |
| **Seeker®** | Interactive Application Security Testing | IAST |
| **Defensics®** | Protocol Fuzzing | Fuzzing |
| **Black Duck Polaris™ Platform** | Plataforma SaaS integrada (SAST + SCA + DAST) | ASPM / plataforma unificada |
| **Software Risk Manager™** | Application Security Posture Management | ASPM |
| **Code Sight™** | IDE Plug-in para desarrolladores | Herramienta de desarrollo |
| **Black Duck Assist™** | Asistente de seguridad con IA | IA / automatización |
| **Black Duck Signal™** | Agentic AI AppSec para desarrollo asistido por IA | IA / automatización |

**Nota sobre WhiteHat:** Black Duck adquirió WhiteHat Security (2022). La solución DAST ya opera bajo la marca **Continuous Dynamic™**; la marca WhiteHat no aparece en el portfolio oficial 2025-2026 como nombre de producto independiente. El blog `blackduck.com/blog/whitehat.html` documenta la integración.

**Nota sobre SBOM / Supply Chain:** No existe un producto independiente llamado "Black Duck Supply Chain" — estas capacidades (SBOM, VEX, gestión de cadena de suministro de software) están integradas dentro de **Black Duck® SCA** y **Black Duck Polaris™ Platform**.

**Fuentes:**
- https://www.blackduck.com/ (homepage, recuperado 2026-06-23)
- https://www.blackduck.com/solutions/application-security-testing.html
- https://www.blackduck.com/company/legal/product-package-overview.html
- https://www.blackduck.com/dast/continuous-dynamic.html
- https://www.blackduck.com/blog/whitehat.html

---

## Módulos y capacidades

### Black Duck® SCA
- Inventario completo de componentes open source y sus licencias
- Detección de CVEs en dependencias (KnowledgeBase™: base de datos de vulnerabilidades propietaria)
- Gestión de riesgos de licenciamiento (GPL, LGPL, Apache, MIT, etc.)
- Generación y gestión de SBOM (formatos SPDX, CycloneDX)
- Exportación VEX (CSAF 2.0) — verificado en MQ Supply Chain 2026
- Detección de paquetes maliciosos en la cadena de suministro

### Coverity® (SAST)
- Análisis estático de código fuente en fases tempranas del SDLC
- Soporte para 20+ lenguajes (Java, C/C++, C#, Python, JavaScript/TypeScript, Go, Ruby, PHP, Kotlin, Swift, Scala)
- Integración con IDEs, CI/CD y repositorios

### Continuous Dynamic™ (DAST)
- Escaneo continuo y automático de aplicaciones en ejecución
- Near-zero false positives mediante validación con IA/ML y revisión manual
- Production-safe: payloads de bajo impacto, sin downtime
- Autenticación sin almacenamiento de credenciales (integración HashiCorp Vault)
- Escalado a miles de sitios concurrentes

### Seeker® (IAST)
- Análisis interactivo de seguridad en tiempo de ejecución
- Visibilidad del posture de seguridad de aplicaciones web
- Cobertura de flujos de datos en ejecución

### Defensics® (Fuzzing)
- Fuzzing de protocolos (black box)
- Orientado a sistemas embebidos, dispositivos médicos, automoción, aeronáutica

### Black Duck Polaris™ Platform
- Plataforma SaaS unificada: SAST + SCA + DAST + ASPM
- Optimizada para equipos DevSecOps
- Integración nativa con CI/CD (Jenkins, GitHub Actions, GitLab CI, Azure DevOps, CircleCI)
- Feedback en IDEs (Code Sight™) y pull requests

### Software Risk Manager™ (ASPM)
- Gestión centralizada del posture de seguridad de aplicaciones a escala empresarial
- Agregación y priorización de hallazgos de todas las herramientas

**Capacidades transversales verificadas:** SCA, SAST, DAST, IAST, fuzzing, SBOM, VEX, license compliance, supply chain security, ASPM, DevSecOps/shift-left, IA agentic (Signal™, Assist™).

**Fuentes:**
- https://www.blackduck.com/solutions/application-security-testing.html
- https://www.blackduck.com/dast/continuous-dynamic.html
- https://www.blackduck.com/company/legal/product-package-overview.html
- https://www.prnewswire.com/news-releases/black-duck-named-a-leader-in-the-inaugural-2026-gartner-magic-quadrant-for-software-supply-chain-security-302806514.html

---

## Mensajes y diferenciadores oficiales

Los mensajes oficiales verificados en blackduck.com (2025-2026) son:

1. **Posicionamiento principal:** *"Integrate AppSec to match the speed, scale, and ambition of AI-powered development"*
2. **Plataforma:** *"One Platform. Complete Application Security."*
3. **Inteligencia:** *"20+ years of human-verified intelligence"* — diferenciador frente a competidores con bases de datos automatizadas sin curación humana.
4. **IA agentica:** Black Duck Signal™ presentado como solución que *"eliminates noise and AI hallucinations"* en el contexto de desarrollo asistido por IA.
5. **Escala real:** 4,000+ clientes empresariales en industrias de seguridad crítica (automoción, dispositivos médicos, aeronáutica, finanzas, gobierno).
6. **Developer-first:** Feedback de seguridad directamente en el IDE o pull request, sin friccionar el pipeline del desarrollador.
7. **Supply chain:** Foco explícito en SBOM, VEX y cumplimiento normativo (EU Cyber Resilience Act).

**Mensaje que NO aparece en el sitio oficial y que el sitio local usa incorrectamente:**
- "suite de seguridad de aplicaciones más completa del mercado" — el sitio local lo atribuye sin citar fuente oficial; Black Duck usa *"One Platform. Complete Application Security."*

**Fuentes:**
- https://www.blackduck.com/
- https://www.blackduck.com/solutions/application-security-testing.html
- https://www.blackduck.com/blog/black-duck-leader-2025-gartner-magic-quadrant-application-security-testing.html

---

## Reconocimientos vigentes

| Reconocimiento | Año | Posición / Detalle | Fuente verificada |
|---|---|---|---|
| Gartner® Magic Quadrant™ for Application Security Testing | **2025** (publicado 6 oct 2025) | **Leader — 8.ª vez consecutiva**; más alto en "Ability to Execute" por 6.º año consecutivo | https://news.blackduck.com/2025-10-14-Black-Duck-Named-a-Leader-in-the-2025-Gartner-R-Magic-Quadrant-TM-for-Application-Security-Testing-for-Eighth-Consecutive-Time |
| Gartner® Magic Quadrant™ for Software Supply Chain Security (inaugural) | **2026** (publicado jun 2026) | **Leader** — primer MQ de esta categoría, 18 vendors evaluados | https://www.prnewswire.com/news-releases/black-duck-named-a-leader-in-the-inaugural-2026-gartner-magic-quadrant-for-software-supply-chain-security-302806514.html |
| Forrester Wave™: Software Composition Analysis | No confirmado año exacto | Incluido en el Wave (posición exacta no verificada en páginas accesibles) | https://www.blackduck.com/solutions/application-security-testing.html (referencia indirecta) |

**Lo que NO pudo confirmarse:** Posición exacta en Forrester Wave SCA (Leader/Strong Performer) — las páginas de Forrester son de pago y blackduck.com solo menciona inclusión en el Wave sin detallar posición en páginas públicas.

**Nota sobre histórico:** El MQ de AST 2023 fue la 7.ª vez (como Synopsys). El MQ de AST 2025 es la 8.ª vez (ya como Black Duck Software, Inc.). No hay MQ de AST 2024 con nombre Black Duck — la empresa se renombró en octubre 2024 y el MQ 2024 no está documentado públicamente con el nuevo nombre en las búsquedas disponibles; el conteo de 8 consecutivos incluye años como Synopsys.

---

## Términos a corregir en el sitio

### 1. Nombre de empresa — descripción histórica imprecisa
**actual →** "Black Duck (antes Synopsys Software Integrity)" — `black-duck.astro:73`
**oficial →** "Black Duck Software, Inc. (anteriormente Synopsys Software Integrity Group, escindido en octubre 2024)"
**archivo:línea →** `src/pages/black-duck.astro:73`

### 2. Ausencia del nombre de plataforma SaaS
**actual →** El sitio no menciona nunca "Polaris™ Platform" como nombre oficial — solo se habla genéricamente de "una sola plataforma integrada"
**oficial →** **Black Duck Polaris™ Platform** es el nombre oficial de la plataforma SaaS unificada
**archivo:línea →** `src/pages/black-duck.astro:74` (y sección de capacidades, líneas 141-238)

### 3. SAST — nombre de producto omitido
**actual →** "Análisis Estático (SAST)" genérico — `black-duck.astro:161`
**oficial →** El producto SAST se llama **Coverity®** (nombre registrado con trademark)
**archivo:línea →** `src/pages/black-duck.astro:161-166`

### 4. DAST — nombre de producto incorrecto / ausente
**actual →** "Análisis Dinámico (DAST)" genérico — `black-duck.astro:176`
**oficial →** El producto DAST se llama **Continuous Dynamic™** (WhiteHat ya no es el nombre de producto vigente)
**archivo:línea →** `src/pages/black-duck.astro:176-181`

### 5. IAST — producto no mencionado en absoluto
**actual →** IAST no aparece como producto en el sitio; solo se menciona en el hero del SEO title
**oficial →** **Seeker®** es el producto IAST vigente; es parte del portfolio y debería listarse
**archivo:línea →** `src/pages/black-duck.astro:153-236` (sección de capacidades sin Seeker)

### 6. Fuzzing — producto no mencionado
**actual →** Fuzzing no se menciona en el sitio
**oficial →** **Defensics®** es el producto de protocol fuzzing vigente
**archivo:línea →** `src/pages/black-duck.astro:153-236` (ausencia total)

### 7. ASPM / Software Risk Manager — no mencionado
**actual →** No hay mención de ASPM ni de Software Risk Manager™
**oficial →** **Software Risk Manager™** es el producto ASPM vigente; es diferenciador clave de Black Duck
**archivo:línea →** `src/pages/black-duck.astro:153-236` (ausencia total)

### 8. Reconocimiento Gartner — año desactualizado / no citado
**actual →** El sitio no cita ningún reconocimiento Gartner o Forrester
**oficial →** Gartner MQ AST 2025: Leader por 8.ª vez consecutiva; más alto en Ability to Execute (6.º año). Gartner MQ Supply Chain Security 2026: Leader (inaugural)
**archivo:línea →** `src/pages/black-duck.astro` (ausencia total de reconocimientos)

### 9. SEO title — nombre de producto incompleto
**actual →** `'Black Duck AppSec SAST/DAST/SCA | Starsolution'` — `seo.ts:352`
**oficial →** Falta IAST (Seeker), fuzzing (Defensics) y el nombre Polaris Platform; al menos incluir "Coverity" para SAST
**archivo:línea →** `src/data/seo.ts:352`

### 10. jsonLd — nombre incompleto del producto
**actual →** `'Black Duck Software Composition Analysis'` — `seo.ts:360`
**oficial →** El producto principal es la suite completa; el nombre correcto sería `'Black Duck — Application Security Testing Platform'` o al menos referenciar la Polaris Platform
**archivo:línea →** `src/data/seo.ts:360`

### 11. Black Duck Signal™ — agentic AI no mencionado (oportunidad, no error crítico)
**actual →** No hay mención de IA agentica ni de Black Duck Signal™
**oficial →** **Black Duck Signal™** es el diferenciador de IA más reciente y forma parte del mensaje oficial de 2025-2026 sobre "AI-powered development"
**archivo:línea →** `src/pages/black-duck.astro:30-34` (hero sin mención de IA)
