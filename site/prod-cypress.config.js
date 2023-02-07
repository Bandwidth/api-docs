const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  baseUrl: 'https://dev.bandwidth.com/'
  },
  projectId: "oz7rpf",
  pageLoadTimeout: 60000,
  viewportWidth: 1440,
  viewportHeight: 900,
  video: false,
  videoUploadOnPasses: false,
  screenshotOnRunFailure: true,  
  retries: 3,
});
