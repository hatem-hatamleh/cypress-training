describe("Cypress Commands", () => {
  it("Login flow", () => {
    cy.visit("/");
    cy.login();
    cy.get(".success-message").should("be.visible");
  });
});
