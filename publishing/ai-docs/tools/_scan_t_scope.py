"""Find t('...') calls in a component scope without const t = useT()."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path("apps/frontend/src")
CALL = re.compile(r"""\bt\(\s*['"]""")
USET = re.compile(r"const\s+t\s*=\s*useT\s*\(")


def scopes(text: str) -> list[tuple[int, int, str]]:
    """Return (start, end, name) for top-level const/function components."""
    out: list[tuple[int, int, str]] = []
    for m in re.finditer(
        r"(?:export\s+)?(?:const|function)\s+(\w+)\s*(?:=\s*(?:async\s*)?\(|\()",
        text,
    ):
        name = m.group(1)
        brace = text.find("{", m.start())
        if brace < 0:
            continue
        depth = 0
        j = brace
        while j < len(text):
            c = text[j]
            if c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    out.append((brace, j + 1, name))
                    break
            j += 1
    return out


def main() -> None:
    bad: list[str] = []
    for path in ROOT.rglob("*.tsx"):
        text = path.read_text(encoding="utf-8")
        if "useT" not in text and not CALL.search(text):
            continue
        for start, end, name in scopes(text):
            body = text[start:end]
            if not CALL.search(body):
                continue
            if USET.search(body):
                continue
            # nested arrow may use outer t — only flag if outer also missing
            line = text.count("\n", 0, start) + 1
            bad.append(f"{path}:{line} {name}")
    for row in bad:
        print(row)
    print(f"TOTAL {len(bad)}")


if __name__ == "__main__":
    main()
