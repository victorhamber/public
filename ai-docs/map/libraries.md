# MAP/libraries

## libraries/helpers/src/auth/
- auth.service.ts [57L] evp_bytestokey: key length in **bits**, IV length in **bytes** — deriveLegacyKeyIv(), decrypt_legacy_using_IV(), encrypt_legacy_using_IV(), AuthService

## libraries/helpers/src/configuration/
- configuration.checker.ts [111L] — ConfigurationChecker

## libraries/helpers/src/decorators/
- plug.decorator.ts [33L] Retrieve existing metadata or initialize an empty array — Plug()
- post.plug.ts [33L] Retrieve existing metadata or initialize an empty array — PostPlug()

## libraries/helpers/src/subdomain/
- all.two.level.subdomain.ts [1408L]
- subdomain.management.ts [7L] — getCookieUrlFromDomain()

## libraries/helpers/src/swagger/
- load.swagger.ts [14L] — loadSwagger()

## libraries/helpers/src/utils/
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

## libraries/nestjs-libraries/
- .eslintrc.json [19L]
- README.md [4L] nestjs-libraries
- tsconfig.json [19L]
- tsconfig.lib.json [11L]

## libraries/nestjs-libraries/src/3rdparties/
- thirdparty.interface.ts [44L] where a connected integration shows up in the post editor — ThirdParty()
- thirdparty.manager.ts [64L] — ThirdPartyManager
- thirdparty.module.ts [20L] — ThirdPartyModule

## libraries/nestjs-libraries/src/3rdparties/heygen/
- heygen.provider.ts [202L] — HeygenProvider

## libraries/nestjs-libraries/src/3rdparties/hubspot/
- hubspot.provider.ts [25L] Installed in HubSpot through installUrl, never connected with an API key — HubspotProvider

## libraries/nestjs-libraries/src/3rdparties/reelfarm/
- reelfarm.provider.ts [113L] — ReelFarmProvider

## libraries/nestjs-libraries/src/agent/
- agent.categories.ts [34L]
- agent.graph.insert.service.ts [136L] — AgentGraphInsertService
- agent.graph.service.ts [427L] — contentZod(), AgentGraphService
- agent.module.ts [13L] — AgentModule
- agent.topics.ts [83L]

## libraries/nestjs-libraries/src/chat/
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

## libraries/nestjs-libraries/src/chat/tools/
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

## libraries/nestjs-libraries/src/chat/ui/
- clipping.widget.ts [279L] MCP Apps (SEP-1865) widget, same shape as the upload widget: a single — clippingWidgetHtml()
- upload.widget.ts [332L] MCP Apps (SEP-1865) widget: a single self-contained HTML document rendered by — megabytes(), uploadWidgetHtml()

## libraries/nestjs-libraries/src/database/prisma/
- database.module.ts [118L] — DatabaseModule
- prisma.service.ts [40L] — PrismaService, PrismaRepository, PrismaTransaction
- schema.prisma [1842L]

## libraries/nestjs-libraries/src/database/prisma/admin-stats/
- admin-stats.repository.ts [491L] Unknown errors are stored as the serialized error payload, e.g. — sortDesc(), AdminStatsRepository
- admin-stats.service.ts [20L] — AdminStatsService

## libraries/nestjs-libraries/src/database/prisma/agencies/
- agencies.repository.ts [184L] — AgenciesRepository
- agencies.service.ts [218L] — AgenciesService

## libraries/nestjs-libraries/src/database/prisma/announcements/
- announcements.repository.ts [36L] — AnnouncementsRepository
- announcements.service.ts [21L] — AnnouncementsService

## libraries/nestjs-libraries/src/database/prisma/autopost/
- autopost.repository.ts [108L] — AutopostRepository
- autopost.service.ts [377L] — AutopostService

## libraries/nestjs-libraries/src/database/prisma/clipping/
- clipping.repository.ts [306L] — ClippingRepository
- clipping.service.ts [1077L] — ClippingStop, ClippingService

## libraries/nestjs-libraries/src/database/prisma/errors/
- errors.repository.ts [144L] — ErrorsRepository
- errors.service.ts [22L] — ErrorsService

