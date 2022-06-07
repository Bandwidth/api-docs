import React from 'react';
import Layout from '@theme/Layout';
import sdkStyles from '../../css/sdks.module.css';
import GitHubLink from '../../components/GitHubLink';

const Title = 'Ruby';
const Svg = require('../../../static/img/ruby.svg').default;


export default function sdkPage() {
    return(
      <Layout
        title={`Ruby SDK`}
        description="A list of resources for the Ruby SDK."
        keywords="Bandwidth,SDK,Ruby">
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
              <td><a href="https://rubygems.org/gems/bandwidth-sdk"><code>bandwidth-sdk</code></a></td>
              <td>Manage Phone Calls with BXML, Create Outbound Calls, SMS Messages, MMS Messages</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/ruby-sdk"}/></td>
            </tr>
            <tr>
              <td><a href="https://rubygems.org/gems/ruby-bandwidth-iris"><code>ruby-bandwidth-iris</code></a></td>
              <td>Manage Phone Numbers and Account Settings</td>
              <td><GitHubLink GHLink={"https://github.com/Bandwidth/ruby-bandwidth-iris"}/></td>
            </tr>
            <tr>
              <td>Code Samples</td>
              <td>Code Samples showing how to utilize the Bandwidth Ruby SDK</td>
              <td><GitHubLink GHLink={"https://github.com/orgs/Bandwidth-Samples/repositories?language=ruby"}/></td>
            </tr>
          </tbody>
          </table>
        </div>
        <br/>
        <br/>
      </Layout>
    );
  }
