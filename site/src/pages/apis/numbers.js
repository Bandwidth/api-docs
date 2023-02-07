import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Numbers API Reference`}
          description="Everything you'll need to start working with our Numbers API."
          keywords="Bandwidth,API,Numbers">
            <ApiReference spec={siteConfig.customFields.numbersSpec} color={siteConfig.customFields.numbersMaroon} hideDownloadButton={true} downloadDefinitionUrl={siteConfig.customFields.numbersSpecLink}/>
        </Layout>
    );
}
