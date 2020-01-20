/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isMirror = function(node1, node2) {
    if(node1 === null && node2 === null) return true;
    if(node1 === null || node2 === null) return false;
    if(node1.val !== node2.val) return false;
    return (node1.val === node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left))
}

var isSymmetric = function(root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
};
