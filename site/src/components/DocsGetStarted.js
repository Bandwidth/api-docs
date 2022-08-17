import React from 'react';
import docsAboutStyles from '@site/src/components/css/DocsAbout.module.css';
import BlueButton from '@site/src/components/blueButton.js';

const getStarted = {
    text: 'Get Started',
    link: 'https://www.bandwidth.com/voice/'
}

export default function DocsGetStarted({getStartedText, Svg}) {
    return (
        <div className={docsAboutStyles.getStarted}>
            <div className={docsAboutStyles.getStartedText}>{getStartedText}</div>
            <div className={docsAboutStyles.getStartedImage}><Svg/></div>
            <BlueButton {...getStarted}/>
        </div>
    )
}