const YAML = require('yaml');
const fs = require('fs');
const path = require('path');

const numbersSpec = fs.readFileSync('./specs-temp/numbers.json', 'utf-8');
const phoneNumberLookupSpec = fs.readFileSync('./specs/phoneNumberLookup.json', 'utf-8');
const voiceSpec = fs.readFileSync('./specs/voice.json', 'utf-8');
const messagingSpec = fs.readFileSync('./specs/messaging.json', 'utf-8');
const webRtcSpec = fs.readFileSync('./specs/webRtc.json', 'utf-8');
const multiFactorAuthSpec = fs.readFileSync('./specs/multi-factor-auth.yml', 'utf-8');
const dashSpec = fs.readFileSync('./specs/dash.json', 'utf-8');
const dashNotificationsSpec = fs.readFileSync('./specs/dashNotifications.json', 'utf-8');
const messagingInternationalSpec = fs.readFileSync('./specs/messagingInternational.json', 'utf-8');
const globalSpec = fs.readFileSync('./specs/global.yml', 'utf-8');
const globalSpec_v2 = fs.readFileSync('./specs/global-v2.yml', 'utf-8');
const globalSpec_beta = fs.readFileSync('./specs/global-beta.yml', 'utf-8');
const insightsSpec = fs.readFileSync('./specs/insights.yml', 'utf-8');

module.exports = {
    title: 'Bandwidth API Docs',
    tagline: 'Learn About Bandwidth\'s Product APIs',
    url: 'https://dev.bandwidth.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'bandwidth', 
    projectName: 'api-docs', 
    themeConfig: {
        image: 'img/bandwidth.png', // used for meta tag
        colorMode: {
            disableSwitch: false // for disabling dark mode
        },
        algolia: {
            appId: 'DJ56W2DX1L',
            apiKey: '865921f3caf63083e8d54552b5ab7a79',
            indexName: 'bandwidth',
            contextualSearch: false, // useful for versioned Docusaurus sites
        },
        announcementBar: {
            id: 'new_docsite_flag', // Any value that will identify this message.
            content: 'Welcome to the new home of Bandwidth\'s Developer Documentation. Please take a minute to <a target="_blank" href="https://forms.gle/CgaaBoNRzSp1XoWbA">provide any feedback you may have</a> on our new docsite!',
            backgroundColor: '#FFFFFF', // Defaults to `#fff`.
            textColor: '#079CEE', // Defaults to `#000`.
            isCloseable: false, // Defaults to `true`.
        },
        navbar: {
            title: '',
            hideOnScroll: false,
            logo: {
                alt: 'Bandwidth',
                src: 'img/bandwidth-logo-navbar.png',
            },
            items: [{
                type: 'dropdown',
                label: 'US & Canada APIs',
                position: 'left',
                items: [
                    {
                        to: 'docs',
                        activeBasePath: 'docs',
                        label: 'Docs',
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
                    }
                ]
            }, {
                type: 'dropdown',
                label: 'Global APIs',
                position: 'left',
                items: [
                    {
                        to: 'apis/global',
                        label: 'Docs & API Reference',
                    }
                ]
            }, {
                href: 'https://github.com/Bandwidth',
                position: 'right', 
                className: 'header-github-link'
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
        // Now this breaks redoc :sad: 
        // prism: {
        //     additionalLanguages: ['csharp', 'java', 'ruby', 'php'],
        //   },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebar.js'),
                    editUrl: 'https://github.com/Bandwidth/api-docs/edit/main/site/',
                    sidebarCollapsible: true,
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/Bandwidth/api-docs/edit/main/site/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                googleAnalytics: {
                    trackingID: 'UA-62651840-1',
                    anonymizeIP: false,
                },
            }
        ],
    ],
    customFields: {
        numbersSpec: JSON.parse(numbersSpec),
        phoneNumberLookupSpec: JSON.parse(phoneNumberLookupSpec),
        voiceSpec: JSON.parse(voiceSpec),
        messagingSpec: JSON.parse(messagingSpec),
        messagingInternationalSpec: JSON.parse(messagingInternationalSpec),
        webRTCSpec: JSON.parse(webRtcSpec),
        multiFactorAuthSpec: YAML.parse(multiFactorAuthSpec),
        dashSpec: JSON.parse(dashSpec),
        dashNotificationsSpec: JSON.parse(dashNotificationsSpec),
        globalSpec: YAML.parse(globalSpec),
        globalSpec_v2: YAML.parse(globalSpec_v2),
        globalSpec_beta: YAML.parse(globalSpec_beta),
        insightsSpec: YAML.parse(insightsSpec),

        // CSS Colors
        bwBlue: '#079CEE',
        voicePurple: '#9a59c5',
        voxbonePurple: '#6600ff',
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
