import React, { useEffect, useState } from 'react';
import docsAboutStyles from '@site/src/components/css/DocsAbout.module.css';

export default function DocsDiagram({description, Desktop, Mobile}) {
    
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {   // carousel dynamic resizing based on screen width
        const windowSize = () => {
            if (window.innerWidth > 996) {
                setIsDesktop(true);
            }
            if (window.innerWidth <= 996) {
                setIsDesktop(false);
            }
        }

        window.addEventListener('resize', windowSize);

        return () => window.removeEventListener('resize', windowSize);
    }, [])

    return (
        <div className={docsAboutStyles.diagram}>
            {description && <div className={docsAboutStyles.description}>{description}</div>}
            {isDesktop ? <Desktop/> : <Mobile/>}
        </div>
    )
}
