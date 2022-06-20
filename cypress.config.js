const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ewe7dt',
  e2e: {
    baseUrl: "https://hatem-hatamleh.github.io/cypress-index-html",
    viewportHeight: 960,
    viewportWidth: 1536,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
