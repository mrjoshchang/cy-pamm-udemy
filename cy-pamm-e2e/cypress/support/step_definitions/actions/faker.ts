/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { fetchFakerData } from "util/faker-helper";
import { getElementLocator } from "util/web-element-helper";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

When(
  /^I fill in the "([^"]*)" input with random "([^"]*)"$/,
  function (elementName: string, randomPersonData: string) {
    const randomInput: string = fetchFakerData(randomPersonData);
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).clear().type(randomInput, { force: true });
    });
  }
);

Given(/^a variable set to (\d+)$/, function (number: number) {
  this.setTo(number);
});

When(/^I increment the variable by (-?\d+)$/, function (number: number) {
  this.incrementBy(number);
});

When(/^I decrement the variable by (-?\d+)$/, function (number: number) {
  this.decrementBy(number);
});

Then(/^the variable should contain (-?\d+)$/, function (number: number) {
  console.log(`the counter is at ${this["counter"] as number}`);
  expect(this.counter).to.equal(number);
});
