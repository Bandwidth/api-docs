import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { RedocStandalone } from 'redoc';
import { lightTheme, darkTheme } from '@site/src/css/redocTheme';

const RedocConfig = (props) => {
  const {colorMode} = useColorMode();
  return <RedocStandalone spec={props.spec} options={{
                      scrollYOffset: '.navbar', // makes the fixed sidebar and scrolling play nicely with docusaurus navbar
                      pathInMiddlePanel: true,
                      expandSingleSchemaField: true,
                      expandResponses: "200,201,202,204",
                      menuToggle: true,
                      theme: colorMode === 'dark' ? darkTheme('#FFFFFF') : lightTheme(props.color),
                      downloadDefinitionUrl: props.downloadDefinitionUrl
                  }}/>
}

export default function ApiReference(props) {
    return (
        <main>
            <div className="RedocStandalone">
              <RedocConfig spec={props.spec} color={props.color} downloadDefinitionUrl={props.downloadDefinitionUrl}/>
            </div>
        </main>
    );
}
