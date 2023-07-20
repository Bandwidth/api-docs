import {navBarContext} from '../../utils/utils'

context('Should verify that Responsive CSS changes happen when the viewport changes sufficiently', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify that US & Canada navbar menu is hidden when screen size is small', () => {
    cy.viewport(320,480)
    cy.get('a.navbar__link')
    .contains(`US & Canada`)
    .should('be.hidden')
  })

  it('Verify that Global APIs navbar menu is hidden when screen size is small', () => {
    cy.viewport(320,480)
    cy.get('a.navbar__link')
    .contains(`Global`)
    .should('be.hidden')
  })
})
