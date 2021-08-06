import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../components/skds.module.css';
import Table from '../../components/sdkTable.js';

const Title = 'CSharp';
const Svg = require('../../../static/img/bw-csharp.svg').default;

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.linksList={
        linksData: [
        {
          label: "bandwidth-sdk",
          link: "https://www.nuget.org/packages/Bandwidth.Sdk/",
          description: "Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages",
          githubLink: "https://github.com/Bandwidth/csharp-sdk"
        }, {
          label: "bandwidth-iris",
          link: "https://www.nuget.org/packages/Bandwidth.Iris/",
          description: "Manage Phone Numbers and Account Settings",
          githubLink: "https://github.com/Bandwidth/csharp-bandwidth-iris"
        }, {
          label: "Code Samples",
          description: "Code Samples showing how to utilize the Bandwidth C# SDK",
          githubLink: "https://github.com/Bandwidth-Samples?language=c%23"
        }
      ]}
    };

    render() {
        return (
          <Layout>
            <div className="text--center">
              <Svg className={styles.sdkSvg} alt={Title} />
            </div>
            <center>
            <div className="resource-table">
              <Table data={this.linksList.linksData}/>
            </div>
            </center>
            <br/>
          </Layout>

        );
    }
}
