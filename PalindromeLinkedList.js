var isPalindrome = function (head) {
    // Handle empty lists and single-node lists
    if (!head || !head.next) {
        return true;
    }

    // Find the middle of the list using the slow and fast pointers
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    let prev = null;
    let curr = slow.next;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Compare the first half of the list with the reversed second half
    let p1 = head;
    let p2 = prev;
    while (p2) {
        if (p1.val !== p2.val) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
}