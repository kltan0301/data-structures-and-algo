// Write an algorithm to find the "next" node(i.e., in-order successor) of a
// given node in a binary search tree. You may assume that each node has a link to its
// parent.

let index = 0;

function copyBst(node, array) {
  if (!node) { return; }
  console.log(node)
  console.log('arr', arr)
  copyBst(node.left, array);
  array[index] = node;
  index++;
  copyBst(node.right, array);
}

function successor(node) {
  let arr = [];
  copyBst(node, arr);
  console.log(arr);
}