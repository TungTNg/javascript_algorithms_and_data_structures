// piece of data - val

// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    // This function should accept a value
    // Create a new node using the value passed to the function
    // If there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise set the property on the tail to be the new node and set the tail property on the list to be the newly created node
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }
    
    // If there are no nodes in the list, return undefined
    // Loop through the list until you reach the tail
    // Set the next property of the 2nd to last node to be null
    // Set the tail to be the 2nd to last node
    // Decrement the length of the list by 1
    // Return the value of the node removed
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    
    // If there is no nodes, return undefined
    // Store the current head property in a variable
    // Set the head property to be the current head's next property
    // Decrement the length by 1
    // Return the value of the node removed
    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    
    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
    
}

// var first = new Node("Hi");
// first.next = new Node("there, ");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are you?");

var list = new SinglyLinkedList();
list.push("HELLO");
// list.push("YOU");
// list.push("THERE");
list.shift();
// list.pop();
// list.pop();
// list.pop();
console.log(list);