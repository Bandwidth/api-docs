context(`Test the 'Was This Helpful' Feedback process`, () => {
    before(() => {
        cy.visit('/docs/account');
    })

    it('Verifies that the feedback buttons are rendered', () => {
        cy.get('.question-container').should('be.visible');
    });

    it('Verifies the Yes, No, and Cancel buttons work properly', () => {
        cy.get('.question-container > :nth-child(2)').click();
        cy.get('.question-container').should('not.exist');
        cy.get('[placeholder="How was this page helpful? (Optional)"]').should('be.visible');
        cy.get('.multi-line-input').type('this should be cleared');
        cy.get('.single-line-input').type('clear@this.com');
        cy.get('.destructive-button').click();
        cy.get('.question-container').should('be.visible');
        cy.get('.question-container > :nth-child(3)').click();
        cy.get('[placeholder="What can we improve? (Optional)"]').should('be.visible');
        cy.get('.multi-line-input').should('be.empty');
        cy.get('.single-line-input').should('be.empty');
    });

    it('Verifies the email validity check works', () => {
        cy.get('.single-line-input').type('invalidEmail');
        cy.get('.secondary-button').click();
        cy.get('.input-box-note-invalid').should('contain.text', 'Please enter a valid email address.');
        cy.get('.single-line-input-invalid').type('@email.com');
        cy.get('.input-box-note-invalid').should('not.exist');
    });

    it('Verifies Feedback submit happy path', () => {
        cy.reload();
        cy.get('.question-container > :nth-child(2)').click();
        cy.get('.multi-line-input').type('happy path');
        cy.get('.single-line-input').type('happy@path.com');
        cy.intercept('POST', 'https://eowxoldwz4d7syt.m.pipedream.net', {
            statusCode: 204
        });
        cy.get('.secondary-button').click();
        cy.get('.feedback-submitted').should('contain.text', 'Thanks! Your feedback has been submitted. We will contact you at happy@path.com');
    });

    it('Verifies Feedback submit error path', () => {
        cy.visit('/apis/messaging');
        cy.get('.question-container > :nth-child(2)').click();
        cy.get('.multi-line-input').type('error path');
        cy.get('.single-line-input').type('error@path.com');
        cy.intercept('POST', 'https://eowxoldwz4d7syt.m.pipedream.net', {
            statusCode: 400
        });
        cy.get('.secondary-button').click();
        cy.get('.alert-error').should('be.be.visible');
        cy.get('.alert-error > .text').should('contain.text', 'There was an error submitting your feedback, please try again.');
    })
})
