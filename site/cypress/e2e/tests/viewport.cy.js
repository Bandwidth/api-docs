import {navBarContext} from '../../utils/utils'

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should verify that Responsive CSS changes happen when the viewport changes sufficently', () => {
    navBarContext('US & Canada', true, 320, 480)
  })
})
