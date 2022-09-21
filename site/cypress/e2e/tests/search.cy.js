/* Cypress Tests for the Algolia and Redoc Search Bars */

describe('Algolia Search', () => {
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
        cy.get('#docsearch-input').type('messaging');
        cy.get('.DocSearch-Dropdown-Container').children().should('have.length.greaterThan', 1);
        cy.get('.DocSearch-Hit-source').first().should('have.text', 'Messaging');
        cy.get('.DocSearch-HitsFooter > a').invoke('text').should('match', /See all \d+ results/);
        cy.get('.DocSearch-Reset').click();
        cy.get('#docsearch-input').should('have.text', '');
        cy.get('#docsearch-input').should('have.attr', 'placeholder', 'Search docs');
    })

    it('close Algolia search modal', () => {
        cy.get(':nth-child(1) > .DocSearch').click();
        cy.get('.DocSearch-Modal').should('not.exist');
    })
})

describe('Redoc Search', () => {
    before(() => {
        cy.visit('/apis/messaging');
    })

    afterEach(() => {
        cy.get('[data-role="search:results"]').should('exist');
        cy.get('[data-role="search:results"]').children().should('have.length.greaterThan', 0);
        cy.get('.menu-content [role="search"] i').click();
    })

    it('search by operation', () => {
        cy.get('.menu-content [role="search"]').type('List');
    })

    it('search by tag', () => {
        cy.get('.menu-content [role="search"]').type('Media');
    })

    it('search by endpoint', () => {
        cy.get('.menu-content [role="search"]').type('/messages');
    })
})
