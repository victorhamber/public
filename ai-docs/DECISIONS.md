# Decisões — postiz-whatsapp
<!-- Uma entrada de ≤5 linhas por decisão não óbvia. Mais recente no topo. Evita rediscutir/reanalisar. -->

## 2026-11-08 — Deploy PT: typecheck após Turbopack
- Contexto: sem `t` duplicado o compile passou; o typecheck ainda caiu em `ContinueModal` sem `useT` e regex `/is` (target `es2015`).
- Decisão: `useT` em `ContinueModal`; detalhe WAHA com `[\s\S]` + flag `i` só.
- Alternativas: subir `target` do tsconfig (risco amplo).
- Consequência: build Easypanel precisa desse commit para a PT ir ao ar.

## 2026-11-08 — Deploy PT falhava por `t` duplicado
- Contexto: três deploys Easypanel com a tradução caíram em ~4–6 min; live ficava no commit WhatsApp avatars.
- Decisão: remover o segundo `const t = useT()` em `third-party.list.component.tsx` (`ApiModal`).
- Alternativas: renomear a segunda variável (desnecessário).
- Consequência: `next build` deixa de abortar com `the name t is defined multiple times`.

## 2026-11-08 — Lacuna de chaves PT + JID string no WhatsApp
- Contexto: UI em `pt` ainda mostrava inglês porque `t(key, 'English')` não tinha entrada no JSON; sininho falhava em "published … at" sem URL; WAHA 500 `jid.endsWith is not a function`.
- Decisão: preencher `pt/en` com as chaves da UI; mapa de notificação aceita URL vazia e provider antes do `:`; `groupParticipants` normaliza id para string com `@`.
- Alternativas: deixar fallback EN (rejeitado); desligar menções invisíveis (piora alcance).
- Consequência: redeploy do frontend/backend necessário para o usuário ver a mudança.

## 2026-11-08 — Build do GitHub só sob demanda
- Contexto: cada push em `main` rodava `build.yml` e mandava e-mail de falha; o deploy real é no Easypanel.
- Decisão: `on: workflow_dispatch` (+ PR/merge_group). Corrigir `useT` fora de escopo que quebrou o build da tradução.
- Alternativas descartadas: manter build em todo push; apagar o workflow.
- Consequência: sem spam de Actions no e-mail; CI ainda dá para rodar na mão.

## 2026-11-08 — Português padrão neste fork
- Contexto: UI em PT ainda mostrava inglês em streak, toasts e sininho (texto gravado no servidor).
- Decisão: `fallbackLng=pt`; notificações/e-mails novos em PT no orchestrator; mapa EN→PT na exibição do sininho.
- Alternativas descartadas: i18n multi-idioma no Temporal; migração SQL das notificações antigas.
- Consequência: novas mensagens já nascem em PT; antigas traduzem na UI pelos padrões conhecidos.

## 2026-11-08 — WhatsApp no discriminator de post + foto via data-url
- Contexto: salvar publicação com canal WhatsApp devolvia toast genérico; avatars vinham `/no-picture.jpg`.
- Decisão: registrar `WhatsappDto` em `all.providers.settings`. Baixar foto do WAHA como data-url no `authenticate` e oferecer `sync-pictures`.
- Alternativas descartadas: passar URL do WAHA para `uploadSimple` (SSRF/API key); deixar `__type` fora da lista.
- Consequência: `mapTypeToPost` aceita `whatsapp`. Grupos novos e backfill ganham avatar quando o WAHA tiver `url`.

## 2026-11-08 — Repositório e motor do WAHA
- Contexto: o GitHub vazio é `https://github.com/victorhamber/public.git`. O Deskcomm mostra como o WAHA sobe.
- Decisão: fork da tag `v2.25.3` nesse repositório. WAHA `devlikeapro/waha:latest-2026.7.2`, motor NOWEB, dashboard desligado, sessões retomadas no volume.
- Alternativas descartadas: imagem `:latest` sem tag; motor WEBJS; reutilizar a sessão do Desk.
- Consequência: chave em texto no Postiz e hash `sha512:` no container. Sem webhook para o Desk.

## 2026-11-08 — WAHA dentro do fork, sessão nova
- Contexto: publicar em grupos de WhatsApp a partir do Postiz, com QR code e escolha de grupos.
- Decisão: clonar Postiz `v2.25.3` e embutir um WAHA só desse compose. Provedor nativo `whatsapp`.
- Alternativas descartadas: usar o WAHA do Desk ou o Evolution API do Zap; variável na imagem oficial.
- Consequência: número exclusivo de divulgação. A imagem `ghcr.io/gitroomhq/postiz-app:v2.25.3` permanece sem essa função.

## 2026-11-08 — Menção invisível com teto
- Contexto: avisar os participantes sem mostrar `@nome` no texto.
- Decisão: texto visível sem arroba; JIDs no campo de menções do envio. Teto configurável. Acima do teto, publica sem marcar o grupo inteiro.
- Alternativas descartadas: escrever `@nome` no corpo; marcar sem limite.
- Consequência: a pessoa pode receber aviso de menção. O texto publicado não mostra a marca.

## 2026-11-08 — Documentação antes do clone
- Contexto: o GitHub ainda não existe. A implementação fica para outra sessão.
- Decisão: este repositório guarda só o plano. O clone espera a URL que o usuário passar.
- Alternativas descartadas: clonar agora dentro da pasta do EA TREND.
- Consequência: nenhuma edição no Postiz até o clone. Caminhos são destino, não arquivo confirmado.
