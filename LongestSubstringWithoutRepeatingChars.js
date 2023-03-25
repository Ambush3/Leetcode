var lengthOfLongestSubstring = function(s) {
  const charMap = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s.charAt(end);

    if (charMap.has(char)) {
      start = Math.max(start, charMap.get(char) + 1);
    }

    charMap.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};