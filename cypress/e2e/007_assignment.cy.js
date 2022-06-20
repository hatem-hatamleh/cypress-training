describe("Add Task", () => {
  it("Should be able to add a task correctly", () => {
    cy.visit("https://qacart-todo.herokuapp.com");
    cy.get('[data-testid="email"]').type("hatem@example.com");
    cy.get('[data-testid="password"]').type("123456");
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should("be.visible");
    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="new-todo"]').type("Learn Cypress");
    cy.get('[data-testid="submit-newTask"]').click();
    cy.get('[data-testid="todo-item"]').first().should("have.text", "Learn Cypress");
    cy.title().should("contain", "React App");
    cy.url().should("contain", "/todo");
  });
});
