import React from 'react';
import Layout from '@theme/Layout';
import SdkPage from '@site/src/components/SdkPage.js';

const Svg = require('@site/static/img/sdk-logos/python.svg').default;

const props = {
  Svg: Svg,
  title: 'Python',
  repoLinks: [
    {
      packageLink: 'https://pypi.org/project/bandwidth-sdk/',
      title: 'bandwidth-sdk',
      description: 'Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages',
      ghLink: 'https://github.com/Bandwidth/python-sdk'
    }
  ],
  samplesLink: 'https://github.com/orgs/Bandwidth-Samples/repositories?language=python'
};

export default function sdkPage() {
    return(
      <Layout
        title={`Python SDK`}
        description="A list of resources for the Python SDK."
        keywords="Bandwidth,SDK,Python">
        <SdkPage {...props} />
      </Layout>
    );
  }
