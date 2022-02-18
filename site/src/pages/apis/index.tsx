import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import apiStyles from '../../css/apis.module.css';
import ItemGrid from '../../components/gridItem'

const ApiList = [
    {
        title: 'Voice',
        Svg: require('../../../static/img/icon-voice-complex-no-bg.svg').default,
        style: apiStyles.apiSvg,
        link: '/apis/voice'
    },
    {
        title: 'Messaging',
        Svg: require('../../../static/img/icon-messaging-complex-no-bg.svg').default,
        style: apiStyles.apiSvg,
        link: '/apis/messaging'
    },
    {
        title: 'Numbers',
        Svg: require('../../../static/img/icon-numbers-complex-no-bg.svg').default,
        style: apiStyles.apiSvg,
        link: '/apis/numbers'
    },
    {
        title: 'Phone Number Lookup',
        Svg: require('../../../static/img/icon-phone-number-lookup-complex-no-bg.svg').default,
        style: apiStyles.apiSvg,
        link: '/apis/number-lookup'
    },
    {
        title: 'International Messaging',
        Svg: require('../../../static/img/icon-int-messaging-complex-no-bg.svg').default,
        style: apiStyles.apiSvg,
        link: '/apis/messaging-international'
    },
    {
        title: 'Multi-Factor Authentication',
        Svg: require('../../../static/img/icon-multi-factor-complex-no-bg.svg').default,
        style: apiStyles.apiSvg,
        link: '/apis/multifactorauth'
    },
    {
        title: 'WebRTC',
        Svg: require('../../../static/img/icon-webrtc-complex-no-bg.svg').default,
        style: apiStyles.apiSvg,
        link: '/apis/webrtc'
    },
    {
        title: 'DASH',
        Svg: require('../../../static/img/icon-dash-complex-no-bg.svg').default,
        style: apiStyles.apiSvg,
        link: '/apis/dash'
    },
    {
        title: 'DASH Notifications',
        Svg: require('../../../static/img/icon-dash-notifications-complex-no-bg.svg').default,
        style: apiStyles.apiSvg,
        link: '/apis/dash-notifications'
    },
    {
        title: 'Identity Providers',
        Svg: require('../../../static/img/icon_product_byoidp.svg').default,
        style: apiStyles.apiSvg,
        link: '/apis/identity'
    },
];

function Header() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Bandwidth APIs</h1>
                <p className="hero__subtitle">Build with Bandwidth</p>
            </div>
        </header>
    );
}

export default function Apis() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Bandwidth APIs"
            description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
            keywords="Bandwidth,API">
            <Header />
            <main>
                <ItemGrid itemList={ApiList} className={apiStyles.apis}/>
            </main>
        </Layout>
    );
}
