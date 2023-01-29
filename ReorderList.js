var reorderList = function (head) {
    if (!head || !head.next) return head;

    // find the middle of the list
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half of the list
    let prev = null, curr = slow;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // reorder the list by interleaving the first and second halves
    let first = head, second = prev;
    while (second.next) {
        let next = first.next;
        first.next = second;
        first = next;

        next = second.next;
        second.next = first;
        second = next;
    }
};