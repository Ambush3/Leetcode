var canJump = function (nums) {
    let maxReachableIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReachableIndex) {
            return false;
        }
        maxReachableIndex = Math.max(maxReachableIndex, i + nums[i]);
    }
    return true;
};