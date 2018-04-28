/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let high = nums.length - 1;
    let low = 0;
    
    while(high > low) {
        let mid = parseInt((high + low) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            hight = mid;
        } else {
            low = mid;
        }
    }
    
    return 0
};