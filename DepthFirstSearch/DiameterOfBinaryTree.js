/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

let max;
var diameterOfBinaryTree = function(root) {
    max=0;
    dfs(root);
    return max;
};

function dfs(node)
{
    if(node === null)
    {
        return 0;
    }
    let left = dfs(node.left);
    let right = dfs(node.right);
    
    max = Math.max(max,left + right);
    return Math.max(left, right) + 1;
}
