import React from 'react';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';    // returns whether or not the theme is light or dark
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../../components/skds.module.css';
import Table from '../../components/sdkTable.js';

const Title = 'Python';
const Svg = require('../../../static/img/bw-python.svg').default;

const LinksList = [
  {
    label: "bandwidth-sdk",
    link: "https://pypi.org/project/bandwidth-sdk/",
    description: "Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages",
    githubLink: "https://github.com/Bandwidth/python-sdk"
  }, {
    label: "Code Samples",
    link: "",
    description: "Code Samples showing how to utilize the Bandwidth Python SDK",
    githubLink: "https://github.com/orgs/Bandwidth-Samples/repositories?language=python"
  }
]

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
          link: "",
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
            <div className="App">
              <Table data={this.linksList.linksData}/>
            </div>
            </center>
          </Layout>

        );
    }
}
