import {footerExtLinkTester} from '../../utils/utils'

context('Get Started Section Voice Link', () => {
  footerExtLinkTester('Get Started', 'Voice', 'https://www.bandwidth.com/voice/')
  })

context('Get Started Section Messaging Link', () => {
  footerExtLinkTester('Get Started', 'Messaging', 'https://www.bandwidth.com/messaging/')
  })

context('Get Started Section Enterprise 911 Link', () => {
  footerExtLinkTester('Get Started', 'Enterprise 911', 'https://www.bandwidth.com/911/')
  })

context('Get Started Section Phone Number Management Link', () => {
  footerExtLinkTester('Get Started', 'Phone Number Management', 'https://www.bandwidth.com/phone-numbers/')
  })

context('Get Started Section Try the APIs Link', () => {
  footerExtLinkTester('Get Started', 'Try the APIs', 'https://www.bandwidth.com/free-trial/')
  })

context('Company Section About Us Link', () => {
  footerExtLinkTester('Company', 'About Us', 'https://www.bandwidth.com/company/')
  })

context('Company Section Contact Link', () => {
  footerExtLinkTester('Company', 'Contact', 'https://www.bandwidth.com/contact/')
  })

context('Company Section Newsroom Link', () => {
  footerExtLinkTester('Company', 'Newsroom', 'ttps://www.bandwidth.com/newsroom/')
  })

context('Company Section Careers Link', () => {
  footerExtLinkTester('Company', 'Careers', 'https://www.bandwidth.com/careers/')
  })

context('Company Section Investor Relations Link', () => {
  footerExtLinkTester('Company', 'Investor Relations', 'https://investors.bandwidth.com/')
  })

context('Company Section Leadership Link', () => {
  footerExtLinkTester('Company', 'Leadership', 'https://www.bandwidth.com/leadership/')
  })


context('Footer More', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('div')
      .contains('More')
      .siblings('div')
      .as('more')
  })

context('Release Notes', () => {
  it('Should verify the external link exists', () => {
    cy.get('@more')
      .contains('Release Notes')
      .should('have.attr', 'href', 'https://www.bandwidth.com/release-notes/')
    })
  })

context('Sandbox', () => {
  it('Should verify the external link exists', () => {
    cy.get('@more')
      .contains('Sandbox')
      .should('have.attr', 'href', 'https://sandbox.bandwidth.com')
    })
  })

context('Status', () => {
  it('Should verify the external link exists', () => {
    cy.get('@more')
      .contains('Status')
      .should('have.attr', 'href', 'https://status.bandwidth.com/')
    })
  })

context('Support', () => {
  it('Should verify the external link exists', () => {
    cy.get('@more')
      .contains('Support')
      .should('have.attr', 'href', 'https://support.bandwidth.com')
    })
  })

})

context('Footer Community', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('div')
      .contains('Community')
      .siblings('div')
      .as('community')
  })

context('Blog', () => {
  it('Should verify the external link exists', () => {
    cy.get('@community')
      .contains('Blog')
      .should('have.attr', 'href', 'https://www.bandwidth.com/blog/')
    })
  })

context('Github', () => {
  it('Should verify the external link exists', () => {
    cy.get('@community')
      .contains('GitHub')
      .should('have.attr', 'href', 'https://github.com/Bandwidth')
    })
  })

context('Postman', () => {
  it('Should verify the external link exists', () => {
    cy.get('@community')
      .contains('Postman')
      .should('have.attr', 'href', 'https://www.postman.com/bandwidth')
    })
  })

})

context('Social Media Links', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[class*="socialLinks"]')
      .children('a')
      .as('socialMedia')
  })

context('LinkedIn, Twitter, Youtube, Github', () => {
  it('Should verify the external links exist for the social media accounts', () => {
    cy.get('@socialMedia')
      .first()
      .should('have.attr', 'href', 'https://www.linkedin.com/company/bandwidth-inc')
      .next()
      .should('have.attr', 'href', 'https://twitter.com/bandwidth')
      .next()
      .should('have.attr', 'href', 'https://www.youtube.com/user/bandwidth')
      .next()
      .should('have.attr', 'href', 'https://github.com/Bandwidth')
    })
  })

})

context('Call to Action', () => {
  it('Should verify that the call to action link exists', () => {
    cy.get('[class*="callToAction"]')
      .siblings('div')
      .children('a')
      .should('have.attr', 'href', 'https://www.bandwidth.com/contact/')
    })
  })
