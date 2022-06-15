describe("E2E scenario", () => {
  it("Login flow", () => {
    cy.visit("/");
    cy.get('[data-testid="email"]').type("hello@gmail.com");
    cy.get('[data-testid="password"]').type("hello@gmail.com");
    cy.get('[data-testid="rememberMe"]').check();
    cy.get('[data-testid="signin"]').click();
    cy.get(".success-message").should("be.visible");
  });
});
