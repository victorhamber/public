# Cutover — aposentar `post.trajettu.com` como produto separado

Só depois do MASTER v1 estável (compose/Easypanel único, smoke fluxo→publish→WA ok).

## Pré-requisitos
1. Serviço `publishing` no projeto MASTER com dados migrados (dump Postgres Postiz atual → `publishing-db`) **ou** apontar o volume/DB existente.
2. WAHA: mesmo volume `waha-sessions` / chave, para não pedir QR de novo.
3. Temporal: jobs em andamento drenados ou namespace migrado.
4. DNS / usuários avisados.

## Passos
1. Congelar writes no Postiz antigo (maintenance).
2. Backup DB + uploads + waha volumes.
3. Restaurar no `publishing-db` / volumes do MASTER **ou** reattach volumes no novo serviço.
4. Atualizar `MAIN_URL` / `FRONTEND_URL` / OAuth redirect URIs dos provedores sociais para o host MASTER (`pub.…` ou iframe host).
5. Apontar DNS `post.trajettu.com` → mesmo ingress do publishing MASTER (redirect 301 para `master…/publishing` ou host pub).
6. Desligar stack Postiz antiga só após 48h sem erro.

## Não fazer no cutover
- Unificar Postgres Typebot+Publishing.
- Apagar WAHA sessions.
- Mudar API Keys sem atualizar credenciais Forge nos workspaces Typebot.
