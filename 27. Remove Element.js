'use strict';

console.time('for')

const removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            k++;
            nums[i] = NaN
        }
        }
    nums.sort();
    return [nums, nums.length - k]
}
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
console.timeEnd('for')



console.time('map')
const removeElement2 = function (nums, val) {
    let k = 0;
    const newArr = nums.map(function (number) {
        if (number === val) {
            k++;
            return number * NaN
        } else {
            return number
        }
    })
    newArr.sort();
    return [newArr, newArr.length - k]
}
removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2)
console.timeEnd('map')