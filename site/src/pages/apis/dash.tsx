import React from 'react';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';    // returns whether or not the theme is light or dark
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { RedocStandalone } from 'redoc';
import { lightTheme, darkTheme } from '../../css/redocTheme';

const RedocConfig = () => {
  const {siteConfig} = useDocusaurusContext();
  const {isDarkTheme} = useThemeContext();
  return <RedocStandalone spec={siteConfig.customFields.dashSpec} options={{    // change this to the API spec path outlined in customFields
                      scrollYOffset: '.navbar', // makes the fixed sidebar and scrolling play nicey with docusaurus navbar
                      pathInMiddlePanel: true,
                      expandSingleSchemaField: true,
                      menuToggle: true,
                      theme: isDarkTheme ? darkTheme(siteConfig.customFields.emergencyOrange) : lightTheme(siteConfig.customFields.emergencyOrange)    // change this to the product primart color
                  }}/>
}

export default function ApiReference() {
    return (
        <Layout
          title={`DASH API Reference`}
          description="Authentication, URIs, and Location. Everything you'll need to start working with our DASH API."
          keywords="Bandwidth,API,DASH,URI,Location">
          <main>
            <div className="RedocStandalone">
              <RedocConfig />
            </div>
          </main>
        </Layout>
    );
}
