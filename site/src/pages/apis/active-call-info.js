import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Active Phone Call Info API Reference`}
          description="The Bandwidth active phone call info API can be used to retrieve information about specific phone calls that are currently active on the Bandwidth network."
          keywords="Bandwidth,API,Voice,Call">
            <ApiReference spec={siteConfig.customFields.activeCallInfoSpec} color={siteConfig.customFields.voicePurple} downloadDefinitionUrl={siteConfig.customFields.activeCallInfoSpecLink}/>
        </Layout>
    );
}
