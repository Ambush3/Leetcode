var isPalindrome = function(x) {
    let reverseNumber = parseFloat(x.toString().split('').reverse().join(''))
    if (x === reverseNumber){
        return true
    } else {
        return false
    }
};

// faster time complexity

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let reversedNumber = 0;
    let originalNumber = x;
    while (originalNumber > 0) {
        reversedNumber = reversedNumber * 10 + originalNumber % 10;
        originalNumber = Math.floor(originalNumber / 10);
    }
    return x === reversedNumber;
};