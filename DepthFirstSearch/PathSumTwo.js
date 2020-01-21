// 113 path sum || 
var backtrack = function(root, sum, res, current) {
    if(root == null) return null;
    if(root.val == sum && root.left == null && root.right == null) {
        res.push([...current, root.val]);
        return;
    }
    current.push(root.val);
    backtrack(root.left, sum - root.val, res, current);
    backtrack(root.right, sum - root.val, res, current);
    current.pop();
}

var pathSum = function(root, sum) {
  if (root === null) return [];
  const res = [];
    
  backtrack(root, sum, res, []);
    
  return res;
};
