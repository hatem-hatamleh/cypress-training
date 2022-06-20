describe("Add Task", () => {
  it("Should be able to add a task correctly", () => {
    cy.intercept("POST", "**/api/v1/tasks").as("addTodo");

    cy.visit("https://qacart-todo.herokuapp.com");
    cy.get('[data-testid="email"]').type("hatem@example.com");
    cy.get('[data-testid="password"]').type("123456");
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should("be.visible");
    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="new-todo"]').type("Learn Cypress");
    cy.get('[data-testid="submit-newTask"]').click();
    cy.get('[data-testid="todo-item"]').first().should("have.text", "Learn Cypress");

    cy.wait("@addTodo").then((xhr) => {
      cy.log(xhr.response.body);
      expect(xhr.response.body.addedTask.isCompleted).to.be.false;
      expect(xhr.response.body.addedTask.item).to.eql("Learn Cypress");
      expect(xhr.response.statusCode).to.eql(201);
      cy.log(xhr.request.body);
      expect(xhr.request.body.isCompleted).to.be.false;
      expect(xhr.request.body.item).to.eql("Learn Cypress");
    });
  });
});
