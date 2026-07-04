# SealPath — Dossier técnico verificado EN VIVO

**Fecha de investigación:** 2026-06-23  
**Fuentes primarias:** sealpath.com (WebFetch directo), búsquedas verificadas contra Gartner Peer Insights, Microsoft Marketplace, Google Workspace Marketplace, Azure Marketplace, Globee Awards.  
**Nota metodológica:** Todo lo que no pudo confirmarse directamente se marca como "No confirmado" en lugar de inferirse.

---

## Línea de producto

SealPath opera bajo el paraguas **SealPath IRM** (Information Rights Management) como nombre comercial principal del producto. No se encontró ninguna edición con nombre "Corporate" ni "Enterprise" como *edición de producto* diferenciada; en cambio, los niveles de despliegue son:

| Nombre oficial | Tipo |
|---|---|
| **SealPath IRM** | Producto principal (IRM/E-DRM) |
| **SealPath Enterprise On-Premise** | Opción de despliegue |
| **SealPath Enterprise SaaS** | Opción de despliegue |
| **SealPath for MSPs** | Tier para proveedores de servicio administrado |
| **SealPath Smart CAD Protection** | Solución especializada CAD |
| **SealPath Information Protector** | Nombre de la app móvil (lanzada feb. 2025, iOS/Android) |
| **SealPath Secure Browser** | Visor web agentless para destinatarios |
| **SealPath Web Protector** | Cliente agentless para proteger/gestionar documentos (sin instalación) |
| **SealPath CAD Designs Protection for Microsoft Purview** | Producto publicado en Microsoft Marketplace / Azure Marketplace |

**Tagline oficial vigente:** *"Full Information Protection Made Easy"*  
**Categoría Gartner (Peer Insights):** Information-Centric Endpoint and Mobile Protection (en transición a Endpoint Protection Platforms). Producto listado como **SealPath Smart Data Protection** en Gartner Peer Insights.  
**Certificación:** Label **"Cybersecurity Made in Europe"** (ECSO — European Cyber Security Organisation).

Fuentes:  
- https://www.sealpath.com  
- https://www.sealpath.com/sealpath-irm-solutions/  
- https://azuremarketplace.microsoft.com/en-us/marketplace/apps/sealpath.cad_purview  
- https://www.gartner.com/reviews/product/sealpath-smart-data-protection  
- https://www.sealpath.com/news/  

---

## Módulos y capacidades

### SealPath IRM — capacidades nucleares verificadas

| Capacidad | Detalle verificado |
|---|---|
| **Cifrado persistente** | Cifrado que acompaña al archivo independientemente de dónde viaje |
| **Control de acceso granular** | Permisos por usuario/grupo: solo lectura, edición, impresión, copia/pegado, fecha de expiración, marcas de agua, acceso offline configurable |
| **Revocación remota** | Destrucción/revocación de documentos en cualquier momento, incluso en dispositivos externos |
| **Auditoría y trazabilidad** | Logs de acceso, alertas a usuarios/administradores, informes de riesgo, listas filtrables y exportables |
| **Automatización** | Protección automática en File Servers/NAS, bibliotecas de SharePoint, carpetas de Office 365/OneDrive, Box, Dropbox, G-Suite, Exchange, Nextcloud, Alfresco |
| **Integración Microsoft 365** | Outlook, SharePoint Online, OneDrive for Business, Teams — protección nativa |
| **Integración MIP** | Asociación de políticas SealPath con etiquetas de Microsoft Information Protection; sin API; out-of-the-box. La página oficial usa el término **"Microsoft Information Protection" (MIP)**, no "Purview" para la integración general de documentos |
| **SealPath MIP plugin for CAD** | Módulo específico para archivos CAD integrado con MIP/Purview |
| **SealPath CAD Designs Protection for Microsoft Purview** | Producto publicado en marketplace para proteger diseños CAD con Purview (único que soporta ensamblajes con referencias) |
| **SealPath Smart CAD Protection** | Sandbox propietaria para AutoCAD, SolidWorks, CATIA, Inventor, SolidEdge, Grabert Ares Kudo; integración con PLM (AutoDesk Vault, SolidWorks PDM, 3DExperience Enovia) |
| **SealPath Secure Browser** | Acceso agentless a documentos protegidos desde navegador; incluye marcas de agua con identidad, IP, timestamp |
| **SealPath Web Protector** | Protección y gestión de políticas desde navegador sin instalación; Windows, macOS, Linux, iOS, Android |
| **SealPath Information Protector (móvil)** | App lanzada feb. 2025 para iOS y Android |
| **SDK** | Disponible para integraciones personalizadas |
| **Integración DLP/SIEM** | Integraciones con Netskope DLP (partnership nov. 2024), otras soluciones DLP y SIEM |
| **Multi-plataforma** | Windows, macOS, iOS, Android; PDF con Adobe, Foxit, Nitro, Nuance; LibreOffice |

