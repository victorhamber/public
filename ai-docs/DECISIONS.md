# Decisões — postiz-whatsapp
<!-- Uma entrada de ≤5 linhas por decisão não óbvia. Mais recente no topo. Evita rediscutir/reanalisar. -->

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
