require("dotenv").config();
const YAML = require("yaml");
const fs = require("fs");
const path = require("path");

const customConfig = require("./custom.config.json");
const blogPosts = require("./blogposts.config.json");
const ltsVersions = require("./lts.config.json");
const numbersSpec = fs.readFileSync("./specs/numbers.yml", "utf-8");
const numbersSpec_v2 = fs.readFileSync("./specs/numbers_v2.yml", "utf-8");
const phoneNumberLookupSpec = fs.readFileSync(
  "./specs/phone-number-lookup.yml",
  "utf-8"
);
const voiceSpec = fs.readFileSync("./specs/voice.yml", "utf-8");
const activeCallInfoSpec = fs.readFileSync('./specs/active-call-info.yml', 'utf-8');
const messagingSpec = fs.readFileSync("./specs/messaging.yml", "utf-8");
const webRtcSpec = fs.readFileSync("./specs/webrtc.yml", "utf-8");
const multiFactorAuthSpec = fs.readFileSync(
  "./specs/multi-factor-auth.yml",
  "utf-8"
);
const dashSpec = fs.readFileSync("./specs/dash.json", "utf-8");
const dashNotificationsSpec = fs.readFileSync(
  "./specs/dashNotifications.json",
  "utf-8"
);
const messagingInternationalSpec = fs.readFileSync(
  "./specs/messagingInternational.json",
  "utf-8"
);
const globalSpec = fs.readFileSync("./specs/global.yml", "utf-8");
const globalSpec_v2 = fs.readFileSync("./specs/global-v2.yml", "utf-8");
const globalSpec_v3 = fs.readFileSync("./specs/global-v3.yml", "utf-8");
const globalSpec_beta = fs.readFileSync("./specs/global-beta.yml", "utf-8");
const identitySpec = fs.readFileSync(
  "./specs/one-identity-management.yml",
  "utf-8"
);
const identityspecLink = "";
const insightsSpec = fs.readFileSync("./specs/insights.yml", "utf-8");

