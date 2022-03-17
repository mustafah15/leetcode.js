/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  const options = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  
  let len = digits.length, ans = []
  if (!len) return []
  const bfs = (pos, str) => {
      if (pos === len) ans.push(str)
      else {
          let letters = options[digits[pos]]
          for (let i = 0; i < letters.length; i++)
              bfs(pos+1,str+letters[i])
      }
  }
  bfs(0,"")
  return ans
};
