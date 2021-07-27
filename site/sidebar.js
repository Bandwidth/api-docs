module.exports = {
  mySidebar: [
    {
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
        "account/setup",
        "account/applications",
        "account/subscriptions",
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
      ],
    },
    {
      type: "category",
      label: "Voice",
      items: [
        "voice/about",
        {
          type: "category",
          label: "Webhooks",
          items: [],
        },
        {
          type: "category",
          label: "BXML",
          items: [
            "voice/bxml",
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
            "voice/recordingGuide",
            "voice/cnamPerDipGuide",
          ],
        },
        "voice/rateLimits",
        "voice/errors",
      ]},
    {
      type: "category",
      label: "Messaging",
      items: [
        "messaging/about",
        "messaging/webhooks",
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
      ],
    },
    {
      type: "category",
      label: "WebRTC",
      items: [
        "webrtc/about",
        {
          type: "category",
          label: "Guides and Tutorials",
          items: [
            "webrtc/overview",
            "webrtc/quickstart",
            "webrtc/resources",
            "webrtc/callflow",
          ],
        },
        "webrtc/errors",
      ],
    },
    {
      type: "category",
      label: "Multi-Factor Authentication",
      items: ["mfa/about", "mfa/errors", "mfa/rateLimits"],
    },
    {
      type: "category",
      label: "Emergency Services",
      items: [
        "emergency/about",
        {
          type: "category",
          label: "Guides and Tutorials",
          items: [],
        },
      ],
    },
  ],
};
