import React from 'react';
import Layout from '@theme/Layout';
import styles from '../../components/skds.module.css';
import Table from '../../components/sdkTable.tsx';

const Title = 'NodeJS';
const Svg = require('../../../static/img/bw-node.svg').default;

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.linksList={
        linksData: [
        {
          label: "@bandwidth/numbers",
          link: "https://www.npmjs.com/package/@bandwidth/numbers",
          description: "Manage Phone Numbers and Account Settings",
          githubLink: "https://github.com/Bandwidth/node-numbers"
        }, {
          label: "@bandwidth/voice",
          link: "https://www.npmjs.com/package/@bandwidth/voice",
          description: "Create Outbound Phone Calls and Manage Call Media",
          githubLink: "https://github.com/Bandwidth/node-voice"
        }, {
          label: "@bandwidth/messaging",
          link: "https://www.npmjs.com/package/@bandwidth/messaging",
          description: "Create Outbound Messages and Manage Message Media (MMS)",
          githubLink: "https://github.com/Bandwidth/node-messaging"
        }, {
          label: "@bandwidth/mfa",
          link: "https://www.npmjs.com/package/@bandwidth/mfa",
          description: "Create Multifactor Auth Calls or Messages",
          githubLink: "https://github.com/bandwidth/node-mfa"
        }, {
          label: "@bandwidth/webrtc",
          link: "https://www.npmjs.com/package/@bandwidth/webrtc",
          description: "Create and Manage WebRTC Sessions",
          githubLink: "https://github.com/Bandwidth/node-webrtc"
        }, {
          label: "Code Samples",
          description: "Code Samples showing how to utilize the Bandwidth NodeJS SDK",
          githubLink: "https://github.com/orgs/Bandwidth-Samples/repositories?language=javascript"
        },
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
