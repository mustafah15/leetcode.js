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

// faster solution

var twoSum = function(nums, target) {
    const map = [];

    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        // cur + x = target
        let x = target - curr;
        if(map[x] !== undefined) {
            return [map[x], i];
        } 
        map[curr] = i;
    }
};

