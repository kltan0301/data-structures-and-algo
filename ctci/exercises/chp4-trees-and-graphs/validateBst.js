// Implement a function to check if a binary tree is a binary search tree

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
  if (!min && node.value <= min || !max && node.value >= max) {
    return false;
  }
  if (!checkBst(node.left, min, node.value) || !checkBst(node.right, node.value, max)) {
    return false;
  }
  return true;
}

module.exports = checkBst;