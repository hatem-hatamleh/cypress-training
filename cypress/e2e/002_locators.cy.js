//TODO
// [] Add before Each to visit the website
// [] Find Element by ID
// [] Should be visible
// [] Should have text
// [] Should contain text
// [] Find Element by class name
// [] Should have css
// [] Find Element by Attribute
// [] Should not be disabled
// [] Find elements using first
// [] Find element using last
// [] Find element using eq
// [] Find element using filter
// [] Find element using text
// [] Find element using Children
// [] Find element using find
// [] Find element using siblings
// [] Find element using contains

describe("Locators", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/");
  });

  it("Find Elements by ID", () => {
    cy.get("#app-header")
      .should("be.visible")
      .and("have.text", "Welcome to Cypress Tutorials")
      .and("contain", "Welcome");
  });

  it("Find Elements ClassName", () => {
    cy.get(".course-list").should("have.css", "margin-top", "0px");
  });

  it("Find Elements Attributes", () => {
    cy.get('[name="app-description"]').should("not.be.disabled");
  });

  it("Find Element using first, last, eq", () => {
    cy.get(".list1").first().should("have.text", "Cypress");
    cy.get(".list1").last().should("have.text", "react");
    cy.get(".list1").eq(3).should("have.text", "wdio");
  });

  it("Find Element using filter", () => {
    cy.get(".list1").filter(".web");
  });

  it("Find elements using text", () => {
    cy.get(".list1").contains("Cypress");
  });

  it("Find Element using Children", () => {
    // Direct Child
    cy.get(".course-list").children();
    cy.get(".course-list").children(".web");
  });

  it("Find Element using find", () => {
    // Nested Child
    cy.get(".course-list").find(".web");
  });

  it("Find Element using siblings", () => {
    // Nested Child
    cy.get(".list1").first().siblings();
    cy.get(".list1").first().siblings(".web");
  });

  it("Find Element using contains", () => {
    // Nested Child
    cy.contains("Jordan");
    cy.contains("Jordan").siblings();
  });
});
