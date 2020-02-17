/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const items = [];
    
    for(let i = 0; i < nums.length; i++) {

        if(!items.includes(nums[i]))
        {
            items.push(nums[i]);
        } else {
            let indx = items.indexOf(nums[i]);
            items.splice(indx, 1);
        }
    }
    
    return items;    
};
