# Hornetsecurity — Dossier verificado en vivo

**Fecha de investigación:** 2026-06-23  
**Fuentes primarias:** hornetsecurity.com (scraping directo con WebFetch, junio 2026)  
**Nota corporativa:** Desde la adquisición por Proofpoint, la marca oficial es **"Hornetsecurity by Proofpoint"**. El sitio despliega "hse_by_proofpoint" branding. URL base: https://www.hornetsecurity.com/en/

---

## Línea de producto

### 365 Total Protection — Planes vigentes (nombres EXACTOS, confirmados en vivo)

| # | Nombre oficial en el sitio | Eslogan oficial |
|---|---------------------------|-----------------|
| **Plan 1** | **365 Total Protection Business** | "Your Microsoft 365 security foundation" |
| **Plan 2** | **365 Total Protection Enterprise** | "All email security features your M365 environment needs" |
| **Plan 3** | **365 Total Protection Enterprise Backup** | "Unlimited Backup and Security for full data loss protection" |
| **Plan 4** | **365 Total Protection Compliance & Awareness** | "Your choice for a secure, compliant, and controlled M365" |

Fuente: https://www.hornetsecurity.com/en/365-total-protection/ y https://www.hornetsecurity.com/en/lp/365-total-protection-plans/

**Plan 4 lanzado:** 5 de septiembre de 2023.  
Fuente: https://www.hornetsecurity.com/en/blog/launch-of-365tp-plan4-with-airv/

**Precios públicos:** Hornetsecurity NO publica precios en su sitio web (ni en la página de planes, ni en servicios, ni en home). Todos los CTAs redirigen a "Request your free trial" o formulario de contacto. **Los valores USD 2 / USD 3.5 / USD 5 / USD 6 por usuario/mes que aparecen en el repo Starsolution NO están respaldados por el sitio oficial — son estimaciones de mercado, no precios oficiales publicados.**

---

## Módulos y capacidades

### Suite de seguridad (productos individuales vigentes — fuente: /en/services/)

**Categoría: Seguridad de email**
- Spam and Malware Protection
- Advanced Threat Protection
- Email Encryption
- Email Archiving
- Email Continuity Service
- Email Signature and Disclaimer
- DMARC Manager
- AI Cyber Assistant
- Hornet.email

**Categoría: Security Awareness**
- **Security Awareness Service** (nombre oficial exacto; NO "Security Awareness Training")
  - Componentes: ESI® – Employee Security Index, Awareness Engine (e-training automatizado), Spear Phishing Simulations con IA
  - Fuente: https://www.hornetsecurity.com/en/services/security-awareness-service/

**Categoría: Governance, Risk & Compliance**
- **365 Permission Manager**
- **365 AI Recipient Validation** (aparece también como "AI Recipient Validation" en algunos contextos)
- 365 Multi-Tenant Manager for MSPs

**Categoría: Backup**
- **365 Total Backup** — Backup de Microsoft 365 (Exchange, SharePoint, OneDrive, Teams)
  - Fuente: https://www.hornetsecurity.com/en/services/365-total-backup/
- **VM Backup** — Backup para máquinas virtuales (Hyper-V, VMware, Proxmox). Nombre oficial: "VM Backup" (ya NO "Altaro VM Backup"; Altaro fue adquirida y renombrada)
  - Licenciamiento: suscripción mensual por VM o licencia perpetua por host. Edición gratuita para 2 VMs.
  - Fuente: https://www.hornetsecurity.com/en/services/vm-backup/
- **Physical Server Backup**

### Contenido de cada plan (features confirmadas)

**Plan 1 Business:**
- Spam & Malware Protection (filtrado 99.9%+)
- Email Encryption (TLS, S/MIME)
- Email Signature and Disclaimer

**Plan 2 Enterprise (acumula Plan 1 +):**
- Advanced Threat Protection (sandbox + URL rewriting)
- Email Continuity Service
- Email Archiving (cumplimiento legal, retención a largo plazo)

**Plan 3 Enterprise Backup (acumula Plan 2 +):**
- 365 Total Backup — backup ilimitado automático (Exchange, SharePoint, OneDrive, Teams)
- Recuperación granular por elemento

**Plan 4 Compliance & Awareness (acumula Plan 3 +):**
- Security Awareness Service (ESI®, spear phishing simulations, e-training automatizado)
- 365 Permission Manager (visibilidad y control de permisos M365)
- AI Recipient Validation (alerta antes de enviar correos con destinatarios incorrectos)
- DMARC Manager / Domain Fraud Protection
- AI Email Security Analyst (powered by AI Cyber Assistant)
- Teams Protection

---

## Mensajes y diferenciadores oficiales

- **Posicionamiento principal:** "AI-BASED NEXT-GEN SECURITY, COMPLIANCE AND BACKUP SOLUTIONS FOR MICROSOFT 365" (header del sitio)
- **Claim de suite:** "The only solution on the market to cover all aspects of data protection, security, compliance, cybersecurity awareness, and backup for Microsoft 365"
- **Adquisición Proofpoint:** "Proofpoint and Hornetsecurity join forces" — marca activa "Hornetsecurity by Proofpoint"
- **Setup rápido:** "Start in 30 seconds" / configuración sin agente
- **MSP-first:** Consola multi-tenant, 12,000+ partners globales
- **Cyber Report 2026:** Análisis de 72 mil millones de emails, base de intel de amenazas
- **Hybrid mode:** "Hybrid mode deployment now available for reliable pre- and post-delivery protection" (novedad 2025-2026)

Fuente: https://www.hornetsecurity.com/en/ y https://www.hornetsecurity.com/en/services/365-total-protection/

