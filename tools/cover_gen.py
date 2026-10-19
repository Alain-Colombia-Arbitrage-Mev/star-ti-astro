# Portadas de blog/OG 1200x630 estilo ciberseguridad: foto tenue + red de nodos + icono con brillo + titulo.
# Uso: python3 cover_gen.py <repo> <covers.json> <salida_dir> [ids...]
import sys, json, html, re
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT = Path(sys.argv[1]); ITEMS = json.loads(Path(sys.argv[2]).read_text()); OUT = Path(sys.argv[3]).resolve(); OUT.mkdir(parents=True, exist_ok=True)
only = set(sys.argv[4:])
P = lambda rel: (ROOT / 'public' / rel).as_uri()
hl = lambda t: re.sub(r'\*(.+?)\*', r'<em>\1</em>', html.escape(t))
ICONS = {  # trazos 24x24 (estilo lucide)
 'shield': '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z"/><path d="m9 12 2 2 4-4"/>',
 'mail': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/><rect x="14" y="13" width="7" height="6" rx="1" fill="#0a0f1a"/><path d="M15.5 13v-1.5a2 2 0 0 1 4 0V13"/>',
 'iso': '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z"/><path d="M9 9h6M9 12h6M9 15h4"/>',
 'terminal': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M12 15h5"/>',
 'bank': '<path d="M3 10 12 4l9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
 'tag': '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
 'scale': '<path d="M12 3v18M5 21h14M5 7h14"/><path d="m5 7-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z"/>',
}
CSS = f'''@font-face{{font-family:SG;src:url("{P('fonts/space-grotesk-latin.woff2')}")}}@font-face{{font-family:SG;src:url("{P('fonts/space-grotesk-latin-ext.woff2')}")}}
@font-face{{font-family:IS;src:url("{P('fonts/instrument-sans-latin.woff2')}")}}@font-face{{font-family:IS;src:url("{P('fonts/instrument-sans-latin-ext.woff2')}")}}
*{{margin:0;box-sizing:border-box}}body{{width:1200px;height:630px;overflow:hidden;position:relative;background:#070b14;color:#fff;font-family:IS,sans-serif}}
em{{font-style:normal;color:#ff3b42}}
.photo{{position:absolute;inset:0;background-size:cover;background-position:center;filter:saturate(.5) contrast(1.15) brightness(.8)}}
.shade{{position:absolute;inset:0;background:linear-gradient(90deg,#070b14 0%,rgba(7,11,20,.96) 38%,rgba(7,11,20,.7) 62%,rgba(7,11,20,.35) 100%)}}
.red{{position:absolute;inset:0;background:radial-gradient(circle at 80% 45%,rgba(237,28,36,.35),transparent 45%)}}
.grid{{position:absolute;inset:0;opacity:.07;background-image:linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px);background-size:48px 48px}}
.bar{{position:absolute;left:0;top:0;bottom:0;width:10px;background:linear-gradient(#ff3b42,#b3121a)}}
.left{{position:absolute;left:72px;top:64px;width:640px}}
.tag{{display:inline-flex;align-items:center;gap:10px;background:rgba(237,28,36,.15);border:1px solid rgba(255,59,66,.6);color:#ff6b70;font-weight:700;font-size:20px;letter-spacing:.12em;text-transform:uppercase;padding:8px 18px;border-radius:999px}}
.tag i{{width:8px;height:8px;border-radius:50%;background:#ff3b42;box-shadow:0 0 12px #ff3b42}}
h1{{font-family:SG,sans-serif;font-size:64px;line-height:1.02;letter-spacing:-.03em;margin-top:26px}}
p.sub{{font-size:26px;line-height:1.35;color:#b8c2d3;margin-top:22px;max-width:600px}}
.foot{{position:absolute;left:72px;right:72px;bottom:44px;display:flex;align-items:center;justify-content:space-between}}
.brand{{display:flex;align-items:center;gap:14px;font-family:SG;font-weight:700;font-size:26px}}.brand img{{height:48px;background:#fff;border-radius:12px;padding:4px}}
.cert{{display:flex;align-items:center;gap:12px;font-size:19px;color:#cbd5e1}}.cert img{{height:52px;background:#fff;border-radius:50%;padding:3px}}
.vendor{{display:inline-block;margin-top:30px;background:#fff;border-radius:14px;padding:10px 16px}}.vendor img{{height:44px;display:block}}
.orb{{position:absolute;right:120px;top:120px;width:330px;height:330px}}
.ring{{position:absolute;inset:0;border-radius:50%;border:2px solid rgba(255,59,66,.55);box-shadow:0 0 60px rgba(237,28,36,.45),inset 0 0 60px rgba(237,28,36,.25)}}
.ring.r2{{inset:-38px;border:1px dashed rgba(255,255,255,.25);box-shadow:none}}
.ring.r3{{inset:-80px;border:1px solid rgba(255,255,255,.08);box-shadow:none}}
.core{{position:absolute;inset:40px;border-radius:50%;background:radial-gradient(circle,rgba(237,28,36,.35),rgba(7,11,20,.85) 70%);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(2px)}}
.core svg{{width:150px;height:150px;stroke:#fff;fill:none;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 14px rgba(255,59,66,.9))}}
.node{{position:absolute;width:12px;height:12px;border-radius:50%;background:#ff3b42;box-shadow:0 0 14px #ff3b42}}
'''
NET = '''<svg style="position:absolute;inset:0" width="1200" height="630"><g stroke="rgba(255,90,96,.35)" stroke-width="1.2" fill="none">
<path d="M760 80 L900 150 L1080 90 L1150 210"/><path d="M820 560 L940 470 L1110 540 L1180 420"/><path d="M700 330 L780 280 M1100 330 L1190 300"/></g>
<g fill="#ff5a60">''' + ''.join(f'<circle cx="{x}" cy="{y}" r="4"/>' for x,y in [(760,80),(900,150),(1080,90),(1150,210),(820,560),(940,470),(1110,540),(1180,420),(700,330),(780,280),(1100,330),(1190,300)]) + '</g></svg>'
def page(c):
    vendor = f'<div class="vendor"><img src="{P(c["vendor"])}"></div>' if c.get('vendor') else ''
    return f'''<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body>
<div class="photo" style="background-image:url('{P(c['photo'])}')"></div><div class="shade"></div><div class="red"></div><div class="grid"></div>{NET}<div class="bar"></div>
<div class="orb"><div class="ring r3"></div><div class="ring r2"></div><div class="ring"></div><div class="core"><svg viewBox="0 0 24 24">{ICONS[c['icon']]}</svg></div>
<span class="node" style="left:-44px;top:150px"></span><span class="node" style="right:-6px;top:22px"></span><span class="node" style="right:40px;bottom:-30px"></span></div>
<div class="left"><span class="tag"><i></i>{html.escape(c['tag'])}</span><h1 style="font-size:{c.get('fs',64)}px">{hl(c['title'])}</h1><p class="sub">{html.escape(c['sub'])}</p>{vendor}</div>
<div class="foot"><div class="brand"><img src="{P('logo.png')}">Star Solutions TI</div><div class="cert"><img src="{P('certificados/sello-iso-27001-sgs.webp')}">ISO/IEC 27001:2022 · SGS · star-ti.com</div></div>
</body></html>'''
with sync_playwright() as pw:
    b = pw.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome'); pg = b.new_page(viewport={'width':1200,'height':630})
    for c in ITEMS:
        if only and c['id'] not in only: continue
        tmp = OUT / '_tmp.html'; tmp.write_text(page(c)); pg.goto(tmp.as_uri()); pg.wait_for_timeout(500)
        pg.screenshot(path=str(OUT / f"{c['id']}.jpg"), type='jpeg', quality=88)
    b.close()
print('ok')
