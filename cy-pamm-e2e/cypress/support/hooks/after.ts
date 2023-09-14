import { After } from "@badeball/cypress-cucumber-preprocessor";

After({ tags: "@After" }, function () {
  // This hook will be executed before scenarios tagged with @foo.
  cy.log("After Scenario Hook");
});
