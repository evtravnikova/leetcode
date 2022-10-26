var countPoints = function (rings) {
    if (rings.length < 6) {
        return 0
    }
    let allNumbers = rings.match(/\d/g);
    let allNumbersSet = new Set(allNumbers);
    let resultPositions = [];
    let counter = 0;


    function repeatNumbers(arr, number) {
        let length = arr.filter(i => +i === number).length;
        if (length === 3) {
            resultPositions.push(number)
        }
    }

    allNumbersSet.forEach(setElement => {
        repeatNumbers(allNumbers, +setElement)
    })

/*    function searchRGB(string, number) {
        //console.log(string.match(new RegExp(`${number}`, 'g')));

        counter++
    }*/

    for (let i = 0; i < resultPositions.length; i++) {
        //searchRGB(rings, resultPositions[i])

    }

    //console.log(resultPositions)
    //return counter
}


console.log(countPoints("B0B6G0R6R0R6G9"));

