/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    return root;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    return data;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */



// the right way to do it 
// this uses the time and space complexity of O(n) 
// where n is the number of nodes in the tree

var serialize = function(root) {
    if (!root) return 'null';
    return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
}

var deserialize = function(data) {
    let arr = data.split(',');
    return deserializeHelper(arr);
}

function deserializeHelper(arr) {
    let val = arr.shift();
    if (val === 'null') return null;
    let node = new TreeNode(val);
    node.left = deserializeHelper(arr);
    node.right = deserializeHelper(arr);
    return node;
}

