const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://hatem-hatamleh.github.io/cypress-index-html",
    viewportHeight: 960,
    viewportWidth: 1536,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
