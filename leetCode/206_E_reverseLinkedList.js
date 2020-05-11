
/*
Reverse a singly linked list.

Example:

    Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL
    
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
// Reverse a linked list iteratively
// O(n) time, O(1) space
var reverseList = function(head) {
    var prevNode = null;

    while(head !== null) {
        var nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    
    return prevNode;
}; 
 
// Reverse a linked list RECURSIVELY
// O(n) time, O(n) space
/*var reverseList = function(head) {
    return reverseListNode(head, null);
};

function reverseListNode(currentNode, prevNode) {
    if(currentNode == null) {
        return prevNode;
    }
    var nextNode = currentNode.next;
    currentNode.next = prevNode;
    return reverseListNode(nextNode, currentNode);
}*/