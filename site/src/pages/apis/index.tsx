import React from 'react';
import Layout from '@theme/Layout';
import apiStyles from '../../css/apis.module.css';
import twoColumnStyles from '../../css/twoColumn.module.css';
import ProductGrid from '../../components/ProductGrid';

const apiList = [
    {
        title: 'Voice',
        Svg: require('../../../static/img/icon-voice-complex-no-bg.svg').default,
        link: '/apis/voice'
    },
    {
        title: 'Messaging',
        Svg: require('../../../static/img/icon-messaging-complex-no-bg.svg').default,
        link: '/apis/messaging'
    },
    {
        title: 'Numbers',
        Svg: require('../../../static/img/icon-numbers-complex-no-bg.svg').default,
        link: '/apis/numbers'
    },
    {
        title: 'Phone Number Lookup',
        Svg: require('../../../static/img/icon-phone-number-lookup-complex-no-bg.svg').default,
        link: '/apis/number-lookup'
    },
    {
        title: 'International Messaging',
        Svg: require('../../../static/img/icon-int-messaging-complex-no-bg.svg').default,
        link: '/apis/messaging-international'
    },
    {
        title: 'Multi-Factor Authentication',
        Svg: require('../../../static/img/icon-multi-factor-complex-no-bg.svg').default,
        link: '/apis/multifactorauth'
    },
    {
        title: 'WebRTC',
        Svg: require('../../../static/img/icon-webrtc-complex-no-bg.svg').default,
        link: '/apis/webrtc'
    },
    {
        title: 'DASH',
        Svg: require('../../../static/img/icon-dash-complex-no-bg.svg').default,
        link: '/apis/dash'
    },
    {
        title: 'DASH Notifications',
        Svg: require('../../../static/img/icon-dash-notifications-complex-no-bg.svg').default,
        link: '/apis/dash-notifications'
    }
];

export default function Apis() {
    return (
        <Layout
            title="Bandwidth APIs"
            description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
            keywords="Bandwidth,API">
            <div className={twoColumnStyles.landing}>
                <div className={twoColumnStyles.left}>
                    <div className={twoColumnStyles.title}>
                        <h1>Bandwidth API References</h1>
                        <h2>Complete API Reference Documentation</h2>
                    </div>
                    <div className={apiStyles.image}></div>
                </div>
                <div className={twoColumnStyles.right}>
                    <ProductGrid productList={apiList}/>
                </div>
            </div>
        </Layout>
    );
}
