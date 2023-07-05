var countBits = function (n) {
    let arr = [0], bit = 1;
    for (let i = 1; i <= n; i++) {
        if (i == bit + bit) bit += bit;
        arr.push(arr[i - bit] + 1);
    }
    return arr;
};