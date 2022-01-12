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
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [
                    {
                        to: '/',
                        from: ['/about',
                            '/getStarted',
                            '/tnbp',
                            '/ap-docs/methods/restApi.html'],
                    },
                    {
                        to: '/apis/messaging',
                        from: '/v2-messaging',
                    },
                    {
                        to: '/apis/messaging',  // /apis/messaging#operation/CreateMessage
                        from: '/messaging/methods/messages/createMessage',
                    },
                    {
                        to: '/apis/messaging',  // /apis/messaging#operation/GetMessages
                        from: '/messaging/methods/messages/getMessages',
                    },
                    {
                        to: '/apis/multifactorauth',   // /apis/multifactorauth#operation/voiceTwoFactor
                        from: '/mfa/methods/code/voice',
                    },
                    {
                        to: '/apis/numbers',
                        from: '/numbers/apiReference',
                    },
                    {
                        to: '/apis/voice', // /apis/voice#operation/createCall
                        from: '/howto/outboundCall',
                    },
                    {
                        to: '/docs/',
                        from: '/guideToGuides',
                    },
                    {
                        to: '/docs/account/applications',
                        from: '/account/applications/about',
                    },
                    {
                        to: '/docs/account/credentials',
                        from: ['/guides/accountCredentials',
                            '/security'],
                    },
                    {
                        to: '/docs/account/dashboard-setup',
                        from: ['/account/guides/bandwidthAccountSetupGuide',
                            '/docs/phone-numbers/concepts/accountConfig',
                            '/getStartedSetupGuide'],
                    },
                    {
                        to: '/docs/account/networkBridge',
                        from: '/howto/networkBridge',
                    },
                    {
                        to: '/docs/account/programmatic-setup',
                        from: ['/account/guides/programmaticApplicationSetup',
                            '/getStartedProgGuide'],
                    },
                    {
                        to: '/docs/account/sipRegistrar',
                        from: '/howto/sip',
                    },
                    {
                        to: '/docs/messaging',
                        from: ['/howto/sendSMSMMS',
                            '/messaging/about',
                            '/messaging/about.html'],
                    },
                    {
                        to: '/docs/messaging/campaign-management',
                        from: '/campaigns/about'
                    },
                    {
                        to: '/docs/messaging/errors',
                        from: '/messaging/errors/codes', // /messaging/errors/codes.html#error-code-schema
                    },
                    {
                        to: '/docs/messaging/errors',  // /docs/messaging/errors#bandwidth-detected-client-errors
                        from: '/messaging/errors/codes/codes',
                    },
                    {
                        to: '/docs/messaging/quickStart',
                        from: '/howto/messaging',
                    },
                    {
                        to: '/docs/messaging/webhooks',
                        from: ['/howto/incomingCallandMessaging',
                            '/messaging/callbacks/messageEvents',
                            '/v2-messaging/events/messageEvents',
                            '/howto/smsDLR'],
                    },
                    {
                        to: '/docs/messaging/webhooks',   // /docs/messaging/webhooks#message-delivered
                        from: '/messaging/callbacks/msgDelivered',
                    },
                    {
                        to: '/docs/messaging/webhooks',   // /docs/messaging/webhooks#message-failed
                        from: '/messaging/callbacks/messageFailed',
                    },
                    {
                        to: '/docs/mfa',
                        from: ['/mfa',
                            '/mfa/about'],
                    },
                    {
                        to: '/docs/numbers',
                        from: ['/numbers/about',
                            '/docs/phone-numbers',
                            '/howto/phonenumbers'],
                    },
                    {
                        to: '/docs/numbers/guides/orderingNumbers',
                        from: ['/howto/buytn',
                            '/numbers/guides/onDemandNumberSearchAndOrder'],
                    },
                    {
                        to: '/docs/numbers/guides/portingNumbers',
                        from: '/docs/phone-numbers/guides/portingPhoneNumbers',
                    },
                    {
                        to: '/docs/numbers/guides/searchingForNumbers',
                        from: ['/docs/phone-numbers/guides/onDemandNumberSearchAndOrder',
                            '/numbers/guides/searchForNumbers'],
                    },
                    {
                        to: '/docs/numbers/webhooks',
                        from: '/guides/callbacks/callbacks',
                    },
                    {
                        to: '/docs/voice',
                        from: ['/voice/about',
                            '/howto/voice'],
                    },
                    {
                        to: '/docs/voice/bxml',
                        from: ['/node-bandwidth/BXMLResponse',
                            '/voice/bxml/about'],
                    },
                    {
                        to: '/docs/voice/bxml/conference',
                        from: '/howto/conferenceCall',
                    },
                    {
                        to: '/docs/voice/bxml/forward',
                        from: '/howto/forwardACall',
                    },
                    {
                        to: '/docs/voice/bxml/gather',
                        from: '/howto/createGather',
                    },
                    {
                        to: '/docs/voice/bxml/playAudio',
                        from: '/howto/playAudio',
                    },
                    {
                        to: '/docs/voice/bxml/record',
                        from: '/howto/recordCall',
                    },
                    {
                        to: '/docs/voice/bxml/speakSentence',
                        from: '/howto/speakSentence',
                    },
                    {
                        to: '/docs/voice/guides/cnamPerDip',
                        from: '/voice/guides/cnamService',
                    },
                    {
                        to: '/docs/voice/guides/recording',
                        from: '/howto/voicemail',
                    },
                    {
                        to: '/docs/voice/quickStart',
                        from: '/callbackSecurity',
                    },
                    {
                        to: '/docs/voice/webhooks/transferComplete',
                        from: '/voice/bxml/callbacks/transferComplete',
                    },
                    {
                        to: '/docs/webrtc',
                        from: ['/howto/webrtc',
                            '/webrtc/about'],
                    },
                    {
                        to: '/docs/webrtc/overview',   // /docs/webrtc/overview#sessions
                        from: '/webrtc/methods/sessions/about',
                    },
                    {
                        to: '/docs/webrtc/quickstart',
                        from: '/webrtc/guides/quickstart',
                    },
                    {
                        to: '/sdks/',
                        from: ['/sdks/about',
                            '/getStartedPNSDKS',
                            '/getStartedVMDKS',
                            '/howto/BandwidthCodeExamples'],
                    },
                    {
                        to: '/sdks/csharp',
                        from: '/clientLib/csharp',
                    },
                    {
                        to: '/sdks/java',
                        from: '/clientLib/java',
                    },
                    {
                        to: '/sdks/node',
                        from: ['/node-bandwidth-extras/',
                            '/node-bandwidth/',
                            '/node-bandwidth/Account',
                            '/node-bandwidth/AccountResponse',
                            '/node-bandwidth/Application',
                            '/node-bandwidth/ApplicationListResponse',
                            '/node-bandwidth/ApplicationResponse',
                            '/node-bandwidth/AvailableNumber',
                            '/node-bandwidth/AvailableNumberResponse',
                            '/node-bandwidth/Bridge',
                            '/node-bandwidth/BridgeListResponse',
                            '/node-bandwidth/BridgeResponse',
                            '/node-bandwidth/Call',
                            '/node-bandwidth/CallResponse',
                            '/node-bandwidth/Conference',
                            '/node-bandwidth/ConferenceResponse',
                            '/node-bandwidth/Domain',
                            '/node-bandwidth/DomainResponse',
                            '/node-bandwidth/DownloadMediaFileResponse',
                            '/node-bandwidth/EndpointResponse',
                            '/node-bandwidth/Error',
                            '/node-bandwidth/ErrorResponse',
                            '/node-bandwidth/EventResponse',
                            '/node-bandwidth/ExtendedMessageResponse',
                            '/node-bandwidth/GatherResponse',
                            '/node-bandwidth/Media',
                            '/node-bandwidth/MediaFileResponse',
                            '/node-bandwidth/Message',
                            '/node-bandwidth/MessageError',
                            '/node-bandwidth/MessageListResponse',
                            '/node-bandwidth/MessageResponse',
                            '/node-bandwidth/NumberInfo',
                            '/node-bandwidth/NumberInfoResponse',
                            '/node-bandwidth/OrderedNumberResponse',
                            '/node-bandwidth/PhoneNumber',
                            '/node-bandwidth/PhoneNumberResponse',
                            '/node-bandwidth/Recording',
                            '/node-bandwidth/RecordingResponse',
                            '/node-bandwidth/TransactionListResponse',
                            '/node-bandwidth/TransactionResponse',
                            '/node-bandwidth/TranscriptionResponse',
                            '/node-bandwidth/global',
                            '/node-bandwidth/headerParsingLib',
                            '/node-bandwidth/index',
                            '/node-bandwidth/xml',
                            '/clientLib/node',
                            '/sdks/node.html'],
                    },
                    {
                        to: '/sdks/php',
                        from: '/clientLib/php',
                    },
                    {
                        to: '/sdks/python',
                        from: '/clientLib/python',
                    },
                    {
                        to: '/sdks/ruby',
                        from: '/clientLib/ruby',
                    },
                    {
                        to: '/docs/numbers/guides/lookupNumbers',
                        from: '/numbers/guides/tnLookup'
                    },
                    {
                        to: '/docs/messaging/campaign-management/csp/reseller-brand-api',
                        from: '/campaigns/csp/guides/bandwidth10dlcBrandCspApiGuide'
                    },
                ],
            },
        ],
        path.resolve(__dirname, 'redoc-plugin')
    ],
};
