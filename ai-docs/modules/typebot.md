# typebot (shell MASTER)
Fontes: AGENTS.md, docker-compose.yml, docker-compose.master.yml, docker-compose.*.yml, deploy/*, apps/builder/**, apps/viewer/**, packages/embeds/js/src/components/LiteBadge.tsx, packages/embeds/js/src/components/icons/TypebotLogo.tsx, packages/forge/blocks/nocodb/src/index.ts
Atualizado: 2026-11-10

## Papel
Visual de referência do produto único MASTER (marca visível: Trajettu). Menu na mesma tela: Fluxos, Publicar agora, Agendar, WhatsApp. Postiz e WAHA ficam atrás; sem app/domínio próprio.

## AGENTS.md
Monorepo Nx/Bun; MASTER unificado (publishing interno). Ler STATE + `modules/publishing.md`.

## Compose
- Legado Typebot-only: `docker-compose.yml`
- **Produto unificado:** `docker-compose.master.yml` (Typebot + publishing + Temporal + WAHA)
- Easypanel: Compose `master`/`stack` (`builder`/`viewer`); `HOSTNAME=0.0.0.0`; sem `ports`; domínio Traefik → `builder:3000` (como deskcomm)
- `ENCRYPTION_SECRET` no compose Easypanel: **exatamente 32 chars**
- Auth e-mail: Resend via SMTP (`SMTP_HOST=smtp.resend.com`, user `resend`, password = API key `re_…`, `SMTP_PORT=465`, `SMTP_SECURE=true`); `NEXT_PUBLIC_SMTP_FROM` + `ADMIN_EMAIL`
- Deploy/cutover/smoke: `deploy/*.md`
