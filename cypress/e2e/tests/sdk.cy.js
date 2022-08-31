context('Node SDK SVG Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('svg[alt="Node"]')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/node')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/node')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/node')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/node')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/node')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
  })
  
  context('Node SDK Text Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('a')
        .contains('Node')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/node')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/node')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/node')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/node')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/node')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
    it('visits /sdks/node directly', () => {
  
      cy.visit('/sdks/node', {
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

  context('Java SDK SVG Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('svg[alt="Java"]')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/java')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/java')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/java')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/java')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/java')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
  })
  
  context('Java SDK Text Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('a')
        .contains('Java')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/java')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/java')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/java')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/java')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/java')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
    it('visits /sdks/java directly', () => {
  
      cy.visit('/sdks/java', {
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

  context('Ruby SDK SVG Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('svg[alt="Ruby"]')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/ruby')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/ruby')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/ruby')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/ruby')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/ruby')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
  })
  
  context('Ruby SDK Text Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('a')
        .contains('Ruby')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/ruby')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/ruby')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/ruby')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/ruby')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/ruby')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
    it('visits /sdks/ruby directly', () => {
  
      cy.visit('/sdks/ruby', {
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

  context('Python SDK SVG Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('svg[alt="Python"]')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/python')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/python')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/python')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/python')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/python')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
  })
  
  context('Python SDK Text Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('a')
        .contains('Python')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/python')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/python')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/python')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/python')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/python')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
    it('visits /sdks/python directly', () => {
  
      cy.visit('/sdks/python', {
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

  context('PHP SDK SVG Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('svg[alt="PHP"]')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/php')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/php')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/php')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/php')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/php')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
  })
  
  context('PHP SDK Text Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('a')
        .contains('PHP')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/php')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/php')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/php')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/php')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/php')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
    it('visits /sdks/php directly', () => {
  
      cy.visit('/sdks/php', {
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

  context('C# SDK SVG Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('svg[alt="C#"]')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/csharp')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/csharp')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/csharp')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/csharp')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/csharp')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
  })
  
  context('C# SDK Text Link on Homepage', () => {
    beforeEach(() => {
      cy.visit('/sdks/')
      cy.get('a')
        .contains('C#')
        .click()
    })
  
    it('cy.go() - go back or forward in the browser\'s history', () => {
  
      cy.location('pathname').should('include', '/sdks/csharp')
  
      cy.go('back')
      cy.location('pathname').should('not.include', '/sdks/csharp')
  
      cy.go('forward')
      cy.location('pathname').should('include', '/sdks/csharp')
  
      // clicking back
      cy.go(-1)
      cy.location('pathname').should('not.include', '/sdks/csharp')
  
      // clicking forward
      cy.go(1)
      cy.location('pathname').should('include', '/sdks/csharp')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
  
      // reload the page without using the cache
      cy.reload(true)
    })
  
    it('visits /sdks/csharp directly', () => {
  
      cy.visit('/sdks/csharp', {
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