**Nota sobre E-DRM:** SealPath usa los términos **IRM** y **E-DRM / EDRM** (Enterprise Digital Rights Management) indistintamente en su blog técnico. El nombre comercial del producto es "SealPath IRM"; E-DRM aparece como descriptor tecnológico, no como nombre de producto ni edición.

Fuentes:  
- https://www.sealpath.com/sealpath-irm-solutions/  
- https://www.sealpath.com/alliances-and-integrations/microsoft-information-protection/  
- https://www.sealpath.com/alliances-and-integrations/microsoft-365/  
- https://www.sealpath.com/blog/web-protector/  
- https://workspace.google.com/marketplace/app/sealpath_secure_browser/150368176980  
- https://www.sealpath.com/blog/deploy-enterprise-digital-rights-management/  
- https://www.sealpath.com/news/ (partnership Netskope nov. 2024)

---

## Mensajes y diferenciadores oficiales

1. **Tagline principal:** *"Full Information Protection Made Easy"* — énfasis en facilidad de uso + protección completa.

2. **Diferenciador nuclear:** *"Persistent encryption that accompanies the files and emails wherever they travel"* — la protección viaja con el dato, no depende del perímetro de red.

3. **Cobertura CAD:** *"The widest variety of CAD tools"* — único en proteger ensamblajes CAD con referencias entre archivos.

4. **Sin agente para destinatarios:** *"100% agentless"* para Secure Browser y Web Protector — colaboradores externos no necesitan instalar nada.

5. **Integración nativa Office/PDF/CAD:** Sin plugins adicionales para Adobe, AutoCAD, SolidEdge.

6. **Multi-tenant para MSPs:** Soporte de múltiples organizaciones con administradores independientes.

7. **Recomendado por Microsoft** (mencionado en la página de Purview CAD Protection).

8. **Compatibilidad con clasificación:** Asociación automática de políticas de protección con etiquetas MIP — *"No APIs required. Out-of-the-box Integration"*.

9. **Tagline de posicionamiento sectorial:** *"The most user-friendly and flexible data protection application on the market"* (usado en página IRM Solutions).

Fuentes:  
- https://www.sealpath.com  
- https://www.sealpath.com/sealpath-irm-solutions/  
- https://www.sealpath.com/purview-cad-protection/  
- https://www.sealpath.com/alliances-and-integrations/microsoft-information-protection/

---

## Reconocimientos vigentes

| Reconocimiento | Detalle | Fecha |
|---|---|---|
| **Globee® Awards for Cybersecurity — Gold Winner** | 22nd Annual Globee Awards. Reconocimiento por innovación en protección de información sensible | Marzo 2026 |
| **"Cybersecurity Made in Europe" label** | Certificación de ECSO (European Cyber Security Organisation) — otorgada a empresas con sede y I+D en Europa | Vigente (fecha exacta de otorgamiento no confirmada en web pública) |
| **Gartner Peer Insights** | Listado como "SealPath Smart Data Protection" en la categoría Information-Centric Endpoint and Mobile Protection. Rating: 4.4/5 (11 reseñas). No es Magic Quadrant ni Critical Capabilities — solo reseñas de pares. | 2026 (último dato disponible) |
| **Microsoft Marketplace** | Producto "SealPath CAD Designs Protection for Microsoft Purview" publicado en Microsoft Azure Marketplace y Microsoft Commercial Marketplace | Vigente |

