import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Messaging API Reference`}
          description="Authentication, Media, and Messages. Everything you'll need to start working with our Messaging API."
          keywords="Bandwidth,API,Messaging,Media">
            <ApiReference spec={siteConfig.customFields.messagingSpec} color={siteConfig.customFields.messagingGreen} downloadDefinitionUrl={siteConfig.customFields.messagingSpecLink}/>
        </Layout>
    );
}
