/*
let oneCounter = 0;
let twoCounter = 0;

function pickOne(f1, f2) {
    let random = Math.random();

    if (random < 0.5) {
        f1();
    } else {
        f2();
    }
}


function one() {
    oneCounter++;
    console.log(`I am number OOOOONEEE......${oneCounter}`);

}

function two() {
    twoCounter++;
    console.log(`I am number TWOOO.......${twoCounter}`);
}

pickOne(one, two);*/


function makeBetween (min, max) {
    return function (val) {
        return val >= min && val <= max;
    }
}
const inAgeArange = makeBetween(18, 100)
/*
console.log(inAgeArange(99))
*/

const goodWeather = makeBetween(15, 23)
console.log(goodWeather(12))


/*
function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}
const triple = multiplyBy(3)

console.log(triple(2))*/



