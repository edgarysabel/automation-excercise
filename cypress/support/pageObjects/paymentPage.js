class PaymentPage {
  nameTxtbox() {
    return cy.get('[data-qa="name-on-card"]');
  }

  cardTxtbox() {
    return cy.get('[data-qa="card-number"]');
  }

  cvcTxtbox() {
    return cy.get('[data-qa="cvc"]');
  }

  expirationMonth() {
    return cy.get('[data-qa="expiry-month"]');
  }

  expirationYear() {
    return cy.get('[data-qa="expiry-year"]');
  }

  payBtn() {
    return cy.get('[data-qa="pay-button"]');
  }

  orderPlacedHeader() {
    return cy.get('[data-qa="order-placed"] > b');
  }

  continueBtn() {
    return cy.get('[data-qa="continue-button"]');
  }
}

export default PaymentPage;
