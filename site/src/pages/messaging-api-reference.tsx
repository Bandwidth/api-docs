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
                    theme: {
                        colors: {
                            primary: {
                                main: '#00bf8c'
                            }
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
                        sidebar: {
                            width: '300px', // about the same as the sidebar in the docs area, for consistency
                            backgroundColor: '#FFFFFF'
                        },
                        rightPanel: {
                          backgroundColor: '#263238',
                          textColor: '#FFFFFF',
                          width: '40%'
                        },
                    }
                }}/>
            </main>
        </Layout>
    );
}
