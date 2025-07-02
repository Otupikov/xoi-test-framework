// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginIntoTheApplication',() => {
    const userCredentials = {
        "user": {
            "email": Cypress.env('username'),
            "password": Cypress.env('password')
        }
    }
    cy.visit(Cypress.env('baseUrl'))
    cy.get('.login-input').type(userCredentials.user.email)
    cy.get('.password-input').type(userCredentials.user.password)
    cy.contains('Sign in').click()
})

Cypress.Commands.add('scrollPage', (x = 0, y = 'bottom') => { 
    cy.scrollTo(x, y)
})  
  