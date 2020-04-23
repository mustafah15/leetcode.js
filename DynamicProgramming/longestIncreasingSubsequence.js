/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length == 0) {
       return 0;
     }
   
       const maxLength = Array(nums.length);
       maxLength.fill(1);
       let maximumSoFar = 1;
       
       
       for(let i = 1; i < nums.length; i++) {
           for(let j = 0; j< i; j++) {
               if(nums[i] > nums[j]) {
                   maxLength[i] = Math.max(maxLength[i], maxLength[j] + 1);
               }
           }
           maximumSoFar = Math.max(maximumSoFar, maxLength[i])
       }
       
       return maximumSoFar;
};
