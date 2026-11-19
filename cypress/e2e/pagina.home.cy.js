describe("pagina home", () => {
  let email;
  const password = "Joaoteste123@";

  before(() => {
    email = `joao-${Date.now()}@example.com`;
    //cria um novo email para cada teste, garantindo que não haja conflitos
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
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="state"]').type("000");
    cy.get('[data-test="register-submit"]').click();
    //faz cadastro do usuário antes de cada teste
  });

  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/auth/login");
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-submit"]').click();
    cy.contains('[data-test="page-title"]', "My account").should("be.visible");

    //faz login do usuário antes de cada teste
  });

  it("Verificar se a Página carrega corretamente", () => {
    cy.get('[data-test="nav-home"]').click();
    cy.url().should("eq", "https://practicesoftwaretesting.com/");
  });

  it("Verificar existência de menu categorias", () => {
    cy.get('[data-test="nav-home"]').click();
    cy.get('[data-test="nav-categories"]').should("be.visible");
  });

  it("Verificar troca de idioma", () => {
    cy.get('[data-test="nav-home"]').click();
    cy.wait(1500);
    cy.get('[data-test="language-select"]').click();
    cy.get('[data-test="lang-es"]').click();
  });

  it("Verificar página de contato", () => {
    
});
