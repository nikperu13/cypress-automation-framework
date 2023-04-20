class ContactUs {
  contactForm_Submission(
    firstName,
    lastName,
    email,
    comment,
    $selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(comment);
    cy.get('[type="submit"]').click();
    
    // pause() can be inserted inside a chain of commands or by itself
    // cy.get($selector).pause().contains(textToLocate, { timeout: 60000 });
    cy.get($selector).contains(textToLocate, { timeout: 60000 });

  }
}
export default ContactUs;
