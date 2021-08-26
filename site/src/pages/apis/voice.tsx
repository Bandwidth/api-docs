import React from 'react';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';    // returns whether or not the theme is light or dark
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { RedocStandalone } from 'redoc';
import { lightTheme, darkTheme } from '../../css/redocTheme';

const RedocConfig = () => {
  const {siteConfig} = useDocusaurusContext();
  const {isDarkTheme} = useThemeContext();
  return <RedocStandalone spec={siteConfig.customFields.voiceSpec} options={{
                      scrollYOffset: '.navbar', // makes the fixed sidebar and scrolling play nicey with docusaurus navbar
                      pathInMiddlePanel: true,
                      expandSingleSchemaField: true,
                      menuToggle: true,
                      theme: isDarkTheme ? darkTheme(siteConfig.customFields.voicePurple) : lightTheme(siteConfig.customFields.voicePurple)
                  }}/>
}

export default function ApiReference() {
    return (
        <Layout
          title={`Voice API Reference`}
          description="Authentication, Calls, Recordings, and Conferences. Everything you'll need to start working with our Voice API."
          keywords="Bandwidth,API,Voice,Call,Recording,Conference">
          <main>
            <div className="RedocStandalone">
              <RedocConfig />
            </div>
          </main>
        </Layout>
    );
}
