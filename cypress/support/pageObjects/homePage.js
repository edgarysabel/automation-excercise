class HomePage {
  premiumPoloViewProductBtn() {
    return cy.get(
      ":nth-child(26) > .product-image-wrapper > .choose > .nav > li > a"
    );
  }
}

export default HomePage;
