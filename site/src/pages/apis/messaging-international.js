import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`International Messaging API Reference`}
          description="Authentication and Messages. Everything you'll need to start working with our International Messaging API."
          keywords="Bandwidth,API,Messaging,International">
            <ApiReference spec={siteConfig.customFields.messagingInternationalSpec} color={siteConfig.customFields.messagingGreen} downloadDefinitionUrl={siteConfig.customFields.messagingInternationalSpecLink}/>
        </Layout>
    );
}
