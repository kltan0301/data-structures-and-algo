// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sort(array, start, end) {
  if (end <= start) { return null; }
  let midPoint = Math.floor((start + end) / 2);
  let n = new TreeNode(array[midPoint]);
  n.left = sort(array, start, midPoint - 1);
  n.right = sort(array, midPoint + 1, end);
  return n;
}
