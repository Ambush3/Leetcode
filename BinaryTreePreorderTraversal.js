var preorderTraversal = function (root) {
    // check if root is null
    // if it is null, return an empty array
    if (root == null) {
        return [];
    }
    // create an array to store the result
    // add the root value to the array
    // add the left subtree to the array
    // add the right subtree to the array
    // return the array
    let result = [root.val];
    result = result.concat(preorderTraversal(root.left));
    result = result.concat(preorderTraversal(root.right));
    return result;
}