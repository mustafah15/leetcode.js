/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const cleanString = (str) => {    
    while(str.indexOf('#') !== -1) {
        let index = str.indexOf('#');
        str = str.slice(0, index ? index - 1: index ) + str.slice(index + 1);
    }
    
    return str;
}

var backspaceCompare = function(S, T) {
    return (cleanString(S) == cleanString(T))
};
