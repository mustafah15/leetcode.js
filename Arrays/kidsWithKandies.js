/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let extracandiesarray = [];
  let result = [];
  let largest = -1;
  
  for( let i = 0; i < candies.length; i++){
      extracandiesarray[i] = candies[i] + extraCandies;
      if(candies[i]> largest) {
          largest = candies[i];
      }
  }

  for(let i= 0; i < candies.length; i++) {
      if(extracandiesarray[i] >= largest) {
          result[i] = true;
      } else {
          result[i] = false;
      }
  }

  return result;
};
