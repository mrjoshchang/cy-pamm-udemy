const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    screenshotsFolder: 'cypress/reports/html',
    specPattern: 'src/**/*.cy.js',
  },
});
