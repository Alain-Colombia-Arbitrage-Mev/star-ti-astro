# Proofpoint — Dossier de Producto Verificado
**Fecha de investigación:** 2026-06-23
**Fuentes primarias:** proofpoint.com (páginas de producto en vivo), BusinessWire, Forrester, Gartner Peer Insights
**Metodología:** WebFetch directo a proofpoint.com + WebSearch adversarial multi-fuente

---

## Línea de producto

Proofpoint organiza su portafolio actual (2025-2026) en tres grandes líneas, con una plataforma de IA transversal:

### Plataforma tecnológica central

| Nombre oficial | Descripción |
|---|---|
| **Proofpoint Nexus®** | Plataforma de inteligencia de amenazas con IA. Nombre completo: "Proofpoint Nexus® AI Threat Intelligence Platform". Conjunto de modelos de IA: Language Model (LM), Relationship Graph (RG), Threat Intelligence (TI), Computer Vision (CV), Machine Learning (ML). Procesa 2.3T emails/año. Fuente: https://www.proofpoint.com/us/platform/nexus |
| **Proofpoint Zen** | Puntos de control integrados (mensajería) |
| **Proofpoint Satori** | Operaciones de seguridad agénticas (agentic security operations) |

### 1. Collaboration Security (protección de personas y comunicaciones)

| Nombre oficial | Notas |
|---|---|
| **Collaboration Security Prime** | Nombre oficial del tier premium unificado. También aparece como "Prime Threat Protection" en materiales comerciales (Commercial Prime Threat Protection para SMB). Incluye: Multichannel Defense, Multistage Attack Protection, Human Risk Guidance, Impersonation Protection. Lanzado abril 2025. Fuente: https://www.proofpoint.com/us/products/collaboration-security-prime |
| **Core Email Protection** | Producto de email security base (reemplaza el nombre "Email Security" y absorbe las capacidades de TAP en la presentación de la plataforma). Bloquea 99.999% de amenazas. Fuente: https://www.proofpoint.com/us/products/email-protection |
| **Email Fraud Defense** | Nombre oficial vigente. DMARC, SPF, DKIM, protección de dominio, lookalike domain monitoring, Supplier Risk Explorer. Fuente: https://www.proofpoint.com/us/products/email-protection/email-fraud-defense |
| **Targeted Attack Protection (TAP)** | Sigue existiendo como producto nombrado vigente (datasheet activo, versión 1.3.0 junio 2026 en Cortex Marketplace). Incluye URL Defense, Attachment Defense, TAP Dashboard. La página de producto /advanced-threat-protection/targeted-attack-protection redirige a Core Email Protection, pero TAP se vende/licencia por separado. Fuente: https://www.proofpoint.com/us/resources/data-sheets/targeted-attack-protection |
| **Threat Response Auto-Pull (TRAP)** | Nombre oficial vigente. Cuarentena post-entrega, seguimiento de forwarding, integración con Nexus Threat Graph. Fuente: https://www.proofpoint.com/uk/products/email-protection/threat-response-auto-pull |
| **Account Takeover Protection (ATO)** | Protección contra compromiso de cuentas |
| **Messaging Protection** | Protección de canales de mensajería (Teams, Slack, etc.) |
| **Secure Email Relay** | Email relay seguro |
| **ZenGuide** | Nombre oficial del producto de Security Awareness Training. La página de producto usa la URL `/products/mitigate-human-risk` y el nombre de producto es "Proofpoint ZenGuide". También se denomina "Proofpoint Security Awareness" en materiales de packaging. Paquetes: Standard y Enterprise. Fuente: https://www.proofpoint.com/us/products/mitigate-human-risk |

### 2. Data Security and Governance

| Nombre oficial | Notas |
|---|---|
| **Enterprise DLP** | DLP empresarial completo |
| **Adaptive Email DLP** | DLP específico para email con capacidades adaptativas |
| **Insider Threat Management (ITM)** | Nombre oficial vigente. Solución SaaS centrada en personas para detectar amenazas internas. No renombrado en 2025. Fuente: https://www.proofpoint.com/us/products/insider-threat-management |
| **Data Security Posture Management (DSPM)** | Gestión de postura de seguridad de datos |
| **Digital Communications Governance (DCG)** | Incluye: Capture, Archive, Automate, Discover, Supervision, Track, Patrol |
| **Email DLP & Encryption** | DLP e cifrado para email |

### 3. AI Security (nueva línea 2025-2026)

| Nombre oficial | Notas |
|---|---|
| **Secure AI Usage by People** | Seguridad para uso de IA por personas |
| **Secure AI Usage by Agents** | Seguridad para agentes de IA |
| **Secure MCP Across Your Enterprise** | Seguridad de Model Context Protocol |

