import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../components/skds.module.css';
import Table from '../../components/sdkTable.tsx';

const Title = 'Java';
const Svg = require('../../../static/img/bw-java.svg').default;

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.linksList={
        linksData: [
          {
            label: "com.bandwidth.sdk/bandwidth-sdk",
            link: "https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-sdk",
            description: "Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages",
            githubLink: "https://github.com/Bandwidth/java-sdk"
          }, {
            label: "com.bandwidth.sdk/bandwidth-java-iris-sdk",
            link: "https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-java-iris-sdk",
            description: "Manage Phone Numbers and Account Settings",
            githubLink: "https://github.com/Bandwidth/java-bandwidth-iris"
          }, {
            label: "Code Samples",
            description: "Code Samples showing how to utilize the Bandwidth Java SDK",
            githubLink: "https://github.com/Bandwidth-Samples?language=java"
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
