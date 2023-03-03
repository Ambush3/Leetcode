function plusOne(digits) {
    let num = BigInt(digits.join("")) + 1n;
    let newArr = Array.from(num.toString(), Number);
    return newArr
}