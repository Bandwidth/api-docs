const YAML = require('yaml');
const fs = require('fs');
const path = require('path');

const phoneNumberLookupSpec = fs.readFileSync('./specs/phoneNumberLookup.json', 'utf-8');
const voiceSpec = fs.readFileSync('./specs/voice.json', 'utf-8');
const messagingSpec = fs.readFileSync('./specs/messaging.json', 'utf-8');
const webRtcSpec = fs.readFileSync('./specs/webRtc.json', 'utf-8');
const multiFactorAuthSpec = fs.readFileSync('./specs/multiFactorAuth.json', 'utf-8');
const dashSpec = fs.readFileSync('./specs-ignore/dash.json', 'utf-8');
const dashNotificationsSpec = fs.readFileSync('./specs-ignore/dashNotifications.json', 'utf-8');
// const messagingInternationalSpec = fs.readFileSync('./specs/messagingInternational.json', 'utf-8');
// const numbersSpec = fs.readFileSync('./specs/numbers.json', 'utf-8');

module.exports = {
    title: 'Bandwidth API Docs',
    tagline: 'Learn About Bandwidth\'s Product API\'s',
    url: 'https://new.dev.bandwidth.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'bandwidth', // Usually your GitHub org/user name.
    projectName: 'api-docs', // Usually your repo name.
    themeConfig: {
        image: 'img/bandwidth.png', // used for meta tag
        colorMode: {
            disableSwitch: false // for disabling dark mode
        },
        algolia: {
            apiKey: '240bfd4951231197541ea28184808812',
            indexName: 'bandwidth',
            contextualSearch: false, // useful for versioned Docusaurus sites
        },
        googleAnalytics: {
            trackingID: 'UA-62651840-1',
            anonymizeIP: false,
        },
        announcementBar: {
            id: 'new_docsite_flag', // Any value that will identify this message.
            content: 'Welcome to the new home of Bandwidth\'s Developer Documentation. To visit the old docs, <a target="_blank" href="https://dev.bandwidth.com/">click here.</a>',
            backgroundColor: '#FFFFFF', // Defaults to `#fff`.
            textColor: '#079CEE', // Defaults to `#000`.
            isCloseable: false, // Defaults to `true`.
        },
        // this is broken
        // prism: {
        //   additionalLanguages: ['java', 'csharp', 'php', 'ruby'],
        // },
        sidebarCollapsible: true,
        navbar: {
            title: '',
            hideOnScroll: false,
            logo: {
                alt: 'Bandwidth',
                src: 'img/bandwidth-logo-navbar.png',
            },
            items: [{
                to: 'docs',
                activeBasePath: 'docs',
                label: 'Docs',
                position: 'left',
            }, {
                label: 'API Reference',
                items: [{
                    to: 'apis/numbers',
                    label: 'Numbers'
                }, {
                    to: 'apis/number-lookup',
                    label: 'Phone Number Lookup'
                }, {
                    to: 'apis/voice',
                    label: 'Voice'
                }, {
                    to: 'apis/messaging',
                    label: 'Messaging'
                }, {
                    to: 'apis/multifactorauth',
                    label: 'Multi-Factor Authentication'
                }, {
                    to: 'apis/webrtc',
                    label: 'WebRTC'
                }, {
                    to: 'apis/dash',
                    label: 'DASH'
                }, {
                    to: 'apis/dash-notifications',
                    label: 'DASH Notifications'
                }]
            }, {
                to: 'sdks',
                label: 'SDKs',
                activeBasePath: 'sdks'
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
            links: [{
                    title: 'Docs',
                    items: [{
                            label: 'Guides & Tutorials',
                            to: '/docs/',
                        }, {
                            to: 'changelog',
                            activeBasePath: 'changelog',
                            label: 'Changelog',
                        },
                        {
                            label: 'Legacy v1 Docs',
                            href: 'https://old.dev.bandwidth.com/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                        label: 'Developer Forum',
                        href: 'http://bandwidthdashboard.discussion.community/',
                    }],
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
                }
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
                    editUrl: 'https://github.com/Bandwidth/api-docs/edit/main/site/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/Bandwidth/api-docs/edit/main/site/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }
        ],
    ],
    customFields: {
        // numbersSpec: JSON.parse(numbersSpec),
        phoneNumberLookupSpec: JSON.parse(phoneNumberLookupSpec),
        voiceSpec: JSON.parse(voiceSpec),
        messagingSpec: JSON.parse(messagingSpec),
        // messagingInternationalSpec: JSON.parse(messagingInternationalSpec),
        webRTCSpec: JSON.parse(webRtcSpec),
        multiFactorAuthSpec: JSON.parse(multiFactorAuthSpec),
        dashSpec: JSON.parse(dashSpec),
        dashNotificationsSpec: JSON.parse(dashNotificationsSpec),
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
