/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while(n>6){
        n.toString().split("").forEach(function(v,i){
            if(i == 0) n = 0;
            n += v*v;
        })
    }
    return n == 1;
};
