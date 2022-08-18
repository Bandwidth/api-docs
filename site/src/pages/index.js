import React from 'react';
import Layout from '@theme/Layout';
import LandingPage from '@site/src/components/LandingPage';

const productList = [
    {
        title: 'Numbers',
        Svg: require('@site/static/img/product-icons/numbers.svg').default,
        link: '/docs/numbers',
    },
    {
        title: 'Emergency',
        Svg: require('@site/static/img/product-icons/emergency.svg').default,
        link: '/docs/emergency',
    },
    {
        title: 'Voice',
        Svg: require('@site/static/img/product-icons/voice.svg').default,
        link: '/docs/voice',
    },
    {
        title: 'Multi-Factor Authentication',
        Svg: require('@site/static/img/product-icons/mfa.svg').default,
        link: '/docs/mfa',
    },
    {
        title: 'Messaging',
        Svg: require('@site/static/img/product-icons/messaging.svg').default,
        link: '/docs/messaging',
    },
    {
        title: 'WebRTC',
        Svg: require('@site/static/img/product-icons/webrtc.svg').default,
        link: '/docs/webrtc',
    },
];

const props = {
    itemList: productList,
    Svg: require('@site/static/img/landing-home.svg').default,
    h1Text: `Bandwidth API Documentation`,
    h2Text: `Learn about Bandwidth's Product APIs`
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
