"""Apply Portuguese bulk translations to en/pt translation.json."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
TOOLS = Path(__file__).resolve().parent
sys.path.insert(0, str(TOOLS))
from _pt_bulk_map import PT_MAP as NEED_PT_TRANSLATIONS  # noqa: E402

NEED_PT = ROOT / "ai-docs/tools/_need_pt.json"
LOCALE = ROOT / "libraries/react-shared-libraries/src/translation/locales"
EN_PATH = LOCALE / "en" / "translation.json"
PT_PATH = LOCALE / "pt" / "translation.json"

# Correct truncated English harvested into _need_pt.json
EN_OVERRIDES: dict[str, str] = {
    "didnt_receive_email": "Didn't receive the email?",
    "api_auth_note_line3": (
        'create an OAuth App under the "Apps" tab. Your users will authorize your app via OAuth2,'
    ),
    "confirm_delete_tag": 'Are you sure you want to delete the tag "{{tagName}}"?',
    "tiktok_random_music_only_for_photos": (
        "This feature is available only for photos, it adds a random trending track from TikTok's commercial music library."
    ),
    "tiktok_restriction_upload_video": (
        'TikTok restriction: For upload-only video, TikTok does not accept a title or message. '
        'The content will default to "#Postiz" and you can edit it inside the TikTok app before publishing.'
    ),
}

FORCE_PT: dict[str, str] = {
    "agent": "Agente",
    "twenty_four_hours": "24 horas",
    "date_metrics": "Métricas de data",
    "am_pm": "AM:PM",
    "page_impressions": "Impressões da página",
    "media_views": "Visualizações de mídia",
    "posts_engagement": "Engajamento dos posts",
    "page_followers": "Seguidores da página",
    "install_cli_step": "Instale o CLI",
    "run_postiz_auth": "Execute: postiz auth:login",
    "install_postiz_skill": "Instale a skill do Postiz no seu agente de IA",
}

FORCE_EN: dict[str, str] = {
    "agent": "Agent",
    "twenty_four_hours": "24 hours",
    "date_metrics": "Date Metrics",
    "am_pm": "AM:PM",
    "page_impressions": "Page Impressions",
    "media_views": "Media Views",
    "posts_engagement": "Posts Engagement",
    "page_followers": "Page Followers",
    "install_cli_step": "Install the CLI",
    "run_postiz_auth": "Run: postiz auth:login",
    "install_postiz_skill": "Install the Postiz skill in your AI agent",
}


def _load_pt_map() -> dict[str, str]:
    pt_map = dict(NEED_PT_TRANSLATIONS)
    pt_map.update(FORCE_PT)
    return pt_map


def _need_en() -> dict[str, str]:
    pairs: list[list[str]] = json.loads(NEED_PT.read_text(encoding="utf-8"))
    en: dict[str, str] = {k: v for k, v in pairs}
    en.update(EN_OVERRIDES)
    return en


def main() -> None:
    pt_map = _load_pt_map()
    need_en = _need_en()

    en = json.loads(EN_PATH.read_text(encoding="utf-8"))
    pt = json.loads(PT_PATH.read_text(encoding="utf-8"))

    updated = 0
    for key, pt_val in pt_map.items():
        english = need_en.get(key) or FORCE_EN.get(key) or en.get(key)
        if english is not None and en.get(key) != english:
            en[key] = english
            updated += 1
        if pt.get(key) != pt_val:
            pt[key] = pt_val
            updated += 1

    for key, english in FORCE_EN.items():
        if key not in en:
            en[key] = english
            updated += 1
        if key in FORCE_PT and pt.get(key) != FORCE_PT[key]:
            pt[key] = FORCE_PT[key]
            updated += 1

    EN_PATH.write_text(
        json.dumps(en, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    PT_PATH.write_text(
        json.dumps(pt, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(f"keys_updated={updated}")

    verify_keys = [
        "email_notifications",
        "rotate_key",
        "open_wizard",
        "cli_and_skills",
        "shortlink_settings",
        "delete_account",
        "streak_started_today",
        "agent",
    ]
    for k in verify_keys:
        print(f"VERIFY {k}: {pt.get(k, '(missing)')}")


if __name__ == "__main__":
    main()
