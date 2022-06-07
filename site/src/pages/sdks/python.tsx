import React from 'react';
import Layout from '@theme/Layout';
import sdkStyles from '../../css/sdks.module.css';
import GitHubLink from '../../components/GitHubLink';

const Title = 'Python';
const Svg = require('../../../static/img/python.svg').default;


export default function sdkPage() {
    return(
      <Layout
        title={`Python SDK`}
        description="A list of resources for the Python SDK."
        keywords="Bandwidth,SDK,Python">
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
              <td><a href="https://pypi.org/project/bandwidth-sdk/"><code>bandwidth-sdk</code></a></td>
              <td>Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/python-sdk"}/></td>
            </tr>
            <tr>
              <td>Code Samples</td>
              <td>Code Samples showing how to utilize the Bandwidth Python SDK</td>
              <td><GitHubLink GHLink={"https://github.com/orgs/Bandwidth-Samples/repositories?language=python"}/></td>
            </tr>
          </tbody>
          </table>
        </div>
        <br/>
        <br/>
      </Layout>
    );
  }
