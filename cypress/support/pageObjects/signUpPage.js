class SignUpPage {
  passwordTxtbox() {
    return cy.get('[data-qa="password"]');
  }

  firstNameBox() {
    return cy.get('[data-qa="first_name"]');
  }

  lastNameBox() {
    return cy.get('[data-qa="last_name"]');
  }

  addressBox() {
    return cy.get('[data-qa="address"]');
  }

  signupBtn() {
    return cy.get('[data-qa="signup-button"]');
  }

  state() {
    return cy.get('[data-qa="state"]');
  }

  city() {
    return cy.get('[data-qa="city"]');
  }

  zipcode() {
    return cy.get('[data-qa="zipcode"]');
  }

  mobileNumber() {
    return cy.get('[data-qa="mobile_number"]');
  }

  createAccountBtn() {
    return cy.get('[data-qa="create-account"]');
  }

  mrButton() {
    return cy.get("#id_gender1");
  }

  createAccountBtn() {
    return cy.get('[data-qa="create-account"]');
  }

  accountCreatedText() {
    return cy.get("b");
  }

  continueBtn() {
    return cy.get('[data-qa="continue-button"]');
  }
}

export default SignUpPage;
