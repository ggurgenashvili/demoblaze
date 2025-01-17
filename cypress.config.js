const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gyhwiv',
  
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.demoblaze.com/index.html',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
  },
});
