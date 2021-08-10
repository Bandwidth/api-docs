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
              <div class="numbersHeader">
                Emojis are explicitly not allowed on any endpoint for this API.
                <br/><br/>
                This API expects phone numbers to be in a 10 digit format <code>XXXYYYZZZZ</code>, not in E164 format.
                <br/>
                This is different from the voice and messaging APIs, which expect phone numbers in E164 format.
                <br/><br/>
                Base API URL:
                <br/>
                <code>https://dashboard.bandwidth.com/api/</code>
              </div>
              <div class="irisRaml">
                <Iframe url="https://dev.bandwidth.com/numbers/apiRef.html"
                        id="irisRaml"
                        width="100%"
                        height="100%"
                        display="inline"
                        position="relative"
                        frameBorder="0"/>
              </div>
            </main>
        </Layout>
    );
}
