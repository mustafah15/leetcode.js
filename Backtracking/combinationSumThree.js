/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
  const path = [];
  const result = [];
  
  const dfs = (start, n) => {
     if(path.length == k) {
         if(n == 0) {
          result.push([...path]);               
         }
         return;
      }
      if(start == 10){
          return;
      }
      
      path.push(start);
      dfs(start + 1,  n - start);
      path.pop();
      dfs(start + 1, n);
  }
  
  dfs(1, n);
  
  return result;
};
