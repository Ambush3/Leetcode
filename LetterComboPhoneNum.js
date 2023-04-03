const myPhone = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
};

var letterCombinations = function (digits) {
    let len = digits.length, ans = [];
    if (!len) return [];
    const bfs = (pos, str) => {
        if (pos === len) {
            ans.push(str)
        } else {
            let letters = myPhone[digits[pos]];
            for (let i = 0; i < letters.length; i++) {
                bfs(pos + 1, str + letters[i]);
            }
        }
    }

    bfs(0, "");
    return ans
};