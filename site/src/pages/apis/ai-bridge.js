import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Ai Bridge API Reference`}
          description=" This AI Bridge API can be used to create and manage Providers and Bots for the Bandwidth AI Bridge product."
          keywords="Bandwidth,API,Voice,Call, AiBridge">
            <ApiReference spec={siteConfig.customFields.aiBridgeSpec} color={siteConfig.customFields.voicePurple} downloadDefinitionUrl={siteConfig.customFields.aiBridgeSpecLink}/>
        </Layout>
    );
}
