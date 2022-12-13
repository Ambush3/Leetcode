// create a subarray that finds the largest sum of a subarray

function maxSubArray(nums) {
    let max = nums[0]; // max is the largest sum of a subarray 
    let currentMax = nums[0]; // currentMax is the current sum of a subarray
    for (let i = 1; i < nums.length; i++) { // start at index 1 because we already have the first element
        currentMax = Math.max(nums[i], currentMax + nums[i]); // if the current element is greater than the currentMax + current element, then we start a new subarray
        max = Math.max(max, currentMax);
    }
    return max;
}