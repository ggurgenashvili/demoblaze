/// <reference types="cypress" />

describe('demoblaze, test with cypress', () => {
  it('sign up on website', () => {
    cy.visitdemoblaze()
    cy.get('#signin2').click()
    cy.get('.modal-body')
    cy.get('[for="sign-username"]').type('test2')
    cy.get('[for="sign-password"]').type('test2')
    // cy.contains('button', 'Sign up').click()
    cy.get('[onclick="register()"]').click()
  })
})