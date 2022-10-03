import {navTester, extLinkTester, navBarContext} from '../../utils/utils'

context('The Home Page', () => {
  it('Successfully loads', () => {
    cy.visit('/')
  })
})

context('Docs', () => {
  navBarContext('Guides');
  navTester('docs');
})

context('API Reference', () => {
  navBarContext('API Reference');
  navTester('apis')
})

context('SDKs', () => {
  navBarContext('SDKs');
  navTester('sdks')
})

context('Global Docs and API Ref', () => {
  navBarContext('Docs & API Reference')
  navTester('apis/global')
})

context('Bandwidth Sample', () => {
it('Should verify the external link worked', () => {
  cy.visit('/')
  cy.get('ul.dropdown__menu > li')
    .should('be.hidden')
    .invoke('show')
    .get('a.dropdown__link')
    .contains('Samples')
    .should('have.attr', 'href', 'https://github.com/Bandwidth-Samples')
  })
})
 
context('Dev Docs Brand Logo/Link', () => {
  it('cy.go() - go back or forward in the browser\'s history', () => {
    cy.visit('/docs')
    cy.get('.navbar__brand')
      .click()
    cy.location('pathname').should('include', '/')
  })
})

context('Github Link', () => {
  extLinkTester('/','a.navbar__item.navbar__link.header-github-link.bw-link', 'https://github.com/Bandwidth')
  })

context('Postman Link', () => {
  extLinkTester('/','a.navbar__item.navbar__link.header-postman-link.bw-link', 'https://www.postman.com/bandwidth')
  })

context('Login Link', () => {
  extLinkTester('/','a.navbar__item.navbar__link.header-login-link', 'https://www.bandwidth.com/login/')
  })

