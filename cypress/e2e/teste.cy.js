describe("produtos", () => {
  let email;
  const password = "Joaoteste123@";

  it("cadastro de usuario", function () {
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
    //faz cadastro do usuário antes de cada teste
  });
});
