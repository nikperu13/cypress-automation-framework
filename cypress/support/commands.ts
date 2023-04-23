declare namespace Cypress {
  interface Chainable {
    
    navigateTo_WebdriverUni_Checkbox_Page(): Chainable<any>

  }
}

Cypress.Commands.add("navigateTo_WebdriverUni_Checkbox_Page", () => {
  cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html");
});




// It is good practice to keep these commands as global and reusable as possible
// similar to a driverHelper

// Any function specfic to a page should be reserved for that page object

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
// 
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })




