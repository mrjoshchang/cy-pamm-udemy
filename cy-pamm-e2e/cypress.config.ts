const { defineConfig } = require("cypress");
const { rmdir } = require("fs");
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

module.exports = defineConfig({
  env: {
    omitFiltered: true,
    filterSpecs: true,
  },

  e2e: {
    baseUrl: "http://localhost:3000/",
    chromeWebSecurity: false,
    hideXHRInCommandLog: true,
    numTestsKeptInMemory: 10,
    reporter: "mocha-junit-reporter",
    reporterOptions: {
      jenkinsMode: true,
      mochaFile: "cypress/reports/test-result-[hash].xml",
      rootSuiteTitle: "Cypress",
      suiteTitleSeparatedBy: ".", // suites separator, default is space (' '), or period ('.') in jenkins mode
      testsuitesTitle: true,
      toConsole: false,
      useFullSuiteTitle: true,
    },
    retries: {
      runMode: 0,
      openMode: 0,
    },
    specPattern: ["cypress/e2e/src/features/**/*feature", "**/*.feature"],
    video: false,
    viewportHeight: 800,
    viewportWidth: 1200,

    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ) {
      on("task", {
        deleteFolder(folderName) {
          console.log("deleting folder %s", folderName);

          return new Promise((resolve, reject) => {
            rmdir(
              folderName,
              { maxRetries: 10, recursive: true },
              (err: string) => {
                if (err) {
                  console.error(err);
                  return reject(err);
                }
                resolve(null);
              }
            );
          });
        },
      }),
        //For Cucumber Integration
        await addCucumberPreprocessorPlugin(on, config); // to allow json to be produced
      // To use esBuild for the bundler when preprocessing
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
