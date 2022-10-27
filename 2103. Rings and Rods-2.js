var countPoints = function (rings) {
    let rods = {};
    let counter = 0;

    for (let i = 0; i < rings.length; i+=2) {
        if (rings[i+1] in rods) {
              rods[rings[i+1]].add(rings[i]);
        } else {
            rods[rings[i+1]] = new Set(rings[i]);
        }
    }

    for (let i = 0; i < Object.values(rods).length; i++) {
        if (Object.values(rods)[i].has('R') && Object.values(rods)[i].has('G') && Object.values(rods)[i].has('B')) {
            counter++
        }
    }
    return counter
}
console.log(countPoints("B0B6G0R6R0G6G9"));


/*

    function searchRGB(string, number) {
        console.log(string.match(new RegExp(`${number}`, 'g')));
    }
    setNumbers.forEach(num => searchRGB(rings, num))*/
