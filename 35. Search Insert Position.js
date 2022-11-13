'use strict'

const searchInsert = function (nums, target) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result = i;
            return result
        }
        if (nums[0] > target) {
            result = 0
        }
        if (nums[nums.length - 1] < target) {
            result = nums.length
        }
        if (nums[i] < target) {
            result = i + 1;
        }
    }
    return result
}

console.log(searchInsert([1, 4, 5, 6, 8, 9], 11))



