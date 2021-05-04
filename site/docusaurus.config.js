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
  projectName: 'api-docs', // Usually your repo name.
  themeConfig: {
    image: 'img/bandwidth.png',    // used for meta tag
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false
    },
    announcementBar: {
      id: 'new_docsite_flag', // Any value that will identify this message.
      content:
        'Welcome to the new home of Bandwidth\'s Developer Documentation. To visit the old docs, <a target="_blank" href="https://dev.bandwidth.com/">click here.</a>',
      backgroundColor: '#FFFFFF', // Defaults to `#fff`.
      textColor: '#079CEE', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    navbar: {
      title: 'Bandwidth',
      logo: {
        alt: 'My Site Logo',
        src: 'img/bandwidth-logo.png',
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
        position: 'left',
      }, {
        to: 'changelog',
        activeBasePath: 'changelog',
        label: 'Changelog',
        position: 'left'
      }, {
        to: 'api-design-standards',
        activeBasePath: 'api-design-standards',
        label: 'API Design Standards',
        position: 'left'
      }]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides & Tutorials',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Developer Forum',
              href: 'http://bandwidthdashboard.discussion.community/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // 'Blog' 404's with no md files in the blog folder
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/Bandwidth',
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
          sidebarPath: require.resolve('./sidebar.js'),
          editUrl:
            'https://github.com/bandwidth/api-docs/edit/master/site/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/api-docs/edit/master/site/',
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
