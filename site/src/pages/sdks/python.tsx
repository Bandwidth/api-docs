import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../css/sdks.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';

const Title = 'Python';
const Svg = require('../../../static/img/bw-python.svg').default;


export default function sdkPage() {
    return(
      <Layout
        title={`Python SDK`}
        description="A list of resources for the Python SDK."
        keywords="Bandwidth,SDK,Python">
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
              <td><a href="https://pypi.org/project/bandwidth-sdk/"><code>bandwidth-sdk</code></a></td>
              <td>Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages</td>
              <td><a href="https://github.com/Bandwidth/python-sdk"></a></td>
            </tr>
            <tr>
              <td>Code Samples</td>
              <td>Code Samples showing how to utilize the Bandwidth Python SDK</td>
              <td><a href="https://github.com/orgs/Bandwidth-Samples/repositories?language=python"></a></td>
            </tr>
          </tbody>
          </table>
        </div>
        <br/>
        <br/>
      </Layout>
    );
  }
