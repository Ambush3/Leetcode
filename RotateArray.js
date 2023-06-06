function rotate(nums, k) {
    k = k % nums.length;

    let moveElements = nums.splice(nums.length - k);
    nums.unshift(...moveElements);

    return nums
};

function main() {
    let array = [1, 2, 3, 4, 5];
    let k = 2
    let newArray = rotate(array, k);
    return newArray
}

main()