const YAML = require('yaml');
const fs = require('fs');
const path = require('path');
const numbersSpec = fs.readFileSync('./specs/numbers.json', 'utf-8');
const voiceSpec = fs.readFileSync('./specs/voice.json', 'utf-8');
const messagingSpec = fs.readFileSync('./specs/messaging.json', 'utf-8');
const messagingInternationalSpec = fs.readFileSync('./specs/messagingInternational.json', 'utf-8');
const webRtcSpec = fs.readFileSync('./specs/webRtc.json', 'utf-8');
const multiFactorAuthSpec = fs.readFileSync('./specs/multiFactorAuth.json', 'utf-8');

module.exports = {
  title: 'Bandwidth API Docs',
  tagline: 'Learn About Bandwidth\'s Product API\'s',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bandwidth', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [{
        label: 'API Reference',
        items: [{
          to: 'numbers-api-reference',
          label: 'Numbers'
        }, {
          to: 'voice-api-reference',
          label: 'Voice'
        }, {
          to: 'messaging-api-reference',
          label: 'Messaging'
        }, {
          to: 'messaging-international-api-reference',
          label: 'Messaging - International'
        }, {
          to: 'multifactorauth-api-reference',
          label: 'Multi-Factor Authentication'
        }, {
          to: 'webrtc-api-reference',
          label: 'WebRTC'
        }]
      }, {
        to: 'docs/',
        activeBasePath: 'docs',
        label: 'Docs',
        position: 'left',
      }, {
        href: 'https://github.com/Bandwidth-Samples',
        label: 'Sample Apps',
        position: 'right',
      }]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/Bandwidth-Samples',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bandwidth`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
      numbersSpec: JSON.parse(numbersSpec),
      voiceSpec: JSON.parse(voiceSpec),
      messagingSpec: JSON.parse(messagingSpec),
      messagingInternationalSpec: JSON.parse(messagingInternationalSpec),
      webRTCSpec: JSON.parse(webRtcSpec),
      multiFactorAuthSpec: JSON.parse(multiFactorAuthSpec)
    },
    plugins: [path.resolve(__dirname, 'redoc-plugin')],
};
