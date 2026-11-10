# MAP/apps

## apps/backend/
- nest-cli.json [21L]
- package.json [15L]
- tsconfig.build.json [24L]
- tsconfig.json [13L]

## apps/backend/src/
- app.module.ts [67L] — AppModule
- main.ts [113L] — start(), checkConfiguration()

## apps/backend/src/api/
- api.module.ts [142L] — ApiModule

## apps/backend/src/api/routes/
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

## apps/backend/src/assets/
- .gitkeep [0L]

## apps/backend/src/public-api/
- public.api.module.ts [40L] — PublicApiModule

## apps/backend/src/public-api/routes/v1/
- public.integrations.controller.ts [763L] — PublicIntegrationsController

## apps/backend/src/services/auth/
- auth.middleware.ts [132L] — removeAuth(), AuthMiddleware
- auth.service.ts [339L] — AuthService
- clipping.widget.auth.middleware.ts [35L] The MCP clipping widget runs in the host's sandboxed iframe (a foreign origin — ClippingWidgetAuthMiddleware
- providers.interface.ts [35L] — AuthProvider()
- public.auth.middleware.ts [117L] — PublicAuthMiddleware
- super.admin.guard.ts [39L] eslint-disable-next-line @typescript-eslint/ban-ts-comment — SuperAdminGuard
- upload.widget.auth.middleware.ts [35L] The MCP upload widget runs in the host's sandboxed iframe (a foreign origin — UploadWidgetAuthMiddleware

## apps/backend/src/services/auth/permissions/
- permission.exception.class.ts [29L] — SubscriptionException
- permissions.ability.ts [8L] — CheckPolicies()
- permissions.guard.ts [70L] — PoliciesGuard
- permissions.service.ts [174L] — PermissionsService
- subscription.exception.ts [60L] — SubscriptionExceptionFilter, getErrorMessage()

## apps/backend/src/services/auth/providers/
- apple.provider.ts [143L] — getConfig(), defaultRedirect(), clientSecret(), AppleProvider
- farcaster.provider.ts [44L] no OAuth redirect here, the frontend only needs the state nonce that — FarcasterProvider
- github.provider.ts [61L] — GithubProvider
- google.provider.ts [64L] — defaultRedirect(), makeClient(), GoogleProvider
- oauth.provider.ts [96L] — OauthProvider
- providers.manager.ts [24L] — AuthProviderManager
- wallet.provider.ts [91L] — hexToUint8Array(), WalletProvider

## apps/commands/
- nest-cli.json [21L]
- package.json [14L]
- tsconfig.build.json [24L]
- tsconfig.json [13L]

## apps/commands/src/
- command.module.ts [18L] — CommandModule
- main.ts [22L] some comment again — bootstrap()

## apps/commands/src/tasks/
- agent.run.ts [16L] — AgentRun
- configuration.ts [33L] — ConfigurationTask
- refresh.tokens.ts [17L] — RefreshTokens

## apps/extension/
- custom-vite-plugins.ts [64L] plugin to remove dev icons from prod build — stripDevIcons(), crxI18n()
- manifest.dev.json [31L]
- manifest.json [30L]
- package.json [11L]
- tsconfig.json [27L]
- vite.config.base.ts [52L] set this flag to true, if you want localization support
- vite.config.chrome.ts [53L]
- vite.config.ts [24L]

## apps/extension/src/
- background.ts [210L] — isOriginAllowed(), extractCookies(), getStoredEntries(), setStoredEntries(), ensureAlarm(), clearAlarmIfEmpty(), refreshAllCookies()

## apps/extension/src/providers/
- cookie-provider.interface.ts [20L] The cookie name to extract, e.g., 'client_id' */
- provider.registry.ts [19L] — getAllProviders(), getProvider()

## apps/extension/src/providers/list/
- skool.provider.ts [13L]

## apps/extension/src/types/
- messages.ts [86L]

## apps/frontend/
- AGENTS.md [10L]
- README.md [37L] or
- eslint.config.mjs [19L]
- next.config.js [113L] Document-Policy header for browser profiling
- package.json [19L]
- postcss.config.mjs [9L]
- tailwind.config.cjs [285L]
- tsconfig.json [38L]

## apps/frontend/public/
- .gitkeep [0L]

## apps/frontend/scripts/
- fetch-gtm.mjs [51L]

