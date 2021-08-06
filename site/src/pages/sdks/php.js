import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../components/skds.module.css';
import Table from '../../components/sdkTable.js';

const Title = 'PHP';
const Svg = require('../../../static/img/bw-php.svg').default;

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.linksList={
        linksData: [
          {
            label: "bandwidth/sdk",
            link: "https://packagist.org/packages/bandwidth/sdk",
            description: "Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages",
            githubLink: "https://github.com/Bandwidth/php-sdk"
          }, {
            label: "bandwidth/iris",
            link: "https://packagist.org/packages/bandwidth/iris",
            description: "Manage Phone Numbers and Account Settings",
            githubLink: "https://github.com/Bandwidth/php-bandwidth-iris"
          }, {
            label: "Code Samples",
            description: "Code Samples showing how to utilize the Bandwidth PHP SDK",
            githubLink: "https://github.com/Bandwidth-Samples?language=php"
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
