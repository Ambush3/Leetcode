// find max depth of binary tree

function maxDepth(root) {
    if(!root) return 0; // if the root is null, return 0
    let queue = [root]; // create a queue and push the root to it
    let result = 0; // create a variable to store the result
    while(queue.length){ // while the queue is not empty
        let size = queue.length; // assign the length of the queue to size
        for(let i = 0; i < size; i++){ // loop through the queue
        let node = queue.shift(); // assign the first element of the queue to node
        if(node.left) queue.push(node.left); // if the node has a left child, push it to the queue
        if(node.right) queue.push(node.right); // if the node has a right child, push it to the queue
        }
        result++; // increment the result
    }
    return result; // return the result
}