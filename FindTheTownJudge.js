var findJudge = function(N, trust) {
  const count = new Array(N + 1).fill(0); // we assign count to an array of size N + 1
  // size N is the number of people in the town 
  // size N + 1 is the number of people in the town plus the judge
  for (const [a, b] of trust) { // we iterate through the trust array 
    count[a] -= 1; // we decrement the count of the first person
    count[b] += 1; // we increment the count of the second person
  }
  for (let i = 1; i <= N; i += 1) { // we iterate through the count array
    if (count[i] === N - 1) { // if the count of the person is equal to the number of people in the town minus 1
      return i; // we return the person
    }
  }
  return -1; // if no judge is found, we return -1
};