### Otras soluciones

| Nombre oficial | Notas |
|---|---|
| **Proofpoint 365 Total Protection** | Plataforma MSP para Microsoft 365. Lanzada en Norte América mayo 2026. Incluye Hornetsecurity. Fuente: https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-launches-dedicated-msp-business-unit-and-introduces-365-total |
| **Emerging Threats Intelligence (ET Intelligence)** | Inteligencia de amenazas emergentes |
| **Identity Threat Defense** | Defensa de identidad |
| **CASB (Cloud App Security Broker)** | Seguridad de apps cloud |
| **Proofpoint Essentials** | Oferta MSP para SMB |

**Nota sobre "Proofpoint Prime Threat Protection":** Este nombre aparece en materiales de venta y en el anuncio de abril 2025. Es la denominación comercial/marketing del tier. El nombre de producto en la plataforma es **"Collaboration Security Prime"**. Para SMB existe "Commercial Prime Threat Protection". Ambos son nombres oficiales vigentes según contexto (enterprise vs. commercial). Fuente: https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-unveils-industrys-first-and-only-unified-solution-reduce-costs

---

## Módulos y capacidades

### Proofpoint Nexus® — Componentes de IA oficiales
- **Language Model (LM):** analiza lenguaje transaccional e intención
- **Relationship Graph (RG):** detecta desviaciones de comportamiento en comunicaciones
- **Threat Intelligence (TI):** identifica tácticas de atacantes en tiempo real
- **Computer Vision (CV):** detecta amenazas visuales (emails falsificados, QR codes maliciosos)
- **Machine Learning (ML):** mapea patrones de ataque conocidos y detecta anomalías
- Escala: 2.3 billones de emails/año, 100+ grupos de actores de amenaza rastreados
- Fuente: https://www.proofpoint.com/us/platform/nexus

### Targeted Attack Protection (TAP) — Capacidades oficiales
- **URL Defense:** reescritura de URLs y verificación en tiempo real
- **Attachment Defense:** sandboxing de adjuntos
- **TAP Dashboard:** visibilidad de amenazas y usuarios atacados (VAPs — Very Attacked People™)
- **Supplier Threat Protection (STP):** protección contra cuentas de proveedores comprometidas
- Fuente: https://www.proofpoint.com/us/resources/data-sheets/targeted-attack-protection

### Threat Response Auto-Pull (TRAP) — Capacidades oficiales
- Cuarentena post-entrega de emails maliciosos
- Seguimiento de correos reenviados y listas de distribución
- Integración con Nexus Threat Graph
- Browser isolation para investigación segura de URLs
- Pista de auditoría de actividades
- Fuente: https://www.proofpoint.com/uk/products/email-protection/threat-response-auto-pull

### Email Fraud Defense — Capacidades oficiales
- Hosted DMARC/DKIM/SPF management
- Domain monitoring: 650+ millones de dominios en WHOIS
- Lookalike domain detection
- Supplier Risk Explorer
- Virtual Takedown Service
- Fuente: https://www.proofpoint.com/us/products/email-protection/email-fraud-defense

### ZenGuide (Security Awareness) — Capacidades oficiales
- Simulaciones de phishing automatizadas
- Entrenamiento adaptativo basado en riesgo (AI-powered)
- Vinculado a datos de "Very Attacked People™"
- Reporte por usuario y departamento
- Fuente: https://www.proofpoint.com/us/products/mitigate-human-risk

### Insider Threat Management (ITM) — Capacidades oficiales (2025)
- Monitoreo de comportamiento en endpoints, email y cloud
- Index Document Matching (IDM) para protección de archivos no estructurados (IP, código fuente)
- Cloud DLP: remoción automática de permisos de sharing en M365 (OneDrive, SharePoint, Teams) y Google Workspace
- Controles de prevención: USB, web upload, cloud sync, print blocking
- Fuente: https://www.proofpoint.com/us/products/insider-threat-management

### Collaboration Security Prime — Capacidades del tier premium
- Multichannel Defense: email + Teams + Slack + SharePoint + OneDrive + redes sociales + apps cloud
- Multistage Attack Protection: account takeover, lateral movement, supply chain
- Human Risk Guidance: educación personalizada basada en comportamiento real
- Impersonation Protection: autenticación de email + brand protection + takedown
- Account Takeover Protection, SSO Password Guard, ThreatFlip, Threat Interaction Map
- Fuente: https://www.proofpoint.com/us/products/collaboration-security-prime

