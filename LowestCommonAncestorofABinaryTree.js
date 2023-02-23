// find the path from root to given node 
// push path of p to its own vector array
// push path of q to its own vector array

function lowestCommonAncestor(root, p, q) {
    let pathP = []
    let pathQ = []
    let path = []
    let foundP = false
    let foundQ = false
    let lastCommonNode = null
    function findPathHelper(root, p, q) {
        if (!root) {
            return
        }
        path.push(root)
        if (root === p) {
            foundP = true
            pathP = [...path]
        }
        if (root === q) {
            foundQ = true
            pathQ = [...path]
        }
        if (foundP && foundQ) {
            return
        }
        findPathHelper(root.left, p, q)
        findPathHelper(root.right, p, q)
        path.pop()
    }

    findPathHelper(root, p, q)
    for (let i = 0; i < pathP.length; i++) {
        if (pathP[i] === pathQ[i]) {
            lastCommonNode = pathP[i]
        }
    }

    return lastCommonNode;
}
