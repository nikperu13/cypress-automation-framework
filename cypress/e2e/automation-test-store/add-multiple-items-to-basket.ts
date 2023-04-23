/// <reference types="cypress" />

import HairCare from "../../support/pageObjects/automation-test-store/HairCare";
import HomePage from "../../support/pageObjects/automation-test-store/HomePage";


describe("Add multiple items to basket", () => {
  const autoStoreHomePage = new HomePage();
  const autoHairCareStorePage = new HairCare();
  var productNames = new Array<string>();
  var dataObject = new Object();
  

  beforeEach(function () {
     // grabbing the JSON stored in products.json
     // when using fixtures make sure to call them in the beforeEach hook!!!
     cy.fixture("products").then(function (data) {
      // https://docs.cypress.io/api/commands/fixture#this-context

      // we can use this. or globalThis. 
      // NOTE: globalThis. seems like it will be accessed by ALL files
      // IMPORTANT: when using this. we MUST use function() instead of ()=> 
      // or else the context will not be available to us

      globalThis.data = data;
      this.data = data;
      // directly extracting the array productName from the fixture
      productNames = data.productName
      // saving data as an object
      dataObject = data;
    });

    autoStoreHomePage.accessHomepage();
    autoStoreHomePage.clickOn_HairCare_Link();
  });

  
  it("Add specific items to basket", function() {
    this.data.productName.forEach(function (element: string) {
      autoHairCareStorePage.addProductToBasket(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  });

  // FIXTURES
  it("Add specific items to basket: Using Page Object Commands", function() {
    autoHairCareStorePage.addHairCareProductsToBasket2(globalThis.data.productName);
  });

  it('Extracting productName array from data (fixtures)', () =>{
    productNames.forEach(product=>{
      cy.log(product)
    })

    autoHairCareStorePage.addHairCareProductsToBasket2(productNames);
  });

  it('Extracting all data as object from fixtures', () =>{
    cy.log(dataObject["productName"][1])
  });
});
