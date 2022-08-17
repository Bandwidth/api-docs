import React from 'react';
import docsAboutStyles from '@site/src/components/css/DocsAbout.module.css';

export default function DocsSdks({sdksText}) {
    return (
        <div className={docsAboutStyles.sdks}>
            <div className={docsAboutStyles.sdksText}>{sdksText}</div>
            <div className={docsAboutStyles.sdksImages}></div>
        </div>
    )
}