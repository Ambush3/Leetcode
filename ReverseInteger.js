var reverse = function (x) {
    const neg = x < 0;
    const xStr = Math.abs(x).toString().split('').reverse().join('');
    const xRev = neg ? -parseInt(xStr) : parseInt(xStr);
    if (xRev < -Math.pow(2, 31) || xRev > Math.pow(2, 31) - 1) {
        return 0;
    }
    return xRev;
};