/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    const result = [];
    const path = [];

    recurse();

    return result;

    function recurse() {
        if(path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            const choice = nums[i];
            if(!path.includes(choice)) {
                //do
                path.push(choice);
                //recurse
                recurse();
                //undo
                path.pop();
            }
        }
    }
};
