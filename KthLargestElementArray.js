// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// You must solve it in O(n) time complexity.

function findKthLargest(nums, k) {
    const sorted = nums.sort((a, b) => a - b);
    return sorted[sorted.length - k];
}