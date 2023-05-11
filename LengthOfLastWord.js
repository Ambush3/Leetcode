var lengthOfLastWord = function(s) {
    let splitWords = s.split(' ').filter(Boolean);
    let lastWord = splitWords[splitWords.length -1];
    let lengthOfWord = lastWord.length;
    return lengthOfWord;
};