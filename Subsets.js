var subsets = function (nums) {
    let subsets = [];

    function helper(index, current) {
        if (index === nums.length) {
            subsets.push(current);
        } else {
            helper(index + 1, current.concat(nums[index]));
            helper(index + 1, current);
        }
    }
    helper(0, []);
    return subsets
}
