function kthSmallest(root, k) {
    let result = [];

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }

    inorder(root);

    return result[k - 1];
}
