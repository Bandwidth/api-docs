/* Cypress Tests for the Algolia and Redoc Search Bars */

import { algoliaSearchTester, redocSearchTester } from "../../utils/utils";

context('Algolia Search', () => {
    algoliaSearchTester('Messaging')
    algoliaSearchTester('Voice')
    algoliaSearchTester('Account')
    // before(() => {
    //     cy.visit('/');
    // })

    // it('search box is clickable and brings up modal', () => {
    //     cy.get('.DocSearch').click();
    //     cy.get('.DocSearch-Modal').should('exist');
    //     cy.get('.DocSearch-Form').should('exist');
    //     cy.get('.DocSearch-Dropdown').should('exist');
    //     cy.get('.DocSearch-Footer').should('exist');
    // })

    // it('type in searchbar', () => {
    //     cy.get('#docsearch-input').type('Messaging');
    //     cy.get('.DocSearch-Dropdown-Container').children().should('have.length.greaterThan', 1);
    //     cy.get('.DocSearch-Hit-source').first().should('have.text', 'Messaging');
    //     cy.get('.DocSearch-HitsFooter > a').invoke('text').should('match', /See all \d+ results/);
    //     cy.get('.DocSearch-Reset').click();
    //     cy.get('#docsearch-input').should('have.text', '');
    //     cy.get('#docsearch-input').should('have.attr', 'placeholder', 'Search docs');
    // })

    // it('close Algolia search modal', () => {
    //     cy.get(':nth-child(1) > .DocSearch').click();
    //     cy.get('.DocSearch-Modal').should('not.exist');
    // })
})

context('Redoc Search', () => {
    redocSearchTester('/apis/messaging', 'List')
    redocSearchTester('/apis/numbers', 'CampaignManagement')
    redocSearchTester('/apis/voice', '/calls')
})


