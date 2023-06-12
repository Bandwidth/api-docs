const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  baseUrl: 'http://localhost:3000'
  },
  pageLoadTimeout: 60000,
  viewportWidth: 1440,
  viewportHeight: 900,
  video: false,
  videoUploadOnPasses: false,
  screenshotOnRunFailure: true,  
  retries: 2,
});
