class CheckoutPage {
  commentBox() {
    return cy.get(".form-control");
  }

  placeOrder() {
    return cy.get(".btn").contains("Place Order");
  }
}

export default CheckoutPage;
