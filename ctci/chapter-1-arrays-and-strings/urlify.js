function urlify(string, length) {
  let url = string.slice(0, length).split('');
  let urlString = '';
  for (let i = 0; i < url.length; i++) {
    let characterToAdd = url[i] === ' ' ? '%20' : url[i];
    urlString += characterToAdd;
  }
  return urlString;
}

function urlify(string, length) {
  let urlCharArr = string.slice(0, length).split('');
  let spaceCount = 0;
  for (let i = 0; i < urlCharArr.length; i++) {
    if (urlCharArr[i] === ' ') {
      spaceCount++;
    }
  }

  let newLength = length + spaceCount * 3;
  let newUrlCharArr = [];
  for (let i = length - 1; i >= 0; i--) {
    if (string[i] === ' ') {
      newUrlCharArr[newLength - 1] = '0';
      newUrlCharArr[newLength - 2] = '2';
      newUrlCharArr[newLength - 3] = '%';
      newLength -= 3;
    } else {
      newUrlCharArr[newLength - 1] = string[i];
      newLength -= 1;
    }
  }
  return newUrlCharArr.join('');
}