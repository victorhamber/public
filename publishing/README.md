# Publishing (subsistema MASTER)

Código **Postiz** (AGPL-3.0) vendido para dentro do produto MASTER.

- **Não** faz parte do workspace Bun/Nx do Typebot (`apps/*`). Usa **pnpm** próprio.
- Origem: fork Trajettu (`postiz-fork`, base tag ~v2.25.3) + patches WhatsApp/WAHA.
- No compose unificado: serviço `publishing` em [`docker-compose.master.yml`](../docker-compose.master.yml).

## Apps
- `apps/backend` — API + public `/api/public/v1`
- `apps/frontend` — calendário / canais / launches
- `apps/orchestrator` — workers Temporal

## Build imagem local
```bash
cd publishing
# pnpm install && pnpm build  (ver package.json)
docker build -f Dockerfile.dev --target dist -t master-publishing:local .
```
Defina `PUBLISHING_IMAGE=master-publishing:local` no `.env.master`.

## Sync a partir do postiz-fork
Re-copiar com robocopy excluindo `node_modules`, `.git`, `dist`, `.next` (ver histórico do agente / script futuro em `scripts/`).
