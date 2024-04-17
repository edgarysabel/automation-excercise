const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
