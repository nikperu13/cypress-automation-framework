class HairCare {

  selectProduct(productName: string){
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if($el.text().includes(productName)) {
        cy.wrap($el).click();
      }
    });
  }

  addProductToBasket(productName: string) {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text() === productName) {
        cy.log($el.text());
        cy.get(".productcart").eq(index).click();
      }
    });
  }

  addHairCareProductsToBasket2(productNames: string[]) {

    // In order to nest functions inside another function use var _this=this
    // in order to grab the correct context of this
    // 
    var _this = this;
    productNames.forEach(function(product){
      _this.addProductToBasket(product)
    })

    cy.log(xpathBy.toggle)
    cy.log(by.toggle)

    cy.xpath(xpathBy.toggle).click();
  }

  addHairCareProductsToBasket() {
    globalThis.data.productName.forEach(function (element: any) {
      cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text() === element) {
          cy.log($el.text());
          cy.get(".productcart").eq(index).click();
        }
      });
    });

    cy.log(xpathBy.toggle)
    cy.xpath(xpathBy.toggle).click();
  }

 


} export default HairCare;


// seperate OBJECT for SELECTORS
const xpathBy = {
  toggle: "//a[@class='dropdown-toggle']//i[contains(@class,'fa')]"
}

const by = {
  toggle: ".dropdown-toggle > .fa"
}

// seperate CLASS for SELECTCORS
// class by {
//   static toggle:string = '.dropdown-toggle > .fa'
// }
