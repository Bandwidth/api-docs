const YAML = require('yaml');
const fs = require('fs');
const path = require('path');

const phoneNumberLookupSpec = fs.readFileSync('./specs/phoneNumberLookup.json', 'utf-8');
const voiceSpec = fs.readFileSync('./specs/voice.json', 'utf-8');
const messagingSpec = fs.readFileSync('./specs/messaging.json', 'utf-8');
const webRtcSpec = fs.readFileSync('./specs/webRtc.json', 'utf-8');
const multiFactorAuthSpec = fs.readFileSync('./specs/multiFactorAuth.json', 'utf-8');
const dashSpec = fs.readFileSync('./specs-docs-only/dash.json', 'utf-8');
const dashNotificationsSpec = fs.readFileSync('./specs-docs-only/dashNotifications.json', 'utf-8');
const messagingInternationalSpec = fs.readFileSync('./specs-docs-only/messagingInternational.json', 'utf-8');
// const numbersSpec = fs.readFileSync('./specs/numbers.json', 'utf-8');

module.exports = {
    title: 'Bandwidth API Docs',
    tagline: 'Learn About Bandwidth\'s Product APIs',
    url: 'https://dev.bandwidth.com',
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
            apiKey: 'a3cad027f89dc3f5f0bcb7407572217b',
            indexName: 'bandwidth',
            contextualSearch: false, // useful for versioned Docusaurus sites
        },
        googleAnalytics: {
            trackingID: 'UA-62651840-1',
            anonymizeIP: false,
        },
        announcementBar: {
            id: 'new_docsite_flag', // Any value that will identify this message.
            content: 'Welcome to the new home of Bandwidth\'s Developer Documentation. Please take a minute to <a target="_blank" href="https://forms.gle/CgaaBoNRzSp1XoWbA">provide any feedback you may have</a> on our new docsite!',
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
                to: 'apis',
                label: 'API Reference',
                activeBasePath: 'apis'
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
                            href: 'https://v1.dev.bandwidth.com/',
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
                            href: 'https://sandbox.bandwidth.com'
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
        messagingInternationalSpec: JSON.parse(messagingInternationalSpec),
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
        webRtcBlue: '#194F7A',
        mfaGreen: '#106149',
        white: '#FFFFFF',
        lightBlue: '#E6F5FD',
        grey: '#9C9A9B',
        midnight: '#084f7A',
        black: '#090306',
        redocCodeBackground: '#263238',
    },
    plugins: [
        path.resolve(__dirname, 'redoc-plugin')
    ],
};
