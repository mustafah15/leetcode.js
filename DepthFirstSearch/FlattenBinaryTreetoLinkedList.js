/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}



var flatten = function(root) {
  var stack = [];
  var node = root;
  
  while(stack.length > 0 || node !== null) {
      if(node.right) stack.push(node.right);
      
      if(node.left !== null) {
          node.right = node.left;
          node.left = null;
      } else if(stack.length > 0) {
          let newNode = stack.pop();
          node.right = newNode;
      }
      
      node = node.right;
  }
};

