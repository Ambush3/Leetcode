// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.Return the linked list sorted as well.

function deleteDuplicates (head){
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    let next = head;
    while (next !== null) {
        if (next.next !== null && next.val === next.next.val) {
            while (next.next !== null && next.val === next.next.val) {
                next = next.next;
            }
            current.next = next.next;
        } else {
            current = current.next;
        }
        next = next.next;
    }
    return dummy.next;
}