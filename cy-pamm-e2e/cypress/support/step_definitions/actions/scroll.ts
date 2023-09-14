import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

When(/^I scroll into view: "([^"]*)"$/, function (elmentName: string) {
  getElementLocator(elmentName);

  cy.get("@elementLocator").should("exist", { timeout: 10000 });
  cy.get<string>("@elementLocator").then((element: string) => {
    cy.get(element).scrollIntoView({ ensureScrollable: false });
  });
});
