// Given the root of a binary tree, determine if it is a valid binary search tree(BST).

const isValidBST = (root) => {
    const helper = (node, min, max) => {
        if (!node) return true
        if (node.val <= min || node.val >= max) return false
        return helper(node.left, min, node.val) && helper(node.right, node.val, max)
    }
    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}