"""Force Portuguese for screenshot-priority UI keys."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
LOCALE = ROOT / "libraries/react-shared-libraries/src/translation/locales"

PRIORITY = {
    "agent": ("Agent", "Agente"),
    "twenty_four_hours": ("24 hours", "24 horas"),
    "date_metrics": ("Date Metrics", "Métricas de data"),
    "am_pm": ("AM:PM", "AM:PM"),
    "page_impressions": ("Page Impressions", "Impressões da página"),
    "media_views": ("Media views", "Visualizações de mídia"),
    "posts_engagement": ("Posts Engagement", "Engajamento dos posts"),
    "page_followers": ("Page followers", "Seguidores da página"),
    "impressions": ("Impressions", "Impressões"),
    "views": ("Views", "Visualizações"),
    "likes": ("Likes", "Curtidas"),
    "comments": ("Comments", "Comentários"),
    "shares": ("Shares", "Compartilhamentos"),
    "followers": ("Followers", "Seguidores"),
    "engagement": ("Engagement", "Engajamento"),
    "saves": ("Saves", "Salvos"),
    "retweets": ("Retweets", "Retweets"),
    "replies": ("Replies", "Respostas"),
    "email_notifications": ("Email Notifications", "Notificações por e-mail"),
    "success_emails": ("Success Emails", "E-mails de sucesso"),
    "success_emails_description": (
        "Receive email notifications when posts are published successfully",
        "Receba e-mail quando as publicações forem publicadas com sucesso",
    ),
    "failure_emails": ("Failure Emails", "E-mails de falha"),
    "failure_emails_description": (
        "Receive email notifications when posts fail to publish",
        "Receba e-mail quando as publicações falharem ao publicar",
    ),
    "streak_emails": ("Streak Reminder Emails", "E-mails de sequência"),
    "streak_emails_description": (
        "Receive email reminders when your posting streak is about to end",
        "Receba lembretes por e-mail quando sua sequência estiver perto de acabar",
    ),
    "shortlink_settings": ("Shortlink Settings", "Configurações de shortlink"),
    "shortlink_preference": ("Shortlink Preference", "Preferência de shortlink"),
    "shortlink_preference_description": (
        "Control how URLs in your posts are handled. Shortlinks provide click statistics",
        "Controla como as URLs nos posts são tratadas. Shortlinks dão estatísticas de clique",
    ),
    "shortlink_ask": ("Ask every time", "Perguntar sempre"),
    "shortlink_always": ("Always shortlink", "Sempre encurtar"),
    "shortlink_never": ("Never shortlink", "Nunca encurtar"),
    "delete_account": ("Delete Account", "Excluir conta"),
    "delete_your_account": ("Delete your account", "Excluir sua conta"),
    "delete_account_description": (
        "Your account, organizations and channels will be deleted permanently",
        "Sua conta, organizações e canais serão excluídos permanentemente",
    ),
    "rotate_key": ("Rotate Key", "Rotacionar chave"),
    "open_wizard": ("Open Wizard", "Abrir assistente"),
    "cli_and_skills": ("CLI & AI Skills", "CLI e skills de IA"),
    "cli_description": (
        "Use the Postiz CLI to automate posting from your terminal, or install the skill to let your AI agent schedule posts for you.",
        "Use o Postiz CLI para publicar pelo terminal, ou instale a skill para seu agente de IA agendar posts.",
    ),
    "locally": ("Locally", "Localmente"),
    "ci_remote_servers": ("CI / Remote servers", "CI / servidores remotos"),
    "install_the_cli": ("Install the CLI", "Instale o CLI"),
    "run_postiz_auth": ("Run: postiz auth:login", "Execute: postiz auth:login"),
    "install_postiz_skill": (
        "Install the Postiz skill for your AI agent",
        "Instale a skill do Postiz no seu agente de IA",
    ),
    "set_api_key_env": (
        "Set your API key as an environment variable",
        "Defina sua API key como variável de ambiente",
    ),
    "api_auth_note_line1": (
        "Use your API Key to automate your own account.",
        "Use sua API Key para automatizar sua própria conta.",
    ),
    "api_auth_note_line2": (
        "If you are building a product that schedules posts on behalf of other Postiz users,",
        "Se você está construindo um produto que agenda posts em nome de outros usuários do Postiz,",
    ),
    "api_auth_note_line3": (
        "create an OAuth App under the ",
        "crie um App OAuth na aba ",
    ),
    "api_auth_note_line4": (
        "and you will receive a pos_ prefixed token that works with the API, MCP, and CLI — just like an API Key.",
        "e você receberá um token com prefixo pos_ que funciona com a API, MCP e CLI — como uma API Key.",
    ),
    "streak_started_today": (
        "You started your streak today! Keep posting daily to maintain it.",
        "Você começou sua sequência hoje! Continue publicando todos os dias para mantê-la.",
    ),
}


def main() -> None:
    en_path = LOCALE / "en" / "translation.json"
    pt_path = LOCALE / "pt" / "translation.json"
    en = json.loads(en_path.read_text(encoding="utf-8"))
    pt = json.loads(pt_path.read_text(encoding="utf-8"))
    for key, (english, portuguese) in PRIORITY.items():
        en[key] = english
        pt[key] = portuguese
    en_path.write_text(
        json.dumps(en, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    pt_path.write_text(
        json.dumps(pt, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"forced={len(PRIORITY)}")


if __name__ == "__main__":
    main()
