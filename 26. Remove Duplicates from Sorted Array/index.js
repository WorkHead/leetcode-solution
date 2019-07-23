const removeDuplicates = function(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            count++;
            nums[count] = nums[i + 1]
        }
    }
    
    return count;
};