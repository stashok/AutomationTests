import Chance from 'chance'
import {isSuperSet, intersection, union, difference, printPlanets} from "../../utils/helper"

describe('Locators Practice', () => {
    it('Some selectors', () => {
        cy.log("SET TASKS")
        let mySet = new Set(['USD', 'BYN', 'RUB']); // task 1
        mySet.add('USD'); // task 3
        mySet.add('BYR'); //PLN
        mySet.forEach(function (element) { // task 2
            cy.log(element)
        })
        cy.log("Set has USD value: " + mySet.has('USD'))
        mySet.delete('USD')
        cy.log("Delete USD")
        cy.log("Set has USD value: " + mySet.has('USD'))


        let myArray = Array.from(mySet) // task 4
        cy.log(chance.pickone(myArray))
        cy.log(chance.pickset(myArray, chance.integer({min: 1, max: myArray.length})))


        var setA = new Set([1, 2, 3, 4]) //task 5
        var setB = new Set([2, 3])
        var setC = new Set([3, 4, 5, 6])
        cy.log(isSuperSet(setA, setB))

        var setResult = union(setA, setC)
        cy.log("UNION")
        setResult.forEach(function (element) {
            cy.log(element)
        })

        setResult = intersection(setA, setC)
        cy.log("INTERSECTION")
        setResult.forEach(function (element) {
            cy.log(element)
        })

        setResult = difference(setA, setC)
        cy.log("DIFFERENCE")
        setResult.forEach(function (element) {
            cy.log(element)
        })


        cy.log("ARRAY TASKS")
        let planets = [
            {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
            {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
            {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
            {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
            {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
            {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
            {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
            {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
        ]
        printPlanets(planets)

        cy.log("Add property 'solarSystem' ");
        planets.map(item => item.solarSystem = true);
        printPlanets(planets);

        cy.log("Add 'SomeNewPlanet'");
        planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false});
        printPlanets(planets);


        cy.log("Sum of radii = " + planets.reduce((acc, item) => item.radius + acc, 0));


        cy.log(planets.filter(item => item.distance > 5));

        cy.log("Delete 'SomeNewPlanet'");
        planets.splice(planets.indexOf("SomeNewPlanet"));
        printPlanets(planets);

        cy.log("Sorting by radius");
        planets.sort((a, b) => a.radius - b.radius);
        printPlanets(planets);

        cy.log("Sorting by name");
        planets.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        printPlanets(planets);


        cy.log("Array length = " + planets.length);

    })


})
describe('currencyConverter', () => {
    it('Check value', () => {
        cy.fixture('converter').then(item => {
            let currency=Chance().pickone(item.rates);
            cy.visit('https://www.xe.com/currencyconverter/');
            cy.get('#to').click().type(`${currency.shortName}{enter}{enter}`);
            cy.get('span[class="converterresult-toAmount"]').should(($this) => {
                expect($this).to.contain(`${currency.rate}`)
            })
        })
    })
    });
