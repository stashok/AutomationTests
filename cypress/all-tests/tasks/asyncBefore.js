import Chance from 'chance'

describe('Tests for Google', () => {
    before(() => {
        cy.request({
            method: 'GET',
            url: "https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916",
            failOnStatusCode: false,
        }).its("body").as("Titles")
    })
    it(("log positions"), function () {
        this.Titles.products.forEach(elem => {
            console.log(elem.display_name)
            }

        )
    })

});