import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

When(
  /^I upload "([^"]*)" at "([^"]*)"$/,
  function (filename: string, elementName: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).selectFile(`cypress/fixtures/uploads/${filename}`, {
        force: true,
      });
    });
  }
);
