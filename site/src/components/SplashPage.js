import React from 'react';
import splashPageStyles from '@site/src/components/css/SplashPage.module.css';
import Carousel from '@site/src/components/Carousel.js';

const guides = {
    title: 'Check out our guides',
    text: `Explore our API guides to learn more about Bandwidth's APIs and the things you can do with us.`,
    linkText: 'Read the guides →',
    link: '/docs'
}
const guidesImage = require('@site/static/img/guides-splash.svg').default;

const apis = {
    title: 'Dig into our API reference',
    text: `Use the API technical reference to get the detailed information developers need when coding. Get the nitty-gritty details about resources in our APIs.`,
    linkText: 'See our API reference →',
    link: '/apis'
}
const apisImage = require('@site/static/img/apis-splash.svg').default;

const sdks = {
    title: 'Looking for our SDKs?',
    text: `We offer SDKs for several popular languages. Build your apps using our official SDKs in the language of your choice.`,
    linkText: 'Build with Bandwidth →',
    link: '/sdks'
}
const sdksImage = require('@site/static/img/sdks-splash.svg').default;

const carousel = [
    {
        Svg: require('@site/static/img/product-icons/messaging.svg').default,
        link: '/docs/messaging/errors/',
        linkText: 'Messaging Errors',
        tags: ['messaging', 'errors']
    },{
        Svg: require('@site/static/img/product-icons/voice.svg').default,
        link: '/docs/voice/bxml/hangup/',
        linkText: 'Hangup BXML Verb',
        tags: ['voice', 'bxml']
    },
    {
        Svg: require('@site/static/img/product-icons/voice.svg').default,
        link: '/docs/voice/',
        linkText: 'Voice About Page',
        tags: ['voice', 'about', 'quick start']
    },
    {
        Svg: require('@site/static/img/product-icons/numbers.svg').default,
        link: '/docs/numbers/guides/manage-inventory/searchingNumbers/',
        linkText: 'Searching Numbers',
        tags: ['numbers','inventory', 'search']
    },
    {
        Svg: require('@site/static/img/product-icons/numbers.svg').default,
        link: '/docs/numbers/guides/manage-inventory/applyTnOptionsAndFeatures/',
        linkText: 'Apply TN Options',
        tags: ['numbers', 'inventory', 'options']
    },
    {
        Svg: require('@site/static/img/product-icons/account.svg').default,
        link: '/docs/account/credentials/',
        linkText: 'Account Credentials',
        tags: ['account', 'credentials']
    }
]

function SplashRow({left, right}) {
    return (
        <div className={splashPageStyles.splashRow}>
            <div className={splashPageStyles.splashRowLeft}>{left}</div>
            <div className={splashPageStyles.splashRowRight}>{right}</div>
        </div>
    )
}

function SplashPageImage({Svg}) {
    return (
        <div className={splashPageStyles.image}>
            <Svg/>
        </div>
    )
}

function SplashPageTextBlock({title, text, linkText, link}) {
    return (
        <div className={splashPageStyles.textBlock}>
            <div className={splashPageStyles.title}>{title}</div>
            <div className={splashPageStyles.text}>{text}</div>
            <div className={splashPageStyles.link}><a href={link}>{linkText}</a></div>
        </div>
    )
}

export default function SplashPage() {
    return (
        <div className={splashPageStyles.splash}>
            <div className={splashPageStyles.header}>
                <h1>Bandwidth Developer Documentation</h1>
                <h2>Explore our guides, API reference, and SDKs to integrate with Bandwidth's APIs.</h2>
            </div>
            <SplashRow left={<SplashPageTextBlock {...guides}/>} right={<SplashPageImage Svg={guidesImage}/>}/>
            <SplashRow left={<SplashPageImage Svg={apisImage}/>} right={<SplashPageTextBlock {...apis}/>}/>
            <Carousel itemList={carousel} title={'Recent Documentation Updates'}/>
            <SplashRow left={<SplashPageTextBlock {...sdks}/>} right={<SplashPageImage Svg={sdksImage}/>}/>
        </div>
    );
}
