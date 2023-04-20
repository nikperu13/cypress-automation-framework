/// <reference types="cypress" />

import HomePage from "../../support/pageObjects/automation-test-store/HomePage";


describe("Add multiple items to basket", () => {
  const autoStoreHomePage = new HomePage();

  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    autoStoreHomePage.accessHomepage();
    autoStoreHomePage.clickOn_HairCare_Link();
  });
  it("Add specific items to basket", () => {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBasket(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  });
});
