// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests from command log
if (Cypress.config("hideXHRInCommandLog")) {
  const app = window.top;

  if (
    app &&
    !app.document.head.querySelector("[data-hide-command-log-request]")
  ) {
    const style = app.document.createElement("style");
    style.innerHTML =
      ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");

    app.document.head.appendChild(style);
  }
}

//https://docs.cypress.io/api/events/catalog-of-events#To-turn-off-all-uncaught-exception-handling
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// cypress/support/e2e.ts
beforeEach(function () {
  const world = {
    counter: 0,

    setTo(number: number): void {
      this.counter = number;
    },

    incrementBy(number: number): void {
      this.counter += number;
    },

    decrementBy(number: number): void {
      this.counter = this.counter - number;
    },
  };

  Object.assign(this, world);
});
