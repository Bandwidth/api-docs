import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import ApiReference from '../../components/ApiReference';

import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';

export default function ApiReferencePage() {

    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <API apiDescriptionDocument={siteConfig.customFields.messagingSpec} />
        </Layout>
    );
}
