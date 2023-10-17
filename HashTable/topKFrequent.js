/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const hash = {};

  for(let i = 0; i < nums.length; i++) {
      if(hash[nums[i]]){
          hash[nums[i]] = hash[nums[i]] + 1;
      } else {
          hash[nums[i]] = 1;
      }
  }
      
      
const sorted = Object.entries(hash).sort((a, b) => b[1] - a[1]).slice(0, k)
const result = sorted.map(item => parseInt(item[0], 10))

return result;
};
