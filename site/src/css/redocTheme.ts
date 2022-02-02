const DOCUSAURUS = {
  darkGray: '#303846',
  dark: {
    primaryText: '#FFFFFF',
    secondaryText: 'rgba(255, 255, 255, 1)',
    backgroundColor: '#121212',
  },
};

/**
 * NOTE: Variables taken from infima
 * @see https://github.com/facebookincubator/infima/blob/master/packages/core/styles/common/variables.pcss
 */
export function lightTheme(primaryColor) {
    return({
      rightPanel: {
        backgroundColor: 'transparent',
      }
    }
  )
};

export function darkTheme(primaryColor) {
  return({
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
        links: {
          color: '#ffffff'
        }
      },
      colors: {
        primary: {
            main: primaryColor
        },
        text: {
          primary: DOCUSAURUS.dark.primaryText,
          secondary: DOCUSAURUS.dark.secondaryText,
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
        },
        border: {
          dark: '#ffffff',
          light: 'rgba(0,0,0, 0.1)',
        },
        http: {
          get: '#00bf8c',
          post: '#079CEE',
          put: '#9a59c5',
          patch: '#652B51',
          delete: '#ff6f47',
        },
      },
      schema: {
        nestedBackground: DOCUSAURUS.dark.backgroundColor,
        typeNameColor: DOCUSAURUS.dark.secondaryText,
        typeTitleColor: DOCUSAURUS.dark.secondaryText,
      },
      sidebar: {
        width: '300px',
        backgroundColor: DOCUSAURUS.dark.backgroundColor,
        textColor: DOCUSAURUS.dark.primaryText,
        arrow: {
          color: DOCUSAURUS.dark.primaryText,
        },
      },
      rightPanel: {
        backgroundColor: DOCUSAURUS.dark.backgroundColor,
      },
    }
  )
};
