//Big O: O(N^2) (Very costly)
function isUnique(string) {
  for(let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    for(let j = i + 1; j < string.length; j++) {
      if (char === string.charAt(j)) { return false; }
    }
  }
  return true;
}

//Big O: O(N)
function isUnique(string) {
  let hashArr = {};
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (!hashArr[char]) {
      hashArr[char] = true;
    } else {
      return false;
    }
  }
  return true;
}