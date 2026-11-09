# postiz
Fontes: apps/, libraries/, var/, dynamicconfig/, Jenkins/, reports/, .claude/, .devcontainer/, .github/, .cursor/, .coderabbit.yaml, .cursorignore, .dockerignore, .eslintignore, .gitignore, .gitmodules, .npmrc, .prettierignore, .prettierrc, CCLA.md, chatgpt-app-submission.json, CLAUDE.md, CODE_OF_CONDUCT.md, CONTRIBUTING.md, docker-compose.dev.yaml, Dockerfile.dev, eslint.config.mjs, GEMINI.md, i18n.json, i18n.lock, ICLA.md, jest.config.ts, jest.preset.js, LICENSE, package.json, pnpm-lock.yaml, pnpm-workspace.yaml, railway.toml, README.md, SECURITY.md, sonar-project.properties, tsconfig.base.json, tsconfig.json, version.txt
Propósito: código do Postiz v2.25.3, mantido como base do fork. O CLAUDE.md original do Postiz permanece. Canal WhatsApp (multi-select + cadência) em `modules/whatsapp.md`.

## API pública
- Canais existentes ficam no gerenciador de integrações. WhatsApp entra por um provedor novo, documentado em `modules/whatsapp.md`.
- Save de post: `WhatsappDto` precisa estar em `all.providers.settings` senão `mapTypeToPost` rejeita `__type`. Toast do modal agora mostra `message[]` do Nest.
- Locale: `fallbackLng=pt`; chaves de settings/agents/analytics em `pt/translation.json`; `translate.notification.ts` cobre sininho EN (URL vazia / erro WAHA); labels de analytics traduzidos na UI.
- Deploy Easypanel usa `Dockerfile.dev` + `pnpm run build`; `useT` duplicado/ausente (ex.: `third-party.list`, `ContinueModal`) e regex `/s` em `translate.notification` derrubam o typecheck.
- WhatsApp: `updateMedia` força `type:'image'` — provedor detecta `.mp4` etc. e usa `sendVideo` + `mentions:["all"]`.
- CI: `.github/workflows/build.yml` só sob demanda (`workflow_dispatch`); deploy real no Easypanel.

## Depende de / Usado por
- Depende: Postgres, Redis e Temporal do compose.
- Usado por: a instalação `post.trajettu.com` continua na imagem oficial até este fork ser publicado.

## Invariantes e armadilhas
- Não reescrever um canal que já funciona para caber o WhatsApp.
- A imagem oficial permanece `v2.25.3` até haver motivo para trocar a tag.
- Licença AGPL-3.0.

## Como testar
- O compose sobe a tag fixada e o Postiz responde no domínio configurado.
