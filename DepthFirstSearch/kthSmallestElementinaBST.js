/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

const _dfsTraverse = (node, visited, k) => {
    if(node == null || visited.length > k) return;

    if(node.left) _dfsTraverse(node.left, visited, k);
    
    visited.push(node.val);
    
    if(node.right) _dfsTraverse(node.right, visited, k);
}

var kthSmallest = function(root, k) {
    const nums = [];
    
    _dfsTraverse(root, nums, k);

    return nums[k-1];
};
