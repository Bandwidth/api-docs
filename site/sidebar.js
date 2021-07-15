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
          label: "Guides and Tutorials",
          items: [],
        }
      ]},
    {
      type: "category",
      label: "Messaging",
      items: [
        "messaging/about",
        {
          type: "category",
          label: "Guides and Tutorials",
          items: [],
        },
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
            "webrtc/callflow",
            "webrtc/resources"
          ],
        },
        "webrtc/errors"
      ],
    },
    {
      type: "category",
      label: "Multi-Factor Authentication",
      items: [
        "mfa/about",
        "mfa/errors",
        "mfa/rateLimits"
      ],
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
