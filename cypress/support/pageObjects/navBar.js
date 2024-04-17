class NavBar {
  cartBtn() {
    return cy.get(".shop-menu").contains("Cart");
  }
  logoutBtn() {
    return cy.get(".shop-menu").contains("Logout");
  }

  loginBtn() {
    return cy.get(".shop-menu").contains("Login");
  }

  contactUsBtn() {
    return cy.get(".shop-menu").contains("Contact us");
  }
}

export default NavBar;
