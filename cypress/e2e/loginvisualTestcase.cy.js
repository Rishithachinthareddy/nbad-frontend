

describe("Successfully Login the User", () => {
    it("passes", () => {
      cy.visit("http://44.220.138.207:3000/");
      cy.get('[id="loginsignup-btn"]').click();
      cy.url().should("eq", "http://44.220.138.207:3000/login");
      cy.get("[id=email]").type("sai@gmail.com");
      cy.get("[id=password]").type("1234");
      cy.get('[id="submit"]').click();
      cy.url().should("include", "/");
      cy.window().its("localStorage").invoke("getItem", "token").should("exist");
      cy.eyesOpen({
        appName: "Personal Budget",
        testName: "Project Visual Regression Testing",
      });
      cy.eyesCheckWindow();
      cy.eyesClose();
    });
  });