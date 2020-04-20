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

const _dfsTraverse = (node, visited = []) => {
    if(node) {
        if(node.left) _dfsTraverse(node.left, visited);
       visited.push(node.val);
       if(node.right) _dfsTraverse(node.right, visited);
    }        
}

var inorderTraversal = function(root) {
    const visited = [];
   _dfsTraverse(root, visited);
   
   return visited;
};
