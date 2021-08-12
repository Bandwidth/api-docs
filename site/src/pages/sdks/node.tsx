import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../css/skds.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';

const Title = 'Node';
const Svg = require('../../../static/img/bw-node.svg').default;

const Github = () => {
  const {isDarkTheme} = useThemeContext();
  const GithubSvg = require('../../../static/img/github.svg').default;
  const GithubDarkSvg = require('../../../static/img/github-dark.svg').default;
  const Svg = isDarkTheme ? GithubDarkSvg : GithubSvg;
  return <Svg className={styles.githubSvg}/>;
}

export default function sdkPage() {
    return(
      <Layout>
        <div className="text--center">
          <Svg className={styles.sdkSvg} alt={Title} />
        </div>
        <div className={styles.sdkProductTable}>
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
              <td><a href="https://github.com/Bandwidth/node-numbers"><Github/></a></td>
            </tr>
            <tr>
              <td><a href="https://www.npmjs.com/package/@bandwidth/voice"><code>@bandwidth/voice</code></a></td>
              <td>Create Outbound Phone Calls and Manage Call Media</td>
              <td><a href="https://github.com/Bandwidth/node-voice"><Github/></a></td>
            </tr>
            <tr>
              <td><a href="https://www.npmjs.com/package/@bandwidth/messaging"><code>@bandwidth/messaging</code></a></td>
              <td>Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages</td>
              <td><a href="https://github.com/Bandwidth/node-messaging"><Github/></a></td>
            </tr>
            <tr>
              <td><a href="https://www.npmjs.com/package/@bandwidth/mfa"><code>@bandwidth/mfa</code></a></td>
              <td>Create Multifactor Auth Calls or Messages</td>
              <td><a href="https://github.com/bandwidth/node-mfa"><Github/></a></td>
            </tr>
            <tr>
              <td><a href="https://www.npmjs.com/package/@bandwidth/webrtc"><code>@bandwidth/webrtc</code></a></td>
              <td>Create and Manage WebRTC Sessions</td>
              <td><a href="https://github.com/Bandwidth/node-webrtc"><Github/></a></td>
            </tr>
            <tr>
              <td>Code Samples</td>
              <td>Code Samples showing how to utilize the Bandwidth Node SDK</td>
              <td><a href="https://github.com/orgs/Bandwidth-Samples/repositories?language=javascript"><Github/></a></td>
            </tr>
          </tbody>
          </table>
        </div>
        <br/>
        <br/>
      </Layout>
    );
  }
