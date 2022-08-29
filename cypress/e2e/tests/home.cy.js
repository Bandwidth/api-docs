context('Numbers Product SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('svg[alt="Numbers"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/numbers')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/numbers')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/numbers')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/numbers')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/numbers')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

})

context('Numbers Product Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a')
      .contains('Numbers')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/numbers')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/numbers')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/numbers')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/numbers')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/numbers')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /docs/numbers directly', () => {

    cy.visit('/docs/numbers', {
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
context('Voice Product SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('svg[alt="Voice"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/voice')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/voice')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/voice')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/voice')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/voice')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

})

context('Voice Product Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a')
      .contains('Voice')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/voice')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/voice')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/voice')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/voice')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/voice')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /docs/voice directly', () => {

    cy.visit('/docs/voice', {
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
context('Messaging Product SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('svg[alt="Messaging"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/messaging')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/messaging')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/messaging')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/messaging')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/messaging')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

})

context('Messaging Product Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a')
      .contains('Messaging')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/messaging')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/messaging')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/messaging')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/messaging')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/messaging')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /docs/messaging directly', () => {

    cy.visit('/docs/messaging', {
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
context('Emergency Product SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('svg[alt="Emergency"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/emergency')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/emergency')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/emergency')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/emergency')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/emergency')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

})

context('Emergency Product Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a')
      .contains('Emergency')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/emergency')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/emergency')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/emergency')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/emergency')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/emergency')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /docs/emergency directly', () => {

    cy.visit('/docs/emergency', {
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
context('Multi-Factor Authentication Product SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('svg[alt="Multi-Factor Authentication"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/mfa')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/mfa')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/mfa')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/mfa')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/mfa')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

})

context('Multi-Factor Authentication Product Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a')
      .contains('Multi-Factor Authentication')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/mfa')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/mfa')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/mfa')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/mfa')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/mfa')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /docs/mfa directly', () => {

    cy.visit('/docs/mfa', {
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
context('WebRTC Product SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('svg[alt="WebRTC"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/webrtc')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/webrtc')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/webrtc')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/webrtc')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/webrtc')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })
})

context('WebRTC Product Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a')
      .contains('WebRTC')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/docs/webrtc')

    cy.go('back')
    cy.location('pathname').should('not.include', '/docs/webrtc')

    cy.go('forward')
    cy.location('pathname').should('include', '/docs/webrtc')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/docs/webrtc')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/docs/webrtc')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /docs/webrtc directly', () => {

    cy.visit('/docs/webrtc', {
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