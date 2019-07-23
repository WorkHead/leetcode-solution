const missingNumber = function(nums) {
    return ((0 + nums.length) * (nums.length + 1))/2 - nums.reduce((pre, cur) => (pre + cur), 0);
};