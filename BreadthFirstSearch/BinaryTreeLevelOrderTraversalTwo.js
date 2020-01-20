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
var levelOrderBottom = function(root) {
    let node = root;
    const queue= [];
    const visited = [];
    if(node === null) return visited;
    queue.push(node);
    while(queue.length > 0) {
        let level = [];
        let num = queue.length;
        for(let i=0; i < num; i++) {
            node = queue.shift();
            level.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        visited.unshift(level);
    }
    return visited;

};
