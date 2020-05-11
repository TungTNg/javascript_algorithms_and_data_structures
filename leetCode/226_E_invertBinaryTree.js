/*
Invert a binary tree.

Example:

Input:

         4
       /   \
      2     7
     / \   / \
    1   3 6   9
Output:

         4
       /   \
      7     2
     / \   / \
    9   6 3   1
*/

function TreeNode(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
}

var invertTree = function(root) {
    if(root == null) return null;
    
    var tempLeft = root.left;
    root.left = root.right;
    root.right = tempLeft;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};

function test(){
    var leftChild = new TreeNode(2, 1, 3);
    var rightChild = new TreeNode(7, 6, 9);
    var tree = new TreeNode(4, leftChild, rightChild);
    return invertTree(tree);
}

console.log(test());