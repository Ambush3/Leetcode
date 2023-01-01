// sort an array of object by n property

var sortColors = function (nums) {
    let colorSort = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
    return nums.sort(colorSort);

};

// One pass algorithm
var sortColors = function (nums) { 
    let i = 0;
    let j = nums.length - 1;
    let k = 0;
    while (k <= j) {
        if (nums[k] === 0) {
            [nums[i], nums[k]] = [nums[k], nums[i]];
            i++;
            k++;
        } else if (nums[k] === 2) {
            [nums[j], nums[k]] = [nums[k], nums[j]];
            j--;
        } else {
            k++;
        }
    }
};