const mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2; // because l2 is the merged list
    }

    if (l2 === null) {
        return l1; // because l1 is the merged list
    }

    if (l1.val < l2.val) { // if l1's value is smaller than l2's value, then l1 is the merged list and we need to merge the rest of the list
        l1.next = mergeTwoLists(l1.next, l2) // l1.next is the merged list
        return l1;

    } else {
        l2.next = mergeTwoLists(l1, l2.next) // else l2 is the merged list and we need to merge the rest of the list
        return l2;
    }
}

// use a better time complexity

function mergeTwoLists (l1, l2) {
    let dummyHead = new ListNode(-1);
    let prev = dummyHead;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    prev.next = l1 === null ? l2 : l1;

    return dummyHead.next;
}