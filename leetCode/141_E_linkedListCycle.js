// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

//  Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head == null) return false;
    
    var slow = head;
    var fast = head;
    
    while(fast && fast.next) {        
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) return true;
    }
    
    return false;
}; 

function test() {
    var sampleList1 = new ListNode(1);
    sampleList1.next = new ListNode(2);
    sampleList1.next.next = new ListNode(3);
    sampleList1.next.next.next = sampleList1.next;
    
    console.log(hasCycle(sampleList1));
    
    var sampleList2 = new ListNode(1);
    sampleList2.next = new ListNode(2);
    sampleList2.next.next = new ListNode(3);

    console.log(hasCycle(sampleList2));
}

test();