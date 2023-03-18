function isHappy(n) {
    let seenNumbers = new Set();
    while (n !== 1) {
        let digitArray = Array.from(n.toString(), Number);
        let sum = digitArray.reduce((acc, curr) => acc + curr ** 2, 0);
        if (seenNumbers.has(sum)) {
            return false;
        }
        seenNumbers.add(sum);
        n = sum;
    }
    return true;
}