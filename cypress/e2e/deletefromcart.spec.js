/// <reference types="cypress" />

describe('add product then delete it', () => {
    it('delete product', () => {
        cy.visitdemoblaze()
        cy.get('.card-block').eq(4).find('a').click()
        cy.get('a').contains('Add to cart').click()
        cy.get('#cartur').click()
        cy.get('.success').contains('Delete').click()
    })
})