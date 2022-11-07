module.exports = {
    mySidebar: [{
            type: "doc",
            id: "intro",
            label: "Introduction",
        },
        {
            type: "doc",
            id: "versions",
            label: "Versions"
        },
        {
            type: "category",
            label: "Account Management",
            items: [
                "account/about",
                "account/credentials",
                "account/structure",
                {
                    type: "category",
                    label: "Setup",
                    items: [
                        "account/dashboard-setup",
                        "account/programmatic-setup",
                    ]
                },
                "account/applications",
                "account/subscriptions",
                "account/networkBridge",
                "account/sipRegistrar",
            ],
        },
        {
            type: "category",
            label: "Numbers",
            items: [
                "numbers/about",
                {
                    type: "category",
                    label: "Webhooks",
                    items: [
                        "numbers/webhooks",
                        "numbers/orderWebhook",
                        "numbers/eventWebhook",
                        "numbers/portoutValidationWebhook",
                    ],
                },
                {
                    type: "category",
                    label: "Guides and Tutorials",
                    items: [
                        "numbers/searchingAndOrderingNumbers",
                        {
                            type: "category",
                            label: "Porting numbers",
                            items: [
                                "numbers/porting/csrLookup",
                                "numbers/porting/lnpChecker",
                                "numbers/porting/portingNumbers",
                                "numbers/porting/loaUpload",
                                "numbers/porting/updatePortin",
                                "numbers/porting/createBulkPortins",
                                "numbers/porting/updateBulkPortins",
                                "numbers/porting/submitBulkPortins",
                                "numbers/porting/lsrOrders",
                            ],
                        },
                        "numbers/hostingNumbers",
                        {
                            type: "category",
                            label: "How to manage your inventory",
                            items: [
                                "numbers/manage-inventory/searchYourNumbers",
                                "numbers/manage-inventory/applyTnOptionsAndFeatures",
                                "numbers/manage-inventory/setFailoverUri"
                            ]
                        },
                        "numbers/disconnectNumbers",
                        "numbers/lookupNumbers",
                        {
                            type: "category",
                            label: "How to request Numbers reports",
                            items: [
                                "numbers/setup-reports/accountReports",
                                "numbers/setup-reports/billingReports",
                            ]
                        },
                    ],
                },
                "numbers/errors",
                {
                    type: "link",
                    label: "API Reference",
                    href: "https://dev.bandwidth.com/apis/numbers"
                },
            ],
        },
        {
            type: "category",
            label: "Voice",
            items: [
                "voice/about",
                "voice/quickStart",
                {
                    type: "category",
                    label: "Webhooks",
                    items: [
                        "voice/webhooks/about",
                        "voice/webhooks/answer",
                        "voice/webhooks/bridgeComplete",
                        "voice/webhooks/bridgeTargetComplete",
                        "voice/webhooks/conferenceCreated",
                        "voice/webhooks/conferenceRedirect",
                        "voice/webhooks/conferenceMemberJoin",
                        "voice/webhooks/conferenceMemberExit",
                        "voice/webhooks/conferenceCompleted",
                        "voice/webhooks/conferenceRecordingAvailable",
                        "voice/webhooks/disconnect",
                        "voice/webhooks/dtmf",
                        "voice/webhooks/gather",
                        "voice/webhooks/initiate",
                        "voice/webhooks/machineDetectionComplete",
                        "voice/webhooks/mediaStreamStarted",
                        "voice/webhooks/mediaStreamRejected",
                        "voice/webhooks/mediaStreamStopped",
                        "voice/webhooks/recordComplete",
                        "voice/webhooks/recordingAvailable",
                        "voice/webhooks/redirect",
                        "voice/webhooks/transcriptionAvailable",
                        "voice/webhooks/transferAnswer",
                        "voice/webhooks/transferComplete",
                        "voice/webhooks/transferDisconnect",
                    ],
                },
                {
                    type: "category",
                    label: "BXML",
                    items: [
                        "voice/bxml/about",
                        "voice/bxml/conference",
                        "voice/bxml/bridge",
                        "voice/bxml/pause",
                        "voice/bxml/forward",
                        "voice/bxml/transfer",
                        "voice/bxml/ring",
                        "voice/bxml/hangup",
                        "voice/bxml/redirect",
                        "voice/bxml/playAudio",
                        "voice/bxml/speakSentence",
                        "voice/bxml/record",
                        "voice/bxml/startRecording",
                        "voice/bxml/pauseRecording",
                        "voice/bxml/resumeRecording",
                        "voice/bxml/stopRecording",
                        "voice/bxml/gather",
                        "voice/bxml/startGather",
                        "voice/bxml/stopGather",
                        "voice/bxml/sendDtmf",
                        "voice/bxml/startStream",
                        "voice/bxml/stopStream",
                        "voice/bxml/tag",
                    ],
                },
                {
                    type: "category",
                    label: "Guides and Tutorials",
                    items: [
                        "voice/outboundCallGuide",
                        "voice/mediaAndTTSGuide",
                        "voice/recordingGuide",
                        "voice/interactiveVoiceResponseGuide",
                        "voice/machineDetectionGuide",
                        "voice/conferenceGuide",
                        "voice/modifyInProgressCallGuide",
                        "voice/transferGuide",
                        "voice/callInformationGuide",
                        "voice/callQueueingGuide",
                        "voice/migrationGuide",
                        "voice/cnamPerDipGuide",
                        "voice/webCallingGuide"
                    ],
                },
                "voice/rateLimits",
                "voice/errors",
                {
                    type: "link",
                    label: "API Reference",
                    href: "https://dev.bandwidth.com/apis/voice"
                },
            ],
        },
        {
            type: "category",
            label: "Messaging",
            items: [
                "messaging/about",
                "messaging/quickStart",
                "messaging/webhooks",
                "messaging/international",
                {
                    type: "category",
                    label: "Guides and Tutorials",
                    items: [
                        "messaging/createMessage",
                        "messaging/getMessage",
                        "messaging/mediaManagement",
                    ],
                },
                {
                    type: "category",
                    label: "Campaign Management",
                    items: [
                        "messaging/campaign-management/about",
                        {
                            type: "category",
                            label: "10DLC CSP Campaigns",
                            items: [
                                "messaging/campaign-management/cspabout",
                                "messaging/campaign-management/csp/reseller-brand-api",
                                "messaging/campaign-management/csp/brand-vetting-api",
                                "messaging/campaign-management/csp/campaign-api",
                                "messaging/campaign-management/csp/faq",
                            ],
                        },
                        {
                            type: "category",
                            label: "10DLC Campaign Imports",
                            items: [
                                "messaging/campaign-management/importsabout",
                                "messaging/campaign-management/imports/imports-ui",
                                "messaging/campaign-management/imports/imports-api",
                                "messaging/campaign-management/imports/manage-multiple-csp",
                                "messaging/campaign-management/imports/faq",
                            ],
                        },
                    ],
                },
                "messaging/rateLimits",
                "messaging/errors",
                {
                    type: "link",
                    label: "API Reference",
                    href: "https://dev.bandwidth.com/apis/messaging"
                },
            ],
        },
        {
            type: "category",
            label: "WebRTC",
            items: [
                "webrtc/about",
                "webrtc/webhooks",
                {
                    type: "category",
                    label: "Guides and Tutorials",
                    items: [
                        "webrtc/overview",
                        "webrtc/quickstart",
                        "webrtc/resources",
                        "webrtc/voice-iw",
                        "webrtc/callflow",
                    ],
                },
                "webrtc/errors",
                {
                    type: "link",
                    label: "API Reference",
                    href: "https://dev.bandwidth.com/apis/webrtc"
                },
            ],
        },
        {
            type: "category",
            label: "Multi-Factor Authentication",
            items: [
                "mfa/about",
                "mfa/errors",
                "mfa/rateLimits",
                {
                    type: "category",
                    label: "Webhooks",
                    items: [
                        "mfa/webhooks/aboutMfaWebhooks",
                        "mfa/webhooks/northAmerica/messageDeliveredNorthAmericaMfaWebhooks",
                        "mfa/webhooks/northAmerica/messageFailedNorthAmericaMfaWebhooks",
                        "mfa/webhooks/international/messageDeliveredInternationalMfaWebhooks",
                        "mfa/webhooks/international/messageFailedInternationalMfaWebhooks",
                    ],
                },
                {
                    type: "link",
                    label: "API Reference",
                    href: "https://dev.bandwidth.com/apis/multifactorauth"
                },
            ],
        },
        {
            type: "category",
            label: "Emergency Services",
            items: [
                "emergency/about",
                {
                    type: "category",
                    label: "Bandwidth Dashboard",
                    items: [
                        "emergency/dashboard/about",
                        "emergency/dashboard/dlr",
                        "emergency/dashboard/notifications",
                    ],
                },
                {
                    type: "category",
                    label: "911 Access Dashboard",
                    items: [
                        "emergency/dash/about",
                        "emergency/dash/usage",
                        "emergency/dash/soap",
                        "emergency/dash/errors",
                        {
                            type: "link",
                            label: "API Reference",
                            href: "https://dev.bandwidth.com/apis/dash"
                        },
                    ],
                },
                "emergency/emergencyCallingApi",
            ],
        },
    ],
};
