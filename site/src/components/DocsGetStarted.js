import React from 'react';
import docsAboutStyles from '@site/src/components/css/DocsAbout.module.scss';
import blueButtonStyles from '@site/src/components/css/BlueButton.module.scss';

export default function DocsGetStarted({getStartedText, Svg, getStartedButton}) {
    return (
        <div className={docsAboutStyles.getStarted}>
            <div className={docsAboutStyles.getStartedText}>{getStartedText}</div>
            <div className={docsAboutStyles.getStartedImage}><Svg/></div>
            <div className={blueButtonStyles.blueButton}>
                <a href={getStartedButton.link} rel="noopener">{getStartedButton.text}</a>
            </div>
        </div>
    );
}
