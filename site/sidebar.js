module.exports = {
    mySidebar: [{
            type: "doc",
            id: "intro",
            label: "Introduction",
        },
        {
            type: "category",
            label: "Account",
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
                        "numbers/searchingNumbers",
                        "numbers/orderingNumbers",
                        "numbers/portingNumbers",
                        "numbers/hostingNumbers",
                        "numbers/manageNumberFeatures",
                        "numbers/searchNumbers",
                        "numbers/disconnectNumbers",
                        "numbers/lookupNumbers",
                        "numbers/downloadingReports",
                    ],
                },
                "numbers/errors",
                {
                    type: "link",
                    label: "API Reference",
                    href: "https://new.dev.bandwidth.com/apis/numbers"
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
                        "voice/bxml/bridge",
                        "voice/bxml/conference",
                        "voice/bxml/forward",
                        "voice/bxml/gather",
                        "voice/bxml/hangup",
                        "voice/bxml/pause",
                        "voice/bxml/pauseRecording",
                        "voice/bxml/playAudio",
                        "voice/bxml/record",
                        "voice/bxml/redirect",
                        "voice/bxml/resumeRecording",
                        "voice/bxml/ring",
                        "voice/bxml/sendDtmf",
                        "voice/bxml/speakSentence",
                        "voice/bxml/startGather",
                        "voice/bxml/startRecording",
                        "voice/bxml/stopGather",
                        "voice/bxml/stopRecording",
                        "voice/bxml/tag",
                        "voice/bxml/transfer",
                    ],
                },
                {
                    type: "category",
                    label: "Guides and Tutorials",
                    items: [
                        "voice/machineDetectionGuide",
                        "voice/recordingGuide",
                        "voice/cnamPerDipGuide"
                    ],
                },
                "voice/rateLimits",
                "voice/errors",
                {
                    type: "link",
                    label: "API Reference",
                    href: "https://new.dev.bandwidth.com/apis/voice"
                },
            ],
        },
        {
            type: "category",
            label: "Messaging",
            items: [
                "messaging/about",
                "messaging/webhooks",
                "messaging/quickStart",
                {
                    type: "category",
                    label: "Guides and Tutorials",
                    items: [
                        "messaging/createMessage",
                        "messaging/getMessage",
                        "messaging/mediaManagement",
                    ],
                },
                "messaging/rateLimits",
                "messaging/errors",
                {
                    type: "link",
                    label: "API Reference",
                    href: "https://new.dev.bandwidth.com/apis/messaging"
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
                    href: "https://new.dev.bandwidth.com/apis/webrtc"
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
                    type: "link",
                    label: "API Reference",
                    href: "https://new.dev.bandwidth.com/apis/multifactorauth"
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
                            href: "https://new.dev.bandwidth.com/apis/dash"
                        },
                    ],
                },
                "emergency/emergencyCallingApi",
            ],
        },
    ],
};
