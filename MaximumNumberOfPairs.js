/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    // find all of the pairs and return how many pairs there are 
    // find the length of the array that is left over and return the length of it 
    // push both numbers to a new array and return it 

    let answer = []
    let pairs = []
    for (let i = 0; i < nums.length; i++){
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] == nums[j]){
                pairs.push(i)
                nums.pop(i)
            }
        }
    }

    return pairs
    // let length = pairs.length
    // answer.push(length)
    // return answer
};
