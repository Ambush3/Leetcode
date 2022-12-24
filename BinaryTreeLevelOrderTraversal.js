// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

function levelOrder(root){
    if(!root) return [];
    let queue = [root]; // let queue = [];
    let result = []; // let result = [];
    while(queue.length){ // while(queue.length > 0){
        let level = []; // let level = [];
        let size = queue.length; // let size = queue.length;
        for(let i = 0; i < size; i++){ // loop through the queue
        let node = queue.shift(); // assign the first element of the queue to node
        level.push(node.val); // push the value of the node to level
        if(node.left) queue.push(node.left); // if the node has a left child, push it to the queue
        if(node.right) queue.push(node.right); // if the node has a right child, push it to the queue
        }
        result.push(level); // push the level to the result
    }
    return result; // return the result
}

