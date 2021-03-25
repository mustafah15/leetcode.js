/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const memo = new Array(n + 1);

    memo.fill(-1);
    for(let i = 0; i <= n + 1; ++i) {
        memo[i] = new Array(n + 1);
        memo[i].fill(-1);
    }


    const lis = function (pos, last) {

        if (pos == nums.length) {
            return 0;
        }


        if(memo[pos][last] && memo[pos][last] !== -1) {
            return memo[pos][last];
        }

        const leave = lis(pos + 1, last);

        let pick;

        if(nums[pos] > nums[last]) {
            pick = lis(pos + 1, pos) + 1;
        } else {
            pick = 0;
        }

        memo[pos][last] = Math.max(leave, pick);

        return memo[pos][last];
    }


    nums.unshift(-100030);


    const result = lis(0,0);


    return result;
};

