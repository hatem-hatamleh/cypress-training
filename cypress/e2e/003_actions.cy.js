//TODO
// [] Click on an element

describe("Actions", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/");
  });

  it("Click action", () => {
    cy.get(".invoice-button").first().click();
    cy.get(".invoice-button").eq(1).click("bottom");
    cy.get(".covered-button").click({ force: true });
    cy.get(".invoice-button").click({ multiple: true });
  });

  it("Type action", () => {
    cy.get('[data-testid="email"]').type("test@gmail.com");
    cy.get('[data-testid="email"]').type("test@gmail.com", { delay: 500 });
    cy.get("#coverd-input").type("hello", { force: true });
  });

  it("Select action", () => {
    cy.get("#courses").select(1);
    cy.get("#courses").select("cypress"); // Value
    cy.get("#courses").select("Wdio"); // Text
  });

  it("Check action", () => {
    cy.get("#Banana").check();
    cy.get("#Banana").uncheck();
    cy.get("#Manager").check(); // Radio button
  });

  it("Double click action", () => {
    cy.get(".double-click").dblclick();
  });

  it("Right click action", () => {
    cy.get(".double-click").rightclick();
  });

  it("Focus and blur action", () => {
    cy.get(".focus-blur").focus();
    cy.get(".focus-blur").blur();
    cy.get(".focus-blur").focus().blur();
  });

  it("Trigger action", () => {
    cy.get(".trigger-button").trigger("mouseover");
    cy.get(".trigger-button").trigger("mouseout");
    cy.get(".trigger-button").trigger("mousedown");
  });
});
