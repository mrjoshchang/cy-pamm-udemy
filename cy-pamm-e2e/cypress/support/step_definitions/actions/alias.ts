import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

When(
  /^I save the "([^"]*)" value as alias "([^"]*)"$/,
  function (elementName: string, aliasName: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).invoke("val").as(aliasName);
    });
  }
);

When(
  /^I save the "([^"]*)" text as alias "([^"]*)"$/,
  function (elementName: string, aliasName: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).invoke("text").as(aliasName);
    });
  }
);
