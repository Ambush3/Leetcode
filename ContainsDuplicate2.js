var containsNearbyDuplicate = function(nums, k) {
    let dictionary = {};

    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if (dictionary.hasOwnProperty(num) && Math.abs(i - dictionary[num]) <= k) {
            return true;
        }
        dictionary[num] = i;
    }
    return false
};