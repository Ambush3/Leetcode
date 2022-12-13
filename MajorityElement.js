// find majority element using hash map
// The majority element is the element that appears more than ⌊n / 2⌋ times.You may assume that the majority element always exists in the array.

function majorityElement(nums) {
    let map = new Map(); // create hash map
    let max = 0; // max count
    let maxKey = 0; // max key
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) { // if key exists
            map.set(nums[i], map.get(nums[i]) + 1); // increment count by 1
        } else { 
            map.set(nums[i], 1); // set count to 1
        }
        if (map.get(nums[i]) > max) { // if count is greater than max
            max = map.get(nums[i]); // set max to count
            maxKey = nums[i]; // set max key to current key
        }
    }
    return maxKey; // return max key
}