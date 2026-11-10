# MAP/publishing

## publishing/
- .coderabbit.yaml [178L]
- .dockerignore [23L] We want the docker builds to be clean, and as fast as possible. Don't send
- .env.example [222L] Configuration reference: http://docs.postiz.com/configuration/reference
- .eslintignore [2L]
- .gitmodules [4L]
- .npmrc [6L]
- .prettierignore [4L] Add files here to ignore them from prettier formatting
- .prettierrc [4L]
- AGENTS.md [42L] postiz-whatsapp — guia para IA
- CCLA.md [128L] Fiduciary License Agreement 2.1
- CODE_OF_CONDUCT.md [129L] Contributor Covenant Code of Conduct
- CONTRIBUTING.md [73L] Contributing
- Dockerfile.dev [29L]
- Dockerfile.master [7L] Build publishing image for MASTER (from vendored Postiz tree).
- ICLA.md [122L] Fiduciary License Agreement 2.1
- LICENSE [662L]
- README.md [24L] Publishing (subsistema MASTER)
- SECURITY.md [107L] Security Policy
- chatgpt-app-submission.json [369L]
- docker-compose.dev.yaml [148L] This docker-compose file is used for development purposes. It sets up the necess
- docker-compose.yaml [305L] WAHA desta instalação. Sessão nova; não apontar para Desk nem Zap.
- eslint.config.mjs [29L]
- i18n.json [35L]
- jest.config.ts [6L]
- jest.preset.js [4L]
- package.json [349L]
- pnpm-workspace.yaml [4L]
- railway.toml [3L]
- sonar-project.properties [8L] Scan Performace
- tsconfig.base.json [41L]
- tsconfig.json [4L]
- version.txt [2L]

## publishing/.github/
- Dependabot.yml [12L] To get started with Dependabot version updates, you'll need to specify which
- FUNDING.yaml [4L] patreon: Postiz
- PULL_REQUEST_TEMPLATE.md [57L] What kind of change does this PR introduce?

## publishing/.github/ISSUE_TEMPLATE/
- 01_bug_report.yml [87L]
- 02_feature_request.yml [56L]
- config.yml [15L] Disable the default option to open a blank issue

## publishing/.github/workflows/
- build-containers.yml [104L]
- build-extension.yaml [35L]
- build.yml [57L] This fork deploys via Easypanel. Keep CI available on demand so failed
- codeql.yml [43L]
- eslint [61L]
- issue-label-triggers.yml [29L]
- publish-extension.yml [32L]
- staging-conflicts.yml [250L] Reproduces a staging <- main merge inside the runner. If it conflicts, Claude
- stale.yml [34L]

## publishing/Jenkins/
- Build.Jenkinsfile [97L] Declarative Pipeline for building Node.js application and running SonarQube anal
- BuildPR.Jenkinsfile [101L] Declarative Pipeline for building Node.js application and running SonarQube anal

## publishing/apps/backend/
- nest-cli.json [21L]
- package.json [15L]
- tsconfig.build.json [24L]
- tsconfig.json [13L]

## publishing/apps/backend/src/
- app.module.ts [67L] — AppModule
- main.ts [113L] — start(), checkConfiguration()

## publishing/apps/backend/src/api/
- api.module.ts [142L] — ApiModule

## publishing/apps/backend/src/api/routes/
- admin.controller.ts [72L] — AdminController
- analytics.controller.ts [34L] — AnalyticsController
- announcements.controller.ts [48L] — AnnouncementsController
- approved-apps.controller.ts [25L] — ApprovedAppsController
- auth.controller.ts [386L] — AuthController
- autopost.controller.ts [70L] — AutopostController
- billing.controller.ts [330L] — BillingController
- clipping.controller.ts [34L] — ClippingController
- clipping.widget.controller.ts [28L] — ClippingWidgetController
- copilot.controller.ts [167L] — copilotCors(), CopilotController
- enterprise.controller.ts [159L] — EnterpriseController
- integrations.controller.ts [662L] — IntegrationsController
- media.controller.ts [231L] — MediaController
- media.widget.controller.ts [52L] — MediaWidgetController
- monitor.controller.ts [15L] — MonitorController
- no.auth.integrations.controller.ts [456L] — NoAuthIntegrationsController
- notifications.controller.ts [34L] — NotificationsController
- oauth-app.controller.ts [55L] — OAuthAppController
- oauth.controller.ts [253L] — OAuthController, OAuthAuthorizedController
- payment.controller.ts [37L] — PaymentController
- posts.controller.ts [317L] — PostsController
- posts.validation.exception.ts [41L] Provider identifier, e.g. "x", "linkedin-page". */ — PostValidationException, PostValidationExceptionFilter
- public.controller.ts [235L] — PublicController
- root.controller.ts [9L] — RootController
- sets.controller.ts [52L] — SetsController
- settings.controller.ts [92L] — SettingsController
- signature.controller.ts [48L] — SignatureController
- stripe.controller.ts [25L] — StripeController
- third-party.controller.ts [208L] — ThirdPartyController
- users.controller.ts [443L] — UsersController
- webhooks.controller.ts [71L] — WebhookController

## publishing/apps/backend/src/assets/
- .gitkeep [0L]

## publishing/apps/backend/src/public-api/
- public.api.module.ts [40L] — PublicApiModule

## publishing/apps/backend/src/public-api/routes/v1/
- public.integrations.controller.ts [763L] — PublicIntegrationsController

## publishing/apps/backend/src/services/auth/
- auth.middleware.ts [132L] — removeAuth(), AuthMiddleware
- auth.service.ts [339L] — AuthService
- clipping.widget.auth.middleware.ts [35L] The MCP clipping widget runs in the host's sandboxed iframe (a foreign origin — ClippingWidgetAuthMiddleware
- providers.interface.ts [35L] — AuthProvider()
- public.auth.middleware.ts [117L] — PublicAuthMiddleware
- super.admin.guard.ts [39L] eslint-disable-next-line @typescript-eslint/ban-ts-comment — SuperAdminGuard
- upload.widget.auth.middleware.ts [35L] The MCP upload widget runs in the host's sandboxed iframe (a foreign origin — UploadWidgetAuthMiddleware

## publishing/apps/backend/src/services/auth/permissions/
- permission.exception.class.ts [29L] — SubscriptionException
- permissions.ability.ts [8L] — CheckPolicies()
- permissions.guard.ts [70L] — PoliciesGuard
- permissions.service.ts [174L] — PermissionsService
- subscription.exception.ts [60L] — SubscriptionExceptionFilter, getErrorMessage()

## publishing/apps/backend/src/services/auth/providers/
- apple.provider.ts [143L] — getConfig(), defaultRedirect(), clientSecret(), AppleProvider
- farcaster.provider.ts [44L] no OAuth redirect here, the frontend only needs the state nonce that — FarcasterProvider
- github.provider.ts [61L] — GithubProvider
- google.provider.ts [64L] — defaultRedirect(), makeClient(), GoogleProvider
- oauth.provider.ts [96L] — OauthProvider
- providers.manager.ts [24L] — AuthProviderManager
- wallet.provider.ts [91L] — hexToUint8Array(), WalletProvider

## publishing/apps/commands/
- nest-cli.json [21L]
- package.json [14L]
- tsconfig.build.json [24L]
- tsconfig.json [13L]

## publishing/apps/commands/src/
- command.module.ts [18L] — CommandModule
- main.ts [22L] some comment again — bootstrap()

## publishing/apps/commands/src/tasks/
- agent.run.ts [16L] — AgentRun
- configuration.ts [33L] — ConfigurationTask
- refresh.tokens.ts [17L] — RefreshTokens

## publishing/apps/extension/
- custom-vite-plugins.ts [64L] plugin to remove dev icons from prod build — stripDevIcons(), crxI18n()
- manifest.dev.json [31L]
- manifest.json [30L]
- package.json [11L]
- tsconfig.json [27L]
- vite.config.base.ts [52L] set this flag to true, if you want localization support
- vite.config.chrome.ts [53L]
- vite.config.ts [24L]

## publishing/apps/extension/src/
- background.ts [210L] — isOriginAllowed(), extractCookies(), getStoredEntries(), setStoredEntries(), ensureAlarm(), clearAlarmIfEmpty(), refreshAllCookies()

## publishing/apps/extension/src/providers/
- cookie-provider.interface.ts [20L] The cookie name to extract, e.g., 'client_id' */
- provider.registry.ts [19L] — getAllProviders(), getProvider()

## publishing/apps/extension/src/providers/list/
- skool.provider.ts [13L]

## publishing/apps/extension/src/types/
- messages.ts [86L]

## publishing/apps/frontend/
- AGENTS.md [10L]
- README.md [37L] or
- eslint.config.mjs [19L]
- next.config.js [113L] Document-Policy header for browser profiling
- package.json [19L]
- postcss.config.mjs [9L]
- tailwind.config.cjs [285L]
- tsconfig.json [38L]

## publishing/apps/frontend/public/
- .gitkeep [0L]

## publishing/apps/frontend/scripts/
- fetch-gtm.mjs [51L]

## publishing/apps/frontend/src/
- chrome.d.ts [16L] Minimal Chrome extension API types for externally_connectable messaging.
- instrumentation.ts [12L] — register()
- proxy.ts [182L] This function can be marked `async` if using `await` inside — proxy()
- sentry.edge.config.ts [3L]
- sentry.server.config.ts [4L]

