/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const numsOne = new Set(nums1);
    const numsTwo = new Set(nums2);

    return [...numsOne].filter(num => numsTwo.has(num))
};
