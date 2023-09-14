import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

When(
  /^in the "([^"]*)" iframe, I click the "([^"]*)" (button|input|link)$/,
  function (iframeName: string, elementName: string) {
    getElementLocator(iframeName, "frameLocator");
    getElementLocator(elementName);

    cy.get("@frameLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@frameLocator").then((frame: string) => {
      cy.get<string>("@elementLocator").then((element: string) => {
        cy.get(frame)
          .its("0.contentDocument")
          .its("body")
          .find(element)
          .click();
      });
    });
  }
);

When(
  /^in the "([^"]*)" iframe, I fill in the "([^"]*)" input with "([^"]*)"$/,
  function (iframeName: string, elementName: string, inputTxt: string) {
    getElementLocator(iframeName, "frameLocator");
    getElementLocator(elementName);

    cy.get("@frameLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@frameLocator").then((frame: string) => {
      cy.get<string>("@elementLocator").then((element: string) => {
        cy.get(frame)
          .its("0.contentDocument")
          .its("body")
          .find(element)
          .type(inputTxt);
      });
    });
  }
);
