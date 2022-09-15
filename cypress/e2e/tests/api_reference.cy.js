context('Voice API SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('svg[alt="Voice API"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/voice')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/voice')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/voice')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/voice')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/voice')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

})

context('Voice API Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('a')
      .contains('Voice API')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/voice')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/voice')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/voice')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/voice')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/voice')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/voice directly', () => {

    cy.visit('/apis/voice', {
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
context('Numbers API SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('svg[alt="Numbers API"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/numbers')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/numbers')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/numbers')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/numbers')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/numbers')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

})

context('Number API Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('a')
      .contains('Numbers API')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/numbers')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/numbers')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/numbers')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/numbers')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/numbers')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/numbers directly', () => {

    cy.visit('/apis/numbers', {
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
context('Messaging API SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('svg[alt="Messaging API"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/messaging')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/messaging')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/messaging')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/messaging')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/messaging')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

})

context('Messaging API Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('a')
      .contains('Messaging API')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/messaging')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/messaging')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/messaging')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/messaging')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/messaging')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/messaging directly', () => {

    cy.visit('/apis/messaging', {
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
context('Emergency API SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('svg[alt="Emergency API"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/dash')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/dash')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/dash')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/dash')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/dash')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

})

context('Emergency API Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('a')
      .contains('Emergency API')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/dash')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/dash')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/dash')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/dash')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/dash')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/dash directly', () => {

    cy.visit('/apis/dash', {
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

context('WebRTC API SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('svg[alt="WebRTC API"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/webrtc')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/webrtc')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/webrtc')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/webrtc')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/webrtc')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })
})

context('WebRTC Product Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('a')
      .contains('WebRTC API')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/webrtc')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/webrtc')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/webrtc')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/webrtc')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/webrtc')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/webrtc directly', () => {

    cy.visit('/apis/webrtc', {
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

context('Phone Number Lookup API SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('svg[alt="Phone Number Lookup API"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/number-lookup')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/number-lookup')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/number-lookup')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/number-lookup')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/number-lookup')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })
})

context('Phone Number Lookup API Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('a')
      .contains('Phone Number Lookup API')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/number-lookup')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/number-lookup')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/number-lookup')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/number-lookup')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/number-lookup')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/number-lookup directly', () => {

    cy.visit('/apis/number-lookup', {
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

context('Multi-Factor Authentication API SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis')
    cy.get('svg[alt="Multi-Factor Authentication API"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/multifactorauth')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/multifactorauth')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/multifactorauth')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/multifactorauth')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/multifactorauth')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

})

context('Multi-Factor Authentication API Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('a')
      .contains('Multi-Factor Authentication API')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/multifactorauth')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/multifactorauth')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/multifactorauth')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/multifactorauth')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/multifactorauth')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/multifactorauth directly', () => {

    cy.visit('/apis/multifactorauth', {
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

context('International Messaging API SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('svg[alt="International Messaging API"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/messaging-international')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/messaging-international')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/messaging-international')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/messaging-international')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/messaging-international')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })
})

context('International Messaging API Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('a')
      .contains('International Messaging API')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/messaging-international')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/messaging-international')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/messaging-international')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/messaging-international')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/messaging-international')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/messaging-international directly', () => {

    cy.visit('/apis/messaging-international', {
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

context('Emergency Notifications API SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('svg[alt="Emergency Notifications API"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/dash-notifications')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/dash-notifications')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/dash-notifications')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/dash-notifications')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/dash-notifications')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })
})

context('Emergenc Notifications API Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('a')
      .contains('Emergency Notifications API')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/dash-notifications')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/dash-notifications')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/dash-notifications')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/dash-notifications')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/dash-notifications')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/dash-notifications directly', () => {

    cy.visit('/apis/dash-notifications', {
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

context('Insights API SVG Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('svg[alt="Insights API"]')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/insights')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/insights')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/insights')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/insights')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/insights')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })
})

context('Insights API Text Link on Homepage', () => {
  beforeEach(() => {
    cy.visit('/apis/')
    cy.get('a')
      .contains('Insights API')
      .click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {

    cy.location('pathname').should('include', '/apis/insights')

    cy.go('back')
    cy.location('pathname').should('not.include', '/apis/insights')

    cy.go('forward')
    cy.location('pathname').should('include', '/apis/insights')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', '/apis/insights')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', '/apis/insights')
  })

  it('cy.reload() - reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })

  it('visits /apis/insights directly', () => {

    cy.visit('/apis/insights', {
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
