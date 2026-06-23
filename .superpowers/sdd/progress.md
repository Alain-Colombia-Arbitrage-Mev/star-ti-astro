# Progreso SDD — Contenido/SEO/GEO sitio completo

Rama: feat/contenido-seo-geo-bitdefender-piloto
Estándar: docs/superpowers/standards/brand-page-standard.md
Plan piloto: docs/superpowers/plans/2026-06-23-piloto-bitdefender-estandar-marca.md
Plan réplica: docs/superpowers/plans/2026-06-23-replica-f1-f3-sitio-completo.md

## F0 piloto — COMPLETO
- [x] Bitdefender (dossier a11094a, contenido 0665c2d, seo 110d5df, fix af010eb)

## F1/F2 marcas partner — COMPLETO
- [x] Kaspersky (dossier + content 4078718) — eliminó claim falso MITRE, "Strategic Leader", 4→6 tiers
- [x] Hornetsecurity (dossier + content 69f4117) — corrigió tabla de planes invertida, quitó precios USD no oficiales

## F2 marcas neutras
- [x] proofpoint (b3992cb), netwrix (45b1bae), stellar-cyber (8c96cb7), sealpath (84f51dc) — lote B1-B4 COMPLETO
- [x] fix central llms: partners oficiales vs resto (9d75782)
- [x] vicarius (2bc7df5), enthec (a72dfdb), black-duck (37ad534), soti-mdm (4994c60) — lote B5-B8 COMPLETO
- [ ] rthreat-bogota-colombia, teamviewer, anydesk, brother (lote C1-C4)

## Concerns para revisión final
- vicarius: métrica "70%" en integraciones sin fuente (no en dossier).
- soti-mdm: claims "Seguridad Nivel Militar / FIPS 140-2" no verificados contra dossier.
- stellar-cyber: "Casos de Éxito" con métricas ilustrativas (no oficiales).

## PENDIENTE F3 servicios/home/regional
- [ ] antivirus-empresas (hub, depende de 3 dossiers antivirus), hacking-etico, iso27001, dlp, cableado, equipos-computo, home, venezuela, miami

## Nota de calidad detectada
- llms-full.txt línea ~527: precios SOTI (USD 4-6 Essential, etc.) — verificar al hacer soti-mdm.
- Tras terminar: revisión whole-branch + finishing-a-development-branch.
