/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function(heights) {
  let maxArea = 0
  let low = 0;
  let high = heights.length - 1;

  while (low < high) {
      let area = Math.min(heights[low], heights[high]) * (high - low);
      if (area > maxArea) {
          maxArea = area;
      }

      if(heights[low] > heights[high]) high--;
      else low++;
  }

  return maxArea;
};
