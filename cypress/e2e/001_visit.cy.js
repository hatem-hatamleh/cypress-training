/// <reference types="cypress" />

//TODO
// [] Visit a website using URL
// [] Change the view port size using the default values
// [] Change the view port size using the width and height
// [] Set the baseURL in the cypress.config.json
// [] Set the viewport width and heights in cypress.config.json

describe("Visit website with cypress", () => {
  it("visit a website", () => {
    cy.viewport("macbook-16");
    cy.visit("/");
  });
});
