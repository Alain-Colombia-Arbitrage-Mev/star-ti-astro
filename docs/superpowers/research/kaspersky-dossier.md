# Kaspersky Business Product Line — Dossier Verificado en Vivo

Investigación realizada: 2026-06-23
Fuentes: kaspersky.com (páginas oficiales de producto), kaspersky-labs.com (datasheets), av-comparatives.org, av-test.org

---

## Línea de producto

### Kaspersky Next — 6 tiers oficiales vigentes

La línea se llama **Kaspersky Next** (reemplazó a Kaspersky Cloud Security Standard/Plus/Select).
Actualmente existen **seis** ediciones, NO cuatro. Los tiers XDR Optimum y MXDR Optimum se lanzaron en septiembre 2025.

| # | Nombre exacto oficial | Público objetivo | Disponibilidad |
|---|---|---|---|
| 1 | **Kaspersky Next EDR Foundations** | SMB, primeros pasos en seguridad, sin SOC | Online |
| 2 | **Kaspersky Next EDR Optimum** | Empresas medianas en crecimiento, sin SOC dedicado | Online |
| 3 | **Kaspersky Next XDR Optimum** | Equipos IT pequeños que buscan capacidades XDR sin complejidad | Online (lanzado sep 2025) |
| 4 | **Kaspersky Next MXDR Optimum** | Organizaciones que prefieren externalizar la gestión de amenazas | Contacto directo |
| 5 | **Kaspersky Next EDR Expert** | Equipos enterprise con analistas de seguridad propios | Contacto directo |
| 6 | **Kaspersky Next XDR Expert** | SOC enterprise avanzado, plataforma XDR completa | Contacto directo |

Fuentes:
- https://www.kaspersky.com/next (página oficial de la línea completa)
- https://www.kaspersky.com/next-xdr-optimum
- https://www.kaspersky.com/next-mxdr-optimum
- https://www.kaspersky.com/next-edr-foundations
- https://www.kaspersky.com/enterprise-security/endpoint-detection-response-edr (EDR Expert)
- https://www.kaspersky.com/enterprise-security/xdr (XDR Expert)
- Comunicado de prensa oficial: https://www.kaspersky.com/about/press-releases/introducing-kaspersky-next-xdr-optimum-cutting-edge-cybersecurity-designed-for-medium-sized-businesses

### Productos enterprise adicionales vigentes (fuera de la línea Next)

| Producto | Estado |
|---|---|
| **Kaspersky Anti Targeted Attack (KATA)** | Vigente; integrado con MDR y EDR Expert 8.0 |
| **Kaspersky Managed Detection and Response (MDR)** | Vigente como servicio standalone; también como MXDR Optimum dentro de Next |
| **Kaspersky Threat Intelligence** | Vigente (portal separado) |

Fuentes:
- https://www.kaspersky.com/enterprise-security/managed-detection-and-response
- https://support.kaspersky.com/MDR/en-us/196548.htm

---

## Módulos y capacidades

Los nombres técnicos oficiales confirmados (vigentes en 2025-2026):

