describe("Fixtures", () => {
  beforeEach(() => {
    cy.fixture("user").as("userData");
  });

  it("Login flow from fixture", () => {
    cy.visit("/");
    cy.fixture("user").then((data) => {
      cy.get('[data-testid="email"]').type(data.email);
      cy.get('[data-testid="password"]').type(data.password);
      cy.get('[data-testid="rememberMe"]').check();
      cy.get('[data-testid="signin"]').click();
      cy.get(".success-message").should("be.visible");
    });
  });

  it("Read fixtures from before Each", () => {
    cy.visit("/");
    cy.get("@userData").then((data) => {
      cy.get('[data-testid="email"]').type(data.email);
      cy.get('[data-testid="password"]').type(data.password);
      cy.get('[data-testid="rememberMe"]').check();
      cy.get('[data-testid="signin"]').click();
      cy.get(".success-message").should("be.visible");
    });
  });
});
