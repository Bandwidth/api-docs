
export const navBarContext = (pathName, hidden, viewportWidth = 1400, viewportHeight = 900) => {
  it('checks that navigation back or forward in the browser\'s history from the page works', () => {
    cy.visit('/')
    if (viewportWidth && viewportHeight) {
      cy.viewport(viewportWidth,viewportHeight) 
      if (hidden) {
        cy.get('a.navbar__link')
        .contains(`${pathName}`)
        .should('be.hidden')
      }
      else {
        cy.get('ul.dropdown__menu > li')
        .should('be.hidden')
        .invoke('show')
        .get('a.dropdown__link')
        .contains(`${pathName}`)
        .click({force: true})
      }
    }
 })
}

export const navTester = (path) => {
    it('checks that navigation back or forward in the browser\'s history from the page works', () => {
      cy.location('pathname').should('include', path)
      cy.go(-1)
      cy.location('pathname').should('not.include', path)
      cy.go(1)
      cy.location('pathname').should('include', path)
    })
  
    it('Checks that the page reloads without cache', () => {
      cy.reload()
    })
  
    it(`visits /${path}/ directly and verifies that the window objects load properly`, () => {
      cy.visit(`/${path}/`, {
        timeout: 50000,
        onBeforeLoad (contentWindow) {
          expect(typeof contentWindow === 'object').to.be.true
        },
        onLoad (contentWindow) {
          expect(typeof contentWindow === 'object').to.be.true
        },
      })
    })
  }

  export const testSvgLink = (path, svg, testPath) => {
    beforeEach(() => {
      cy.visit(`${path}`)
      cy.get(`${svg}`)
        .click()
    })
    navTester(`${testPath}`)          

  }

  export const testTextLink = (path, text, testPath, element = 'a') => {
    beforeEach(() => {
      cy.visit(`${path}`)
      cy.get(`${element}`)
        .contains(`${text}`)
        .click()
    })
    navTester(`${testPath}`)  
  }

  export const extLinkTester = (path, className, url) => {
    it('Should verify the external link worked', () => {
      cy.visit(`${path}`)
      cy.get(`${className}`)
        .should('have.attr', 'href', `${url}`)
      })
  }

  export const testSidebar = (tab) => {
    cy.get('a.menu__link')
      .contains(`${tab}`)
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)        
    cy.get('a.menu__link')
      .contains(`${tab}`)
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)
    cy.get('a.menu__link')
      .contains(`${tab}`)
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /false/)
    cy.get('a.menu__link')
      .contains(`${tab}`)
      .click()
      .should('have.attr', 'aria-expanded') 
      .and('match', /true/)      
  }

  export const downloadButtonTester = (path) => {
    it('checks the download button to verify it exists',() => {
      cy.visit(`/apis/${path}`)
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }

  export const footerExtLinkTester = (section, text, url) => {
    it('Should verify the external link exists', () => {
        cy.visit('/')
        cy.get('div')
          .contains(`${section}`)
          .siblings('div')
          .contains(`${text}`)
          .should('have.attr', 'href', `${url}`)
        })
  }

  export const tabSwitchingTester = (path, tab1, tab2, tab2Btn, text) => {
    it('Should verify that a tab is visible and another hidden, then click a button and verify that they switched visibility.', () => {
      cy.visit(`${path}`)
      cy.get(`${tab1}`)
        .should('be.visible')
      cy.get(`${tab2}`)
        .should('not.be.visible')                  
      cy.get(`${tab2Btn}`)
        .contains(`${text}`)
        .click()
      cy.get(`${tab2}`)
        .should('be.visible')
      cy.get(`${tab1}`)
      .should('not.be.visible')         
    })
  }

export const algoliaSearchTester = (searchText) => {
  before(() => {
    cy.visit('/');
  })

  it('search box is clickable and brings up modal', () => {
    cy.get('.DocSearch').click();
    cy.get('.DocSearch-Modal').should('exist');
    cy.get('.DocSearch-Form').should('exist');
    cy.get('.DocSearch-Dropdown').should('exist');
    cy.get('.DocSearch-Footer').should('exist');
  })

  it('type in searchbar', () => {
    cy.get('#docsearch-input').type(`${searchText}`);
    cy.get('.DocSearch-Dropdown-Container').children().should('have.length.greaterThan', 1);
    cy.get('.DocSearch-Hit-source').first().should('contain', `${searchText}`);
    cy.get('.DocSearch-HitsFooter > a').invoke('text').should('match', /See all \d+ results/);
    cy.get('.DocSearch-Reset').click();
    cy.get('#docsearch-input').should('have.text', '');
    cy.get('#docsearch-input').should('have.attr', 'placeholder', 'Search docs');
  })

  it('close Algolia search modal', () => {
      cy.get(':nth-child(1) > .DocSearch').click();
      cy.get('.DocSearch-Modal').should('not.exist');
  })
}  

export const redocSearchTester = (path, searchText) => {
  it('verifies that the redoc search bar works', () => {
    cy.visit(`${path}`);
    cy.get('.menu-content [role="search"]').type(`${searchText}`);
    cy.get('.search-input').should('have.value', `${searchText}`);
    cy.get('[data-role="search:results"]').should('exist');
    cy.get('[data-role="search:results"]').children().should('have.length.greaterThan', 0);
    cy.get('.menu-content [role="search"] i').click();
  })
}

export const splashRowTester = (path, rowTitle, element, linkText) => {
  before(() => {
    cy.visit(`${path}`);
  })
  it('validates Splash Page row content', () => {
    cy.get(`${element} [data-cy="title"]`).should('have.text', `${rowTitle}`);
    cy.get(`${element} [data-cy="text"]`).should('not.be.empty');
    cy.get(`${element} [data-cy="link"] > a`).should('have.text', `${linkText}`);
    cy.get(`${element} [data-cy="image"] > svg`).should('be.visible');
  });
}

export const testCarousel = (path, length, title) => {
  before(() => {
    cy.visit(`${path}`);
  })
  var slideWidth = 430;
  var startIndex = (length * 2) + 1;
  var initialOffset = length * 2 * slideWidth;
  var rollOverOffset = initialOffset - ((length - 1) * slideWidth);
  it('validates the carousel content', () => {
    cy.get('[data-cy="carouselHeader"]').should('have.text', `${title}`);
    cy.get('[data-cy="carouselSlides"]').children().should('have.length', length * 4);
    cy.get(`:nth-child(${startIndex}) > [data-cy="item"] > [data-cy="image"]`).should('be.visible');
    cy.get(`:nth-child(${startIndex}) > [data-cy="item"] > [data-cy="categories"]`).should('not.be.empty');
    cy.get(`:nth-child(${startIndex}) > [data-cy="item"] > [data-cy="post"] > a`).should('not.be.empty');
  })

  it('validates the carousel movement', () => {
    cy.get('[data-cy="carouselSlides"]').should('have.css', 'transform', `matrix(1, 0, 0, 1, -${initialOffset}, 0)`);
    cy.get('[data-cy="leftButton"]').click();
    cy.get('[data-cy="carouselSlides"]').should('have.css', 'transform', `matrix(1, 0, 0, 1, -${initialOffset - slideWidth}, 0)`);
    cy.get('[data-cy="rightButton"]').click();
    cy.get('[data-cy="carouselSlides"]').should('have.css', 'transform', `matrix(1, 0, 0, 1, -${initialOffset}, 0)`);
    cy.get('[data-cy="rightButton"]').click();
    cy.get('[data-cy="carouselSlides"]').should('have.css', 'transform', `matrix(1, 0, 0, 1, -${rollOverOffset}, 0)`);
    cy.get('[data-cy="rightButton"]').click();
    cy.get('[data-cy="carouselSlides"]').should('have.css', 'transform', `matrix(1, 0, 0, 1, -${rollOverOffset + slideWidth}, 0)`);
  })
}
