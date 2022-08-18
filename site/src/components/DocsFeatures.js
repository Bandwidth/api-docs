import React from 'react';
import docsAboutStyles from '@site/src/components/css/DocsAbout.module.css';
import FeaturePanels from '@site/src/components/FeaturePanels.js';

export default function DocsFeatures({featuresText, panels}) {
    return (
        <div className={docsAboutStyles.features}>
            <div className={docsAboutStyles.featuresText}>{featuresText}</div>
            <FeaturePanels panels={panels}/>
        </div>
    );
}