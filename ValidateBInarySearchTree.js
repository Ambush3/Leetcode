// given root of binary tree, determine if it is a valid binary tree
// left subtree of node contains only nodes with keys < than the nodes key
// right subtree of node contains only nodes with keys > than the nodes key
// both subtrees must be binary search trees

function isValidBST(root){
    if (root === null) return true;
    if (root.left !== null && root.left.val >= root.val) return false;
    if (root.right !== null && root.right.val <= root.val) return false;
    
    if (!isValidBST(root.left) || !isValidBST(root.right)) return false;
    return true;
}