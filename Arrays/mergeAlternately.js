/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let result = '';

  let biggestword = 0;

  if(word1.length > word2.length) {
      biggestword = word1.length;
  } else if( word2.length > word1.length ) {
      biggestword = word2.length;
  } else {
      biggestword = word1.length;
  }

  for(let i = 0; i < biggestword; i++) 
  {
      let str1 = word1[i] ?? '';
      let str2 = word2[i] ?? '';

      result +=  str1 + str2;
  }
  
  return result;
};
