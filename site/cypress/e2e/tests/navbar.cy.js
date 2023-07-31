import {navTester, extLinkTester, navBarContext} from '../../utils/utils'

context('The Home Page', () => {
  it('Successfully loads', () => {
    cy.visit('/')
  })
})

context('Docs', () => {
  navBarContext('US & Canada', 'Guides');
  navTester('docs');
})

context('API Reference', () => {
  navBarContext('US & Canada', 'API Reference');
  navTester('apis')
})

context('SDKs', () => {
  navBarContext('US & Canada', 'SDKs');
  navTester('sdks')
})

context('Global API Ref', () => {
  navBarContext('Global', 'API Reference')
  navTester('apis/global')
})

context('Global Docs', () => {
  navBarContext('Global', 'Guides')
  navTester('global-guides')
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
    cy.visit('/docs/')
    cy.get('.navbar__brand')
      .click()
    cy.location('pathname').should('include', '/')
  })
})

context('Github Link', () => {
  extLinkTester('/','a.navbar__item.navbar__link.github-link', 'https://github.com/Bandwidth')
  })

context('Postman Link', () => {
  extLinkTester('/','a.navbar__item.navbar__link.postman-link', 'https://www.postman.com/bandwidth')
  })

context('Login Link', () => {
  extLinkTester('/','a.navbar__item.navbar__link.login-link', 'https://www.bandwidth.com/login/')
  })
