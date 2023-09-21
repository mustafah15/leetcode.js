/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */


const clone = (node, map) => {
    if (!node) return null;
    if (map[node.val]) return map[node.val];  
  
    const cloneNode = new Node(node.val);
  
    map[node.val] = cloneNode;
  
    for (let i = 0; i < node.neighbors.length; i++) {
      cloneNode.neighbors.push(clone(node.neighbors[i], map));
    }
  
    return cloneNode;
};

var cloneGraph = function(node) {
return clone(node, {});
};
