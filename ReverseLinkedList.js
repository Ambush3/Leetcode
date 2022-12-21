// reverse a linked list 


function reverseList (head) {
    let prev = null; // create a prev pointer to point to the previous node
    let curr = head; // create a curr pointer to point to the current node

    while (curr !== null) { // while the current node is not null
        let nextTemp = curr.next; // create a nextTemp pointer to point to the next node
        curr.next = prev; // point the current node to the previous node
        prev = curr; // move the prev pointer to the current node
        curr = nextTemp; // move the curr pointer to the next node
    }

    return prev; // return the prev pointer
}