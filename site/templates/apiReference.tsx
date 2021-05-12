// TODO: Details
// So for all of those commented out lines in the template file -
// ReDoc has an issue with being passed a variable for certain color fields, it was even noted in that guide we followed to get started
//
//    Unfortunately if you try to use the custom property names like that with most of what’s under colors, you’ll hit an error,
//    since Redoc does some processing to generate light/dark variants etc and expects the values you give it to be parseable as HEX or RGB.
//    I think this could be addressed though.
//
// So i put those placeholders in there because its what we need to figure out to get dark mode integrated
// for the redoc component without using that 3rd party theme
//
// typography: {
//             fontSize: 'var(--ifm-font-size-base)'
//
// resolves just fine for some reason with var(…) resolving to a hex value
// but all of that color stuff explodes and redoc throws an error saying youve passed in an invalid value.
//
// Passing in a hex or rgb value works just fine (which oddly enough thats what the var(…) is supposed to do
// But all of those settings are poorly documented so i wanted to get a template going with all of the available
// config stuff so that we know what we can control when the time comes.

// I opened up an issue on redocs repo https://github.com/Redocly/redoc/issues/1607
// asking them to update their readme because their options are out of date

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
