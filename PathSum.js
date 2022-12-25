// Given the root of a binary tree and an integer targetSum, return true if the tree has a root - to - leaf path such that adding up all the values along the path equals targetSum.

function hasPathSum(root, targetSum) {
    if (!root) return false;
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        if (!node.left && !node.right && node.val === targetSum) return true;
        if (node.left) {
            node.left.val += node.val;
            queue.push(node.left);
        }
        if (node.right) {
            node.right.val += node.val;
            queue.push(node.right);
        }
    }
    return false;
}