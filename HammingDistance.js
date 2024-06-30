function hammingDistance(x, y) {
  let binaryX = x.toString(2);
  let binaryY = y.toString(2);

  while (binaryX.length < binaryY.length) {
    binaryX = "0" + binaryX;
  }

  while (binaryY.length < binaryX.length) {
    binaryY = "0" + binaryY;
  }

  let counter = 0;
  for (let i = 0; i < binaryX.length; i++) {
    if (binaryX[i] !== binaryY[i]) {
      counter++;
    }
  }
  return counter;
}
