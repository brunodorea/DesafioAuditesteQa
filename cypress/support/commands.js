Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-testid="login-input"]').type(email, { log: false })
    cy.get('[data-testid="password-input"]').type(password, { log: false })
    cy.get('[data-testid="login-submit-button"]').click()
})

Cypress.Commands.add('accept_cookies', () => {
    cy.get('button[id="onetrust-accept-btn-handler"]', { timeout: 10000 }).click()
})