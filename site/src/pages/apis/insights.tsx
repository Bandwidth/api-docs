import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '../../components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Phone Number Lookup API Reference`}
          description="Authentication and Number Lookup. Everything you'll need to start working with our Phone Number Lookup API."
          keywords="Bandwidth,API,Phone,Number,Lookup">
            <ApiReference spec={siteConfig.customFields.insightsSpec} color={siteConfig.customFields.voicePurple} />
        </Layout>
    );
}
