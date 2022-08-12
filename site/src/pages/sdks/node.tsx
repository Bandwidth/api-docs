import React from 'react';
import Layout from '@theme/Layout';
import SdkPage from '@site/src/components/SdkPage.js';

const Svg = require('@site/static/img/sdk-icons/node.svg').default;

const props = {
  Svg: Svg,
  title: 'Node',
  repoLinks: [
    {
      packageLink: 'https://www.npmjs.com/package/@bandwidth/numbers',
      title: '@bandwidth/numbers',
      description: 'Manage Phone Numbers and Account Settings',
      ghLink: 'https://github.com/Bandwidth/node-numbers'
    },
    {
      packageLink: 'https://www.npmjs.com/package/@bandwidth/voice',
      title: '@bandwidth/voice',
      description: 'Create Outbound Phone Calls and Manage Call Media',
      ghLink: 'https://github.com/Bandwidth/node-voice'
    },
    {
      packageLink: 'https://www.npmjs.com/package/@bandwidth/messaging',
      title: '@bandwidth/messaging',
      description: 'Create and Manage SMS/MMS Messages',
      ghLink: 'https://github.com/Bandwidth/node-messaging'
    },
    {
      packageLink: 'https://www.npmjs.com/package/@bandwidth/mfa',
      title: '@bandwidth/mfa',
      description: 'Create Multifactor Auth Calls or Messages',
      ghLink: 'https://github.com/Bandwidth/node-mfa'
    },
    {
      packageLink: 'https://www.npmjs.com/package/@bandwidth/webrtc',
      title: '@bandwidth/webrtc',
      description: 'Create and Manage WebRTC Sessions',
      ghLink: 'https://github.com/Bandwidth/node-webrtc'
    },
  ],
  samplesLink: 'https://github.com/orgs/Bandwidth-Samples/repositories?language=javascript'
};

export default function sdkPage() {
    return(
      <Layout
        title={`Node SDK`}
        description="A list of resources for the Node.js SDK."
        keywords="Bandwidth,SDK,Node,JavaScript">
        <SdkPage {...props} />
      </Layout>
    );
  }
