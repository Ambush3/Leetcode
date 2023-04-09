function combinationSum(candidates, target) {
    let result = [];

    function backtrack(currentList, start, sum) {
        if (sum === target) {
            result.push([...currentList]);
            return;
        }

        for (let i = start; i < candidates.length; i++){
            if (sum + candidates[i] <= target ){
                currentList.push(candidates[i]);
                backtrack(currentList, i, sum + candidates[i]);
                currentList.pop();
            }
        }
    }

    backtrack([], 0, 0)
    return result
}