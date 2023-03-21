var diameterOfBinaryTree = function(root) {
     let maxDiameter = 0;

  function getHeight(node) {
    if (!node) {
      return 0;
    }

    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);

    let diameter = leftHeight + rightHeight;
    if (diameter > maxDiameter) {
      maxDiameter = diameter;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  getHeight(root);
  return maxDiameter;

};