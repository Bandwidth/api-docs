import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ApiReference from "@site/src/components/ApiReference";

export default function ApiReferencePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Global Messaging API Reference`}
      description="Bandwidth Messaging - Global"
      keywords="Bandwidth,API,Messaging,Global"
    >
      <ApiReference
        spec={siteConfig.customFields.globalMessagingSpec}
        color={siteConfig.customFields.messagingGreen}
        downloadDefinitionUrl={siteConfig.customFields.identitySpecLink}
      />
    </Layout>
  );
}
