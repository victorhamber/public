# MAP/apps

## apps/builder/
- next.config.mjs [154L] — injectViewerUrlIfVercelPreview(), config()
- package.json [202L]
- postcss.config.mjs [7L]
- tolgee.d.ts [27L] ensures that nested keys are accessible with "."
- tsconfig.json [184L]

## apps/builder/public/
- robots.txt [4L]

## apps/builder/src/
- instrumentation.node.ts [64L] — isExpectedORPCExceptionEvent(), shouldIgnoreSpanError()
- instrumentation.ts [13L] — register()
- proxy.ts [93L] Auth.js validates CSRF tokens and OAuth state itself and needs cookies on — proxy(), getCallbackRedirectPath()
- sentry.server.config.ts [6L]

## apps/builder/src/app/
- layout.tsx [20L] — renderRootLayout()

## apps/builder/src/app/api/
- openApiSpecGenerateOptions.ts [43L]
- router.ts [124L]

## apps/builder/src/app/api/[[...rest]]/
- route.ts [138L] — handleRequest()

## apps/builder/src/app/api/auth/[...nextauth]/
- route.ts [32L] Accept company firewall requests? Not sure if it is still necessary — GET(), POST(), HEAD(), setTypebotCookie()

## apps/builder/src/app/api/orpc/[[...rest]]/
- route.ts [61L] — handleRequest()

## apps/builder/src/app/api/uploads/[token]/
- route.ts [45L] — OPTIONS(), PUT(), handleUploadRequest()

## apps/builder/src/app/api/v2/sessions/[sessionId]/streamMessage/
- route.ts [45L] — POST()

## apps/builder/src/app/emails/unsubscribe/
- UnsubscribePageClient.tsx [146L] — UnsubscribePageClient(), triggerUnsubscribe(), triggerResubscribe(), getCopy()
- page.tsx [42L] — showUnsubscribePage(), getSearchParam()

