/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const path = [];

    dfs(target, 0);

    return result;

    function dfs(target, index) {

        //base case
        if(target == 0) {
            result.push([...path]);
            return;
        }

        for(let i= index; i< candidates.length; i++) {
            if(candidates[i] > target)
                continue;

            // do
            path.push(candidates[i]);

            //recurse
            dfs(target - candidates[i], i);

            // undo
            path.pop();
        }
    }
};