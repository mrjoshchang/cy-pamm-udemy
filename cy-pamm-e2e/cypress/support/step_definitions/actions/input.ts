import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

When(/^I clear the "([^"]*)" input$/, function (elementName: string) {
  getElementLocator(elementName);

  cy.get("@elementLocator").should("exist", { timeout: 10000 });
  cy.get<string>("@elementLocator").then((element: string) => {
    cy.get(element).clear();
  });
});

When(
  /^I fill in the "([^"]*)" input with "([^"]*)"$/,
  function (elementName: string, inputString: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).clear().type(inputString, { force: true });
    });
  }
);

When(
  /^I fill in the "([^"]*)" input with "([^"]*)" then press "(enter|tab)"$/,
  function (elementName: string, inputString: string, keyPress: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).clear().type(`inputString${keyPress}`, { force: true });
    });
  }
);

When(
  /^I append the "([^"]*)" input with "([^"]*)"$/,
  function (elementName: string, inputString: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).type(inputString, { force: true });
    });
  }
);

When(
  /^I append the "([^"]*)" input with "([^"]*)" then press "(enter|tab)"$/,
  function (elementName: string, inputString: string, keyPress: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).type(`inputString${keyPress}`, { force: true });
    });
  }
);
