var buildArray = function(nums) {
    const ans = []; 

    for (let i = 0; i < nums.length; i++) {
        const newIndex = nums[i]
        const newValue = nums[newIndex]
        ans[i] = newValue
    }

    return ans
};