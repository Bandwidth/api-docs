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
      {title: "V3", link: "/apis/global/v3"},
      {title: "Beta", link: "/apis/global/beta"}
    ];
    const version = "V3"

    return (
        <Layout
          title={`Global API V3 Reference`}
          description=""
          keywords="Bandwidth,API,Global,Voxbone,Porting">
            <SpecVersionDropdown options={options} default={version} />
            <ApiReference spec={siteConfig.customFields.globalSpec_v3} color={siteConfig.customFields.bwBlue} downloadDefinitionUrl="https://github.com/Bandwidth/api-docs/blob/main/site/specs/global-v3.yml"/>
        </Layout>
    );
}
