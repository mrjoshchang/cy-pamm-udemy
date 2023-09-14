import { DataTable, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

Then(
  /^the "([^"]*)" dropdown should have the values:$/,
  function (selectName: string, expectedValues: DataTable) {
    getElementLocator(selectName);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const options = expectedValues.transpose().rawTable[0];

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).invoke("val").should("deep.equal", options);
    });
  }
);