## publishing/apps/frontend/src/app/
- colors.scss [241L]
- global-error.tsx [25L] The variables context is not mounted here (this replaces the root — GlobalError()
- global.scss [873L]

## publishing/apps/frontend/src/app/(app)/
- layout.tsx [117L] — AppLayout()

## publishing/apps/frontend/src/app/(app)/(preview)/p/[id]/
- layout.tsx [11L] — AppLayout()
- page.tsx [187L] — Auth()

## publishing/apps/frontend/src/app/(app)/(site)/
- layout.tsx [10L] — Layout()

## publishing/apps/frontend/src/app/(app)/(site)/admin/errors/
- page.tsx [18L] — Page()

## publishing/apps/frontend/src/app/(app)/(site)/admin/stats/
- page.tsx [18L] — Page()

## publishing/apps/frontend/src/app/(app)/(site)/agents/
- layout.tsx [14L] — Layout()
- page.tsx [12L] — Page()

## publishing/apps/frontend/src/app/(app)/(site)/agents/[id]/
- page.tsx [13L] — Page()

## publishing/apps/frontend/src/app/(app)/(site)/analytics/
- page.tsx [12L] — Index()

## publishing/apps/frontend/src/app/(app)/(site)/billing/
- page.tsx [16L] — Page()

## publishing/apps/frontend/src/app/(app)/(site)/billing/lifetime/
- page.tsx [12L] — Page()

## publishing/apps/frontend/src/app/(app)/(site)/err/
- page.tsx [18L] — Page()

## publishing/apps/frontend/src/app/(app)/(site)/launches/
- page.tsx [12L] — Index()

## publishing/apps/frontend/src/app/(app)/(site)/media/
- page.tsx [13L] — Page()

## publishing/apps/frontend/src/app/(app)/(site)/plugs/
- page.tsx [8L] — Index()

## publishing/apps/frontend/src/app/(app)/(site)/settings/
- page.tsx [17L] — Index()

## publishing/apps/frontend/src/app/(app)/(site)/third-party/
- page.tsx [8L] — Index()

## publishing/apps/frontend/src/app/(app)/api/uploads/[[...path]]/
- route.ts [79L] — nodeStreamToIterator(), iteratorToStream(), GET()

## publishing/apps/frontend/src/app/(app)/auth/
- layout.tsx [43L] — AuthLayout()
- page.tsx [36L] — Auth()
- return.url.component.tsx [45L] Only an address on this app, so signing in can never send someone to — sameOriginUrl(), useReturnUrl()

## publishing/apps/frontend/src/app/(app)/auth/activate/
- page.tsx [14L] — Auth()

## publishing/apps/frontend/src/app/(app)/auth/activate/[code]/
- page.tsx [14L] — Auth()

## publishing/apps/frontend/src/app/(app)/auth/forgot/
- page.tsx [12L] — Auth()

## publishing/apps/frontend/src/app/(app)/auth/forgot/[token]/
- page.tsx [16L] — Auth()

## publishing/apps/frontend/src/app/(app)/auth/login/
- page.tsx [12L] — Auth()

## publishing/apps/frontend/src/app/(app)/auth/login-required/
- page.tsx [8L] — LoginRequiredPage()

## publishing/apps/frontend/src/app/(app)/integrations/social/
- layout.tsx [14L] — IntegrationLayout()

## publishing/apps/frontend/src/app/(app)/integrations/social/[provider]/
- page.tsx [24L] — Page()

## publishing/apps/frontend/src/app/(app)/oauth/authorize/
- layout.tsx [19L] — OAuthLayout()
- page.tsx [11L] signed-out visitors get the page too (sign in, or use self-hosted) — OAuthAuthorizePage()

## publishing/apps/frontend/src/app/(extension)/
- layout.tsx [75L] — AppLayout()

## publishing/apps/frontend/src/app/(extension)/modal/
- layout.tsx [10L] — AppLayoutIn()

## publishing/apps/frontend/src/app/(extension)/modal/[style]/[platform]/
- page.tsx [13L] — Modal()

## publishing/apps/frontend/src/app/(provider)/
- layout.tsx [79L] — AppLayout()

## publishing/apps/frontend/src/app/(provider)/provider/[p]/
- bridge.tsx [95L] Per-post media (outer array = thread entries, inner = media items).
- in-bridge.tsx [14L]
- page.tsx [68L] Provider settings WebView bridge. — Page()

## publishing/apps/frontend/src/app/(provider)/provider/add/
- page.tsx [7L] — Page()

## publishing/apps/frontend/src/components/
- signature.tsx [70L]

## publishing/apps/frontend/src/components/admin/
- admin-errors.component.tsx [418L] — safeParse(), usePlatformsList(), useErrorsList()
- admin-stats.component.tsx [380L] — isoDaysAgo(), today(), startOfWeek(), startOfMonth(), useStats()

## publishing/apps/frontend/src/components/agents/
- agent.chat.tsx [409L]
- agent.input.tsx [120L] — Input()
- agent.textarea.tsx [77L]
- agent.tsx [282L]

## publishing/apps/frontend/src/components/analytics/
- analytics.component.tsx [119L]
- chart-social.tsx [153L] — mergeDataPoints()
- chart.tsx [72L]
- stars.and.forks.interface.ts [31L]
- stars.and.forks.tsx [191L]
- stars.table.component.tsx [263L] — StarsTableComponent()

## publishing/apps/frontend/src/components/approved-apps/
- approved-apps.component.tsx [123L] — useApprovedApps()

## publishing/apps/frontend/src/components/auth/
- activate.tsx [159L] — Activate()
- after.activate.tsx [64L] — AfterActivate()
- forgot-return.tsx [109L] — ForgotReturn()
- forgot.tsx [94L] — Forgot()
- login.tsx [168L] — Login()
- login.with.oidc.tsx [32L] — LoginWithOidc()
- register.tsx [276L] — Register(), getHelpfulReasonForRegistrationFailure(), RegisterAfter()
- testimonial.component.tsx [45L] — TestimonialComponent()
- testimonial.tsx [33L]

## publishing/apps/frontend/src/components/auth/providers/
- apple.provider.tsx [35L] — AppleProvider()
- farcaster.provider.tsx [206L] — FarcasterProvider()
- github.provider.tsx [34L] — GithubProvider()
- google.provider.tsx [47L] — GoogleProvider()
- oauth.provider.tsx [47L] — OauthProvider()
- wallet.provider.tsx [185L] — WalletProvider(), DisabledAutoConnect(), InnerWallet()

## publishing/apps/frontend/src/components/auth/providers/placeholder/
- wallet.ui.provider.tsx [30L]

## publishing/apps/frontend/src/components/autopost/
- autopost.tsx [421L] — getOptions(), getOptionsChoose()

## publishing/apps/frontend/src/components/billing/
- billing.component.tsx [26L] — BillingComponent()
- billing.history.component.tsx [440L] — useInvoices(), formatAmount(), formatDate()
- embedded.billing.tsx [652L]
- faq.component.tsx [175L] — useFaqList()
- finish.trial.tsx [137L]
- first.billing.component.tsx [454L] — FirstBillingComponent(), useBillingFeatures()
- lifetime.deal.tsx [197L] — LifetimeDeal()
- main.billing.component.tsx [1062L] — useLoadCredits(), useRenewal()
- use.payment.action.tsx [25L] Consuming the PaymentIntent client_secret with the publishable key is — usePaymentAction()

## publishing/apps/frontend/src/components/developer/
- developer.component.tsx [609L] — useOAuthApp(), CopyButton()
- developer.icon.component.tsx [29L]

## publishing/apps/frontend/src/components/launches/
- add.provider.component.tsx [776L] — useAddProvider()
- ai.image.tsx [197L]
- ai.video.tsx [264L]
- bot.picture.tsx [107L]
- calendar.context.tsx [440L] — getDateRange(), useNow(), useCalendar()
- calendar.tsx [1649L] — updateDayjsLocale(), convertTimeFormatBasedOnLocality(), usePostActions(), slotDate(), DayView(), WeekView(), MonthView(), ListView(), Calendar(), CopyDebug(), Duplicate(), Preview(), +3
- continue.integration.tsx [441L]
- creation.method.badge.tsx [51L] — tooltipFor()
- customer.modal.tsx [83L]
- filters.tsx [582L] Helper function to get start and end dates based on display type — getDateRange(), Filters()
- general.preview.component.tsx [151L]
- hubspot.installed.tsx [40L] oauth/hubspot/callback sends people here after they install the Postiz
- import-debug-post.modal.tsx [256L]
- information.component.tsx [328L]
- integration.redirect.component.tsx [17L]
- internal.channels.tsx [215L]
- launches.component.tsx [803L] — SVGLine(), EditPencil(), LaunchesComponent()
- layout.standalone.tsx [34L] add-edit-modal, .hideCopilot { — AppLayout()
- merge.post.tsx [27L]
- missing-release.modal.tsx [130L]
- new.post.tsx [104L] — NewPost()
- polonto.tsx [140L] — ActionControls()
- repeat.component.tsx [155L] — getList()
- select.channels.tsx [147L]
- select.customer.tsx [148L]
- separate.post.tsx [46L]
- settings.modal.tsx [83L]
- statistics.tsx [198L]
- tags.component.tsx [660L]
- time.table.tsx [231L]
- up.down.arrow.tsx [56L]

## publishing/apps/frontend/src/components/launches/comments/
- comment.component.tsx [374L]

## publishing/apps/frontend/src/components/launches/generator/
- generator.tsx [392L] — GeneratorPopup(), GeneratorComponent()

## publishing/apps/frontend/src/components/launches/helpers/
- date.picker.tsx [319L] one part of the time in the mobile sheet, typed or stepped with the arrows
- dnd.provider.tsx [52L] the path is kept from the start of the dispatch, the editor can re-render — isInsideEditor()
- isuscitizen.utils.tsx [5L] — isUSCitizen()
- linkedin.component.tsx [175L] eslint-disable-next-line @typescript-eslint/no-empty-function — ShowLinkedinCompany(), showPostSelector()
- media.settings.component.tsx [523L] eslint-disable-next-line @typescript-eslint/no-empty-function — MediaSettingsLayout(), useMediaSettings()
- pick.platform.component.tsx [335L]
- top.title.component.tsx [58L] Translate the title using a key derived from the title itself
- use.custom.provider.function.ts [28L] — useCustomProviderFunction()
- use.existing.data.tsx [29L] the other channels the post was created with — useExistingData()
- use.expend.tsx [32L] — useExpend()
- use.formatting.ts [48L] — useFormatting()
- use.hide.top.editor.tsx [32L] — useHideTopEditor()
- use.integration.list.tsx [23L] — useIntegrationList()
- use.integration.ts [27L] — useIntegration()
- use.move.to.integration.tsx [48L] — useMoveToIntegration(), useMoveToIntegrationListener()
- use.values.ts [95L] — Empty, useValues(), useSettings(), getValues(), resetValues()

## publishing/apps/frontend/src/components/launches/menu/
- menu.tsx [760L]

## publishing/apps/frontend/src/components/launches/polonto/
- polonto.picture.generation.tsx [164L]

## publishing/apps/frontend/src/components/launches/web3/
- web3.list.tsx [28L]
- web3.provider.interface.ts [5L]

## publishing/apps/frontend/src/components/launches/web3/providers/
- moltbook.provider.tsx [175L]
- telegram.provider.tsx [126L]
- whatsapp.provider.tsx [271L]
- wrapcaster.provider.tsx [33L]

## publishing/apps/frontend/src/components/layout/
- announcement.banner.tsx [151L] — useAnnouncements()
- chatbase.component.tsx [159L] eslint-disable-next-line @typescript-eslint/no-explicit-any
- check.payment.tsx [130L]
- chrome.extension.component.tsx [31L] — ChromeExtensionComponent()
- click.outside.tsx [28L] — useClickOutside()
- continue.provider.tsx [145L]
- drop.files.tsx [41L]
- dubAnalytics.tsx [26L] — DubAnalytics(), useDubClickId()
- facebook.component.tsx [23L] — FacebookComponent()
- gtm.component.tsx [58L] eslint-disable-next-line @typescript-eslint/ban-ts-comment
- html.component.tsx [24L]
- impersonate.tsx [1148L] — useCharges(), useCouponInfo(), ManageBilling(), Subscription(), AddAnnouncement(), AddTeamMember(), ViewErrors(), ViewStats(), ImportDebugPost(), SwitchUser(), Impersonate()
- invoices.component.tsx [54L]
- language.component.tsx [157L] Register required locales — getCountryCodeForFlag(), ChangeLanguageComponent(), LanguageComponent()
- layout.context.tsx [138L] eslint-disable-next-line react/no-children-prop — LayoutContext(), setCookie(), LayoutContextInner()
- loading.tsx [44L]
- logout.component.tsx [65L]
- mode.component.tsx [60L] — ModeComponent()
- new-modal.tsx [460L] — useModals(), showModalEmitter(), useDecisionModal()
- new.subscription.tsx [15L]
- organization.selector.tsx [113L]
- pre-condition.component.tsx [51L] Please note this payment is final and not refundable.
- redirect.tsx [18L]
- sentry.component.tsx [21L] Always render children - don't block the app
- set.timezone.tsx [353L] the plugin below wraps methods of these, so they are registered first — formatter(), exactOffset(), cachedOffset(), offsetAt(), wallToInstant(), browserTimezone(), isTimezone(), applyTimezone(), getTimezone(), setUserTimezone(), newDayjs(), fromUtc(), +1
- settings.component.tsx [288L] — SettingsComponent()
- streak.component.tsx [64L]
- support.tsx [49L] — Support()
- title.tsx [15L] — Title()
- top.menu.tsx [296L] — useMenuItem()
- top.tip.tsx [7L] — ToolTip()
- user.context.tsx [43L] — useUser()

## publishing/apps/frontend/src/components/media/
- media.component.tsx [1150L] — mediaLibrarySize(), showMediaBox()
- new.uploader.tsx [332L] Uppy styles — CompressionWrapper, useUppyUploader()

## publishing/apps/frontend/src/components/new-launch/
- a.component.tsx [69L] cancelled
- add.edit.modal.tsx [291L] — postValues()
- add.post.button.tsx [51L]
- bold.text.tsx [108L]
- bullets.component.tsx [38L]
- delay.component.tsx [155L]
- dummy.code.component.tsx [51L]
- editor.tsx [1383L] — insertImages()
- heading.component.tsx [96L]
- manage.modal.tsx [1405L]
- media.settings.section.tsx [149L] the values the editor lets the user change: the global ones, or the ones — useMediaSettingsValues()
- mention.component.tsx [257L] Debounce utility for TipTap — updatePosition(), suggestion()
- mobile.top.bar.tsx [95L] the composer header on phones, a single action is triggered directly,
- modal.wrapper.component.tsx [76L]
- picks.socials.component.tsx [170L]
- select.current.tsx [222L] — useHasScroll()
- store.ts [674L]
- u.text.tsx [108L]

## publishing/apps/frontend/src/components/new-launch/finisher/
- thread.finisher.tsx [69L] — ThreadFinisher()

## publishing/apps/frontend/src/components/new-launch/providers/
- high.order.provider.tsx [391L] — Empty, getProviderSettingsMeta()
- post-comment.enum.ts [6L]
- show.all.providers.tsx [276L]

## publishing/apps/frontend/src/components/new-launch/providers/bluesky/
- bluesky.provider.tsx [21L] — SettingsComponent()

## publishing/apps/frontend/src/components/new-launch/providers/continue-provider/
- list.tsx [18L]
- with-continue-provider.tsx [152L] — withContinueProvider()

## publishing/apps/frontend/src/components/new-launch/providers/continue-provider/facebook/
- facebook.continue.tsx [48L]

## publishing/apps/frontend/src/components/new-launch/providers/continue-provider/gmb/
- gmb.continue.tsx [82L]

## publishing/apps/frontend/src/components/new-launch/providers/continue-provider/instagram/
- instagram.continue.tsx [61L]

## publishing/apps/frontend/src/components/new-launch/providers/continue-provider/linkedin/
- linkedin.continue.tsx [49L]

## publishing/apps/frontend/src/components/new-launch/providers/continue-provider/tumblr/
- tumblr.continue.tsx [76L]

## publishing/apps/frontend/src/components/new-launch/providers/continue-provider/youtube/
- youtube.continue.tsx [87L]

## publishing/apps/frontend/src/components/new-launch/providers/devto/
- devto.provider.tsx [57L]
- devto.tags.tsx [64L]
- select.organization.tsx [58L]

## publishing/apps/frontend/src/components/new-launch/providers/discord/
- discord.channel.select.tsx [58L]
- discord.provider.tsx [27L]

## publishing/apps/frontend/src/components/new-launch/providers/dribbble/
- dribbble.provider.tsx [29L]
- dribbble.teams.tsx [61L]

## publishing/apps/frontend/src/components/new-launch/providers/facebook/
- facebook.background.ts [104L] Facebook does not expose the real preset assets, so we approximate each — hexToRgb(), rgbToHex(), mix(), luminance(), getPresetBackground()
- facebook.preview.tsx [374L] — Icons()
- facebook.provider.tsx [134L] — FacebookSettings()

## publishing/apps/frontend/src/components/new-launch/providers/gmb/
- gmb.provider.tsx [170L]

## publishing/apps/frontend/src/components/new-launch/providers/hashnode/
- hashnode.provider.tsx [53L]
- hashnode.publications.tsx [58L]
- hashnode.tags.tsx [80L]

## publishing/apps/frontend/src/components/new-launch/providers/instagram/
- instagram.audio.tsx [354L] — formatDuration()
- instagram.collaborators.tsx [123L]
- instagram.preview.tsx [226L]
- instagram.tags.tsx [87L]

## publishing/apps/frontend/src/components/new-launch/providers/kick/
- kick.provider.tsx [17L]

## publishing/apps/frontend/src/components/new-launch/providers/lemmy/
- lemmy.provider.tsx [77L] control props comes from useForm (optional: if you are using FormContext)
- subreddit.tsx [163L]

## publishing/apps/frontend/src/components/new-launch/providers/linkedin/
- linkedin.preview.tsx [516L] — Icons(), LinkedinIconSmall()
- linkedin.provider.tsx [48L] — LinkedInSettings()

## publishing/apps/frontend/src/components/new-launch/providers/listmonk/
- listmonk.provider.tsx [35L] — SettingsComponent()
- select.list.tsx [58L]
- select.templates.tsx [58L]

## publishing/apps/frontend/src/components/new-launch/providers/mastodon/
- mastodon.provider.tsx [15L]

## publishing/apps/frontend/src/components/new-launch/providers/medium/
- medium.provider.tsx [45L]
- medium.publications.tsx [59L]
- medium.tags.tsx [82L]

## publishing/apps/frontend/src/components/new-launch/providers/medium/fonts/
- stylesheet.css [38L] Generated by Font Squirrel (http://www.fontsquirrel.com) on July 10, 2013 */

## publishing/apps/frontend/src/components/new-launch/providers/mewe/
- mewe.group.select.tsx [63L]
- mewe.provider.tsx [43L]

## publishing/apps/frontend/src/components/new-launch/providers/moltbook/
- moltbook.provider.tsx [36L]

## publishing/apps/frontend/src/components/new-launch/providers/nostr/
- nostr.provider.tsx [15L]

## publishing/apps/frontend/src/components/new-launch/providers/pinterest/
- pinterest.board.tsx [62L]
- pinterest.preview.tsx [162L]
- pinterest.provider.tsx [39L]

## publishing/apps/frontend/src/components/new-launch/providers/reddit/
- reddit.provider.tsx [221L]
- subreddit.tsx [272L]

## publishing/apps/frontend/src/components/new-launch/providers/skool/
- skool.group.select.tsx [58L]
- skool.label.select.tsx [66L]
- skool.provider.tsx [38L]

## publishing/apps/frontend/src/components/new-launch/providers/slack/
- slack.channel.select.tsx [58L]
- slack.provider.tsx [27L]

## publishing/apps/frontend/src/components/new-launch/providers/telegram/
- telegram.provider.tsx [15L]

## publishing/apps/frontend/src/components/new-launch/providers/threads/
- threads.provider.tsx [20L] — SettingsComponent()

## publishing/apps/frontend/src/components/new-launch/providers/tiktok/
- tiktok.location.tsx [184L]
- tiktok.music.tsx [335L] — formatDuration()
- tiktok.preview.tsx [184L]
- tiktok.provider.tsx [392L]

## publishing/apps/frontend/src/components/new-launch/providers/tumblr/
- tumblr.provider.tsx [33L] — TumblrSettings()

## publishing/apps/frontend/src/components/new-launch/providers/twitch/
- twitch.provider.tsx [95L]

## publishing/apps/frontend/src/components/new-launch/providers/vk/
- vk.provider.tsx [15L]

## publishing/apps/frontend/src/components/new-launch/providers/warpcast/
- subreddit.tsx [147L]
- warpcast.provider.tsx [68L] control props comes from useForm (optional: if you are using FormContext)

## publishing/apps/frontend/src/components/new-launch/providers/whatsapp/
- whatsapp.provider.tsx [39L]

## publishing/apps/frontend/src/components/new-launch/providers/whop/
- whop.company.select.tsx [59L]
- whop.experience.select.tsx [71L]
- whop.provider.tsx [47L]

## publishing/apps/frontend/src/components/new-launch/providers/wordpress/
- wordpress.post.type.tsx [58L]
- wordpress.provider.tsx [55L]
- wordpress.terms.tsx [59L] Fetches WordPress terms (categories or tags) for the connected site and wires

## publishing/apps/frontend/src/components/new-launch/providers/x/
- x.provider.tsx [150L] — SettingsComponent()

## publishing/apps/frontend/src/components/new-launch/providers/youtube/
- youtube.preview.tsx [151L]
- youtube.provider.tsx [105L]

## publishing/apps/frontend/src/components/new-layout/
- billing.after.tsx [105L] — BillingAfter()
- change.dir.client.tsx [18L] — ChangeDirClient()
- change.dir.tsx [23L]
- layout.component.tsx [204L] — LayoutComponent()
- layout.media.component.tsx [12L] — MediaLayoutComponent()
- logo.tsx [33L] — Logo()
- menu-item.tsx [50L]
- mobile.integration.tsx [32L]
- sentry.feedback.component.tsx [54L]

## publishing/apps/frontend/src/components/notifications/
- notification.component.tsx [210L] notifications are plain text, the urls in them become short links — replaceLinks(), useNotificationsList(), NotificationOpenComponent(), NotificationComponent()
- translate.notification.ts [87L] Maps known English in-app notification templates to Portuguese. — translateNotificationContent()

## publishing/apps/frontend/src/components/oauth/
- authorize.component.tsx [278L]
- self.hosted.component.tsx [167L] clients that read the email from userinfo (ChatGPT) need one

## publishing/apps/frontend/src/components/onboarding/
- github.onboarding.tsx [37L]
- onboarding.modal.tsx [773L]
- onboarding.tsx [48L]

## publishing/apps/frontend/src/components/platform-analytics/
- platform.analytics.tsx [310L] — PlatformAnalytics()
- render.analytics.tsx [276L]

## publishing/apps/frontend/src/components/plugs/
- plug.tsx [281L] — convertBackRegex(), Plug()
- plugs.context.ts [49L] — usePlugs()
- plugs.tsx [193L] — Plugs()

## publishing/apps/frontend/src/components/post-url-selector/
- post.url.selector.tsx [208L] — ShowPostSelector(), showPostSelector(), useShowPostSelector()

## publishing/apps/frontend/src/components/preview/
- comments.components.tsx [527L] Invisible reCAPTCHA v2: one widget for the page. Google only shows a puzzle — loadRecaptchaToken()
- copy.client.tsx [24L] — CopyClient()
- post.content.client.tsx [376L] The btnPrimary token has no alpha channel, so the tints are mixed in CSS. — markClassName(), textOffset(), clearHighlights(), applyHighlights(), marksOf()
- preview.comments.context.tsx [106L] — useComments(), usePreviewComments()
- preview.wrapper.tsx [42L] — PreviewWrapper()
- render.preview.date.client.tsx [16L] — RenderPreviewDateClient()
- render.preview.date.tsx [10L]

## publishing/apps/frontend/src/components/provider-preview/
- preview.provider.component.tsx [240L] react-hook-form trigger() result. False = at least one DTO field failed. */

## publishing/apps/frontend/src/components/public-api/
- mcp.client.icons.tsx [542L] Logos for the MCP clients shown in Settings > Agents and in onboarding.
- public.component.tsx [943L] Remote clients can't set headers, they get a URL to paste (hint = where) — getMcpOauthUrl(), CopyButton(), McpSection(), CliSection(), PublicApiContent(), PublicComponent()

## publishing/apps/frontend/src/components/sets/
- sets.tsx [222L]

## publishing/apps/frontend/src/components/settings/
- apps.component.tsx [45L]
- authentication.component.tsx [50L] — AuthenticationComponent()
- delete-account.component.tsx [162L] — useDeleteAccountInfo()
- email-notifications.component.tsx [174L] — useEmailNotifications(), EmailNotificationsComponent()
- github.component.tsx [216L]
- global.settings.tsx [31L] — GlobalSettings()
- metric.component.tsx [97L] the list has names that aren't IANA timezones (Europe/Zaporizhzhia) — MetricComponent()
- shortlink-preference.component.tsx [118L] — useShortlinkPreference(), ShortlinkPreferenceComponent()
- signatures.component.tsx [271L]
- teams.component.tsx [238L] — AddMember(), TeamsComponent()

## publishing/apps/frontend/src/components/standalone-modal/
- standalone.modal.tsx [66L]

## publishing/apps/frontend/src/components/third-parties/
- slider.component.tsx [72L]
- third-party.component.tsx [162L] — ThirdPartyComponent()
- third-party.function.tsx [89L] — useThirdPartySubmit(), useThirdPartyFunction(), useThirdPartyFunctionSWR()
- third-party.list.component.tsx [167L]
- third-party.media-library.tsx [292L]
- third-party.media.tsx [228L] — useThirdParty()
- third-party.wrapper.tsx [16L]

## publishing/apps/frontend/src/components/third-parties/providers/
- heygen.provider.tsx [250L] — HeygenProviderComponent()

## publishing/apps/frontend/src/components/ui/
- bottom.sheet.component.tsx [96L]
- check.icon.component.tsx [29L] — CheckIconComponent()
- is.scroll.hook.tsx [22L] — useHasScroll()
- logo-text.component.tsx [46L] — LogoTextComponent()
- translated-label.tsx [41L] TranslatedLabel is a wrapper component that translates labels in form components — TranslatedLabel()

## publishing/apps/frontend/src/components/ui/icons/
- index.tsx [1000L] Settings/Gear Icon

## publishing/apps/frontend/src/components/videos/
- video.context.wrapper.tsx [4L] — useVideo()
- video.render.component.tsx [54L] — useVideoFunction()
- video.wrapper.tsx [16L]

## publishing/apps/frontend/src/components/videos/providers/
- image-text-slides.provider.tsx [173L] — ImageSlidesComponent()
- seedance.provider.tsx [65L] — SeedanceComponent()

## publishing/apps/frontend/src/components/webhooks/
- webhooks.tsx [315L] — getWebhookOptions()

## publishing/apps/frontend/src/fonts/plus-jakarta-sans/
- OFL.txt [94L]
- plus.jakarta.sans.font.ts [13L]

## publishing/apps/orchestrator/
- .swcrc [38L]
- nest-cli.json [21L]
- package.json [15L]
- tsconfig.build.json [24L]
- tsconfig.json [12L]

## publishing/apps/orchestrator/src/
- app.module.ts [36L] — AppModule
- health.controller.ts [35L] — HealthController
- main.ts [23L] — bootstrap()

## publishing/apps/orchestrator/src/activities/
- autopost.activity.ts [28L] — AutopostActivity
- clipping.activity.ts [101L] An activity on main can never change its parameters, so every one takes a — ClippingActivity
- email.activity.ts [39L] — EmailActivity
- integrations.activity.ts [24L] — IntegrationsActivity
- media.activity.ts [27L] Returns the processor job id, or null when there is nothing to process — MediaActivity
- post.activity.ts [640L] — slimPost(), reanchorInterval(), PostActivity
- video.activity.ts [36L] credits are checked against the subscription, so it has to be loaded with the or — VideoActivity

## publishing/apps/orchestrator/src/signals/
- email.signal.ts [10L]
- send.email.signal.ts [11L]

## publishing/apps/orchestrator/src/workflows/
- autopost.workflow.ts [49L] — autoPostWorkflow()
- clipping.workflow.ts [205L] Submitting is a plain POST with no idempotency key. A retry after the queue — reason(), runJob(), clippingClipWorkflow(), clippingWorkflow()
- digest.email.workflow.ts [72L] — digestEmailWorkflow()
- generate.video.workflow.ts [23L] Generating a video consumes a credit, so a failed attempt is never retried — generateVideoWorkflow()
- index.ts [22L]
- missing.post.workflow.ts [36L] Keep the history small, the new run searches immediately so the hourly cadence i — missingPostWorkflow()
- process.media.workflow.ts [67L] Submitting is a plain POST with no idempotency key, so a retry after the — reason(), processMediaWorkflow()
- refresh.token.workflow.ts [56L] — refreshTokenWorkflow()
- send.email.workflow.ts [82L] — sendSingleEmailWorkflow(), sendEmailWorkflow()
- streak.workflow.ts [119L] — streakWorkflow(), streakWorkflowV2()

## publishing/apps/orchestrator/src/workflows/post-workflows/
- post.workflow.v1.0.1.ts [404L] — proxyTaskQueue(), postWorkflowV101()
- post.workflow.v1.0.2.ts [411L] — proxyTaskQueue(), postWorkflowV102()
- post.workflow.v1.0.3.ts [431L] — proxyTaskQueue(), postWorkflowV103()
- post.workflow.v1.0.4.ts [440L] — proxyTaskQueue(), postWorkflowV104()
- post.workflow.v1.0.5.ts [439L] — proxyTaskQueue(), postWorkflowV105()
- post.workflow.v1.0.6.ts [651L] — proxyTaskQueue(), proxyCheckTaskQueue(), proxyMutationTaskQueue(), postWorkflowV106()
- post.workflow.v1.0.7.ts [679L] — proxyTaskQueue(), proxyCommentTaskQueue(), proxyCheckTaskQueue(), proxyMutationTaskQueue(), postWorkflowV107()
- post.workflow.v1.0.8.ts [683L] — proxyTaskQueue(), proxyCommentTaskQueue(), proxyCheckTaskQueue(), proxyMutationTaskQueue(), postWorkflowV108()
- post.workflow.v1.0.9.ts [673L] — proxyTaskQueue(), proxyCommentTaskQueue(), proxyCheckTaskQueue(), proxyMutationTaskQueue(), postWorkflowV109()
- post.workflow.v1.1.0.ts [679L] — proxyTaskQueue(), proxyCommentTaskQueue(), proxyCheckTaskQueue(), proxyMutationTaskQueue(), postWorkflowV110()
- post.workflow.v1.1.1.ts [725L] The publishing activities heartbeat every 15s from their first line, so a — proxyTaskQueue(), proxyCommentTaskQueue(), proxyCheckTaskQueue(), proxyMutationTaskQueue(), postWorkflowV111()
- post.workflow.v1.1.2.ts [731L] The publishing activities heartbeat every 15s (withHeartbeat sends its first — proxyTaskQueue(), proxyCommentTaskQueue(), proxyCheckTaskQueue(), proxyMutationTaskQueue(), postWorkflowV112()

## publishing/apps/sdk/
- .babelrc [6L]
- .npmignore [2L]
- README.md [24L] Postiz NodeJS SDK
- package.json [24L]
- tsconfig.json [16L]
- tsup.config.ts [10L]

## publishing/apps/sdk/src/
- index.ts [96L] — toQueryString(), Postiz

## publishing/dynamicconfig/
- development-cass.yaml [4L]
- development-sql.yaml [6L]

## publishing/libraries/helpers/src/auth/
- auth.service.ts [57L] evp_bytestokey: key length in **bits**, IV length in **bytes** — deriveLegacyKeyIv(), decrypt_legacy_using_IV(), encrypt_legacy_using_IV(), AuthService

## publishing/libraries/helpers/src/configuration/
- configuration.checker.ts [111L] — ConfigurationChecker

## publishing/libraries/helpers/src/decorators/
- plug.decorator.ts [33L] Retrieve existing metadata or initialize an empty array — Plug()
- post.plug.ts [33L] Retrieve existing metadata or initialize an empty array — PostPlug()

## publishing/libraries/helpers/src/subdomain/
- all.two.level.subdomain.ts [1408L]
- subdomain.management.ts [7L] — getCookieUrlFromDomain()

## publishing/libraries/helpers/src/swagger/
- load.swagger.ts [14L] — loadSwagger()

## publishing/libraries/helpers/src/utils/
- count.length.ts [52L]
- custom.fetch.func.ts [93L] — customFetch()
- custom.fetch.tsx [47L] — useFetch()
- has.extension.ts [11L]
- internal.fetch.ts [12L] — internalFetch()
- is.dev.ts [4L] — isDev()
- is.general.server.side.ts [4L] — isGeneralServerSide()
- linkedin.company.prevent.remove.ts [11L] — linkedinCompanyPreventRemove(), afterLinkedinCompanyPreventRemove()
- posts.list.minify.ts [159L] Key mappings for minifying post list/calendar responses to reduce payload size. — mapKeys(), reverseMap(), minifyPostItem(), expandPostItem(), minifyPostsList(), expandPostsList(), minifyPosts(), expandPosts()
- remove.markdown.ts [29L] Step 2: Replace exceptions with placeholders — removeMarkdown()
- sanitize.post.content.ts [74L]
- strip.html.validation.ts [330L] — stripHtmlValidation(), convertImages(), convertMention()
- strip.links.ts [35L] Scheme'd URLs - keep this in sync with the URL detection used by the short — urlRegex(), hasLinks(), stripLinks()
- timer.ts [2L] — timer()
- use.fire.events.ts [20L] — useFireEvents()
- use.wait.for.class.tsx [43L] useWaitForClass — useWaitForClass()
- utm.saver.tsx [47L] the Facebook pixel StartTrial is sent by the backend once Stripe confirms — useUtmUrl()
- valid.images.ts [28L] here you can provide default error message if validation failed — ValidContent
- valid.url.path.ts [52L] here you can provide default error message if validation failed — ValidUrlExtension, isAllowedUploadPath(), ValidUrlPath

## publishing/libraries/nestjs-libraries/
- .eslintrc.json [19L]
- README.md [4L] nestjs-libraries
- tsconfig.json [19L]
- tsconfig.lib.json [11L]

## publishing/libraries/nestjs-libraries/src/3rdparties/
- thirdparty.interface.ts [44L] where a connected integration shows up in the post editor — ThirdParty()
- thirdparty.manager.ts [64L] — ThirdPartyManager
- thirdparty.module.ts [20L] — ThirdPartyModule

## publishing/libraries/nestjs-libraries/src/3rdparties/heygen/
- heygen.provider.ts [202L] — HeygenProvider

## publishing/libraries/nestjs-libraries/src/3rdparties/hubspot/
- hubspot.provider.ts [25L] Installed in HubSpot through installUrl, never connected with an API key — HubspotProvider

## publishing/libraries/nestjs-libraries/src/3rdparties/reelfarm/
- reelfarm.provider.ts [113L] — ReelFarmProvider

## publishing/libraries/nestjs-libraries/src/agent/
- agent.categories.ts [34L]
- agent.graph.insert.service.ts [136L] — AgentGraphInsertService
- agent.graph.service.ts [427L] — contentZod(), AgentGraphService
- agent.module.ts [13L] — AgentModule
- agent.topics.ts [83L]

## publishing/libraries/nestjs-libraries/src/chat/
- agent.tool.interface.ts [16L] needs an MCP host (e.g. renders a ui:// widget), so the in-app agent doesn't get
- async.storage.ts [32L] context.ts — runWithContext(), getContext(), getAuth(), getRequestId(), getRelay()
- auth.context.ts [17L] — checkAuth()
- chat.module.ts [15L] — ChatModule
- load.tools.service.ts [131L] — renderArray(), LoadToolsService
- mastra.service.ts [27L] — MastraService
- mastra.store.ts [7L]
- mcp.relay.service.ts [385L] Every Postiz MCP server since v2.19.0 (the first one with the API key /mcp — instanceFetch(), McpRelayService
- oauth-middleware.ts [257L] OAuth Middleware for MCP Server — createOAuthMiddleware(), createStaticTokenValidator(), createIntrospectionValidator()
- oauth-types.ts [134L] OAuth Types for MCP Authentication — escapeHeaderValue(), generateWWWAuthenticateHeader(), generateProtectedResourceMetadata(), extractBasicCredentials(), extractBearerToken()
- rules.description.decorator.ts [13L] Define metadata on the class prototype (so it can be retrieved from the class) — Rules()
- start.mcp.ts [525L] — fixAcceptHeader(), endListenStream(), startMcp()
- validation.schemas.helper.ts [31L] — getValidationSchemas()

## publishing/libraries/nestjs-libraries/src/chat/tools/
- clipping.status.tool.ts [103L] — ClippingStatusTool
- clipping.tool.ts [113L] — ClippingTool
- clipping.widget.ticket.tool.ts [70L] Meant for the clipping widget itself: visibility "app" asks the host to keep it — ClippingWidgetTicketTool
- delete.post.tool.ts [79L] — DeletePostTool
- generate.image.tool.ts [84L] — GenerateImageTool
- generate.video.options.tool.ts [86L] — GenerateVideoOptionsTool
- generate.video.tool.ts [99L] — GenerateVideoTool
- group.list.tool.ts [53L] — GroupListTool
- integration.list.tool.ts [77L] — IntegrationListTool
- integration.schedule.post.ts [302L] Same URL validation as MediaDto (valid.url.path) - each attachment must — toMedia(), IntegrationSchedulePostTool
- integration.trigger.tool.ts [169L] — IntegrationTriggerTool
- integration.validation.tool.ts [116L] — IntegrationValidationTool
- media.list.tool.ts [77L] — MediaListTool
- media.status.tool.ts [57L] — MediaStatusTool
- post.settings.tool.ts [94L] — PostSettingsTool
- posts.list.tool.ts [116L] — parseSettings(), PostsListTool
- tool.list.ts [48L]
- upload.from.url.tool.ts [94L] — UploadFromUrlTool
- upload.widget.status.tool.ts [71L] — UploadWidgetStatusTool
- upload.widget.ticket.tool.ts [64L] Meant for the upload widget itself: visibility "app" asks the host to keep it — UploadWidgetTicketTool
- upload.widget.tool.ts [58L] — UploadWidgetTool
- video.function.tool.ts [57L] — VideoFunctionTool
- video.status.tool.ts [66L] — VideoStatusTool

## publishing/libraries/nestjs-libraries/src/chat/ui/
- clipping.widget.ts [279L] MCP Apps (SEP-1865) widget, same shape as the upload widget: a single — clippingWidgetHtml()
- upload.widget.ts [332L] MCP Apps (SEP-1865) widget: a single self-contained HTML document rendered by — megabytes(), uploadWidgetHtml()

## publishing/libraries/nestjs-libraries/src/database/prisma/
- database.module.ts [118L] — DatabaseModule
- prisma.service.ts [40L] — PrismaService, PrismaRepository, PrismaTransaction
- schema.prisma [1842L]

## publishing/libraries/nestjs-libraries/src/database/prisma/admin-stats/
- admin-stats.repository.ts [491L] Unknown errors are stored as the serialized error payload, e.g. — sortDesc(), AdminStatsRepository
- admin-stats.service.ts [20L] — AdminStatsService

## publishing/libraries/nestjs-libraries/src/database/prisma/agencies/
- agencies.repository.ts [184L] — AgenciesRepository
- agencies.service.ts [218L] — AgenciesService

## publishing/libraries/nestjs-libraries/src/database/prisma/announcements/
- announcements.repository.ts [36L] — AnnouncementsRepository
- announcements.service.ts [21L] — AnnouncementsService

## publishing/libraries/nestjs-libraries/src/database/prisma/autopost/
- autopost.repository.ts [108L] — AutopostRepository
- autopost.service.ts [377L] — AutopostService

## publishing/libraries/nestjs-libraries/src/database/prisma/clipping/
- clipping.repository.ts [306L] — ClippingRepository
- clipping.service.ts [1077L] — ClippingStop, ClippingService

## publishing/libraries/nestjs-libraries/src/database/prisma/errors/
- errors.repository.ts [144L] — ErrorsRepository
- errors.service.ts [22L] — ErrorsService

## publishing/libraries/nestjs-libraries/src/database/prisma/integrations/
- integration.repository.ts [1020L] — IntegrationRepository
- integration.service.ts [720L] — IntegrationService

## publishing/libraries/nestjs-libraries/src/database/prisma/media/
- media.repository.ts [175L] — MediaRepository
- media.service.ts [674L] — MediaService

## publishing/libraries/nestjs-libraries/src/database/prisma/notifications/
- notification.service.ts [118L] — NotificationService
- notifications.repository.ts [127L] — NotificationsRepository

## publishing/libraries/nestjs-libraries/src/database/prisma/oauth/
- oauth.repository.ts [439L] — OAuthRepository
- oauth.service.ts [866L] The static app HubSpot agents connect with (created under Settings > — openAiOAuthClientId(), enableOidcEmailClaims(), hubspotOAuthClientId(), hubspotAppClientId(), hubspotAppClientSecret(), hubspotInstallRedirectUri(), hubspotInstallUrl(), selfHostedRelayEnabled(), isVerifiedHost(), OAuthService

## publishing/libraries/nestjs-libraries/src/database/prisma/organizations/
- organization.repository.ts [661L] — OrganizationRepository
- organization.service.ts [223L] — OrganizationService

## publishing/libraries/nestjs-libraries/src/database/prisma/posts/
- posts.repository.ts [1231L] — PostsRepository
- posts.service.ts [1788L] — PostsService

## publishing/libraries/nestjs-libraries/src/database/prisma/sets/
- sets.repository.ts [58L] — SetsRepository
- sets.service.ts [24L] — SetsService

## publishing/libraries/nestjs-libraries/src/database/prisma/signatures/
- signature.repository.ts [56L] — SignatureRepository
- signature.service.ts [29L] — SignatureService

## publishing/libraries/nestjs-libraries/src/database/prisma/subscriptions/
- pricing.ts [120L]
- subscription.repository.ts [357L] — SubscriptionRepository
- subscription.service.ts [451L] — SubscriptionService

## publishing/libraries/nestjs-libraries/src/database/prisma/third-party/
- third-party.repository.ts [65L] — ThirdPartyRepository
- third-party.service.ts [29L] — ThirdPartyService

## publishing/libraries/nestjs-libraries/src/database/prisma/users/
- users.repository.ts [318L] — UsersRepository
- users.service.ts [183L] — UsersService

## publishing/libraries/nestjs-libraries/src/database/prisma/webhooks/
- webhooks.repository.ts [88L] — WebhooksRepository
- webhooks.service.ts [25L] — WebhooksService

## publishing/libraries/nestjs-libraries/src/deepgram/
- deepgram.service.ts [50L] Deepgram fetches the file itself, so media bytes never pass through here. — DeepgramService

## publishing/libraries/nestjs-libraries/src/dtos/agencies/
- create.agency.dto.ts [97L] — CreateAgencyLogoDto, CreateAgencyDto

## publishing/libraries/nestjs-libraries/src/dtos/analytics/
- get.org.activity.dto.ts [12L] — GetOrgActivityDto
- stars.list.dto.ts [16L] — StarsListDto

## publishing/libraries/nestjs-libraries/src/dtos/announcements/
- announcements.dto.ts [17L] — AnnouncementDto

## publishing/libraries/nestjs-libraries/src/dtos/auth/
- create.org.user.dto.ts [41L] — CreateOrgUserDto
- forgot-return.password.dto.ts [29L] — ForgotReturnPasswordDto
- forgot.password.dto.ts [9L] — ForgotPasswordDto
- login.user.dto.ts [32L] — LoginUserDto
- resend-activation.dto.ts [10L] — ResendActivationDto

## publishing/libraries/nestjs-libraries/src/dtos/autopost/
- autopost.dto.ts [65L] — Integrations, AutopostDto

## publishing/libraries/nestjs-libraries/src/dtos/billing/
- admin.apply.coupon.dto.ts [19L] — AdminApplyCouponDto
- billing.subscribe.dto.ts [31L] Facebook pixel cookies (_fbc / _fbp), saved on the subscription for the — BillingSubscribeDto
- billing.sync.dto.ts [8L] — BillingSyncDto
- reset.credits.dto.ts [8L] — ResetCreditsDto

## publishing/libraries/nestjs-libraries/src/dtos/clipping/
- clipping.dto.ts [36L] channels to create the draft posts for; without any, the clips only land in the  — ClippingDto

## publishing/libraries/nestjs-libraries/src/dtos/comments/
- add.comment.dto.ts [57L] — AddCommentDto, CreatePublicCommentDto, ResolveCommentDto

## publishing/libraries/nestjs-libraries/src/dtos/generator/
- create.generated.posts.dto.ts [53L] — InnerPost, PostGroup, CreateGeneratedPostsDto
- generator.dto.ts [19L] — GeneratorDto

## publishing/libraries/nestjs-libraries/src/dtos/integrations/
- api.key.dto.ts [10L] — ApiKeyDto
- connect.integration.dto.ts [20L] — ConnectIntegrationDto
- customer.name.dto.ts [8L] — CustomerNameDto
- integration.function.dto.ts [14L] — IntegrationFunctionDto
- integration.name.dto.ts [8L] — IntegrationNameDto
- integration.time.dto.ts [16L] — IntegrationValidateTimeDto, IntegrationTimeDto

## publishing/libraries/nestjs-libraries/src/dtos/media/
- get.media.dto.ts [15L] — GetMediaDto
- media.dto.ts [23L] — MediaDto
- save.media.information.dto.ts [18L] — SaveMediaInformationDto
- upload.dto.ts [25L] — UploadDto

## publishing/libraries/nestjs-libraries/src/dtos/notifications/
- get.notifications.dto.ts [11L] — GetNotificationsDto

## publishing/libraries/nestjs-libraries/src/dtos/oauth/
- authorize-oauth.dto.ts [125L] — AuthorizeOAuthQueryDto, ApproveOAuthDto, AuthorizeSelfHostedDto
- create-oauth-app.dto.ts [23L] — CreateOAuthAppDto
- hubspot-install.dto.ts [9L] Added by HubSpot to the HubSpot app's redirect URL after an install — HubspotInstallQueryDto
- register-client.dto.ts [48L] https, http loopback or a private-use scheme (cursor://...), — RegisterClientDto
- token-exchange.dto.ts [39L] The refresh_token grant sends refresh_token instead — TokenExchangeDto
- update-oauth-app.dto.ts [23L] — UpdateOAuthAppDto

## publishing/libraries/nestjs-libraries/src/dtos/plugs/
- plug.dto.ts [24L] — FieldsDto, PlugDto

## publishing/libraries/nestjs-libraries/src/dtos/posts/
- change.post.status.dto.ts [7L] — ChangePostStatusDto
- create.post.dto.ts [137L] — Integration, PostContent, Post, Tags, CreatePostDto
- create.tag.dto.ts [10L] — CreateTagDto
- get.posts.dto.ts [18L] — GetPostsDto
- get.posts.list.dto.ts [42L] — GetPostsListDto
- update.post.settings.dto.ts [8L] — UpdatePostSettingsDto

## publishing/libraries/nestjs-libraries/src/dtos/posts/providers-settings/
- all.providers.settings.ts [120L] — allProviders(), EmptySettings
- dev.to.settings.dto.ts [48L] — DevToSettingsDto
- dev.to.tags.settings.dto.ts [10L] — DevToTagsSettingsDto
- discord.dto.ts [13L] — DiscordDto
- dribbble.dto.ts [22L] — DribbbleDto
- facebook.dto.ts [120L] Maximum characters Facebook allows on a background ("text format") post. — FacebookDto
- farcaster.dto.ts [18L] — FarcasterId, FarcasterValue, FarcasterDto
- gmb.settings.dto.ts [70L] — GmbSettingsDto
- hashnode.settings.dto.ts [60L] — HashnodeTagsSettings, HashnodeSettingsDto
- instagram.dto.ts [74L] — Collaborators, InstagramAudio, InstagramDto
- kick.dto.ts [2L] — KickDto
- lemmy.dto.ts [47L] — LemmySettingsDtoInner, LemmySettingsValueDto, LemmySettingsDto
- linkedin.dto.ts [11L] — LinkedinDto
- listmonk.dto.ts [25L] — ListmonkDto
- medium.settings.dto.ts [55L] — MediumTagsSettings, MediumSettingsDto
- mewe.dto.ts [20L] — MeweDto
- moltbook.dto.ts [8L] — MoltbookDto
- pinterest.dto.ts [47L] — PinterestSettingsDto
- reddit.dto.ts [84L] — RedditFlairDto, RedditSettingsDtoInner, RedditSettingsValueDto, RedditSettingsDto
- skool.dto.ts [29L] — SkoolDto
- slack.dto.ts [13L] — SlackDto
- tiktok.dto.ts [179L] — TikTokMusic, TikTokLocation, TikTokDto
- tumblr.dto.ts [41L] — TumblrDto
- twitch.dto.ts [12L] — TwitchDto
- whatsapp.dto.ts [13L] — WhatsappDto
- whop.dto.ts [25L] — WhopDto
- wordpress.dto.ts [44L] — WordpressDto
- x.dto.ts [73L] — XDto
- youtube.settings.dto.ts [93L] YouTube caps the combined length of all tags at 500 characters. — getYoutubeTagsLength(), IsYoutubeTagsLengthConstraint, IsYoutubeTagsLength(), YoutubeTagsSettings, YoutubeSettingsDto

## publishing/libraries/nestjs-libraries/src/dtos/posts/transformers/
- integration.settings.transformer.ts [41L] Get the integration from the database — IntegrationSettingsTransformer, TransformIntegrationSettings()

## publishing/libraries/nestjs-libraries/src/dtos/sets/
- sets.dto.ts [29L] — SetsDto, UpdateSetsDto

## publishing/libraries/nestjs-libraries/src/dtos/settings/
- add.team.member.dto.ts [24L] — AddTeamMemberDto
- admin.add.team.member.dto.ts [12L] — AdminAddTeamMemberDto
- shortlink-preference.dto.ts [9L] — ShortlinkPreferenceDto

## publishing/libraries/nestjs-libraries/src/dtos/signature/
- signature.dto.ts [12L] — SignatureDto

## publishing/libraries/nestjs-libraries/src/dtos/third-party/
- import-media.dto.ts [31L] — ImportMediaItemDto, ImportMediaDto

## publishing/libraries/nestjs-libraries/src/dtos/users/
- email-notifications.dto.ts [14L] — EmailNotificationsDto
- timezone.dto.ts [9L] empty means the browser's timezone — TimezoneDto
- user.details.dto.ts [22L] — UserDetailDto

## publishing/libraries/nestjs-libraries/src/dtos/videos/
- video.dto.ts [35L] Check if the text is in the list of valid video types — ValidIn, VideoDto
- video.function.dto.ts [12L] — VideoFunctionDto

## publishing/libraries/nestjs-libraries/src/dtos/webhooks/
- ssrf.safe.dispatcher.ts [77L] Pins DNS resolution: every resolved IP is checked with `isBlockedIp` and — ssrfSafeLookup(), getSsrfSafeDispatcher(), getSsrfSafeAxios()
- webhook.url.validator.ts [136L] BlockList matches an IPv4 rule against the address in any notation, — isBlockedIPv4(), isBlockedIPv6(), isBlockedIp(), isSafePublicHttpsUrl(), IsSafeWebhookUrlConstraint, IsSafeWebhookUrl()
- webhooks.dto.ts [65L] — WebhooksIntegrationDto, WebhooksDto, OnlyURL, UpdateDto

## publishing/libraries/nestjs-libraries/src/emails/
- email.interface.ts [13L]
- empty.provider.ts [10L] — EmptyProvider
- node.mailer.provider.ts [41L] — NodeMailerProvider
- resend.provider.ts [34L] The SDK returns API errors (like 429 rate limits) instead of throwing, — ResendProvider

## publishing/libraries/nestjs-libraries/src/integrations/
- dashboard.function.decorator.ts [16L] Lets the dashboard run a provider method without making it a @Tool, which — DashboardFunction()
- integration.manager.ts [251L] — IntegrationManager
- integration.missing.scopes.ts [17L] — NotEnoughScopesFilter
- refresh.integration.service.ts [138L] — RefreshIntegrationService
- social.abstract.ts [707L] Media reads answer headers in well under a second and the chunk sizes the — isReadTimeout(), stripQuery(), truncateForTemporal(), RefreshToken, Disconnect, PublishedWithError, BadBody, NotEnoughScopes, safeStringify()
- tool.decorator.ts [18L] Retrieve existing metadata or initialize an empty array — Tool()

## publishing/libraries/nestjs-libraries/src/integrations/social/
- bluesky.provider.ts [1001L] — reduceImageBySize(), startVideoUpload(), getVideoJobStatus(), uploadVideo(), BlueskyProvider
- dev.to.provider.ts [189L] — DevToProvider
- discord.provider.ts [399L] — DiscordProvider
- dribbble.provider.ts [241L] — DribbbleProvider
- facebook.provider.ts [1282L] — FacebookProvider
- farcaster.provider.ts [286L] — FarcasterProvider
- gmb.provider.ts [651L] — clientAndGmb(), GmbProvider
- hashnode.provider.ts [245L] — HashnodeProvider
- hashnode.tags.ts [5195L]
- instagram.provider.ts [1358L] — InstagramProvider
- instagram.standalone.provider.ts [277L] — InstagramStandaloneProvider
- kick.provider.ts [229L] — KickProvider
- lemmy.provider.ts [404L] — LemmyProvider
- linkedin.page.provider.ts [946L] — LinkedinPageProvider
- linkedin.provider.ts [1247L] — LinkedinProvider
- listmonk.provider.ts [290L] — ListmonkProvider
- mastodon.custom.provider.ts [138L] — MastodonCustomProvider
- mastodon.provider.ts [567L] Travels through the workflow history between postPending, checkPostStatus — MastodonProvider
- medium.provider.ts [144L] — MediumProvider
- mewe.provider.ts [298L] — MeweProvider
- moltbook.provider.ts [203L] — MoltbookProvider
- nostr.provider.ts [239L] — NostrProvider
- pinterest.provider.ts [707L] Travels through the workflow history between postPending, checkPostStatus — PinterestProvider
- reddit.provider.ts [884L] Travels through the workflow history between postPending, checkPostStatus — RedditProvider
- skool.provider.ts [387L] — SkoolProvider
- slack.provider.ts [339L] — SlackProvider
- social.integrations.interface.ts [247L]
- telegram.provider.ts [378L] Added to support local storage posting — TelegramProvider
- threads.provider.ts [914L] — ThreadsProvider
- tiktok.business.provider.ts [1288L] — TiktokBusinessProvider
- tiktok.provider.ts [1316L] — TiktokProvider
- tumblr.provider.ts [653L] — TumblrProvider
- twitch.provider.ts [293L] — TwitchProvider
- vk.provider.ts [342L] — VkProvider
- whatsapp.provider.ts [632L] — WhatsappProvider
- whop.provider.ts [431L] — WhopProvider
- wordpress.provider.ts [380L] import FormData from 'form-data'; — WordpressProvider
- x.provider.ts [1757L] — XProvider
- youtube.provider.ts [1107L] — clientAndYoutube(), YoutubeProvider

## publishing/libraries/nestjs-libraries/src/newsletter/
- newsletter.interface.ts [4L]
- newsletter.service.ts [21L] — NewsletterService
- providers.ts [10L]

## publishing/libraries/nestjs-libraries/src/newsletter/providers/
- beehiiv.provider.ts [27L] — BeehiivProvider
- email-empty.provider.ts [9L] — EmailEmptyProvider
- listmonk.provider.ts [46L] — ListmonkProvider

## publishing/libraries/nestjs-libraries/src/openai/
- extract.content.service.ts [93L] only element that has a title — findDepth(), ExtractContentService
- fal.service.ts [49L] — FalService
- generation.error.ts [45L] e.g. "400 Your request was rejected by the safety system, safety_violations=[sex — generationError()
- openai.service.ts [330L] — OpenaiService

## publishing/libraries/nestjs-libraries/src/redis/
- redis.service.ts [45L] Create a mock Redis implementation for testing environments — MockRedis

## publishing/libraries/nestjs-libraries/src/sentry/
- initialize.sentry.ts [93L] never let telemetry break a request */ — setSentryUserContext(), initializeSentry()
- sentry.exception.ts [8L]

## publishing/libraries/nestjs-libraries/src/services/
- codes.service.ts [19L] — CodesService
- email.service.ts [153L] — EmailService
- exception.filter.ts [26L] — HttpForbiddenException, HttpExceptionFilter
- make.is.ts [11L] — makeId()
- make.secure.id.ts [18L] Same alphabet and shape as makeId, but every character comes from the — makeSecureId()
- stripe.country.list.ts [112L]
- stripe.service.ts [1731L] — StripeService

## publishing/libraries/nestjs-libraries/src/services/payment/
- payment.provider.interface.ts [217L] One row of the billing history, in a provider neutral shape — PaymentProvider()
- payment.provider.manager.ts [48L] — PaymentProviderManager
- payment.providers.ts [3L]
- payment.service.ts [147L] — PaymentService

## publishing/libraries/nestjs-libraries/src/services/payment/providers/
- revenuecat.provider.ts [187L] — RevenueCatProvider

## publishing/libraries/nestjs-libraries/src/short-linking/
- short-linking.interface.ts [13L]
- short.link.service.ts [160L] — ShortLinkService

## publishing/libraries/nestjs-libraries/src/short-linking/providers/
- dub.ts [89L] — getOptions(), Dub
- empty.ts [25L] — Empty
- kutt.ts [123L] — getOptions(), Kutt
- linkdrip.ts [57L] — getOptions(), LinkDrip
- short.io.ts [97L] — ShortIo

## publishing/libraries/nestjs-libraries/src/temporal/
- email.queues.ts [13L] Resend allows 10 requests per second for the whole team (ratelimit-limit
- infinite.workflow.register.ts [32L] — InfiniteWorkflowRegister, InfiniteWorkflowRegisterModule
- temporal.heartbeat.ts [81L] Heartbeats are throttled by the SDK (min of ~80% of the workflow's — readDetails(), setHeartbeatDetails()
- temporal.module.ts [101L] Queues this worker server should NOT run, comma-separated — getTemporalModule()
- temporal.register.ts [49L] — TemporalRegister, TemporalRegisterMissingSearchAttributesModule
- temporal.search.attribute.ts [15L]

## publishing/libraries/nestjs-libraries/src/throttler/
- throttler.provider.ts [51L] — isPublicComment(), ThrottlerBehindProxyGuard, ThrottlerRealIpGuard

## publishing/libraries/nestjs-libraries/src/track/
- track.cookies.ts [56L] Sets the visitor cookies on the root domain, so postiz.com and — cookieOptions(), applyTrackCookies()
- track.service.ts [103L] The Conversions API is called directly instead of through — TrackService

## publishing/libraries/nestjs-libraries/src/upload/
- clipping.processor.interface.ts [124L] Contract of the ingest and clip jobs of the media service (postiz-uploader
- cloudflare.storage.ts [264L] eslint-disable-next-line @typescript-eslint/no-var-requires — CloudflareStorage
- custom.upload.validation.ts [94L] eslint-disable-next-line @typescript-eslint/no-var-requires — getMaxSize(), maxSizeStream(), uploadStreamToStorage()
- data.url.ts [27L] Parses a `data:` URL into a Buffer and its mime type. — parseDataUrl()
- local.storage.ts [167L] eslint-disable-next-line @typescript-eslint/no-var-requires — LocalStorage
- media.processor.interface.ts [73L] Contract of the media normalization service (postiz-uploader schema/v1).
- multer.stream.engine.ts [68L] Multer storage engine that streams each incoming file straight into — MulterStreamEngine, streamUploadOptions()
- r2.uploader.ts [302L] eslint-disable-next-line @typescript-eslint/no-var-requires — multipartExtToMime(), normalizeExtension(), generateRandomString(), handleR2Upload(), simpleUpload(), createMultipartUpload(), prepareUploadParts(), listParts(), completeMultipartUpload(), abortMultipartUpload(), signPart()
- runpod.media.processor.ts [74L] RunPod Serverless wraps every request as { input } and every result as — RunPodMediaProcessor
- upload.factory.ts [93L] — UploadFactory
- upload.interface.ts [37L] Streams the body straight into storage without buffering it. The caller
- upload.module.ts [10L] — UploadModule

## publishing/libraries/nestjs-libraries/src/user/
- include.deleted.from.request.ts [9L]
- oauth.user.id.from.request.ts [9L]
- org.from.request.ts [9L]
- track.enum.ts [8L]
- user.agent.ts [9L]
- user.from.request.ts [9L]

## publishing/libraries/nestjs-libraries/src/videos/
- video.interface.ts [69L] — ExposeVideoFunction(), Video()
- video.manager.ts [57L] — VideoManager
- video.module.ts [14L] — VideoModule

## publishing/libraries/nestjs-libraries/src/videos/images-slides/
- images.slides.ts [288L] — elevenLabsError(), getAudioDuration(), ImagesSlidesParams, ImagesSlides

## publishing/libraries/nestjs-libraries/src/videos/seedance/
- seedance.ts [115L] — Image, SeedanceParams, Seedance

## publishing/libraries/react-shared-libraries/
- .eslintrc.json [19L]
- README.md [4L] nestjs-libraries
- tsconfig.json [20L]
- tsconfig.lib.json [12L]

## publishing/libraries/react-shared-libraries/src/form/
- button.tsx [78L] — ReactLoading()
- canonical.tsx [97L]
- checkbox.tsx [82L]
- color.picker.tsx [120L]
- custom.select.tsx [172L]
- input.tsx [85L]
- multi.select.tsx [93L] Controlled multi-select primitive: renders a scrollable checkbox list and
- select.tsx [71L]
- slider.tsx [33L]
- textarea.tsx [62L]
- total.tsx [74L]

## publishing/libraries/react-shared-libraries/src/helpers/
- delete.dialog.tsx [20L] — deleteDialog()
- image.with.fallback.tsx [30L]
- is.general.tsx [7L] — isGeneral()
- mantine.wrapper.tsx [16L] — MantineWrapper()
- safe.image.tsx [32L]
- testomonials.tsx [228L]
- uppy.upload.ts [218L] Keeps a file in the "processing" state after it reached the bucket until the — sleep(), WaitForMediaProcessing, fetchUploadApiEndpoint(), getUppyUploadPlugin()
- use.is.visible.tsx [33L] — usePageVisibility()
- use.media.directory.ts [10L] — useMediaDirectory()
- use.prevent.window.unload.tsx [10L] — usePreventWindowUnload()
- use.state.callback.ts [23L] cb.current is `undefined` on initial render, — useStateCallback()
- use.track.tsx [46L] — useTrack()
- utc.date.render.tsx [12L]
- variable.context.tsx [98L] — useVariables(), loadVars()
- video.frame.tsx [18L]
- video.or.image.tsx [34L]

## publishing/libraries/react-shared-libraries/src/sentry/
- initialize.sentry.client.ts [53L] never let telemetry break the app */ — setSentryUser(), initializeSentryClient()
- initialize.sentry.next.basic.ts [151L] Browser wallet extensions (Phantom, MetaMask, etc.) reject with a plain — initializeSentryBasic()
- initialize.sentry.server.ts [6L] — initializeSentryServer()

## publishing/libraries/react-shared-libraries/src/toaster/
- toaster.tsx [124L] — Toaster(), useToaster()

## publishing/libraries/react-shared-libraries/src/translation/
- get.transation.service.client.ts [18L] — useT(), useTranslationSettings()
- get.translation.service.backend.ts [13L] — getT()
- i18n.config.ts [22L]
- i18next.ts [32L] Fork default: Portuguese when no cookie/header yet.
- translated-label.tsx [41L] TranslatedLabel is a wrapper component that translates labels in form components — TranslatedLabel()

## publishing/libraries/react-shared-libraries/src/translation/locales/ar/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/bn/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/de/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/en/
- translation.json [1241L]

## publishing/libraries/react-shared-libraries/src/translation/locales/es/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/fr/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/he/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/it/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/ja/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/ka_ge/
- translation.json [509L]

## publishing/libraries/react-shared-libraries/src/translation/locales/ko/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/pt/
- translation.json [1241L]

## publishing/libraries/react-shared-libraries/src/translation/locales/ru/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/tr/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/vi/
- translation.json [900L]

## publishing/libraries/react-shared-libraries/src/translation/locales/zh/
- translation.json [900L]

## publishing/var/docker/
- create-namespace-default.sh [7L]
- docker-build.sh [8L]
- docker-create.sh [6L] usr/bin/env bash
- nginx.conf [70L]
