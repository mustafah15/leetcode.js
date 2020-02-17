/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//const _ = require('lodash');

var containsNearbyDuplicate = function(nums, k) {
    const map = {};
    for(let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if(map[current] !== undefined && (i - map[current]) <= k) {
            return true;
        }else {
            map[current] = i;
        }
    }
    console.log(map);
    return false;
};

