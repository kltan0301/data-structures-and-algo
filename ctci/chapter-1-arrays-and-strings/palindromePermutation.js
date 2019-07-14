//Approach 1
function isPalindromePermutation(string) {
  let letterCountHash = {};
  let hasLetterWithOddCount = false;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!letterCountHash[char]) {
      letterCountHash[char] = 1;
    } else {
      letterCountHash[char] = letterCountHash[char] + 1;
    }
  }
  for (let key in letterCountHash) {
    if (letterCountHash[key] % 2 === 1) { 
      if (hasLetterWithOddCount) { 
        return false;
      } else {
        hasLetterWithOddCount = true;
      }
    }
  }
  return true;
}

//Approach 2
