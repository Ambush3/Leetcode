// partition labels leetcode

var partitionLabels = function(S) {
    let last = new Array(26); // create an array of 26 elements
    let length = S.length; // store the length of the string in a variable
    let codePointA = 'a'.codePointAt(0); // store the code point of the letter 'a' in a variable 
    for (let i = 0; i < length; i++) { // iterate through the string
        last[S.codePointAt(i) - codePointA] = i; // store the index of the last occurence of each letter in the string in the array
    }
    let partition = []; // create an empty array
    let start = 0, end = 0; // create variables to store the start and end of the partition
    for (let i = 0; i < length; i++) { // iterate through the string 
        end = Math.max(end, last[S.codePointAt(i) - codePointA]); // set the end of the partition to the index of the last occurence of the current letter in the string
        if (i == end) { // if the current index is the same as the end of the partition
            partition.push(end - start + 1); // push the length of the partition to the array
            start = end + 1; // set the start of the partition to the end of the partition plus one
        }
    }
    return partition;
}