module.exports = {
  title: "Bandwidth API Docs",
  tagline: "Learn About Bandwidth's Product APIs",
  url: "https://dev.bandwidth.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: undefined,
  organizationName: "bandwidth",
  projectName: "api-docs",
  themeConfig: {
    image: "img/bw-icon.svg", // used for meta tag
    colorMode: {
      disableSwitch: false, // for disabling dark mode
    },
    algolia: {
      appId: "DJ56W2DX1L",
      apiKey: "865921f3caf63083e8d54552b5ab7a79",
      indexName: "bandwidth",
      contextualSearch: false, // useful for versioned Docusaurus sites
    },
    navbar: {
      title: "",
      hideOnScroll: false,
      logo: {
        alt: "Bandwidth",
        src: "img/dev-docs-logo.svg",
      },
      items: [
        {
          type: "dropdown",
          label: "US & Canada APIs",
          position: "left",
          items: [
            {
              to: "docs",
              activeBasePath: "docs",
              label: "Guides",
            },
            {
              to: "apis",
              label: "API Reference",
              activeBasePath: "apis",
            },
            {
              to: "sdks",
              label: "SDKs",
              activeBasePath: "sdks",
            },
            {
              to: "https://github.com/Bandwidth-Samples",
              label: "Samples",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Global APIs",
          position: "left",
          items: [
            {
              to: "global-guides",
              activeBasePath: "global-guides",
              label: "Guides",
            },
            {
              to: "apis/global",
              label: "API Reference",
            },
          ],
        },
        {
          href: "https://github.com/Bandwidth",
          position: "right",
          className: "github-link",
          title: "Github Organization",
        },
        {
          href: "https://www.postman.com/bandwidth", // TODO: update with real postman url
          position: "right",
          className: "postman-link",
          title: "Postman Collection",
        },
        {
          href: "https://www.bandwidth.com/login/",
          position: "right",
          className: "login-link",
          title: "Login",
        },
      ],
    },
    // prism: {
    //     additionalLanguages: ['java'],  // Breaks if you try to add more than 1 language. And still breaks redoc :((((
    // },
  },
  scripts: [
    {
      src: "https://zna4mkbqfujeowh1i-voxbone.siteintercept.qualtrics.com/SIE/?Q_ZID=ZN_a4MKBQfuJeoWH1I",
      async: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebar.js"),
          editUrl: "https://github.com/Bandwidth/api-docs/edit/main/site/",
          sidebarCollapsible: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Bandwidth/api-docs/edit/main/site/",
        },
        theme: {
          customCss: require.resolve("./src/css/main.scss"),
        },
        googleAnalytics: {
          trackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
          anonymizeIP: false,
        },
        gtag: {
          trackingID: process.env.GTAG_TRACKING_ID,
          anonymizeIP: false,
        },
      },
    ],
  ],
  customFields: {
    numbersSpec: YAML.parse(numbersSpec),
    numbersSpecLink: `${customConfig.numbersSpecLink}`,
    numbersSpec_v2: YAML.parse(numbersSpec_v2),
    numbersSpec_v2Link: `${customConfig.numbersSpec_v2Link}`,
    phoneNumberLookupSpec: YAML.parse(phoneNumberLookupSpec),
    phoneNumberLookupSpecLink: `${customConfig.phoneNumberLookupSpecLink}`,
    voiceSpec: YAML.parse(voiceSpec),
    voiceSpecLink: `${customConfig.voiceSpecLink}`,
    activeCallInfoSpec: YAML.parse(activeCallInfoSpec),
    activeCallInfoSpecLink: `${customConfig.activeCallInfoSpecLink}`,
    messagingSpec: YAML.parse(messagingSpec),
    messagingSpecLink: `${customConfig.messagingSpecLink}`,
    messagingInternationalSpec: JSON.parse(messagingInternationalSpec),
    messagingInternationalSpecLink: `${customConfig.messagingInternationalSpecLink}`,
    webRTCSpec: YAML.parse(webRtcSpec),
    webRtcSpecLink: `${customConfig.webRtcSpecLink}`,
    multiFactorAuthSpec: YAML.parse(multiFactorAuthSpec),
    multiFactorAuthSpecLink: `${customConfig.multiFactorAuthSpecLink}`,
    dashSpec: JSON.parse(dashSpec),
    dashSpecLink: `${customConfig.dashSpecLink}`,
    dashNotificationsSpec: JSON.parse(dashNotificationsSpec),
    dashNotificationsSpecLink: `${customConfig.dashNotificationsSpecLink}`,
    globalSpec: YAML.parse(globalSpec),
    globalSpec_v2: YAML.parse(globalSpec_v2),
    globalSpec_v3: YAML.parse(globalSpec_v3),
    globalSpec_beta: YAML.parse(globalSpec_beta),
    identitySpec: YAML.parse(identitySpec),
    identitySpecLink: `${customConfig.dashNotificationsSpecLink}`,
    insightsSpec: YAML.parse(insightsSpec),
    insightsSpecLink: `${customConfig.insightsSpecLink}`,

    blogPosts: blogPosts,

    ltsVersions: ltsVersions,

    // CSS Colors
    bwBlue: "#079CEE",
    voicePurple: "#9a59c5",
    messagingGreen: "#00bf8c",
    emergencyOrange: "#ff6f47",
    numbersMaroon: "#652B51",
    webRtcBlue: "#194F7A",
    mfaGreen: "#106149",
    white: "#FFFFFF",
    lightBlue: "#E6F5FD",
    grey: "#9C9A9B",
    midnight: "#084f7A",
    black: "#090306",
    redocCodeBackground: "#263238",
  },
  plugins: [
    path.resolve(__dirname, "redoc-plugin"),
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "migration-guides",
        path: "migration-guides",
        routeBasePath: "migration-guides",
        sidebarPath: require.resolve("./sidebarsMigrationGuides.js"),
        editUrl: "https://github.com/Bandwidth/api-docs/edit/main/site/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "global-guides",
        path: "global-guides",
        routeBasePath: "global-guides",
        sidebarPath: require.resolve("./sidebarsGlobalGuides.js"),
        editUrl: "https://github.com/Bandwidth/api-docs/edit/main/site/",
      },
    ],
    "docusaurus-plugin-sass",
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};
