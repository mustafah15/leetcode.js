var _ = require('lodash');

var _dfsTraverse = function(node, visited = []) {
    if(node) visited.push(node.val); else {visited.push(null); return;}
        _dfsTraverse(node.left, visited); 
        _dfsTraverse(node.right, visited);
}
   

var isSameTree = function(p, q) {
    const result1 = [];
    const result2 = [];
    _dfsTraverse(p, result1);
    _dfsTraverse(q, result2);
    return _.isEqual(result1, result2);
};
