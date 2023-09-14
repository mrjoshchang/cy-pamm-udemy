// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as commonMapping from "cypress/fixtures/config/mappings/common.json";
type PageMappings = Record<string, string>;

export function getElementLocator(
  elementKey: string | keyof PageMappings,
  elementAlias = "elementLocator"
) {
  cy.location().then((currentPage) => {
    const urlPath = currentPage.pathname;
    let mapFile: string | undefined;

    cy.fixture("config/pages.json").then((pages: any) => {
      mapFile = Object.keys(pages).find((key) => {
        return new RegExp(pages[key].regex).test(currentPage.pathname);
      });

      if (mapFile) {
        cy.fixture(`config/mappings/${mapFile}.json`).then(async function (
          pageMapping: PageMappings
        ) {
          if (pageMapping[elementKey] !== undefined) {
            cy.wrap(pageMapping[elementKey].toString()).as(elementAlias);
            return pageMapping[elementKey].toString();
          } else if (commonMapping[elementKey] != undefined) {
            cy.wrap(commonMapping[elementKey].toString()).as(elementAlias);
            return commonMapping[elementKey].toString();
          } else {
            throw new Error(
              `❌ There is no mapping for this element: "${elementKey}" in the "${mapFile}.json" file ❌`
            );
          }
        });
      } else {
        throw new Error(
          `❌ There is no mapping for this page: "${urlPath}" ❌`
        );
      }
    });
  });
}
