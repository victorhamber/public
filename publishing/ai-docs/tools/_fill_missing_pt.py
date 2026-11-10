# Harvest t('key','English') defaults missing from locale JSON and fill PT/EN.
from __future__ import annotations

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

# Manual PT for harvested English defaults (and a few analytics API labels).
PT_MAP: dict[str, str] = {
    "email_notifications": "Notificações por e-mail",
    "success_emails": "E-mails de sucesso",
    "success_emails_description": (
        "Receba e-mail quando as publicações forem publicadas com sucesso"
    ),
    "failure_emails": "E-mails de falha",
    "failure_emails_description": (
        "Receba e-mail quando as publicações falharem ao publicar"
    ),
    "streak_emails": "E-mails de sequência",
    "streak_emails_description": (
        "Receba lembretes por e-mail quando sua sequência estiver perto de acabar"
    ),
    "shortlink_settings": "Configurações de shortlink",
    "shortlink_preference": "Preferência de shortlink",
    "shortlink_preference_description": (
        "Controla como as URLs nos posts são tratadas. Shortlinks dão estatísticas de clique"
    ),
    "ask_every_time": "Perguntar sempre",
    "always_shortlink": "Sempre encurtar",
    "never_shortlink": "Nunca encurtar",
    "delete_account": "Excluir conta",
    "delete_your_account": "Excluir sua conta",
    "delete_account_description": (
        "Sua conta, organizações e canais serão excluídos permanentemente"
    ),
    "rotate_key": "Rotacionar chave",
    "open_wizard": "Abrir assistente",
    "cli_and_skills": "CLI e skills de IA",
    "cli_and_skills_description": (
        "Use o Postiz CLI para publicar pelo terminal, ou instale a skill para "
        "seu agente de IA agendar posts"
    ),
    "locally": "Localmente",
    "ci_remote_servers": "CI / servidores remotos",
    "install_the_cli": "Instale o CLI",
    "agent": "Agente",
    "analytics": "Análises",
    "loading": "Carregando...",
    "twenty_four_hours": "24 horas",
    "post_analytics": "Análises do post",
    "use_api_key_automate": (
        "Use sua API Key para automatizar sua própria conta. Se você está "
        "construindo um produto que agenda posts em nome de outros usuários "
        "do Postiz, crie um App OAuth na aba Apps."
    ),
    "api_key": "Chave de API",
}

# Extra keys not always harvested with simple regex
EXTRA_EN = {
    "ask_every_time": "Ask every time",
    "always_shortlink": "Always shortlink",
    "never_shortlink": "Never shortlink",
    "delete_your_account": "Delete your account",
    "delete_account_description": (
        "Your account, organizations and channels will be deleted permanently"
    ),
    "cli_and_skills_description": (
        "Use the Postiz CLI to automate posting from your terminal, or install "
        "the skill to let your AI agent schedule posts for you."
    ),
    "locally": "Locally",
    "ci_remote_servers": "CI / Remote servers",
    "install_the_cli": "Install the CLI",
    "agent": "Agent",
    "twenty_four_hours": "24 hours",
    "use_api_key_automate": (
        "Use your API Key to automate your own account. If you are building a "
        "product that schedules posts on behalf of other Postiz users, create "
        "an OAuth App under the \"Apps\" tab."
    ),
}


def harvest() -> dict[str, str]:
    found: dict[str, str] = {}
    for path in FRONT.rglob("*.tsx"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        for m in PAT.finditer(text):
            found.setdefault(m.group(1), m.group(2))
    return found


def translate_en(text: str) -> str:
    # Fallback: keep English if no manual map; caller should prefer PT_MAP.
    return text


def main() -> None:
    harvested = harvest()
    harvested.update(EXTRA_EN)

    en_path = LOCALE / "en" / "translation.json"
    pt_path = LOCALE / "pt" / "translation.json"
    en = json.loads(en_path.read_text(encoding="utf-8"))
    pt = json.loads(pt_path.read_text(encoding="utf-8"))

    added_en = 0
    added_pt = 0
    still_en = []

    for key, english in sorted(harvested.items()):
        if key not in en:
            en[key] = english
            added_en += 1
        if key not in pt:
            pt[key] = PT_MAP.get(key) or english
            added_pt += 1
            if key not in PT_MAP:
                still_en.append(key)
        elif pt.get(key) == en.get(key) == english and key in PT_MAP:
            pt[key] = PT_MAP[key]

    # Force-update known settings keys even if already present in English
    for key, val in PT_MAP.items():
        if key in harvested or key in EXTRA_EN or key in en or key in pt:
            en.setdefault(key, EXTRA_EN.get(key) or harvested.get(key) or val)
            pt[key] = val

    en_path.write_text(
        json.dumps(en, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    pt_path.write_text(
        json.dumps(pt, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"harvested={len(harvested)} added_en={added_en} added_pt={added_pt}")
    print(f"still_english_fallback={len(still_en)}")
    for k in still_en[:60]:
        print("NEED_PT", k, "=>", harvested[k])


if __name__ == "__main__":
    main()
