class HomePage {
    accessHomepage() {
      cy.visit("https://www.automationteststore.com/");
    }
  
    clickOn_HairCare_Link() {
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
  }
  export default HomePage;
  