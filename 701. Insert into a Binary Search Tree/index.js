const insertIntoBST = function(root, val) {
    let iterator = root;
    
    while (1) {
        if (val > iterator.val) {
            if (iterator.right) {
                iterator = iterator.right;
            } else {
                iterator.right = new TreeNode(val);
                console.log(iterator.right)
                break;
            }
        } else {
            if (iterator.left) {
                iterator = iterator.left;
            } else {
                iterator.left = new TreeNode(val);
                break;
            }   
        }
    }
    
    return root;
};