---

## Mensajes y diferenciadores oficiales

1. **"People-centric security"** — enfoque centrado en personas, no en buzones. Concepto vigente y central. Los usuarios más atacados se denominan "Very Attacked People™" (VAPs). Fuente: proofpoint.com/us/products/email-protection

2. **"Industry's first and only comprehensive human-centric cybersecurity solution"** — tagline de lanzamiento de Collaboration Security Prime / Prime Threat Protection (abril 2025). Fuente: https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-unveils-industrys-first-and-only-unified-solution-reduce-costs

3. **Consolidación:** "replaces approximately 45+ disconnected tools." Ahorro promedio reportado: $2.7M en reducción de riesgo + $390K en costos operativos. Fuente: press release abril 2025.

4. **"Blocks 99.99% of email attacks"** (se usa tanto 99.99% como 99.999% en diferentes páginas de producto). Fuente: página de Gartner MQ 2025 en proofpoint.com

5. **"Highest in Execution"** en Gartner MQ 2025. Fuente: https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-named-leader-2025-gartner-magic-quadrant-email-security

6. **"2.8 million customers' data"** como base de entrenamiento de Nexus. Fuente: Core Email Protection page.

7. **"90% of breaches involve the human element"** — estadística de posicionamiento del enfoque people-centric. Fuente: press release Prime.

8. **Integración con Microsoft 365 vía Microsoft Graph API** ("rapid deployment, achievable in just days"). Soporte para Google Workspace. Fuente: Core Email Protection page.

9. **"A great choice for firms seeking complete, continually evolving coverage of email, messaging, and collaboration security as well as awareness training from one provider"** — Forrester, Q2 2025. Fuente: https://www.proofpoint.com/us/blog/corporate-news/proofpoint-leader-forrester-wave-email-messaging-collaboration-security

---

## Reconocimientos vigentes

| Reconocimiento | Detalles exactos | Año | Fuente |
|---|---|---|---|
| **Gartner Magic Quadrant for Email Security** | **Leader** — segundo año consecutivo. Posición: más alto en Ability to Execute. 14 vendors evaluados. Nota: el reporte 2024 se llamaba "for Email Security Platforms"; el 2025 se llama "for Email Security" (sin "Platforms"). | 2025 (publicado diciembre 2025) | https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-named-leader-2025-gartner-magic-quadrant-email-security |
| **Gartner Critical Capabilities for Email Security Platforms** | **#1 en 4 de 5 casos de uso**: Core email protection (3.57), Outbound protection (3.74), Security platform integration (3.98), Power user capabilities (3.97). El 5to caso de uso no fue top-ranked. | 2025 | https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-ranked-1-four-out-five-use-cases-2025-gartnerr-critical |
| **Forrester Wave™: Email, Messaging, And Collaboration Security Solutions** | **Leader**. Evaluación con 27 criterios, 10 vendors. Máximas puntuaciones en: malicious message detection, account compromise detection, anti-malware/sandboxing, URL detection. Descripción del reporte: "great choice for firms seeking complete... coverage of email, messaging, and collaboration security as well as awareness training from one provider." | Q2 2025 | https://www.proofpoint.com/us/blog/corporate-news/proofpoint-leader-forrester-wave-email-messaging-collaboration-security |
| **Gartner Magic Quadrant for Digital Communications Governance** | **Leader** (2025) | 2025 | https://www.proofpoint.com/us/blog/email-and-cloud-threats/proofpoint-named-leader-2025-gartnerr-magic-quadranttm-digital |
| **Gartner Peer Insights** | 4.6/5 estrellas (1,507 reseñas al 30 nov. 2025) | 2025 | https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-named-leader-2025-gartner-magic-quadrant-email-security |
| **Total reconocimientos analistas 2025** | 14 posiciones de Leader en evaluaciones de analistas durante 2025 | 2025 | https://www.proofpoint.com/us/blog/corporate-news/built-whats-next-proofpoints-2025-results-and-opportunity-ahead-0 |

**No confirmado / no encontrado:** Posición específica de Proofpoint en Forrester Wave de email security anteriores a Q2 2025 (Q2 2023 sí fue Leader, pero el informe se llamaba "Enterprise Email Security"). No se encontró mención de IDC MarketScape o SE Labs 2025 en las fuentes consultadas.

---

## Términos a corregir en el sitio

### Correcciones de naming de producto

