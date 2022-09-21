import React from 'react';
import Layout from '@theme/Layout';
import SdkPage from '@site/src/components/SdkPage.js';

const Svg = require('@site/static/img/sdk-icons/ruby.svg').default;

const props = {
  Svg: Svg,
  title: 'Ruby',
  repoLinks: [
    {
      packageLink: 'https://rubygems.org/gems/bandwidth-sdk',
      title: 'bandwidth-sdk',
      description: 'Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages',
      ghLink: 'https://github.com/Bandwidth/ruby-sdk'
    },
    {
      packageLink: 'https://rubygems.org/gems/ruby-bandwidth-iris',
      title: 'ruby-bandwidth-iris',
      description: 'Manage Phone Numbers and Account Settings',
      ghLink: 'https://github.com/Bandwidth/ruby-bandwidth-iris'
    }
  ],
  samplesLink: 'https://github.com/orgs/Bandwidth-Samples/repositories?language=ruby'
};

export default function sdkPage() {
    return(
      <Layout
        title={`Ruby SDK`}
        description="A list of resources for the Ruby SDK."
        keywords="Bandwidth,SDK,Ruby">
        <SdkPage {...props} />
      </Layout>
    );
  }
