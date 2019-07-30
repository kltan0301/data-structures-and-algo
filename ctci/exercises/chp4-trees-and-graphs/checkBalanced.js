// Implement a function to check if a binary tree is balanced. For the purpose of this question,
// a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ
// by more than one.

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

// Method 1: not efficient, because on each node, we are recursing through the entire subtree
// essentially, we'll be querying a lot of the nodes multiple times
// function getHeight(node) {
//   if (!node) { return 0; }
//   return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
// }

// function isBalanced(node) {
//   if (!node) { return true; }
//   let heightDiff = Math.abs(getHeight(node.left) - getHeight(node.right));
//   if (heightDiff > 1) {
//     return false;
//   } else {
//     return isBalanced(node.right) && isBalanced(node.left);
//   }
// }

// Method 2: Move the height difference check within the checkHeight method
function checkHeight(node) {
  if (!node) { return 0; }

  let leftHeight = checkHeight(node.left);
  if (leftHeight === -1) { return -1; }

  let rightHeight = checkHeight(node.right);
  if (rightHeight === -1) { return -1; }

  let heightDiff = Math.abs(rightHeight - leftHeight);
  if (heightDiff > 1) {
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function isBalanced(node) {
  return checkHeight(node) === -1 ? false : true;
}


module.exports = isBalanced;