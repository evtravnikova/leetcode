'use strict'

let moveZeroes = function (nums) {
    for (let i = nums.length; i >= 0; i--) {
        nums[i] === 0 && nums.splice(i, 1) && nums.push(0)
    }
    console.log(nums)
    return nums
};

moveZeroes([0,1,0,3,12])
