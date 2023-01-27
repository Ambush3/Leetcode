var swapPairs = function (head) {
    let dummy = new ListNode();
    dummy.next = head;
    let current = dummy;
    while (current.next != null && current.next.next != null) {
        let firstNode = current.next;
        let secondNode = current.next.next;
        firstNode.next = secondNode.next;
        current.next = secondNode;
        current.next.next = firstNode;
        current = current.next.next;
    }
    return dummy.next
};