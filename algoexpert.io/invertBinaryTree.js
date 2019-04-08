function invertBinaryTree(tree) {
    // Write your code here.
    if(tree == null) return;
    
    var tempLeftBranch = tree.left;
    tree.left = tree.right;
    tree.right = tempLeftBranch;
    
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}
