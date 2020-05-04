/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const sortIntevals = (arrays) => {
    return arrays.sort((a, b) => {
        if(a[0] < b[0]) {
            return -1;
        } else if(a[0] > b[0]) {
            return 1;
        } else if(a[0] == b[0]) {
            a[1] < b[1] ? -1: 1;
        }
    }); 
};

var merge = function(intervals) {
    const result = [];
    const sorted = sortIntevals(intervals);
    for(let i = 1; i <= sorted.length; i++) {
        if(sorted[i] && sorted[i][0] <= sorted[i-1][1]) {
            

            const end = sorted[i][1] > sorted[i-1][1] ? sorted[i][1] : sorted[i-1][1];
            const start = sorted[i][0] < sorted[i-1][0] ? sorted[i][0] : sorted[i-1][0];
                  
            sorted[i] = [start, end]
        } else {
            result.push(sorted[i -1]);
        }
    }
    
    return result
};
