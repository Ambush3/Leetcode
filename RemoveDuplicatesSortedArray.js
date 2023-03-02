var removeDuplicates = function (nums) {
    let uniqueNumbers = [...new Set(nums)];
    uniqueNumbers.sort((a, b) => a - b);

    let length = uniqueNumbers.length;
    for (let i = 0; i < uniqueNumbers.length; i++) {
        nums[i] = uniqueNumbers[i];
    }

    return length;
};