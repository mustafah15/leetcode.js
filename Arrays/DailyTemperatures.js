/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const stack = [];
    const answer = [];
    
    for(let i = T.length - 1; i >= 0; --i) {
        while (stack.length !== 0 && T[i] >= T[stack[stack.length - 1]]){ 
            stack.pop();
        }
        answer[i] = stack.length == 0 ? 0 : stack[stack.length - 1] - i;
        stack.push(i);
    }
    
    return answer;
};
