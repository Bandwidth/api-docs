import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Product API Reference`}
          description="Product Description"
          keywords="Bandwidth,API,Product,Keywords">
            <ApiReference spec={siteConfig.customFields.apiSpec} color={siteConfig.customFields.productColor} />
        </Layout>
    );
}
