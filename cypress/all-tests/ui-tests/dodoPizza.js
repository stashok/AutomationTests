import dodoPage from "../../page-objects/dodopizzaPage"
import Chance from "chance";

describe('UI - test Practice', () => {
/*
it('DodoPizza test with count of pizzas more than 10', () => {
        dodoPage.changeCountOfPizzas(chance.integer({min: 10, max: 20}));
    })

    it('DodoPizza test with count of pizzas less than 10', () => {
        dodoPage.changeCountOfPizzas(chance.integer({min: 1, max: 9}));
    }) ;
 */
    beforeEach(() => {
        cy.fixture('pizzas').then(data => {
          cy.wrap(data).as('pizzasData')
        })
    });
    const DATA_SET = [
        {description: 'Single product', count: 1}
     //   {description: 'Several', count: 2}
    ];
    DATA_SET.forEach(({description, count}) => {

        it(`Card: User is able to add ${description} product `, function () {
            cy.fixture('pizzas').then(data => {
                dodoPage.open();
                data = (count === 1) ? [data.pizzasName[1]] : data;
                data.forEach(item => {
                    dodoPage.putPizzaInCart(item);
                    dodoPage.checkPizzaInCart(item)
                    dodoPage.basketItems.should(($this) => {
                        expect($this).to.contain(item)
                    });
                })
            });
        });

        it(`Card: User is able to change count of ${description} product from single to multiple`, () => {
            let countOfGoods = chance.integer({min: 1, max: 5});
           // cy.fixture('pizzas').then(data => {
                cy.log(countOfGoods);
                dodoPage.open();
                cy.fixture('pizzas').then(data => {
                    data = (count === 1) ? [data.pizzasName[1]] : data.pizzasName[count];
                    data.forEach(item => {
                        dodoPage.putPizzaInCart(item);
                        dodoPage.checkPizzaInCart(item);
                        dodoPage.basketItems.should(($this) => {
                            expect($this).to.contain(item)
                        });
                        dodoPage.changeCountOfPizzas(countOfGoods);
                        dodoPage.countOfItems.should(($this) => {
                            expect($this).to.contain(`${countOfGoods}`)
                        });
                    })
                })
           // });
        });
    });
    });








