# TeamViewer — Dossier verificado en vivo
**Fecha de investigación:** 2026-06-23
**Fuentes:** teamviewer.com (WebFetch directo) + WebSearch
**Status:** VERIFICADO CON DRIFT DETECTADO

---

## Línea de producto

TeamViewer mantiene cuatro productos independientes más una plataforma unificadora a junio 2026:

| Nombre oficial | Posicionamiento | URL fuente |
|---|---|---|
| **TeamViewer Remote** | "Secure remote access and support, powered by AI" — producto para individuos y equipos, reemplaza al "TeamViewer Classic" | https://www.teamviewer.com/en/products/remote/ |
| **TeamViewer Tensor** | "Enterprise remote connectivity" — plataforma cloud para grandes organizaciones, acceso remoto + OT + mobile + POS | https://www.teamviewer.com/en/products/tensor/ |
| **TeamViewer DEX** | "Digital Employee Experience" — monitoreo, detección proactiva y remediación automatizada de problemas en endpoints | https://www.teamviewer.com/en/products/dex/ |
| **TeamViewer Frontline** | "Connected worker" con AR industrial — vision picking, ensamble, inspección, asistencia remota y formación | https://www.teamviewer.com/en/products/frontline/ |
| **TeamViewer ONE** | "The digital workplace platform for IT teams" — plataforma unificadora que integra Remote, Tensor, DEX, endpoint management y MDM bajo un único paraguas. Tagline: *"Fix it before they feel it"* | https://www.teamviewer.com/en/platform/one/ |

### Planes de TeamViewer Remote (nombres exactos verificados)

Fuente: https://www.teamviewer.com/en-us/legal/product-descriptions/teamviewer-remote/

| Nombre exacto del plan | Sesiones concurrentes | Usuarios | Dispositivos gestionados |
|---|---|---|---|
| Free | 1 | Personal | 3 |
| **TeamViewer Remote Access** | 1 | — | Según contrato |
| **TeamViewer Business** | 1 (1 sesión, 1 puesto) | 0–1 | 200 |
| **TeamViewer Premium** | 1 (varios puestos) | Hasta 15 | 300 |
| **TeamViewer Corporate** | 3 (ampliable a 10) | Hasta 30 | 500 |
| **TeamViewer Tensor** | Personalizable | Enterprise | Ilimitado |

Los nombres Remote Access / Business / Premium / Corporate siguen vigentes en 2025-2026 para TeamViewer Remote. No hubo renombramiento de los tiers.

### TeamViewer DEX — Tier conocido

- **DEX Essentials** — mencionado explícitamente en la página de precios como nivel de entrada.
Fuente: https://www.teamviewer.com/en/products/dex/pricing/

---

## Módulos y capacidades

### TeamViewer Remote
- Acceso remoto desatendido (unattended access) multiplataforma: Windows, macOS, Linux, Android, iOS
- Transferencia de archivos, grabación de sesiones, Wake-on-LAN
- Cifrado RSA-4096 + AES-256 end-to-end; MFA
- Gestión masiva de dispositivos (hasta 500 en Corporate; escala en Tensor)
- Modelo de pago de créditos de IA para funciones AI (TeamViewer AI)
Fuente: https://www.teamviewer.com/en/products/remote/

### TeamViewer Tensor
- Acceso remoto + soporte a IT tradicional, móvil, POS y OT (Operational Technology)
- Conditional access / Zero Trust con SSO y Windows LAPS
- Agentless access para ciertos endpoints
- Integraciones ITSM: ServiceNow, Microsoft Intune, Salesforce, Slack, Microsoft Teams
- Soporte 24/7 premium; escala a cientos de miles de dispositivos
- TeamViewer AI para automatización de tareas de soporte
Fuente: https://www.teamviewer.com/en/products/tensor/ y https://www.teamviewer.com/en-us/legal/product-descriptions/teamviewer-tensor/

### TeamViewer DEX
- Monitoreo always-on de experiencia digital del empleado
- Remediación automatizada sin intervención manual
- Detección proactiva de problemas antes de que impacten al usuario
- ROI declarado: 287% con payback < 6 meses (dato oficial de la web)
- Integrado en TeamViewer ONE
Fuente: https://www.teamviewer.com/en/products/dex/

### TeamViewer Frontline
- Realidad aumentada (AR) industrial para trabajadores de campo
- Módulos: vision picking, ensamble/producción, inspección/mantenimiento, asistencia remota de expertos, formación/onboarding
- Compatible con smartphones, tablets y smart glasses (manos libres)
- Integración con ERP, WMS, PLM
- Despliegue cloud u on-premises
Fuente: https://www.teamviewer.com/en/products/frontline/

**Nota:** No existe un producto llamado "TeamViewer Industrial" en el catálogo oficial 2025-2026. El soporte a OT (Operational Technology) y entornos industriales es una capacidad de **TeamViewer Tensor** (línea enterprise), no un producto separado.

---

## Mensajes y diferenciadores oficiales

