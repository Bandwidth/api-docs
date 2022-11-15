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
  footerExtLinkTester('Company', 'Newsroom', 'https://www.bandwidth.com/newsroom/')
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

context('More Section Release Notes Link', () => {
  footerExtLinkTester('More', 'Release Notes', 'https://www.bandwidth.com/release-notes/')
})

context('More Section Sandbox Link', () => {
  footerExtLinkTester('More', 'Sandbox', 'https://sandbox.bandwidth.com')
})

context('More Section Status Link', () => {
  footerExtLinkTester('More', 'Status', 'https://status.bandwidth.com/')
})

context('More Section Support Link', () => {
  footerExtLinkTester('More', 'Support', 'https://support.bandwidth.com')
})

context('Community Section Blog Link', () => {
  footerExtLinkTester('Community', 'Blog', 'https://www.bandwidth.com/blog/')
})

context('Community Section Github Link', () => {
  footerExtLinkTester('Community', 'GitHub', 'https://github.com/Bandwidth')
})

context('Community Section Postman Link', () => {
  footerExtLinkTester('Community', 'Postman', 'https://www.postman.com/bandwidth')
})

context('Social Media Icon Links', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="socialLinks"]')
      .children('a')
      .as('socialMedia')
  })

  it('Should verify the external links exist for the social media icons', () => {
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

context('Call to Action', () => {
  it('Should verify that the call to action link exists', () => {
    cy.get('[data-cy="callToAction"]')
      .siblings('div')
      .children('a')
      .should('have.attr', 'href', 'https://www.bandwidth.com/contact/')
    })
})
