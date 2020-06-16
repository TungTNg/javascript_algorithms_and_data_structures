class Node {
    constructor(key, val) {
        this.key = key ? key : null;
        this.val = val ? val : null;
        this.next = null;
        this.prev = null;
    }
}

var LRUCache = function(capacity) {
    this.map = {};
    this.size = 0;
    this.capacity = capacity;
    this.head = new Node();
    this.tail = new Node()
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

function disconnectNode(currentNode) {
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
}

function insertNodeBeforeTail(currentNode, tailNode) {
    currentNode.next = tailNode;
    currentNode.prev = tailNode.prev;
    tailNode.prev.next = currentNode;
    tailNode.prev = currentNode;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!(key in this.map)) {
        return -1;
    } else {
        disconnectNode(this.map[key]);
        insertNodeBeforeTail(this.map[key], this.tail);
        return this.map[key].val;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!(key in this.map)) {
        this.map[key] = new Node(key, value);
        this.size++;
    } else {
        disconnectNode(this.map[key]);
        this.map[key].val = value;
    }
    insertNodeBeforeTail(this.map[key], this.tail);
    if(this.size > this.capacity) {
        delete this.map[this.head.next.key];
        disconnectNode(this.head.next);
        this.size--;
    }
};