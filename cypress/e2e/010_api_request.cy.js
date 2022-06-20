describe("Should be able to test API", () => {
  it("Login API", () => {
    cy.request({
      method: "POST",
      url: "https://qacart-todo.herokuapp.com/api/v1/users/login",
      body: {
        email: "hatem@example.com",
        password: "123456",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.access_token).to.not.be.null;
      expect(response.body.userID).to.not.be.null;
    });
  });
});

describe.only("Auth API Request", () => {
  let token;
  before(() => {
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

  it("Get Tasks", () => {
    cy.request({
      url: "https://qacart-todo.herokuapp.com/api/v1/tasks",
      method: "GET",
      auth: {
        bearer: token,
      },
    });
  });
});
