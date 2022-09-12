var twoSum = function (nums, target) {
    let firstIndex;
    let secondIndex;

    for (let i = 0; i < nums.length; i++) {
        let searched = target - nums[i];
        if (nums.indexOf(searched) === i) {
            continue;
        }
        if (nums.includes(searched)) {
            firstIndex = nums.indexOf(searched);
            secondIndex = i;
            break;
        }

    }
    console.log([firstIndex, secondIndex]);
    return [firstIndex, secondIndex]
};