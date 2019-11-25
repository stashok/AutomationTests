import Chance from 'chance'


describe('Tests for Google', () => {

    it(("log positions"), () => {
        cy.request({
            method: 'GET',
            url: "https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916",
            failOnStatusCode: false,
        }).then((response) => {
            cy.wrap(response.body).as("Titles")
        })
        cy.get('@Titles').then(titleList => {
            console.log(titleList.products.length);
            for(let i=0;i<titleList.products.length;i++)
            {
                console.log(titleList.products[i].display_name);
            }
        })
    })

})