---

## Reconocimientos vigentes

| Reconocimiento | Año | Nota |
|---------------|-----|------|
| Global InfoSec Awards | 2026 | Ganador (categoría no especificada en home) |
| PUR S Award — SaaS Backup | 2026 | Ganador |
| Global Awards Winner | 2025/2026 | Múltiples categorías |
| AI Excellence Awards | 2026 | Ganador |
| Cybersecurity Breakthrough Award | 2025 | Ganador |
| Fortress Cyber Security Award | 2025 | Ganador |
| BSI Accelerated Security Certification (BSZ) | 2025 | Certificación alemana BSI; "no exploitable vulnerabilities found" en Email Protection |
| ISO 27001 | Vigente | Gestión de seguridad de la información |
| SOC 1 Type 1 / SOC 2 Type 2 | Vigente | — |
| HIPAA | Vigente | — |
| ISO 9001:2015 / ISO 20000:2018 / ISO 50001:2018 | Vigente | — |

**Cifras corporativas (2026):**
- 125,000+ clientes globales
- 12,000+ channel partners y MSPs
- 120+ países
- 750+ especialistas
- 15 años en operación (fundada 2007)

**Nota:** No se detectó posicionamiento en Gartner Magic Quadrant ni Forrester Wave en las páginas escaneadas. El sitio declara "600+ cybersecurity awards" pero no los lista todos.

Fuente: https://www.hornetsecurity.com/en/company/

---

## Términos a corregir en el sitio

### Drift crítico: nombres de planes (orden y nombres INVERTIDOS en el repo)

El repo muestra una tabla comparativa en `hornet-security.astro` con los planes en este orden:

| Término actual en repo (incorrecto) | Término oficial vigente | Archivo:línea |
|-------------------------------------|------------------------|---------------|
| "Plan 1 Compliance" | **Plan 1 Business** | `src/pages/hornet-security.astro:647` |
| "Plan 2 Business" | **Plan 2 Enterprise** | `src/pages/hornet-security.astro:651` |
| "Plan 3 Enterprise" | **Plan 3 Enterprise Backup** | `src/pages/hornet-security.astro:655` |
| "Plan 4 Enterprise Backup" | **Plan 4 Compliance & Awareness** | `src/pages/hornet-security.astro:659` |

Los nombres están **completamente desordenados y mezclados**: el repo asigna "Compliance" al Plan 1 y "Enterprise Backup" al Plan 4, cuando el oficial es exactamente al revés. El h2 en línea ~634 dice "Como elegir entre los 4 planes de Hornetsecurity 365" — título correcto, pero la tabla que sigue usa nombres erróneos.

### Drift: precios indicativos

| Término actual en repo | Situación oficial | Archivo:línea |
|------------------------|-------------------|---------------|
| "desde USD 2 / usuario / mes" (Plan 1) | **No confirmable** — Hornetsecurity no publica precios en su sitio web | `src/pages/hornet-security.astro:648` |
| "desde USD 3.5 / usuario / mes" (Plan 2) | **No confirmable** — sin precio oficial publicado | `src/pages/hornet-security.astro:652` |
| "desde USD 5 / usuario / mes" (Plan 3) | **No confirmable** — sin precio oficial publicado | `src/pages/hornet-security.astro:656` |
| "desde USD 6 / usuario / mes" (Plan 4) | **No confirmable** — sin precio oficial publicado | `src/pages/hornet-security.astro:660` |
| "USD 2 por usuario al mes (Plan 1 - seguridad basica) hasta USD 6 por usuario al mes (Plan 4)" | **No confirmable** — sin precio oficial publicado | `src/data/seo.ts:175` |

Recomendación: reemplazar precios por "Precios a cotizar — contacte a Starsolution" o eliminar el rango USD, ya que Hornetsecurity opera exclusivamente con cotización directa y no muestra precios públicos.

### Drift: identidad corporativa

| Término actual en repo | Término oficial vigente | Archivo |
|------------------------|------------------------|---------|
| "Hornetsecurity" (solo) | **Hornetsecurity by Proofpoint** (marca oficial 2025-2026) | Múltiples referencias en `hornet-security.astro` y `seo.ts` |

Nota: para el sitio de un partner, usar "Hornetsecurity" sin la referencia a Proofpoint es aceptable si la relación de partner es directa con Hornetsecurity. Sin embargo, el h1 y los títulos deberían considerar si Starsolution tiene acuerdo de partner actualizado post-adquisición.

### Sin drift — Términos correctos

- "365 Total Protection" — nombre de suite correcto
- "Email Security", "Advanced Threat Protection", "Email Encryption", "Email Archiving", "Email Continuity" — nombres correctos
- "Security Awareness" (usado en la página como módulo) — aceptable; nombre oficial completo es "Security Awareness Service"
- "365 Permission Manager" — correcto
- "AI Recipient Validation" — correcto
- "365 Total Backup" — correcto
- "VM Backup" — correcto (ya no "Altaro VM Backup")
- Los 3 planes en la sección de tarjetas superiores del .astro (Business / Enterprise / Enterprise Backup, líneas ~403-505) usan nombres CORRECTOS y en orden correcto

Fuentes oficiales consultadas:
- https://www.hornetsecurity.com/en/365-total-protection/
- https://www.hornetsecurity.com/en/lp/365-total-protection-plans/
- https://www.hornetsecurity.com/en/services/
- https://www.hornetsecurity.com/en/services/security-awareness-service/
- https://www.hornetsecurity.com/en/services/vm-backup/
- https://www.hornetsecurity.com/en/company/
- https://www.hornetsecurity.com/en/blog/launch-of-365tp-plan4-with-airv/
