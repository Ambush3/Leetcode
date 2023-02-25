var findKthLargest = function (nums, k) {
    nums.sort()
    let largest = Number.MAX_VALUE;
    let j = 1;
    for (let i = 0; i < k; i++) {
        if (largest > nums[nums.length - j]) {
            largest = nums[nums.length - j]
        }
        j++
    }
    return largest
};