# whatsapp
Fontes: AGENTS.md, libraries/nestjs-libraries/src/integrations/social/whatsapp.provider.ts, libraries/nestjs-libraries/src/dtos/posts/providers-settings/whatsapp.dto.ts, libraries/nestjs-libraries/src/integrations/integration.manager.ts, apps/backend/src/api/routes/integrations.controller.ts, apps/frontend/src/components/launches/web3/providers/whatsapp.provider.tsx, apps/frontend/src/components/launches/web3/web3.list.tsx, apps/frontend/src/components/new-launch/providers/whatsapp/whatsapp.provider.tsx, apps/frontend/src/components/new-launch/providers/show.all.providers.tsx, apps/frontend/public/icons/platforms/whatsapp.png
Propósito: canal nativo de grupos de WhatsApp no Postiz, com QR code e menção invisível.

## API pública
- `GET /integrations/whatsapp/qr` — status da sessão e QR em data-url.
- `GET /integrations/whatsapp/groups` — grupos da sessão `postiz`.
- `POST /integrations/whatsapp/connect-groups` — conecta vários grupos de uma vez.
- `POST /integrations/whatsapp/sync-pictures` — preenche avatar dos grupos sem foto.
- Provedor `whatsapp`: autentica com o id do grupo; publica texto/imagem/vídeo.
- `WhatsappDto` registrado em `all.providers.settings` (sem isso, salvar post quebra com `__type`).
- UI: busca por nome, checkbox multi-select, grupos já conectados marcados.
- Envio: menção invisível = `mentions:["all"]` (WAHA); `maxConcurrentJob=1` + `WHATSAPP_SEND_DELAY_MS`.
- Mídia: `updateMedia` grava `type:'image'` sempre — o provedor detecta vídeo pela extensão e chama `sendVideo` + `convert:true`.
- Foto: `GET .../groups/{id}/picture` (fallback chats) baixada como data-url no `authenticate`.

## Depende de / Usado por
- Depende: serviço WAHA interno (`WAHA_API_BASE_URL`, `WAHA_API_KEY`), teto `WHATSAPP_MENTION_CAP`.
- Usado por: Add Channel (web3) e o editor de publicação.

## Fluxo
1. Add Channel → WhatsApp inicia a sessão e mostra o QR.
2. Status `WORKING` libera a lista de grupos. Cada grupo marcado vira um canal.
3. Publicar manda texto/mídia. Com `invisibleMention`, JIDs vão no campo de menções até o teto.

## Invariantes e armadilhas
- Sessão fixa `postiz`. Não apontar para o WAHA do Desk.
- NOWEB precisa de `config.noweb.store.enabled=true` senão `/groups` volta vazio.
- Não dar PUT na sessão a cada poll do QR: isso reinicia e fica em `STARTING`.
- Não apagar a sessão se `/groups` vier vazio: o store ainda pode estar sincronizando.
- Chamadas ao WAHA usam `fetch` direto; o filtro SSRF do Postiz bloquearia a URL interna.
- Não mandar vídeo por `sendImage` (Sharp: unsupported image format); Instagram/Telegram cheiram mime, o Postiz `type` não.
- Menção por lista de JIDs sem `@número` no texto não pinga; use `["all"]`.

## Como testar
- Sem sessão: a tela mostra QR.
- Com sessão: lista grupos e completa o canal.
- Envio: texto sem `@nome`; menções só no payload quando a opção está ligada.
