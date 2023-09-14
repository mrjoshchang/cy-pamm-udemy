import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";
import "cypress-real-events";

When(
  /^I trigger a "(mouseup|mousedown)" event on "([^"]*)"$/,
  function (eventType: string, elementName: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).trigger(eventType);
    });
  }
);

When(
  /^I trigger a real "(hover)" event on "([^"]*)"$/,
  function (eventType: string, elementName: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      switch (eventType) {
        case "hover":
          cy.get(element).realHover({
            pointer: "mouse",
            position: "center",
            scrollBehavior: "center",
          });
          break;
        default:
          throw Error(`❌Invalid event type: ${eventType}❌`);
      }
    });
  }
);
