import { When } from "@badeball/cypress-cucumber-preprocessor";

When(/^I wait ([0-5]?[0-9]|60) seconds?$/, function (timeout: number) {
  cy.wait(timeout * 1000);
});
