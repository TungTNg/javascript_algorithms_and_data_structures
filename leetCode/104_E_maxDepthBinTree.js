/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7
   
return its depth = 3.
*/
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var maxDepth = function(root) {
    if(root == null) return 0;
    
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    
    return Math.max(left, right) + 1;
};

function test() {
    var rightChild = new TreeNode(20, 15, 7);
    var tree = new TreeNode(3, 9, rightChild);
    
    return maxDepth(tree);
}

console.log(test());