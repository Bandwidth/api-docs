context('Footer Get Started', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('div')
      .contains('Get Started')
      .siblings('div')
      .as('getStarted')
  })

describe('Voice', () => {
  it('Should verify the external link exists', () => {
    cy.get('@getStarted')
      .contains('Voice')
      .should('have.attr', 'href', 'https://www.bandwidth.com/voice/')
    })
  })

describe('Messaging', () => {
  it('Should verify the external link exists', () => {
    cy.get('@getStarted')
      .contains('Messaging')
      .should('have.attr', 'href', 'https://www.bandwidth.com/messaging/')
    })
  })

describe('Enterprise 911', () => {
  it('Should verify the external link exists', () => {
    cy.get('@getStarted')
      .contains('Enterprise 911')
      .should('have.attr', 'href', 'https://www.bandwidth.com/911/')
    })
  })

describe('Phone Number Management', () => {
  it('Should verify the external link exists', () => {
    cy.get('@getStarted')
      .contains('Phone Number Management')
      .should('have.attr', 'href', 'https://www.bandwidth.com/phone-numbers/')
    })
  })

describe('Try the APIs', () => {
  it('Should verify the external link exists', () => {
    cy.get('@getStarted')
      .contains('Try the APIs')
      .should('have.attr', 'href', 'https://www.bandwidth.com/free-trial/')
    })
  })

})

context('Footer Company', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('div')
      .contains('Company')
      .siblings('div')
      .as('company')
  })

describe('About Us', () => {
  it('Should verify the external link exists', () => {
    cy.get('@company')
      .contains('About Us')
      .should('have.attr', 'href', 'https://www.bandwidth.com/company/')
    })
  })

describe('Contact', () => {
  it('Should verify the external link exists', () => {
    cy.get('@company')
      .contains('Contact')
      .should('have.attr', 'href', 'https://www.bandwidth.com/contact/')
    })
  })

describe('Newsroom', () => {
  it('Should verify the external link exists', () => {
    cy.get('@company')
      .contains('Newsroom')
      .should('have.attr', 'href', 'https://www.bandwidth.com/newsroom/')
    })
  })

describe('Careers', () => {
  it('Should verify the external link exists', () => {
    cy.get('@company')
      .contains('Careers')
      .should('have.attr', 'href', 'https://www.bandwidth.com/careers/')
    })
  })

describe('Investor Relations', () => {
  it('Should verify the external link exists', () => {
    cy.get('@company')
      .contains('Investor Relations')
      .should('have.attr', 'href', 'https://investors.bandwidth.com/')
    })
  })

describe('Leadership', () => {
  it('Should verify the external link exists', () => {
    cy.get('@company')
      .contains('Leadership')
      .should('have.attr', 'href', 'https://www.bandwidth.com/leadership/')
    })
  })

})

context('Footer More', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('div')
      .contains('More')
      .siblings('div')
      .as('more')
  })

describe('Release Notes', () => {
  it('Should verify the external link exists', () => {
    cy.get('@more')
      .contains('Release Notes')
      .should('have.attr', 'href', 'https://www.bandwidth.com/release-notes/')
    })
  })

describe('Sandbox', () => {
  it('Should verify the external link exists', () => {
    cy.get('@more')
      .contains('Sandbox')
      .should('have.attr', 'href', 'https://sandbox.bandwidth.com')
    })
  })

describe('Status', () => {
  it('Should verify the external link exists', () => {
    cy.get('@more')
      .contains('Status')
      .should('have.attr', 'href', 'https://status.bandwidth.com/')
    })
  })

describe('Support', () => {
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

describe('Blog', () => {
  it('Should verify the external link exists', () => {
    cy.get('@community')
      .contains('Blog')
      .should('have.attr', 'href', 'https://www.bandwidth.com/blog/')
    })
  })

describe('Github', () => {
  it('Should verify the external link exists', () => {
    cy.get('@community')
      .contains('GitHub')
      .should('have.attr', 'href', 'https://github.com/Bandwidth')
    })
  })

describe('Postman', () => {
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

describe('LinkedIn, Twitter, Youtube, Github', () => {
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

describe('Call to Action', () => {
  it('Should verify that the call to action link exists', () => {
    cy.get('[class*="callToAction"]')
      .siblings('div')
      .children('a')
      .should('have.attr', 'href', 'https://www.bandwidth.com/contact/')
    })
  })
 