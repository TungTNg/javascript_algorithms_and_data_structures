class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    // Create a new node
    // Start at the root
        // Check if there is a root, if not - the root now becomes that new node!
        // If there is a root, check if the value of the new node is greater than or less than the value of the root
        // If it is greater
            // Check to see if there is a node to the right
                // If there is, move to the node and repeat these steps
                // If there is not, add that node as the right property
        // If it is less
            // Check to see if there is a node to the left
                // If there is, move to that node than repeat these steps
                // If there is not, add that node as the left property
    insert(val) {
        var newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(val == current.val) return undefined;
                if(val < current.val) {
                    if(!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(val > current.val) {
                    if(!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
}

//          10
//      5       13
//    2   7   11  16

var tree                    = new BinarySearchTree();
tree.insert(10);

console.log(tree);