## apps/builder/src/assets/styles/
- custom.css [26L] Hide track timeline in audio tag in Windows*/
- globals.css [50L]
- md.css [4L]
- plate.css [36L]
- resultsTable.css [21L]
- routerProgressBar.css [34L] nprogress {

## apps/builder/src/components/
- ButtonLink.tsx [47L] — ButtonLink()
- ColorPicker.tsx [152L] — ColorPicker(), NativeColorPicker()
- CopyButton.tsx [38L] — CopyButton()
- EditableEmojiOrImageIcon.tsx [75L] — EditableEmojiOrImageIcon()
- GoogleLogo.tsx [24L] — GoogleLogo()
- ImageOrPlaceholder.tsx [56L]
- NotFoundPage.tsx [23L] — NotFoundPage()
- Portal.tsx [41L] Pasted from https://github.com/radix-ui/primitives/blob/main/packages/react/port
- PrimitiveList.tsx [120L]
- Seo.tsx [43L] — getOrigin()
- SetVariableLabel.tsx [27L] — SetVariableLabel()
- StackWithGhostableItems.tsx [210L] — useStackWithGhostableItems(), StackProvider(), StackWithGhostableItems(), GhostableItem()
- SupportBubble.tsx [7L] Produto Trajettu: sem o bot de suporte da marca Typebot. */ — SupportBubble()
- TableList.tsx [146L]
- TagsInput.tsx [142L] — TagsInput(), Tag()
- TextLink.tsx [46L] — TextLink()
- TimeSince.tsx [48L] — TimeSince()
- TypebotLogo.tsx [11L] — TypebotLogo()

## apps/builder/src/components/ImageUploadContent/
- GiphyPicker.tsx [50L] — GiphyPicker()
- IconPicker.tsx [28L] — IconPicker()
- ImageUploadContent.tsx [234L] — ImageUploadContent(), BodyContent(), UploadFileContent(), EmbedLinkContent(), GiphyContent()
- UnsplashPicker.tsx [213L] — UnsplashPicker(), UnsplashImage()
- UploadButton.tsx [61L] — UploadButton()
- index.tsx [2L]

## apps/builder/src/components/ImageUploadContent/emoji/
- EmojiSearchableList.tsx [13L] — EmojiSearchableList()

## apps/builder/src/components/VideoUploadContent/
- PexelsPicker.tsx [332L] — PexelsPicker(), deduplicateVideosById(), PexelsVideo()
- VideoLinkEmbedContent.tsx [122L] — VideoLinkEmbedContent()

## apps/builder/src/components/inputs/
- BasicAutocompleteInput.tsx [112L] — BasicAutocompleteInputWithVariableButton()
- BasicNumberInput.tsx [128L]
- BasicSelect.tsx [129L] NoInfer prevents defaultValue being the source of a too-narrow ItemValue.
- CodeEditor.tsx [195L] — CodeEditor()
- CopyInput.tsx [14L] — CopyInput()
- DebouncedTextInput.tsx [61L] — DebouncedTextInputWithVariablesButton()
- DebouncedTextarea.tsx [71L] — DebouncedTextarea(), DebouncedTextareaWithVariablesButton()
- VariablesCombobox.tsx [125L] — VariablesCombobox()

## apps/builder/src/components/logos/
- AzureAdLogo.tsx [28L] — AzureAdLogo()
- Dialog360Logo.tsx [25L] — Dialog360Logo()
- FacebookLogo.tsx [11L] — FacebookLogo()
- GiphyLogo.tsx [25L] — GiphyLogo()
- GitlabLogo.tsx [34L] — GitlabLogo()
- KeycloakLogo.tsx [11L] — KeycloackLogo()
- MetaLogo.tsx [20L] — MetaLogo()
- PexelsLogo.tsx [27L] — PexelsLogo()
- StripeLogo.tsx [16L] — StripeLogo()
- UnsplashLogo.tsx [7L] — UnsplashLogo()
- WhatsAppLogo.tsx [14L] — WhatsAppLogo()

## apps/builder/src/features/analytics/
- schemas.ts [17L]
- types.ts [11L]

## apps/builder/src/features/analytics/api/
- handleGetInDepthAnalyticsData.ts [118L] — handleGetInDepthAnalyticsData()
- handleGetStats.test.ts [59L]
- handleGetStats.ts [90L] — handleGetStats()
- router.ts [42L]

## apps/builder/src/features/analytics/components/
- AnalyticsGraphContainer.tsx [122L] — AnalyticsGraphContainer()
- StatsCards.tsx [59L] — computeCompletionRate(), StatsCards()
- TimeFilterSelect.tsx [29L] — TimeFilterSelect()

## apps/builder/src/features/analytics/helpers/
- computeTotalUsersAtBlock.ts [68L] — buildEdgeTotalsByTarget()
- getTotalAnswersAtBlock.ts [21L]
- getVisitedEdgeToPropFromId.ts [15L] — getVisitedEdgeToPropFromId(), parseToPropFromVirtualEdgeId()
- populateEdgesWithTotalVisits.ts [240L] — populateEdgesWithTotalVisits(), sliceFrom(), outgoingItemEdges()

## apps/builder/src/features/auth/components/
- DividerWithText.tsx [22L] — DividerWithText()
- EmailRedirectPage.tsx [40L] — EmailRedirectPage()
- SignInError.tsx [32L] — SignInError()
- SignInForm.tsx [197L] — SignInForm()
- SignInPage.tsx [54L] — SignInPage()
- SocialLoginButtons.tsx [150L] — SocialLoginButtons()

## apps/builder/src/features/auth/helpers/
- isSameOriginRequest.test.ts [33L]
- isSameOriginRequest.ts [19L] SameSite cookies also accompany requests from untrusted sibling subdomains. — isSameOriginRequest()
- sanitizeRedirectPath.test.ts [115L]

## apps/builder/src/features/billing/components/
- BillingPortalButton.tsx [33L] — BillingPortalButton()
- BillingSettingsLayout.tsx [32L] — BillingSettingsLayout()
- ChangePlanDialog.tsx [61L] — ChangePlanDialog()
- ChangePlanForm.tsx [215L] — ChangePlanForm()
- ChatsProTiersDialog.tsx [66L] — ChatsProTiersDialog()
- CurrentSubscriptionSummary.tsx [62L] — CurrentSubscriptionSummary()
- InvoicesList.tsx [104L] — InvoicesList(), getFormattedPrice()
- PlanTag.tsx [61L]
- ProPlanPricingCard.tsx [137L] — ProPlanPricingCard()
- StarterPlanPricingCard.tsx [99L] — StarterPlanPricingCard()
- UpgradeButton.tsx [40L] — UpgradeButton()
- UpgradeConfirmationDialog.tsx [83L] — UpgradeConfirmationDialog()
- UsageProgressBars.tsx [68L] — UsageProgressBars()

## apps/builder/src/features/billing/helpers/
- hasProPerks.ts [12L] — hasProPerks()
- isFreePlan.ts [7L] — isFreePlan()
- planToReadable.ts [18L] — planToReadable()
- storageToReadable.ts [8L] — storageToReadable()

## apps/builder/src/features/blocks/bubbles/audio/components/
- AudioBubbleForm.tsx [93L] — AudioBubbleForm()
- AudioBubbleIcon.tsx [6L] — AudioBubbleIcon()
- AudioBubbleNode.tsx [33L] biome-ignore lint/a11y/useMediaCaption: Captions are not available for configura — AudioBubbleNode()

## apps/builder/src/features/blocks/bubbles/embed/components/
- EmbedBubbleContent.tsx [28L] — EmbedBubbleContent()
- EmbedBubbleIcon.tsx [6L] — EmbedBubbleIcon()
- EmbedBubbleSettings.tsx [106L] — EmbedBubbleSettings(), extractUrlFromIframe()

## apps/builder/src/features/blocks/bubbles/image/components/
- ImageBubbleContent.tsx [39L] — ImageBubbleContent()
- ImageBubbleIcon.tsx [6L] — ImageBubbleIcon()
- ImageBubbleSettings.tsx [99L] — ImageBubbleSettings()

## apps/builder/src/features/blocks/bubbles/textBubble/
- plateUIPlugins.tsx [16L]

## apps/builder/src/features/blocks/bubbles/textBubble/components/
- TextBubbleContent.tsx [28L] biome-ignore lint/suspicious/noArrayIndexKey: order is stable for rich text — TextBubbleContent()
- TextBubbleEditor.tsx [184L] — TextBubbleEditor()
- TextBubbleIcon.tsx [6L] — TextBubbleIcon()

## apps/builder/src/features/blocks/bubbles/textBubble/components/plate/
- PlateBlock.tsx [40L] biome-ignore lint/suspicious/noArrayIndexKey: slate children order is stable — PlateBlock()
- PlateText.tsx [67L] — PlateText(), PlateTextContent()

## apps/builder/src/features/blocks/bubbles/textBubble/link/
- plugin.tsx [14L]

## apps/builder/src/features/blocks/bubbles/textBubble/link/components/
- LinkFloatingToolbar.tsx [235L] — LinkFloatingToolbar(), LinkMenu(), LinkForm(), FloatingLinkUrlInput(), OpenLinkButton()
- LinkNode.tsx [24L] — LinkNode()
- LinkToolbarButton.tsx [26L] — LinkToolbarButton()

## apps/builder/src/features/blocks/bubbles/textBubble/toolbar/
- plugins.tsx [10L]

## apps/builder/src/features/blocks/bubbles/textBubble/toolbar/components/
- FloatingToolbar.tsx [142L] — FloatingToolbar()

## apps/builder/src/features/blocks/bubbles/video/components/
- VideoBubbleContent.tsx [96L] — VideoBubbleContent()
- VideoBubbleIcon.tsx [6L] — VideoBubbleIcon()
- VideoUploadContent.tsx [101L] — VideoUploadContent()

## apps/builder/src/features/blocks/inputs/buttons/components/
- ButtonsBlockNode.tsx [41L] — ButtonsBlockNode()
- ButtonsBlockSettings.tsx [128L] — ButtonsBlockSettings()
- ButtonsIcon.tsx [6L] — ButtonsInputIcon()
- ButtonsItemNode.tsx [149L] — ButtonsItemNode()
- ButtonsItemSettings.tsx [87L] — ButtonsItemSettings()

## apps/builder/src/features/blocks/inputs/cards/components/
- CardsBlockNode.tsx [32L] — CardsBlockNode()
- CardsBlockSettings.tsx [75L] — CardsBlockSettings()
- CardsItemNode.tsx [334L] — CardsItemNode(), SingleLineDeletableEditable(), MultiLineDeletableEditable()
- CardsItemSettings.tsx [82L] — CardsItemSettings()

## apps/builder/src/features/blocks/inputs/date/components/
- DateInputIcon.tsx [6L] — DateInputIcon()
- DateInputSettings.tsx [165L] — DateInputSettings()
- DateNodeContent.tsx [13L] — DateNodeContent()

## apps/builder/src/features/blocks/inputs/emailInput/components/
- EmailInputIcon.tsx [6L] — EmailInputIcon()
- EmailInputNodeContent.tsx [29L] — EmailInputNodeContent()
- EmailInputSettings.tsx [75L] — EmailInputSettings()

## apps/builder/src/features/blocks/inputs/fileUpload/components/
- FileInputContent.tsx [22L] — FileInputContent()
- FileInputIcon.tsx [6L] — FileInputIcon()
- FileInputSettings.tsx [286L] — FileInputSettings()

## apps/builder/src/features/blocks/inputs/number/components/
- NumberInputIcon.tsx [6L] — NumberInputIcon()
- NumberInputSettings.tsx [208L] — NumberInputSettings()
- NumberNodeContent.tsx [19L] — NumberNodeContent()

## apps/builder/src/features/blocks/inputs/payment/
- currencies.tsx [551L] The STRIPE-supported currencies, sorted by code

## apps/builder/src/features/blocks/inputs/payment/components/
- CreateStripeCredentialsDialog.tsx [198L] — CreateStripeCredentialsDialog(), CreateStripeCredentialsDialogBody()
- PaymentAddressSettings.tsx [121L] — PaymentAddressSettings()
- PaymentInputContent.tsx [21L] — PaymentInputContent()
- PaymentInputIcon.tsx [6L] — PaymentInputIcon()
- PaymentSettings.tsx [251L] — PaymentSettings()
- UpdateStripeCredentialsDialogBody.tsx [204L] — UpdateStripeCredentialsDialogBody()

## apps/builder/src/features/blocks/inputs/phone/components/
- CountryCodeSelect.tsx [244L] — CountryCodeSelect()
- PhoneInputIcon.tsx [6L] — PhoneInputIcon()
- PhoneInputSettings.tsx [87L] — PhoneInputSettings()
- PhoneNodeContent.tsx [19L] — PhoneNodeContent()

## apps/builder/src/features/blocks/inputs/pictureChoice/components/
- PictureChoiceIcon.tsx [6L] — PictureChoiceIcon()
- PictureChoiceItemNode.tsx [84L] — PictureChoiceItemNode()
- PictureChoiceItemSettings.tsx [156L] — PictureChoiceItemSettings()
- PictureChoiceNode.tsx [48L] — PictureChoiceNode()
- PictureChoiceSettings.tsx [185L] — PictureChoiceSettings()

## apps/builder/src/features/blocks/inputs/rating/components/
- RatingInputContent.tsx [27L] — RatingInputContent()
- RatingInputIcon.tsx [6L] — RatingInputIcon()
- RatingInputSettings.tsx [190L] — RatingInputSettings()

## apps/builder/src/features/blocks/inputs/textInput/components/
- TextInputIcon.tsx [6L] — TextInputIcon()
- TextInputNodeContent.tsx [53L] — TextInputNodeContent()
- TextInputSettings.tsx [241L] — TextInputSettings()

## apps/builder/src/features/blocks/inputs/time/components/
- TimeInputIcon.tsx [6L] — TimeInputIcon()
- TimeInputSettings.tsx [66L] — TimeInputSettings()
- TimeNodeContent.tsx [13L] — TimeNodeContent()

## apps/builder/src/features/blocks/inputs/url/components/
- UrlInputIcon.tsx [6L] — UrlInputIcon()
- UrlInputSettings.tsx [75L] — UrlInputSettings()
- UrlNodeContent.tsx [19L] — UrlNodeContent()

## apps/builder/src/features/blocks/integrations/chatwoot/components/
- ChatwootLogo.tsx [28L] — ChatwootLogo()
- ChatwootNodeBody.tsx [15L] — ChatwootNodeBody()
- ChatwootSettings.tsx [132L] — ChatwootSettings()

## apps/builder/src/features/blocks/integrations/googleAnalytics/components/
- GoogleAnalyticsLogo.tsx [102L] — GoogleAnalyticsLogo()
- GoogleAnalyticsNodeBody.tsx [13L] — GoogleAnalyticsNodeBody()
- GoogleAnalyticsSettings.tsx [113L] — GoogleAnalyticsSettings()

## apps/builder/src/features/blocks/integrations/googleSheets/
- types.ts [4L]

## apps/builder/src/features/blocks/integrations/googleSheets/api/
- getAuthorizedGoogleSheetsOAuthResources.ts [65L] — getAuthorizedGoogleSheetsOAuthResources()
- googleSheetsOAuthState.test.ts [111L]
- googleSheetsOAuthState.ts [145L] — createGoogleSheetsOAuthState(), clearGoogleSheetsOAuthStateCookie(), getSafeRedirectPath(), createStateSignature(), hasValidSignature(), createGoogleSheetsOAuthStateCookie(), getSecureCookieAttribute()
- handleGetAccessToken.ts [62L] — handleGetAccessToken()
- handleGetConsentUrl.ts [54L] — handleGetConsentUrl()
- handleGetSheets.ts [78L] — handleGetSheets()
- handleGetSpreadsheetName.ts [66L] — handleGetSpreadsheetName()
- handleHandleCallback.ts [148L] — handleHandleCallback()
- router.ts [70L]

## apps/builder/src/features/blocks/integrations/googleSheets/components/
- CellWithValueStack.tsx [45L] — CellWithValueStack()
- CellWithVariableIdStack.tsx [38L] — CellWithVariableIdStack()
- GoogleSheetsConnectDialog.tsx [70L] — GoogleSheetConnectDialog(), GoogleSheetConnectDialogBody()
- GoogleSheetsLogo.tsx [148L] — GoogleSheetsLogo()
- GoogleSheetsNodeContent.tsx [41L] — GoogleSheetsNodeContent()
- GoogleSheetsSettings.tsx [299L] — GoogleSheetsSettings(), ActionOptions()
- GoogleSpreadsheetPicker.tsx [132L] — GoogleSpreadsheetPicker()
- RowsFilterComparisonItem.tsx [56L] — RowsFilterComparisonItem()
- RowsFilterTableList.tsx [52L] — RowsFilterTableList()
- SheetsDropdown.tsx [40L] — SheetsDropdown()

## apps/builder/src/features/blocks/integrations/googleSheets/queries/
- getGoogleSheetsConsentScreenUrlQuery.ts [17L] — getGoogleSheetsConsentScreenUrlQuery()

## apps/builder/src/features/blocks/integrations/httpRequest/api/
- handleGetResultExample.ts [60L] — handleGetResultExample()
- handleListHttpRequestBlocks.ts [67L] — handleListHttpRequestBlocks()
- handleSubscribeHttpRequest.ts [98L] — handleSubscribeHttpRequest()
- handleTestHttpRequest.ts [157L] — handleTestHttpRequest()
- handleUnsubscribeHttpRequest.ts [97L] — handleUnsubscribeHttpRequest()
- router.ts [119L]

## apps/builder/src/features/blocks/integrations/httpRequest/components/
- HttpRequestAdvancedConfigForm.tsx [283L] — HttpRequestAdvancedConfigForm()
- HttpRequestNodeContent.tsx [31L] — HttpRequestNodeContent()
- HttpRequestSettings.tsx [58L] — HttpRequestSettings()
- KeyValueInputs.tsx [60L] — QueryParamsInputs(), HeadersInputs(), KeyValueInputs()
- ResponseMappingInputs.tsx [40L] — DataVariableInputs()
- VariableForTestInputs.tsx [37L] — VariableForTestInputs()

## apps/builder/src/features/blocks/integrations/httpRequest/helpers/
- computeDeepKeysMappingSuggestionList.test.ts [154L]
- computeDeepKeysMappingSuggestionList.ts [77L] — parsePrevKey(), parseNextKey(), parseBracketsKey(), shouldUseBracketNotation(), isNumericKey()
- convertVariablesForTestToVariables.ts [38L]

## apps/builder/src/features/blocks/integrations/makeCom/components/
- MakeComContent.tsx [29L] — MakeComContent()
- MakeComLogo.tsx [79L] — MakeComLogo()
- MakeComSettings.tsx [81L] — MakeComSettings()

## apps/builder/src/features/blocks/integrations/openai/api/
- handleListModels.ts [89L] — handleListModels()
- router.ts [9L]

## apps/builder/src/features/blocks/integrations/openai/components/
- ModelsDropdown.tsx [49L] — ModelsDropdown()
- OpenAICredentialsDialog.tsx [114L] — OpenAICredentialsDialog()
- OpenAILogo.tsx [7L] — OpenAILogo()
- OpenAINodeBody.tsx [51L] — OpenAINodeBody()
- OpenAISettings.tsx [193L] — OpenAISettings(), buildOptionsForTask(), OpenAITaskSettings()

## apps/builder/src/features/blocks/integrations/openai/components/audio/
- OpenAICreateSpeechSettings.tsx [106L] — OpenAICreateSpeechSettings()

## apps/builder/src/features/blocks/integrations/openai/components/createChatCompletion/
- ChatCompletionMessageItem.tsx [119L] — ChatCompletionMessageItem(), ChatCompletionMessageItemContent()
- ChatCompletionResponseItem.tsx [43L] — ChatCompletionResponseItem()
- OpenAIChatCompletionSettings.tsx [135L] — OpenAIChatCompletionSettings()

## apps/builder/src/features/blocks/integrations/pabbly/components/
- PabblyConnectContent.tsx [12L] — PabblyConnectContent()
- PabblyConnectLogo.tsx [33L] — PabblyConnectLogo()
- PabblyConnectSettings.tsx [91L] — PabblyConnectSettings()

## apps/builder/src/features/blocks/integrations/pixel/components/
- PixelLogo.tsx [9L] — PixelLogo()
- PixelNodeBody.tsx [22L] — PixelNodeBody()
- PixelSettings.tsx [216L] — PixelSettings(), ParamItem()

## apps/builder/src/features/blocks/integrations/sendEmail/api/
- handleResendWebhook.ts [65L] — handleResendWebhook(), isTransientGeneralBounce()
- handleTestSmtpConfig.test.ts [44L]
- handleTestSmtpConfig.ts [53L] — handleTestSmtpConfig()
- resolveSmtpHost.ts [30L] Reuse the destination policy, without accepting URLs, ports, credentials, — resolveSmtpHost()
- router.ts [31L]

## apps/builder/src/features/blocks/integrations/sendEmail/components/
- SendEmailContent.tsx [24L] — SendEmailContent()
- SendEmailIcon.tsx [6L] — SendEmailIcon()
- SendEmailSettings.tsx [255L] — SendEmailSettings()
- SmtpConfigForm.tsx [109L] — SmtpConfigForm()
- SmtpCredentialsCreateDialog.tsx [143L] — SmtpCredentialsCreateDialog(), SmtpCredentialsDialogTitle(), SmtpCredentialsCreateDialogBody()
- SmtpCredentialsUpdateDialogBody.tsx [125L] — SmtpCredentialsUpdateDialogBody()

## apps/builder/src/features/blocks/integrations/zapier/components/
- ZapierContent.tsx [12L] — ZapierContent()
- ZapierLogo.tsx [21L] — ZapierLogo()
- ZapierSettings.tsx [85L] — ZapierSettings()

## apps/builder/src/features/blocks/logic/abTest/components/
- AbTestIcon.tsx [6L] — AbTestIcon()
- AbTestNodeBody.tsx [49L] — AbTestNodeBody()
- AbTestSettings.tsx [31L] — AbTestSettings()

## apps/builder/src/features/blocks/logic/condition/components/
- ComparisonItem.tsx [84L] — ComparisonItem()
- ConditionBlockContent.tsx [16L] — ConditionBlockContent()
- ConditionContent.tsx [100L] — ConditionContent()
- ConditionForm.tsx [46L] — ConditionForm()
- ConditionIcon.tsx [6L] — ConditionIcon()
- ConditionItemNode.tsx [70L] — ConditionItemNode(), comparisonIsEmpty()

## apps/builder/src/features/blocks/logic/jump/components/
- JumpIcon.tsx [6L] — JumpIcon()
- JumpNodeBody.tsx [42L] — JumpNodeBody()
- JumpSettings.tsx [54L] — JumpSettings()

## apps/builder/src/features/blocks/logic/redirect/components/
- RedirectIcon.tsx [6L] — RedirectIcon()
- RedirectNodeContent.tsx [16L] — RedirectNodeContent()
- RedirectSettings.tsx [39L] — RedirectSettings()

## apps/builder/src/features/blocks/logic/return/components/
- ReturnBlockIcon.tsx [6L] — ReturnBlockIcon()
- ReturnBlockNodeContent.tsx [2L] — ReturnBlockNodeContent()

## apps/builder/src/features/blocks/logic/script/components/
- ScriptIcon.tsx [6L] — ScriptIcon()
- ScriptNodeContent.tsx [16L] — ScriptNodeContent()
- ScriptSettings.tsx [58L] — ScriptSettings()

## apps/builder/src/features/blocks/logic/setVariable/components/
- SetVariableContent.tsx [165L] — SetVariableContent(), CustomExpression()
- SetVariableIcon.tsx [6L] — SetVariableIcon()
- SetVariableSettings.tsx [402L] — SetVariableSettings(), SetVariableValue()

## apps/builder/src/features/blocks/logic/typebotLink/api/
- getLinkedTypebots.ts [164L]

## apps/builder/src/features/blocks/logic/typebotLink/components/
- GroupsDropdown.tsx [36L] — GroupsDropdown()
- TypebotLinkForm.tsx [93L] — TypebotLinkForm()
- TypebotLinkIcon.tsx [6L] — TypebotLinkIcon()
- TypebotLinkNode.tsx [57L] — TypebotLinkNode()
- TypebotsDropdown.tsx [87L] — TypebotsDropdown()

## apps/builder/src/features/blocks/logic/typebotLink/helpers/
- fetchLinkedTypebots.ts [39L]

## apps/builder/src/features/blocks/logic/wait/components/
- WaitIcon.tsx [6L] — WaitIcon()
- WaitNodeContent.tsx [20L] — WaitNodeContent()
- WaitSettings.tsx [55L] — WaitSettings()

## apps/builder/src/features/blocks/logic/webhook/api/
- getWebhookSubscription.ts [24L]

## apps/builder/src/features/blocks/logic/webhook/components/
- WebhookIcon.tsx [6L] — WebhookIcon()
- WebhookNodeContent.tsx [28L] — WebhookNodeContent()
- WebhookSettings.tsx [183L] — WebhookSettings()

## apps/builder/src/features/collaboration/api/
- handleCreateInvitation.test.ts [136L] — createInvitation()
- handleCreateInvitation.ts [108L] — handleCreateInvitation()
- handleDeleteCollaborator.ts [23L] — handleDeleteCollaborator()
- handleDeleteInvitation.ts [26L] — handleDeleteInvitation()
- handleGetCollaborators.test.ts [95L]
- handleGetCollaborators.ts [41L] — handleGetCollaborators()
- handleListInvitations.test.ts [52L]
- handleListInvitations.ts [22L] — handleListInvitations()
- handleUpdateCollaborator.ts [26L] — handleUpdateCollaborator()
- handleUpdateInvitation.ts [26L] — handleUpdateInvitation()
- router.ts [81L]

## apps/builder/src/features/collaboration/components/
- CollaborationList.tsx [239L] — CollaborationList()
- CollaboratorButton.tsx [101L] — CollaboratorItem(), CollaboratorIdentityContent()
- ReadableCollaborationType.tsx [15L] — ReadableCollaborationType()

## apps/builder/src/features/credentials/api/
- getOAuthBlockDefinition.ts [26L] — getOAuthBlockDefinition()
- handleAuthorizeOAuth.ts [50L] — handleAuthorizeOAuth()
- handleCreateCredentials.ts [118L] — handleCreateCredentials(), isNotAvailable()
- handleCreateOAuthCredentials.ts [180L] — handleCreateOAuthCredentials(), exchangeCodeForTokens(), getClient()
- handleDeleteCredentials.ts [53L] — handleDeleteCredentials()
- handleGetCredentials.ts [76L] — handleGetCredentials()
- handleListCredentials.ts [90L] — handleListCredentials()
- handleUpdateCredentials.ts [93L] — handleUpdateCredentials()
- handleUpdateOAuthCredentials.ts [167L] — handleUpdateOAuthCredentials(), exchangeCodeForTokens(), getClient()
- router.ts [116L]

## apps/builder/src/features/credentials/components/
- CredentialsCreateDialog.tsx [82L] — CredentialsCreateDialog(), CredentialsCreateDialogPopup()
- CredentialsDropdown.tsx [166L] — CredentialsDropdown()
- CredentialsSettingsForm.tsx [359L] — isHiddenType(), isNonEditableType(), CredentialsSettingsForm(), CredentialsIcon(), CredentialsLabel(), CredentialsItem()
- CredentialsUpdateDialog.tsx [100L] — CredentialsUpdateDialog(), CredentialsUpdateDialogPopup()

## apps/builder/src/features/customDomains/
- types.ts [28L] Copied from https://github.com/vercel/platforms/blob/main/lib/types.ts

## apps/builder/src/features/customDomains/api/
- handleCreateCustomDomain.ts [86L] — handleCreateCustomDomain(), createDomainOnVercel()
- handleDeleteCustomDomain.test.ts [108L]
- handleDeleteCustomDomain.ts [81L] — handleDeleteCustomDomain(), deleteDomainOnVercel()
- handleListCustomDomains.ts [40L] — handleListCustomDomains()
- handleVerifyCustomDomain.ts [121L] — handleVerifyCustomDomain()
- router.ts [99L]

## apps/builder/src/features/customDomains/components/
- CreateCustomDomainDialog.tsx [151L] — CreateCustomDomainDialog()
- CustomDomainConfigDialog.tsx [153L] — CustomDomainConfigDialog(), getSubdomain()
- CustomDomainsDropdown.tsx [127L] — CustomDomainsDropdown()
- DomainStatusIcon.tsx [42L] — DomainStatusIcon()

## apps/builder/src/features/dashboard/
- types.ts [9L]

## apps/builder/src/features/dashboard/components/
- DashboardHeader.tsx [92L] — DashboardHeader()
- DashboardPage.tsx [117L] — DashboardPage()

## apps/builder/src/features/editor/
- constants.ts [4L]

## apps/builder/src/features/editor/api/
- generateGroupTitle.ts [127L]

## apps/builder/src/features/editor/components/
- BlockCard.tsx [125L]
- BlockCardLayout.tsx [52L] — BlockCardLayout()
- BlockCardOverlay.tsx [28L] — BlockCardOverlay()
- BlockIcon.tsx [191L]
- BlockLabel.tsx [98L]
- BlocksSideBar.tsx [366L] — BlocksSideBar(), isMouseInElement()
- BoardMenuButton.tsx [66L] — BoardMenuButton()
- EditableTypebotName.tsx [42L] — EditableTypebotName()
- EditorPage.tsx [89L] — EditorPage(), RightPanel()
- EditorSettingsDialog.tsx [17L] — EditorSettingsDialog()
- SuspectedTypebotBanner.tsx [38L] — SuspectedTypebotBanner()
- TypebotHeader.tsx [359L] — TypebotHeader(), LeftElements(), RightElements(), TypebotNav()
- UnauthenticatedTypebotHeader.tsx [120L] — GuestTypebotHeader()

## apps/builder/src/features/editor/hooks/
- useUndo.ts [139L]

## apps/builder/src/features/editor/providers/
- EditorProvider.tsx [51L] — EditorProvider(), useEditor()
- TypebotProvider.tsx [364L] — TypebotProvider(), useTypebot()

## apps/builder/src/features/editor/providers/typebotActions/
- blocks.ts [236L] — removeBlockFromGroup(), createBlockDraft(), createNewBlock(), moveBlockToGroup(), deleteGroupDraft(), removeEmptyGroups()
- edges.ts [271L] — addEdgeIdToEvent(), addEdgeIdToBlock(), addEdgeIdToItem(), addEdgeIdToPath(), deleteEdgeDraft(), resetOutgoingEdgeIdProp(), deleteConnectedEdgesDraft(), removeExistingEdge()
- events.ts [162L]
- groups.ts [238L] — deleteGroupByIdDraft()
- items.ts [336L]
- variables.ts [48L] — deleteVariableDraft()

## apps/builder/src/features/emails/api/
- handleResubscribeEmail.ts [60L]
- handleUnsubscribeEmail.ts [42L] — handleUnsubscribeEmail(), suppressEmail()
- router.ts [39L]

## apps/builder/src/features/events/components/
- CommandEventNode.tsx [27L] — CommandEventNode()
- CommandEventSettings.tsx [24L] — CommandEventSettings()
- EventCard.tsx [66L]
- EventCardLayout.tsx [61L] — EventCardLayout()
- EventCardOverlay.tsx [28L] — EventCardOverlay()
- EventFocusToolbar.tsx [95L] — EventFocusToolbar()
- EventIcon.tsx [34L]
- EventLabel.tsx [24L]
- EventNode.tsx [210L] — EventNode()
- EventNodeContent.tsx [25L]
- EventNodeContextMenuPopup.tsx [31L] — EventNodeContextMenuPopup()
- InvalidReplyEventNode.tsx [43L] — InvalidReplyEventNode()
- InvalidReplyEventSettings.tsx [83L] — InvalidReplyEventSettings()
- ReplyEventNode.tsx [43L] — ReplyEventNode()
- ReplyEventSettings.tsx [83L] — ReplyEventSettings()
- StartEventNode.tsx [11L] — StartEventNode()

## apps/builder/src/features/folders/
- TypebotDndProvider.tsx [44L] eslint-disable-next-line @typescript-eslint/ban-ts-comment — TypebotDndProvider(), useTypebotDnd()

## apps/builder/src/features/folders/api/
- handleCreateFolder.ts [57L] — handleCreateFolder()
- handleDeleteFolder.ts [36L] — handleDeleteFolder()
- handleGetFolder.ts [39L] — handleGetFolder()
- handleListFolders.ts [44L] — handleListFolders()
- handleUpdateFolder.ts [62L] — handleUpdateFolder()
- router.ts [106L]

## apps/builder/src/features/folders/components/
- BackButton.tsx [38L] — BackButton()
- CreateBotButton.tsx [42L] — CreateBotButton()
- CreateFolderButton.tsx [48L] — CreateFolderButton()
- FolderButton.tsx [213L] — FolderButton(), ButtonSkeleton()
- FolderContent.tsx [392L] — FolderContent()
- FolderPage.tsx [49L] — FolderPage()
- TypebotButton.tsx [261L] — TypebotButton()
- TypebotButtonOverlay.tsx [34L] — TypebotButtonOverlay()

## apps/builder/src/features/forge/
- ForgedBlockCard.tsx [24L] — ForgedBlockCard()
- ForgedBlockIcon.tsx [20L]
- ForgedBlockLabel.tsx [40L] — ForgedBlockLabel(), ForgeBlockBadge()

## apps/builder/src/features/forge/api/
- fetchSelectItems.ts [120L]
- router.ts [6L]

## apps/builder/src/features/forge/components/
- ForgeSelectInput.tsx [92L] — ForgeSelectInput(), pick()
- ForgedBlockNodeContent.tsx [88L] — ForgedBlockNodeContent()
- ForgedBlockSettings.tsx [117L] — ForgedBlockSettings()
- ForgedBlockTurnIntoMenu.tsx [50L] — ForgedBlockTurnIntoContextMenuPopup(), TurnIntoMenuItem()

## apps/builder/src/features/forge/components/credentials/
- ForgedCredentialsCreateDialog.tsx [150L] — ForgedCredentialsCreateDialog(), ForgedCredentialsCreateDialogTitle(), ForgedCredentialsCreateDialogBody()
- ForgedCredentialsDropdown.tsx [184L] — getAuthTypeFromBlockId(), ForgedCredentialsDropdown()
- ForgedCredentialsUpdateDialogContent.tsx [142L] — ForgedCredentialsUpdateDialogContent()
- ForgedOAuthCredentialsCreateDialog.tsx [207L] — ForgedOAuthCredentialsCreateDialog(), ForgedOAuthCredentialsDialogTitle(), ForgedOAuthCredentialsCreateDialogBody()
- ForgedOAuthCredentialsUpdateDialogBody.tsx [187L] — ForgedOAuthCredentialsUpdateDialogBody()
- useOAuthPopup.ts [231L] The block definition ID for the OAuth provider */

## apps/builder/src/features/forge/components/zodLayouts/
- ZodActionDiscriminatedUnion.tsx [74L] — ZodActionDiscriminatedUnion(), isActionHidden()
- ZodDiscriminatedUnionLayout.tsx [52L] eslint-disable @typescript-eslint/no-explicit-any */ — ZodDiscriminatedUnionLayout()
- ZodFieldLayout.tsx [557L] — parseEnumItems(), ZodFieldLayout(), ZodArrayContent()
- ZodObjectLayout.tsx [128L] — ZodObjectLayout(), getObjectKeysWithSameAccordionAttr()
- getDiscriminatedUnionOptionsMap.ts [90L] — getShape(), getDiscriminatedUnionOptionsMap()

## apps/builder/src/features/forge/helpers/
- findFetcher.ts [8L] — findFetcher()
- getFetchers.ts [10L] — getFetchers()
- getZodInnerSchema.ts [64L] — mergeLayoutMeta()
- getZodLayoutMetadata.ts [17L]

## apps/builder/src/features/forge/hooks/
- useForgedBlock.ts [33L] — useForgedBlock()

## apps/builder/src/features/graph/
- constants.ts [30L] — graphPositionDefaultValue()
- types.ts [40L]

## apps/builder/src/features/graph/components/
- ElementsSelectionMenu.tsx [225L] — ElementsSelectionMenu()
- Graph.tsx [510L] — Graph(), useAutoMoveBoard()
- GraphElements.tsx [57L] — GroupNodes()
- SelectBox.tsx [22L] — SelectBox()
- ZoomButtons.tsx [34L] — ZoomButtons()

## apps/builder/src/features/graph/components/edges/
- DrawingEdge.tsx [175L] — DrawingEdge()
- DropOffEdge.tsx [210L] — DropOffEdge()
- Edge.tsx [150L] — Edge()
- Edges.tsx [96L] — Edges()

## apps/builder/src/features/graph/components/endpoints/
- BlockSourceEndpoint.tsx [133L] — BlockSourceEndpoint()
- EventSourceEndpoint.tsx [130L] — EventSourceEndpoint()
- TargetEndpoint.tsx [86L] — TargetEndpoint()

## apps/builder/src/features/graph/components/nodes/
- PlaceholderNode.tsx [107L]

## apps/builder/src/features/graph/components/nodes/block/
- BlockNode.tsx [330L] — BlockNode()
- BlockNodeContent.tsx [176L]
- BlockNodeContextMenuPopup.tsx [64L] — BlockNodeContextMenuPopup()
- BlockNodeOverlay.tsx [33L] — BlockNodeOverlay()
- BlockNodesList.tsx [204L] — BlockNodesList()
- MediaBubblePopoverContent.tsx [78L] — MediaBubblePopoverContent(), MediaBubbleContent()
- SettingsHoverBar.tsx [81L] — SettingsHoverBar()
- SettingsPopoverContent.tsx [384L] — SettingsPopoverContent(), NodeSettings()
- VariableTag.tsx [10L] — VariableTag()
- WithVariableContent.tsx [21L] — WithVariableContent()

## apps/builder/src/features/graph/components/nodes/group/
- GroupFocusToolbar.tsx [82L] — GroupFocusToolbar()
- GroupNode.tsx [217L] — GroupNode()
- GroupNodeContextMenuPopup.tsx [34L] — GroupNodeContextMenuPopup()

## apps/builder/src/features/graph/components/nodes/item/
- ItemNode.tsx [155L] — ItemNode(), getDisplayCondition()
- ItemNodeContent.tsx [71L]
- ItemNodeContextMenuPopup.tsx [29L] — ItemNodeContextMenuPopup()
- ItemNodesList.tsx [246L] — ItemNodesList(), DefaultItemNode(), checkIfDefaultItemIsNeeded()
- getItemName.tsx [19L]

## apps/builder/src/features/graph/helpers/
- computeConnectingEdgePath.ts [25L] — computeConnectingEdgePath()
- computeDropOffPath.ts [28L] — computeDropOffPath()
- computeEdgePath.ts [23L] — computeEdgePath()
- computeEdgePathToMouth.ts [38L]
- computeSelectBoxDimensions.ts [53L] — computeSelectBoxDimensions()
- computeSourceCoordinates.ts [17L] — computeSourceCoordinates()
- getAnchorsPosition.ts [105L]
- getHelpDocUrl.ts [88L]
- isSelectBoxIntersectingWithElement.ts [19L] — isSelectBoxIntersectingWithElement()
- projectMouse.ts [22L] — projectMouse()
- segments.ts [93L] — getSegments(), computeTwoSegments(), computeThreeSegments(), computeFourSegments(), computeFiveSegments()

## apps/builder/src/features/graph/hooks/
- useHoverExpandDebounce.ts [41L] — useHoverExpandDebounce()
- useIsAnalyzing.ts [11L] Returns true if we are on the analytics page — useIsAnalyzing()
- useSelectionStore.ts [126L]

## apps/builder/src/features/graph/providers/
- EndpointsProvider.tsx [64L] — EndpointsProvider(), useEndpoints()
- GraphDndProvider.tsx [236L] — GraphDndProvider(), useDragDistance(), computeNearestPlaceholderIndex(), getGroupElementAtPointer(), useBlockDnd()
- GraphProvider.tsx [86L] — GraphProvider(), useGraph()

## apps/builder/src/features/onboarding/
- data.ts [21L]

## apps/builder/src/features/onboarding/components/
- OnboardingPage.tsx [182L] — OnboardingPage(), shootConfettis()
- VideoOnboardingFloatingWindow.tsx [39L] — VideoOnboardingFloatingWindow()
- VideoOnboardingPopover.tsx [79L]
- YoutubeIframe.tsx [60L] eslint-disable-next-line @typescript-eslint/no-explicit-any — YoutubeIframe(), initYoutubeIframeApi()

## apps/builder/src/features/onboarding/helpers/
- hasOnboardingVideo.ts [15L] — hasOnboardingVideo()

## apps/builder/src/features/onboarding/hooks/
- useOnboardingDisclosure.ts [70L] — useOnboardingDisclosure()

## apps/builder/src/features/preview/
- data.tsx [16L]

## apps/builder/src/features/preview/components/
- ApiPreviewInstructions.tsx [101L] — ApiPreviewInstructions()
- IsolatedPreview.tsx [226L] — IsolatedPreview(), PreviewFrame()
- PreviewDrawer.tsx [97L] — getDefaultRuntime(), PreviewDrawer()
- PreviewDrawerBody.tsx [24L]
- ResizeHandle.tsx [20L] — ResizeHandle()
- RuntimeMenu.tsx [48L] — RuntimeMenu()
- VariablesDrawer.tsx [207L] — VariablesDrawer(), VariableItem()
- WebPreview.tsx [116L] — WebPreview()
- WhatsAppPreviewInstructions.tsx [111L] — WhatsAppPreviewInstructions()

## apps/builder/src/features/preview/helpers/
- createPreviewDocumentId.ts [12L] — createPreviewDocumentId()

## apps/builder/src/features/publish/components/
- EditableUrl.tsx [44L] — EditableUrl()
- LinkPreviewMetadataForm.tsx [125L] — LinkPreviewMetadataForm()
- PublishButton.tsx [347L] — PublishButton()
- SharePage.tsx [185L] — SharePage()

## apps/builder/src/features/publish/components/deploy/
- DeployButton.tsx [325L] — DeployButton(), IntegrationButtons()
- DeployDialog.tsx [65L] — DeployDialog()

## apps/builder/src/features/publish/components/deploy/EmbedTypeMenu/
- BubbleMenuButton.tsx [38L] — BubbleMenuButton()
- EmbedTypeMenu.tsx [18L] — EmbedTypeMenu()
- PopupMenuButton.tsx [39L] — PopupMenuButton()
- StandardMenuButton.tsx [35L] — StandardMenuButton()

## apps/builder/src/features/publish/components/deploy/EmbedTypeMenu/illustrations/
- BubbleIllustration.tsx [72L] — BubbleIllustration()
- PopupIllustration.tsx [70L] — PopupIllustration()
- StandardIllustration.tsx [94L] — StandardIllustration()
- animationVariants.ts [9L]

## apps/builder/src/features/publish/components/deploy/dialogs/
- ApiDeployDialog.tsx [90L]
- BlinkDeployDialog.tsx [61L]
- FlutterFlowDeployDialog.tsx [47L]
- NotionDeployDialog.tsx [45L]

## apps/builder/src/features/publish/components/deploy/dialogs/framer/
- FramerDeployDialog.tsx [31L] — FramerDeployDialog()

## apps/builder/src/features/publish/components/deploy/dialogs/framer/instructions/
- FramerBubbleInstructions.tsx [63L] — FramerBubbleInstructions()
- FramerInstructions.tsx [22L] — FramerInstructions()
- FramerPopupInstructions.tsx [47L] — FramerPopupInstructions()
- FramerStandardInstructions.tsx [19L] — FramerStandardInstructions()

## apps/builder/src/features/publish/components/deploy/dialogs/gtm/
- GtmDeployDialog.tsx [31L] — GtmDeployDialog()

## apps/builder/src/features/publish/components/deploy/dialogs/gtm/instructions/
- GtmBubbleInstructions.tsx [48L] — GtmBubbleInstructions()
- GtmInstructions.tsx [23L] — GtmInstructions()
- GtmPopupInstructions.tsx [33L] — GtmPopupInstructions()
- GtmStandardInstructions.tsx [65L] — GtmStandardInstructions()

## apps/builder/src/features/publish/components/deploy/dialogs/iframe/
- IframeDeployDialog.tsx [48L] — IframeDeployDialog()
- IframeSnippet.tsx [31L] — IframeSnippet()

## apps/builder/src/features/publish/components/deploy/dialogs/javascript/
- JavascriptBubbleSnippet.tsx [31L] — JavascriptBubbleSnippet()
- JavascriptDeployDialog.tsx [30L] — JavascriptDeployDialog()
- JavascriptPopupSnippet.tsx [35L] — JavascriptPopupSnippet()
- JavascriptStandardSnippet.tsx [55L] — JavascriptStandardSnippet(), parseStandardHeadCode(), parseStandardElementCode()

## apps/builder/src/features/publish/components/deploy/dialogs/javascript/instructions/
- JavascriptBubbleInstructions.tsx [59L] — JavascriptBubbleInstructions()
- JavascriptInstructions.tsx [24L] — JavascriptInstructions()
- JavascriptPopupInstructions.tsx [20L] — JavascriptPopupInstructions()
- JavascriptStandardInstructions.tsx [26L] — JavascriptStandardInstructions()

## apps/builder/src/features/publish/components/deploy/dialogs/nextjs/
- InstallNextjsPackageSnippet.tsx [8L] — InstallNextjsPackageSnippet()
- NextjsBubbleSnippet.tsx [33L] — NextjsBubbleSnippet()
- NextjsDeployDialog.tsx [30L] — NextjsDeployDialog()
- NextjsPopupSnippet.tsx [31L] — NextjsPopupSnippet()
- NextjsStandardSnippet.tsx [27L] — NextjsStandardSnippet()

## apps/builder/src/features/publish/components/deploy/dialogs/nextjs/instructions/
- NextjsBubbleInstructions.tsx [42L] — NextjsBubbleInstructions()
- NextjsInstructions.tsx [22L] — NextjsInstructions()
- NextjsPopupInstructions.tsx [30L] — NextjsPopupInstructions()
- NextjsStandardInstructions.tsx [36L] — NextjsStandardInstructions()

## apps/builder/src/features/publish/components/deploy/dialogs/react/
- InstallReactPackageSnippet.tsx [8L] — InstallReactPackageSnippet()
- ReactBubbleSnippet.tsx [33L] — ReactBubbleSnippet()
- ReactDeployDialog.tsx [30L] — ReactDeployDialog()
- ReactPopupSnippet.tsx [31L] — ReactPopupSnippet()
- ReactStandardSnippet.tsx [30L] — ReactStandardSnippet()

## apps/builder/src/features/publish/components/deploy/dialogs/react/instructions/
- ReactBubbleInstructions.tsx [42L] — ReactBubbleInstructions()
- ReactInstructions.tsx [22L] — ReactInstructions()
- ReactPopupInstructions.tsx [30L] — ReactPopupInstructions()
- ReactStandardInstructions.tsx [36L] — ReactStandardInstructions()

## apps/builder/src/features/publish/components/deploy/dialogs/script/
- ScriptDeployDialog.tsx [30L] — ScriptDeployDialog()

## apps/builder/src/features/publish/components/deploy/dialogs/script/instructions/
- ScriptBubbleInstructions.tsx [46L] — ScriptBubbleInstructions()
- ScriptInstructions.tsx [22L] — ScriptInstructions()
- ScriptPopupInstructions.tsx [35L] — ScriptPopupInstructions()
- ScriptStandardInstructions.tsx [49L] — ScriptStandardInstructions()

## apps/builder/src/features/publish/components/deploy/dialogs/shopify/
- ShopifyDeployDialog.tsx [31L] — ShopifyDeployDialog()

## apps/builder/src/features/publish/components/deploy/dialogs/shopify/instructions/
- ShopifyBubbleInstructions.tsx [47L] — ShopifyBubbleInstructions()
- ShopifyInstructions.tsx [26L] — ShopifyInstructions()
- ShopifyPopupInstructions.tsx [31L] — ShopifyPopupInstructions()
- ShopifyStandardInstructions.tsx [65L] — ShopifyStandardInstructions()

## apps/builder/src/features/publish/components/deploy/dialogs/webflow/
- WebflowDeployDialog.tsx [31L] — WebflowDeployDialog()

## apps/builder/src/features/publish/components/deploy/dialogs/webflow/instructions/
- WebflowBubbleInstructions.tsx [46L] — WebflowBubbleInstructions()
- WebflowInstructions.tsx [22L] — WebflowInstructions()
- WebflowPopupInstructions.tsx [43L] — WebflowPopupInstructions()
- WebflowStandardInstructions.tsx [19L] — WebflowStandardInstructions()

## apps/builder/src/features/publish/components/deploy/dialogs/whatsApp/
- WhatsAppComparisonItem.tsx [70L] — WhatsAppComparisonItem()
- WhatsAppCredentialsDialog.tsx [1020L] — WhatsAppCredentialsDialog(), useSteps(), WhatsAppCreateDialogBody(), Requirements(), SystemUserToken(), PhoneNumber(), Webhook(), WhatsAppUpdateDialogBody(), SecretInput(), ProviderSelection(), Dialog360PhoneNumber(), Dialog360Webhook()
- WhatsAppDeployDialog.tsx [556L]

## apps/builder/src/features/publish/components/deploy/dialogs/wix/
- WixDeployDialog.tsx [31L] — WixDeployDialog()

## apps/builder/src/features/publish/components/deploy/dialogs/wix/instructions/
- WixBubbleInstructions.tsx [53L] — WixBubbleInstructions()
- WixInstructions.tsx [22L] — WixInstructions()
- WixPopupInstructions.tsx [37L] — WixPopupInstructions()
- WixStandardInstuctions.tsx [23L] — WixStandardInstructions()

## apps/builder/src/features/publish/components/deploy/dialogs/wordpress/
- WordpressDeployDialog.tsx [31L] — WordpressDeployDialog()

## apps/builder/src/features/publish/components/deploy/dialogs/wordpress/instructions/
- WordpressBubbleInstructions.tsx [69L] — WordpressBubbleInstructions()
- WordpressInstructions.tsx [23L] — WordpressInstructions()
- WordpressPopupInstructions.tsx [59L] — WordpressPopupInstructions()
- WordpressStandardInstructions.tsx [72L] — WordpressStandardInstructions(), parseWordpressShortcode()
- constants.ts [2L]

## apps/builder/src/features/publish/components/deploy/logos/
- BlinkLogo.tsx [10L] — BlinkLogo()
- FlutterFlowLogo.tsx [19L] — FlutterFlowLogo()
- FramerLogo.tsx [12L] — FramerLogo()
- GtmLogo.tsx [29L] — GtmLogo()
- IframeLogo.tsx [49L] — IframeLogo()
- JavascriptLogo.tsx [16L] — JavascriptLogo()
- NextjsLogo.tsx [70L] — NextjsLogo()
- NotionLogo.tsx [23L] — NotionLogo()
- OtherLogo.tsx [25L] — OtherLogo()
- ReactLogo.tsx [21L] — ReactLogo()
- ShopifyLogo.tsx [25L] — ShopifyLogo()
- WebflowLogo.tsx [21L] — WebflowLogo()
- WixLogo.tsx [34L] — WixLogo()
- WordpressLogo.tsx [22L] — WordpressLogo()

## apps/builder/src/features/publish/components/deploy/settings/
- PopupSettings.tsx [45L] — PopupSettings()
- StandardSettings.tsx [104L] — StandardSettings()

## apps/builder/src/features/publish/components/deploy/settings/BubbleSettings/
- BubbleSettings.tsx [145L] — BubbleSettings(), BubbleIcon()
- ButtonThemeSettings.tsx [93L] — ButtonThemeSettings()
- PreviewMessageSettings.tsx [120L] — PreviewMessageSettings()
- PreviewMessageThemeSettings.tsx [96L] — PreviewMessageThemeSettings()
- ThemeSettings.tsx [76L] — ThemeSettings()

## apps/builder/src/features/publish/components/deploy/snippetParsers/
- bubble.ts [159L] — parseChatWindowTheme(), parseBubbleProps(), parseInitBubbleCode(), parseReactBubbleProps()
- popup.ts [72L] — parsePopupProps(), parseInitPopupCode(), parseReactPopupProps()
- shared.ts [90L] — parseStringParam(), parseNumberOrBoolParam(), parseBotProps(), parseReactStringParam(), parseReactNumberOrBoolParam(), parseReactBotProps(), parseInlineScript(), parseApiHost(), parseApiHostValue(), parseWsHost()
- standard.ts [17L] — parseInitStandardCode()

## apps/builder/src/features/publish/helpers/
- areTypebotsEqual.ts [10L] — areTypebotsEqual()
- convertPublicTypebotToTypebot.ts [36L]
- convertTypebotToPublicTypebot.ts [20L]
- isPublished.ts [42L] — isPublished()

## apps/builder/src/features/results/
- ResultsProvider.tsx [147L] — ResultsProvider(), useResults()
- types.ts [7L]

## apps/builder/src/features/results/api/
- handleDeleteResults.ts [76L] — handleDeleteResults()
- handleGetExportJobStatus.ts [74L] — handleGetExportJobStatus()
- handleGetResult.ts [99L] — handleGetResult()
- handleGetResultBlockFile.ts [66L] — handleGetResultBlockFile()
- handleGetResultFile.ts [65L] — handleGetResultFile()
- handleGetResultLogs.test.ts [72L]
- handleGetResultLogs.ts [65L] — handleGetResultLogs()
- handleGetResultTranscript.ts [153L] — handleGetResultTranscript()
- handleGetResults.test.ts [71L]
- handleGetResults.ts [137L] — handleGetResults()
- handleStartExportJob.ts [91L] — handleStartExportJob()
- handleTriggerSendExportResultsToEmail.ts [90L] — handleTriggerSendExportResultsToEmail()
- router.ts [174L]

## apps/builder/src/features/results/components/
- FileLinks.tsx [19L] — FileLinks()
- HeaderIcon.tsx [14L] — HeaderIcon()
- LogsDialog.tsx [149L] — LogsDialog(), LogCard(), StatusTag(), DetailsViewer(), beautifyDetails()
- ResultDialog.tsx [180L] — ResultDialog(), Transcript(), Answers()
- ResultsPage.tsx [141L] — ResultsPage()
- ResultsTableContainer.tsx [79L] — ResultsTableContainer()

## apps/builder/src/features/results/components/table/
- Cell.tsx [61L] — Cell()
- ColumnSettings.tsx [119L] — ColumnSettings(), SortableColumns()
- ExportAllResultsDialog.tsx [325L] — ExportAllResultsDialog()
- ExportJobProgress.tsx [79L] — ExportJobProgress()
- HeaderRow.tsx [55L] — HeaderRow(), ResizeHandle()
- LoadingRows.tsx [41L] — getColumnKeys(), LoadingRows()
- ResultsTable.tsx [274L] — ResultsTable()
- Row.tsx [50L] — Row()
- SelectionToolbar.tsx [189L] — SelectionToolbar()
- TableSettingsButton.tsx [107L] — TableSettingsButton(), TableSettingsMenu()

## apps/builder/src/features/results/helpers/
- parseCellContent.tsx [39L] — getRepeatedKey()
- parseHeaderCells.tsx [17L]

## apps/builder/src/features/settings/components/
- GeneralSettingsForm.tsx [170L] — GeneralSettingsForm()
- MetadataForm.tsx [70L] — MetadataForm()
- SecurityForm.tsx [41L] — SecurityForm()
- SettingsPage.tsx [38L] — SettingsPage()
- SettingsSideMenu.tsx [114L] — SettingsSideMenu()
- SystemMessagesForm.tsx [264L] — SystemMessagesForm()
- TypingEmulationForm.tsx [141L] — TypingEmulationForm()

## apps/builder/src/features/share/components/
- SharePopoverContent.tsx [51L] — SharePopoverContent()
- ShareTypebotButton.tsx [28L] — ShareTypebotButton()

## apps/builder/src/features/telemetry/api/
- router.ts [6L]
- trackClientEvents.ts [85L]

## apps/builder/src/features/telemetry/helpers/
- parseTypebotPublishEvents.ts [50L] — parseTypebotPublishEvents()
- trackAnalyticsPageView.ts [27L] — trackAnalyticsPageView()

## apps/builder/src/features/templates/
- types.ts [4L]

## apps/builder/src/features/templates/components/
- CreateNewTypebotButtons.tsx [142L] — CreateNewTypebotButtons()
- ImportTypebotFromFileButton.tsx [70L] — ImportTypebotFromFileButton()
- TemplatesDialog.tsx [170L] — TemplatesDialog()
- TemplatesPage.tsx [12L] — TemplatesPage()

## apps/builder/src/features/theme/
- galleryTemplates.ts [318L] — getOrigin()

## apps/builder/src/features/theme/api/
- handleDeleteThemeTemplate.ts [56L] — handleDeleteThemeTemplate()
- handleListThemeTemplates.ts [44L] — handleListThemeTemplates()
- handleSaveThemeTemplate.ts [65L] — handleSaveThemeTemplate()
- router.ts [72L]

## apps/builder/src/features/theme/components/
- CustomCssSettings.tsx [19L] — CustomCssSettings()
- DefaultAvatar.tsx [29L] — DefaultAvatar()
- MyTemplates.tsx [86L] — MyTemplates()
- SaveThemeDialog.tsx [107L] — SaveThemeDialog()
- TemplatesGallery.tsx [39L] — TemplatesGallery()
- ThemePage.tsx [38L] — ThemePage()
- ThemeSideMenu.tsx [146L] — ThemeSideMenu()
- ThemeTemplateCard.tsx [225L] — ThemeTemplateCard(), parseBackground(), AvatarPreview()
- ThemeTemplates.tsx [93L] — ThemeTemplates(), ThemeTemplatesBody()

## apps/builder/src/features/theme/components/chat/
- AvatarForm.tsx [99L] — AvatarForm()
- ButtonsTheme.tsx [34L] — ButtonsTheme()
- ChatContainerForm.tsx [123L] — ChatContainerForm(), parseValueAndUnit()
- ChatThemeSettings.tsx [216L] — ChatThemeSettings()
- ContainerThemeForm.tsx [260L] — BorderThemeForm()

## apps/builder/src/features/theme/components/general/
- BackgroundContent.tsx [85L] — BackgroundContent()
- BackgroundSelector.tsx [56L] — BackgroundSelector()
- CustomFontForm.tsx [38L] — CustomFontForm()
- FontForm.tsx [17L] — FontForm()
- GeneralSettings.tsx [164L] — GeneralSettings()
- GoogleFontForm.tsx [51L] — GoogleFontForm()
- ProgressBarForm.tsx [122L] — ProgressBarForm()

## apps/builder/src/features/theme/helpers/
- areThemesEqual.ts [12L] — areThemesEqual()

## apps/builder/src/features/typebot/api/
- handleCreateTypebot.ts [124L] — handleCreateTypebot()
- handleDeleteTypebot.ts [86L] — handleDeleteTypebot()
- handleGetPublishedTypebot.ts [88L] — handleGetPublishedTypebot()
- handleGetTypebot.test.ts [337L] — createLegacyTypebot()
- handleGetTypebot.ts [125L] — handleGetTypebot()
- handleGetTypebotBlocks.ts [28L] — handleGetTypebotBlocks()
- handleImportTypebot.ts [220L] — handleImportTypebot()
- handleIsPublicIdAvailable.ts [18L] — handleIsPublicIdAvailable()
- handleListTypebots.ts [81L] — handleListTypebots()
- handlePublishTypebot.ts [230L] — handlePublishTypebot()
- handleUnpublishTypebot.ts [62L] — handleUnpublishTypebot()
- handleUpdateTypebot.ts [256L] — handleUpdateTypebot(), disableWhatsAppSettings()
- legacyScriptOptions.test.ts [266L] — expectLegacyFlagsRemoved()
- router.ts [244L]

## apps/builder/src/features/typebot/helpers/
- duplicateName.ts [7L]
- hasDefaultConnector.ts [23L] — hasDefaultConnector()
- isPublicIdValid.test.ts [38L]
- isPublicIdValid.ts [8L] — isPublicIdValid()
- isReadTypebotForbidden.test.ts [76L]
- isWriteTypebotForbidden.ts [28L] — isWriteTypebotForbidden()
- parseNewBlock.ts [41L] — parseNewBlock()
- sanitizers.ts [242L] — sanitizeCredentialsId(), isPublicIdNotAvailable(), isCustomDomainNotAvailable(), sanitizeFolderId(), sanitizeCustomDomain()

## apps/builder/src/features/upload/api/
- generateUploadUrl.ts [205L] — parsePathSegment()

## apps/builder/src/features/user/
- UserProvider.tsx [146L] — UserProvider()

## apps/builder/src/features/user/components/
- ApiTokensList.tsx [147L] — ApiTokensList()
- AppearanceRadioGroup.tsx [51L] — AppearanceRadioGroup()
- ChangeEmailDialog.tsx [130L] — ChangeEmailDialog()
- CreateApiTokenDialog.tsx [101L] — CreateApiTokenDialog()
- GraphNavigationRadioGroup.tsx [58L] — GraphNavigationRadioGroup()
- GroupTitlesAutoGenForm.tsx [151L] — GroupTitlesAutoGenForm()
- MyAccountForm.tsx [83L] — MyAccountForm()
- UserPreferencesForm.tsx [145L] — UserPreferencesForm()

## apps/builder/src/features/user/helpers/
- setLocaleInCookies.ts [11L] — setLocaleInCookies()

## apps/builder/src/features/user/hooks/
- useUser.ts [5L] — useUser()

## apps/builder/src/features/user/server/
- handleAcceptTerms.ts [25L] — handleAcceptTerms()
- handleCreateApiToken.ts [37L] — handleCreateApiToken()
- handleDeleteApiToken.ts [38L] — handleDeleteApiToken()
- handleListApiTokens.ts [27L] — handleListApiTokens()
- handleUpdateUser.ts [49L] — handleUpdateUser()
- routers.ts [84L]

## apps/builder/src/features/variables/components/
- VariablesButton.tsx [60L] — VariablesButton()

## apps/builder/src/features/variables/helpers/
- injectVariableInTextInput.ts [25L]

## apps/builder/src/features/workspace/
- WorkspaceProvider.tsx [226L] — WorkspaceProvider(), useWorkspace()
- types.ts [8L]

## apps/builder/src/features/workspace/api/
- handleCreateWorkspace.test.ts [231L] — seedFreeWorkspace(), createWorkspacesConcurrently(), rejectionCodes(), isFreeTierLimitQuery()
- handleCreateWorkspace.ts [144L] — handleCreateWorkspace(), lockUserForWorkspaceCreation(), createWorkspace(), enforceFreeTierLimits()
- handleCreateWorkspaceInvitation.test.ts [207L] — createInvitation(), expectWorkspaceLocks()
- handleCreateWorkspaceInvitation.ts [107L] — handleCreateWorkspaceInvitation()
- handleDeleteWorkspace.ts [58L] — handleDeleteWorkspace()
- handleDeleteWorkspaceInvitation.ts [27L] — handleDeleteWorkspaceInvitation()
- handleDeleteWorkspaceMember.ts [29L] — handleDeleteWorkspaceMember()
- handleGetWorkspace.ts [96L] Guests need navigation and bot availability context, not workspace billing data. — handleGetWorkspace()
- handleListInvitationsInWorkspace.ts [32L] — handleListInvitationsInWorkspace()
- handleListMembersInWorkspace.ts [45L] — handleListMembersInWorkspace()
- handleListWorkspaces.ts [20L] — handleListWorkspaces()
- handleUpdateWorkspace.ts [50L] — handleUpdateWorkspace()
- handleUpdateWorkspaceInvitation.test.ts [65L]
- handleUpdateWorkspaceInvitation.ts [33L] — handleUpdateWorkspaceInvitation()
- handleUpdateWorkspaceMember.ts [31L] — handleUpdateWorkspaceMember()
- router.ts [192L]
- workspaceReadAccess.test.ts [523L] SKIP_ENV_CHECK bypasses env transformations, including the ADMIN_EMAIL array.

## apps/builder/src/features/workspace/components/
- AddMemberForm.tsx [110L] — AddMemberForm(), WorkspaceRoleMenuButton()
- MemberItem.tsx [105L] — MemberItem(), MemberIdentityContent()
- PeopleList.tsx [152L] — PeopleList()
- SpacesList.tsx [225L] — SpacesList()
- WorkspaceDropdown.tsx [80L] — WorkspaceDropdown()
- WorkspaceMembersList.tsx [236L] — WorkspaceMembersList(), useSeatsLimit()
- WorkspaceSettingsDialog.tsx [177L] — WorkspaceSettingsDialog(), SettingsContent()
- WorkspaceSettingsForm.tsx [133L] — WorkspaceSettingsForm(), DeleteWorkspaceButton()

## apps/builder/src/features/workspace/helpers/
- getUserRoleInWorkspace.ts [16L] — getUserModeInWorkspace()
- isAdminWriteWorkspaceForbidden.ts [14L] — isAdminWriteWorkspaceForbidden()
- isReadWorkspaceFobidden.ts [2L]
- isWriteWorkspaceForbidden.ts [14L] — isWriteWorkspaceForbidden()
- parseNewName.ts [18L] — parseNewName()
- setWorkspaceIdInLocalStorage.ts [4L] — setWorkspaceIdInLocalStorage()

## apps/builder/src/helpers/
- compressFile.ts [45L]
- databaseRules.test.ts [46L]
- databaseRules.ts [92L] — canEditGuests(), canPublishFileInput(), isUniqueConstraintError()
- fetcher.ts [5L] — fetcher()
- focusInput.ts [13L] — focusInput()
- isCloudProdInstance.ts [15L] — isCloudProdInstance()
- isMac.ts [13L] — isMac()
- isMobile.ts [4L]
- isSelfHostedInstance.ts [17L] — isSelfHostedInstance()
- parseNumberToStringWithCommas.ts [3L] — parseNumberToStringWithCommas()
- preventUserFromRefreshing.ts [5L] — preventUserFromRefreshing()
- setMultipleRefs.ts [13L] — setMultipleRefs()

## apps/builder/src/hooks/
- useAutoSave.ts [33L] eslint-disable-next-line @typescript-eslint/no-explicit-any
- useDebounce.ts [2L]
- useEventListener.ts [94L] https://usehooks-ts.com/react-hook/use-event-listener — useEventListener(), useEventListener(), useEventListener(), useEventListener(), useEventListener()
- useInjectableInputValue.ts [32L] — useInjectableInputValue()
- useKeyboardShortcuts.ts [140L] — useKeyboardShortcuts(), cmdPlusKey()
- useOutsideClick.ts [46L]
- useRightPanel.ts [10L] — useRightPanel()
- useThemeValue.ts [7L]
- useTimeSince.ts [33L] — useTimeSince()

## apps/builder/src/i18n/
- de.json [243L]
- el.json [469L]
- en.json [628L]
- es.json [248L]
- fr.json [530L]
- it.json [469L]
- pt-BR.json [532L]
- pt.json [324L]
- ro.json [248L]

## apps/builder/src/lib/
- queryClient.ts [80L] — showHttpRequestErrorToast()
- toast.tsx [46L] — toast()
- tolgee.tsx [44L]

## apps/builder/src/pages/
- _app.tsx [91L] — App()
- _document.tsx [22L] — Document()
- _error.tsx [37L] NOTE: This requires `@sentry/nextjs` version 7.3.0 or higher.
- feedback.tsx [41L] — Page(), getServerSideProps(), createSSOToken()
- onboarding.tsx [6L] — Page()
- past-due.tsx [29L] — Page()
- register.tsx [6L] — Page()
- signin.tsx [6L] — Page()
- suspended.tsx [34L] — Page()
- typebots.tsx [24L] — Page()

## apps/builder/src/pages/feedback/
- [feedbackId].ts [42L] — Page(), getServerSideProps(), createSSOToken()

## apps/builder/src/pages/oauth/
- redirect.tsx [22L] — Page()

## apps/builder/src/pages/publishing/
- index.tsx [25L] MASTER: Publicações (calendário/canais) — UI do subsistema publishing no mesmo p — PublishingPage()

## apps/builder/src/pages/signin/
- email-redirect.tsx [6L] — Page()

## apps/builder/src/pages/typebots/
- create.tsx [6L] — Page()

## apps/builder/src/pages/typebots/[typebotId]/
- duplicate.tsx [74L] — Page()
- edit.tsx [6L] — Page()
- results.tsx [6L] — Page()
- settings.tsx [6L] — Page()
- share.tsx [6L] — Page()
- theme.tsx [6L] — Page()

## apps/builder/src/pages/typebots/[typebotId]/results/
- analytics.tsx [22L] — getServerSideProps()

## apps/builder/src/pages/typebots/folders/
- [id].tsx [6L] — Page()

## apps/builder/src/pages/w/[workspaceId]/
- typebots.tsx [12L] — Page()

## apps/builder/src/scripts/
- generateOpenApiSpec.ts [21L]
- preloadOpenApiGenerationStubs.ts [34L] OpenAPI generation only traverses contracts and never runs handlers, so

## apps/docs/
- breaking-changes.mdx [26L]
- faq.mdx [65L] How Typebot executes the blocks between each user input?
- mint.json [393L]
- package.json [28L]
- report-abuse.mdx [32L]
- upcoming-changes.txt [9L]
- workspace.mdx [45L] Switch workspace

## apps/docs/api-reference/
- authentication.mdx [34L] Generate a token
- how-to.mdx [51L] How to find my `typebotId`

## apps/docs/api-reference/analytics/
- get-stats.mdx [5L]

## apps/docs/api-reference/billing/
- get-usage.mdx [5L]
- list-invoices.mdx [5L]

## apps/docs/api-reference/chat/
- continue-chat.mdx [5L]
- generate-upload-url.mdx [34L] data contains the presignedUrl and formData fields from the response
- save-logs.mdx [5L]
- start-chat.mdx [5L]
- start-preview-chat.mdx [5L]
- update-typebot-in-session.mdx [5L]

## apps/docs/api-reference/folder/
- create.mdx [5L]
- delete.mdx [5L]
- get.mdx [5L]
- list.mdx [5L]
- update.mdx [5L]

## apps/docs/api-reference/results/
- delete.mdx [5L]
- get.mdx [5L]
- list-logs.mdx [5L]
- list.mdx [5L]

## apps/docs/api-reference/typebot/
- create.mdx [5L]
- delete.mdx [5L]
- get-published-bot.mdx [5L]
- get.mdx [5L]
- import.mdx [5L]
- list.mdx [5L]
- publish.mdx [5L]
- unpublish.mdx [5L]
- update.mdx [5L]

## apps/docs/api-reference/user/
- update.mdx [5L]

## apps/docs/api-reference/workspace/
- create.mdx [5L]
- delete.mdx [5L]
- get.mdx [5L]
- list-members.mdx [5L]
- list.mdx [5L]
- update.mdx [5L]

## apps/docs/contribute/
- guidelines.mdx [19L] Pull requests
- overview.mdx [89L]

## apps/docs/contribute/guides/
- blog.mdx [70L] New article guidelines
- create-block.mdx [60L]
- documentation.mdx [54L] For a quick fix
- local-installation.mdx [68L] Get started
- translation.mdx [26L]

## apps/docs/contribute/the-forge/
- action.mdx [102L]
- auth.mdx [103L] Encrypted credentials
- block.mdx [78L]
- cli.mdx [12L]
- fetcher.mdx [113L] Define the fetcher in your action
- layout.mdx [33L]
- logo.mdx [0L]
- options.mdx [296L]
- overview.mdx [15L]
- run.mdx [283L] Handlers file structure

## apps/docs/deploy/api/
- overview.mdx [36L]

## apps/docs/deploy/web/
- blink.mdx [19L]
- custom-domain.mdx [35L]
- html-javascript.mdx [477L]
- iframe.mdx [15L]
- next-js.mdx [89L]
- overview.mdx [34L]
- react.mdx [89L]
- script.mdx [8L]
- webflow.mdx [48L] Advanced guides
- wordpress.mdx [77L] Excluded pages

## apps/docs/deploy/whatsapp/
- create-meta-app.mdx [25L] 1. Create a Facebook Business account
- overview.mdx [155L] Troubleshooting

## apps/docs/editor/
- context-menu.mdx [29L]
- export-import.mdx [17L]
- graph.mdx [40L] Select**: `Shift` + `Left click` drag
- publish.mdx [17L]
- share.mdx [17L]
- variables.mdx [145L] Save an answer in a variable

## apps/docs/editor/blocks/
- overview.mdx [45L]

## apps/docs/editor/blocks/bubbles/
- audio.mdx [37L]
- embed.mdx [59L]
- image.mdx [28L]
- text.mdx [37L]
- video.mdx [45L]

## apps/docs/editor/blocks/inputs/
- buttons.mdx [108L] Single choice
- cards.mdx [42L] Display cards from variables
- date.mdx [60L]
- email.mdx [32L]
- file-upload.mdx [49L]
- number.mdx [36L]
- payment.mdx [57L] Connect Stripe account
- phone-number.mdx [28L]
- picture-choice.mdx [16L]
- rating.mdx [59L]
- text.mdx [88L] Short text input
- time.mdx [37L]
- website.mdx [32L]

## apps/docs/editor/blocks/integrations/
- anthropic.mdx [54L] Create Message
- blink.mdx [124L] Authentication
- cal-com.mdx [11L] Prefill information
- chatwoot.mdx [62L] Requirements
- dify-ai.mdx [22L] Create Chat Message
- elevenlabs.mdx [10L] Convert text to speech
- gmail.mdx [46L] Authentication
- google-analytics.mdx [27L] Track conversions with Google Ads
- google-sheets.mdx [52L] How to add the submission date to my row?
- http-request.mdx [102L] Make an API request and fetch data
- make-com.mdx [55L] Return data from Make.com
- meta-pixel.mdx [15L]
- mistral.mdx [20L] Create chat completion
- nocodb.mdx [36L] How to find my `Table ID`?
- openai.mdx [167L] Create chat completion
- pabbly-connect.mdx [19L]
- posthog.mdx [18L] How to find my `Project API Key` and `API Host`?
- segment.mdx [26L] How to find my `Write Key`?
- send-email.mdx [38L]
- zapier.mdx [27L] Video tutorial
- zendesk.mdx [38L] Zendesk Messaging

## apps/docs/editor/blocks/logic/
- ab-test.mdx [22L] More than 2 paths
- condition.mdx [91L] Operators
- jump.mdx [11L]
- redirect.mdx [17L]
- return.mdx [30L] When should you use a Return block?
- script.mdx [85L] `setVariable` function
- set-variable.mdx [214L] Expressions with existing variables
- typebot-link.mdx [21L] Share variables between bots
- wait.mdx [21L] Pause the flow
- webhook.mdx [50L]

## apps/docs/editor/events/
- command.mdx [20L] Return to main flow
- invalid-reply.mdx [43L] Supported inputs
- reply.mdx [32L] Variable mapping

## apps/docs/get-started/
- introduction.mdx [25L]
- overview.mdx [16L]

## apps/docs/guides/
- external-messaging-apps.mdx [61L] How it works
- how-to-create-loops.mdx [18L]
- how-to-get-help.mdx [9L]
- how-to-split-ai-messages-in-multi-blocks.mdx [8L]
- mailer-lite.mdx [22L]
- multi-avatars.mdx [33L]
- rtl.mdx [23L]
- user-commands.mdx [53L] Reply event vs Command event
- utm-in-results.mdx [16L]

## apps/docs/images/blocks/integrations/
- make-com-save-in-variables.avif [219L]
- make-com-webhook-response.avif [249L]

## apps/docs/images/blocks/integrations/openai/
- vision.avif [197L] V+dyBAS_\t(̵i<8

## apps/docs/images/events/
- command.avif [221L]
- reply-event.avif [120L]

## apps/docs/images/results/
- transcript.avif [122L]

## apps/docs/results/
- analytics.mdx [26L] Definitions
- overview.mdx [64L] More options menu

## apps/docs/self-hosting/
- breaking-changes.mdx [38L] Google variables renamed
- configuration.mdx [429L]
- get-started.mdx [108L]
- troubleshoot.mdx [24L] My workspace is showing Free plan and 200 chats limit

## apps/docs/self-hosting/deploy/
- alibaba-cloud.mdx [47L] Requirements
- docker.mdx [393L] Requirements
- manual.mdx [164L] Requirements
- vercel.mdx [68L] Requirements

## apps/docs/self-hosting/guides/
- planetscale.mdx [17L]
- s3.mdx [136L]

## apps/docs/settings/
- overview.mdx [84L] Typing emulation
- remember-user.mdx [16L]

## apps/docs/snippets/
- loom-video.mdx [24L]
- youtube-video.mdx [24L]

## apps/docs/theme/
- font.mdx [27L] How to import my own font?
- overview.mdx [96L] Publish** button to propagate the change.

## apps/docs/user/
- credentials.mdx [17L]
- delete-account.mdx [7L]
- preferences.mdx [35L] Change language

## apps/docs/workspace/
- add-members-and-guests.mdx [41L] How to invite admins and members
- subscription.mdx [69L] Upgrade plan

## apps/landing-page/
- content-collections.ts [130L]
- package.json [62L]
- tsconfig.app.json [67L]
- tsconfig.json [14L]
- tsconfig.spec.json [37L]
- vercel.json [21L]
- vite.config.ts [33L] https://github.com/prisma/prisma/issues/12504

## apps/landing-page/content/
- business-continuity.mdx [52L] Built for the Long Term
- privacy-policy.mdx [173L] Who is responsible for the processing?
- terms-of-service.mdx [132L] Account terms

## apps/landing-page/content/blog/
- add-chatbot-to-wordpress.mdx [186L] How to Install a Chatbot on Your WordPress Site
- ai-chatbot-for-hotels.mdx [302L] Understanding AI Chatbots for Hotels
- ai-lead-qualification.mdx [305L] How AI lead qualification differs from manual lead qualification
- ai-open-source-tools.mdx [238L] [Open-source](./open-source-chatbots.mdx) AI tools** offer powerful solutions wi
- appointment-scheduling-chatbot.mdx [512L] What It Is and Why Your Business Needs One
- automated-lead-qualification.mdx [247L] Why Automated Lead Qualification Matters
- b2b-chatbot-use-cases.mdx [303L] Automate Lead Generation and Qualification 24/7 with a Conversational Chatbot
- b2b-lead-qualification.mdx [313L] What is B2B Lead Qualification?
- benefits-ai-chatbot.mdx [169L] Benefits of AI Chatbots for Customers
- best-ai-form-builders.mdx [515L] What Is an AI Form Builder?
- best-ai-productivity-tools-2026.mdx [734L] Why AI Productivity Tools Matter in 2026
- best-chatbot-builder.mdx [470L] Key Features to Look for in the Best Chatbot Builder
- best-chatbot-for-lead-generation.mdx [525L] Potential Use Cases for Lead Generation Chatbots
- best-chatbot-for-wordpress.mdx [331L] Seamless communication with customers is crucial for business success**. As more
- best-contact-form-plugins-for-wordpress.mdx [416L] Quick Comparison Table
- best-crm-for-shopify.mdx [329L] Endear CRM
- best-marketing-chatgpt-prompts.mdx [655L] Overview of the Top ChatGPT Prompts for Marketing Tasks
- best-no-code-website-builder.mdx [353L] What is a No-Code Website Builder?
- best-shopify-chatbot.mdx [306L] Why Every Shopify Store Needs the Best Chatbot for Shopify in 2026
- best-whatsapp-ai-chatbot.mdx [605L] Comparison table: best WhatsApp AI chatbots at a glance
- best-whatsapp-automation-tool.mdx [733L] This guide reviews the 10 best WhatsApp automation tools.** You'll discover whic
- best-whatsapp-chatbot.mdx [199L] Did you know that over 2 billion people use WhatsApp worldwide?** With such a ma
- botpress-alternative.mdx [289L] How to Evaluate a Botpress Alternative: Criteria and Scoring
- build-ai-chatbot-with-custom-knowledge-base.mdx [470L] Understanding AI Chatbots and Custom Knowledge Bases
- chatbot-automation.mdx [351L] The chatbot automation problem: why manual handling doesn't scale
- chatbot-best-practices.mdx [296L] The Evolution and Importance of Modern Chatbots
- chatbot-com-alternatives.mdx [248L] Why You May Need a Chatbot.com Alternative
- chatbot-faq-example.mdx [344L] Definition of an FAQ chatbot and its role in customer service
- chatbot-for-internal-employees.mdx [339L] Why internal employee chatbots are transforming workplace efficiency
- chatbot-for-lead-qualification-in-real-estate.mdx [354L] Why manual lead qualification fails (and how chatbots solve it)
- chatbot-for-real-estate-agents.mdx [458L] Why Every Real Estate Agent Needs a Chatbot in 2025
- chatbot-for-whatsapp-business.mdx [443L] What is a chatbot for WhatsApp Business and why it matters
- chatbot-hr-use-cases.mdx [346L] Transform HR Processes With Typebot’s Customizable Chatbot Builder
- chatbot-marketing-examples.mdx [222L] Real-World Chatbot Marketing Examples That Convert**
- chatbot-marketing-use-cases.mdx [241L] Top of funnel (awareness & discovery)
- chatbot-script-examples.mdx [438L] Chatbot Script Examples
- chatbot-survey-questions.mdx [470L] What Are Chatbot Surveys and Why Should You Use Them?
- chatbot-use-cases-in-retail.mdx [303L] The growing impact of AI on retail communication
- chatbot-use-cases.mdx [272L] Customer Service and Support Use Cases
- chatfuel-alternatives.mdx [227L] What is Chatfuel?
- chatfuel-vs-manychat.mdx [563L] Quick Verdict: Chatfuel vs ManyChat
- collecting-customer-feedback-methods.mdx [410L] Why collecting customer feedback is the competitive advantage your business need
- conversational-lead-generation.mdx [274L] Conversational lead generation: what it is, how it works, and when to use it
- create-whatsapp-chatbot.mdx [491L] What Is a WhatsApp Chatbot?
- customer-success-manager-job-description.mdx [294L] What is a Customer Success Manager?
- ecommerce-chatbot.mdx [395L] What is an Ecommerce Chatbot?
- faq-chatbot.mdx [343L] What if you could build a powerful AI assistant in minutes—without writing a sin
- feedback-chatbot.mdx [279L] What is a feedback chatbot?
- flowise-alternatives.mdx [439L] What is Flowise and Why Look for Alternatives?
- free-chatbot-for-small-business.mdx [522L] What "free" really means: free vs freemium chatbots for small business
- how-to-accept-payment-on-whatsapp-business.mdx [169L] Understanding WhatsApp Business Payments
- how-to-add-chatbot-in-wordpress.mdx [348L] What a WordPress chatbot is and why to add one
- how-to-add-chatbot-to-website.mdx [335L] Why Every Website Needs a Chatbot in 2025**
- how-to-build-a-rag-chatbot.mdx [465L] What is a RAG chatbot and why it outperforms standard chatbots
- how-to-build-faq-chatbot.mdx [435L] Let's define an FAQ chatbot first
- how-to-build-whatsapp-chatbot.mdx [396L] What is a WhatsApp chatbot and why you need one
- how-to-collect-customer-feedback.mdx [301L] Why collecting customer feedback is critical in 2026
- how-to-collect-customer-reviews.mdx [425L] Why customer reviews matter for your business growth
- how-to-create-a-product-recommendation-quiz-shopify.mdx [244L] Building your product recommendation quiz with Typebot
- how-to-create-chatbot-for-beginners.mdx [364L] Understanding the basics of chatbots for beginners
- how-to-create-multi-step-form-in-webflow.mdx [250L] Comparing the methods for building a multi-step form in Webflow
- how-to-generate-leads-on-whatsapp.mdx [250L] Comparing open rates and response times with traditional email
- how-to-set-auto-reply-in-whatsapp.mdx [618L] How to set up auto-reply in WhatsApp Business App
- how-to-use-whatsapp-for-lead-generation.mdx [506L] The Numbers That Prove WhatsApp’s Dominance
- html-form-generator.mdx [359L] How to Use the HTML Form Builder
- landbot-alternative.mdx [122L] Chatbots have become an essential tool for modern businesses looking to enhance 
- lead-generation-chatbot.mdx [311L] Lead generation chatbots** have become an essential tool for businesses looking 
- lead-generation-form-builder.mdx [251L] What a lead generation form builder is and why it matters
- lead-generation-form-examples.mdx [458L] What is a Lead Generation Form?
- lead-generation-quiz.mdx [284L] A lead generation quiz and its purpose
- lead-qualification-checklist.mdx [470L] What is lead qualification and why it matters for sales success
- lead-qualification-questions.mdx [495L] Understanding Lead Qualification Fundamentals
- lead-qualification-tools.mdx [457L] 1. Typebot: The Visual Conversational Lead Qualification Platform
- livechat-vs-chatbot.mdx [223L] Here are the key differences between a chatbot and a livechat in a nutshell:**
- manychat-alternatives.mdx [210L] Why Consider ManyChat Alternatives?
- marketing-automation-chatbot.mdx [284L] What is a Marketing Automation Chatbot?
- meta-workplace-alternatives.mdx [284L] Context of Meta Workplace Shutdown
- n8n-whatsapp-bot-tutorial.mdx [398L] Creating a Meta Business account and setting up the WhatsApp API
- open-source-chatbots.mdx [262L] Open-source chatbots** empower businesses to create customizable and cost-effect
- quiz-funnel-examples.mdx [247L] What is a quiz funnel and how does it work
- react-chatbot.mdx [780L] What is a React Chatbot?
- react-website-builder.mdx [279L] Builder.io: The Enterprise-Grade Visual Headless CMS
- real-estate-ai-chatbot.mdx [267L] That's the power of AI chatbots in real estate.**
- train-chatbot-on-your-own-data.mdx [241L] Getting started
- typebot-is-now-fair-source.mdx [69L]
- typeform-vs-google-form.mdx [638L] Overview of Typeform and Google Forms
- upsell-using-ai-chatbot.mdx [472L] Understanding AI Chatbots for Upselling
- voiceflow-alternatives.mdx [531L] Voiceflow is powerful, but that power comes with complexity and cost that don't 
- voiceflow-vs-flowise.mdx [463L] What Are Voiceflow and Flowise?
- webflow-chatbot.mdx [253L] Integrating Typebot with Webflow
- webflow-free-templates.mdx [511L] SaaS Webflow Templates
- webflow-popup-contact-form.mdx [243L] Setting Up the Popup Form Structure
- whatsapp-ai-agent.mdx [266L] Understanding WhatsApp AI Agents
- whatsapp-api-use-cases.mdx [648L] What is WhatsApp Business API?
- whatsapp-automation-chatbot.mdx [464L] What is a WhatsApp automation chatbot and how does it work**
- whatsapp-b2b-marketing.mdx [309L] Why WhatsApp works for B2B
- whatsapp-business-api-pricing.mdx [228L] Overview of WhatsApp Business API Pricing
- whatsapp-business-api-providers.mdx [578L] Understanding the 3-layer WhatsApp ecosystem: API, chatbots, and operations
- whatsapp-business-automated-messages.mdx [583L] What Are WhatsApp Business Automated Messages?
- whatsapp-business-benefits.mdx [183L] Top Benefits of WhatsApp Business
- whatsapp-chat-shopify.mdx [423L] Why add WhatsApp chat to your Shopify store
- whatsapp-chatbot-cost.mdx [306L] How much does a WhatsApp chatbot cost in 2026
- whatsapp-chatbot-example.mdx [471L] What is a WhatsApp chatbot and why your business needs one
- whatsapp-chatbot-use-cases.mdx [367L] Transform Your Customer Support With a WhatsApp Chatbot
- whatsapp-lead-generation.mdx [443L] What is WhatsApp lead generation and why it works
- whatsapp-marketing-for-restaurant.mdx [330L] Why WhatsApp marketing works for restaurants
- whatsapp-marketing-strategies.mdx [355L] What WhatsApp marketing is and why it delivers results

## apps/landing-page/content/faq/
- are-chat-bots-illegal.mdx [8L]
- can-i-automate-whatsapp-business.mdx [16L] Basic automation (free)
- can-i-create-a-whatsapp-chatbot-for-free.mdx [8L]
- can-i-train-a-chatbot-with-my-own-data.mdx [12L]
- does-whatsapp-business-have-chatbots.mdx [12L]
- how-can-chatbots-be-used-for-marketing.mdx [17L]
- how-do-i-enable-the-reply-option-in-whatsapp.mdx [18L]
- how-does-chatbot-automation-work.mdx [20L] Rule-based chatbots
- how-to-build-a-knowledge-base-for-ai-chatbot.mdx [16L]
- how-to-chat-ai-on-whatsapp-business.mdx [28L] 1. Get WhatsApp Business API access
- how-to-generate-leads-from-whatsapp.mdx [16L]
- how-to-get-real-estate-leads-with-ai.mdx [16L]
- how-to-qualify-real-estate-leads.mdx [16L]
- how-to-set-up-quick-replies-on-whatsapp.mdx [16L]
- how-to-use-ai-to-qualify-leads.mdx [10L]
- is-being-a-bot-illegal.mdx [10L]
- is-whatsapp-automation-illegal.mdx [10L]
- what-are-the-3-best-ai-chatbots.mdx [20L] 1. OpenAI GPT-4
- what-are-the-5-requirements-for-a-qualified-prospect.mdx [16L]
- what-are-the-four-types-of-chatbots.mdx [27L] 1. Rule-based chatbots
- what-are-the-tools-to-automate-whatsapp-messages.mdx [22L] Typebot** – Open-source visual builder with native WhatsApp deployment, free tie
- what-criteria-do-you-use-to-qualify-leads.mdx [10L]
- what-is-a-chatbot-for-lead-qualification.mdx [10L]
- what-is-a-good-lead-qualification-rate.mdx [8L]
- what-is-ai-marketing-automation.mdx [10L]
- what-is-an-ai-chatbot-for-internal-employees.mdx [10L]
- which-ai-is-best-for-whatsapp.mdx [8L]
- which-chatbot-is-best-for-marketing.mdx [20L] Typebot** – Open-source visual builder, excellent for lead generation, quizzes, 

## apps/landing-page/public/
- robots.txt [5L]

## apps/landing-page/public/blog-assets/
- chatbot-survey-industry-examples.avif [309L]
- embed-options-standard-popup-bubble.avif [67L]
- typebot-builder.avif [944L] y_Pkw Xkthy4Lرn'gܢԺ&|V`+d6*2H`l7r?m7#z
- typebot-chatbot-builder-v2.avif [629L]
- typebot-discord.avif [125L]
- typebot-integrations.avif [262L]
- typebot-website.avif [1065L] iL.t5ZktAp{&e(uS`

## apps/landing-page/public/blog-assets/ai-chatbot-for-hotels/
- ai-hotel-chatbot-welcome-message.avif [582L] 'q,}mEf"M{ʀ{.U5챻&g5Z$3rpLQ1?qw"b	1U<*E)>e j ZmF:o'	G#m<'~<smY]3z7QQ	cy
- chatbot-actions.avif [1328L]
- chatbot-recommendations.avif [360L]
- hotel-chatbot-followup-actions.avif [360L]
- openai-configuration-chatbot.avif [1150L]
- typebot-button-configuration.avif [862L]

## apps/landing-page/public/blog-assets/ai-lead-qualification/
- ai-chatbot-workflow-diagram.avif [469L]
- ai-lead-qualification-bot.avif [751L]
- ai-lead-qualification-workflow-example-2.avif [233L]
- ai-lead-qualification-workflow-example.avif [652L]
- ai-lead-qualification-workflow.avif [257L]
- cover.avif [270L]
- embed-your-typebot.avif [204L]
- flowchart-for-lead-generation.avif [843L]
- framer-website-embed-options.avif [119L]
- google-sheets-ai-lead-qualification.avif [479L]
- integrations-and-makecom-selected.avif [309L]
- typebot-interface-calendar-booking.avif [358L]

## apps/landing-page/public/blog-assets/ai-open-source-tools/
- flowise-ai.avif [1724L]

## apps/landing-page/public/blog-assets/appointment-scheduling-chatbot/
- app-theme-customization-options.avif [211L]
- booking-process-flow-chart.avif [156L]
- cal-com-integration-booking.avif [350L]
- cover.avif [231L]
- customer-review-collector-workflow.avif [406L]
- landbot-io-logo.avif [63L]
- manychat-logo-black-text.avif [33L]
- monkey-face-logo-cartoon.avif [48L]
- service-selection-menu-ux.avif [109L]
- tidio-logo-blue-bubbles.avif [47L]
- website-integrations-and-logos.avif [191L] =be	hH3F^N5IJ9FGm,ߐEڼ;blSys5ɞ/oδʴ5 ^R "eQ7F0q4pRHX%Jۚ^71ʴ>gs
- workflow-design-software-interface.avif [303L] gylz4c^3w+MG(ݯSȝ~̘^U?p<7s'NJTc7N$hûV5),Thp{ho%C^7޴YOtrڅóIԜ(|0&b

## apps/landing-page/public/blog-assets/automated-lead-qualification/
- account-create-api-token.avif [129L]
- ai-results-configuration-form.avif [55L]
- api-input-form-example.avif [55L] MT(g@E Zx7frƕB`Wr
- bubble-text-element-workflow.avif [76L] :<[7?Pz6+xisC_\
- company-size-selection-options.avif [33L]
- contacts-management-page-interface.avif [308L]
- cover.avif [252L]
- create-new-typebot-options.avif [35L]
- email-input-arrow-group-3.avif [69L]
- flow-chart-design-interface.avif [36L]
- flowchart-integration-make-com.avif [584L]
- google-sheets-ai-results.avif [69L]
- google-sheets-integration-flow.avif [106L]
- hubspot-crm-settings-panel.avif [280L]
- openai-create-chat-completion.avif [77L]
- response-configuration-panel.avif [14L]
- typebot-app-integration-screen.avif [414L]
- typebot-create-a-webhook.avif [344L]
- typebot-create-connection-modal.avif [237L] ]dA$d\5'bs(,vz
- typebot-hubspot-crm-integration.avif [165L]
- ui-settings-form-project-needs.avif [67L]
- webhook-executed-successfully.avif [23L]
- workflow-builder-ui-design.avif [376L]

## apps/landing-page/public/blog-assets/b2b-chatbot-use-cases/
- additional-information-type-answer.avif [51L]
- chatbot-returns-information.avif [118L] WphM8^6$$Cm&]|lHTg~q+!672d=3:\	=o QPD5v=S8hC
- cover.avif [255L]
- create-a-typebot-button.avif [32L] QV55FE
- email-input-form-example.avif [64L]
- employee-self-service-interface.avif [434L]
- flowchart-example-survey-sequence.avif [319L] F¸"wUTDU)UMh.#Y_t&q7V^嗔)!d-80MmIcZȗ\ea>!e``@0g<X \7\0	4ӎPw ~$
- scheduling-a-secret-meeting.avif [205L]
- services-selection-user-interface.avif [85L]
- ui-form-input-fields.avif [114L] -9Bҍ"40B(>kƆr{z-k5&_x[X3թjI
- welcome-workflow-diagram-aa.avif [163L]

## apps/landing-page/public/blog-assets/b2b-lead-qualification/
- add-groq-account-form.avif [86L]
- bant-framework-lead-scoring.avif [138L]
- bant-framework-sales-prompt.avif [214L]
- chatbot-configuration-interface-budget-variable.avif [129L]
- cover.avif [249L]
- create-a-typebot-option.avif [42L]
- create-chat-completion-ui.avif [55L]
- flowchart-with-decision-points.avif [154L]
- form-fields-budget-authority-ai.avif [49L]
- lead-qualification-funnel-diagram.avif [147L] dXkf9 뜞-pPRK5']Ћ{Ct ҳ +)XKl֜>cHo렆)#'MZ-loc<NuxۙjDKE-%&o)݆Pvw(y
- save-response-ui-element.avif [29L]
- ui-settings-authority-variable.avif [128L]

## apps/landing-page/public/blog-assets/best-ai-form-builders/
- ai-form-builder-interface.avif [189L]
- ai-form-creation-tool.avif [442L]
- ai-form-generator-website.avif [263L]
- feathery-logo-on-gradient-background.avif [64L]
- fillout-ai-generated-form.avif [118L]
- fillout-forms-logo.avif [81L]
- form-creation-interface-screen.avif [412L]
- formester-ai-form-builder.avif [402L] (2$;_M"2Nk}IVɸkN`Vօ4/
- formester-logo-purple-ninja.avif [48L]
- involve-me-logo.avif [93L]
- jotform-ai-form-generator.avif [436L]
- jotform-ai-generated-form.avif [184L]
- jotform-logo.avif [68L]
- typeform-ai-generated-form.avif [74L]
- typeform-logo.avif [22L]
- weavely-logo-dark-background.avif [40L]

## apps/landing-page/public/blog-assets/best-ai-productivity-tools-2026/
- ai-business-plan-generator.avif [133L]
- ai-coding-interface-gpt-5.avif [30L]
- ai-video-generator-website-screenshot.avif [188L] 4kc+񌎄h  ,E3IYlyJK?<5@}Zǁ돂Iqj^z^Koed>5qlZ[ \Δߙ0) BUgT
- anybiz-homepage-ai-sales-agents.avif [142L]
- cover.avif [228L]
- make-ai-website-screenshot.avif [124L] nHRhK[%x !4w!V 08Um\42
- marlee-website-screenshot.avif [442L]
- motion-website-ai-productivity-platform.avif [151L]
- nifty-ai-productivity-tool.avif [120L]
- notion-website-screenshot.avif [171L]
- opusclip-ai-video-clipping-tool.avif [165L]
- otter-ai-website-screenshot.avif [111L]
- planable-social-media-calendar.avif [144L] ݍ211q7[osCM V\ޙs۫~xv.3D3TOJ-xq鶏!lk|mf7K6ts՘(-8)дa	ۄ{;NOӠb6'# gV3 };
- reclaim-ai-website-homepage.avif [89L] JH(I[(06u Wim$C hC&ɪgO;&􏁤͓b|MkܐPM&L&_J|`2YGq	Q]=ClU;/ST?@;9zˆc
- referralcandy-home-page-website.avif [120L]
- replit-agent-ai-tool.avif [56L] ܬ7xo9Xa9KjԮiY<ImGTumE:"гyjV~(]rH-]Q:H!ܩ}+dᨪ<ꡁs{B
- tactiq-ai-productivity-tool.avif [119L]
- warmy-email-deliverability-tool.avif [153L]
- zapier-website-screenshot.avif [75L]
- zovoro-ai-chat-tool.avif [51L]

## apps/landing-page/public/blog-assets/best-chatbot-builder/
- botpress-website.avif [382L]
- chatbot-com-interface.avif [524L]
- chatbot-com-website.avif [1594L]
- collect-chat-website.avif [162L]
- cover.avif [411L]
- landbot-website.avif [872L]
- manychat-builder.avif [308L]
- manychat-website.avif [235L]
- tidio-builder.avif [526L]
- tidio-website.avif [362L]

## apps/landing-page/public/blog-assets/best-chatbot-for-lead-generation/
- account-creation-options-form.avif [141L]
- arrow-pointing-to-text.avif [220L]
- cal-book-event-settings.avif [103L]
- chatbot-flow-diagram-example.avif [211L]
- condition-logic-button.avif [170L] nB%l}~Ոxo}Bn)&a"b7=oɥW\$O_		%VLt:#;1LWK7sIﵐHwe͹9RtĿlOBΞ
- cover.avif [251L]
- create-a-new-typebot.avif [64L] Apx7wǫ?Og}g;$C?p:?tMNN/O. [?	G3-pеTX1=>	8_,cfZ̖6v;7q2Ģ$;E1ܯW.㊱
- drift-logo-with-lightning-bolt.avif [33L]
- integrations-and-start-button.avif [228L] O҅\dBHAvDAܒCEGmƠ?w6Y;Lt(w]()1FhTy>bh~8^Ze
- intercom-logo-blue-square.avif [76L] GG܎!HWEz^A\b{1a 
- landbot-logo.avif [53L]
- make-com-configuration-screen.avif [126L] mpQ#8Ϥ5م9Fiw]jXLw&;ݠGMe8
- script-options-standard-popup-bubble.avif [71L]
- spreadsheet-automation-workflow-tool.avif [84L] &hbm<o{m'8q܋2TR]D̪-)}1i I/%1U=臟|s$fKAԂ8o隸;Xv8z',Os	xC"<(NcOTҼC3F
- tidio-logo-brand-mark.avif [46L]
- typebot-create-a-webhook.avif [323L]
- typebot-embed-integrations-list.avif [180L]
- ui-form-lead-capture.avif [183L]

## apps/landing-page/public/blog-assets/best-chatbot-for-wordpress/
- acobot-website-landing-page.avif [143L]
- botsify-website-screenshot.avif [247L]
- botstar-chatbot-builder-website.avif [181L]
- chatty-mango-website-screenshot.avif [101L]
- drift-website-landing-page.avif [256L]
- intercom-website-ai-first.avif [261L]
- wpbot-website-homepage-snapshot.avif [193L]

## apps/landing-page/public/blog-assets/best-contact-form-plugins-for-wordpress/
- appointment-form-builder-interface.avif [385L]
- contact-form-editing-interface.avif [304L]
- cover.avif [193L] 10'xm`Рw-lbޯ7A@eҁ64mn~3AH*rIDY~ߥԱ?U)OFevtxcְւϦ$ ~<gF{60-l9i!NT@/^}ņ
- form-builder-interface-screenshot.avif [548L] f#TP5R`߻;qϳ7/ڵ
- form-builder-interface.avif [169L]
- form-general-settings-panel.avif [228L] :k^`̦|Ry3Qy@5qR-'}JrF;2x
- typebot-chat-bot-plugin.avif [213L]
- typebot-forms-builder-interface.avif [260L]
- wordpress-form-builder-interface.avif [102L]

## apps/landing-page/public/blog-assets/best-no-code-website-builder/
- carrd-editor.avif [2244L]
- elementor-editor.avif [228L]
- notion-sites-editor.avif [1735L]
- squarespace-nocode-editor.avif [585L]
- wix-nocode-editor.avif [1477L]

## apps/landing-page/public/blog-assets/best-shopify-chatbot/
- chatbot-comparison-summary-table.avif [113L] |j ܬЈIZR*Ug 7:vފ55X8et#oz*j%Ӄܲ^F;bX5U?
- chatbot-flow-builder-ui.avif [234L]
- cover.avif [144L]
- create-a-typebot-button.avif [26L]
- customer-journey-illustration-diagram.avif [743L]
- email-signup-10-percent-off.avif [55L]
- headphones-offer-options-group.avif [84L] OQ<W?	{ʳ!	QN~°?݁G`˿wvg'v%0XjGbA
- headphones-sale-prompt-yes-selected.avif [77L]
- redirect-logic-button.avif [70L]
- shipping-and-returns-info.avif [94L]
- shopify-product-page-mockup.avif [390L]
- tidio-customer-support-example.avif [570L] ~X?DG+3kO zIzLIR՞3sa!!/p|A*FH1D X5n^c7P2_rᜋ4ӲeBJ"<<So COGR
- typebot-flow-builder-interface.avif [425L]
- woman-using-social-media-tool.avif [914L]

## apps/landing-page/public/blog-assets/best-whatsapp-ai-chatbot/
- aisensy-landing-page.avif [1107L]
- cover.avif [186L]
- freshchat-homepage-screenshot.avif [1015L] TZ.{PT	@dX_MaSAE_vL+Mv0l
- whatsapp-business-app-vs-api-illustration.avif [1344L]
- whatsapp-business-application-iphone-screenshots.avif [1193L]

## apps/landing-page/public/blog-assets/best-whatsapp-automation-tool/
- brevo-marketing-automation-platform.avif [880L]
- chatbase-ai-agents-website.avif [290L]
- cover.avif [263L]
- flowcart-whatsapp-automationtool-landing-page.avif [412L]
- omnichat-ai-agent-platform.avif [573L] ]j\o%,0o Xo[oI&RLdSB֥cMD6~WJcF\;v5-F
- wanotifier-landing-page-snapshot.avif [511L]
- wati-messaging-app-interface.avif [552L] ҕbS3|\Nb頻4:smMljfbdrMLVaR_d3Y0qݼRIA1e)ݯB:\r^pOؠ,3MJ
- wati-website-landing-page.avif [433L]
- whatsapp-crm-extension-interface.avif [575L]
- whatsapp-support-conversation-example-built-with-typebot.avif [625L]

## apps/landing-page/public/blog-assets/best-whatsapp-chatbot/
- contact-variable-selection-workflow.avif [295L]

## apps/landing-page/public/blog-assets/botpress-alternative/
- agentic-workflow-diagram-interface.avif [669L]
- ai-agent-workflow-diagram.avif [438L]
- bot-building-interface.avif [172L]
- chatbot-website-settings-screen.avif [464L]
- cover.avif [165L] 8LߡX4 6dd{!'t6%ImV@3\e+OnQ{_@8
- logic-menu-options-list.avif [48L]
- tidio-dashboard-user-interface.avif [720L]
- typebot-chat-interface-design.avif [256L]
- whatsapp-automation-setup-guide.avif [406L]

## apps/landing-page/public/blog-assets/build-ai-chatbot-with-custom-knowledge-base/
- configure-flowise-deployment-render.avif [102L] mnF'Q/E9Ճ
- cover.avif [260L]
- cronjob-configuration.avif [223L]
- cronjob-create-cron.avif [77L]
- example-notion-knowledge-base.avif [324L]
- flowise-complete-flow.avif [617L]
- get-endpoint-from-flowise.avif [38L] }u׷̏SkS4Ci²}-Ŷ)gY?.&	xPF]$})f@IM9>yUuD\UKrv@Y݁Fзv2q~YJ,4gfM
- notion-loader-with-markdown-splitter.avif [256L] %)-DspxC랅pܷ\ڋdZTղFVUъxLtBP?Zj.9OF=+0Vף:5 Roi8,iq"]Ow^l<<$/:7JTBTL
- render-auth-environment-variables.avif [100L]
- render-deployment-type.avif [51L]
- render-service-url.avif [56L]
- select-notion-loader-flowise.avif [88L]
- typebot-flow-using-flowise.avif [97L]
- typebot-http-request-config.avif [138L]
- upsert-knowledge-base-flowise.avif [28L] :}NBqn&Tl"n{[rl,5LѮ)A

## apps/landing-page/public/blog-assets/chatbot-automation/
- OpenAI-logo.avif [263L]
- chatbot-quiz-marketing-questions.avif [133L]
- cover.avif [243L]

## apps/landing-page/public/blog-assets/chatbot-faq-example/
- Example-of-dynamic-faq-chatbot.avif [305L]
- ask-assistant-action-menu.avif [131L]
- chatbot-conversation-flow-diagram.avif [231L]
- chatbot-conversation-with-emma.avif [413L]
- chatbot-faq-example-settings.avif [145L]
- chatbot-settings-interface.avif [264L]
- cover.avif [241L]
- creating-chatbot-assistant.avif [156L]
- custom-css-window-chatbot.avif [162L]
- oayment.avif [250L] bQq٧0h(zȚ:7F'q-lIaʝ\JQr0g]a[<wIzaJagii!qنkrp ;F_<[dI/ 0Iss}Vg
- openai-integration-option-highlighted.avif [426L]
- react-standard-chatbot-embed.avif [298L] <uO"4窺ӗb{Q: S*ez>y|sBh7q՗0IhCb5Ө>dBHY\~wJ,0\Z̟c
- share-test-publish-buttons.avif [34L]
- typebot-faq-example.avif [970L]
- virtual-agent-chatbot-screen.avif [360L]
- vodafone-tobi-chatbot-interface.avif [523L] `|.B	(&֨막S
- who-healthalert-chatbot.avif [1345L]

## apps/landing-page/public/blog-assets/chatbot-for-internal-employees/
- chatbot-it-helpdesk-conversation.avif [1597L]
- chatbot-onboarding-conversation.avif [495L]
- cover.avif [222L]

## apps/landing-page/public/blog-assets/chatbot-for-lead-qualification-in-real-estate/
- chatbot-workflow-qualification-schedule.avif [117L]
- confirmation-user-visit-scheduled.avif [57L]
- cover.avif [294L]
- integrations-app-icons.avif [178L] KՓ"x๔jW[ߋGYqyk6j8;߆э
- no-code-workflow-tool.avif [275L]
- react-standard-configuration-code.avif [183L]
- software-configuration-workflow-view.avif [70L]
- typebot-flow-diagram-interface.avif [692L]
- user-choice-variable-select.avif [190L] I21j['y8㫭T*\UjFqMV6]lq#A!|o­*
- whatsapp-integration-typebot-embed.avif [173L]

## apps/landing-page/public/blog-assets/chatbot-for-real-estate-agents/
- chatbot-flow-diagram-ui.avif [172L]
- chatbot-flow-diagram.avif [116L] )1eo˒6iCMSedCQ,BjJ{q:e,zq9%z!\m&" 
- chatbot-scheduling-property-viewing.avif [171L] P?B?eڃO>13U]N[̓:I-/2炙[Y3.Nk}(-͞dIb* 2['"0D@q+UBXzGa!Lx@X2hl+b-<ۦ
- chatbot-time-collection-settings.avif [103L] +0675]h)k=/U:0ZrODkdI}I2OU]4tjh`frl ՗"iơ =).x%#vT"X
- cover.avif [324L]
- date-input-form-ui.avif [145L]
- flowchart-property-viewing-scheduling.avif [253L]
- form-with-data-fields.avif [67L] ϡ4pǉr?넝Ww|'L?wګr[^.Ԗ-k5}K/>-Ɯ3g_5 *Of
- group-7-confirmation-message.avif [141L]
- phone-number-input-form.avif [205L]
- react-bubble-code-snippet.avif [176L]
- settings-panel-user-name.avif [111L]
- typebot-example-analytics-flow-chart.avif [204L]
- typebot-sheet-interface.avif [56L]

## apps/landing-page/public/blog-assets/chatbot-for-whatsapp-business/
- cover.avif [290L]
- whatsapp-business-app-screenshots.avif [955L]

## apps/landing-page/public/blog-assets/chatbot-hr-use-cases/
- bubbles-content-options-menu.avif [40L] og&n?44,Svk{ܯ;P^L RxO
- chatbot-interface-design-2023.avif [152L]
- cover.avif [192L]
- date-input-configuration-panel.avif [100L] `"9Ҽ*%^#N
- form-input-settings-name.avif [131L]
- form-with-name-date-time.avif [59L]
- integrations-sheets-analytics-email-zapier.avif [129L]
- performance-feedback-assistant-message.avif [77L]
- spreadsheet-name-date-time.avif [23L] ZYH%ZW{ӗ(|;7&<MkbR߹nکyIF4$DO\Nƞ)!'uDvX6g%h5.CeXq2RoyZ%bAe%4y
- time-input-form.avif [56L]
- workflow-diagram-user-interface.avif [314L]

## apps/landing-page/public/blog-assets/chatbot-marketing-examples/
- app-integration-options-icons.avif [189L]
- app-integrations-list.avif [161L]
- camping-world-rv-sales.avif [1010L]
- cover.avif [290L]
- flowchart-automation-workflow-tool-ui.avif [541L]
- insomnobot-3000-can-t-sleep.avif [752L]
- phone-app-food-order.avif [217L]
- wsj-ai-tax-bot.avif [609L]

## apps/landing-page/public/blog-assets/chatbot-marketing-use-cases/
- chatbot-use-case-per-funnel.avif [2607L]
- cover.avif [250L]
- whatsapp-chat-support-conversation-example.avif [625L]

## apps/landing-page/public/blog-assets/chatbot-survey-questions/
- brooklyn-99-welcome-meme.avif [1048L]
- chat-asking-2-questions.avif [52L]
- chatbot-survey-industry-examples.avif [309L]
- chatbot-survey-questions-examples.avif [378L] >-*Heن#
- cover.avif [297L]
- customer-rating-flowchart-image.avif [280L] HE6w^`G%'9~0Fs?7Rau{h}|oI=U_e؊BjȕZpC`snOGmXq,'y)Pȸ2~S$MSkx\;A>
- flowchart-survey-design-tool.avif [465L]
- input-types-selection-menu.avif [117L]
- logic-menu-options.avif [113L]
- survey-chatbot-creation-flowchart.avif [536L]
- typebot-creation-options-3.avif [120L] ÁL/0%Q<E8TX#YFOA,=nctCR'ϠНdspX_

## apps/landing-page/public/blog-assets/chatbot-use-cases/
- cover.avif [199L]
- customer-support-information-guide.avif [115L]

## apps/landing-page/public/blog-assets/chatbot-use-cases-in-retail/
- cover.avif [264L]
- flow-chart-design.avif [444L]
- flow-chart-inventory-check.avif [413L]
- la-mer-website-contact-us.avif [772L] {Hqa65:j"*#|N:r"ؙ%!
- order-tracking-flow-diagram.avif [452L]

## apps/landing-page/public/blog-assets/chatfuel-vs-manychat/
- ai-chat-manychat-bot-flow.avif [179L]
- appointment-scheduler-workflow-diagram.avif [619L]
- chatfuel-fuely-ai-overview.avif [1175L]
- chatfuel-interface-flow-builder.avif [530L]
- chatfuel-launchpad-interface-screen.avif [847L]
- chatfuel-live-chat-interface.avif [938L]
- chatfuel-logo-on-blue.avif [48L]
- connect-messaging-channels-options.avif [125L]
- cover.avif [194L]
- create-message-template-screen.avif [471L]
- manychat-automation-workflow-builder.avif [355L]
- manychat-live-chat-interface.avif [492L]
- manychat-logo.avif [42L]
- manychat-pricing-plans-comparison.avif [364L]
- pricing-for-business-enterprise.avif [394L]
- pricing-plans-business-enterprise.avif [330L]
- twilio-logo-red-and-gray.avif [182L]
- workflow-diagram-marketing-automation.avif [333L]

## apps/landing-page/public/blog-assets/collecting-customer-feedback-methods/
- cover.avif [278L]
- customer-feedback-interview.avif [1734L]
- customer-feedback-survey-ui-examples.avif [959L]
- customer-journey-feedback-map.avif [2267L]
- website-session-replay.avif [474L] XX&&u9GR+9Uzw"L|/!VoIN!^%*3IJ[Z}.]jf(\=j%2IYCW v;8ኂQ"ρF$+T23*>

## apps/landing-page/public/blog-assets/conversational-lead-generation/
- ai-chatbot-workflow-diagram.avif [157L]
- chatbot-builder-interface.avif [359L] nhhg%:(fܑGAM %83{lk<Q"k5M=8J
- cover.avif [296L]
- creating-a-chatbot-flow.avif [505L]
- flow-builder-screenshot.avif [313L]
- flow-theme-settings-sharing-results.avif [440L]
- hubspot-contacts-list.avif [421L]
- input-options-dark-mode.avif [64L]
- script-options-for-embedding-chatbot.avif [60L]
- search-bubbles-text-video.avif [41L]
- typebot-embed-options-screenshot.avif [182L]
- typebot-integration-screenshot.avif [349L]
- typebot-logic-options.avif [65L]
- typebot-published-menu-options.avif [114L]

## apps/landing-page/public/blog-assets/create-whatsapp-chatbot/
- cover.avif [209L]
- n8n-Whatsapp-flow-example.avif [218L]

## apps/landing-page/public/blog-assets/ecommerce-chatbot/
- ecommerce-chatbot-mockup.avif [605L]

## apps/landing-page/public/blog-assets/faq-chatbot/
- configure-flowise-deployment-render.avif [112L]
- cover.avif [1303L]
- example-chatbot-branches.avif [135L]
- flowise-complete-flow.avif [631L]
- typebot-flow-using-flowise.avif [84L]

## apps/landing-page/public/blog-assets/feedback-chatbot/
- ai-workflow-diagram-questions.avif [249L]
- chatbot-welcome-message-example.avif [71L]
- cover.avif [189L]
- feature-usage-selection-form.avif [71L]
- feedback-chat-interface-example.avif [372L] !hC|7amXư̦MgHiGٌ]aMf?g(f{Bz{?ܡ3
- product-feedback-flow-diagram.avif [160L]
- satisfaction-rating-prompt-box.avif [49L]

## apps/landing-page/public/blog-assets/flowise-alternatives/
- botpress-chatbot-landing.avif [602L]
- chatbase-landing.avif [447L] ,ˎv';#;eJW.?]p|lMO7/I>a5J@5d*;?`rHC	L
- cover.avif [223L]
- langflow-website.avif [724L]
- voiceflow-app-example.avif [893L]
- voiceflow-chatbot.avif [769L] eJ|ߕ4qp>=ӷM79ho"wxZc\7'l1gQc CTs:n+>F$"\*r<Z!

## apps/landing-page/public/blog-assets/free-chatbot-for-small-business/
- cover.avif [259L]
- hubspot-website-screenshot-chatbot-builder-software.avif [1046L]
- zoho-salesiq-website-landing-page.avif [930L]

## apps/landing-page/public/blog-assets/how-to-accept-payment-on-whatsapp-business/
- cover.avif [65L]
- order-icon-on-phone.avif [1388L] =uJ_p| !]}~5J90t
- phone-chat-cake-order.avif [1455L]
- phone-screen-orders-page.avif [1546L]
- whatsapp-menu-new-group.avif [1477L] ͲML1ᝤ'JZog57~>Fe&WNYi"齶ҠY(,tx=.m	vsu㣥Z  KXn(W-xmpO1G{|C6q1
- whatsapp-order-payment-r-30.avif [1374L]

## apps/landing-page/public/blog-assets/how-to-add-chatbot-in-wordpress/
- chatbot-creation-interface.avif [1032L]
- chatbot-digital-marketing-quiz.avif [259L]
- chatbot-editing-interface-typebot.avif [349L]
- chatbot-flow-builder-interface.avif [553L]
- chatbot-flow-editor-preview.avif [672L]
- chatbot-flow-editor-screenshot.avif [545L]
- chatbot-flow-wordpress-setup.avif [370L]
- chatbot-settings-page-menu.avif [207L]
- chatbot-workflow-dark-mode.avif [465L] OꀞmZ@5<2_3x}luv/%dZS2@		F͝x7R@_:Skl,;Pv!l!hN 2=wtIi(!oe.n$-
- cover.avif [220L]
- custom-css-section-typebot.avif [171L]
- embed-typebot-in-wordpress.avif [195L]
- excluded-pages-button.avif [60L]
- router-chatbot-flow-logic.avif [90L]
- typebot-plugin-wordpress-marketplace.avif [593L]
- typebot-plugin-wordpress-page.avif [1259L]
- typebot-settings-page-screenshot.avif [474L]
- typebot-settings-page.avif [286L]
- webhook.avif [483L]
- wordpress-plugins-marketplace-menu.avif [901L]
- wordpress-standard-settings-chatbot.avif [265L]

## apps/landing-page/public/blog-assets/how-to-add-chatbot-to-website/
- chat-about-selling-property.avif [353L]
- cover.avif [170L]
- flowchart-of-user-input.avif [307L]  8Cʌ_  ڠ*$m0#M:orF*Lx^zˠ2y(@o	_(Ll28O;pF;w[?Fo)ݠ,E|w=L-\#[)γ
- html-and-javascript-logo.avif [101L]
- javascript-embed-options-menu.avif [69L]
- onboarding-process-workflow-diagram.avif [1012L]
- openai-create-chat-completion.avif [111L]
- openai-integration-options.avif [75L]
- plugins-menu-item.avif [159L]
- product-feedback-survey-interface.avif [191L]
- share-button-highlighted-arrow.avif [286L]
- shopify-standard-setup-instructions.avif [233L]
- typebot-dashboard-view.avif [86L]
- typebot-editor-interface-elements.avif [175L]
- typebot-plugin-marketplace-search.avif [455L]
- typebot-settings-configuration-panel.avif [296L]
- typebot-settings-page-ui.avif [417L] /GzĢADI6 h#g;oM8H'eE{51BYWT1B*SWskVg$E#q)-"؄z!VoJml!z$!MbUŁ8zmn
- typebot-website-landing-page.avif [361L]
- webflow-standard-code-instructions.avif [165L] N=C|b!"i\ 'be݆-1!u6͑mWu!UW(xTt~2mmITڨ*kW}T^Wćj2II^T^cj0f}蟆
- wix-embed-code-instructions.avif [156L]
- wordpress-bubble-settings-panel.avif [367L] {D	vT&3e)kX5vq(Y<	_2D}z疧9	4IS>&:>bI=cP)ſa$c]I|v&En 1VSז-N5,Z@FA]IE7
- wordpress-plugins-marketplace-screen.avif [736L]

## apps/landing-page/public/blog-assets/how-to-build-a-rag-chatbot/
- chatbot-dialogue-flow.avif [111L] .HGRgwy!jFNɖ\ dɃJߣ㭰?t
- cover.avif [250L]
- openrouter-configuration.avif [264L]
- rag-chatbot-diagram.avif [1568L]
- rag-chatbot-intro.avif [110L] L+}ėc(<n}/zz=Y}Fdw5OeCv	=A+ӌy1-n6K:HJ9n&Kg g_6ĺQ$v7567_1UV~.Xi֒3n
- upload-pdf-files-in-Pinecone.avif [58L]

