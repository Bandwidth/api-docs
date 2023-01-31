import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ApiReference from '@site/src/components/ApiReference';

export default function ApiReferencePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Blue Sky Ops API Reference`}
      description="Authentication and Notifications. Everything you'll need to start working with our DASH Notifications API."
      keywords="Bandwidth,API,Blue Sky,Voice"
    >
      <ApiReference
        spec={siteConfig.customFields.blueSkyOpsSpec}
        color={siteConfig.customFields.voicePurple}
        downloadDefinitionUrl={siteConfig.customFields.blueSkyOpsSpecLink}
      />
    </Layout>
  );
}
