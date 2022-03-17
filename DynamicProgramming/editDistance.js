/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

    var memo = new Array(word1.length+1);

    for (var i = 0; i < memo.length; i++) {
        memo[i] = new Array(word2.length+1);
        memo[i].fill(-1);
    }

    var solve = (pos1, pos2) => {
        if(pos1 >= word1.length) {
            return word2.length -  pos2;
        }

        if(pos2 >= word2.length) {
            return word1.length - pos1;
        }

        if(memo[pos1][pos2] !== -1) {
            return memo[pos1][pos2];
        }

        if(word1[pos1] !== word2[pos2]) {
            memo[pos1][pos2] = Math.min(
                //replace
                solve(pos1 + 1, pos2 + 1) + 1,
                //insert
                solve(pos1 + 1, pos2) + 1,
                //delete
                solve(pos1, pos2 + 1) + 1
            );

            return memo[pos1][pos2];
        }

        memo[pos1][pos2] = solve(pos1 +1, pos2 +1);

        return memo[pos1][pos2];
    }

    return solve(0, 0);

};