export const isSuperSet = (set, subSet) => {
    for (let elem of subSet) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

export const union = (setA, setB) => {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

export const intersection = (setA, setB) => {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }

    }
    return _intersection
}

export const difference = (setA, setB) => {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

export const printPlanets = (array) => {

    array.forEach(function (planet) {
        cy.log(JSON.stringify(planet));
    })

}

export const printPlanet = (map) => {
    array.forEach(item => cy.log(JSON.stringify(item)));
    map.forEach((value, key) => {
        cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))
    });
}