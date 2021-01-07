/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    nums.sort((a,b) => a-b);
    const result = [];
    const path = [];
    const visited = [];

    dfs();


    return result;

    function dfs() {
        //base case
        if(path.length == nums.length) {
            result.push([...path]);
            return;
        }
        for(let i= 0; i< nums.length; i++) {
            if (
                visited.includes(i) ||
                (i > 0 && nums[i] == nums[i - 1] && visited.includes(i - 1))
            )  {
                continue;
            }
            // do
            path.push(nums[i]);
            visited.push(i);
            //recurse
            dfs();
            // undo
            path.pop();
            visited.pop();
        }

    }

};

