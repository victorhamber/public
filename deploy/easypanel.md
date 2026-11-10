# Easypanel — MASTER (produto único)

Um **projeto** Easypanel, vários serviços (igual ao compose). Não é “Typebot num projeto e Postiz noutro”.

## Serviços
| Serviço | Imagem / build | Porta | Notas |
|---|---|---|---|
| typebot-db | postgres:16 | — | DB fluxos |
| typebot-redis | redis:alpine | — | |
| builder | imagem oficial / build Forge | 3000 → `master.trajettu.com` (Traefik) | Fluxos; `HOSTNAME=0.0.0.0` |
| viewer | imagem oficial / build | 3000 → `bot.trajettu.com` | Runtime; `HOSTNAME=0.0.0.0` |
| publishing-db | postgres:17-alpine | — | DB publicação (separado) |
| publishing-redis | redis:7.2 | — | |
| publishing | `PUBLISHING_IMAGE` ou build `publishing/` | 5000 → `pub.trajettu.com` (ou :4007) | Calendário/canais |
| waha | `devlikeapro/waha:latest-2026.7.2` | — | rede interna |
| temporal + temporal-postgresql + temporal-elasticsearch | imagens oficiais | 7233 opcional | Jobs |

Referência local: [`docker-compose.master.yml`](../docker-compose.master.yml) + [`.env.master.example`](../.env.master.example).

## Env críticos (builder/viewer)
- `ENCRYPTION_SECRET` = **exatamente 32 caracteres** (senão builder/viewer crasham no boot)
- SMTP Resend (login magic-link): `SMTP_HOST=smtp.resend.com`, `SMTP_PORT=465`, `SMTP_USERNAME=resend`, `SMTP_PASSWORD=re_…`, `SMTP_SECURE=true`, `NEXT_PUBLIC_SMTP_FROM` (domínio verificado no Resend)
- `ADMIN_EMAIL` = e-mail admin (ex. `contato@victorhamber.com`)
- `SSRF_ALLOWED_HOSTS=publishing` (Forge → API interna)
- `NEXT_PUBLIC_POSTIZ_URL` / `NEXT_PUBLIC_PUBLISHING_EMBED_URL` = URL pública do serviço publishing
- Credencial Forge default: `http://publishing:5000/api` + API Key da org publishing

## VPS (Easypanel ForexRendimento)
- Projeto: `master` → Compose `stack` (`deploy/docker-compose.easypanel.yml`)
- Compose: **sem** `ports` host; `HOSTNAME=0.0.0.0` nos serviços HTTP
- Serviço com domínio público entra na rede externa `easypanel` (senão Traefik 502). `viewer` e `publishing` declaram essa rede; `builder` o painel já liga sozinho
- Domínios: `master.trajettu.com` → `builder:3000`; `bot.trajettu.com` → `viewer:3000`; `pub.trajettu.com` → `publishing:5000`
- Projeto Easypanel `postiz` antigo foi destruído (sem dump); App `edge` foi aposentado

## Publishing image
1. Curto prazo: `ghcr.io/gitroomhq/postiz-app:v2.25.3` (funcional; patches Trajettu exigem build do tree `publishing/`).
2. Produção Trajettu: build `publishing/Dockerfile.dev --target dist` → `master-publishing:local`.

## Domínios (v1)
- Fluxos: `master.trajettu.com` (builder) + viewer
- Publicações: `pub.trajettu.com` → `publishing:5000` (UI; o Nest interno fica na 3000)
- Cutover de `post.trajettu.com`: ver [`cutover-post-trajettu.md`](./cutover-post-trajettu.md)
