# AnyDesk — Dossier Técnico Verificado en Vivo
**Fecha de investigación:** 2026-06-23  
**Fuentes primarias:** anydesk.com, support.anydesk.com, capterra.com  
**Nota:** anydesk.com devuelve 403 a scrapers directos; los datos se verificaron via support.anydesk.com (sin bloqueo), WebSearch contra anydesk.com y fuentes de precios de terceros verificados (costbench.com, g2.com).

---

## Línea de producto

AnyDesk comercializa **cuatro planes vigentes** bajo una estructura renombrada en 2024 que reemplazó la nomenclatura anterior (Professional / Power / Ultimate):

| Plan | Usuarios | Sesiones salientes | Dispositivos gestionados (Acceso no supervisado) | On-Premises |
|---|---|---|---|---|
| **Solo** | 1 | 1 | hasta 100 | No |
| **Standard** | hasta 20 | 1 (ampliable) | hasta 500 | No |
| **Advanced** | hasta 100 | 2 (ampliable a 50) | hasta 1.000 | No |
| **Ultimate** | Ilimitado / personalizable | Configurable | Ilimitado | Sí (AnyDesk On-Premises) |

**Precios de lista (USD, facturación anual, referencia costbench.com / g2.com, jun 2026):**
- Solo: ~$14.90/mes  
- Standard: ~$49.90/mes ($39.92 en anual)  
- Advanced: ~$111.90/mes ($89.52 en anual)  
- Ultimate: precio personalizado — contactar ventas  

La opción on-premises se denomina **AnyDesk On-Premises** y es exclusiva del plan **Ultimate**.

**Fuentes:**  
- https://support.anydesk.com/docs/anydesk-licenses  
- https://anydesk.com/en/pricing  
- https://costbench.com/software/remote-desktop/anydesk/  
- https://order.anydesk.com/product/standard  

---

## Módulos y capacidades

Capacidades confirmadas mediante support.anydesk.com y anydesk.com/en/solutions:

**Acceso remoto y sesiones**
- Acceso interactivo (usuario presente): ilimitado en todos los planes de pago.
- Acceso no supervisado (Unattended Access): mediante contraseña permanente por dispositivo; disponible desde Solo.
- Número de sesiones salientes simultáneas: limitado por plan (1 en Solo/Standard base; 2 en Advanced base; ampliable vía add-ons).
- Sesión máxima: no hay límite temporal oficial por sesión en planes de pago (el repo indica "8 horas" — no confirmado en documentación oficial).

**Gestión de dispositivos y equipos**
- Libreta de Direcciones (Address Book): gestión centralizada de dispositivos, grupos y etiquetas.
- Grupos de usuarios y permisos granulares: disponible en Standard y superiores.
- Custom Client Generator: generación de clientes personalizados (branding), disponible en Standard y superiores.
- Mobile Device Management incluido: desde Standard.

**Seguridad**
- Cifrado TLS 1.2 + RSA 2048 (intercambio de claves): confirmado oficialmente.
- Perfect Forward Secrecy: confirmado.
- Listas de Control de Acceso (ACL) por dispositivo: confirmado.
- 2FA (TOTP): disponible; la documentación no restringe explícitamente a "solo Enterprise/Ultimate" — disponible para cuentas my.anydesk.com.
- SSO con SAML 2.0: disponible en Advanced y Ultimate.
- AnyDesk On-Premises (despliegue en infraestructura propia): **exclusivo del plan Ultimate**.

**Despliegue masivo**
- MSI/GPO deployment para Windows: confirmado, disponible para planes de pago.
- Clientes personalizados (Custom Client): disponible en Standard y superiores.
- Capacidad on-premises: hasta 10.000 dispositivos simultáneos (según documentación de soporte AnyDesk On-Premises).

**Características de sesión**
- Transferencia de archivos: confirmada (el repo dice "hasta 5 GB" — este límite específico no fue confirmado en documentación oficial; AnyDesk no publica un cap explícito en sus docs públicos).
- Grabación de sesión en MP4: confirmada.
- Chat de texto integrado: confirmado.
- Anotaciones en pantalla: confirmado.
- Control compartido (dual control): confirmado.
- Reinicio remoto con reconexión automática: confirmado.

**Plataformas soportadas**
Windows, macOS, Linux (Ubuntu, Debian, RPM), Android, iOS, Raspberry Pi, FreeBSD. Confirmado en anydesk.com/downloads.

