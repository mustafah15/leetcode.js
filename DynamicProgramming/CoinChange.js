/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
    const n = coins.length;

    var memo = new Array(n+1);

    for (var i = 0; i < memo.length; i++) {
        memo[i] = new Array(amount+1);
        memo[i].fill(-1);
    }


    var solve = function(rem, position) {


        if(rem == 0) {
            return 0;
        }

        if(position == coins.length) {
            return 999999;
        }

        if(memo[position][rem] > -1){
            return memo[position][rem]
        }

        if(rem >= coins[position]) {
            memo[position][rem] = Math.min((solve(rem - coins[position], position) + 1), solve(rem, position + 1));
        } else {
            memo[position][rem] = solve(rem, position + 1);
        }


        return memo[position][rem]

    };



    const solution = solve(amount, 0);

    return solution <= 99999 ? solution : -1;
};

