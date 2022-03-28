import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '../../../components/ApiReference';
import SpecVersionDropdown from '../../../components/SpecVersionDropdown';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    const options = [
      {title: "Legacy", link: "/apis/bwi/ws"},
      {title: "V1", link: "/apis/bwi"},
      {title: "V2", link: "/apis/bwi/v2"},
      {title: "Beta", link: "/apis/bwi/beta"}
    ];
    const version = "Beta"

    return (
        <Layout
          title={`Bandwidth International Beta API Reference`}
          description=""
          keywords="Bandwidth,API,International,Voxbone">
            <SpecVersionDropdown options={options} default={version} />
            <ApiReference spec={siteConfig.customFields.bwiSpec_beta} color={siteConfig.customFields.voxbonePurple} />
        </Layout>
    );
}
