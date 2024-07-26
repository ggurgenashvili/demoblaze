/// <reference types="cypress" />

describe('cart', () => {
    it('add product then buy', () => {
        cy.visitdemoblaze()
        cy.get('.card-block').eq(2).find('a').click()
        cy.get('a').contains('Add to cart').click()

        cy.get('#cartur').click()
        cy.get('button').contains('Place Order').click()


        cy.wait(2000)
        cy.get('#name').type('testtest')
        cy.get('#country').type('georgia')
        cy.get('#city').type('tbilisi')
        cy.get('#card').type('12121212112112')
        cy.get('#month').type('jul')
        cy.get('#year').type('2024')
        cy.get('[onclick="purchaseOrder()"]').click()
        
        cy.wait(4000)
        cy.get('button').contains('OK').click()
        
    })
})