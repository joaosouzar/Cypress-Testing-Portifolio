describe("login", () => {
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
    cy.get('[data-test="password"]').type("Joaoteste123@{enter}");
    cy.get('[data-test="state"]').type("000");
    cy.get('[data-test="register-submit"]').click();
  });

  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/auth/login");
  });

  it("Login com credenciais válidas", () => {
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-submit"]').click();
    cy.contains('[data-test="page-title"]', "My account").should("be.visible");
  });

  it("Login com email inválido", () => {
    cy.get('[data-test="email"]').type("invalid-email@example.com");
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-submit"]').click();
    cy.contains('[data-test="login-error"]', "Invalid email or password").should("be.visible");
  });

  it("Login com senha inválida", () => {
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type("invalid-password");
    cy.get('[data-test="login-submit"]').click();
    cy.contains('[data-test="login-error"]', "Invalid email or password").should("be.visible");
  });

  it("Login sem preencher campos", () => {
    cy.get('[data-test="login-submit"]').click();
    cy.contains('[data-test="email-error"] > div', "Email is required").should("be.visible");
  });

  it("recuperação de senha", () => {
    cy.get('[data-test="forgot-password-link"]').click();
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="forgot-password-submit"]').click();
    cy.get(".alert").should("be.visible");
  });

  it("Logout com sucesso", () => {
    cy.get('[data-test="email"]').type(email);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-submit"]').click();
    cy.get('[data-test="nav-menu"]').click();
    cy.get('[data-test="nav-sign-out"]').click();
    cy.contains("h3", "Login").should("be.visible");
  });
});
