// return just the right branch starting from the root

function getBranches(root) {
    let result = []

    function traverseLevels(root, level) {
        if (!root) return

        if (result[level]) {
            result[level].push(root.val)
        } else {
            result[level] = [root.val]
        }

        traverseLevels(root.right, level + 1)
    }

    traverseLevels(root, 0)

    return result
}