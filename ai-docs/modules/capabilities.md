# Capabilities — Publishing interno ↔ Fluxos
Fontes: packages/forge/blocks/postiz/**, publishing/apps/backend/**, deploy/smoke-postiz.md
Atualizado: 2026-11-10

## Papéis
- Fluxos: builder/viewer (marca visível Trajettu)
- Publishing: Postiz em `publishing/` (API+UI+WAHA+Temporal)

## Bloco
`@typebot.io/postiz-block` (`id: postiz`). Auth cifrada: `baseUrl` + `apiKey`. Cliente HTTP: `ky`. Ações: `listChannels`, `publishPost`.

## Auth API
`Authorization: <orgApiKey>` (header cru) em `{baseUrl}/public/v1/...`. Default de `baseUrl`: `http://publishing:5000/api` (sem barra final).

## Endpoints v1
| Capacidade | Path | Bloco |
|---|---|---|
| Canais | GET `/integrations` | List Channels |
| Publicar | POST `/posts` | Publish / Schedule |
| Upload | POST `/upload`, `/upload-from-url` | manual |
| Status | GET `/posts` + webhooks publishing | HTTP/Webhook |
