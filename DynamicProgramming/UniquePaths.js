/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = [];
     for (let i = 0; i < m + 1; i++) {
       dp[i] = [];
       dp[i][0] = 1;
     }
     for (let i = 0; i < n + 1; i++) {
       dp[0][i] = 1;
     }
       
     for (let row = 1; row < m + 1; row++) {
       for(let col = 1; col < n + 1; col++) {
           let uniqueWaysToAboveCell = dp[row - 1][col];
           let uniqueWaysToLeftCell = dp[row][col - 1];
           dp[row][col] = uniqueWaysToAboveCell + uniqueWaysToLeftCell;
       }
     }
   
     return dp[m-1][n-1];
   };
   