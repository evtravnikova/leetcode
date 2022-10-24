'use strict'

/*
let sortedSquares = function (nums) {
    let newArr = nums.map(num => Math.pow(num, 2));
    newArr.sort(function (a, b) {
        return a - b;
    });
    return newArr
};

console.log(sortedSquares([10, 4, -9, 9, 49, 121]))
*/


let sortedSquares = function (nums) {
    const result = new Array(nums.length); //6 elements
    let leftInd = 0;
    let rightInd = nums.length - 1;
    let biggestInd = nums.length - 1;

    while (leftInd <= rightInd) {
        const leftEl = Math.pow(nums[leftInd], 2);
        const rightEl = Math.pow(nums[rightInd], 2);
        if (leftEl > rightEl) {
            result[biggestInd] = leftEl;
            biggestInd -= 1;
            leftInd += 1;
        } else {
            result[biggestInd] = rightEl;
            biggestInd -= 1;
            rightInd -= 1
        }
    }
    return result
};

console.log(sortedSquares([10, 4, -9, 9, 49, 121]))