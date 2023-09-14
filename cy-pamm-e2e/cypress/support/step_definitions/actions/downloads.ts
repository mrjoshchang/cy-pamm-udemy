import { When } from "@badeball/cypress-cucumber-preprocessor";

When(/^I delete the downloads folder$/, function () {
  const downloadsFolder = Cypress.config("downloadsFolder");
  cy.task("deleteFolder", downloadsFolder);
});