| Módulo / Tecnología | Nombre oficial confirmado | Presente en tiers |
|---|---|---|
| **System Watcher** | System Watcher (anti-ransomware con rollback automático) | Todos los tiers |
| **Behavioral Detection** | Behavior Detection | Todos los tiers |
| **Exploit Prevention** | Exploit Prevention | Todos los tiers |
| **Host Intrusion Prevention** | Host Intrusion Prevention (HIPS) | Todos los tiers |
| **Adaptive Anomaly Control** | Adaptive Anomaly Control | EDR Optimum en adelante |
| **Patch Management** | Patch Management (dentro de Vulnerability & Patch Management) | EDR Optimum en adelante |
| **Encryption Management** | Encryption Management | EDR Optimum en adelante |
| **MDM** | Mobile Device Management (MDM) | Todos los tiers |
| **Cloud Sandbox** | Cloud Sandbox (sandboxing en la nube) | EDR Optimum en adelante |
| **HuMachine** | HuMachine Intelligence | Tecnología transversal; mencionada en marketing pero NO aparece como módulo nombrado en las páginas de producto actuales — el sitio oficial actual habla de "AI-enhanced components", "predictive algorithms, clustering, neural networks". El nombre HuMachine sigue siendo real y reconocible como marca, pero Kaspersky ha reducido su prominencia en favor de mensajes más genéricos de "AI + human expertise". |
| **Root Cause Analysis** | Root Cause Analysis (dentro de EDR) | EDR Foundations en adelante |
| **Threat Hunting** | Threat Hunting | XDR Optimum, MXDR Optimum, EDR Expert, XDR Expert |
| **Case Management** | Case Management | XDR Expert exclusivo |
| **Response Automation / Playbooks** | Response Automation / Playbooks | XDR Expert |
| **SIEM integrado** | SIEM (parte de XDR Expert; también integra con terceros) | XDR Expert |

Nota sobre EDR Expert: incluye sandbox embebido ("embedded analysis"), 1.900+ reglas de detección mantenidas por el SOC global de Kaspersky, y AI-enhanced components.

Nota sobre XDR Expert: unifica EPP + EDR + XDR + SIEM en una sola interfaz, con 300+ integraciones preconfiguradas, 2.700+ reglas de detección.

Fuentes:
- https://support.kaspersky.com/help/NextPro/1.0/en-us/101540.htm (tabla comparativa oficial de ediciones)
- https://www.kaspersky.com/enterprise-security/endpoint-detection-response-edr
- https://www.kaspersky.com/enterprise-security/xdr
- https://www.kaspersky.com/next

---

## Mensajes y diferenciadores oficiales

1. **"Cybersecurity that grows with your business"** — posicionamiento oficial de la línea Next como plataforma escalable de 6 niveles.
2. **AI + Human expertise** — el mensaje actual en kaspersky.com/next habla de "predictive algorithms, clustering, neural networks" combinados con experiencia humana (GReAT). HuMachine Intelligence es la marca de esta combinación; sigue vigente pero la prominencia en el sitio ha bajado.
3. **"Best-in-class endpoint protection proven by numerous independent tests"** — diferenciador recurrente en páginas de EDR Expert y XDR Expert.
4. **Escalabilidad sin fricción** — los primeros 4 tiers (Foundations, Optimum, XDR Optimum, MXDR Optimum) están posicionados para empresas sin SOC interno, con gestión mínima (~15 min/semana para los dos primeros).
5. **Kaspersky Next XDR Expert = "full-feature open XDR platform"** — único tier con playbooks de respuesta, case management y 300+ integraciones.
6. **MXDR Optimum** — "Managed cyber protection powered by AI", con monitoreo 24/7 por el SOC global; lanzado sep 2025 para mid-market que no quiere construir SOC propio.
7. **"Nearly 30 years of proven experience"** — mensaje de longevidad en páginas enterprise.

Fuentes:
- https://www.kaspersky.com/next
- https://www.kaspersky.com/enterprise-security/xdr
- https://www.kaspersky.com/enterprise-security/endpoint-detection-response-edr

---

## Reconocimientos vigentes

### AV-Comparatives (2025)
- **Kaspersky Premium**: Top Rated Product 2025; Gold Malware Protection 2025; Gold Lowest False Positives 2025; Silver ATP 2025; Bronze Real-World Protection 2025
- **Kaspersky Next EDR Expert**: EDR Detection Validation Certification 2025 (primer producto en la industria en pasar todos los tests del AV-Comparatives EDR Detection Validation Certification 2025)
- **Kaspersky EDR Expert**: Endpoint Prevention & Response Certified 2025; ATP Certified 2025
- **Kaspersky Endpoint Security**: Business Security Test 2025; Anti-Tampering Certified 2025; ATP Certified 2025

