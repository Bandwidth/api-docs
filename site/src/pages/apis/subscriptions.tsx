import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '../../components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Subscriptions API Reference`}
          description="Subscriptions and Notifications. Everything you'll need to start working with our Subscriptions API."
          keywords="Bandwidth,API,Subscriptions,Notifications,Callbacks,Webhooks">
            <ApiReference spec={siteConfig.customFields.subscriptionsSpec} color={siteConfig.customFields.numbersMaroon} />
        </Layout>
    );
}
