var arrangeCoins = function(n) {
    let row = 0
    while (n >= row + 1){
        row += 1
        n -= row
    }
    return row
};
