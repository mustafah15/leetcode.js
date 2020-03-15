/**
 * @param {number} n
 * @return {string[]}
 */

const getParenthesis = (outputArray, currentString, open, close, max) => {
    if(currentString.length === max * 2) {
        outputArray.push(currentString);
        return ;
    }
    
    if(open < max) getParenthesis(outputArray, currentString+"(", open + 1, close, max);
    if(open > close) getParenthesis(outputArray, currentString+")", open, close + 1, max);
}

var generateParenthesis = function(n) {
    const output = [];
    getParenthesis(output, "", 0, 0, n);
    return output;
};
