# postiz-bridge
Fontes: packages/forge/blocks/postiz/**, packages/forge/repository/src/*, apps/builder/src/features/dashboard/components/DashboardHeader.tsx, apps/builder/src/pages/publishing/**, packages/env/src/index.ts, .env.example, .env.master.example
Atualizado: 2026-11-10

## O que é
Forge `@typebot.io/postiz-block` + nav **Fluxos** / **Publicações** no mesmo builder.

## Ações
1. List Channels → GET `/public/v1/integrations`
2. Publish / Schedule → POST `/public/v1/posts`

## Defaults internos
- `baseUrl`: `http://publishing:5000/api` (rede Docker; `SSRF_ALLOWED_HOSTS` com `publishing`)
- Nav Publicações → `/publishing` (iframe `NEXT_PUBLIC_PUBLISHING_EMBED_URL`)
