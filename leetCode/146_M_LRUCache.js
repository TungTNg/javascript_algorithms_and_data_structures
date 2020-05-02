// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

/*******************
* LRU Cache = two data structures to manage the elements. 
* Map: used to store elements in the list
* Double Linked List: used to keep track of the ordering when performing operations
* A doubly-linked list and a map gives us the following:
* Time complexity: O(1)
* Space complexity: O(n)
* This is achieved by having the doubly-linked list manage when we have to rearrange the elements while the map gives us direct 
* access to the resource. Look-up in a map is O(1) by providing the key. 
* We introduce the concept of 
* - the “head”, which is the least recently used entry, 
* - the “tail”, which is the most recently used entry, 
* to keep track of the order when elements are retrieved or added. 
* There are two pointers per node which is relatively low cost to manage the ordering.
*******************/
// var LRUCache = function(capacity) {
//   this.capacity = capacity; 
//   this.map = {}; //this stores the whole array
//   this.size = 0;
//   //boundaries for double LL
//   this.head = {}; 
//   this.tail = {};
//   this.head.next = this.tail; //initialize double LL
//   this.tail.prev = this.head;
// };

/** 
 * @param {number} key
 * @return {number}
 */
// LRUCache.prototype.get = function(key) {
//   if(key in this.map){
//     //remove elem from current position
//     let c = this.map[key];
//     c.prev.next = c.next;
//     c.next.prev = c.prev;

//     this.tail.prev.next = c; //insert it after the last element (elem before tail) since we just used it
//     c.prev = this.tail.prev; //update c.prev and next pointer
//     c.next = this.tail;
//     this.tail.prev = c; //update last element as tail
//     return c.value;
//   } else {
//     return -1; //element does not exist
//   }
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
//   if(this.get(key) !== -1){ //key does exist, remove key current position & & move key to last element & update value 
//     this.tail.prev.value = value; 
//   } else {
//     //need to check if map size is at capacity
//     if(this.size === this.capacity) { 
//       //delete item both from map and DLL
//       delete this.map[this.head.next.key]; //delete first element of list
//       this.head.next = this.head.next.next; //update first element as next element
//       this.head.next.prev = this.head; 
//       this.size--;
//     }

//     let newNode = {
//       value, 
//       key
//     }; //each node is a hashtable that stores key and value 
    
    
//     //When adding a new node, we need to update both map and DLL
//     this.map[key] = newNode; //add current node to map 
//     this.tail.prev.next = newNode; //add node to end of the list
//     newNode.prev = this.tail.prev; //update prev and next pointers of newNode
//     newNode.next = this.tail;
//     this.tail.prev = newNode; //update last element
//     this.size++;  
//   }
// };

// Linked List and HashMap
// /**
// * @param {number} capacity
// */

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.map = {};
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

function insertNodeBeforeTail(node, tailNode) {
  node.next = tailNode;
  node.prev = tailNode.prev;
  tailNode.prev.next = node;
  tailNode.prev = node;
}

function disconnectNode(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
}

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (!(key in this.map)) {
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
  if (!(key in this.map)) {
    this.map[key] = new Node(key, value);
    this.size += 1;
  } else {
    this.map[key].val = value;
    disconnectNode(this.map[key]);
  }
  insertNodeBeforeTail(this.map[key], this.tail);
  if (this.size > this.capacity) {
    delete this.map[this.head.next.key];
    this.size -= 1;
    disconnectNode(this.head.next);
  }
};

// /**
// * Your LRUCache object will be instantiated and called as such:
// * var obj = new LRUCache(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */

// Map
// Thanks to https://leetcode.com/problems/lru-cache/discuss/399146/Clean-JavaScript-solution

// /**
// * @param {number} capacity
// */
// var LRUCache = function(capacity) {
//   this.capacity = capacity;
//   this.map = new Map();
// };

// /**
// * @param {number} key
// * @return {number}
// */
// LRUCache.prototype.get = function(key) {
//   if (!this.map.has(key)) {
//     return -1;
//   }
//   const val = this.map.get(key);
//   this.map.delete(key);
//   this.map.set(key, val);
//   return val;
// };

// /**
// * @param {number} key
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
//   this.map.delete(key);
//   this.map.set(key, value);
//   if (this.map.size > this.capacity) {
//     this.map.delete(this.map.keys().next().value);
//   }
// };

// /**
// * Your LRUCache object will be instantiated and called as such:
// * var obj = new LRUCache(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */
