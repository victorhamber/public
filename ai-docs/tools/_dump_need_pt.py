import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
FRONT = ROOT / "apps/frontend/src"
LOCALE = ROOT / "libraries/react-shared-libraries/src/translation/locales"
PAT = re.compile(
    r"""t\(\s*['\"]([a-z0-9_]+)['\"]\s*,\s*['\"]([^'\"]{1,200})['\"]""",
    re.I,
)
found: dict[str, str] = {}
for p in FRONT.rglob("*.tsx"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    for m in PAT.finditer(text):
        found.setdefault(m.group(1), m.group(2))
pt = json.loads((LOCALE / "pt/translation.json").read_text(encoding="utf-8"))
still = [(k, v) for k, v in sorted(found.items()) if pt.get(k) == v]
out = ROOT / "ai-docs/tools/_need_pt.json"
out.write_text(json.dumps(still, ensure_ascii=False, indent=2), encoding="utf-8")
print(len(still), "->", out)
