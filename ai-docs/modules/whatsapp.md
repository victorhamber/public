# whatsapp
Fontes: AGENTS.md, ai-docs/ARCHITECTURE.md, ai-docs/DECISIONS.md
Propósito: canal nativo de grupos de WhatsApp no Postiz, com QR code e menção invisível. O fork já existe; o provedor ainda não.

## API pública
- Ainda não existe. Ao implementar, expor só: iniciar sessão, ler status, listar grupos, gravar grupos escolhidos, enviar texto e mídia.

## Depende de / Usado por
- Depende: módulo `waha`, agenda e fila já existentes do Postiz.
- Usado por: tela Adicionar canal e o editor de publicação.

## Fluxo (só se não for trivial)
1. Adicionar canal → WhatsApp cria a sessão e mostra o QR code.
2. Status conectado libera a lista de grupos. Cada grupo marcado vira um canal.
3. Publicar manda texto, imagem ou vídeo para o grupo.
4. Menção invisível: corpo sem `@nome`; participantes dentro do teto vão no campo de menções.

## Invariantes e armadilhas
- Um número por instalação. Novo QR substitui a sessão.
- Não usar a sessão do Desk nem a do Zap.
- Grupo acima do teto sai sem marcar todo mundo.
- Canal removido no celular continua no Postiz até atualizar a lista. Envio para grupo ausente mostra erro nesse canal.

## Como testar
- Sem sessão: a tela mostra o QR code e não lista grupo.
- Com sessão e zero grupos: estado vazio, sem quebrar os outros canais.
- Envio: texto visível sem arroba; menções só no campo da API, até o teto.
