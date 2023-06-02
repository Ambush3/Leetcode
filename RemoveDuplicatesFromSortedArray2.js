var removeDuplicates = function(nums) {

    if(nums.length <= 1){
        return nums.length
    }

    slow = 2
    fast = 2 

    while (fast < nums.length) {
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow += 1
        } 
        fast += 1
    }
    return slow 

};