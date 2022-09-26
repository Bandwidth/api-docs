import React from 'react';
import splashPageStyles from '@site/src/components/css/SplashPage.module.css';
import Carousel from '@site/src/components/Carousel.js';

const guides = {
    title: 'Check out our guides',
    text: 'TODO',
    linkText: 'Read the guides →',
    link: '/docs'
}
const guidesImage = require('@site/static/img/guides-splash.svg').default;

const apis = {
    title: 'Check out our APIs',
    text: `TODO`,
    linkText: 'Reference our APIs →',
    link: '/apis'
}
const apisImage = require('@site/static/img/apis-splash.svg').default;

const sdks = {
    title: 'Looking for our SDKs?',
    text: `TODO`,
    linkText: 'Build with Bandwidth →',
    link: '/sdks'
}
const sdksImage = require('@site/static/img/sdks-splash.svg').default;

const carousel = [
    {
        Svg: require('@site/static/img/product-icons/mfa.svg').default,
        product: 'Multi-Factor Authentication1',
        link: '/docs/mfa/',
        linkText: 'MFA Guide'
    },
    {
        Svg: require('@site/static/img/product-icons/mfa.svg').default,
        product: 'Multi-Factor Authentication2',
        link: '/docs/mfa/',
        linkText: 'MFA Guide'
    },
    {
        Svg: require('@site/static/img/product-icons/mfa.svg').default,
        product: 'Multi-Factor Authentication3',
        link: '/docs/mfa/',
        linkText: 'MFA Guide'
    },
    {
        Svg: require('@site/static/img/product-icons/mfa.svg').default,
        product: 'Multi-Factor Authentication4',
        link: '/docs/mfa/',
        linkText: 'MFA Guide'
    },
    {
        Svg: require('@site/static/img/product-icons/mfa.svg').default,
        product: 'Multi-Factor Authentication5',
        link: '/docs/mfa/',
        linkText: 'MFA Guide'
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
                <h2>Explore our guides, API references, and SDKs to integrate with Bandwidth's APIs.</h2>
            </div>
            <SplashRow left={<SplashPageTextBlock {...guides}/>} right={<SplashPageImage Svg={guidesImage}/>}/>
            <SplashRow left={<SplashPageImage Svg={apisImage}/>} right={<SplashPageTextBlock {...apis}/>}/>
            <Carousel itemList={carousel}/>
            <SplashRow left={<SplashPageTextBlock {...sdks}/>} right={<SplashPageImage Svg={sdksImage}/>}/>
        </div>
    );
}
