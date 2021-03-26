/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {

    const n = satisfaction.length;

    satisfaction.sort((a, b) => a - b);
    var memo = new Array(n+1)  ;

      for (var i = 0; i < memo.length; i++) {
        memo[i] = new Array(n+1);
        memo[i].fill(-1);
    }

    var solve = (pos, taken) => {

        if (pos>= satisfaction.length) {
            return 0;
        }

        if(memo[pos][taken]!= -1) {
            return memo[pos][taken];
        }

        memo[pos][taken] =  Math.max(
            solve(pos+1, taken +1) + (taken * satisfaction[pos]),
            solve(pos+1, taken),
        );

        return memo[pos][taken];
    }

    return solve(0, 1)
};
