
function addTwoNumbers(l1, l2){
    let carry = 0;
    let sum = 0;
    let head = new ListNode(0);
    let current = head;
    while(l1 || l2 || carry){
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return head.next;
}

// this is using time complexity of O(n) and space complexity of O(1)