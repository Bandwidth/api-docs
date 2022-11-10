import React from 'react';
import Layout from '@theme/Layout';
import SplashPage from '@site/src/components/SplashPage.js';

export default function Home() {
    return (
        <Layout
            title={`Home`}
            description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
            keywords="Bandwidth,API,documentation,SDK,guide">
            <SplashPage/>
        </Layout>
    );
}
