import React from 'react';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';    // returns whether or not the theme is light or dark
import { RedocStandalone } from 'redoc';
import { lightTheme, darkTheme } from '../css/redocTheme';

const RedocConfig = (props) => {
  const {isDarkTheme} = useThemeContext();
  return <RedocStandalone spec={props.spec} options={{
                      scrollYOffset: '.navbar', // makes the fixed sidebar and scrolling play nicey with docusaurus navbar
                      pathInMiddlePanel: true,
                      expandSingleSchemaField: true,
                      expandResponses: "200,201,202,204",
                      menuToggle: true,
                      theme: isDarkTheme ? darkTheme(props.color) : lightTheme(props.color)
                  }}/>
}

export default function ApiReference(props) {
    return (
        <main>
            <div className="RedocStandalone">
              <RedocConfig spec={props.spec} color={props.color}/>
            </div>
        </main>
    );
}
