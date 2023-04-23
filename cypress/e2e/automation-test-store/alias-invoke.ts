/// <reference types="cypress" />

describe("Alias and invoke", () => {

  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //     cy.log($el.text());
    // });

    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").as("saleItemPrice");

    var itemsTotal: number = 0;

    // since @itemPrice was invoked as text, see line 34 & 35,
    // even though typescript still recognizes it as a JQuery element from the then()
    // we should set it to type any to be able to use string methods on it.
    // ex. el.split wont work because it is a JQuery element , but at the same time .text()
    // doesnt work either even though it is a JQuery element.
    // SOLUTION: use "any" type and treat it as a string and not JQuery Element
    // OPTION 2: do not use .invoke("text") on it....
    // NOTES: compiler will allow and not throw an error but cypressApp
    // will throw a runtime error

    // with invoke
    cy.get("@itemPrice").then((el: any) => {
      var itemsPriceTotal: number = 0;
      var itemPrice: string[] = el.split("$")
      for (var i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPriceTotal;
      cy.log("Non sale price items total: " + itemsPriceTotal);
    });
    
    // without invoke
    cy.get("@saleItemPrice")
      .then((el: JQuery) => {
        var saleItemsPrice: number = 0;
        var saleItemPrice: string[] = el.text().split("$");
        for (var i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemsPrice += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemsPrice;
        cy.log("Sale price items total: " + saleItemsPrice);
      })
      .then(() => {
        cy.log("The total price of all products: " + itemsTotal);
        expect(itemsTotal).to.equal(639.49);
      });
  });
});
