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
                status: chance.pickone(['available', 'pending', 'sold']),
                photoUrls: RandomForTests.randomUrls(10),
                tags: RandomForTests.randomTags(10)


            }
        },

        {
            description: "Avg values",
            requestData: {
                name: Chance().string({length: 50}),
                id: Chance().integer({min: 0, max: 100}),
                photoUrls: RandomForTests.randomUrls(Chance().integer({min: 0, max: 10})),
                tags: RandomForTests.randomTags(Chance().integer({min: 0, max: 10}))

            }
        },

        {
            description: "Min values",
            requestData: {
                name: Chance().string({length: 0}),
                id: Chance().integer({min: 0, max: 100}),
                photoUrls: RandomForTests.randomUrls(1),
                tags: RandomForTests.randomTags(1)

            }
        }
    ];

    testingData.forEach(({description, requestData}) => {
        it(`Positive: Create pet ${description}`, () => {

            cy.request('POST', 'https://petstore.swagger.io/v2/pet', requestData).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', requestData.name);
                expect(response.body).to.have.property('id', requestData.id);
                expect(response.body).to.have.property('photoUrls', requestData.photoUrls);
                expect(response.body).to.have.property('tags', requestData.tags)


            })

        })
    })
});