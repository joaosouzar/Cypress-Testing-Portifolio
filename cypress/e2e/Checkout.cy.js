describe('Checkout', () => {

    describe('checkout logado', () => {
    
        beforeEach(() => {
            cy.visit('https://practicesoftwaretesting.com/auth/login')
            cy.xpath('//*[@id="email"]').type('teste123@teste.com')
            cy.xpath('//*[@id="password"]').type('Teste321@', { delay: 100 })
            cy.xpath('/html/body/app-root/div[2]/app-login/div/div/div/form/div[3]/input').click()
            cy.url().should('include', 'https://practicesoftwaretesting.com/account')
            cy.wait(500)
            cy.xpath('//*[@id="navbarSupportedContent"]/ul/li[1]/a').click()
        }) 

        it('checkout com 1 item', function() {
            cy.get('[data-test="category-01KVREPQKP09F33WBKMYRGF3NC"]').check();
            cy.wait(1000);
            cy.xpath('/html/body/app-root/div[2]/app-overview/div[3]/div[2]/div[1]/a[5]').click();
            cy.get('[data-test="add-to-cart"]').click();
            cy.get('[data-test="nav-cart"] svg.fa-cart-shopping').click();
            cy.get('[data-test="proceed-1"]').click();
            cy.get('[data-test="proceed-2"]').click();
            cy.get('[data-test="country"]').select('PT');
            cy.get('[data-test="house_number"]').type('22');
            cy.get('[data-test="state"]').type('porto');
            cy.get('[data-test="proceed-3"]').click();
            cy.get('[data-test="payment-method"]').select('cash-on-delivery');
            cy.get('[data-test="finish"]').click();
            cy.get('[data-test="finish"]').click();
            cy.contains('Payment was successful').should('be.visible');
        });

    it('checkout com 3 items', function() {
        cy.get('[data-test="category-01KVREPQKP09F33WBKMYRGF3NC"]').check();
        cy.get('[data-test="product-01KVREPQP6SDSPNFB0110PD6VS"] div.card-footer').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="nav-home"]').click();
        cy.get('[data-test="category-01KVREPQKP09F33WBKMYRGF3N6"]').check();
        cy.get('[data-test="product-01KVREPQQ4HEEXVNSHZKV8QHQ0"] div.card-footer').click();
        cy.get('[data-test="add-to-cart"] fa-icon.ng-fa-icon').click();
        cy.get('[data-test="nav-home"]').click();
        cy.get('[data-test="product-01KVREPQMZN9N3RRB2CGDPXBN2"] div.card-footer').click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('[data-test="nav-cart"] fa-icon.ng-fa-icon').click();
        cy.get('[data-test="proceed-1"]').click();
        cy.get('[data-test="proceed-2"]').click();
        cy.get('[data-test="country"]').select('PT');
        cy.get('[data-test="house_number"]').click();
        cy.get('[data-test="house_number"]').type('22');
        cy.get('[data-test="state"]').click();
        cy.get('[data-test="state"]').type('porto');
        cy.get('[data-test="proceed-3"]').click();
        cy.get('[data-test="payment-method"]').select('cash-on-delivery');
        cy.get('[data-test="finish"]').click();
        cy.contains('Payment was successful').should('be.visible');
        });
    });

    it('checkout sem login', function() {
     cy.visit('https://practicesoftwaretesting.com/')
     cy.get('[data-test="product-01KVREPQMPNAE6K6XDDG9BY9C0"] img.card-img-top').click();
     cy.get('[data-test="add-to-cart"]').click();
     cy.get('[data-test="cart-quantity"]').click();
     cy.get('[data-test="proceed-1"]').click();
     cy.get('a[href="#guest-tab"]').click();
     cy.get('[data-test="guest-email"]').click();
     cy.get('[data-test="guest-email"]').type('teste111@teste.com');
     cy.get('[data-test="guest-first-name"]').type('teste111@teste.com');
     cy.get('[data-test="guest-last-name"]').click();
     cy.get('[data-test="guest-last-name"]').type('last');
     cy.get('[data-test="guest-submit"]').click();
     cy.get('[data-test="proceed-2-guest"]').click();
     cy.get('[data-test="country"]').select('BR');
     cy.get('[data-test="postal_code"]').click();
     cy.get('[data-test="postal_code"]').type('4444-444');
     cy.get('[data-test="house_number"]').click();
     cy.get('[data-test="house_number"]').type('44');
     cy.get('[data-test="street"]').click();
     cy.get('[data-test="street"]').type('teste');
     cy.get('[data-test="city"]').click();
     cy.get('[data-test="city"]').type('teste');
     cy.get('[data-test="state"]').click();
     cy.get('[data-test="state"]').type('teste');
     cy.get('[data-test="proceed-3"]').click();
     cy.get('[data-test="payment-method"]').select('cash-on-delivery');
     cy.get('[data-test="finish"]').click();
     cy.get('[data-test="finish"]').click();
    });
})