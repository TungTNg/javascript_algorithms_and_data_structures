// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


function ListNode(val) {
    this.val = val;
    this.next = null;
} 

// var mergeTwoLists = function(l1, l2) {
//     var resultDummyHead = new ListNode();
//     var resultCurrentHead = resultDummyHead;
    
//     var p1 = l1;
//     var p2 = l2;
    
//     while(p1 !== null & p2 !== null) {
//         if(p1.val < p2.val) {
//             resultCurrentHead.next = new ListNode(p1.val);
//             p1 = p1.next;
//         } else {
//             resultCurrentHead.next = new ListNode(p2.val);
//             p2 = p2.next;
//         }
//         resultCurrentHead = resultCurrentHead.next;
//     }
    
//     while(p1 !== null) {
//         resultCurrentHead.next = new ListNode(p1.val);
//         resultCurrentHead = resultCurrentHead.next;
//         p1 = p1.next;
//     }
    
//     while(p2 !== null) {
//         resultCurrentHead.next = new ListNode(p2.val);
//         resultCurrentHead = resultCurrentHead.next;
//         p2 = p2.next;
//     }
    
//     return resultDummyHead.next;
// };

var mergeTwoLists = function(l1, l2) {
    var dummyHead = new ListNode();
    var current = dummyHead;
    
    while(l1 !== null && l2 !==null) {
        if(l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    while(l1 !== null) {
        current.next = l1;
        current = current.next;
        l1 = l1.next;
    }
    
    while(l2 !== null) {
        current.next = l2;
        current = current.next;
        l2 = l2.next;
    }
    
    return dummyHead.next;
};

function test() {
    var l1 = new ListNode(1);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(6);
    
    var l2 = new ListNode(2);
    l2.next = new ListNode(3);
    l2.next.next = new ListNode(5);
    
    mergeTwoLists(l1, l2);
    
    console.log(l1);
    console.log(l2);
}

test();