var hammingWeight = function(n) {
    return (n.toString(2).split('1').length-1)
};

// better time complexity
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        if (n & 1 === 1) {
            count++;
        }
        n >>>= 1; // Shift n right by 1 bit
    }
    return count;
};
