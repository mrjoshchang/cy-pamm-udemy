import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

Then(
  /^the "([^"]*)" should( not)? have the value of alias "([^"]*)"$/,
  function (elementName: string, negate: boolean, aliasName: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element)
        .invoke("val")
        .then((elementVal) => {
          const elementValue = elementVal?.toString();
          cy.get(`@${aliasName}`).then((aliasValue) => {
            if (negate) {
              expect(elementValue).to.not.equal(aliasValue);
            } else {
              expect(elementValue).to.equal(aliasValue);
            }
          });
        });
    });
  }
);

Then(
  /^the "([^"]*)" should( not)? have the text of alias "([^"]*)"$/,
  function (elementName: string, negate: boolean, aliasName: string) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element)
        .invoke("text")
        .then((elementVal) => {
          const elementValue = elementVal?.toString();
          cy.get(`@${aliasName}`).then((aliasValue) => {
            if (negate) {
              expect(elementValue).to.not.equal(aliasValue);
            } else {
              expect(elementValue).to.equal(aliasValue);
            }
          });
        });
    });
  }
);
