import React from 'react';
import Layout from '@theme/Layout';
import sdkStyles from '../../css/sdks.module.css';
import GitHubLink from '../../components/GitHubLink';

const Title = 'PHP';
const Svg = require('@site/static/img/php.svg').default;


export default function sdkPage() {
    return(
      <Layout
        title={`PHP SDK`}
        description="A list of resources for the PHP SDK."
        keywords="Bandwidth,SDK,PHP">
        <div className="text--center">
          <Svg className={sdkStyles.sdkSvg} alt={Title} />
        </div>
        <div className={sdkStyles.sdkProductTable}>
          <table>
          <thead>
            <tr>
              <th>Resource</th>
              <th>Description</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://packagist.org/packages/bandwidth/sdk"><code>bandwidth-sdk</code></a></td>
              <td>Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/php-sdk"}/></td>
            </tr>
            <tr>
              <td><a href="https://packagist.org/packages/bandwidth/iris"><code>com.bandwidth.sdk/php-bandwidth-iris</code></a></td>
              <td>Manage Phone Numbers and Account Settings</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/php-bandwidth-iris"}/></td>
            </tr>
            <tr>
              <td>Code Samples</td>
              <td>Code Samples showing how to utilize the Bandwidth PHP SDK</td>
              <td><GitHubLink GHLink={"https://github.com/orgs/Bandwidth-Samples/repositories?language=php"}/></td>
            </tr>
          </tbody>
          </table>
        </div>
        <br/>
        <br/>
      </Layout>
    );
  }
