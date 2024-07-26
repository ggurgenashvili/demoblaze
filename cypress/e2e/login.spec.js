/// <reference types="cypress" />


describe('log in on demoblaze with cypress', () => {
    it('log in', () => {
        cy.visitdemoblaze()
        cy.get('#login2').click()
        cy.get('#loginusername').type('test')
        cy.get('#loginpassword').type('test')
        // cy.get('button').contains('Log in').click()
        cy.get('[onclick="logIn()"]').click()
    })

    it('log out', () => {
    
        cy.visitdemoblaze()
        cy.get('#login2').click()
        cy.get('#loginusername').type('test')
        cy.get('#loginpassword').type('test')
        cy.get('[onclick="logIn()"]').click()
        cy.get('#logout2').click()
    })

})