const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://xoi.io/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
});
