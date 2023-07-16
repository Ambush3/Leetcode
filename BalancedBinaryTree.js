function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

function isBalanced(root) {
  return getHeight(root) !== -1;
}

function getHeight(node) {
  if (!node) {
    return 0;
  }

  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1; // Not balanced
  }

  return Math.max(leftHeight, rightHeight) + 1;
}