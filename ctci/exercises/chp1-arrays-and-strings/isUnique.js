module.exports = (stringVar) => {
  let comparisonHash = {};
  for (let i = 0; i < stringVar.length; i++) {
    let character = stringVar.charAt(i);
    if (comparisonHash[character]) {
      return false;
    } else {
      comparisonHash[character] = 1;
    }
  }
  return true;
}
