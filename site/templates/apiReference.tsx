import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {RedocStandalone} from 'redoc';

export default function ApiReference() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <main>
                <RedocStandalone spec={siteConfig.customFields.messagingSpec} options={{
                    scrollYOffset: '.navbar', // makes the fixed sidebar and scrolling play nicey with docusaurus navbar
                    pathInMiddlePanel: true,
                    theme: {
                        colors: {
                            primary: {
                                main: siteConfig.customFields.messagingGreen
                            },
                            // text: {
                            //   primary:
                            //   secondary:
                            // },
                        },
                        schema: {
                          nestedBackground: '#FFFFFF'
                        },
                        typography: {
                            fontSize: 'var(--ifm-font-size-base)',
                            lineHeight: 'var(--ifm-line-height-base)',
                            fontFamily: 'var(--ifm-font-family-base)',
                            headings: {
                                fontFamily: 'var(--ifm-font-family-base)',
                                fontWeight: 'var(--ifm-heading-font-weight)'
                            },
                            code: {
                                lineHeight: 'var(--ifm-pre-line-height)',
                                fontFamily: 'var(--ifm-font-family-monospace)',
                                wrap: true
                            }
                        },
                        sidebar: {    // the left hand sidebar
                            width: '300px', // about the same as the sidebar in the docs area, for consistency
                            // backgroundColor:
                            // textColor:
                            groupItems: {
                              textTransform: "capitalize"
                            },
                            level1Items: {
                                textTransform: "capitalize"
                            },
                            arrow: {
                              // size: "1.5em",
                              color: siteConfig.customFields.black,
                            }
                        },
                        rightPanel: {    // the right hand code snippets
                          backgroundColor: siteConfig.customFields.redocCodeBackground,
                          textColor: siteConfig.customFields.white,
                          width: '40%'
                        },
                    }
                }}/>
            </main>
        </Layout>
    );
}
