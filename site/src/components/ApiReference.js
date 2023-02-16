import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { RedocStandalone } from 'bandwidth-redoc';
import { lightTheme, darkTheme } from '@site/src/css/redocTheme';
import WasThisHelpful from './WasThisHelpful';

const RedocConfig = (props) => {
  const {colorMode} = useColorMode();
  return <RedocStandalone spec={props.spec} options={{
                      scrollYOffset: '.navbar', // makes the fixed sidebar and scrolling play nicely with docusaurus navbar
                      pathInMiddlePanel: true,
                      expandSingleSchemaField: true,
                      expandResponses: "200,201,202,204",
                      showObjectSchemaExamples: true,
                      menuToggle: true,
                      theme: colorMode === 'dark' ? darkTheme('#FFFFFF') : lightTheme(props.color),
                      hideDownloadButton: props.hideDownloadButton ? true: false,
                      downloadDefinitionUrl: props.downloadDefinitionUrl
                  }}/>
}

export default function ApiReference(props) {
    const pageId = props.downloadDefinitionUrl.substring(props.downloadDefinitionUrl.indexOf('site/') + 5);
    return (
        <main>
            <div className="RedocStandalone">
              <RedocConfig spec={props.spec} color={props.color} hideDownloadButton={props.hideDownloadButton} downloadDefinitionUrl={props.downloadDefinitionUrl}/>
            </div>
            <div className='was-this-helpful-wrapper'><WasThisHelpful pageId={pageId}/></div>
        </main>
    );
}
