const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    chromeWebSecurity: true,
    supportFile:"cypress/support/commands.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
