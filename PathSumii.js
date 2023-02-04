var pathSum = function(root, sum){
    if(!root) {
        return [];
    }

    var result = [];
    var path = [];
    var currentSum = 0;
    var dfs = function(root, sum, path, currentSum) {
        if(!root) {
            return;
        }

        path.push(root.val);
        currentSum += root.val;

        if(!root.left && !root.right && currentSum === sum) {
            result.push(path.slice());
        }

        dfs(root.left, sum, path, currentSum);
        dfs(root.right, sum, path, currentSum);

        path.pop();
        currentSum -= root.val;
    }

    dfs(root, sum, path, currentSum);
    return result;
}