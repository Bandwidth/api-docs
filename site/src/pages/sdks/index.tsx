import React from 'react';
import Layout from '@theme/Layout';
import twoColumnStyles from '../../css/twoColumn.module.css';
import sdkStyles from '../../css/sdks.module.css';
import ItemGrid from '../../components/ItemGrid';

const sdkList = [
    {
        title: 'Node',
        Svg: require('../../../static/img/node.svg').default,
        link: '/sdks/node'
    },
    {
        title: 'Python',
        Svg: require('../../../static/img/python.svg').default,
        link: '/sdks/python'
    },
    {
        title: 'Ruby',
        Svg: require('../../../static/img/ruby.svg').default,
        link: '/sdks/ruby'
    },
    {
        title: 'Java',
        Svg: require('../../../static/img/java.svg').default,
        link: '/sdks/java'
    },
    {
        title: 'C#',
        Svg: require('../../../static/img/csharp.svg').default,
        link: '/sdks/csharp'
    },
    {
        title: 'PHP',
        Svg: require('../../../static/img/php.svg').default,
        link: '/sdks/php'
    },
];

export default function Apis() {
    return (
        <Layout
            title="Bandwidth SDKs"
            description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
            keywords="Bandwidth,SDK,guide,documentation,resources,Java,C#,Node,JavaScript,Python,Ruby,PHP">
            <div className={twoColumnStyles.landing}>
                <div className={twoColumnStyles.left}>
                    <div className={twoColumnStyles.title}>
                        <h1>Bandwidth SDKs</h1>
                        <h2>Build with Bandwidth</h2>
                    </div>
                    <div className={sdkStyles.image}></div>
                </div>
                <div className={twoColumnStyles.right}>
                    <ItemGrid itemList={sdkList}/>
                </div>
            </div>
        </Layout>
    );
}
