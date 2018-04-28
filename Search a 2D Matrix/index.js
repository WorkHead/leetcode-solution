/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const len = matrix.length;
    let low = 0;
    let high = len - 1;
        
    // 最终结果出现在哪一行
    let targetIndex = -1;
    
    // 处理边界情况
    // 如果martrix长度是0，直接返回false
    if (len === 0) return false;

    // 如果结果比第一行的第一个元素还要小，那就一定不存在
    if (matrix[low][0] > target) return false;
    
    // 如果结果比最后一行的第一个元素大的话就说明目标一定出现在最后一行，或者不存在
    if (matrix[high][0] <= target) {
        targetIndex = high;
    }
    
    // 二分法找到在哪一行
    while (high >= low) {
        let mid = parseInt((high + low) / 2);
        
        if (matrix[mid][0] === target) {
            return true;
        } else if (matrix[mid][0] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    // targetIndex没被赋值，此时定位到某一行
    if (targetIndex === -1) {
        targetIndex = high;
    }
    
    // 最后在目标行内查找
    return !!(~matrix[targetIndex].indexOf(target))
};