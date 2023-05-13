var isIsomorphic = function(s, t) {

    if (s.length !== t.length) {
        return false
    }

    let sDictionary = {};
    let tDictionary = {};

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];

        if (sDictionary.hasOwnProperty(sChar) && sDictionary[sChar] !== t[i]) {
            return false;
        }
     
        if (tDictionary.hasOwnProperty(t[i]) && tDictionary[t[i]] !== sChar) {
            return false;
        }
        
        sDictionary[sChar] = t[i];
        tDictionary[t[i]] = sChar;
    }

    return true;
}