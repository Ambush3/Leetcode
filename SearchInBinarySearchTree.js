// find the node in the binary tree that equals val
// return the subtree rooted at that node

function findSubtree(root, val) {
    if (!root) return null;

    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        if (node.val === val) return node;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return null;
}