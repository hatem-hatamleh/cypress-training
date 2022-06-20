describe("Add Task", () => {
  it("Should be able to stub a network correctly using body", () => {
    cy.intercept("GET", "**/api/v1/tasks", {
      body: {
        tasks: [
          {
            isCompleted: true,
            _id: "62a9d80e50677a00168bcad1",
            item: "Learn Appium",
            userID: "62a99c46e04f7f53d93cd0e0",
            createdAt: "2022-06-15T13:01:02.958Z",
            __v: 0,
          },
        ],
      },
    }).as("addTodo");
    cy.visit("https://qacart-todo.herokuapp.com");
    cy.get('[data-testid="email"]').type("hatem@example.com");
    cy.get('[data-testid="password"]').type("123456");
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should("be.visible");
  });

  it("should be able to stub a response using fixtures", () => {
    cy.intercept("GET", "**/api/v1/tasks", {
      fixture: "todos",
    }).as("addTodo");
    cy.visit("https://qacart-todo.herokuapp.com");
    cy.get('[data-testid="email"]').type("hatem@example.com");
    cy.get('[data-testid="password"]').type("123456");
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should("be.visible");
  });

  it("should be able to delay response", () => {
    cy.intercept("GET", "**/api/v1/tasks", {
      fixture: "todos",
      delay: 5000,
    }).as("addTodo");
    cy.visit("https://qacart-todo.herokuapp.com");
    cy.get('[data-testid="email"]').type("hatem@example.com");
    cy.get('[data-testid="password"]').type("123456");
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should("be.visible");
  });

  it("should be able simulate request error", () => {
    cy.intercept("GET", "**/api/v1/tasks", {
      fixture: "todos",
      forceNetworkError: true,
    }).as("addTodo");
    cy.visit("https://qacart-todo.herokuapp.com");
    cy.get('[data-testid="email"]').type("hatem@example.com");
    cy.get('[data-testid="password"]').type("123456");
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should("be.visible");
  });

  it("should be able to stub status code", () => {
    cy.intercept("GET", "**/api/v1/tasks", {
      fixture: "todos",
      statusCode: 300,
    }).as("addTodo");
    cy.visit("https://qacart-todo.herokuapp.com");
    cy.get('[data-testid="email"]').type("hatem@example.com");
    cy.get('[data-testid="password"]').type("123456");
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should("be.visible");
  });
});
