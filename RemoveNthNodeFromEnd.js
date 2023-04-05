var removeNthFromEnd = function (head, n) {
    // Define a function that takes two parameters: the head of the linked list and n.
    // Create two pointers, fast and slow, and initialize them to point to the head of the linked list.
    let fast = head;
    let slow = head;

    // Move fast pointer n positions ahead.
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    };

    // If fast is null, it means that n is equal to the length of the list. So, remove the head of the list and return its next node as the new head.
    if (fast == null) {
        head = head.next;
        return head;
    }

    // Move fast and slow pointers one step at a time until fast reaches the end of the list.
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // The node that slow is pointing to is the one that needs to be removed. So, update the next property of the node that comes before it to point to the node that comes after it.
    slow.next = slow.next.next;



    // Return the head of the linked list.
    return head
};