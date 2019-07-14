//clean but not optimal
function orderedString(string) {
   return string.split('').sort((letter1, letter2) => { return letter1.localeCompare(letter2); }).join('');
}
function checkPermutation(firstString, secondString) {
  if (firstString.length !== secondString.length) { return false; }
  return orderedString(firstString) === orderedString(secondString);
}


function checkPermutation(firstString, secondString) {
  let letterCountHash = {};
  for(let i = 0; i < firstString.length; i++) {
    let letterCount = letterCountHash[firstString.charAt(i)] || 0;
    letterCountHash[firstString.charAt(i)] = ++letterCount;
  }
  for (let j = 0; j < firstString.length; j++) {
    if (!letterCountHash[secondString.charAt(j)]) { return false; }
    letterCountHash[secondString.charAt(j)] = --letterCountHash[secondString.charAt(j)];
  }
  return true;
}