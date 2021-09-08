import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../css/sdks.module.css';
import GitHubLink from '../../components/GitHubLink';

const Title = 'Java';
const Svg = require('../../../static/img/bw-java.svg').default;

export default function sdkPage() {
    return(
      <Layout
        title={`Java SDK`}
        description="A list of resources for the Java SDK."
        keywords="Bandwidth,SDK,Java">
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
              <td><a href="https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-sdk"><code>com.bandwidth.sdk/bandwidth-sdk</code></a></td>
              <td>Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/java-sdk"}/></td>
            </tr>
            <tr>
              <td><a href="https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-java-iris-sdk"><code>com.bandwidth.sdk/bandwidth-java-iris-sdk</code></a></td>
              <td>Manage Phone Numbers and Account Settings</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/java-bandwidth-iris"}/></td>
            </tr>
            <tr>
              <td>Code Samples</td>
              <td>Code Samples showing how to utilize the Bandwidth Java SDK</td>
              <td><GitHubLink GHLink={"https://github.com/orgs/Bandwidth-Samples/repositories?language=java"}/></td>
            </tr>
          </tbody>
          </table>
        </div>
        <br/>
        <br/>
      </Layout>
    );
  }
