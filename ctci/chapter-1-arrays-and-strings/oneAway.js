//brute force method
function oneAway(string1, string2) {
  let baseString = string1.length >= string2.length ? string1 : string2;
  let diffCount = 0;
  for (let i = 0; i < baseString.length; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      diffCount++;
      if (diffCount > 1) {
        return false;
      }
    }
  }
  return true;
}

//method 2:
function oneEditAway(string1, string2) {
  if (string1.length === string2.length) {
    return oneEditReplace(string1, string2);
  } else if (Math.abs(string1.length - string2.length) == 1) {
    let stringArguments = string1.length > string2.length ? [string1, string2] : [string2, string1];
    return oneEditInsert(...stringArguments);
  }
  return false;
}

function oneEditReplace(string1, string2) {
  let foundDifference = false;
  for (let i = 0; i < string1.length; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
}

function oneEditInsert(string1, string2) {
  let index1 = 0;
  let index2 = 0;
  while (index2 < string2.length && index1 < string1.length) {
    if (string1.charAt(index1) !== string2.charAt(index2)) {
      if (index1 !== index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
}


//Method 3
function oneEditAway(string1, string2) {
  if (Math.abs(string1.length - string2.length) > 1) {
    return false;
  }

  let index2 = 0;
  let index1 = 0;

  let shorterString = string1.length < string2.length ? string1 : string2;
  let longerString = string1.length < string2.length ? string2 : string1;
  let foundDifference = false;

  while (index2 < longerString.length && index1 < shorterString.length) {
    if (longerString.charAt(index1) !== shorterString.charAt(index2)) {
      if (foundDifference) { return false; }
      foundDifference = true;
      if (shorterString.length < longerString.length) {
        index2++;
      }
    } else {
      index1++;
      index2++;     
    }
  }
  return true;
}