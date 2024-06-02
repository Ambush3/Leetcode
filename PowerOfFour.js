function isPowerOfFour(n) {
  return (Math.log(n) / Math.log(4)) % 1 === 0;
}
