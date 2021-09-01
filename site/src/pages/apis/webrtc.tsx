import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '../../components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`DASH Notifications API Reference`}
          description="Authentication and Notifications. Everything you'll need to start working with our DASH Notifications API."
          keywords="Bandwidth,API,DASH,Notification">
            <ApiReference spec={siteConfig.customFields.webRTCSpec} color={siteConfig.customFields.bwBlue} />
        </Layout>
    );
}
