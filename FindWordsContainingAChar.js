function findWordsContainingAChar (words, x) {
  return words
    .map((word, index) => word.includes(x) ? index : -1)
    .filter(index => index !== -1)
}

// check for exact matches of an element in the array, not for the presence of a character within strings.
