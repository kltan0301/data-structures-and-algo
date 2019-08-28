// Write an algorithm to find the "next" node(i.e., in-order successor) of a
// given node in a binary search tree. You may assume that each node has a link to its
// parent.

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let nodeArr = [];

let nodeHash = {
  5: [2, 8],
  2: [0, 3],
  8: [6, 10],
  0: [null, 1],
  3: [null, 4],
  6: [null, 7],
  10: [9, null],
  1: [null, null],
  4: [null, null],
  7: [null, null],
  9: [null, null],
}

for (let i = 0; i < 11; i++) {
  nodeArr.push(new TreeNode(i));
}

for (key in nodeHash) {
  let node = nodeArr[key];
  let adjacentArr = nodeHash[key].map((val) => { return nodeArr[val] });
  node.left = adjacentArr[0];
  node.right = adjacentArr[1];
}

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