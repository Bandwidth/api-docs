import React from 'react';
import Layout from '@theme/Layout';
import apiStyles from '../../css/apis.module.css';

const productList = [
    {
        productName: 'Numbers',
        Svg: require('../../../static/img/icon-numbers.svg').default,
        apis: [
            {
                name: 'Numbers',
                link: '/apis/numbers'
            },
            {
                name: 'Phone Number Lookup',
                link: '/apis/number-lookup'
            }
        ]
    },
    {
        productName: 'Voice',
        Svg: require('../../../static/img/icon-voice.svg').default,
        apis: [
            {
                name: 'Voice',
                link: '/apis/voice'
            }
        ]
    },
    {
        productName: 'Messaging',
        Svg: require('../../../static/img/icon-messaging.svg').default,
        apis: [
            {
                name: 'Messaging',
                link: '/apis/messaging'
            },
            {
                name: 'International Messaging',
                link: '/apis/messaging-international'
            }
        ]
    },
    {
        productName: 'Emergency',
        Svg: require('../../../static/img/icon-emergency.svg').default,
        apis: [
            {
                name: 'DASH',
                link: '/apis/dash'
            },
            {
                name: 'DASH Notifications',
                link: '/apis/dash-notifications'
            }
        ]
    },
    {
        productName: 'Authentication',
        Svg: require('../../../static/img/icon-mfa.svg').default,
        apis: [
            {
                name: 'Multi-Factor Authentication',
                link: '/apis/multifactorauth'
            }
        ]
    },
    {
        productName: 'WebRTC',
        Svg: require('../../../static/img/icon-webrtc.svg').default,
        apis: [
            {
                name: 'WebRTC',
                link: '/apis/webrtc'
            }
        ]
    },
    {
        productName: 'Insights',
        Svg: require('../../../static/img/icon-insights.svg').default,
        apis: [
            {
                name: 'Insights',
                link: '/apis/insights'
            }
        ]
    }
];

function ProductInfo({productName, apis}) {
    return (
        <div className={apiStyles.productInfo}>
            <h1>{productName} API</h1>
            <div className={apiStyles.apiList}>
                <ul>
                    {apis.map((api, idx) => (
                        <li key={idx}><a href={api.link}>{api.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function ProductGrid() {
    return (
        <div className={apiStyles.products}>
            {productList.map((product) => (
                <div className={apiStyles.product}>
                    <product.Svg className={`${apiStyles.productSvg} ${product.productName}`} title={product.productName}/>
                    <ProductInfo productName={product.productName} apis={product.apis}/>
                </div>
            ))}
        </div>
    );
}

export default function Apis() {
    return (
        <Layout
            title="Bandwidth APIs"
            description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
            keywords="Bandwidth,API">
            <div className={apiStyles.landing}>
                <div className={apiStyles.top}>
                    <div className={apiStyles.title}>
                        <h1>API Reference</h1>
                        <h2>Technical reference for Bandwidth APIs</h2>
                        <p>Our API Reference for US and Canada APIs is organized around product APIs and phone number management APIs.</p>
                    </div>
                    <div className={apiStyles.image}></div>
                </div>
                <div className={apiStyles.bottom}>
                    <ProductGrid/>
                </div>
            </div>
        </Layout>
    );
}
