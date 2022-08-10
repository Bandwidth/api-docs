import React from 'react';
import Layout from '@theme/Layout';
import SdkPage from '@site/src/components/SdkPage.js';

const Svg = require('@site/static/img/sdk-logos/java.svg').default;

const props = {
  Svg: Svg,
  title: 'Java',
  repoLinks: [
    {
      packageLink: 'https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-sdk',
      title: 'com.bandwidth.sdk/bandwidth-sdk',
      description: 'Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages',
      ghLink: 'https://github.com/Bandwidth/java-sdk'
    },
    {
      packageLink: 'https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-java-iris-sdk',
      title: 'com.bandwidth.sdk/bandwidth-java-iris-sdk',
      description: 'Manage Phone Numbers and Account Settings',
      ghLink: 'https://github.com/Bandwidth/java-bandwidth-iris'
    }
  ],
  samplesLink: 'https://github.com/orgs/Bandwidth-Samples/repositories?language=java'
};

export default function sdkPage() {
    return(
      <Layout
        title={`Java SDK`}
        description="A list of resources for the Java SDK."
        keywords="Bandwidth,SDK,Java">
        <SdkPage {...props} />
      </Layout>
    );
  }
