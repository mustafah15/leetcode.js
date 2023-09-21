/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var bsearch = (arr, low, high, target) => {
  if(low > high) {
      return -1;
  }
  let mid = low + Math.floor((high - low) / 2) ;
  console.log(mid);
  if(arr[mid] == target) {
      return mid;
  } else if(target < arr[mid]) {
      return bsearch(arr, low, mid - 1, target);
  } else if(target > arr[mid]) {
      return bsearch(arr, mid + 1, high, target);
  }
}

var search = function(nums, target) {
  return bsearch(nums, 0, nums.length - 1, target);
};
