import React from 'react';
import splashPageStyles from '@site/src/components/css/SplashPage.module.css';
import Carousel from '@site/src/components/Carousel.js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


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
    const {siteConfig} = useDocusaurusContext();
    const carousel = siteConfig.customFields.blogPosts;
    
    return (
        <div className={splashPageStyles.splash}>
            <div className={splashPageStyles.header}>
                <h1>Bandwidth Developer Documentation</h1>
                <h2>Explore our guides, API reference, and SDKs to integrate with Bandwidth's APIs.</h2>
            </div>
            <SplashRow left={<SplashPageTextBlock {...guides}/>} right={<SplashPageImage Svg={guidesImage}/>}/>
            <SplashRow left={<SplashPageImage Svg={apisImage}/>} right={<SplashPageTextBlock {...apis}/>}/>
            <Carousel itemList={carousel} title={'Recent Blog Posts'}/>
            <SplashRow left={<SplashPageTextBlock {...sdks}/>} right={<SplashPageImage Svg={sdksImage}/>}/>
        </div>
    );
}
