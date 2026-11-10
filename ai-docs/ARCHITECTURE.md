# Arquitetura — MASTER unificado
Atualizado: 2026-11-10

## Visão geral
Produto **único**: Typebot (fluxos) + Publishing/Postiz (canais, calendário, WhatsApp/WAHA, Temporal) no mesmo monorepo e mesmo projeto Easypanel. Publishing mora em `publishing/` (pnpm/AGPL), isolado do workspace Bun.

## Componentes
| Módulo | Responsabilidade | Doc |
|---|---|---|
| typebot | Builder + viewer | modules/typebot.md |
| publishing | Postiz vendido (API+UI+orchestrator) | modules/publishing.md |
| postiz-bridge | Forge + nav `/publishing` | modules/postiz-bridge.md |
| capabilities | Contrato API interna | modules/capabilities.md |

## Fluxo
1. Usuário em `master` → Fluxos (Typebot) ou Publicações (`/publishing` iframe).
2. Forge chama `http://publishing:5000/api/public/v1/...` (rede Docker).
3. Publishing → Temporal → canais / WAHA.

## Dados
- Postgres Typebot e Postgres Publishing **separados** (v1).
- Redis separados; Temporal com PG/ES próprios.

## Fronteiras
- Não reescrever provedores no Typebot.
- Não misturar workspaces Bun↔pnpm.
- Cutover `post.trajettu.com`: `deploy/cutover-post-trajettu.md`.
