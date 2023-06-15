var getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prev = null;

    function inorderTraversal(node) {
        if (node === null) {
            return;
        }

        inorderTraversal(node.left);

        if (prev !== null) {
            const diff = Math.abs(prev - node.val);
            minDiff = Math.min(minDiff, diff);
        }

        prev = node.val;

        inorderTraversal(node.right);
    }

    inorderTraversal(root);

    return minDiff;
};