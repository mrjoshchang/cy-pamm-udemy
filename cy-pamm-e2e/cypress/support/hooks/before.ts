import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before({ tags: "@before" }, function () {
  // This hook will be executed before scenarios tagged with @foo.
  cy.log("Before Scenario Hook");
});
