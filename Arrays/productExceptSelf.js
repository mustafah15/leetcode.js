/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const result = [];
  let prefix = 1;
  let postfix = 1;

  for(let i = 0; i < nums.length; i++) {
      result[i] = prefix;
      prefix = prefix * nums[i];
  }
  
  for(let j = nums.length - 1; j >= 0; j--) {
      result[j] = postfix * result[j];        
      postfix = postfix * nums[j];
  }

  return result;
};
