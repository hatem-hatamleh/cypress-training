describe("Set the cookie", () => {
  let token;
  before(() => {
    cy.session("login", () => {
      cy.request({
        method: "POST",
        url: "https://qacart-todo.herokuapp.com/api/v1/users/login",
        body: {
          email: "hatem@example.com",
          password: "123456",
        },
      }).then((response) => {
        token = response.body.access_token;
      });
    });

    //
  });

  it("Set the token", () => {
    // Cypress will set the token by default!!!
    cy.visit("https://qacart-todo.herokuapp.com");
  });

  it("Change the name", () => {
    cy.session("login");
    cy.clearCookie("firstName");
    cy.setCookie("firstName", "H");
    cy.visit("https://qacart-todo.herokuapp.com");
  });
});
