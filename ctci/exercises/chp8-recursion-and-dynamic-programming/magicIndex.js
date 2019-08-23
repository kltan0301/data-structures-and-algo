// A magic index in an array A[0...n-1] is defined to be an index
// such that A[i] = i. Given a sorted array of distinct integers, write
// a method to find a magic index, if one existsTypeAnnotation, in array A.

//bruteforce way, log N
function findMagicIndex(arr) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return i;
    }
  }
  return null;
}

function magicIndex(arr) {
  return findMagicIndex(0, arr.length - 1, arr)
}

function findMagicIndex(startIndex, endIndex, arr) {
  let midPoint = Math.floor((startIndex + endIndex) / 2);
  if (endIndex < startIndex) { return -1; }
  if (arr[midPoint] === midPoint) { return midPoint; }
  if (arr[midPoint] < midPoint) {
    return findMagicIndex(midPoint + 1, endIndex, arr);
  } else {
    return findMagicIndex(0, midPoint - 1, arr);
  }
}