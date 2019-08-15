const pathSum = function(root, sum) {
    if (!root) return [];
    
    const stack = [root];
    const result = [];
    let currentSum = root.val;
    let iterator = root;
    
    while (stack.length > 0) {
        if (iterator && iterator.left) iterator = iterator.left;
        else if (iterator && iterator.right) iterator = iterator.right;
        else {
            if (currentSum === sum) result.push(stack.map(item => item.val));
            
            while (1) {
                const popItem = stack.pop();
                
                if (stack.length === 0)  return result;
                
                currentSum -= popItem.val;

                if (stack[stack.length - 1].right && stack[stack.length - 1].right !== popItem){
                    iterator = stack[stack.length - 1].right;
                    break;
                }
            }
        }

        stack.push(iterator);
        currentSum += iterator.val;
    }
};