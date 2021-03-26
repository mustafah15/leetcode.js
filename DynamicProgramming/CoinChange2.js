/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const n = coins.length;

    var memo = new Array(n+1);

    for (var i = 0; i < memo.length; i++) {
        memo[i] = new Array(amount+1);
        memo[i].fill(-1);
    }


    var solve = function(rem, position) {
        if(rem == 0) {
            return 1;
        }
        if(position == coins.length) {
            return 0;
        }

        if(memo[position][rem] > -1){
            return memo[position][rem]
        }
        if(rem >= coins[position]) {
            memo[position][rem] = solve(rem - coins[position], position)  + solve(rem, position + 1)
        } else {
            memo[position][rem] = solve(rem, position + 1);
        }

        return memo[position][rem]
    };



    return solve(amount, 0);

};