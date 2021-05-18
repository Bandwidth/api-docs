module.exports = {
  mySidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction'
    },
    {
      type: 'category',
      label: 'Account',
      items: [
        'account/about',
        {
          type: 'category',
          label: 'Guides and Tutorials',
          items: [
                  'account/guides/structure',
                  'account/guides/credentials',
                 ]
        },
        {
          type: 'category',
          label: 'Applications',
          items: []
        },
        {
          type: 'category',
          label: 'Subscriptions',
          items: []
        },
      ],
    },
    {
      type: 'category',
      label: 'Numbers',
      items: [
        'numbers/about',
        {
          type: 'category',
          label: 'Guides and Tutorials',
          items: []
        },
      ],
    },
    {
      type: 'category',
      label: 'Voice',
      items: [
        'voice/about',
        {
          type: 'category',
          label: 'Guides and Tutorials',
          items: []
        },
      ],
    },
    {
      type: 'category',
      label: 'Messaging',
      items: [
        'messaging/about',
        {
          type: 'category',
          label: 'Guides and Tutorials',
          items: []
        },
      ],
    },
    {
      type: 'category',
      label: 'WebRTC',
      items: [
        'webrtc/about',
        {
          type: 'category',
          label: 'Guides and Tutorials',
          items: []
        },
      ],
    },
    {
      type: 'category',
      label: 'Multi-Factor Authentication',
      items: [
        'mfa/about',
        {
          type: 'category',
          label: 'Guides and Tutorials',
          items: []
        },
      ],
    },
    {
      type: 'category',
      label: 'Emergency Services',
      items: [
        'emergency/about',
        {
          type: 'category',
          label: 'Guides and Tutorials',
          items: []
        },
      ],
    }
  ],
};
