module.exports = (stringVar, length) => {
  let parsedString = stringVar.slice(0, length);
  let newString = '';
  for(let i = 0; i < parsedString.length; i++) {
    let char = stringVar.charAt(i);
    char === ' ' ? newString += '%20' : newString+=char;
  }
  return newString;
}
