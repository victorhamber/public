# locale
Fontes: libraries/react-shared-libraries/src/translation/, apps/frontend/src/components/notifications/translate.notification.ts, apps/frontend/src/components/layout/streak.component.tsx, apps/orchestrator/src/workflows/post-workflows/post.workflow.v1.1.2.ts, apps/orchestrator/src/workflows/streak.workflow.ts, apps/orchestrator/src/workflows/digest.email.workflow.ts
Propósito: português como idioma padrão deste fork Postiz.

## API pública
- `pt/translation.json` + `en/translation.json` para a UI (`useT` / `i18next.t`).
- `translateNotificationContent` reescreve templates EN conhecidos no sininho.
- Servidor grava notificações/e-mails novos em português.

## Invariantes e armadilhas
- Marcas (WhatsApp, Google) ficam iguais.
- Workflows `v1.0.x`–`v1.1.1` não são iniciados; não precisam de tradução.
- `useT()` precisa existir no mesmo componente que chama `t(` — senão o build do GitHub quebra.