1. **"Security Awareness Training"** (nombre genérico) → **"ZenGuide"** (nombre oficial del producto) o **"Proofpoint Security Awareness"** (nombre de familia)
   - `src/pages/proofpoint.astro:161` (card "Security Awareness Training")
   - `src/pages/proofpoint.astro:261` (lista de capacidades "Security Awareness Training")
   - `src/pages/proofpoint.astro:399` (anatomía del ataque)
   - `src/pages/proofpoint.astro:463` (tabla comparativa)
   - `src/pages/proofpoint.astro:544` (FAQ)
   - `src/data/seo.ts:193` (faqJsonLd entry)
   - **Nota:** El nombre genérico "Security Awareness Training" es aceptable como descripción; usar "ZenGuide" o "Proofpoint Security Awareness" cuando se mencione el nombre del producto.

2. **"Cloud App Security Broker"** (en lista de capacidades) → **"CASB (Cloud App Security Broker)"** — CASB sigue siendo el nombre correcto, pero el sitio lo lista como "Cloud App Security Broker" sin el acrónimo CASB que es el nombre de producto oficial.
   - `src/pages/proofpoint.astro:251` (lista de capacidades de la plataforma)

3. **Falta "Collaboration Security Prime"** / **"Prime Threat Protection"** — El sitio no menciona la nueva familia Prime lanzada en abril 2025, que es el producto estrella de Proofpoint actualmente.
   - Drift: ausencia en `src/pages/proofpoint.astro` — sin línea específica, no existe la mención.

4. **Falta "ZenGuide"** como nombre oficial del producto de awareness.
   - Drift: ausencia en `src/pages/proofpoint.astro` y `src/data/seo.ts:182` (keywords no incluye ZenGuide).

### Correcciones de reconocimientos

5. **"Gartner / Lider en Email Security"** (sin año ni nombre exacto del reporte) → **"Gartner Magic Quadrant for Email Security 2025, Leader — más alto en Ability to Execute"**
   - `src/pages/proofpoint.astro:70–71` (sección Awards/Trust: texto "Lider en Email Security" sin año)
   - `src/pages/proofpoint.astro:438` (tabla comparativa: "Lider Gartner" sin año ni nombre exacto)
   - `src/data/seo.ts:181` (description: "lider Gartner en seguridad email" sin año)
   - **Corrección:** El reporte 2025 se llama "Gartner Magic Quadrant for Email Security" (NO "for Email Security Platforms" — ese era el nombre del 2024).

6. **Falta Forrester Wave Q2 2025** como reconocimiento — el sitio solo menciona Gartner.
   - Drift: ausencia en `src/pages/proofpoint.astro:65–86` (sección Awards) — sin línea específica.

### Estadísticas a verificar / actualizar

7. **"2.8B+ emails analizados diariamente"** → La fuente oficial Nexus dice **"2.3T emails yearly"** (billones al año = ~6.3B/día). La cifra de 2.8B/día aparece en la página de Core Email Protection como "2.8 million customers' data". Hay inconsistencia entre el dato del sitio y las fuentes actuales.
   - `src/pages/proofpoint.astro:207` ("2.8B+ Emails analizados diariamente")
   - **No se puede confirmar el dato exacto 2.8B/día** con las fuentes actuales; Nexus cita "2.3T emails yearly" como métrica oficial.

8. **"26M+ Ataques BEC bloqueados al año"** — No confirmado en fuentes actuales de proofpoint.com consultadas. No se debe atribuir sin fuente.
   - `src/pages/proofpoint.astro:211–212`

9. **"+8,000 Empresas protegidas"** → Fuente 2025 dice **"2.7+ million organizations worldwide"** y "2.8 million customers".
   - `src/pages/proofpoint.astro:78–79` — la cifra de 8,000 está significativamente desactualizada o es incorrecta.

### Sin drift detectado (correcto)

- **"Targeted Attack Protection (TAP)"** — nombre oficial vigente. Correcto en `proofpoint.astro:228`.
- **"Email Fraud Defense"** — nombre oficial vigente. Correcto en `proofpoint.astro:239`.
- **"Very Attacked People (VAPs)"** — concepto oficial vigente. Correcto en `proofpoint.astro:197,293`.
- **Integraciones Microsoft 365 / Google Workspace** — confirmadas activas. Correcto en `proofpoint.astro:504–511`.
- **"People-Centric Security"** — diferenciador oficial vigente. Correcto en `proofpoint.astro:195`.
- **DMARC/DKIM/SPF** — parte de Email Fraud Defense, vigente. Correcto en `proofpoint.astro:148,303`.
- **"Threat Response Auto-Pull (TRAP)"** — nombre oficial vigente. No aparece mencionado en el sitio (solo se menciona CASB y DLP en el paso 5 de la anatomía del ataque), pero no hay error de naming donde se menciona.
