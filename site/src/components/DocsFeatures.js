import React from 'react';
import FeaturePanels from '@site/src/components/FeaturePanels.js';

export default function DocsFeatures({featuresText, panels}) {
    return (
        <div className={'docsFeatures'}>
            <div className={'featuresText'}>{featuresText}</div>
            <FeaturePanels panels={panels}/>
        </div>
    );
}
