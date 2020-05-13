/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7
return its minimum depth = 2.

*/
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Recursion DFS Solution
var minDepth = function(root) {
    if(root == null) return 0;
    
    var left = minDepth(root.left);
    var right = minDepth(root.right);
    
    if(root.left !== null & root.right !== null) {
        return Math.min(left, right) + 1;
    } else {
        return Math.max(left, right) + 1;
    }
    
};

// BFS Solution
/*
var minDepth = function(root) {
    if(root == null) return 0;
    
    var childrenNodes = [];
    childrenNodes.push(root);
    var depth = 0;
    
    while(childrenNodes.length > 0) {
        var newChildrenNodes = [];
        
        while(childrenNodes.length > 0) {
            var currentNode = childrenNodes.pop();
            
            if(currentNode.left == null & currentNode.right == null) {
                depth++;
                return depth;
            }
            
            if(currentNode.left !== null) {
                newChildrenNodes.push(currentNode.left);
            }
            
            if(currentNode.right !== null) {
                newChildrenNodes.push(currentNode.right);
            }
        }
        
        depth++;
        childrenNodes = newChildrenNodes;
    }
    
    return depth;
};
*/

function test() {
    var tree = new TreeNode(1, 2, null);
    
    return minDepth(tree);
}

console.log(test());