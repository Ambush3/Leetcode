// check if element already exists in linked list
// delete duplicates
// return linked list sorted

function deleteDuplicates (head){
    let curr = head;
    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}