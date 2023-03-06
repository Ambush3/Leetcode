var climbStairs = function (n) {
    // given n find how many different ways you can add up to N 
    // return the amount of different ways we can add up to N 
    let arr = [1, 2];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n - 1];
    
}