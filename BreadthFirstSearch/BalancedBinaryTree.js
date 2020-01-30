
var maxDepth = function(root) {
    if(root == null) return 0;
    
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

   
var isBalanced = function(root) {
    if(root === null) return true;
    
    let leftlevel = 0;
    let rightlevel = 0;
    if(root.left) leftlevel = maxDepth(root.left);
    if(root.right) rightlevel = maxDepth(root.right);

    return Math.abs(leftlevel - rightlevel) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};
