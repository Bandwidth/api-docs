import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '../../components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`DASH API Reference`}
          description="Authentication, URIs, and Location. Everything you'll need to start working with our DASH API."
          keywords="Bandwidth,API,DASH,URI,Location">
            <ApiReference spec={siteConfig.customFields.dashSpec} color={siteConfig.customFields.emergencyOrange} />
        </Layout>
    );
}