**Nota sobre el incidente de seguridad (contexto editorial):**  
En febrero 2024 AnyDesk divulgó un breach a sus sistemas de producción (diciembre 2023) con robo de código fuente y certificado de firma de código. AnyDesk revocó el certificado comprometido y emitió parches. CVE-2024-52940 (versiones ≤8.1.0, exposición de IP) y CVE-2024-13754 (escalación de privilegios local) fueron divulgados en 2024-2025. El sitio Starsolution no menciona esto; no es un drift de producto pero es relevante para el lenguaje de "seguridad bancaria" sin matices.

**Fuentes:**  
- https://support.anydesk.com/docs/anydesk-licenses  
- https://support.anydesk.com/docs/on-premises  
- https://anydesk.com/en/solutions/on-premises  

---

## Mensajes y diferenciadores oficiales

Verificados en anydesk.com/en/performance y anydesk.com (homepage), accesibles via WebSearch:

1. **Codec DeskRT (propietario):** Motor de compresión y transmisión de gráficos diseñado específicamente para interfaces de usuario de escritorio. Diferenciador central declarado por AnyDesk.
2. **Latencia < 16 ms:** Cifra oficial publicada por AnyDesk como benchmark en condiciones óptimas.
3. **60 FPS:** Frame rate máximo declarado oficialmente.
4. **100 KB/s de ancho de banda mínimo:** Cifra oficial declarada para sesión funcional.
5. **Tamaño del cliente: 3.7 MB** (On-Premises) — la documentación de soporte cita 3.7 MB para el cliente on-premises. El sitio afirma "8 MB instalado".
6. **Erlang/OTP backend:** Confirmado en documentación de on-premises como base del servidor para alta concurrencia y tolerancia a fallos. El "99.999% uptime garantizado" que cita el repo **no está en documentación oficial pública** — AnyDesk no publica ese SLA para todos los planes; el SLA aplica a Solo/Standard/Advanced con objetivos específicos por nivel.
7. **"El escritorio remoto más rápido del mundo":** Claim de marketing utilizado por AnyDesk en materiales propios (anydesk.com/en).
8. **Sin necesidad de abrir puertos / NAT traversal automático vía puerto 443:** Confirmado.
9. **DeskRT v2.1:** La versión específica "v2.1" que aparece en el repo **no fue confirmada en documentación oficial pública**. AnyDesk no versiona públicamente el codec en su documentación.

**Fuentes:**  
- https://anydesk.com/en/performance (bloqueado por 403, verificado via WebSearch)  
- https://support.anydesk.com/docs/on-premises  
- https://anydesk.com/en/sla  

---

## Reconocimientos vigentes

**Confirmados:**
- **Capterra Shortlist 2025** — categorías "Remote Desktop" y "Remote Support" (capterra.com, verificado jun 2026). Rating global: 4.6/5 sobre 1.787 reseñas verificadas.
- **SoftwareReviews Data Quadrant Award 2024** — categoría Remote Support (softwarereviews.com, verificado en búsqueda jun 2026).
- **New York Yankees Spring Training Partner** — AnyDesk es "Proud Partner" del Spring Training de los New York Yankees (anydesk.com/en/homeplate, vigente 2024-2025).

**No confirmados / no verificados:**
- No se encontraron badges G2 Leader o High Performer específicos de 2024-2025 para AnyDesk en las fuentes accesibles. AnyDesk sí tiene perfil en G2 con reseñas pero los badges no fueron verificables directamente.
- El repo no menciona reconocimientos, por lo que no hay drift en este punto.

**Fuentes:**  
- https://www.capterra.com/p/149595/AnyDesk/  
- https://www.softwarereviews.com/awards/data-quadrant-awards-2024-remote-support  
- https://anydesk.com/en/homeplate  

---

## Términos a corregir en el sitio

### Drift 1 — Nombres de planes (CRÍTICO)
**actual →** `Professional` / `Power` / `Ultimate` (nomenclatura usada en FAQ, línea 624-627 de anydesk.astro y línea 446 de seo.ts)  
**oficial →** `Solo` / `Standard` / `Advanced` / `Ultimate` (nomenclatura vigente 2024-2026)  
**archivo:línea:**  
- `src/pages/anydesk.astro:624` — `<li><strong>AnyDesk Professional:</strong> EUR10.90/mes...`  
- `src/pages/anydesk.astro:625` — `<li><strong>AnyDesk Power:</strong> EUR20.90/mes...`  
- `src/pages/anydesk.astro:626` — `<li><strong>AnyDesk Ultimate:</strong> EUR52.90/mes...`  
- `src/data/seo.ts:446` — `Los planes van desde Professional (EUR 10.90/mes) hasta Power (EUR 20.90/mes) y Ultimate (EUR 52.90/mes).`  

