//Method 1: clean but in the event where the strings are very long, not efficient
// function orderedString(string) {
//   return string.split('').sort((letter1, letter2) => { return letter1.localeCompare(letter2); }).join('');
// }

// module.exports = (firstString, secondString) => {
//   if (firstString.length !== secondString.length) { return false; }
//   return orderedString(firstString) === orderedString(secondString);
// }

// Method 2: More efficient
module.exports = (firstString, secondString) => {
  let letterCountHash = {};
  for (let i = 0; i < firstString.length; i++) {
    let letterCount = letterCountHash[firstString.charAt(i)] || 0;
    letterCountHash[firstString.charAt(i)] = ++letterCount;
  }
  for (let j = 0; j < firstString.length; j++) {
    if (!letterCountHash[secondString.charAt(j)]) { return false; }
    letterCountHash[secondString.charAt(j)] = --letterCountHash[secondString.charAt(j)];
  }
  return true;
}