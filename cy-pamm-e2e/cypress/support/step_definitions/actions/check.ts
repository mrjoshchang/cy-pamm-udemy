import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

When(
  /^I (check|uncheck) the "([^"]*)" (radio button|checkbox)$/,
  function (isChecked: string, elementName: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      if (isChecked === "check") cy.get(element).check();
      if (isChecked === "uncheck") cy.get(element).uncheck();
    });
  }
);
