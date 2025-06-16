const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.kabum.com.br",
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
