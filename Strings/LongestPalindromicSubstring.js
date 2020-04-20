/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length == 0) return "";
    if(s.length == 1) return s;
    let start = 0;
    let end = 0;
    let len = 0;
    
    for(let i = 0; i < s.length; i++) {
        let len1 = expandFromTheMiddle(s, i, i);
        let len2 = expandFromTheMiddle(s, i, i + 1);
        len = Math.max(len1, len2);
        if(len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.slice(start, end + 1);
};

const expandFromTheMiddle = (str, left, right) => {
    if(!str || left > right) return 0;
    
    
    while(left >= 0 && right < str.length && str.charAt(left) === str.charAt(right)) {
        left--;
        right++;
    }
    
    return right - left - 1;
}
