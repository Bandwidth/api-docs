import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../css/sdks.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';

const Title = 'C#';
const Svg = require('../../../static/img/bw-csharp.svg').default;

const Github = () => {
  // const {isDarkTheme} = useThemeContext();
  // const GithubSvg = require('../../../static/img/github.svg').default;
  // const GithubDarkSvg = require('../../../static/img/github-dark.svg').default;
  // const Svg = isDarkTheme ? GithubDarkSvg : GithubSvg;
  return <Svg className={styles.githubSvg}/>; 
}

export default function sdkPage() {
    return(
      <Layout
        title={`C# SDK`}
        description="A list of resources for the C# SDK."
        keywords="Bandwidth,SDK,C#,.NET">
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
              <td><a href="https://www.nuget.org/packages/Bandwidth.Sdk/"><code>bandwidth-sdk</code></a></td>
              <td>Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages</td>
              <td><a href="https://github.com/Bandwidth/csharp-sdk"></a></td>
            </tr>
            <tr>
              <td><a href="https://www.nuget.org/packages/Bandwidth.Iris/"><code>bandwidth-iris</code></a></td>
              <td>Manage Phone Numbers and Account Settings</td>
              <td><a href="https://github.com/Bandwidth/csharp-bandwidth-iris"></a></td>
            </tr>
            <tr>
              <td>Code Samples</td>
              <td>Code Samples showing how to utilize the Bandwidth C# SDK</td>
              <td><a href="https://github.com/orgs/Bandwidth-Samples/repositories?language=c%23"></a></td>
            </tr>
          </tbody>
          </table>
        </div>
        <br/>
        <br/>
      </Layout>
    );
  }
