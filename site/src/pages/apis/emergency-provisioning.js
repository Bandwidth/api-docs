import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Emergency Provisioning API Reference`}
            description="Emergency Provi."
            keywords="Bandwidth,API,DASH,URI,Location">
            <ApiReference spec={siteConfig.customFields.emergencyProvisioningSpec} color={siteConfig.customFields.emergencyOrange} downloadDefinitionUrl={siteConfig.customFields.emergencyProvisioningSpecLink}/>
        </Layout>
    );
}
