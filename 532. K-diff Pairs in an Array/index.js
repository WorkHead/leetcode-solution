const findPairs = function(nums, k) {
    const arr = [];
    let count = 0;
    
    if (k < 0) return 0;
    
    for (let i = 0; i < nums.length; i++) {
        const arrIndex = arr.indexOf(nums[i]);
        const numsIndex = nums.indexOf(nums[i] + k);
        if (arrIndex === -1 && numsIndex > -1 && numsIndex !== i) {
            count++;
            arr.push(nums[i])
        }
    }
    
    return count;
};