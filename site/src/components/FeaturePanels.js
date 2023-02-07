import React from 'react';

function FeaturePanel({Svg, title, text, link}) {
    return (
        <a className="panel" href={link}>
            <div className="panel-header">
                <Svg className="panel-icon"/>
                <div className="panel-title">{title}</div>
            </div>
            <div className="panel-content">
                <div className="panel-text">{text}</div>
            </div>
        </a>
    );
}

export default function FeaturePanels({panels}) {
    return (
        <div className="panels-container">
            {panels.map((props, idx) => (
                <FeaturePanel key={idx} {...props}/>
            ))}
        </div>
    );
}
