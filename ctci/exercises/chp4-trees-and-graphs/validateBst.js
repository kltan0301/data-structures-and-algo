// Implement a function to check if a binary tree is a binary search tree

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

// Method 1: Adding nodes to an array and checking if they are in the correct order
// let index = 0;

// function copyBST(node, array) {
//   if (!node) { return; }
//   copyBST(node.left, array);
//   array[index] = node.value;
//   index++;
//   copyBST(node.right, array);
// }

// function checkBst(node) {
//   let array = [];
//   copyBST(node, array);
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] <= array[i - 1]) { return false; }
//   }
//   return true;
// }

// Method 2: Getting the maximum value
function checkBst(node, min, max) {
  if (!node) { return true; }
  if (min && node.value <= min || max && node.value >= max) {
    return false;
  }
  if (!checkBst(node.left, min, node.value) || !checkBst(node.right, node.value, max)) {
    return false;
  }
  return true;
}

module.exports = checkBst;