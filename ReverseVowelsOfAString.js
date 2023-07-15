var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const split = s.split('');
    const vowelArr = [];

    for (let i = 0; i < split.length; i++) {
        const char = split[i].toLowerCase();
        if (vowels.includes(char)) {
            vowelArr.push(split[i])
        }
    }

    vowelArr.reverse()

    for (let i = 0; i < split.length; i++) {
        const char = split[i].toLowerCase();
        if (vowels.includes(char)) {
            split[i] = vowelArr.shift();
        }
    }

    return split.join('');
}