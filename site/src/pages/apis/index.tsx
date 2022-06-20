import React from 'react';
import Layout from '@theme/Layout';
import apiStyles from '../../css/apis.module.css';

const apiList = {
    numbers: [
        {
            name: 'Numbers',
            link: '/apis/numbers'
        },
        {
            name: 'Phone Number Lookup',
            link: '/apis/number-lookup'
        }
    ],
    voice: [
        {
            name: 'Voice',
            link: '/apis/voice'
        }
    ],
    messaging: [
        {
            name: 'Messaging',
            link: '/apis/messaging'
        },
        {
            name: 'International Messaging',
            link: '/apis/messaging-international'
        }
    ],
    emergency: [
        {
            name: 'DASH',
            link: '/apis/dash'
        },
        {
            name: 'DASH Notifications',
            link: '/apis/dash-notifications'
        }
    ],
    mfa: [
        {
            name: 'Multi-Factor Authentication',
            link: '/apis/multifactorauth'
        }
    ],
    webrtc: [
        {
            name: 'WebRTC',
            link: '/apis/webrtc'
        },
    ]
};

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
            <div className={apiStyles.product}>
                <svg className={`${apiStyles.productSvg} ${apiStyles.numbersSvg}`}/>
                <ProductInfo productName='Numbers' apis={apiList.numbers}/>
            </div>
            <div className={apiStyles.product}>
                <svg className={`${apiStyles.productSvg} ${apiStyles.voiceSvg}`}/>
                <ProductInfo productName='Voice' apis={apiList.voice}/>
            </div>
            <div className={apiStyles.product}>
                <svg className={`${apiStyles.productSvg} ${apiStyles.messagingSvg}`}/>
                <ProductInfo productName='Messaging' apis={apiList.messaging}/>
            </div>
            <div className={apiStyles.product}>
                <svg className={`${apiStyles.productSvg} ${apiStyles.emergencySvg}`}/>
                <ProductInfo productName='Emergency' apis={apiList.emergency}/>
            </div>
            <div className={apiStyles.product}>
                <svg className={`${apiStyles.productSvg} ${apiStyles.mfaSvg}`}/>
                <ProductInfo productName='Authentication' apis={apiList.mfa}/>
            </div>
            <div className={apiStyles.product}>
                <svg className={`${apiStyles.productSvg} ${apiStyles.webrtcSvg}`}/>
                <ProductInfo productName='WebRTC' apis={apiList.webrtc}/>
            </div>
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
