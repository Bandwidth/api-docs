import React from 'react';

export default function DocsGetStarted({getStartedText, Svg, getStartedButton}) {
    return (
        <div className={'docsGetStarted'}>
            <div className={'getStartedText'}>{getStartedText}</div>
            <div className={'getStartedImage'}><Svg/></div>
            <div className={'blueButton'}>
                <a href={getStartedButton.link} rel="noopener">{getStartedButton.text}</a>
            </div>
        </div>
    );
}
