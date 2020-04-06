/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {};
    const temp = []
    for(let i = 0; i < strs.length;  i++) {
        const x = strs[i].split("");
        temp[i] = x.sort().join("");
    }

    for(let i = 0; i < strs.length; i++) {
        if(!result[temp[i]]) {
            result[temp[i]] = [strs[i]];
        } else {
            result[temp[i]].push(strs[i]);
        }
    }
    
    return Object.values(result);
};
