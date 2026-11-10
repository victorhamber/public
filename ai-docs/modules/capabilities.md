# Capabilities — Publishing interno ↔ Fluxos
Fontes: packages/forge/blocks/postiz/**, publishing/apps/backend/**, deploy/smoke-postiz.md
Atualizado: 2026-11-10

## Papéis
- Fluxos: Typebot builder/viewer
- Publishing: Postiz em `publishing/` (API+UI+WAHA+Temporal)

## Auth API
`Authorization: <orgApiKey>` em `{baseUrl}/public/v1/...` com base default `http://publishing:5000/api`.

## Endpoints v1
| Capacidade | Path | Bloco |
|---|---|---|
| Canais | GET `/integrations` | List Channels |
| Publicar | POST `/posts` | Publish / Schedule |
| Upload | POST `/upload`, `/upload-from-url` | manual |
| Status | GET `/posts` + webhooks publishing | HTTP/Webhook |
