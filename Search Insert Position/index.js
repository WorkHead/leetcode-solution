/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let high = nums.length - 1;
    let low = 0;
    
    while(high >= low) {
        let mid = parseInt((high + low) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return low;
};

searchInsert([1, 2, 4, 5], 3)