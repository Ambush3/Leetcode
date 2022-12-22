// inorder traversal

var inorderTraversal = function (root) {
    // check if root is null
    // if it is null, return an empty array
    if (root == null) {
        return [];
    }
    // create an array to store the result
    // add the left subtree to the array
    // add the root value to the array
    // add the right subtree to the array
    // return the array
    let result = [];
    result = result.concat(inorderTraversal(root.left));
    result.push(root.val);
    result = result.concat(inorderTraversal(root.right));
    return result;
}