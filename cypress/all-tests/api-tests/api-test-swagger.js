import Chance from 'chance'
import RandomForTests from "../../page-objects/functionRandom"

describe('Test for swagger petstore', () => {
    before(() => {

    })


    let testingData = [
        {
            description: "Max values",

            requestData: {
                name: Chance().string({length: 100}),
                id: Chance().integer({min: 0, max: 100}),
                status: chance.pickone(['available', 'pending', 'sold ']),
                photoUrls:  ["dskjf", "fkdjlsf"],
                tags: RandomForTests.randomTags(100),

            }
        },

        {
            description: "Avg values",
            requestData: {
                name: Chance().string({length: 50}),
                id: Chance().integer({min: 0, max: 100}),
                status: chance.pickone(['available', 'pending', 'sold ']),
                photoUrls: RandomForTests.randomUrls(Chance().integer({min: 1, max: 100})),
                tags: RandomForTests.randomTags(Chance().integer({min: 1, max: 100})),
            }
        },

        {
            description: "Min values",
            requestData: {
                name: Chance().string({length: 1}),
                id: Chance().integer({min: 0, max: 100}),
                status: chance.pickone(['available', 'pending', 'sold ']),
                photoUrls: RandomForTests.randomUrls(1),
                tags: RandomForTests.randomTags(1),

            }
        }
    ];

    testingData.forEach(({description, requestData}) => {
        it(`Positive: Create pet ${description}`, () => {
            cy.request('POST', 'https://petstore.swagger.io/v2/pet', requestData).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', requestData.name);
                expect(response.body).to.have.property('id', requestData.id);
                expect(response.body.photoUrls).to.deep.equal(requestData.photoUrls);
                expect(response.body.tags).to.deep.equal(requestData.tags)
                // tags['name'].forEach(k =>
                //     expect(response.body[k]).to.be.a('string').and.have.length.greaterThan(0))
                console.log(response);
            })
        })
    });


    it('Positive: Add pet', () => {
        cy.fixture('pet').then(pet => {
            cy.request({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/pet',
                body: pet
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', pet.name);
            })
        })
    });

    it('Negative: Invalid Input ', () => {
        cy.fixture('pet').then(pet => {
            cy.request({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/pet',
                body: {"id": "1"},
                failOnStatusCode: false,
            }).then(response => {
                expect(response.status).to.eq(200);
            })
        })
    });


    it('Positive: Update pet', () => {
        cy.fixture('pet').then(pet => {
            cy.request({
                method: 'PUT',
                url: 'https://petstore.swagger.io/v2/pet',
                body: pet
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', pet.name);
            })
        })
    });

    it('Positive: Get pet', () => {
        cy.fixture('pet').then(pet => {
            cy.request({
                method: 'GET',
                url: `https://petstore.swagger.io/v2/pet/${pet.id}`,
            }).then(response => {
                expect(response.status).to.eq(200);
            })
        })
    });

    it('Positive: Delete pet', () => {
        cy.fixture('pet').then(pet => {
            cy.request({
                method: 'DELETE',
                url: `https://petstore.swagger.io/v2/pet/${pet.id}`,
            }).then(response => {
                expect(response.status).to.eq(200);
                console.log(response);
            })
        })
    });

});