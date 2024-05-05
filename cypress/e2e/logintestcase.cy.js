describe("Login Page", () => {
  it("Should Show Validation Error when existing user Signup", () => {
    cy.visit("http://3.85.193.80:3000/login");

    cy.intercept('POST', 'http://3.89.252.45:3001/app/login', {
      statusCode: 201,
      body: {
        message: 'Incorrect Password',
      },
    }).as('loginRequest');

    cy.get('[id=email]').type('abc@gmail.com');
    cy.get('[id=password]').type('abc');

    cy.get('[id=submit]').click();
    cy.get('[id=errormessage]').should('be.visible').and('contain.text', 'Incorrect Password');

  });
});