## apps/landing-page/public/blog-assets/how-to-build-faq-chatbot/
- api-json-chatbot-code.avif [217L]
- chatbot-interface-design-elements.avif [249L]
- chatbot-workflow-logic.avif [378L]
- cover.avif [236L] {޾e!S6Ua8䏞\`?OG,<ڽ DJoJlaizj
- create-a-typebot.avif [27L]
- creating-a-chatbot-flow.avif [394L]
- creating-a-faq-bot.avif [492L]
- embed-your-typebot.avif [391L]
- faq-chatbot-diagram-feedback-loop.avif [262L]
- faq-lookup-template-on-sheets.avif [496L]
- google-sheets-data-integration.avif [132L]
- meta-whatsapp-business-platform.avif [430L] EȎFSEM0
- openai-account-add-chat-completion.avif [231L] e*B'8U`*hQj<Gbe5~&&ex6*r>Pڬ{AldѲm\ !43Z|P}׹"Xi6(Lm)r-_2e ֖G+ú+f
- router-logic-chatbot-setup.avif [132L]
- sign-in-page-with-options.avif [142L]
- typebot-create-new-scenario.avif [465L]
- typebot-interface-chatbot-builder.avif [333L]
- wordpress-embed-options-standard-popup-bubble.avif [90L] bNjg+EHbH ^#mXrN<:Wٝ	DnanbFm4GD"Yed0QBD!pQ@"@)_%0^vP?Kcpouah

## apps/landing-page/public/blog-assets/how-to-build-whatsapp-chatbot/
- cover.avif [228L]
- whatsapp-chatbot-welcome-screen.avif [204L]

## apps/landing-page/public/blog-assets/how-to-collect-customer-feedback/
- cover.avif [310L]
- customer-feedback-survey-questions-2.avif [403L]

## apps/landing-page/public/blog-assets/how-to-collect-customer-reviews/
- a-b-test-typebot-block.avif [20L]
- ask-review-from-first-message.avif [38L]
- cover.avif [341L]
- customer-journey-map-diagram.avif [579L]
- phone-scans-qr-code.avif [300L]
- phone-showing-reviews.avif [234L]
- rating-feedback-workflow-diagram.avif [219L]

## apps/landing-page/public/blog-assets/how-to-create-a-product-recommendation-quiz-shopify/
- ai-recommendation-settings-page.avif [298L]
- code-editor-theme-liquid.avif [882L]
- cover.avif [215L]
- graphql-api-configuration-panel.avif [370L]
- group-6-recommendation-details.avif [140L]
- openai-chat-completion-settings.avif [338L]
- product-recommendation-quiz-ui.avif [122L]
- product-type-and-budget.avif [230L]
- quiz-editor-interface.avif [164L]
- shopify-standard-instructions-code.avif [498L]
- shopify-themes-edit-code.avif [728L]

## apps/landing-page/public/blog-assets/how-to-create-chatbot-for-beginners/
- additional-features-options-list.avif [80L]
- calculate-score-quiz-marketing-skills.avif [80L]
- cover.avif [213L]
- experience-level-selection-quiz.avif [93L]
- get-quote-email-example.avif [33L]
- lead-capture-email-form.avif [53L] UN ^Tss//f5&"TRv
- message-marketing-challenge-question-2.avif [67L]
- price-calculation-interface-code.avif [87L]
- service-selection-options-list.avif [84L]
- thank-you-confirmation-message.avif [50L]
- thank-you-message-notification.avif [76L]
- website-design-price-calculator-chatbot-message.avif [94L] VZG_c: @ZH]rTcPO]ɲ3nǉ,be$j9	F@\NbO-W:nފI̭tùG5)fUۢ}HΗC;Jڵ	LbᴾڍcjMA

