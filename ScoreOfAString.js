/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sumDiff = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let asciiValue1 = s.charCodeAt(i);
        let asciiValue2 = s.charCodeAt(i + 1);
        let absoluteDiff = Math.abs(asciiValue1 - asciiValue2);
        sumDiff += absoluteDiff;
    }
    return sumDiff;
};
