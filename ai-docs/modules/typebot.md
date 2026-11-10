# typebot (shell MASTER)
Fontes: AGENTS.md, docker-compose.yml, docker-compose.master.yml, docker-compose.*.yml, deploy/*, apps/builder/**, apps/viewer/**, packages/embeds/js/src/components/LiteBadge.tsx, packages/embeds/js/src/components/icons/TypebotLogo.tsx, packages/forge/blocks/nocodb/src/index.ts, .github/workflows/deploy-partykit.yml, .github/workflows/deploy-workflows.yml, .github/workflows/auto-create-tags.yml
Atualizado: 2026-11-10

## Papel
Visual de referência do produto único MASTER (marca visível: Trajettu). Menu na mesma tela: Fluxos, Publicar agora, Agendar, WhatsApp. Postiz e WAHA ficam atrás; sem app/domínio próprio.

## AGENTS.md
Monorepo Nx/Bun; MASTER unificado (publishing interno). Ler STATE + `modules/publishing.md`.

## Compose
- Legado Typebot-only: `docker-compose.yml`
- **Produto unificado:** `docker-compose.master.yml` (Typebot + publishing + Temporal + WAHA)
- Easypanel: Compose `master`/`stack`; `HOSTNAME=0.0.0.0`; sem `ports`; `viewer` e `publishing` na rede externa `easypanel`. Domínios no ar: `master.trajettu.com` → `builder:3000`, `bot.trajettu.com` → `viewer:3000`, `pub.trajettu.com` → `publishing:5000`
- `ENCRYPTION_SECRET` no compose Easypanel: **exatamente 32 chars**
- Auth e-mail: Resend via SMTP (`SMTP_HOST=smtp.resend.com`, user `resend`, `SMTP_PORT=465`, `SMTP_SECURE=true`); `NEXT_PUBLIC_SMTP_FROM` + `ADMIN_EMAIL=contato@victorhamber.com`
- No Git, `deploy/docker-compose.easypanel.yml` guarda `SMTP_PASSWORD: COLOQUE_A_API_KEY_DO_RESEND`. A API key real fica só no Easypanel.
- Código no GitHub: `victorhamber/public` branch `main`
- CI de nuvem do Typebot (PartyKit, Fly.io, tag automática) só roda manualmente. Deploy do produto é o Easypanel.
- Deploy/cutover/smoke: `deploy/*.md`
