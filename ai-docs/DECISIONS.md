# Decisões — master-typebot
<!-- Uma entrada de ≤5 linhas por decisão não óbvia. Mais recente no topo. Evita rediscutir/reanalisar. -->

## 2026-11-10 — Marca visível é Trajettu
- Contexto: fork é produto novo; marca e vídeos de demonstração do Typebot não podem aparecer.
- Decisão: título/favicon/badge = Trajettu; catálogo de vídeos do editor vazio; bot de suporte Typebot desligado.
- Alternativas: manter a marca no código e só esconder no CSS.
- Consequência: some no site quando o Easypanel subir esta build, não a imagem oficial.

## 2026-11-10 — Um produto, visual Typebot (Postiz/WAHA por trás)
- Contexto: usuário rejeitou apps/domínios separados; Typebot era só o visual de referência.
- Decisão: uma interface (menu Fluxos, Publicar agora, Agendar, WhatsApp). Postiz e WAHA são motor interno, sem produto próprio.
- Alternativas: iframe `/publishing` + host `pub.trajettu.com`; Typebot oficial + Postiz lado a lado.
- Consequência: a imagem `baptistearno/typebot-builder` no ar não tem esse menu; a UI MASTER precisa ser a que sobe.

## 2026-11-10 — Auth Typebot via Resend SMTP (não HTTP API)
- Contexto: `/signin` sem providers; Typebot só liga e-mail se `NEXT_PUBLIC_SMTP_FROM` + SMTP_* existirem.
- Decisão: Resend como SMTP (`smtp.resend.com:465`, user `resend`, password=API key); FROM/ADMIN=`contato@victorhamber.com`.
- Alternativas: OAuth Google/GitHub; Resend HTTP API (Typebot não usa).
- Consequência: magic-link no builder após Save/Deploy do compose Easypanel.

## 2026-11-10 — Traefik Compose: HOSTNAME + sem ports (sem edge)
- Contexto: Traefik 502; builder escutava só no IP da bridge (`172.21.x`), não no IP que o Traefik usava; `ports` piorava multi-rede. Deskcomm OK sem ports.
- Decisão: `HOSTNAME=0.0.0.0` em builder/viewer/publishing; compose sem `ports`; domínio no Compose `builder:3000`; destruir App `edge`.
- Alternativas: nginx edge; rede `easypanel-master` + aliases (não bastou sozinho).
- Consequência: `master.trajettu.com` via Traefik direto; padrão igual deskcomm.

## 2026-11-10 — Edge App bypass Compose Traefik (supersedida)
- Histórico: edge nginx→`:8080` enquanto o 502 do bind/ports não estava diagnosticado; removido após HOSTNAME+sem ports.


## 2026-11-10 — Compose Easypanel: 1 rede + nomes curtos
- Contexto: Traefik 502 com `typebot-builder` e rede `master_temporal` isolada.
- Decisão: renomear para `builder`/`viewer`; tudo na rede default; ports host 8080/8081/4007 de emergência.
- Alternativas: manter rede Temporal isolada; só Cloudflare Flexible→:8080.
- Consequência: aviso `ports` no Easypanel; App `edge` passou a ser o proxy público.

## 2026-11-10 — Easypanel projeto `master` (Compose stack)
- Contexto: subir produto unificado sem wipe do DB antigo Postiz.
- Decisão: novo projeto Compose `master/stack`; parar `postiz`+`temporal` (liberar 4007/7233); manter `postiz-db`/`redis` até cutover.
- Alternativas: editar o projeto `postiz` in-place; apagar volumes já.
- Consequência: `ENCRYPTION_SECRET` Typebot deve ter **exatamente 32** chars no compose Easypanel.

## 2026-11-10 — MASTER unificado (Typebot base + Postiz interno)
- Contexto: um produto só, não dois apps bridged.
- Decisão: base Typebot; Postiz vendido em `publishing/` (pnpm); compose/Easypanel único; Forge → API interna.
- Alternativas: Postiz como base; ponte eterna a `post.trajettu.com`.
- Consequência: nav `/publishing` (iframe); cutover DNS depois do smoke.

## 2026-11-10 — Typebot shell + Postiz motor (supersedida)
- Mantida só como histórico: ponte externa foi etapa intermediária; substituída pela unificação acima.

## 2026-11-10 — Documentação modular para IA
- Contexto: reduzir tokens gastos relendo o código.
- Decisão: ai-docs/ (MAP, STATE, modules/) ao lado do AGENTS.md do Typebot.
- Alternativas descartadas: sobrescrever AGENTS.md upstream.
- Consequência: toda mudança MASTER atualiza módulo + STATE.
