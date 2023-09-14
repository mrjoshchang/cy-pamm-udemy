const report = require('multiple-cucumber-html-reporter');
report.generate({
  jsonDir: 'cypress/reports/', // ** Path of .json file **//
  reportPath: './cypress/reports/cucumber-html-report.html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '115',
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '11',
    },
  },
});
