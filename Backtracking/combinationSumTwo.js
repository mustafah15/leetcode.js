/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    const path = [];

    candidates.sort((a, b) => a - b);

    dfs(target, 0);

    return result;

    function dfs(target, index) {

        //base case
        if (target == 0) {
            result.push([...path]);
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] > target) {
                continue;
            }

            if (i > index && candidates[i] == candidates[i - 1]) {
                continue;
            }

            // do
            path.push(candidates[i]);

            //recurse
            dfs(target - candidates[i], i + 1);

            // undo
            path.pop();
        }

    }
};
