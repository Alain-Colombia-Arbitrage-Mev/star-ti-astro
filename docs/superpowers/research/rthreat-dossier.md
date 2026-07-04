# rThreat — Dossier de Producto (verificado en vivo, junio 2026)

Fuente primaria: https://rthreat.net  
Sede: 725 North State Street, Bellingham, WA 98225, EE.UU.

---

## Línea de producto

**Nombre oficial de la plataforma:** rThreat  
(El dominio técnico del sitio muestra "rthreatv2" en la URL raíz, pero el branding oficial en toda la plataforma, comunicados de prensa y taglines es **rThreat** — sin versión en el nombre comercial.)

**Categoría oficial:** Breach and Attack Emulation platform  
rThreat se posiciona como plataforma de **Breach and Attack Emulation (BAE)**, no solo BAS (Breach and Attack Simulation). La distinción es deliberada: el término "emulation" refleja el uso de malware y artefactos reales, no simulaciones sintéticas.  
Fuente: https://rthreat.net y https://rthreat.net/2021/04/14/blog-attack-simulation-vs-attack-emulation/

**Tagline oficial:**
> "Think of us as your live fire exercise for cyber attacks"

**Claim diferenciador principal:**
> "The only breach and attack solution that conducts zero-day research to help prevent cyber attacks"

**Claim fundacional:**
> "Reliable cybersecurity validation did not exist, so we created it"

---

## Módulos y capacidades

