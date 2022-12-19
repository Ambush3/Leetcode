// create an anagram using hash

function anagram(s, t) {
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
        hash[s[i]]++;
        } else {
        hash[s[i]] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]]) {
        hash[s[i]]--;
        } else {
        return false;
        }
    }
    return true;
}