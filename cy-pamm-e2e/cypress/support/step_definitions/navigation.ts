import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

interface PageRoutes {
  [pageName: string]: {
    route: string;
    regex: string;
  };
}

Given(/^I am on the "([^"]*)" page$/, function (page: string) {
  cy.fixture("config/pages").then((urls: PageRoutes) => {
    try {
      cy.visit(urls[page].route);
    } catch (error) {
      throw new Error(
        `❌ The "${page}" page is missing from the pages.json ❌`
      );
    }
  });
});

When(/^I am directed to the "([^"]*)" page$/, function (pageUrlPath: string) {
  cy.fixture("config/pages").then((urls: PageRoutes) => {
    try {
      const newPage = new RegExp(urls[pageUrlPath].regex);

      cy.location().should((loc) => {
        expect(loc.pathname).match(newPage);
      });
    } catch {
      throw Error(
        `❌ There is no page mapping for "${pageUrlPath}" in pages.json ❌`
      );
    }
  });
});
