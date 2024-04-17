class CartPage {
  tableItemElement() {
    return cy.get("h4 > a");
  }

  checkoutBtn() {
    return cy.get(".btn").contains("Checkout");
  }

  registerBtnInModal() {
    return cy.get("u").contains("Register");
  }
}

export default CartPage;
