// Write a method to compute all permutations of a string of unique characters

function computePermutations(characterString) {
  if (characterString.length === 1) { return [characterString]; }
  let characterStringArray = characterString.split('');
  let newChar = characterStringArray.pop();

  let earlierStringCombination = computePermutations(characterString.slice(0,characterString.length - 1));
  let newCombi = earlierStringCombination.map((str) => {
    let strArr = str.split('');
    let combiArr = [];
    for (var i = 0; i <= strArr.length; i++) {
      let leftChunk = str.slice(0, i);
      let rightChunk = str.slice(i, strArr.length);
      let result = leftChunk.concat(newChar).concat(rightChunk);
      combiArr.push(result);
    }
    return combiArr;
  });
  return newCombi.flat();
}
