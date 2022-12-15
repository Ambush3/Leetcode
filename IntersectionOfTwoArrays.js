// Given two integer arrays nums1 and nums2, return an array of their intersection.Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

function intersection(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                result.push(nums1[i]);
                nums2.splice(j, 1);
                break;
            }
        }
    }
    return result;
}