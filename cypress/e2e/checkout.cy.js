describe("Checkout", () => {
  let email;
  const password = "Joaoteste123@";

  before(() => {
    email = `joao-${Date.now()}@example.com`;
    //cria um novo email para cada cadastro, garantindo que não haja conflitos
    // com cadastros anteriores

    cy.visit("https://practicesoftwaretesting.com/auth/register");
    cy.get('[data-test="first-name"]').type("Joao");
    cy.get('[data-test="last-name"]').type("Ribeiro");
    cy.get('[data-test="dob"]').type("1991-04-26");
    cy.get('[data-test="country"]').select("PT");
    cy.get('[data-test="postal_code"]').type("4444");
    cy.get('[data-test="house_number"]').type("444");
    cy.get('[data-test="state"]').type("000");
    cy.get('[data-test="phone"]').type("999999999");
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type("Joaoteste123@{enter}");
    cy.get('[data-test="state"]').type("000");
    cy.get('[data-test="register-submit"]').click();
    //faz cadastro do usuário antes do teste
  });

  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/auth/login");
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-submit"]').click();
    cy.contains('[data-test="page-title"]', "My account").should("be.visible");
    //faz login do usuário antes de cada teste

    cy.get('[data-test="nav-home"]').click();
    //garante que o usuário esteja na página inicial
  });

  it("Concluir uma compra com dados válidos", () => {
    cy.wait(1000);
    // Aguarda 1 segundo para garantir que a página esteja totalmente carregada

    cy.get('[data-test="product-01M672YFKHQRK28RSFENPTKMVQ"] > .card-body > [data-test="product-name"]').click();
    cy.get('[data-test="add-to-cart"]').click();
    cy.get('[data-test="nav-cart"] svg.fa-cart-shopping').click();
    cy.get('[data-test="proceed-1"]').click();
    cy.contains("p.ng-star-inserted", "You can proceed to checkout.").should("be.visible");
    cy.get('[data-test="proceed-2"]').click();
    cy.get('[data-test="country"]').select("Portugal");
    cy.get('[data-test="postal_code"]').type("-444");
    cy.get('[data-test="house_number"]').type("447");
    cy.get('[data-test="state"]').type("000");
    cy.get("app-address > .container > :nth-child(1) > .offset-md-3 > .float-end").click();
    cy.get('[data-test="payment-method"]').select("Credit Card");
    cy.get('[data-test="credit_card_number"]').type("4444-4444-4444-4444");
    cy.get('[data-test="cvv"]').type("123");
    cy.get('[data-test="expiration_date"]').type("12/2026");
    cy.get('[data-test="card_holder_name"]').type("Joao Ribeiro");
    cy.get('[data-test="finish"]').click();
    cy.contains('[data-test="payment-success-message"]', "Payment was successful").should("be.visible");
    cy.get('[data-test="finish"]').click();
  });
});
