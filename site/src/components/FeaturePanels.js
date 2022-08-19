import React from 'react';
import featurePanelStyles from '@site/src/components/css/FeaturePanel.module.css';

function FeaturePanel({Svg, title, text, link}) {
    return (
        <div className={featurePanelStyles.panel}>
            <div className={featurePanelStyles.header}>
                <Svg className={featurePanelStyles.icon}/>
                <div className={featurePanelStyles.title}>{title}</div>
            </div>
            <div className={featurePanelStyles.content}>
                <div className={featurePanelStyles.panelText}>{text}</div>
                <div className={featurePanelStyles.link}>
                    <div className={featurePanelStyles.linkLabel}>{link.label}:</div>
                    <div className={featurePanelStyles.linkText}><a href={link.to}>{link.text}</a></div>
                </div>
            </div>
        </div>
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
