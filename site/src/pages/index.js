import React from 'react';
import Layout from '@theme/Layout';
import LandingPage from '../components/LandingPage';

const productList = [
    {
        title: 'Numbers',
        Svg: require('../../static/img/icons/numbers-bg.svg').default,
        link: '/docs/numbers',
    },
    {
        title: 'Emergency',
        Svg: require('../../static/img/icons/emergency-bg.svg').default,
        link: '/docs/emergency',
    },
    {
        title: 'Voice',
        Svg: require('../../static/img/icons/voice-bg.svg').default,
        link: '/docs/voice',
    },
    {
        title: 'Multi-Factor Authentication',
        Svg: require('../../static/img/icons/mfa-bg.svg').default,
        link: '/docs/mfa',
    },
    {
        title: 'Messaging',
        Svg: require('../../static/img/icons/messaging-bg.svg').default,
        link: '/docs/messaging',
    },
    {
        title: 'WebRTC',
        Svg: require('../../static/img/icons/webrtc-bg.svg').default,
        link: '/docs/webrtc',
    },
];

const props = {
    itemList: productList,
    Svg: require('../../static/img/home-landing.svg').default,
    h1Text: 'Bandwidth API Documentation',
    h2Text: "Learn about Bandwidth's product APIs"
};

export default function Home() {
    return (
        <Layout
            title={`Home`}
            description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
            keywords="Bandwidth,API,documentation,SDK,guide">
            <LandingPage {...props} />
        </Layout>
    );
}
