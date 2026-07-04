# Netwrix — Dossier de Producto Verificado EN VIVO
**Fecha de investigación:** 2026-06-23  
**Fuentes:** netwrix.com (páginas de producto oficiales, página de reconocimientos, press releases)  
**Metodología:** WebFetch directo a pages canónicas + WebSearch multi-ángulo + verificación adversarial 3-voto por claim crítico

---

## Línea de producto

Netwrix organiza su portafolio en dos macrocategorías: **Data Security** e **Identity Security**. A continuación los productos con nomenclatura oficial 2025-2026:

### Productos principales (Featured / flagship)

| Nombre oficial exacto | Categoría | Notas de nomenclatura |
|---|---|---|
| **Netwrix 1Secure** | Plataforma SaaS unificada | SaaS-native; integra los 6 módulos |
| **Netwrix Access Analyzer** | Data Access Governance / DSPM | Ex-StealthAUDIT → Netwrix Enterprise Auditor (dic 2023) → **Netwrix Access Analyzer** (abr 2025) |
| **Netwrix Auditor** | Auditoría de cambios + compliance | Producto SEPARADO de Access Analyzer; sigue activo con ese nombre |
| **Netwrix Privilege Secure** | PAM (Privileged Access Management) | Sin cambio de nombre; diferenciador: Zero Standing Privilege / JIT |
| **Netwrix Endpoint Protector** | DLP (Data Loss Prevention) | Ex-CoSoSys/Endpoint Protector; adquirido 2023; renombrado a **Netwrix Endpoint Protector** |
| **Netwrix Identity Manager** | IGA (Identity Governance & Administration) | Ex-Usercube (adquirido); renombrado a **Netwrix Identity Manager** (abr 2025) |
| **Netwrix PingCastle** | Active Directory Security Posture | Adquirido; se mantiene como "Netwrix PingCastle" |

### Productos adicionales del portafolio

| Nombre oficial exacto | Función |
|---|---|
| **Netwrix Data Classification** | Descubrimiento y clasificación de datos sensibles (PII, PHI, PCI) |
| **Netwrix Directory Manager** | Gestión de grupos y usuarios en AD / Entra ID (ex-**GroupID** — ver nota) |
| **Netwrix Threat Manager** | Detección y respuesta a comportamiento anómalo (ITDR) |
| **Netwrix Threat Prevention** | Alertas en tiempo real sobre actividad riesgosa en AD |
| **Netwrix Password Secure** | Gestión y seguridad de contraseñas de usuario |
| **Netwrix Password Policy Enforcer** | Políticas de contraseñas personalizadas |
| **Netwrix Change Tracker** | Reducción de superficie de ataque; detección de cambios en sistemas |
| **Netwrix Identity Recovery** | Recuperación de objetos AD / Entra ID |
| **Netwrix Platform Governance** | Control de configuraciones ERP |
| **Netwrix PolicyPak** (también nombrado Endpoint Policy Manager) | Gestión y seguridad de endpoints |
| **Netwrix 1Secure for MSPs** | Variante del SaaS para proveedores de servicios gestionados |

