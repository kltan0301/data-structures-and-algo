// Given a binary tree, design an algorithm which creates
// a linked list of all the nodes at each depth

const { SinglyLinkedList } = require('../dataStructures/singlyLinkedList.js');

//DFS
function createLevelLinkedList(node, list, level) {
  if (!node) { return; }
  let linkedList = null;

  if (list.length - 1 < level) {
    linkedList = new SinglyLinkedList();
    list[level] = linkedList;
  } else {
    linkedList = list[level];
  }
  linkedList.addToTail(node);
  createLevelLinkedList(node.left, list, level + 1);
  createLevelLinkedList(node.right, list, level + 1);
}

function createLinkedList(root) {
  let linkedListArray = [];
  createLevelLinkedList(root, linkedListArray, 0);
  return linkedListArray;
}

// BFS
// function createLevelLinkedList(root) {
//   let result = [];
//   let current = new SinglyLinkedList();
//   if (root !== null) { current.addToTail(root); }
//   while (!current.isEmpty()) {
//     result.push(current);
//     let parent = current;
//     if (parent.left) { current.addToTail(parent.left) };
//     if (parent.right) { current.addToTail(parent.right) };
//   }
//   return result;
// }

module.exports = createLinkedList;