- **TeamViewer Remote:** "Secure remote access and support, powered by AI"
- **TeamViewer Tensor:** "Secure by design. Integrated with your world. Flexible for whatever comes next." / Tagline de producto: "Enterprise remote connectivity" / "Remote connectivity built for secure operations"
- **TeamViewer ONE:** "Fix it before they feel it" — plataforma IT proactiva
- **TeamViewer Frontline:** "See it, do it, done with AR" — solución de trabajador conectado
- **TeamViewer DEX:** Enfocado en eliminar la "digital friction" y evitar tiempo de inactividad costoso

**Certificaciones de seguridad confirmadas:** ISO 27001, SOC 2 Type II, GDPR, HIPAA-compatible
Fuente: https://www.teamviewer.com/en/products/tensor/features/

---

## Reconocimientos vigentes

| Reconocimiento | Año | Detalle |
|---|---|---|
| **Gartner Magic Quadrant — Leader en DEX Management Tools** | **2026** (tercera vez consecutiva) | "TeamViewer Named a Leader in the Gartner® Magic Quadrant™ for Digital Employee Experience (DEX) Management Tools 2026 for the Third Consecutive Year" | 
| Gartner Magic Quadrant — Leader en DEX Management Tools | 2025 | Primera edición donde apareció como Leader; siguió a la adquisición de 1E en 2025 |
| G2 Summer 2026 Leader | 2026 | Mencionado en página de Tensor |
| PAC Innovation Radar — "#1 connected worker (AR) platform" | 2024 | Específicamente para TeamViewer Frontline |

Fuentes:
- https://www.prnewswire.com/news-releases/teamviewer-named-a-leader-in-the-gartner-magic-quadrant-for-digital-employee-experience-dex-management-tools-2026-for-the-third-consecutive-year-302796316.html
- https://www.teamviewer.com/en-us/global/company/press/2025/teamviewer-recognized-as-a-leader-in-2025-gartner-magic-quadrant-for-digital-employee-experience-dex-management-tools/
- https://www.teamviewer.com/en/products/frontline/

**Nota:** El sitio de Starsolution no menciona ninguno de estos reconocimientos. No hay drift de nombre en este apartado — simplemente están ausentes.

---

## Términos a corregir en el sitio

### Drift confirmado

| # | Término actual en el sitio | Nombre/término oficial | Archivo:línea | Severidad |
|---|---|---|---|---|
| 1 | `TeamViewer Industrial` | No existe como producto independiente. La capacidad industrial/OT es parte de **TeamViewer Tensor**. El soporte a entornos industriales con AR es **TeamViewer Frontline**. | `src/pages/teamviewer.astro:500` (celda "Soporte IoT / Industrial", nota: "TeamViewer Industrial") | Alta — nombre de producto inventado |
| 2 | `"Licencias corporativas"` (genérico) / sin mencionar los planes exactos | Los planes oficiales se llaman exactamente: **Remote Access**, **Business**, **Premium**, **Corporate**, **Tensor** | `src/pages/teamviewer.astro:588-589` (CTA "Unase a ellas con licencias corporativas") + `src/data/seo.ts:420-421` (description: "Licenciamiento oficial Colombia") | Baja — el texto es vago pero no incorrecto; mejorable con nombres exactos |
| 3 | JSON-LD: `"TeamViewer Enterprise"` como nombre de producto | El producto enterprise se llama **TeamViewer Tensor**; no existe un SKU llamado "TeamViewer Enterprise" | `src/data/seo.ts:428` → `jsonLd: product('TeamViewer Enterprise', ...)` | Media — el schema.org presenta un nombre de producto que no existe en el catálogo |
| 4 | Sin mención de **TeamViewer ONE** ni **TeamViewer DEX** ni **TeamViewer Frontline** | Los tres son productos vigentes y relevantes para audiencia empresarial colombiana (especialmente DEX y ONE para enterprise) | `src/pages/teamviewer.astro` — ausencia total | Media — oportunidad perdida, no drift directo |
| 5 | Sin mención de reconocimiento Gartner | TeamViewer es **Leader en Gartner MQ DEX 2025 y 2026** (tercer año consecutivo) | `src/pages/teamviewer.astro` — ausencia total | Media — diferenciador competitivo no explotado |

### Sin drift detectado

- Cifrado AES 256-bit: correcto (TeamViewer usa AES-256 + RSA-4096).
- ISO 27001, GDPR, SOC2 Type II: correctos y verificados.
- Estadísticas de dispositivos (2.5B+), empresas clientes (600k+): no verificadas oficialmente en esta sesión en la web pública (TeamViewer no publica estos números en homepage abierta de forma consistente); no se encontró contradicción pero tampoco confirmación directa — mantener con precaución.
- Planes "concurrente vs. nombrada": la explicación en FAQ es correcta a nivel conceptual.
- Precios: el sitio NO afirma precios específicos — correcto, ya que TeamViewer no publica precios públicos para planes comerciales/enterprise en muchos mercados.
- "TeamViewer Tensor" como producto enterprise: nombre 100% correcto.
- "TeamViewer Frontline" como producto AR: nombre 100% correcto.
- "TeamViewer DEX" como Digital Employee Experience: nombre 100% correcto.
