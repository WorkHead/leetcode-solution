/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    const result = [];
    
    return traversal(root, result);
};

function traversal(node, result) {
    if (!node) return result;
    if (node.left) {
        traversal(node.left, result)
    }

    result.push(node.val)

    if (node.right) {
        traversal(node.right, result)
    }

    return result;
}