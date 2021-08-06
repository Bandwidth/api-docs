import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../components/skds.module.css';
import Table from '../../components/sdkTable.tsx';

const Title = 'Python';
const Svg = require('../../../static/img/bw-python.svg').default;

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.linksList={
        linksData: [
        {
          label: "bandwidth-sdk",
          link: "https://pypi.org/project/bandwidth-sdk/",
          description: "Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages",
          githubLink: "https://github.com/Bandwidth/python-sdk"
        }, {
          label: "Code Samples",
          description: "Code Samples showing how to utilize the Bandwidth Python SDK",
          githubLink: "https://github.com/orgs/Bandwidth-Samples/repositories?language=python"
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
