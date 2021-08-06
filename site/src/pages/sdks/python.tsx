import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../components/skds.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';

const Title = 'Python';
const Svg = require('../../../static/img/bw-python.svg').default;

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
        <center>
        <div className="resource-table">
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
              <td><a href="https://github.com/Bandwidth/python-sdk"><Github/></a></td>
            </tr>
            <tr>
              <td>Code Samples</td>
              <td>Code Samples showing how to utilize the Bandwidth Python SDK</td>
              <td><a href="https://github.com/orgs/Bandwidth-Samples/repositories?language=python"><Github/></a></td>
            </tr>
          </tbody>
          </table>
        </div>
        </center>
        <br/>
        <br/>
      </Layout>
    );
  }
