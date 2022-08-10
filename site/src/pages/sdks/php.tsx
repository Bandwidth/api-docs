import React from 'react';
import Layout from '@theme/Layout';
import SdkPage from '@site/src/components/SdkPage.js';

const Svg = require('@site/static/img/sdk-logos/php.svg').default;

const props = {
  Svg: Svg,
  title: 'PHP',
  repoLinks: [
    {
      packageLink: 'https://packagist.org/packages/bandwidth/sdk',
      title: 'bandwidth/sdk',
      description: 'Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages',
      ghLink: 'https://github.com/Bandwidth/php-sdk'
    },
    {
      packageLink: 'https://packagist.org/packages/bandwidth/iris',
      title: 'bandwidth/iris',
      description: 'Manage Phone Numbers and Account Settings',
      ghLink: 'https://github.com/Bandwidth/php-bandwidth-iris'
    }
  ],
  samplesLink: 'https://github.com/orgs/Bandwidth-Samples/repositories?language=php'
};

export default function sdkPage() {
    return(
      <Layout
        title={`PHP SDK`}
        description="A list of resources for the PHP SDK."
        keywords="Bandwidth,SDK,PHP">
        < SdkPage {...props} />
      </Layout>
    );
  }
