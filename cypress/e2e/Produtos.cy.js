//practicesoftwaretesting.com/
https:
describe('produtos', () => {

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/auth/login')
    cy.xpath('//*[@id="email"]').type('teste123@teste.com')
    cy.xpath('//*[@id="password"]').type('Teste321@', { delay: 100 })
    cy.xpath('/html/body/app-root/div[2]/app-login/div/div/div/form/div[3]/input').click()
    cy.wait(500)
    cy.url().should('include', 'https://practicesoftwaretesting.com/account')
    cy.wait(500)
    cy.xpath('//*[@id="navbarSupportedContent"]/ul/li[1]/a').click()
  })

it('busca de produtos', () => {
    cy.xpath('//*[@id="search-query"]').type('thor hammer')
    cy.wait(500)
    cy.xpath('//*[@id="filters"]/form[2]/div/button[2]').click()
    cy.xpath('/html/body/app-root/div[2]/app-overview/div[3]/div[2]/div[1]/a').should('exist')
  }) 


})


