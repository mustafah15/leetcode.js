/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
  arr.sort((a,b)=>a-b);
  let res = [];

  for(let i = 0; i < arr.length; i++) {
      if(i > 0 && arr[i] == arr[i-1]){
          continue;
      }
      let low = i + 1;
      let high = arr.length - 1;
      while(low < high) {
          if (arr[low] + arr[high] +  arr[i] > 0) {
              high--;
          } else if (arr[low] + arr[high] + arr[i] < 0) {
              low++;
          } else {
              res.push([arr[low], arr[i], arr[high]]);
              low++;

              while(arr[low] == arr[low-1] && low<high){
                  low++;
              }
          }
      }
  }
      
  return res;
};
