/// <reference types="cypress" />

import HairCare from "../../support/pageObjects/automation-test-store/HairCare";

describe("Iterate over elements", () => {

  const hairCarePage = new HairCare();

  beforeEach(function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Log information of all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it.only("Add specific product to basket", () => {
    hairCarePage.selectProduct("Curls to straight Shampoo");
  });

  it("Add another specific product to basket", () => {
    hairCarePage.selectProduct("Seaweed Conditioner");
  });

  it("Add another specific product to basket 2", () => {
    hairCarePage.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
