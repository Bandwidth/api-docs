import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Integrations API Reference`}
            description="Account integrations and xcaas. Everything you'll need to start working with our Integrations API."
            keywords="Bandwidth,API,Integrations,Xcaas">
            <ApiReference spec={siteConfig.customFields.integrationsSpec} color={siteConfig.customFields.voicePurple} downloadDefinitionUrl={siteConfig.customFields.integrationsSpecLink}/>
        </Layout>
    );
}