function findTheWinner (n, k) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let i = 0;
    while (arr.length > 1) {
        i = (i + k - 1) % arr.length;
        arr.splice(i, 1);
    }
    return arr[0];
}