describe('Assertions', function() {
  it('Implicit Asserions', function() {
    cy.visit("https://www.saucedemo.com/")
  
  
  
     cy.url().should('include','saucedemo.com') 
     .should('eq', 'https://www.saucedemo.com/') 
     .should('contain','saucedemo')




     cy.title().should('include','Swag')
     .and('eq','Swag Labs')
     .and('contain','Labs')

     cy.get("#user-name").type('standard_user')
     cy.get("#password").type('secret_sauce')
     cy.get("#login-button").click();
     

    })

})