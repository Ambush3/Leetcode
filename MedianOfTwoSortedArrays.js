var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [...nums1, ...nums2];

    mergedArray.sort(function(a,b){
        return a-b;
    });

    var half = Math.floor(mergedArray.length / 2);

    if (mergedArray.length % 2)
        return mergedArray[half];

    return (mergedArray[half - 1] + mergedArray[half]) / 2.0;
};