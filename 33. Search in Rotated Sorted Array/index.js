/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const len = nums.length;
    let low = 0;
    let high = len - 1;
    
    // 边缘情况
    if (nums.length === 1) return nums[0] === target ? 0 : -1;

    while (low < high) {
        let mid = parseInt((low + high) / 2);
        if (nums[mid] === target) return mid;
        if (nums[high] === target) return high;
        if (nums[low] === target) return low;
        if (nums[mid] > nums[low]) {
            // 左边升序
            if (nums[low] < target && target < nums[mid]) {
                high = mid;
            } else {
                low = mid + 1;
            }
        } else {
            // 右边升序
            if (nums[mid] < target && target < nums[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
    }
    return -1;
};