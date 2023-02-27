var romanToInt = function (s) {
    const romanNumeralValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentChar = romanNumeralValues[s[i]];
        const nextChar = romanNumeralValues[s[i + 1]];
        if (nextChar > currentChar) {
            result -= currentChar
        } else[
            result += currentChar
        ]
    }

    return result
}