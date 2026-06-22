const { defineConfig } = require("cypress");

module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',
  allowCypressEnv: false,

   reporterOptions: {
    embeddedScreenshots: true,
    inlineAssets: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
      // implement node event listeners here
    },
  },

  video: true,

});

