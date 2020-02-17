/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let result = {};
    for(let i = 0; i < arr.length; i ++) {
        if(result[arr[i]]) {
            result[arr[i]] = result[arr[i]] + 1;
        } else {
         result[arr[i]] = 1;
        }
    }
  return (new Set(Object.values(result))).size === Object.values(result).length;
};