**No confirmado:** Reconocimientos de Forrester o IDC. No aparecen en el sitio ni en búsquedas verificadas.  
**Crecimiento reportado:** 70% en Q1 2026 vs Q1 2025; 55% en todo 2025; 50% en H1 2025. Expansión en Asia, América Latina, Oriente Medio.

Fuentes:  
- https://www.sealpath.com/news/  
- https://www.prnewswire.com/news-releases/winners-announced-in-the-22nd-annual-2026-globee-awards-for-cybersecurity-302718626.html  
- https://www.gartner.com/reviews/product/sealpath-smart-data-protection  
- https://azuremarketplace.microsoft.com/en-us/marketplace/apps/sealpath.cad_purview  
- https://ecs-org.eu/ecso-proudly-launches-its-label-cybersecurity-made-in-europe/

---

## Términos a corregir en el sitio

### 1. Término "DLP" en el SEO title — imprecisión de categoría

**actual →** `SealPath DLP | Seguridad de Datos | Starsolution`  
**oficial →** SealPath es **IRM** (Information Rights Management) / **E-DRM** — NO es una solución DLP. SealPath se posiciona explícitamente como complemento/alternativa al DLP tradicional, no como DLP en sí mismo.  
**archivo:línea →** `src/data/seo.ts:311`

### 2. "Microsoft Information Protection" vs "Microsoft Purview"

**actual →** El sitio usa "Microsoft Purview (MIP)" en `sealpath.astro` línea 573: `"Integración con Microsoft Purview (MIP):"` como si fueran sinónimos equivalentes entre paréntesis.  
**oficial →** En la web de SealPath, la integración general de documentos se denomina **"Microsoft Information Protection" (MIP)**. "Microsoft Purview" aparece solo en el producto especializado **"SealPath CAD Designs Protection for Microsoft Purview"**. Son referencias distintas — MIP es la capa de clasificación/etiquetado; Purview es la plataforma más amplia. SealPath usa "MIP" para la integración documental general.  
**archivo:línea →** `src/pages/sealpath.astro:573`

### 3. Ausencia del producto "SealPath Secure Browser" y "SealPath Web Protector"

**actual →** El sitio menciona genéricamente "un visor web" para usuarios externos (FAQ, línea 603) sin nombrar el producto.  
**oficial →** El producto se llama **SealPath Secure Browser** (disponible también en Google Workspace Marketplace y Azure Marketplace). El complemento para gestionar protección sin instalar se llama **SealPath Web Protector**. Nombrar el producto añade precisión técnica y credibilidad.  
**archivo:línea →** `src/pages/sealpath.astro:603`

### 4. "SealPath IRM" — nombre de producto ausente en el sitio

**actual →** El sitio habla de "SealPath" genéricamente sin nombrar el producto **SealPath IRM**.  
**oficial →** El nombre comercial verificado del producto es **SealPath IRM** (Information Rights Management). SealPath también usa **E-DRM** como descriptor tecnológico en su blog.  
**archivo:línea →** `src/pages/sealpath.astro:26-28` (hero h1), `src/data/seo.ts:311-319` (title, description, jsonLd)

### 5. Tagline oficial ausente

**actual →** No se usa el tagline oficial de SealPath en el sitio.  
**oficial →** Tagline vigente: **"Full Information Protection Made Easy"**  
**archivo:línea →** `src/pages/sealpath.astro:27-34` (hero section) — podría integrarse como contexto o badge sin alterar el tono de Starsolution.

### 6. Reconocimiento Globee 2026 no mencionado

**actual →** Sin drift en el sitio — simplemente no existe la sección de reconocimientos.  
**oficial →** SealPath ganó **Gold Winner en los 22nd Annual Globee® Awards for Cybersecurity** (marzo 2026) y tiene el label **"Cybersecurity Made in Europe" (ECSO)**. Ambos son verificables y añaden autoridad.  
**archivo:línea →** Ausente en `src/pages/sealpath.astro` — sugerencia de adición, no corrección de error.

---

*Sin drift detectado en: capacidades de cifrado, revocación remota, auditoría, integración con Office 365, SharePoint, OneDrive, Teams, Outlook, casos de uso (financiero, legal, salud). Estas secciones son precisas con respecto al producto real.*
