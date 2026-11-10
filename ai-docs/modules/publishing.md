# publishing
Fontes: publishing/**, docker-compose.master.yml, deploy/easypanel.md, deploy/cutover-post-trajettu.md, .env.master.example, scripts/sync-publishing.ps1
Atualizado: 2026-11-10

## O que é
Motor interno de postagem/agenda/canais (Postiz vendido em `publishing/`) + WhatsApp via WAHA. A pessoa só vê o menu do shell MASTER. Re-sync: `scripts/sync-publishing.ps1`.

## WhatsApp (WAHA)
`WhatsappProvider` (`identifier: whatsapp`), sessão WAHA `postiz`. Um envio por vez (`maxConcurrentJob = 1`). QR, status, reset, lista de grupos. DTO do post: `invisibleMention` opcional. UI do lançamento em `publishing/apps/frontend/.../whatsapp.provider.tsx`.

## Por que pasta `publishing/` e não `apps/publishing-*`
O root Bun/Nx só inclui `apps/*`. Postiz usa pnpm/Nest; fica **fora** do workspace Typebot para não misturar package managers.

## Compose
Serviço `publishing` (+ `publishing-db`, `publishing-redis`, `waha`, `temporal*`) em `docker-compose.master.yml`, rede `master-network`.
Easypanel: compose `master`/`stack` (rede default; `HOSTNAME=0.0.0.0`; sem ports). Auth Typebot no mesmo stack via Resend SMTP (`deploy/easypanel.md`). `pub.trajettu.com` pendente. Projeto `postiz` destruído sem dump → OAuth perdido.

## Build
Ver `publishing/README.md`. Default image: `ghcr.io/gitroomhq/postiz-app:v2.25.3`; patches Trajettu exigem build do tree local.
