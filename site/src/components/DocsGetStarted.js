import React from 'react';
import docsAboutStyles from '@site/src/components/css/DocsAbout.module.css';
import BlueButton from '@site/src/components/BlueButton.js';

export default function DocsGetStarted({getStartedText, Svg, getStartedButton}) {
    return (
        <div className={docsAboutStyles.getStarted}>
            <div className={docsAboutStyles.getStartedText}>{getStartedText}</div>
            <div className={docsAboutStyles.getStartedImage}><Svg/></div>
            <BlueButton {...getStartedButton}/>
        </div>
    );
}