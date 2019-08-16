const pivotIndex = function(nums) {
    if (nums.length === 0) return -1;
    const sum = nums.reduce((pre, cur) => pre + cur);
    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (sum - 2 * currentSum === nums[i]) return i;
        currentSum += nums[i];
    }
        
    return -1;
};