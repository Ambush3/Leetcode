var addDigits = function (num) {
    let string = num.toString();
    let split = string.split('');

    while (split.length > 1) {
        let sum = 0;
        for (let i = 0; i < split.length; i++) {
            sum += parseInt(split[i]);
        }
        split = sum.toString().split('');
    }

    return parseInt(split[0]);
};
