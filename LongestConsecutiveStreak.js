var longestConsecutive = function(nums) {
    nums.sort((a, b) => a - b);

    let longestStreak = 0;
    let currentStreak = 1;

    if (nums.length === 0){
        return 0
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            currentStreak++;
        } else if (nums[i] !== nums[i - 1]) {
            longestStreak = Math.max(longestStreak, currentStreak);
            currentStreak = 1;
        }
    }

    longestStreak = Math.max(longestStreak, currentStreak);

    return longestStreak;
};