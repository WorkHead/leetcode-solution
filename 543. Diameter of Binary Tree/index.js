const depth = function(node, result) {
    if (!node) return 0;
    
    const leftDepth = depth(node.left, result);
    const rightDepth = depth(node.right, result);
    
    result.val = Math.max(leftDepth + rightDepth + 1, result.val);
    
    return Math.max(leftDepth, rightDepth) + 1;
}
const diameterOfBinaryTree = function(root) {
    const result = { val: 1 };
    depth(root, result);
    return result.val - 1;
};