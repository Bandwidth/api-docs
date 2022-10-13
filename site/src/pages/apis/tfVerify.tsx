
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '../../components/ApiReference';
export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
        title={"Toll-Fee Verification API Reference"}                         // SEO metadata tags
        description="Submission, management, and querying of requests to verify toll-free US phone numbers for message campaigns"
        keywords="Bandwidth,API,Messaging,Toll-Free Verification">
            <ApiReference                                       // ReDoc API Reference Component
                spec={siteConfig.customFields.tfVerifySpec}           // The spec object that was exported in step 5
                color={siteConfig.customFields.bwBlue}    // product color for highlighting
            />
        </Layout>
    );
}            
