import React from 'react';
import Layout from '@theme/Layout';
import sdkStyles from '../../css/sdks.module.css';
import GitHubLink from '../../components/GitHubLink';

const Title = 'Node';
const Svg = require('../../../static/img/node.svg').default;


export default function sdkPage() {
    return(
      <Layout
        title={`Node SDK`}
        description="A list of resources for the Node.js SDK."
        keywords="Bandwidth,SDK,Node,JavaScript">
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
              <td><a href="https://www.npmjs.com/package/@bandwidth/numbers"><code>@bandwidth/numbers</code></a></td>
              <td>Manage Phone Numbers and Account Settings</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/node-numbers"}/></td>
            </tr>
            <tr>
              <td><a href="https://www.npmjs.com/package/@bandwidth/voice"><code>@bandwidth/voice</code></a></td>
              <td>Create Outbound Phone Calls and Manage Call Media</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/node-voice"}/></td>
            </tr>
            <tr>
              <td><a href="https://www.npmjs.com/package/@bandwidth/messaging"><code>@bandwidth/messaging</code></a></td>
              <td>Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/node-messaging"}/></td>
            </tr>
            <tr>
              <td><a href="https://www.npmjs.com/package/@bandwidth/mfa"><code>@bandwidth/mfa</code></a></td>
              <td>Create Multifactor Auth Calls or Messages</td>
              <td><GitHubLink GHLink={"https://github.com/bandwidth/node-mfa"}/></td>
            </tr>
            <tr>
              <td><a href="https://www.npmjs.com/package/@bandwidth/webrtc"><code>@bandwidth/webrtc</code></a></td>
              <td>Create and Manage WebRTC Sessions</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/node-webrtc"}/></td>
            </tr>
            <tr>
              <td>Code Samples</td>
              <td>Code Samples showing how to utilize the Bandwidth Node SDK</td>
              <td><GitHubLink GHLink={"https://github.com/orgs/Bandwidth-Samples/repositories?language=javascript"}/></td>
            </tr>
          </tbody>
          </table>
        </div>
        <br/>
        <br/>
      </Layout>
    );
  }
