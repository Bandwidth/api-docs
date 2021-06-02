import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {RedocStandalone} from 'redoc';

export default function ApiReference() {
    const {siteConfig} = useDocusaurusContext();
    const DOCUSAURUS = {
      darkGray: '#303846',
      light: {},
      dark: {
        primaryText: '#f5f6f7',
        secondaryText: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'rgb(24, 25, 26)',
      },
    };
    return (
        <Layout>
            <main>
                <RedocStandalone spec={siteConfig.customFields.messagingSpec} options={{
                    scrollYOffset: '.navbar', // makes the fixed sidebar and scrolling play nicey with docusaurus navbar
                    pathInMiddlePanel: true,
                    expandSingleSchemaField: true,
                    menuToggle: true,
                    theme: {
                        colors: {
                            primary: {
                                main: siteConfig.customFields.messagingGreen
                            },
                        },
                        typography: {
                          fontFamily: 'var(--ifm-font-family-base)',
                          fontSize: 'var(--ifm-font-size-base)',
                          lineHeight: 'var(--ifm-line-height-base)',
                          fontWeightLight: 'var(--ifm-font-weight-light)',
                          fontWeightRegular: 'var(--ifm-font-weight-base)',
                          fontWeightBold: 'var(--ifm-font-weight-bold)',
                          headings: {
                            fontFamily: 'var(--ifm-font-family-base)',
                            fontWeight: 'var(--ifm-font-weight-semibold)',
                            lineHeight: 'var(--ifm-line-height-base)',
                          },
                          code: {
                            fontFamily: 'var(--ifm-font-family-monospace)',
                            lineHeight: 'var(--ifm-pre-line-height)',
                          },
                        },
                        sidebar: {
                          width: '300px',
                          backgroundColor: 'transparent',
                        },
                        rightPanel: {
                          backgroundColor: DOCUSAURUS.darkGray,
                        },
                      }
                    }
                }/>
            </main>
        </Layout>
    );
}
