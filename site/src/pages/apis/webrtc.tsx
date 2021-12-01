import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '../../components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`WebRtc API Reference`}
          description="Authentication, Participants, and Sessions. Everything you'll need to start working with our WebRtc API."
          keywords="Bandwidth,API,WebRtc">
            <ApiReference spec={siteConfig.customFields.webRTCSpec} color={siteConfig.customFields.webRtcBlue} />
        </Layout>
    );
}
