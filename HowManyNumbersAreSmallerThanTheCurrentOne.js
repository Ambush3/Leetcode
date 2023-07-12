var smallerNumbersThanCurrent = function (nums) {
    const sortedNums = [...nums];
    sortedNums.sort((a, b) => a - b);

    const countMap = new Map();

    for (let i = 0; i < sortedNums.length; i++) {
        if (!countMap.has(sortedNums[i])) {
            countMap.set(sortedNums[i], i);
        }
    }

    const countArr = [];

    for (let i = 0; i < nums.length; i++) {
        countArr.push(countMap.get(nums[i]));
    }

    return countArr;
};
