var subtractProductAndSum = function(n) {
    var splitNums = n.toString().split('').map(Number);
    let product = splitNums.reduce((a, b) => a * b)
    let sum = splitNums.reduce((a, b) => a + b)
    let result = product - sum
    return result
};