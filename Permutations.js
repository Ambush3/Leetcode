function permute(nums) {
    // create an array to store result 
    let result = [];

    // if nums.length is 0, return empty array
    if (nums.length === 0) return [];
    // if nums.length is 1 return just the nums integer
    if (nums.length === 1) return [nums];

    // loop through nums array
    for (let i = 0; i < nums.length; i++) {
        // store current number to currentNum variable
        const currentNum = nums[i];
        // since we grabbed the first num in currentNum
        // we separate the remaining nums by slicing them into a shallow array copy called remainingNums
        const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        // using recursion we now push the remaining nums back to the top to cycle through again
        const remainingNumsPermuted = permute(remainingNums);

        // iterate through remaining nums that were pushed via recursion
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            // this takes the current number were iterating with (say 1)
            // makes an array, then concatenates the num were iterating with in permutation step
            const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
        }
    }

    return result;
}