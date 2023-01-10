var addStrings = function (num1, num2) {
    let carry = 0;
    let result = "";

    let num1Pointer = num1.length - 1;
    let num2Pointer = num2.length - 1;

    while (num1Pointer >= 0 || num2Pointer >= 0 || carry > 0) {
        let num1Val = num1Pointer >= 0 ? num1[num1Pointer] : 0;
        let num2Val = num2Pointer >= 0 ? num2[num2Pointer] : 0;

        let sum = parseInt(num1Val) + parseInt(num2Val) + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);

        num1Pointer--;
        num2Pointer--;

    }

    return result;
}