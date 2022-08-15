const DOCUSAURUS = {
  backgroundColor: 'transparent',
  dark: {
    primaryText: 'var(--white)',
    secondaryText: 'rgba(255, 255, 255, 1)',
  },
};

/**
 * NOTE: Variables taken from infima
 * @see https://github.com/facebookincubator/infima/blob/master/packages/core/styles/common/variables.pcss
 */
export function lightTheme(primaryColor) {
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
      },
      colors: {
        primary: {
            main: primaryColor
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
        },
        border: {
          dark: 'var(--white)',
          light: 'rgba(0,0,0, 0.1)',
        },
        http: {
          get: 'var(--messagingGreen)',
          post: 'var(--bwBlue)',
          put: 'var(--voicePurple)',
          patch: 'var(--numbersMaroon)',
          delete: 'var(--emergencyOrange)',
        },
      },
      sidebar: {
        width: '300px',
        backgroundColor: DOCUSAURUS.backgroundColor,
      },
      rightPanel: {
        backgroundColor: DOCUSAURUS.backgroundColor,
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
          color: 'var(--white)'
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
          dark: 'var(--white)',
          light: 'rgba(0,0,0, 0.1)',
        },
        http: {
          get: 'var(--messagingGreen)',
          post: 'var(--bwBlue)',
          put: 'var(--voicePurple)',
          patch: 'var(--numbersMaroon)',
          delete: 'var(--emergencyOrange)',
        },
      },
      schema: {
        nestedBackground: DOCUSAURUS.backgroundColor,
        typeNameColor: DOCUSAURUS.dark.secondaryText,
        typeTitleColor: DOCUSAURUS.dark.secondaryText,
      },
      sidebar: {
        width: '300px',
        backgroundColor: DOCUSAURUS.backgroundColor,
        textColor: DOCUSAURUS.dark.primaryText,
        arrow: {
          color: DOCUSAURUS.dark.primaryText,
        },
      },
      rightPanel: {
        backgroundColor: DOCUSAURUS.backgroundColor,
      },
    }
  )
};
