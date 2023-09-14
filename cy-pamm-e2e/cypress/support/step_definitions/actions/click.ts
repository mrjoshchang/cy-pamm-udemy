import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

When(
  /^I click the "([^"]*)" (button|link|input|dropdown)$/,
  function (elementIdentifier: string) {
    getElementLocator(elementIdentifier);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).click({ force: true });
    });
  }
);

When(
  /^I click the "(\d+(?:st|nd|rd|th))" "([^"]*)" (button|link)$/,
  function (ordinal: string, elementName: string) {
    getElementLocator(elementName);
    const index = Number(ordinal.replace(/(st|nd|rd|th)/g, "")) - 1;

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).eq(index).click({ force: true });
    });
  }
);

When(
  /^I double-click the "([^"]*)" (button|link|input|dropdown)$/,
  function (elementIdentifier: string) {
    getElementLocator(elementIdentifier);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).dblclick({ force: true });
    });
  }
);

When(
  /^I right click the "([^"]*)" (button|link|input|dropdown)$/,
  function (elementIdentifier: string) {
    getElementLocator(elementIdentifier);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).rightclick({ force: true });
    });
  }
);

When(
  /^I double right click the "([^"]*)" (button|link|input|dropdown)$/,
  function (elementIdentifier: string) {
    getElementLocator(elementIdentifier);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).rightclick({ force: true });
      cy.get(element).rightclick({ force: true });
    });
  }
);
