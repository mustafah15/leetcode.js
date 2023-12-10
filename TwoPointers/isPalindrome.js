/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const clean = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  for(let i = 0; i < clean.length; i++) {
      if(clean[i] !== clean[clean.length -i -1 ]) {
          return false;
      }
  }

  return true;
};
