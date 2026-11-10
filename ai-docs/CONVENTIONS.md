# Convenções — MASTER
Atualizado: 2026-11-10

## Onde guardar arquivo novo
- Fluxos Typebot: `apps/builder`, `apps/viewer`, `packages/**` (Bun/Nx)
- Publishing/Postiz: **só** em `publishing/**` (pnpm; não sob `apps/`)
- Forge: `packages/forge/blocks/postiz/`
- Deploy: `deploy/`, `docker-compose.master.yml`

## Padrões
- Forge → API publishing via `safeKy` + host em `SSRF_ALLOWED_HOSTS`
- Nav produto: same-origin `/publishing` (iframe), não link externo `post.trajettu.com`

## Proibido
- Adicionar Postiz ao workspace Bun
- Unificar DBs no v1
- SaaS concorrente Typebot (FSL)
