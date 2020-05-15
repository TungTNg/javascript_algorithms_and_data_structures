class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var l1 = new Node(1);
var l2 = l1;

l1.next = new Node(2);

console.log(l2);