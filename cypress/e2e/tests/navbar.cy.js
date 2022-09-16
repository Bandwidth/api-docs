describe('The Home Page', () => {
  it('Successfuly loads', () => {
    cy.visit('/')
  })
})

context('Docs', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('ul.dropdown__menu > li')
      .should('be.hidden')
      .invoke('show')
      .get('a.dropdown__link')
      .contains('Docs')
      .click({force: true})
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', 'docs')

    cy.go('back')
    cy.location('pathname').should('not.include', 'docs')

    cy.go('forward')
    cy.location('pathname').should('include', 'docs')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'docs')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'docs')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /docs/ directly', () => {
    cy.visit('/docs/', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
    cy.go(-1)
    })
})

context('API Reference', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('ul.dropdown__menu > li')
      .should('be.hidden')
      .invoke('show')
      .get('a.dropdown__link')
      .contains('API Reference')
      .click({force: true})
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', 'apis')

    cy.go('back')
    cy.location('pathname').should('not.include', 'apis')

    cy.go('forward')
    cy.location('pathname').should('include', 'apis')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'apis')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'apis')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/ directly', () => {

    cy.visit('/apis/', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
    cy.go(-1)
    })
})

context('SDKs', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('ul.dropdown__menu > li')
      .should('be.hidden')
      .invoke('show')
      .get('a.dropdown__link')
      .contains('SDKs')
      .click({force: true})
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', 'sdks')

    cy.go('back')
    cy.location('pathname').should('not.include', 'sdks')

    cy.go('forward')
    cy.location('pathname').should('include', 'sdks')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'sdks')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'sdks')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /sdks/ directly', () => {

    cy.visit('/sdks/', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
    cy.go(-1)
    })
})

describe('Bandwidth Sample', () => {

it('Should verify the external link worked', () => {
  cy.visit('/')
  cy.get('ul.dropdown__menu > li')
    .should('be.hidden')
    .invoke('show')
    .get('a.dropdown__link')
    .contains('Samples')
    .should('have.attr', 'href', 'https://github.com/Bandwidth-Samples')

  })
 
context('Global Docs and API Ref', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('ul.dropdown__menu > li')
      .should('be.hidden')
      .invoke('show')
      .get('a.dropdown__link')
      .contains('Docs & API Reference')
      .click({force: true})
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/global/')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/global/')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/global/')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/global/')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/global/')
  })

  it('visits /apis/global/ directly', () => {

    cy.visit('/apis/global/', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
    cy.go(-1)
    })
})

describe('Dev Docs Brand Logo/Link', () => {
  it('cy.go() - go back or forward in the browser\'s history', () => {
    cy.visit('/docs')
    cy.get('.navbar__brand')
      .click()
    cy.location('pathname').should('include', '/')
  })
})

describe('Github Link', () => {
  it('Should verify the external link worked', () => {
    cy.visit('/')
    cy.get('a.navbar__item.navbar__link.header-github-link.bw-link')
      .should('have.attr', 'href', 'https://github.com/Bandwidth')
    })
  })

describe('Postman Link', () => {
  it('Should verify the external link worked', () => {
    cy.visit('/')
    cy.get('a.navbar__item.navbar__link.header-postman-link.bw-link')
      .should('have.attr', 'href', 'https://www.postman.com/bandwidth')
    })
  })

describe('Login Link', () => {
  it('Should verify the external link worked', () => {
    cy.visit('/')
    cy.get('a.navbar__item.navbar__link.header-login-link')
      .should('have.attr', 'href', 'https://www.bandwidth.com/login/')
    })
  })

})
