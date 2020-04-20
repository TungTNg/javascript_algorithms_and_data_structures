// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


function ListNode(val) {
    this.val = val;
    this.next = null;
} 

var mergeTwoLists = function(l1, l2) {
    var dummyHead = new ListNode();
    var current = dummyHead;
    
    while(l1 && l2) {
        if(l1.val > l2.val) {
            current.next = l2;
            l2 = l2.next;
        } else {
            current.next = l1;
            l1 = l1.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    
    return dummyHead.next;
};


console.log(mergeTwoLists([1,2,4], [1,3,4]));