# Convenções — postiz-whatsapp
<!-- Máx. ~800 tokens. Só regras que o linter não pega e que a IA erraria. -->

## Onde guardar arquivo novo
- Antes do clone: só `ai-docs/` e o contrato na raiz. Não criar pasta `src/` vazia.
- Depois do clone, o provedor entra no mesmo lugar dos provedores já existentes do Postiz `v2.25.3`. Confirmar no código: registro em `libraries/nestjs-libraries/src/integrations/integration.manager.ts` e a pasta do provedor ao lado dos outros. Não inventar outro diretório.
- Compose e `.env.example` na raiz do fork, junto dos arquivos que a tag já tiver.
- Código existente do Postiz não se move, a menos que o usuário peça reestrutura.

## Nomes e estrutura
- Identificador do canal: `whatsapp`.
- Serviço no compose: `waha`.
- Sessão WAHA: uma por instalação, nome estável `postiz`.
- Arquivo novo do provedor: curto, uma responsabilidade, cabeçalho de 1–2 linhas.

## Padrões do projeto
- Erros de QR, sessão caída e grupo inexistente aparecem na tela de canal. Não derrubar os outros canais.
- Config só por variável de ambiente: URL interna do WAHA, chave, teto de menções. Nunca valor de chave no doc.
- Teste do provedor: QR ausente, lista de grupos vazia, envio com e sem menção. Framework: o que o Postiz já usar nessa tag, conferir no clone.

## Proibido
- Apontar para o WAHA do Desk ou para o Evolution do Zap.
- Colar token, chave ou QR em doc, log de exemplo ou teste.
- Marcar todos os participantes quando o grupo passar do teto.
- Afirmar linha de arquivo do Postiz antes de ler o clone.
