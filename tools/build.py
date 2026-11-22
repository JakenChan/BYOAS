"""Bundle the game into a single, self-contained HTML file (no server needed).
Usage:  python tools/build.py   ->  writes  ../BYOA-by-Jaken.html  (next to the ashen-queen folder)"""
import re, os
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
html = open(os.path.join(root, 'index.html'), encoding='utf-8').read()

def css(m):
    return '<style>\n' + open(os.path.join(root, m.group(1)), encoding='utf-8').read() + '\n</style>'
html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)

def js(m):
    code = open(os.path.join(root, m.group(1)), encoding='utf-8').read().replace('</script>', '<\\/script>')
    return '<script>\n' + code + '\n</script>'
html = re.sub(r'<script src="([^"]+)"></script>', js, html)
# single-file build: inline the favicon, drop the manifest link (it needs a server)
import base64
icon = base64.b64encode(open(os.path.join(root, 'icon.svg'), 'rb').read()).decode()
html = html.replace('<link rel="icon" href="icon.svg" type="image/svg+xml">', '<link rel="icon" href="data:image/svg+xml;base64,' + icon + '" type="image/svg+xml">')
html = html.replace('<link rel="manifest" href="manifest.webmanifest">', '')

for out in (os.path.abspath(os.path.join(root, 'BYOA-by-Jaken.html')), os.path.abspath(os.path.join(root, '..', 'BYOA-by-Jaken.html'))):
    open(out, 'w', encoding='utf-8').write(html)
    print('wrote', out, round(len(html) / 1024), 'KB')
