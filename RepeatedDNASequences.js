var findRepeatedDnaSequences = function(s) {
  const seen = {};
  const output = [];

  for (let i = 0; i < s.length - 9; i++) {
      const str = s.substring(i, i + 10);
      if (seen[str]) {
          if (!output.includes(str)) output.push(str);
      } else {
          seen[str] = true;
      }
  }
  return output;
};