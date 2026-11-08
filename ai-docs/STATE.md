# Estado atual — postiz-whatsapp
Atualizado: 2026-11-08

## Em andamento
- QR preso em STARTING: o poll fazia PUT e reiniciava a sessão. Correção no provedor.

## Próximos passos
1. Deploy da correção.
2. Abrir WhatsApp de novo e escanear o QR.
3. Escolher o grupo.

## Bloqueios / dúvidas
- Erros nginx `no live upstreams` no boot são corrida: o nginx sobe antes do Nest. Depois o backend fica ok.
