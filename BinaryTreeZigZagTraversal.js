const zigzagLevelOrder = function (root) {
    let result = []

    function traverseLevels(root, level) {
        if (!root) return

        if (result[level]) {
            if (level % 2 === 0) {
                result[level].push(root.val)
            } else {
                result[level].unshift(root.val)
            }

        } else {
            result[level] = [root.val]
        }

        traverseLevels(root.left, level + 1)
        traverseLevels(root.right, level + 1)
    }

    traverseLevels(root, 0)

    return result
}