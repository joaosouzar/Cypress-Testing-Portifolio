describe("Cadastro", () => {
  let email;
  const password = "Joaoteste123@";

  beforeEach(() => {
    email = `joao-${Date.now()}@example.com`;
    //cria um novo email para cada teste, garantindo que não haja conflitos
    // com cadastros anteriores

    cy.visit("https://practicesoftwaretesting.com/auth/register");
  });

  it("submeter cadastro com dados válidos ", () => {
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
    cy.contains("h3", "Login").should("be.visible");
  });

  it("Submeter o cadastro com campos obrigatórios vazios ", () => {
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
    cy.get('[data-test="first-name-error"]').should("be.visible");
  });

  it("preencher e-mail com formato inválido", () => {
    cy.get('[data-test="first-name"]').type("Joao");
    cy.get('[data-test="last-name"]').type("Ribeiro");
    cy.get('[data-test="dob"]').type("1991-04-26");
    cy.get('[data-test="country"]').select("PT");
    cy.get('[data-test="postal_code"]').type("4444");
    cy.get('[data-test="house_number"]').type("444");
    cy.get('[data-test="state"]').type("000");
    cy.get('[data-test="phone"]').type("999999999");
    cy.get('[data-test="email"]').type("joaoexample.com");
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="state"]').type("000");
    cy.get('[data-test="register-submit"]').click();
    cy.get('[data-test="email-error"]').should("be.visible");
  });

  it("preencher senha que não cumpre os requisitos", () => {
    cy.get('[data-test="first-name"]').type("Joao");
    cy.get('[data-test="last-name"]').type("Ribeiro");
    cy.get('[data-test="dob"]').type("1991-04-26");
    cy.get('[data-test="country"]').select("PT");
    cy.get('[data-test="postal_code"]').type("4444");
    cy.get('[data-test="house_number"]').type("444");
    cy.get('[data-test="state"]').type("000");
    cy.get('[data-test="phone"]').type("999999999");
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type("joaoteste");
    cy.get('[data-test="state"]').type("000");
    cy.get('[data-test="register-submit"]').click();
    cy.get('[data-test="password-error"]').should("be.visible");
  });
});
