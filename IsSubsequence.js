function isSubsequence(s, t) {
    if (s === '') {
        return true;
    }
    let sPointer = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[sPointer]) {
            sPointer++;
        }
        if (sPointer === s.length) {
            return true;
        }
    }
    return false;
}