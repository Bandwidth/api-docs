import React from 'react';

export default function DocsGetStarted({getStartedText, Svg, getStartedButton}) {
    return (
        <div className="docs-get-started">
            <div className="get-started-text">{getStartedText}</div>
            <div className="get-started-image"><Svg/></div>
            <div className="blue-button">
                <a href={getStartedButton.link} rel="noopener">{getStartedButton.text}</a>
            </div>
        </div>
    );
}
