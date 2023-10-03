/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const minLen = Math.min(len1, len2);

  const isDivisor = (l) => {
      if(len1 % l || len2 %l)
      {
          return false;
      }

      let f1 = len1 / l;
      let f2 = len2 / l;
      return (
          str1.substring(0, l).repeat(f1) === str1 && 
          str1.substring(0, l).repeat(f2) === str2
      )
  }

  for(let l = minLen; l > 0; l--) {
      if(isDivisor(l)) {
          return str1.substring(0,l);
      }
  }

  return "";
};
