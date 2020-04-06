/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zerosCounter = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zerosCounter++;
            nums.splice(i, 1);
            i = i -1;
        }
    }
    for(let j =0; j < zerosCounter; j++) {
        nums.push(0);    
    }
    
    return nums;
};
