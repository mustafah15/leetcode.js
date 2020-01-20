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
var zigzagLevelOrder = function(root) {
    let node = root;
    let treeLevel = 1;
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
        if((treeLevel)%2)
            visited.push(level);
        else
            visited.push(level.reverse());
        treeLevel++;
    }
    return visited;

};