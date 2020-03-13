/**
 * @param {string} s
 * @return {number}
 */

const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function(s) {
    const stringArray = s.split('');
    let value = 0;
    for(let i = 0; i < stringArray.length; i++) {
        if(romanMap[stringArray[i]] < romanMap[stringArray[i+1]]) {
            value -= romanMap[stringArray[i]] ;
        } else {
            value += romanMap[stringArray[i]] ;
        }
    }
    
    return value;
};
