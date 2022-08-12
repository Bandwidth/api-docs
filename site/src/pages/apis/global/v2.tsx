import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';
import SpecVersionDropdown from '@site/src/components/SpecVersionDropdown';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    const options = [
      {title: "V1", link: "/apis/global"},
      {title: "V2", link: "/apis/global/v2"},
      {title: "Beta", link: "/apis/global/beta"}
    ];
    const version = "V2"

    return (
        <Layout
          title={`Global API V2 Reference`}
          description=""
          keywords="Bandwidth,API,Global,Voxbone">
            <SpecVersionDropdown options={options} default={version} />
            <ApiReference spec={siteConfig.customFields.globalSpec_v2} color={siteConfig.customFields.voxbonePurple} />
        </Layout>
    );
}
