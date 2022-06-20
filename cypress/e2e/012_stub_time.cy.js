describe("Mock the date", () => {
  it("Test the welcome message", () => {
    cy.clock(new Date("July 4 2022 15:30"));
    cy.visit("https://qacart-todo.herokuapp.com");
    cy.get('[data-testid="email"]').type("hatem@example.com");
    cy.get('[data-testid="password"]').type("123456");
    cy.get('[data-testid="submit"]').click();
  });
});
