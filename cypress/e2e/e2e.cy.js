/// <reference types="cypress" />

import HomePage from "../support/pageObjects/homePage";
import CartPage from "../support/pageObjects/cartPage";
import ProductPage from "../support/pageObjects/productPage";
import NavBar from "../support/pageObjects/navBar";
import LoginPage from "../support/pageObjects/loginPage";
import SignUpPage from "../support/pageObjects/signUpPage";
import CheckoutPage from "../support/pageObjects/checkoutPage";
import PaymentPage from "../support/pageObjects/paymentPage";
import ContactUsPage from "../support/pageObjects/contactUsPage";
import {
  randFullName,
  randCreditCardNumber,
  randEmail,
  randPassword,
  randFirstName,
  randLastName,
  randAddress,
  randState,
  randPhoneNumber,
  randLines,
  randCreditCard,
  randCatchPhrase,
} from "@ngneat/falso";

const homePage = new HomePage();
const productPage = new ProductPage();
const navBar = new NavBar();
const signUpPage = new SignUpPage();
const checkoutPage = new CheckoutPage();
const cartPage = new CartPage();
const loginPage = new LoginPage();
const paymentPage = new PaymentPage();
const contactUsPage = new ContactUsPage();
const FRONTEND_URL = Cypress.env("FRONTEND_URL");

const user = {
  email: randEmail(),
  password: randPassword(),
  fullName: randFullName(),
  ccNumber: randCreditCardNumber(),
  number: randPhoneNumber(),
  firstName: randFirstName(),
  lastName: randLastName(),
  address: randAddress(),
  state: randState(),
};

const creditCard = randCreditCard();

describe("End to End Automation Excercise", function () {
  before(() => {
    cy.clearAllSessionStorage();
    cy.visit(`${FRONTEND_URL}`);
  });

  beforeEach(() => {
    cy.fixture("checkoutData").then(function (data) {
      this.data = data;
    });
  });

  after(() => {
    cy.clearAllSessionStorage();
  });

  it("TC-01: Select Product", function () {
    cy.scrollTo("center");
    homePage.premiumPoloViewProductBtn().click();
    productPage.productInformationText().contains(this.data.productName);
  });

  it("TC-02: Add Product to Cart", function () {
    productPage.quantityBox().clear();
    productPage.quantityBox().type(this.data.amount);
    productPage.addToCartBtn().click();
    productPage.confirmationModal().should(($el) => {
      const text = $el.text();
      expect(text).to.contains("Added!");
    });
    productPage.viewCartBtn().click();
  });

  it("TC-03: Sign Up", function () {
    cartPage.checkoutBtn().click();
    cartPage.registerBtnInModal().click();
    loginPage.newSignUpNameTxtbox().type(user.fullName);
    loginPage.newSignUpEmailTxtbox().type(user.email);
    loginPage.signupBtn().click();
    signUpPage.mrButton().click();
    signUpPage.passwordTxtbox().type(user.password);
    signUpPage.firstNameBox().type(user.firstName);
    signUpPage.lastNameBox().type(user.lastName);
    signUpPage.addressBox().type(user.address.street);
    signUpPage.state().type(user.state);
    signUpPage.city().type(user.address.city);
    signUpPage.zipcode().type(user.address.zipCode);
    signUpPage.mobileNumber().type(user.number);
    signUpPage.createAccountBtn().click();
    signUpPage.accountCreatedText().should(($el) => {
      const text = $el.text();
      expect(text).to.contains("Created!");
    });
    signUpPage.continueBtn().click();
  });

  it("TC-04: Checkout", function () {
    navBar.cartBtn().click();
    cartPage.checkoutBtn().click();
    checkoutPage.commentBox().type(randLines());
    checkoutPage.placeOrder().click();
    paymentPage.nameTxtbox().type(creditCard.fullName);
    paymentPage.cardTxtbox().type(creditCard.number);
    paymentPage.cvcTxtbox().type(creditCard.ccv);
    paymentPage.expirationMonth().type(10);
    paymentPage.expirationYear().type(25);
    paymentPage.payBtn().click();
    paymentPage.orderPlacedHeader().should("be.visible");
    paymentPage.continueBtn().click();
  });

  it("TC-05: Logout", function () {
    navBar.logoutBtn().click();
    navBar.loginBtn().should("be.visible");
  });

  it("TC-06: Login", function () {
    navBar.loginBtn().click();
    loginPage.emailLoginTxtbox().type(user.email);
    loginPage.passwordTxtbox().type(user.password);
    loginPage.loginBtn().click();
    navBar.logoutBtn().should("be.visible");
  });

  it("TC-07: Contact Us", function () {
    navBar.contactUsBtn().click();
    contactUsPage.nameTxtbox().type(user.fullName);
    contactUsPage.emailTxtbox().type(user.email);
    contactUsPage.subjectTxtbox().type(randCatchPhrase());
    contactUsPage.messageTxtbox().type(randLines());
    contactUsPage.submitBtn().click();
    contactUsPage.status().should(($el) => {
      const text = $el.text();
      expect(text).to.contains(
        "Success! Your details have been submitted successfully."
      );
    });
  });
});
