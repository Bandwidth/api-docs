import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';
import SpecVersionDropdown from '@site/src/components/SpecVersionDropdown';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    const options = [
        {title: "V1", link: "/apis/numbers/"},
        {title: "V2", link: "/apis/numbers/v2/"},
    ];
    const version = "V2"

    return (
        <Layout
            title={`Numbers API V2 Reference`}
            description="Everything you'll need to start working with our Numbers API."
            keywords="Bandwidth,API,Numbers">
            <SpecVersionDropdown options={options} default={version} />
            <ApiReference spec={siteConfig.customFields.numbersSpec_v2} color={siteConfig.customFields.numbersMaroon} hideDownloadButton={true} downloadDefinitionUrl={siteConfig.customFields.numbersSpec_v2Link}/>
        </Layout>
    );
}
