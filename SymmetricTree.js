// Given the root of a binary tree, check whether it is a mirror of itself(i.e., symmetric around its center).

var isSymmetric = function (root) {

    return symmetric(root, root)

    function symmetric(treeLeft, treeRight) {
        if (treeLeft === null && treeRight === null) { return true };
        if (treeLeft === null || treeRight === null) { return false };
        return (treeLeft.val === treeRight.val) && symmetric(treeLeft.right, treeRight.left) && symmetric(treeLeft.left, treeRight.right)
    }

};