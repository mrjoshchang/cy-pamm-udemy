import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

Then(
  /^the "([^"]*)" should( not)? be visible$/,
  function (elementName: string, negate: boolean) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).should(`${negate ? "not." : ""}be.visible`);
    });
  }
);

Then(
  /^the "([^"]*)" should( not)? exist$/,
  function (elementName: string, negate: boolean) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).should(`${negate ? "not." : ""}exist`);
    });
  }
);
