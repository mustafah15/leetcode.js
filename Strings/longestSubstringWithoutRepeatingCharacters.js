/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let max = 0;
    let map = [];
    
    while(end < s.length) {
        if(!map.includes(s.charAt(end))) {
            map.push(s.charAt(end));
            end++;
            max = Math.max(max, map.length);
        } else {
            map.shift();
            start++;
        }
    }
    
    return max;
};
