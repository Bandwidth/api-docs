import React from 'react';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';    // returns whether or not the theme is light or dark
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { RedocStandalone } from 'redoc';
import { lightTheme, darkTheme } from '../../css/redocTheme';

const RedocConfig = () => {
  const {siteConfig} = useDocusaurusContext();
  const {isDarkTheme} = useThemeContext();
  return <RedocStandalone spec={siteConfig.customFields.phoneNumberLookupSpec} options={{
                      scrollYOffset: '.navbar', // makes the fixed sidebar and scrolling play nicey with docusaurus navbar
                      pathInMiddlePanel: true,
                      expandSingleSchemaField: true,
                      menuToggle: true,
                      theme: isDarkTheme ? darkTheme(siteConfig.customFields.numbersMaroon) : lightTheme(siteConfig.customFields.numbersMaroon)
                  }}/>
}

export default function ApiReference() {
    return (
        <Layout
          title={`Phone Number Lookup API Reference`}
          description="Authentication and Number Lookup. Everything you'll need to start working with our Phone Number Lookup API."
          keywords="Bandwidth,API,Phone,Number,Lookup">
            <main>
              <div className="RedocStandalone">
                <RedocConfig />
              </div>
            </main>
        </Layout>
    );
}
