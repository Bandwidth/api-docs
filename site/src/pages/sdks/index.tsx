import React from 'react';
import Layout from '@theme/Layout';
import LandingPage from '../../components/LandingPage.js';
import { Player } from '@lottiefiles/react-lottie-player';

const sdkList = [
    {
        title: 'Node',
        Svg: require('../../../static/img/sdk-node-bg.svg').default,
        link: '/sdks/node'
    },
    {
        title: 'Python',
        Svg: require('../../../static/img/sdk-python-bg.svg').default,
        link: '/sdks/python'
    },
    {
        title: 'Java',
        Svg: require('../../../static/img/sdk-java-bg.svg').default,
        link: '/sdks/java'
    },
    {
        title: 'PHP',
        Svg: require('../../../static/img/sdk-php-bg.svg').default,
        link: '/sdks/php'
    },
    {
        title: 'Ruby',
        Svg: require('../../../static/img/ruby.svg').default,
        link: '/sdks/ruby'
    },
    {
        title: 'C#',
        Svg: require('../../../static/img/sdk-csharp-bg.svg').default,
        link: '/sdks/csharp'
    },
];

const props = {
    itemList: sdkList,
    Svg: require('../../../static/img/sdks-landing.svg').default,
    h1Text: 'Bandwidth SDKs',
    h2Text: 'Build with Bandwidth'
}

export default function Sdks() {
    return (
        <Layout
            title="Bandwidth SDKs"
            description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
            keywords="Bandwidth,SDK,guide,documentation,resources,Java,C#,Node,JavaScript,Python,Ruby,PHP">
            <LandingPage {...props} />
        </Layout>
    );
}
