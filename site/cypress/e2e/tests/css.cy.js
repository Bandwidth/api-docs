context('Lightmode/Darkmode', () => {
    it('Should verify that lightmode and darkmode switching works', () => {
      cy.visit('/')
        .get('[data-theme="light"]')
      cy.get('button[class*="toggleButton"]')
        .click()
        .get('[data-theme="dark"]')
      cy.get('button[class*="toggleButton"]')
        .click()
      })
    })

context('Main font', () => {
    it('Should verify that the correct font it being used in the Navbar', () => {
      cy.visit('/')
        .get('a.navbar__link')
        .contains('US & Canada APIs')
        .should('have.css', 'font-family')
        .and('match', /Overpass Bold/)
      })
    })
