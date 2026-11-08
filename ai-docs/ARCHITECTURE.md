# Arquitetura — postiz-whatsapp
<!-- Máx. ~1 página (≈1500 tokens). Visão de cima; detalhe vai em modules/. Atualizado: 2026-11-08 -->

## Visão geral
Postiz próprio, baseado na tag `v2.25.3` (`ghcr.io/gitroomhq/postiz-app:v2.25.3`), com WhatsApp nativo. O WAHA sobe no mesmo compose, numa sessão nova. O usuário escaneia um QR code, escolhe grupos, e cada grupo vira canal. A imagem oficial do Postiz não recebe essa função.

## Componentes e responsabilidades
| Módulo | Responsabilidade | Doc |
|---|---|---|
| postiz | Fork do app: editor, canais, agenda | (código ainda não clonado) |
| whatsapp | Provedor: QR, grupos, envio, menção invisível | modules/whatsapp.md |
| waha | Sessão WhatsApp HTTP, volume próprio | modules/waha.md |

## Fluxo principal
1. Usuário abre Adicionar canal → WhatsApp.
2. Postiz pede uma sessão ao WAHA e mostra o QR code.
3. Celular conecta em Aparelhos conectados. A tela espera o status conectado.
4. Postiz lista os grupos. O usuário marca os que entram. Cada um vira canal.
5. No editor, o grupo agenda junto com Instagram, Facebook e Telegram.
6. No envio, o texto visível sai sem `@nome`. A lista de participantes vai no campo de menções.

## Dados e integrações externas
- Postiz mantém Postgres, Redis e Temporal do compose original. Conferir o compose da tag antes de copiar serviço.
- WAHA é serviço interno. URL e chave só em variável de ambiente. Sem valor no doc.
- Uma sessão e um número por instalação. Escanear de novo substitui a sessão.
- Sessão do Desk e sessão do Zap ficam de fora. Número de atendimento não publica.

## Fronteiras e regras
- O provedor WhatsApp depende do WAHA. O restante do Postiz não importa cliente de WhatsApp.
- Menção invisível só no grupo escolhido, com teto de participantes. Grupo acima do teto publica sem marcar todo mundo.
- Não há código neste repositório até o clone. Não tratar caminho previsto como arquivo existente.
