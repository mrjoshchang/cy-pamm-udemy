import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

Then(
  /^I click "([^"]*)" and intercept "(GET|POST)" "([^"]*)" and verify the status is (20[0-1])$/,
  function (elementName: string, method: string, url: string, status: number) {
    getElementLocator(elementName);
    cy.intercept(method, url).as("someEndpiont");

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).click({ force: true });

      cy.wait("@someEndpiont").then((resp) => {
        expect(resp.response?.statusCode).to.eql(Number(status));
      });
    });
  }
);
