/// <reference types="cypress" />
describe('Kabum', () => {
    it('Comprar e remover item do carrinho', () => {
        // Visit login page and log in
        cy.visit('/login')
        cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
        
        // Accept cookies
        cy.accept_cookies()

        // Navigate to product page
        cy.visit('/produto/94555/mouse-gamer-redragon-cobra-chroma-rgb-12400-dpi-8-botoes-preto-m711')
        
        // Add item to cart
        cy.get('.sc-58b2114e-5 > .sc-50d5e82e-0').click()
        cy.contains('Produto adicionado com sucesso no carrinho', { timeout: 10000 }).should('be.visible')

        // Verify item in cart
        cy.get('.ml-8 > .relative > .w-32 > .material-symbols').click()

        // Assert that the item is in the cart
        cy.get('.ProductDesktop-styles__Product-sc-aa88290d-1').should('be.visible')

        // Remove item from cart
        cy.get('button[id^=remove-button]').click()
        cy.contains('Sim').click()

        // Assert that the cart is empty
        cy.contains('O seu carrinho está vazio.').should('be.visible')
    })
})