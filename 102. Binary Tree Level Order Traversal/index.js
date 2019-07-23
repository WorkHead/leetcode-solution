/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    const result = [];

    return traversal(root, 0, result);
};

function traversal(node, deep, result) {
    if (!node) return result;
    if (!result[deep]) result[deep] = [];

    result[deep].push(node.val);

    traversal(node.left, deep + 1, result)
    traversal(node.right, deep + 1, result)

    return result;
}