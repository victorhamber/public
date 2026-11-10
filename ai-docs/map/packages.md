# MAP/packages

## packages/ai/
- package.json [23L]
- tsconfig.json [11L]
- tsconfig.lib.json [24L]

## packages/ai/src/
- constants.ts [9L]
- getChatCompletionSetVarIds.ts [6L] — getChatCompletionSetVarIds()
- getChatCompletionStreamVarId.ts [7L] — getChatCompletionStreamVarId()
- parseChatCompletionMessages.ts [114L] — parseDialogueMessage(), parseStandardMessage()
- parseChatCompletionOptions.ts [113L] — parseChatCompletionOptions()
- parseGenerateVariablesOptions.ts [108L] — parseGenerateVariablesOptions()
- parseTools.ts [83L] — parseTools(), parseParameters()
- pumpStreamUntilDone.ts [12L]
- runChatCompletion.ts [85L] — runChatCompletion()
- runChatCompletionStream.ts [113L] — runChatCompletionStream()
- runGenerateVariables.ts [117L] — runGenerateVariables(), convertVariablesToExtractToSchema()
- schemas.ts [112L] — normalizeToolsInput(), normalizeToolItem()
- splitUserTextMessageIntoBlocks.ts [56L]
- toLegacyDataStream.ts [130L] — formatLegacyDataStreamPart()
- types.ts [15L]
- zodToSchema.ts [34L]

## packages/ai/src/legacy/
- chatCompletionBaseOptions.ts [24L]

## packages/auth/
- package.json [43L]
- tsconfig.json [11L]
- tsconfig.lib.json [39L]
- vitest.config.ts [19L]

## packages/auth/src/
- next-auth.d.ts [8L]

## packages/auth/src/api/
- router.ts [8L]
- sendUpdateEmailVerifCodeEmail.ts [57L]
- updateUserEmail.ts [68L] — deleteToken()

## packages/auth/src/helpers/
- accountHasRequiredOAuthGroups.ts [44L]
- authenticateWithBearerToken.ts [32L] — extractBearerToken()
- convertInvitationsToCollaborations.ts [54L] — convertInvitationsToCollaborations()
- createAuthPrismaAdapter.test.ts [307L]
- createAuthPrismaAdapter.ts [256L] — triggerStartUserOnboardingWorkflow(), stripUndefined()
- createEmailMagicLink.ts [25L] — createEmailMagicLink(), normalizeEmailIdentifier()
- createRateLimiter.ts [41L] — createRateLimiter()
- emailValidation.ts [4L]
- getNewUserInvitations.ts [23L]
- joinWorkspaces.ts [24L] — joinWorkspaces()
- recordFailedEmailSignInAttempt.test.ts [174L] — createVerificationTokenStore(), matchesWhere()
- recordFailedEmailSignInAttempt.ts [71L] — recordFailedEmailSignInAttempt(), isEmailIdentifier()
- refreshSessionUser.ts [6L] — refreshSessionUser()
- sanitizeRedirectPath.ts [24L] Accept only root-relative paths, never a scheme or an authority. Query
- sendVerificationRequest.ts [34L] — sendVerificationRequest(), extractCodeFromUrl()

## packages/auth/src/lib/
- dailyGuestInvitationRateLimiter.ts [18L]
- gentleRateLimiter.ts [16L]
- nextAuth.ts [194L] — updateCookieIsMerged(), updateCookieLastProvider(), resetLandingPageCookie()
- oneMinRateLimiter.ts [16L]
- providers.test.ts [247L] — signInWithCustomOAuth()
- providers.ts [147L]

## packages/billing/
- package.json [32L]
- tsconfig.json [11L]
- tsconfig.lib.json [39L]

## packages/billing/src/
- constants.ts [201L]
- taxIdTypes.ts [598L]

## packages/billing/src/api/
- handleCreateCheckoutSession.ts [75L] — handleCreateCheckoutSession()
- handleCreateCustomCheckoutSession.ts [161L] — handleCreateCustomCheckoutSession()
- handleGetBillingPortalUrl.ts [55L] — handleGetBillingPortalUrl()
- handleGetSubscription.ts [82L] — handleGetSubscription()
- handleGetSubscriptionPreview.ts [105L] — handleGetSubscriptionPreview()
- handleGetUsage.ts [117L] — handleGetUsage(), getCurrentSubscription()
- handleListInvoices.ts [70L] — handleListInvoices()
- handleStripeWebhook.ts [407L] — handleStripeWebhook(), getCancellationTelemetryPlan()
- handleUpdateSubscription.ts [196L] — handleUpdateSubscription()
- router.ts [150L]

## packages/billing/src/helpers/
- createCheckoutSessionUrl.ts [49L] — createCheckoutSessionUrl()
- formatPrice.ts [25L] — formatPrice()
- getChatsLimit.ts [21L] — getChatsLimit()
- getSeatsLimit.ts [13L] — getSeatsLimit()
- guessIfUserIsEuropean.ts [57L] — guessIfUserIsEuropean()

## packages/billing/src/schemas/
- invoice.ts [12L]
- subscription.ts [14L]

## packages/blocks/base/
- package.json [18L]
- tsconfig.json [11L]
- tsconfig.lib.json [11L]

## packages/blocks/base/src/
- schemas.ts [25L]