Fuente: https://www.av-comparatives.org/av-comparatives-awards-2024-for-kaspersky/ y https://www.kaspersky.com/about/awards

### AV-TEST (2024-2025)
- **Kaspersky Endpoint Security**: Best Advanced Protection 2025 (AV-TEST BEST Protection 2024); Best Usability 2025
- **Kaspersky Small Office Security**: Best Advanced Protection 2025; Best Usability 2025
- **Kaspersky Premium for Windows**: Best Usability 2025
- **Kaspersky Premium for Mac**: Best macOS Security 2025
- Total histórico: 64 premios Best de AV-TEST (29 consumer, 34 business, 1 innovación)

Fuentes: https://www.kaspersky.com/about/press-releases/kaspersky-wins-nine-av-test-best-awards-for-outstanding-cybersecurity-performance-in-2024 y https://www.av-test.org/en/news/av-test-awards-2024-for-kaspersky/

### SE Labs (2025-2026)
- **Kaspersky Premium for Windows**: AAA grade, 100% Total Accuracy Rating (TOP1) 2025-2026
- **Kaspersky Endpoint Security**: AAA grade, 100% Total Accuracy Rating (TOP1), SE Labs Winner Enterprise Endpoint 2025 (ranking continuo TOP1 desde Q3 2023 a Q3 2025)
- **Kaspersky Small Office Security**: SE Labs Winner Small Business Endpoint 2025; TOP1 continuo Q3 2023 – Q3 2025

Fuente: https://www.kaspersky.com/about/awards

### Rendimiento global 2025
- En 2025: 1er lugar en 90% de evaluaciones independientes; TOP3 en 94% (de 100 pruebas evaluadas)
- En 2024: 1er lugar en 91 de 95 pruebas; 97% de TOP3 finishes (12° año consecutivo liderando)

Fuente: https://www.kaspersky.com/about/press-releases/kaspersky-leads-independent-security-tests-in-2025-achieving-first-place-in-90-of-evaluations

### Gartner / Forrester
- No hay reconocimiento activo de Gartner Magic Quadrant o Forrester Wave vigente listado en kaspersky.com/about/awards. Las referencias a esos analistas en el sitio son históricas (2018). No confirmar estos reconocimientos en el sitio sin fuente verificada.

### MITRE ATT&CK
- La participación más reciente confirmada fue en la Ronda 2 (2019, APT29). Kaspersky NO participó en las evaluaciones Enterprise 2024 ni 2025 de MITRE ATT&CK (los participantes de 2025 fueron: Acronis, AhnLab, CrowdStrike, Cyberani, Cybereason, Cynet, ESET, Sophos, Trend Micro, WatchGuard, WithSecure).
- El sitio https://www.kaspersky.com/enterprise-security/mitre-attack existe pero hace referencia a resultados históricos.
- ADVERTENCIA: Mencionar "participación continua en MITRE ATT&CK Evaluations" en el sitio actual del repo es INCORRECTO para 2024/2025.

Fuente: https://evals.mitre.org/enterprise/er6 y búsqueda de resultados MITRE 2025.

### QKS Group SPARK Matrix 2025
- Kaspersky Next XDR Expert reconocido como **Leader en XDR** en el QKS Group 2025 SPARK Matrix.

Fuente: https://www.kaspersky.com/enterprise-security/xdr

---

## Términos a corregir en el sitio

### Drift detectado — alta prioridad

**1. Número de tiers: el repo afirma "4 tiers", el oficial tiene 6**

- `kaspersky.astro:189` — `"Como elegir entre los 4 tiers de Kaspersky Next"` → El número oficial vigente es **6 tiers** (añadidos EDR Expert y XDR Expert). Desde sep 2025 la línea tiene 6 niveles.
- `kaspersky.astro:190-193` — descripción de "cuatro niveles" → actualizar a seis.
- `kaspersky.astro:197` — caption SR-only: `"Comparativa de los cuatro niveles de Kaspersky Next: EDR Foundations, EDR Optimum, XDR Optimum y MXDR Optimum"` → falta EDR Expert y XDR Expert.

