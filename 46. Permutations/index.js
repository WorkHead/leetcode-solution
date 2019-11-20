const permute = function(nums) {
    if (nums.length === 1) return [nums];
    return helper([], nums, []);
};

function helper(list, remainList, allLists) {
    if (remainList.length === 1) {
        allLists.push(list.concat(remainList));
        return;
    } else {
        for (let i = 0; i < remainList.length; i++) {
            helper(list.concat(remainList[i]), remainList.filter((item, index) => (index !== i)), allLists);
        }
    }

    return allLists;
}