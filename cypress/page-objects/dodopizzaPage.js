class dodoPage {

    open()
    {
        cy.fixture('pizzas').then(data => {
            cy.visit(data.url)
        });
    }

    putPizzaInCart(pizza)
    {
        cy.log('pizza: ' + pizza)
        cy.get('a').contains('Минск').click();
        cy.contains(pizza).siblings('.product__controls').find('button').click();
        //cy.get('#pizzas > div > div:nth-child(1) > div > div:nth-child(2) > div > div.product__controls > div > div.product__to-cart > button').click();
        cy.get('body > div.popup__container > div.popup__container-content > div > div > div > div.styled__ProductCardFullInfo-sc-1dusks1-7.eUiImf > div.styled__ProductCardCart-sc-1dusks1-17.hctFbG > div > div.product__to-cart > button').click()
        cy.wait(100);
    }
    openBasket(pizza)
    {
        cy.get('a').contains('Минск').click();
        cy.contains(pizza).siblings('.product__controls').find('button').click();
    }

    checkPizzaInCart(pizza)
    {
        cy.wait(100);
        cy.get('button').contains('Корзина').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
       // cy.wait(100);
       // cy.get('.cart__line-name').should('contain', pizza);
       // cy.wait(100);


    }

    checkCountOfPizzaInCart(count)
    {
        cy.get('.amount-control__quantity-value').should(($this) => {
            expect($this).to.contain(`${count}`)
        });
    }



//#react-app > div > div.page__wrapper > div > div > div:nth-child(2) > div > div.cart__list > div > div > div.cart__line-control > div > div > button.amount-control__switcher.amount-control__switcher_add
    changeCountOfPizzas(pizza)
    {
        //this.open();
        //this.putPizzaInCart();
        //this.checkPizzaInCart();
        let i;
        for (i = 1; i < pizza; i++){
            cy.wait(500);
            cy.get('#react-app > div > div.page__wrapper > div > div > div:nth-child(2) > div > div.cart__list > div > div > div.cart__line-control > div > div > button.amount-control__switcher.amount-control__switcher_add').click();
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })

        }
        //cy.get('.amount-control__quantity-value').contains(count);
        //this.checkCountOfPizzaInCart(count);

    }

    get basketItems()
    {
        return cy.get('.cart__line-name');
    }
    get countOfItems()
    {
        return cy.get('.amount-control__quantity-value');
    }



}
export default new dodoPage();