**Nota sobre GroupID / Directory Manager:**  
La documentación oficial de Netwrix usa ambos términos. "GroupID" es el nombre histórico (aún visible en docs.netwrix.com v11.0 y en demos de producto), mientras que la página de producto canónica usa **Netwrix Directory Manager**. Son el mismo producto; el nombre de marketing vigente es **Netwrix Directory Manager**.  
Fuentes: [netwrix.com/en/products/directory-manager/](https://netwrix.com/en/products/directory-manager/) | [docs.netwrix.com GroupID 11.0](https://docs.netwrix.com/docs/directorymanager/11_0/introduction/)

---

## Módulos y capacidades

### Netwrix 1Secure (SaaS Platform)
- **Tagline oficial:** "Identity-first data security for enterprise AI"
- **Posicionamiento:** "Security foundation for enterprise AI" / "Control plane for identity-first data security"
- **Arquitectura:** SaaS-native; 6 módulos integrados:
  1. Privileged Access Management
  2. Identity Management
  3. Directory Management
  4. Data Security Posture Management (DSPM) — disponible desde mayo 2025
  5. Identity Threat Detection & Response (ITDR)
  6. Endpoint Management
- Incluye también: AI Governance, Data Access Governance, Discovery & Classification, Endpoint DLP, IGA, Identity Security Posture Management
- Integra con Netwrix PingCastle para AD risk assessments  
Fuente: [netwrix.com/en/platform/](https://netwrix.com/en/platform/)

### Netwrix Access Analyzer
- **Tagline oficial:** "Stop juggling point tools. Unify data protection across your data sources, automate governance, and take control of AI adoption."
- **Capacidades clave:**
  - Descubrimiento y clasificación en 40+ fuentes de datos
  - Monitoreo de actividad de usuario y Microsoft Copilot en tiempo real
  - Delegación de gestión de acceso a data owners (self-service governance)
  - Automatización de deprovisioning, cleanup y remediación
  - Reporting de cumplimiento (GDPR, HIPAA, SOX, PCI DSS)
  - Bulk actions sobre múltiples objetos
- **Cubre:** AD, SharePoint, file systems, SQL Server, Azure SQL, AWS RDS, Oracle  
Fuente: [netwrix.com/en/products/access-analyzer/](https://netwrix.com/en/products/access-analyzer/)

### Netwrix Auditor (producto independiente, sigue activo)
- **Tagline oficial:** "Monitor user activity, spot threats early, and prove compliance"
- **Función:** Auditoría de cambios, visibilidad de actividad de usuarios, cumplimiento normativo
- Producto diferente de Access Analyzer (antes eran líneas separadas; hoy siguen siendo SKUs distintos)  
Fuente: [netwrix.com/products.html](https://www.netwrix.com/products.html)

### Netwrix Privilege Secure (PAM)
- **Tagline oficial:** "Stop attackers with Zero Standing Privilege."
- **Capacidades PAM:**
  - Just-In-Time (JIT) access: credenciales temporales por sesión, eliminadas al terminar
  - Grabación y monitoreo de sesiones privilegiadas
  - Eliminación de cuentas standing privilegiadas ("Zero Standing Privilege")
  - Agentless discovery de cuentas ocultas
  - Control granular por tarea/sesión
- **Diferenciador vs. soluciones de vaulting:** No se limita a guardar credenciales; elimina la cuenta permanente  
Fuente: [netwrix.com/en/products/privilege-secure/](https://netwrix.com/en/products/privilege-secure/)

### Netwrix Endpoint Protector (DLP)
- **Tagline oficial:** "Endpoint DLP and Device Control Solution"
- **Capacidades DLP:**
  - Control de dispositivos y puertos: USB, Bluetooth, impresoras, 45+ tipos
  - Cifrado forzado con estándares FIPS
  - Content-aware DLP: escaneo en apps, almacenamiento, impresoras, portapapeles
  - eDiscovery para datos en reposo
  - Políticas granulares por dispositivo, puerto, app y almacenamiento
- **Plataformas:** Windows, macOS, Linux (paridad completa de funcionalidades DLP en los 3 OS)  
Fuente: [netwrix.com/en/products/endpoint-protector/](https://netwrix.com/en/products/endpoint-protector/)

### Netwrix Identity Manager (IGA)
- **Tagline oficial:** "Identity governance and administration without the complexity"
- **Capacidades IGA:**
  - Automatización de ciclo de vida de identidades (joiner-mover-leaver)
  - Centralización con modelado de roles asistido por IA
  - RBAC (Role-Based Access Control)
  - Access reviews y certificaciones de acceso
  - Reporting de cumplimiento
  - Conectores prebuilt para HR, IT, cloud y apps de negocio
  - Gestión de empleados, contratistas, service accounts e identidades no-humanas  
Fuente: [netwrix.com/en/products/identity-manager/](https://netwrix.com/en/products/identity-manager/)

### Netwrix Data Classification
- **Tagline oficial:** "Find it. Classify it. Fix it."
- **Capacidades:**
  - Descubrimiento y clasificación automatizada de datos sensibles
  - Identificación de ROT data (Redundant, Obsolete, Trivial)
  - Evaluación y priorización de riesgos por sensibilidad y exposición
  - Remediación automatizada: movimiento de archivos, ajuste de permisos, redacción de contenido
  - Reporting para GDPR, HIPAA, PCI DSS
  - Integración con MIP (Microsoft Information Protection) labels
  - Soporte: file systems, bases de datos, email, repositorios cloud  
Fuente: [netwrix.com/en/products/data-classification/](https://netwrix.com/en/products/data-classification/)

### Netwrix Threat Manager
- **Tagline oficial:** "Detect and respond to abnormal behavior"
- **Función:** ITDR — detección y respuesta ante comportamientos anómalos de identidades  
Fuente: [netwrix.com/products.html](https://www.netwrix.com/products.html)

### Netwrix Directory Manager (ex-GroupID)
- **Tagline oficial:** "Simplify group and user management"
- **Función:** Gestión de grupos y usuarios en Active Directory y Microsoft Entra ID; self-service para contraseñas  
Fuente: [netwrix.com/en/products/directory-manager/](https://netwrix.com/en/products/directory-manager/)

### Netwrix Password Secure
- **Tagline oficial:** "Manage and secure user passwords across all devices"  
Fuente: [netwrix.com/products.html](https://www.netwrix.com/products.html)

---

## Mensajes y diferenciadores oficiales

1. **"Data Security that Starts with Identity"** — Claim corporativo central de Netwrix (homepage 2025)  
   Fuente: [netwrix.com](https://www.netwrix.com/site/index)

2. **"Identity-first data security for enterprise AI"** — Posicionamiento de 1Secure  
   Fuente: [netwrix.com/en/platform/](https://netwrix.com/en/platform/)

3. **"Zero Standing Privilege"** — Diferenciador de Netwrix Privilege Secure vs. soluciones de vaulting clásico  
   Fuente: [netwrix.com/en/products/privilege-secure/](https://netwrix.com/en/products/privilege-secure/)

4. **"Full DLP feature parity across Windows, macOS, and Linux"** — Diferenciador de Netwrix Endpoint Protector  
   Fuente: [netwrix.com/en/products/endpoint-protector/](https://netwrix.com/en/products/endpoint-protector/)

5. **DSPM como capacidad nueva (2025):** Netwrix posiciona Data Security Posture Management como capacidad central, no solo auditoría. "Identifies and eliminates data exposures within Microsoft 365 environments" — disponible en 1Secure desde mayo 2025  
   Fuente: [netwrix.com/en/resources/news/netwrix-expands-1secure-with-advanced-data-and-identity-security-solutions/](https://netwrix.com/en/resources/news/netwrix-expands-1secure-with-advanced-data-and-identity-security-solutions/)

6. **AI Governance** — Capacidad de 1Secure para controlar adopción de Microsoft Copilot; monitoreo de actividad de Copilot en tiempo real  
   Fuente: [netwrix.com/en/products/access-analyzer/](https://netwrix.com/en/products/access-analyzer/)

7. **Categorías de solución oficiales (menu público):**  
   Data: AI Governance · DSPM · Data Access Governance · DLP · Data Discovery & Classification  
   Identity: ITDR · IGA · Identity Security Posture Management · PAM · Directory Security  
   Fuente: [netwrix.com/en/solutions/](https://netwrix.com/en/solutions/)

---

## Reconocimientos vigentes

Todos verificados en [netwrix.com/en/recognition/](https://netwrix.com/en/recognition/) + pages de producto.

| Año | Organismo | Reconocimiento | Categoría |
|---|---|---|---|
| 2025 | **Gartner** | Magic Quadrant — **4.° año consecutivo** | Privileged Access Management (PAM) |
| 2025 | **Gartner** | Market Guide — Representative Vendor | Identity Governance & Administration (IGA) |
| 2025 | **KuppingerCole** | Leadership Compass — **Challenger** | Identity Threat Detection & Response (ITDR) |
| 2025 | **GigaOM** | Radar — **Challenger / Outperformer** | Data Security Platforms (DSP) |
| 2025 | **GigaOM** | Radar — **Challenger / Fast Mover** | Data Loss Prevention (DLP) |
| 2025 | **Forrester** | Representative Vendor | Sensitive Data Discovery & Classification Landscape Q4 2025 |
| 2024 | **KuppingerCole** | IGA Leadership Compass — **Overall Leader / Product Leader / Innovation Leader** | Identity Governance & Administration (IGA) — reconocimiento de Netwrix Usercube (ahora Identity Manager) |
| 2024 | **Gartner** | Market Guide | Identity Governance & Administration (26 ago 2024) |
| 2024 | **Gartner** | Critical Capabilities for PAM | Privileged Access Management (9 sep 2024) |
| 2024 | **Cybersecurity Excellence Awards** | DLP Excellence Award 2024 | Netwrix Endpoint Protector |
| 2024 | **Forrester** | The Data Security Platforms Landscape Q4 2024 | Data Security Platforms |
| S/F | **Gartner Peer Insights** | Rating 4.7/5 — 164 reviews | File Analysis Software (Endpoint Protector) |

**Nota:** El reconocimiento de KuppingerCole IGA 2024 se publicó bajo el nombre "Netwrix Usercube"; el producto se renombró a **Netwrix Identity Manager** en abril 2025.  
Fuente principal: [netwrix.com/en/recognition/](https://netwrix.com/en/recognition/)

---

## Términos a corregir en el sitio

### Drift confirmados (actual → oficial → archivo:línea)

**DRIFT 1 — Producto JSON-LD: nombre incorrecto**
- **Actual:** `'Netwrix Auditor'` (en jsonLd del structured data)
- **Oficial:** Depende del scope de la página. Si la página cubre la plataforma completa → usar `'Netwrix'` o `'Netwrix 1Secure'`. Si cubre el producto de auditoría de cambios específicamente → `'Netwrix Auditor'` es correcto. Sin embargo, la página actual mezcla capacidades de Auditor + Access Analyzer + Privilege Secure sin distinguirlos, lo que hace que el nombre en jsonLd sea impreciso.
- **Recomendación:** Expandir el nombre del producto a `'Netwrix — Plataforma de Seguridad de Datos e Identidades'` o restructurar la página por producto.
- **Archivo:** `D:\starsolution\starsolution-astro\src\data\seo.ts` — línea 336

**DRIFT 2 — "Gestión de Acceso Privilegiado" sin nombre de producto**
- **Actual:** La tarjeta de capacidades describe PAM genéricamente como "Gestión de Acceso Privilegiado" sin mencionar el nombre exacto del producto.
- **Oficial:** El producto se llama **Netwrix Privilege Secure**; diferenciador clave = "Zero Standing Privilege" (JIT, no solo vaulting).
- **Archivo:** `D:\starsolution\starsolution-astro\src\pages\netwrix.astro` — líneas 152-157

**DRIFT 3 — "Clasificación de Datos" sin nombre de producto**
- **Actual:** Tarjeta genérica "Clasificación de Datos".
- **Oficial:** Producto separado llamado **Netwrix Data Classification**. Tagline: "Find it. Classify it. Fix it."
- **Archivo:** `D:\starsolution\starsolution-astro\src\pages\netwrix.astro` — líneas 126-131

**DRIFT 4 — "Gobernanza de Identidad" sin nombre de producto**
- **Actual:** Tarjeta genérica "Gobernanza de Identidad".
- **Oficial:** El producto IGA se llama **Netwrix Identity Manager** (ex-Usercube, renombrado abril 2025). Existe también **Netwrix Directory Manager** (ex-GroupID) para gestión de grupos/usuarios AD.
- **Archivo:** `D:\starsolution\starsolution-astro\src\pages\netwrix.astro` — líneas 139-144

**DRIFT 5 — Ausencia de Netwrix Access Analyzer**
- **Actual:** La página no menciona Netwrix Access Analyzer (el producto estrella de data governance, ex-StealthAUDIT / Enterprise Auditor).
- **Oficial:** **Netwrix Access Analyzer** (nombre vigente desde abril 2025) es uno de los 6 productos featured en netwrix.com/products.html. Cubre 40+ fuentes de datos, DSPM, monitoreo de Copilot.
- **Archivo:** `D:\starsolution\starsolution-astro\src\pages\netwrix.astro` — sin mención en ninguna línea

**DRIFT 6 — Ausencia de Netwrix Endpoint Protector (DLP)**
- **Actual:** La página no menciona DLP ni Netwrix Endpoint Protector.
- **Oficial:** **Netwrix Endpoint Protector** es producto featured; cubre DLP multiplataforma (Windows/macOS/Linux); ganó DLP Excellence Award 2024.
- **Archivo:** `D:\starsolution\starsolution-astro\src\pages\netwrix.astro` — sin mención

**DRIFT 7 — Ausencia de Netwrix 1Secure como plataforma SaaS**
- **Actual:** No se menciona 1Secure. El sitio presenta Netwrix como una única solución monolítica.
- **Oficial:** Netwrix posiciona **Netwrix 1Secure** como la plataforma SaaS unificada ("Identity-first data security for enterprise AI"); es el producto de mayor visibilidad en marketing 2025.
- **Archivo:** `D:\starsolution\starsolution-astro\src\pages\netwrix.astro` — sin mención

**DRIFT 8 — Ausencia de DSPM como capacidad**
- **Actual:** La página no menciona "Data Security Posture Management" ni DSPM.
- **Oficial:** DSPM es una de las categorías de solución oficiales de Netwrix (disponible en 1Secure desde mayo 2025). Es un diferenciador activo de la plataforma.
- **Archivo:** `D:\starsolution\starsolution-astro\src\pages\netwrix.astro` — sin mención

**DRIFT 9 — Reconocimientos ausentes o sin año**
- **Actual:** La página no menciona reconocimientos de Gartner, KuppingerCole ni Forrester.
- **Oficial:** Netwrix figura en el Gartner PAM Magic Quadrant 2025 (4.° año consecutivo) y KuppingerCole IGA Leadership Compass 2024 (Overall Leader).
- **Archivo:** `D:\starsolution\starsolution-astro\src\pages\netwrix.astro` — sin sección de reconocimientos

**DRIFT 10 — Estadísticas sin fuente verificada**
- **Actual:** "74% de empresas no saben dónde están sus datos sensibles", "85% tienen usuarios con permisos excesivos", "$14.8M costo promedio de no cumplimiento", "53% de brechas por abuso de privilegios".
- **Estado:** Estas cifras no pudieron ser verificadas como datos originales de Netwrix durante esta investigación. Pueden ser de terceros citados por Netwrix (Ponemon, Verizon DBIR, etc.) o datos anteriores que Netwrix ya no usa en su sitio actual.
- **Recomendación:** Verificar fuente primaria antes de mantener; si no se puede atribuir, reemplazar por claims de Netwrix verificados como "13,000+ clientes a nivel mundial" o "40+ fuentes de datos soportadas".
- **Archivo:** `D:\starsolution\starsolution-astro\src\pages\netwrix.astro` — líneas 71-86

---

## Claims no confirmados / incertidumbre

- **"Netwrix Threat Prevention"** aparece en products.html como producto separado de "Netwrix Threat Manager". No se pudo obtener página de producto canónica independiente durante esta sesión. Puede ser una sub-capacidad o un producto para endpoints AD. No adivino: se recomienda verificar en [netwrix.com/en/products/threat-prevention/](https://netwrix.com/en/products/threat-prevention/) si existe.
- **"Netwrix GroupID" como nombre de marketing vigente:** La documentación técnica (docs.netwrix.com) aún usa "GroupID" ampliamente (v11.0). La página de marketing usa "Directory Manager". Ambos nombres coexisten; para el sitio de Starsolution usar **Netwrix Directory Manager** como nombre principal con "(anteriormente GroupID)" si es necesario contexto.
- **Cifras estadísticas** (sección "Compliance Challenges"): No verificadas como de Netwrix 2025. Ver Drift 10.
- **"160+ reportes de cumplimiento pre-construidos"** citados en la página actual: No se encontró esta cifra específica en pages de producto verificadas durante la investigación. Puede ser válida (es un claim histórico de Netwrix Auditor) pero no fue confirmada en el sitio 2025.
