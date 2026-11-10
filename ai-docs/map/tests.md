# MAP/tests

## tests/auth-redirect/
- README.md [44L] Sign-in redirect regression fixture
- playwright.config.ts [17L]
- redirect.browser.ts [99L]
- serve.ts [147L] Generated fixture only: no application .env, database or production identity. — Fixture(), Page()

## tests/linked-preview/
- README.md [46L] Linked draft preview authorization
- access.test.ts [463L] Never fall back to the developer's DATABASE_URL or authenticated browser data. — link(), draft(), state(), start(), continuePreview()
- preload.ts [16L] — UnavailableVM

## tests/preview/
- README.md [162L] Separate-origin builder previews
- compatibility.browser.ts [219L]
- entry.tsx [65L] — Host()
- isolation.browser.ts [382L]
- lifecycle.browser.ts [357L] — getPreviewDocumentId()
- playwright.config.ts [28L]
- proxy.browser.ts [79L]
- redirect.browser.ts [78L]
- regressions.browser.ts [86L]
- sameSite.browser.ts [109L]
- server.ts [242L] Disposable certificate, used only by the loopback HTTPS fixture.

## tests/preview-sessions/
- README.md [68L] Preview session creation
- fixture.ts [112L] This suite must run in its own process: normal bot-engine tests mock storage.
- schema.sql [9L]
- server.ts [65L]
- storage.test.ts [242L] — savePreview()

## tests/smtp/
- README.md [63L] SMTP configuration test egress
- connectionProbe.cjs [347L] Node, real Nodemailer and real local sockets. All DNS is synthetic. The only

## tests/webhook/
- README.md [148L] Webhook response authenticity
- bootstrap.mjs [10L]
- index.html [49L]
- next-server.ts [6L] The loopback server has no Next request scope; execute post-response work locall — after()
- replay.mts [621L]
- run.mts [296L] Nx may load .env. Never let the fixture inherit service credentials or URLs.

## tests/whatsapp-session-access/
- README.md [51L] WhatsApp session access regression
- access.test.ts [345L] All persistence, engine execution and provider calls are synthetic. The public — makeSession()
- preview.ts [40L] Loopback-only regression review harness. Executes this worktree's tests, never
