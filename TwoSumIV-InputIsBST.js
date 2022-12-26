// check if two elements in the binary tree array are the sum of the target k value

function findTarget(root, k){
    let set = new Set(); // use set to store the value of the node
    let queue = [root]; // use queue to store the node
    while (queue.length){ // loop through the queue 
        let node = queue.shift(); // shift the first element in the queue   
        if (set.has(k - node.val)) return true; // if the set has the value of k - node.val, return true
        set.add(node.val); // add the node.val to the set
        if (node.left) queue.push(node.left); // if the node has left child, push the left child to the queue 
        if (node.right) queue.push(node.right); // if the node has right child, push the right child to the queue
    }
    return false; // if the queue is empty, return false
} 