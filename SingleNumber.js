var singleNumber = function (nums) {
    var res = nums.filter(function (i) {
        return nums.filter(function (i1) {
            return i1 == i;
        }).length == 1;
    });
    return res
};