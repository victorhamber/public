# waha
Fontes: docker-compose.yaml, .env.example
Propósito: sessão WhatsApp deste Postiz, acessível só pela rede interna.

## API pública
- Ainda não há cliente no repositório. O provedor WhatsApp será o único chamador.
- Operações previstas: abrir sessão, obter QR code, ler status, listar grupos, enviar texto, imagem e vídeo com menções.

## Depende de / Usado por
- Depende: volume próprio da sessão e uma chave de API.
- Usado por: `modules/whatsapp.md`.

## Fluxo (só se não for trivial)
1. O serviço `waha` sobe ao lado do Postiz, Postgres, Redis e Temporal. Motor NOWEB, dashboard desligado.
2. Postiz guarda URL interna e chave em variável de ambiente.
3. A sessão persiste no volume. Reiniciar o container não pede QR de novo, salvo logout.

## Invariantes e armadilhas
- Instância nova. Não apontar para o WAHA já usado pelo Desk nem para o Evolution do Zap.
- Chave e QR não entram em doc, log de exemplo ou teste.
- WAHA e Postiz na mesma rede do compose. Sem porta pública obrigatória para o WAHA.

## Como testar
- Sobe, responde na rede interna e devolve QR code para uma sessão nova.
- Segundo start com o volume intacto permanece conectado.
