// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

function removeElements (head, val) {
    let dummyHead = new ListNode(-1); // create a dummy head to avoid the case when the head is the node to be removed
    dummyHead.next = head; // point the dummy head to the head
    let prev = dummyHead; // create a prev pointer to point to the dummy head

    while (prev.next !== null) { // while the next node is not null
        if (prev.next.val === val) { // if the next node's value is the value to be removed
            prev.next = prev.next.next; // then point the next node to the next node's next node
        } else {
            prev = prev.next; // else move the prev pointer to the next node
        }
    }

    return dummyHead.next; // return the dummy head's next node
}
