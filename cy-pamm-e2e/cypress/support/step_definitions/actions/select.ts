import { DataTable, When } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

When(
  /^I select "([^"]*)" from the "([^"]*)" dropdown$/,
  function (option: string, dropdownName: string) {
    getElementLocator(dropdownName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).select(option);
    });
  }
);

When(
  /^from the "([^"]*)" dropdown I select:$/,
  function (selectName: string, optionsTable: DataTable) {
    getElementLocator(selectName);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const options = optionsTable.transpose().rawTable[0] as string;

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).select(options);
    });
  }
);
