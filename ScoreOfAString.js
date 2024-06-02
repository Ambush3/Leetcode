/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let nums = [];
    for (let i = 0; i < s.length; i++){
        let asciiValue = s.charCodeAt(i);
        nums.push(asciiValue);
    }

    let sum = []
    for (let i = 0; i < nums.length - 1; i++){
        let absoluteDiff = Math.abs(nums[i] - nums[i + 1])
        sum.push(absoluteDiff)
    }

    let sumDiff = 0
    for (let i = 0; i < sum.length; i++) {
        sumDiff += sum[i]
    }
    return sumDiff
};