**2. Nombres de tiers: XDR Optimum y MXDR Optimum SÍ son los nombres oficiales vigentes (correcto en repo)**

Los tiers "XDR Optimum" y "MXDR Optimum" que usa el repo SON los nombres oficiales vigentes desde su lanzamiento en sep 2025. No hay drift en esos dos nombres. Sin embargo, son productos recientes (lanzados sep 2025) y el repo debe reflejar los 6 tiers, no solo 4.

**3. seo.ts: descripción del product jsonLd lista solo 4 tiers**

- `src/data/seo.ts:151` — `"Linea Kaspersky Next para empresas (EDR Foundations, EDR Optimum, XDR Optimum y MXDR Optimum)"` → actualizar a incluir también EDR Expert y XDR Expert, o aclarar que son los 4 tiers del segmento mid-market si la estrategia comercial de Starsolution no comercializa los tiers enterprise.

**4. MITRE ATT&CK — afirmación no verificable en producción**

- `kaspersky.astro:245` — `"participacion continua en MITRE ATT&CK Evaluations"` → Kaspersky NO participó en las evaluaciones 2024 ni 2025. Reemplazar por: `"reconocido en AV-Comparatives EDR Detection Validation Certification 2025 (primero en la industria)"` o simplemente eliminar la mención a MITRE para evitar imprecisión.

**5. "AV-Comparatives Strategic Leader 2024" — término no confirmado**

- `kaspersky.astro:245` — `"AV-Comparatives Strategic Leader 2024"` → Este nombre específico de award no fue confirmado en los resultados AV-Comparatives 2024. Los premios AV-Comparatives confirmados son: Top Rated Product, Gold Malware Protection, Gold Lowest False Positives, Silver ATP, Bronze Real-World Protection. Reemplazar por los nombres oficiales verificados.

**6. kaspersky.astro:613 — referencia a planes de generación anterior**

- `kaspersky.astro:613` — `"Recomendacion clara entre Standard, Plus y Select Cloud"` → estos son los nombres de la **línea anterior** (Kaspersky Cloud Security Standard / Plus / Select), ya reemplazada por Kaspersky Next. Actualizar a la nomenclatura Next.

**7. HuMachine — marca vigente pero menor prominencia**

- El nombre HuMachine Intelligence sigue siendo usado por Kaspersky y es correcto mencionarlo. Sin embargo, en el sitio oficial actual ya no es un titular de marketing de primer nivel; el énfasis está en "AI + human expertise". El repo lo usa correctamente en un contexto descriptivo; no es un error crítico, pero puede actualizarse si se quiere alineación exacta con el messaging actual.

### Sin drift detectado (nombres correctos)

- "Kaspersky Next" — correcto.
- "EDR Foundations", "EDR Optimum", "XDR Optimum", "MXDR Optimum" — todos nombres oficiales vigentes.
- "System Watcher" — nombre oficial confirmado.
- "Adaptive Anomaly Control" — nombre oficial confirmado.
- "Cloud Sandbox" — nombre oficial confirmado.
- "Patch Management" — nombre oficial confirmado.
- "Behavioral Detection" — nombre oficial confirmado.
- "Exploit Prevention" — nombre oficial confirmado.
- "MDM" / "Mobile Device Management" — oficial confirmado.
- "Kaspersky Anti Targeted Attack (KATA)" — vigente.
- "Kaspersky MDR" / "Managed Detection and Response" — vigente.
- "GReAT" (Global Research & Analysis Team) — vigente.
- "KSN" (Kaspersky Security Network) — vigente.
- "AV-TEST Top Product 2024" — confirmado (9 premios AV-TEST Best 2024).

---

*Dossier generado por investigación en vivo el 2026-06-23. Verificar periódicamente dado que la línea Next tuvo adiciones en sep 2025 y puede continuar evolucionando.*
