import ContactUs from "../../support/pageObjects/webdriver-uni/ContactUs";
import HomePage from "../../support/pageObjects/webdriver-uni/HomePage";

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", {
  retries:{
    runMode: 1,
    openMode: 1
  }
  }
,() => {
  Cypress.config("defaultCommandTimeout", 20000);
  const homePage = new HomePage();
  const contactUsPage = new ContactUs();

  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    homePage.visitHomepage();
    homePage.clickOn_ContactUs_Button();
    cy.wait(3000);
    //cy.pause();
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    contactUsPage.contactForm_Submission(
      Cypress.env("firstName"),
      data.last_name,
      data.email,
      "How can I learn Cypress?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    contactUsPage.contactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "How can I learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
});
