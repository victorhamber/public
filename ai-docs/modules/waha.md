# waha
Fontes: docker-compose.yaml, .env.example
Propósito: sessão WhatsApp deste Postiz, acessível só pela rede interna.

## API pública
- Cliente: `whatsapp.provider.ts`.
- Operações: abrir sessão `postiz`, QR, status, listar grupos, enviar texto/imagem/vídeo com menções.

## Depende de / Usado por
- Depende: volumes `waha-sessions` e `waha-media`, chave em hash no container.
- Usado por: `modules/whatsapp.md`.

## Fluxo
1. No Easypanel o serviço `waha` sobe com imagem `devlikeapro/waha:latest-2026.7.2`, motor NOWEB, dashboard desligado.
2. Postiz fala em `http://$(PROJECT_NAME)_waha:3000` com `WAHA_API_KEY` em texto.
3. A sessão persiste no volume. Reiniciar não pede QR de novo, salvo logout.

## Invariantes e armadilhas
- Instância nova. Não apontar para o Desk nem para o Evolution do Zap.
- Sem domínio público obrigatório.
- Chave e QR não entram em doc.

## Como testar
- Container up na rede interna.
- `/api/sessions/postiz` responde depois do primeiro QR.
