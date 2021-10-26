import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '../../components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Identity Management API Reference`}
          description="Everything you need to know to configure and manage the identities for your accounts"
          keywords="Bandwidth,API,Identity,Authentication,SSO">
            <ApiReference spec={siteConfig.customFields.identitySpec} color={siteConfig.customFields.voicePurple} />
        </Layout>
    );
}
