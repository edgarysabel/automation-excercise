class LoginPage {
  newSignUpNameTxtbox() {
    return cy.get('[data-qa="signup-name"]');
  }

  newSignUpEmailTxtbox() {
    return cy.get('[data-qa="signup-email"]');
  }

  emailLoginTxtbox() {
    return cy.get('[data-qa="login-email"]');
  }

  passwordTxtbox() {
    return cy.get('[data-qa="login-password"]');
  }

  signupBtn() {
    return cy.get('[data-qa="signup-button"]');
  }

  loginBtn() {
    return cy.get('[data-qa="login-button"]');
  }
}

export default LoginPage;
