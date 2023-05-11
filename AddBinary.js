var addBinary = function(a, b) {
    let sum = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    // Iterate over a and b from the rightmost digit to the left
    while (i >= 0 || j >= 0 || carry > 0) {
        let digitA = i >= 0 ? parseInt(a[i]) : 0;
        let digitB = j >= 0 ? parseInt(b[j]) : 0;
        let digitSum = digitA + digitB + carry;

        // Add the remainder to the sum and update the carry
        sum = (digitSum % 2) + sum;
        carry = digitSum >= 2 ? 1 : 0;

        i--;
        j--;
    }

    return sum;
};