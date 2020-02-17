/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length; i++) {
        for(let y =nums.length; y > i; y--) {
            if(nums[i] + nums[y] === target)
                return [i, y];
        }
    }
};