## apps/frontend/src/
- chrome.d.ts [16L] Minimal Chrome extension API types for externally_connectable messaging.
- instrumentation.ts [12L] — register()
- proxy.ts [182L] This function can be marked `async` if using `await` inside — proxy()
- sentry.edge.config.ts [3L]
- sentry.server.config.ts [4L]

## apps/frontend/src/app/
- colors.scss [241L]
- global-error.tsx [25L] The variables context is not mounted here (this replaces the root — GlobalError()
- global.scss [873L]

## apps/frontend/src/app/(app)/
- layout.tsx [117L] — AppLayout()

## apps/frontend/src/app/(app)/(preview)/p/[id]/
- layout.tsx [11L] — AppLayout()
- page.tsx [187L] — Auth()

## apps/frontend/src/app/(app)/(site)/
- layout.tsx [10L] — Layout()

## apps/frontend/src/app/(app)/(site)/admin/errors/
- page.tsx [18L] — Page()

## apps/frontend/src/app/(app)/(site)/admin/stats/
- page.tsx [18L] — Page()

## apps/frontend/src/app/(app)/(site)/agents/
- layout.tsx [14L] — Layout()
- page.tsx [12L] — Page()

## apps/frontend/src/app/(app)/(site)/agents/[id]/
- page.tsx [13L] — Page()

## apps/frontend/src/app/(app)/(site)/analytics/
- page.tsx [12L] — Index()

## apps/frontend/src/app/(app)/(site)/billing/
- page.tsx [16L] — Page()

## apps/frontend/src/app/(app)/(site)/billing/lifetime/
- page.tsx [12L] — Page()

## apps/frontend/src/app/(app)/(site)/err/
- page.tsx [18L] — Page()

## apps/frontend/src/app/(app)/(site)/launches/
- page.tsx [12L] — Index()

## apps/frontend/src/app/(app)/(site)/media/
- page.tsx [13L] — Page()

## apps/frontend/src/app/(app)/(site)/plugs/
- page.tsx [8L] — Index()

## apps/frontend/src/app/(app)/(site)/settings/
- page.tsx [17L] — Index()

## apps/frontend/src/app/(app)/(site)/third-party/
- page.tsx [8L] — Index()

## apps/frontend/src/app/(app)/api/uploads/[[...path]]/
- route.ts [79L] — nodeStreamToIterator(), iteratorToStream(), GET()

## apps/frontend/src/app/(app)/auth/
- layout.tsx [43L] — AuthLayout()
- page.tsx [36L] — Auth()
- return.url.component.tsx [45L] Only an address on this app, so signing in can never send someone to — sameOriginUrl(), useReturnUrl()

## apps/frontend/src/app/(app)/auth/activate/
- page.tsx [14L] — Auth()

## apps/frontend/src/app/(app)/auth/activate/[code]/
- page.tsx [14L] — Auth()

## apps/frontend/src/app/(app)/auth/forgot/
- page.tsx [12L] — Auth()

## apps/frontend/src/app/(app)/auth/forgot/[token]/
- page.tsx [16L] — Auth()

## apps/frontend/src/app/(app)/auth/login/
- page.tsx [12L] — Auth()

## apps/frontend/src/app/(app)/auth/login-required/
- page.tsx [8L] — LoginRequiredPage()

## apps/frontend/src/app/(app)/integrations/social/
- layout.tsx [14L] — IntegrationLayout()

## apps/frontend/src/app/(app)/integrations/social/[provider]/
- page.tsx [24L] — Page()

## apps/frontend/src/app/(app)/oauth/authorize/
- layout.tsx [19L] — OAuthLayout()
- page.tsx [11L] signed-out visitors get the page too (sign in, or use self-hosted) — OAuthAuthorizePage()

## apps/frontend/src/app/(extension)/
- layout.tsx [75L] — AppLayout()

## apps/frontend/src/app/(extension)/modal/
- layout.tsx [10L] — AppLayoutIn()

## apps/frontend/src/app/(extension)/modal/[style]/[platform]/
- page.tsx [13L] — Modal()

## apps/frontend/src/app/(provider)/
- layout.tsx [79L] — AppLayout()

## apps/frontend/src/app/(provider)/provider/[p]/
- bridge.tsx [95L] Per-post media (outer array = thread entries, inner = media items).
- in-bridge.tsx [14L]
- page.tsx [68L] Provider settings WebView bridge. — Page()

## apps/frontend/src/app/(provider)/provider/add/
- page.tsx [7L] — Page()

## apps/frontend/src/components/
- signature.tsx [70L]

## apps/frontend/src/components/admin/
- admin-errors.component.tsx [418L] — safeParse(), usePlatformsList(), useErrorsList()
- admin-stats.component.tsx [380L] — isoDaysAgo(), today(), startOfWeek(), startOfMonth(), useStats()

## apps/frontend/src/components/agents/
- agent.chat.tsx [409L]
- agent.input.tsx [120L] — Input()
- agent.textarea.tsx [77L]
- agent.tsx [282L]

## apps/frontend/src/components/analytics/
- analytics.component.tsx [119L]
- chart-social.tsx [153L] — mergeDataPoints()
- chart.tsx [72L]
- stars.and.forks.interface.ts [31L]
- stars.and.forks.tsx [191L]
- stars.table.component.tsx [263L] — StarsTableComponent()

## apps/frontend/src/components/approved-apps/
- approved-apps.component.tsx [123L] — useApprovedApps()

## apps/frontend/src/components/auth/
- activate.tsx [159L] — Activate()
- after.activate.tsx [64L] — AfterActivate()
- forgot-return.tsx [109L] — ForgotReturn()
- forgot.tsx [94L] — Forgot()
- login.tsx [168L] — Login()
- login.with.oidc.tsx [32L] — LoginWithOidc()
- register.tsx [276L] — Register(), getHelpfulReasonForRegistrationFailure(), RegisterAfter()
- testimonial.component.tsx [45L] — TestimonialComponent()
- testimonial.tsx [33L]

## apps/frontend/src/components/auth/providers/
- apple.provider.tsx [35L] — AppleProvider()
- farcaster.provider.tsx [206L] — FarcasterProvider()
- github.provider.tsx [34L] — GithubProvider()
- google.provider.tsx [47L] — GoogleProvider()
- oauth.provider.tsx [47L] — OauthProvider()
- wallet.provider.tsx [185L] — WalletProvider(), DisabledAutoConnect(), InnerWallet()

## apps/frontend/src/components/auth/providers/placeholder/
- wallet.ui.provider.tsx [30L]

## apps/frontend/src/components/autopost/
- autopost.tsx [421L] — getOptions(), getOptionsChoose()

## apps/frontend/src/components/billing/
- billing.component.tsx [26L] — BillingComponent()
- billing.history.component.tsx [440L] — useInvoices(), formatAmount(), formatDate()
- embedded.billing.tsx [652L]
- faq.component.tsx [175L] — useFaqList()
- finish.trial.tsx [137L]
- first.billing.component.tsx [454L] — FirstBillingComponent(), useBillingFeatures()
- lifetime.deal.tsx [197L] — LifetimeDeal()
- main.billing.component.tsx [1062L] — useLoadCredits(), useRenewal()
- use.payment.action.tsx [25L] Consuming the PaymentIntent client_secret with the publishable key is — usePaymentAction()

## apps/frontend/src/components/developer/
- developer.component.tsx [609L] — useOAuthApp(), CopyButton()
- developer.icon.component.tsx [29L]

## apps/frontend/src/components/launches/
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

## apps/frontend/src/components/launches/comments/
- comment.component.tsx [374L]

## apps/frontend/src/components/launches/generator/
- generator.tsx [392L] — GeneratorPopup(), GeneratorComponent()

## apps/frontend/src/components/launches/helpers/
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

## apps/frontend/src/components/launches/menu/
- menu.tsx [760L]

## apps/frontend/src/components/launches/polonto/
- polonto.picture.generation.tsx [164L]

## apps/frontend/src/components/launches/web3/
- web3.list.tsx [28L]
- web3.provider.interface.ts [5L]

## apps/frontend/src/components/launches/web3/providers/
- moltbook.provider.tsx [175L]
- telegram.provider.tsx [126L]
- whatsapp.provider.tsx [271L]
- wrapcaster.provider.tsx [33L]

## apps/frontend/src/components/layout/
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

## apps/frontend/src/components/media/
- media.component.tsx [1150L] — mediaLibrarySize(), showMediaBox()
- new.uploader.tsx [332L] Uppy styles — CompressionWrapper, useUppyUploader()

## apps/frontend/src/components/new-launch/
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

## apps/frontend/src/components/new-launch/finisher/
- thread.finisher.tsx [69L] — ThreadFinisher()

## apps/frontend/src/components/new-launch/providers/
- high.order.provider.tsx [391L] — Empty, getProviderSettingsMeta()
- post-comment.enum.ts [6L]
- show.all.providers.tsx [276L]

## apps/frontend/src/components/new-launch/providers/bluesky/
- bluesky.provider.tsx [21L] — SettingsComponent()

## apps/frontend/src/components/new-launch/providers/continue-provider/
- list.tsx [18L]
- with-continue-provider.tsx [152L] — withContinueProvider()

## apps/frontend/src/components/new-launch/providers/continue-provider/facebook/
- facebook.continue.tsx [48L]

## apps/frontend/src/components/new-launch/providers/continue-provider/gmb/
- gmb.continue.tsx [82L]

## apps/frontend/src/components/new-launch/providers/continue-provider/instagram/
- instagram.continue.tsx [61L]

## apps/frontend/src/components/new-launch/providers/continue-provider/linkedin/
- linkedin.continue.tsx [49L]

## apps/frontend/src/components/new-launch/providers/continue-provider/tumblr/
- tumblr.continue.tsx [76L]

## apps/frontend/src/components/new-launch/providers/continue-provider/youtube/
- youtube.continue.tsx [87L]

## apps/frontend/src/components/new-launch/providers/devto/
- devto.provider.tsx [57L]
- devto.tags.tsx [64L]
- select.organization.tsx [58L]

## apps/frontend/src/components/new-launch/providers/discord/
- discord.channel.select.tsx [58L]
- discord.provider.tsx [27L]

## apps/frontend/src/components/new-launch/providers/dribbble/
- dribbble.provider.tsx [29L]
- dribbble.teams.tsx [61L]

## apps/frontend/src/components/new-launch/providers/facebook/
- facebook.background.ts [104L] Facebook does not expose the real preset assets, so we approximate each — hexToRgb(), rgbToHex(), mix(), luminance(), getPresetBackground()
- facebook.preview.tsx [374L] — Icons()
- facebook.provider.tsx [134L] — FacebookSettings()

## apps/frontend/src/components/new-launch/providers/gmb/
- gmb.provider.tsx [170L]

## apps/frontend/src/components/new-launch/providers/hashnode/
- hashnode.provider.tsx [53L]
- hashnode.publications.tsx [58L]
- hashnode.tags.tsx [80L]

## apps/frontend/src/components/new-launch/providers/instagram/
- instagram.audio.tsx [354L] — formatDuration()
- instagram.collaborators.tsx [123L]
- instagram.preview.tsx [226L]
- instagram.tags.tsx [87L]

## apps/frontend/src/components/new-launch/providers/kick/
- kick.provider.tsx [17L]

## apps/frontend/src/components/new-launch/providers/lemmy/
- lemmy.provider.tsx [77L] control props comes from useForm (optional: if you are using FormContext)
- subreddit.tsx [163L]

## apps/frontend/src/components/new-launch/providers/linkedin/
- linkedin.preview.tsx [516L] — Icons(), LinkedinIconSmall()
- linkedin.provider.tsx [48L] — LinkedInSettings()

## apps/frontend/src/components/new-launch/providers/listmonk/
- listmonk.provider.tsx [35L] — SettingsComponent()
- select.list.tsx [58L]
- select.templates.tsx [58L]

## apps/frontend/src/components/new-launch/providers/mastodon/
- mastodon.provider.tsx [15L]

## apps/frontend/src/components/new-launch/providers/medium/
- medium.provider.tsx [45L]
- medium.publications.tsx [59L]
- medium.tags.tsx [82L]

## apps/frontend/src/components/new-launch/providers/medium/fonts/
- stylesheet.css [38L] Generated by Font Squirrel (http://www.fontsquirrel.com) on July 10, 2013 */

## apps/frontend/src/components/new-launch/providers/mewe/
- mewe.group.select.tsx [63L]
- mewe.provider.tsx [43L]

## apps/frontend/src/components/new-launch/providers/moltbook/
- moltbook.provider.tsx [36L]

## apps/frontend/src/components/new-launch/providers/nostr/
- nostr.provider.tsx [15L]

## apps/frontend/src/components/new-launch/providers/pinterest/
- pinterest.board.tsx [62L]
- pinterest.preview.tsx [162L]
- pinterest.provider.tsx [39L]

## apps/frontend/src/components/new-launch/providers/reddit/
- reddit.provider.tsx [221L]
- subreddit.tsx [272L]

## apps/frontend/src/components/new-launch/providers/skool/
- skool.group.select.tsx [58L]
- skool.label.select.tsx [66L]
- skool.provider.tsx [38L]

## apps/frontend/src/components/new-launch/providers/slack/
- slack.channel.select.tsx [58L]
- slack.provider.tsx [27L]

## apps/frontend/src/components/new-launch/providers/telegram/
- telegram.provider.tsx [15L]

## apps/frontend/src/components/new-launch/providers/threads/
- threads.provider.tsx [20L] — SettingsComponent()

## apps/frontend/src/components/new-launch/providers/tiktok/
- tiktok.location.tsx [184L]
- tiktok.music.tsx [335L] — formatDuration()
- tiktok.preview.tsx [184L]
- tiktok.provider.tsx [392L]

## apps/frontend/src/components/new-launch/providers/tumblr/
- tumblr.provider.tsx [33L] — TumblrSettings()

## apps/frontend/src/components/new-launch/providers/twitch/
- twitch.provider.tsx [95L]

## apps/frontend/src/components/new-launch/providers/vk/
- vk.provider.tsx [15L]

## apps/frontend/src/components/new-launch/providers/warpcast/
- subreddit.tsx [147L]
- warpcast.provider.tsx [68L] control props comes from useForm (optional: if you are using FormContext)

## apps/frontend/src/components/new-launch/providers/whatsapp/
- whatsapp.provider.tsx [39L]

## apps/frontend/src/components/new-launch/providers/whop/
- whop.company.select.tsx [59L]
- whop.experience.select.tsx [71L]
- whop.provider.tsx [47L]

## apps/frontend/src/components/new-launch/providers/wordpress/
- wordpress.post.type.tsx [58L]
- wordpress.provider.tsx [55L]
- wordpress.terms.tsx [59L] Fetches WordPress terms (categories or tags) for the connected site and wires

## apps/frontend/src/components/new-launch/providers/x/
- x.provider.tsx [150L] — SettingsComponent()

## apps/frontend/src/components/new-launch/providers/youtube/
- youtube.preview.tsx [151L]
- youtube.provider.tsx [105L]

## apps/frontend/src/components/new-layout/
- billing.after.tsx [105L] — BillingAfter()
- change.dir.client.tsx [18L] — ChangeDirClient()
- change.dir.tsx [23L]
- layout.component.tsx [204L] — LayoutComponent()
- layout.media.component.tsx [12L] — MediaLayoutComponent()
- logo.tsx [33L] — Logo()
- menu-item.tsx [50L]
- mobile.integration.tsx [32L]
- sentry.feedback.component.tsx [54L]

## apps/frontend/src/components/notifications/
- notification.component.tsx [210L] notifications are plain text, the urls in them become short links — replaceLinks(), useNotificationsList(), NotificationOpenComponent(), NotificationComponent()
- translate.notification.ts [87L] Maps known English in-app notification templates to Portuguese. — translateNotificationContent()

## apps/frontend/src/components/oauth/
- authorize.component.tsx [278L]
- self.hosted.component.tsx [167L] clients that read the email from userinfo (ChatGPT) need one

## apps/frontend/src/components/onboarding/
- github.onboarding.tsx [37L]
- onboarding.modal.tsx [773L]
- onboarding.tsx [48L]

## apps/frontend/src/components/platform-analytics/
- platform.analytics.tsx [310L] — PlatformAnalytics()
- render.analytics.tsx [276L]

## apps/frontend/src/components/plugs/
- plug.tsx [281L] — convertBackRegex(), Plug()
- plugs.context.ts [49L] — usePlugs()
- plugs.tsx [193L] — Plugs()

## apps/frontend/src/components/post-url-selector/
- post.url.selector.tsx [208L] — ShowPostSelector(), showPostSelector(), useShowPostSelector()

## apps/frontend/src/components/preview/
- comments.components.tsx [527L] Invisible reCAPTCHA v2: one widget for the page. Google only shows a puzzle — loadRecaptchaToken()
- copy.client.tsx [24L] — CopyClient()
- post.content.client.tsx [376L] The btnPrimary token has no alpha channel, so the tints are mixed in CSS. — markClassName(), textOffset(), clearHighlights(), applyHighlights(), marksOf()
- preview.comments.context.tsx [106L] — useComments(), usePreviewComments()
- preview.wrapper.tsx [42L] — PreviewWrapper()
- render.preview.date.client.tsx [16L] — RenderPreviewDateClient()
- render.preview.date.tsx [10L]

## apps/frontend/src/components/provider-preview/
- preview.provider.component.tsx [240L] react-hook-form trigger() result. False = at least one DTO field failed. */

## apps/frontend/src/components/public-api/
- mcp.client.icons.tsx [542L] Logos for the MCP clients shown in Settings > Agents and in onboarding.
- public.component.tsx [943L] Remote clients can't set headers, they get a URL to paste (hint = where) — getMcpOauthUrl(), CopyButton(), McpSection(), CliSection(), PublicApiContent(), PublicComponent()

## apps/frontend/src/components/sets/
- sets.tsx [222L]

## apps/frontend/src/components/settings/
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

## apps/frontend/src/components/standalone-modal/
- standalone.modal.tsx [66L]

## apps/frontend/src/components/third-parties/
- slider.component.tsx [72L]
- third-party.component.tsx [162L] — ThirdPartyComponent()
- third-party.function.tsx [89L] — useThirdPartySubmit(), useThirdPartyFunction(), useThirdPartyFunctionSWR()
- third-party.list.component.tsx [167L]
- third-party.media-library.tsx [292L]
- third-party.media.tsx [228L] — useThirdParty()
- third-party.wrapper.tsx [16L]

## apps/frontend/src/components/third-parties/providers/
- heygen.provider.tsx [250L] — HeygenProviderComponent()

## apps/frontend/src/components/ui/
- bottom.sheet.component.tsx [96L]
- check.icon.component.tsx [29L] — CheckIconComponent()
- is.scroll.hook.tsx [22L] — useHasScroll()
- logo-text.component.tsx [46L] — LogoTextComponent()
- translated-label.tsx [41L] TranslatedLabel is a wrapper component that translates labels in form components — TranslatedLabel()

## apps/frontend/src/components/ui/icons/
- index.tsx [1000L] Settings/Gear Icon

## apps/frontend/src/components/videos/
- video.context.wrapper.tsx [4L] — useVideo()
- video.render.component.tsx [54L] — useVideoFunction()
- video.wrapper.tsx [16L]

## apps/frontend/src/components/videos/providers/
- image-text-slides.provider.tsx [173L] — ImageSlidesComponent()
- seedance.provider.tsx [65L] — SeedanceComponent()

## apps/frontend/src/components/webhooks/
- webhooks.tsx [315L] — getWebhookOptions()

## apps/frontend/src/fonts/plus-jakarta-sans/
- OFL.txt [94L]
- plus.jakarta.sans.font.ts [13L]

## apps/orchestrator/
- .swcrc [38L]
- nest-cli.json [21L]
- package.json [15L]
- tsconfig.build.json [24L]
- tsconfig.json [12L]

## apps/orchestrator/src/
- app.module.ts [36L] — AppModule
- health.controller.ts [35L] — HealthController
- main.ts [23L] — bootstrap()

## apps/orchestrator/src/activities/
- autopost.activity.ts [28L] — AutopostActivity
- clipping.activity.ts [101L] An activity on main can never change its parameters, so every one takes a — ClippingActivity
- email.activity.ts [39L] — EmailActivity
- integrations.activity.ts [24L] — IntegrationsActivity
- media.activity.ts [27L] Returns the processor job id, or null when there is nothing to process — MediaActivity
- post.activity.ts [640L] — slimPost(), reanchorInterval(), PostActivity
- video.activity.ts [36L] credits are checked against the subscription, so it has to be loaded with the or — VideoActivity

## apps/orchestrator/src/signals/
- email.signal.ts [10L]
- send.email.signal.ts [11L]

## apps/orchestrator/src/workflows/
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

## apps/orchestrator/src/workflows/post-workflows/
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

## apps/sdk/
- .babelrc [6L]
- .npmignore [2L]
- README.md [24L] Postiz NodeJS SDK
- package.json [24L]
- tsconfig.json [16L]
- tsup.config.ts [10L]

## apps/sdk/src/
- index.ts [96L] — toQueryString(), Postiz
