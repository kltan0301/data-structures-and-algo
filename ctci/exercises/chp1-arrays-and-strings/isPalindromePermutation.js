module.exports = (string) => {
  let parsedHash = {};
  let hasOddNumberLetters = false;
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (parsedHash[char] > 0) {
      parsedHash[char] = ++parsedHash[char];
    } else {
      parsedHash[char] = 1;
    }
  }

  for (let char in parsedHash) {
    if (parsedHash[char] % 2 !== 0 && char !== ' ') {
      if (hasOddNumberLetters) {
        return false
      } else {
        hasOddNumberLetters = true;
      }
    }
  }
  return true;
}