import React from 'react';
import Layout from '@theme/Layout';
import LandingPage from '@site/src/components/LandingPage.js';

const docsList = [
    {
        title: 'Account',
        Svg: require('@site/static/img/product-icons/account.svg').default,
        link: '/docs/account'
    },
    {
        title: 'Numbers',
        Svg: require('@site/static/img/product-icons/numbers.svg').default,
        link: '/docs/numbers'
    },
    {
        title: 'Voice',
        Svg: require('@site/static/img/product-icons/voice.svg').default,
        link: '/docs/voice'
    },
    {
        title: 'Messaging',
        Svg: require('@site/static/img/product-icons/messaging.svg').default,
        link: '/docs/messaging'
    },
    {
        title: 'WebRTC',
        Svg: require('@site/static/img/product-icons/webrtc.svg').default,
        link: '/docs/webrtc'
    },
    {
        title: 'Multi-Factor Authentication',
        Svg: require('@site/static/img/product-icons/mfa.svg').default,
        link: '/docs/mfa'
    },
    {
        title: 'Emergency',
        Svg: require('@site/static/img/product-icons/emergency.svg').default,
        link: '/docs/emergency'
    }
];

const props = {
    itemList: docsList,
    Svg: require('@site/static/img/landing-home.svg').default,
    h1Text: `Bandwidth API Documentation`,
    h2Text: `Guides for Bandwidth's Product APIs`
}

export default function Docs() {
    return (
        <Layout
            title="Bandwidth Docs"
            description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
            keywords="Bandwidth,Docs">
            <LandingPage {...props}/>
        </Layout>
    );
}