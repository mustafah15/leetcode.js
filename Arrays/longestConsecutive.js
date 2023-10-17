/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set  = new Set(nums);
  let res = 0;

  for(let i = 0; i < nums.length; i++) {
      if(!set.has(nums[i] - 1)) {
          let sequence = 1;
          let next = nums[i] + 1;
          while(set.has(next)) {
              next++;
              sequence++;
          }
          if(res < sequence) {
              res = sequence;
          }
      }
  }
  return res;
};
