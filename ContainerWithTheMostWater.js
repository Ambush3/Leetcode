// Container With Most Water
var maxArea = function (height) {
    // brute force solution would be to iterate through the array and
    // find the max area for each index
    // then return the max area
    // this would be O(n^2) time complexity

    // brute force solution
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = Math.min(height[i], height[j]) * (j - i);
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};

var maxArea = function (height) {
    // we can do better than this
    // we can use two pointers
    // one pointer at the beginning of the array
    // one pointer at the end of the array
    // we can then calculate the area of the container
    // then we can move the pointer that is pointing to the smaller height
    // this is because we want to find the max area
    // if we move the pointer that is pointing to the larger height
    // then we will only decrease the area
    // we can do this because we are moving the pointer that is pointing to the smaller height
    // so we are moving the smaller height towards the larger height
    // so we are increasing the height of the container


    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};