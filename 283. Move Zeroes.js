'use strict'

/*let moveZeroes = function (nums) {
    for (let i = nums.length; i >= 0; i--) {
        nums[i] === 0 && nums.splice(i, 1) && nums.push(0)
    }
    console.log(nums)
    return nums
};

moveZeroes([0,1,0,3,12])*/
let moveZeroes = function (nums) {
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i];
        }
    }
    for (i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
    console.log(nums)
}
moveZeroes([4,0,1,0,3,12])