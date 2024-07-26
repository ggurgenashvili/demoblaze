/// <reference types="cypress" />

describe('contact', () => {
    it('navbar contact', () => {
        cy.visitdemoblaze()
        cy.get('.nav-link').contains('Contact').click()
        cy.get('#recipient-email').type('ggurgenashvili1@gmail.com')
        cy.get('#recipient-name').type('guli')
        cy.get('#message-text').type('DemoBlaze')
        cy.get('[onclick="send()"]').click()

    })
})