// Write a method to return all subsets of a set

//recursive function, works but O(2^n) in time and space
function generateNewSubset(setArray) {
  if (setArray.length === 0) { return [[]];}
  let newValue = setArray.pop();
  let subsets = generateNewSubset(setArray);

  let newCombinations = subsets.map((combiObject) => {
    let newObj = combiObject.slice(0);
    newObj.push(newValue);
    return newObj;
  });

  return newCombinations.concat(subsets);
}