## libraries/nestjs-libraries/src/database/prisma/integrations/
- integration.repository.ts [1020L] — IntegrationRepository
- integration.service.ts [720L] — IntegrationService

## libraries/nestjs-libraries/src/database/prisma/media/
- media.repository.ts [175L] — MediaRepository
- media.service.ts [674L] — MediaService

## libraries/nestjs-libraries/src/database/prisma/notifications/
- notification.service.ts [118L] — NotificationService
- notifications.repository.ts [127L] — NotificationsRepository

## libraries/nestjs-libraries/src/database/prisma/oauth/
- oauth.repository.ts [439L] — OAuthRepository
- oauth.service.ts [866L] The static app HubSpot agents connect with (created under Settings > — openAiOAuthClientId(), enableOidcEmailClaims(), hubspotOAuthClientId(), hubspotAppClientId(), hubspotAppClientSecret(), hubspotInstallRedirectUri(), hubspotInstallUrl(), selfHostedRelayEnabled(), isVerifiedHost(), OAuthService

## libraries/nestjs-libraries/src/database/prisma/organizations/
- organization.repository.ts [661L] — OrganizationRepository
- organization.service.ts [223L] — OrganizationService

## libraries/nestjs-libraries/src/database/prisma/posts/
- posts.repository.ts [1231L] — PostsRepository
- posts.service.ts [1788L] — PostsService

## libraries/nestjs-libraries/src/database/prisma/sets/
- sets.repository.ts [58L] — SetsRepository
- sets.service.ts [24L] — SetsService

## libraries/nestjs-libraries/src/database/prisma/signatures/
- signature.repository.ts [56L] — SignatureRepository
- signature.service.ts [29L] — SignatureService

## libraries/nestjs-libraries/src/database/prisma/subscriptions/
- pricing.ts [120L]
- subscription.repository.ts [357L] — SubscriptionRepository
- subscription.service.ts [451L] — SubscriptionService

## libraries/nestjs-libraries/src/database/prisma/third-party/
- third-party.repository.ts [65L] — ThirdPartyRepository
- third-party.service.ts [29L] — ThirdPartyService

## libraries/nestjs-libraries/src/database/prisma/users/
- users.repository.ts [318L] — UsersRepository
- users.service.ts [183L] — UsersService

## libraries/nestjs-libraries/src/database/prisma/webhooks/
- webhooks.repository.ts [88L] — WebhooksRepository
- webhooks.service.ts [25L] — WebhooksService

## libraries/nestjs-libraries/src/deepgram/
- deepgram.service.ts [50L] Deepgram fetches the file itself, so media bytes never pass through here. — DeepgramService

## libraries/nestjs-libraries/src/dtos/agencies/
- create.agency.dto.ts [97L] — CreateAgencyLogoDto, CreateAgencyDto

## libraries/nestjs-libraries/src/dtos/analytics/
- get.org.activity.dto.ts [12L] — GetOrgActivityDto
- stars.list.dto.ts [16L] — StarsListDto

## libraries/nestjs-libraries/src/dtos/announcements/
- announcements.dto.ts [17L] — AnnouncementDto

## libraries/nestjs-libraries/src/dtos/auth/
- create.org.user.dto.ts [41L] — CreateOrgUserDto
- forgot-return.password.dto.ts [29L] — ForgotReturnPasswordDto
- forgot.password.dto.ts [9L] — ForgotPasswordDto
- login.user.dto.ts [32L] — LoginUserDto
- resend-activation.dto.ts [10L] — ResendActivationDto

## libraries/nestjs-libraries/src/dtos/autopost/
- autopost.dto.ts [65L] — Integrations, AutopostDto

## libraries/nestjs-libraries/src/dtos/billing/
- admin.apply.coupon.dto.ts [19L] — AdminApplyCouponDto
- billing.subscribe.dto.ts [31L] Facebook pixel cookies (_fbc / _fbp), saved on the subscription for the — BillingSubscribeDto
- billing.sync.dto.ts [8L] — BillingSyncDto
- reset.credits.dto.ts [8L] — ResetCreditsDto

## libraries/nestjs-libraries/src/dtos/clipping/
- clipping.dto.ts [36L] channels to create the draft posts for; without any, the clips only land in the  — ClippingDto

## libraries/nestjs-libraries/src/dtos/comments/
- add.comment.dto.ts [57L] — AddCommentDto, CreatePublicCommentDto, ResolveCommentDto

## libraries/nestjs-libraries/src/dtos/generator/
- create.generated.posts.dto.ts [53L] — InnerPost, PostGroup, CreateGeneratedPostsDto
- generator.dto.ts [19L] — GeneratorDto

## libraries/nestjs-libraries/src/dtos/integrations/
- api.key.dto.ts [10L] — ApiKeyDto
- connect.integration.dto.ts [20L] — ConnectIntegrationDto
- customer.name.dto.ts [8L] — CustomerNameDto
- integration.function.dto.ts [14L] — IntegrationFunctionDto
- integration.name.dto.ts [8L] — IntegrationNameDto
- integration.time.dto.ts [16L] — IntegrationValidateTimeDto, IntegrationTimeDto

## libraries/nestjs-libraries/src/dtos/media/
- get.media.dto.ts [15L] — GetMediaDto
- media.dto.ts [23L] — MediaDto
- save.media.information.dto.ts [18L] — SaveMediaInformationDto
- upload.dto.ts [25L] — UploadDto

## libraries/nestjs-libraries/src/dtos/notifications/
- get.notifications.dto.ts [11L] — GetNotificationsDto

## libraries/nestjs-libraries/src/dtos/oauth/
- authorize-oauth.dto.ts [125L] — AuthorizeOAuthQueryDto, ApproveOAuthDto, AuthorizeSelfHostedDto
- create-oauth-app.dto.ts [23L] — CreateOAuthAppDto
- hubspot-install.dto.ts [9L] Added by HubSpot to the HubSpot app's redirect URL after an install — HubspotInstallQueryDto
- register-client.dto.ts [48L] https, http loopback or a private-use scheme (cursor://...), — RegisterClientDto
- token-exchange.dto.ts [39L] The refresh_token grant sends refresh_token instead — TokenExchangeDto
- update-oauth-app.dto.ts [23L] — UpdateOAuthAppDto

## libraries/nestjs-libraries/src/dtos/plugs/
- plug.dto.ts [24L] — FieldsDto, PlugDto

## libraries/nestjs-libraries/src/dtos/posts/
- change.post.status.dto.ts [7L] — ChangePostStatusDto
- create.post.dto.ts [137L] — Integration, PostContent, Post, Tags, CreatePostDto
- create.tag.dto.ts [10L] — CreateTagDto
- get.posts.dto.ts [18L] — GetPostsDto
- get.posts.list.dto.ts [42L] — GetPostsListDto
- update.post.settings.dto.ts [8L] — UpdatePostSettingsDto

## libraries/nestjs-libraries/src/dtos/posts/providers-settings/
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

## libraries/nestjs-libraries/src/dtos/posts/transformers/
- integration.settings.transformer.ts [41L] Get the integration from the database — IntegrationSettingsTransformer, TransformIntegrationSettings()

## libraries/nestjs-libraries/src/dtos/sets/
- sets.dto.ts [29L] — SetsDto, UpdateSetsDto

## libraries/nestjs-libraries/src/dtos/settings/
- add.team.member.dto.ts [24L] — AddTeamMemberDto
- admin.add.team.member.dto.ts [12L] — AdminAddTeamMemberDto
- shortlink-preference.dto.ts [9L] — ShortlinkPreferenceDto

## libraries/nestjs-libraries/src/dtos/signature/
- signature.dto.ts [12L] — SignatureDto

## libraries/nestjs-libraries/src/dtos/third-party/
- import-media.dto.ts [31L] — ImportMediaItemDto, ImportMediaDto

## libraries/nestjs-libraries/src/dtos/users/
- email-notifications.dto.ts [14L] — EmailNotificationsDto
- timezone.dto.ts [9L] empty means the browser's timezone — TimezoneDto
- user.details.dto.ts [22L] — UserDetailDto

## libraries/nestjs-libraries/src/dtos/videos/
- video.dto.ts [35L] Check if the text is in the list of valid video types — ValidIn, VideoDto
- video.function.dto.ts [12L] — VideoFunctionDto

## libraries/nestjs-libraries/src/dtos/webhooks/
- ssrf.safe.dispatcher.ts [77L] Pins DNS resolution: every resolved IP is checked with `isBlockedIp` and — ssrfSafeLookup(), getSsrfSafeDispatcher(), getSsrfSafeAxios()
- webhook.url.validator.ts [136L] BlockList matches an IPv4 rule against the address in any notation, — isBlockedIPv4(), isBlockedIPv6(), isBlockedIp(), isSafePublicHttpsUrl(), IsSafeWebhookUrlConstraint, IsSafeWebhookUrl()
- webhooks.dto.ts [65L] — WebhooksIntegrationDto, WebhooksDto, OnlyURL, UpdateDto

## libraries/nestjs-libraries/src/emails/
- email.interface.ts [13L]
- empty.provider.ts [10L] — EmptyProvider
- node.mailer.provider.ts [41L] — NodeMailerProvider
- resend.provider.ts [34L] The SDK returns API errors (like 429 rate limits) instead of throwing, — ResendProvider

## libraries/nestjs-libraries/src/integrations/
- dashboard.function.decorator.ts [16L] Lets the dashboard run a provider method without making it a @Tool, which — DashboardFunction()
- integration.manager.ts [251L] — IntegrationManager
- integration.missing.scopes.ts [17L] — NotEnoughScopesFilter
- refresh.integration.service.ts [138L] — RefreshIntegrationService
- social.abstract.ts [707L] Media reads answer headers in well under a second and the chunk sizes the — isReadTimeout(), stripQuery(), truncateForTemporal(), RefreshToken, Disconnect, PublishedWithError, BadBody, NotEnoughScopes, safeStringify()
- tool.decorator.ts [18L] Retrieve existing metadata or initialize an empty array — Tool()

## libraries/nestjs-libraries/src/integrations/social/
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
- whatsapp.provider.ts [497L] — WhatsappProvider
- whop.provider.ts [431L] — WhopProvider
- wordpress.provider.ts [380L] import FormData from 'form-data'; — WordpressProvider
- x.provider.ts [1757L] — XProvider
- youtube.provider.ts [1107L] — clientAndYoutube(), YoutubeProvider

## libraries/nestjs-libraries/src/newsletter/
- newsletter.interface.ts [4L]
- newsletter.service.ts [21L] — NewsletterService
- providers.ts [10L]

## libraries/nestjs-libraries/src/newsletter/providers/
- beehiiv.provider.ts [27L] — BeehiivProvider
- email-empty.provider.ts [9L] — EmailEmptyProvider
- listmonk.provider.ts [46L] — ListmonkProvider

## libraries/nestjs-libraries/src/openai/
- extract.content.service.ts [93L] only element that has a title — findDepth(), ExtractContentService
- fal.service.ts [49L] — FalService
- generation.error.ts [45L] e.g. "400 Your request was rejected by the safety system, safety_violations=[sex — generationError()
- openai.service.ts [330L] — OpenaiService

## libraries/nestjs-libraries/src/redis/
- redis.service.ts [45L] Create a mock Redis implementation for testing environments — MockRedis

## libraries/nestjs-libraries/src/sentry/
- initialize.sentry.ts [93L] never let telemetry break a request */ — setSentryUserContext(), initializeSentry()
- sentry.exception.ts [8L]

## libraries/nestjs-libraries/src/services/
- codes.service.ts [19L] — CodesService
- email.service.ts [153L] — EmailService
- exception.filter.ts [26L] — HttpForbiddenException, HttpExceptionFilter
- make.is.ts [11L] — makeId()
- make.secure.id.ts [18L] Same alphabet and shape as makeId, but every character comes from the — makeSecureId()
- stripe.country.list.ts [112L]
- stripe.service.ts [1731L] — StripeService

## libraries/nestjs-libraries/src/services/payment/
- payment.provider.interface.ts [217L] One row of the billing history, in a provider neutral shape — PaymentProvider()
- payment.provider.manager.ts [48L] — PaymentProviderManager
- payment.providers.ts [3L]
- payment.service.ts [147L] — PaymentService

## libraries/nestjs-libraries/src/services/payment/providers/
- revenuecat.provider.ts [187L] — RevenueCatProvider

## libraries/nestjs-libraries/src/short-linking/
- short-linking.interface.ts [13L]
- short.link.service.ts [160L] — ShortLinkService

## libraries/nestjs-libraries/src/short-linking/providers/
- dub.ts [89L] — getOptions(), Dub
- empty.ts [25L] — Empty
- kutt.ts [123L] — getOptions(), Kutt
- linkdrip.ts [57L] — getOptions(), LinkDrip
- short.io.ts [97L] — ShortIo

## libraries/nestjs-libraries/src/temporal/
- email.queues.ts [13L] Resend allows 10 requests per second for the whole team (ratelimit-limit
- infinite.workflow.register.ts [32L] — InfiniteWorkflowRegister, InfiniteWorkflowRegisterModule
- temporal.heartbeat.ts [81L] Heartbeats are throttled by the SDK (min of ~80% of the workflow's — readDetails(), setHeartbeatDetails()
- temporal.module.ts [101L] Queues this worker server should NOT run, comma-separated — getTemporalModule()
- temporal.register.ts [49L] — TemporalRegister, TemporalRegisterMissingSearchAttributesModule
- temporal.search.attribute.ts [15L]

## libraries/nestjs-libraries/src/throttler/
- throttler.provider.ts [51L] — isPublicComment(), ThrottlerBehindProxyGuard, ThrottlerRealIpGuard

## libraries/nestjs-libraries/src/track/
- track.cookies.ts [56L] Sets the visitor cookies on the root domain, so postiz.com and — cookieOptions(), applyTrackCookies()
- track.service.ts [103L] The Conversions API is called directly instead of through — TrackService

## libraries/nestjs-libraries/src/upload/
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

## libraries/nestjs-libraries/src/user/
- include.deleted.from.request.ts [9L]
- oauth.user.id.from.request.ts [9L]
- org.from.request.ts [9L]
- track.enum.ts [8L]
- user.agent.ts [9L]
- user.from.request.ts [9L]

## libraries/nestjs-libraries/src/videos/
- video.interface.ts [69L] — ExposeVideoFunction(), Video()
- video.manager.ts [57L] — VideoManager
- video.module.ts [14L] — VideoModule

## libraries/nestjs-libraries/src/videos/images-slides/
- images.slides.ts [288L] — elevenLabsError(), getAudioDuration(), ImagesSlidesParams, ImagesSlides

## libraries/nestjs-libraries/src/videos/seedance/
- seedance.ts [115L] — Image, SeedanceParams, Seedance

## libraries/react-shared-libraries/
- .eslintrc.json [19L]
- README.md [4L] nestjs-libraries
- tsconfig.json [20L]
- tsconfig.lib.json [12L]

## libraries/react-shared-libraries/src/form/
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

## libraries/react-shared-libraries/src/helpers/
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

## libraries/react-shared-libraries/src/sentry/
- initialize.sentry.client.ts [53L] never let telemetry break the app */ — setSentryUser(), initializeSentryClient()
- initialize.sentry.next.basic.ts [151L] Browser wallet extensions (Phantom, MetaMask, etc.) reject with a plain — initializeSentryBasic()
- initialize.sentry.server.ts [6L] — initializeSentryServer()

## libraries/react-shared-libraries/src/toaster/
- toaster.tsx [124L] — Toaster(), useToaster()

## libraries/react-shared-libraries/src/translation/
- get.transation.service.client.ts [18L] — useT(), useTranslationSettings()
- get.translation.service.backend.ts [13L] — getT()
- i18n.config.ts [22L]
- i18next.ts [32L] Fork default: Portuguese when no cookie/header yet.
- translated-label.tsx [41L] TranslatedLabel is a wrapper component that translates labels in form components — TranslatedLabel()

## libraries/react-shared-libraries/src/translation/locales/ar/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/bn/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/de/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/en/
- translation.json [1241L]

## libraries/react-shared-libraries/src/translation/locales/es/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/fr/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/he/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/it/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/ja/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/ka_ge/
- translation.json [509L]

## libraries/react-shared-libraries/src/translation/locales/ko/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/pt/
- translation.json [1241L]

## libraries/react-shared-libraries/src/translation/locales/ru/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/tr/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/vi/
- translation.json [900L]

## libraries/react-shared-libraries/src/translation/locales/zh/
- translation.json [900L]
