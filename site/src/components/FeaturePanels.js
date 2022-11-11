import React from 'react';

function FeaturePanel({Svg, title, text, link}) {
    return (
        <a className={'panel'} href={link}>
            <div className={'header'}>
                <Svg className={'icon'}/>
                <div className={'title'}>{title}</div>
            </div>
            <div className={'content'}>
                <div className={'panelText'}>{text}</div>
            </div>
        </a>
    );
}

export default function FeaturePanels({panels}) {
    return (
        <div className={'panelsContainer'}>
            {panels.map((props, idx) => (
                <FeaturePanel key={idx} {...props}/>
            ))}
        </div>
    );
}
