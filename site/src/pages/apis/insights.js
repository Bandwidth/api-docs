import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Insights API Reference`}
          description="Account metrics and information. Everything you'll need to start working with our Insights API."
          keywords="Bandwidth,API,Insights,Metrics">
            <ApiReference spec={siteConfig.customFields.insightsSpec} color={siteConfig.customFields.voicePurple} downloadDefinitionUrl="https://github.com/Bandwidth/api-docs/blob/main/site/specs/insights.yml"/>
        </Layout>
    );
}
