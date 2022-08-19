import React from 'react';
import docsAboutStyles from '@site/src/components/css/DocsAbout.module.css';


const sdks = [
    {
        link: '/sdks/node',
        Svg: require('@site/static/img/sdk-icons/node.svg').default
    },
    {
        link: '/sdks/python',
        Svg: require('@site/static/img/sdk-icons/python.svg').default
    },
    {
        link: '/sdks/java',
        Svg: require('@site/static/img/sdk-icons/java.svg').default
    },
    {
        link: '/sdks/php',
        Svg: require('@site/static/img/sdk-icons/php.svg').default
    },
    {
        link: '/sdks/ruby',
        Svg: require('@site/static/img/sdk-icons/ruby.svg').default
    },
    {
        link: '/sdks/csharp',
        Svg: require('@site/static/img/sdk-icons/csharp.svg').default
    },
]

export default function DocsSdks({sdksText}) {
    return (
        <div className={docsAboutStyles.sdks}>
            <div className={docsAboutStyles.sdksText}>{sdksText}</div>
            <div className={docsAboutStyles.sdksImages}>
                <div className={docsAboutStyles.sdkImageContainer}>
                    {sdks.map(({link, Svg}, idx) => (
                        <a key={idx} href={link}><Svg/></a>
                    ))}
                </div>
            </div>
        </div>
    );
}
