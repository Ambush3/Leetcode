// invert a binary tree 

function invertTree(root) {
    if (!root) return null;
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        [node.left, node.right] = [node.right, node.left];
    }
    return root;
}