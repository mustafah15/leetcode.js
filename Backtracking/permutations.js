/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const generateAllPermutations = (runningChoices, originalArray, allPermutations) => {
    if(runningChoices.length == originalArray.length) {
        allPermutations.push(Array.from(runningChoices));
        return;
    }
    for(let i = 0; i < originalArray.length; i++) {
        const choice = originalArray[i];

        if(!runningChoices.includes(choice)) {
            runningChoices.push(choice);

            generateAllPermutations(runningChoices, originalArray, allPermutations);

            runningChoices.pop();
        }
    }
}

var permute = function(nums) {
    const result = [];
    
    generateAllPermutations([], nums, result);
    
    return result;
};
