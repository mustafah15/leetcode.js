/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const wordsArray = s.split(' ').filter(Boolean);
    const resultArray = wordsArray.reverse();
    
    return resultArray.join(' ');
};