Módulos identificados en el sitio oficial (https://rthreat.net):

| Módulo / Capacidad | Descripción oficial |
|---|---|
| Breach and Attack Emulation | Prueba la capacidad de la organización para gestionar un incidente de seguridad en todas las fases de IR: análisis, contención, erradicación y recuperación |
| Zero-Day Research | Desarrollo de artefactos de amenaza previamente desconocidos; única plataforma BAS que investiga zero-days propios |
| Zero Trust Validation | Validación de arquitectura Zero Trust usando TTPs adversariales |
| Attack Surface Management | Gestión y mapeo de la superficie de ataque |
| Threat Modeling | Construcción de proceso de modelado de amenazas escalable |

**Características técnicas nombradas oficialmente:**
- "Artifacts in Library" — biblioteca de artefactos de malware real con variaciones de ofuscación
- "Variations in obfuscation" — variantes de ofuscación para evadir firmas estáticas
- "Real Executions" — ejecución real (no simulada) en entornos seguros
- "Unknown Attack Methodologies" — metodologías de ataque desconocidas (zero-day propios)

**Casos de uso documentados:**
- Automatización de procesos de Penetration Testing y Purple Teams
- Validación de preparación de SOC y equipos de Incident Response
- Validación de herramientas y controles de seguridad (EDR, firewall, SIEM)
- Cumplimiento regulatorio y generación de evidencia auditable
- Modelado de amenazas y priorización de remediación

**MITRE ATT&CK:** El sitio menciona TTPs (Tactics, Techniques and Procedures) de adversarios avanzados, pero no documenta en las páginas públicas disponibles un módulo explícitamente denominado "MITRE ATT&CK Full Kill Chain Mapping" con ese nombre exacto. La referencia al framework MITRE ATT&CK es implícita en el uso de TTPs.

Fuente: https://rthreat.net, https://rthreat.net/2021/03/26/incident-response-breach-and-attack-emulation/

---

## Mensajes y diferenciadores oficiales

1. **"The only breach and attack solution that conducts zero-day research"** — diferenciador central; ningún otro BAS mainstream (AttackIQ, Cymulate, SafeBreach) investiga zero-days propios.
2. **Emulation vs. Simulation** — rThreat usa el término "emulation" para subrayar que ejecuta artefactos reales, no firmas sintéticas. Ver: https://rthreat.net/2021/04/14/blog-attack-simulation-vs-attack-emulation/
3. **SaaS cloud-based, vendor-agnostic** — plataforma agnóstica al stack de seguridad del cliente.
4. **Industry-specific threat identification** — identificación de amenazas por vertical de industria y personalización de frameworks de cumplimiento.
5. **"Validate technology, processes and professionals with TTPs used by advanced adversaries"** — propuesta de valor triple: tecnología, procesos y personas.
6. **Delivery segura** — ejecución de malware real en entornos controlados sin riesgo para producción.

Fuente: https://rthreat.net, https://rthreat.net/about/

---

## Reconocimientos vigentes

| Reconocimiento | Año | Detalle |
|---|---|---|
| StartEngine Quarterly Pitch Competition — 1er lugar | Octubre 2021 | Ganó $25,000 y consulta con Howard Marks (CEO de Activision & StartEngine). Kevin O'Leary ("Mr. Wonderful", Shark Tank) avaló la empresa. |
| John Kindervag (creador de Zero Trust) se une como SVP de Cybersecurity Strategy | Noviembre 2021 | Kindervag, creador del modelo Zero Trust y entonces SVP de ON2IT, describió la plataforma como "unlike anything out there". Fuente: https://rthreat.net/2021/11/08/john-kindervag-creator-of-zero-trust-joins-rthreat/ y https://www.prnewswire.com/news-releases/john-kindervag-creator-of-zero-trust-joins-rthreat-301418894.html |

**No confirmado en fuentes públicas (2022–2026):**
- Clientes Fortune 500 o gobiernos nombrados: el sitio afirma servir a sector privado, público y educación, pero no publica referencias nominales verificadas.
- Reconocimientos de analistas (Gartner, Forrester, IDC): no encontrados en páginas públicas del sitio.
- Casos de estudio con año: no publicados en el sitio oficial.

---

## Términos a corregir en el sitio

### Drift 1 — Categoría del producto
**actual:** "tecnología BAS (Breach and Attack Simulation)"  
**oficial:** "Breach and Attack Emulation" (rThreat distingue explícitamente entre *simulation* y *emulation*)  
**archivo:línea:** `src/pages/rthreat-bogota-colombia.astro:34`

### Drift 2 — Claim de clientes "Fortune 500 y gobiernos"
**actual:** "rThreat es la plataforma líder en BAS (Breach and Attack Simulation) utilizada por Fortune 500 y gobiernos para validar continuamente sus controles"  
**oficial:** rThreat menciona servir a sector privado, público, educación y MSSPs, pero **no publica ni confirma clientes Fortune 500 ni gobiernos nominalmente**. El claim "utilizada por Fortune 500 y gobiernos" es no verificable en fuentes públicas.  
**archivo:línea:** `src/pages/rthreat-bogota-colombia.astro:301`

### Drift 3 — Nombre de categoría en SEO
**actual:** title/description en seo.ts usan "BAS breach attack simulation" y "Breach and Attack Simulation (BAS)"  
**oficial:** rThreat se autodefine como **Breach and Attack Emulation**, no BAS/Simulation. Para alineación con el término oficial del vendor, el copy debería reflejar "Breach and Attack Emulation (BAE)".  
**archivo:línea:** `src/data/seo.ts:274-275` (title y description de `rthreat-bogota-colombia`)

### Drift 4 — "MITRE ATT&CK Full Kill Chain" como nombre de módulo
**actual:** "simulación de técnicas ofensivas avanzadas del MITRE ATT&CK Full Kill Chain"  
**oficial:** rThreat no publica un módulo con ese nombre exacto en su sitio. Menciona TTPs de adversarios avanzados; el framework MITRE ATT&CK es referenciado implícitamente. "Full Kill Chain" es lenguaje editorial del sitio, no nomenclatura oficial de rThreat.  
**archivo:línea:** `src/pages/rthreat-bogota-colombia.astro:187-188`

### Drift 5 — Estadísticas de marketing ("5,000+ Amenazas", "98% Precisión", "Zero Falsos Positivos")
**actual:** cifras presentadas como métricas de rThreat: 5,000+ amenazas catalogadas, 98% precisión de detección, Zero falsos positivos  
**oficial:** Ninguna de estas cifras está publicada ni avalada en el sitio oficial de rThreat. Son claims editoriales sin respaldo verificado del vendor.  
**archivo:línea:** `src/pages/rthreat-bogota-colombia.astro:346-355`

### Drift 6 — Rol de John Kindervag
**actual:** No mencionado en el sitio (sin drift activo — solo para referencia futura si se añade)  
**oficial:** John Kindervag se unió como **Senior Vice President of Cybersecurity Strategy** (noviembre 2021), no como "advisor" simple. Es una distinción relevante si se cita el reconocimiento.  
**archivo:línea:** N/A (no mencionado actualmente en el sitio)

---

*Dossier elaborado con datos de rthreat.net verificados en vivo. Última verificación: junio 2026.*
