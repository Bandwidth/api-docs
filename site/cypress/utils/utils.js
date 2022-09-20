
export const navBarContext = (pathName, hidden, viewportWidth = 1400, viewportHeight = 900) => {
  it('checks that nagivation back or forward in the browser\'s history from the page works', () => {
    cy.visit('/')
    if (viewportWidth && viewportHeight) {
      cy.viewport(viewportWidth,viewportHeight) 
      if (hidden) {
        cy.get('a.navbar__link')
        .contains(`${pathName}`)
        .should('be.hidden')
      }
      else {
        cy.get('ul.dropdown__menu > li')
        .should('be.hidden')
        .invoke('show')
        .get('a.dropdown__link')
        .contains(`${pathName}`)
        .click({force: true})
      }
    }
 })
}

export const navTester = (path) => {
    it('checks that nagivation back or forward in the browser\'s history from the page works', () => {
  
      cy.location('pathname').should('include', path)
  
      cy.go(-1)
      cy.location('pathname').should('not.include', path)
  
      cy.go(1)
      cy.location('pathname').should('include', path)
    })
  
    it('Checks that the page reloads without cache', () => {
      cy.reload()
    })
  
    it(`visits /${path}/ directly and verifies that the window objects load properly`, () => {
      cy.visit(`/${path}/`, {
        timeout: 50000,
        onBeforeLoad (contentWindow) {
          expect(typeof contentWindow === 'object').to.be.true
        },
        onLoad (contentWindow) {
          expect(typeof contentWindow === 'object').to.be.true
        },
      })
    })
  }

  export const testSvgLink = (path, svg, testPath) => {
    beforeEach(() => {
      cy.visit(`${path}`)
      cy.get(`${svg}`)
        .click()
    })
    navTester(`${testPath}`)          

  }

  export const testTextLink = (path, text, testPath, element = 'a') => {
    beforeEach(() => {
      cy.visit(`${path}`)
      cy.get(`${element}`)
        .contains(`${text}`)
        .click()
    })
    navTester(`${testPath}`)  
  }

  export const extLinkTester = (path, className, url) => {
    it('Should verify the external link worked', () => {
      cy.visit(`${path}`)
      cy.get(`${className}`)
        .should('have.attr', 'href', `${url}`)
      })
  }

  export const testSidebar = (tab) => {
    cy.get('a.menu__link')
      .contains(`${tab}`)
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains(`${tab}`)
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains(`${tab}`)
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)
    cy.get('a.menu__link')
      .contains(`${tab}`)
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)      
  }

  export const downloadButtonTester = (path) => {
    it('checks the download button to verify it exists',() => {
      cy.visit(`/apis/${path}`)
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }

  export const footerExtLinkTester = (section, text, url) => {
    it('Should verify the external link exists', () => {
        cy.visit('/')
        cy.get('div')
          .contains(`${section}`)
          .siblings('div')
          .contains(`${text}`)
          .should('have.attr', 'href', `${url}`)
        })
  }