## packages/blocks/bubbles/
- package.json [21L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/blocks/bubbles/src/
- constants.ts [8L]
- schema.ts [18L]

## packages/blocks/bubbles/src/audio/
- constants.ts [6L]
- schema.ts [19L]

## packages/blocks/bubbles/src/embed/
- constants.ts [6L]
- schema.ts [26L]

## packages/blocks/bubbles/src/image/
- constants.ts [8L]
- schema.ts [23L]

## packages/blocks/bubbles/src/text/
- schema.ts [25L]

## packages/blocks/bubbles/src/video/
- constants.ts [59L]
- helpers.ts [114L] — parseQueryParams()
- schema.ts [31L]

## packages/blocks/core/
- package.json [27L]
- tsconfig.json [11L]
- tsconfig.lib.json [39L]

## packages/blocks/core/src/
- helpers.ts [137L] — shouldOpenBlockSettingsOnCreation(), shouldOpenItemSettingsOnCreation()

## packages/blocks/core/src/migrations/
- migrateBlocksFromV1ToV2.ts [68L]
- migrateWebhookBlock.ts [41L] — migrateWebhookBlock()

## packages/blocks/core/src/schemas/
- schema.ts [85L]

## packages/blocks/core/src/schemas/items/
- schema.ts [49L]

## packages/blocks/core/src/schemas/start/
- schemas.ts [12L]

## packages/blocks/fileInput/
- package.json [35L]
- tsconfig.json [11L]
- tsconfig.lib.json [42L]

## packages/blocks/fileInput/src/api/
- getUploadProxyBaseUrl.ts [10L] — getUploadProxyBaseUrl()
- handleGenerateUploadUrl.test.ts [239L] — buildSession(), buildPublicTypebot(), parseSignedUploadFilePath(), expectedResultPrefix(), expectedCurrentResultPrefix(), expectedPrivateFileUrl(), expectedCurrentPrivateFileUrl()
- handleGenerateUploadUrl.ts [200L] — handleGenerateUploadUrl(), getAndParsePublicTypebot()
- handleGetPrivateFile.ts [136L] — handleGetPrivateFile()
- router.ts [76L]

## packages/blocks/inputs/
- package.json [24L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/blocks/inputs/src/
- constants.ts [34L]
- schema.ts [46L]

## packages/blocks/inputs/src/cards/
- constants.ts [8L]
- schema.ts [56L]

## packages/blocks/inputs/src/choice/
- constants.ts [11L]
- schema.ts [71L]

## packages/blocks/inputs/src/date/
- constants.ts [18L]
- schema.ts [44L]

## packages/blocks/inputs/src/email/
- constants.ts [12L]
- schema.ts [26L]

## packages/blocks/inputs/src/file/
- constants.ts [30L]
- schema.test.ts [46L]
- schema.ts [69L]

## packages/blocks/inputs/src/number/
- constants.ts [120L]
- schema.ts [38L]

## packages/blocks/inputs/src/payment/
- constants.ts [13L]
- schema.ts [71L]

## packages/blocks/inputs/src/phone/
- constants.ts [12L]
- schema.ts [26L]

## packages/blocks/inputs/src/pictureChoice/
- constants.ts [13L]
- schema.ts [81L]

## packages/blocks/inputs/src/rating/
- constants.ts [14L]
- schema.ts [39L]

## packages/blocks/inputs/src/text/
- constants.ts [16L]
- schema.ts [59L]

## packages/blocks/inputs/src/time/
- constants.ts [10L]
- schema.ts [31L]

## packages/blocks/inputs/src/url/
- constants.ts [12L]
- schema.ts [25L]

## packages/blocks/integrations/
- package.json [21L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/blocks/integrations/src/
- constants.ts [13L]
- schema.ts [42L]

## packages/blocks/integrations/src/chatwoot/
- constants.ts [9L]
- schema.ts [29L]

## packages/blocks/integrations/src/googleAnalytics/
- constants.ts [0L]
- schema.ts [23L]

## packages/blocks/integrations/src/googleSheets/
- constants.ts [17L]
- schema.ts [162L]

## packages/blocks/integrations/src/httpRequest/
- constants.ts [26L]
- schema.ts [112L]

## packages/blocks/integrations/src/makeCom/
- constants.ts [0L]
- schema.ts [24L]

## packages/blocks/integrations/src/openai/
- constants.ts [45L]
- schema.ts [147L]

## packages/blocks/integrations/src/pabblyConnect/
- constants.ts [0L]
- schema.ts [24L]

## packages/blocks/integrations/src/pixel/
- constants.ts [141L] Reference: https://developers.facebook.com/docs/meta-pixel/reference#standard-ev
- schema.ts [53L]

## packages/blocks/integrations/src/sendEmail/
- constants.ts [8L]
- schema.ts [26L]

## packages/blocks/integrations/src/zapier/
- constants.ts [0L]
- schema.ts [26L]

## packages/blocks/logic/
- package.json [20L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/blocks/logic/src/
- constants.ts [13L]
- schema.ts [39L]

## packages/blocks/logic/src/abTest/
- constants.ts [6L]
- schema.ts [51L]

## packages/blocks/logic/src/condition/
- constants.ts [7L]
- schema.ts [51L]

## packages/blocks/logic/src/jump/
- constants.ts [0L]
- schema.ts [18L]

## packages/blocks/logic/src/redirect/
- constants.ts [6L]
- schema.ts [18L]

## packages/blocks/logic/src/return/
- schema.ts [12L]

## packages/blocks/logic/src/script/
- constants.ts [7L]
- schema.ts [20L]

## packages/blocks/logic/src/setVariable/
- constants.ts [59L]
- schema.ts [70L]

## packages/blocks/logic/src/typebotLink/
- constants.ts [6L]
- schema.ts [19L]

## packages/blocks/logic/src/wait/
- constants.ts [6L]
- schema.ts [18L]

## packages/blocks/logic/src/webhook/
- schema.ts [25L]

## packages/blocks/webhook/
- package.json [41L]
- tsconfig.json [11L]
- tsconfig.lib.json [42L]
- vitest.config.ts [12L]

## packages/blocks/webhook/src/api/
- getTestWebhookRoom.ts [65L] — getTestWebhookRoom()
- handleExecuteTestWebhook.ts [32L] — handleExecuteTestWebhook()
- handleExecuteTestWebhookWhatsApp.ts [123L] — handleExecuteTestWebhookWhatsApp()
- handleExecuteWebhook.test.ts [336L] — createTypebot()
- handleExecuteWebhook.ts [170L] — handleExecuteWebhook()
- publishWebhook.ts [38L] — publishWebhook()
- router.ts [59L]
- serializeWebhookResponse.ts [20L] — serializeWebhookResponse()
- signWhatsAppWebhookResponse.ts [24L] — signWhatsAppWebhookResponse()

## packages/bot-engine/
- bunfig.toml [3L]
- package.json [71L]
- tsconfig.json [11L]
- tsconfig.lib.json [99L]

## packages/bot-engine/src/
- addDummyFirstBlockToGroupIfMissing.ts [48L] When executing an event, we need to update the current block id to a dummy block
- addPortalEdge.ts [46L] — createPortalEdge(), createVirtualEdgeId()
- computeCurrentProgress.ts [132L] — computeCurrentProgress(), getBlockOutgoingEdgeIds()
- computeResultTranscript.test.ts [164L]
- computeResultTranscript.ts [612L] — getFirstEdgeId(), applyVariables()
- continueBotFlow.ts [790L] — processNonInputBlock(), processAndSaveAnswer(), saveVariablesValueIfAny(), saveAnswerInDb(), parseGroupKey(), setNewAnswerInState()
- executeIntegration.ts [71L]
- executeLogic.ts [60L]
- formatInputForChatResponse.ts [126L]
- getFirstEdgeId.ts [24L] — getFirstEdgeId()
- getNextBlock.ts [31L]
- getPrefilledValue.ts [14L] — getPrefilledInputValue()
- getReplyOutgoingEdge.ts [66L]
- getStartingPoint.ts [40L]
- parseBubbleBlock.ts [109L]
- parseDynamicTheme.ts [35L]
- resetSessionState.ts [15L]
- saveStateToDatabase.ts [104L] — saveStateToDatabase()
- startBotFlow.ts [102L]
- startSession.ts [685L] — getTypebot(), getOrInitResult(), parseDynamicThemeInState(), sanitizeAndParseHeadCode(), removeLiteBadgeCss()
- test-preload.ts [10L]
- types.ts [48L]
- updateVariablesInSession.ts [129L] TODO: Refacto newVariables param first, other in second
- validateAndParseInputMessage.ts [208L]
- walkFlowForward.ts [553L] — walkFlowForward(), isDedicatedReplyNeeded()

## packages/bot-engine/src/api/
- handleContinueChat.ts [134L] — handleContinueChat()
- handleSaveClientLogs.ts [65L] — handleSaveClientLogs()
- handleStartChat.ts [162L] — handleStartChat()
- handleStartChatPreview.test.ts [73L]
- handleStartChatPreview.ts [213L] — handleStartChatPreview(), handleStartTemplatePreviewChat(), startPreviewSession()
- handleUpdateTypebotInSession.ts [104L] — handleUpdateTypebotInSession()
- router.ts [190L]

## packages/bot-engine/src/api/legacy/
- handleSaveClientLogsV1.ts [77L] — handleSaveClientLogsV1()
- handleSendMessageV1.ts [219L] — handleSendMessageV1()
- handleSendMessageV2.ts [219L] — handleSendMessageV2()

## packages/bot-engine/src/apiHandlers/
- getMessageStream.ts [214L]

## packages/bot-engine/src/blocks/cards/
- filterCardItems.ts [30L] — filterCardsItems()
- injectVariableValuesInCardsBlock.ts [119L] — getDynamicProps()
- parseCardsReply.ts [95L]

## packages/bot-engine/src/blocks/inputs/buttons/
- filterChoiceItems.ts [36L]
- injectVariableValuesInButtonsInputBlock.ts [68L]
- parseMultipleChoiceReply.test.ts [115L]
- parseMultipleChoiceReply.ts [98L] Parses a multiple choice reply from a user. — includesWholePhrase()
- parseSingleChoiceReply.ts [42L]

## packages/bot-engine/src/blocks/inputs/date/
- parseDateInput.ts [58L] — parseDateInput(), parseDateLimit()
- parseDateReply.test.ts [76L]
- parseDateReply.ts [72L] — parseDateWithNeutralTimezone()

## packages/bot-engine/src/blocks/inputs/email/
- formatEmail.ts [7L] — formatEmail()

## packages/bot-engine/src/blocks/inputs/number/
- parseNumber.ts [45L]

## packages/bot-engine/src/blocks/inputs/payment/
- computePaymentInputRuntimeOptions.ts [150L] — computePaymentInputRuntimeOptions(), isZeroDecimalCurrency()

## packages/bot-engine/src/blocks/inputs/phone/
- formatPhoneNumber.ts [14L] — formatPhoneNumber()

## packages/bot-engine/src/blocks/inputs/pictureChoice/
- filterPictureChoiceItems.ts [27L]
- injectVariableValuesInPictureChoiceBlock.ts [85L]

## packages/bot-engine/src/blocks/inputs/rating/
- validateRatingReply.ts [6L] — validateRatingReply()

## packages/bot-engine/src/blocks/inputs/time/
- parseTime.ts [23L]

## packages/bot-engine/src/blocks/integrations/chatwoot/
- executeChatwootBlock.ts [126L] — parseSetUserCode(), parseChatwootOpenCode()

## packages/bot-engine/src/blocks/integrations/googleSheets/
- executeGoogleSheetBlock.ts [39L]
- getRow.ts [145L]
- insertRow.ts [73L]
- updateRow.ts [115L]

## packages/bot-engine/src/blocks/integrations/googleSheets/helpers/
- matchFilter.ts [96L] — matchFilter()
- parseNewCellValuesObject.ts [32L]
- parseNewRowObject.ts [21L]

## packages/bot-engine/src/blocks/integrations/httpRequest/
- executeHttpRequestBlock.ssrf.test.ts [442L] — replaceFetch(), RecordingDispatcher, callLookup(), createProxyAgentCapture()
- executeHttpRequestBlock.test.ts [98L] — buildHttpRequest(), assertWebhookErrorLogIsSafe(), replaceFetchWithError()
- executeHttpRequestBlock.ts [505L] — checkIfBodyIsAVariable(), createSafeProxyRequest(), convertKeyValueTableToObject(), parseFormDataBody()
- parseSampleResult.ts [240L] — parseResultSample(), walkEdgesAndExtract(), getGroupIdsLinkedToGroup(), extractBlocksInGroup()
- saveDataInResponseVariableMapping.ts [117L]

## packages/bot-engine/src/blocks/integrations/legacy/googleAnalytics/
- executeGoogleAnalyticsBlock.ts [29L]

## packages/bot-engine/src/blocks/integrations/legacy/openai/
- createChatCompletionOpenAI.ts [168L] — isNextBubbleMessageWithAssistantMessage()
- executeChatCompletionOpenAIRequest.test.ts [38L]
- executeChatCompletionOpenAIRequest.ts [108L]
- executeOpenAIBlock.ts [32L]
- parseChatCompletionMessages.ts [126L] — parseChatCompletionMessages()
- resumeChatCompletion.ts [84L] — resumeChatCompletion()

## packages/bot-engine/src/blocks/integrations/legacy/openai/audio/
- createSpeechOpenAI.ts [131L]

## packages/bot-engine/src/blocks/integrations/pixel/
- executePixelBlock.ts [38L]

## packages/bot-engine/src/blocks/integrations/sendEmail/
- constants.ts [18L]
- executeSendEmailBlock.tsx [355L] — getFileUrls()
- parseEmailAttachments.test.ts [149L] — createDependencies()
- parseEmailAttachments.ts [241L]

## packages/bot-engine/src/blocks/logic/abTest/
- executeAbTest.ts [18L]

## packages/bot-engine/src/blocks/logic/condition/
- executeConditionBlock.ts [23L]

## packages/bot-engine/src/blocks/logic/jump/
- executeJumpBlock.ts [85L]

## packages/bot-engine/src/blocks/logic/redirect/
- executeRedirect.ts [30L]

## packages/bot-engine/src/blocks/logic/return/
- executeReturnBlock.ts [44L]

## packages/bot-engine/src/blocks/logic/script/
- executeScript.ts [97L] — parseScriptToExecuteClientSideAction()
- legacyClientActions.test.ts [91L] Client actions must not invoke the native server-side VM.

## packages/bot-engine/src/blocks/logic/setVariable/
- executeSetVariable.ts [547L] — toISOWithTz()

## packages/bot-engine/src/blocks/logic/typebotLink/
- executeTypebotLink.ts [329L] — fetchTypebot(), getNextGroupId()
- fetchLinkedChildTypebots.ts [50L] — fetchLinkedChildTypebots()
- fetchLinkedParentTypebots.ts [21L] — fetchLinkedParentTypebots()
- fetchLinkedTypebots.ts [36L] — fetchLinkedTypebots()

## packages/bot-engine/src/blocks/logic/wait/
- executeWait.ts [41L]

## packages/bot-engine/src/blocks/logic/webhook/
- consumeWebhookResponse.ts [57L] — consumeWebhookResponse()
- executeWebhookBlock.ts [35L]

## packages/bot-engine/src/events/
- executeCommandEvent.ts [91L] — executeCommandEvent()
- executeInvalidReplyEvent.ts [65L] — executeInvalidReplyEvent()
- executeReplyEvent.ts [56L] — executeReplyEvent()
- saveReplyVariables.ts [83L] — setReplyEventVariables()
- updateCurrentBlockIdWithEvent.ts [36L] — updateCurrentBlockIdWithEvent()

## packages/bot-engine/src/forge/
- executeForgedBlock.ts [259L] — isNextBubbleTextWithStreamingVar()

## packages/bot-engine/src/helpers/
- assertOriginIsAllowed.ts [30L] — assertOriginIsAllowed()
- isTypebotInSessionAtLeastV6.ts [9L]
- parseItemContent.ts [12L] Picture choice — parseItemContent()

## packages/bot-engine/src/logs/
- filterPotentiallySensitiveLogs.ts [18L] — filterPotentiallySensitiveLogs()
- saveErrorLog.ts [12L] — saveErrorLog()
- saveLog.ts [22L] — saveLog()
- saveSuccessLog.ts [12L] — saveSuccessLog()

## packages/bot-engine/src/logs/helpers/
- shortenLogDetails.ts [6L]

## packages/bot-engine/src/mediaCache/
- getMediaIdFromCache.ts [37L] — getMediaIdFromCache()
- insertMediaIdToCache.ts [39L] — insertMediaIdToCache()

## packages/bot-engine/src/queries/
- createResultIfNotExist.ts [34L] — createResultIfNotExist()
- findPublicTypebot.ts [40L] — findPublicTypebot()
- findResult.ts [35L] — findResult()
- findTypebot.test.ts [49L]
- findTypebot.ts [38L] — findTypebot()
- getTypebotWorkspaceId.ts [14L] — getTypebotWorkspaceId()
- saveAnswer.ts [38L] — saveAnswer()
- saveLogs.ts [11L]
- saveSetVariableHistoryItems.ts [17L] — saveSetVariableHistoryItems()
- saveVisitedEdges.ts [9L] — saveVisitedEdges()
- upsertResult.ts [99L]

## packages/bot-engine/src/schemas/legacy/
- schema.ts [126L]

## packages/chat-api/
- package.json [28L]
- tsconfig.json [11L]
- tsconfig.lib.json [39L]

## packages/chat-api/src/
- clientSideAction.ts [136L]
- parsePaymentInProgress.ts [44L] This state is written by the embed. Check its storage envelope without — parsePaymentInProgress()
- previewMessages.ts [42L]
- schemas.ts [369L]

## packages/chat-session/
- package.json [30L]
- tsconfig.json [11L]
- tsconfig.lib.json [36L]

## packages/chat-session/src/
- schemas.test.ts [30L]
- schemas.ts [283L]

## packages/chat-session/src/queries/
- deleteSession.ts [9L] — deleteSession()
- getSession.ts [26L] Retrocompatibility with old sessions — getSession()
- restartSession.ts [25L] — restartSession()
- updateSession.ts [24L]
- upsertSession.ts [19L] — upsertSession()

## packages/conditions/
- package.json [21L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/conditions/src/
- constants.ts [22L]
- executeCondition.ts [254L] — compare(), preprocessRegex()
- schemas.ts [17L]

## packages/config/
- package.json [27L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/config/src/
- constants.ts [2L]
- index.ts [91L] — WorkflowsRpcClientConfig, WorkflowsServerConfig, WorkflowsDatabaseConfig, NextAuthConfig
- workflowsRpcProtocol.ts [43L]

## packages/config/src/orpc/
- EffectSchemaToJsonSchemaConverter.ts [33L] — EffectSchemaToJsonSchemaConverter

## packages/config/src/orpc/builder/
- context.ts [24L] TODO: review package org — createContext()
- middlewares.ts [96L] — isUnknownError()

## packages/config/src/orpc/viewer/
- context.ts [18L] — createContext()
- middlewares.ts [125L] — isUnknownError(), isExpectedWhatsAppWebhookValidationError()

## packages/config/src/tests/
- PgContainer.ts [22L]
- globalSetup.ts [69L] — globalSetup()
- pushPrismaSchema.ts [47L] — DbPushCommandError
- runDatabaseSetup.ts [27L] — createSetupEffect(), runDatabaseSetup()
- seedDatabaseForTest.ts [99L]

## packages/credentials/
- package.json [25L]
- tsconfig.json [11L]
- tsconfig.lib.json [27L]

## packages/credentials/src/
- decrypt.ts [11L]
- decryptAndRefreshCredentials.ts [103L] — decryptAndRefreshCredentialsData()
- decryptV1.ts [24L]
- decryptV2.ts [36L]
- encrypt.ts [43L]
- getCredentials.ts [20L] — getCredentials()
- getGoogleSpreadsheet.ts [125L]
- schemas.ts [128L]

## packages/deprecated/legacy/
- package.json [20L]
- tsconfig.json [11L]
- tsconfig.lib.json [30L]

## packages/deprecated/legacy/src/
- ai.ts [60L] — StreamingTextResponse, formatDataStreamPart(), getDataStreamPrefix(), getErrorMessage()
- getOpenAIChatCompletionStream.ts [70L] — getOpenAIChatCompletionStream()

## packages/emails/
- package.json [41L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/emails/helpers/
- sendEmail.ts [51L] — sendEmail()
- suppressedEmails.test.ts [45L]
- suppressedEmails.ts [217L] — normalizeEmail(), extractEmailsFromString(), normalizeEmailList(), normalizeRecipientEmails(), filterRecipientsString(), filterSuppressedRecipients(), listSuppressedEmailsForRecipients(), runListSuppressedEmailsForRecipients(), runRecordTransientGeneralBounces()

## packages/emails/marketing/
- V2dot22Update.tsx [201L] — V2dot22Update()
- V2dot23Update.tsx [171L] — V2dot23Update()
- V2dot24Update.tsx [176L] — V2dot24Update()
- V2dot26Update.tsx [101L] — V2dot26Update()
- V3dot6Update.tsx [168L] — V3dot6Update()
- styles.ts [64L]

## packages/emails/marketing/components/
- NewsletterLayout.tsx [55L] — NewsletterLayout()
- NewsletterSection.tsx [22L] — NewsletterSection()

## packages/emails/transactional/
- AlmostReachedChatsLimitEmail.tsx [86L] — AlmostReachedChatsLimitEmail(), sendAlmostReachedChatsLimitEmail()
- BillingCycleResetEmail.tsx [96L] — BillingCycleResetEmail(), sendBillingCycleResetEmail()
- BillingCycleResetFailedEmail.tsx [92L] — BillingCycleResetFailedEmail(), sendBillingCycleResetFailedEmail()
- DefaultBotNotificationEmail.tsx [74L] — DefaultBotNotificationEmail(), renderDefaultBotNotificationEmail()
- GuestInvitationEmail.tsx [90L] — GuestInvitationEmail(), sendGuestInvitationEmail()
- LoginCodeEmail.tsx [73L] — LoginCodeEmail(), sendLoginCodeEmail()
- ReachedChatsLimitEmail.tsx [82L] — ReachedChatsLimitEmail(), sendReachedChatsLimitEmail()
- ResultsExportLinkEmail.tsx [58L] — ResultsExportLinkEmail(), renderResultsExportLinkEmail(), sendResultsExportLinkEmail()
- UserOnboardingEmail.tsx [92L] — UserOnboardingEmail(), renderUserOnboardingEmail()
- VerificationCodeEmail.tsx [68L] — VerificationCodeEmail(), sendVerificationCodeEmail()
- WorkspaceMemberInvitationEmail.tsx [86L] — WorkspaceMemberInvitationEmail(), sendWorkspaceMemberInvitationEmail()
- styles.ts [63L]

## packages/emails/transactional/components/
- Logo.tsx [19L] — Logo()

## packages/embeds/js/
- .npmignore [6L]
- README.md [170L] Typebot JS library
- esbuild.config.cjs [34L]
- package.json [97L]
- postcss.config.js [6L]
- tsconfig.json [11L]
- tsconfig.lib.json [59L]

## packages/embeds/js/src/
- constants.ts [60L]
- env.d.ts [15L]
- global.d.ts [2L]
- index.ts [9L]
- register.ts [17L] — registerWebComponents()
- types.ts [69L]
- web.ts [11L]
- window.ts [46L] — initStandard(), initPopup(), initBubble(), parseTypebot(), injectTypebotInWindow()

## packages/embeds/js/src/assets/
- index.css [744L] Workaround for https://github.com/tailwindlabs/tailwindcss/discussions/15556 */

## packages/embeds/js/src/components/
- Bot.tsx [428L] — Bot(), BotContent()
- Button.tsx [63L] — Button()
- ErrorMessage.tsx [12L] — ErrorMessage()
- InputChatBlock.tsx [280L] — InputChatBlock(), getAnswerValue(), Input()
- LiteBadge.tsx [110L] — LiteBadge()
- Modal.tsx [33L] — Modal()
- ProgressBar.tsx [15L] — ProgressBar()
- SendButton.tsx [44L] — SendButton()
- Spinner.tsx [28L] — Spinner()
- TextInputAddFileButton.tsx [95L] — TextInputAddFileButton()
- TypingBubble.tsx [8L] — TypingBubble()
- carousel.tsx [35L] — Root(), Control(), PrevTrigger(), NextTrigger(), ItemGroup(), Item()

## packages/embeds/js/src/components/ConversationContainer/
- AvatarSideContainer.tsx [63L] — AvatarSideContainer()
- ChatChunk.tsx [186L] — ChatChunk()
- ChatContainer.tsx [718L] — ChatContainer(), BottomSpacer(), updateAnswerOnLastChunk(), addAnswerToLastChunk(), updateBgImage(), addNewChunk(), sanitizeMessages(), hasExecutedInitialClientSideActions()
- LoadingChunk.tsx [28L] — LoadingChunk()

## packages/embeds/js/src/components/avatars/
- Avatar.tsx [57L] — Avatar(), isEmoji()
- DefaultAvatar.tsx [23L] — DefaultAvatar()

## packages/embeds/js/src/components/bubbles/
- GuestBubble.tsx [151L] — GuestBubble(), TextGuestBubble(), AudioGuestBubble()
- HostBubble.tsx [73L] — HostBubble()
- LoadingBubble.tsx [26L] — LoadingBubble()
- StreamingBubble.tsx [90L] — StreamingBubble()

## packages/embeds/js/src/components/icons/
- ArrowLeftIcon.tsx [18L] — ArrowLeftIcon()
- ArrowRightIcon.tsx [18L] — ArrowRightIcon()
- CameraIcon.tsx [19L] — CameraIcon()
- CheckIcon.tsx [18L] — CheckIcon()
- ChevronDownIcon.tsx [18L] — ChevronDownIcon()
- ChevronUpIcon.tsx [18L] — ChevronUpIcon()
- CloseIcon.tsx [19L] — CloseIcon()
- FileIcon.tsx [19L] — FileIcon()
- MicrophoneIcon.tsx [14L] — MicrophoneIcon()
- PaperClipIcon.tsx [20L] — PaperClipIcon()
- PictureIcon.tsx [21L] — PictureIcon()
- PlusIcon.tsx [19L] — PlusIcon()
- SendIcon.tsx [14L] — SendIcon()
- TypebotLogo.tsx [10L] — TypebotLogo()

## packages/embeds/js/src/components/inputs/
- SearchInput.tsx [43L] — SearchInput()
- ShortTextInput.tsx [24L] — ShortTextInput()
- Textarea.tsx [29L] — Textarea()

## packages/embeds/js/src/contexts/
- BotContainerContext.tsx [8L] — useBotContainer()
- ChatContainerSizeContext.tsx [62L] Provider that manages bot container and its size with a single ResizeObserver — useChatContainerSize()

## packages/embeds/js/src/features/blocks/bubbles/audio/components/
- AudioBubble.tsx [78L] — AudioBubble()

## packages/embeds/js/src/features/blocks/bubbles/embed/components/
- CustomEmbedBubble.tsx [87L] — CustomEmbedBubble()
- EmbedBubble.tsx [104L] — EmbedBubble()

## packages/embeds/js/src/features/blocks/bubbles/image/components/
- ImageBubble.tsx [144L] — ImageBubble()

## packages/embeds/js/src/features/blocks/bubbles/textBubble/components/
- TextBubble.tsx [87L] — TextBubble()

## packages/embeds/js/src/features/blocks/bubbles/textBubble/components/plate/
- PlateBlock.tsx [86L] — PlateElement()
- PlateText.tsx [20L] — computeClassNames(), PlateText()

## packages/embeds/js/src/features/blocks/bubbles/textBubble/helpers/
- convertRichTextToPlainText.ts [10L]

## packages/embeds/js/src/features/blocks/bubbles/video/components/
- VideoBubble.tsx [148L] — VideoBubble()

## packages/embeds/js/src/features/blocks/inputs/buttons/components/
- Buttons.tsx [104L] — Buttons()
- Checkbox.tsx [24L] — Checkbox()
- MultipleChoicesForm.tsx [196L] — MultipleChoicesForm()

## packages/embeds/js/src/features/blocks/inputs/cards/
- CardsCaroussel.tsx [163L] — CardsCaroussel(), Card(), computeSlidesPerPage()

## packages/embeds/js/src/features/blocks/inputs/date/components/
- DateForm.tsx [126L] — DateForm(), parseDefaultValue()

## packages/embeds/js/src/features/blocks/inputs/email/components/
- EmailInput.tsx [77L] — EmailInput()

## packages/embeds/js/src/features/blocks/inputs/fileUpload/components/
- FilePreview.tsx [81L] — FilePreview(), formatFileExtensionHumanReadable()
- FileUploadForm.tsx [353L] — FileUploadForm(), UploadIcon()
- SelectedFile.tsx [93L] — SelectedFile(), UploadOverlay()

## packages/embeds/js/src/features/blocks/inputs/fileUpload/helpers/
- injectAndroidCameraCaptureToMimeTypes.test.ts [71L]
- injectAndroidCameraCaptureToMimeTypes.ts [80L] Adds Android camera workaround to file types when no standard capture attribute  — normalizeFileType()
- sanitizeSelectedFiles.ts [49L]
- uploadFiles.ts [95L] — parseUploadResponseError(), parseUploadError()

## packages/embeds/js/src/features/blocks/inputs/number/
- numberInputHelper.tsx [33L] eslint-disable-next-line @typescript-eslint/no-explicit-any — numberInputHelper()

## packages/embeds/js/src/features/blocks/inputs/number/components/
- NumberInput.tsx [132L] — NumberInput()

## packages/embeds/js/src/features/blocks/inputs/payment/components/
- PaymentForm.tsx [21L] — PaymentForm()
- StripePaymentForm.tsx [145L] — StripePaymentForm(), initShadowMountPoint()

## packages/embeds/js/src/features/blocks/inputs/payment/helpers/
- paymentInProgressStorage.ts [29L] — setPaymentInProgressInStorage(), getPaymentInProgressInStorage(), removePaymentInProgressFromStorage()

## packages/embeds/js/src/features/blocks/inputs/phone/components/
- PhoneInput.tsx [168L] — PhoneInput()

## packages/embeds/js/src/features/blocks/inputs/pictureChoice/
- MultiplePictureChoice.tsx [263L] — MultiplePictureChoice()
- SinglePictureChoice.tsx [118L] — SinglePictureChoice()

## packages/embeds/js/src/features/blocks/inputs/rating/components/
- RatingForm.tsx [175L] — RatingForm(), RatingButton()

## packages/embeds/js/src/features/blocks/inputs/textInput/components/
- TextInput.tsx [436L] — TextInput()
- VoiceRecorder.tsx [206L] — VoiceRecorder(), loadVolumeProcessorWorklet()
- VolumeProcessor.ts [27L] — VolumeProcessor

## packages/embeds/js/src/features/blocks/inputs/time/components/
- TimeForm.tsx [77L] — TimeForm()

## packages/embeds/js/src/features/blocks/inputs/url/components/
- UrlInput.tsx [84L] — UrlInput()

## packages/embeds/js/src/features/blocks/integrations/chatwoot/
- constants.ts [2L]

## packages/embeds/js/src/features/blocks/integrations/chatwoot/utils/
- executeChatwoot.ts [17L] — executeChatwoot()
- index.ts [2L]

## packages/embeds/js/src/features/blocks/integrations/googleAnalytics/utils/
- executeGoogleAnalytics.ts [10L] — executeGoogleAnalyticsBlock()

## packages/embeds/js/src/features/blocks/integrations/httpRequest/
- executeHttpRequest.ts [26L]

## packages/embeds/js/src/features/blocks/integrations/openai/
- streamChat.ts [109L] — streamChat()

## packages/embeds/js/src/features/blocks/integrations/pixel/
- executePixel.ts [9L] — executePixel()

## packages/embeds/js/src/features/blocks/logic/redirect/utils/
- executeRedirect.ts [18L]

## packages/embeds/js/src/features/blocks/logic/script/
- executeScript.ts [65L] — executeScript(), executeCode(), unwrapScriptTag()

## packages/embeds/js/src/features/blocks/logic/setVariable/
- executeSetVariable.ts [45L] To avoid octal number evaluation

## packages/embeds/js/src/features/blocks/logic/wait/utils/
- executeWait.ts [8L] — executeWait()

## packages/embeds/js/src/features/blocks/logic/webhook/
- listenForWebhook.ts [26L] PartySocket reconnects automatically. Keep the action pending until data — listenForWebhook()

## packages/embeds/js/src/features/bubble/
- types.ts [42L]

## packages/embeds/js/src/features/bubble/components/
- Bubble.tsx [327L] — Bubble()
- BubbleButton.tsx [158L] — isImageSrc(), BubbleButton(), OpenIcon(), CloseIcon(), resolveButtonIconColor()
- PreviewMessage.tsx [142L] — PreviewMessage(), CloseButton()

## packages/embeds/js/src/features/commands/
- index.ts [14L]
- types.ts [46L]

## packages/embeds/js/src/features/commands/utils/
- close.ts [11L] — close()
- hidePreviewMessage.ts [11L] — hidePreviewMessage()
- open.ts [11L] — open()
- reload.ts [11L] — reload()
- reset.ts [11L] — reset()
- sendCommand.ts [12L] — sendCommand()
- setInputValue.ts [12L] — setInputValue()
- setPrefilledVariables.ts [15L] — setPrefilledVariables()
- showPreviewMessage.ts [19L] — showPreviewMessage()
- submitInput.ts [11L] — submitInput()
- toggle.ts [11L] — toggle()
- unmount.ts [11L] — unmount()

## packages/embeds/js/src/features/popup/
- types.ts [9L]

## packages/embeds/js/src/features/popup/components/
- Popup.tsx [213L] — Popup()

## packages/embeds/js/src/features/standard/components/
- Standard.tsx [106L] — Standard()

## packages/embeds/js/src/lib/
- gtag.ts [59L] — sendGaEvent()
- gtm.ts [24L] — gtmHeadSnippet(), gtmBodyElement()
- pixel.ts [46L] — initPixel(), trackPixelEvent()
- sanitizeUrl.ts [12L]

## packages/embeds/js/src/queries/
- continueChatQuery.ts [43L] — continueChatQuery()
- saveClientLogsQuery.ts [35L] — saveClientLogsQuery()
- startChatQuery.ts [239L] — startChatQuery(), resumeChatAfterPaymentRedirect(), startPreviewChat(), startTemplatePreviewChat()

## packages/embeds/js/src/utils/
- CorsError.ts [6L] — CorsError
- dynamicTheme.ts [40L]
- error.ts [33L] — isNetworkError()
- executeClientSideActions.ts [120L]
- getAnswerContent.ts [7L]
- getIframeReferrerOrigin.ts [24L] Returns the embedding page origin when running inside an iframe.
- getPartyKitHost.ts [9L] — getPartyKitHost()
- guessApiHost.ts [38L] — guessApiHost()
- injectFont.ts [44L] — injectFont()
- injectStartProps.ts [24L] — injectStartProps()
- migrateLegacyChatChunks.ts [155L] — getAndRemoveLegacyAvatarsHistory()
- persist.ts [79L] Copied from https://github.com/solidjs-community/solid-primitives/blob/main/pack — persist()
- resolveBubbleButtonSize.ts [19L]
- sanitizeHtml.ts [23L] — normalizeSanitizedMarkup(), sanitizeSvgFragment(), sanitizeHtmlFragment()
- scrollContainer.ts [5L]
- setCssVariablesValue.ts [769L] — setCssVariablesValue(), setGeneralTheme(), setProgressBar(), setChatTheme(), setChatContainer(), setHostBubbles(), setGuestBubbles(), setButtons(), setButtonsInput(), setInputs(), setCheckbox(), setGeneralBackground(), +3
- storage.ts [106L] — getExistingResultIdFromStorage(), setResultInStorage(), getInitialChatReplyFromStorage(), setInitialChatReplyInStorage(), setBotOpenedStateInStorage(), removeBotOpenedStateInStorage(), getBotOpenedStateFromStorage(), wipeExistingChatStateInStorage()
- toaster.ts [7L]

## packages/embeds/react/
- .npmignore [3L]
- README.md [145L]
- package.json [72L]
- tsconfig.json [11L]
- tsconfig.lib.json [19L]

## packages/embeds/react/src/
- Bubble.tsx [68L] — Bubble()
- Popup.tsx [59L] — Popup()
- Standard.tsx [37L] — Standard()
- ensureWebComponentsLoaded.ts [9L] — ensureWebComponentsLoaded()
- index.ts [5L]
- web.ts [3L] Registers the web component

## packages/embeds/stories/
- package.json [23L]
- tsconfig.json [11L]
- tsconfig.lib.json [33L]

## packages/embeds/stories/src/
- bubble.stories.tsx [87L] — Default()
- iframe.stories.tsx [11L] — Default()
- multi.stories.tsx [41L] — Default()
- popup.stories.tsx [23L] — Default()
- standard.stories.tsx [23L] — Default(), StartWhenIntoView()

## packages/embeds/stories/src/assets/
- leadGenerationTypebot.ts [460L]

## packages/embeds/wordpress/
- README.md [15L] [Typebot](https://www.typebot.io "Typebot")
- package.json [14L]
- tsconfig.json [11L]
- tsconfig.lib.json [11L]

## packages/embeds/wordpress/trunk/
- README.txt [193L]
- index.php [1L]
- typebot.php [46L] Description:       Convert more with conversational forms — activate_typebot(), deactivate_typebot(), run_typebot()
- uninstall.php [6L]

## packages/embeds/wordpress/trunk/admin/
- class-typebot-admin.php [33L] — Typebot_Admin, my_admin_menu(), typebot_settings_callback(), register_typebot_settings()
- index.php [1L]

## packages/embeds/wordpress/trunk/admin/partials/
- typebot-admin-display.php [37L]

## packages/embeds/wordpress/trunk/includes/
- class-typebot-activator.php [9L] — Typebot_Activator, activate()
- class-typebot-deactivator.php [9L] — Typebot_Deactivator, deactivate()
- class-typebot-i18n.php [15L] — Typebot_i18n, load_plugin_textdomain()
- class-typebot-loader.php [61L] — Typebot_Loader, __construct(), add_action(), add_filter(), add(), run(), add_shortcode()
- class-typebot.php [76L] — Typebot, __construct(), load_dependencies(), set_locale(), hook:plugins_loaded, define_admin_hooks(), hook:admin_menu, hook:admin_init, define_public_hooks(), hook:wp_enqueue_scripts, shortcode:typebot, run(), +3
- index.php [1L]

## packages/embeds/wordpress/trunk/languages/
- plugin-name.pot [0L]

## packages/embeds/wordpress/trunk/public/
- class-typebot-public.php [203L] — Typebot_Public, __construct(), hook:wp_head, hook:wp_footer, parse_wp_user(), add_head_code(), initialize_typebot(), is_path_excluded(), add_typebot_container(), generateRandomString(), custom_sanitize_text_field()
- index.php [1L]

## packages/env/
- package.json [60L]
- tsconfig.json [11L]
- tsconfig.lib.json [11L]

## packages/env/src/
- getRuntimeVariable.ts [11L] — getRuntimeVariable()
- index.ts [598L] — guessNextAuthUrlForVercelPreview(), guessViewerUrlForVercelPreview(), guessLandingUrlForVercelPreview(), formatEnvIssues()

## packages/events/
- package.json [18L]
- tsconfig.json [11L]
- tsconfig.lib.json [11L]

## packages/events/src/
- constants.ts [7L]
- schemas.ts [68L] TODO: remove and use Return block instead.

## packages/forge/blocks/anthropic/
- package.json [35L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/forge/blocks/anthropic/src/
- auth.ts [21L]
- constants.ts [30L]
- index.ts [16L]
- logo.tsx [9L] — AnthropicLogo()
- schemas.ts [10L]

## packages/forge/blocks/anthropic/src/actions/
- createChatMessage.ts [145L] — transformToChatCompletionOptions()
- generateVariables.ts [40L]

## packages/forge/blocks/anthropic/src/handlers/
- createChatMessageHandler.ts [87L]
- generateVariablesHandler.ts [24L]
- index.ts [5L]

## packages/forge/blocks/anthropic/src/helpers/
- isModelCompatibleWithVision.ts [6L] — isModelCompatibleWithVision()

## packages/forge/blocks/blink/
- package.json [36L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/forge/blocks/blink/src/
- auth.ts [47L] — isLegacyAppCredentials()
- constants.ts [28L]
- index.ts [18L]
- logo.tsx [13L] — BlinkLogo()
- schemas.ts [11L] Do not edit this file manually

## packages/forge/blocks/blink/src/actions/
- getUsers.ts [40L]
- redirect.ts [16L]
- sendChatMessage.ts [42L]
- sendFeedEvent.ts [246L]

## packages/forge/blocks/blink/src/handlers/
- getUsersHandler.test.ts [135L]
- getUsersHandler.ts [129L] Avoid leaving users from a previous run in the mapped variables — fetchFilteredUsers(), fetchAllUsers()
- index.ts [12L]
- redirectHandler.ts [36L]
- sendChatMessageHandler.test.ts [357L] — executeSendChatMessage(), mockBlinkApi(), createAccessToken(), parseFakeAccessToken(), readJsonBody(), findUserId()
- sendChatMessageHandler.ts [132L] — setResultVariables()
- sendFeedEventHandler.ts [212L]

## packages/forge/blocks/blink/src/helpers/
- createBlinkChatClient.ts [136L] — createBlinkChatClient(), fetchAppIdentityAccessToken(), parseOrganisationIdFromAccessToken(), sleep()
- parseUserIds.test.ts [14L]
- parseUserIds.ts [30L] List variables are injected as JSON arrays, e.g. `["u-1","u-2"]` — parseUserIds(), parseJsonList()

## packages/forge/blocks/calCom/
- package.json [31L]
- tsconfig.json [11L]
- tsconfig.lib.json [15L]

## packages/forge/blocks/calCom/src/
- baseOptions.ts [14L]
- constants.ts [2L]
- handlers.ts [126L]
- index.ts [14L]
- logo.tsx [18L] — CalComLogo()
- schemas.ts [6L] Do not edit this file manually

## packages/forge/blocks/calCom/src/actions/
- bookEvent.ts [77L]

## packages/forge/blocks/chatNode/
- package.json [33L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/forge/blocks/chatNode/src/
- auth.ts [20L]
- constants.ts [2L]
- handlers.ts [56L]
- index.ts [14L]
- logo.tsx [12L] — ChatNodeLogo()
- schemas.ts [11L] Do not edit this file manually
- types.ts [5L]

## packages/forge/blocks/chatNode/src/actions/
- sendMessage.ts [41L]

## packages/forge/blocks/deepseek/
- package.json [37L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/forge/blocks/deepseek/src/
- auth.ts [30L]
- constants.ts [4L]
- createDeepSeekChatLanguageModel.test.ts [35L]
- createDeepSeekChatLanguageModel.ts [18L] — createDeepSeekChatLanguageModel()
- handlers.ts [82L]
- index.ts [14L]
- logo.tsx [9L] — DeepSeekLogo()
- schemas.ts [11L]

## packages/forge/blocks/deepseek/src/actions/
- createChatCompletions.ts [61L]

## packages/forge/blocks/difyAi/
- package.json [39L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/forge/blocks/difyAi/src/
- auth.ts [46L] — extractBaseUrl()
- constants.ts [6L]
- deprecated.ts [15L]
- index.ts [16L]
- logo.tsx [13L] — DifyAiLogo()
- schemas.ts [11L] Do not edit this file manually
- types.ts [38L]

## packages/forge/blocks/difyAi/src/actions/
- createChatMessage.ts [67L]
- queryKnowledgeBase.ts [39L]

## packages/forge/blocks/difyAi/src/handlers/
- createChatMessageHandler.ts [131L]
- createDifyChatLanguageModel.test.ts [184L] — replaceFetch(), getRequestUrl(), createBlockingResponse()
- createDifyChatLanguageModel.ts [28L] dify-ai-provider 1.1.0 is patched to forward this to chat and uploads.
- index.ts [46L]
- queryKnowledgeBaseHandler.ts [51L]

## packages/forge/blocks/difyAi/src/helpers/
- transformKeyValueListToObject.ts [12L]
- transformLegacyResponseMapping.ts [36L]
- validateCredentials.ts [21L]

## packages/forge/blocks/elevenlabs/
- package.json [33L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/forge/blocks/elevenlabs/src/
- auth.ts [20L]
- constants.ts [2L]
- handlers.ts [119L]
- index.ts [16L]
- logo.tsx [19L] — ElevenlabsLogo(), ElevenlabsLogoDark()
- schemas.ts [11L] Do not edit this file manually
- type.ts [13L]

## packages/forge/blocks/elevenlabs/src/actions/
- convertTextToSpeech.ts [49L]

## packages/forge/blocks/gmail/
- package.json [36L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/forge/blocks/gmail/src/
- auth.ts [24L]
- handlers.ts [124L]
- index.ts [15L]
- logo.tsx [28L] — GmailLogo()
- schemas.ts [11L] Do not edit this file manually

## packages/forge/blocks/gmail/src/actions/
- sendEmail.ts [81L]

## packages/forge/blocks/gmail/src/helpers/
- buildEmail.ts [52L] — buildEmail()
- createGmailClient.ts [16L] — createGmailClient()
- getUserName.ts [18L] — getUserInfo()
- parseFrom.ts [16L] — parseFrom()

## packages/forge/blocks/groq/
- package.json [38L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/forge/blocks/groq/src/
- auth.ts [29L]
- constants.ts [4L]
- createGroqChatLanguageModel.test.ts [35L]
- createGroqChatLanguageModel.ts [18L] — createGroqChatLanguageModel()
- handlers.ts [119L]
- index.ts [14L]
- logo.tsx [16L] — GroqLogo()
- schemas.ts [8L] Do not edit this file manually

## packages/forge/blocks/groq/src/actions/
- createChatCompletion.ts [49L]

## packages/forge/blocks/mistral/
- package.json [34L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/forge/blocks/mistral/src/
- auth.ts [20L]
- constants.ts [12L]
- index.ts [16L]
- logo.tsx [186L] — MistralLogo()
- schemas.ts [11L] Do not edit this file manually

## packages/forge/blocks/mistral/src/actions/
- createChatCompletion.ts [64L]
- generateVariables.ts [41L]

## packages/forge/blocks/mistral/src/handlers/
- createChatCompletionHandler.ts [77L]
- generateVariablesHandler.ts [24L]
- index.ts [5L]

## packages/forge/blocks/nocodb/
- package.json [36L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/forge/blocks/nocodb/src/
- auth.ts [31L]
- constants.ts [16L]
- index.ts [17L]
- logo.tsx [37L] — NocodbLogo()
- schemas.ts [11L] Do not edit this file manually
- types.ts [25L] Non exhaustive list of types

## packages/forge/blocks/nocodb/src/actions/
- createRecord.ts [39L]
- searchRecords.ts [66L]
- updateExistingRecord.ts [57L]

## packages/forge/blocks/nocodb/src/handlers/
- createRecordHandler.ts [45L]
- index.ts [10L]
- nocodbHandlers.ssrf.test.ts [238L] — executeCreateRecord(), executeSearchRecords(), executeUpdateExistingRecord(), executeRelationUpdates(), replaceFetch(), getRequestUrl(), createNocoDbResponse()
- searchRecordsHandler.ts [86L]
- updateExistingRecordHandler.ts [73L]

## packages/forge/blocks/nocodb/src/helpers/
- convertFilterToWhereClause.ts [49L] See `where`: https://docs.nocodb.com/0.109.7/developer-resources/rest-apis/#quer
- linkRelationUpdatesIfAny.ts [67L] — linkRelationUpdatesIfAny()
- parseRecordCreateBody.ts [13L]
- parseRecordsUpdateBody.ts [17L]
- parseSearchParams.ts [13L]

## packages/forge/blocks/openRouter/
- package.json [33L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/forge/blocks/openRouter/src/
- auth.ts [19L]
- constants.ts [5L]
- handlers.ts [103L]
- index.ts [14L]
- logo.tsx [31L] — OpenRouterLogo()
- schemas.ts [11L] Do not edit this file manually
- types.ts [7L]

## packages/forge/blocks/openRouter/src/actions/
- createChatCompletion.ts [51L]

## packages/forge/blocks/openai/
- package.json [48L]
- tsconfig.json [11L]
- tsconfig.lib.json [27L]

## packages/forge/blocks/openai/src/
- auth.ts [31L]
- baseOptions.ts [24L]
- constants.ts [67L]
- deprecated.ts [13L]
- index.ts [30L]
- logo.tsx [16L] — OpenAILightLogo(), OpenAIDarkLogo()
- schemas.ts [12L] Do not edit this file manually

## packages/forge/blocks/openai/src/actions/
- askAssistant.ts [91L]
- askModel.ts [142L]
- createChatCompletion.ts [57L]
- createSpeech.ts [53L]
- createTranscription.ts [39L]
- generateVariables.ts [40L]

## packages/forge/blocks/openai/src/handlers/
- askAssistantHandler.ts [409L] — createAssistantFoundationalStream()
- askModelHandler.ts [352L]
- createChatCompletionHandler.test.ts [111L]
- createChatCompletionHandler.ts [88L]
- createOpenAIChatLanguageModel.ts [22L] — createOpenAIChatLanguageModel()
- createSafeOpenAIClient.test.ts [39L]
- createSafeOpenAIClient.ts [9L] — createSafeOpenAIClient()
- createSpeechHandler.ts [104L]
- createTranscriptionHandler.test.ts [40L]
- createTranscriptionHandler.ts [152L] — createOpenAITranscriptionFileName(), parseOpenAITranscriptionFileExtension(), parseContentType(), parseUrlExtension(), parseUrlPathname()
- generateVariablesHandler.ts [27L]
- index.ts [26L]

## packages/forge/blocks/openai/src/helpers/
- isModelCompatibleWithVision.ts [11L] — isModelCompatibleWithVision()
- parseToolsForResponsesApi.ts [152L]
- splitMessageIntoResponsesApiInputItems.ts [52L]
- splitUserTextMessageIntoOpenAIBlocks.ts [49L]

## packages/forge/blocks/perplexity/
- package.json [37L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/forge/blocks/perplexity/src/
- auth.ts [30L]
- constants.ts [9L]
- createPerplexityChatLanguageModel.test.ts [35L]
- createPerplexityChatLanguageModel.ts [18L] — createPerplexityChatLanguageModel()
- handlers.ts [80L]
- index.ts [15L]
- logo.tsx [16L] — PerplexityLightLogo(), PerplexityDarkLogo()
- schemas.ts [11L] Do not edit this file manually

## packages/forge/blocks/perplexity/src/actions/
- createChatCompletion.ts [64L]

## packages/forge/blocks/posthog/
- package.json [36L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/forge/blocks/posthog/src/
- auth.ts [27L]
- constants.ts [2L]
- index.ts [16L]
- logo.tsx [48L] — PosthogLogo()
- schemas.ts [11L] Do not edit this file manually

## packages/forge/blocks/posthog/src/actions/
- capture.ts [101L]
- identifyGroup.ts [50L]

## packages/forge/blocks/posthog/src/handlers/
- captureHandler.ts [49L]
- identifyGroupHandler.ts [31L]
- index.ts [5L]

## packages/forge/blocks/posthog/src/helpers/
- createClient.test.ts [84L] — replaceFetch(), getRequestUrl()
- createClient.ts [12L] — createClient()
- parseGroups.ts [12L] — parseGroups()
- parseProperties.ts [32L] — parseProperties()

## packages/forge/blocks/postiz/
- package.json [33L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/forge/blocks/postiz/src/
- auth.ts [32L]
- constants.ts [3L] Default publishing API root inside MASTER compose (no trailing slash). */
- index.ts [15L]
- logo.tsx [13L] — PostizLogo()
- schemas.ts [11L] Do not edit this file manually

## packages/forge/blocks/postiz/src/actions/
- listChannels.ts [36L]
- publishPost.ts [109L]

## packages/forge/blocks/postiz/src/handlers/
- index.ts [5L]
- listChannelsHandler.ts [62L]
- publishPostHandler.ts [128L] — splitCsv()

## packages/forge/blocks/postiz/src/helpers/
- buildPublicUrl.ts [8L] Join Postiz API base with a `/public/v1/...` path. */ — buildPublicUrl()
- normalizeApiKey.test.ts [19L]
- normalizeApiKey.ts [9L] Strip accidental `Bearer ` prefix so Authorization matches Postiz public API. */ — normalizeApiKey()

## packages/forge/blocks/qrcode/
- package.json [34L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/forge/blocks/qrcode/src/
- handlers.ts [29L]
- index.ts [12L]
- logo.tsx [29L] — QrCodeLogo()
- schemas.ts [6L] Do not edit this file manually

## packages/forge/blocks/qrcode/src/actions/
- generateQrCodeImage.ts [23L]

## packages/forge/blocks/segment/
- package.json [32L]
- tsconfig.json [11L]
- tsconfig.lib.json [15L]

## packages/forge/blocks/segment/src/
- auth.ts [20L]
- index.ts [18L]
- logo.tsx [32L] — SegmentLogo()
- schemas.ts [11L] Do not edit this file manually

## packages/forge/blocks/segment/src/actions/
- alias.ts [23L]
- identify.ts [44L]
- trackEvent.ts [44L]
- trackPage.ts [50L]

## packages/forge/blocks/segment/src/handlers/
- aliasHandler.ts [29L]
- identifyHandler.ts [54L] — createTraits()
- index.ts [12L]
- trackEventHandler.ts [47L] — createProperties()
- trackPageHandler.ts [49L] — createProperties()

## packages/forge/blocks/togetherAi/
- package.json [31L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/forge/blocks/togetherAi/src/
- auth.ts [19L]
- constants.ts [4L]
- handlers.ts [74L]
- index.ts [15L]
- logo.tsx [26L] — TogetherAiLogo()
- schemas.ts [11L] Do not edit this file manually

## packages/forge/blocks/togetherAi/src/actions/
- createChatCompletion.ts [39L]

## packages/forge/blocks/zendesk/
- package.json [38L]
- tsconfig.json [11L]
- tsconfig.lib.json [15L]

## packages/forge/blocks/zendesk/src/
- auth.ts [28L]
- constants.ts [2L]
- handlers.ts [78L] — parseOpenMessenger()
- index.ts [15L]
- logo.tsx [12L] — ZendeskLogo()
- schemas.ts [11L] Do not edit this file manually

## packages/forge/blocks/zendesk/src/actions/
- openWebWidget.ts [32L]

## packages/forge/cli/
- package.json [21L]
- tsconfig.json [11L]
- tsconfig.lib.json [11L]

## packages/forge/cli/src/
- index.ts [636L] — showHelp(), main(), camelize(), capitalize(), createIndexFile(), createPackageJson(), createTsConfig(), createLogoFile(), addBlockToRepository(), createHandlersFile(), createSchemasFile(), addBlockToRepoDefinitions(), +5

## packages/forge/core/
- package.json [31L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/forge/core/src/
- index.test.ts [19L]
- index.ts [275L]
- types.ts [278L]
- zodLayout.ts [35L] Useful for string options with fetcher when we also want to allow for custom tex

## packages/forge/core/src/helpers/
- evaluateIsHidden.ts [10L] — evaluateIsHidden()

## packages/forge/repository/
- package.json [37L]
- tsconfig.json [11L]
- tsconfig.lib.json [69L]

## packages/forge/repository/src/
- constants.ts [26L] Do not edit this file manually
- credentials.ts [59L] Do not edit this file manually
- definitions.ts [49L] Do not edit this file manually
- handlers.ts [65L] Do not edit this file manually
- schemas.ts [90L] Do not edit this file manually

## packages/groups/
- package.json [20L]
- tsconfig.json [11L]
- tsconfig.lib.json [18L]

## packages/groups/src/
- schemas.ts [30L]

## packages/groups/src/helpers/
- getBlockById.ts [26L]
- parseGroups.ts [24L]

## packages/lib/
- package.json [36L]
- tsconfig.json [11L]
- tsconfig.lib.json [20L]

## packages/lib/src/
- JSONParse.ts [28L] Taken from https://github.com/Ivan-Korolenko/json-with-bigint/blob/main/json-wit — JSONParse()
- apiToken.ts [10L] — generateApiToken(), hashApiToken(), isHashedApiToken()
- convertSchemasListToCommonSchemas.test.ts [210L]
- convertSchemasListToCommonSchemas.ts [236L] — getLiteralValues()
- convertStrToList.ts [14L]
- createId.ts [4L]
- createToastORPCError.ts [15L] — createToastORPCError()
- datesAreOnSameDay.ts [5L] — datesAreOnSameDay()
- extensionFromMimeType.test.ts [33L]
- extensionFromMimeType.ts [94L] — normalizeEquivalentExtension()
- getIp.ts [8L]
- guessDeviceIsMobile.ts [28L] Copied from https://github.com/juliangruber/is-mobile/blob/main/index.js — guessDeviceIsMobile()
- hexToRgb.ts [21L] — isLight()
- isImageFileInput.test.ts [44L]
- isImageFileInput.ts [28L] — isImageFileInput()
- isPlanetScale.ts [4L] — isPlaneteScale()
- isURL.ts [11L] — customIsURL()
- ky.ts [197L] Workaround for Next.js App Router + undici bug where `fetch(Request)` adds — createPinnedDispatcher(), createSafeFetchWithoutChunkedEncoding()
- parseFailingResponse.ts [28L]
- parseUniqueKey.ts [17L]
- parseUnknownClientError.ts [53L]
- parseUnknownError.ts [108L]
- phoneCountries.ts [1497L]
- redis.ts [17L]
- safeFetch.test.ts [52L]
- safeFetch.ts [16L]
- safeKy.test.ts [167L]
- safeParseFloat.ts [7L] — safeParseFloat()
- safeStringify.ts [13L]
- signWebhookToken.ts [39L] — signWebhookToken(), encode()
- timeZones.ts [121L]
- toastErrorData.ts [5L]
- utils.ts [156L] — byId(), capitalize(), toTitleCase(), parseNumberWithCommas(), injectCustomHeadCode(), isSvgSrc()
- verifyWebhookToken.ts [52L] — decode()
- wildcardMatch.ts [232L] Copied from https://github.com/axtgr/wildcard-match because they don't expose a  — escapeRegExpChar(), escapeRegExpString(), transform(), isMatch(), wildcardMatch()
- writeBrowserCookie.ts [12L]

## packages/lib/src/api/
- utils.ts [45L] — methodNotAllowed(), notAuthenticated(), notFound(), badRequest(), forbidden(), internalServerError(), initMiddleware()

## packages/lib/src/nodemailer/
- NodemailerClient.ts [56L] — NodemailerError, NodemailerClient

## packages/lib/src/redis/
- RedisClient.ts [224L] — RedisConnectError, RedisPublishError, RedisSubscribeError, RedisGetError, RedisSetError, RedisClient, noop()

## packages/lib/src/s3/
- S3UploadClient.ts [117L] — S3ClientUploadError, S3UploadClient
- copyObjects.ts [25L] — copyObjects()
- createUploadFilePath.test.ts [90L]
- createUploadFilePath.ts [80L]
- createUploadProxyCorsHeaders.ts [10L] — createUploadProxyCorsHeaders()
- generatePresignedPostPolicy.ts [36L]
- getFileTempUrl.ts [15L]
- getFolderSize.ts [31L] — getFolderSize()
- initClient.ts [21L] — initClient()
- isS3Configured.test.ts [28L]
- isS3Configured.ts [24L] — hasS3Config(), isS3Configured()
- parseS3PublicBaseUrl.ts [9L] — parseS3PublicBaseUrl()
- removeObjectsRecursively.ts [71L] — removeObjectsRecursively(), removeObjectsFromWorkspace(), removeObjectsFromResult(), removeAllObjectsFromResult(), removeObjectsFromTypebot(), removeObjectsFromUser()
- replaceTypebotUploadUrlsWithNewIds.ts [79L]
- resolveUploadProxyBaseUrl.test.ts [37L]
- resolveUploadProxyBaseUrl.ts [27L] — resolveUploadProxyBaseUrl(), parseOrigin()
- signedUploadProxy.ts [230L] — SignedUploadProxyError, generateSignedUploadProxyUrl(), uploadFileFromSignedUploadProxyToken(), createSignedUploadProxyToken(), uploadRawRequest(), uploadObject(), createMaxFileSizeStream(), readRequestBody(), getMaxFileSizeInBytes(), parseContentLength(), signPayload()
- uploadFileToBucket.ts [29L]
- uploadFileWithPresignedPostData.test.ts [105L]
- uploadFileWithPresignedPostData.ts [36L]

## packages/lib/src/ssrf/
- README.md [74L] SSRF destination policy
- createSafeDispatcher.test.ts [42L]
- createSafeDispatcher.ts [93L] A DNS lookup function that validates resolved IPs against SSRF blocklists. — validateResolvedAddress(), callLookupCallback(), createSafeDispatcher(), getSafeDispatcher()
- createSafeProxyAgent.ts [30L] — createSafeProxyAgent()
- specialAddressRanges.test.ts [257L]
- validateHttpReqUrl.test.ts [570L] — lookupHost(), expectUrlToThrow(), expectUrlToPass()
- validateHttpReqUrl.ts [417L] Validates a URL to prevent SSRF attacks by blocking requests to: — validateHttpReqUrl(), validateHttpReqHeaders(), validateIPAddress()

## packages/lib/src/ssrf/fixtures/
- connectionProbe.ts [41L] Run in Node: Bun's built-in undici replacement is not the production Agent. — checkConnections()

## packages/logs/
- package.json [21L]
- tsconfig.json [11L]
- tsconfig.lib.json [15L]

## packages/logs/src/
- schemas.ts [22L]

## packages/partykit/
- package.json [16L]
- tsconfig.json [11L]
- tsconfig.lib.json [17L]
- wrangler.jsonc [35L] Keeps the Worker, class and binding names created by `partykit deploy`, so

## packages/partykit/src/
- webhookServer.ts [120L] Set by `partykit env`, which prefixed every variable. — PartyKitDurable, getToken(), getSecret()

## packages/playwright/
- package.json [32L]
- tsconfig.json [11L]
- tsconfig.lib.json [45L]

## packages/playwright/src/
- databaseActions.ts [193L] — injectFakeResults(), createChronologicalResultDate(), createAnswers(), importTypebotInDatabase(), deleteWorkspaces(), deleteTypebots(), deleteCredentials(), deleteWebhooks(), createTypebots(), updateTypebot(), updateWorkspace(), parseCreateTypebot(), +1
- databaseHelpers.ts [105L]
- databaseSetup.ts [231L] — setupWorkspaces(), setupUsers(), setupCredentials(), setupTypebots(), setupDatabase(), teardownDatabase()
- globalSetup.ts [7L] — globalSetup()
- resetDatabase.ts [15L] — main()
- testHelpers.ts [40L] — mockWorkspaceResponse(), typebotViewer(), waitForSuccessfulPutRequest(), waitForSuccessfulPostRequest(), waitForSuccessfulDeleteRequest()

## packages/prisma/
- package.json [46L]
- prisma.config.ts [8L]
- tsconfig.json [11L]
- tsconfig.lib.json [11L]

## packages/prisma/mysql/
- schema.prisma [514L]

## packages/prisma/postgresql/
- schema.prisma [482L]

## packages/prisma/postgresql/migrations/
- migration_lock.toml [4L] Please do not edit this file manually

## packages/prisma/postgresql/migrations/20220214162352_initial_schema/
- migration.sql [202L]

## packages/prisma/postgresql/migrations/20220217161047_add_prefilled_variables/
- migration.sql [6L]

## packages/prisma/postgresql/migrations/20220218135618_add_custom_domains/
- migration.sql [31L]

## packages/prisma/postgresql/migrations/20220218171811_add_unique_constraints/
- migration.sql [17L]

## packages/prisma/postgresql/migrations/20220221055630_add_api_token/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20220222091415_add_updated_at_fields/
- migration.sql [10L]

## packages/prisma/postgresql/migrations/20220224101209_add_collaboration/
- migration.sql [32L]

## packages/prisma/postgresql/migrations/20220224135151_add_created_at_and_updated_at_fields/
- migration.sql [14L]

## packages/prisma/postgresql/migrations/20220301060138_add_webhook_table/
- migration.sql [16L]

## packages/prisma/postgresql/migrations/20220301103112_add_logs/
- migration.sql [15L]

## packages/prisma/postgresql/migrations/20220322064218_add_custom_domain_primary_key/
- migration.sql [6L]

## packages/prisma/postgresql/migrations/20220322143206_add_company_and_categories/
- migration.sql [4L]

## packages/prisma/postgresql/migrations/20220328144519_rename_prefilled_variables/
- migration.sql [4L]

## packages/prisma/postgresql/migrations/20220401140029_add_icon_on_typebot/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20220408192635_add_editor_navigation/
- migration.sql [6L]

## packages/prisma/postgresql/migrations/20220513223344_add_workspaces/
- migration.sql [85L]

## packages/prisma/postgresql/migrations/20220514235014_remove_owner_id/
- migration.sql [51L]

## packages/prisma/postgresql/migrations/20220603074700_add_tokens/
- migration.sql [24L]

## packages/prisma/postgresql/migrations/20220604084638_remove_public_typebot_duplicates/
- migration.sql [11L]

## packages/prisma/postgresql/migrations/20220607063609_required_workspace/
- migration.sql [21L]

## packages/prisma/postgresql/migrations/20220609085335_rename_block_to_group/
- migration.sql [34L]

## packages/prisma/postgresql/migrations/20220621144946_add_usage_fields/
- migration.sql [23L]

## packages/prisma/postgresql/migrations/20220624090915_add_result_fk_indices/
- migration.sql [6L]

## packages/prisma/postgresql/migrations/20220624120243_add_is_archived_on_result/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20220701154116_add_table_preferences/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20220713061342_switch_block_group_id_on_old_answers/
- migration.sql [12L]

## packages/prisma/postgresql/migrations/20220918083055_add_usage_based_pricing/
- migration.sql [18L]

## packages/prisma/postgresql/migrations/20220925181003_remove_cascade_delete_on_result/
- migration.sql [6L]

## packages/prisma/postgresql/migrations/20221001063449_add_is_archive_to_typebot/
- migration.sql [12L]

## packages/prisma/postgresql/migrations/20221006063227_add_is_closed_to_typebot/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20221020070814_remove_duplicate_answer_index/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20221020070833_add_typebot_id_index_in_result/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20221028145148_add_claimable_custom_plan/
- migration.sql [31L]

## packages/prisma/postgresql/migrations/20221123121854_test/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20221129090341_add_chat_session/
- migration.sql [10L]

## packages/prisma/postgresql/migrations/20221206182055_add_workspace_id_index_in_typebot_table/
- migration.sql [2L]

## packages/prisma/postgresql/migrations/20221206182113_add_created_at_index_in_result/
- migration.sql [2L]

## packages/prisma/postgresql/migrations/20221206182126_add_has_started_index_in_result/
- migration.sql [2L]

## packages/prisma/postgresql/migrations/20221207070502_optimize_result_indexes/
- migration.sql [23L]

## packages/prisma/postgresql/migrations/20221208094821_add_typebot_id_index_in_result/
- migration.sql [2L]

## packages/prisma/postgresql/migrations/20221219142712_add_app_appearance_preference/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20230124131622_migrate_default_background_color/
- migration.sql [16L]

## packages/prisma/postgresql/migrations/20230127133558_add_unlimited_plan/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20230127153202_remove_useless_published_typebot_id/
- migration.sql [9L]

## packages/prisma/postgresql/migrations/20230201082042_remove_scalar_list_types/
- migration.sql [26L]

## packages/prisma/postgresql/migrations/20230201100009_set_not_null/
- migration.sql [25L]

## packages/prisma/postgresql/migrations/20230203065215_add_missing_updated_at_fields/
- migration.sql [26L]

## packages/prisma/postgresql/migrations/20230220085522_add_version_fields/
- migration.sql [11L]

## packages/prisma/postgresql/migrations/20230307144424_remove_updated_at_on_result/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20230328123237_add_theme_templates/
- migration.sql [18L]

## packages/prisma/postgresql/migrations/20230420143512_add_quarantined_field/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20230428084840_add_more_fiel_d_in_custom_claimable_plan/
- migration.sql [6L]

## packages/prisma/postgresql/migrations/20230630095152_add_item_id_in_answer/
- migration.sql [26L]

## packages/prisma/postgresql/migrations/20230704125011_add_is_suspended_prop/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20230828075658_add_whatsapp_phone_id_in_typebot/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20230922081540_add_whatsapp_credentials_id/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20230925135118_remove_whatsapp_phone_number_id_field/
- migration.sql [9L]

## packages/prisma/postgresql/migrations/20231108111118_/
- migration.sql [19L]

## packages/prisma/postgresql/migrations/20231121154057_add_is_past_due_field/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20231208172001_add_risk_level/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20231211122755_add_banned_ip_table/
- migration.sql [20L]

## packages/prisma/postgresql/migrations/20231219130423_add_is_verified_flag_on_workspace/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20240124090203_add_displayed_inapp_notifications/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20240201142317_add_referral_field_in_user/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20240418062443_add_is_replying_in_chat_session/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20240515062409_add_answerv2_table/
- migration.sql [48L]

## packages/prisma/postgresql/migrations/20240522133715_add_created_at_in_answerv2/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20240626074841_add_attachedfileurls_field_in_answerv2/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20250127173242_add_chats_hard_limit_field/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20250128154924_add_workspace_settings_field/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20250204085511_add_user_credentials/
- migration.sql [19L]

## packages/prisma/postgresql/migrations/20250214102757_add_context_field_in_logs/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20250219184711_add_active_at_date/
- migration.sql [5L]

## packages/prisma/postgresql/migrations/20250303175555_add_preferred_language/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20250416131557_add_verif_token_value/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20250425074653_add_enterprise_plan/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20250604135508_add_terms_accepted_at/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20250812142821_add_runtime_media_id_cache/
- migration.sql [21L]

## packages/prisma/postgresql/migrations/20251128132631_add_block_index/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20260105180251_add_last_activity_on_public_typebot/
- migration.sql [6L]

## packages/prisma/postgresql/migrations/20260123145813_add_suppressed_email_table/
- migration.sql [16L]

## packages/prisma/postgresql/migrations/20260325171128_add_space_table/
- migration.sql [30L]

## packages/prisma/postgresql/migrations/20260627151525_add_failed_attempts_to_verification_token/
- migration.sql [3L]

## packages/prisma/postgresql/migrations/20260821120000_remove_inactive_workspace_cleanup/
- migration.sql [4L]

## packages/prisma/scripts/
- db-exec.ts [8L]
- db-generate.ts [11L] — run()
- db-push.ts [4L]
- effectPrismaGenerator.ts [749L] usr/bin/env bun — toCamelCase(), hasTypedSqlSupport(), getModelMappings(), generateRawSqlOperations(), generateModelOperations(), generateUnifiedService(), PrismaClientService, PrismaTransactionClientService, PrismaUniqueConstraintError, PrismaForeignKeyConstraintError, PrismaRecordNotFoundError, PrismaRelationViolationError, +10
- executeCommand.ts [78L] — executePrismaCommand(), executeCommand()
- migrate-deploy.ts [5L]
- migrate-dev.ts [5L]
- studio.ts [6L]

## packages/prisma/src/
- createPrismaAdapter.ts [35L] The `?schema=` search param is applied by Prisma Migrate but the driver — createPrismaAdapter()
- enum.ts [25L]
- index.ts [13L]
- layer.ts [9L]
- types.ts [4L]
- withReadReplica.ts [28L]

## packages/radar/
- package.json [24L]
- tsconfig.json [11L]
- tsconfig.lib.json [33L]

## packages/radar/src/
- computeRiskLevel.ts [141L] — computeRiskLevel()
- detectTrademarkInfrigement.ts [23L]

## packages/results/
- package.json [36L]
- tsconfig.json [11L]
- tsconfig.lib.json [45L]

## packages/results/src/
- archiveResults.ts [124L] — archiveResults()
- convertResultsToTableData.ts [94L]
- getExportFileName.ts [15L] — getExportFileName()
- parseAnswers.ts [39L]
- parseBlockIdVariableIdMap.ts [20L]
- parseColumnsOrder.test.ts [47L]
- parseColumnsOrder.ts [20L] Old format potentially broken, reset to default — parseColumnsOrder()
- parseResultHeader.ts [246L] — parseVariablesHeaders()
- sanitizeCsvCell.ts [12L]
- streamAllResultsToCsv.ts [210L] — streamAllResultsToCsv()
- streamAllResultsToCsvV2.ts [305L] — ProgressReporterError, ProgressReporter, createCreatedAtFilter()
- timeFilter.ts [116L] — getTimeFilterFileNameSuffix()

## packages/results/src/schemas/
- answers.ts [47L]
- results.ts [69L]

## packages/results/src/services/
- ResultsService.ts [59L] — ResultsService

## packages/results/src/workflows/
- exportResultsWorkflow.ts [397L] — PrismaConnectionError, TypebotNotFoundError, TypebotVersionTooLowError, TooManyAttemptsError, S3UploadError, RedisConfigError, WorkflowId
- rpc.test.ts [117L] — createRedisLayer()
- rpc.ts [139L] — ResultsWorkflowsRpc, startExportResultsWorkflowHandler(), getExportResultsWorkflowStatusHandler(), ResultsWorkflowsRpcClient

## packages/rich-text/
- bunfig.toml [2L]
- package.json [42L]
- tsconfig.json [11L]
- tsconfig.lib.json [24L]

## packages/rich-text/src/
- convertMarkdownToRichText.test.ts [62L]
- convertMarkdownToRichText.ts [55L] — convertMarkdownToRichText()
- convertRichTextToMarkdown.test.ts [222L]
- convertRichTextToMarkdown.ts [76L] — convertRichTextToMarkdown(), textHandler()
- parseVariablesInRichText.ts [172L]
- plateCorePlugins.ts [17L] Create new paragraph block even on Shift+Enter for retro compatibility with old 
- test-preload.ts [8L]

## packages/rich-text/src/helpers/
- isElementDescendant.ts [8L]
- isTextDescendant.ts [8L]

## packages/rich-text/src/plate/
- floating.ts [2L]
- index.ts [2L]
- link.ts [2L]
- react.ts [2L]

## packages/rich-text/src/plate/link/
- react.ts [2L]

## packages/runtime-session-store/
- package.json [18L]
- tsconfig.json [11L]
- tsconfig.lib.json [11L]

## packages/runtime-session-store/src/
- index.ts [102L] — SessionStore, cleanupOldSessionStores()

## packages/schemas/
- package.json [19L]
- tsconfig.json [11L]
- tsconfig.lib.json [15L]

## packages/schemas/src/
- versions.ts [4L]

## packages/schemas/src/features/
- collaborators.ts [12L]
- customDomains.ts [48L]
- folder.ts [14L]

## packages/schemas/src/helpers/
- isTypebotVersionAtLeastV6.ts [6L]

## packages/scripts/
- .env.local.example [3L]
- README.md [76L] Operational scripts
- package.json [341L]
- tsconfig.json [11L]
- tsconfig.lib.json [84L]

## packages/scripts/src/
- addHttpProxyCredentials.ts [70L] — addHttpProxyCredentials(), validateUrl()
- applyEnterpriseChatsTier.ts [144L] — applyEnterpriseChatsTier()
- auditInactiveWorkspaces.ts [1126L] — logProgress(), keepLatestDate(), subtractUtcMonths(), subtractUtcDays(), getBoundedPositiveIntegerOption(), getOptionalBoundedPositiveIntegerOption(), parseNonNegativeNumber(), getFamilyAverageBytes(), getTableAverageBytes(), getAuditedAverageBytes(), getEstimatedReclaimBytes(), parseArchivedFlag(), +6
- backupDatabase.ts [21L] — backupDatabase()
- blockTypebot.ts [53L] — blockTypebot()
- bulkUpdate.ts [62L] — bulkUpdate()
- checkDependencies.ts [69L] Path to the root of your monorepo ../.. — main()
- checkSubscriptionsStatus.ts [46L] — checkSubscriptionsStatus()
- cleanExpiredData.ts [36L] — cleanExpiredData()
- cli.test.ts [102L]
- cli.ts [268L] — assertProductionEnvironment(), runScript(), getCliOption(), promptForEnvironment(), parseEnvironmentOption(), parseEnvironment(), parseBooleanOption(), assertInteractive(), isInteractive()
- cliContract.test.ts [117L]
- createChatsPrices.ts [63L] — createChatsPrices()
- deleteChatSession.ts [34L] — deleteChatSession()
- deleteResultsRange.ts [84L] — deleteResultsRange(), validateDate()
- deleteS3Object.ts [27L] — deleteS3Object()
- destroyUser.ts [16L] — main()
- exportResults.ts [40L] — exportResults()
- generateWorkspaceSummary.ts [926L] — createFolderIfNotExists(), saveToFile(), getEventsJournal(), getWorkspaceAISummary(), toReadableFormat(), getLastEventOccurences(), getStripeSubscriptions(), generateWorkspaceSummary()
- getCoupon.ts [31L] — getCoupon()
- getUsage.ts [46L] — getUsage(), validateDate()
- insertUsersInBrevoList.ts [73L] — insertUsersInBrevoList()
- inspectChatSession.ts [50L] — inspectChatSession()
- inspectCredentials.ts [32L] — inspectCredentials()
- inspectPublishedTypebot.ts [43L] — inspectTypebot()
- inspectResult.ts [220L] — inspectResult(), ensureDirectoryExistence(), beautifyDetails()
- inspectTypebot.ts [92L] — inspectTypebot(), parseWhere()
- inspectUser.ts [113L] — inspectUser()
- inspectWorkspace.ts [51L] — inspectWorkspace()
- main.ts [16L] — main()
- migrateSubscriptionItemPriceId.ts [108L] — migrateSubscriptionItemPriceId()
- migrateSubscriptionsToUsageBased.ts [293L] — migrateSubscriptionsToUsageBased()
- patchEmbedLibs.ts [36L]
- readCsvAndDoSomething.ts [116L] — main()
- redeemCoupon.ts [37L] — redeemCoupon()
- restoreDatabase.ts [27L] — restoreDatabase()
- searchResult.ts [55L] — searchResult()
- sendEmailCampaign.ts [300L] — sendEmailCampaign(), parseCsv(), makeEmail(), makeEnglishBody(), makeFrenchBody(), formatPreview(), formatWorkspaceLine(), formatAffectedBots(), splitList(), getFirstName(), isFrench(), formatDate(), +3
- suspendWorkspace.ts [91L] — suspendWorkspace()
- updateTypebot.ts [37L] — updateTypebot()
- updateUserEmail.ts [56L] — updateUserEmail()
- updateWhatsAppStatusForwardUrl.ts [93L] — updateWhatsAppStatusForwardUrl()
- updateWorkspace.ts [37L] — updateWorkspace()
- utils.ts [2L]

## packages/scripts/src/churnAgent/
- constants.ts [63L] What you need to know about Typebot
- formatChurnAgentDiscordMessages.ts [47L] — formatChurnAgentDiscordMessages()
- getPlanCancellationReason.ts [51L]
- getYesterdayChurnSummary.ts [530L] — getYesterdayChurnSummary(), createFolderIfNotExists()

## packages/scripts/src/cronJobs/
- daily.tsx [11L] — main()
- hourly.tsx [9L] — main()
- monthly.tsx [11L] — main()

## packages/scripts/src/helpers/
- checkAndReportLastHourResults.ts [674L] — checkAndReportLastHourResults(), getSubscription(), reportUsageToStripe(), findMeteredSubscriptionItem(), getUsage(), sendLimitWarningEmails(), getLastHourActiveTypebotIds(), isSuspiciousWorkspace(), chargeAndResetBillingCycle()
- cleanArchivedData.ts [135L] — cleanArchivedData(), deleteArchivedTypebots(), deleteDuplicatePublicTypebots(), deleteResultsFromArchivedTypebotsIfAny()
- cleanExpiredData.test.ts [67L]
- cleanExpiredData.ts [209L] — deleteOldChatSessions(), deleteExpiredAppSessions(), deleteExpiredVerificationTokens(), getExpirationCutoff(), formatElapsedTime(), logCleanupError()
- deleteRecordsInBatches.test.ts [81L]
- deleteRecordsInBatches.ts [65L] — isRetryableCleanupError()
- destroyUser.test.ts [131L] — createDependencies()
- destroyUser.ts [59L] — destroyUser()
- destroyUserWithDependencies.ts [133L] — destroyUserWithDependencies(), deleteTypebotResultsInBatches()
- executePostHogQuery.ts [43L]
- resetBillingProps.ts [25L] — resetBillingProps()
- trackAndReportYesterdaysResults.ts [94L] — trackAndReportYesterdaysResults()

## packages/scripts/src/helpers/stripe/
- countryToFlagEmoji.ts [7L] — countryToFlagEmoji()
- getCurrentBillingCountry.ts [24L] — getCurrentBillingCountry()
- getTotalPaidForSubscription.ts [38L]

## packages/services/feature-flags/
- package.json [38L]
- tsconfig.json [14L]
- tsconfig.lib.json [32L]
- tsconfig.spec.json [34L]
- vitest.config.ts [19L]

## packages/services/feature-flags/src/application/
- FeatureFlags.ts [13L] — FeatureFlags

## packages/services/feature-flags/src/drivers/orpc/
- api.test.ts [51L]
- handleIsEnabled.ts [35L]
- router.ts [16L]

## packages/services/feature-flags/src/infrastructure/
- PostHogFeatureFlags.ts [44L]

## packages/settings/
- package.json [19L]
- tsconfig.json [11L]
- tsconfig.lib.json [15L]

## packages/settings/src/
- computeTypingDuration.ts [26L] — computeTypingDuration()
- constants.ts [49L]
- schemas.ts [127L]

## packages/shared-core/
- package.json [23L]
- tsconfig.json [11L]
- tsconfig.lib.json [11L]

## packages/shared-core/src/
- domain.ts [29L]
- schemas.ts [37L]

## packages/spaces/
- package.json [42L]
- tsconfig.json [14L]
- tsconfig.lib.json [44L]
- tsconfig.spec.json [34L]
- vitest.config.ts [19L]

## packages/spaces/src/application/
- SpacesRepo.ts [51L] — SpacesRepo
- SpacesUsecases.ts [161L] — SpacesUsecases

## packages/spaces/src/domain/
- Space.ts [19L] — Space
- errors.ts [22L] — SpaceAlreadyExistsError, SpaceNotFoundError, ForbiddenSpaceAccessError, SpacesFeatureDisabledError

## packages/spaces/src/drivers/orpc/
- api.test.ts [138L]
- handleCreateSpace.ts [48L]
- handleDeleteSpace.ts [47L]
- handleListSpaces.ts [42L]
- handlePatchSpace.ts [48L]
- router.ts [60L]

## packages/spaces/src/drivers/react/
- EmptySpaceState.tsx [28L] — EmptySpaceState()
- SpacesIcon.tsx [6L] — SpacesIcon()
- SpacesTable.tsx [180L] — SpacesTable(), SpaceIconPopover()

## packages/spaces/src/infrastructure/
- PrismaSpacesRepo.ts [120L]

## packages/telemetry/
- package.json [37L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/telemetry/src/
- createGlobalTelemetryLayer.ts [36L] — createGlobalTelemetryLayer()
- createTelemetryLayer.ts [44L] — createTelemetryLayer()
- getOtlpConfig.ts [52L] — isOtlpSignalEnabled()
- getPostHogPerson.ts [28L] — getPostHogPerson()
- isBot.ts [45L]
- logServerRequest.ts [60L] — logServerRequest(), getSeverityNumber(), getSeverityText()
- mergeIds.ts [34L] Alias visitorId with userId on PostHog only if the visitorId has events. — mergeIds()
- registerNodeTelemetry.ts [104L] — registerNodeTelemetry(), getTelemetryState(), registerShutdown()
- reportWorkflowFailureToSentry.ts [68L] — WorkflowSentryConfig, toError()
- schemas.ts [279L]
- sendMessage.ts [14L] — sendMessage()
- trackEvents.ts [48L] Large thresholds since we explicitly shutdown right after. — trackEvents()

## packages/telemetry/src/cookies/
- constants.ts [6L]
- helpers.ts [90L] — getCookieDomain()
- schema.ts [18L]

## packages/templates/
- package.json [20L]
- tsconfig.json [11L]
- tsconfig.lib.json [12L]

## packages/templates/src/
- index.ts [713L] — getTemplateBySlug()
- typebots.ts [79L] — getTemplateWithTypebotBySlug(), cloneTemplateTypebot()

## packages/templates/src/typebots/
- audio-chat-gpt.json [267L]
- basic-chat-gpt.json [208L]
- chat-gpt-personas.json [718L]
- customer-support.json [354L]
- digital-product-payment.json [427L]
- dog-insurance-offer.json [630L]
- faq.json [456L]
- high-ticket-lead-follow-up.json [621L]
- lead-gen-ai.json [449L]
- lead-gen.json [277L]
- lead-magnet.json [504L]
- lead-scoring.json [647L]
- movie-recommendation.json [647L]
- nps.json [604L]
- onboarding.json [360L]
- openai-assistant-chat.json [144L]
- openai-conditions.json [278L]
- product-recommendation.json [1211L]
- quick-carb-calculator.json [441L]
- quiz.json [763L]
- savings-estimator.json [588L]
- skin-typology.json [1487L]

## packages/theme/
- package.json [26L]
- tsconfig.json [11L]
- tsconfig.lib.json [21L]

## packages/theme/src/
- constants.ts [204L] Background
- schemas.ts [135L]

## packages/theme/src/helpers/
- isChatContainerLight.ts [41L]

## packages/typebot/
- package.json [35L]
- tsconfig.json [11L]
- tsconfig.lib.json [51L]

## packages/typebot/src/
- preprocessTypebot.ts [26L] — preprocessTypebot(), preprocessGroup(), preprocessColumnsWidthResults()

## packages/typebot/src/application/
- TypebotRepo.ts [17L] — TypebotRepo

## packages/typebot/src/helpers/
- getPublicId.ts [26L] — getPublicId(), parseDefaultPublicId(), toKebabCase()
- getTypebotAccessRight.ts [26L]
- isPublicTypebotAtLeastV6.ts [6L]
- isReadTypebotForbidden.ts [37L] — isReadTypebotForbidden()
- isTypebotAtLeastV6.ts [5L]

## packages/typebot/src/infrastructure/
- PrismaTypebotRepository.ts [75L]

## packages/typebot/src/migrations/
- migrateTypebot.ts [31L]
- migrateTypebotFromV3ToV4.ts [35L]
- migrateTypebotFromV5ToV6.ts [59L]

## packages/typebot/src/schemas/
- edge.ts [30L]
- publicTypebot.ts [47L]
- typebot.test.ts [90L]
- typebot.ts [82L] — isDomainNameWithPathNameCompatible()
- types.ts [2L]

## packages/typebot/src/services/
- TypebotService.ts [23L] — TypebotService

## packages/ui/
- package.json [40L]
- tsconfig.json [11L]
- tsconfig.lib.json [17L]

## packages/ui/src/
- colors.css [241L]
- colors.ts [183L]
- fonts.css [98L] Uxum Grotesque */
- theme.css [150L] TODO: Remove this once migrated to explicit border color */

## packages/ui/src/components/
- Accordion.tsx [78L] — Root(), Item(), Trigger(), Panel()
- Alert.tsx [74L] — Root(), Title(), Description(), Action()
- AlertDialog.tsx [189L] — Root(), Trigger(), Portal(), Overlay(), Content(), Header(), Footer(), Media(), Title(), Description(), Action(), Cancel()
- Autocomplete.tsx [87L] — List(), Popup(), Item()
- Avatar.tsx [45L] — Root(), Image(), Fallback()
- Badge.tsx [118L] — Badge()
- Button.tsx [82L] We don't use `disabled:` so that the styling works with custom asChild elements
- Checkbox.tsx [60L] — Checkbox()
- ColorPicker.tsx [157L] — isLightColor(), ColorPicker(), NativeColorPicker()
- Combobox.tsx [80L] — List(), Popup(), Item()
- ContextMenu.tsx [121L] — Popup(), Item()
- DebouncedTextInput.tsx [37L] — DebouncedTextInput()
- Dialog.tsx [115L] — Root(), TriggerButton(), Title(), Popup(), CloseButton()
- Editable.tsx [245L] — useEditable(), Root(), EditableInput(), EditableTextarea(), EditablePreview()
- EmojiOrImageIcon.tsx [46L] — EmojiOrImageIcon(), isImageSource(), isSvgSource()
- EmojiPicker.tsx [161L] — useEmojiPickerContext(), Root(), SearchInput(), List(), EmojiGrid()
- Empty.tsx [95L] — Root(), Header(), Media(), Title(), Description(), Content()
- Field.tsx [104L] — Root(), Label(), Description(), Container(), Error()
- Icon.tsx [28L]
- IconPicker.tsx [321L] — useIconPickerContext(), Root(), SearchInput(), IconColorPicker(), List(), getIconsBundle(), IconPreview()
- Input.tsx [47L]
- InputGroup.tsx [153L] — Root(), Addon(), Button(), Text(), Input(), Textarea()
- Kbd.tsx [30L] — Key(), Group()
- Label.tsx [20L] biome-ignore-all lint/a11y/noLabelWithoutControl: false positive */ — Label()
- Menu.tsx [110L] — Trigger(), TriggerButton(), Popup(), Item(), SubmenuTrigger()
- MoreInfoTooltip.tsx [32L] — MoreInfoTooltip()
- NumberField.tsx [83L] — Root(), Group(), Decrement(), Increment()
- Otp.tsx [81L] — Root(), Group(), Slot(), Separator()
- Popover.tsx [128L] — Root(), Trigger(), TriggerButton(), Popup()
- Progress.tsx [72L] — Root(), Label(), Track(), Indicator(), Value()
- RadioGroup.tsx [35L] — RadioGroup(), Radio()
- Select.tsx [192L] — Group(), Value(), Trigger(), Content(), Label(), Item(), Separator(), ScrollUpButton(), ScrollDownButton()
- Separator.tsx [33L] — Separator()
- Skeleton.tsx [14L] — Skeleton()
- Switch.tsx [40L] — Switch()
- Table.tsx [123L]
- Tabs.tsx [81L] — Root(), List(), Tab(), Panel()
- Textarea.tsx [31L]
- Toast.tsx [180L] — List(), ToastIcon()
- Toolbar.tsx [71L] — Group(), Separator()
- Tooltip.tsx [101L] — Root(), Trigger(), TriggerButton(), Popup()
- TypebotLoader.tsx [53L] — TypebotLoader()
- UploadButton.tsx [61L] — UploadButton()
- iconNames.ts [1L]

## packages/ui/src/components/emoji/
- emojiList.json [1L]

## packages/ui/src/hooks/
- useCopyToClipboard.ts [34L] — useCopyToClipboard()
- useDebounce.ts [19L]
- useOpenControls.ts [32L] — useOpenControls()
- useOutsideClick.ts [50L]

## packages/ui/src/icons/
- AlarmClockIcon.tsx [13L] — AlarmClockIcon()
- AlignBoxTopLeftIcon.tsx [9L] — AlignBoxTopLeftIcon()
- ArrowDown01Icon.tsx [8L] — ArrowDown01Icon()
- ArrowExpand01Icon.tsx [9L] — ArrowExpand01Icon()
- ArrowLeft01Icon.tsx [8L] — ArrowLeft01Icon()
- ArrowRight01Icon.tsx [8L] — ArrowRight01Icon()
- ArrowShrink02Icon.tsx [8L] — ArrowShrink02Icon()
- ArrowUp01Icon.tsx [8L] — ArrowUp01Icon()
- ArrowUpRight01Icon.tsx [9L] — ArrowUpRight01Icon()
- AtIcon.tsx [8L] — AtIcon()
- Book02Icon.tsx [10L] — Book02Icon()
- Bookmark02Icon.tsx [11L] — Bookmark02Icon()
- Calendar01Icon.tsx [11L] — Calendar01Icon()
- Cancel01Icon.tsx [8L] — Cancel01Icon()
- CancelCircleIcon.tsx [9L] — CancelCircleIcon()
- CarouselHorizontal02Icon.tsx [14L] — CarouselHorizontal02Icon()
- CellsIcon.tsx [10L] — CellsIcon()
- ChatIcon.tsx [9L] — ChatIcon()
- CheckmarkSquare02Icon.tsx [13L] — CheckmarkSquare02Icon()
- CircleArrowMoveUpLeftIcon.tsx [13L] — CircleArrowMoveUpLeftIcon()
- Clock01Icon.tsx [9L] — Clock01Icon()
- CodeIcon.tsx [10L] — CodeIcon()
- CommandIcon.tsx [12L] — CommandIcon()
- ComputerVideoIcon.tsx [10L] — ComputerVideoIcon()
- Copy01Icon.tsx [9L] — Copy01Icon()
- CreditCardIcon.tsx [11L] — CreditCardIcon()
- CustomerSupportIcon.tsx [11L] — CustomerSupportIcon()
- DatabaseIcon.tsx [12L] — DatabaseIcon()
- DocumentCodeIcon.tsx [11L] — DocumentCodeIcon()
- Download01Icon.tsx [9L] — Download01Icon()
- DragDropHorizontalIcon.tsx [17L] — DragDropHorizontalIcon()
- DragDropVerticalIcon.tsx [8L] — DragDropVerticalIcon()
- Edit03Icon.tsx [9L] — Edit03Icon()
- FileEmpty02Icon.tsx [8L] — FileEmpty02Icon()
- FilterIcon.tsx [8L] — FilterIcon()
- Flag02Icon.tsx [9L] — Flag02Icon()
- Folder01SolidIcon.tsx [11L] — Folder01SolidIcon()
- FolderAddIcon.tsx [9L] — FolderAddIcon()
- Forward02Icon.tsx [9L] — Forward02Icon()
- GitForkIcon.tsx [11L] — GitForkIcon()
- GithubIcon.tsx [9L] — GithubIcon()
- Globe02Icon.tsx [11L] — Globe02Icon()
- GridViewIcon.tsx [11L] — GridViewIcon()
- HardDriveIcon.tsx [10L] — HardDriveIcon()
- HeadphonesIcon.tsx [10L] — HeadphonesIcon()
- HelpCircleIcon.tsx [10L] — HelpCircleIcon()
- HotspotOfflineIcon.tsx [13L] — HotspotOfflineIcon()
- Image02Icon.tsx [10L] — Image02Icon()
- Infinity01Icon.tsx [8L] — Infinity01Icon()
- InformationSquareIcon.tsx [14L] — InformationSquareIcon()
- LaptopIcon.tsx [9L] — LaptopIcon()
- LayoutBottomIcon.tsx [9L] — LayoutBottomIcon()
- Leaf01Icon.tsx [9L] — Leaf01Icon()
- LeftToRightListBulletIcon.tsx [17L] — LeftToRightListBulletIcon()
- Link02Icon.tsx [9L] — Link02Icon()
- LinkSquare02Icon.tsx [9L] — LinkSquare02Icon()
- LoaderCircleIcon.tsx [9L] — LoaderCircleIcon()
- LogoutSquare02Icon.tsx [9L] — LogoutSquare02Icon()
- Mail01Icon.tsx [9L] — Mail01Icon()
- Megaphone03Icon.tsx [10L] — Megaphone03Icon()
- Menu01Icon.tsx [10L] — Menu01Icon()
- MinusSignIcon.tsx [8L] — MinusSignIcon()
- MoreHorizontalIcon.tsx [10L] — MoreHorizontalIcon()
- MoreVerticalIcon.tsx [10L] — MoreVerticalIcon()
- Mouse01Icon.tsx [9L] — Mouse01Icon()
- PlayIcon.tsx [8L] — PlayIcon()
- PlusSignIcon.tsx [8L] — PlusSignIcon()
- RainDropIcon.tsx [8L] — RainDropIcon()
- Redo03Icon.tsx [9L] — Redo03Icon()
- RepeatIcon.tsx [9L] — RepeatIcon()
- RulerIcon.tsx [9L] — RulerIcon()
- Search01Icon.tsx [9L] — Search01Icon()
- SentIcon.tsx [9L] — SentIcon()
- Settings01Icon.tsx [9L] — Settings01Icon()
- SevenSquareIcon.tsx [9L] — SevenSquareIcon()
- SourceCodeIcon.tsx [10L] — SourceCodeIcon()
- SparklesIcon.tsx [9L] — SparklesIcon()
- SquareLock01Icon.tsx [10L] — SquareLock01Icon()
- SquareUnlock01Icon.tsx [10L] — SquareUnlock01Icon()
- StarIcon.tsx [8L] — StarIcon()
- TelephoneIcon.tsx [10L] — TelephoneIcon()
- TextAlignLeftIcon.tsx [11L] — TextAlignLeftIcon()
- TextBoldIcon.tsx [9L] — TextBoldIcon()
- TextIcon.tsx [9L] — TextIcon()
- TextItalicIcon.tsx [10L] — TextItalicIcon()
- TextUnderlineIcon.tsx [9L] — TextUnderlineIcon()
- ThirdBracketIcon.tsx [9L] — ThirdBracketIcon()
- TickIcon.tsx [8L] — TickIcon()
- TrashIcon.tsx [11L] — TrashIcon()
- TriangleAlertIcon.tsx [10L] — TriangleAlertIcon()
- Undo03Icon.tsx [9L] — Undo03Icon()
- UnlinkIcon.tsx [10L] — UnlinkIcon()
- Upload01Icon.tsx [9L] — Upload01Icon()
- UserAccountIcon.tsx [11L] — UserAccountIcon()
- UsersIcon.tsx [13L] — UsersIcon()
- VideoAiIcon.tsx [10L] — VideoAiIcon()
- ViewIcon.tsx [9L] — ViewIcon()
- ViewOffSlashIcon.tsx [10L] — ViewOffSlashIcon()
- Wallet01Icon.tsx [10L] — Wallet01Icon()
- WebhookIcon.tsx [13L] — WebhookIcon()
- ZapIcon.tsx [8L] — ZapIcon()

## packages/ui/src/lib/
- cn.ts [23L] — cn()
- cva.ts [8L]

## packages/user/
- package.json [25L]
- tsconfig.json [11L]
- tsconfig.lib.json [30L]

## packages/user/src/
- constants.ts [5L]
- createUnsubscribeToken.ts [13L] — createUnsubscribeToken()
- mockedUser.ts [24L]
- normalizeEmail.ts [6L] — normalizeEmail()
- schemas.ts [69L]
- verifyUnsubscribeToken.ts [10L] — verifyUnsubscribeToken()

## packages/user/src/workflows/
- rpc.ts [41L] — UsersWorkflowsRpc, UsersWorkflowsRpcClient
- startUserOnboardingWorkflow.ts [148L] — buildUnsubscribeUrls()

## packages/variables/
- bunfig.toml [3L]
- package.json [26L]
- tsconfig.json [11L]
- tsconfig.lib.json [24L]

## packages/variables/src/
- codeRunners.ts [97L] — createInlineSyncCodeRunner(), createHttpReqResponseMappingRunner(), parseTransferrableValue()
- deepParseVariables.test.ts [240L]
- deepParseVariables.ts [78L]
- evaluateSetVariableExpression.ts [56L] — injectReturnKeywordIfNeeded()
- executeFunction.ts [156L] — executeFunction()
- extractVariablesFromObject.ts [28L]
- extractVariablesFromText.ts [21L] — extractVariablesFromText()
- filterVariablesWithValues.ts [10L]
- findUniqueVariable.ts [13L] — findUniqueVariable()
- hasVariable.ts [2L]
- injectVariableValues.ts [25L]
- isSingleVariable.ts [10L]
- parseGuessedTypeFromString.ts [22L] Integers outside the safe range (e.g. WhatsApp Business Account IDs)
- parseGuessedValueType.test.ts [48L] Number("12345678901234567") === 12345678901234568
- parseGuessedValueType.ts [26L] Integers outside the safe range (e.g. WhatsApp Business Account IDs)
- parseVariableNumber.ts [20L]
- parseVariables.ts [187L] {{= inline code =}} — evaluateInlineCode(), parseVariableValueInJson()
- schemas.ts [65L] Variable when retrieved from the database
- test-preload.ts [8L]
- transformPrefilledVariablesToVariables.ts [17L]
- transformVariablesToList.ts [41L] — transformVariablesToList()
- types.ts [8L]

## packages/whatsapp/
- package.json [58L]
- tsconfig.json [11L]
- tsconfig.lib.json [72L]
- vitest.config.mts [20L]
- vitest.setup.ts [7L]

## packages/whatsapp/src/
- WhatsAppError.ts [15L] — WhatsAppError
- constants.ts [14L]
- convertInputToWhatsAppMessage.test.ts [615L]
- convertInputToWhatsAppMessage.ts [308L] — truncateWhatsAppInteractiveBody(), groupArrayByArraySize()
- convertMessageToWhatsAppMessage.ts [202L] — isImageUrlNotCompatible(), isHttpUrl(), isGifFileUrl()
- convertWhatsAppMessageToTypebotMessage.test.ts [204L] — createAudioMessage()
- convertWhatsAppMessageToTypebotMessage.ts [167L] — getExtensionFromMimeType()
- downloadMedia.ts [62L]
- extractErrorsFromEntry.ts [23L]
- formatPhoneNumberDisplayName.ts [5L] — formatPhoneNumberDisplayName()
- forwardWhatsAppWebhooks.test.ts [391L] — getForwardedStatusIds()
- forwardWhatsAppWebhooks.ts [263L] — forwardWhatsAppWebhooks(), getForwardingConfigs(), getMatchedStatuses(), shouldForwardStatus(), isFailedStatus(), isMarketingStatus()
- getOrUploadMedia.ts [113L] Uploads media to WhatsApp and returns the media ID for immediate use in messages
- groupIncomingWebhookEntriesPerUser.ts [61L] Only interested in incoming messages
- normalizeWhatsAppPreviewPhoneNumber.ts [3L] — normalizeWhatsAppPreviewPhoneNumber()
- resumeWhatsAppFlow.ts [428L] — areMessagesTooOld(), resumeWhatsAppFlow(), resumeFlowAndSendWhatsAppMessages(), resumeFlow()
- schemas.ts [327L]
- sendChatReplyToWhatsApp.ts [245L] If not using mediaId, it can take some time to be delivered. This make sure we d — executeClientSideActions(), executeClientSideAction()
- sendWhatsAppMessage.ts [53L] — sendWhatsAppMessage()
- sendWhatsAppTypingIndicator.ts [55L] — sendWhatsAppTypingIndicator()
- startWhatsAppSession.test.ts [72L]
- startWhatsAppSession.ts [204L] — messageMatchStartCondition()
- verifyWhatsAppWebhookSecret.test.ts [39L]
- verifyWhatsAppWebhookSecret.ts [19L] — verifyWhatsAppWebhookSecret()
- verifyWhatsAppWebhookSignature.test.ts [61L]
- verifyWhatsAppWebhookSignature.ts [32L] — verifyWhatsAppWebhookSignature(), isSha256HexDigest()

## packages/whatsapp/src/api/
- getMetaSystemTokenInfo.ts [46L] — createMetaAppSecretProof(), getMetaSystemTokenInfo()
- handleGenerateVerificationToken.ts [16L] — handleGenerateVerificationToken()
- handleGetPhoneNumber.ts [116L] — handleGetPhoneNumber()
- handleGetSystemTokenInfo.ts [98L] — handleGetSystemTokenInfo()
- handleGetWhatsAppMedia.ts [80L] — handleGetWhatsAppMedia()
- handleGetWhatsAppMediaPreview.ts [70L] — handleGetWhatsAppMediaPreview()
- handlePreviewWebhookRequest.ts [138L] — handlePreviewWebhookRequest(), parseWebhookBody(), handleUnknownError()
- handleProductionWebhookRequest.ts [191L] — handleProductionWebhookRequest(), getWhatsAppCredentialsData(), parseWebhookBody()
- handleSetupMetaWebhook.ts [253L] — handleSetupMetaWebhook(), getWabaPhoneNumber(), getAllWabaPhoneNumbers(), isAppSubscribedToWaba(), subscribeAppToWaba(), setSearchParams()
- handleStartWhatsAppPreview.ts [182L] — handleStartWhatsAppPreview()
- handleSubscribePreviewWebhook.ts [19L] — handleSubscribePreviewWebhook()
- handleVerifyIfPhoneNumberAvailable.ts [23L] — handleVerifyIfPhoneNumberAvailable()
- handleWebhookSubscriptionRequest.ts [33L] — handleWebhookSubscriptionRequest()
- router.ts [173L]

## packages/workspaces/
- package.json [27L]
- tsconfig.json [11L]
- tsconfig.lib.json [24L]

## packages/workspaces/src/
- isAdminWriteWorkspaceForbidden.ts [14L] — isAdminWriteWorkspaceForbidden()
- isReadWorkspaceFobidden.ts [21L] — isReadWorkspaceFobidden()
- parseWorkspaceDefaultPlan.ts [12L] — parseWorkspaceDefaultPlan()
- schemas.ts [61L]

## packages/workspaces/src/application/
- WorkspaceAccessPolicies.ts [46L] — WorkspaceAccessPolicies
- WorkspaceRepo.ts [17L] — WorkspaceRepo

## packages/workspaces/src/infrastructure/
- PrismaWorkspaceRepo.ts [49L]