**Corrección sugerida (lenguaje neutro, sin precios fijos):**  
> "El uso comercial requiere licencia de pago. AnyDesk ofrece cuatro planes: Solo, Standard, Advanced y Ultimate (on-premises). Para pricing actualizado, consulte anydesk.com/en/pricing o contacte a Starsolution."

---

### Drift 2 — Precios en EUR desactualizados (CRÍTICO)
**actual →** Professional EUR 10.90/mes · Power EUR 20.90/mes · Ultimate EUR 52.90/mes  
**oficial →** Estructura de precios en USD vigente (jun 2026): Solo ~$14.90 · Standard ~$49.90 · Advanced ~$111.90 · Ultimate: cotización. Los montos EUR citados corresponden a una versión anterior de la tabla de precios (posiblemente 2022-2023).  
**archivo:línea:**  
- `src/pages/anydesk.astro:624-627`  
- `src/data/seo.ts:446`  

**Recomendación:** Eliminar precios hardcoded; redirigir a anydesk.com/en/pricing o a contacto Starsolution.

---

### Drift 3 — "DeskRT v2.1" (versión del codec no verificable)
**actual →** `Codec: DeskRT v2.1` (mostrado en el panel de "Rendimiento en Vivo", anydesk.astro línea 171)  
**oficial →** AnyDesk no publica versiones del codec DeskRT en documentación pública. "DeskRT" sin versión es el término oficial.  
**archivo:línea:** `src/pages/anydesk.astro:171`  

**Corrección sugerida:** Cambiar a `Codec: DeskRT` (sin número de versión).

---

### Drift 4 — "99.999% uptime garantizado" (claim no respaldado públicamente)
**actual →** "Backend construido en Erlang/OTP [...] 99.999% uptime garantizado." (`anydesk.astro:223`)  
**oficial →** AnyDesk menciona Erlang/OTP para su arquitectura de servidor, pero el SLA publicado (anydesk.com/en/sla) aplica a planes Solo/Standard/Advanced con objetivos específicos por nivel, no un 99.999% universal. El "five nines" no aparece en documentación oficial pública como guarantee.  
**archivo:línea:** `src/pages/anydesk.astro:223`  

**Corrección sugerida:** "Alta disponibilidad respaldada por Erlang/OTP" o citar el SLA aplicable al plan correspondiente.

---

### Drift 5 — "AnyDesk Enterprise" en JSON-LD (nombre de producto incorrecto)
**actual →** `product('AnyDesk Enterprise', ...)` (`src/data/seo.ts:444`)  
**oficial →** El plan de mayor nivel se llama "Ultimate", no "Enterprise". "AnyDesk Enterprise" era una denominación anterior. El plan on-premises dentro de Ultimate se llama "AnyDesk On-Premises".  
**archivo:línea:** `src/data/seo.ts:444`  

**Corrección sugerida:** Cambiar a `product('AnyDesk', ...)` o `product('AnyDesk Ultimate', ...)` según el contexto del JSON-LD.

---

### Sin drift detectado — Las siguientes afirmaciones del sitio están confirmadas oficialmente:
- Latencia < 16 ms: confirmada.
- 60 FPS: confirmado.
- 100 KB/s ancho de banda mínimo: confirmado.
- Cifrado TLS 1.2 + RSA 2048 + Perfect Forward Secrecy: confirmados.
- ACL (Listas de Control de Acceso): confirmadas.
- 2FA con TOTP: confirmado.
- SSO con SAML 2.0 en planes avanzados: confirmado.
- Acceso no supervisado con contraseña permanente: confirmado.
- NAT traversal automático / sin apertura de puertos: confirmado.
- Multiplataforma (Windows, macOS, Linux, Android, iOS, Raspberry Pi): confirmado.
- Arquitectura Erlang/OTP del servidor: confirmada.
- Grabación de sesión en MP4: confirmada.
- Custom Client Generator desde Standard: confirmado.
- On-Premises exclusivo del plan Ultimate: confirmado.
- ID de AnyDesk de 9 dígitos: confirmado como mecanismo de conexión.

---

*Dossier generado por Claude Code — investigación en vivo. No adivinar: lo no confirmado está explícitamente marcado como tal.*
