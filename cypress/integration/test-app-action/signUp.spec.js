/// <reference types="cypress" />

describe(`Given access to signup page
          When insert data correctly in all fields
          Then should be possible register new user`, () =>{

    it('SignUp', () => {
        
        cy.visit('/') 
        cy.login('tester','qa@teste.com','1234')
            
    });

})