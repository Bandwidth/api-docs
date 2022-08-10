import React from 'react';
import Layout from '@theme/Layout';

const apiList = [
    {
        title: 'Numbers',
        Svg: require('@site/static/img/api-icons/numbers.svg').default,
        link: '/apis/numbers'
    },
    {
        title: 'Phone Number Lookup',
        Svg: require('@site/static/img/api-icons/phone-number-lookup.svg').default,
        link: '/apis/number-lookup'
    },
    {
        title: 'Voice',
        Svg: require('@site/static/img/api-icons/voice.svg').default,
        link: '/apis/voice'
    },
    {
        title: 'Messaging',
        Svg: require('@site/static/img/api-icons/messaging.svg').default,
        link: '/apis/messaging'
    },
    {
        title: 'International Messaging',
        Svg: require('@site/static/img/api-icons/international-messaging.svg').default,
        link: '/apis/messaging-international'
    },
    {
        title: 'Emergency',
        Svg: require('@site/static/img/api-icons/emergency.svg').default,
        link: '/apis/dash'
    },
    {
        name: 'Emergency Notifications',
        Svg: require('@site/static/img/api-icons/emergency-notifications.svg').default,
        link: '/apis/dash-notifications'

    },
    {
        title: 'Multi-Factor Authentication',
        Svg: require('@site/static/img/api-icons/mfa.svg').default,
        link: '/apis/multifactorauth'
    },
    {
        title: 'WebRTC',
        Svg: require('@site/static/img/api-icons/webrtc.svg').default,
        link: '/apis/webrtc'
    },
    {
        productName: 'Insights',
        Svg: require('@site/static/img/api-icons/insights.svg').default,
        link: '/apis/insights'
    }
];


export default function Apis() {
    return (
        <Layout
            title="Bandwidth APIs"
            description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
            keywords="Bandwidth,API">
                    <div>
                        <h1>API Reference</h1>
                        <h2>Technical reference for Bandwidth APIs</h2>
                        <p>Our API Reference for US and Canada APIs is organized around product APIs and phone number management APIs.</p>
                    </div>
        </Layout>
    );
}
