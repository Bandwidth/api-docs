import React from 'react';
import Layout from '@theme/Layout';
import SdkPage from '@site/src/components/SdkPage';

const Svg = require('@site/static/img/sdk-icons/csharp.svg').default;

const props = {
  Svg: Svg,
  title: 'C#',
  repoLinks: [
    {
      packageLink: 'https://www.nuget.org/packages/Bandwidth.Sdk/',
      title: 'bandwidth-sdk',
      description: 'Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages',
      ghLink: 'https://github.com/Bandwidth/csharp-sdk'
    },
    {
      packageLink: 'https://www.nuget.org/packages/Bandwidth.Iris/',
      title: 'bandwidth-iris',
      description: 'Manage Phone Numbers and Account Settings',
      ghLink: 'https://github.com/Bandwidth/csharp-bandwidth-iris'
    }
  ],
  samplesLink: 'https://github.com/orgs/Bandwidth-Samples/repositories?language=c%23'
};

export default function sdkPage() {
    return(
      <Layout
        title={`C# SDK`}
        description="A list of resources for the C# SDK."
        keywords="Bandwidth,SDK,C#,.NET">
        <SdkPage {...props} />
      </Layout>
    );
  }
