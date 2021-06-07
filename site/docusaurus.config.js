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
  url: 'https://dev.bandwidth.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bandwidth', // Usually your GitHub org/user name.
  projectName: 'api-docs', // Usually your repo name.
  themeConfig: {
    image: 'img/bandwidth.png',    // used for meta tag
    colorMode: {
      disableSwitch: false    // for disabling dark mode
    },
    announcementBar: {
      id: 'new_docsite_flag', // Any value that will identify this message.
      content:
        'Welcome to the new home of Bandwidth\'s Developer Documentation. To visit the old docs, <a target="_blank" href="https://dev.bandwidth.com/">click here.</a>',
      backgroundColor: '#FFFFFF', // Defaults to `#fff`.
      textColor: '#079CEE', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    // this is broken
    // prism: {
    //   additionalLanguages: ['java', 'csharp', 'php'],
    // },
    sidebarCollapsible: true,
    navbar: {
      title: 'Bandwidth',
      hideOnScroll: false,
      logo: {
        alt: 'Bandwidth',
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
        to: 'docs',
        activeBasePath: 'docs',
        label: 'Docs',
        position: 'left',
      }, {
        href: 'https://github.com/Bandwidth-Samples',
        label: 'Samples',
        position: 'left',
      }]
    },
    footer: {
      style: "dark",
      logo: {
        alt: 'Bandwidth',
        src: 'img/bandwidth-logo-footer.png',
        href: 'https://www.bandwidth.com',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides & Tutorials',
              to: '/docs/',
            }, {
              to: 'changelog',
              activeBasePath: 'changelog',
              label: 'Changelog',
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
            {
              label: 'API Design Standards',
              activeBasePath: 'api-design-standards',
              to: 'api-design-standards',
            }
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
            }, {
              label: 'Try Sandbox',
              href: 'https://simulator.bandwidth.com/'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bandwidth Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebar.js'),
          editUrl:
            'https://github.com/Bandwidth/api-docs/edit/main/site/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Bandwidth/api-docs/edit/main/site/',
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
      multiFactorAuthSpec: JSON.parse(multiFactorAuthSpec),
      // CSS Colors
      bwBlue: '#079CEE',
      voicePurple: '#9a59c5',
      messagingGreen: '#00bf8c',
      emergencyOrange: '#ff6f47',
      numbersMaroon: '#652B51',
      white: '#FFFFFF',
      lightBlue: '#E6F5FD',
      grey: '#9C9A9B',
      midnight: '#084f7A',
      black: '#090306',
      redocCodeBackground: '#263238',
    },
    plugins: [path.resolve(__dirname, 'redoc-plugin')],
};
