// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non - empty word in s.

function wordPattern(pattern, s){
    let str = s.split(' '); // split the string s by spaces and store in an array
    if (pattern.length !== str.length) return false; // if the pattern and the string are not the same length, return false
    let map = new Map(); // create a new map
    for (let i = 0; i < pattern.length; i++) { // iterate through the pattern
        if (map.has(pattern[i])) { // if the map has the current character in the pattern
            if (map.get(pattern[i]) !== str[i]) return false; // if the value of the current character in the pattern is not the same as the current word in the string, return false
        } else {
            if (Array.from(map.values()).includes(str[i])) return false; // if the map does not have the current character in the pattern, but the string does, return false
            map.set(pattern[i], str[i]); // if the map does not have the current character in the pattern, and the string does not, add the character and the word to the map
        }
    } 
    return true; // if the pattern and the string match, return true
}