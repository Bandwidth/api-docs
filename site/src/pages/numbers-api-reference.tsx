import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Iframe from 'react-iframe'

export default function ApiReference() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <main>
              <br/>
              <div class="a">
                Emojis are explicitly not allowed on any endpoint for this API.
              </div><br/>
              <div class="a">
                This API expects phone numbers to be in a 10 digit format <code>XXXYYYZZZZ</code>, not in E164 format.
              </div>
              <div class="a">
                This is different from the voice and messaging APIs, which expect phone numbers in E164 format.
              </div><br/>
              <div class="a">
                Base API URL:
              </div>
              <div class="a">
                <code>https://dashboard.bandwidth.com/api/</code>
              </div>
              <div class="a">
                <iframe src="https://dev.bandwidth.com/numbers/apiRef.html"
                        width="900px"
                        height="650px"
                        display="inline"
                        position="relative"
                        frameBorder="0"/>
              </div>
            </main>
        </Layout>
    );
}
