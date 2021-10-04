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

// class SignUpPage {
//     visit() {
//       cy.visit('/');
//     }
//     insertUsername() {
//         return cy.get('input[placeholder="Username"]');
//     }
   
//     insertEmail() {
//       return cy.get('input[placeholder="Email"]');
//     }
   
//     insertPassword() {
//         return cy.get('input[placeholder="Password"]');
//     }

//     submit() {
//       const button = cy.get('.btn').contains("Sign in").should('be.visible');
//       button.click();
//     }
// }
   
// export default SignUpPage;

Cypress.Commands.add('login', (username, email, password) => {
    
    cy
        .get('input[placeholder="Username"]').type(username)
        .get('input[placeholder="Email"]').type(email)
        .get('input[placeholder="Password"]').type(password)
        .get('.btn').contains("Sign in").should('be.visible')
        .click()   
})