import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
          title={`Voice API Reference`}
          description="Authentication, Calls, Recordings, and Conferences. Everything you'll need to start working with our Voice API."
          keywords="Bandwidth,API,Voice,Call,Recording,Conference">
            <ApiReference spec={siteConfig.customFields.voiceSpec} color={siteConfig.customFields.voicePurple} downloadDefinitionUrl="https://github.com/Bandwidth/api-docs/blob/main/site/specs/voice.yml"/>
        </Layout>
    );
}
