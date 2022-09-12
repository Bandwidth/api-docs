import React from 'react';
import featurePanelStyles from '@site/src/components/css/FeaturePanel.module.css';

function FeaturePanel({Svg, title, text, link}) {
    return (
        <a className={featurePanelStyles.panel} href={link}>
            <div className={featurePanelStyles.header}>
                <Svg className={featurePanelStyles.icon}/>
                <div className={featurePanelStyles.title}>{title}</div>
            </div>
            <div className={featurePanelStyles.content}>
                <div className={featurePanelStyles.panelText}>{text}</div>
            </div>
        </a>
    );
}

export default function FeaturePanels({panels}) {
    return (
        <div className={featurePanelStyles.panelsContainer}>
            {panels.map((props, idx) => (
                <FeaturePanel key={idx} {...props}/>
            ))}
        </div>
    );
}
