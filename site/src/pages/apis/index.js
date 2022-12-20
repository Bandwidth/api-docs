import React from 'react';
import Layout from '@theme/Layout';
import LandingPage from '@site/src/components/LandingPage.js';

const apiList = [
    {
        title: 'Voice API',
        Svg: require('@site/static/img/api-icons/voice.svg').default,
        link: '/apis/voice/'
    },
    {
        title: 'Phone Number Lookup API',
        Svg: require('@site/static/img/api-icons/phone-number-lookup.svg').default,
        link: '/apis/number-lookup/'
    },
    {
        title: 'Numbers API',
        Svg: require('@site/static/img/api-icons/numbers.svg').default,
        link: '/apis/numbers/'
    },
    {
        title: 'Multi-Factor Authentication API',
        Svg: require('@site/static/img/api-icons/mfa.svg').default,
        link: '/apis/multifactorauth/'
    },
    {
        title: 'Messaging API',
        Svg: require('@site/static/img/api-icons/messaging.svg').default,
        link: '/apis/messaging/'
    },
    {
        title: 'International Messaging API',
        Svg: require('@site/static/img/api-icons/international-messaging.svg').default,
        link: '/apis/messaging-international/'
    },
    {
        title: 'Emergency API',
        Svg: require('@site/static/img/api-icons/emergency.svg').default,
        link: '/apis/dash/'
    },
    {
        title: 'Emergency Notifications API',
        Svg: require('@site/static/img/api-icons/emergency-notifications.svg').default,
        link: '/apis/dash-notifications/'

    },
    {
        title: 'WebRTC API',
        Svg: require('@site/static/img/api-icons/webrtc.svg').default,
        link: '/apis/webrtc/'
    },
    {
        title: 'Insights API',
        Svg: require('@site/static/img/api-icons/insights.svg').default,
        link: '/apis/insights/'
    },
    {
        title: 'Toll-Free Verification',    
        Svg: require('@site/static/img/api-icons/international-messaging.svg').default,   
        link: '/apis/tfVerify'    
    }
    /* TODO ONEID-1304
    {
        title: 'Identity Providers',
        Svg: require('@site/static/img/api-icons/byoidp.svg').default,
        link: '/apis/identity'
    },
    */
];

const props = {
    itemList: apiList,
    Svg: require('@site/static/img/landing-apis.svg').default,
    h1Text: `API Reference`,
    h2Text: `Technical Reference for Bandwidth APIs`
}


export default function Apis() {
    return (
        <Layout
            title="Bandwidth APIs"
            description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
            keywords="Bandwidth,API">
            <LandingPage {...props} />
        </Layout>
    );
}
