function ListNode(val) {
    this.val = val;
    this.next = null;
}

class Heap {
    constructor(comparator) {
        this.data = [];
        this.comparator = comparator || ((parent, child) => parent - child);
    }

    get size() {
        return this.data.length;
    }

    bubbleUp(c) {
        if (c === 0) return;
        const p = Math.floor((c + 1) / 2) - 1;
        if (this.comparator(this.data[p], this.data[c]) > 0) {
            [this.data[p], this.data[c]] = [this.data[c], this.data[p]];
        }
        this.bubbleUp(p);
    }

    bubbleDown(p) {
        const c = 2 * (p + 1) - 1;
        if (c >= this.data.length) return;

        const leftDelta = this.comparator(this.data[p], this.data[c]);
        const rightDelta = c + 1 >= this.data.length ? 0 : this.comparator(this.data[p], this.data[c + 1]);
        if (leftDelta <= 0 && rightDelta <= 0) return;

        const swapChildIndex = c + (leftDelta <= rightDelta);
        [this.data[p], this.data[swapChildIndex]] = [this.data[swapChildIndex], this.data[p]];
        this.bubbleDown(swapChildIndex);
    }

    add(val) {
        this.data.push(val);
        this.bubbleUp(this.data.length - 1);
    }

    poll() {
        if (this.size == 1) return this.data.pop();
        [this.data[0], this.data[this.size - 1]] = [this.data[this.size - 1], this.data[0]];
        const val = this.data.pop();
        this.bubbleDown(0);
        return val;
    }
}

var mergeKLists = function(lists) {
    if (!lists.length) return null;
    
    const minHeap = new Heap((parent, child) => parent.val - child.val);
    for (let node of lists) {
        if (node) minHeap.add(node);
    }
    
    const dummy = new ListNode();
    let tail = dummy;
    while (minHeap.size) {
        tail.next = minHeap.poll();
        tail = tail.next;
        if (tail.next) minHeap.add(tail.next);
    }
    
    return dummy.next;
};

var l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

var l2 = new ListNode(0);
l2.next = new ListNode(2);
l2.next.next = new ListNode(2);

var l3 = new ListNode(3);
l3.next = new ListNode(6);
l3.next.next = new ListNode(8);

var arr = [l1, l2, l3]

console.log(mergeKLists(arr));