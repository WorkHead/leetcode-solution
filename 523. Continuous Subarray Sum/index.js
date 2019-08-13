const checkSubarraySum = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];

            if (sum === 0) return true;
            if (sum % k === 0 && j - i >= 1) return true;
        }
    }
    
    return false;
};