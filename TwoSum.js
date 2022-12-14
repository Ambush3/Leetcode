// algorithm that is less than O(n2) time complexity

function twoSum(nums, target) {
    let map = new Map(); // key: number, value: index
    for (let i = 0; i < nums.length; i++) { // loop through the array
        let complement = target - nums[i]; // find the complement of the current number
        if (map.has(complement)) { // if the complement is in the map, return the index of the complement and the current number
            return [map.get(complement), i]; // return the index of the complement and the current number
        }
        map.set(nums[i], i); // if the complement is not in the map, add the current number and its index to the map
    }
    return []; // if no two numbers add up to the target, return an empty array
};
