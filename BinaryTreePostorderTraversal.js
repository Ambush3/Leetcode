var postorderTraversal = function(root) {
    if (root == null) {
    return [];
    }

    let result = [];
        result = result.concat(postorderTraversal(root.left));
        result = result.concat(postorderTraversal(root.right));
        result.push(root.val);
        return result
};