import React from 'react';
import Layout from '@theme/Layout';
import sdkStyles from '../../css/sdks.module.css';
import GitHubLink from '../../components/GitHubLink';

const Title = 'C#';
const Svg = require('../../../static/img/csharp.svg').default;

export default function sdkPage() {
    return(
      <Layout
        title={`C# SDK`}
        description="A list of resources for the C# SDK."
        keywords="Bandwidth,SDK,C#,.NET">
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
              <td><a href="https://www.nuget.org/packages/Bandwidth.Sdk/"><code>bandwidth-sdk</code></a></td>
              <td>Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/csharp-sdk"}/></td>
            </tr>
            <tr>
              <td><a href="https://www.nuget.org/packages/Bandwidth.Iris/"><code>bandwidth-iris</code></a></td>
              <td>Manage Phone Numbers and Account Settings</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/csharp-bandwidth-iris"}/></td>
            </tr>
            <tr>
              <td>Code Samples</td>
              <td>Code Samples showing how to utilize the Bandwidth C# SDK</td>
              <td><GitHubLink GHLink={"https://github.com/orgs/Bandwidth-Samples/repositories?language=c%23"}/></td>
            </tr>
          </tbody>
          </table>
        </div>
        <br/>
        <br/>
      </Layout>
    );
  }
