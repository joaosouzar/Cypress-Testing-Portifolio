describe('tela de Login', () => {

  beforeEach(() => {
    cy.visit('https://practicesoftwaretesting.com/auth/login')
  })
  
  it('login com sucesso', () => {
    cy.xpath('//*[@id="email"]').type('teste123@teste.com')
    cy.xpath('//*[@id="password"]').type('Teste321@', { delay: 100 })
    cy.xpath('/html/body/app-root/div[2]/app-login/div/div/div/form/div[3]/input').click()
    cy.url().should('include', 'https://practicesoftwaretesting.com/account')
    cy.screenshot('login-com-sucesso')  
  }) 

  it('login sem email', () => {
    cy.xpath('//*[@id="email"]').clear()
    cy.xpath('//*[@id="password"]').type('Teste321@', { delay: 100 })
    cy.xpath('/html/body/app-root/div[2]/app-login/div/div/div/form/div[3]/input').click()
    cy.xpath('//*[@id="email-error"]/div').should('be.visible')
    cy.screenshot('login-sem-email')
  })  

  it('login sem senha', () => {
    cy.xpath('//*[@id="email"]').type('teste123@teste.com')
    cy.xpath('//*[@id="password"]').clear()
    cy.xpath('/html/body/app-root/div[2]/app-login/div/div/div/form/div[3]/input').click()
    cy.contains('Password is required')
    cy.screenshot('login-sem-senha')
  })  
})
