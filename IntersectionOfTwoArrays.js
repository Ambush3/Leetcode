// find best data structure for this problem
function intersect(nums1, nums2) {
    const newArr = [];
    for (let i of nums1) {
        if (nums2.indexOf(i) > -1) { 
            newArr.push(i) // push to new array
        }
    }
    return newArr
}