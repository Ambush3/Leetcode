var frequencySort = function(s) {
    // create a place to store frequency
    const frequency = {};
    // loop through each character of string
    // count the frequency of each character
    for (const char of s) {
        frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
    }
    // Convert the object into an array of [character, frequency] pairs
    const entries = Object.entries(frequency);
    // sort the array in decreasing order
    entries.sort((a, b) => b[1] - a[1]);
    // join the characters to form a sorted string
    return entries.map(entry => entry[0].repeat(entry[1])).join('');

    const sortedStr = frequencySort(s);
    return sortedStr
};