## apps/landing-page/public/blog-assets/how-to-create-multi-step-form-in-webflow/
- communication-style-form-summary.avif [165L]
- cover.avif [189L]
- multi-step-form-example.avif [266L]
- multistep-form-creation-options.avif [1395L]
- role-selection-flowchart.avif [105L]
- typebot-webflow-embed-options-popup.avif [77L]

## apps/landing-page/public/blog-assets/how-to-generate-leads-on-whatsapp/
- assign-assets-whatsapp-token.avif [642L] r>ZݤBM5뚵
- brevo-marketing-campaigns-interface.avif [385L]
- cover.avif [197L] MfܠXy44Tw1l+weSJ> A#E2O?NF>ɿ|9J!fIVǭLm~C/;{|:zʞ3tIEO@}R}.5]E
- create-app-button-highlighted.avif [279L]
- flow-builder-analytics-dashboard.avif [533L]
- flowchart-for-lead-generation.avif [524L]
- flowchart-of-services-and-AI.avif [228L]
- meta-app-use-cases-whatsapp.avif [1009L] 9*E'roۊ[{Txu!*0^g}ދ'np6Fc߄<rL>* j'?p񧨦?ARK韨߈[Jn_#kuswHj/뛇kVPF}
- meta-business-suite-system-users.avif [629L]
- qr-code-on-smartphone.avif [60L] Zgfxp=:Fr|KW35yAyd+]@V*jR}4lY<66>D|PQ*@PK[OeDF=!W;āӆE5q/4
- token-generated-popup-success.avif [497L]
- typebot-workflow-whatsapp-customer-support.avif [1083L]
- wati-campaigns-overview-dashboard.avif [405L]
- whatsapp-marketing-offer-message.avif [248L]

## apps/landing-page/public/blog-assets/how-to-set-auto-reply-in-whatsapp/
- cover.avif [252L] ,%|(:?rvmpﾅطDPΉ~cgKYWHFH$SWad#Qۙ{_?E7)
- greeting-message-setup.avif [400L]
- schedule-auto-reply-options.avif [213L]
- whatsapp-auto-reply-message.avif [501L]
- whatsapp-away-message-options.avif [383L]
- whatsapp-business-tools-settings.avif [472L]
- whatsapp-chat-auto-reply.avif [502L]
- whatsapp-chat-bakery-auto-reply.avif [446L]

## apps/landing-page/public/blog-assets/how-to-use-whatsapp-for-lead-generation/
- aliexpress-20-percent-off-codes.avif [2054L]
- app-type-selection-ui.avif [205L]
- assign-assets-app-dialog.avif [376L]
- budget-selection-user-interface.avif [48L]
- calendar-booking-event-selection.avif [49L]
- chat-screen-pediasure-keyboard.avif [239L] r=4?~i}jܿoǒTl!a9)\zJw!bc,8`PE!l|EͱwS(`:tx.
- chat-with-brand-products-deals.avif [639L]
- chat-with-typebot-support.avif [562L] Em4LO]Y4nPX:"bG:5=
- chatbot-menu-flow-diagram.avif [56L]
- choose-app-function-meta-developers.avif [322L] ė.*0TX/h!?8*)J[.ǮoⰇ71i<'Kd]=kދAeo#H=.Z/3au%=4v{f>Sʢi@rY~w
- company-name-input-form.avif [26L]
- cover.avif [196L]
- create-app-form-fields.avif [194L]
- create-new-typebot-options.avif [75L]
- email-input-form.avif [49L]
- integrations-app-icons-grid.avif [174L]
- pediasure-linktree-mobile-view.avif [387L]
- phone-showing-messaging-app.avif [829L] SdZD1rs+,m),rS%g($b[ZwZ4kW+%|
- quick-replies-chat-app.avif [645L]
- typebot-integrations-page-view.avif [200L]
- whatsapp-phone-number-screen.avif [290L]

## apps/landing-page/public/blog-assets/lead-generation-chatbot/
- cover.avif [259L]

## apps/landing-page/public/blog-assets/lead-generation-form-builder/
- Google-Form-example-webinar.avif [206L]
- cover.avif [230L]
- example-of-typeform-question.avif [285L]
- fillout-form-example.avif [108L]

## apps/landing-page/public/blog-assets/lead-generation-form-examples/
- airtable-demo-signup-form.avif [302L] [V$WʭQdburc⑧Q'{hld-Hƭ"NYOӄ6H娅]J׷-B;*,#$(qiEO?}<\E֫:2.?OqFw҅П(ǜra
- cover.avif [196L]
- form-fields-and-button.avif [88L]
- hubspot-demo-form-features-list.avif [434L]
- mailchimp-content-marketing-form.avif [509L]
- neil-patel-newsletter-form.avif [857L]
- newsletter-signup-form-tech-advice.avif [246L]
- notion-contact-sales-form.avif [358L]
- race-fuel-hydration-planner.avif [183L]
- salesloft-revenue-growth-playbook.avif [1224L]
- tableau-free-trial-signup-form.avif [440L]
- zoho-analytics-website-signup-form.avif [296L] 9*Q03N99_ƪ-KsRjm,'LlbpQۢ+dÞ2ekAZGC+"o8׾VX

## apps/landing-page/public/blog-assets/lead-generation-quiz/
- ai-additional-information.avif [150L]
- beauty-quiz-name-input.avif [398L]
- calculate-digital-marketing-score.avif [167L]
- cooking-quiz-website-screenshot.avif [659L]
- cover.avif [237L]
- dog-and-cat-quiz-selection.avif [337L]
- home-buying-process-quiz.avif [390L]
- quiz-creation-interface.avif [120L]
- quiz-lead-capture-form.avif [185L] i]Hg1t3%f%	[DbB3g)6?u\Js$^չ[4~rTc,BShJGd[ilR[{j
- quiz-options-dark-mode.avif [102L]
- quiz-question-self-care.avif [221L]
- quiz-workflow-editing-interface.avif [115L] k`)01tb3C_OSo@˵A?~L<^;vr9^D2Jj-$8D*ZxVi+T4Ju1 \]WtF2hџh67rKҨs+g
- skin-concern-quiz-website-screenshot.avif [364L]
- sport-plan-quiz-triathlon.avif [262L]
- website-design-price-calculator.avif [196L]

## apps/landing-page/public/blog-assets/lead-qualification-checklist/
- b2b-customer-profile-sample.avif [283L] O~PXFĂ(Ԣ C#qgE1cUm/2kzR؜ ɵrav"t`J;>ITBf	p.sBk<0>j_M"oN
- budget-financial-capacity-qualification-checklist.avif [990L]
- cover.avif [260L]
- decision-making-considerations-qualification-checklist.avif [1079L]
- engagement-questions-with-radio-buttons.avif [1085L]
- lead-qualification-framework-decision-chart.avif [2397L] &: l܀^J&dp;2?L>
- lead-qualification-funnel-diagram.avif [1894L]
- pain-points-and-needs.avif [1012L]
- timing-and-urgency-qualification-checklist.avif [999L]

## apps/landing-page/public/blog-assets/lead-qualification-questions/
- ai-model-configuration-screen.avif [50L]
- ai-results-form-fields.avif [61L]
- company-size-options-selected.avif [27L]
- cover.avif [364L]
- create-a-typebot-button.avif [8L]
- create-new-typebot-options.avif [41L]
- decision-maker-mapping-template.avif [2433L] rcG/*Þ&{
- dropdown-menu-options-list.avif [40L] ΄허OzGH(u?Y97|mڐDcCAt_yHv7jMI2һ^)'ǭMXS.^.ؿ ީSseAb&b|h
- email-input-selected.avif [70L]
- flowchart-of-a-survey.avif [53L]
- form-input-settings-panel.avif [51L]
- google-sheets-ai-results.avif [51L]
- openai-integration-workflow-ai.avif [59L]
- qualification-frameworks-bant-meddic-champ.avif [1408L]
- save-response-form.avif [11L]
- sheets-integration-workflow-diagram.avif [106L]
- spreadsheet-ai-result-qualified.avif [53L]
- text-element-in-workflow.avif [79L]
- workflow-diagram-dark-theme.avif [34L]

## apps/landing-page/public/blog-assets/lead-qualification-tools/
- ai-workflow-diagram-dark.avif [201L]
- aomni-logo.avif [75L]
- asdf.avif [445L] ;YLWi 0X^Qϫna	5ș5(\wKtT:A}\ꍯ_B̽~8fwW'\8Jy'lbO)c{]DȖP] F@$Vdon ;E
- bubbles-content-options-menu.avif [24L]
- cal-com-dashboard-menu.avif [247L]
- cal-com-logo.avif [44L] L~qw	Q!!1 xb=_Z8`	!`t\S|P}^8u׼r UU%|rz$y/MS>v
- chatbot-flow-diagram-dark.avif [542L]
- clearbit-logo.avif [43L] ?ߟ-@Ѭ]H"sŃXv~"Nn+<7ԧzF1m&DwԊ:SqJ1F9{oy20
- company-size-options-1-10.avif [74L]
- cover.avif [214L]
- flow-chart-interface-design.avif [177L]
- flowchart-of-user-input-fields.avif [294L]
- flowchart-user-input-form.avif [120L]
- group-5-project-needs.avif [32L]
- hubspot-contacts-list-view.avif [398L]
- hubspot-logo-image.avif [53L]
- imaj.avif [139L]
- input-types-menu-options.avif [67L]
- logic-options-menu.avif [50L] བƋI~^dFQ	c%TVU+cc_de##4|
- madkudu-logo.avif [100L]
- make-logo-purple-background.avif [23L]
- marketing-hub-pricing-plans.avif [741L] ϱ&Hc+Rs~C@-*p~Zfi_5g/Qhue /h:]h|0	`ȁ	JuCXF04m5fMl'G-RԮqw=rss 
- openai-chat-completion-settings.avif [102L]
- pricing-growth-and-pro.avif [28L]
- pricing-plan-comparison-chart.avif [93L] k8K	DY,/|Hz&!xL?zw`RV]X=4^ fwIЖű˵k-.g:4U6.E2iZm=㲀 ȣ@mΉ
- pricing-plans-comparison-chart.avif [1137L]
- pricing-plans-comparison-table.avif [568L]
- settings-for-book-event.avif [101L]
- webhooks-settings-dialog-box.avif [325L]
- website-design-price-calculator.avif [115L] ? ZPP@qQ.)-wQ(q2{?!$
- wordpress-embed-options.avif [130L] c݈\?1}{Vkf҂)v=tUO٨c%K`n]ţ/P

## apps/landing-page/public/blog-assets/livechat-vs-chatbot/
- livechat-vs-chatbot-accuracy.avif [251L]

## apps/landing-page/public/blog-assets/manychat-alternatives/
- cover.avif [145L] tpdS.eI$YN9ւ cn^:ƻsS2+:D+

## apps/landing-page/public/blog-assets/marketing-automation-chatbot/
- automated-marketing-chatbot-example-collect-email-step.avif [156L]
- chatbot-implementation-example-final-cta-step.avif [170L] ?l^hMƳ>OJjPuc=~kʅxw!*?Wy_.X]t>,>Jڃ+@PP;G/Gj:R]{_/V)Q܈2vn
- lead-qualification-real-estate-automation-example.avif [548L] AZu+EDo[$nX}mC<)\Eu%|ZG	;T/`CFDP]W%o.	X DZꦡ6Bs 0TDby!/Bcv8٭Om%gO(qXBζ:
- loyalty-program-marketing-chatbot-example-branded.avif [346L]
- loyalty-program-marketing-chatbot-example.avif [341L]
- marketing-chatbot-example-duration-step.avif [75L]
- marketing-chatbot-example-prompt-carb.avif [404L]
- marketing-chatbot-rating-step.avif [79L]
- marketing-chatbot-step-1-select-sport.avif [186L]
- result-automated-marketing-chatbot-carb-calculator.avif [821L]

## apps/landing-page/public/blog-assets/meta-workplace-alternatives/
- beekeeper-app.avif [770L]
- flip-app.avif [1198L]
- happeo-app.avif [1163L]
- staffbase-app.avif [942L]
- workvivo-app.avif [1167L] {Qk3}XM8nW6Ud	`〟/YR`@X3C4ҊFZp2oO8Q	jԳrvRR4=pɿo@F ;๴)߸H{ÿ<iCS	!

## apps/landing-page/public/blog-assets/n8n-whatsapp-bot-tutorial/
- add-whatsapp-phone-number.avif [448L] ǳQu	U_g!YJ֟(.
- ai-agent-whatsapp-workflow.avif [127L]
- ai-workflow-diagram-interface.avif [513L]
- app-interface-builder-workflow.avif [490L]
- automation-workflow-tool-ui.avif [327L]
- buttons-lead-to-group.avif [168L]
- cover.avif [198L] fW?9oj2F8Ka
- create-an-app-form.avif [325L]
- facebook-app-settings-panel.avif [671L] 諒CENZMqM]ȪɊ[z7 '\`틞kxnX4,xeV,#3/hnahg;CeI>cݳf v<LI?ZfJ,fKu֧G0Y=d
- facebook-business-manager-settings.avif [652L]
- facebook-business-manager-users.avif [405L]
- feedback-bot-design-interface.avif [977L]
- flowchart-logic-editor-ui.avif [591L]
- generate-token-code-popup.avif [471L] u3klL1-^)Ҍ++s gGC5% F#hH!j݇LڡkP*>>`Tay|kIg<e8/Cal
- meta-business-tools-page.avif [662L]
- meta-developer-dashboard-screen.avif [932L]
- meta-use-cases-screen-view.avif [987L]
- n8n-Whatsapp-business-cloud-triggers.avif [439L] ]zjojDL>PۮyKuP^qEIJEt/VwD5ђ}vtJI1PjGs$\}5hken܀´Ŗ<mNmk,	( k)u*A
- whatsapp-ai-agent-workflow.avif [520L] W  !a 1Jԕb4.pH)+2#RQ&aR{/QWhٴ#/VVwM+	9pXbF{1w]-;9m%"{n+JIkNlb	UnYʣwG
- whatsapp-integration-configuration-panel.avif [362L]
- workflow-diagram-dark-theme.avif [188L]
- workflow-editor-webhook-json-data.avif [1226L]
- workflow-webhook-spreadsheet-creation.avif [271L]

## apps/landing-page/public/blog-assets/quiz-funnel-examples/
- asdfdsaf.avif [1381L] ZI,"|/'eRvy0Q?tvMhqU5S'<ovڴ8k)x
- clothing-preference-quiz-funnel.avif [250L] Lq&o$ǃdLM)NA62^{ukUV,@n/%VϹ|)2hJT5eAթϠ,ې	=uy_B}	V-Z-w$-3uII
- coffee-making-preference-quiz.avif [252L]
- cover.avif [203L]
- embed-your-typebot-platforms.avif [317L]
- google-trends-homepage.avif [365L]
- quiz-funnel-burnout-score.avif [338L]
- quiz-funnel-example-screenshot.avif [77L]
- quiz-funnel-glasses-selection.avif [347L]
- quiz-funnel-set-variable.avif [337L]
- quiz-funnel-steps-diagram.avif [201L]
- quiz-hair-loss-goals.avif [314L]
- quiz-question-on-dialect.avif [460L] Ewd;J U	5ĭ0/T}LB[ h>M$Q8[Y8\UlY\6p=UWdSpk
- sephora-shade-finder-quiz.avif [901L]
- typoebot.avif [559L]
- untitled.avif [1247L]
- what-type-of-beardsman-are-you.avif [313L] fBs09&!? :@u\˖׿wxmMFbSvᕏ,һYmjGayV|tMG$x_Mn?%Q)p蛺LUVǮIu

## apps/landing-page/public/blog-assets/react-website-builder/
- ai-visual-builder-reweb-io.avif [552L]
- builder-io-interface-screenshot.avif [467L]
- cover.avif [173L]
- plasmic-visual-website-builder.avif [491L]
- react-builder-website-screenshot.avif [233L]
- teleporthq-website-builder-interface.avif [735L]

## apps/landing-page/public/blog-assets/typeform-vs-google-form/
- cover.avif [232L]
- detailed-feature-comparison-google-forms-vs-typeform.avif [537L]
- make-automation-example.avif [264L] )2UrԾNxd%0"K;3I#⚎tKN!>]]4:<υg[ff7?:PDo&5rWL$O]5{)3äEѣ<^RǘTQ

## apps/landing-page/public/blog-assets/voiceflow-alternatives/
- cover.avif [152L]
- crisp-website.avif [2876L]
- flowise-homepage-website.avif [951L] 45~|YF|⣔Z@s5tC-b>kXYG^
- voiceflow-alternative-banking-assistant.avif [470L]

## apps/landing-page/public/blog-assets/voiceflow-vs-flowise/
- ai-chatbot-workflow-diagram.avif [690L]
- ai-workflow-diagram-dark-mode.avif [1348L]
- cover.avif [235L]
- custom-javascript-function-form.avif [149L]
- edit-webhook-callback-url.avif [100L] n'$M 07M)\h'OvLIYY#9-7{{x5}ޡɠACdQ晇Jr``+s MJ]7FAzI݆v[	'mnUXr&p3&X
- github-issue-tracker-view.avif [1088L]
- hitl-ai-chatbot-flowchart.avif [1690L]
- pricing-plan-comparison-table.avif [476L] xLmC/ 9y:,wRO>Krw0ڭb0P Ģ\-ʵjJm/46`vb{NL9/uv3&h ޟܣGc7ye
- tico-chatbot-interface-design.avif [860L]
- voiceflow-ai-workflow-interface.avif [1095L]

## apps/landing-page/public/blog-assets/whatsapp-ai-agent/
- cover.avif [226L]
- example-ai-agent-reservation.avif [674L]
- example-chatbot-local-attractions-agent.avif [1412L]
- example-notion-knowledge-base.avif [320L]
- notion-loader-with-markdown-splitter.avif [263L]
- typebot-flow-using-flowise.avif [84L]

## apps/landing-page/public/blog-assets/whatsapp-api-use-cases/
- cake-ordering-app-ui.avif [156L] :v<'B1E0G`Lp6/fQ8pSpN`ڊ%Q_Q0ZϝjM
- chat-with-typebot-support.avif [617L] Em4LO]Y4nPX:"bG:5=
- cover.avif [208L]
- meta-developer-app-dashboard.avif [443L]
- meta-for-developers-api.avif [457L] md:w:S`.6<W@4!9^T0]D[yFkqmdcgC2R$ek	l2s)eٛ"ĕ9g?w-5	A8?@ć+P
- meta-for-developers-apps-page.avif [183L] c (ҽSyf47<3{IrbUs$Fr9N)(AvWDUaA ^c15Pp|겙J[aM5h9KŪXp P'ǵ@nF
- phone-whatsapp-order-summary.avif [400L]
- phones-facebook-whatsapp-message.avif [874L]
- platform-engagement-bar-chart.avif [190L]
- whatsapp-business-setup-steps.avif [192L]
- whatsapp-no-archived-chats.avif [178L]
- whatsapp-typebot-conversation-example-with-buttons.avif [909L] Ns eltgOٝr E#M02v1\i}z%ˎ5xa|{Ƃr!Umd2r

## apps/landing-page/public/blog-assets/whatsapp-automation-chatbot/
- cover.avif [177L]
- types-of-chatbots-chart.avif [1388L]

## apps/landing-page/public/blog-assets/whatsapp-b2b-marketing/
- WhatsApp-vs-other-B2B-channels-open-rates-1785765727820.avif [459L]
- Which-metrics-to-measure-in-your-chatbot-1785764417527.avif [403L]
- cover.avif [197L]

## apps/landing-page/public/blog-assets/whatsapp-business-api-providers/
- 360dialog-whatsapp-business-api-provider.avif [962L]
- aisensy-whatsapp-website.avif [789L]
- cover.avif [237L] U;lۋzYO<?TńXkęUxWq؊Tĸٹ0Y7vKvs/M}(/cMDXRVG:cJ6,qHhoc,Ew=ˬ7)j81{]
- gupshup-ai-superagent-interface.avif [757L]
- infobip-home-page-screenshot.avif [674L]
- interakt-website.avif [684L] XCA-~p&k>w! R.`iߍq
- twilio-website-screenshot-banner.avif [911L]
- wati-chat-interface.avif [606L] ҕbS3|\Nb頻4:smMljfbdrMLVaR_d3Y0qݼRIA1e)ݯB:\r^pOؠ,3MJ
- whatsapp-API-providers-ecosystem-diagram.avif [1622L]

## apps/landing-page/public/blog-assets/whatsapp-business-automated-messages/
- cover.avif [271L]
- flow-chart-contact-name.avif [594L]
- new-quick-reply-screen.avif [279L]
- whatsapp-business-app-screens.avif [204L]
- whatsapp-business-phone-number-screen.avif [315L] yBqrdj! bcP*3T
- whatsapp-business-profile-edit-screen-keyboard.avif [251L]
- whatsapp-business-quick-replies-add-button.avif [316L]
- whatsapp-business-tools-quick-replies-screen.avif [677L]
- whatsapp-message-keyboard-open.avif [469L]

## apps/landing-page/public/blog-assets/whatsapp-chat-shopify/
- cover.avif [219L]
- whatsapp-shopify-app-settings.avif [377L]
- whatsapp-shopify-app-store.avif [1333L]
- whatsapp-widgets-settings-page-light.avif [858L]

## apps/landing-page/public/blog-assets/whatsapp-chatbot-cost/
- Typebot-chatbot-flow-builder-interface-with-some-blocks.avif [732L]
- cover.avif [244L]
- different-ways-of-sending-whatsapp-business-messages.avif [1800L]
- whatsapp-business-api-conversation-categories.avif [1632L]

## apps/landing-page/public/blog-assets/whatsapp-chatbot-example/
- cover.avif [225L]
- whatsapp-chatbot-benefits-infographic.avif [1837L]

## apps/landing-page/public/blog-assets/whatsapp-chatbot-use-cases/
- cover.avif [245L]

## apps/landing-page/public/blog-assets/whatsapp-lead-generation/
- 6-whatsapp-lead-generation-strategies.avif [1934L]
- WhatsApp-lead-generation-flow-diagram-qualification.avif [325L]
- cover.avif [219L]
- facebook-ad-whatsapp-chat.avif [598L]
- pause-flow-wait-response.avif [104L]
- qualification-budget-selection-screenshot.avif [49L] }يA-!N&GZR993ls>_Ik>^3㲇3hYmᢁeEg]_ѿM٣FXRmErOThz%ѓ\sh'y2E9A_ T!
- resource-router-flow-diagram.avif [234L]
- whatsapp-lead-generation-flow-pets.avif [167L] ۚRn4gaB$CYW4~D~=8Oq[_Tg"BE]Z 5ǲ4aKov	N!^0?"[̼rdz0JtChCfhŮ$_}<\[Ahw
- whatsapp-lead-generation-welcome.avif [56L] .k7%{ }8fnjIzLQu-0|#T|O3fmW1/P狈=(*NJj7kCXw&G[n9'R]?fX7pZ
- whatsapp-lead-generation-workflow-contact-name.avif [62L]
- whatsapp-qr-code-restaurant-table.avif [871L] Vnnѳ(RHs̖`αR}X`YT԰hN.k\ ~[?rsD
- whatsapp-typebot-marketing-message.avif [1061L]

## apps/landing-page/public/blog-assets/whatsapp-marketing-for-restaurant/
- cover.avif [274L]

## apps/landing-page/public/blog-assets/whatsapp-marketing-strategies/
- click-to-whatsapp-ads-illustration-example.avif [796L]
- cover.avif [250L]

## apps/landing-page/src/
- constants.ts [23L]
- routeTree.gen.ts [350L] eslint-disable */
- router.ts [12L] — getRouter()
- vite-env.d.ts [45L] <reference types="vite/client" />

## apps/landing-page/src/assets/
- code-snippet.css [83L] biome-ignore-all lint/style/noDescendingSpecificity: Tailwind classes are used f
- globals.css [209L]

## apps/landing-page/src/components/
- Card.tsx [20L]
- ContentPageWrapper.tsx [21L] — ContentPageWrapper()
- CookieConsentBot.tsx [58L] — CookieConsentBot(), parseConsentBotAnswer(), useDelayedOpen()
- Header.tsx [335L] — Header()
- NotFound.tsx [28L] — NotFound()
- Progress.tsx [29L]
- Section.tsx [24L] — Section()
- Typebot.tsx [6L]
- TypebotLogo.tsx [58L] — TypebotLogo(), TypebotLogoFull()
- link.tsx [170L] — TextLink(), CtaButtonLink(), ButtonLink()
- motion-wrappers.tsx [5L]
- table.tsx [120L]

## apps/landing-page/src/components/cta/
- Cta.tsx [48L] — Cta()
- CtaButton.tsx [16L]
- WhyTypebotCta.tsx [28L] — WhyTypebotCta()

## apps/landing-page/src/components/footer/
- Footer.tsx [173L] — Footer()

## apps/landing-page/src/features/about/
- BuildingsGradientIcon.tsx [29L] — BuildingsGradientIcon()
- HeartGradientIcon.tsx [24L] — HeartGradientIcon()
- MessageSquareGradientIcon.tsx [29L] — MessageSquareGradientIcon()
- ZapGradientIcon.tsx [29L] — ZapGradientIcon()

## apps/landing-page/src/features/blog/
- helpers.ts [9L] — formatDate()

## apps/landing-page/src/features/blog/components/
- HtmlFormGenerator.tsx [658L] Types for our form elements — HtmlFormGenerator(), ExportModal(), ComponentsPalette(), FormCanvas(), FormElement(), PropertiesPanel(), LivePreviewModal()
- WhatsAppPricingCalculator.tsx [127L] — WhatsAppPricingCalculator()
- mdx.tsx [209L] — Mdx()

## apps/landing-page/src/features/blog/data/
- authors.ts [16L]
- whatsAppPricingData.ts [293L]

## apps/landing-page/src/features/homepage/
- types.ts [17L]

## apps/landing-page/src/features/homepage/all-features/
- AllFeatures.tsx [208L] — AllFeatures(), Dots()

## apps/landing-page/src/features/homepage/companies/components/
- Companies.tsx [36L] — Companies()
- Marquee.tsx [33L] — Marquee()
- logos.tsx [993L] — Mindeo(), IbanFirst(), Lemlist(), MakerLead(), SocialHackrs(), Webisharp(), Cora(), Obole(), PinpointInteractive(), Shadow()

## apps/landing-page/src/features/homepage/components/
- Faq.tsx [161L] — Faq(), Question()
- JoinTheCommunity.tsx [114L] — JoinTheCommunity(), FloatingAvatars()
- MadeForDevelopers.tsx [59L] — MadeForDevelopers()

## apps/landing-page/src/features/homepage/departments/
- ForEveryDepartment.tsx [278L] — ForEveryDepartment(), DepartmentCard(), OpenedDepartmentCard()
- types.ts [12L]

## apps/landing-page/src/features/homepage/get-started/
- GetStarted.tsx [68L] — GetStarted()

## apps/landing-page/src/features/homepage/hero/
- Hero.tsx [65L] — Hero()
- TopBar.tsx [34L] — TopBar()

## apps/landing-page/src/features/homepage/hooks/
- useWindowSize.ts [30L] — useWindowSize()

## apps/landing-page/src/features/homepage/main-features/
- MainFeatures.tsx [260L] — TopConnector(), MiddleConnector(), BottomConnector(), MainFeatures()

## apps/landing-page/src/features/homepage/product-principles/
- ProductPrinciples.tsx [128L] — ProductPrinciples(), Principle()

## apps/landing-page/src/features/homepage/testimonials/
- Testimonials.tsx [241L] — Testimonials()

## apps/landing-page/src/features/homepage/use-cases/
- UseCases.tsx [244L] — UseCases(), UsecaseTitle(), Cta(), PreloadUseCaseImages()

## apps/landing-page/src/features/pricing/
- EnterprisePlanCard.tsx [43L] — EnterprisePlanCard()
- Faq.tsx [119L] — Faq(), Question()
- PlanComparisonsTables.tsx [275L] — PlanComparisonTables(), CheckedTableCell(), InfinityTableCell(), TableCellWithTooltip(), PlanTableHeads()
- PricingHeading.tsx [14L] — PricingHeading()
- TiersDialog.tsx [72L] — TiersDialog()
- constants.ts [3L]
- free-plan-card.tsx [46L] — FreePlanCard(), FreePlanPerksList()
- pro-plan-card.tsx [78L] — ProPlanCard(), ProPerksList()
- starter-plan-card.tsx [76L] — StarterPlanCard(), StarterPlanPerksList()

## apps/landing-page/src/features/pricing/components/
- pricing-card.tsx [60L] — PricingCardFooter(), PricingCardRoot(), PlanNamePill(), PerkListItem(), CheckTag()

## apps/landing-page/src/features/telemetry/server/
- isEU.ts [42L]
- trackPageView.ts [88L]

## apps/landing-page/src/features/templates/
- TemplateCard.tsx [36L] — TemplateCard()
- TemplatesFilterSidebar.tsx [126L] — TemplatesFilterSidebar()
- TemplatesGrid.tsx [38L] — TemplatesGrid()
- TemplatesHero.tsx [14L] — TemplatesHero()
- TemplatesSearchBar.tsx [23L] — TemplatesSearchBar()

## apps/landing-page/src/helpers/
- setCookie.ts [17L] — setCookie()

## apps/landing-page/src/hooks/
- useHydrated.ts [14L] — subscribe(), useHydrated()
- useIsAuthenticated.ts [15L] — useIsAuthenticated()
- useIsCookieConsentNeeded.ts [36L] — useCookieConsentStatus()
- useTrackPageViewQuery.ts [81L] — useTrackPageViewQuery(), getPageViewBodyProps()

## apps/landing-page/src/lib/
- createMetaTags.ts [26L] — createMetaTags()
- router-dev-tool.ts [13L]

## apps/landing-page/src/routes/
- __root.tsx [105L] — RootComponent()
- _layout.tsx [18L] — LayoutComponent()
- healthz.ts [17L]
- index.tsx [68L] — Home()
- sitemap[.]xml.ts [137L] — generateSitemapXml(), transformPathToSitemapUrlEntry()

## apps/landing-page/src/routes/_layout/
- $slug.tsx [64L] — RouteComponent()
- about.tsx [82L] — RouteComponent()
- oss-friends.tsx [68L] — RouteComponent()
- pricing.tsx [90L] — RouteComponent()

## apps/landing-page/src/routes/_layout/blog/
- $slug.tsx [109L] — RouteComponent()
- index.tsx [68L] — RouteComponent()

## apps/landing-page/src/routes/_layout/faq/
- $slug.tsx [77L] — extractDescription(), RouteComponent()
- index.tsx [72L] — extractExcerpt(), RouteComponent()

## apps/landing-page/src/routes/_layout/templates/
- $slug.tsx [152L] — RouteComponent(), getTemplateTitle()
- index.tsx [116L] — RouteComponent()

## apps/viewer/
- next.config.mjs [136L] — injectViewerUrlIfVercelPreview(), config()
- openapi.tsconfig.json [12L]
- package.json [134L]
- playwright.config.ts [35L]
- tsconfig.json [153L]
- vercel.json [6L]

## apps/viewer/src/
- instrumentation.ts [13L] — register()
- proxy.ts [17L] These headers depend on deployment configuration, not on page rendering. — proxy()
- sentry.server.config.ts [6L]

## apps/viewer/src/app/
- layout.tsx [14L] — DashboardLayout()
- not-found.tsx [35L] — NotFound()

## apps/viewer/src/app/api/
- openApiSpecGenerateOptions.ts [56L]

## apps/viewer/src/app/api/[[...rest]]/
- handleGetMakeComBlocks.ts [63L] — handleGetMakeComBlocks()
- handleGetMe.ts [11L] — handleGetMe()
- handleGetZapierSteps.ts [62L] — handleGetZapierSteps()
- handleHealthz.ts [2L] — handleHealthz()
- handleListTypebots.ts [42L] — handleListTypebots()
- route.ts [132L] — handleRequest()
- router.ts [80L]

## apps/viewer/src/app/api/uploads/[token]/
- route.ts [45L] — OPTIONS(), PUT(), handleUploadRequest()

## apps/viewer/src/app/api/v2/sessions/[sessionId]/streamMessage/
- route.ts [44L] — OPTIONS(), POST()

## apps/viewer/src/assets/
- styles.css [8L]

## apps/viewer/src/components/
- ErrorPage.tsx [34L] — ErrorPage()
- NotFoundPage.tsx [19L] — NotFoundPage()
- RootPage.tsx [26L] — RootPage()
- Seo.tsx [105L] — SEO()
- TypebotLogo.tsx [14L] — TypebotLogo()
- TypebotPageV3.tsx [79L] — TypebotPageV3()

## apps/viewer/src/features/preview/
- Preview.tsx [104L] — Preview()

## apps/viewer/src/helpers/
- authenticateUser.ts [36L] — extractBearerToken()

## apps/viewer/src/lib/
- google-tag-manager.ts [10L] — gtmHeadSnippet()

## apps/viewer/src/pages/
- [[...publicId]].tsx [318L] — log(), App()
- __preview.tsx [4L]
- _app.tsx [19L] — MyApp()
- _document.tsx [16L] — Document()
- _error.tsx [39L] NOTE: This requires `@sentry/nextjs` version 7.3.0 or higher.

## apps/viewer/src/scripts/
- generateOpenApiSpec.ts [21L]
- preloadOpenApiGenerationStubs.ts [34L] OpenAPI generation only traverses contracts and never runs handlers, so

## apps/viewer/src/test/
- ai.spec.ts [22L]
- analytics.spec.ts [92L]
- cards.spec.ts [28L]
- chat.spec.ts [571L] — createCredentialSinkServer()
- chatwoot.spec.ts [30L]
- commandEvent.spec.ts [53L]
- condition.spec.ts [28L]
- dynamicAvatars.spec.ts [70L]
- embed.spec.ts [48L]
- fileUpload.spec.ts [162L]
- global.setup.ts [7L]
- httpRequest.spec.ts [32L]
- payment.spec.ts [23L]
- redirect.spec.ts [17L]
- rememberUser.spec.ts [24L]
- replyEvent.spec.ts [48L]
- results.spec.ts [45L]
- return.spec.ts [20L]
- sendEmail.spec.ts [42L]
- setVariable.spec.ts [19L]
- settings.spec.ts [177L]
- ssrf.spec.ts [69L] Test 1: Block AWS metadata endpoint
- transcript.spec.ts [58L]
- typebotLink.spec.ts [61L]
- variables.spec.ts [20L]
- webhookListener.spec.ts [38L]

## apps/viewer/src/test/assets/typebots/
- analytics.json [357L]
- api.json [359L]
- basic-chat-completion.json [165L]
- cards.json [223L]
- commandEvent.json [199L]
- condition.json [240L]
- dynamicAvatars.json [165L]
- fileUpload.json [129L]
- hugeGroup.json [135L]
- lots-results.json [1L]
- payment.json [95L]
- predefinedVariables.json [116L]
- qr-code.json [1L]
- redirect.json [70L]
- rememberUser.json [1L]
- replyEvent.json [379L]
- return.json [111L]
- sendEmail.json [152L]
- setVariable.json [71L]
- ssrf-test.json [179L]
- transcript-2.json [146L]
- transcript.json [201L]
- webhook.json [258L]
- webhookListener.json [103L]

## apps/viewer/src/test/assets/typebots/chat/
- linkedBot.json [97L]
- main.json [434L]
- startingWithInput.json [93L]

## apps/viewer/src/test/assets/typebots/linkTypebots/
- 1-merge-disabled.json [51L]
- 1.json [114L]
- 2.json [125L]
- 3.json [72L]

## apps/viewer/src/test/utils/
- databaseActions.ts [22L] — createSmtpCredentials()
- playwright.ts [5L] — getTestAsset()

## apps/workflows/
- Dockerfile [33L] syntax=docker/dockerfile:1.7
- Dockerfile.dockerignore [120L]
- fly.toml [35L] See https://fly.io/docs/reference/configuration/
- package.json [56L]
- tsconfig.app.json [52L]
- tsconfig.json [11L]

## apps/workflows/src/
- index.ts [210L]
- reportFatalCauseToSentry.ts [30L]
- sentry.ts [8L]
