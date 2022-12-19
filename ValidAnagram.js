// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const sMap = {};
    const tMap = {};
    
    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = sMap[s[i]] + 1 || 1;
        tMap[t[i]] = tMap[t[i]] + 1 || 1;
    }
    
    for (let key in sMap) {
        if (sMap[key] !== tMap[key]) return false;
    }
    
    return true;
};