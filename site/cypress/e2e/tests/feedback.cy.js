context(`Test the 'Was This Helpful' Feedback process`, () => {
    before(() => {
        cy.visit('/docs/account');
    })

    it('Verifies that the feedback buttons are rendered', () => {
        cy.get('.question-container').should('be.visible');
    });

    it('Verifies the Good Feedback path', () => {
        cy.get('.question-container > :nth-child(2)').click();
        cy.get('[placeholder="How was this page helpful? (Optional)"]').should('be.visible');
        cy.get('.destructive-button').click();
        cy.get('.question-container').should('be.visible');
    });

    it('Verifies the Bad Feedback path', () => {
        cy.get('.question-container > :nth-child(3)').click();
        cy.get('[placeholder="What can we improve? (Optional)"]').should('be.visible');
        cy.get('.destructive-button').click();
        cy.get('.question-container').should('be.visible');
    });
})
