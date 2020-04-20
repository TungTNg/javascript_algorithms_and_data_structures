// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var resultDummyHead = new ListNode();
    var resultCurrentNode = resultDummyHead;
    
    var p1 = l1;
    var p2 = l2;
    
    var carryOver = false;
    
    while(p1 != null || p2 !=null) {
        
        var sum;
        
        if(p1 == null) {
            sum = p2.val;
            p2 = p2.next;
        } else if(p2 == null) {
            sum = p1.val;
            p1 = p1.next;
        } else {
            sum = p1.val + p2.val;
            p1 = p1.next;
            p2 = p2.next;
        }
        
        if(carryOver) {
            sum++;
        }
        
        if(sum >= 10) {
            sum %= 10;
            carryOver = true;
        } else {
            carryOver = false;
        }
        
        resultCurrentNode.next = new ListNode(sum);
        resultCurrentNode = resultCurrentNode.next;
    }
    
    if(carryOver) {
        resultCurrentNode.next = new ListNode(1);
        resultCurrentNode = resultCurrentNode.next;
    }
    
    return resultDummyHead.next;
};

function test() {
    var l1  = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);
    
    var l2  = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);
    
    var result = addTwoNumbers(l1, l2);
    
    while (result != null) {
        console.log(result.val);
        result = result.next;
    }
    
}

test();