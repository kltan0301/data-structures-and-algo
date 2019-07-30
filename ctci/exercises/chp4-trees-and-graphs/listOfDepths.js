// Given a binary tree, design an algorithm which creates
// a linked list of all the nodes at each depth

const { SinglyLinkedList } = require('../dataStructures/singlyLinkedList.js');

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


module.exports = createLinkedList;