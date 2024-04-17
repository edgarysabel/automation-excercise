class ContactUsPage {
  nameTxtbox() {
    return cy.get('[data-qa="name"]');
  }

  emailTxtbox() {
    return cy.get('[data-qa="email"]');
  }

  subjectTxtbox() {
    return cy.get('[data-qa="subject"]');
  }

  messageTxtbox() {
    return cy.get('[data-qa="message"]');
  }

  submitBtn() {
    return cy.get('[data-qa="submit-button"]');
  }

  status() {
    return cy.get(".status");
  }

  //Success! Your details have been submitted successfully.
}

export default ContactUsPage;
