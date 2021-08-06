import React from 'react';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';    // returns whether or not the theme is light or dark
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../../components/skds.module.css';
import Table from '../../components/sdkTable.tsx';

const Title = 'Ruby';
const Svg = require('../../../static/img/bw-ruby.svg').default;

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.linksList={
        linksData: [
        {
          label: "bandwidth-sdk",
          link: "https://rubygems.org/gems/bandwidth-sdk",
          description: "Manage Phone Calls with BXML, Create outbound calls, SMS messages, MMS messages",
          githubLink: "https://github.com/Bandwidth/ruby-sdk"
        }, {
          label: "ruby-bandwidth-iris",
          link: "https://rubygems.org/gems/ruby-bandwidth-iris",
          description: "Manage Phone Numbers and Account Settings",
          githubLink: "https://rubygems.org/gems/ruby-bandwidth-irisk"
        }, {
          label: "Code Samples",
          description: "Code Samples showing how to utilize the Bandwidth Ruby SDK",
          githubLink: "https://github.com/Bandwidth-Samples?language=ruby"
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
