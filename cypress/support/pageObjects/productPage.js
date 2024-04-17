class ProductPage {
  quantityBox() {
    return cy.get("#quantity");
  }

  addToCartBtn() {
    return cy.get(".btn").contains("Add to cart");
  }

  confirmationModal() {
    return cy.get(".modal-title");
  }

  productInformationText() {
    return cy.get(".product-information > h2");
  }

  viewCartBtn() {
    return cy.get("u").contains("View Cart");
  }
}

export default ProductPage;
