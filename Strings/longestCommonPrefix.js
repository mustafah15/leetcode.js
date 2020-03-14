/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0 ) return "";
    let prefix = strs[0];
    for (const item of strs) {
        while(item.indexOf(prefix)) {
            prefix = prefix.substring(0, prefix.length -1);
        }
    }
    
    return prefix; 
};
