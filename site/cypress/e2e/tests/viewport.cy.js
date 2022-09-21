import {navBarContext} from '../../utils/utils'

context('Should verify that Responsive CSS changes happen when the viewport changes sufficently', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify that US & Canada navbar menu is hidden when screen size is small', () => {
    navBarContext('US & Canada', true, 320, 480)
  })

  it('Verify that Global APIs navbar menu is hidden when screen size is small', () => {
    navBarContext('Global APIs', true, 320, 480)
  })
})
