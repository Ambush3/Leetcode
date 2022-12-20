var hasCycle = function(head) {
    let nodeSet = new Set(); // create a set to store nodes we visit
    let currentNode = head; // set a current node to head
    while(currentNode){ // while the current node exists
        if(nodeSet.has(currentNode)){  // if the node set has the current node, 
                                        // return true sense we have a cycle
            return true;
        }
        nodeSet.add(currentNode);  // add the current node to the set
        currentNode = currentNode.next;  // set the current node to the next node
    }
    return false; // if we get to the end of the list, return false
};

// better time complexity of this solution is O(n) and space complexity is O(1)
function hasCycle(head) {
    let slow = head; // slow pointer
    let fast = head; // fast pointer
    while (fast && fast.next) { // while fast and fast.next exist
        slow = slow.next; // move slow pointer one node
        fast = fast.next.next; // move fast pointer two nodes
        if (slow === fast) { // if slow and fast are equal, we have a cycle
            return true; // return true
        }
    }
    return false; // if we get to the end of the list, return false
}