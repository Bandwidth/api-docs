import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '../../components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Porting API Reference`}
          description="Everything you'll need to start working with our Porting API."
          keywords="Bandwidth,API,Porting">
            <ApiReference spec={siteConfig.customFields.portingSpec} color={siteConfig.customFields.numbersMaroon} />
        </Layout>
    );
}
